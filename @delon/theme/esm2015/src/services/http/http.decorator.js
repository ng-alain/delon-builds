import { Inject, Injectable, Injector } from '@angular/core';
import { ACLService } from '@delon/acl';
import { throwError } from 'rxjs';
import { _HttpClient } from './http.client';
/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \@Injectable()
 * class DataService extends BaseApi {}
 * ```
 */
export class BaseApi {
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
const paramKey = `__api_params`;
function setParam(target, key = paramKey) {
    let params = target[key];
    if (typeof params === 'undefined') {
        params = target[key] = {};
    }
    return params;
}
/**
 * 默认基准URL
 * - 有效范围：类
 */
export function BaseUrl(url) {
    return function (target) {
        const params = setParam(target.prototype);
        params.baseUrl = url;
        return target;
    };
}
/**
 * 默认 `headers`
 * - 有效范围：类
 */
export function BaseHeaders(headers) {
    return function (target) {
        const params = setParam(target.prototype);
        params.baseHeaders = headers;
        return target;
    };
}
function makeParam(paramName) {
    return function (key) {
        return function (target, propertyKey, index) {
            const params = setParam(setParam(target), propertyKey);
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key,
                index,
            });
        };
    };
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 */
export const Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 */
export const Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 */
export const Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 */
export const Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 */
export const Payload = makeParam('payload')();
function getValidArgs(data, key, args) {
    if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
        return undefined;
    }
    return args[data[key][0].index];
}
function genBody(data, payload) {
    if (Array.isArray(data) || Array.isArray(payload)) {
        // tslint:disable-next-line:prefer-object-spread
        return Object.assign([], data, payload);
    }
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign({}, data, payload);
}
function makeMethod(method) {
    return function (url = '', options) {
        return (_target, targetKey, descriptor) => {
            descriptor.value = function (...args) {
                options = options || {};
                const injector = this.injector;
                const http = injector.get(_HttpClient, null);
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
                }
                const baseData = setParam(this);
                const data = setParam(baseData, targetKey);
                let requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
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
                (data.path || [])
                    .filter(w => typeof args[w.index] !== 'undefined')
                    .forEach((i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                });
                requestUrl = requestUrl.replace(/\^\^/g, `:`);
                const params = (data.query || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                const headers = (data.headers || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                if (method === 'FORM') {
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                }
                const payload = getValidArgs(data, 'payload', args);
                const supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
            };
            return descriptor;
        };
    };
}
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 */
export const OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 */
export const GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 */
export const POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 */
export const DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 */
export const PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 */
export const HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 */
export const PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 */
export const JSONP = makeMethod('JSONP');
/**
 * `FORM` 请求
 * - 有效范围：方法
 */
export const FORM = makeMethod('FORM');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUM7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFnQixPQUFPO0lBQzNCLFlBQXdDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7WUFGL0QsVUFBVTs7OztZQWJrQixRQUFRLHVCQWV0QixNQUFNLFNBQUMsUUFBUTs7QUFtQjlCLE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQztBQUVoQyxTQUFTLFFBQVEsQ0FBQyxNQUFXLEVBQUUsTUFBYyxRQUFRO0lBQ25ELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUMzQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxVQUEwRCxNQUFjO1FBQzdFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsT0FBTyxN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VSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZDOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFM0M7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVyQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZDOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFekM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV6Qzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG9ubHktYXJyb3ctZnVuY3Rpb25zIHR5cGVkZWZcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnLi9odHRwLmNsaWVudCc7XG5cbi8qKlxuICogRXZlcnkgaHR0cCBkZWNvcmF0b3IgbXVzdCBiZSBiYXNlZCBvbiBgQmFzZUFQSWAsIExpa2UgdGhpczpcbiAqIGBgYHRzXG4gKiBcXEBJbmplY3RhYmxlKClcbiAqIGNsYXNzIERhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZUFwaSB7fVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQXBpIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChJbmplY3RvcikgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdHRwT3B0aW9ucyB7XG4gIC8qKiBBQ0zphY3nva7vvIzoi6Xlr7zlhaUgYEBkZWxvbi9hY2xgIOaXtuiHquWKqOacieaViO+8jOetieWQjOS6jiBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBhcmFtVHlwZSB7XG4gIGtleTogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIFtrZXk6IG51bWJlcl06IGFueTtcbn1cblxuY29uc3QgcGFyYW1LZXkgPSBgX19hcGlfcGFyYW1zYDtcblxuZnVuY3Rpb24gc2V0UGFyYW0odGFyZ2V0OiBhbnksIGtleTogc3RyaW5nID0gcGFyYW1LZXkpOiBhbnkge1xuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcyA9IHRhcmdldFtrZXldID0ge307XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiDpu5jorqTln7rlh4ZVUkxcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlVXJsID0gdXJsO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59XG5cbi8qKlxuICog6buY6K6kIGBoZWFkZXJzYFxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VIZWFkZXJzKFxuICBoZWFkZXJzOlxuICAgIHwgSHR0cEhlYWRlcnNcbiAgICB8IHtcbiAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICB9LFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xuICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmFtKHBhcmFtTmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IEJhc2VBcGksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNldFBhcmFtKHNldFBhcmFtKHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRQYXJhbXMgPSBwYXJhbXNbcGFyYW1OYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdFBhcmFtcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICBpbmRleCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qKlxuICogVVJM6Lev55Sx5Y+C5pWwXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICovXG5leHBvcnQgY29uc3QgUGF0aCA9IG1ha2VQYXJhbSgncGF0aCcpO1xuXG4vKipcbiAqIFVSTCDlj4LmlbAgYFF1ZXJ5U3RyaW5nYFxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gbWFrZVBhcmFtKCdxdWVyeScpO1xuXG4vKipcbiAqIOWPguaVsCBgQm9keWBcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXG4gKi9cbmV4cG9ydCBjb25zdCBCb2R5ID0gbWFrZVBhcmFtKCdib2R5JykoKTtcblxuLyoqXG4gKiDlj4LmlbAgYGhlYWRlcnNgXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxuICovXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IG1ha2VQYXJhbSgnaGVhZGVycycpO1xuXG4vKipcbiAqIFJlcXVlc3QgUGF5bG9hZFxuICogLSBTdXBwb3J0ZWQgYm9keSAobGlrZWBQT1NUYCwgYFBVVGApIGFzIGEgYm9keSBkYXRhLCBlcXVpdmFsZW50IHRvIGBAQm9keWBcbiAqIC0gTm90IHN1cHBvcnRlZCBib2R5IChsaWtlIGBHRVRgLCBgREVMRVRFYCBldGMpIGFzIGEgYFF1ZXJ5U3RyaW5nYFxuICovXG5leHBvcnQgY29uc3QgUGF5bG9hZCA9IG1ha2VQYXJhbSgncGF5bG9hZCcpKCk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkQXJncyhkYXRhOiBhbnksIGtleTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHt9IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFkYXRhW2tleV0gfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSB8fCBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcmdzW2RhdGFba2V5XVswXS5pbmRleF07XG59XG5cbmZ1bmN0aW9uIGdlbkJvZHkoZGF0YT86IGFueSwgcGF5bG9hZD86IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgZGF0YSwgcGF5bG9hZCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IHR5cGUgTUVUSE9EX1RZUEUgPSAnT1BUSU9OUycgfCAnR0VUJyB8ICdQT1NUJyB8ICdERUxFVEUnIHwgJ1BVVCcgfCAnSEVBRCcgfCAnUEFUQ0gnIHwgJ0pTT05QJyB8ICdGT1JNJztcblxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IE1FVEhPRF9UWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgcmV0dXJuIChfdGFyZ2V0OiBCYXNlQXBpLCB0YXJnZXRLZXk/OiBzdHJpbmcsIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICAgIGRlc2NyaXB0b3IhLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSAodGhpcyBhcyBOelNhZmVBbnkpLmluamVjdG9yIGFzIEluamVjdG9yO1xuICAgICAgICBjb25zdCBodHRwID0gaW5qZWN0b3IuZ2V0KF9IdHRwQ2xpZW50LCBudWxsKSBhcyBfSHR0cENsaWVudDtcbiAgICAgICAgaWYgKGh0dHAgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vdCBmb3VuZCAnX0h0dHBDbGllbnQnLCBZb3UgY2FuIGltcG9ydCAnQWxhaW5UaGVtZU1vZHVsZScgJiYgJ0h0dHBDbGllbnRNb2R1bGUnIGluIHlvdXIgcm9vdCBtb2R1bGUuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXNlRGF0YSA9IHNldFBhcmFtKHRoaXMpO1xuICAgICAgICBjb25zdCBkYXRhID0gc2V0UGFyYW0oYmFzZURhdGEsIHRhcmdldEtleSk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSB1cmwgfHwgJyc7XG4gICAgICAgIHJlcXVlc3RVcmwgPSBbYmFzZURhdGEuYmFzZVVybCB8fCAnJywgcmVxdWVzdFVybC5zdGFydHNXaXRoKCcvJykgPyByZXF1ZXN0VXJsLnN1YnN0cigxKSA6IHJlcXVlc3RVcmxdLmpvaW4oJy8nKTtcbiAgICAgICAgLy8gZml4IGxhc3Qgc3BsaXRcbiAgICAgICAgaWYgKHJlcXVlc3RVcmwubGVuZ3RoID4gMSAmJiByZXF1ZXN0VXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICByZXF1ZXN0VXJsID0gcmVxdWVzdFVybC5zdWJzdHIoMCwgcmVxdWVzdFVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmFjbCkge1xuICAgICAgICAgIGNvbnN0IGFjbFNydiA9IGluamVjdG9yLmdldChBQ0xTZXJ2aWNlLCBudWxsKTtcbiAgICAgICAgICBpZiAoYWNsU3J2ICYmICFhY2xTcnYuY2FuKG9wdGlvbnMuYWNsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe1xuICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBIdHRwIERlY29yYXRvcmAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuYWNsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvOjovZywgJ15eJyk7XG4gICAgICAgICgoZGF0YS5wYXRoIGFzIFBhcmFtVHlwZVtdKSB8fCBbXSlcbiAgICAgICAgICAuZmlsdGVyKHcgPT4gdHlwZW9mIGFyZ3Nbdy5pbmRleF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgIC5mb3JFYWNoKChpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7aS5rZXl9YCwgJ2cnKSwgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3NbaS5pbmRleF0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvXFxeXFxeL2csIGA6YCk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRhdGEucXVlcnkgfHwgW10pLnJlZHVjZSgocDogTnpTYWZlQW55LCBpOiBQYXJhbVR5cGUpID0+IHtcbiAgICAgICAgICBwW2kua2V5XSA9IGFyZ3NbaS5pbmRleF07XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gKGRhdGEuaGVhZGVycyB8fCBbXSkucmVkdWNlKChwOiBOelNhZmVBbnksIGk6IFBhcmFtVHlwZSkgPT4ge1xuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGlmIChtZXRob2QgPT09ICdGT1JNJykge1xuICAgICAgICAgIGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0VmFsaWRBcmdzKGRhdGEsICdwYXlsb2FkJywgYXJncyk7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEJvZHkgPSBtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XG4gICAgICAgICAgYm9keTogc3VwcG9ydGVkQm9keSA/IGdlbkJvZHkoZ2V0VmFsaWRBcmdzKGRhdGEsICdib2R5JywgYXJncyksIHBheWxvYWQpIDogbnVsbCxcbiAgICAgICAgICBwYXJhbXM6ICFzdXBwb3J0ZWRCb2R5ID8geyAuLi5wYXJhbXMsIC4uLnBheWxvYWQgfSA6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIGBPUFRJT05TYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBPUFRJT05TID0gbWFrZU1ldGhvZCgnT1BUSU9OUycpO1xuXG4vKipcbiAqIGBHRVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IEdFVCA9IG1ha2VNZXRob2QoJ0dFVCcpO1xuXG4vKipcbiAqIGBQT1NUYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBQT1NUID0gbWFrZU1ldGhvZCgnUE9TVCcpO1xuXG4vKipcbiAqIGBERUxFVEVgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IG1ha2VNZXRob2QoJ0RFTEVURScpO1xuXG4vKipcbiAqIGBQVVRgIOivt+axglxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IFBVVCA9IG1ha2VNZXRob2QoJ1BVVCcpO1xuXG4vKipcbiAqIGBIRUFEYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBIRUFEID0gbWFrZU1ldGhvZCgnSEVBRCcpO1xuXG4vKipcbiAqIGBQQVRDSGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBtYWtlTWV0aG9kKCdQQVRDSCcpO1xuXG4vKipcbiAqIGBKU09OUGAg6K+35rGCXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxuICovXG5leHBvcnQgY29uc3QgSlNPTlAgPSBtYWtlTWV0aG9kKCdKU09OUCcpO1xuXG4vKipcbiAqIGBGT1JNYCDor7fmsYJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBGT1JNID0gbWFrZU1ldGhvZCgnRk9STScpO1xuIl19