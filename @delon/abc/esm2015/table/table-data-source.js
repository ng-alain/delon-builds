/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DecimalPipe } from '@angular/common';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { _HttpClient, CNCurrencyPipe, DatePipe, YNPipe } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFvQmhELHlDQVlDOzs7SUFYQyxpQ0FBVzs7SUFDWCxpQ0FBVzs7SUFDWCxtQ0FBK0M7O0lBQy9DLG9DQUFjOztJQUNkLGtDQUFXOztJQUNYLGtDQUFXOztJQUNYLG1DQUFhOztJQUNiLHNDQUFvQjs7SUFDcEIseUNBQWlDOztJQUNqQyx3Q0FBK0I7O0lBQy9CLDJDQUE4Qjs7Ozs7QUFHaEMsd0NBYUM7Ozs7OztJQVhDLHNDQUFrQjs7Ozs7SUFFbEIsZ0NBQVc7Ozs7O0lBRVgsZ0NBQVc7Ozs7O0lBRVgsbUNBQWM7Ozs7O0lBRWQsa0NBQWU7Ozs7O0lBRWYseUNBQWtDOztBQUlwQyxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBR3ZCLFlBQ1UsSUFBaUIsRUFDVCxZQUE0QixFQUM1QixRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGlC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LFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUM3QyxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUF0WEYsVUFBVTs7OztZQWxERixXQUFXO1lBQUUsY0FBYyx1QkF3RC9CLElBQUk7WUF4RDZCLFFBQVEsdUJBeUR6QyxJQUFJO1lBekR1QyxNQUFNLHVCQTBEakQsSUFBSTtZQWhFQSxXQUFXLHVCQWlFZixJQUFJO1lBL0RBLFlBQVk7Ozs7Ozs7SUF3RG5CLGdDQUFxQjs7Ozs7SUFHbkIsNEJBQXlCOzs7OztJQUN6QixvQ0FBNEM7Ozs7O0lBQzVDLGdDQUFrQzs7Ozs7SUFDbEMsOEJBQThCOzs7OztJQUM5QixrQ0FBdUM7Ozs7O0lBQ3ZDLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxdWVzdE9wdGlvbnMsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWwsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFN0YXRpc3RpY2FsVHlwZSxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcbiAgcGk6IG51bWJlcjtcbiAgcHM6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgdG90YWw6IG51bWJlcjtcbiAgcmVxOiBTVFJlcTtcbiAgcmVzOiBTVFJlcztcbiAgcGFnZTogU1RQYWdlO1xuICBjb2x1bW5zOiBTVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0IHwgbnVsbDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQgfCBudWxsO1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q6IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5UGlwZTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xuICAgICAgbGV0IHJhd0RhdGE6IGFueTtcbiAgICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICBsZXQgcmV0OiBTVERhdGFbXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgcmV0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJldC5sZW5ndGg7XG4gICAgICAgICAgICAgIHJldFBzID0gcmV0VG90YWw7XG4gICAgICAgICAgICAgIHNob3dQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICAgIHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPSByZXMucmVOYW1lIS50b3RhbCAmJiBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZXBDb3B5KHJldCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IGRlZXBDb3B5KHJlc3VsdCk7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XG4gICAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBjLmZpbHRlciEubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIhLmZuO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PiB2YWx1ZXMuc29tZSh2ID0+IG9uRmlsdGVyKHYsIHJlY29yZCkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICAgIHJldFBpID0gTWF0aC5tYXgoMSwgcGkgPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiBwaSk7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoKHJldFBpIC0gMSkgKiBwcywgcmV0UGkgKiBwcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByZS1wcm9jZXNzXG4gICAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzIShyZXN1bHQpKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGRhdGEgYWNjZWxlcmF0b3JcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSkpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucm93Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtpXS5fcm93Q2xhc3NOYW1lID0gb3B0aW9ucy5yb3dDbGFzc05hbWUocmVzdWx0W2ldLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgICBkYXRhJFxuICAgICAgICAuZm9yRWFjaCgocmVzdWx0OiBTVERhdGFbXSkgPT4gKHJldExpc3QgPSByZXN1bHQpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVhbFRvdGFsID0gcmV0VG90YWwgfHwgdG90YWw7XG4gICAgICAgICAgY29uc3QgcmVhbFBzID0gcmV0UHMgfHwgcHM7XG4gICAgICAgICAgcmVzb2x2ZVByb21pc2Uoe1xuICAgICAgICAgICAgcGk6IHJldFBpLFxuICAgICAgICAgICAgcHM6IHJldFBzLFxuICAgICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICAgIHN0YXRpc3RpY2FsOiB0aGlzLmdlblN0YXRpc3RpY2FsKGNvbHVtbnMsIHJldExpc3QsIHJhd0RhdGEpLFxuICAgICAgICAgICAgcGFnZVNob3c6IHR5cGVvZiBzaG93UGFnZSA9PT0gJ3VuZGVmaW5lZCcgPyByZWFsVG90YWwgPiByZWFsUHMgOiBzaG93UGFnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogeyB0ZXh0OiBhbnk7IG9yZz86IGFueSB9IHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xuICAgICAgaWYgKGZvcm1hdFJlcyAmJiB+Zm9ybWF0UmVzLmluZGV4T2YoJzwvJykpIHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSwgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGZvcm1hdFJlcyA9PSBudWxsID8gJycgOiBmb3JtYXRSZXMsIG9yZzogZm9ybWF0UmVzIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgcmV0ID0gdGhpcy5nZXROb0luZGV4KGl0ZW0sIGNvbCwgaWR4KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWcnOlxuICAgICAgICByZXQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgcmV0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXQgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLmRhdGVGb3JtYXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgcmV0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4hLnRydXRoLCBjb2wueW4hLnllcyEsIGNvbC55biEubm8hLCBjb2wueW4hLm1vZGUhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7IHRleHQ6IHJldCA9PSBudWxsID8gJycgOiByZXQsIG9yZzogdmFsdWUgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKHVybDogc3RyaW5nLCBvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgW3JlTmFtZS5waSBhcyBzdHJpbmddOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHMsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSB7XG4gICAgICAgIFtyZU5hbWUuc2tpcCBhcyBzdHJpbmddOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICBbcmVOYW1lLmxpbWl0IGFzIHN0cmluZ106IHBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICBnZXROb0luZGV4KGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgY29sLm5vSW5kZXggPT09ICdmdW5jdGlvbicgPyBjb2wubm9JbmRleChpdGVtLCBjb2wsIGlkeCkgOiBjb2wubm9JbmRleCEgKyBpZHg7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0TGlzdFswXS5jb21wYXJlIShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG5leHRTb3J0VGljaygpOiBudW1iZXIge1xuICAgIHJldHVybiArK3RoaXMuc29ydFRpY2s7XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKFxuICAgIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgbXVsdGlTb3J0OiBTVE11bHRpU29ydCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgY29sdW1uczogU1RDb2x1bW5bXSxcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKCFtdWx0aVNvcnQgJiYgc29ydExpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gcmV0O1xuXG4gICAgaWYgKG11bHRpU29ydCkge1xuICAgICAgY29uc3QgbXMgPSB7XG4gICAgICAgIGtleTogJ3NvcnQnLFxuICAgICAgICBzZXBhcmF0b3I6ICctJyxcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxuICAgICAgICAuLi5tdWx0aVNvcnQsXG4gICAgICB9O1xuXG4gICAgICByZXQgPSB7XG4gICAgICAgIFttcy5rZXldOiBzb3J0TGlzdFxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpY2sgLSBiLnRpY2spXG4gICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ua2V5ICsgbXMubmFtZVNlcGFyYXRvciArICgoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdCFdIHx8IGl0ZW0uZGVmYXVsdCkpXG4gICAgICAgICAgLmpvaW4obXMuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICAgIH1cbiAgICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlciEubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcbiAgICAgICAgbGV0IG9iajoge30gPSB7fTtcbiAgICAgICAgaWYgKGNvbC5maWx0ZXIhLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGNvbC5maWx0ZXIhLnJlTmFtZSEoY29sLmZpbHRlciEubWVudXMsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2NvbC5maWx0ZXIhLmtleSFdID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB7IC4uLnJldCwgLi4ub2JqIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3RhdGlzdGljYWxcblxuICBwcml2YXRlIGdlblN0YXRpc3RpY2FsKGNvbHVtbnM6IFNUQ29sdW1uW10sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhOiBhbnkpOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICByZXNbY29sLmtleSA/IGNvbC5rZXkgOiBpbmRleF0gPSBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gICAgY29uc3QgdmFsID0gY29sLnN0YXRpc3RpY2FsO1xuICAgIGNvbnN0IGl0ZW06IFNUU3RhdGlzdGljYWwgPSB7XG4gICAgICBkaWdpdHM6IDIsXG4gICAgICBjdXJyZW5jeTogdW5kZWZpbmVkLFxuICAgICAgLi4uKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8geyB0eXBlOiB2YWwgYXMgU1RTdGF0aXN0aWNhbFR5cGUgfSA6ICh2YWwgYXMgU1RTdGF0aXN0aWNhbCkpLFxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHJlcy52YWx1ZSkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=