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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUMsTUFBTSxPQUFnQixPQUFPOzs7O0lBQzNCLFlBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOzs7O1lBUGhELFFBQVEsdUJBT1YsTUFBTSxTQUFDLFFBQVE7Ozs7SUFBaEIsMkJBQThDOzs7OztBQUc1RCxpQ0FPQzs7Ozs7O0lBTEMsMEJBQVU7O0lBQ1YsOEJBQXlDOztJQUN6QyxtQ0FBd0Q7O0lBQ3hELHFDQUF5Qjs7SUFDekIsc0NBQTBCOzs7OztBQUc1Qix3QkFLQzs7O0lBSkMsd0JBQVk7O0lBQ1osMEJBQWM7Ozs7O01BS1YsUUFBUSxHQUFHLGNBQWM7Ozs7OztBQUUvQixTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsR0FBRyxHQUFHLFFBQVE7O1FBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3hCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBVztJQUNqQyxPQUFPLFVBQ0wsTUFBYzs7Y0FFUixNQUFNLEdBQUcsUUFBUSxD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SyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBRU4sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLGtCQUNwQyxJQUFJLEVBQ0YsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3JFLE1BQU0sRUFDTixPQUFPLG9CQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUssT0FBTyxLQUMzQyxPQUFPLEVBQ1YsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUVGLE9BQU8sVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7OztBQU1ELE1BQU0sT0FBTyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0FBTTVDLE1BQU0sT0FBTyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FBTXRDLE1BQU0sT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBTTFDLE1BQU0sT0FBTyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FBTXRDLE1BQU0sT0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sT0FBTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSBuby1pbnZhbGlkLXRoaXNcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwaSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBPcHRpb25zIHtcbiAgLyoqIEFDTOmFjee9ru+8jOiLpeWvvOWFpSBgQGRlbG9uL2FjbGAg5pe26Ieq5Yqo5pyJ5pWI77yM562J5ZCM5LqOIGBBQ0xTZXJ2aWNlLmNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKWAg5Y+C5pWw5YC8ICovXG4gIGFjbD86IGFueTtcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUGFyYW1UeXBlIHtcbiAga2V5OiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgW2tleTogbnVtYmVyXTogYW55O1xufVxuXG5jb25zdCBwYXJhbUtleSA9IGBfX2FwaV9wYXJhbXNgO1xuXG5mdW5jdGlvbiBzZXRQYXJhbSh0YXJnZXQ6IGFueSwga2V5ID0gcGFyYW1LZXkpIHtcbiAgbGV0IHBhcmFtcyA9IHRhcmdldFtrZXldO1xuICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwYXJhbXMgPSB0YXJnZXRba2V5XSA9IHt9O1xuICB9XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbi8qKlxuICog6buY6K6k5Z+65YeGVVJMXG4gKiAtIOacieaViOiMg+WbtO+8muexu1xuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZVVybCh1cmw6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gPFRDbGFzcyBleHRlbmRzIHsgbmV3KC4uLmFyZ3M6IGFueVtdKTogQmFzZUFwaSB9PihcbiAgICB0YXJnZXQ6IFRDbGFzcyxcbiAgKTogVENsYXNzIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbSh0YXJnZXQucHJvdG90eXBlKTtcbiAgICBwYXJhbXMuYmFzZVVybCA9IHVybDtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xufVxuXG4vKipcbiAqIOm7mOiupCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlSGVhZGVycyhcbiAgaGVhZGVyczpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgeyBuZXcoLi4uYXJnczogYW55W10pOiBCYXNlQXBpIH0+KFxuICAgIHRhcmdldDogVENsYXNzLFxuICApOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nLCAuLi5leHRyYU9wdGlvbnM6IGFueVtdKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgLi4uZXh0cmFPcHRpb25zLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBVUkzot6/nlLHlj4LmlbBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBQYXRoID0gbWFrZVBhcmFtKCdwYXRoJyk7XG5cbi8qKlxuICogVVJMIOWPguaVsCBgUXVlcnlTdHJpbmdgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUXVlcnkgPSBtYWtlUGFyYW0oJ3F1ZXJ5Jyk7XG5cbi8qKlxuICog5Y+C5pWwIGBCb2R5YFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IEJvZHkgPSBtYWtlUGFyYW0oJ2JvZHknKSgpO1xuXG4vKipcbiAqIOWPguaVsCBgaGVhZGVyc2BcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKiAtIOWQiOW5tiBgQmFzZUhlYWRlcnNgXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJzID0gbWFrZVBhcmFtKCdoZWFkZXJzJyk7XG5cbmZ1bmN0aW9uIG1ha2VNZXRob2QobWV0aG9kOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh1cmw6IHN0cmluZyA9ICcnLCBvcHRpb25zPzogSHR0cE9wdGlvbnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGFyZ2V0OiBCYXNlQXBpLFxuICAgICAgdGFyZ2V0S2V5Pzogc3RyaW5nLFxuICAgICAgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICApID0+IHtcbiAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBjb25zdCBodHRwID0gdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQsIG51bGwpO1xuICAgICAgICBpZiAoaHR0cCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgIGBOb3QgZm91bmQgJ19IdHRwQ2xpZW50JywgWW91IGNhbiBpbXBvcnQgJ0FsYWluVGhlbWVNb2R1bGUnICYmICdIdHRwQ2xpZW50TW9kdWxlJyBpbiB5b3VyIHJvb3QgbW9kdWxlLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gc2V0UGFyYW0odGhpcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzZXRQYXJhbShiYXNlRGF0YSwgdGFyZ2V0S2V5KTtcblxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCB8fCAnJztcbiAgICAgICAgcmVxdWVzdFVybCA9IFtcbiAgICAgICAgICBiYXNlRGF0YS5iYXNlVXJsIHx8ICcnLFxuICAgICAgICAgIHJlcXVlc3RVcmwuc3RhcnRzV2l0aCgnLycpID8gcmVxdWVzdFVybC5zdWJzdHIoMSkgOiByZXF1ZXN0VXJsLFxuICAgICAgICBdLmpvaW4oJy8nKTtcbiAgICAgICAgLy8gZml4IGxhc3Qgc3BsaXRcbiAgICAgICAgaWYgKHJlcXVlc3RVcmwubGVuZ3RoID4gMSAmJiByZXF1ZXN0VXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5zdWJzdHIoMCwgcmVxdWVzdFVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjbCkge1xuICAgICAgICAgIGNvbnN0IGFjbFNydjogQUNMU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFDTFNlcnZpY2UsIG51bGwpO1xuICAgICAgICAgIGlmIChhY2xTcnYgJiYgIWFjbFNydi5jYW4ob3B0aW9ucy5hY2wpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7XG4gICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcbiAgICAgICAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGBGcm9tIEh0dHAgRGVjb3JhdG9yYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5hY2w7XG4gICAgICAgIH1cblxuICAgICAgICAoZGF0YS5wYXRoIHx8IFtdKS5mb3JFYWNoKChpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChgOiR7aS5rZXl9YCwgJ2cnKSxcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2kuaW5kZXhdKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSAoZGF0YS5xdWVyeSB8fCBbXSkucmVkdWNlKChwLCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwLCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KG1ldGhvZCwgcmVxdWVzdFVybCwge1xuICAgICAgICAgIGJvZHk6XG4gICAgICAgICAgICBkYXRhLmJvZHkgJiYgZGF0YS5ib2R5Lmxlbmd0aCA+IDAgPyBhcmdzW2RhdGEuYm9keVswXS5pbmRleF0gOiBudWxsLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuIl19