/**
 * @fileoverview added by tsickle
 * Generated from: src/zorro.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { dispatchFakeEvent } from './dispatch-events';
/** @type {?} */
export const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 * @param {?} dl
 * @param {?} trigger
 * @param {?=} allowNull
 * @return {?}
 */
export function dispatchDropDown(dl, trigger, allowNull = true) {
    /** @type {?} */
    const directive = dl.query(By.directive(NzDropDownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    /** @type {?} */
    const el = (/** @type {?} */ (directive.injector.get(NzDropDownDirective).elementRef.nativeElement));
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXRELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxJQUFJOzs7Ozs7OztBQUtyQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsRUFBZ0IsRUFBRSxPQUErQixFQUFFLFNBQVMsR0FBRyxJQUFJOztVQUM1RixTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkOztVQUNLLEVBQUUsR0FBRyxtQkFBQSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFlO0lBQ25ILElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtRQUN2QixpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNMLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNyQztJQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlYnVnRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBCeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgZGlzcGF0Y2hGYWtlRXZlbnQgfSBmcm9tICcuL2Rpc3BhdGNoLWV2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9NSU5fVElNRSA9IDEwMDA7XG5cbi8qKlxuICog6Kem5Y+RIGRyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaERyb3BEb3duKGRsOiBEZWJ1Z0VsZW1lbnQsIHRyaWdnZXI6ICdtb3VzZWxlYXZlJyB8ICdjbGljaycsIGFsbG93TnVsbCA9IHRydWUpIHtcbiAgY29uc3QgZGlyZWN0aXZlID0gZGwucXVlcnkoQnkuZGlyZWN0aXZlKE56RHJvcERvd25EaXJlY3RpdmUpKTtcbiAgaWYgKGFsbG93TnVsbCAmJiBkaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBlbCA9IGRpcmVjdGl2ZS5pbmplY3Rvci5nZXQ8TnpEcm9wRG93bkRpcmVjdGl2ZT4oTnpEcm9wRG93bkRpcmVjdGl2ZSkuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgIGRpc3BhdGNoRmFrZUV2ZW50KGVsLCAnY2xpY2snKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaEZha2VFdmVudChlbCwgJ21vdXNlZW50ZXInKTtcbiAgfVxuICB0aWNrKERST1BET1dOX01JTl9USU1FKTtcbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=