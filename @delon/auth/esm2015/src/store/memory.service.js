/**
 * @fileoverview added by tsickle
 * Generated from: src/store/memory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
 */
export class MemoryStore {
    constructor() {
        this.cache = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.cache[key] || ((/** @type {?} */ ({})));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.cache[key] = value;
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        this.cache[key] = null;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemoryStore.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFDVSxVQUFLLEdBQTBDLEVBQUUsQ0FBQztJQWM1RCxDQUFDOzs7OztJQVpDLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFlLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWtCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0NBQ0Y7Ozs7OztJQWRDLDRCQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiDlhoXlrZjlrZjlgqjvvIzlhbPmjonmtY/op4jlmajmoIfnrb7lkI4qKuS4ouWksSoq44CCXG4gKlxuICogYGBgdHNcbiAqIC8vIGdsb2JhbC1jb25maWcubW9kdWxlLnRzXG4gKiB7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogTWVtb3J5U3RvcmUgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogSVRva2VuTW9kZWwgfCBudWxsIH0gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSB8fCAoe30gYXMgSVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==