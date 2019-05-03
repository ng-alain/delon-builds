/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
        this.cog = tslib_1.__assign({ nullValueHandling: 'include', dateValueHandling: 'timestamp' }, (/** @type {?} */ (cog)).http);
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
        setTimeout((/**
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
        setTimeout((/**
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
        return this.request('GET', url, tslib_1.__assign({ params: params }, options));
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
        return this.request('POST', url, tslib_1.__assign({ body: body,
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
        return this.request('DELETE', url, tslib_1.__assign({ params: params }, options));
    };
    // #endregion
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    // #endregion
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
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.end();
        })), catchError((/**
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
        return this.request('PATCH', url, tslib_1.__assign({ body: body,
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
        return this.request('PUT', url, tslib_1.__assign({ body: body,
            params: params }, options));
    };
    // #endregion
    /**
     * `request` 请求
     *
     * @param method 请求方法类型
     * @param url URL地址
     * @param options 参数
     */
    // #endregion
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    _HttpClient.prototype.request = 
    // #endregion
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    function (method, url, options) {
        var _this = this;
        this.begin();
        if (options) {
            if (options.params)
                options.params = this.parseParams(options.params);
        }
        return this.http.request(method, url, options).pipe(tap((/**
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
    /** @nocollapse */ _HttpClient.ngInjectableDef = i0.defineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.inject(i1.HttpClient), i0.inject(i2.AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0FBU3REO0lBSUUscUJBQW9CLElBQWdCLEVBQUUsR0FBcUI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVE1QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUHZCLElBQUksQ0FBQyxHQUFHLHNCQUNOLGlCQUFpQixFQUFFLFNBQVMsRUFDNUIsaUJBQWlCLEVBQUUsV0FBVyxJQUMzQixtQkFBQSxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQ2IsQ0FBQztJQUNKLENBQUM7SUFLRCxzQkFBSSxnQ0FBTztRQURYLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE1BQVU7UUFBdEIsaUJBYUM7O1lBWk8sU0FBUyxHQUFHLEVBQUU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHOztnQkFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDdkIsT0FBTztZQUNQLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxR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QUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFWLENBQVUsRUFBQyxFQUNyQixVQUFVOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1gsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXJoQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFiekIsVUFBVTtnQkFJVixnQkFBZ0I7OztzQkFKekI7Q0FtaUJDLEFBdGhCRCxJQXNoQkM7U0FwaEJZLFdBQVc7Ozs7OztJQUN0QiwwQkFBOEI7Ozs7O0lBUzlCLCtCQUF5Qjs7Ozs7SUFSYiwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XG5cbi8qKlxuICog5bCB6KOFSHR0cENsaWVudO+8jOS4u+imgeino+WGs++8mlxuICogKyDkvJjljJZIdHRwQ2xpZW505Zyo5Y+C5pWw5LiK5L6/5Yip5oCnXG4gKiArIOe7n+S4gOWunueOsCBsb2FkaW5nXG4gKiArIOe7n+S4gOWkhOeQhuaXtumXtOagvOW8j+mXrumimFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfSHR0cENsaWVudCB7XG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0ge1xuICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcbiAgICAgIGRhdGVWYWx1ZUhhbmRsaW5nOiAndGltZXN0YW1wJyxcbiAgICAgIC4uLmNvZyEuaHR0cCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiDmmK/lkKbmraPlnKjliqDovb3kuK0gKi9cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IHt9KTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgbmV3UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgX2RhdGEgPSBwYXJhbXNba2V5XTtcbiAgICAgIC8vIOW/veeVpeepuuWAvFxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAvLyDlsIbml7bpl7TovazljJbkuLrvvJrml7bpl7TmiLMgKOenkilcbiAgICAgIGlmICh0aGlzLmNvZy5kYXRlVmFsdWVIYW5kbGluZyA9PT0gJ3RpbWVzdGFtcCcgJiYgX2RhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xuICAgICAgfVxuICAgICAgbmV3UGFyYW1zW2tleV0gPSBfZGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBuZXdQYXJhbXMgfSk7XG4gIH1cblxuICBhcHBsaWVkVXJsKHVybDogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIGFyci5qb2luKCcmJyk7XG4gIH1cblxuICBiZWdpbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gdHJ1ZSkpO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XG5cbiAgLyoqXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgLyoqXG4gICAqIEdFVCDor7fmsYJcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHVybCwge1xuICAgICAgcGFyYW1zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHBvc3RcblxuICAvKipcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8e30+PjtcblxuICAvKipcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVCDor7fmsYJcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUE9TVCcsIHVybCwge1xuICAgICAgYm9keSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBkZWxldGVcblxuICAvKipcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XG5cbiAgLyoqXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIERFTEVURSDor7fmsYJcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwge1xuICAgICAgcGFyYW1zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogYGpzb25wYCDor7fmsYJcbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkzlnLDlnYBcbiAgICogQHBhcmFtIHBhcmFtcyDor7fmsYLlj4LmlbBcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vlgLzvvIzpu5jorqTvvJpKU09OUF9DQUxMQkFDS1xuICAgKi9cbiAganNvbnAodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSwgY2FsbGJhY2tQYXJhbTogc3RyaW5nID0gJ0pTT05QX0NBTExCQUNLJyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLmFwcGxpZWRVcmwodXJsLCBwYXJhbXMpLCBjYWxsYmFja1BhcmFtKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGF0Y2hcblxuICAvKipcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XG5cbiAgLyoqXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcbiAgICovXG4gIHBhdGNoPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQQVRDSCDor7fmsYJcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BBVENIJywgdXJsLCB7XG4gICAgICBib2R5LFxuICAgICAgcGFyYW1zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHB1dFxuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XG5cbiAgLyoqXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcbiAgICovXG4gIHB1dDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUFVUIOivt+axglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwge1xuICAgICAgYm9keSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDor7fmsYJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDor7fmsYLmlrnms5XnsbvlnotcbiAgICogQHBhcmFtIHVybCBVUkzlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMg5Y+C5pWwXG4gICAqL1xuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5iZWdpbigpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIG9wdGlvbnMucGFyYW1zID0gdGhpcy5wYXJzZVBhcmFtcyhvcHRpb25zLnBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmVuZCgpKSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==