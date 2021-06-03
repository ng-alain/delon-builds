import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe, YNPipe, _HttpClient } from '@delon/theme';
import { CurrencyService } from '@delon/util/format';
import { deepCopy, deepGet } from '@delon/util/other';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
export class STDataSource {
    constructor(http, datePipe, ynPipe, numberPipe, currencySrv, dom) {
        this.http = http;
        this.datePipe = datePipe;
        this.ynPipe = ynPipe;
        this.numberPipe = numberPipe;
        this.currencySrv = currencySrv;
        this.dom = dom;
        this.sortTick = 0;
    }
    process(options) {
        let data$;
        let isRemote = false;
        const { data, res, total, page, pi, ps, paginator, columns } = options;
        let retTotal;
        let retPs;
        let retList;
        let retPi;
        let rawData;
        let showPage = page.show;
        if (typeof data === 'string') {
            isRemote = true;
            data$ = this.getByRemote(data, options).pipe(map(result => {
                rawData = result;
                let ret;
                if (Array.isArray(result)) {
                    ret = result;
                    retTotal = ret.length;
                    retPs = retTotal;
                    showPage = false;
                }
                else {
                    // list
                    ret = deepGet(result, res.reName.list, []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    // total
                    const resultTotal = res.reName.total && deepGet(result, res.reName.total, null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                }
                return deepCopy(ret);
            }));
        }
        else if (Array.isArray(data)) {
            data$ = of(data);
        }
        else {
            // a cold observable
            data$ = data;
        }
        if (!isRemote) {
            data$ = data$.pipe(
            // sort
            map((result) => {
                rawData = result;
                let copyResult = deepCopy(result);
                const sorterFn = this.getSorterFn(columns);
                if (sorterFn) {
                    copyResult = copyResult.sort(sorterFn);
                }
                return copyResult;
            }), 
            // filter
            map((result) => {
                columns
                    .filter(w => w.filter)
                    .forEach(c => {
                    const filter = c.filter;
                    const values = this.getFilteredData(filter);
                    if (values.length === 0)
                        return;
                    const onFilter = filter.fn;
                    if (typeof onFilter !== 'function') {
                        console.warn(`[st] Muse provide the fn function in filter`);
                        return;
                    }
                    result = result.filter(record => values.some(v => onFilter(v, record)));
                });
                return result;
            }), 
            // paging
            map((result) => {
                if (paginator && page.front) {
                    const maxPageIndex = Math.ceil(result.length / ps);
                    retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                    retTotal = result.length;
                    if (page.show === true) {
                        return result.slice((retPi - 1) * ps, retPi * ps);
                    }
                }
                return result;
            }));
        }
        // pre-process
        if (typeof res.process === 'function') {
            data$ = data$.pipe(map(result => res.process(result, rawData)));
        }
        data$ = data$.pipe(map(result => this.optimizeData({ result, columns, rowClassName: options.rowClassName })));
        return data$.pipe(map(result => {
            retList = result;
            const realTotal = retTotal || total;
            const realPs = retPs || ps;
            return {
                pi: retPi,
                ps: retPs,
                total: retTotal,
                list: retList,
                statistical: this.genStatistical(columns, retList, rawData),
                pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
            };
        }));
    }
    get(item, col, idx) {
        var _a;
        try {
            const safeHtml = col.safeType === 'safeHtml';
            if (col.format) {
                const formatRes = col.format(item, col, idx) || '';
                return {
                    text: formatRes,
                    _text: safeHtml ? this.dom.bypassSecurityTrustHtml(formatRes) : formatRes,
                    org: formatRes,
                    safeType: col.safeType,
                };
            }
            const value = deepGet(item, col.index, col.default);
            let text = value;
            let color;
            switch (col.type) {
                case 'no':
                    text = this.getNoIndex(item, col, idx);
                    break;
                case 'img':
                    text = value ? `<img src="${value}" class="img">` : '';
                    break;
                case 'number':
                    text = this.numberPipe.transform(value, col.numberDigits);
                    break;
                case 'currency':
                    text = this.currencySrv.format(value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
                    break;
                case 'date':
                    text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                    break;
                case 'yn':
                    text = this.ynPipe.transform(value === col.yn.truth, col.yn.yes, col.yn.no, col.yn.mode, false);
                    break;
                case 'enum':
                    text = col.enum[value];
                    break;
                case 'tag':
                case 'badge':
                    const data = col.type === 'tag' ? col.tag : col.badge;
                    if (data && data[text]) {
                        const dataItem = data[text];
                        text = dataItem.text;
                        color = dataItem.color;
                    }
                    else {
                        text = '';
                    }
                    break;
            }
            if (text == null)
                text = '';
            return {
                text,
                _text: safeHtml ? this.dom.bypassSecurityTrustHtml(text) : text,
                org: value,
                color,
                safeType: col.safeType,
                buttons: [],
            };
        }
        catch (ex) {
            const text = `INVALID DATA`;
            console.error(`Failed to get data`, item, col, ex);
            return { text, _text: text, org: text, buttons: [], safeType: 'text' };
        }
    }
    getByRemote(url, options) {
        const { req, page, paginator, pi, ps, singleSort, multiSort, columns } = options;
        const method = (req.method || 'GET').toUpperCase();
        let params = {};
        const reName = req.reName;
        if (paginator) {
            if (req.type === 'page') {
                params = {
                    [reName.pi]: page.zeroIndexed ? pi - 1 : pi,
                    [reName.ps]: ps,
                };
            }
            else {
                params = {
                    [reName.skip]: (pi - 1) * ps,
                    [reName.limit]: ps,
                };
            }
        }
        params = Object.assign(Object.assign(Object.assign(Object.assign({}, params), req.params), this.getReqSortMap(singleSort, multiSort, columns)), this.getReqFilterMap(columns));
        let reqOptions = {
            params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign(Object.assign({}, req.body), params),
                headers: req.headers,
            };
        }
        if (typeof req.process === 'function') {
            reqOptions = req.process(reqOptions);
        }
        if (!(reqOptions.params instanceof HttpParams)) {
            reqOptions.params = new HttpParams({ fromObject: reqOptions.params });
        }
        if (typeof options.customRequest === 'function') {
            return options.customRequest({ method, url, options: reqOptions });
        }
        return this.http.request(method, url, reqOptions);
    }
    optimizeData(options) {
        const { result, columns, rowClassName } = options;
        for (let i = 0, len = result.length; i < len; i++) {
            result[i]._values = columns.map(c => {
                if (Array.isArray(c.buttons) && c.buttons.length > 0) {
                    return { buttons: this.genButtons(c.buttons, result[i], c) };
                }
                return this.get(result[i], c, i);
            });
            if (rowClassName) {
                result[i]._rowClassName = rowClassName(result[i], i);
            }
        }
        return result;
    }
    getNoIndex(item, col, idx) {
        return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex + idx;
    }
    genButtons(_btns, item, col) {
        const fn = (btns) => {
            return deepCopy(btns).filter(btn => {
                const result = btn.iif(item, btn, col);
                const isRenderDisabled = btn.iifBehavior === 'disabled';
                btn._result = result;
                btn._disabled = !result && isRenderDisabled;
                if (btn.children.length > 0) {
                    btn.children = fn(btn.children);
                }
                delete btn.iif;
                return result || isRenderDisabled;
            });
        };
        const res = fn(_btns);
        const fnText = (btns) => {
            for (const btn of btns) {
                btn._text = typeof btn.text === 'function' ? btn.text(item, btn) : btn.text || '';
                if (btn.children.length > 0) {
                    btn.children = fnText(btn.children);
                }
            }
            return btns;
        };
        return fnText(res);
    }
    // #region sort
    getValidSort(columns) {
        return columns.filter(item => item._sort && item._sort.enabled && item._sort.default).map(item => item._sort);
    }
    getSorterFn(columns) {
        const sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        const sortItem = sortList[0];
        if (sortItem.compare === null) {
            return;
        }
        if (typeof sortItem.compare !== 'function') {
            console.warn(`[st] Muse provide the compare function in sort`);
            return;
        }
        return (a, b) => {
            const result = sortItem.compare(a, b);
            if (result !== 0) {
                return sortItem.default === 'descend' ? -result : result;
            }
            return 0;
        };
    }
    get nextSortTick() {
        return ++this.sortTick;
    }
    getReqSortMap(singleSort, multiSort, columns) {
        let ret = {};
        const sortList = this.getValidSort(columns);
        if (multiSort) {
            const ms = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.', keepEmptyKey: true, arrayParam: false }, multiSort);
            const sortMap = sortList
                .sort((a, b) => a.tick - b.tick)
                .map(item => item.key + ms.nameSeparator + ((item.reName || {})[item.default] || item.default));
            ret = { [ms.key]: ms.arrayParam ? sortMap : sortMap.join(ms.separator) };
            return sortMap.length === 0 && ms.keepEmptyKey === false ? {} : ret;
        }
        if (sortList.length === 0)
            return ret;
        const mapData = sortList[0];
        let sortFiled = mapData.key;
        let sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
        if (singleSort) {
            sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
            sortFiled = singleSort.key || 'sort';
        }
        ret[sortFiled] = sortValue;
        return ret;
    }
    // #endregion
    // #region filter
    getFilteredData(filter) {
        return filter.type === 'default' ? filter.menus.filter(f => f.checked === true) : filter.menus.slice(0, 1);
    }
    getReqFilterMap(columns) {
        let ret = {};
        columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            const filter = col.filter;
            const values = this.getFilteredData(filter);
            let obj = {};
            if (filter.reName) {
                obj = filter.reName(filter.menus, col);
            }
            else {
                obj[filter.key] = values.map(i => i.value).join(',');
            }
            ret = Object.assign(Object.assign({}, ret), obj);
        });
        return ret;
    }
    // #endregion
    // #region statistical
    genStatistical(columns, list, rawData) {
        const res = {};
        columns.forEach((col, index) => {
            res[col.key || col.indexKey || index] = col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
        });
        return res;
    }
    getStatistical(col, index, list, rawData) {
        var _a;
        const val = col.statistical;
        const item = Object.assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: val } : val));
        let res = { value: 0 };
        let currency = false;
        if (typeof item.type === 'function') {
            res = item.type(this.getValues(index, list), col, list, rawData);
            currency = true;
        }
        else {
            switch (item.type) {
                case 'count':
                    res.value = list.length;
                    break;
                case 'distinctCount':
                    res.value = this.getValues(index, list).filter((value, idx, self) => self.indexOf(value) === idx).length;
                    break;
                case 'sum':
                    res.value = this.toFixed(this.getSum(index, list), item.digits);
                    currency = true;
                    break;
                case 'average':
                    res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits);
                    currency = true;
                    break;
                case 'max':
                    res.value = Math.max(...this.getValues(index, list));
                    currency = true;
                    break;
                case 'min':
                    res.value = Math.min(...this.getValues(index, list));
                    currency = true;
                    break;
            }
        }
        if (item.currency === true || (item.currency == null && currency === true)) {
            res.text = this.currencySrv.format(res.value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
        }
        else {
            res.text = String(res.value);
        }
        return res;
    }
    toFixed(val, digits) {
        if (isNaN(val) || !isFinite(val)) {
            return 0;
        }
        return parseFloat(val.toFixed(digits));
    }
    getValues(index, list) {
        return list.map(i => i._values[index].org).map(i => (i === '' || i == null ? 0 : i));
    }
    getSum(index, list) {
        return this.getValues(index, list).reduce((p, i) => (p += parseFloat(String(i))), 0);
    }
}
STDataSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STDataSource.ctorParameters = () => [
    { type: _HttpClient },
    { type: DatePipe, decorators: [{ type: Host }] },
    { type: YNPipe, decorators: [{ type: Host }] },
    { type: DecimalPipe, decorators: [{ type: Host }] },
    { type: CurrencyService },
    { type: DomSanitizer }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBd0RyQyxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUNVLElBQWlCLEVBQ1QsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXVCLEVBQy9CLFdBQTRCLEVBQzVCLEdBQWlCO1FBTGpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBUm5CLGFBQVEsR0FBRyxDQUFDLENBQUM7SUFTbEIsQ0FBQztJQUVKLE9BQU8sQ0FBQyxPQUE0QjtRQUNsQyxJQUFJLEtBQTJCLENBQUM7UUFDaEMs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QyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFTyxNQUFNLENBQUMsS0FBYSxFQUFFLElBQWM7UUFDMUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUF4Y0YsVUFBVTs7OztZQTVEZ0IsV0FBVztZQUE3QixRQUFRLHVCQWtFWixJQUFJO1lBbEVVLE1BQU0sdUJBbUVwQixJQUFJO1lBdkVBLFdBQVcsdUJBd0VmLElBQUk7WUFuRUEsZUFBZTtZQUZmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSG9zdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVE11bHRpU29ydFJlc3VsdFR5cGUsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU29ydE1hcCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlLFxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uLCBfU1RDb2x1bW5CdXR0b24sIF9TVERhdGFWYWx1ZSB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaTogbnVtYmVyO1xuICBwczogbnVtYmVyO1xuICBwYWdpbmF0b3I6IGJvb2xlYW47XG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJlcTogU1RSZXE7XG4gIHJlczogU1RSZXM7XG4gIHBhZ2U6IFNUUGFnZTtcbiAgY29sdW1uczogX1NUQ29sdW1uW107XG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQ7XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbiAgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaTogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0OiBTVERhdGFbXTtcbiAgLyoqIOe7n+iuoeaVsOaNriAqL1xuICBzdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNvcnRUaWNrID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5U3J2OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgcGFnaW5hdG9yLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgIGxldCByZXRQczogbnVtYmVyO1xuICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICBsZXQgcmF3RGF0YTogYW55O1xuICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgIGRhdGEkID0gdGhpcy5nZXRCeVJlbW90ZShkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgIHJldFBzID0gcmV0VG90YWw7XG4gICAgICAgICAgICBzaG93UGFnZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPSByZXMucmVOYW1lIS50b3RhbCAmJiBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlZXBDb3B5KHJldCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICBkYXRhJCA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAvLyBzb3J0XG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSBkZWVwQ29weShyZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zIGFzIF9TVENvbHVtbltdKTtcbiAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGZpbHRlclxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIpXG4gICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYy5maWx0ZXIhO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PiB2YWx1ZXMuc29tZSh2ID0+IG9uRmlsdGVyKHYsIHJlY29yZCkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgaWYgKHBhZ2luYXRvciAmJiBwYWdlLmZyb250KSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgIHJldFBpID0gTWF0aC5tYXgoMSwgcGkgPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiBwaSk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoKHJldFBpIC0gMSkgKiBwcywgcmV0UGkgKiBwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBwcmUtcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzIShyZXN1bHQsIHJhd0RhdGEpKSk7XG4gICAgfVxuXG4gICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gdGhpcy5vcHRpbWl6ZURhdGEoeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZTogb3B0aW9ucy5yb3dDbGFzc05hbWUgfSkpKTtcblxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldExpc3QgPSByZXN1bHQ7XG4gICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICBjb25zdCByZWFsUHMgPSByZXRQcyB8fCBwcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICBwczogcmV0UHMsXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgc3RhdGlzdGljYWw6IHRoaXMuZ2VuU3RhdGlzdGljYWwoY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwgcmV0TGlzdCwgcmF3RGF0YSksXG4gICAgICAgICAgcGFnZVNob3c6IHR5cGVvZiBzaG93UGFnZSA9PT0gJ3VuZGVmaW5lZCcgPyByZWFsVG90YWwgPiByZWFsUHMgOiBzaG93UGFnZSxcbiAgICAgICAgfSBhcyBTVERhdGFTb3VyY2VSZXN1bHQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogU1REYXRhLCBjb2w6IF9TVENvbHVtbiwgaWR4OiBudW1iZXIpOiBfU1REYXRhVmFsdWUge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzYWZlSHRtbCA9IGNvbC5zYWZlVHlwZSA9PT0gJ3NhZmVIdG1sJztcbiAgICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpZHgpIHx8ICcnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IGZvcm1hdFJlcyxcbiAgICAgICAgICBfdGV4dDogc2FmZUh0bWwgPyB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpIDogZm9ybWF0UmVzLFxuICAgICAgICAgIG9yZzogZm9ybWF0UmVzLFxuICAgICAgICAgIHNhZmVUeXBlOiBjb2wuc2FmZVR5cGUhLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgICBsZXQgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbm8nOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmdldE5vSW5kZXgoaXRlbSwgY29sLCBpZHgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5udW1iZXJEaWdpdHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMuY3VycmVuY3lTcnYuZm9ybWF0KHZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZSA9PT0gY29sLmRlZmF1bHQgPyBjb2wuZGVmYXVsdCA6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4hLnRydXRoLCBjb2wueW4hLnllcyEsIGNvbC55biEubm8hLCBjb2wueW4hLm1vZGUhLCBmYWxzZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgIHRleHQgPSBjb2wuZW51bSFbdmFsdWVdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICBjYXNlICdiYWRnZSc6XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGNvbC50eXBlID09PSAndGFnJyA/IGNvbC50YWcgOiBjb2wuYmFkZ2U7XG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YVt0ZXh0XSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YUl0ZW0gPSBkYXRhW3RleHRdO1xuICAgICAgICAgICAgdGV4dCA9IGRhdGFJdGVtLnRleHQ7XG4gICAgICAgICAgICBjb2xvciA9IGRhdGFJdGVtLmNvbG9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQgPT0gbnVsbCkgdGV4dCA9ICcnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCkgOiB0ZXh0LFxuICAgICAgICBvcmc6IHZhbHVlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSEsXG4gICAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc3QgdGV4dCA9IGBJTlZBTElEIERBVEFgO1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBkYXRhYCwgaXRlbSwgY29sLCBleCk7XG4gICAgICByZXR1cm4geyB0ZXh0LCBfdGV4dDogdGV4dCwgb3JnOiB0ZXh0LCBidXR0b25zOiBbXSwgc2FmZVR5cGU6ICd0ZXh0JyB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSZW1vdGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBhZ2luYXRvciwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHJlTmFtZSA9IHJlcS5yZU5hbWUgYXMgU1RSZXFSZU5hbWVUeXBlO1xuICAgIGlmIChwYWdpbmF0b3IpIHtcbiAgICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnBpIGFzIHN0cmluZ106IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgICBbcmVOYW1lLnBzIGFzIHN0cmluZ106IHBzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUuc2tpcCBhcyBzdHJpbmddOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICAgIFtyZU5hbWUubGltaXQgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgIH07XG5cbiAgICBsZXQgcmVxT3B0aW9uczogU1RSZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXEucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxT3B0aW9ucyA9IHJlcS5wcm9jZXNzKHJlcU9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIShyZXFPcHRpb25zLnBhcmFtcyBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpKSB7XG4gICAgICByZXFPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcmVxT3B0aW9ucy5wYXJhbXMgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jdXN0b21SZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jdXN0b21SZXF1ZXN0KHsgbWV0aG9kLCB1cmwsIG9wdGlvbnM6IHJlcU9wdGlvbnMgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICBvcHRpbWl6ZURhdGEob3B0aW9uczogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgcmVzdWx0OiBTVERhdGFbXTsgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfSk6IFNURGF0YVtdIHtcbiAgICBjb25zdCB7IHJlc3VsdCwgY29sdW1ucywgcm93Q2xhc3NOYW1lIH0gPSBvcHRpb25zO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGMuYnV0dG9ucykgJiYgYy5idXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4geyBidXR0b25zOiB0aGlzLmdlbkJ1dHRvbnMoYy5idXR0b25zLCByZXN1bHRbaV0sIGMpIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVzdWx0W2ldLCBjLCBpKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHJvd0NsYXNzTmFtZSkge1xuICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnV0dG9ucyhfYnRuczogX1NUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IF9TVENvbHVtbkJ1dHRvbltdIHtcbiAgICBjb25zdCBmbiA9IChidG5zOiBfU1RDb2x1bW5CdXR0b25bXSk6IF9TVENvbHVtbkJ1dHRvbltdID0+IHtcbiAgICAgIHJldHVybiBkZWVwQ29weShidG5zKS5maWx0ZXIoYnRuID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpO1xuICAgICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgICBidG4uX3Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgICAgaWYgKGJ0bi5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGJ0bi5jaGlsZHJlbiA9IGZuKGJ0bi5jaGlsZHJlbiEpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBidG4uaWlmO1xuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gZm4oX2J0bnMpO1xuXG4gICAgY29uc3QgZm5UZXh0ID0gKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdKTogX1NUQ29sdW1uQnV0dG9uW10gPT4ge1xuICAgICAgZm9yIChjb25zdCBidG4gb2YgYnRucykge1xuICAgICAgICBidG4uX3RleHQgPSB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChpdGVtLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gICAgICAgIGlmIChidG4uY2hpbGRyZW4hLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBidG4uY2hpbGRyZW4gPSBmblRleHQoYnRuLmNoaWxkcmVuISk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidG5zO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm5UZXh0KHJlcyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogX1NUQ29sdW1uW10pOiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgdm9pZCB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvcnRJdGVtID0gc29ydExpc3RbMF07XG4gICAgaWYgKHNvcnRJdGVtLmNvbXBhcmUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0SXRlbS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0SXRlbS5jb21wYXJlIShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRJdGVtLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG5leHRTb3J0VGljaygpOiBudW1iZXIge1xuICAgIHJldHVybiArK3RoaXMuc29ydFRpY2s7XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCB8IHVuZGVmaW5lZCwgbXVsdGlTb3J0OiBTVE11bHRpU29ydCB8IHVuZGVmaW5lZCwgY29sdW1uczogX1NUQ29sdW1uW10pOiBTVE11bHRpU29ydFJlc3VsdFR5cGUge1xuICAgIGxldCByZXQ6IFNUTXVsdGlTb3J0UmVzdWx0VHlwZSA9IHt9O1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBjb25zdCBtczogU1RNdWx0aVNvcnQgPSB7XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgICBrZWVwRW1wdHlLZXk6IHRydWUsXG4gICAgICAgIGFycmF5UGFyYW06IGZhbHNlLFxuICAgICAgICAuLi5tdWx0aVNvcnQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzb3J0TWFwID0gc29ydExpc3RcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5ISArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKTtcblxuICAgICAgcmV0ID0geyBbbXMua2V5IV06IG1zLmFycmF5UGFyYW0gPyBzb3J0TWFwIDogc29ydE1hcC5qb2luKG1zLnNlcGFyYXRvcikgfTtcblxuICAgICAgcmV0dXJuIHNvcnRNYXAubGVuZ3RoID09PSAwICYmIG1zLmtlZXBFbXB0eUtleSA9PT0gZmFsc2UgPyB7fSA6IHJldDtcbiAgICB9XG5cbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgfVxuICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0RmlsdGVyZWREYXRhKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiBTVENvbHVtbkZpbHRlck1lbnVbXSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogX1NUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb2wuZmlsdGVyITtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgbGV0IG9iajogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBfU1RDb2x1bW5bXSwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IGFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgICBjb25zdCByZXM6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJlc1tjb2wua2V5IHx8IGNvbC5pbmRleEtleSB8fCBpbmRleF0gPSBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IF9TVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IGFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKSxcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbmN5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5tYXgoLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5taW4oLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtLmN1cnJlbmN5ID09PSB0cnVlIHx8IChpdGVtLmN1cnJlbmN5ID09IG51bGwgJiYgY3VycmVuY3kgPT09IHRydWUpKSB7XG4gICAgICByZXMudGV4dCA9IHRoaXMuY3VycmVuY3lTcnYuZm9ybWF0KHJlcy52YWx1ZSwgY29sLmN1cnJlbmN5Py5mb3JtYXQpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gKGkgPT09ICcnIHx8IGkgPT0gbnVsbCA/IDAgOiBpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN1bShpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5yZWR1Y2UoKHAsIGkpID0+IChwICs9IHBhcnNlRmxvYXQoU3RyaW5nKGkpKSksIDApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19