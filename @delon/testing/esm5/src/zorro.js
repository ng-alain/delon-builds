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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBS3BELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxFQUFFOzs7Ozs7OztBQUtuQyxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEVBQWdCLEVBQ2hCLE9BQStCLEVBQy9CLFNBQWdCO0lBQWhCLDBCQUFBLEVBQUEsZ0JBQWdCOztRQUVWLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDdkIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0Q7U0FBTTtRQUNMLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hFO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVidWdFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEJ5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuLyoqXG4gKiBbbnotZHJvcGRvd25dKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZHJvcGRvd24vbnotZHJvcGRvd24uY29tcG9uZW50LnRzI0wxNTkpIOaKluWKqOWQiOeQhuWAvFxuICovXG5leHBvcnQgY29uc3QgRFJPUERPV05fTUlOX1RJTUUgPSA1MTtcblxuLyoqXG4gKiDop6blj5EgZHJvcGRvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRHJvcERvd24oXG4gIGRsOiBEZWJ1Z0VsZW1lbnQsXG4gIHRyaWdnZXI6ICdtb3VzZWxlYXZlJyB8ICdjbGljaycsXG4gIGFsbG93TnVsbCA9IHRydWUsXG4pIHtcbiAgY29uc3QgZGlyZWN0aXZlID0gZGwucXVlcnkoQnkuZGlyZWN0aXZlKE56RHJvcERvd25EaXJlY3RpdmUpKTtcbiAgaWYgKGFsbG93TnVsbCAmJiBkaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgIGRpcmVjdGl2ZS5pbmplY3Rvci5nZXQoTnpEcm9wRG93bkRpcmVjdGl2ZSkub25DbGljayhudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3RpdmUuaW5qZWN0b3IuZ2V0KE56RHJvcERvd25EaXJlY3RpdmUpLm9uTW91c2VFbnRlcihudWxsKTtcbiAgfVxuICB0aWNrKERST1BET1dOX01JTl9USU1FKTtcbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=