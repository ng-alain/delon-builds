/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.sortTick = 0;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    process(options) {
        return new Promise((/**
         * @param {?} resolvePromise
         * @param {?} rejectPromise
         * @return {?}
         */
        (resolvePromise, rejectPromise) => {
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
            let rawData;
            /** @type {?} */
            let showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByHttp(data, options).pipe(map((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => {
                    rawData = result;
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
                        ret = deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).list)), []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        /** @type {?} */
                        const resultTotal = (/** @type {?} */ (res.reName)).total && deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return deepCopy(ret);
                })), catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
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
                (result) => {
                    rawData = result;
                    /** @type {?} */
                    let copyResult = deepCopy(result);
                    /** @type {?} */
                    const sorterFn = this.getSorterFn(columns);
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
                (result) => {
                    columns
                        .filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    w => w.filter))
                        .forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => {
                        /** @type {?} */
                        const values = (/** @type {?} */ (c.filter)).menus.filter((/**
                         * @param {?} w
                         * @return {?}
                         */
                        w => w.checked));
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        const onFilter = (/** @type {?} */ (c.filter)).fn;
                        if (typeof onFilter !== 'function') {
                            console.warn(`[st] Muse provide the fn function in filter`);
                            return;
                        }
                        result = result.filter((/**
                         * @param {?} record
                         * @return {?}
                         */
                        record => values.some((/**
                         * @param {?} v
                         * @return {?}
                         */
                        v => onFilter(v, record)))));
                    }));
                    return result;
                })), 
                // paging
                map((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
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
                })));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(map((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => (/** @type {?} */ (res.process))(result))));
            }
            // data accelerator
            data$ = data$.pipe(map((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                for (let i = 0, len = result.length; i < len; i++) {
                    result[i]._values = columns.map((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => this.get(result[i], c, i)));
                    if (options.rowClassName) {
                        result[i]._rowClassName = options.rowClassName(result[i], i);
                    }
                }
                return result;
            })));
            data$
                .forEach((/**
             * @param {?} result
             * @return {?}
             */
            (result) => (retList = result)))
                .then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const realTotal = retTotal || total;
                /** @type {?} */
                const realPs = retPs || ps;
                resolvePromise({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: this.genStatistical(columns, retList, rawData),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                });
            }));
        }));
    }
    /**
     * @private
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    get(item, col, idx) {
        if (col.format) {
            /** @type {?} */
            const formatRes = col.format(item, col);
            if (formatRes && ~formatRes.indexOf('</')) {
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
                ret = this.getNoIndex(item, col, idx);
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
                ret = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)));
                break;
        }
        return { text: ret == null ? '' : ret, org: value };
    }
    /**
     * @private
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
        /** @type {?} */
        const reName = (/** @type {?} */ (req.reName));
        if (req.type === 'page') {
            params = {
                [(/** @type {?} */ (reName.pi))]: page.zeroIndexed ? pi - 1 : pi,
                [(/** @type {?} */ (reName.ps))]: ps,
            };
        }
        else {
            params = {
                [(/** @type {?} */ (reName.skip))]: (pi - 1) * ps,
                [(/** @type {?} */ (reName.limit))]: ps,
            };
        }
        params = Object.assign({}, params, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
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
        if (typeof req.process === 'function') {
            reqOptions = req.process(reqOptions);
        }
        return this.http.request(method, url, reqOptions);
    }
    /**
     * @param {?} item
     * @param {?} col
     * @param {?} idx
     * @return {?}
     */
    getNoIndex(item, col, idx) {
        return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : (/** @type {?} */ (col.noIndex)) + idx;
    }
    // #region sort
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    getValidSort(columns) {
        return columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item._sort && item._sort.enabled && item._sort.default)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item._sort));
    }
    /**
     * @private
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
        return (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const result = (/** @type {?} */ (sortList[0].compare))(a, b);
            if (result !== 0) {
                return sortList[0].default === 'descend' ? -result : result;
            }
            return 0;
        });
    }
    /**
     * @return {?}
     */
    get nextSortTick() {
        return ++this.sortTick;
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
            ret = {
                [ms.key]: sortList
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.tick - b.tick))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.key + ms.nameSeparator + ((item.reName || {})[(/** @type {?} */ (item.default))] || item.default)))
                    .join(ms.separator),
            };
        }
        else {
            /** @type {?} */
            const mapData = sortList[0];
            /** @type {?} */
            let sortFiled = mapData.key;
            /** @type {?} */
            let sortValue = (sortList[0].reName || {})[(/** @type {?} */ (mapData.default))] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[(/** @type {?} */ (sortFiled))] = (/** @type {?} */ (sortValue));
        }
        return ret;
    }
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    getReqFilterMap(columns) {
        /** @type {?} */
        let ret = {};
        columns
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.filter && w.filter.default === true))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            /** @type {?} */
            const values = (/** @type {?} */ (col.filter)).menus.filter((/**
             * @param {?} f
             * @return {?}
             */
            f => f.checked === true));
            /** @type {?} */
            let obj = {};
            if ((/** @type {?} */ (col.filter)).reName) {
                obj = (/** @type {?} */ ((/** @type {?} */ (col.filter)).reName))((/** @type {?} */ (col.filter)).menus, col);
            }
            else {
                obj[(/** @type {?} */ ((/** @type {?} */ (col.filter)).key))] = values.map((/**
                 * @param {?} i
                 * @return {?}
                 */
                i => i.value)).join(',');
            }
            ret = Object.assign({}, ret, obj);
        }));
        return ret;
    }
    // #endregion
    // #region statistical
    /**
     * @private
     * @param {?} columns
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    genStatistical(columns, list, rawData) {
        /** @type {?} */
        const res = {};
        columns.forEach((/**
         * @param {?} col
         * @param {?} index
         * @return {?}
         */
        (col, index) => {
            res[col.key ? col.key : index] = col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
        }));
        return res;
    }
    /**
     * @private
     * @param {?} col
     * @param {?} index
     * @param {?} list
     * @param {?} rawData
     * @return {?}
     */
    getStatistical(col, index, list, rawData) {
        /** @type {?} */
        const val = col.statistical;
        /** @type {?} */
        const item = Object.assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
        /** @type {?} */
        let res = { value: 0 };
        /** @type {?} */
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
                    res.value = this.getValues(index, list).filter((/**
                     * @param {?} value
                     * @param {?} idx
                     * @param {?} self
                     * @return {?}
                     */
                    (value, idx, self) => self.indexOf(value) === idx)).length;
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
            res.text = (/** @type {?} */ (this.currentyPipe.transform(res.value)));
        }
        else {
            res.text = String(res.value);
        }
        return res;
    }
    /**
     * @private
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
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    getValues(index, list) {
        return list.map((/**
         * @param {?} i
         * @return {?}
         */
        i => i._values[index].org)).map((/**
         * @param {?} i
         * @return {?}
         */
        i => (i === '' || i == null ? 0 : i)));
    }
    /**
     * @private
     * @param {?} index
     * @param {?} list
     * @return {?}
     */
    getSum(index, list) {
        return this.getValues(index, list).reduce((/**
         * @param {?} p
         * @param {?} i
         * @return {?}
         */
        (p, i) => (p += parseFloat(String(i)))), 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFvQmpELHlDQVlDOzs7SUFYQyxpQ0FBVzs7SUFDWCxpQ0FBVzs7SUFDWCxtQ0FBK0M7O0lBQy9DLG9DQUFjOztJQUNkLGtDQUFXOztJQUNYLGtDQUFXOztJQUNYLG1DQUFhOztJQUNiLHNDQUFvQjs7SUFDcEIseUNBQWlDOztJQUNqQyx3Q0FBK0I7O0lBQy9CLDJDQUE4Qjs7Ozs7QUFHaEMsd0NBYUM7Ozs7OztJQVhDLHNDQUFrQjs7Ozs7SUFFbEIsZ0NBQVc7Ozs7O0lBRVgsZ0NBQVc7Ozs7O0lBRVgsbUNBQWM7Ozs7O0lBRWQsa0NBQWU7Ozs7O0lBRWYseUNBQWtDOztBQUlwQyxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBR3ZCLFlBQ1UsSUFBaUIsRUFDVCxZQUE0QixFQUM1QixRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGlC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LFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUM3QyxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUF0WEYsVUFBVTs7OztZQXBERixXQUFXO1lBQUUsY0FBYyx1QkEwRC9CLElBQUk7WUExRDZCLFFBQVEsdUJBMkR6QyxJQUFJO1lBM0R1QyxNQUFNLHVCQTREakQsSUFBSTtZQS9EQSxXQUFXLHVCQWdFZixJQUFJO1lBOURBLFlBQVk7Ozs7Ozs7SUF1RG5CLGdDQUFxQjs7Ozs7SUFHbkIsNEJBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLGdDQUFrQzs7Ozs7SUFDbEMsOEJBQThCOzs7OztJQUM5QixrQ0FBdUM7Ozs7O0lBQ3ZDLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgX0h0dHBDbGllbnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU1RTb3J0TWFwIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcXVlc3RPcHRpb25zLFxuICBTVFJlcVJlTmFtZVR5cGUsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGUsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpOiBudW1iZXI7XG4gIHBzOiBudW1iZXI7XG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJlcTogU1RSZXE7XG4gIHJlczogU1RSZXM7XG4gIHBhZ2U6IFNUUGFnZTtcbiAgY29sdW1uczogU1RDb2x1bW5bXTtcbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydCB8IG51bGw7XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0IHwgbnVsbDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaTogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0OiBTVERhdGFbXTtcbiAgLyoqIOe7n+iuoeaVsOaNriAqL1xuICBzdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNvcnRUaWNrID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjdXJyZW50eVBpcGU6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldFBzOiBudW1iZXI7XG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICAgIGxldCByYXdEYXRhOiBhbnk7XG4gICAgICBsZXQgc2hvd1BhZ2UgPSBwYWdlLnNob3c7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgbGV0IHJldDogU1REYXRhW107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXQubGVuZ3RoO1xuICAgICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgICBzaG93UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgICByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID0gcmVzLnJlTmFtZSEudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWVwQ29weShyZXQpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgICAgZGF0YSQgPSBkYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgICAvLyBzb3J0XG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSBkZWVwQ29weShyZXN1bHQpO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlcilcbiAgICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIhLm1lbnVzLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGMuZmlsdGVyIS5mbjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyEocmVzdWx0KSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpXS5fdmFsdWVzID0gY29sdW1ucy5tYXAoYyA9PiB0aGlzLmdldChyZXN1bHRbaV0sIGMsIGkpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJvd0NsYXNzTmFtZSkge1xuICAgICAgICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IG9wdGlvbnMucm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgICAgZGF0YSRcbiAgICAgICAgLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgICBzdGF0aXN0aWNhbDogdGhpcy5nZW5TdGF0aXN0aWNhbChjb2x1bW5zLCByZXRMaXN0LCByYXdEYXRhKSxcbiAgICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IHsgdGV4dDogYW55OyBvcmc/OiBhbnkgfSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcbiAgICAgIGlmIChmb3JtYXRSZXMgJiYgfmZvcm1hdFJlcy5pbmRleE9mKCc8LycpKSB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcyksIG9yZzogZm9ybWF0UmVzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXRSZXMgPT0gbnVsbCA/ICcnIDogZm9ybWF0UmVzLCBvcmc6IGZvcm1hdFJlcyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcblxuICAgIGxldCByZXQgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICBjYXNlICdubyc6XG4gICAgICAgIHJldCA9IHRoaXMuZ2V0Tm9JbmRleChpdGVtLCBjb2wsIGlkeCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5udW1iZXJEaWdpdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgcmV0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0ID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHJldCA9IHRoaXMueW5QaXBlLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluIS50cnV0aCwgY29sLnluIS55ZXMhLCBjb2wueW4hLm5vISwgY29sLnluIS5tb2RlISk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4geyB0ZXh0OiByZXQgPT0gbnVsbCA/ICcnIDogcmV0LCBvcmc6IHZhbHVlIH07XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHJlTmFtZSA9IHJlcS5yZU5hbWUgYXMgU1RSZXFSZU5hbWVUeXBlO1xuICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICBwYXJhbXMgPSB7XG4gICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICBbcmVOYW1lLnBzIGFzIHN0cmluZ106IHBzLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0ge1xuICAgICAgICBbcmVOYW1lLnNraXAgYXMgc3RyaW5nXTogKHBpIC0gMSkgKiBwcyxcbiAgICAgICAgW3JlTmFtZS5saW1pdCBhcyBzdHJpbmddOiBwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgIH07XG5cbiAgICBsZXQgcmVxT3B0aW9uczogU1RSZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgJiYgcmVxLmFsbEluQm9keSA9PT0gdHJ1ZSkge1xuICAgICAgcmVxT3B0aW9ucyA9IHtcbiAgICAgICAgYm9keTogeyAuLi5yZXEuYm9keSwgLi4ucGFyYW1zIH0sXG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXEucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxT3B0aW9ucyA9IHJlcS5wcm9jZXNzKHJlcU9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbC5ub0luZGV4ID09PSAnZnVuY3Rpb24nID8gY29sLm5vSW5kZXgoaXRlbSwgY29sLCBpZHgpIDogY29sLm5vSW5kZXghICsgaWR4O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydExpc3RbMF0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZSEoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0TGlzdFswXS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBuZXh0U29ydFRpY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLnNvcnRUaWNrO1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIG11bHRpU29ydDogU1RNdWx0aVNvcnQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zID0ge1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAgLi4ubXVsdGlTb3J0LFxuICAgICAgfTtcblxuICAgICAgcmV0ID0ge1xuICAgICAgICBbbXMua2V5XTogc29ydExpc3RcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aWNrIC0gYi50aWNrKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmtleSArIG1zLm5hbWVTZXBhcmF0b3IgKyAoKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHQhXSB8fCBpdGVtLmRlZmF1bHQpKVxuICAgICAgICAgIC5qb2luKG1zLnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICBsZXQgc29ydEZpbGVkID0gbWFwRGF0YS5rZXk7XG4gICAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0IV0gfHwgbWFwRGF0YS5kZWZhdWx0O1xuICAgICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgICAgc29ydFZhbHVlID0gc29ydEZpbGVkICsgKHNpbmdsZVNvcnQubmFtZVNlcGFyYXRvciB8fCAnLicpICsgc29ydFZhbHVlO1xuICAgICAgICBzb3J0RmlsZWQgPSBzaW5nbGVTb3J0LmtleSB8fCAnc29ydCc7XG4gICAgICB9XG4gICAgICByZXRbc29ydEZpbGVkIGFzIHN0cmluZ10gPSBzb3J0VmFsdWUgYXMgc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIhLm1lbnVzLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIGxldCBvYmo6IHt9ID0ge307XG4gICAgICAgIGlmIChjb2wuZmlsdGVyIS5yZU5hbWUpIHtcbiAgICAgICAgICBvYmogPSBjb2wuZmlsdGVyIS5yZU5hbWUhKGNvbC5maWx0ZXIhLm1lbnVzLCBjb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ialtjb2wuZmlsdGVyIS5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBTVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgPyBjb2wua2V5IDogaW5kZXhdID0gY29sLnN0YXRpc3RpY2FsID09IG51bGwgPyB7fSA6IHRoaXMuZ2V0U3RhdGlzdGljYWwoY29sLCBpbmRleCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljYWwoY29sOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10sIHJhd0RhdGE6IGFueSk6IFNUU3RhdGlzdGljYWxSZXN1bHQge1xuICAgIGNvbnN0IHZhbCA9IGNvbC5zdGF0aXN0aWNhbDtcbiAgICBjb25zdCBpdGVtOiBTVFN0YXRpc3RpY2FsID0ge1xuICAgICAgZGlnaXRzOiAyLFxuICAgICAgY3VycmVuY3k6IHVuZGVmaW5lZCxcbiAgICAgIC4uLih0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsIGFzIFNUU3RhdGlzdGljYWxUeXBlIH0gOiAodmFsIGFzIFNUU3RhdGlzdGljYWwpKSxcbiAgICB9O1xuICAgIGxldCByZXM6IFNUU3RhdGlzdGljYWxSZXN1bHQgPSB7IHZhbHVlOiAwIH07XG4gICAgbGV0IGN1cnJlbmN5ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0udHlwZSh0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCksIGNvbCwgbGlzdCwgcmF3RGF0YSk7XG4gICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGlzdGluY3RDb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N1bSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F2ZXJhZ2UnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCkgLyBsaXN0Lmxlbmd0aCwgaXRlbS5kaWdpdHMhKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5tYXgoLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgcmVzLnZhbHVlID0gTWF0aC5taW4oLi4udGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpKTtcbiAgICAgICAgICBjdXJyZW5jeSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpdGVtLmN1cnJlbmN5ID09PSB0cnVlIHx8IChpdGVtLmN1cnJlbmN5ID09IG51bGwgJiYgY3VycmVuY3kgPT09IHRydWUpKSB7XG4gICAgICByZXMudGV4dCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybShyZXMudmFsdWUpIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnRleHQgPSBTdHJpbmcocmVzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgdG9GaXhlZCh2YWw6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05hTih2YWwpIHx8ICFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoZGlnaXRzKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlcyhpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbGlzdC5tYXAoaSA9PiBpLl92YWx1ZXNbaW5kZXhdLm9yZykubWFwKGkgPT4gKGkgPT09ICcnIHx8IGkgPT0gbnVsbCA/IDAgOiBpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFN1bShpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5yZWR1Y2UoKHAsIGkpID0+IChwICs9IHBhcnNlRmxvYXQoU3RyaW5nKGkpKSksIDApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19