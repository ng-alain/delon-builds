/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
var ReuseTabContextService = /** @class */ (function () {
    function ReuseTabContextService(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    /**
     * @return {?}
     */
    ReuseTabContextService.prototype.remove = /**
     * @return {?}
     */
    function () {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    };
    /**
     * @param {?} context
     * @return {?}
     */
    ReuseTabContextService.prototype.open = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        this.remove();
        var event = context.event, item = context.item, customContextMenu = context.customContextMenu;
        /** @type {?} */
        var fakeElement = new ElementRef({
            getBoundingClientRect: (/**
             * @return {?}
             */
            function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); }),
        });
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy: positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        /** @type {?} */
        var comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        /** @type {?} */
        var instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = tslib_1.__assign({}, item);
        instance.customContextMenu = (/** @type {?} */ (customContextMenu));
        instance.event = event;
        /** @type {?} */
        var sub$ = new Subscription();
        sub$.add(instance.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.close.next(res);
            _this.remove();
        })));
        comp.onDestroy((/**
         * @return {?}
         */
        function () { return sub$.unsubscribe(); }));
    };
    ReuseTabContextService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReuseTabContextService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    return ReuseTabContextService;
}());
export { ReuseTabContextService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextService.prototype.ref;
    /** @type {?} */
    ReuseTabContextService.prototype.i18n;
    /** @type {?} */
    ReuseTabContextService.prototype.show;
    /** @type {?} */
    ReuseTabContextService.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBUWxGO0lBUUUsZ0NBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFIcEMsU0FBSSxHQUErQixJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUNwRSxVQUFLLEdBQW9DLElBQUksT0FBTyxFQUEwQixDQUFDO0lBRXhDLENBQUM7Ozs7SUFFeEMsdUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBSTs7OztJQUFKLFVBQUssT0FBMEI7UUFBL0IsaUJBeUNDO1FBeENDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNOLElBQUEscUJBQUssRUFBRSxtQkFBSSxFQUFFLDZDQUFpQjs7WUFDaEMsV0FBVyxHQUFHLElBQUksVUFBVSxDQUFDO1lBQ2pDLHFCQUFxQjs7O1lBQUUsY0FBa0IsT0FBQSxDQUFDO2dCQUN4QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ2xCLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxFQVB1QyxDQU92QyxDQUFBO1NBQ0gsQ0FBQzs7WUFDSSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7U0FDNUc7O1lBQ0ssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ2hDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixnQkFBZ0Isa0JBQUE7WUFDaEIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELENBQUMsQ0FBQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7WUFDekUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsSUFBSSx3QkFBUSxJQUFJLENBQUUsQ0FBQztRQUM1QixRQUFRLENBQUMsaUJBQWlCLEdBQUcsbUJBQUEsaUJBQWlCLEVBQTRCLENBQUM7UUFDM0UsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O1lBRWpCLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsR0FBMkI7WUFDbkQsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTFERixVQUFVOzs7O2dCQWJzQixPQUFPOztJQXdFeEMsNkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSxzQkFBc0I7Ozs7OztJQUNqQyxxQ0FBK0I7O0lBQy9CLHNDQUF1Qjs7SUFFdkIsc0NBQW9FOztJQUNwRSx1Q0FBK0U7Ozs7O0lBRW5FLHlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsIE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LFxuICBSZXVzZUNvbnRleHRFdmVudCxcbiAgUmV1c2VDb250ZXh0STE4bixcbiAgUmV1c2VDdXN0b21Db250ZXh0TWVudSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XG4gICAgdGhpcy5yZWYgPSBudWxsO1xuICB9XG5cbiAgb3Blbihjb250ZXh0OiBSZXVzZUNvbnRleHRFdmVudCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgY29uc3QgeyBldmVudCwgaXRlbSwgY3VzdG9tQ29udGV4dE1lbnUgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXG4gICAgXTtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgcGFuZWxDbGFzczogJ3JldXNlLXRhYl9fY20nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQpKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXAuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcbiAgICBpbnN0YW5jZS5pdGVtID0geyAuLi5pdGVtIH07XG4gICAgaW5zdGFuY2UuY3VzdG9tQ29udGV4dE1lbnUgPSBjdXN0b21Db250ZXh0TWVudSBhcyBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG4gICAgaW5zdGFuY2UuZXZlbnQgPSBldmVudDtcblxuICAgIGNvbnN0IHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgc3ViJC5hZGQoXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQocmVzKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgY29tcC5vbkRlc3Ryb3koKCkgPT4gc3ViJC51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19