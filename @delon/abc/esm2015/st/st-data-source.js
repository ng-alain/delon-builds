/**
 * @fileoverview added by tsickle
 * Generated from: st-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CNCurrencyPipe, DatePipe, YNPipe, _HttpClient } from '@delon/theme';
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
                const sorterFn = this.getSorterFn((/** @type {?} */ (columns)));
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
                statistical: this.genStatistical((/** @type {?} */ (columns)), retList, rawData),
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
                text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                break;
            case 'yn':
                text = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)), false);
                break;
            case 'enum':
                text = (/** @type {?} */ (col.enum))[value];
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
        if (!(reqOptions.params instanceof HttpParams)) {
            reqOptions.params = new HttpParams({ fromObject: reqOptions.params });
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
        if (multiSort) {
            /** @type {?} */
            const ms = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.', keepEmptyKey: true, arrayParam: false }, multiSort);
            /** @type {?} */
            const sortMap = sortList
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
            item => (/** @type {?} */ (item.key)) + ms.nameSeparator + ((item.reName || {})[(/** @type {?} */ (item.default))] || item.default)));
            ret = { [(/** @type {?} */ (ms.key))]: ms.arrayParam ? sortMap : sortMap.join(ms.separator) };
            return sortMap.length === 0 && ms.keepEmptyKey === false ? {} : ret;
        }
        if (sortList.length === 0)
            return ret;
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
            res[col.key || col.indexKey || index] = col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvc3QvIiwic291cmNlcyI6WyJzdC1kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFzQnJDLHlDQWFDOzs7SUFaQyxpQ0FBVzs7SUFDWCxpQ0FBVzs7SUFDWCx3Q0FBbUI7O0lBQ25CLG1DQUErQzs7SUFDL0Msb0NBQWM7O0lBQ2Qsa0NBQVc7O0lBQ1gsa0NBQVc7O0lBQ1gsbUNBQWE7O0lBQ2Isc0NBQXFCOztJQUNyQix5Q0FBMEI7O0lBQzFCLHdDQUF3Qjs7SUFDeEIsMkNBQThCOzs7OztBQUdoQyx3Q0FhQzs7Ozs7O0lBWEMsc0NBQWtCOzs7OztJQUVsQixnQ0FBVzs7Ozs7SUFFWCxnQ0FBVzs7Ozs7SUFFWCxtQ0FBYzs7Ozs7SUFFZCxrQ0FBZTs7Ozs7SUFFZix5Q0FBa0M7O0FBSXBDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7SUFHdkIsWUFDVSxJQUFpQixFQUNULFlBQTRCLEVBQzVCLFFBQWtCLEVBQ2xCLE1BQWMs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QXFCOzs7OztJQUduQiw0QkFBeUI7Ozs7O0lBQ3pCLG9DQUE0Qzs7Ozs7SUFDNUMsZ0NBQWtDOzs7OztJQUNsQyw4QkFBOEI7Ozs7O0lBQzlCLGtDQUF1Qzs7Ozs7SUFDdkMsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW5GaWx0ZXIsXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1REYXRhLFxuICBTVE11bHRpU29ydCxcbiAgU1RNdWx0aVNvcnRSZXN1bHRUeXBlLFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcVJlTmFtZVR5cGUsXG4gIFNUUmVxdWVzdE9wdGlvbnMsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFNvcnRNYXAsXG4gIFNUU3RhdGlzdGljYWwsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFN0YXRpc3RpY2FsVHlwZSxcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaTogbnVtYmVyO1xuICBwczogbnVtYmVyO1xuICBwYWdpbmF0b3I6IGJvb2xlYW47XG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJlcTogU1RSZXE7XG4gIHJlczogU1RSZXM7XG4gIHBhZ2U6IFNUUGFnZTtcbiAgY29sdW1uczogX1NUQ29sdW1uW107XG4gIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQ7XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93OiBib29sZWFuO1xuICAvKiog5pawIGBwaWDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKiDmlrAgYHBzYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcHM6IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbDogbnVtYmVyO1xuICAvKiog5pWw5o2uICovXG4gIGxpc3Q6IFNURGF0YVtdO1xuICAvKiog57uf6K6h5pWw5o2uICovXG4gIHN0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc29ydFRpY2sgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5UGlwZTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW5QaXBlOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlclBpcGU6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIHBhZ2luYXRvciwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICBsZXQgcmV0UHM6IG51bWJlcjtcbiAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgbGV0IHJldFBpOiBudW1iZXI7XG4gICAgbGV0IHJhd0RhdGE6IGFueTtcbiAgICBsZXQgc2hvd1BhZ2UgPSBwYWdlLnNob3c7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHJhd0RhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgbGV0IHJldDogU1REYXRhW107XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0ID0gcmVzdWx0O1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXQubGVuZ3RoO1xuICAgICAgICAgICAgcmV0UHMgPSByZXRUb3RhbDtcbiAgICAgICAgICAgIHNob3dQYWdlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgIHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9IHJlcy5yZU5hbWUhLnRvdGFsICYmIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lIS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVlcENvcHkocmV0KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgIGRhdGEkID0gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIC8vIHNvcnRcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IGRlZXBDb3B5KHJlc3VsdCk7XG4gICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlcilcbiAgICAgICAgICAgIC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBjLmZpbHRlciE7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0RmlsdGVyZWREYXRhKGZpbHRlcik7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gZmlsdGVyLmZuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+IHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICBpZiAocGFnaW5hdG9yICYmIHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHByZS1wcm9jZXNzXG4gICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MhKHJlc3VsdCwgcmF3RGF0YSkpKTtcbiAgICB9XG5cbiAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiB0aGlzLm9wdGltaXplRGF0YSh7IHJlc3VsdCwgY29sdW1ucywgcm93Q2xhc3NOYW1lOiBvcHRpb25zLnJvd0NsYXNzTmFtZSB9KSkpO1xuXG4gICAgcmV0dXJuIGRhdGEkLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgcmV0TGlzdCA9IHJlc3VsdDtcbiAgICAgICAgY29uc3QgcmVhbFRvdGFsID0gcmV0VG90YWwgfHwgdG90YWw7XG4gICAgICAgIGNvbnN0IHJlYWxQcyA9IHJldFBzIHx8IHBzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGk6IHJldFBpLFxuICAgICAgICAgIHBzOiByZXRQcyxcbiAgICAgICAgICB0b3RhbDogcmV0VG90YWwsXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcbiAgICAgICAgICBzdGF0aXN0aWNhbDogdGhpcy5nZW5TdGF0aXN0aWNhbChjb2x1bW5zIGFzIF9TVENvbHVtbltdLCByZXRMaXN0LCByYXdEYXRhKSxcbiAgICAgICAgICBwYWdlU2hvdzogdHlwZW9mIHNob3dQYWdlID09PSAndW5kZWZpbmVkJyA/IHJlYWxUb3RhbCA+IHJlYWxQcyA6IHNob3dQYWdlLFxuICAgICAgICB9IGFzIFNURGF0YVNvdXJjZVJlc3VsdDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IHsgdGV4dDogYW55OyBfdGV4dDogU2FmZUh0bWw7IG9yZz86IGFueTsgY29sb3I/OiBzdHJpbmcgfSB7XG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIGNvbnN0IGZvcm1hdFJlcyA9IGNvbC5mb3JtYXQoaXRlbSwgY29sLCBpZHgpIHx8ICcnO1xuICAgICAgaWYgKGZvcm1hdFJlcyAmJiB+Zm9ybWF0UmVzLmluZGV4T2YoJzwvJykpIHtcbiAgICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzLCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSwgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGZvcm1hdFJlcywgX3RleHQ6IGZvcm1hdFJlcywgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgIGxldCBjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgdGV4dCA9IHRoaXMuZ2V0Tm9JbmRleChpdGVtLCBjb2wsIGlkeCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICB0ZXh0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICB0ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlID09PSBjb2wuZGVmYXVsdCA/IGNvbC5kZWZhdWx0IDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHRleHQgPSB0aGlzLnluUGlwZS50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55biEudHJ1dGgsIGNvbC55biEueWVzISwgY29sLnluIS5ubyEsIGNvbC55biEubW9kZSEsIGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbnVtJzpcbiAgICAgICAgdGV4dCA9IGNvbC5lbnVtIVt2YWx1ZV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgIGNhc2UgJ2JhZGdlJzpcbiAgICAgICAgY29uc3QgZGF0YSA9IGNvbC50eXBlID09PSAndGFnJyA/IGNvbC50YWcgOiBjb2wuYmFkZ2U7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGFbdGV4dF0pIHtcbiAgICAgICAgICBjb25zdCBkYXRhSXRlbSA9IGRhdGFbdGV4dF07XG4gICAgICAgICAgdGV4dCA9IGRhdGFJdGVtLnRleHQ7XG4gICAgICAgICAgY29sb3IgPSBkYXRhSXRlbS5jb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0ZXh0ID09IG51bGwpIHRleHQgPSAnJztcbiAgICByZXR1cm4geyB0ZXh0LCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCksIG9yZzogdmFsdWUsIGNvbG9yIH07XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGFnaW5hdG9yLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHBhZ2luYXRvcikge1xuICAgICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgW3JlTmFtZS5za2lwIGFzIHN0cmluZ106IChwaSAtIDEpICogcHMsXG4gICAgICAgICAgW3JlTmFtZS5saW1pdCBhcyBzdHJpbmddOiBwcyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKHJlcU9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgIHJlcU9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiByZXFPcHRpb25zLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIG9wdGltaXplRGF0YShvcHRpb25zOiB7IGNvbHVtbnM6IF9TVENvbHVtbltdOyByZXN1bHQ6IFNURGF0YVtdOyByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB9KTogU1REYXRhW10ge1xuICAgIGNvbnN0IHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWUgfSA9IG9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmVzdWx0W2ldLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSkpO1xuICAgICAgaWYgKHJvd0NsYXNzTmFtZSkge1xuICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IF9TVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCB2b2lkIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc29ydEl0ZW0gPSBzb3J0TGlzdFswXTtcbiAgICBpZiAoc29ydEl0ZW0uY29tcGFyZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRJdGVtLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRJdGVtLmNvbXBhcmUhKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydEl0ZW0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXQgbmV4dFNvcnRUaWNrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5zb3J0VGljaztcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgdW5kZWZpbmVkLCBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgdW5kZWZpbmVkLCBjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IFNUTXVsdGlTb3J0UmVzdWx0VHlwZSB7XG4gICAgbGV0IHJldDogU1RNdWx0aVNvcnRSZXN1bHRUeXBlID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zOiBTVE11bHRpU29ydCA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIGtlZXBFbXB0eUtleTogdHJ1ZSxcbiAgICAgICAgYXJyYXlQYXJhbTogZmFsc2UsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNvcnRNYXAgPSBzb3J0TGlzdFxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aWNrIC0gYi50aWNrKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5rZXkhICsgbXMubmFtZVNlcGFyYXRvciArICgoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdCFdIHx8IGl0ZW0uZGVmYXVsdCkpO1xuXG4gICAgICByZXQgPSB7IFttcy5rZXkhXTogbXMuYXJyYXlQYXJhbSA/IHNvcnRNYXAgOiBzb3J0TWFwLmpvaW4obXMuc2VwYXJhdG9yKSB9O1xuXG4gICAgICByZXR1cm4gc29ydE1hcC5sZW5ndGggPT09IDAgJiYgbXMua2VlcEVtcHR5S2V5ID09PSBmYWxzZSA/IHt9IDogcmV0O1xuICAgIH1cblxuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgbGV0IHNvcnRGaWxlZCA9IG1hcERhdGEua2V5O1xuICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgIHNvcnRWYWx1ZSA9IHNvcnRGaWxlZCArIChzaW5nbGVTb3J0Lm5hbWVTZXBhcmF0b3IgfHwgJy4nKSArIHNvcnRWYWx1ZTtcbiAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICB9XG4gICAgcmV0W3NvcnRGaWxlZCBhcyBzdHJpbmddID0gc29ydFZhbHVlIGFzIHN0cmluZztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJlZERhdGEoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IFNUQ29sdW1uRmlsdGVyTWVudVtdIHtcbiAgICByZXR1cm4gZmlsdGVyLnR5cGUgPT09ICdkZWZhdWx0JyA/IGZpbHRlci5tZW51cyEuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKSA6IGZpbHRlci5tZW51cyEuc2xpY2UoMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGNvbC5maWx0ZXIhO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICBsZXQgb2JqOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge307XG4gICAgICAgIGlmIChmaWx0ZXIucmVOYW1lKSB7XG4gICAgICAgICAgb2JqID0gZmlsdGVyLnJlTmFtZSEoZmlsdGVyLm1lbnVzISwgY29sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbZmlsdGVyLmtleSFdID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB7IC4uLnJldCwgLi4ub2JqIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3RhdGlzdGljYWxcblxuICBwcml2YXRlIGdlblN0YXRpc3RpY2FsKGNvbHVtbnM6IF9TVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlczogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgfHwgY29sLmluZGV4S2V5IHx8IGluZGV4XSA9IGNvbC5zdGF0aXN0aWNhbCA9PSBudWxsID8ge30gOiB0aGlzLmdldFN0YXRpc3RpY2FsKGNvbCwgaW5kZXgsIGxpc3QsIHJhd0RhdGEpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXRpc3RpY2FsKGNvbDogX1NUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gICAgY29uc3QgdmFsID0gY29sLnN0YXRpc3RpY2FsO1xuICAgIGNvbnN0IGl0ZW06IFNUU3RhdGlzdGljYWwgPSB7XG4gICAgICBkaWdpdHM6IDIsXG4gICAgICBjdXJyZW5jeTogdW5kZWZpbmVkLFxuICAgICAgLi4uKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8geyB0eXBlOiB2YWwgYXMgU1RTdGF0aXN0aWNhbFR5cGUgfSA6ICh2YWwgYXMgU1RTdGF0aXN0aWNhbCkpLFxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW50eVBpcGUudHJhbnNmb3JtKHJlcy52YWx1ZSkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=