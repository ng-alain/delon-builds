/**
 * @fileoverview added by tsickle
 * Generated from: table-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DecimalPipe } from '@angular/common';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { _HttpClient, CNCurrencyPipe, DatePipe, YNPipe } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    STDataSourceOptions.prototype.paginator;
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
        /** @type {?} */
        var data$;
        /** @type {?} */
        var isRemote = false;
        var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, paginator = options.paginator, columns = options.columns;
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
            data$ = this.getByHttp(data, options).pipe(map((/**
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
                    var filter = (/** @type {?} */ (c.filter));
                    /** @type {?} */
                    var values = _this.getFilteredData(filter);
                    if (values.length === 0)
                        return;
                    /** @type {?} */
                    var onFilter = filter.fn;
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
                if (paginator && page.front) {
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
        data$ = data$.pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.optimizeData({ result: result, columns: columns, rowClassName: options.rowClassName }); })));
        return data$.pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            retList = result;
            /** @type {?} */
            var realTotal = retTotal || total;
            /** @type {?} */
            var realPs = retPs || ps;
            return (/** @type {?} */ ({
                pi: retPi,
                ps: retPs,
                total: retTotal,
                list: retList,
                statistical: _this.genStatistical(columns, retList, rawData),
                pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
            }));
        })));
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
            var formatRes = col.format(item, col, idx) || '';
            if (formatRes && ~formatRes.indexOf('</')) {
                return { text: formatRes, _text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
            }
            return { text: formatRes, _text: formatRes, org: formatRes };
        }
        /** @type {?} */
        var value = deepGet(item, (/** @type {?} */ (col.index)), col.default);
        /** @type {?} */
        var text = value;
        /** @type {?} */
        var color;
        switch (col.type) {
            case 'no':
                text = this.getNoIndex(item, col, idx);
                break;
            case 'img':
                text = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
                break;
            case 'number':
                text = this.numberPipe.transform(value, col.numberDigits);
                break;
            case 'currency':
                text = this.currentyPipe.transform(value);
                break;
            case 'date':
                text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                break;
            case 'yn':
                text = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)), false);
                break;
            case 'tag':
            case 'badge':
                /** @type {?} */
                var data = col.type === 'tag' ? col.tag : col.badge;
                if (data && data[text]) {
                    /** @type {?} */
                    var dataItem = data[text];
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
        return { text: text, _text: this.dom.bypassSecurityTrustHtml(text), org: value, color: color };
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
        var req = options.req, page = options.page, paginator = options.paginator, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
        /** @type {?} */
        var method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var reName = (/** @type {?} */ (req.reName));
        if (paginator) {
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
     * @param {?} options
     * @return {?}
     */
    STDataSource.prototype.optimizeData = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        var result = options.result, columns = options.columns, rowClassName = options.rowClassName;
        var _loop_1 = function (i, len) {
            result[i]._values = columns.map((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return _this.get(result[i], c, i); }));
            if (rowClassName) {
                result[i]._rowClassName = rowClassName(result[i], i);
            }
        };
        for (var i = 0, len = result.length; i < len; i++) {
            _loop_1(i, len);
        }
        return result;
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
        function (item) { return (/** @type {?} */ (item._sort)); }));
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
            if (multiSort.keepEmptyKey === false && ret[ms_1.key].length === 0) {
                ret = {};
            }
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
     * @param {?} filter
     * @return {?}
     */
    STDataSource.prototype.getFilteredData = 
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        return filter.type === 'default' ? (/** @type {?} */ (filter.menus)).filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.checked === true; })) : (/** @type {?} */ (filter.menus)).slice(0, 1);
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqFilterMap = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
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
            var filter = (/** @type {?} */ (col.filter));
            /** @type {?} */
            var values = _this.getFilteredData(filter);
            /** @type {?} */
            var obj = {};
            if (filter.reName) {
                obj = (/** @type {?} */ (filter.reName))((/** @type {?} */ (filter.menus)), col);
            }
            else {
                obj[(/** @type {?} */ (filter.key))] = values.map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBcUJyQyx5Q0FhQzs7O0lBWkMsaUNBQVc7O0lBQ1gsaUNBQVc7O0lBQ1gsd0NBQW1COztJQUNuQixtQ0FBK0M7O0lBQy9DLG9DQUFjOztJQUNkLGtDQUFXOztJQUNYLGtDQUFXOztJQUNYLG1DQUFhOztJQUNiLHNDQUFvQjs7SUFDcEIseUNBQWlDOztJQUNqQyx3Q0FBK0I7O0lBQy9CLDJDQUE4Qjs7Ozs7QUFHaEMsd0NBYUM7Ozs7OztJQVhDLHNDQUFrQjs7Ozs7SUFFbEIsZ0NBQVc7Ozs7O0lBRVgsZ0NBQVc7Ozs7O0lBRVgsbUNBQWM7Ozs7O0lBRWQsa0NBQWU7Ozs7O0lBRWYseUNBQWtDOztBQUdwQztJQUlFLHNCQUNVLElBQWlCLEVBQ1QsWUFBNEIsRUFDNUIsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXVCLEVBQy9CLEdBQWlCO1FBTGpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDVCxpQkFBWSxHQUFaLFlBQVksQ0FB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WTs7SUF3Y3JCLG1CQUFDO0NBQUEsQUFqWkQsSUFpWkM7U0FoWlksWUFBWTs7Ozs7O0lBQ3ZCLGdDQUFxQjs7Ozs7SUFHbkIsNEJBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLGdDQUFrQzs7Ozs7SUFDbEMsOEJBQThCOzs7OztJQUM5QixrQ0FBdUM7Ozs7O0lBQ3ZDLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcXVlc3RPcHRpb25zLFxuICBTVFJlcVJlTmFtZVR5cGUsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGUsXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVFNvcnRNYXAsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpOiBudW1iZXI7XG4gIHBzOiBudW1iZXI7XG4gIHBhZ2luYXRvcjogYm9vbGVhbjtcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgdG90YWw6IG51bWJlcjtcbiAgcmVxOiBTVFJlcTtcbiAgcmVzOiBTVFJlcztcbiAgcGFnZTogU1RQYWdlO1xuICBjb2x1bW5zOiBTVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0IHwgbnVsbDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQgfCBudWxsO1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q6IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5UGlwZTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIHBhZ2luYXRvciwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgbGV0IHJldFBpOiBudW1iZXI7XG4gICAgbGV0IHJhd0RhdGE6IGFueTtcbiAgICBsZXQgc2hvd1BhZ2UgPSBwYWdlLnNob3c7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IHJldDogU1REYXRhW107XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0ID0gcmVzdWx0O1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgIHNob3dQYWdlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgIHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9IHJlcy5yZU5hbWUhLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVlcENvcHkocmV0KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgIGRhdGEkID0gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIC8vIHNvcnRcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IGRlZXBDb3B5KHJlc3VsdCk7XG4gICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlcilcbiAgICAgICAgICAgIC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBjLmZpbHRlciE7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWREYXRhKGZpbHRlcik7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gZmlsdGVyLmZuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBpZiAocGFnaW5hdG9yICYmIHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHByZS1wcm9jZXNzXG4gICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MhKHJlc3VsdCwgcmF3RGF0YSkpKTtcbiAgICB9XG5cbiAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiB0aGlzLm9wdGltaXplRGF0YSh7IHJlc3VsdCwgY29sdW1ucywgcm93Q2xhc3NOYW1lOiBvcHRpb25zLnJvd0NsYXNzTmFtZSB9KSkpO1xuXG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgcmV0TGlzdCA9IHJlc3VsdDtcbiAgICAgICAgY29uc3QgcmVhbFRvdGFsID0gcmV0VG90YWwgfHwgdG90YWw7XG4gICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGk6IHJldFBpLFxuICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICBzdGF0aXN0aWNhbDogdGhpcy5nZW5TdGF0aXN0aWNhbChjb2x1bW5zLCByZXRMaXN0LCByYXdEYXRhKSxcbiAgICAgICAgICBwYWdlU2hvdzogdHlwZW9mIHNob3dQYWdlID09PSAndW5kZWZpbmVkJyA/IHJlYWxUb3RhbCA+IHJlYWxQcyA6IHNob3dQYWdlLFxuICAgICAgICB9IGFzIFNURGF0YVNvdXJjZVJlc3VsdDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogeyB0ZXh0OiBhbnk7IF90ZXh0OiBTYWZlSHRtbDsgb3JnPzogYW55OyBjb2xvcj86IHN0cmluZyB9IHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGlkeCkgfHwgJyc7XG4gICAgICBpZiAoZm9ybWF0UmVzICYmIH5mb3JtYXRSZXMuaW5kZXhPZignPC8nKSkge1xuICAgICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXRSZXMsIF90ZXh0OiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzLCBfdGV4dDogZm9ybWF0UmVzLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcblxuICAgIGxldCB0ZXh0ID0gdmFsdWU7XG4gICAgbGV0IGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnbm8nOlxuICAgICAgICB0ZXh0ID0gdGhpcy5nZXROb0luZGV4KGl0ZW0sIGNvbCwgaWR4KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICB0ZXh0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHRleHQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wubnVtYmVyRGlnaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgIHRleHQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICB0ZXh0ID0gdmFsdWUgPT09IGNvbC5kZWZhdWx0ID8gY29sLmRlZmF1bHQgOiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgdGV4dCA9IHRoaXMueW5QaXBlLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluIS50cnV0aCwgY29sLnluIS55ZXMhLCBjb2wueW4hLm5vISwgY29sLnluIS5tb2RlISwgZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICBjYXNlICdiYWRnZSc6XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjb2wudHlwZSA9PT0gJ3RhZycgPyBjb2wudGFnIDogY29sLmJhZGdlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhW3RleHRdKSB7XG4gICAgICAgICAgY29uc3QgZGF0YUl0ZW0gPSBkYXRhW3RleHRdO1xuICAgICAgICAgIHRleHQgPSBkYXRhSXRlbS50ZXh0O1xuICAgICAgICAgIGNvbG9yID0gZGF0YUl0ZW0uY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGV4dCA9PSBudWxsKSB0ZXh0ID0gJyc7XG4gICAgcmV0dXJuIHsgdGV4dCwgX3RleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQpLCBvcmc6IHZhbHVlLCBjb2xvciB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBhZ2luYXRvciwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHJlTmFtZSA9IHJlcS5yZU5hbWUgYXMgU1RSZXFSZU5hbWVUeXBlO1xuICAgIGlmIChwYWdpbmF0b3IpIHtcbiAgICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnBpIGFzIHN0cmluZ106IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgICBbcmVOYW1lLnBzIGFzIHN0cmluZ106IHBzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUuc2tpcCBhcyBzdHJpbmddOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICAgIFtyZU5hbWUubGltaXQgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgIH07XG5cbiAgICBsZXQgcmVxT3B0aW9uczogU1RSZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXEucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxT3B0aW9ucyA9IHJlcS5wcm9jZXNzKHJlcU9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xuICB9XG5cbiAgb3B0aW1pemVEYXRhKG9wdGlvbnM6IHsgY29sdW1uczogU1RDb2x1bW5bXTsgcmVzdWx0OiBTVERhdGFbXTsgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfSk6IFNURGF0YVtdIHtcbiAgICBjb25zdCB7IHJlc3VsdCwgY29sdW1ucywgcm93Q2xhc3NOYW1lIH0gPSBvcHRpb25zO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgIGlmIChyb3dDbGFzc05hbWUpIHtcbiAgICAgICAgcmVzdWx0W2ldLl9yb3dDbGFzc05hbWUgPSByb3dDbGFzc05hbWUocmVzdWx0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldE5vSW5kZXgoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KS5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0ISk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc29ydEl0ZW0gPSBzb3J0TGlzdFswXTtcbiAgICBpZiAoc29ydEl0ZW0uY29tcGFyZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRJdGVtLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRJdGVtLmNvbXBhcmUhKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydEl0ZW0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXQgbmV4dFNvcnRUaWNrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5zb3J0VGljaztcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBjb25zdCBtcyA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG5cbiAgICAgIHJldCA9IHtcbiAgICAgICAgW21zLmtleV06IHNvcnRMaXN0XG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5rZXkgKyBtcy5uYW1lU2VwYXJhdG9yICsgKChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0IV0gfHwgaXRlbS5kZWZhdWx0KSlcbiAgICAgICAgICAuam9pbihtcy5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICAgIGlmIChtdWx0aVNvcnQua2VlcEVtcHR5S2V5ID09PSBmYWxzZSAmJiByZXRbbXMua2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0ID0ge307XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICAgIH1cbiAgICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldEZpbHRlcmVkRGF0YShmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGNvbC5maWx0ZXIhO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICBsZXQgb2JqOiB7fSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBTVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgPyBjb2wua2V5IDogaW5kZXhdID0gY29sLnN0YXRpc3RpY2FsID09IG51bGwgPyB7fSA6IHRoaXMuZ2V0U3RhdGlzdGljYWwoY29sLCBpbmRleCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljYWwoY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IGFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKSxcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbmN5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5tYXgoLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5taW4oLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtLmN1cnJlbmN5ID09PSB0cnVlIHx8IChpdGVtLmN1cnJlbmN5ID09IG51bGwgJiYgY3VycmVuY3kgPT09IHRydWUpKSB7XG4gICAgICByZXMudGV4dCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybShyZXMudmFsdWUpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gKGkgPT09ICcnIHx8IGkgPT0gbnVsbCA/IDAgOiBpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN1bShpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5yZWR1Y2UoKHAsIGkpID0+IChwICs9IHBhcnNlRmxvYXQoU3RyaW5nKGkpKSksIDApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19