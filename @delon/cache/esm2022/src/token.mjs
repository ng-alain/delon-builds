import { HttpContextToken } from '@angular/common/http';
/**
 * Cache options (Don't forget to register `CacheInterceptor`)
 *
 * 缓存配置项（不要忘记注册 `CacheInterceptor`）
 *
 * @example
 * this.http.get(`my`, {
 *  context: new HttpContext().set(CACHE, { key: 'user-data' })
 * })
 */
export const CACHE = new HttpContextToken(() => ({}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jYWNoZS9zcmMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFtQ3hEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFlLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDb250ZXh0VG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGl0LCBpZiBgQ2FjaGUtY29udHJvbDogbWF4LWFnZT14eHhgIGlzIGZvdW5kIHdoZW4gdGhlIHJlcXVlc3QgcmV0dXJucywgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNhY2hlZCwgYW5kIHRoZSBuZXh0IHJlcXVlc3Qgd2lsbCBiZSBmb3JjZWQgdG8gb2J0YWluIGRhdGEgZnJvbSB0aGUgY2FjaGUgdW5sZXNzIGBlbmFibGVkOiBmYWxzZWAgaXMgc3BlY2lmaWVkOyBkZWZhdWx0IGB0cnVlYFxuICAgKlxuICAgKiDmmK/lkKblkK/nlKjvvIzlvZPlkK/nlKjlkI7oi6Xor7fmsYLov5Tlm57ml7blj5HnjrAgYENhY2hlLWNvbnRyb2w6IG1heC1hZ2U9eHh4YCDml7boh6rliqjnvJPlrZjvvIzkuIvkuIDmrKHor7fmsYLml7bpmaTpnZ7mjIflrpogYGVuYWJsZWQ6IGZhbHNlYCDlkKbliJnlvLrliLbku47nvJPlrZjkuK3ojrflj5bmlbDmja7vvJvpu5jorqQgYHRydWVgXG4gICAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGNhY2hlIHVuaXF1ZSBrZXksIHdoaWNoIGlzIHVzZWQgdG8gZGlzdGluZ3Vpc2ggY2FjaGUgZW50cmllcywgYW5kIHRoZSBkZWZhdWx0IGlzIGJhc2VkIG9uIHRoZSByZXF1ZXN0ZWQgVVJMXG4gICAqXG4gICAqIOaMh+Wumue8k+WtmOWUr+S4gOmUru+8jOeUqOS6juWMuuWIhue8k+WtmOadoeebru+8jOm7mOiupOS7peivt+axgueahCBVUkwg5Li65YeGXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBzdG9yYWdlIG1ldGhvZCwgYG1gIG1lYW5zIG1lbW9yeSwgYHNgIG1lYW5zIHBlcnNpc3RlbmNlOyBkZWZhdWx0OiBgbWBcbiAgICpcbiAgICog5oyH5a6a5a2Y5YKo5pa55byP77yMYG1gIOihqOekuuWGheWtmO+8jGBzYCDooajnpLrmjIHkuYXljJbvvJvpu5jorqTvvJpgbWBcbiAgICovXG4gIHNhdmVUeXBlPzogJ20nIHwgJ3MnO1xuICAvKipcbiAgICogRXhwaXJlIHRpbWUsIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdoZW4gcmV0dXJuaW5nIGBDYWNoZS1jb250cm9sOiBtYXgtYWdlPXh4eGAsIHVuaXQgYHNlY29uZGBcbiAgICpcbiAgICog6L+H5pyf5pe26Ze077yM5b2T6L+U5ZueIGBDYWNoZS1jb250cm9sOiBtYXgtYWdlPXh4eGAg5pe25LyY5YWI57qn5pyA6auY77yM5Y2V5L2NIGDnp5JgXG4gICAqL1xuICBleHBpcmU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHRyaWdnZXIgYSBub3RpZmljYXRpb24sIGRlZmF1bHQ6IGB0cnVlYFxuICAgKlxuICAgKiDmmK/lkKbop6blj5HpgJrnn6XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGVtaXROb3RpZnk/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENhY2hlIG9wdGlvbnMgKERvbid0IGZvcmdldCB0byByZWdpc3RlciBgQ2FjaGVJbnRlcmNlcHRvcmApXG4gKlxuICog57yT5a2Y6YWN572u6aG577yI5LiN6KaB5b+Y6K6w5rOo5YaMIGBDYWNoZUludGVyY2VwdG9yYO+8iVxuICpcbiAqIEBleGFtcGxlXG4gKiB0aGlzLmh0dHAuZ2V0KGBteWAsIHtcbiAqICBjb250ZXh0OiBuZXcgSHR0cENvbnRleHQoKS5zZXQoQ0FDSEUsIHsga2V5OiAndXNlci1kYXRhJyB9KVxuICogfSlcbiAqL1xuZXhwb3J0IGNvbnN0IENBQ0hFID0gbmV3IEh0dHBDb250ZXh0VG9rZW48Q2FjaGVPcHRpb25zPigoKSA9PiAoe30pKTtcbiJdfQ==