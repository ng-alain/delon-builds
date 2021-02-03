/**
 * @fileoverview added by tsickle
 * Generated from: window.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
/**
 * Access to global `window` object
 *
 * 访问全局 `window` 对象
 * @type {?}
 */
export const WINDOW = new InjectionToken('WINDOW', {
    factory: (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const win = inject(DOCUMENT).defaultView;
        if (!win) {
            throw new Error('Window is not available');
        }
        return win;
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC90b2tlbi93aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPdkQsTUFBTSxPQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBUyxRQUFRLEVBQUU7SUFDekQsT0FBTzs7O0lBQUUsR0FBRyxFQUFFOztjQUNOLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVztRQUN4QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFjY2VzcyB0byBnbG9iYWwgYHdpbmRvd2Agb2JqZWN0XG4gKlxuICog6K6/6Zeu5YWo5bGAIGB3aW5kb3dgIOWvueixoVxuICovXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuPFdpbmRvdz4oJ1dJTkRPVycsIHtcbiAgZmFjdG9yeTogKCkgPT4ge1xuICAgIGNvbnN0IHdpbiA9IGluamVjdChET0NVTUVOVCkuZGVmYXVsdFZpZXc7XG4gICAgaWYgKCF3aW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2luZG93IGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbjtcbiAgfSxcbn0pO1xuIl19