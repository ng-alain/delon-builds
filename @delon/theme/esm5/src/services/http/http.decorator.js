/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injector } from '@angular/core';
import { ACLService } from '@delon/acl';
import { throwError } from 'rxjs';
import { _HttpClient } from './http.client';
/**
 * @abstract
 */
var BaseApi = /** @class */ (function () {
    function BaseApi(injector) {
        this.injector = injector;
    }
    /** @nocollapse */
    BaseApi.ctorParameters = function () { return [
        { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] }
    ]; };
    return BaseApi;
}());
export { BaseApi };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseApi.prototype.injector;
}
/**
 * @record
 */
export function HttpOptions() { }
if (false) {
    /**
     * ACL配置，若导入 `\@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
     * @type {?|undefined}
     */
    HttpOptions.prototype.acl;
    /** @type {?|undefined} */
    HttpOptions.prototype.observe;
    /** @type {?|undefined} */
    HttpOptions.prototype.responseType;
    /** @type {?|undefined} */
    HttpOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    HttpOptions.prototype.withCredentials;
}
/**
 * @record
 */
function ParamType() { }
if (false) {
    /** @type {?} */
    ParamType.prototype.key;
    /** @type {?} */
    ParamType.prototype.index;
    /* Skipping unhandled member: [key: string]: any;*/
    /* Skipping unhandled member: [key: number]: any;*/
}
/** @type {?} */
var paramKey = "__api_params";
/**
 * @param {?} target
 * @param {?=} key
 * @return {?}
 */
function setParam(target, key) {
    if (key === void 0) { key = paramKey; }
    /** @type {?} */
    var params = target[key];
    if (typeof params === 'undefined') {
        params = target[key] = {};
    }
    return params;
}
/**
 * 默认基准URL
 * - 有效范围：类
 * @param {?} url
 * @return {?}
 */
export function BaseUrl(url) {
    return (/**
     * @template TClass
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var params = setParam(target.prototype);
        params.baseUrl = url;
        return target;
    });
}
/**
 * 默认 `headers`
 * - 有效范围：类
 * @param {?} headers
 * @return {?}
 */
export function BaseHeaders(headers) {
    return (/**
     * @template TClass
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var params = setParam(target.prototype);
        params.baseHeaders = headers;
        return target;
    });
}
/**
 * @param {?} paramName
 * @return {?}
 */
function makeParam(paramName) {
    return (/**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        return (/**
         * @param {?} target
         * @param {?} propertyKey
         * @param {?} index
         * @return {?}
         */
        function (target, propertyKey, index) {
            /** @type {?} */
            var params = setParam(setParam(target), propertyKey);
            /** @type {?} */
            var tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key: key,
                index: index,
            });
        });
    });
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 * @type {?}
 */
export var Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 * @type {?}
 */
export var Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 * @type {?}
 */
export var Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 * @type {?}
 */
export var Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `\@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 * @type {?}
 */
export var Payload = makeParam('payload')();
/**
 * @param {?} data
 * @param {?} key
 * @param {?} args
 * @return {?}
 */
function getValidArgs(data, key, args) {
    if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
        return undefined;
    }
    return args[data[key][0].index];
}
/**
 * @param {?=} data
 * @param {?=} payload
 * @return {?}
 */
function genBody(data, payload) {
    if (Array.isArray(data) || Array.isArray(payload)) {
        // tslint:disable-next-line:prefer-object-spread
        return Object.assign([], data, payload);
    }
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign({}, data, payload);
}
/**
 * @param {?} method
 * @return {?}
 */
function makeMethod(method) {
    return (/**
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (url === void 0) { url = ''; }
        return (/**
         * @param {?} _target
         * @param {?=} targetKey
         * @param {?=} descriptor
         * @return {?}
         */
        function (_target, targetKey, descriptor) {
            (/** @type {?} */ (descriptor)).value = (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                options = options || {};
                /** @type {?} */
                var http = (/** @type {?} */ (this.injector.get(_HttpClient, null)));
                if (http == null) {
                    throw new TypeError("Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.");
                }
                /** @type {?} */
                var baseData = setParam(this);
                /** @type {?} */
                var data = setParam(baseData, targetKey);
                /** @type {?} */
                var requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    /** @type {?} */
                    var aclSrv = this.injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: "From Http Decorator",
                        });
                    }
                    delete options.acl;
                }
                requestUrl = requestUrl.replace(/::/g, '^^');
                (((/** @type {?} */ (data.path))) || [])
                    .filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return typeof args[w.index] !== 'undefined'; }))
                    .forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    requestUrl = requestUrl.replace(new RegExp(":" + i.key, 'g'), encodeURIComponent(args[i.index]));
                }));
                requestUrl = requestUrl.replace(/\^\^/g, ":");
                /** @type {?} */
                var params = (data.query || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                function (p, i) {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                var headers = (data.headers || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                function (p, i) {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                if (method === 'FORM') {
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                }
                /** @type {?} */
                var payload = getValidArgs(data, 'payload', args);
                /** @type {?} */
                var supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, tslib_1.__assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? tslib_1.__assign({}, params, payload) : params, headers: tslib_1.__assign({}, baseData.baseHeaders, headers) }, options));
            });
            return descriptor;
        });
    });
}
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var JSONP = makeMethod('JSONP');
/**
 * `FORM` 请求
 * - 有效范围：方法
 * @type {?}
 */
export var FORM = makeMethod('FORM');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU1QztJQUNFLGlCQUF3QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7O2dCQVAvQyxRQUFRLHVCQU9WLE1BQU0sU0FBQyxRQUFROztJQUM5QixjQUFDO0NBQUEsQUFGRCxJQUVDO1NBRnFCLE9BQU87Ozs7OztJQUNmLDJCQUE4Qzs7Ozs7QUFHNUQsaUNBT0M7Ozs7OztJQUxDLDBCQUFVOztJQUNWLDhCQUF5Qzs7SUFDekMsbUNBQXdEOztJQUN4RCxxQ0FBeUI7O0lBQ3pCLHNDQUEwQjs7Ozs7QUFHNUIsd0JBS0M7OztJQUpDLHdCQUFZOztJQUNaLDBCQUFjOzs7OztJQUtWLFFBQVEsR0FBRyxjQUFjOzs7Ozs7QUFFL0IsU0FBUyxRQUFRLENBQUMsTUFBVyxFQUFFLEdBQWM7SUFBZCxvQkFBQSxFQUFBLGNBQWM7O1FBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBVztJQUNqQzs7Ozs7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Q0FBQzs7Ozs7O0FBTXRDLE1BQU0sS0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBTTFDLE1BQU0sS0FBTyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sS0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FBTXRDLE1BQU0sS0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sS0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sS0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyBvbmx5LWFycm93LWZ1bmN0aW9uc1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwLmNsaWVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQXBpIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChJbmplY3RvcikgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdHRwT3B0aW9ucyB7XG4gIC8qKiBBQ0zphY3nva7vvIzoi6Xlr7zlhaUgYEBkZWxvbi9hY2xgIOaXtuiHquWKqOacieaViO+8jOetieWQjOS6jiBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBhcmFtVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIFtrZXk6IG51bWJlcl06IGFueTtcbn1cblxuY29uc3QgcGFyYW1LZXkgPSBgX19hcGlfcGFyYW1zYDtcblxuZnVuY3Rpb24gc2V0UGFyYW0odGFyZ2V0OiBhbnksIGtleSA9IHBhcmFtS2V5KSB7XG4gIGxldCBwYXJhbXMgPSB0YXJnZXRba2V5XTtcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcGFyYW1zID0gdGFyZ2V0W2tleV0gPSB7fTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufVxuXG4vKipcbiAqIOm7mOiupOWfuuWHhlVSTFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VVcmwodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uPFRDbGFzcyBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IEJhc2VBcGk+KHRhcmdldDogVENsYXNzKTogVENsYXNzIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbSh0YXJnZXQucHJvdG90eXBlKTtcbiAgICBwYXJhbXMuYmFzZVVybCA9IHVybDtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG4vKipcbiAqIOm7mOiupCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlSGVhZGVycyhcbiAgaGVhZGVyczpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfSxcbikge1xuICByZXR1cm4gZnVuY3Rpb248VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBCYXNlQXBpLCBwcm9wZXJ0eUtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbShzZXRQYXJhbSh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgICBsZXQgdFBhcmFtcyA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiB0UGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRQYXJhbXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgaW5kZXgsXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIFVSTOi3r+eUseWPguaVsFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFBhdGggPSBtYWtlUGFyYW0oJ3BhdGgnKTtcblxuLyoqXG4gKiBVUkwg5Y+C5pWwIGBRdWVyeVN0cmluZ2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBRdWVyeSA9IG1ha2VQYXJhbSgncXVlcnknKTtcblxuLyoqXG4gKiDlj4LmlbAgYEJvZHlgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgQm9keSA9IG1ha2VQYXJhbSgnYm9keScpKCk7XG5cbi8qKlxuICog5Y+C5pWwIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqIC0g5ZCI5bm2IGBCYXNlSGVhZGVyc2BcbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSBtYWtlUGFyYW0oJ2hlYWRlcnMnKTtcblxuLyoqXG4gKiBSZXF1ZXN0IFBheWxvYWRcbiAqIC0gU3VwcG9ydGVkIGJvZHkgKGxpa2VgUE9TVGAsIGBQVVRgKSBhcyBhIGJvZHkgZGF0YSwgZXF1aXZhbGVudCB0byBgQEJvZHlgXG4gKiAtIE5vdCBzdXBwb3J0ZWQgYm9keSAobGlrZSBgR0VUYCwgYERFTEVURWAgZXRjKSBhcyBhIGBRdWVyeVN0cmluZ2BcbiAqL1xuZXhwb3J0IGNvbnN0IFBheWxvYWQgPSBtYWtlUGFyYW0oJ3BheWxvYWQnKSgpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZEFyZ3MoZGF0YTogYW55LCBrZXk6IHN0cmluZywgYXJnczogYW55W10pOiB7fSB8IHVuZGVmaW5lZCB7XG4gIGlmICghZGF0YVtrZXldIHx8ICFBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHwgZGF0YVtrZXldLmxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYXJnc1tkYXRhW2tleV1bMF0uaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBnZW5Cb2R5KGRhdGE/OiBhbnksIHBheWxvYWQ/OiBhbnkpOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBBcnJheS5pc0FycmF5KHBheWxvYWQpKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oW10sIGRhdGEsIHBheWxvYWQpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItb2JqZWN0LXNwcmVhZFxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgcGF5bG9hZCk7XG59XG5cbmV4cG9ydCB0eXBlIE1FVEhPRF9UWVBFID0gJ09QVElPTlMnIHwgJ0dFVCcgfCAnUE9TVCcgfCAnREVMRVRFJyB8ICdQVVQnIHwgJ0hFQUQnIHwgJ1BBVENIJyB8ICdKU09OUCcgfCAnRk9STSc7XG5cbmZ1bmN0aW9uIG1ha2VNZXRob2QobWV0aG9kOiBNRVRIT0RfVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24odXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgcmV0dXJuIChfdGFyZ2V0OiBCYXNlQXBpLCB0YXJnZXRLZXk/OiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgIGRlc2NyaXB0b3IhLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpIGFzIF9IdHRwQ2xpZW50O1xuICAgICAgICBpZiAoaHR0cCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm90IGZvdW5kICdfSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdBbGFpblRoZW1lTW9kdWxlJyAmJiAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gc2V0UGFyYW0odGhpcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQYXJhbShiYXNlRGF0YSwgdGFyZ2V0S2V5KTtcblxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCB8fCAnJztcbiAgICAgICAgcmVxdWVzdFVybCA9IFtiYXNlRGF0YS5iYXNlVXJsIHx8ICcnLCByZXF1ZXN0VXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHJlcXVlc3RVcmwuc3Vic3RyKDEpIDogcmVxdWVzdFVybF0uam9pbignLycpO1xuICAgICAgICAvLyBmaXggbGFzdCBzcGxpdFxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnN1YnN0cigwLCByZXF1ZXN0VXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNsKSB7XG4gICAgICAgICAgY29uc3QgYWNsU3J2OiBBQ0xTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoLzo6L2csICdeXicpO1xuICAgICAgICAoKGRhdGEucGF0aCBhcyBQYXJhbVR5cGVbXSkgfHwgW10pXG4gICAgICAgICAgLmZpbHRlcih3ID0+IHR5cGVvZiBhcmdzW3cuaW5kZXhdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaCgoaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2kua2V5fWAsICdnJyksIGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2kuaW5kZXhdKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoL1xcXlxcXi9nLCBgOmApO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHA6IHt9LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwOiB7fSwgaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdGT1JNJykge1xuICAgICAgICAgIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0VmFsaWRBcmdzKGRhdGEsICdwYXlsb2FkJywgYXJncyk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJvZHkgPSBtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTogc3VwcG9ydGVkQm9keSA/IGdlbkJvZHkoZ2V0VmFsaWRBcmdzKGRhdGEsICdib2R5JywgYXJncyksIHBheWxvYWQpIDogbnVsbCxcbiAgICAgICAgICBwYXJhbXM6ICFzdXBwb3J0ZWRCb2R5ID8geyAuLi5wYXJhbXMsIC4uLnBheWxvYWQgfSA6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuXG4vKipcbiAqIGBGT1JNYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JNID0gbWFrZU1ldGhvZCgnRk9STScpO1xuIl19