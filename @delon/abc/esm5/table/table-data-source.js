/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DecimalPipe } from '@angular/common';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _HttpClient, CNCurrencyPipe, DatePipe, YNPipe } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
/**
 * @record
 */
export function STDataSourceOptions() { }
if (false) {
    /** @type {?} */
    STDataSourceOptions.prototype.pi;
    /** @type {?} */
    STDataSourceOptions.prototype.ps;
    /** @type {?} */
    STDataSourceOptions.prototype.data;
    /** @type {?} */
    STDataSourceOptions.prototype.total;
    /** @type {?} */
    STDataSourceOptions.prototype.req;
    /** @type {?} */
    STDataSourceOptions.prototype.res;
    /** @type {?} */
    STDataSourceOptions.prototype.page;
    /** @type {?} */
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
     * @type {?}
     */
    STDataSourceResult.prototype.pageShow;
    /**
     * 新 `pi`，若返回 `undefined` 表示用户受控
     * @type {?}
     */
    STDataSourceResult.prototype.pi;
    /**
     * 新 `ps`，若返回 `undefined` 表示用户受控
     * @type {?}
     */
    STDataSourceResult.prototype.ps;
    /**
     * 新 `total`，若返回 `undefined` 表示用户受控
     * @type {?}
     */
    STDataSourceResult.prototype.total;
    /**
     * 数据
     * @type {?}
     */
    STDataSourceResult.prototype.list;
    /**
     * 统计数据
     * @type {?}
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
        this.sortTick = 0;
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
        return new Promise((/**
         * @param {?} resolvePromise
         * @param {?} rejectPromise
         * @return {?}
         */
        function (resolvePromise, rejectPromise) {
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
            var rawData;
            /** @type {?} */
            var showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = _this.getByHttp(data, options).pipe(map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    rawData = result;
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
                        ret = deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).list)), []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        /** @type {?} */
                        var resultTotal = (/** @type {?} */ (res.reName)).total && deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return deepCopy(ret);
                })), catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    rejectPromise(err);
                    return [];
                })));
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
                map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    rawData = result;
                    /** @type {?} */
                    var copyResult = deepCopy(result);
                    /** @type {?} */
                    var sorterFn = _this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                })), 
                // filter
                map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    columns
                        .filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w.filter; }))
                        .forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) {
                        /** @type {?} */
                        var values = (/** @type {?} */ (c.filter)).menus.filter((/**
                         * @param {?} w
                         * @return {?}
                         */
                        function (w) { return w.checked; }));
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        var onFilter = (/** @type {?} */ (c.filter)).fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter((/**
                         * @param {?} record
                         * @return {?}
                         */
                        function (record) { return values.some((/**
                         * @param {?} v
                         * @return {?}
                         */
                        function (v) { return onFilter(v, record); })); }));
                    }));
                    return result;
                })), 
                // paging
                map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
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
                })));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return (/** @type {?} */ (res.process))(result, rawData); })));
            }
            // data accelerator
            data$ = data$.pipe(map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                var _loop_1 = function (i, len) {
                    result[i]._values = columns.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return _this.get(result[i], c, i); }));
                    if (options.rowClassName) {
                        result[i]._rowClassName = options.rowClassName(result[i], i);
                    }
                };
                for (var i = 0, len = result.length; i < len; i++) {
                    _loop_1(i, len);
                }
                return result;
            })));
            data$
                .forEach((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return (retList = result); }))
                .then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var realTotal = retTotal || total;
                /** @type {?} */
                var realPs = retPs || ps;
                resolvePromise({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: _this.genStatistical(columns, retList, rawData),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                });
            }));
        }));
    };
    /**
     * @private
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    STDataSource.prototype.get = /**
     * @private
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
                ret = this.getNoIndex(item, col, idx);
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
                ret = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)));
                break;
        }
        return { text: ret == null ? '' : ret, org: value };
    };
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    STDataSource.prototype.getByHttp = /**
     * @private
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
        /** @type {?} */
        var reName = (/** @type {?} */ (req.reName));
        if (req.type === 'page') {
            params = (_a = {},
                _a[(/** @type {?} */ (reName.pi))] = page.zeroIndexed ? pi - 1 : pi,
                _a[(/** @type {?} */ (reName.ps))] = ps,
                _a);
        }
        else {
            params = (_b = {},
                _b[(/** @type {?} */ (reName.skip))] = (pi - 1) * ps,
                _b[(/** @type {?} */ (reName.limit))] = ps,
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
    /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    STDataSource.prototype.getNoIndex = /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    function (item, col, idx) {
        return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : (/** @type {?} */ (col.noIndex)) + idx;
    };
    // #region sort
    // #region sort
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getValidSort = 
    // #region sort
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._sort && item._sort.enabled && item._sort.default; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._sort; }));
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getSorterFn = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        /** @type {?} */
        var sortItem = sortList[0];
        if (sortItem.compare === null) {
            return;
        }
        if (typeof sortItem.compare !== 'function') {
            console.warn("[st] Muse provide the compare function in sort");
            return;
        }
        return (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var result = (/** @type {?} */ (sortItem.compare))(a, b);
            if (result !== 0) {
                return sortItem.default === 'descend' ? -result : result;
            }
            return 0;
        });
    };
    Object.defineProperty(STDataSource.prototype, "nextSortTick", {
        get: /**
         * @return {?}
         */
        function () {
            return ++this.sortTick;
        },
        enumerable: true,
        configurable: true
    });
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
            ret = (_a = {},
                _a[ms_1.key] = sortList
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.tick - b.tick; }))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.key + ms_1.nameSeparator + ((item.reName || {})[(/** @type {?} */ (item.default))] || item.default); }))
                    .join(ms_1.separator),
                _a);
        }
        else {
            /** @type {?} */
            var mapData = sortList[0];
            /** @type {?} */
            var sortFiled = mapData.key;
            /** @type {?} */
            var sortValue = (sortList[0].reName || {})[(/** @type {?} */ (mapData.default))] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[(/** @type {?} */ (sortFiled))] = (/** @type {?} */ (sortValue));
        }
        return ret;
    };
    // #endregion
    // #region filter
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqFilterMap = 
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var ret = {};
        columns
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.filter && w.filter.default === true; }))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) {
            /** @type {?} */
            var values = (/** @type {?} */ (col.filter)).menus.filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return f.checked === true; }));
            /** @type {?} */
            var obj = {};
            if ((/** @type {?} */ (col.filter)).reName) {
                obj = (/** @type {?} */ ((/** @type {?} */ (col.filter)).reName))((/** @type {?} */ (col.filter)).menus, col);
            }
            else {
                obj[(/** @type {?} */ ((/** @type {?} */ (col.filter)).key))] = values.map((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return i.value; })).join(',');
            }
            ret = tslib_1.__assign({}, ret, obj);
        }));
        return ret;
    };
    // #endregion
    // #region statistical
    // #endregion
    // #region statistical
    /**
     * @private
     * @param {?} columns
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    STDataSource.prototype.genStatistical = 
    // #endregion
    // #region statistical
    /**
     * @private
     * @param {?} columns
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    function (columns, list, rawData) {
        var _this = this;
        /** @type {?} */
        var res = {};
        columns.forEach((/**
         * @param {?} col
         * @param {?} index
         * @return {?}
         */
        function (col, index) {
            res[col.key ? col.key : index] = col.statistical == null ? {} : _this.getStatistical(col, index, list, rawData);
        }));
        return res;
    };
    /**
     * @private
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    STDataSource.prototype.getStatistical = /**
     * @private
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    function (col, index, list, rawData) {
        /** @type {?} */
        var val = col.statistical;
        /** @type {?} */
        var item = tslib_1.__assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
        /** @type {?} */
        var res = { value: 0 };
        /** @type {?} */
        var currency = false;
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
                    res.value = this.getValues(index, list).filter((/**
                     * @param {?} value
                     * @param {?} idx
                     * @param {?} self
                     * @return {?}
                     */
                    function (value, idx, self) { return self.indexOf(value) === idx; })).length;
                    break;
                case 'sum':
                    res.value = this.toFixed(this.getSum(index, list), (/** @type {?} */ (item.digits)));
                    currency = true;
                    break;
                case 'average':
                    res.value = this.toFixed(this.getSum(index, list) / list.length, (/** @type {?} */ (item.digits)));
                    currency = true;
                    break;
                case 'max':
                    res.value = Math.max.apply(Math, tslib_1.__spread(this.getValues(index, list)));
                    currency = true;
                    break;
                case 'min':
                    res.value = Math.min.apply(Math, tslib_1.__spread(this.getValues(index, list)));
                    currency = true;
                    break;
            }
        }
        if (item.currency === true || (item.currency == null && currency === true)) {
            res.text = (/** @type {?} */ (this.currentyPipe.transform(res.value)));
        }
        else {
            res.text = String(res.value);
        }
        return res;
    };
    /**
     * @private
     * @param {?} val
     * @param {?} digits
     * @return {?}
     */
    STDataSource.prototype.toFixed = /**
     * @private
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
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.getValues = /**
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    function (index, list) {
        return list.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i._values[index].org; })).map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i === '' || i == null ? 0 : i); }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    STDataSource.prototype.getSum = /**
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    function (index, list) {
        return this.getValues(index, list).reduce((/**
         * @param {?} p
         * @param {?} i
         * @return {?}
         */
        function (p, i) { return (p += parseFloat(String(i))); }), 0);
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
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.sortTick;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.http;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.currentyPipe;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.datePipe;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.ynPipe;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.numberPipe;
    /**
     * @type {?}
     * @private
     */
    STDataSource.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBb0JqRCx5Q0FZQzs7O0lBWEMsaUNBQVc7O0lBQ1gsaUNBQVc7O0lBQ1gsbUNBQStDOztJQUMvQyxvQ0FBYzs7SUFDZCxrQ0FBVzs7SUFDWCxrQ0FBVzs7SUFDWCxtQ0FBYTs7SUFDYixzQ0FBb0I7O0lBQ3BCLHlDQUFpQzs7SUFDakMsd0NBQStCOztJQUMvQiwyQ0FBOEI7Ozs7O0FBR2hDLHdDQWFDOzs7Ozs7SUFYQyxzQ0FBa0I7Ozs7O0lBRWxCLGdDQUFXOzs7OztJQUVYLGdDQUFXOzs7OztJQUVYLG1DQUFjOzs7OztJQUVkLGtDQUFlOzs7OztJQUVmLHlDQUFrQzs7QUFHcEM7SUFJRSxzQkFDVSxJQUFpQixFQUNULFlBQTRCLEVBQzVCLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUF1QixFQUMvQixHQUFpQjtRQUxqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1QsaUJBQVksR0FBWixZQUFZLENBQWdCO1FB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QkFwREYsV0FBVztnQkFBRSxjQUFjLHVCQTBEL0IsSUFBSTtnQkExRDZCLFFBQVEsdUJBMkR6QyxJQUFJO2dCQTNEdUMsTUFBTSx1QkE0RGpELElBQUk7Z0JBL0RBLFdBQVcsdUJBZ0VmLElBQUk7Z0JBOURBLFlBQVk7O0lBa2JyQixtQkFBQztDQUFBLEFBN1hELElBNlhDO1NBNVhZLFlBQVk7Ozs7OztJQUN2QixnQ0FBcUI7Ozs7O0lBR25CLDRCQUF5Qjs7Ozs7SUFDekIsb0NBQTRDOzs7OztJQUM1QyxnQ0FBa0M7Ozs7O0lBQ2xDLDhCQUE4Qjs7Ozs7SUFDOUIsa0NBQXVDOzs7OztJQUN2QywyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1REYXRhLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXFSZU5hbWVUeXBlLFxuICBTVFJlcyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaTogbnVtYmVyO1xuICBwczogbnVtYmVyO1xuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbDogbnVtYmVyO1xuICByZXE6IFNUUmVxO1xuICByZXM6IFNUUmVzO1xuICBwYWdlOiBTVFBhZ2U7XG4gIGNvbHVtbnM6IFNUQ29sdW1uW107XG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydCB8IG51bGw7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDmmK/lkKbpnIDopoHmmL7npLrliIbpobXlmaggKi9cbiAgcGFnZVNob3c6IGJvb2xlYW47XG4gIC8qKiDmlrAgYHBpYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqIOaWsCBgcHNg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwczogbnVtYmVyO1xuICAvKiog5pawIGB0b3RhbGDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKiDmlbDmja4gKi9cbiAgbGlzdDogU1REYXRhW107XG4gIC8qKiDnu5/orqHmlbDmja4gKi9cbiAgc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzb3J0VGljayA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHlQaXBlOiBDTkN1cnJlbmN5UGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5blBpcGU6IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyUGlwZTogRGVjaW1hbFBpcGUsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICAgIGxldCByZXRQczogbnVtYmVyO1xuICAgICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgICAgbGV0IHJldFBpOiBudW1iZXI7XG4gICAgICBsZXQgcmF3RGF0YTogYW55O1xuICAgICAgbGV0IHNob3dQYWdlID0gcGFnZS5zaG93O1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9IHJlcy5yZU5hbWUhLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVlcENvcHkocmV0KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICAgIGRhdGEkID0gZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgLy8gc29ydFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gZGVlcENvcHkocmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGMuZmlsdGVyIS5tZW51cy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBjLmZpbHRlciEuZm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5mcm9udCkge1xuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJlLXByb2Nlc3NcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MhKHJlc3VsdCwgcmF3RGF0YSkpKTtcbiAgICAgIH1cblxuICAgICAgLy8gZGF0YSBhY2NlbGVyYXRvclxuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQocmVzdWx0W2ldLCBjLCBpKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yb3dDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ldLl9yb3dDbGFzc05hbWUgPSBvcHRpb25zLnJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIGRhdGEkXG4gICAgICAgIC5mb3JFYWNoKChyZXN1bHQ6IFNURGF0YVtdKSA9PiAocmV0TGlzdCA9IHJlc3VsdCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCByZWFsVG90YWwgPSByZXRUb3RhbCB8fCB0b3RhbDtcbiAgICAgICAgICBjb25zdCByZWFsUHMgPSByZXRQcyB8fCBwcztcbiAgICAgICAgICByZXNvbHZlUHJvbWlzZSh7XG4gICAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgICBwczogcmV0UHMsXG4gICAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgICAgc3RhdGlzdGljYWw6IHRoaXMuZ2VuU3RhdGlzdGljYWwoY29sdW1ucywgcmV0TGlzdCwgcmF3RGF0YSksXG4gICAgICAgICAgICBwYWdlU2hvdzogdHlwZW9mIHNob3dQYWdlID09PSAndW5kZWZpbmVkJyA/IHJlYWxUb3RhbCA+IHJlYWxQcyA6IHNob3dQYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpOiB7IHRleHQ6IGFueTsgb3JnPzogYW55IH0ge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCk7XG4gICAgICBpZiAoZm9ybWF0UmVzICYmIH5mb3JtYXRSZXMuaW5kZXhPZignPC8nKSkge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzID09IG51bGwgPyAnJyA6IGZvcm1hdFJlcywgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICByZXQgPSB0aGlzLmdldE5vSW5kZXgoaXRlbSwgY29sLCBpZHgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgIHJldCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHJldCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneW4nOlxuICAgICAgICByZXQgPSB0aGlzLnluUGlwZS50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55biEudHJ1dGgsIGNvbC55biEueWVzISwgY29sLnluIS5ubyEsIGNvbC55biEubW9kZSEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHsgdGV4dDogcmV0ID09IG51bGwgPyAnJyA6IHJldCwgb3JnOiB2YWx1ZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBpLCBwcywgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCByZU5hbWUgPSByZXEucmVOYW1lIGFzIFNUUmVxUmVOYW1lVHlwZTtcbiAgICBpZiAocmVxLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgcGFyYW1zID0ge1xuICAgICAgICBbcmVOYW1lLnBpIGFzIHN0cmluZ106IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgW3JlTmFtZS5wcyBhcyBzdHJpbmddOiBwcyxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgW3JlTmFtZS5za2lwIGFzIHN0cmluZ106IChwaSAtIDEpICogcHMsXG4gICAgICAgIFtyZU5hbWUubGltaXQgYXMgc3RyaW5nXTogcHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBwYXJhbXMgPSB7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICAuLi5yZXEucGFyYW1zLFxuICAgICAgLi4udGhpcy5nZXRSZXFTb3J0TWFwKHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICAuLi50aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKSxcbiAgICB9O1xuXG4gICAgbGV0IHJlcU9wdGlvbnM6IFNUUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IHsgLi4ucmVxLmJvZHksIC4uLnBhcmFtcyB9LFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVxLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSByZXEucHJvY2VzcyhyZXFPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIGdldE5vSW5kZXgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KS5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3J0SXRlbSA9IHNvcnRMaXN0WzBdO1xuICAgIGlmIChzb3J0SXRlbS5jb21wYXJlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydEl0ZW0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydEl0ZW0uY29tcGFyZSEoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0SXRlbS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBuZXh0U29ydFRpY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLnNvcnRUaWNrO1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAgLi4ubXVsdGlTb3J0LFxuICAgICAgfTtcblxuICAgICAgcmV0ID0ge1xuICAgICAgICBbbXMua2V5XTogc29ydExpc3RcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aWNrIC0gYi50aWNrKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmtleSArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKVxuICAgICAgICAgIC5qb2luKG1zLnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICBsZXQgc29ydEZpbGVkID0gbWFwRGF0YS5rZXk7XG4gICAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgICAgc29ydFZhbHVlID0gc29ydEZpbGVkICsgKHNpbmdsZVNvcnQubmFtZVNlcGFyYXRvciB8fCAnLicpICsgc29ydFZhbHVlO1xuICAgICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgICB9XG4gICAgICByZXRbc29ydEZpbGVkIGFzIHN0cmluZ10gPSBzb3J0VmFsdWUgYXMgc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIhLm1lbnVzLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIGxldCBvYmo6IHt9ID0ge307XG4gICAgICAgIGlmIChjb2wuZmlsdGVyIS5yZU5hbWUpIHtcbiAgICAgICAgICBvYmogPSBjb2wuZmlsdGVyIS5yZU5hbWUhKGNvbC5maWx0ZXIhLm1lbnVzLCBjb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtjb2wuZmlsdGVyIS5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBTVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgPyBjb2wua2V5IDogaW5kZXhdID0gY29sLnN0YXRpc3RpY2FsID09IG51bGwgPyB7fSA6IHRoaXMuZ2V0U3RhdGlzdGljYWwoY29sLCBpbmRleCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljYWwoY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IGFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKSxcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbmN5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5tYXgoLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5taW4oLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtLmN1cnJlbmN5ID09PSB0cnVlIHx8IChpdGVtLmN1cnJlbmN5ID09IG51bGwgJiYgY3VycmVuY3kgPT09IHRydWUpKSB7XG4gICAgICByZXMudGV4dCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybShyZXMudmFsdWUpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gKGkgPT09ICcnIHx8IGkgPT0gbnVsbCA/IDAgOiBpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN1bShpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5yZWR1Y2UoKHAsIGkpID0+IChwICs9IHBhcnNlRmxvYXQoU3RyaW5nKGkpKSksIDApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19