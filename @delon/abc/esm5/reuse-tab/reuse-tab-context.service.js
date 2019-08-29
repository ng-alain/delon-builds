/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFRbEY7SUFRRSxnQ0FBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhwQyxTQUFJLEdBQStCLElBQUksT0FBTyxFQUFxQixDQUFDO1FBQ3BFLFVBQUssR0FBb0MsSUFBSSxPQUFPLEVBQTBCLENBQUM7SUFFeEMsQ0FBQzs7OztJQUV4Qyx1Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELHFDQUFJOzs7O0lBQUosVUFBSyxPQUEwQjtRQUEvQixpQkF5Q0M7UUF4Q0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ04sSUFBQSxxQkFBSyxFQUFFLG1CQUFJLEVBQUUsNkNBQWlCOztZQUNoQyxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDakMscUJBQXFCOzs7WUFBRSxjQUFrQixPQUFBLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDckIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDbEIsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLEVBUHVDLENBT3ZDLENBQUE7U0FDSCxDQUFDOztZQUNJLFNBQVMsR0FBRztZQUNoQixJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMzRyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUM1Rzs7WUFDSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDaEMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQixrQkFBQTtZQUNoQixVQUFVLEVBQUUsZUFBZTtZQUMzQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7U0FDdEQsQ0FBQyxDQUFDOztZQUNHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztZQUN6RSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDOUIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLHdCQUFRLElBQUksQ0FBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxtQkFBQSxpQkFBaUIsRUFBNEIsQ0FBQztRQUMzRSxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFFakIsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUEyQjtZQUNuRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixFQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBMURGLFVBQVU7Ozs7Z0JBYnNCLE9BQU87O0lBd0V4Qyw2QkFBQztDQUFBLEFBM0RELElBMkRDO1NBMURZLHNCQUFzQjs7Ozs7O0lBQ2pDLHFDQUErQjs7SUFDL0Isc0NBQXVCOztJQUV2QixzQ0FBb0U7O0lBQ3BFLHVDQUErRTs7Ozs7SUFFbkUseUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvblBvc2l0aW9uUGFpciwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEV2ZW50LFxuICBSZXVzZUNvbnRleHRJMThuLFxuICBSZXVzZUN1c3RvbUNvbnRleHRNZW51LFxufSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dFNlcnZpY2Uge1xuICBwcml2YXRlIHJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIGkxOG46IFJldXNlQ29udGV4dEkxOG47XG5cbiAgc2hvdzogU3ViamVjdDxSZXVzZUNvbnRleHRFdmVudD4gPSBuZXcgU3ViamVjdDxSZXVzZUNvbnRleHRFdmVudD4oKTtcbiAgY2xvc2U6IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4gPSBuZXcgU3ViamVjdDxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikgcmV0dXJuO1xuICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgIHRoaXMucmVmLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlZiA9IG51bGw7XG4gIH1cblxuICBvcGVuKGNvbnRleHQ6IFJldXNlQ29udGV4dEV2ZW50KSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgICBjb25zdCB7IGV2ZW50LCBpdGVtLCBjdXN0b21Db250ZXh0TWVudSB9ID0gY29udGV4dDtcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcbiAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcbiAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYLFxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCkpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pMThuID0gdGhpcy5pMThuO1xuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICBpbnN0YW5jZS5jdXN0b21Db250ZXh0TWVudSA9IGN1c3RvbUNvbnRleHRNZW51IGFzIFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBzdWIkLmFkZChcbiAgICAgIGluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=