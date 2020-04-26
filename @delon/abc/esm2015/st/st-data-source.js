/**
 * @fileoverview added by tsickle
 * Generated from: st-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DecimalPipe } from '@angular/common';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CNCurrencyPipe, YNPipe, _HttpClient } from '@delon/theme';
import { deepCopy, deepGet, toDate } from '@delon/util';
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
export class STDataSource {
    /**
     * @param {?} http
     * @param {?} currentyPipe
     * @param {?} ynPipe
     * @param {?} numberPipe
     * @param {?} dom
     */
    constructor(http, currentyPipe, ynPipe, numberPipe, dom) {
        this.http = http;
        this.currentyPipe = currentyPipe;
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
        /** @type {?} */
        let data$;
        /** @type {?} */
        let isRemote = false;
        const { data, res, total, page, pi, ps, paginator, columns } = options;
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
                    const filter = (/** @type {?} */ (c.filter));
                    /** @type {?} */
                    const values = this.getFilteredData(filter);
                    if (values.length === 0)
                        return;
                    /** @type {?} */
                    const onFilter = filter.fn;
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
                if (paginator && page.front) {
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
            result => (/** @type {?} */ (res.process))(result, rawData))));
        }
        data$ = data$.pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.optimizeData({ result, columns, rowClassName: options.rowClassName }))));
        return data$.pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            retList = result;
            /** @type {?} */
            const realTotal = retTotal || total;
            /** @type {?} */
            const realPs = retPs || ps;
            return (/** @type {?} */ ({
                pi: retPi,
                ps: retPs,
                total: retTotal,
                list: retList,
                statistical: this.genStatistical(columns, retList, rawData),
                pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
            }));
        })));
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
            const formatRes = col.format(item, col, idx) || '';
            if (formatRes && ~formatRes.indexOf('</')) {
                return { text: formatRes, _text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
            }
            return { text: formatRes, _text: formatRes, org: formatRes };
        }
        /** @type {?} */
        const value = deepGet(item, (/** @type {?} */ (col.index)), col.default);
        /** @type {?} */
        let text = value;
        /** @type {?} */
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
                text = this.currentyPipe.transform(value);
                break;
            case 'date':
                text = value === col.default ? col.default : toDate(value, col.dateFormat);
                break;
            case 'yn':
                text = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)), false);
                break;
            case 'tag':
            case 'badge':
                /** @type {?} */
                const data = col.type === 'tag' ? col.tag : col.badge;
                if (data && data[text]) {
                    /** @type {?} */
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
        return { text, _text: this.dom.bypassSecurityTrustHtml(text), org: value, color };
    }
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    getByHttp(url, options) {
        const { req, page, paginator, pi, ps, singleSort, multiSort, columns } = options;
        /** @type {?} */
        const method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        let params = {};
        /** @type {?} */
        const reName = (/** @type {?} */ (req.reName));
        if (paginator) {
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
        }
        params = Object.assign(Object.assign(Object.assign(Object.assign({}, params), req.params), this.getReqSortMap(singleSort, multiSort, columns)), this.getReqFilterMap(columns));
        /** @type {?} */
        let reqOptions = {
            params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign(Object.assign({}, req.body), params),
                headers: req.headers,
            };
        }
        if (typeof req.process === 'function') {
            reqOptions = req.process(reqOptions);
        }
        return this.http.request(method, url, reqOptions);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    optimizeData(options) {
        const { result, columns, rowClassName } = options;
        for (let i = 0, len = result.length; i < len; i++) {
            result[i]._values = columns.map((/**
             * @param {?} c
             * @return {?}
             */
            c => this.get(result[i], c, i)));
            if (rowClassName) {
                result[i]._rowClassName = rowClassName(result[i], i);
            }
        }
        return result;
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
        item => (/** @type {?} */ (item._sort))));
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
        /** @type {?} */
        const sortItem = sortList[0];
        if (sortItem.compare === null) {
            return;
        }
        if (typeof sortItem.compare !== 'function') {
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
            const result = (/** @type {?} */ (sortItem.compare))(a, b);
            if (result !== 0) {
                return sortItem.default === 'descend' ? -result : result;
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
            if (multiSort.keepEmptyKey === false && ret[ms.key].length === 0) {
                ret = {};
            }
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
     * @param {?} filter
     * @return {?}
     */
    getFilteredData(filter) {
        return filter.type === 'default' ? (/** @type {?} */ (filter.menus)).filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.checked === true)) : (/** @type {?} */ (filter.menus)).slice(0, 1);
    }
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
            const filter = (/** @type {?} */ (col.filter));
            /** @type {?} */
            const values = this.getFilteredData(filter);
            /** @type {?} */
            let obj = {};
            if (filter.reName) {
                obj = (/** @type {?} */ (filter.reName))((/** @type {?} */ (filter.menus)), col);
            }
            else {
                obj[(/** @type {?} */ (filter.key))] = values.map((/**
                 * @param {?} i
                 * @return {?}
                 */
                i => i.value)).join(',');
            }
            ret = Object.assign(Object.assign({}, ret), obj);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3N0LyIsInNvdXJjZXMiOlsic3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFvQnJDLHlDQWFDOzs7SUFaQyxpQ0FBVzs7SUFDWCxpQ0FBVzs7SUFDWCx3Q0FBbUI7O0lBQ25CLG1DQUErQzs7SUFDL0Msb0NBQWM7O0lBQ2Qsa0NBQVc7O0lBQ1gsa0NBQVc7O0lBQ1gsbUNBQWE7O0lBQ2Isc0NBQW9COztJQUNwQix5Q0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsMkNBQThCOzs7OztBQUdoQyx3Q0FhQzs7Ozs7O0lBWEMsc0NBQWtCOzs7OztJQUVsQixnQ0FBVzs7Ozs7SUFFWCxnQ0FBVzs7Ozs7SUFFWCxtQ0FBYzs7Ozs7SUFFZCxrQ0FBZTs7Ozs7SUFFZix5Q0FBa0M7O0FBSXBDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7OztJQUd2QixZQUNVLElBQWlCLEVBQ1QsWUFBNEIsRUFDNUIsTUFBYyxFQUNkLFVBQXVCLEVBQy9CLEdBQWlCO1FBSmpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDVCxpQkFBWSxHQUFaLFlBQVksQ0FB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LElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUF6WUYsVUFBVTs7OztZQXREc0IsV0FBVztZQUFuQyxjQUFjLHVCQTREbEIsSUFBSTtZQTVEZ0IsTUFBTSx1QkE2RDFCLElBQUk7WUFoRUEsV0FBVyx1QkFpRWYsSUFBSTtZQS9EQSxZQUFZOzs7Ozs7O0lBeURuQixnQ0FBcUI7Ozs7O0lBR25CLDRCQUF5Qjs7Ozs7SUFDekIsb0NBQTRDOzs7OztJQUM1Qyw4QkFBOEI7Ozs7O0lBQzlCLGtDQUF1Qzs7Ozs7SUFDdkMsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSG9zdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ05DdXJyZW5jeVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBHZXQsIHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcVJlTmFtZVR5cGUsXG4gIFNUUmVxdWVzdE9wdGlvbnMsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFNvcnRNYXAsXG4gIFNUU3RhdGlzdGljYWwsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFN0YXRpc3RpY2FsVHlwZSxcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcbiAgcGk6IG51bWJlcjtcbiAgcHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBib29sZWFuO1xuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbDogbnVtYmVyO1xuICByZXE6IFNUUmVxO1xuICByZXM6IFNUUmVzO1xuICBwYWdlOiBTVFBhZ2U7XG4gIGNvbHVtbnM6IFNUQ29sdW1uW107XG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQ7XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q6IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5UGlwZTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBwYWdpbmF0b3IsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgbGV0IHJldFBzOiBudW1iZXI7XG4gICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgIGxldCByZXRQaTogbnVtYmVyO1xuICAgIGxldCByYXdEYXRhOiBhbnk7XG4gICAgbGV0IHNob3dQYWdlID0gcGFnZS5zaG93O1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCByZXQ6IFNURGF0YVtdO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmV0Lmxlbmd0aDtcbiAgICAgICAgICAgIHJldFBzID0gcmV0VG90YWw7XG4gICAgICAgICAgICBzaG93UGFnZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPSByZXMucmVOYW1lIS50b3RhbCAmJiBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZSEudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlZXBDb3B5KHJldCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICBkYXRhJCA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAvLyBzb3J0XG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSBkZWVwQ29weShyZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcbiAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGZpbHRlclxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIpXG4gICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gYy5maWx0ZXIhO1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PiB2YWx1ZXMuc29tZSh2ID0+IG9uRmlsdGVyKHYsIHJlY29yZCkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgaWYgKHBhZ2luYXRvciAmJiBwYWdlLmZyb250KSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgIHJldFBpID0gTWF0aC5tYXgoMSwgcGkgPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiBwaSk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoKHJldFBpIC0gMSkgKiBwcywgcmV0UGkgKiBwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBwcmUtcHJvY2Vzc1xuICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzIShyZXN1bHQsIHJhd0RhdGEpKSk7XG4gICAgfVxuXG4gICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gdGhpcy5vcHRpbWl6ZURhdGEoeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZTogb3B0aW9ucy5yb3dDbGFzc05hbWUgfSkpKTtcblxuICAgIHJldHVybiBkYXRhJC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldExpc3QgPSByZXN1bHQ7XG4gICAgICAgIGNvbnN0IHJlYWxUb3RhbCA9IHJldFRvdGFsIHx8IHRvdGFsO1xuICAgICAgICBjb25zdCByZWFsUHMgPSByZXRQcyB8fCBwcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBpOiByZXRQaSxcbiAgICAgICAgICBwczogcmV0UHMsXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgc3RhdGlzdGljYWw6IHRoaXMuZ2VuU3RhdGlzdGljYWwoY29sdW1ucywgcmV0TGlzdCwgcmF3RGF0YSksXG4gICAgICAgICAgcGFnZVNob3c6IHR5cGVvZiBzaG93UGFnZSA9PT0gJ3VuZGVmaW5lZCcgPyByZWFsVG90YWwgPiByZWFsUHMgOiBzaG93UGFnZSxcbiAgICAgICAgfSBhcyBTVERhdGFTb3VyY2VSZXN1bHQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlcik6IHsgdGV4dDogYW55OyBfdGV4dDogU2FmZUh0bWw7IG9yZz86IGFueTsgY29sb3I/OiBzdHJpbmcgfSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpZHgpIHx8ICcnO1xuICAgICAgaWYgKGZvcm1hdFJlcyAmJiB+Zm9ybWF0UmVzLmluZGV4T2YoJzwvJykpIHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzLCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSwgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGZvcm1hdFJlcywgX3RleHQ6IGZvcm1hdFJlcywgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgIGxldCBjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgdGV4dCA9IHRoaXMuZ2V0Tm9JbmRleChpdGVtLCBjb2wsIGlkeCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICB0ZXh0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICB0ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlID09PSBjb2wuZGVmYXVsdCA/IGNvbC5kZWZhdWx0IDogdG9EYXRlKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneW4nOlxuICAgICAgICB0ZXh0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4hLnRydXRoLCBjb2wueW4hLnllcyEsIGNvbC55biEubm8hLCBjb2wueW4hLm1vZGUhLCBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgIGNhc2UgJ2JhZGdlJzpcbiAgICAgICAgY29uc3QgZGF0YSA9IGNvbC50eXBlID09PSAndGFnJyA/IGNvbC50YWcgOiBjb2wuYmFkZ2U7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGFbdGV4dF0pIHtcbiAgICAgICAgICBjb25zdCBkYXRhSXRlbSA9IGRhdGFbdGV4dF07XG4gICAgICAgICAgdGV4dCA9IGRhdGFJdGVtLnRleHQ7XG4gICAgICAgICAgY29sb3IgPSBkYXRhSXRlbS5jb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0ZXh0ID09IG51bGwpIHRleHQgPSAnJztcbiAgICByZXR1cm4geyB0ZXh0LCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCksIG9yZzogdmFsdWUsIGNvbG9yIH07XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGFnaW5hdG9yLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHBhZ2luYXRvcikge1xuICAgICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgW3JlTmFtZS5za2lwIGFzIHN0cmluZ106IChwaSAtIDEpICogcHMsXG4gICAgICAgICAgW3JlTmFtZS5saW1pdCBhcyBzdHJpbmddOiBwcyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICBvcHRpbWl6ZURhdGEob3B0aW9uczogeyBjb2x1bW5zOiBTVENvbHVtbltdOyByZXN1bHQ6IFNURGF0YVtdOyByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB9KTogU1REYXRhW10ge1xuICAgIGNvbnN0IHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWUgfSA9IG9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmVzdWx0W2ldLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSkpO1xuICAgICAgaWYgKHJvd0NsYXNzTmFtZSkge1xuICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbC5ub0luZGV4ID09PSAnZnVuY3Rpb24nID8gY29sLm5vSW5kZXgoaXRlbSwgY29sLCBpZHgpIDogY29sLm5vSW5kZXghICsgaWR4O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcbiAgICByZXR1cm4gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQhKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XG4gICAgaWYgKHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3J0SXRlbSA9IHNvcnRMaXN0WzBdO1xuICAgIGlmIChzb3J0SXRlbS5jb21wYXJlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydEl0ZW0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydEl0ZW0uY29tcGFyZSEoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0SXRlbS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBuZXh0U29ydFRpY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLnNvcnRUaWNrO1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCB1bmRlZmluZWQsIG11bHRpU29ydDogU1RNdWx0aVNvcnQgfCB1bmRlZmluZWQsIGNvbHVtbnM6IFNUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBjb25zdCBtcyA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG5cbiAgICAgIHJldCA9IHtcbiAgICAgICAgW21zLmtleV06IHNvcnRMaXN0XG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGljayAtIGIudGljaylcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5rZXkgKyBtcy5uYW1lU2VwYXJhdG9yICsgKChpdGVtLnJlTmFtZSB8fCB7fSlbaXRlbS5kZWZhdWx0IV0gfHwgaXRlbS5kZWZhdWx0KSlcbiAgICAgICAgICAuam9pbihtcy5zZXBhcmF0b3IpLFxuICAgICAgfTtcbiAgICAgIGlmIChtdWx0aVNvcnQua2VlcEVtcHR5S2V5ID09PSBmYWxzZSAmJiByZXRbbXMua2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0ID0ge307XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIGxldCBzb3J0RmlsZWQgPSBtYXBEYXRhLmtleTtcbiAgICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICAgIH1cbiAgICAgIHJldFtzb3J0RmlsZWQgYXMgc3RyaW5nXSA9IHNvcnRWYWx1ZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldEZpbHRlcmVkRGF0YShmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcgPyBmaWx0ZXIubWVudXMhLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSkgOiBmaWx0ZXIubWVudXMhLnNsaWNlKDAsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGNvbC5maWx0ZXIhO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICBsZXQgb2JqOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge307XG4gICAgICAgIGlmIChmaWx0ZXIucmVOYW1lKSB7XG4gICAgICAgICAgb2JqID0gZmlsdGVyLnJlTmFtZSEoZmlsdGVyLm1lbnVzISwgY29sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbZmlsdGVyLmtleSFdID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB7IC4uLnJldCwgLi4ub2JqIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3RhdGlzdGljYWxcblxuICBwcml2YXRlIGdlblN0YXRpc3RpY2FsKGNvbHVtbnM6IFNUQ29sdW1uW10sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhOiBhbnkpOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB7XG4gICAgY29uc3QgcmVzOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge307XG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICByZXNbY29sLmtleSA/IGNvbC5rZXkgOiBpbmRleF0gPSBjb2wuc3RhdGlzdGljYWwgPT0gbnVsbCA/IHt9IDogdGhpcy5nZXRTdGF0aXN0aWNhbChjb2wsIGluZGV4LCBsaXN0LCByYXdEYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNhbChjb2w6IFNUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gICAgY29uc3QgdmFsID0gY29sLnN0YXRpc3RpY2FsO1xuICAgIGNvbnN0IGl0ZW06IFNUU3RhdGlzdGljYWwgPSB7XG4gICAgICBkaWdpdHM6IDIsXG4gICAgICBjdXJyZW5jeTogdW5kZWZpbmVkLFxuICAgICAgLi4uKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8geyB0eXBlOiB2YWwgYXMgU1RTdGF0aXN0aWNhbFR5cGUgfSA6ICh2YWwgYXMgU1RTdGF0aXN0aWNhbCkpLFxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHJlcy52YWx1ZSkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=