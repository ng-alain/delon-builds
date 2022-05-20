import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    optimizeData(options) {
        const { result, columns, rowClassName } = options;
        for (let i = 0, len = result.length; i < len; i++) {
            result[i]._values = columns.map(c => {
                if (Array.isArray(c.buttons) && c.buttons.length > 0) {
                    return { buttons: this.genButtons(c.buttons, result[i], c), _text: '' };
                }
                return this.get(result[i], c, i);
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
}
STDataSource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: STDataSource, deps: [{ token: i1._HttpClient }, { token: i1.DatePipe, host: true }, { token: i1.YNPipe, host: true }, { token: i2.DecimalPipe, host: true }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable });
STDataSource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: STDataSource });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: STDataSource, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1._HttpClient }, { type: i1.DatePipe, decorators: [{
                    type: Host
                }] }, { type: i1.YNPipe, decorators: [{
                    type: Host
                }] }, { type: i2.DecimalPipe, decorators: [{
                    type: Host
                }] }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQTJEdEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFDVSxJQUFpQixFQUNULFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUF1QixFQUMvQixXQUE0QixFQUM1QixHQUFpQjtRQUxqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBU2xCLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUE0QjtRQUNsQyxJQUFJLEtBQTJCLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxF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RSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFjO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7eUdBcmVVLFlBQVk7NkdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFPTixJQUFJOzswQkFDSixJQUFJOzswQkFDSixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0ZVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHR5cGUgeyBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uTWF4TXVsdGlwbGVCdXR0b24sXG4gIFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMsXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXFSZU5hbWVUeXBlLFxuICBTVFJlcXVlc3RPcHRpb25zLFxuICBTVFJlcyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTb3J0TWFwLFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGVcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUQ29sdW1uQnV0dG9uLCBfU1REYXRhVmFsdWUgfSBmcm9tICcuL3N0LnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcbiAgcGk6IG51bWJlcjtcbiAgcHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBib29sZWFuO1xuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbDogbnVtYmVyO1xuICByZXE6IFNUUmVxO1xuICByZXM6IFNUUmVzO1xuICBwYWdlOiBTVFBhZ2U7XG4gIGNvbHVtbnM6IF9TVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0IHwgbnVsbDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaTogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0OiBTVERhdGFbXTtcbiAgLyoqIOe7n+iuoeaVsOaNriAqL1xuICBzdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvZyE6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgY3VycmVuY3lTcnY6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBzZXRDb2codmFsOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb2cgPSB2YWw7XG4gIH1cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIHBhZ2luYXRvciwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgbGV0IHJldFBpOiBudW1iZXI7XG4gICAgbGV0IHJhd0RhdGE6IE56U2FmZUFueTtcbiAgICBsZXQgc2hvd1BhZ2UgPSBwYWdlLnNob3c7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlSZW1vdGUoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgcmV0OiBTVERhdGFbXTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJldC5sZW5ndGg7XG4gICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID0gcmVzLnJlTmFtZSEudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWVwQ29weShyZXQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICBkYXRhJCA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAvLyBzb3J0XG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSBkZWVwQ29weShyZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zIGFzIF9TVENvbHVtbltdKTtcbiAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGZpbHRlclxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIpXG4gICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYy5maWx0ZXIhO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGlmIChwYWdpbmF0b3IgJiYgcGFnZS5mcm9udCkge1xuICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBwcmUtcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzIShyZXN1bHQsIHJhd0RhdGEpKSk7XG4gICAgfVxuXG4gICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gdGhpcy5vcHRpbWl6ZURhdGEoeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZTogb3B0aW9ucy5yb3dDbGFzc05hbWUgfSkpKTtcblxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldExpc3QgPSByZXN1bHQ7XG4gICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICBjb25zdCByZWFsUHMgPSByZXRQcyB8fCBwcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICBwczogcmV0UHMsXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgc3RhdGlzdGljYWw6IHRoaXMuZ2VuU3RhdGlzdGljYWwoY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwgcmV0TGlzdCwgcmF3RGF0YSksXG4gICAgICAgICAgcGFnZVNob3c6IHR5cGVvZiBzaG93UGFnZSA9PT0gJ3VuZGVmaW5lZCcgPyByZWFsVG90YWwgPiByZWFsUHMgOiBzaG93UGFnZVxuICAgICAgICB9IGFzIFNURGF0YVNvdXJjZVJlc3VsdDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogX1NURGF0YVZhbHVlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2FmZUh0bWwgPSBjb2wuc2FmZVR5cGUgPT09ICdzYWZlSHRtbCc7XG4gICAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaWR4KSB8fCAnJztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiBmb3JtYXRSZXMsXG4gICAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSA6IGZvcm1hdFJlcyxcbiAgICAgICAgICBvcmc6IGZvcm1hdFJlcyxcbiAgICAgICAgICBzYWZlVHlwZTogY29sLnNhZmVUeXBlIVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgICBsZXQgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbm8nOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmdldE5vSW5kZXgoaXRlbSwgY29sLCBpZHgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5udW1iZXJEaWdpdHMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMuY3VycmVuY3lTcnYuZm9ybWF0KHZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZSA9PT0gY29sLmRlZmF1bHQgPyBjb2wuZGVmYXVsdCA6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4hLnRydXRoLCBjb2wueW4hLnllcyEsIGNvbC55biEubm8hLCBjb2wueW4hLm1vZGUhLCBmYWxzZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgIHRleHQgPSBjb2wuZW51bSFbdmFsdWVdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICBjYXNlICdiYWRnZSc6XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGNvbC50eXBlID09PSAndGFnJyA/IGNvbC50YWcgOiBjb2wuYmFkZ2U7XG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YVt0ZXh0XSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YUl0ZW0gPSBkYXRhW3RleHRdO1xuICAgICAgICAgICAgdGV4dCA9IGRhdGFJdGVtLnRleHQ7XG4gICAgICAgICAgICBjb2xvciA9IGRhdGFJdGVtLmNvbG9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQgPT0gbnVsbCkgdGV4dCA9ICcnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCkgOiB0ZXh0LFxuICAgICAgICBvcmc6IHZhbHVlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSEsXG4gICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYElOVkFMSUQgREFUQWA7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGRhdGFgLCBpdGVtLCBjb2wsIGV4KTtcbiAgICAgIHJldHVybiB7IHRleHQsIF90ZXh0OiB0ZXh0LCBvcmc6IHRleHQsIGJ1dHRvbnM6IFtdLCBzYWZlVHlwZTogJ3RleHQnIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeVJlbW90ZSh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwYWdpbmF0b3IsIHBpLCBwcywgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCByZU5hbWUgPSByZXEucmVOYW1lIGFzIFNUUmVxUmVOYW1lVHlwZTtcbiAgICBpZiAocGFnaW5hdG9yKSB7XG4gICAgICBpZiAocmVxLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgW3JlTmFtZS5waSBhcyBzdHJpbmddOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgICAgW3JlTmFtZS5wcyBhcyBzdHJpbmddOiBwc1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUuc2tpcCBhcyBzdHJpbmddOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICAgIFtyZU5hbWUubGltaXQgYXMgc3RyaW5nXTogcHNcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucylcbiAgICB9O1xuXG4gICAgbGV0IHJlcU9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKHJlcU9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgIHJlcU9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiByZXFPcHRpb25zLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmN1c3RvbVJlcXVlc3QoeyBtZXRob2QsIHVybCwgb3B0aW9uczogcmVxT3B0aW9ucyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIG9wdGltaXplRGF0YShvcHRpb25zOiB7IGNvbHVtbnM6IF9TVENvbHVtbltdOyByZXN1bHQ6IFNURGF0YVtdOyByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB8IG51bGwgfSk6IFNURGF0YVtdIHtcbiAgICBjb25zdCB7IHJlc3VsdCwgY29sdW1ucywgcm93Q2xhc3NOYW1lIH0gPSBvcHRpb25zO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGMuYnV0dG9ucykgJiYgYy5idXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4geyBidXR0b25zOiB0aGlzLmdlbkJ1dHRvbnMoYy5idXR0b25zLCByZXN1bHRbaV0sIGMpLCBfdGV4dDogJycgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpO1xuICAgICAgfSk7XG4gICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IFtyb3dDbGFzc05hbWUgPyByb3dDbGFzc05hbWUocmVzdWx0W2ldLCBpKSA6IG51bGwsIHJlc3VsdFtpXS5jbGFzc05hbWVdXG4gICAgICAgIC5maWx0ZXIodyA9PiAhIXcpXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXROb0luZGV4KGl0ZW06IFNURGF0YSwgY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbC5ub0luZGV4ID09PSAnZnVuY3Rpb24nID8gY29sLm5vSW5kZXgoaXRlbSwgY29sLCBpZHgpIDogY29sLm5vSW5kZXghICsgaWR4O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5CdXR0b25zKF9idG5zOiBfU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogX1NUQ29sdW1uQnV0dG9uW10ge1xuICAgIGNvbnN0IGZuID0gKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdKTogX1NUQ29sdW1uQnV0dG9uW10gPT4ge1xuICAgICAgcmV0dXJuIGRlZXBDb3B5KGJ0bnMpLmZpbHRlcihidG4gPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0eXBlb2YgYnRuLmlpZiA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi5paWYoaXRlbSwgYnRuLCBjb2wpIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGJ0bi5fZGlzYWJsZWQgPSAhcmVzdWx0ICYmIGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgICAgIGlmIChidG4uY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIGJ0bi5jaGlsZHJlbiA9IGZuKGJ0bi5jaGlsZHJlbiEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBmbihfYnRucyk7XG5cbiAgICBjb25zdCBmblRleHQgPSAoYnRuczogX1NUQ29sdW1uQnV0dG9uW10pOiBfU1RDb2x1bW5CdXR0b25bXSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XG4gICAgICAgIGJ0bi5fdGV4dCA9IHR5cGVvZiBidG4udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi50ZXh0KGl0ZW0sIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgICAgICAgaWYgKGJ0bi5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgYnRuLmNoaWxkcmVuID0gZm5UZXh0KGJ0bi5jaGlsZHJlbiEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYnRucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZml4TWF4TXVsdGlwbGUoZm5UZXh0KHJlcyksIGNvbCk7XG4gIH1cblxuICBwcml2YXRlIGZpeE1heE11bHRpcGxlKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdLCBjb2w6IFNUQ29sdW1uKTogX1NUQ29sdW1uQnV0dG9uW10ge1xuICAgIGNvbnN0IGN1ckNvZyA9IGNvbC5tYXhNdWx0aXBsZUJ1dHRvbjtcbiAgICBjb25zdCBidG5TaXplID0gYnRucy5sZW5ndGg7XG4gICAgaWYgKGN1ckNvZyA9PSBudWxsIHx8IGJ0blNpemUgPD0gMCkgcmV0dXJuIGJ0bnM7XG5cbiAgICBjb25zdCBjb2c6IFNUQ29sdW1uTWF4TXVsdGlwbGVCdXR0b24gPSB7XG4gICAgICAuLi50aGlzLmNvZy5tYXhNdWx0aXBsZUJ1dHRvbixcbiAgICAgIC4uLih0eXBlb2YgY3VyQ29nID09PSAnbnVtYmVyJyA/IHsgY291bnQ6IGN1ckNvZyB9IDogY3VyQ29nKVxuICAgIH07XG5cbiAgICBpZiAoY29nLmNvdW50ISA+PSBidG5TaXplKSByZXR1cm4gYnRucztcblxuICAgIGNvbnN0IG5ld0J0bnM6IF9TVENvbHVtbkJ1dHRvbltdID0gYnRucy5zbGljZSgwLCBjb2cuY291bnQpO1xuICAgIG5ld0J0bnMucHVzaCh7IF90ZXh0OiBjb2cudGV4dCwgY2hpbGRyZW46IGJ0bnMuc2xpY2UoY29nLmNvdW50KSB9KTtcbiAgICByZXR1cm4gbmV3QnRucztcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IF9TVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCB2b2lkIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc29ydEl0ZW0gPSBzb3J0TGlzdFswXTtcbiAgICBpZiAoc29ydEl0ZW0uY29tcGFyZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRJdGVtLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydEl0ZW0uY29tcGFyZSEoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0SXRlbS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBuZXh0U29ydFRpY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLnNvcnRUaWNrO1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQgfCB1bmRlZmluZWQsXG4gICAgY29sdW1uczogX1NUQ29sdW1uW11cbiAgKTogU1RNdWx0aVNvcnRSZXN1bHRUeXBlIHtcbiAgICBsZXQgcmV0OiBTVE11bHRpU29ydFJlc3VsdFR5cGUgPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgY29uc3QgbXM6IFNUTXVsdGlTb3J0ID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAga2VlcEVtcHR5S2V5OiB0cnVlLFxuICAgICAgICBhcnJheVBhcmFtOiBmYWxzZSxcbiAgICAgICAgLi4ubXVsdGlTb3J0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzb3J0TWFwID0gc29ydExpc3RcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5ISArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKTtcblxuICAgICAgcmV0ID0geyBbbXMua2V5IV06IG1zLmFycmF5UGFyYW0gPyBzb3J0TWFwIDogc29ydE1hcC5qb2luKG1zLnNlcGFyYXRvcikgfTtcblxuICAgICAgcmV0dXJuIHNvcnRNYXAubGVuZ3RoID09PSAwICYmIG1zLmtlZXBFbXB0eUtleSA9PT0gZmFsc2UgPyB7fSA6IHJldDtcbiAgICB9XG5cbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgfVxuICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0RmlsdGVyZWREYXRhKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiBTVENvbHVtbkZpbHRlck1lbnVbXSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogX1NUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb2wuZmlsdGVyITtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgbGV0IG9iajogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBfU1RDb2x1bW5bXSwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgICBjb25zdCByZXM6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJlc1tjb2wua2V5IHx8IGNvbC5pbmRleEtleSB8fCBpbmRleF0gPVxuICAgICAgICBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IF9TVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKVxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQocmVzLnZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=