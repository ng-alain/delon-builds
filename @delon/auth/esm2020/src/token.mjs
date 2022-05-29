import { HttpContextToken } from '@angular/common/http';
/**
 * Whether to allow anonymous login
 *
 * 是否允许匿名登录
 *
 * @example
 * this.http.post(`login`, {
 *  name: 'cipchk', pwd: '123456'
 * }, {
 *  context: new HttpContext().set(ALLOW_ANONYMOUS, true)
 * })
 */
export const ALLOW_ANONYMOUS = new HttpContextToken(() => false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvbnRleHRUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGFsbG93IGFub255bW91cyBsb2dpblxuICpcbiAqIOaYr+WQpuWFgeiuuOWMv+WQjeeZu+W9lVxuICpcbiAqIEBleGFtcGxlXG4gKiB0aGlzLmh0dHAucG9zdChgbG9naW5gLCB7XG4gKiAgbmFtZTogJ2NpcGNoaycsIHB3ZDogJzEyMzQ1NidcbiAqIH0sIHtcbiAqICBjb250ZXh0OiBuZXcgSHR0cENvbnRleHQoKS5zZXQoQUxMT1dfQU5PTllNT1VTLCB0cnVlKVxuICogfSlcbiAqL1xuZXhwb3J0IGNvbnN0IEFMTE9XX0FOT05ZTU9VUyA9IG5ldyBIdHRwQ29udGV4dFRva2VuKCgpID0+IGZhbHNlKTtcbiJdfQ==