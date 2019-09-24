/**
 * @fileoverview added by tsickle
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
        return {};
    }
    return args[data[key][0].index];
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
                /** @type {?} */
                var payload = getValidArgs(data, 'payload', args);
                /** @type {?} */
                var supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, tslib_1.__assign({ body: supportedBody ? tslib_1.__assign({}, getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? tslib_1.__assign({}, params, payload) : params, headers: tslib_1.__assign({}, baseData.baseHeaders, headers) }, options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDO0lBQ0UsaUJBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7Z0JBUC9DLFFBQVEsdUJBT1YsTUFBTSxTQUFDLFFBQVE7O0lBQzlCLGNBQUM7Q0FBQSxBQUZELElBRUM7U0FGcUIsT0FBTzs7Ozs7O0lBQ2YsMkJBQThDOzs7OztBQUc1RCxpQ0FPQzs7Ozs7O0lBTEMsMEJBQVU7O0lBQ1YsOEJBQXlDOztJQUN6QyxtQ0FBd0Q7O0lBQ3hELHFDQUF5Qjs7SUFDekIsc0NBQTBCOzs7OztBQUc1Qix3QkFLQzs7O0lBSkMsd0JBQVk7O0lBQ1osMEJBQWM7Ozs7O0lBS1YsUUFBUSxHQUFHLGNBQWM7Ozs7OztBQUUvQixTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsR0FBYztJQUFkLG9CQUFBLEVBQUEsY0FBYzs7UUFDdkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDeEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDM0I7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFXO0lBQ2pDOzs7OztJ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Q0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUscUJBQ3BDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxzQkFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBSyxPQUFPLEVBQUcsQ0FBQyxDQUFDLElBQUksRUFDaEYsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsc0JBQU0sTUFBTSxFQUFLLE9BQU8sRUFBRyxDQUFDLENBQUMsTUFBTSxFQUMzRCxPQUFPLHVCQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUssT0FBTyxLQUMzQyxPQUFPLEVBQ1YsQ0FBQztZQUNMLENBQUMsQ0FBQSxDQUFDO1lBRUYsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBTUQsTUFBTSxLQUFPLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDOzs7Ozs7QUFNNUMsTUFBTSxLQUFPLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOzs7Ozs7QUFNcEMsTUFBTSxLQUFPLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUFNdEMsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDOzs7Ozs7QUFNMUMsTUFBTSxLQUFPLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOzs7Ozs7QUFNcEMsTUFBTSxLQUFPLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUFNdEMsTUFBTSxLQUFPLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOzs7Ozs7QUFNeEMsTUFBTSxLQUFPLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzIG9ubHktYXJyb3ctZnVuY3Rpb25zXG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAuY2xpZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBcGkge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEluamVjdG9yKSBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBPcHRpb25zIHtcbiAgLyoqIEFDTOmFjee9ru+8jOiLpeWvvOWFpSBgQGRlbG9uL2FjbGAg5pe26Ieq5Yqo5pyJ5pWI77yM562J5ZCM5LqOIGBBQ0xTZXJ2aWNlLmNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUGFyYW1UeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuXG5jb25zdCBwYXJhbUtleSA9IGBfX2FwaV9wYXJhbXNgO1xuXG5mdW5jdGlvbiBzZXRQYXJhbSh0YXJnZXQ6IGFueSwga2V5ID0gcGFyYW1LZXkpIHtcbiAgbGV0IHBhcmFtcyA9IHRhcmdldFtrZXldO1xuICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXJhbXMgPSB0YXJnZXRba2V5XSA9IHt9O1xuICB9XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbi8qKlxuICog6buY6K6k5Z+65YeGVVJMXG4gKiAtIOacieaViOiMg+WbtO+8muexu1xuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZVVybCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb248VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbjxUQ2xhc3MgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBCYXNlQXBpPih0YXJnZXQ6IFRDbGFzcyk6IFRDbGFzcyB7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0odGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgcGFyYW1zLmJhc2VIZWFkZXJzID0gaGVhZGVycztcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUGFyYW0ocGFyYW1OYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleT86IHN0cmluZykge1xuICAgIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogVVJM6Lev55Sx5Y+C5pWwXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUGF0aCA9IG1ha2VQYXJhbSgncGF0aCcpO1xuXG4vKipcbiAqIFVSTCDlj4LmlbAgYFF1ZXJ5U3RyaW5nYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gbWFrZVBhcmFtKCdxdWVyeScpO1xuXG4vKipcbiAqIOWPguaVsCBgQm9keWBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBCb2R5ID0gbWFrZVBhcmFtKCdib2R5JykoKTtcblxuLyoqXG4gKiDlj4LmlbAgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxuICovXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IG1ha2VQYXJhbSgnaGVhZGVycycpO1xuXG4vKipcbiAqIFJlcXVlc3QgUGF5bG9hZFxuICogLSBTdXBwb3J0ZWQgYm9keSAobGlrZWBQT1NUYCwgYFBVVGApIGFzIGEgYm9keSBkYXRhLCBlcXVpdmFsZW50IHRvIGBAQm9keWBcbiAqIC0gTm90IHN1cHBvcnRlZCBib2R5IChsaWtlIGBHRVRgLCBgREVMRVRFYCBldGMpIGFzIGEgYFF1ZXJ5U3RyaW5nYFxuICovXG5leHBvcnQgY29uc3QgUGF5bG9hZCA9IG1ha2VQYXJhbSgncGF5bG9hZCcpKCk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkQXJncyhkYXRhOiBhbnksIGtleTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHt9IHtcbiAgaWYgKCFkYXRhW2tleV0gfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSB8fCBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIGFyZ3NbZGF0YVtrZXldWzBdLmluZGV4XTtcbn1cblxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24odXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgcmV0dXJuIChfdGFyZ2V0OiBCYXNlQXBpLCB0YXJnZXRLZXk/OiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgIGRlc2NyaXB0b3IhLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpIGFzIF9IdHRwQ2xpZW50O1xuICAgICAgICBpZiAoaHR0cCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm90IGZvdW5kICdfSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdBbGFpblRoZW1lTW9kdWxlJyAmJiAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gc2V0UGFyYW0odGhpcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQYXJhbShiYXNlRGF0YSwgdGFyZ2V0S2V5KTtcblxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCB8fCAnJztcbiAgICAgICAgcmVxdWVzdFVybCA9IFtiYXNlRGF0YS5iYXNlVXJsIHx8ICcnLCByZXF1ZXN0VXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHJlcXVlc3RVcmwuc3Vic3RyKDEpIDogcmVxdWVzdFVybF0uam9pbignLycpO1xuICAgICAgICAvLyBmaXggbGFzdCBzcGxpdFxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnN1YnN0cigwLCByZXF1ZXN0VXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNsKSB7XG4gICAgICAgICAgY29uc3QgYWNsU3J2OiBBQ0xTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoLzo6L2csICdeXicpO1xuICAgICAgICAoKGRhdGEucGF0aCBhcyBQYXJhbVR5cGVbXSkgfHwgW10pXG4gICAgICAgICAgLmZpbHRlcih3ID0+IHR5cGVvZiBhcmdzW3cuaW5kZXhdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaCgoaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2kua2V5fWAsICdnJyksIGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2kuaW5kZXhdKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoL1xcXlxcXi9nLCBgOmApO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHA6IHt9LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwOiB7fSwgaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGdldFZhbGlkQXJncyhkYXRhLCAncGF5bG9hZCcsIGFyZ3MpO1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRCb2R5ID0gbWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJztcblxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KG1ldGhvZCwgcmVxdWVzdFVybCwge1xuICAgICAgICAgIGJvZHk6IHN1cHBvcnRlZEJvZHkgPyB7IC4uLmdldFZhbGlkQXJncyhkYXRhLCAnYm9keScsIGFyZ3MpLCAuLi5wYXlsb2FkIH0gOiBudWxsLFxuICAgICAgICAgIHBhcmFtczogIXN1cHBvcnRlZEJvZHkgPyB7IC4uLnBhcmFtcywgLi4ucGF5bG9hZCB9IDogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IHsgLi4uYmFzZURhdGEuYmFzZUhlYWRlcnMsIC4uLmhlYWRlcnMgfSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogYE9QVElPTlNgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IE9QVElPTlMgPSBtYWtlTWV0aG9kKCdPUFRJT05TJyk7XG5cbi8qKlxuICogYEdFVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgR0VUID0gbWFrZU1ldGhvZCgnR0VUJyk7XG5cbi8qKlxuICogYFBPU1RgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBtYWtlTWV0aG9kKCdQT1NUJyk7XG5cbi8qKlxuICogYERFTEVURWAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgREVMRVRFID0gbWFrZU1ldGhvZCgnREVMRVRFJyk7XG5cbi8qKlxuICogYFBVVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUFVUID0gbWFrZU1ldGhvZCgnUFVUJyk7XG5cbi8qKlxuICogYEhFQURgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEhFQUQgPSBtYWtlTWV0aG9kKCdIRUFEJyk7XG5cbi8qKlxuICogYFBBVENIYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQQVRDSCA9IG1ha2VNZXRob2QoJ1BBVENIJyk7XG5cbi8qKlxuICogYEpTT05QYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBKU09OUCA9IG1ha2VNZXRob2QoJ0pTT05QJyk7XG4iXX0=