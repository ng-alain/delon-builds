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
    get(key) {
        return this.cache[key] || {};
    }
    set(key, value) {
        this.cache[key] = value;
        return true;
    }
    remove(key) {
        this.cache[key] = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9zdG9yZS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFDVSxVQUFLLEdBQTBDLEVBQUUsQ0FBQztJQWM1RCxDQUFDO0lBWkMsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUssRUFBa0IsQ0FBQztJQUNoRCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFrQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbi8qKlxuICog5YaF5a2Y5a2Y5YKo77yM5YWz5o6J5rWP6KeI5Zmo5qCH562+5ZCOKirkuKLlpLEqKuOAglxuICpcbiAqIGBgYHRzXG4gKiAvLyBnbG9iYWwtY29uZmlnLm1vZHVsZS50c1xuICogeyBwcm92aWRlOiBEQV9TVE9SRV9UT0tFTiwgdXNlQ2xhc3M6IE1lbW9yeVN0b3JlIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IElUb2tlbk1vZGVsIHwgbnVsbCB9ID0ge307XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gfHwgKHt9IGFzIElUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuICB9XG59XG4iXX0=