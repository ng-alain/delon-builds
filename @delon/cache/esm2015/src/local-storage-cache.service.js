/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const DC_STORE_STORAGE_TOKEN = new InjectionToken('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function DC_STORE_STORAGE_TOKEN_FACTORY() {
    return new LocalStorageCacheService();
}
export class LocalStorageCacheService {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        localStorage.removeItem(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLHNCQUFzQixHQUFHLElBQUksY0FBYyxDQUFjLHdCQUF3QixFQUFFO0lBQzlGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw4QkFBOEI7Q0FDeEMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw4QkFBOEI7SUFDNUMsT0FBTyxJQUFJLHdCQUF3QixFQUFFLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDYWNoZSwgSUNhY2hlU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPElDYWNoZVN0b3JlPignRENfU1RPUkVfU1RPUkFHRV9UT0tFTicsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOX0ZBQ1RPUlksXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIERDX1NUT1JFX1NUT1JBR0VfVE9LRU5fRkFDVE9SWSgpIHtcbiAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSBpbXBsZW1lbnRzIElDYWNoZVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSUNhY2hlIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElDYWNoZSk6IGJvb2xlYW4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==