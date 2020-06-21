/**
 * @fileoverview added by tsickle
 * Generated from: src/local-storage-cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function DC_STORE_STORAGE_TOKEN_FACTORY() {
    return new LocalStorageCacheService();
}
var LocalStorageCacheService = /** @class */ (function () {
    function LocalStorageCacheService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageCacheService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageCacheService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageCacheService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageCacheService;
}());
export { LocalStorageCacheService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FBYyx3QkFBd0IsRUFBRTtJQUM5RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsOEJBQThCO0NBQ3hDLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUsOEJBQThCO0lBQzVDLE9BQU8sSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFFRDtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFaQyxzQ0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxzQ0FBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFhO1FBQzVCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2FjaGUsIElDYWNoZVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgRENfU1RPUkVfU1RPUkFHRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJQ2FjaGVTdG9yZT4oJ0RDX1NUT1JFX1NUT1JBR0VfVE9LRU4nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogRENfU1RPUkVfU1RPUkFHRV9UT0tFTl9GQUNUT1JZLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOX0ZBQ1RPUlkoKSB7XG4gIHJldHVybiBuZXcgTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgaW1wbGVtZW50cyBJQ2FjaGVTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElDYWNoZSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJQ2FjaGUpOiBib29sZWFuIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG4iXX0=