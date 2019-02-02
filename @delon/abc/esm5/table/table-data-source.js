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
    /**
     * 统计数据
     * @type {?|undefined}
     */
    STDataSourceResult.prototype.statistical;
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
                    statistical: _this.genStatistical(columns, retList),
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
            if (formatRes && ~formatRes.indexOf('</')) {
                return { text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
            }
            return { text: formatRes == null ? '' : formatRes, org: formatRes };
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
        return { text: ret == null ? '' : ret, org: value };
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
        if (typeof req.process === 'function') {
            reqOptions = req.process(reqOptions);
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
    //#endregion
    // #region statistical
    //#endregion
    // #region statistical
    /**
     * @param {?} columns
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.genStatistical = 
    //#endregion
    // #region statistical
    /**
     * @param {?} columns
     * @param {?} list
     * @return {?}
     */
    function (columns, list) {
        var _this = this;
        /** @type {?} */
        var res = {};
        columns.forEach(function (col, index) {
            res[col.key ? col.key : index] =
                col.statistical == null ? {} : _this.getStatistical(col, index, list);
        });
        return res;
    };
    /**
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.getStatistical = /**
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    function (col, index, list) {
        /** @type {?} */
        var val = col.statistical;
        /** @type {?} */
        var item = tslib_1.__assign({ digits: 2, currenty: null }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
        /** @type {?} */
        var res = { value: 0 };
        /** @type {?} */
        var currenty = false;
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
                    res.value = this.getValues(index, list).filter(function (value, idx, self) { return self.indexOf(value) === idx; }).length;
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
                    res.value = Math.max.apply(Math, tslib_1.__spread(this.getValues(index, list)));
                    currenty = true;
                    break;
                case 'min':
                    res.value = Math.min.apply(Math, tslib_1.__spread(this.getValues(index, list)));
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
    };
    /**
     * @param {?} val
     * @param {?} digits
     * @return {?}
     */
    STDataSource.prototype.toFixed = /**
     * @param {?} val
     * @param {?} digits
     * @return {?}
     */
    function (val, digits) {
        if (isNaN(val) || !isFinite(val)) {
            return 0;
        }
        return parseFloat(val.toFixed(digits));
    };
    /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.getValues = /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    function (index, list) {
        return list.map(function (i) { return i._values[index].org; }).map(function (i) { return (i === '' || i == null ? 0 : i); });
    };
    /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.getSum = /**
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    function (index, list) {
        return this.getValues(index, list).reduce(function (p, i) { return (p += parseFloat(String(i))); }, 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFtQnRDLHlDQVlDOzs7SUFYQyxpQ0FBWTs7SUFDWixpQ0FBWTs7SUFDWixtQ0FBZ0Q7O0lBQ2hELG9DQUFlOztJQUNmLGtDQUFZOztJQUNaLGtDQUFZOztJQUNaLG1DQUFjOztJQUNkLHNDQUFxQjs7SUFDckIseUNBQTBCOztJQUMxQix3Q0FBd0I7O0lBQ3hCLDJDQUE4Qjs7Ozs7QUFHaEMsd0NBYUM7Ozs7OztJQVhDLHNDQUFtQjs7Ozs7SUFFbkIsZ0NBQVk7Ozs7O0lBRVosZ0NBQVk7Ozs7O0lBRVosbUNBQWU7Ozs7O0lBRWYsa0NBQWdCOzs7OztJQUVoQix5Q0FBbUM7O0FBR3JDO0lBRUUsc0JBQ1UsSUFBaUIsRUFDVCxZQUE0QixFQUM1QixRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixhQUFR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SUF3YXJCLG1CQUFDO0NBQUEsQUFuWEQsSUFtWEM7U0FsWFksWUFBWTs7O0lBRXJCLDRCQUF5Qjs7SUFDekIsb0NBQTRDOztJQUM1QyxnQ0FBa0M7O0lBQ2xDLDhCQUE4Qjs7SUFDOUIsa0NBQXVDOztJQUN2QywyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxdWVzdE9wdGlvbnMsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0O1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDmlrAgYHBpYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDmlbDmja4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsPzogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjdXJyZW50eVBpcGU6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldFBzOiBudW1iZXI7XG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cbiAgICAgICAgICAgICAgICByZXMucmVOYW1lLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlcilcbiAgICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIuZm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5mcm9udCkge1xuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJlLXByb2Nlc3NcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MocmVzdWx0KSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSRcbiAgICAgICAgLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgICBzdGF0aXN0aWNhbDogdGhpcy5nZW5TdGF0aXN0aWNhbChjb2x1bW5zLCByZXRMaXN0KSxcbiAgICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IHsgdGV4dDogYW55OyBvcmc/OiBhbnkgfSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcbiAgICAgIGlmIChmb3JtYXRSZXMgJiYgfmZvcm1hdFJlcy5pbmRleE9mKCc8LycpKSB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcyksIG9yZzogZm9ybWF0UmVzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXRSZXMgPT0gbnVsbCA/ICcnIDogZm9ybWF0UmVzLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcblxuICAgIGxldCByZXQgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICBjYXNlICdubyc6XG4gICAgICAgIHJldCA9IGNvbC5ub0luZGV4ICsgaWR4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgIHJldCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneW4nOlxuICAgICAgICByZXQgPSB0aGlzLnluUGlwZS50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55bi50cnV0aCwgY29sLnluLnllcywgY29sLnluLm5vKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7IHRleHQ6IHJldCA9PSBudWxsID8gJycgOiByZXQsIG9yZzogdmFsdWUgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKHVybDogc3RyaW5nLCBvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgW3JlcS5yZU5hbWUucGldOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgIFtyZXEucmVOYW1lLnBzXTogcHMsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSB7XG4gICAgICAgIFtyZXEucmVOYW1lLnNraXBdOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICBbcmVxLnJlTmFtZS5saW1pdF06IHBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0TGlzdFswXS5jb21wYXJlKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydExpc3RbMF0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKFxuICAgIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCxcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAgLi4ubXVsdGlTb3J0LFxuICAgICAgfTtcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xuICAgICAgfSk7XG4gICAgICAvLyDlkIjlubblpITnkIZcbiAgICAgIHJldCA9IHtcbiAgICAgICAgW21zLmtleV06IE9iamVjdC5rZXlzKHJldClcbiAgICAgICAgICAubWFwKGtleSA9PiBrZXkgKyBtcy5uYW1lU2VwYXJhdG9yICsgcmV0W2tleV0pXG4gICAgICAgICAgLmpvaW4obXMuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICAgIGlmIChzaW5nbGVTb3J0KSB7XG4gICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRGaWxlZCArIChzaW5nbGVTb3J0Lm5hbWVTZXBhcmF0b3IgfHwgJy4nKSArIHNvcnRWYWx1ZTtcbiAgICAgICAgc29ydEZpbGVkID0gc2luZ2xlU29ydC5rZXkgfHwgJ3NvcnQnO1xuICAgICAgfVxuICAgICAgcmV0W3NvcnRGaWxlZF0gPSBzb3J0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcbiAgICAgICAgbGV0IG9iajoge30gPSB7fTtcbiAgICAgICAgaWYgKGNvbC5maWx0ZXIucmVOYW1lKSB7XG4gICAgICAgICAgb2JqID0gY29sLmZpbHRlci5yZU5hbWUoY29sLmZpbHRlci5tZW51cywgY29sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbY29sLmZpbHRlci5rZXldID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB7IC4uLnJldCwgLi4ub2JqIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzdGF0aXN0aWNhbFxuXG4gIHByaXZhdGUgZ2VuU3RhdGlzdGljYWwoY29sdW1uczogU1RDb2x1bW5bXSwgbGlzdDogU1REYXRhW10pOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICByZXNbY29sLmtleSA/IGNvbC5rZXkgOiBpbmRleF0gPVxuICAgICAgICBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVudHk6IG51bGwsXG4gICAgICAuLi4odHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHZhbCBhcyBTVFN0YXRpc3RpY2FsVHlwZSB9IDogKHZhbCBhcyBTVFN0YXRpc3RpY2FsKSksXG4gICAgfTtcbiAgICBsZXQgcmVzOiBTVFN0YXRpc3RpY2FsUmVzdWx0ID0geyB2YWx1ZTogMCB9O1xuICAgIGxldCBjdXJyZW50eSA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgaXRlbS50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXMgPSBpdGVtLnR5cGUodGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLCBjb2wsIGxpc3QpO1xuICAgICAgY3VycmVudHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICBjYXNlICdjb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rpc3RpbmN0Q291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5maWx0ZXIoXG4gICAgICAgICAgICAodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4LFxuICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdW0nOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCksIGl0ZW0uZGlnaXRzKTtcbiAgICAgICAgICBjdXJyZW50eSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMpO1xuICAgICAgICAgIGN1cnJlbnR5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbnR5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbnR5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVudHkgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVudHkgPT0gbnVsbCAmJiBjdXJyZW50eSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHJlcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy50ZXh0ID0gU3RyaW5nKHJlcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHRvRml4ZWQodmFsOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoaXNOYU4odmFsKSB8fCAhaXNGaW5pdGUodmFsKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbC50b0ZpeGVkKGRpZ2l0cykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWx1ZXMoaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10pOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKGkgPT4gaS5fdmFsdWVzW2luZGV4XS5vcmcpLm1hcChpID0+IChpID09PSAnJyB8fCBpID09IG51bGwgPyAwIDogaSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdW0oaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10pOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkucmVkdWNlKChwLCBpKSA9PiAocCArPSBwYXJzZUZsb2F0KFN0cmluZyhpKSkpLCAwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==