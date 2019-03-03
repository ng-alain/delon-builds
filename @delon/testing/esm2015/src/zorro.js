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
    const el = directive.injector.get(NzDropDownDirective).el;
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBS3RELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxFQUFFOzs7Ozs7OztBQUtuQyxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEVBQWdCLEVBQ2hCLE9BQStCLEVBQy9CLFNBQVMsR0FBRyxJQUFJOztVQUVWLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1VBQ0ssRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRTtJQUN6RCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDdkIsaUJBQWlCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDO1NBQU07UUFDTCxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDckM7SUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWJ1Z0VsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRpY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQnkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgZGlzcGF0Y2hGYWtlRXZlbnQgfSBmcm9tICcuL2Rpc3BhdGNoLWV2ZW50cyc7XG5cbi8qKlxuICogW256LWRyb3Bkb3duXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL2Ryb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudC50cyNMODgpIOaKluWKqOWQiOeQhuWAvFxuICovXG5leHBvcnQgY29uc3QgRFJPUERPV05fTUlOX1RJTUUgPSA1MTtcblxuLyoqXG4gKiDop6blj5EgZHJvcGRvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRHJvcERvd24oXG4gIGRsOiBEZWJ1Z0VsZW1lbnQsXG4gIHRyaWdnZXI6ICdtb3VzZWxlYXZlJyB8ICdjbGljaycsXG4gIGFsbG93TnVsbCA9IHRydWUsXG4pIHtcbiAgY29uc3QgZGlyZWN0aXZlID0gZGwucXVlcnkoQnkuZGlyZWN0aXZlKE56RHJvcERvd25EaXJlY3RpdmUpKTtcbiAgaWYgKGFsbG93TnVsbCAmJiBkaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBlbCA9IGRpcmVjdGl2ZS5pbmplY3Rvci5nZXQoTnpEcm9wRG93bkRpcmVjdGl2ZSkuZWw7XG4gIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgZGlzcGF0Y2hGYWtlRXZlbnQoZWwsICdjbGljaycpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BhdGNoRmFrZUV2ZW50KGVsLCAnbW91c2VlbnRlcicpO1xuICB9XG4gIHRpY2soRFJPUERPV05fTUlOX1RJTUUpO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==