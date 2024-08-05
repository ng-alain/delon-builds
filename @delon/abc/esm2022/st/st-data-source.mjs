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
        const { data, res, total, page, pi, ps, paginator, columns, headers } = options;
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
                const sorterFn = this.getSorterFn(headers);
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
                    text = value == null || value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
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
        const { req, page, paginator, pi, ps, singleSort, multiSort, columns, headers } = options;
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
            ...this.getReqSortMap(singleSort, multiSort, headers),
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
                let cell;
                if (typeof c.cell === 'function') {
                    cell = c.cell(result[i], c);
                }
                return { ...this.get(result[i], c, i), props, cell };
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
    getValidSort(headers) {
        return headers.reduce((a, header) => {
            const ls = header
                .map(i => i.column)
                .filter(item => item._sort && item._sort.enabled && item._sort.default)
                .map(item => item._sort);
            return a.concat(...ls);
        }, []);
    }
    getSorterFn(headers) {
        const sortList = this.getValidSort(headers);
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
    getReqSortMap(singleSort, multiSort, headers) {
        let ret = {};
        const sortList = this.getValidSort(headers);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: STDataSource, deps: [{ token: i1._HttpClient }, { token: i1.DatePipe, host: true }, { token: i1.YNPipe, host: true }, { token: i2.DecimalPipe, host: true }, { token: i3.CurrencyService }, { token: i4.DomSanitizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: STDataSource }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: STDataSource, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1._HttpClient }, { type: i1.DatePipe, decorators: [{
                    type: Host
                }] }, { type: i1.YNPipe, decorators: [{
                    type: Host
                }] }, { type: i2.DecimalPipe, decorators: [{
                    type: Host
                }] }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQThEdEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFDVSxJQUFpQixFQUNULFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUF1QixFQUMvQixXQUE0QixFQUM1QixHQUFpQjtRQUxqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBU2xCLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUE0QjtRQUNsQyxJQUFJLEtBQTJCLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNo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QyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs4R0E3Z0JVLFlBQVk7a0hBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFEeEIsVUFBVTs7MEJBT04sSUFBSTs7MEJBQ0osSUFBSTs7MEJBQ0osSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBDZWxsT3B0aW9ucyB9IGZyb20gJ0BkZWxvbi9hYmMvY2VsbCc7XG5pbXBvcnQgeyBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtbk1heE11bHRpcGxlQnV0dG9uLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNUSWNvbixcbiAgU1RNdWx0aVNvcnQsXG4gIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSxcbiAgU1RPbkNlbGxSZXN1bHQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU29ydE1hcCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgdHlwZSB7IF9TVENvbHVtbiwgX1NUQ29sdW1uQnV0dG9uLCBfU1REYXRhVmFsdWUsIF9TVEhlYWRlciB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaTogbnVtYmVyO1xuICBwczogbnVtYmVyO1xuICBwYWdpbmF0b3I6IGJvb2xlYW47XG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbDogbnVtYmVyO1xuICByZXE6IFNUUmVxO1xuICByZXM6IFNUUmVzO1xuICBwYWdlOiBTVFBhZ2U7XG4gIGNvbHVtbnM6IF9TVENvbHVtbltdO1xuICBoZWFkZXJzOiBfU1RIZWFkZXJbXVtdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0IHwgbnVsbDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaTogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0OiBTVERhdGFbXTtcbiAgLyoqIOe7n+iuoeaVsOaNriAqL1xuICBzdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvZyE6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgY3VycmVuY3lTcnY6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBzZXRDb2codmFsOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb2cgPSB2YWw7XG4gIH1cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIHBhZ2luYXRvciwgY29sdW1ucywgaGVhZGVycyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgbGV0IHJldFBpOiBudW1iZXI7XG4gICAgbGV0IHJhd0RhdGE6IE56U2FmZUFueTtcbiAgICBsZXQgc2hvd1BhZ2UgPSBwYWdlLnNob3c7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlSZW1vdGUoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgcmV0OiBTVERhdGFbXTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJldC5sZW5ndGg7XG4gICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVOYW1lID0gcmVzLnJlTmFtZSE7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zdCBmblJlcyA9IHJlTmFtZShyZXN1bHQsIHsgcGksIHBzLCB0b3RhbCB9KTtcbiAgICAgICAgICAgICAgcmV0ID0gZm5SZXMubGlzdDtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSBmblJlcy50b3RhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlTmFtZS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPSByZU5hbWUudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlTmFtZS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWVwQ29weShyZXQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhJCA9IG9mKGRhdGEgPz8gW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgZGF0YSQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgLy8gc29ydFxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gZGVlcENvcHkocmVzdWx0KTtcbiAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oaGVhZGVycyk7XG4gICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGMuZmlsdGVyITtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBmaWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBpZiAocGFnaW5hdG9yICYmIHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcHJlLXByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyEocmVzdWx0LCByYXdEYXRhKSkpO1xuICAgIH1cblxuICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHRoaXMub3B0aW1pemVEYXRhKHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWU6IG9wdGlvbnMucm93Q2xhc3NOYW1lIH0pKSk7XG5cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXRMaXN0ID0gcmVzdWx0O1xuICAgICAgICBjb25zdCByZWFsVG90YWwgPSByZXRUb3RhbCB8fCB0b3RhbDtcbiAgICAgICAgY29uc3QgcmVhbFBzID0gcmV0UHMgfHwgcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgcHM6IHJldFBzLFxuICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgIHN0YXRpc3RpY2FsOiB0aGlzLmdlblN0YXRpc3RpY2FsKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHJldExpc3QsIHJhd0RhdGEpLFxuICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2VcbiAgICAgICAgfSBhcyBTVERhdGFTb3VyY2VSZXN1bHQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IF9TVERhdGFWYWx1ZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNhZmVIdG1sID0gY29sLnNhZmVUeXBlID09PSAnc2FmZUh0bWwnO1xuICAgICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGlkeCkgfHwgJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogZm9ybWF0UmVzLFxuICAgICAgICAgIF90ZXh0OiBzYWZlSHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcykgOiBmb3JtYXRSZXMsXG4gICAgICAgICAgb3JnOiBmb3JtYXRSZXMsXG4gICAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgICAgbGV0IGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBsZXQgdG9vbHRpcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICBjYXNlICdubyc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMuZ2V0Tm9JbmRleChpdGVtLCBjb2wsIGlkeCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQodmFsdWUsIGNvbC5jdXJyZW5jeT8uZm9ybWF0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGNvbC5kZWZhdWx0ID8gY29sLmRlZmF1bHQgOiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgdGV4dCA9IHRoaXMueW5QaXBlLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluIS50cnV0aCwgY29sLnluIS55ZXMhLCBjb2wueW4hLm5vISwgY29sLnluIS5tb2RlISwgZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgICB0ZXh0ID0gY29sLmVudW0hW3ZhbHVlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgY2FzZSAnYmFkZ2UnOlxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb2wudHlwZSA9PT0gJ3RhZycgPyBjb2wudGFnIDogY29sLmJhZGdlO1xuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGFbdGV4dF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJdGVtID0gZGF0YVt0ZXh0XTtcbiAgICAgICAgICAgIHRleHQgPSBkYXRhSXRlbS50ZXh0O1xuICAgICAgICAgICAgY29sb3IgPSBkYXRhSXRlbS5jb2xvcjtcbiAgICAgICAgICAgIHRvb2x0aXAgPSBkYXRhSXRlbS50b29sdGlwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQgPT0gbnVsbCkgdGV4dCA9ICcnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgX3RleHQ6IHNhZmVIdG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCkgOiB0ZXh0LFxuICAgICAgICBvcmc6IHZhbHVlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgdG9vbHRpcCxcbiAgICAgICAgc2FmZVR5cGU6IGNvbC5zYWZlVHlwZSEsXG4gICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYElOVkFMSUQgREFUQWA7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGRhdGFgLCBpdGVtLCBjb2wsIGV4KTtcbiAgICAgIHJldHVybiB7IHRleHQsIF90ZXh0OiB0ZXh0LCBvcmc6IHRleHQsIGJ1dHRvbnM6IFtdLCBzYWZlVHlwZTogJ3RleHQnIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeVJlbW90ZSh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwYWdpbmF0b3IsIHBpLCBwcywgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zLCBoZWFkZXJzIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHBhcmFtczogeyBbcGFyYW06IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHBhZ2luYXRvcikge1xuICAgICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHNcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnNraXAgYXMgc3RyaW5nXTogKHBpIC0gMSkgKiBwcyxcbiAgICAgICAgICBbcmVOYW1lLmxpbWl0IGFzIHN0cmluZ106IHBzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBoZWFkZXJzKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpXG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5yZXEuaWdub3JlUGFyYW1OdWxsID09IHRydWUpIHtcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlcU9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKHJlcU9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgIHJlcU9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiByZXFPcHRpb25zLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmN1c3RvbVJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmN1c3RvbVJlcXVlc3QoeyBtZXRob2QsIHVybCwgb3B0aW9uczogcmVxT3B0aW9ucyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIGdldENlbGwoYzogU1RDb2x1bW4sIGl0ZW06IFNURGF0YSwgaWR4OiBudW1iZXIpOiBTVE9uQ2VsbFJlc3VsdCB7XG4gICAgY29uc3Qgb25DZWxsUmVzdWx0ID0gdHlwZW9mIGMub25DZWxsID09PSAnZnVuY3Rpb24nID8gYy5vbkNlbGwoaXRlbSwgaWR4KSA6IG51bGw7XG4gICAgY29uc3QgbWVyZ2VkQ29sU3BhbiA9IG9uQ2VsbFJlc3VsdD8uY29sU3BhbiA/PyAxO1xuICAgIGNvbnN0IG1lcmdlZFJvd1NwYW4gPSBvbkNlbGxSZXN1bHQ/LnJvd1NwYW4gPz8gMTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sU3BhbjogbWVyZ2VkQ29sU3BhbiA8PSAwID8gbnVsbCA6IG1lcmdlZENvbFNwYW4sXG4gICAgICByb3dTcGFuOiBtZXJnZWRSb3dTcGFuIDw9IDAgPyBudWxsIDogbWVyZ2VkUm93U3BhblxuICAgIH0gYXMgU1RPbkNlbGxSZXN1bHQ7XG4gIH1cblxuICBvcHRpbWl6ZURhdGEob3B0aW9uczogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgcmVzdWx0OiBTVERhdGFbXTsgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsIH0pOiBTVERhdGFbXSB7XG4gICAgY29uc3QgeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZSB9ID0gb3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0Q2VsbChjLCByZXN1bHRbaV0sIGkpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGMuYnV0dG9ucykgJiYgYy5idXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4geyBidXR0b25zOiB0aGlzLmdlbkJ1dHRvbnMoYy5idXR0b25zLCByZXN1bHRbaV0sIGMpLCBfdGV4dDogJycsIHByb3BzIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2VsbDogQ2VsbE9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0eXBlb2YgYy5jZWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2VsbCA9IGMuY2VsbChyZXN1bHRbaV0sIGMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSksIHByb3BzLCBjZWxsIH07XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdFtpXS5fcm93Q2xhc3NOYW1lID0gW3Jvd0NsYXNzTmFtZSA/IHJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpIDogbnVsbCwgcmVzdWx0W2ldLmNsYXNzTmFtZV1cbiAgICAgICAgLmZpbHRlcih3ID0+ICEhdylcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldE5vSW5kZXgoaXRlbTogU1REYXRhLCBjb2w6IF9TVENvbHVtbiwgaWR4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgY29sLm5vSW5kZXggPT09ICdmdW5jdGlvbicgPyBjb2wubm9JbmRleChpdGVtLCBjb2wsIGlkeCkgOiBjb2wubm9JbmRleCEgKyBpZHg7XG4gIH1cblxuICBwcml2YXRlIGdlbkJ1dHRvbnMoX2J0bnM6IF9TVENvbHVtbkJ1dHRvbltdLCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBfU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgY29uc3QgZm4gPSAoYnRuczogX1NUQ29sdW1uQnV0dG9uW10pOiBfU1RDb2x1bW5CdXR0b25bXSA9PiB7XG4gICAgICByZXR1cm4gZGVlcENvcHkoYnRucykuZmlsdGVyKGJ0biA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHR5cGVvZiBidG4uaWlmID09PSAnZnVuY3Rpb24nID8gYnRuLmlpZihpdGVtLCBidG4sIGNvbCkgOiB0cnVlO1xuICAgICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgICBidG4uX3Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgICAgaWYgKGJ0bi5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgYnRuLmNoaWxkcmVuID0gZm4oYnRuLmNoaWxkcmVuISk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcyA9IGZuKF9idG5zKTtcblxuICAgIGNvbnN0IGZuVGV4dCA9IChidG5zOiBfU1RDb2x1bW5CdXR0b25bXSk6IF9TVENvbHVtbkJ1dHRvbltdID0+IHtcbiAgICAgIGZvciAoY29uc3QgYnRuIG9mIGJ0bnMpIHtcbiAgICAgICAgYnRuLl90ZXh0ID0gdHlwZW9mIGJ0bi50ZXh0ID09PSAnZnVuY3Rpb24nID8gYnRuLnRleHQoaXRlbSwgYnRuKSA6IGJ0bi50ZXh0IHx8ICcnO1xuICAgICAgICBidG4uX2NsYXNzTmFtZSA9IHR5cGVvZiBidG4uY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nID8gYnRuLmNsYXNzTmFtZShpdGVtLCBidG4pIDogYnRuLmNsYXNzTmFtZTtcbiAgICAgICAgYnRuLl9pY29uID0gdHlwZW9mIGJ0bi5pY29uID09PSAnZnVuY3Rpb24nID8gYnRuLmljb24oaXRlbSwgYnRuKSA6IChidG4uaWNvbiBhcyBTVEljb24pO1xuICAgICAgICBpZiAoYnRuLmNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBidG4uY2hpbGRyZW4gPSBmblRleHQoYnRuLmNoaWxkcmVuISk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidG5zO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5maXhNYXhNdWx0aXBsZShmblRleHQocmVzKSwgY29sKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4TWF4TXVsdGlwbGUoYnRuczogX1NUQ29sdW1uQnV0dG9uW10sIGNvbDogU1RDb2x1bW4pOiBfU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgY29uc3QgY3VyQ29nID0gY29sLm1heE11bHRpcGxlQnV0dG9uO1xuICAgIGNvbnN0IGJ0blNpemUgPSBidG5zLmxlbmd0aDtcbiAgICBpZiAoY3VyQ29nID09IG51bGwgfHwgYnRuU2l6ZSA8PSAwKSByZXR1cm4gYnRucztcblxuICAgIGNvbnN0IGNvZzogU1RDb2x1bW5NYXhNdWx0aXBsZUJ1dHRvbiA9IHtcbiAgICAgIC4uLnRoaXMuY29nLm1heE11bHRpcGxlQnV0dG9uLFxuICAgICAgLi4uKHR5cGVvZiBjdXJDb2cgPT09ICdudW1iZXInID8geyBjb3VudDogY3VyQ29nIH0gOiBjdXJDb2cpXG4gICAgfTtcblxuICAgIGlmIChjb2cuY291bnQhID49IGJ0blNpemUpIHJldHVybiBidG5zO1xuXG4gICAgY29uc3QgbmV3QnRuczogX1NUQ29sdW1uQnV0dG9uW10gPSBidG5zLnNsaWNlKDAsIGNvZy5jb3VudCk7XG4gICAgbmV3QnRucy5wdXNoKHsgX3RleHQ6IGNvZy50ZXh0LCBjaGlsZHJlbjogYnRucy5zbGljZShjb2cuY291bnQpIH0pO1xuICAgIHJldHVybiBuZXdCdG5zO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoaGVhZGVyczogX1NUSGVhZGVyW11bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGEsIGhlYWRlcikgPT4ge1xuICAgICAgY29uc3QgbHMgPSBoZWFkZXJcbiAgICAgICAgLm1hcChpID0+IGkuY29sdW1uKVxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICAgICAgcmV0dXJuIGEuY29uY2F0KC4uLmxzKTtcbiAgICB9LCBbXSBhcyBTVFNvcnRNYXBbXSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGhlYWRlcnM6IF9TVEhlYWRlcltdW10pOiAoKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiBudW1iZXIpIHwgdm9pZCB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChoZWFkZXJzKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvcnRJdGVtID0gc29ydExpc3RbMF07XG4gICAgaWYgKHNvcnRJdGVtLmNvbXBhcmUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0SXRlbS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRJdGVtLmNvbXBhcmUhKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydEl0ZW0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXQgbmV4dFNvcnRUaWNrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5zb3J0VGljaztcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgdW5kZWZpbmVkIHwgbnVsbCxcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgdW5kZWZpbmVkLFxuICAgIGhlYWRlcnM6IF9TVEhlYWRlcltdW11cbiAgKTogU1RNdWx0aVNvcnRSZXN1bHRUeXBlIHtcbiAgICBsZXQgcmV0OiBTVE11bHRpU29ydFJlc3VsdFR5cGUgPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGhlYWRlcnMpO1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgY29uc3QgbXM6IFNUTXVsdGlTb3J0ID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAga2VlcEVtcHR5S2V5OiB0cnVlLFxuICAgICAgICBhcnJheVBhcmFtOiBmYWxzZSxcbiAgICAgICAgLi4ubXVsdGlTb3J0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzb3J0TWFwID0gc29ydExpc3RcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5ISArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKTtcblxuICAgICAgcmV0ID0geyBbbXMua2V5IV06IG1zLmFycmF5UGFyYW0gPyBzb3J0TWFwIDogc29ydE1hcC5qb2luKG1zLnNlcGFyYXRvcikgfTtcblxuICAgICAgcmV0dXJuIHNvcnRNYXAubGVuZ3RoID09PSAwICYmIG1zLmtlZXBFbXB0eUtleSA9PT0gZmFsc2UgPyB7fSA6IHJldDtcbiAgICB9XG5cbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgfVxuICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0RmlsdGVyZWREYXRhKGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiBTVENvbHVtbkZpbHRlck1lbnVbXSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogX1NUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb2wuZmlsdGVyITtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgbGV0IG9iajogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBfU1RDb2x1bW5bXSwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgICBjb25zdCByZXM6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJlc1tjb2wua2V5IHx8IGNvbC5pbmRleEtleSB8fCBpbmRleF0gPVxuICAgICAgICBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IF9TVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IE56U2FmZUFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKVxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQocmVzLnZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=