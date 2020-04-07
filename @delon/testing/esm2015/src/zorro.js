/**
 * @fileoverview added by tsickle
 * Generated from: src/zorro.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { dispatchFakeEvent } from './dispatch-events';
/**
 * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L88) 抖动合理值
 * @type {?}
 */
export const DROPDOWN_MIN_TIME = 51;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBS3RELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxFQUFFOzs7Ozs7OztBQUtuQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsRUFBZ0IsRUFBRSxPQUErQixFQUFFLFNBQVMsR0FBRyxJQUFJOztVQUM1RixTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkOztVQUNLLEVBQUUsR0FBRyxtQkFBQSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFlO0lBQ25ILElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtRQUN2QixpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNMLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNyQztJQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlYnVnRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBCeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBkaXNwYXRjaEZha2VFdmVudCB9IGZyb20gJy4vZGlzcGF0Y2gtZXZlbnRzJztcblxuLyoqXG4gKiBbbnotZHJvcGRvd25dKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZHJvcGRvd24vbnotZHJvcGRvd24uY29tcG9uZW50LnRzI0w4OCkg5oqW5Yqo5ZCI55CG5YC8XG4gKi9cbmV4cG9ydCBjb25zdCBEUk9QRE9XTl9NSU5fVElNRSA9IDUxO1xuXG4vKipcbiAqIOinpuWPkSBkcm9wZG93blxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hEcm9wRG93bihkbDogRGVidWdFbGVtZW50LCB0cmlnZ2VyOiAnbW91c2VsZWF2ZScgfCAnY2xpY2snLCBhbGxvd051bGwgPSB0cnVlKSB7XG4gIGNvbnN0IGRpcmVjdGl2ZSA9IGRsLnF1ZXJ5KEJ5LmRpcmVjdGl2ZShOekRyb3BEb3duRGlyZWN0aXZlKSk7XG4gIGlmIChhbGxvd051bGwgJiYgZGlyZWN0aXZlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZWwgPSBkaXJlY3RpdmUuaW5qZWN0b3IuZ2V0PE56RHJvcERvd25EaXJlY3RpdmU+KE56RHJvcERvd25EaXJlY3RpdmUpLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICBkaXNwYXRjaEZha2VFdmVudChlbCwgJ2NsaWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWwsICdtb3VzZWVudGVyJyk7XG4gIH1cbiAgdGljayhEUk9QRE9XTl9NSU5fVElNRSk7XG4gIHJldHVybiB0cnVlO1xufVxuIl19