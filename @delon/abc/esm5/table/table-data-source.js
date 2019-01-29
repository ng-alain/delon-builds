/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
}
var STDataSource = /** @class */ (function () {
    function STDataSource(http, currentyPipe, datePipe, ynPipe, numberPipe, dom) {
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
    STDataSource.prototype.process = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Promise(function (resolvePromise, rejectPromise) {
            /** @type {?} */
            var data$;
            /** @type {?} */
            var isRemote = false;
            var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, columns = options.columns;
            /** @type {?} */
            var retTotal;
            /** @type {?} */
            var retPs;
            /** @type {?} */
            var retList;
            /** @type {?} */
            var retPi;
            /** @type {?} */
            var showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = _this.getByHttp(data, options).pipe(map(function (result) {
                    /** @type {?} */
                    var ret;
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
                        var resultTotal = res.reName.total && deepGet(result, (/** @type {?} */ (res.reName.total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return ret;
                }), catchError(function (err) {
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
                map(function (result) {
                    /** @type {?} */
                    var copyResult = result.slice(0);
                    /** @type {?} */
                    var sorterFn = _this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                }), 
                // filter
                map(function (result) {
                    columns
                        .filter(function (w) { return w.filter; })
                        .forEach(function (c) {
                        /** @type {?} */
                        var values = c.filter.menus.filter(function (w) { return w.checked; });
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        var onFilter = c.filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter(function (record) { return values.some(function (v) { return onFilter(v, record); }); });
                    });
                    return result;
                }), 
                // paging
                map(function (result) {
                    if (page.front) {
                        /** @type {?} */
                        var maxPageIndex = Math.ceil(result.length / ps);
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
                data$ = data$.pipe(map(function (result) { return res.process(result); }));
            }
            // data accelerator
            data$ = data$.pipe(map(function (result) {
                var _loop_1 = function (i, len) {
                    result[i]._values = columns.map(function (c) { return _this.get(result[i], c, i); });
                    if (options.rowClassName) {
                        result[i]._rowClassName = options.rowClassName(result[i], i);
                    }
                };
                for (var i = 0, len = result.length; i < len; i++) {
                    _loop_1(i, len);
                }
                return result;
            }));
            data$
                .forEach(function (result) { return (retList = result); })
                .then(function () {
                /** @type {?} */
                var realTotal = retTotal || total;
                /** @type {?} */
                var realPs = retPs || ps;
                resolvePromise({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                });
            });
        });
    };
    /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    STDataSource.prototype.get = /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    function (item, col, idx) {
        if (col.format) {
            /** @type {?} */
            var formatRes = col.format(item, col);
            if (~formatRes.indexOf('<')) {
                return this.dom.bypassSecurityTrustHtml(formatRes);
            }
            return formatRes;
        }
        /** @type {?} */
        var value = deepGet(item, (/** @type {?} */ (col.index)), col.default);
        /** @type {?} */
        var ret = value;
        switch (col.type) {
            case 'no':
                ret = col.noIndex + idx;
                break;
            case 'img':
                ret = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
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
        return ret == null ? '' : ret;
    };
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    STDataSource.prototype.getByHttp = /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    function (url, options) {
        var _a, _b;
        var req = options.req, page = options.page, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
        /** @type {?} */
        var method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        var params = {};
        if (req.type === 'page') {
            params = (_a = {},
                _a[req.reName.pi] = page.zeroIndexed ? pi - 1 : pi,
                _a[req.reName.ps] = ps,
                _a);
        }
        else {
            params = (_b = {},
                _b[req.reName.skip] = (pi - 1) * ps,
                _b[req.reName.limit] = ps,
                _b);
        }
        params = tslib_1.__assign({}, params, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var reqOptions = {
            params: params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: tslib_1.__assign({}, req.body, params),
                headers: req.headers,
            };
        }
        return this.http.request(method, url, reqOptions);
    };
    //#region sort
    //#region sort
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getValidSort = 
    //#region sort
    /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns
            .filter(function (item) { return item._sort && item._sort.enabled && item._sort.default; })
            .map(function (item) { return item._sort; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getSorterFn = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        if (typeof sortList[0].compare !== 'function') {
            console.warn("[st] Muse provide the compare function in sort");
            return;
        }
        return function (a, b) {
            /** @type {?} */
            var result = sortList[0].compare(a, b);
            if (result !== 0) {
                return sortList[0].default === 'descend' ? -result : result;
            }
            return 0;
        };
    };
    /**
     * @param {?} singleSort
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqSortMap = /**
     * @param {?} singleSort
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    function (singleSort, multiSort, columns) {
        var _a;
        /** @type {?} */
        var ret = {};
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (!multiSort && sortList.length === 0)
            return ret;
        if (multiSort) {
            /** @type {?} */
            var ms_1 = tslib_1.__assign({ key: 'sort', separator: '-', nameSeparator: '.' }, multiSort);
            sortList.forEach(function (item) {
                ret[item.key] = (item.reName || {})[item.default] || item.default;
            });
            // 合并处理
            ret = (_a = {},
                _a[ms_1.key] = Object.keys(ret)
                    .map(function (key) { return key + ms_1.nameSeparator + ret[key]; })
                    .join(ms_1.separator),
                _a);
        }
        else {
            /** @type {?} */
            var mapData = sortList[0];
            /** @type {?} */
            var sortFiled = mapData.key;
            /** @type {?} */
            var sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[sortFiled] = sortValue;
        }
        return ret;
    };
    //#endregion
    //#region filter
    //#endregion
    //#region filter
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqFilterMap = 
    //#endregion
    //#region filter
    /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var ret = {};
        columns
            .filter(function (w) { return w.filter && w.filter.default === true; })
            .forEach(function (col) {
            /** @type {?} */
            var values = col.filter.menus.filter(function (f) { return f.checked === true; });
            /** @type {?} */
            var obj = {};
            if (col.filter.reName) {
                obj = col.filter.reName(col.filter.menus, col);
            }
            else {
                obj[col.filter.key] = values.map(function (i) { return i.value; }).join(',');
            }
            ret = tslib_1.__assign({}, ret, obj);
        });
        return ret;
    };
    STDataSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STDataSource.ctorParameters = function () { return [
        { type: _HttpClient },
        { type: CNCurrencyPipe, decorators: [{ type: Host }] },
        { type: DatePipe, decorators: [{ type: Host }] },
        { type: YNPipe, decorators: [{ type: Host }] },
        { type: DecimalPipe, decorators: [{ type: Host }] },
        { type: DomSanitizer }
    ]; };
    return STDataSource;
}());
export { STDataSource };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFjdEMseUNBWUM7OztJQVhDLGlDQUFZOztJQUNaLGlDQUFZOztJQUNaLG1DQUFnRDs7SUFDaEQsb0NBQWU7O0lBQ2Ysa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osbUNBQWM7O0lBQ2Qsc0NBQXFCOztJQUNyQix5Q0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsMkNBQThCOzs7OztBQUdoQyx3Q0FXQzs7Ozs7O0lBVEMsc0NBQW1COzs7OztJQUVuQixnQ0FBWTs7Ozs7SUFFWixnQ0FBWTs7Ozs7SUFFWixtQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7O0FBR2xCO0lBRUUsc0JBQ1UsSUFBaUIsRUFDVCxZQUE0QixFQUM1QixRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FB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Q0QsR0FBRyx3QkFBUSxHQUFHLEVBQUssR0FBRyxDQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQWhTRixVQUFVOzs7O2dCQTFDRixXQUFXO2dCQUFFLGNBQWMsdUJBOEMvQixJQUFJO2dCQTlDNkIsUUFBUSx1QkErQ3pDLElBQUk7Z0JBL0N1QyxNQUFNLHVCQWdEakQsSUFBSTtnQkF0REEsV0FBVyx1QkF1RGYsSUFBSTtnQkFyREEsWUFBWTs7SUFpVnJCLG1CQUFDO0NBQUEsQUFuU0QsSUFtU0M7U0FsU1ksWUFBWTs7O0lBRXJCLDRCQUF5Qjs7SUFDekIsb0NBQTRDOztJQUM1QyxnQ0FBa0M7O0lBQ2xDLDhCQUE4Qjs7SUFDOUIsa0NBQXVDOztJQUN2QywyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbD86IG51bWJlcjtcbiAgcmVxPzogU1RSZXE7XG4gIHJlcz86IFNUUmVzO1xuICBwYWdlPzogU1RQYWdlO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDmmK/lkKbpnIDopoHmmL7npLrliIbpobXlmaggKi9cbiAgcGFnZVNob3c/OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpPzogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzPzogbnVtYmVyO1xuICAvKiog5pawIGB0b3RhbGDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHRvdGFsPzogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q/OiBTVERhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5UGlwZTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xuICAgICAgbGV0IHNob3dQYWdlID0gcGFnZS5zaG93O1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDogU1REYXRhW107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXQubGVuZ3RoO1xuICAgICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgICBzaG93UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgICByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPVxuICAgICAgICAgICAgICAgIHJlcy5yZU5hbWUudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICAgIGRhdGEkID0gZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgLy8gc29ydFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSByZXN1bHQuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XG4gICAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBjLmZpbHRlci5tZW51cy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBjLmZpbHRlci5mbjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSRcbiAgICAgICAgLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgICBwYWdlU2hvdzogdHlwZW9mIHNob3dQYWdlID09PSAndW5kZWZpbmVkJyA/IHJlYWxUb3RhbCA+IHJlYWxQcyA6IHNob3dQYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xuICAgICAgaWYgKH5mb3JtYXRSZXMuaW5kZXhPZignPCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdFJlcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXQgPSBjb2wubm9JbmRleCArIGlkeDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXQgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmV0ID09IG51bGwgPyAnJyA6IHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKHVybDogc3RyaW5nLCBvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgW3JlcS5yZU5hbWUucGldOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgIFtyZXEucmVOYW1lLnBzXTogcHMsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSB7XG4gICAgICAgIFtyZXEucmVOYW1lLnNraXBdOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICBbcmVxLnJlTmFtZS5saW1pdF06IHBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBsZXQgcmVxT3B0aW9uczogYW55ID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydExpc3RbMF0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQsXG4gICAgbXVsdGlTb3J0OiBTVE11bHRpU29ydCxcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBjb25zdCBtcyA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG4gICAgICBzb3J0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICByZXRbaXRlbS5rZXldID0gKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHRdIHx8IGl0ZW0uZGVmYXVsdDtcbiAgICAgIH0pO1xuICAgICAgLy8g5ZCI5bm25aSE55CGXG4gICAgICByZXQgPSB7XG4gICAgICAgIFttcy5rZXldOiBPYmplY3Qua2V5cyhyZXQpXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXMubmFtZVNlcGFyYXRvciArIHJldFtrZXldKVxuICAgICAgICAgIC5qb2luKG1zLnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICBsZXQgc29ydEZpbGVkID0gbWFwRGF0YS5rZXk7XG4gICAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0XSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICAgIH1cbiAgICAgIHJldFtzb3J0RmlsZWRdID0gc29ydFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnM6IFNUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIGxldCBvYmo6IHt9ID0ge307XG4gICAgICAgIGlmIChjb2wuZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGNvbC5maWx0ZXIucmVOYW1lKGNvbC5maWx0ZXIubWVudXMsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2NvbC5maWx0ZXIua2V5XSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxufVxuIl19