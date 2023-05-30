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
export const CUSTOM_ERROR = new HttpContextToken(() => false);
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
export const IGNORE_BASE_URL = new HttpContextToken(() => false);
/**
 * Whether to return raw response body
 *
 * 是否原样返回请求Body
 */
export const RAW_BODY = new HttpContextToken(() => false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAudG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5RDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFakU7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvbnRleHRUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGN1c3RvbWl6ZSB0aGUgaGFuZGxpbmcgb2YgZXhjZXB0aW9uIG1lc3NhZ2VzXG4gKlxuICog5piv5ZCm6Ieq5a6a5LmJ5aSE55CG5byC5bi45raI5oGvXG4gKlxuICogQGV4YW1wbGVcbiAqIHRoaXMuaHR0cC5wb3N0KGBsb2dpbmAsIHtcbiAqICBuYW1lOiAnY2lwY2hrJywgcHdkOiAnMTIzNDU2J1xuICogfSwge1xuICogIGNvbnRleHQ6IG5ldyBIdHRwQ29udGV4dCgpXG4gKiAgICAgICAgICAgICAgLnNldChBTExPV19BTk9OWU1PVVMsIHRydWUpXG4gKiAgICAgICAgICAgICAgLnNldChDVVNUT01fRVJST1IsIHRydWUpXG4gKiB9KS5zdWJzY3JpYmUoe1xuICogIG5leHQ6IGNvbnNvbGUubG9nLFxuICogIGVycm9yOiBjb25zb2xlLmxvZ1xuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBDVVNUT01fRVJST1IgPSBuZXcgSHR0cENvbnRleHRUb2tlbigoKSA9PiBmYWxzZSk7XG5cbi8qKlxuICogV2hldGhlciB0byBpZ25vcmUgQVBJIHByZWZpeGVzXG4gKlxuICog5piv5ZCm5b+955WlQVBJ5YmN57yAXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoZW4gZW52aXJvbm1lbnQuYXBpLmJhc2VVcmwgc2V0ICcvYXBpJ1xuICpcbiAqIHRoaXMuaHR0cC5nZXQoYC9wYXRoYCkgLy8gUmVxdWVzdCBVcmw6IC9hcGkvcGF0aFxuICogdGhpcy5odHRwLmdldChgL3BhdGhgLCB7IGNvbnRleHQ6IG5ldyBIdHRwQ29udGV4dCgpLnNldChJR05PUkVfQkFTRV9VUkwsIHRydWUpIH0pIC8vIFJlcXVlc3QgVXJsOiAvcGF0aFxuICovXG5leHBvcnQgY29uc3QgSUdOT1JFX0JBU0VfVVJMID0gbmV3IEh0dHBDb250ZXh0VG9rZW4oKCkgPT4gZmFsc2UpO1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gcmV0dXJuIHJhdyByZXNwb25zZSBib2R5XG4gKlxuICog5piv5ZCm5Y6f5qC36L+U5Zue6K+35rGCQm9keVxuICovXG5leHBvcnQgY29uc3QgUkFXX0JPRFkgPSBuZXcgSHR0cENvbnRleHRUb2tlbigoKSA9PiBmYWxzZSk7XG4iXX0=