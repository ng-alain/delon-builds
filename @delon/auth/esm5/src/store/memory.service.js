/**
 * @fileoverview added by tsickle
 * Generated from: src/store/memory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
 */
var /**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
 */
MemoryStore = /** @class */ (function () {
    function MemoryStore() {
        this.cache = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStore.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.cache[key] || ((/** @type {?} */ ({})));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MemoryStore.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.cache[key] = value;
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MemoryStore.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.cache[key] = null;
    };
    return MemoryStore;
}());
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
 */
export { MemoryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemoryStore.prototype.cache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7OztJQUFBO1FBQ1UsVUFBSyxHQUEwQyxFQUFFLENBQUM7SUFjNUQsQ0FBQzs7Ozs7SUFaQyx5QkFBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFBLEVBQUUsRUFBZSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQseUJBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsS0FBa0I7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7Ozs7Ozs7Ozs7Ozs7SUFkQyw0QkFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbi8qKlxuICog5YaF5a2Y5a2Y5YKo77yM5YWz5o6J5rWP6KeI5Zmo5qCH562+5ZCOKirkuKLlpLEqKuOAglxuICpcbiAqIGBgYHRzXG4gKiAvLyBnbG9iYWwtY29uZmlnLm1vZHVsZS50c1xuICogeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IE1lbW9yeVN0b3JlIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIHwgbnVsbCB9ID0ge307XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gfHwgKHt9IGFzIElUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuICB9XG59XG4iXX0=