/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { ACLService } from '@delon/acl';
import { throwError } from 'rxjs';
import { _HttpClient } from './http.client';
/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \\@Injectable()
 * class DataService extends BaseApi {}
 * ```
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
BaseApi.decorators = [
    { type: Injectable }
];
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
                if (method === 'FORM') {
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                }
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
/**
 * `FORM` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const FORM = makeMethod('FORM');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBVTVDLE1BQU0sT0FBZ0IsT0FBTzs7OztJQUMzQixZQUF3QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7O1lBRi9ELFVBQVU7Ozs7WUFia0IsUUFBUSx1QkFldEIsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7SUFBaEIsMkJBQThDOzs7OztBQUc1RCxpQ0FPQzs7Ozs7O0lBTEMsMEJBQVU7O0lBQ1YsOEJBQXlDOztJQUN6QyxtQ0FBd0Q7O0lBQ3hELHFDQUF5Qjs7SUFDekIsc0NBQTBCOzs7OztBQUc1Qix3QkFLQzs7O0lBSkMsd0JBQVk7O0lBQ1osMEJBQWM7Ozs7O01BS1YsUUFBUSxHQUFHLGNBQWM7Ozs7OztBQUUvQixTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsR0FBRyxHQUFHLFFBQVE7O1FBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxPQUFPLENB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LElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUFNdEMsTUFBTSxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDOzs7Ozs7QUFNMUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOzs7Ozs7QUFNcEMsTUFBTSxPQUFPLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUFNdEMsTUFBTSxPQUFPLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOzs7Ozs7QUFNeEMsTUFBTSxPQUFPLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOzs7Ozs7QUFNeEMsTUFBTSxPQUFPLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG9ubHktYXJyb3ctZnVuY3Rpb25zXG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xuXG4vKipcbiAqIEV2ZXJ5IGh0dHAgZGVjb3JhdG9yIG11c3QgYmUgYmFzZWQgb24gYEJhc2VBUElgLCBMaWtlIHRoaXM6XG4gKiBgYGB0c1xuICogXFxASW5qZWN0YWJsZSgpXG4gKiBjbGFzcyBEYXRhU2VydmljZSBleHRlbmRzIEJhc2VBcGkge31cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwaSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cE9wdGlvbnMge1xuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAZGVsb24vYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYXJhbVR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmNvbnN0IHBhcmFtS2V5ID0gYF9fYXBpX3BhcmFtc2A7XG5cbmZ1bmN0aW9uIHNldFBhcmFtKHRhcmdldDogYW55LCBrZXkgPSBwYXJhbUtleSkge1xuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcyA9IHRhcmdldFtrZXldID0ge307XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiDpu5jorqTln7rlh4ZVUkxcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogVVJM6Lev55Sx5Y+C5pWwXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUGF0aCA9IG1ha2VQYXJhbSgncGF0aCcpO1xuXG4vKipcbiAqIFVSTCDlj4LmlbAgYFF1ZXJ5U3RyaW5nYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gbWFrZVBhcmFtKCdxdWVyeScpO1xuXG4vKipcbiAqIOWPguaVsCBgQm9keWBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBCb2R5ID0gbWFrZVBhcmFtKCdib2R5JykoKTtcblxuLyoqXG4gKiDlj4LmlbAgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxuICovXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IG1ha2VQYXJhbSgnaGVhZGVycycpO1xuXG4vKipcbiAqIFJlcXVlc3QgUGF5bG9hZFxuICogLSBTdXBwb3J0ZWQgYm9keSAobGlrZWBQT1NUYCwgYFBVVGApIGFzIGEgYm9keSBkYXRhLCBlcXVpdmFsZW50IHRvIGBAQm9keWBcbiAqIC0gTm90IHN1cHBvcnRlZCBib2R5IChsaWtlIGBHRVRgLCBgREVMRVRFYCBldGMpIGFzIGEgYFF1ZXJ5U3RyaW5nYFxuICovXG5leHBvcnQgY29uc3QgUGF5bG9hZCA9IG1ha2VQYXJhbSgncGF5bG9hZCcpKCk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkQXJncyhkYXRhOiBhbnksIGtleTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHt9IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFkYXRhW2tleV0gfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSB8fCBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcmdzW2RhdGFba2V5XVswXS5pbmRleF07XG59XG5cbmZ1bmN0aW9uIGdlbkJvZHkoZGF0YT86IGFueSwgcGF5bG9hZD86IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgZGF0YSwgcGF5bG9hZCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IHR5cGUgTUVUSE9EX1RZUEUgPSAnT1BUSU9OUycgfCAnR0VUJyB8ICdQT1NUJyB8ICdERUxFVEUnIHwgJ1BVVCcgfCAnSEVBRCcgfCAnUEFUQ0gnIHwgJ0pTT05QJyB8ICdGT1JNJztcblxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IE1FVEhPRF9UWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgcmV0dXJuIChfdGFyZ2V0OiBCYXNlQXBpLCB0YXJnZXRLZXk/OiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgIGRlc2NyaXB0b3IhLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSAodGhpcyBhcyBOelNhZmVBbnkpLmluamVjdG9yIGFzIEluamVjdG9yO1xuICAgICAgICBjb25zdCBodHRwID0gaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKSBhcyBfSHR0cENsaWVudDtcbiAgICAgICAgaWYgKGh0dHAgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vdCBmb3VuZCAnX0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnQWxhaW5UaGVtZU1vZHVsZScgJiYgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXNlRGF0YSA9IHNldFBhcmFtKHRoaXMpO1xuICAgICAgICBjb25zdCBkYXRhID0gc2V0UGFyYW0oYmFzZURhdGEsIHRhcmdldEtleSk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSB1cmwgfHwgJyc7XG4gICAgICAgIHJlcXVlc3RVcmwgPSBbYmFzZURhdGEuYmFzZVVybCB8fCAnJywgcmVxdWVzdFVybC5zdGFydHNXaXRoKCcvJykgPyByZXF1ZXN0VXJsLnN1YnN0cigxKSA6IHJlcXVlc3RVcmxdLmpvaW4oJy8nKTtcbiAgICAgICAgLy8gZml4IGxhc3Qgc3BsaXRcbiAgICAgICAgaWYgKHJlcXVlc3RVcmwubGVuZ3RoID4gMSAmJiByZXF1ZXN0VXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5zdWJzdHIoMCwgcmVxdWVzdFVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjbCkge1xuICAgICAgICAgIGNvbnN0IGFjbFNydiA9IGluamVjdG9yLmdldChBQ0xTZXJ2aWNlLCBudWxsKTtcbiAgICAgICAgICBpZiAoYWNsU3J2ICYmICFhY2xTcnYuY2FuKG9wdGlvbnMuYWNsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe1xuICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBIdHRwIERlY29yYXRvcmAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuYWNsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvOjovZywgJ15eJyk7XG4gICAgICAgICgoZGF0YS5wYXRoIGFzIFBhcmFtVHlwZVtdKSB8fCBbXSlcbiAgICAgICAgICAuZmlsdGVyKHcgPT4gdHlwZW9mIGFyZ3Nbdy5pbmRleF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgIC5mb3JFYWNoKChpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7aS5rZXl9YCwgJ2cnKSwgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvXFxeXFxeL2csIGA6YCk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRhdGEucXVlcnkgfHwgW10pLnJlZHVjZSgocDogTnpTYWZlQW55LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwOiBOelNhZmVBbnksIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGlmIChtZXRob2QgPT09ICdGT1JNJykge1xuICAgICAgICAgIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0VmFsaWRBcmdzKGRhdGEsICdwYXlsb2FkJywgYXJncyk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJvZHkgPSBtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTogc3VwcG9ydGVkQm9keSA/IGdlbkJvZHkoZ2V0VmFsaWRBcmdzKGRhdGEsICdib2R5JywgYXJncyksIHBheWxvYWQpIDogbnVsbCxcbiAgICAgICAgICBwYXJhbXM6ICFzdXBwb3J0ZWRCb2R5ID8geyAuLi5wYXJhbXMsIC4uLnBheWxvYWQgfSA6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuXG4vKipcbiAqIGBGT1JNYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JNID0gbWFrZU1ldGhvZCgnRk9STScpO1xuIl19