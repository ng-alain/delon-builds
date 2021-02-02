import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe, YNPipe, _HttpClient } from '@delon/theme';
import { CurrencyService } from '@delon/util/format';
import { deepCopy, deepGet } from '@delon/util/other';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "@delon/util/format";
import * as i4 from "@angular/platform-browser";
export class STDataSource {
    constructor(http, datePipe, ynPipe, numberPipe, currencySrv, dom) {
        this.http = http;
        this.datePipe = datePipe;
        this.ynPipe = ynPipe;
        this.numberPipe = numberPipe;
        this.currencySrv = currencySrv;
        this.dom = dom;
        this.sortTick = 0;
    }
    process(options) {
        let data$;
        let isRemote = false;
        const { data, res, total, page, pi, ps, paginator, columns } = options;
        let retTotal;
        let retPs;
        let retList;
        let retPi;
        let rawData;
        let showPage = page.show;
        if (typeof data === 'string') {
            isRemote = true;
            data$ = this.getByHttp(data, options).pipe(map(result => {
                rawData = result;
                let ret;
                if (Array.isArray(result)) {
                    ret = result;
                    retTotal = ret.length;
                    retPs = retTotal;
                    showPage = false;
                }
                else {
                    // list
                    ret = deepGet(result, res.reName.list, []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    // total
                    const resultTotal = res.reName.total && deepGet(result, res.reName.total, null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                }
                return deepCopy(ret);
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
                rawData = result;
                let copyResult = deepCopy(result);
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
                    const filter = c.filter;
                    const values = this.getFilteredData(filter);
                    if (values.length === 0)
                        return;
                    const onFilter = filter.fn;
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
                if (paginator && page.front) {
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
            data$ = data$.pipe(map(result => res.process(result, rawData)));
        }
        data$ = data$.pipe(map(result => this.optimizeData({ result, columns, rowClassName: options.rowClassName })));
        return data$.pipe(map(result => {
            retList = result;
            const realTotal = retTotal || total;
            const realPs = retPs || ps;
            return {
                pi: retPi,
                ps: retPs,
                total: retTotal,
                list: retList,
                statistical: this.genStatistical(columns, retList, rawData),
                pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
            };
        }));
    }
    get(item, col, idx) {
        var _a;
        try {
            if (col.format) {
                const formatRes = col.format(item, col, idx) || '';
                if (formatRes && ~formatRes.indexOf('</')) {
                    return { text: formatRes, _text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
                }
                return { text: formatRes, _text: formatRes, org: formatRes };
            }
            const value = deepGet(item, col.index, col.default);
            let text = value;
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
                    text = this.currencySrv.format(value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
                    break;
                case 'date':
                    text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                    break;
                case 'yn':
                    text = this.ynPipe.transform(value === col.yn.truth, col.yn.yes, col.yn.no, col.yn.mode, false);
                    break;
                case 'enum':
                    text = col.enum[value];
                    break;
                case 'tag':
                case 'badge':
                    const data = col.type === 'tag' ? col.tag : col.badge;
                    if (data && data[text]) {
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
        catch (ex) {
            const text = `INVALID DATA`;
            console.error(`Failed to get data`, item, col, ex);
            return { text, _text: this.dom.bypassSecurityTrustHtml(text), org: text };
        }
    }
    getByHttp(url, options) {
        const { req, page, paginator, pi, ps, singleSort, multiSort, columns } = options;
        const method = (req.method || 'GET').toUpperCase();
        let params = {};
        const reName = req.reName;
        if (paginator) {
            if (req.type === 'page') {
                params = {
                    [reName.pi]: page.zeroIndexed ? pi - 1 : pi,
                    [reName.ps]: ps,
                };
            }
            else {
                params = {
                    [reName.skip]: (pi - 1) * ps,
                    [reName.limit]: ps,
                };
            }
        }
        params = Object.assign(Object.assign(Object.assign(Object.assign({}, params), req.params), this.getReqSortMap(singleSort, multiSort, columns)), this.getReqFilterMap(columns));
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
    optimizeData(options) {
        const { result, columns, rowClassName } = options;
        for (let i = 0, len = result.length; i < len; i++) {
            result[i]._values = columns.map(c => this.get(result[i], c, i));
            if (rowClassName) {
                result[i]._rowClassName = rowClassName(result[i], i);
            }
        }
        return result;
    }
    getNoIndex(item, col, idx) {
        return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex + idx;
    }
    // #region sort
    getValidSort(columns) {
        return columns.filter(item => item._sort && item._sort.enabled && item._sort.default).map(item => item._sort);
    }
    getSorterFn(columns) {
        const sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        const sortItem = sortList[0];
        if (sortItem.compare === null) {
            return;
        }
        if (typeof sortItem.compare !== 'function') {
            console.warn(`[st] Muse provide the compare function in sort`);
            return;
        }
        return (a, b) => {
            const result = sortItem.compare(a, b);
            if (result !== 0) {
                return sortItem.default === 'descend' ? -result : result;
            }
            return 0;
        };
    }
    get nextSortTick() {
        return ++this.sortTick;
    }
    getReqSortMap(singleSort, multiSort, columns) {
        let ret = {};
        const sortList = this.getValidSort(columns);
        if (multiSort) {
            const ms = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.', keepEmptyKey: true, arrayParam: false }, multiSort);
            const sortMap = sortList
                .sort((a, b) => a.tick - b.tick)
                .map(item => item.key + ms.nameSeparator + ((item.reName || {})[item.default] || item.default));
            ret = { [ms.key]: ms.arrayParam ? sortMap : sortMap.join(ms.separator) };
            return sortMap.length === 0 && ms.keepEmptyKey === false ? {} : ret;
        }
        if (sortList.length === 0)
            return ret;
        const mapData = sortList[0];
        let sortFiled = mapData.key;
        let sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
        if (singleSort) {
            sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
            sortFiled = singleSort.key || 'sort';
        }
        ret[sortFiled] = sortValue;
        return ret;
    }
    // #endregion
    // #region filter
    getFilteredData(filter) {
        return filter.type === 'default' ? filter.menus.filter(f => f.checked === true) : filter.menus.slice(0, 1);
    }
    getReqFilterMap(columns) {
        let ret = {};
        columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            const filter = col.filter;
            const values = this.getFilteredData(filter);
            let obj = {};
            if (filter.reName) {
                obj = filter.reName(filter.menus, col);
            }
            else {
                obj[filter.key] = values.map(i => i.value).join(',');
            }
            ret = Object.assign(Object.assign({}, ret), obj);
        });
        return ret;
    }
    // #endregion
    // #region statistical
    genStatistical(columns, list, rawData) {
        const res = {};
        columns.forEach((col, index) => {
            res[col.key || col.indexKey || index] = col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
        });
        return res;
    }
    getStatistical(col, index, list, rawData) {
        var _a;
        const val = col.statistical;
        const item = Object.assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: val } : val));
        let res = { value: 0 };
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
                    res.value = this.getValues(index, list).filter((value, idx, self) => self.indexOf(value) === idx).length;
                    break;
                case 'sum':
                    res.value = this.toFixed(this.getSum(index, list), item.digits);
                    currency = true;
                    break;
                case 'average':
                    res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits);
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
            res.text = this.currencySrv.format(res.value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
        }
        else {
            res.text = String(res.value);
        }
        return res;
    }
    toFixed(val, digits) {
        if (isNaN(val) || !isFinite(val)) {
            return 0;
        }
        return parseFloat(val.toFixed(digits));
    }
    getValues(index, list) {
        return list.map(i => i._values[index].org).map(i => (i === '' || i == null ? 0 : i));
    }
    getSum(index, list) {
        return this.getValues(index, list).reduce((p, i) => (p += parseFloat(String(i))), 0);
    }
}
/** @nocollapse */ STDataSource.ɵfac = function STDataSource_Factory(t) { return new (t || STDataSource)(i0.ɵɵinject(i1._HttpClient), i0.ɵɵinject(i1.DatePipe, 1), i0.ɵɵinject(i1.YNPipe, 1), i0.ɵɵinject(i2.DecimalPipe, 1), i0.ɵɵinject(i3.CurrencyService), i0.ɵɵinject(i4.DomSanitizer)); };
/** @nocollapse */ STDataSource.ɵprov = i0.ɵɵdefineInjectable({ token: STDataSource, factory: STDataSource.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STDataSource, [{
        type: Injectable
    }], function () { return [{ type: i1._HttpClient }, { type: i1.DatePipe, decorators: [{
                type: Host
            }] }, { type: i1.YNPipe, decorators: [{
                type: Host
            }] }, { type: i2.DecimalPipe, decorators: [{
                type: Host
            }] }, { type: i3.CurrencyService }, { type: i4.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvc3Qvc3QtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFxRHJDLE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQ1UsSUFBaUIsRUFDVCxRQUFrQixFQUNsQixNQUFjLEVBQ2QsVUFBdUIsRUFDL0IsV0FBNEIsRUFDNUIsR0FBaUI7UUFMakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFSbkIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQVNsQixDQUFDO0lBRUosT0FBTyxDQUFDLE9BQTRCO1FBQ2xDLElBQUksS0FBMkIsQ0FBQztRQUNoQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDdkUsSUFBSSxRQUFnQixDQUFDO1FBQ3JCLElBQUksS0FBYSxDQUFDO1FBQ2xCLElBQUksT0FBaUIsQ0FBQztRQUN0QixJQUFJLEtBQWEsQ0FBQztRQUNsQixJQUFJLE9BQVksQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNYLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLElBQUksR0FBYSxDQUFDO2dCQUNsQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUM7b0JBQ2IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7b0JBQ3RCLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLE9BQU87b0JBQ1AsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU8sQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN0QyxHQUFHLEdBQUcsRUFBRSxDQUFDO3FCQUNWO29CQUNELFFBQVE7b0JBQ1IsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTyxDQUFDLEtBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlGLFFBQVEsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE9BQU87WUFDUCxHQUFHLENBQUMsQ0FBQyxNQUFnQixFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFzQixDQUFDLENBQUM7Z0JBQzFELElBQUksUUFBUSxFQUFFO29CQUNaLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxPQUFPLFVBQVUsQ0FBQztZQUNwQixDQUFDLENBQUM7WUFDRixTQUFTO1lBQ1QsR0FBRyxDQUFDLENBQUMsTUFBZ0IsRUFBRSxFQUFFO2dCQUN2QixPQUFPO3FCQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7cUJBQ3JCLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDWCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTyxDQUFDO29CQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQzt3QkFBRSxPQUFPO29CQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO29CQUMzQixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTt3QkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3dCQUM1RCxPQUFPO3FCQUNSO29CQUNELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7WUFDRixTQUFTO1lBQ1QsR0FBRyxDQUFDLENBQUMsTUFBZ0IsRUFBRSxFQUFFO2dCQUN2QixJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMzRCxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTt3QkFDdEIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7cUJBQ25EO2lCQUNGO2dCQUNELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUVELGNBQWM7UUFDZCxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDckMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNqQixNQUFNLFNBQVMsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1lBQ3BDLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFFM0IsT0FBTztnQkFDTCxFQUFFLEVBQUUsS0FBSztnQkFDVCxFQUFFLEVBQUUsS0FBSztnQkFDVCxLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsT0FBTztnQkFDYixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFzQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0JBQzFFLFFBQVEsRUFBRSxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDcEQsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLEdBQUcsQ0FBQyxJQUFZLEVBQUUsR0FBYyxFQUFFLEdBQVc7O1FBQ25ELElBQUk7WUFDRixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUM7aUJBQ2hHO2dCQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO2FBQzlEO1lBRUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBaUIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksS0FBeUIsQ0FBQztZQUM5QixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLEtBQUssSUFBSTtvQkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUNSLEtBQUssS0FBSztvQkFDUixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFELE1BQU07Z0JBQ1IsS0FBSyxVQUFVO29CQUNiLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQUUsR0FBRyxDQUFDLFFBQVEsMENBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzVELE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksR0FBRyxLQUFLLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUYsTUFBTTtnQkFDUixLQUFLLElBQUk7b0JBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLEVBQUcsRUFBRSxHQUFHLENBQUMsRUFBRyxDQUFDLElBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdkcsTUFBTTtnQkFDUixLQUFLLE1BQU07b0JBQ1QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxPQUFPO29CQUNWLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUN0RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ3JCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTCxJQUFJLEdBQUcsRUFBRSxDQUFDO3FCQUNYO29CQUNELE1BQU07YUFDVDtZQUNELElBQUksSUFBSSxJQUFJLElBQUk7Z0JBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUM1QixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDbkY7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQztZQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDM0U7SUFDSCxDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVcsRUFBRSxPQUE0QjtRQUN6RCxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNqRixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUF5QixDQUFDO1FBQzdDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxHQUFHO29CQUNQLENBQUMsTUFBTSxDQUFDLEVBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JELENBQUMsTUFBTSxDQUFDLEVBQVksQ0FBQyxFQUFFLEVBQUU7aUJBQzFCLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxNQUFNLEdBQUc7b0JBQ1AsQ0FBQyxNQUFNLENBQUMsSUFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDdEMsQ0FBQyxNQUFNLENBQUMsS0FBZSxDQUFDLEVBQUUsRUFBRTtpQkFDN0IsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxNQUFNLCtEQUNELE1BQU0sR0FDTixHQUFHLENBQUMsTUFBTSxHQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FDakMsQ0FBQztRQUVGLElBQUksVUFBVSxHQUFxQjtZQUNqQyxNQUFNO1lBQ04sSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUM7UUFDRixJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDL0MsVUFBVSxHQUFHO2dCQUNYLElBQUksa0NBQU8sR0FBRyxDQUFDLElBQUksR0FBSyxNQUFNLENBQUU7Z0JBQ2hDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTzthQUNyQixDQUFDO1NBQ0g7UUFDRCxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDckMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxZQUFZLFVBQVUsQ0FBQyxFQUFFO1lBQzlDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdkU7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFrRjtRQUM3RixNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLFlBQVksRUFBRTtnQkFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVksRUFBRSxHQUFjLEVBQUUsR0FBVztRQUNsRCxPQUFPLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQVEsR0FBRyxHQUFHLENBQUM7SUFDOUYsQ0FBQztJQUVELGVBQWU7SUFFUCxZQUFZLENBQUMsT0FBb0I7UUFDdkMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE9BQW9CO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUM3QixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sUUFBUSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBQy9ELE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7WUFDOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixPQUFPLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQzFEO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFvQyxFQUFFLFNBQWtDLEVBQUUsT0FBb0I7UUFDMUcsSUFBSSxHQUFHLEdBQTBCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLElBQUksU0FBUyxFQUFFO1lBQ2IsTUFBTSxFQUFFLG1CQUNOLEdBQUcsRUFBRSxNQUFNLEVBQ1gsU0FBUyxFQUFFLEdBQUcsRUFDZCxhQUFhLEVBQUUsR0FBRyxFQUNsQixZQUFZLEVBQUUsSUFBSSxFQUNsQixVQUFVLEVBQUUsS0FBSyxJQUNkLFNBQVMsQ0FDYixDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUTtpQkFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXBHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUUxRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNyRTtRQUVELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFFdEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hGLElBQUksVUFBVSxFQUFFO1lBQ2QsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3RFLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQztTQUN0QztRQUNELEdBQUcsQ0FBQyxTQUFtQixDQUFDLEdBQUcsU0FBbUIsQ0FBQztRQUMvQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhO0lBRWIsaUJBQWlCO0lBRVQsZUFBZSxDQUFDLE1BQXNCO1FBQzVDLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFTyxlQUFlLENBQUMsT0FBb0I7UUFDMUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTzthQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO2FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFPLENBQUM7WUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLEdBQUcsR0FBaUMsRUFBRSxDQUFDO1lBQzNDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDLEtBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsR0FBRyxtQ0FBUSxHQUFHLEdBQUssR0FBRyxDQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxhQUFhO0lBRWIsc0JBQXNCO0lBRWQsY0FBYyxDQUFDLE9BQW9CLEVBQUUsSUFBYyxFQUFFLE9BQVk7UUFDdkUsTUFBTSxHQUFHLEdBQWlDLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4SCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLGNBQWMsQ0FBQyxHQUFjLEVBQUUsS0FBYSxFQUFFLElBQWMsRUFBRSxPQUFZOztRQUNoRixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxtQkFDUixNQUFNLEVBQUUsQ0FBQyxFQUNULFFBQVEsRUFBRSxTQUFTLElBQ2hCLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFFLEdBQXFCLENBQUMsQ0FDM0YsQ0FBQztRQUNGLElBQUksR0FBRyxHQUF3QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakUsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjthQUFNO1lBQ0wsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLE9BQU87b0JBQ1YsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN4QixNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFDbEIsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3pHLE1BQU07Z0JBQ1IsS0FBSyxLQUFLO29CQUNSLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUM7b0JBQ2pFLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQztvQkFDL0UsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsTUFBTTtnQkFDUixLQUFLLEtBQUs7b0JBQ1IsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckQsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsTUFBTTtnQkFDUixLQUFLLEtBQUs7b0JBQ1IsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckQsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsTUFBTTthQUNUO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQzFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBRSxHQUFHLENBQUMsUUFBUSwwQ0FBRSxNQUFNLENBQVcsQ0FBQztTQUMvRTthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sT0FBTyxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ3pDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUM3QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVPLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7OzJGQXRaVSxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZO3VGQUFaLFlBQVk7Y0FEeEIsVUFBVTs7c0JBTU4sSUFBSTs7c0JBQ0osSUFBSTs7c0JBQ0osSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIb3N0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNURGF0YSxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUTXVsdGlTb3J0UmVzdWx0VHlwZSxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXFSZU5hbWVUeXBlLFxuICBTVFJlcXVlc3RPcHRpb25zLFxuICBTVFJlcyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTb3J0TWFwLFxuICBTVFN0YXRpc3RpY2FsLFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RTdGF0aXN0aWNhbFR5cGUsXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcbiAgcGk6IG51bWJlcjtcbiAgcHM6IG51bWJlcjtcbiAgcGFnaW5hdG9yOiBib29sZWFuO1xuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbDogbnVtYmVyO1xuICByZXE6IFNUUmVxO1xuICByZXM6IFNUUmVzO1xuICBwYWdlOiBTVFBhZ2U7XG4gIGNvbHVtbnM6IF9TVENvbHVtbltdO1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0O1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIOaYr+WQpumcgOimgeaYvuekuuWIhumhteWZqCAqL1xuICBwYWdlU2hvdzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaTogbnVtYmVyO1xuICAvKiog5pawIGBwc2DvvIzoi6Xov5Tlm54gYHVuZGVmaW5lZGAg6KGo56S655So5oi35Y+X5o6nICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKiDmlrAgYHRvdGFsYO+8jOiLpei/lOWbniBgdW5kZWZpbmVkYCDooajnpLrnlKjmiLflj5fmjqcgKi9cbiAgdG90YWw6IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0OiBTVERhdGFbXTtcbiAgLyoqIOe7n+iuoeaVsOaNriAqL1xuICBzdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNvcnRUaWNrID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluUGlwZTogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXJQaXBlOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5U3J2OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgcGFnaW5hdG9yLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgIGxldCByZXRQczogbnVtYmVyO1xuICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICBsZXQgcmV0UGk6IG51bWJlcjtcbiAgICBsZXQgcmF3RGF0YTogYW55O1xuICAgIGxldCBzaG93UGFnZSA9IHBhZ2Uuc2hvdztcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmF3RGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICBsZXQgcmV0OiBTVERhdGFbXTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXQgPSByZXN1bHQ7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJldC5sZW5ndGg7XG4gICAgICAgICAgICByZXRQcyA9IHJldFRvdGFsO1xuICAgICAgICAgICAgc2hvd1BhZ2UgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID0gcmVzLnJlTmFtZSEudG90YWwgJiYgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUhLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWVwQ29weShyZXQpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgZGF0YSQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgLy8gc29ydFxuICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICByYXdEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gZGVlcENvcHkocmVzdWx0KTtcbiAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyBhcyBfU1RDb2x1bW5bXSk7XG4gICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgIH0pLFxuICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyKVxuICAgICAgICAgICAgLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGMuZmlsdGVyITtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRGaWx0ZXJlZERhdGEoZmlsdGVyKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBmaWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT4gdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgIGlmIChwYWdpbmF0b3IgJiYgcGFnZS5mcm9udCkge1xuICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcHJlLXByb2Nlc3NcbiAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyEocmVzdWx0LCByYXdEYXRhKSkpO1xuICAgIH1cblxuICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHRoaXMub3B0aW1pemVEYXRhKHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWU6IG9wdGlvbnMucm93Q2xhc3NOYW1lIH0pKSk7XG5cbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXRMaXN0ID0gcmVzdWx0O1xuICAgICAgICBjb25zdCByZWFsVG90YWwgPSByZXRUb3RhbCB8fCB0b3RhbDtcbiAgICAgICAgY29uc3QgcmVhbFBzID0gcmV0UHMgfHwgcHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgcHM6IHJldFBzLFxuICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgIHN0YXRpc3RpY2FsOiB0aGlzLmdlblN0YXRpc3RpY2FsKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHJldExpc3QsIHJhd0RhdGEpLFxuICAgICAgICAgIHBhZ2VTaG93OiB0eXBlb2Ygc2hvd1BhZ2UgPT09ICd1bmRlZmluZWQnID8gcmVhbFRvdGFsID4gcmVhbFBzIDogc2hvd1BhZ2UsXG4gICAgICAgIH0gYXMgU1REYXRhU291cmNlUmVzdWx0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IFNURGF0YSwgY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyKTogeyB0ZXh0OiBzdHJpbmc7IF90ZXh0OiBTYWZlSHRtbDsgb3JnPzogYW55OyBjb2xvcj86IHN0cmluZyB9IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wsIGlkeCkgfHwgJyc7XG4gICAgICAgIGlmIChmb3JtYXRSZXMgJiYgfmZvcm1hdFJlcy5pbmRleE9mKCc8LycpKSB7XG4gICAgICAgICAgcmV0dXJuIHsgdGV4dDogZm9ybWF0UmVzLCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKSwgb3JnOiBmb3JtYXRSZXMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0ZXh0OiBmb3JtYXRSZXMsIF90ZXh0OiBmb3JtYXRSZXMsIG9yZzogZm9ybWF0UmVzIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcblxuICAgICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICAgIGxldCBjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICBjYXNlICdubyc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMuZ2V0Tm9JbmRleChpdGVtLCBjb2wsIGlkeCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5udW1iZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQodmFsdWUsIGNvbC5jdXJyZW5jeT8uZm9ybWF0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlID09PSBjb2wuZGVmYXVsdCA/IGNvbC5kZWZhdWx0IDogdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgIHRleHQgPSB0aGlzLnluUGlwZS50cmFuc2Zvcm0odmFsdWUgPT09IGNvbC55biEudHJ1dGgsIGNvbC55biEueWVzISwgY29sLnluIS5ubyEsIGNvbC55biEubW9kZSEsIGZhbHNlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgdGV4dCA9IGNvbC5lbnVtIVt2YWx1ZV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGNhc2UgJ2JhZGdlJzpcbiAgICAgICAgICBjb25zdCBkYXRhID0gY29sLnR5cGUgPT09ICd0YWcnID8gY29sLnRhZyA6IGNvbC5iYWRnZTtcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhW3RleHRdKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhSXRlbSA9IGRhdGFbdGV4dF07XG4gICAgICAgICAgICB0ZXh0ID0gZGF0YUl0ZW0udGV4dDtcbiAgICAgICAgICAgIGNvbG9yID0gZGF0YUl0ZW0uY29sb3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGV4dCA9PSBudWxsKSB0ZXh0ID0gJyc7XG4gICAgICByZXR1cm4geyB0ZXh0LCBfdGV4dDogdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dCksIG9yZzogdmFsdWUsIGNvbG9yIH07XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBgSU5WQUxJRCBEQVRBYDtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgZGF0YWAsIGl0ZW0sIGNvbCwgZXgpO1xuICAgICAgcmV0dXJuIHsgdGV4dCwgX3RleHQ6IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQpLCBvcmc6IHRleHQgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEJ5SHR0cCh1cmw6IHN0cmluZywgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGFnaW5hdG9yLCBwaSwgcHMsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBtZXRob2QgPSAocmVxLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgY29uc3QgcmVOYW1lID0gcmVxLnJlTmFtZSBhcyBTVFJlcVJlTmFtZVR5cGU7XG4gICAgaWYgKHBhZ2luYXRvcikge1xuICAgICAgaWYgKHJlcS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgIFtyZU5hbWUucGkgYXMgc3RyaW5nXTogcGFnZS56ZXJvSW5kZXhlZCA/IHBpIC0gMSA6IHBpLFxuICAgICAgICAgIFtyZU5hbWUucHMgYXMgc3RyaW5nXTogcHMsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgW3JlTmFtZS5za2lwIGFzIHN0cmluZ106IChwaSAtIDEpICogcHMsXG4gICAgICAgICAgW3JlTmFtZS5saW1pdCBhcyBzdHJpbmddOiBwcyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFyYW1zID0ge1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgLi4ucmVxLnBhcmFtcyxcbiAgICAgIC4uLnRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgLi4udGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgfTtcblxuICAgIGxldCByZXFPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiB7IC4uLnJlcS5ib2R5LCAuLi5wYXJhbXMgfSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlcS5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXFPcHRpb25zID0gcmVxLnByb2Nlc3MocmVxT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghKHJlcU9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgIHJlcU9wdGlvbnMucGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiByZXFPcHRpb25zLnBhcmFtcyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCByZXFPcHRpb25zKTtcbiAgfVxuXG4gIG9wdGltaXplRGF0YShvcHRpb25zOiB7IGNvbHVtbnM6IF9TVENvbHVtbltdOyByZXN1bHQ6IFNURGF0YVtdOyByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB9KTogU1REYXRhW10ge1xuICAgIGNvbnN0IHsgcmVzdWx0LCBjb2x1bW5zLCByb3dDbGFzc05hbWUgfSA9IG9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmVzdWx0W2ldLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSkpO1xuICAgICAgaWYgKHJvd0NsYXNzTmFtZSkge1xuICAgICAgICByZXN1bHRbaV0uX3Jvd0NsYXNzTmFtZSA9IHJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Tm9JbmRleChpdGVtOiBTVERhdGEsIGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb2wubm9JbmRleCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5ub0luZGV4KGl0ZW0sIGNvbCwgaWR4KSA6IGNvbC5ub0luZGV4ISArIGlkeDtcbiAgfVxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IF9TVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0uX3NvcnQgJiYgaXRlbS5fc29ydC5lbmFibGVkICYmIGl0ZW0uX3NvcnQuZGVmYXVsdCkubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6ICgoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IG51bWJlcikgfCB2b2lkIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc29ydEl0ZW0gPSBzb3J0TGlzdFswXTtcbiAgICBpZiAoc29ydEl0ZW0uY29tcGFyZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvcnRJdGVtLmNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogU1REYXRhLCBiOiBTVERhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRJdGVtLmNvbXBhcmUhKGEsIGIpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc29ydEl0ZW0uZGVmYXVsdCA9PT0gJ2Rlc2NlbmQnID8gLXJlc3VsdCA6IHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBnZXQgbmV4dFNvcnRUaWNrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICsrdGhpcy5zb3J0VGljaztcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgdW5kZWZpbmVkLCBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgdW5kZWZpbmVkLCBjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IFNUTXVsdGlTb3J0UmVzdWx0VHlwZSB7XG4gICAgbGV0IHJldDogU1RNdWx0aVNvcnRSZXN1bHRUeXBlID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIGNvbnN0IG1zOiBTVE11bHRpU29ydCA9IHtcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICAgIGtlZXBFbXB0eUtleTogdHJ1ZSxcbiAgICAgICAgYXJyYXlQYXJhbTogZmFsc2UsXG4gICAgICAgIC4uLm11bHRpU29ydCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNvcnRNYXAgPSBzb3J0TGlzdFxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS50aWNrIC0gYi50aWNrKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5rZXkhICsgbXMubmFtZVNlcGFyYXRvciArICgoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdCFdIHx8IGl0ZW0uZGVmYXVsdCkpO1xuXG4gICAgICByZXQgPSB7IFttcy5rZXkhXTogbXMuYXJyYXlQYXJhbSA/IHNvcnRNYXAgOiBzb3J0TWFwLmpvaW4obXMuc2VwYXJhdG9yKSB9O1xuXG4gICAgICByZXR1cm4gc29ydE1hcC5sZW5ndGggPT09IDAgJiYgbXMua2VlcEVtcHR5S2V5ID09PSBmYWxzZSA/IHt9IDogcmV0O1xuICAgIH1cblxuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgbGV0IHNvcnRGaWxlZCA9IG1hcERhdGEua2V5O1xuICAgIGxldCBzb3J0VmFsdWUgPSAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHQhXSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgaWYgKHNpbmdsZVNvcnQpIHtcbiAgICAgIHNvcnRWYWx1ZSA9IHNvcnRGaWxlZCArIChzaW5nbGVTb3J0Lm5hbWVTZXBhcmF0b3IgfHwgJy4nKSArIHNvcnRWYWx1ZTtcbiAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICB9XG4gICAgcmV0W3NvcnRGaWxlZCBhcyBzdHJpbmddID0gc29ydFZhbHVlIGFzIHN0cmluZztcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRGaWx0ZXJlZERhdGEoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IFNUQ29sdW1uRmlsdGVyTWVudVtdIHtcbiAgICByZXR1cm4gZmlsdGVyLnR5cGUgPT09ICdkZWZhdWx0JyA/IGZpbHRlci5tZW51cyEuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKSA6IGZpbHRlci5tZW51cyEuc2xpY2UoMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGNvbC5maWx0ZXIhO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEZpbHRlcmVkRGF0YShmaWx0ZXIpO1xuICAgICAgICBsZXQgb2JqOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge307XG4gICAgICAgIGlmIChmaWx0ZXIucmVOYW1lKSB7XG4gICAgICAgICAgb2JqID0gZmlsdGVyLnJlTmFtZSEoZmlsdGVyLm1lbnVzISwgY29sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmpbZmlsdGVyLmtleSFdID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSB7IC4uLnJldCwgLi4ub2JqIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3RhdGlzdGljYWxcblxuICBwcml2YXRlIGdlblN0YXRpc3RpY2FsKGNvbHVtbnM6IF9TVENvbHVtbltdLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICAgIGNvbnN0IHJlczogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHt9O1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgcmVzW2NvbC5rZXkgfHwgY29sLmluZGV4S2V5IHx8IGluZGV4XSA9IGNvbC5zdGF0aXN0aWNhbCA9PSBudWxsID8ge30gOiB0aGlzLmdldFN0YXRpc3RpY2FsKGNvbCwgaW5kZXgsIGxpc3QsIHJhd0RhdGEpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXRpc3RpY2FsKGNvbDogX1NUQ29sdW1uLCBpbmRleDogbnVtYmVyLCBsaXN0OiBTVERhdGFbXSwgcmF3RGF0YTogYW55KTogU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gICAgY29uc3QgdmFsID0gY29sLnN0YXRpc3RpY2FsO1xuICAgIGNvbnN0IGl0ZW06IFNUU3RhdGlzdGljYWwgPSB7XG4gICAgICBkaWdpdHM6IDIsXG4gICAgICBjdXJyZW5jeTogdW5kZWZpbmVkLFxuICAgICAgLi4uKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8geyB0eXBlOiB2YWwgYXMgU1RTdGF0aXN0aWNhbFR5cGUgfSA6ICh2YWwgYXMgU1RTdGF0aXN0aWNhbCkpLFxuICAgIH07XG4gICAgbGV0IHJlczogU1RTdGF0aXN0aWNhbFJlc3VsdCA9IHsgdmFsdWU6IDAgfTtcbiAgICBsZXQgY3VycmVuY3kgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGl0ZW0udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzID0gaXRlbS50eXBlKHRoaXMuZ2V0VmFsdWVzKGluZGV4LCBsaXN0KSwgY29sLCBsaXN0LCByYXdEYXRhKTtcbiAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgIHJlcy52YWx1ZSA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXN0aW5jdENvdW50JzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VtJzpcbiAgICAgICAgICByZXMudmFsdWUgPSB0aGlzLnRvRml4ZWQodGhpcy5nZXRTdW0oaW5kZXgsIGxpc3QpLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXZlcmFnZSc6XG4gICAgICAgICAgcmVzLnZhbHVlID0gdGhpcy50b0ZpeGVkKHRoaXMuZ2V0U3VtKGluZGV4LCBsaXN0KSAvIGxpc3QubGVuZ3RoLCBpdGVtLmRpZ2l0cyEpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1heCguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICByZXMudmFsdWUgPSBNYXRoLm1pbiguLi50aGlzLmdldFZhbHVlcyhpbmRleCwgbGlzdCkpO1xuICAgICAgICAgIGN1cnJlbmN5ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGl0ZW0uY3VycmVuY3kgPT09IHRydWUgfHwgKGl0ZW0uY3VycmVuY3kgPT0gbnVsbCAmJiBjdXJyZW5jeSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJlcy50ZXh0ID0gdGhpcy5jdXJyZW5jeVNydi5mb3JtYXQocmVzLnZhbHVlLCBjb2wuY3VycmVuY3k/LmZvcm1hdCkgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMudGV4dCA9IFN0cmluZyhyZXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0ZpeGVkKHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTmFOKHZhbCkgfHwgIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChkaWdpdHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVzKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcChpID0+IGkuX3ZhbHVlc1tpbmRleF0ub3JnKS5tYXAoaSA9PiAoaSA9PT0gJycgfHwgaSA9PSBudWxsID8gMCA6IGkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtKGluZGV4OiBudW1iZXIsIGxpc3Q6IFNURGF0YVtdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZXMoaW5kZXgsIGxpc3QpLnJlZHVjZSgocCwgaSkgPT4gKHAgKz0gcGFyc2VGbG9hdChTdHJpbmcoaSkpKSwgMCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=