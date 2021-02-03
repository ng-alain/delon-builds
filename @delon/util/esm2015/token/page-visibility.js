/**
 * @fileoverview added by tsickle
 * Generated from: page-visibility.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, share, startWith } from 'rxjs/operators';
/**
 * Use the `visibilitychange` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests
 *
 * 通过 `visibilitychange` 事件来监听浏览器选项卡是否可见，一般用于当用户离开应用时暂时中断后端持续发送请求时
 * @type {?}
 */
export const PAGE_VISIBILITY = new InjectionToken('PAGE_VISIBILITY`', {
    factory: (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const doc = inject(DOCUMENT);
        return fromEvent(doc, 'visibilitychange').pipe(startWith(0), map((/**
         * @return {?}
         */
        () => !doc.hidden)), distinctUntilChanged(), share());
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS12aXNpYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC90b2tlbi9wYWdlLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU83RSxNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFzQixrQkFBa0IsRUFBRTtJQUN6RixPQUFPOzs7SUFBRSxHQUFHLEVBQUU7O2NBQ04sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1osR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEVBQ3RCLG9CQUFvQixFQUFFLEVBQ3RCLEtBQUssRUFBRSxDQUNSLENBQUM7SUFDSixDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFVzZSB0aGUgYHZpc2liaWxpdHljaGFuZ2VgIGV2ZW50IHRvIG1vbml0b3Igd2hldGhlciB0aGUgYnJvd3NlciB0YWIgaXMgdmlzaWJsZSwgd2hpY2ggaXMgZ2VuZXJhbGx5IHVzZWQgd2hlbiB0aGUgdXNlciBsZWF2ZXMgdGhlIGJyb3dzZXIgdGFiIHRvIHRlbXAgaW50ZXJydXB0IHRoZSBiYWNrZW5kIHRvIGNvbnRpbnVlIHNlbmRpbmcgcmVxdWVzdHNcbiAqXG4gKiDpgJrov4cgYHZpc2liaWxpdHljaGFuZ2VgIOS6i+S7tuadpeebkeWQrOa1j+iniOWZqOmAiemhueWNoeaYr+WQpuWPr+inge+8jOS4gOiIrOeUqOS6juW9k+eUqOaIt+emu+W8gOW6lOeUqOaXtuaaguaXtuS4reaWreWQjuerr+aMgee7reWPkemAgeivt+axguaXtlxuICovXG5leHBvcnQgY29uc3QgUEFHRV9WSVNJQklMSVRZID0gbmV3IEluamVjdGlvblRva2VuPE9ic2VydmFibGU8Ym9vbGVhbj4+KCdQQUdFX1ZJU0lCSUxJVFlgJywge1xuICBmYWN0b3J5OiAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gaW5qZWN0KERPQ1VNRU5UKTtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGRvYywgJ3Zpc2liaWxpdHljaGFuZ2UnKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKDApLFxuICAgICAgbWFwKCgpID0+ICFkb2MuaGlkZGVuKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpLFxuICAgICk7XG4gIH0sXG59KTtcbiJdfQ==