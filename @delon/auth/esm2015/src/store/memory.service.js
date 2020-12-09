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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlL21lbW9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNVLFVBQUssR0FBMEMsRUFBRSxDQUFDO0lBYzVELENBQUM7Ozs7O0lBWkMsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBQSxFQUFFLEVBQWUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBa0I7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjs7Ozs7O0lBZEMsNEJBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG4vKipcbiAqIOWGheWtmOWtmOWCqO+8jOWFs+aOiea1j+iniOWZqOagh+etvuWQjioq5Lii5aSxKirjgIJcbiAqXG4gKiBgYGB0c1xuICogLy8gZ2xvYmFsLWNvbmZpZy5tb2R1bGUudHNcbiAqIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBNZW1vcnlTdG9yZSB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBJVG9rZW5Nb2RlbCB8IG51bGwgfSA9IHt9O1xuXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldIHx8ICh7fSBhcyBJVG9rZW5Nb2RlbCk7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gbnVsbDtcbiAgfVxufVxuIl19