/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
        this.cog = Object.assign(/** @type {?} */ ({
            nullValueHandling: 'include',
            dateValueHandling: 'timestamp',
        }), /** @type {?} */ ((cog)).http);
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
        Object.keys(params).forEach(function (key) {
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
        });
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
        // tslint:disable-next-line:forin
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
        // console.time('http');
        setTimeout(function () { return (_this._loading = true); });
    };
    /**
     * @return {?}
     */
    _HttpClient.prototype.end = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.timeEnd('http');
        setTimeout(function () { return (_this._loading = false); });
    };
    /**
     * GET 请求
     */
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.get = /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, params, options) {
        return this.request('GET', url, Object.assign({
            params: params,
        }, options));
    };
    /**
     * POST 请求
     */
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.post = /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request('POST', url, Object.assign({
            body: body,
            params: params,
        }, options));
    };
    /**
     * DELETE 请求
     */
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.delete = /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, params, options) {
        return this.request('DELETE', url, Object.assign({
            params: params,
        }, options));
    };
    // endregion
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    _HttpClient.prototype.jsonp = /**
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
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap(function () {
            _this.end();
        }), catchError(function (res) {
            _this.end();
            return throwError(res);
        }));
    };
    /**
     * PATCH 请求
     */
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.patch = /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request('PATCH', url, Object.assign({
            body: body,
            params: params,
        }, options));
    };
    /**
     * PUT 请求
     */
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.put = /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request('PUT', url, Object.assign({
            body: body,
            params: params,
        }, options));
    };
    /**
     * `request` 请求
     *
     * @param method 请求方法类型
     * @param url URL地址
     * @param options 参数
     */
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    _HttpClient.prototype.request = /**
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
        return this.http.request(method, url, options).pipe(tap(function () {
            _this.end();
        }), catchError(function (res) {
            _this.end();
            return throwError(res);
        }));
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
    /** @type {?} */
    _HttpClient.prototype.cog;
    /** @type {?} */
    _HttpClient.prototype._loading;
    /** @type {?} */
    _HttpClient.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFVBQVUsR0FFWCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFhcEQscUJBQW9CLElBQWdCLEVBQUUsR0FBcUI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBWTt3QkFVakIsS0FBSztRQVR0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNKO1lBQ2hCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsaUJBQWlCLEVBQUUsV0FBVztTQUMvQixzQkFDRCxHQUFHLEdBQUUsSUFBSSxDQUNWLENBQUM7S0FDSDtJQUtELHNCQUFJLGdDQUFPO1FBRFgsY0FBYzs7Ozs7UUFDZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7O09BQUE7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE1BQVc7UUFBdkIsaUJBYUM7O1FBWkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7WUFDN0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUV4QixJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEtBQUssUUFB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QUcsRUFBRSxDQUFDO1NBQ1osQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQ0gsQ0FBQztLQUNIOztnQkF6bUJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBaEJoQyxVQUFVO2dCQU9ILGdCQUFnQjs7O3NCQVR6Qjs7U0FvQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBIZWFkZXJzLFxyXG4gIEh0dHBQYXJhbXMsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XHJcblxyXG4vKipcclxuICog5bCB6KOFSHR0cENsaWVudO+8jOS4u+imgeino+WGs++8mlxyXG4gKiArIOS8mOWMlkh0dHBDbGllbnTlnKjlj4LmlbDkuIrkvr/liKnmgKdcclxuICogKyDnu5/kuIDlrp7njrAgbG9hZGluZ1xyXG4gKiArIOe7n+S4gOWkhOeQhuaXtumXtOagvOW8j+mXrumimFxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcclxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcclxuICBwcml2YXRlIGNvZzogSHR0cENsaWVudENvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICA8SHR0cENsaWVudENvbmZpZz57XHJcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcclxuICAgICAgICBkYXRlVmFsdWVIYW5kbGluZzogJ3RpbWVzdGFtcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZyEuaHR0cCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKiDmmK/lkKbmraPlnKjliqDovb3kuK0gKi9cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcclxuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xyXG4gICAgICAvLyDlv73nlaXnqbrlgLxcclxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIC8vIOWwhuaXtumXtOi9rOWMluS4uu+8muaXtumXtOaIsyAo56eSKVxyXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XHJcbiAgICB1cmwgKz0gfnVybC5pbmRleE9mKCc/JykgPyAnJyA6ICc/JztcclxuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xyXG4gIH1cclxuXHJcbiAgYmVnaW4oKSB7XHJcbiAgICAvLyBjb25zb2xlLnRpbWUoJ2h0dHAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoJ2h0dHAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBnZXRcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBUYCDnsbvlnotcclxuICAgKi9cclxuICBnZXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VUIOivt+axglxyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IHBvc3RcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVCDor7fmsYJcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBkZWxldGVcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEUg6K+35rGCXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnREVMRVRFJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8qKlxyXG4gICAqIGBqc29ucGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vlgLzvvIzpu5jorqTvvJpKU09OUF9DQUxMQkFDS1xyXG4gICAqL1xyXG4gIGpzb25wKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMuYXBwbGllZFVybCh1cmwsIHBhcmFtcyksIGNhbGxiYWNrUGFyYW0pLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gcGF0Y2hcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIHBhdGNoPFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSCDor7fmsYJcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgJ1BBVENIJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwdXRcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVCDor7fmsYJcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvKipcclxuICAgKiBgcmVxdWVzdGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWV0aG9kIOivt+axguaWueazleexu+Wei1xyXG4gICAqIEBwYXJhbSB1cmwgVVJM5Zyw5Z2AXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5Y+C5pWwXHJcbiAgICovXHJcbiAgcmVxdWVzdDxSPihcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzpcclxuICAgICAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcGFyYW1zPzpcclxuICAgICAgICB8IEh0dHBQYXJhbXNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxSPjtcclxuICAvKipcclxuICAgKiBgcmVxdWVzdGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWV0aG9kIOivt+axguaWueazleexu+Wei1xyXG4gICAqIEBwYXJhbSB1cmwgVVJM5Zyw5Z2AXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5Y+C5pWwXHJcbiAgICovXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzpcclxuICAgICAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcGFyYW1zPzpcclxuICAgICAgICB8IEh0dHBQYXJhbXNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMuYmVnaW4oKTtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=