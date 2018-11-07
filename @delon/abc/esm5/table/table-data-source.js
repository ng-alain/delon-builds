/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Host } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { deepGet } from '@delon/util';
import { CNCurrencyPipe, DatePipe, YNPipe, _HttpClient } from '@delon/theme';
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
    STDataSourceOptions.prototype.multiSort;
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
    function STDataSource(http, currenty, date, yn, number, dom) {
        this.http = http;
        this.currenty = currenty;
        this.date = date;
        this.yn = yn;
        this.number = number;
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
            var retList;
            /** @type {?} */
            var retPi;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = _this.getByHttp(data, options).pipe(map(function (result) {
                    // list
                    /** @type {?} */
                    var ret = deepGet(result, (/** @type {?} */ (res.reName.list)), []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    // total
                    /** @type {?} */
                    var resultTotal = res.reName.total &&
                        deepGet(result, (/** @type {?} */ (res.reName.total)), null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    return (/** @type {?} */ (ret));
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
                    columns.filter(function (w) { return w.filter; }).forEach(function (c) {
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
                        result = result.filter(function (record) {
                            return values.some(function (v) { return onFilter(v, record); });
                        });
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
                };
                for (var i = 0, len = result.length; i < len; i++) {
                    _loop_1(i, len);
                }
                return result;
            }));
            data$.forEach(function (result) { return (retList = result); }).then(function () {
                resolvePromise({
                    pi: retPi,
                    total: retTotal,
                    list: retList,
                    pageShow: typeof page.show === 'undefined'
                        ? (retTotal || total) > ps
                        : page.show,
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
            var formatRes = (/** @type {?} */ (col.format(item, col)));
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
                ret = this.number.transform(value, col.numberDigits);
                break;
            case 'currency':
                ret = this.currenty.transform(value);
                break;
            case 'date':
                ret = this.date.transform(value, col.dateFormat);
                break;
            case 'yn':
                ret = this.yn.transform(value === col.yn.truth, col.yn.yes, col.yn.no);
                break;
        }
        return ret;
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
        var _a;
        var req = options.req, page = options.page, pi = options.pi, ps = options.ps, multiSort = options.multiSort, columns = options.columns;
        /** @type {?} */
        var method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        var params = Object.assign((_a = {},
            _a[req.reName.pi] = page.zeroIndexed ? pi - 1 : pi,
            _a[req.reName.ps] = ps,
            _a), req.params, this.getReqSortMap(multiSort, columns), this.getReqFilterMap(columns));
        /** @type {?} */
        var reqOptions = {
            params: params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign({}, req.body, params),
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
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqSortMap = /**
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    function (multiSort, columns) {
        var _a;
        /** @type {?} */
        var ret = {};
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (!multiSort && sortList.length === 0)
            return ret;
        if (multiSort) {
            sortList.forEach(function (item) {
                ret[item.key] = (item.reName || {})[item.default] || item.default;
            });
            // 合并处理
            ret = (_a = {},
                _a[multiSort.key] = Object.keys(ret)
                    .map(function (key) { return key + multiSort.nameSeparator + ret[key]; })
                    .join(multiSort.separator),
                _a);
        }
        else {
            /** @type {?} */
            var mapData = sortList[0];
            ret[mapData.key] =
                (sortList[0].reName || {})[mapData.default] || mapData.default;
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
        columns.filter(function (w) { return w.filter && w.filter.default === true; }).forEach(function (col) {
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
            ret = Object.assign(ret, obj);
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
    STDataSource.prototype.currenty;
    /** @type {?} */
    STDataSource.prototype.date;
    /** @type {?} */
    STDataSource.prototype.yn;
    /** @type {?} */
    STDataSource.prototype.number;
    /** @type {?} */
    STDataSource.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3RhYmxlLyIsInNvdXJjZXMiOlsidGFibGUtZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVk3RSx5Q0FVQzs7O0lBVEMsaUNBQVk7O0lBQ1osaUNBQVk7O0lBQ1osbUNBQWdEOztJQUNoRCxvQ0FBZTs7SUFDZixrQ0FBWTs7SUFDWixrQ0FBWTs7SUFDWixtQ0FBYzs7SUFDZCxzQ0FBcUI7O0lBQ3JCLHdDQUF3Qjs7Ozs7QUFHMUIsd0NBU0M7Ozs7OztJQVBDLHNDQUFtQjs7Ozs7SUFFbkIsZ0NBQVk7Ozs7O0lBRVosbUNBQWU7Ozs7O0lBRWYsa0NBQWdCOztBQUdsQjtJQUVFLHNCQUNVLElBQWlCLEVBQ1QsUUFBd0IsRUFDeEIsSUFBYyxFQUNkLEVBQVUsRUFDVixNQUFtQixFQUMzQixHQUFpQjtRQUxqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ1QsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFh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Z0MsV0FBVztnQkFBN0MsY0FBYyx1QkF1Q2xCLElBQUk7Z0JBdkNnQixRQUFRLHVCQXdDNUIsSUFBSTtnQkF4QzBCLE1BQU0sdUJBeUNwQyxJQUFJO2dCQS9DQSxXQUFXLHVCQWdEZixJQUFJO2dCQS9DQSxZQUFZOztJQXVTckIsbUJBQUM7Q0FBQSxBQS9QRCxJQStQQztTQTlQWSxZQUFZOzs7SUFFckIsNEJBQXlCOztJQUN6QixnQ0FBd0M7O0lBQ3hDLDRCQUE4Qjs7SUFDOUIsMEJBQTBCOztJQUMxQiw4QkFBbUM7O0lBQ25DLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7XG4gIFNURGF0YSxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUQ29sdW1uLFxuICBTVE11bHRpU29ydCxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUU29ydE1hcCB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlT3B0aW9ucyB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHRvdGFsPzogbnVtYmVyO1xuICByZXE/OiBTVFJlcTtcbiAgcmVzPzogU1RSZXM7XG4gIHBhZ2U/OiBTVFBhZ2U7XG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xuICBtdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VSZXN1bHQge1xuICAvKiog5piv5ZCm6ZyA6KaB5pi+56S65YiG6aG15ZmoICovXG4gIHBhZ2VTaG93PzogYm9vbGVhbjtcbiAgLyoqIOaWsCBgcGlg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqIOaWsCBgdG90YWxg77yM6Iul6L+U5ZueIGB1bmRlZmluZWRgIOihqOekuueUqOaIt+WPl+aOpyAqL1xuICB0b3RhbD86IG51bWJlcjtcbiAgLyoqIOaVsOaNriAqL1xuICBsaXN0PzogU1REYXRhW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBjdXJyZW50eTogQ05DdXJyZW5jeVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIGRhdGU6IERhdGVQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5bjogWU5QaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBudW1iZXI6IERlY2ltYWxQaXBlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgIGxldCByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9XG4gICAgICAgICAgICAgIHJlcy5yZU5hbWUudG90YWwgJiZcbiAgICAgICAgICAgICAgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIHJldHVybiA8U1REYXRhW10+cmV0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgICAgZGF0YSQgPSBkYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgICAvLyBzb3J0XG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IHJlc3VsdC5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlcikuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBjLmZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT5cbiAgICAgICAgICAgICAgICB2YWx1ZXMuc29tZSh2ID0+IG9uRmlsdGVyKHYsIHJlY29yZCkpLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIHBhZ2luZ1xuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UuZnJvbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XG4gICAgICAgICAgICAgIHJldFBpID0gTWF0aC5tYXgoMSwgcGkgPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiBwaSk7XG4gICAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoKHJldFBpIC0gMSkgKiBwcywgcmV0UGkgKiBwcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByZS1wcm9jZXNzXG4gICAgICBpZiAodHlwZW9mIHJlcy5wcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShtYXAocmVzdWx0ID0+IHJlcy5wcm9jZXNzKHJlc3VsdCkpKTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGEgYWNjZWxlcmF0b3JcbiAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0W2ldLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KHJlc3VsdFtpXSwgYywgaSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIGRhdGEkLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgcGFnZVNob3c6XG4gICAgICAgICAgICB0eXBlb2YgcGFnZS5zaG93ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IChyZXRUb3RhbCB8fCB0b3RhbCkgPiBwc1xuICAgICAgICAgICAgICA6IHBhZ2Uuc2hvdyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wpIGFzIHN0cmluZztcbiAgICAgIGlmICh+Zm9ybWF0UmVzLmluZGV4T2YoJzwnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXRSZXM7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgcmV0ID0gY29sLm5vSW5kZXggKyBpZHg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5LnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHJldCA9IHRoaXMueW4udHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBbcmVxLnJlTmFtZS5waV06IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgW3JlcS5yZU5hbWUucHNdOiBwcyxcbiAgICAgIH0sXG4gICAgICByZXEucGFyYW1zLFxuICAgICAgdGhpcy5nZXRSZXFTb3J0TWFwKG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICB0aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKSxcbiAgICApO1xuICAgIGxldCByZXFPcHRpb25zOiBhbnkgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24oe30sIHJlcS5ib2R5LCBwYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xuICAgICAgfSk7XG4gICAgICAvLyDlkIjlubblpITnkIZcbiAgICAgIHJldCA9IHtcbiAgICAgICAgW211bHRpU29ydC5rZXldOiBPYmplY3Qua2V5cyhyZXQpXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXVsdGlTb3J0Lm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcbiAgICAgICAgICAuam9pbihtdWx0aVNvcnQuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIHJldFttYXBEYXRhLmtleV0gPVxuICAgICAgICAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlci5tZW51cy5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpO1xuICAgICAgbGV0IG9iajogT2JqZWN0ID0ge307XG4gICAgICBpZiAoY29sLmZpbHRlci5yZU5hbWUpIHtcbiAgICAgICAgb2JqID0gY29sLmZpbHRlci5yZU5hbWUoY29sLmZpbHRlci5tZW51cywgY29sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjb2wuZmlsdGVyLmtleV0gPSB2YWx1ZXMubWFwKGkgPT4gaS52YWx1ZSkuam9pbignLCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gT2JqZWN0LmFzc2lnbihyZXQsIG9iaik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxufVxuIl19