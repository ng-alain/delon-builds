/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    /** @type {?} */
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
    return function (target) {
        /** @type {?} */
        const params = setParam(target.prototype);
        params.baseUrl = url;
        return target;
    };
}
/**
 * 默认 `headers`
 * - 有效范围：类
 * @param {?} headers
 * @return {?}
 */
export function BaseHeaders(headers) {
    return function (target) {
        /** @type {?} */
        const params = setParam(target.prototype);
        params.baseHeaders = headers;
        return target;
    };
}
/**
 * @param {?} paramName
 * @return {?}
 */
function makeParam(paramName) {
    return function (key, ...extraOptions) {
        return function (target, propertyKey, index) {
            /** @type {?} */
            const params = setParam(setParam(target), propertyKey);
            /** @type {?} */
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push(Object.assign({ key,
                index }, extraOptions));
        };
    };
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
 * @param {?} method
 * @return {?}
 */
function makeMethod(method) {
    return function (url = '', options) {
        return (target, targetKey, descriptor) => {
            descriptor.value = function (...args) {
                options = options || {};
                /** @type {?} */
                const http = this.injector.get(_HttpClient, null);
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
                }
                /** @type {?} */
                const baseData = setParam(this);
                /** @type {?} */
                const data = setParam(baseData, targetKey);
                /** @type {?} */
                let requestUrl = url || '';
                requestUrl = [
                    baseData.baseUrl || '',
                    requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl,
                ].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    /** @type {?} */
                    const aclSrv = this.injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: `From Http Decorator`,
                        });
                    }
                    delete options.acl;
                }
                (data.path || []).forEach((i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                });
                /** @type {?} */
                const params = (data.query || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                /** @type {?} */
                const headers = (data.headers || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                return http.request(method, requestUrl, Object.assign({ body: data.body && data.body.length > 0 ? args[data.body[0].index] : null, params, headers: Object.assign({}, baseData.baseHeaders, headers) }, options));
            };
            return descriptor;
        };
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUMsTUFBTSxPQUFnQixPQUFPOzs7O0lBQzNCLFlBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7O1lBUGhELFFBQVEsdUJBT1YsTUFBTSxTQUFDLFFBQVE7Ozs7SUFBaEIsMkJBQThDOzs7OztBQUc1RCxpQ0FPQzs7Ozs7O0lBTEMsMEJBQVU7O0lBQ1YsOEJBQXlDOztJQUN6QyxtQ0FBd0Q7O0lBQ3hELHFDQUF5Qjs7SUFDekIsc0NBQTBCOzs7OztBQUc1Qix3QkFLQzs7O0lBSkMsd0JBQVk7O0lBQ1osMEJBQWM7Ozs7O01BS1YsUUFBUSxHQUFHLGNBQWM7Ozs7OztBQUUvQixTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsR0FBRyxHQUFHLFFBQVE7O1FBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBVztJQUNqQyxPQUFPLFVBQ0wsTUFBYzs7Y0FFUixNQUFNLEdBQUcsUUFBUSxD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SyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBRU4sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLGtCQUNwQyxJQUFJLEVBQ0YsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3JFLE1BQU0sRUFDTixPQUFPLG9CQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUssT0FBTyxLQUMzQyxPQUFPLEVBQ1YsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUVGLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQU1ELE1BQU0sT0FBTyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0FBTTVDLE1BQU0sT0FBTyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FBTXRDLE1BQU0sT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBTTFDLE1BQU0sT0FBTyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FBTXRDLE1BQU0sT0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sT0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpc1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwLmNsaWVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQXBpIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChJbmplY3RvcikgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcikgeyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cE9wdGlvbnMge1xuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAZGVsb24vYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYXJhbVR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmNvbnN0IHBhcmFtS2V5ID0gYF9fYXBpX3BhcmFtc2A7XG5cbmZ1bmN0aW9uIHNldFBhcmFtKHRhcmdldDogYW55LCBrZXkgPSBwYXJhbUtleSkge1xuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcyA9IHRhcmdldFtrZXldID0ge307XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiDpu5jorqTln7rlh4ZVUkxcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiBCYXNlQXBpIH0+KFxuICAgIHRhcmdldDogVENsYXNzLFxuICApOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH0sXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUQ2xhc3MgZXh0ZW5kcyB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IEJhc2VBcGkgfT4oXG4gICAgdGFyZ2V0OiBUQ2xhc3MsXG4gICk6IFRDbGFzcyB7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0odGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgcGFyYW1zLmJhc2VIZWFkZXJzID0gaGVhZGVycztcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUGFyYW0ocGFyYW1OYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXk/OiBzdHJpbmcsIC4uLmV4dHJhT3B0aW9uczogYW55W10pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogQmFzZUFwaSwgcHJvcGVydHlLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0oc2V0UGFyYW0odGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgICAgbGV0IHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgdFBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdFBhcmFtcyA9IHBhcmFtc1twYXJhbU5hbWVdID0gW107XG4gICAgICB9XG4gICAgICB0UGFyYW1zLnB1c2goe1xuICAgICAgICBrZXksXG4gICAgICAgIGluZGV4LFxuICAgICAgICAuLi5leHRyYU9wdGlvbnMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIFVSTOi3r+eUseWPguaVsFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFBhdGggPSBtYWtlUGFyYW0oJ3BhdGgnKTtcblxuLyoqXG4gKiBVUkwg5Y+C5pWwIGBRdWVyeVN0cmluZ2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBRdWVyeSA9IG1ha2VQYXJhbSgncXVlcnknKTtcblxuLyoqXG4gKiDlj4LmlbAgYEJvZHlgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgQm9keSA9IG1ha2VQYXJhbSgnYm9keScpKCk7XG5cbi8qKlxuICog5Y+C5pWwIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqIC0g5ZCI5bm2IGBCYXNlSGVhZGVyc2BcbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSBtYWtlUGFyYW0oJ2hlYWRlcnMnKTtcblxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHVybDogc3RyaW5nID0gJycsIG9wdGlvbnM/OiBIdHRwT3B0aW9ucykge1xuICAgIHJldHVybiAoXG4gICAgICB0YXJnZXQ6IEJhc2VBcGksXG4gICAgICB0YXJnZXRLZXk/OiBzdHJpbmcsXG4gICAgICBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICkgPT4ge1xuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICAgIGlmIChodHRwID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgYE5vdCBmb3VuZCAnX0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnQWxhaW5UaGVtZU1vZHVsZScgJiYgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFzZURhdGEgPSBzZXRQYXJhbSh0aGlzKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNldFBhcmFtKGJhc2VEYXRhLCB0YXJnZXRLZXkpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gdXJsIHx8ICcnO1xuICAgICAgICByZXF1ZXN0VXJsID0gW1xuICAgICAgICAgIGJhc2VEYXRhLmJhc2VVcmwgfHwgJycsXG4gICAgICAgICAgcmVxdWVzdFVybC5zdGFydHNXaXRoKCcvJykgPyByZXF1ZXN0VXJsLnN1YnN0cigxKSA6IHJlcXVlc3RVcmwsXG4gICAgICAgIF0uam9pbignLycpO1xuICAgICAgICAvLyBmaXggbGFzdCBzcGxpdFxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnN1YnN0cigwLCByZXF1ZXN0VXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNsKSB7XG4gICAgICAgICAgY29uc3QgYWNsU3J2OiBBQ0xTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIChkYXRhLnBhdGggfHwgW10pLmZvckVhY2goKGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoXG4gICAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtpLmtleX1gLCAnZycpLFxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHAsIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSAoZGF0YS5oZWFkZXJzIHx8IFtdKS5yZWR1Y2UoKHAsIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTpcbiAgICAgICAgICAgIGRhdGEuYm9keSAmJiBkYXRhLmJvZHkubGVuZ3RoID4gMCA/IGFyZ3NbZGF0YS5ib2R5WzBdLmluZGV4XSA6IG51bGwsXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IHsgLi4uYmFzZURhdGEuYmFzZUhlYWRlcnMsIC4uLmhlYWRlcnMgfSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogYE9QVElPTlNgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IE9QVElPTlMgPSBtYWtlTWV0aG9kKCdPUFRJT05TJyk7XG5cbi8qKlxuICogYEdFVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgR0VUID0gbWFrZU1ldGhvZCgnR0VUJyk7XG5cbi8qKlxuICogYFBPU1RgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBtYWtlTWV0aG9kKCdQT1NUJyk7XG5cbi8qKlxuICogYERFTEVURWAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgREVMRVRFID0gbWFrZU1ldGhvZCgnREVMRVRFJyk7XG5cbi8qKlxuICogYFBVVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUFVUID0gbWFrZU1ldGhvZCgnUFVUJyk7XG5cbi8qKlxuICogYEhFQURgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEhFQUQgPSBtYWtlTWV0aG9kKCdIRUFEJyk7XG5cbi8qKlxuICogYFBBVENIYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQQVRDSCA9IG1ha2VNZXRob2QoJ1BBVENIJyk7XG5cbi8qKlxuICogYEpTT05QYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBKU09OUCA9IG1ha2VNZXRob2QoJ0pTT05QJyk7XG4iXX0=