/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injector } from '@angular/core';
import { ACLService } from '@delon/acl';
import { throwError } from 'rxjs';
import { _HttpClient } from './http.client';
/**
 * @abstract
 */
export class BaseApi {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
}
/** @nocollapse */
BaseApi.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] }
];
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
const paramKey = `__api_params`;
/**
 * @param {?} target
 * @param {?=} key
 * @return {?}
 */
function setParam(target, key = paramKey) {
    /** @type {?} */
    let params = target[key];
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
        const params = setParam(target.prototype);
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
        const params = setParam(target.prototype);
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
            const params = setParam(setParam(target), propertyKey);
            /** @type {?} */
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key,
                index,
            });
        });
    });
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 * @type {?}
 */
export const Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 * @type {?}
 */
export const Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 * @type {?}
 */
export const Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 * @type {?}
 */
export const Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `\@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 * @type {?}
 */
export const Payload = makeParam('payload')();
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
    function (url = '', options) {
        return (/**
         * @param {?} _target
         * @param {?=} targetKey
         * @param {?=} descriptor
         * @return {?}
         */
        (_target, targetKey, descriptor) => {
            (/** @type {?} */ (descriptor)).value = (/**
             * @param {...?} args
             * @return {?}
             */
            function (...args) {
                options = options || {};
                /** @type {?} */
                const injector = (/** @type {?} */ (((/** @type {?} */ (this))).injector));
                /** @type {?} */
                const http = (/** @type {?} */ (injector.get(_HttpClient, null)));
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
                }
                /** @type {?} */
                const baseData = setParam(this);
                /** @type {?} */
                const data = setParam(baseData, targetKey);
                /** @type {?} */
                let requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    /** @type {?} */
                    const aclSrv = injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: `From Http Decorator`,
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
                w => typeof args[w.index] !== 'undefined'))
                    .forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                (i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                }));
                requestUrl = requestUrl.replace(/\^\^/g, `:`);
                /** @type {?} */
                const params = (data.query || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                const headers = (data.headers || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                const payload = getValidArgs(data, 'payload', args);
                /** @type {?} */
                const supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
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
export const OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const JSONP = makeMethod('JSONP');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDLE1BQU0sT0FBZ0IsT0FBTzs7OztJQUMzQixZQUF3QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7OztZQVAvQyxRQUFRLHVCQU9WLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLDJCQUE4Qzs7Ozs7QUFHNUQsaUNBT0M7Ozs7OztJQUxDLDBCQUFVOztJQUNWLDhCQUF5Qzs7SUFDekMsbUNBQXdEOztJQUN4RCxxQ0FBeUI7O0lBQ3pCLHNDQUEwQjs7Ozs7QUFHNUIsd0JBS0M7OztJQUpDLHdCQUFZOztJQUNaLDBCQUFjOzs7OztNQUtWLFFBQVEsR0FBRyxjQUFjOzs7Ozs7QUFFL0IsU0FBUyxRQUFRLENBQUMsTUFBVyxFQUFFLEdBQUcsR0FBRyxRQUFROztRQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUMzQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakM7Ozs7O0lBQU8sVUFBMEQsTUFBYzs7Y0FDdkUsTUFBTSxH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QUM7Ozs7OztBQU1wQyxNQUFNLE9BQU8sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Ozs7OztBQU10QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Ozs7OztBQU14QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogb25seS1hcnJvdy1mdW5jdGlvbnNcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwaSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cE9wdGlvbnMge1xuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAZGVsb24vYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYXJhbVR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmNvbnN0IHBhcmFtS2V5ID0gYF9fYXBpX3BhcmFtc2A7XG5cbmZ1bmN0aW9uIHNldFBhcmFtKHRhcmdldDogYW55LCBrZXkgPSBwYXJhbUtleSkge1xuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcyA9IHRhcmdldFtrZXldID0ge307XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiDpu5jorqTln7rlh4ZVUkxcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogVVJM6Lev55Sx5Y+C5pWwXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUGF0aCA9IG1ha2VQYXJhbSgncGF0aCcpO1xuXG4vKipcbiAqIFVSTCDlj4LmlbAgYFF1ZXJ5U3RyaW5nYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gbWFrZVBhcmFtKCdxdWVyeScpO1xuXG4vKipcbiAqIOWPguaVsCBgQm9keWBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBCb2R5ID0gbWFrZVBhcmFtKCdib2R5JykoKTtcblxuLyoqXG4gKiDlj4LmlbAgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxuICovXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IG1ha2VQYXJhbSgnaGVhZGVycycpO1xuXG4vKipcbiAqIFJlcXVlc3QgUGF5bG9hZFxuICogLSBTdXBwb3J0ZWQgYm9keSAobGlrZWBQT1NUYCwgYFBVVGApIGFzIGEgYm9keSBkYXRhLCBlcXVpdmFsZW50IHRvIGBAQm9keWBcbiAqIC0gTm90IHN1cHBvcnRlZCBib2R5IChsaWtlIGBHRVRgLCBgREVMRVRFYCBldGMpIGFzIGEgYFF1ZXJ5U3RyaW5nYFxuICovXG5leHBvcnQgY29uc3QgUGF5bG9hZCA9IG1ha2VQYXJhbSgncGF5bG9hZCcpKCk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkQXJncyhkYXRhOiBhbnksIGtleTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHt9IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFkYXRhW2tleV0gfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSB8fCBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcmdzW2RhdGFba2V5XVswXS5pbmRleF07XG59XG5cbmZ1bmN0aW9uIGdlbkJvZHkoZGF0YT86IGFueSwgcGF5bG9hZD86IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgZGF0YSwgcGF5bG9hZCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBwYXlsb2FkKTtcbn1cblxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHVybDogc3RyaW5nID0gJycsIG9wdGlvbnM/OiBIdHRwT3B0aW9ucykge1xuICAgIHJldHVybiAoX3RhcmdldDogQmFzZUFwaSwgdGFyZ2V0S2V5Pzogc3RyaW5nLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XG4gICAgICBkZXNjcmlwdG9yIS52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IGluamVjdG9yID0gKHRoaXMgYXMgTnpTYWZlQW55KS5pbmplY3RvciBhcyBJbmplY3RvcjtcbiAgICAgICAgY29uc3QgaHR0cCA9IGluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCkgYXMgX0h0dHBDbGllbnQ7XG4gICAgICAgIGlmIChodHRwID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBOb3QgZm91bmQgJ19IdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0FsYWluVGhlbWVNb2R1bGUnICYmICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFzZURhdGEgPSBzZXRQYXJhbSh0aGlzKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNldFBhcmFtKGJhc2VEYXRhLCB0YXJnZXRLZXkpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gdXJsIHx8ICcnO1xuICAgICAgICByZXF1ZXN0VXJsID0gW2Jhc2VEYXRhLmJhc2VVcmwgfHwgJycsIHJlcXVlc3RVcmwuc3RhcnRzV2l0aCgnLycpID8gcmVxdWVzdFVybC5zdWJzdHIoMSkgOiByZXF1ZXN0VXJsXS5qb2luKCcvJyk7XG4gICAgICAgIC8vIGZpeCBsYXN0IHNwbGl0XG4gICAgICAgIGlmIChyZXF1ZXN0VXJsLmxlbmd0aCA+IDEgJiYgcmVxdWVzdFVybC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwuc3Vic3RyKDAsIHJlcXVlc3RVcmwubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hY2wpIHtcbiAgICAgICAgICBjb25zdCBhY2xTcnYgPSBpbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoLzo6L2csICdeXicpO1xuICAgICAgICAoKGRhdGEucGF0aCBhcyBQYXJhbVR5cGVbXSkgfHwgW10pXG4gICAgICAgICAgLmZpbHRlcih3ID0+IHR5cGVvZiBhcmdzW3cuaW5kZXhdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAuZm9yRWFjaCgoaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2kua2V5fWAsICdnJyksIGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2kuaW5kZXhdKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoL1xcXlxcXi9nLCBgOmApO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHA6IE56U2FmZUFueSwgaTogUGFyYW1UeXBlKSA9PiB7XG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IChkYXRhLmhlYWRlcnMgfHwgW10pLnJlZHVjZSgocDogTnpTYWZlQW55LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0VmFsaWRBcmdzKGRhdGEsICdwYXlsb2FkJywgYXJncyk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJvZHkgPSBtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTogc3VwcG9ydGVkQm9keSA/IGdlbkJvZHkoZ2V0VmFsaWRBcmdzKGRhdGEsICdib2R5JywgYXJncyksIHBheWxvYWQpIDogbnVsbCxcbiAgICAgICAgICBwYXJhbXM6ICFzdXBwb3J0ZWRCb2R5ID8geyAuLi5wYXJhbXMsIC4uLnBheWxvYWQgfSA6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuIl19