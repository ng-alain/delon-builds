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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy90ZXN0aW5nLyIsInNvdXJjZXMiOlsic3JjL3pvcnJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFdEQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUk7Ozs7Ozs7O0FBS3JDLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxFQUFnQixFQUFFLE9BQStCLEVBQUUsWUFBcUIsSUFBSTs7VUFDckcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDbEMsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFDSyxFQUFFLEdBQUcsbUJBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBZTtJQUNuSCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDdkIsaUJBQWlCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDO1NBQU07UUFDTCxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDckM7SUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWJ1Z0VsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQnkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IGRpc3BhdGNoRmFrZUV2ZW50IH0gZnJvbSAnLi9kaXNwYXRjaC1ldmVudHMnO1xuXG5leHBvcnQgY29uc3QgRFJPUERPV05fTUlOX1RJTUUgPSAxMDAwO1xuXG4vKipcbiAqIOinpuWPkSBkcm9wZG93blxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hEcm9wRG93bihkbDogRGVidWdFbGVtZW50LCB0cmlnZ2VyOiAnbW91c2VsZWF2ZScgfCAnY2xpY2snLCBhbGxvd051bGw6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpcmVjdGl2ZSA9IGRsLnF1ZXJ5KEJ5LmRpcmVjdGl2ZShOekRyb3BEb3duRGlyZWN0aXZlKSk7XG4gIGlmIChhbGxvd051bGwgJiYgZGlyZWN0aXZlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZWwgPSBkaXJlY3RpdmUuaW5qZWN0b3IuZ2V0PE56RHJvcERvd25EaXJlY3RpdmU+KE56RHJvcERvd25EaXJlY3RpdmUpLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICBkaXNwYXRjaEZha2VFdmVudChlbCwgJ2NsaWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWwsICdtb3VzZWVudGVyJyk7XG4gIH1cbiAgdGljayhEUk9QRE9XTl9NSU5fVElNRSk7XG4gIHJldHVybiB0cnVlO1xufVxuIl19