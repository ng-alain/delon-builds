import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { of, map } from 'rxjs';
import { deepCopy, deepGet } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "@delon/util/format";
import * as i4 from "@angular/platform-browser";
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
    setCog(val) {
        this.cog = val;
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
                    const reName = res.reName;
                    if (typeof reName === 'function') {
                        const fnRes = reName(result, { pi, ps, total });
                        ret = fnRes.list;
                        retTotal = fnRes.total;
                    }
                    else {
                        // list
                        ret = deepGet(result, reName.list, []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        const resultTotal = reName.total && deepGet(result, reName.total, null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                }
                return deepCopy(ret);
            }));
        }
        else if (data == null || Array.isArray(data)) {
            data$ = of(data ?? []);
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
                        if (typeof ngDevMode === 'undefined' || ngDevMode) {
                            console.warn(`[st] Muse provide the fn function in filter`);
                        }
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
                pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage
            };
        }));
    }
    get(item, col, idx) {
        try {
            const safeHtml = col.safeType === 'safeHtml';
            if (col.format) {
                const formatRes = col.format(item, col, idx) || '';
                return {
                    text: formatRes,
                    _text: safeHtml ? this.dom.bypassSecurityTrustHtml(formatRes) : formatRes,
                    org: formatRes,
                    safeType: col.safeType
                };
            }
            const value = deepGet(item, col.index, col.default);
            let text = value;
            let color;
            let tooltip;
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
                    text = this.currencySrv.format(value, col.currency?.format);
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
                        tooltip = dataItem.tooltip;
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
                tooltip,
                safeType: col.safeType,
                buttons: []
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let params = {};
        const reName = req.reName;
        if (paginator) {
            if (req.type === 'page') {
                params = {
                    [reName.pi]: page.zeroIndexed ? pi - 1 : pi,
                    [reName.ps]: ps
                };
            }
            else {
                params = {
                    [reName.skip]: (pi - 1) * ps,
                    [reName.limit]: ps
                };
            }
        }
        params = {
            ...params,
            ...req.params,
            ...this.getReqSortMap(singleSort, multiSort, columns),
            ...this.getReqFilterMap(columns)
        };
        if (options.req.ignoreParamNull == true) {
            Object.keys(params).forEach(key => {
                if (params[key] == null)
                    delete params[key];
            });
        }
        let reqOptions = {
            params,
            body: req.body,
            headers: req.headers
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: { ...req.body, ...params },
                headers: req.headers
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
    getCell(c, item, idx) {
        const onCellResult = typeof c.onCell === 'function' ? c.onCell(item, idx) : null;
        const mergedColSpan = onCellResult?.colSpan ?? 1;
        const mergedRowSpan = onCellResult?.rowSpan ?? 1;
        return {
            colSpan: mergedColSpan <= 0 ? null : mergedColSpan,
            rowSpan: mergedRowSpan <= 0 ? null : mergedRowSpan
        };
    }
    optimizeData(options) {
        const { result, columns, rowClassName } = options;
        for (let i = 0, len = result.length; i < len; i++) {
            result[i]._values = columns.map(c => {
                const props = this.getCell(c, result[i], i);
                if (Array.isArray(c.buttons) && c.buttons.length > 0) {
                    return { buttons: this.genButtons(c.buttons, result[i], c), _text: '', props };
                }
                return { ...this.get(result[i], c, i), props };
            });
            result[i]._rowClassName = [rowClassName ? rowClassName(result[i], i) : null, result[i].className]
                .filter(w => !!w)
                .join(' ');
        }
        return result;
    }
    getNoIndex(item, col, idx) {
        return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex + idx;
    }
    genButtons(_btns, item, col) {
        const fn = (btns) => {
            return deepCopy(btns).filter(btn => {
                const result = typeof btn.iif === 'function' ? btn.iif(item, btn, col) : true;
                const isRenderDisabled = btn.iifBehavior === 'disabled';
                btn._result = result;
                btn._disabled = !result && isRenderDisabled;
                if (btn.children?.length) {
                    btn.children = fn(btn.children);
                }
                return result || isRenderDisabled;
            });
        };
        const res = fn(_btns);
        const fnText = (btns) => {
            for (const btn of btns) {
                btn._text = typeof btn.text === 'function' ? btn.text(item, btn) : btn.text || '';
                btn._className = typeof btn.className === 'function' ? btn.className(item, btn) : btn.className;
                btn._icon = typeof btn.icon === 'function' ? btn.icon(item, btn) : btn.icon;
                if (btn.children?.length) {
                    btn.children = fnText(btn.children);
                }
            }
            return btns;
        };
        return this.fixMaxMultiple(fnText(res), col);
    }
    fixMaxMultiple(btns, col) {
        const curCog = col.maxMultipleButton;
        const btnSize = btns.length;
        if (curCog == null || btnSize <= 0)
            return btns;
        const cog = {
            ...this.cog.maxMultipleButton,
            ...(typeof curCog === 'number' ? { count: curCog } : curCog)
        };
        if (cog.count >= btnSize)
            return btns;
        const newBtns = btns.slice(0, cog.count);
        newBtns.push({ _text: cog.text, children: btns.slice(cog.count) });
        return newBtns;
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
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`[st] Muse provide the compare function in sort`);
            }
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
            const ms = {
                key: 'sort',
                separator: '-',
                nameSeparator: '.',
                keepEmptyKey: true,
                arrayParam: false,
                ...multiSort
            };
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
            ret = { ...ret, ...obj };
        });
        return ret;
    }
    // #endregion
    // #region statistical
    genStatistical(columns, list, rawData) {
        const res = {};
        columns.forEach((col, index) => {
            res[col.key || col.indexKey || index] =
                col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
        });
        return res;
    }
    getStatistical(col, index, list, rawData) {
        const val = col.statistical;
        const item = {
            digits: 2,
            currency: undefined,
            ...(typeof val === 'string' ? { type: val } : val)
        };
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
            res.text = this.currencySrv.format(res.value, col.currency?.format);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STDataSource, deps: [{ token: i1._HttpClient }, { token: i1.DatePipe, host: true }, { token: i1.YNPipe, host: true }, { token: i2.DecimalPipe, host: true }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STDataSource }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STDataSource, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1._HttpClient }, { type: i1.DatePipe, decorators: [{
                    type: Host
                }] }, { type: i1.YNPipe, decorators: [{
                    type: Host
                }] }, { type: i2.DecimalPipe, decorators: [{
                    type: Host
                }] }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQTZEdEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFDVSxJQUFpQixFQUNULFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUF1QixFQUMvQixXQUE0QixFQUM1QixHQUFpQjtRQUxqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBU2xCLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUE0QjtRQUNsQyxJQUFJLEtBQTJCLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZFLElBQUksUUFB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RixDQUFDOzhHQW5nQlUsWUFBWTtrSEFBWixZQUFZOzsyRkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFPTixJQUFJOzswQkFDSixJQUFJOzswQkFDSixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIG1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtbk1heE11bHRpcGxlQnV0dG9uLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNUSWNvbixcbiAgU1RNdWx0aVNvcnQsXG4gIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSxcbiAgU1RPbkNlbGxSZXN1bHQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU29ydE1hcCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4sIF9TVENvbHVtbkJ1dHRvbiwgX1NURGF0YVZhbHVlIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpOiBudW1iZXI7XG4gIHBzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogYm9vbGVhbjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJlcTogU1RSZXE7XG4gIHJlczogU1RSZXM7XG4gIHBhZ2U6IFNUUGFnZTtcbiAgY29sdW1uczogX1NUQ29sdW1uW107XG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsO1xuICBjdXN0b21SZXF1ZXN0PzogKG9wdGlvbnM6IFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMpID0+IE9ic2VydmFibGU8TnpTYWZlQW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q6IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29nITogQWxhaW5TVENvbmZpZztcbiAgcHJpdmF0ZSBzb3J0VGljayA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5blBpcGU6IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyUGlwZTogRGVjaW1hbFBpcGUsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNydjogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHNldENvZyh2YWw6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvZyA9IHZhbDtcbiAgfVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgcGFnaW5hdG9yLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgIGxldCByZXRQczogbnVtYmVyO1xuICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICBsZXQgcmF3RGF0YTogTnpTYWZlQW55O1xuICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgIGRhdGEkID0gdGhpcy5nZXRCeVJlbW90ZShkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgIHJldFBzID0gcmV0VG90YWw7XG4gICAgICAgICAgICBzaG93UGFnZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZU5hbWUgPSByZXMucmVOYW1lITtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZuUmVzID0gcmVOYW1lKHJlc3VsdCwgeyBwaSwgcHMsIHRvdGFsIH0pO1xuICAgICAgICAgICAgICByZXQgPSBmblJlcy5saXN0O1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IGZuUmVzLnRvdGFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgICByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVOYW1lLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9IHJlTmFtZS50b3RhbCAmJiBkZWVwR2V0KHJlc3VsdCwgcmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlZXBDb3B5KHJldCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZGF0YSA9PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEkID0gb2YoZGF0YSA/PyBbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICBkYXRhJCA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAvLyBzb3J0XG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSBkZWVwQ29weShyZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zIGFzIF9TVENvbHVtbltdKTtcbiAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGZpbHRlclxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIpXG4gICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYy5maWx0ZXIhO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGlmIChwYWdpbmF0b3IgJiYgcGFnZS5mcm9udCkge1xuICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBwcmUtcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzIShyZXN1bHQsIHJhd0RhdGEpKSk7XG4gICAgfVxuXG4gICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gdGhpcy5vcHRpbWl6ZURhdGEoeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZTogb3B0aW9ucy5yb3dDbGFzc05hbWUgfSkpKTtcblxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldExpc3QgPSByZXN1bHQ7XG4gICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICBjb25zdCByZWFsUHMgPSByZXRQcyB8fCBwcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICBwczogcmV0UHMsXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgc3RhdGlzdGljYWw6IHRoaXMuZ2VuU3RhdGlzdGljYWwoY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwgcmV0TGlzdCwgcmF3RGF0YSksXG4gICAgICAgICAgcGFnZVNob3c6IHR5cGVvZiBzaG93UGFnZSA9PT0gJ3VuZGVmaW5lZCcgPyByZWFsVG90YWwgPiByZWFsUHMgOiBzaG93UGFnZVxuICAgICAgICB9IGFzIFNURGF0YVNvdXJjZVJlc3VsdDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogX1NURGF0YVZhbHVlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2FmZUh0bWwgPSBjb2wuc2FmZVR5cGUgPT09ICdzYWZlSHRtbCc7XG4gICAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaWR4KSB8fCAnJztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiBmb3JtYXRSZXMsXG4gICAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSA6IGZvcm1hdFJlcyxcbiAgICAgICAgICBvcmc6IGZvcm1hdFJlcyxcbiAgICAgICAgICBzYWZlVHlwZTogY29sLnNhZmVUeXBlIVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgICBsZXQgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGxldCB0b29sdGlwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5nZXROb0luZGV4KGl0ZW0sIGNvbCwgaWR4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIHRleHQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmN1cnJlbmN5U3J2LmZvcm1hdCh2YWx1ZSwgY29sLmN1cnJlbmN5Py5mb3JtYXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUgPT09IGNvbC5kZWZhdWx0ID8gY29sLmRlZmF1bHQgOiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgdGV4dCA9IHRoaXMueW5QaXBlLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluIS50cnV0aCwgY29sLnluIS55ZXMhLCBjb2wueW4hLm5vISwgY29sLnluIS5tb2RlISwgZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICB0ZXh0ID0gY29sLmVudW0hW3ZhbHVlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2wudHlwZSA9PT0gJ3RhZycgPyBjb2wudGFnIDogY29sLmJhZGdlO1xuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGFbdGV4dF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJdGVtID0gZGF0YVt0ZXh0XTtcbiAgICAgICAgICAgIHRleHQgPSBkYXRhSXRlbS50ZXh0O1xuICAgICAgICAgICAgY29sb3IgPSBkYXRhSXRlbS5jb2xvcjtcbiAgICAgICAgICAgIHRvb2x0aXAgPSBkYXRhSXRlbS50b29sdGlwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQgPT0gbnVsbCkgdGV4dCA9ICcnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCkgOiB0ZXh0LFxuICAgICAgICBvcmc6IHZhbHVlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgdG9vbHRpcCxcbiAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSEsXG4gICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYElOVkFMSUQgREFUQWA7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGRhdGFgLCBpdGVtLCBjb2wsIGV4KTtcbiAgICAgIHJldHVybiB7IHRleHQsIF90ZXh0OiB0ZXh0LCBvcmc6IHRleHQsIGJ1dHRvbnM6IFtdLCBzYWZlVHlwZTogJ3RleHQnIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeVJlbW90ZSh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwYWdpbmF0b3IsIHBpLCBwcywgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHBhcmFtczogeyBbcGFyYW06IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHBhZ2luYXRvcikge1xuICAgICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHNcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnNraXAgYXMgc3RyaW5nXTogKHBpIC0gMSkgKiBwcyxcbiAgICAgICAgICBbcmVOYW1lLmxpbWl0IGFzIHN0cmluZ106IHBzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpXG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5yZXEuaWdub3JlUGFyYW1OdWxsID09IHRydWUpIHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlcU9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKHJlcU9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgIHJlcU9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiByZXFPcHRpb25zLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmN1c3RvbVJlcXVlc3QoeyBtZXRob2QsIHVybCwgb3B0aW9uczogcmVxT3B0aW9ucyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIGdldENlbGwoYzogU1RDb2x1bW4sIGl0ZW06IFNURGF0YSwgaWR4OiBudW1iZXIpOiBTVE9uQ2VsbFJlc3VsdCB7XG4gICAgY29uc3Qgb25DZWxsUmVzdWx0ID0gdHlwZW9mIGMub25DZWxsID09PSAnZnVuY3Rpb24nID8gYy5vbkNlbGwoaXRlbSwgaWR4KSA6IG51bGw7XG4gICAgY29uc3QgbWVyZ2VkQ29sU3BhbiA9IG9uQ2VsbFJlc3VsdD8uY29sU3BhbiA/PyAxO1xuICAgIGNvbnN0IG1lcmdlZFJvd1NwYW4gPSBvbkNlbGxSZXN1bHQ/LnJvd1NwYW4gPz8gMTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sU3BhbjogbWVyZ2VkQ29sU3BhbiA8PSAwID8gbnVsbCA6IG1lcmdlZENvbFNwYW4sXG4gICAgICByb3dTcGFuOiBtZXJnZWRSb3dTcGFuIDw9IDAgPyBudWxsIDogbWVyZ2VkUm93U3BhblxuICAgIH0gYXMgU1RPbkNlbGxSZXN1bHQ7XG4gIH1cblxuICBvcHRpbWl6ZURhdGEob3B0aW9uczogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgcmVzdWx0OiBTVERhdGFbXTsgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsIH0pOiBTVERhdGFbXSB7XG4gICAgY29uc3QgeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZSB9ID0gb3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0Q2VsbChjLCByZXN1bHRbaV0sIGkpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGMuYnV0dG9ucykgJiYgYy5idXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4geyBidXR0b25zOiB0aGlzLmdlbkJ1dHRvbnMoYy5idXR0b25zLCByZXN1bHRbaV0sIGMpLCBfdGV4dDogJycsIHByb3BzIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi50aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpLCBwcm9wcyB9O1xuICAgICAgfSk7XG4gICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IFtyb3dDbGFzc05hbWUgPyByb3dDbGFzc05hbWUocmVzdWx0W2ldLCBpKSA6IG51bGwsIHJlc3VsdFtpXS5jbGFzc05hbWVdXG4gICAgICAgIC5maWx0ZXIodyA9PiAhIXcpXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXROb0luZGV4KGl0ZW06IFNURGF0YSwgY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbC5ub0luZGV4ID09PSAnZnVuY3Rpb24nID8gY29sLm5vSW5kZXgoaXRlbSwgY29sLCBpZHgpIDogY29sLm5vSW5kZXghICsgaWR4O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5CdXR0b25zKF9idG5zOiBfU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogX1NUQ29sdW1uQnV0dG9uW10ge1xuICAgIGNvbnN0IGZuID0gKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdKTogX1NUQ29sdW1uQnV0dG9uW10gPT4ge1xuICAgICAgcmV0dXJuIGRlZXBDb3B5KGJ0bnMpLmZpbHRlcihidG4gPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0eXBlb2YgYnRuLmlpZiA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi5paWYoaXRlbSwgYnRuLCBjb2wpIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGJ0bi5fZGlzYWJsZWQgPSAhcmVzdWx0ICYmIGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgICAgIGlmIChidG4uY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIGJ0bi5jaGlsZHJlbiA9IGZuKGJ0bi5jaGlsZHJlbiEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBmbihfYnRucyk7XG5cbiAgICBjb25zdCBmblRleHQgPSAoYnRuczogX1NUQ29sdW1uQnV0dG9uW10pOiBfU1RDb2x1bW5CdXR0b25bXSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XG4gICAgICAgIGJ0bi5fdGV4dCA9IHR5cGVvZiBidG4udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi50ZXh0KGl0ZW0sIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgICAgICAgYnRuLl9jbGFzc05hbWUgPSB0eXBlb2YgYnRuLmNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi5jbGFzc05hbWUoaXRlbSwgYnRuKSA6IGJ0bi5jbGFzc05hbWU7XG4gICAgICAgIGJ0bi5faWNvbiA9IHR5cGVvZiBidG4uaWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi5pY29uKGl0ZW0sIGJ0bikgOiAoYnRuLmljb24gYXMgU1RJY29uKTtcbiAgICAgICAgaWYgKGJ0bi5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgYnRuLmNoaWxkcmVuID0gZm5UZXh0KGJ0bi5jaGlsZHJlbiEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYnRucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZml4TWF4TXVsdGlwbGUoZm5UZXh0KHJlcyksIGNvbCk7XG4gIH1cblxuICBwcml2YXRlIGZpeE1heE11bHRpcGxlKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdLCBjb2w6IFNUQ29sdW1uKTogX1NUQ29sdW1uQnV0dG9uW10ge1xuICAgIGNvbnN0IGN1ckNvZyA9IGNvbC5tYXhNdWx0aXBsZUJ1dHRvbjtcbiAgICBjb25zdCBidG5TaXplID0gYnRucy5sZW5ndGg7XG4gICAgaWYgKGN1ckNvZyA9PSBudWxsIHx8IGJ0blNpemUgPD0gMCkgcmV0dXJuIGJ0bnM7XG5cbiAgICBjb25zdCBjb2c6IFNUQ29sdW1uTWF4TXVsdGlwbGVCdXR0b24gPSB7XG4gICAgICAuLi50aGlzLmNvZy5tYXhNdWx0aXBsZUJ1dHRvbixcbiAgICAgIC4uLih0eXBlb2YgY3VyQ29nID09PSAnbnVtYmVyJyA/IHsgY291bnQ6IGN1ckNvZyB9IDogY3VyQ29nKVxuICAgIH07XG5cbiAgICBpZiAoY29nLmNvdW50ISA+PSBidG5TaXplKSByZXR1cm4gYnRucztcblxuICAgIGNvbnN0IG5ld0J0bnM6IF9TVENvbHVtbkJ1dHRvbltdID0gYnRucy5zbGljZSgwLCBjb2cuY291bnQpO1xuICAgIG5ld0J0bnMucHVzaCh7IF90ZXh0OiBjb2cudGV4dCwgY2hpbGRyZW46IGJ0bnMuc2xpY2UoY29nLmNvdW50KSB9KTtcbiAgICByZXR1cm4gbmV3QnRucztcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IF9TVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCB2b2lkIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc29ydEl0ZW0gPSBzb3J0TGlzdFswXTtcbiAgICBpZiAoc29ydEl0ZW0uY29tcGFyZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRJdGVtLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydEl0ZW0uY29tcGFyZSEoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0SXRlbS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBuZXh0U29ydFRpY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLnNvcnRUaWNrO1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQgfCB1bmRlZmluZWQsXG4gICAgY29sdW1uczogX1NUQ29sdW1uW11cbiAgKTogU1RNdWx0aVNvcnRSZXN1bHRUeXBlIHtcbiAgICBsZXQgcmV0OiBTVE11bHRpU29ydFJlc3VsdFR5cGUgPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgY29uc3QgbXM6IFNUTXVsdGlTb3J0ID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAga2VlcEVtcHR5S2V5OiB0cnVlLFxuICAgICAgICBhcnJheVBhcmFtOiBmYWxzZSxcbiAgICAgICAgLi4ubXVsdGlTb3J0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzb3J0TWFwID0gc29ydExpc3RcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5ISArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKTtcblxuICAgICAgcmV0ID0geyBbbXMua2V5IV06IG1zLmFycmF5UGFyYW0gPyBzb3J0TWFwIDogc29ydE1hcC5qb2luKG1zLnNlcGFyYXRvcikgfTtcblxuICAgICAgcmV0dXJuIHNvcnRNYXAubGVuZ3RoID09PSAwICYmIG1zLmtlZXBFbXB0eUtleSA9PT0gZmFsc2UgPyB7fSA6IHJldDtcbiAgICB9XG5cbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgfVxuICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0RmlsdGVyZWREYXRhKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiBTVENvbHVtbkZpbHRlck1lbnVbXSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogX1NUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb2wuZmlsdGVyITtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgbGV0IG9iajogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBfU1RDb2x1bW5bXSwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgICBjb25zdCByZXM6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJlc1tjb2wua2V5IHx8IGNvbC5pbmRleEtleSB8fCBpbmRleF0gPVxuICAgICAgICBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IF9TVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKVxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQocmVzLnZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=