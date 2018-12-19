/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd';
/**
 * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L159) 抖动合理值
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
    if (trigger === 'click') {
        directive.injector.get(NzDropDownDirective).onClick(null);
    }
    else {
        directive.injector.get(NzDropDownDirective).onMouseEnter(null);
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBS3BELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxFQUFFOzs7Ozs7OztBQUtuQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsRUFBZ0IsRUFBRSxPQUErQixFQUFFLFNBQWdCO0lBQWhCLDBCQUFBLEVBQUEsZ0JBQWdCOztRQUM1RixTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3ZCLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNEO1NBQU07UUFDTCxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoRTtJQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlYnVnRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBCeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOekRyb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbi8qKlxuICogW256LWRyb3Bkb3duXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL2Ryb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudC50cyNMMTU5KSDmipbliqjlkIjnkIblgLxcbiAqL1xuZXhwb3J0IGNvbnN0IERST1BET1dOX01JTl9USU1FID0gNTE7XG5cbi8qKlxuICog6Kem5Y+RIGRyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaERyb3BEb3duKGRsOiBEZWJ1Z0VsZW1lbnQsIHRyaWdnZXI6ICdtb3VzZWxlYXZlJyB8ICdjbGljaycsIGFsbG93TnVsbCA9IHRydWUpIHtcbiAgY29uc3QgZGlyZWN0aXZlID0gZGwucXVlcnkoQnkuZGlyZWN0aXZlKE56RHJvcERvd25EaXJlY3RpdmUpKTtcbiAgaWYgKGFsbG93TnVsbCAmJiBkaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgIGRpcmVjdGl2ZS5pbmplY3Rvci5nZXQoTnpEcm9wRG93bkRpcmVjdGl2ZSkub25DbGljayhudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3RpdmUuaW5qZWN0b3IuZ2V0KE56RHJvcERvd25EaXJlY3RpdmUpLm9uTW91c2VFbnRlcihudWxsKTtcbiAgfVxuICB0aWNrKERST1BET1dOX01JTl9USU1FKTtcbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=