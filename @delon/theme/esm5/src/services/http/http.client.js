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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFVBQVUsR0FFWCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFhcEQscUJBQW9CLElBQWdCLEVBQUUsR0FBcUI7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBWTt3QkFVakIsS0FBSztRQVR0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNKO1lBQ2hCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsaUJBQWlCLEVBQUUsV0FBVztTQUMvQixzQkFDRCxHQUFHLEdBQUUsSUFBSSxDQUNWLENBQUM7S0FDSDtJQUtELHNCQUFJLGdDQUFPO1FBRFgsY0FBYzs7Ozs7UUFDZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7O09BQUE7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE1BQVc7UUFBdkIsaUJBYUM7O1FBWkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7WUFDN0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUV4QixJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJO2dCQUFFLE9BQU87O1lBRXJFLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtnQkFDdkUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtZQUNELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ2xEOzs7Ozs7SUFFRCxnQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxNQUFZO1FBQ2xDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDeEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O1FBQ3BDLElBQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQzs7UUFFekIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBSSxHQUFHLFNBQUksTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQUEsaUJBR0M7O1FBREMsVUFBVSxDQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztLQUMxQzs7OztJQUVELHlCQUFHOzs7SUFBSDtRQUFBLGlCQUdDOztRQURDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDM0M7SUErRUQ7O09BRUc7Ozs7Ozs7O0lBQ0gseUJBQUc7Ozs7Ozs7SUFBSCxVQUNFLEdBQVcsRUFDWCxNQUFXLEVBQ1gsT0FNQztRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FDakIsS0FBSyxFQUNMLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsTUFBTSxRQUFBO1NBQ1AsRUFDRCxPQUFPLENBQ1IsQ0FDRixDQUFDO0tBQ0g7SUFzRUQ7O09BRUc7Ozs7Ozs7OztJQUNILDBCQUFJOzs7Ozs7OztJQUFKLFVBQ0UsR0FBVyxFQUNYLElBQVMsRUFDVCxNQUFXLEVBQ1gsT0FNQztRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FDakIsTUFBTSxFQUNOLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsSUFBSSxNQUFBO1lBQ0osTUFBTSxRQUFBO1NBQ1AsRUFDRCxPQUFPLENBQ1IsQ0FDRixDQUFDO0tBQ0g7SUFtREQ7O09BRUc7Ozs7Ozs7O0lBQ0gsNEJBQU07Ozs7Ozs7SUFBTixVQUNFLEdBQVcsRUFDWCxNQUFXLEVBQ1gsT0FNQztRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FDakIsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsTUFBTSxRQUFBO1NBQ1AsRUFDRCxPQUFPLENBQ1IsQ0FDRixDQUFDO0tBQ0g7SUFFRCxZQUFZO0lBRVo7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7Ozs7SUFBTCxVQUNFLEdBQVcsRUFDWCxNQUFZLEVBQ1osYUFBd0M7UUFIMUMsaUJBY0M7UUFYQyw4QkFBQSxFQUFBLGdDQUF3QztRQUV4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDdEUsR0FBRyxDQUFDO1lBQ0YsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1osQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQ0gsQ0FBQztLQUNIO0lBb0VEOztPQUVHOzs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7Ozs7SUFBTCxVQUNFLEdBQVcsRUFDWCxJQUFTLEVBQ1QsTUFBVyxFQUNYLE9BTUM7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQ2pCLE9BQU8sRUFDUCxHQUFHLEVBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FDWDtZQUNFLElBQUksTUFBQTtZQUNKLE1BQU0sUUFBQTtTQUNQLEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztLQUNIO0lBc0VEOztPQUVHOzs7Ozs7Ozs7SUFDSCx5QkFBRzs7Ozs7Ozs7SUFBSCxVQUNFLEdBQVcsRUFDWCxJQUFTLEVBQ1QsTUFBVyxFQUNYLE9BTUM7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQ2pCLEtBQUssRUFDTCxHQUFHLEVBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FDWDtZQUNFLElBQUksTUFBQTtZQUNKLE1BQU0sUUFBQTtTQUNQLEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztLQUNIO0lBZ0NEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsNkJBQU87Ozs7Ozs7O0lBQVAsVUFDRSxNQUFjLEVBQ2QsR0FBVyxFQUNYLE9BZ0JDO1FBbkJILGlCQWtDQztRQWJDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxPQUFPLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDO1lBQ0YsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1osQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQ0gsQ0FBQztLQUNIOztnQkF6bUJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBaEJoQyxVQUFVO2dCQU9ILGdCQUFnQjs7O3NCQVR6Qjs7U0FvQmEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUGFyYW1zLFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4vaHR0cC5jb25maWcnO1xuXG4vKipcbiAqIOWwgeijhUh0dHBDbGllbnTvvIzkuLvopoHop6PlhrPvvJpcbiAqICsg5LyY5YyWSHR0cENsaWVudOWcqOWPguaVsOS4iuS+v+WIqeaAp1xuICogKyDnu5/kuIDlrp7njrAgbG9hZGluZ1xuICogKyDnu5/kuIDlpITnkIbml7bpl7TmoLzlvI/pl67pophcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgX0h0dHBDbGllbnQge1xuICBwcml2YXRlIGNvZzogSHR0cENsaWVudENvbmZpZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8SHR0cENsaWVudENvbmZpZz57XG4gICAgICAgIG51bGxWYWx1ZUhhbmRsaW5nOiAnaW5jbHVkZScsXG4gICAgICAgIGRhdGVWYWx1ZUhhbmRsaW5nOiAndGltZXN0YW1wJyxcbiAgICAgIH0sXG4gICAgICBjb2chLmh0dHAsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICAvKiog5piv5ZCm5q2j5Zyo5Yqg6L295LitICovXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xuICAgICAgLy8g5b+955Wl56m65YC8XG4gICAgICBpZiAodGhpcy5jb2cubnVsbFZhbHVlSGFuZGxpbmcgPT09ICdpZ25vcmUnICYmIF9kYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgIC8vIOWwhuaXtumXtOi9rOWMluS4uu+8muaXtumXtOaIsyAo56eSKVxuICAgICAgaWYgKHRoaXMuY29nLmRhdGVWYWx1ZUhhbmRsaW5nID09PSAndGltZXN0YW1wJyAmJiBfZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgX2RhdGEgPSBfZGF0YS52YWx1ZU9mKCk7XG4gICAgICB9XG4gICAgICBuZXdQYXJhbXNba2V5XSA9IF9kYXRhO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcbiAgfVxuXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIGFyci5qb2luKCcmJyk7XG4gIH1cblxuICBiZWdpbigpIHtcbiAgICAvLyBjb25zb2xlLnRpbWUoJ2h0dHAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gdHJ1ZSkpO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIGNvbnNvbGUudGltZUVuZCgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xuICB9XG5cbiAgLy8gcmVnaW9uOiBnZXRcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBUYCDnsbvlnotcbiAgICovXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAvKipcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogR0VUIOivt+axglxuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHBvc3RcblxuICAvKipcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBPU1Qg6K+35rGCXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BPU1QnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBkZWxldGVcblxuICAvKipcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBERUxFVEUg6K+35rGCXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdERUxFVEUnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBganNvbnBgIOivt+axglxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxuICAgKiBAcGFyYW0gcGFyYW1zIOivt+axguWPguaVsFxuICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbSBDQUxMQkFDS+WAvO+8jOm7mOiupO+8mkpTT05QX0NBTExCQUNLXG4gICAqL1xuICBqc29ucChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgY2FsbGJhY2tQYXJhbTogc3RyaW5nID0gJ0pTT05QX0NBTExCQUNLJyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMuYXBwbGllZFVybCh1cmwsIHBhcmFtcyksIGNhbGxiYWNrUGFyYW0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXRjaFxuXG4gIC8qKlxuICAgKiBQQVRDSO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcbiAgICovXG4gIHBhdGNoPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQQVRDSO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQQVRDSCDor7fmsYJcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BBVENIJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHB1dFxuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xuICAgKi9cbiAgcHV0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBVVCDor7fmsYJcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdQVVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBgcmVxdWVzdGAg6K+35rGCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qg6K+35rGC5pa55rOV57G75Z6LXG4gICAqIEBwYXJhbSB1cmwgVVJM5Zyw5Z2AXG4gICAqIEBwYXJhbSBvcHRpb25zIOWPguaVsFxuICAgKi9cbiAgcmVxdWVzdDxSPihcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFI+O1xuICAvKipcbiAgICogYHJlcXVlc3RgIOivt+axglxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIOivt+axguaWueazleexu+Wei1xuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxuICAgKiBAcGFyYW0gb3B0aW9ucyDlj4LmlbBcbiAgICovXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzpcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcGFyYW1zPzpcbiAgICAgICAgfCBIdHRwUGFyYW1zXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmJlZ2luKCk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19