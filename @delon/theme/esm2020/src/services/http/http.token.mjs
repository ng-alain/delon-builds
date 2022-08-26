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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAudG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5RDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ29udGV4dFRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gY3VzdG9taXplIHRoZSBoYW5kbGluZyBvZiBleGNlcHRpb24gbWVzc2FnZXNcbiAqXG4gKiDmmK/lkKboh6rlrprkuYnlpITnkIblvILluLjmtojmga9cbiAqXG4gKiBAZXhhbXBsZVxuICogdGhpcy5odHRwLnBvc3QoYGxvZ2luYCwge1xuICogIG5hbWU6ICdjaXBjaGsnLCBwd2Q6ICcxMjM0NTYnXG4gKiB9LCB7XG4gKiAgY29udGV4dDogbmV3IEh0dHBDb250ZXh0KClcbiAqICAgICAgICAgICAgICAuc2V0KEFMTE9XX0FOT05ZTU9VUywgdHJ1ZSlcbiAqICAgICAgICAgICAgICAuc2V0KENVU1RPTV9FUlJPUiwgdHJ1ZSlcbiAqIH0pLnN1YnNjcmliZSh7XG4gKiAgbmV4dDogY29uc29sZS5sb2csXG4gKiAgZXJyb3I6IGNvbnNvbGUubG9nXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IENVU1RPTV9FUlJPUiA9IG5ldyBIdHRwQ29udGV4dFRva2VuKCgpID0+IGZhbHNlKTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGlnbm9yZSBBUEkgcHJlZml4ZXNcbiAqXG4gKiDmmK/lkKblv73nlaVBUEnliY3nvIBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBlbnZpcm9ubWVudC5hcGkuYmFzZVVybCBzZXQgJy9hcGknXG4gKlxuICogdGhpcy5odHRwLmdldChgL3BhdGhgKSAvLyBSZXF1ZXN0IFVybDogL2FwaS9wYXRoXG4gKiB0aGlzLmh0dHAuZ2V0KGAvcGF0aGAsIHsgY29udGV4dDogbmV3IEh0dHBDb250ZXh0KCkuc2V0KElHTk9SRV9CQVNFX1VSTCwgdHJ1ZSkgfSkgLy8gUmVxdWVzdCBVcmw6IC9wYXRoXG4gKi9cbmV4cG9ydCBjb25zdCBJR05PUkVfQkFTRV9VUkwgPSBuZXcgSHR0cENvbnRleHRUb2tlbigoKSA9PiBmYWxzZSk7XG4iXX0=