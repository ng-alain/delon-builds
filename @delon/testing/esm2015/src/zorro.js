/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ycm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGVzdGluZy8iLCJzb3VyY2VzIjpbInNyYy96b3Jyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFLdEQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLEVBQUU7Ozs7Ozs7O0FBS25DLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxFQUFnQixFQUFFLE9BQStCLEVBQUUsU0FBUyxHQUFHLElBQUk7O1VBQzVGLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1VBQ0ssRUFBRSxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQWU7SUFDbkgsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3ZCLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoQztTQUFNO1FBQ0wsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVidWdFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEJ5IH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IGRpc3BhdGNoRmFrZUV2ZW50IH0gZnJvbSAnLi9kaXNwYXRjaC1ldmVudHMnO1xuXG4vKipcbiAqIFtuei1kcm9wZG93bl0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kcm9wZG93bi9uei1kcm9wZG93bi5jb21wb25lbnQudHMjTDg4KSDmipbliqjlkIjnkIblgLxcbiAqL1xuZXhwb3J0IGNvbnN0IERST1BET1dOX01JTl9USU1FID0gNTE7XG5cbi8qKlxuICog6Kem5Y+RIGRyb3Bkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaERyb3BEb3duKGRsOiBEZWJ1Z0VsZW1lbnQsIHRyaWdnZXI6ICdtb3VzZWxlYXZlJyB8ICdjbGljaycsIGFsbG93TnVsbCA9IHRydWUpIHtcbiAgY29uc3QgZGlyZWN0aXZlID0gZGwucXVlcnkoQnkuZGlyZWN0aXZlKE56RHJvcERvd25EaXJlY3RpdmUpKTtcbiAgaWYgKGFsbG93TnVsbCAmJiBkaXJlY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBlbCA9IGRpcmVjdGl2ZS5pbmplY3Rvci5nZXQ8TnpEcm9wRG93bkRpcmVjdGl2ZT4oTnpEcm9wRG93bkRpcmVjdGl2ZSkuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgIGRpc3BhdGNoRmFrZUV2ZW50KGVsLCAnY2xpY2snKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwYXRjaEZha2VFdmVudChlbCwgJ21vdXNlZW50ZXInKTtcbiAgfVxuICB0aWNrKERST1BET1dOX01JTl9USU1FKTtcbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=