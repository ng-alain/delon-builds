/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {...?} extraOptions
     * @return {?}
     */
    function (key) {
        var extraOptions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extraOptions[_i - 1] = arguments[_i];
        }
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
            tParams.push(tslib_1.__assign({ key: key,
                index: index }, extraOptions));
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
                var http = this.injector.get(_HttpClient, null);
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
                (data.path || []).forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    requestUrl = requestUrl.replace(new RegExp(":" + i.key, 'g'), encodeURIComponent(args[i.index]));
                }));
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
                return http.request(method, requestUrl, tslib_1.__assign({ body: data.body && data.body.length > 0 ? args[data.body[0].index] : null, params: params, headers: tslib_1.__assign({}, baseData.baseHeaders, headers) }, options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDO0lBQ0UsaUJBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7Z0JBUGhELFFBQVEsdUJBT1YsTUFBTSxTQUFDLFFBQVE7O0lBQzlCLGNBQUM7Q0FBQSxBQUZELElBRUM7U0FGcUIsT0FBTzs7Ozs7O0lBQ2YsMkJBQThDOzs7OztBQUc1RCxpQ0FPQzs7Ozs7O0lBTEMsMEJBQVU7O0lBQ1YsOEJBQXlDOztJQUN6QyxtQ0FBd0Q7O0lBQ3hELHFDQUF5Qjs7SUFDekIsc0NBQTBCOzs7OztBQUc1Qix3QkFLQzs7O0lBSkMsd0JBQVk7O0lBQ1osMEJBQWM7Ozs7O0lBS1YsUUFBUSxHQUFHLGNBQWM7Ozs7OztBQUUvQixTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsR0FBYztJQUFkLG9CQUFBLEVBQUEsY0FBYzs7UUFDdkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDeEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDM0I7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBTUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFXO0lBQ2pDOzs7OztJ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QUFNLEtBQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Ozs7OztBQU14QyxNQUFNLEtBQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXMgb25seS1hcnJvdy1mdW5jdGlvbnNcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwaSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBPcHRpb25zIHtcbiAgLyoqIEFDTOmFjee9ru+8jOiLpeWvvOWFpSBgQGRlbG9uL2FjbGAg5pe26Ieq5Yqo5pyJ5pWI77yM562J5ZCM5LqOIGBBQ0xTZXJ2aWNlLmNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUGFyYW1UeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuXG5jb25zdCBwYXJhbUtleSA9IGBfX2FwaV9wYXJhbXNgO1xuXG5mdW5jdGlvbiBzZXRQYXJhbSh0YXJnZXQ6IGFueSwga2V5ID0gcGFyYW1LZXkpIHtcbiAgbGV0IHBhcmFtcyA9IHRhcmdldFtrZXldO1xuICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXJhbXMgPSB0YXJnZXRba2V5XSA9IHt9O1xuICB9XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbi8qKlxuICog6buY6K6k5Z+65YeGVVJMXG4gKiAtIOacieaViOiMg+WbtO+8muexu1xuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZVVybCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gPFRDbGFzcyBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IEJhc2VBcGk+KHRhcmdldDogVENsYXNzKTogVENsYXNzIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbSh0YXJnZXQucHJvdG90eXBlKTtcbiAgICBwYXJhbXMuYmFzZVVybCA9IHVybDtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG4vKipcbiAqIOm7mOiupCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlSGVhZGVycyhcbiAgaGVhZGVyczpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nLCAuLi5leHRyYU9wdGlvbnM6IGFueVtdKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgLi4uZXh0cmFPcHRpb25zLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBVUkzot6/nlLHlj4LmlbBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBQYXRoID0gbWFrZVBhcmFtKCdwYXRoJyk7XG5cbi8qKlxuICogVVJMIOWPguaVsCBgUXVlcnlTdHJpbmdgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUXVlcnkgPSBtYWtlUGFyYW0oJ3F1ZXJ5Jyk7XG5cbi8qKlxuICog5Y+C5pWwIGBCb2R5YFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IEJvZHkgPSBtYWtlUGFyYW0oJ2JvZHknKSgpO1xuXG4vKipcbiAqIOWPguaVsCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKiAtIOWQiOW5tiBgQmFzZUhlYWRlcnNgXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJzID0gbWFrZVBhcmFtKCdoZWFkZXJzJyk7XG5cbmZ1bmN0aW9uIG1ha2VNZXRob2QobWV0aG9kOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh1cmw6IHN0cmluZyA9ICcnLCBvcHRpb25zPzogSHR0cE9wdGlvbnMpIHtcbiAgICByZXR1cm4gKF90YXJnZXQ6IEJhc2VBcGksIHRhcmdldEtleT86IHN0cmluZywgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgICAgZGVzY3JpcHRvciEudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xuICAgICAgICBpZiAoaHR0cCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgIGBOb3QgZm91bmQgJ19IdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0FsYWluVGhlbWVNb2R1bGUnICYmICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gc2V0UGFyYW0odGhpcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQYXJhbShiYXNlRGF0YSwgdGFyZ2V0S2V5KTtcblxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCB8fCAnJztcbiAgICAgICAgcmVxdWVzdFVybCA9IFtiYXNlRGF0YS5iYXNlVXJsIHx8ICcnLCByZXF1ZXN0VXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHJlcXVlc3RVcmwuc3Vic3RyKDEpIDogcmVxdWVzdFVybF0uam9pbignLycpO1xuICAgICAgICAvLyBmaXggbGFzdCBzcGxpdFxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnN1YnN0cigwLCByZXF1ZXN0VXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNsKSB7XG4gICAgICAgICAgY29uc3QgYWNsU3J2OiBBQ0xTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIChkYXRhLnBhdGggfHwgW10pLmZvckVhY2goKGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7aS5rZXl9YCwgJ2cnKSwgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRhdGEucXVlcnkgfHwgW10pLnJlZHVjZSgocCwgaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IChkYXRhLmhlYWRlcnMgfHwgW10pLnJlZHVjZSgocCwgaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdChtZXRob2QsIHJlcXVlc3RVcmwsIHtcbiAgICAgICAgICBib2R5OiBkYXRhLmJvZHkgJiYgZGF0YS5ib2R5Lmxlbmd0aCA+IDAgPyBhcmdzW2RhdGEuYm9keVswXS5pbmRleF0gOiBudWxsLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuIl19