import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { of, map } from 'rxjs';
import { deepCopy, deepGet } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "@delon/util/format";
import * as i4 from "@angular/platform-browser";
class STDataSource {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: STDataSource, deps: [{ token: i1._HttpClient }, { token: i1.DatePipe, host: true }, { token: i1.YNPipe, host: true }, { token: i2.DecimalPipe, host: true }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: STDataSource }); }
}
export { STDataSource };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: STDataSource, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1._HttpClient }, { type: i1.DatePipe, decorators: [{
                    type: Host
                }] }, { type: i1.YNPipe, decorators: [{
                    type: Host
                }] }, { type: i2.DecimalPipe, decorators: [{
                    type: Host
                }] }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQTBEdEQsTUFDYSxZQUFZO0lBSXZCLFlBQ1UsSUFBaUIsRUFDVCxRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsV0FBNEIsRUFDNUIsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFSbkIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQVNsQixDQUFDO0lBRUosTUFBTSxDQUFDLEdBQWtCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBNEI7UUFDbEMsSUFBSSxLQUEyQixDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN2RSxJQUFJLFFBQWdCLENB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QUk7OzBCQUNKLElBQUk7OzBCQUNKLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSG9zdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGVQaXBlLCBZTlBpcGUsIF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB0eXBlIHsgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtbk1heE11bHRpcGxlQnV0dG9uLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVE11bHRpU29ydFJlc3VsdFR5cGUsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU29ydE1hcCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4sIF9TVENvbHVtbkJ1dHRvbiwgX1NURGF0YVZhbHVlIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpOiBudW1iZXI7XG4gIHBzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogYm9vbGVhbjtcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgdG90YWw6IG51bWJlcjtcbiAgcmVxOiBTVFJlcTtcbiAgcmVzOiBTVFJlcztcbiAgcGFnZTogU1RQYWdlO1xuICBjb2x1bW5zOiBfU1RDb2x1bW5bXTtcbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydCB8IG51bGw7XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB8IG51bGw7XG4gIGN1c3RvbVJlcXVlc3Q/OiAob3B0aW9uczogU1RDdXN0b21SZXF1ZXN0T3B0aW9ucykgPT4gT2JzZXJ2YWJsZTxOelNhZmVBbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDmmK/lkKbpnIDopoHmmL7npLrliIbpobXlmaggKi9cbiAgcGFnZVNob3c6IGJvb2xlYW47XG4gIC8qKiDmlrAgYHBpYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqIOaWsCBgcHNg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwczogbnVtYmVyO1xuICAvKiog5pawIGB0b3RhbGDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKiDmlbDmja4gKi9cbiAgbGlzdDogU1REYXRhW107XG4gIC8qKiDnu5/orqHmlbDmja4gKi9cbiAgc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb2chOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHNvcnRUaWNrID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5U3J2OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgc2V0Q29nKHZhbDogQWxhaW5TVENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuY29nID0gdmFsO1xuICB9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBwYWdpbmF0b3IsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgbGV0IHJldFBzOiBudW1iZXI7XG4gICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgIGxldCByZXRQaTogbnVtYmVyO1xuICAgIGxldCByYXdEYXRhOiBOelNhZmVBbnk7XG4gICAgbGV0IHNob3dQYWdlID0gcGFnZS5zaG93O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5UmVtb3RlKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IHJldDogU1REYXRhW107XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0ID0gcmVzdWx0O1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgIHNob3dQYWdlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlTmFtZSA9IHJlcy5yZU5hbWUhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc3QgZm5SZXMgPSByZU5hbWUocmVzdWx0LCB7IHBpLCBwcywgdG90YWwgfSk7XG4gICAgICAgICAgICAgIHJldCA9IGZuUmVzLmxpc3Q7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gZm5SZXMudG90YWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICAgIHJldCA9IGRlZXBHZXQocmVzdWx0LCByZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID0gcmVOYW1lLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVlcENvcHkocmV0KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgZGF0YSQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgLy8gc29ydFxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gZGVlcENvcHkocmVzdWx0KTtcbiAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyBhcyBfU1RDb2x1bW5bXSk7XG4gICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGMuZmlsdGVyITtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBmaWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBpZiAocGFnaW5hdG9yICYmIHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcHJlLXByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyEocmVzdWx0LCByYXdEYXRhKSkpO1xuICAgIH1cblxuICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHRoaXMub3B0aW1pemVEYXRhKHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWU6IG9wdGlvbnMucm93Q2xhc3NOYW1lIH0pKSk7XG5cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXRMaXN0ID0gcmVzdWx0O1xuICAgICAgICBjb25zdCByZWFsVG90YWwgPSByZXRUb3RhbCB8fCB0b3RhbDtcbiAgICAgICAgY29uc3QgcmVhbFBzID0gcmV0UHMgfHwgcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgcHM6IHJldFBzLFxuICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgIHN0YXRpc3RpY2FsOiB0aGlzLmdlblN0YXRpc3RpY2FsKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHJldExpc3QsIHJhd0RhdGEpLFxuICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2VcbiAgICAgICAgfSBhcyBTVERhdGFTb3VyY2VSZXN1bHQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IF9TVERhdGFWYWx1ZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNhZmVIdG1sID0gY29sLnNhZmVUeXBlID09PSAnc2FmZUh0bWwnO1xuICAgICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGlkeCkgfHwgJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogZm9ybWF0UmVzLFxuICAgICAgICAgIF90ZXh0OiBzYWZlSHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcykgOiBmb3JtYXRSZXMsXG4gICAgICAgICAgb3JnOiBmb3JtYXRSZXMsXG4gICAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgICAgbGV0IGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5nZXROb0luZGV4KGl0ZW0sIGNvbCwgaWR4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIHRleHQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmN1cnJlbmN5U3J2LmZvcm1hdCh2YWx1ZSwgY29sLmN1cnJlbmN5Py5mb3JtYXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUgPT09IGNvbC5kZWZhdWx0ID8gY29sLmRlZmF1bHQgOiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgdGV4dCA9IHRoaXMueW5QaXBlLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluIS50cnV0aCwgY29sLnluIS55ZXMhLCBjb2wueW4hLm5vISwgY29sLnluIS5tb2RlISwgZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICB0ZXh0ID0gY29sLmVudW0hW3ZhbHVlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2wudHlwZSA9PT0gJ3RhZycgPyBjb2wudGFnIDogY29sLmJhZGdlO1xuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGFbdGV4dF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJdGVtID0gZGF0YVt0ZXh0XTtcbiAgICAgICAgICAgIHRleHQgPSBkYXRhSXRlbS50ZXh0O1xuICAgICAgICAgICAgY29sb3IgPSBkYXRhSXRlbS5jb2xvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0ZXh0ID09IG51bGwpIHRleHQgPSAnJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQsXG4gICAgICAgIF90ZXh0OiBzYWZlSHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQpIDogdGV4dCxcbiAgICAgICAgb3JnOiB2YWx1ZSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNhZmVUeXBlOiBjb2wuc2FmZVR5cGUhLFxuICAgICAgICBidXR0b25zOiBbXVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc3QgdGV4dCA9IGBJTlZBTElEIERBVEFgO1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBkYXRhYCwgaXRlbSwgY29sLCBleCk7XG4gICAgICByZXR1cm4geyB0ZXh0LCBfdGV4dDogdGV4dCwgb3JnOiB0ZXh0LCBidXR0b25zOiBbXSwgc2FmZVR5cGU6ICd0ZXh0JyB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSZW1vdGUodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGFnaW5hdG9yLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJhbXM6IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGNvbnN0IHJlTmFtZSA9IHJlcS5yZU5hbWUgYXMgU1RSZXFSZU5hbWVUeXBlO1xuICAgIGlmIChwYWdpbmF0b3IpIHtcbiAgICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnBpIGFzIHN0cmluZ106IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgICBbcmVOYW1lLnBzIGFzIHN0cmluZ106IHBzXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgW3JlTmFtZS5za2lwIGFzIHN0cmluZ106IChwaSAtIDEpICogcHMsXG4gICAgICAgICAgW3JlTmFtZS5saW1pdCBhcyBzdHJpbmddOiBwc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBwYXJhbXMgPSB7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICAuLi5yZXEucGFyYW1zLFxuICAgICAgLi4udGhpcy5nZXRSZXFTb3J0TWFwKHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICAuLi50aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKVxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMucmVxLmlnbm9yZVBhcmFtTnVsbCA9PSB0cnVlKSB7XG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHBhcmFtc1trZXldID09IG51bGwpIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVyc1xuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IHsgLi4ucmVxLmJvZHksIC4uLnBhcmFtcyB9LFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXEucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxT3B0aW9ucyA9IHJlcS5wcm9jZXNzKHJlcU9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIShyZXFPcHRpb25zLnBhcmFtcyBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpKSB7XG4gICAgICByZXFPcHRpb25zLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcmVxT3B0aW9ucy5wYXJhbXMgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jdXN0b21SZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jdXN0b21SZXF1ZXN0KHsgbWV0aG9kLCB1cmwsIG9wdGlvbnM6IHJlcU9wdGlvbnMgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICBvcHRpbWl6ZURhdGEob3B0aW9uczogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgcmVzdWx0OiBTVERhdGFbXTsgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsIH0pOiBTVERhdGFbXSB7XG4gICAgY29uc3QgeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZSB9ID0gb3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjLmJ1dHRvbnMpICYmIGMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHsgYnV0dG9uczogdGhpcy5nZW5CdXR0b25zKGMuYnV0dG9ucywgcmVzdWx0W2ldLCBjKSwgX3RleHQ6ICcnIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocmVzdWx0W2ldLCBjLCBpKTtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0W2ldLl9yb3dDbGFzc05hbWUgPSBbcm93Q2xhc3NOYW1lID8gcm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSkgOiBudWxsLCByZXN1bHRbaV0uY2xhc3NOYW1lXVxuICAgICAgICAuZmlsdGVyKHcgPT4gISF3KVxuICAgICAgICAuam9pbignICcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnV0dG9ucyhfYnRuczogX1NUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IF9TVENvbHVtbkJ1dHRvbltdIHtcbiAgICBjb25zdCBmbiA9IChidG5zOiBfU1RDb2x1bW5CdXR0b25bXSk6IF9TVENvbHVtbkJ1dHRvbltdID0+IHtcbiAgICAgIHJldHVybiBkZWVwQ29weShidG5zKS5maWx0ZXIoYnRuID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdHlwZW9mIGJ0bi5paWYgPT09ICdmdW5jdGlvbicgPyBidG4uaWlmKGl0ZW0sIGJ0biwgY29sKSA6IHRydWU7XG4gICAgICAgIGNvbnN0IGlzUmVuZGVyRGlzYWJsZWQgPSBidG4uaWlmQmVoYXZpb3IgPT09ICdkaXNhYmxlZCc7XG4gICAgICAgIGJ0bi5fcmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICBidG4uX2Rpc2FibGVkID0gIXJlc3VsdCAmJiBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgICBpZiAoYnRuLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBidG4uY2hpbGRyZW4gPSBmbihidG4uY2hpbGRyZW4hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gZm4oX2J0bnMpO1xuXG4gICAgY29uc3QgZm5UZXh0ID0gKGJ0bnM6IF9TVENvbHVtbkJ1dHRvbltdKTogX1NUQ29sdW1uQnV0dG9uW10gPT4ge1xuICAgICAgZm9yIChjb25zdCBidG4gb2YgYnRucykge1xuICAgICAgICBidG4uX3RleHQgPSB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChpdGVtLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gICAgICAgIGlmIChidG4uY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIGJ0bi5jaGlsZHJlbiA9IGZuVGV4dChidG4uY2hpbGRyZW4hKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ0bnM7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmZpeE1heE11bHRpcGxlKGZuVGV4dChyZXMpLCBjb2wpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhNYXhNdWx0aXBsZShidG5zOiBfU1RDb2x1bW5CdXR0b25bXSwgY29sOiBTVENvbHVtbik6IF9TVENvbHVtbkJ1dHRvbltdIHtcbiAgICBjb25zdCBjdXJDb2cgPSBjb2wubWF4TXVsdGlwbGVCdXR0b247XG4gICAgY29uc3QgYnRuU2l6ZSA9IGJ0bnMubGVuZ3RoO1xuICAgIGlmIChjdXJDb2cgPT0gbnVsbCB8fCBidG5TaXplIDw9IDApIHJldHVybiBidG5zO1xuXG4gICAgY29uc3QgY29nOiBTVENvbHVtbk1heE11bHRpcGxlQnV0dG9uID0ge1xuICAgICAgLi4udGhpcy5jb2cubWF4TXVsdGlwbGVCdXR0b24sXG4gICAgICAuLi4odHlwZW9mIGN1ckNvZyA9PT0gJ251bWJlcicgPyB7IGNvdW50OiBjdXJDb2cgfSA6IGN1ckNvZylcbiAgICB9O1xuXG4gICAgaWYgKGNvZy5jb3VudCEgPj0gYnRuU2l6ZSkgcmV0dXJuIGJ0bnM7XG5cbiAgICBjb25zdCBuZXdCdG5zOiBfU1RDb2x1bW5CdXR0b25bXSA9IGJ0bnMuc2xpY2UoMCwgY29nLmNvdW50KTtcbiAgICBuZXdCdG5zLnB1c2goeyBfdGV4dDogY29nLnRleHQsIGNoaWxkcmVuOiBidG5zLnNsaWNlKGNvZy5jb3VudCkgfSk7XG4gICAgcmV0dXJuIG5ld0J0bnM7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogX1NUQ29sdW1uW10pOiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgdm9pZCB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvcnRJdGVtID0gc29ydExpc3RbMF07XG4gICAgaWYgKHNvcnRJdGVtLmNvbXBhcmUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0SXRlbS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRJdGVtLmNvbXBhcmUhKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydEl0ZW0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXQgbmV4dFNvcnRUaWNrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5zb3J0VGljaztcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgdW5kZWZpbmVkIHwgbnVsbCxcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgdW5kZWZpbmVkLFxuICAgIGNvbHVtbnM6IF9TVENvbHVtbltdXG4gICk6IFNUTXVsdGlTb3J0UmVzdWx0VHlwZSB7XG4gICAgbGV0IHJldDogU1RNdWx0aVNvcnRSZXN1bHRUeXBlID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zOiBTVE11bHRpU29ydCA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIGtlZXBFbXB0eUtleTogdHJ1ZSxcbiAgICAgICAgYXJyYXlQYXJhbTogZmFsc2UsXG4gICAgICAgIC4uLm11bHRpU29ydFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc29ydE1hcCA9IHNvcnRMaXN0XG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpY2sgLSBiLnRpY2spXG4gICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmtleSEgKyBtcy5uYW1lU2VwYXJhdG9yICsgKChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0IV0gfHwgaXRlbS5kZWZhdWx0KSk7XG5cbiAgICAgIHJldCA9IHsgW21zLmtleSFdOiBtcy5hcnJheVBhcmFtID8gc29ydE1hcCA6IHNvcnRNYXAuam9pbihtcy5zZXBhcmF0b3IpIH07XG5cbiAgICAgIHJldHVybiBzb3J0TWFwLmxlbmd0aCA9PT0gMCAmJiBtcy5rZWVwRW1wdHlLZXkgPT09IGZhbHNlID8ge30gOiByZXQ7XG4gICAgfVxuXG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICBsZXQgc29ydEZpbGVkID0gbWFwRGF0YS5rZXk7XG4gICAgbGV0IHNvcnRWYWx1ZSA9IChzb3J0TGlzdFswXS5yZU5hbWUgfHwge30pW21hcERhdGEuZGVmYXVsdCFdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgc29ydFZhbHVlID0gc29ydEZpbGVkICsgKHNpbmdsZVNvcnQubmFtZVNlcGFyYXRvciB8fCAnLicpICsgc29ydFZhbHVlO1xuICAgICAgc29ydEZpbGVkID0gc2luZ2xlU29ydC5rZXkgfHwgJ3NvcnQnO1xuICAgIH1cbiAgICByZXRbc29ydEZpbGVkIGFzIHN0cmluZ10gPSBzb3J0VmFsdWUgYXMgc3RyaW5nO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldEZpbHRlcmVkRGF0YShmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKTogU1RDb2x1bW5GaWx0ZXJNZW51W10ge1xuICAgIHJldHVybiBmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnID8gZmlsdGVyLm1lbnVzIS5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpIDogZmlsdGVyLm1lbnVzIS5zbGljZSgwLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnM6IF9TVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gY29sLmZpbHRlciE7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWREYXRhKGZpbHRlcik7XG4gICAgICAgIGxldCBvYmo6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcbiAgICAgICAgaWYgKGZpbHRlci5yZU5hbWUpIHtcbiAgICAgICAgICBvYmogPSBmaWx0ZXIucmVOYW1lIShmaWx0ZXIubWVudXMhLCBjb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtmaWx0ZXIua2V5IV0gPSB2YWx1ZXMubWFwKGkgPT4gaS52YWx1ZSkuam9pbignLCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IHsgLi4ucmV0LCAuLi5vYmogfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzdGF0aXN0aWNhbFxuXG4gIHByaXZhdGUgZ2VuU3RhdGlzdGljYWwoY29sdW1uczogX1NUQ29sdW1uW10sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhOiBOelNhZmVBbnkpOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gICAgY29uc3QgcmVzOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge307XG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICByZXNbY29sLmtleSB8fCBjb2wuaW5kZXhLZXkgfHwgaW5kZXhdID1cbiAgICAgICAgY29sLnN0YXRpc3RpY2FsID09IG51bGwgPyB7fSA6IHRoaXMuZ2V0U3RhdGlzdGljYWwoY29sLCBpbmRleCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljYWwoY29sOiBfU1RDb2x1bW4sIGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhOiBOelNhZmVBbnkpOiBTVFN0YXRpc3RpY2FsUmVzdWx0IHtcbiAgICBjb25zdCB2YWwgPSBjb2wuc3RhdGlzdGljYWw7XG4gICAgY29uc3QgaXRlbTogU1RTdGF0aXN0aWNhbCA9IHtcbiAgICAgIGRpZ2l0czogMixcbiAgICAgIGN1cnJlbmN5OiB1bmRlZmluZWQsXG4gICAgICAuLi4odHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHZhbCBhcyBTVFN0YXRpc3RpY2FsVHlwZSB9IDogKHZhbCBhcyBTVFN0YXRpc3RpY2FsKSlcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbmN5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5tYXgoLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5taW4oLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtLmN1cnJlbmN5ID09PSB0cnVlIHx8IChpdGVtLmN1cnJlbmN5ID09IG51bGwgJiYgY3VycmVuY3kgPT09IHRydWUpKSB7XG4gICAgICByZXMudGV4dCA9IHRoaXMuY3VycmVuY3lTcnYuZm9ybWF0KHJlcy52YWx1ZSwgY29sLmN1cnJlbmN5Py5mb3JtYXQpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gKGkgPT09ICcnIHx8IGkgPT0gbnVsbCA/IDAgOiBpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN1bShpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5yZWR1Y2UoKHAsIGkpID0+IChwICs9IHBhcnNlRmxvYXQoU3RyaW5nKGkpKSksIDApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19