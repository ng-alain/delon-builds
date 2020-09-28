/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
export class ReuseTabContextService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    /**
     * @return {?}
     */
    remove() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
    /**
     * @param {?} context
     * @return {?}
     */
    open(context) {
        this.remove();
        const { event, item, customContextMenu } = context;
        /** @type {?} */
        const fakeElement = new ElementRef({
            getBoundingClientRect: (/**
             * @return {?}
             */
            () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            })),
        });
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        const positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElement).withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy,
            panelClass: 'reuse-tab__cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        /** @type {?} */
        const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
        /** @type {?} */
        const instance = comp.instance;
        instance.i18n = this.i18n;
        instance.item = Object.assign({}, item);
        instance.customContextMenu = (/** @type {?} */ (customContextMenu));
        instance.event = event;
        /** @type {?} */
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.close.next(res);
            this.remove();
        })));
        comp.onDestroy((/**
         * @return {?}
         */
        () => sub$.unsubscribe()));
    }
}
ReuseTabContextService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReuseTabContextService.ctorParameters = () => [
    { type: Overlay }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlsRixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBT2pDLFlBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFIcEMsU0FBSSxHQUErQixJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUNwRSxVQUFLLEdBQW9DLElBQUksT0FBTyxFQUEwQixDQUFDO0lBRXhDLENBQUM7Ozs7SUFFeEMsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQTBCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztjQUNSLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU87O2NBQzVDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUNqQyxxQkFBcUI7OztZQUFFLEdBQWUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDckIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDbEIsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUE7U0FDSCxDQUFDOztjQUNJLFNBQVMsR0FBRztZQUNoQixJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMzRyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUM1Rzs7Y0FDSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDMUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixnQkFBZ0I7WUFDaEIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELENBQUMsQ0FBQzs7Y0FDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7Y0FDekUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsSUFBSSxxQkFBUSxJQUFJLENBQUUsQ0FBQztRQUM1QixRQUFRLENBQUMsaUJBQWlCLEdBQUcsbUJBQUEsaUJBQWlCLEVBQTRCLENBQUM7UUFDM0UsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O2NBRWpCLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBMkIsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0lBQzNDLENBQUM7OztZQXZERixVQUFVOzs7O1lBUHNCLE9BQU87Ozs7Ozs7SUFTdEMscUNBQStCOztJQUMvQixzQ0FBdUI7O0lBRXZCLHNDQUFvRTs7SUFDcEUsdUNBQStFOzs7OztJQUVuRSx5Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlQ29udGV4dENsb3NlRXZlbnQsIFJldXNlQ29udGV4dEV2ZW50LCBSZXVzZUNvbnRleHRJMThuLCBSZXVzZUN1c3RvbUNvbnRleHRNZW51IH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XG4gICAgdGhpcy5yZWYgPSBudWxsO1xuICB9XG5cbiAgb3Blbihjb250ZXh0OiBSZXVzZUNvbnRleHRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgY29uc3QgeyBldmVudCwgaXRlbSwgY3VzdG9tQ29udGV4dE1lbnUgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXG4gICAgXTtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudCkud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgcGFuZWxDbGFzczogJ3JldXNlLXRhYl9fY20nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQpKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXAuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcbiAgICBpbnN0YW5jZS5pdGVtID0geyAuLi5pdGVtIH07XG4gICAgaW5zdGFuY2UuY3VzdG9tQ29udGV4dE1lbnUgPSBjdXN0b21Db250ZXh0TWVudSBhcyBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG4gICAgaW5zdGFuY2UuZXZlbnQgPSBldmVudDtcblxuICAgIGNvbnN0IHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgc3ViJC5hZGQoXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQocmVzKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgY29tcC5vbkRlc3Ryb3koKCkgPT4gc3ViJC51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19