/**
 * @fileoverview added by tsickle
 * Generated from: src/zorro.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXRELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxJQUFJOzs7Ozs7OztBQUtyQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsRUFBZ0IsRUFBRSxPQUErQixFQUFFLFlBQXFCLElBQUk7O1VBQ3JHLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1VBQ0ssRUFBRSxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQWU7SUFDbkgsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3ZCLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoQztTQUFNO1FBQ0wsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVidWdFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEJ5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBkaXNwYXRjaEZha2VFdmVudCB9IGZyb20gJy4vZGlzcGF0Y2gtZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IERST1BET1dOX01JTl9USU1FID0gMTAwMDtcblxuLyoqXG4gKiDop6blj5EgZHJvcGRvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRHJvcERvd24oZGw6IERlYnVnRWxlbWVudCwgdHJpZ2dlcjogJ21vdXNlbGVhdmUnIHwgJ2NsaWNrJywgYWxsb3dOdWxsOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICBjb25zdCBkaXJlY3RpdmUgPSBkbC5xdWVyeShCeS5kaXJlY3RpdmUoTnpEcm9wRG93bkRpcmVjdGl2ZSkpO1xuICBpZiAoYWxsb3dOdWxsICYmIGRpcmVjdGl2ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGVsID0gZGlyZWN0aXZlLmluamVjdG9yLmdldDxOekRyb3BEb3duRGlyZWN0aXZlPihOekRyb3BEb3duRGlyZWN0aXZlKS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWwsICdjbGljaycpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoRmFrZUV2ZW50KGVsLCAnbW91c2VlbnRlcicpO1xuICB9XG4gIHRpY2soRFJPUERPV05fTUlOX1RJTUUpO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==