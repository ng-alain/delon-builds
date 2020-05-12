/**
 * @fileoverview added by tsickle
 * Generated from: src/store/memory.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 内存存储，关掉浏览器标签后**丢失**。
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLE1BQU0sT0FBTyxXQUFXO0lBQXhCO1FBQ1UsVUFBSyxHQUEwQyxFQUFFLENBQUM7SUFjNUQsQ0FBQzs7Ozs7SUFaQyxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFBLEVBQUUsRUFBZSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFrQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7Ozs7SUFkQyw0QkFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbi8qKlxuICog5YaF5a2Y5a2Y5YKo77yM5YWz5o6J5rWP6KeI5Zmo5qCH562+5ZCOKirkuKLlpLEqKuOAglxuICovXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIHwgbnVsbCB9ID0ge307XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gfHwgKHt9IGFzIElUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuICB9XG59XG4iXX0=