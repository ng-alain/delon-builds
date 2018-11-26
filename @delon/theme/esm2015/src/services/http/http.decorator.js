/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injector } from '@angular/core';
import { throwError } from 'rxjs';
import { ACLService } from '@delon/acl';
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
/**
 * @record
 */
function ParamType() { }
/** @type {?} */
ParamType.prototype.key;
/** @type {?} */
ParamType.prototype.index;
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
/** *
 * URL路由参数
 * - 有效范围：方法参数
  @type {?} */
export const Path = makeParam('path');
/** *
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
  @type {?} */
export const Query = makeParam('query');
/** *
 * 参数 `Body`
 * - 有效范围：方法参数
  @type {?} */
export const Body = makeParam('body')();
/** *
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
  @type {?} */
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
/** *
 * `OPTIONS` 请求
 * - 有效范围：方法
  @type {?} */
export const OPTIONS = makeMethod('OPTIONS');
/** *
 * `GET` 请求
 * - 有效范围：方法
  @type {?} */
export const GET = makeMethod('GET');
/** *
 * `POST` 请求
 * - 有效范围：方法
  @type {?} */
export const POST = makeMethod('POST');
/** *
 * `DELETE` 请求
 * - 有效范围：方法
  @type {?} */
export const DELETE = makeMethod('DELETE');
/** *
 * `PUT` 请求
 * - 有效范围：方法
  @type {?} */
export const PUT = makeMethod('PUT');
/** *
 * `HEAD` 请求
 * - 有效范围：方法
  @type {?} */
export const HEAD = makeMethod('HEAD');
/** *
 * `PATCH` 请求
 * - 有效范围：方法
  @type {?} */
export const PATCH = makeMethod('PATCH');
/** *
 * `JSONP` 请求
 * - 有效范围：方法
  @type {?} */
export const JSONP = makeMethod('JSONP');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFNUMsTUFBTTs7OztJQUNKLFlBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FBSTs7OztZQVIvQyxRQUFRLHVCQVFWLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1COUIsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDOzs7Ozs7QUFFaEMsa0JBQWtCLE1BQVcsRUFBRSxHQUFHLEdBQUcsUUFBUTs7SUFDM0MsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7OztBQU1ELE1BQU0sa0JBQWtCLEdBQVc7SUFDakMsT0FBTyxVQUNMLE1BQWM7O1FBRWQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztLQUNmLENBQUM7Q0FDSDs7Ozs7OztBQU1ELE1BQU0sc0JBQ0osT0FJSztJ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RixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDckUsTUFBTSxFQUNOLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUN0RCxPQUFPLEVBQ1YsQ0FBQzthQUNKLENBQUM7WUFFRixPQUFPLFVBQVUsQ0FBQztTQUNuQixDQUFDO0tBQ0gsQ0FBQztDQUNIOzs7OztBQU1ELGFBQWEsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7QUFNN0MsYUFBYSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztBQU1yQyxhQUFhLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0FBTXZDLGFBQWEsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7QUFNM0MsYUFBYSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztBQU1yQyxhQUFhLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0FBTXZDLGFBQWEsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7QUFNekMsYUFBYSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFwaSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cE9wdGlvbnMge1xuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAZGVsb24vYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQYXJhbVR5cGUge1xuICBrZXk6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBba2V5OiBudW1iZXJdOiBhbnk7XG59XG5cbmNvbnN0IHBhcmFtS2V5ID0gYF9fYXBpX3BhcmFtc2A7XG5cbmZ1bmN0aW9uIHNldFBhcmFtKHRhcmdldDogYW55LCBrZXkgPSBwYXJhbUtleSkge1xuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcyA9IHRhcmdldFtrZXldID0ge307XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiDpu5jorqTln7rlh4ZVUkxcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbjxUQ2xhc3MgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiBCYXNlQXBpIH0+KFxuICAgIHRhcmdldDogVENsYXNzLFxuICApOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbjxUQ2xhc3MgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiBCYXNlQXBpIH0+KFxuICAgIHRhcmdldDogVENsYXNzLFxuICApOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXk/OiBzdHJpbmcsIC4uLmV4dHJhT3B0aW9uczogYW55W10pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBCYXNlQXBpLCBwcm9wZXJ0eUtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbShzZXRQYXJhbSh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgICBsZXQgdFBhcmFtcyA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiB0UGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRQYXJhbXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIC4uLmV4dHJhT3B0aW9ucyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogVVJM6Lev55Sx5Y+C5pWwXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUGF0aCA9IG1ha2VQYXJhbSgncGF0aCcpO1xuXG4vKipcbiAqIFVSTCDlj4LmlbAgYFF1ZXJ5U3RyaW5nYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gbWFrZVBhcmFtKCdxdWVyeScpO1xuXG4vKipcbiAqIOWPguaVsCBgQm9keWBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBCb2R5ID0gbWFrZVBhcmFtKCdib2R5JykoKTtcblxuLyoqXG4gKiDlj4LmlbAgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxuICovXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IG1ha2VQYXJhbSgnaGVhZGVycycpO1xuXG5mdW5jdGlvbiBtYWtlTWV0aG9kKG1ldGhvZDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbih1cmw6IHN0cmluZyA9ICcnLCBvcHRpb25zPzogSHR0cE9wdGlvbnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGFyZ2V0OiBCYXNlQXBpLFxuICAgICAgdGFyZ2V0S2V5Pzogc3RyaW5nLFxuICAgICAgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgICApID0+IHtcbiAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XG4gICAgICAgIGlmIChodHRwID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgYE5vdCBmb3VuZCAnX0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnQWxhaW5UaGVtZU1vZHVsZScgJiYgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFzZURhdGEgPSBzZXRQYXJhbSh0aGlzKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNldFBhcmFtKGJhc2VEYXRhLCB0YXJnZXRLZXkpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gdXJsIHx8ICcnO1xuICAgICAgICByZXF1ZXN0VXJsID0gW1xuICAgICAgICAgIGJhc2VEYXRhLmJhc2VVcmwgfHwgJycsXG4gICAgICAgICAgcmVxdWVzdFVybC5zdGFydHNXaXRoKCcvJykgPyByZXF1ZXN0VXJsLnN1YnN0cigxKSA6IHJlcXVlc3RVcmwsXG4gICAgICAgIF0uam9pbignLycpO1xuICAgICAgICAvLyBmaXggbGFzdCBzcGxpdFxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnN1YnN0cigwLCByZXF1ZXN0VXJsLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYWNsKSB7XG4gICAgICAgICAgY29uc3QgYWNsU3J2OiBBQ0xTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQUNMU2VydmljZSwgbnVsbCk7XG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogYEZyb20gSHR0cCBEZWNvcmF0b3JgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmFjbDtcbiAgICAgICAgfVxuXG4gICAgICAgIChkYXRhLnBhdGggfHwgW10pLmZvckVhY2goKGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UoXG4gICAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtpLmtleX1gLCAnZycpLFxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHAsIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSAoZGF0YS5oZWFkZXJzIHx8IFtdKS5yZWR1Y2UoKHAsIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTpcbiAgICAgICAgICAgIGRhdGEuYm9keSAmJiBkYXRhLmJvZHkubGVuZ3RoID4gMCA/IGFyZ3NbZGF0YS5ib2R5WzBdLmluZGV4XSA6IG51bGwsXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGJhc2VEYXRhLmJhc2VIZWFkZXJzLCBoZWFkZXJzKSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogYE9QVElPTlNgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IE9QVElPTlMgPSBtYWtlTWV0aG9kKCdPUFRJT05TJyk7XG5cbi8qKlxuICogYEdFVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgR0VUID0gbWFrZU1ldGhvZCgnR0VUJyk7XG5cbi8qKlxuICogYFBPU1RgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBtYWtlTWV0aG9kKCdQT1NUJyk7XG5cbi8qKlxuICogYERFTEVURWAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgREVMRVRFID0gbWFrZU1ldGhvZCgnREVMRVRFJyk7XG5cbi8qKlxuICogYFBVVGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUFVUID0gbWFrZU1ldGhvZCgnUFVUJyk7XG5cbi8qKlxuICogYEhFQURgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEhFQUQgPSBtYWtlTWV0aG9kKCdIRUFEJyk7XG5cbi8qKlxuICogYFBBVENIYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQQVRDSCA9IG1ha2VNZXRob2QoJ1BBVENIJyk7XG5cbi8qKlxuICogYEpTT05QYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBKU09OUCA9IG1ha2VNZXRob2QoJ0pTT05QJyk7XG4iXX0=