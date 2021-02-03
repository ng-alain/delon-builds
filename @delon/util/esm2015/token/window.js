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
        const { defaultView } = inject(DOCUMENT);
        if (!defaultView) {
            throw new Error('Window is not available');
        }
        return defaultView;
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC90b2tlbi93aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPdkQsTUFBTSxPQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBUyxRQUFRLEVBQUU7SUFDekQsT0FBTzs7O0lBQUUsR0FBRyxFQUFFO2NBQ04sRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxDQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBY2Nlc3MgdG8gZ2xvYmFsIGB3aW5kb3dgIG9iamVjdFxuICpcbiAqIOiuv+mXruWFqOWxgCBgd2luZG93YCDlr7nosaFcbiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaW5kb3c+KCdXSU5ET1cnLCB7XG4gIGZhY3Rvcnk6ICgpID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHRWaWV3IH0gPSBpbmplY3QoRE9DVU1FTlQpO1xuICAgIGlmICghZGVmYXVsdFZpZXcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2luZG93IGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWaWV3O1xuICB9LFxufSk7XG4iXX0=