/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { DecimalPipe } from '@angular/common';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { _HttpClient, CNCurrencyPipe, DatePipe, YNPipe } from '@delon/theme';
import { deepGet } from '@delon/util';
/**
 * @record
 */
export function STDataSourceOptions() { }
if (false) {
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.pi;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.ps;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.data;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.total;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.req;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.res;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.page;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.columns;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.singleSort;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.multiSort;
    /** @type {?|undefined} */
    STDataSourceOptions.prototype.rowClassName;
}
/**
 * @record
 */
export function STDataSourceResult() { }
if (false) {
    /**
     * 是否需要显示分页器
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.pageShow;
    /**
     * 新 `pi`，若返回 `undefined` 表示用户受控
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.pi;
    /**
     * 新 `ps`，若返回 `undefined` 表示用户受控
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.ps;
    /**
     * 新 `total`，若返回 `undefined` 表示用户受控
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.total;
    /**
     * 数据
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.list;
    /**
     * 统计数据
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.statistical;
}
export class STDataSource {
    /**
     * @param {?} http
     * @param {?} currentyPipe
     * @param {?} datePipe
     * @param {?} ynPipe
     * @param {?} numberPipe
     * @param {?} dom
     */
    constructor(http, currentyPipe, datePipe, ynPipe, numberPipe, dom) {
        this.http = http;
        this.currentyPipe = currentyPipe;
        this.datePipe = datePipe;
        this.ynPipe = ynPipe;
        this.numberPipe = numberPipe;
        this.dom = dom;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    process(options) {
        return new Promise((resolvePromise, rejectPromise) => {
            /** @type {?} */
            let data$;
            /** @type {?} */
            let isRemote = false;
            const { data, res, total, page, pi, ps, columns } = options;
            /** @type {?} */
            let retTotal;
            /** @type {?} */
            let retPs;
            /** @type {?} */
            let retList;
            /** @type {?} */
            let retPi;
            /** @type {?} */
            let showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByHttp(data, options).pipe(map(result => {
                    /** @type {?} */
                    let ret;
                    if (Array.isArray(result)) {
                        ret = result;
                        retTotal = ret.length;
                        retPs = retTotal;
                        showPage = false;
                    }
                    else {
                        // list
                        ret = deepGet(result, (/** @type {?} */ (res.reName.list)), []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        /** @type {?} */
                        const resultTotal = res.reName.total && deepGet(result, (/** @type {?} */ (res.reName.total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return ret;
                }), catchError(err => {
                    rejectPromise(err);
                    return [];
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
                    /** @type {?} */
                    let copyResult = result.slice(0);
                    /** @type {?} */
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
                        /** @type {?} */
                        const values = c.filter.menus.filter(w => w.checked);
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        const onFilter = c.filter.fn;
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
                    if (page.front) {
                        /** @type {?} */
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
                data$ = data$.pipe(map(result => res.process(result)));
            }
            // data accelerator
            data$ = data$.pipe(map(result => {
                for (let i = 0, len = result.length; i < len; i++) {
                    result[i]._values = columns.map(c => this.get(result[i], c, i));
                    if (options.rowClassName) {
                        result[i]._rowClassName = options.rowClassName(result[i], i);
                    }
                }
                return result;
            }));
            data$
                .forEach((result) => (retList = result))
                .then(() => {
                /** @type {?} */
                const realTotal = retTotal || total;
                /** @type {?} */
                const realPs = retPs || ps;
                resolvePromise({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: this.genStatistical(columns, retList),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                });
            });
        });
    }
    /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    get(item, col, idx) {
        if (col.format) {
            /** @type {?} */
            const formatRes = col.format(item, col);
            if (~formatRes.indexOf('<')) {
                return { text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
            }
            return { text: formatRes == null ? '' : formatRes, org: formatRes };
        }
        /** @type {?} */
        const value = deepGet(item, (/** @type {?} */ (col.index)), col.default);
        /** @type {?} */
        let ret = value;
        switch (col.type) {
            case 'no':
                ret = col.noIndex + idx;
                break;
            case 'img':
                ret = value ? `<img src="${value}" class="img">` : '';
                break;
            case 'number':
                ret = this.numberPipe.transform(value, col.numberDigits);
                break;
            case 'currency':
                ret = this.currentyPipe.transform(value);
                break;
            case 'date':
                ret = this.datePipe.transform(value, col.dateFormat);
                break;
            case 'yn':
                ret = this.ynPipe.transform(value === col.yn.truth, col.yn.yes, col.yn.no);
                break;
        }
        return { text: ret == null ? '' : ret, org: value };
    }
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    getByHttp(url, options) {
        const { req, page, pi, ps, singleSort, multiSort, columns } = options;
        /** @type {?} */
        const method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        let params = {};
        if (req.type === 'page') {
            params = {
                [req.reName.pi]: page.zeroIndexed ? pi - 1 : pi,
                [req.reName.ps]: ps,
            };
        }
        else {
            params = {
                [req.reName.skip]: (pi - 1) * ps,
                [req.reName.limit]: ps,
            };
        }
        params = Object.assign({}, params, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
        // tslint:disable-next-line:no-any
        /** @type {?} */
        let reqOptions = {
            params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign({}, req.body, params),
                headers: req.headers,
            };
        }
        return this.http.request(method, url, reqOptions);
    }
    //#region sort
    /**
     * @param {?} columns
     * @return {?}
     */
    getValidSort(columns) {
        return columns
            .filter(item => item._sort && item._sort.enabled && item._sort.default)
            .map(item => item._sort);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    getSorterFn(columns) {
        /** @type {?} */
        const sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        if (typeof sortList[0].compare !== 'function') {
            console.warn(`[st] Muse provide the compare function in sort`);
            return;
        }
        return (a, b) => {
            /** @type {?} */
            const result = sortList[0].compare(a, b);
            if (result !== 0) {
                return sortList[0].default === 'descend' ? -result : result;
            }
            return 0;
        };
    }
    /**
     * @param {?} singleSort
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    getReqSortMap(singleSort, multiSort, columns) {
        /** @type {?} */
        let ret = {};
        /** @type {?} */
        const sortList = this.getValidSort(columns);
        if (!multiSort && sortList.length === 0)
            return ret;
        if (multiSort) {
            /** @type {?} */
            const ms = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.' }, multiSort);
            sortList.forEach(item => {
                ret[item.key] = (item.reName || {})[item.default] || item.default;
            });
            // 合并处理
            ret = {
                [ms.key]: Object.keys(ret)
                    .map(key => key + ms.nameSeparator + ret[key])
                    .join(ms.separator),
            };
        }
        else {
            /** @type {?} */
            const mapData = sortList[0];
            /** @type {?} */
            let sortFiled = mapData.key;
            /** @type {?} */
            let sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[sortFiled] = sortValue;
        }
        return ret;
    }
    //#endregion
    //#region filter
    /**
     * @param {?} columns
     * @return {?}
     */
    getReqFilterMap(columns) {
        /** @type {?} */
        let ret = {};
        columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            /** @type {?} */
            const values = col.filter.menus.filter(f => f.checked === true);
            /** @type {?} */
            let obj = {};
            if (col.filter.reName) {
                obj = col.filter.reName(col.filter.menus, col);
            }
            else {
                obj[col.filter.key] = values.map(i => i.value).join(',');
            }
            ret = Object.assign({}, ret, obj);
        });
        return ret;
    }
    //#endregion
    // #region statistical
    /**
     * @param {?} columns
     * @param {?} list
     * @return {?}
     */
    genStatistical(columns, list) {
        /** @type {?} */
        const res = {};
        columns.forEach((col, index) => {
            res[col.key ? col.key : index] = col.statistical == null ? {} : this.getStatistical(col, index, list);
        });
        return res;
    }
    /**
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    getStatistical(col, index, list) {
        /** @type {?} */
        const val = col.statistical;
        /** @type {?} */
        const item = Object.assign({ digits: 2, currenty: null }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
        /** @type {?} */
        let res = { value: 0 };
        /** @type {?} */
        let currenty = false;
        if (typeof item.type === 'function') {
            res = item.type(this.getValues(index, list), col, list);
            currenty = true;
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
                    currenty = true;
                    break;
                case 'average':
                    res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits);
                    currenty = true;
                    break;
                case 'max':
                    res.value = Math.max(...this.getValues(index, list));
                    currenty = true;
                    break;
                case 'min':
                    res.value = Math.min(...this.getValues(index, list));
                    currenty = true;
                    break;
            }
        }
        if (item.currenty === true || (item.currenty == null && currenty === true)) {
            res.text = this.currentyPipe.transform(res.value);
        }
        else {
            res.text = String(res.value);
        }
        return res;
    }
    /**
     * @param {?} val
     * @param {?} digits
     * @return {?}
     */
    toFixed(val, digits) {
        if (isNaN(val) || !isFinite(val)) {
            return 0;
        }
        return parseFloat(val.toFixed(digits));
    }
    /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    getValues(index, list) {
        return list.map(i => i._values[index].org).map(i => i == null ? 0 : i);
    }
    /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    getSum(index, list) {
        return this.getValues(index, list).reduce((p, i) => (p += i == null ? 0 : parseFloat(String(i.toString() === '' ? 0 : i))), 0);
    }
}
STDataSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STDataSource.ctorParameters = () => [
    { type: _HttpClient },
    { type: CNCurrencyPipe, decorators: [{ type: Host }] },
    { type: DatePipe, decorators: [{ type: Host }] },
    { type: YNPipe, decorators: [{ type: Host }] },
    { type: DecimalPipe, decorators: [{ type: Host }] },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    STDataSource.prototype.http;
    /** @type {?} */
    STDataSource.prototype.currentyPipe;
    /** @type {?} */
    STDataSource.prototype.datePipe;
    /** @type {?} */
    STDataSource.prototype.ynPipe;
    /** @type {?} */
    STDataSource.prototype.numberPipe;
    /** @type {?} */
    STDataSource.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQWtCdEMseUNBWUM7OztJQVhDLGlDQUFZOztJQUNaLGlDQUFZOztJQUNaLG1DQUFnRDs7SUFDaEQsb0NBQWU7O0lBQ2Ysa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osbUNBQWM7O0lBQ2Qsc0NBQXFCOztJQUNyQix5Q0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsMkNBQThCOzs7OztBQUdoQyx3Q0FhQzs7Ozs7O0lBWEMsc0NBQW1COzs7OztJQUVuQixnQ0FBWTs7Ozs7SUFFWixnQ0FBWTs7Ozs7SUFFWixtQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7Ozs7O0lBRWhCLHlDQUFtQzs7QUFJckMsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7OztJQUN2QixZQUNVLElBQWlCLEVBQ1QsWUFBNEIsRUFDNUIsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXVCLEVBQy9CLEdBQWlCO1FBTGpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDVCxpQkFBWSxHQUFa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QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFjO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEYsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoWEYsVUFBVTs7OztZQWhERixXQUFXO1lBQUUsY0FBYyx1QkFvRC9CLElBQUk7WUFwRDZCLFFBQVEsdUJBcUR6QyxJQUFJO1lBckR1QyxNQUFNLHVCQXNEakQsSUFBSTtZQTVEQSxXQUFXLHVCQTZEZixJQUFJO1lBM0RBLFlBQVk7Ozs7SUF1RGpCLDRCQUF5Qjs7SUFDekIsb0NBQTRDOztJQUM1QyxnQ0FBa0M7O0lBQ2xDLDhCQUE4Qjs7SUFDOUIsa0NBQXVDOztJQUN2QywyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0O1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDmlrAgYHBpYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDmlbDmja4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsPzogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjdXJyZW50eVBpcGU6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldFBzOiBudW1iZXI7XG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cbiAgICAgICAgICAgICAgICByZXMucmVOYW1lLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlcilcbiAgICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIuZm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5mcm9udCkge1xuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJlLXByb2Nlc3NcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MocmVzdWx0KSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSRcbiAgICAgICAgLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgICBzdGF0aXN0aWNhbDogdGhpcy5nZW5TdGF0aXN0aWNhbChjb2x1bW5zLCByZXRMaXN0KSxcbiAgICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IHsgdGV4dDogYW55OyBvcmc/OiBhbnkgfSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcbiAgICAgIGlmICh+Zm9ybWF0UmVzLmluZGV4T2YoJzwnKSkge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzID09IG51bGwgPyAnJyA6IGZvcm1hdFJlcywgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXQgPSBjb2wubm9JbmRleCArIGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXQgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4geyB0ZXh0OiByZXQgPT0gbnVsbCA/ICcnIDogcmV0LCBvcmc6IHZhbHVlIH07XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICBwYXJhbXMgPSB7XG4gICAgICAgIFtyZXEucmVOYW1lLnBpXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICBbcmVxLnJlTmFtZS5wc106IHBzLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0ge1xuICAgICAgICBbcmVxLnJlTmFtZS5za2lwXTogKHBpIC0gMSkgKiBwcyxcbiAgICAgICAgW3JlcS5yZU5hbWUubGltaXRdOiBwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgIH07XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgbGV0IHJlcU9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1uc1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdClcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRMaXN0WzBdLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRMaXN0WzBdLmNvbXBhcmUoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0TGlzdFswXS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0LFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQsXG4gICAgY29sdW1uczogU1RDb2x1bW5bXSxcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKCFtdWx0aVNvcnQgJiYgc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgY29uc3QgbXMgPSB7XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgICAuLi5tdWx0aVNvcnQsXG4gICAgICB9O1xuICAgICAgc29ydExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgcmV0W2l0ZW0ua2V5XSA9IChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0XSB8fCBpdGVtLmRlZmF1bHQ7XG4gICAgICB9KTtcbiAgICAgIC8vIOWQiOW5tuWkhOeQhlxuICAgICAgcmV0ID0ge1xuICAgICAgICBbbXMua2V5XTogT2JqZWN0LmtleXMocmV0KVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArIG1zLm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcbiAgICAgICAgICAuam9pbihtcy5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWFwRGF0YSA9IHNvcnRMaXN0WzBdO1xuICAgICAgbGV0IHNvcnRGaWxlZCA9IG1hcERhdGEua2V5O1xuICAgICAgbGV0IHNvcnRWYWx1ZSA9IChzb3J0TGlzdFswXS5yZU5hbWUgfHwge30pW21hcERhdGEuZGVmYXVsdF0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgICAgc29ydFZhbHVlID0gc29ydEZpbGVkICsgKHNpbmdsZVNvcnQubmFtZVNlcGFyYXRvciB8fCAnLicpICsgc29ydFZhbHVlO1xuICAgICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgICB9XG4gICAgICByZXRbc29ydEZpbGVkXSA9IHNvcnRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlci5tZW51cy5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpO1xuICAgICAgICBsZXQgb2JqOiB7fSA9IHt9O1xuICAgICAgICBpZiAoY29sLmZpbHRlci5yZU5hbWUpIHtcbiAgICAgICAgICBvYmogPSBjb2wuZmlsdGVyLnJlTmFtZShjb2wuZmlsdGVyLm1lbnVzLCBjb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtjb2wuZmlsdGVyLmtleV0gPSB2YWx1ZXMubWFwKGkgPT4gaS52YWx1ZSkuam9pbignLCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IHsgLi4ucmV0LCAuLi5vYmogfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBTVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSk6IFNUU3RhdGlzdGljYWxSZXN1bHRzIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIHJlc1tjb2wua2V5ID8gY29sLmtleSA6IGluZGV4XSA9IGNvbC5zdGF0aXN0aWNhbCA9PSBudWxsID8ge30gOiB0aGlzLmdldFN0YXRpc3RpY2FsKGNvbCwgaW5kZXgsIGxpc3QpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXRpc3RpY2FsKGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gICAgY29uc3QgdmFsID0gY29sLnN0YXRpc3RpY2FsO1xuICAgIGNvbnN0IGl0ZW06IFNUU3RhdGlzdGljYWwgPSB7XG4gICAgICBkaWdpdHM6IDIsXG4gICAgICBjdXJyZW50eTogbnVsbCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKSxcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbnR5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCk7XG4gICAgICBjdXJyZW50eSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcihcbiAgICAgICAgICAgICh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgsXG4gICAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMpO1xuICAgICAgICAgIGN1cnJlbnR5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyk7XG4gICAgICAgICAgY3VycmVudHkgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXgnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IE1hdGgubWF4KC4uLnRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSk7XG4gICAgICAgICAgY3VycmVudHkgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IE1hdGgubWluKC4uLnRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSk7XG4gICAgICAgICAgY3VycmVudHkgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXRlbS5jdXJyZW50eSA9PT0gdHJ1ZSB8fCAoaXRlbS5jdXJyZW50eSA9PSBudWxsICYmIGN1cnJlbnR5ID09PSB0cnVlKSkge1xuICAgICAgcmVzLnRleHQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0ocmVzLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gaSA9PSBudWxsID8gMCA6IGkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdW0oaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10pOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkucmVkdWNlKFxuICAgICAgKHAsIGkpID0+IChwICs9IGkgPT0gbnVsbCA/IDAgOiBwYXJzZUZsb2F0KFN0cmluZyhpLnRvU3RyaW5nKCkgPT09ICcnID8gMCA6IGkpKSksXG4gICAgICAwLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=