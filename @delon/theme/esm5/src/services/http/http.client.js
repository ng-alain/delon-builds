/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AlainThemeConfig } from '../../theme.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../theme.config";
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
var _HttpClient = /** @class */ (function () {
    function _HttpClient(http, cog) {
        this.http = http;
        this._loading = false;
        this.cog = __assign({ nullValueHandling: 'include', dateValueHandling: 'timestamp' }, (/** @type {?} */ (cog)).http);
    }
    Object.defineProperty(_HttpClient.prototype, "loading", {
        /** 是否正在加载中 */
        get: /**
         * 是否正在加载中
         * @return {?}
         */
        function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} params
     * @return {?}
     */
    _HttpClient.prototype.parseParams = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var newParams = {};
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var _data = params[key];
            // 忽略空值
            if (_this.cog.nullValueHandling === 'ignore' && _data == null)
                return;
            // 将时间转化为：时间戳 (秒)
            if (_this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
                _data = _data.valueOf();
            }
            newParams[key] = _data;
        }));
        return new HttpParams({ fromObject: newParams });
    };
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    _HttpClient.prototype.appliedUrl = /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    function (url, params) {
        if (!params)
            return url;
        url += ~url.indexOf('?') ? '' : '?';
        /** @type {?} */
        var arr = [];
        // tslint:disable-next-line: forin
        for (var key in params) {
            arr.push(key + "=" + params[key]);
        }
        return url + arr.join('&');
    };
    /**
     * @return {?}
     */
    _HttpClient.prototype.begin = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        function () { return (_this._loading = true); }));
    };
    /**
     * @return {?}
     */
    _HttpClient.prototype.end = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        function () { return (_this._loading = false); }));
    };
    /**
     * GET 请求
     */
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.get = /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, __assign({ params: params }, options));
    };
    /**
     * POST 请求
     */
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.post = /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, __assign({ body: body,
            params: params }, options));
    };
    /**
     * DELETE 请求
     */
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.delete = /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, __assign({ params: params }, options));
    };
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    _HttpClient.prototype.jsonp = 
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    function (url, params, callbackParam) {
        var _this = this;
        if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
        this.begin();
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        function () { return _this.end(); })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.end();
            return throwError(res);
        })));
    };
    /**
     * PATCH 请求
     */
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.patch = /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, __assign({ body: body,
            params: params }, options));
    };
    /**
     * PUT 请求
     */
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.put = /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, __assign({ body: body,
            params: params }, options));
    };
    /**
     * 发送传统表单请求（即：`application/x-www-form-urlencoded`）
     */
    /**
     * 发送传统表单请求（即：`application/x-www-form-urlencoded`）
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.form = /**
     * 发送传统表单请求（即：`application/x-www-form-urlencoded`）
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, __assign(__assign({ body: body,
            params: params }, options), { headers: {
                'content-type': "application/x-www-form-urlencoded",
            } }));
    };
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.request = /**
     * @param {?} method
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (method, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.begin();
        if (options.params)
            options.params = this.parseParams(options.params);
        return of(null).pipe(tap((/**
         * @return {?}
         */
        function () { return _this.begin(); })), switchMap((/**
         * @return {?}
         */
        function () { return _this.http.request(method, url, options); })), tap((/**
         * @return {?}
         */
        function () { return _this.end(); })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.end();
            return throwError(res);
        })));
    };
    _HttpClient.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    _HttpClient.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AlainThemeConfig }
    ]; };
    /** @nocollapse */ _HttpClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
    return _HttpClient;
}());
export { _HttpClient };
if (false) {
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype._loading;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUEwQixVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7OztBQVl0RDtJQUlFLHFCQUFvQixJQUFnQixFQUFFLEdBQXFCO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFRNUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVB2QixJQUFJLENBQUMsR0FBRyxjQUNOLGlCQUFpQixFQUFFLFNBQVMsRUFDNUIsaUJBQWlCLEVBQUUsV0FBVyxJQUMzQixtQkFBQSxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQ2IsQ0FBQztJQUNKLENBQUM7SUFLRCxzQkFBSSxnQ0FBTztRQURYLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE1BQWlCO1FBQTdCLGlCQWFDOztZQVpPLFNBQVMsR0FBYyxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLE9BQU87WUFDUCxJQUFJLEtBQUksQ0FBQyxH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cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbGFpblRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUuY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL2h0dHAuY29uZmlnJztcblxuZXhwb3J0IHR5cGUgX0h0dHBIZWFkZXJzID0gSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG5leHBvcnQgdHlwZSBIdHRwT2JzZXJ2ZSA9ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcblxuLyoqXG4gKiDlsIHoo4VIdHRwQ2xpZW5077yM5Li76KaB6Kej5Yaz77yaXG4gKiArIOS8mOWMlkh0dHBDbGllbnTlnKjlj4LmlbDkuIrkvr/liKnmgKdcbiAqICsg57uf5LiA5a6e546wIGxvYWRpbmdcbiAqICsg57uf5LiA5aSE55CG5pe26Ze05qC85byP6Zeu6aKYXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcbiAgcHJpdmF0ZSBjb2c6IEh0dHBDbGllbnRDb25maWc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSB7XG4gICAgICBudWxsVmFsdWVIYW5kbGluZzogJ2luY2x1ZGUnLFxuICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxuICAgICAgLi4uY29nIS5odHRwLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgLyoqIOaYr+WQpuato+WcqOWKoOi9veS4rSAqL1xuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIHBhcnNlUGFyYW1zKHBhcmFtczogTnpTYWZlQW55KTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgbmV3UGFyYW1zOiBOelNhZmVBbnkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xuICAgICAgLy8g5b+955Wl56m65YC8XG4gICAgICBpZiAodGhpcy5jb2cubnVsbFZhbHVlSGFuZGxpbmcgPT09ICdpZ25vcmUnICYmIF9kYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgIC8vIOWwhuaXtumXtOi9rOWMluS4uu+8muaXtumXtOaIsyAo56eSKVxuICAgICAgaWYgKHRoaXMuY29nLmRhdGVWYWx1ZUhhbmRsaW5nID09PSAndGltZXN0YW1wJyAmJiBfZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgX2RhdGEgPSBfZGF0YS52YWx1ZU9mKCk7XG4gICAgICB9XG4gICAgICBuZXdQYXJhbXNba2V5XSA9IF9kYXRhO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcbiAgfVxuXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IE56U2FmZUFueSkge1xuICAgIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBhcnIucHVzaChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xuICB9XG5cbiAgYmVnaW4oKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBIdHRwRXZlbnQ8VD5gIOexu+Wei1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8YW55PmAg57G75Z6LXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuXG4gIC8qKlxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxUPmAg57G75Z6LXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgLyoqXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKrms5vnsbvlnotcbiAgICovXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlOiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIEdFVCDor7fmsYJcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwb3N0XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEh0dHBFdmVudDxUPmAg57G75Z6LXG4gICAqL1xuICBwb3N0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj47XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXG4gICAqL1xuICBwb3N0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVCDor7fmsYJcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIHtcbiAgICAgIGJvZHksXG4gICAgICBwYXJhbXMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZGVsZXRlXG5cbiAgLyoqXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XG5cbiAgLyoqXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKrms5vnsbvlnotcbiAgICovXG4gIGRlbGV0ZTxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogREVMRVRFIOivt+axglxuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwge1xuICAgICAgcGFyYW1zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGpzb25wXG5cbiAgLyoqXG4gICAqIGBqc29ucGAg6K+35rGCXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5Y+C5pWwXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNL5YC877yM6buY6K6k77yaSlNPTlBfQ0FMTEJBQ0tcbiAgICovXG4gIGpzb25wKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGNhbGxiYWNrUGFyYW06IHN0cmluZyA9ICdKU09OUF9DQUxMQkFDSycpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMuYXBwbGllZFVybCh1cmwsIHBhcmFtcyksIGNhbGxiYWNrUGFyYW0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5lbmQoKSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcGF0Y2hcblxuICAvKipcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQQVRDSO+8mui/lOWbnuS4gOS4qiBgSHR0cFJlc3BvbnNlPEpTT04+YCDnsbvlnotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8e30+PjtcblxuICAvKipcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcbiAgICovXG4gIHBhdGNoPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUEFUQ0gg6K+35rGCXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUEFUQ0gnLCB1cmwsIHtcbiAgICAgIGJvZHksXG4gICAgICBwYXJhbXMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHV0XG5cbiAgLyoqXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTx7fT4+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgcHV0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUFVUIOivt+axglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQVVQnLCB1cmwsIHtcbiAgICAgIGJvZHksXG4gICAgICBwYXJhbXMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZm9ybVxuXG4gIC8qKlxuICAgKiDlj5HpgIHkvKDnu5/ooajljZXor7fmsYLvvIjljbPvvJpgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkYO+8ie+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIGZvcm0oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICog5Y+R6YCB5Lyg57uf6KGo5Y2V6K+35rGC77yI5Y2z77yaYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGDvvInvvJrov5Tlm57kuIDkuKogYEh0dHBFdmVudDxUPmAg57G75Z6LXG4gICAqL1xuICBmb3JtPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XG5cbiAgLyoqXG4gICAqIOWPkemAgeS8oOe7n+ihqOWNleivt+axgu+8iOWNs++8mmBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRg77yJ77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xuICAgKi9cbiAgZm9ybShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuXG4gIC8qKlxuICAgKiDlj5HpgIHkvKDnu5/ooajljZXor7fmsYLvvIjljbPvvJpgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkYO+8ie+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIGZvcm0oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiDlj5HpgIHkvKDnu5/ooajljZXor7fmsYLvvIjljbPvvJpgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkYO+8ie+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXG4gICAqL1xuICBmb3JtPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICog5Y+R6YCB5Lyg57uf6KGo5Y2V6K+35rGC77yI5Y2z77yaYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGDvvIlcbiAgICovXG4gIGZvcm0oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIHtcbiAgICAgIGJvZHksXG4gICAgICBwYXJhbXMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVxdWVzdFxuXG4gIC8qKiDov5Tlm57kuIDkuKogYGFycmF5YnVmZmVyYCDnsbvlnosgKi9cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIHBhcmFtcz86IGFueTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8QmxvYj47XG5cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcbiAgICAgIHBhcmFtcz86IGFueTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXJyYXlCdWZmZXI+PjtcblxuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxzdHJpbmc+PjtcblxuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xuXG4gIHJlcXVlc3Q8Uj4oXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Uj4+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBcnJheUJ1ZmZlcj4+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJsb2I+PjtcblxuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcblxuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICByZXF1ZXN0PFI+KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Uj4+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuICApOiBPYnNlcnZhYmxlPE9iamVjdD47XG5cbiAgcmVxdWVzdDxSPihcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFI+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xuICAgICAgcGFyYW1zPzogYW55O1xuICAgICAgb2JzZXJ2ZT86IEh0dHBPYnNlcnZlO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XG4gICAgICBwYXJhbXM/OiBhbnk7XG4gICAgICBvYnNlcnZlPzogSHR0cE9ic2VydmU7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5iZWdpbigpO1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcbiAgICByZXR1cm4gb2YobnVsbCkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmJlZ2luKCkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSksXG4gICAgICB0YXAoKCkgPT4gdGhpcy5lbmQoKSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19