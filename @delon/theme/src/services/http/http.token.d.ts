import { HttpContextToken } from '@angular/common/http';
/**
 * Whether to customize the handling of exception messages
 *
 * 是否自定义处理异常消息
 *
 * @example
 * this.http.post(`login`, {
 *  name: 'cipchk', pwd: '123456'
 * }, {
 *  context: new HttpContext()
 *              .set(ALLOW_ANONYMOUS, true)
 *              .set(CUSTOM_ERROR, true)
 * }).subscribe({
 *  next: console.log,
 *  error: console.log
 * });
 */
export declare const CUSTOM_ERROR: HttpContextToken<boolean>;
/**
 * Whether to ignore API prefixes
 *
 * 是否忽略API前缀
 *
 * @example
 * // When environment.api.baseUrl set '/api'
 *
 * this.http.get(`/path`) // Request Url: /api/path
 * this.http.get(`/path`, { context: new HttpContext().set(IGNORE_BASE_URL, true) }) // Request Url: /path
 */
export declare const IGNORE_BASE_URL: HttpContextToken<boolean>;
/**
 * Whether to return raw response body
 *
 * 是否原样返回请求Body
 */
export declare const RAW_BODY: HttpContextToken<boolean>;
