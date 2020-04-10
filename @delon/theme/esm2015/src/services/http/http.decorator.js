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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDLE1BQU0sT0FBZ0IsT0FBTzs7OztJQUMzQixZQUF3QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7OztZQVAvQyxRQUFRLHVCQU9WLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLDJCQUE4Qzs7Ozs7QUFHNUQsaUNBT0M7Ozs7OztJQUxDLDBCQUFVOztJQUNWLDhCQUF5Qzs7SUFDekMsbUNBQXdEOztJQUN4RCxxQ0FBeUI7O0lBQ3pCLHNDQUEwQjs7Ozs7QUFHNUIsd0JBS0M7OztJQUpDLHdCQUFZOztJQUNaLDBCQUFjOzs7OztNQUtWLFFBQVEsR0FBRyxjQUFjOzs7Ozs7QUFFL0IsU0FBUyxRQUFRLENBQUMsTUFBVyxFQUFFLEdBQUcsR0FBRyxRQUFROztRQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUMzQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakM7Ozs7O0lBQU8sVUFBMEQsTUFBYzs7Y0FDdkUsTUFBTSxH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QUM7Ozs7OztBQU1wQyxNQUFNLE9BQU8sSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Ozs7OztBQU10QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Ozs7OztBQU14QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogb25seS1hcnJvdy1mdW5jdGlvbnNcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwLmNsaWVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQXBpIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChJbmplY3RvcikgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdHRwT3B0aW9ucyB7XG4gIC8qKiBBQ0zphY3nva7vvIzoi6Xlr7zlhaUgYEBkZWxvbi9hY2xgIOaXtuiHquWKqOacieaViO+8jOetieWQjOS6jiBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBhcmFtVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIFtrZXk6IG51bWJlcl06IGFueTtcbn1cblxuY29uc3QgcGFyYW1LZXkgPSBgX19hcGlfcGFyYW1zYDtcblxuZnVuY3Rpb24gc2V0UGFyYW0odGFyZ2V0OiBhbnksIGtleSA9IHBhcmFtS2V5KSB7XG4gIGxldCBwYXJhbXMgPSB0YXJnZXRba2V5XTtcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcGFyYW1zID0gdGFyZ2V0W2tleV0gPSB7fTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufVxuXG4vKipcbiAqIOm7mOiupOWfuuWHhlVSTFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VVcmwodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUQ2xhc3MgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBCYXNlQXBpPih0YXJnZXQ6IFRDbGFzcyk6IFRDbGFzcyB7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0odGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgcGFyYW1zLmJhc2VVcmwgPSB1cmw7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuLyoqXG4gKiDpu5jorqQgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muexu1xuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZUhlYWRlcnMoXG4gIGhlYWRlcnM6XG4gICAgfCBIdHRwSGVhZGVyc1xuICAgIHwge1xuICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIH0sXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUQ2xhc3MgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBCYXNlQXBpPih0YXJnZXQ6IFRDbGFzcyk6IFRDbGFzcyB7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0odGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgcGFyYW1zLmJhc2VIZWFkZXJzID0gaGVhZGVycztcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUGFyYW0ocGFyYW1OYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogQmFzZUFwaSwgcHJvcGVydHlLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0oc2V0UGFyYW0odGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgICAgbGV0IHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgdFBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdFBhcmFtcyA9IHBhcmFtc1twYXJhbU5hbWVdID0gW107XG4gICAgICB9XG4gICAgICB0UGFyYW1zLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIGluZGV4LFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBVUkzot6/nlLHlj4LmlbBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBQYXRoID0gbWFrZVBhcmFtKCdwYXRoJyk7XG5cbi8qKlxuICogVVJMIOWPguaVsCBgUXVlcnlTdHJpbmdgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUXVlcnkgPSBtYWtlUGFyYW0oJ3F1ZXJ5Jyk7XG5cbi8qKlxuICog5Y+C5pWwIGBCb2R5YFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IEJvZHkgPSBtYWtlUGFyYW0oJ2JvZHknKSgpO1xuXG4vKipcbiAqIOWPguaVsCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKiAtIOWQiOW5tiBgQmFzZUhlYWRlcnNgXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJzID0gbWFrZVBhcmFtKCdoZWFkZXJzJyk7XG5cbi8qKlxuICogUmVxdWVzdCBQYXlsb2FkXG4gKiAtIFN1cHBvcnRlZCBib2R5IChsaWtlYFBPU1RgLCBgUFVUYCkgYXMgYSBib2R5IGRhdGEsIGVxdWl2YWxlbnQgdG8gYEBCb2R5YFxuICogLSBOb3Qgc3VwcG9ydGVkIGJvZHkgKGxpa2UgYEdFVGAsIGBERUxFVEVgIGV0YykgYXMgYSBgUXVlcnlTdHJpbmdgXG4gKi9cbmV4cG9ydCBjb25zdCBQYXlsb2FkID0gbWFrZVBhcmFtKCdwYXlsb2FkJykoKTtcblxuZnVuY3Rpb24gZ2V0VmFsaWRBcmdzKGRhdGE6IGFueSwga2V5OiBzdHJpbmcsIGFyZ3M6IGFueVtdKToge30gfCB1bmRlZmluZWQge1xuICBpZiAoIWRhdGFba2V5XSB8fCAhQXJyYXkuaXNBcnJheShkYXRhW2tleV0pIHx8IGRhdGFba2V5XS5sZW5ndGggPD0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFyZ3NbZGF0YVtrZXldWzBdLmluZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2VuQm9keShkYXRhPzogYW55LCBwYXlsb2FkPzogYW55KTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItb2JqZWN0LXNwcmVhZFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBkYXRhLCBwYXlsb2FkKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHBheWxvYWQpO1xufVxuXG5mdW5jdGlvbiBtYWtlTWV0aG9kKG1ldGhvZDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgcmV0dXJuIChfdGFyZ2V0OiBCYXNlQXBpLCB0YXJnZXRLZXk/OiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgIGRlc2NyaXB0b3IhLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSAodGhpcyBhcyBOelNhZmVBbnkpLmluamVjdG9yIGFzIEluamVjdG9yO1xuICAgICAgICBjb25zdCBodHRwID0gaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKSBhcyBfSHR0cENsaWVudDtcbiAgICAgICAgaWYgKGh0dHAgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vdCBmb3VuZCAnX0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnQWxhaW5UaGVtZU1vZHVsZScgJiYgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXNlRGF0YSA9IHNldFBhcmFtKHRoaXMpO1xuICAgICAgICBjb25zdCBkYXRhID0gc2V0UGFyYW0oYmFzZURhdGEsIHRhcmdldEtleSk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSB1cmwgfHwgJyc7XG4gICAgICAgIHJlcXVlc3RVcmwgPSBbYmFzZURhdGEuYmFzZVVybCB8fCAnJywgcmVxdWVzdFVybC5zdGFydHNXaXRoKCcvJykgPyByZXF1ZXN0VXJsLnN1YnN0cigxKSA6IHJlcXVlc3RVcmxdLmpvaW4oJy8nKTtcbiAgICAgICAgLy8gZml4IGxhc3Qgc3BsaXRcbiAgICAgICAgaWYgKHJlcXVlc3RVcmwubGVuZ3RoID4gMSAmJiByZXF1ZXN0VXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5zdWJzdHIoMCwgcmVxdWVzdFVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjbCkge1xuICAgICAgICAgIGNvbnN0IGFjbFNydiA9IGluamVjdG9yLmdldChBQ0xTZXJ2aWNlLCBudWxsKTtcbiAgICAgICAgICBpZiAoYWNsU3J2ICYmICFhY2xTcnYuY2FuKG9wdGlvbnMuYWNsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe1xuICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBIdHRwIERlY29yYXRvcmAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuYWNsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvOjovZywgJ15eJyk7XG4gICAgICAgICgoZGF0YS5wYXRoIGFzIFBhcmFtVHlwZVtdKSB8fCBbXSlcbiAgICAgICAgICAuZmlsdGVyKHcgPT4gdHlwZW9mIGFyZ3Nbdy5pbmRleF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgIC5mb3JFYWNoKChpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7aS5rZXl9YCwgJ2cnKSwgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvXFxeXFxeL2csIGA6YCk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRhdGEucXVlcnkgfHwgW10pLnJlZHVjZSgocDogTnpTYWZlQW55LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwOiBOelNhZmVBbnksIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRWYWxpZEFyZ3MoZGF0YSwgJ3BheWxvYWQnLCBhcmdzKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkQm9keSA9IG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCc7XG5cbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdChtZXRob2QsIHJlcXVlc3RVcmwsIHtcbiAgICAgICAgICBib2R5OiBzdXBwb3J0ZWRCb2R5ID8gZ2VuQm9keShnZXRWYWxpZEFyZ3MoZGF0YSwgJ2JvZHknLCBhcmdzKSwgcGF5bG9hZCkgOiBudWxsLFxuICAgICAgICAgIHBhcmFtczogIXN1cHBvcnRlZEJvZHkgPyB7IC4uLnBhcmFtcywgLi4ucGF5bG9hZCB9IDogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IHsgLi4uYmFzZURhdGEuYmFzZUhlYWRlcnMsIC4uLmhlYWRlcnMgfSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogYE9QVElPTlNgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IE9QVElPTlMgPSBtYWtlTWV0aG9kKCdPUFRJT05TJyk7XG5cbi8qKlxuICogYEdFVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgR0VUID0gbWFrZU1ldGhvZCgnR0VUJyk7XG5cbi8qKlxuICogYFBPU1RgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBtYWtlTWV0aG9kKCdQT1NUJyk7XG5cbi8qKlxuICogYERFTEVURWAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgREVMRVRFID0gbWFrZU1ldGhvZCgnREVMRVRFJyk7XG5cbi8qKlxuICogYFBVVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUFVUID0gbWFrZU1ldGhvZCgnUFVUJyk7XG5cbi8qKlxuICogYEhFQURgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEhFQUQgPSBtYWtlTWV0aG9kKCdIRUFEJyk7XG5cbi8qKlxuICogYFBBVENIYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQQVRDSCA9IG1ha2VNZXRob2QoJ1BBVENIJyk7XG5cbi8qKlxuICogYEpTT05QYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBKU09OUCA9IG1ha2VNZXRob2QoJ0pTT05QJyk7XG4iXX0=