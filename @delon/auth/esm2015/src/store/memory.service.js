/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return this.cache[key] || /** @type {?} */ ({});
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
    /** @type {?} */
    MemoryStore.prototype.cache;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTTs7cUJBQzRDLEVBQUU7Ozs7OztJQUVsRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsc0JBQVMsRUFBRSxDQUFBLENBQUM7S0FDbkM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBa0I7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN4QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xyXG4gIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogSVRva2VuTW9kZWwgfSA9IHt9O1xyXG5cclxuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldIHx8IDxhbnk+e307XHJcbiAgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5jYWNoZVtrZXldID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19