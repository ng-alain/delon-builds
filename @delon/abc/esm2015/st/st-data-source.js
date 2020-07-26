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
            params: new HttpParams({ fromObject: params }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWhELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBcUJyQyx5Q0FhQzs7O0lBWkMsaUNBQVc7O0lBQ1gsaUNBQVc7O0lBQ1gsd0NBQW1COztJQUNuQixtQ0FBK0M7O0lBQy9DLG9DQUFjOztJQUNkLGtDQUFXOztJQUNYLGtDQUFXOztJQUNYLG1DQUFhOztJQUNiLHNDQUFvQjs7SUFDcEIseUNBQTBCOztJQUMxQix3Q0FBd0I7O0lBQ3hCLDJDQUE4Qjs7Ozs7QUFHaEMsd0NBYUM7Ozs7OztJQVhDLHNDQUFrQjs7Ozs7SUFFbEIsZ0NBQVc7Ozs7O0lBRVgsZ0NBQVc7Ozs7O0lBRVgsbUNBQWM7Ozs7O0lBRWQsa0NBQWU7Ozs7O0lBRWYseUNBQWtDOztBQUlwQyxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBR3ZCLFlBQ1UsSUFBaUIsRUFDVCxZQUE0QixFQUM1QixRQUFrQixFQUNsQixNQUFjLEVBQ2Qs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OlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhvc3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVERhdGEsXG4gIFNUTXVsdGlTb3J0LFxuICBTVE11bHRpU29ydFJlc3VsdFR5cGUsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVxUmVOYW1lVHlwZSxcbiAgU1RSZXF1ZXN0T3B0aW9ucyxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU29ydE1hcCxcbiAgU1RTdGF0aXN0aWNhbCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUU3RhdGlzdGljYWxUeXBlLFxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaTogbnVtYmVyO1xuICBwczogbnVtYmVyO1xuICBwYWdpbmF0b3I6IGJvb2xlYW47XG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJlcTogU1RSZXE7XG4gIHJlczogU1RSZXM7XG4gIHBhZ2U6IFNUUGFnZTtcbiAgY29sdW1uczogU1RDb2x1bW5bXTtcbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDmmK/lkKbpnIDopoHmmL7npLrliIbpobXlmaggKi9cbiAgcGFnZVNob3c6IGJvb2xlYW47XG4gIC8qKiDmlrAgYHBpYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgcGk6IG51bWJlcjtcbiAgLyoqIOaWsCBgcHNg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwczogbnVtYmVyO1xuICAvKiog5pawIGB0b3RhbGDvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKiDmlbDmja4gKi9cbiAgbGlzdDogU1REYXRhW107XG4gIC8qKiDnu5/orqHmlbDmja4gKi9cbiAgc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzb3J0VGljayA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHlQaXBlOiBDTkN1cnJlbmN5UGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5blBpcGU6IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyUGlwZTogRGVjaW1hbFBpcGUsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgcGFnaW5hdG9yLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgIGxldCByZXRQczogbnVtYmVyO1xuICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICBsZXQgcmF3RGF0YTogYW55O1xuICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgcmV0OiBTVERhdGFbXTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJldC5sZW5ndGg7XG4gICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID0gcmVzLnJlTmFtZSEudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWVwQ29weShyZXQpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgZGF0YSQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgLy8gc29ydFxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gZGVlcENvcHkocmVzdWx0KTtcbiAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XG4gICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGMuZmlsdGVyITtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBmaWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGlmIChwYWdpbmF0b3IgJiYgcGFnZS5mcm9udCkge1xuICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcHJlLXByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyEocmVzdWx0LCByYXdEYXRhKSkpO1xuICAgIH1cblxuICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHRoaXMub3B0aW1pemVEYXRhKHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWU6IG9wdGlvbnMucm93Q2xhc3NOYW1lIH0pKSk7XG5cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXRMaXN0ID0gcmVzdWx0O1xuICAgICAgICBjb25zdCByZWFsVG90YWwgPSByZXRUb3RhbCB8fCB0b3RhbDtcbiAgICAgICAgY29uc3QgcmVhbFBzID0gcmV0UHMgfHwgcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgcHM6IHJldFBzLFxuICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgIHN0YXRpc3RpY2FsOiB0aGlzLmdlblN0YXRpc3RpY2FsKGNvbHVtbnMsIHJldExpc3QsIHJhd0RhdGEpLFxuICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2UsXG4gICAgICAgIH0gYXMgU1REYXRhU291cmNlUmVzdWx0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpOiB7IHRleHQ6IGFueTsgX3RleHQ6IFNhZmVIdG1sOyBvcmc/OiBhbnk7IGNvbG9yPzogc3RyaW5nIH0ge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCwgaWR4KSB8fCAnJztcbiAgICAgIGlmIChmb3JtYXRSZXMgJiYgfmZvcm1hdFJlcy5pbmRleE9mKCc8LycpKSB7XG4gICAgICAgIHJldHVybiB7IHRleHQ6IGZvcm1hdFJlcywgX3RleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGZvcm1hdFJlcyksIG9yZzogZm9ybWF0UmVzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXRSZXMsIF90ZXh0OiBmb3JtYXRSZXMsIG9yZzogZm9ybWF0UmVzIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICBsZXQgY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICBjYXNlICdubyc6XG4gICAgICAgIHRleHQgPSB0aGlzLmdldE5vSW5kZXgoaXRlbSwgY29sLCBpZHgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgIHRleHQgPSB2YWx1ZSA/IGA8aW1nIHNyYz1cIiR7dmFsdWV9XCIgY2xhc3M9XCJpbWdcIj5gIDogJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgdGV4dCA9IHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5udW1iZXJEaWdpdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgdGV4dCA9IHRoaXMuY3VycmVudHlQaXBlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHRleHQgPSB2YWx1ZSA9PT0gY29sLmRlZmF1bHQgPyBjb2wuZGVmYXVsdCA6IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneW4nOlxuICAgICAgICB0ZXh0ID0gdGhpcy55blBpcGUudHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4hLnRydXRoLCBjb2wueW4hLnllcyEsIGNvbC55biEubm8hLCBjb2wueW4hLm1vZGUhLCBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgIHRleHQgPSBjb2wuZW51bSFbdmFsdWVdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICBjYXNlICdiYWRnZSc6XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjb2wudHlwZSA9PT0gJ3RhZycgPyBjb2wudGFnIDogY29sLmJhZGdlO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhW3RleHRdKSB7XG4gICAgICAgICAgY29uc3QgZGF0YUl0ZW0gPSBkYXRhW3RleHRdO1xuICAgICAgICAgIHRleHQgPSBkYXRhSXRlbS50ZXh0O1xuICAgICAgICAgIGNvbG9yID0gZGF0YUl0ZW0uY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGV4dCA9PSBudWxsKSB0ZXh0ID0gJyc7XG4gICAgcmV0dXJuIHsgdGV4dCwgX3RleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQpLCBvcmc6IHZhbHVlLCBjb2xvciB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBhZ2luYXRvciwgcGksIHBzLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHJlTmFtZSA9IHJlcS5yZU5hbWUgYXMgU1RSZXFSZU5hbWVUeXBlO1xuICAgIGlmIChwYWdpbmF0b3IpIHtcbiAgICAgIGlmIChyZXEudHlwZSA9PT0gJ3BhZ2UnKSB7XG4gICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICBbcmVOYW1lLnBpIGFzIHN0cmluZ106IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgICBbcmVOYW1lLnBzIGFzIHN0cmluZ106IHBzLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUuc2tpcCBhcyBzdHJpbmddOiAocGkgLSAxKSAqIHBzLFxuICAgICAgICAgIFtyZU5hbWUubGltaXQgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmFtcyA9IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5wYXJhbXMsXG4gICAgICAuLi50aGlzLmdldFJlcVNvcnRNYXAoc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zKSxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxuICAgIH07XG5cbiAgICBsZXQgcmVxT3B0aW9uczogU1RSZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBwYXJhbXMgfSksXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IHsgLi4ucmVxLmJvZHksIC4uLnBhcmFtcyB9LFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVxLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSByZXEucHJvY2VzcyhyZXFPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIG9wdGltaXplRGF0YShvcHRpb25zOiB7IGNvbHVtbnM6IFNUQ29sdW1uW107IHJlc3VsdDogU1REYXRhW107IHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lIH0pOiBTVERhdGFbXSB7XG4gICAgY29uc3QgeyByZXN1bHQsIGNvbHVtbnMsIHJvd0NsYXNzTmFtZSB9ID0gb3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQocmVzdWx0W2ldLCBjLCBpKSk7XG4gICAgICBpZiAocm93Q2xhc3NOYW1lKSB7XG4gICAgICAgIHJlc3VsdFtpXS5fcm93Q2xhc3NOYW1lID0gcm93Q2xhc3NOYW1lKHJlc3VsdFtpXSwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXROb0luZGV4KGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgY29sLm5vSW5kZXggPT09ICdmdW5jdGlvbicgPyBjb2wubm9JbmRleChpdGVtLCBjb2wsIGlkeCkgOiBjb2wubm9JbmRleCEgKyBpZHg7XG4gIH1cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvcnRJdGVtID0gc29ydExpc3RbMF07XG4gICAgaWYgKHNvcnRJdGVtLmNvbXBhcmUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0SXRlbS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IFNURGF0YSwgYjogU1REYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBzb3J0SXRlbS5jb21wYXJlIShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRJdGVtLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG5leHRTb3J0VGljaygpOiBudW1iZXIge1xuICAgIHJldHVybiArK3RoaXMuc29ydFRpY2s7XG4gIH1cblxuICBnZXRSZXFTb3J0TWFwKHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCB8IHVuZGVmaW5lZCwgbXVsdGlTb3J0OiBTVE11bHRpU29ydCB8IHVuZGVmaW5lZCwgY29sdW1uczogU1RDb2x1bW5bXSk6IFNUTXVsdGlTb3J0UmVzdWx0VHlwZSB7XG4gICAgbGV0IHJldDogU1RNdWx0aVNvcnRSZXN1bHRUeXBlID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zOiBTVE11bHRpU29ydCA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIGtlZXBFbXB0eUtleTogdHJ1ZSxcbiAgICAgICAgYXJyYXlQYXJhbTogZmFsc2UsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNvcnRNYXAgPSBzb3J0TGlzdFxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aWNrIC0gYi50aWNrKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5rZXkhICsgbXMubmFtZVNlcGFyYXRvciArICgoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdCFdIHx8IGl0ZW0uZGVmYXVsdCkpO1xuXG4gICAgICByZXQgPSB7IFttcy5rZXkhXTogbXMuYXJyYXlQYXJhbSA/IHNvcnRNYXAgOiBzb3J0TWFwLmpvaW4obXMuc2VwYXJhdG9yKSB9O1xuXG4gICAgICByZXR1cm4gc29ydE1hcC5sZW5ndGggPT09IDAgJiYgbXMua2VlcEVtcHR5S2V5ID09PSBmYWxzZSA/IHt9IDogcmV0O1xuICAgIH1cblxuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgbGV0IHNvcnRGaWxlZCA9IG1hcERhdGEua2V5O1xuICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgIHNvcnRWYWx1ZSA9IHNvcnRGaWxlZCArIChzaW5nbGVTb3J0Lm5hbWVTZXBhcmF0b3IgfHwgJy4nKSArIHNvcnRWYWx1ZTtcbiAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICB9XG4gICAgcmV0W3NvcnRGaWxlZCBhcyBzdHJpbmddID0gc29ydFZhbHVlIGFzIHN0cmluZztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJlZERhdGEoZmlsdGVyOiBTVENvbHVtbkZpbHRlcikge1xuICAgIHJldHVybiBmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnID8gZmlsdGVyLm1lbnVzIS5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpIDogZmlsdGVyLm1lbnVzIS5zbGljZSgwLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnM6IFNUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb2wuZmlsdGVyITtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgbGV0IG9iajogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgICAgICBpZiAoZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICAgIG9iaiA9IGZpbHRlci5yZU5hbWUhKGZpbHRlci5tZW51cyEsIGNvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2ZpbHRlci5rZXkhXSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0geyAuLi5yZXQsIC4uLm9iaiB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0YXRpc3RpY2FsXG5cbiAgcHJpdmF0ZSBnZW5TdGF0aXN0aWNhbChjb2x1bW5zOiBTVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlczogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgfHwgY29sLmluZGV4S2V5IHx8IGluZGV4XSA9IGNvbC5zdGF0aXN0aWNhbCA9PSBudWxsID8ge30gOiB0aGlzLmdldFN0YXRpc3RpY2FsKGNvbCwgaW5kZXgsIGxpc3QsIHJhd0RhdGEpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXRpc3RpY2FsKGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhOiBhbnkpOiBTVFN0YXRpc3RpY2FsUmVzdWx0IHtcbiAgICBjb25zdCB2YWwgPSBjb2wuc3RhdGlzdGljYWw7XG4gICAgY29uc3QgaXRlbTogU1RTdGF0aXN0aWNhbCA9IHtcbiAgICAgIGRpZ2l0czogMixcbiAgICAgIGN1cnJlbmN5OiB1bmRlZmluZWQsXG4gICAgICAuLi4odHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHZhbCBhcyBTVFN0YXRpc3RpY2FsVHlwZSB9IDogKHZhbCBhcyBTVFN0YXRpc3RpY2FsKSksXG4gICAgfTtcbiAgICBsZXQgcmVzOiBTVFN0YXRpc3RpY2FsUmVzdWx0ID0geyB2YWx1ZTogMCB9O1xuICAgIGxldCBjdXJyZW5jeSA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgaXRlbS50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXMgPSBpdGVtLnR5cGUodGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLCBjb2wsIGxpc3QsIHJhd0RhdGEpO1xuICAgICAgY3VycmVuY3kgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICBjYXNlICdjb3VudCc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rpc3RpbmN0Q291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KS5maWx0ZXIoKHZhbHVlLCBpZHgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGlkeCkubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdW0nOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IHRoaXMudG9GaXhlZCh0aGlzLmdldFN1bShpbmRleCwgbGlzdCksIGl0ZW0uZGlnaXRzISk7XG4gICAgICAgICAgY3VycmVuY3kgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdmVyYWdlJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpIC8gbGlzdC5sZW5ndGgsIGl0ZW0uZGlnaXRzISk7XG4gICAgICAgICAgY3VycmVuY3kgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXgnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IE1hdGgubWF4KC4uLnRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSk7XG4gICAgICAgICAgY3VycmVuY3kgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IE1hdGgubWluKC4uLnRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSk7XG4gICAgICAgICAgY3VycmVuY3kgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXRlbS5jdXJyZW5jeSA9PT0gdHJ1ZSB8fCAoaXRlbS5jdXJyZW5jeSA9PSBudWxsICYmIGN1cnJlbmN5ID09PSB0cnVlKSkge1xuICAgICAgcmVzLnRleHQgPSB0aGlzLmN1cnJlbnR5UGlwZS50cmFuc2Zvcm0ocmVzLnZhbHVlKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy50ZXh0ID0gU3RyaW5nKHJlcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHRvRml4ZWQodmFsOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoaXNOYU4odmFsKSB8fCAhaXNGaW5pdGUodmFsKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbC50b0ZpeGVkKGRpZ2l0cykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWx1ZXMoaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10pOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKGkgPT4gaS5fdmFsdWVzW2luZGV4XS5vcmcpLm1hcChpID0+IChpID09PSAnJyB8fCBpID09IG51bGwgPyAwIDogaSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdW0oaW5kZXg6IG51bWJlciwgbGlzdDogU1REYXRhW10pOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkucmVkdWNlKChwLCBpKSA9PiAocCArPSBwYXJzZUZsb2F0KFN0cmluZyhpKSkpLCAwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==