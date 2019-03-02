/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd';
import { dispatchFakeEvent } from './dispatch-events';
/**
 * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L88) 抖动合理值
 * @type {?}
 */
export var DROPDOWN_MIN_TIME = 51;
/**
 * 触发 dropdown
 * @param {?} dl
 * @param {?} trigger
 * @param {?=} allowNull
 * @return {?}
 */
export function dispatchDropDown(dl, trigger, allowNull) {
    if (allowNull === void 0) { allowNull = true; }
    /** @type {?} */
    var directive = dl.query(By.directive(NzDropDownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    /** @type {?} */
    var el = (/** @type {?} */ (directive.injector.get(NzDropDownDirective).elementRef.nativeElement));
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBS3RELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxFQUFFOzs7Ozs7OztBQUtuQyxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEVBQWdCLEVBQ2hCLE9BQStCLEVBQy9CLFNBQWdCO0lBQWhCLDBCQUFBLEVBQUEsZ0JBQWdCOztRQUVWLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1FBQ0ssRUFBRSxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQWU7SUFDbkgsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3ZCLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoQztTQUFNO1FBQ0wsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVidWdFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEJ5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IGRpc3BhdGNoRmFrZUV2ZW50IH0gZnJvbSAnLi9kaXNwYXRjaC1ldmVudHMnO1xuXG4vKipcbiAqIFtuei1kcm9wZG93bl0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kcm9wZG93bi9uei1kcm9wZG93bi5jb21wb25lbnQudHMjTDg4KSDmipbliqjlkIjnkIblgLxcbiAqL1xuZXhwb3J0IGNvbnN0IERST1BET1dOX01JTl9USU1FID0gNTE7XG5cbi8qKlxuICog6Kem5Y+RIGRyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaERyb3BEb3duKFxuICBkbDogRGVidWdFbGVtZW50LFxuICB0cmlnZ2VyOiAnbW91c2VsZWF2ZScgfCAnY2xpY2snLFxuICBhbGxvd051bGwgPSB0cnVlLFxuKSB7XG4gIGNvbnN0IGRpcmVjdGl2ZSA9IGRsLnF1ZXJ5KEJ5LmRpcmVjdGl2ZShOekRyb3BEb3duRGlyZWN0aXZlKSk7XG4gIGlmIChhbGxvd051bGwgJiYgZGlyZWN0aXZlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZWwgPSBkaXJlY3RpdmUuaW5qZWN0b3IuZ2V0PE56RHJvcERvd25EaXJlY3RpdmU+KE56RHJvcERvd25EaXJlY3RpdmUpLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICBkaXNwYXRjaEZha2VFdmVudChlbCwgJ2NsaWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWwsICdtb3VzZWVudGVyJyk7XG4gIH1cbiAgdGljayhEUk9QRE9XTl9NSU5fVElNRSk7XG4gIHJldHVybiB0cnVlO1xufVxuIl19