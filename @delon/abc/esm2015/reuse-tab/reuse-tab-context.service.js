/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ElementRef } from '@angular/core';
import { Overlay, ConnectionPositionPair, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, Subject } from 'rxjs';
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
        const { event, item } = context;
        /** @type {?} */
        const fakeElement = new ElementRef({
            getBoundingClientRect: () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }),
        });
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
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
        instance.event = event;
        /** @type {?} */
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((res) => {
            this.close.next(res);
            this.remove();
        }));
        comp.onDestroy(() => sub$.unsubscribe());
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
    /** @type {?} */
    ReuseTabContextService.prototype.ref;
    /** @type {?} */
    ReuseTabContextService.prototype.i18n;
    /** @type {?} */
    ReuseTabContextService.prototype.show;
    /** @type {?} */
    ReuseTabContextService.prototype.close;
    /** @type {?} */
    ReuseTabContextService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUNMLE9BQU8sRUFFUCxzQkFBc0IsR0FDdkIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbEYsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVNqQyxZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBTHBDLFNBQUksR0FBK0IsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDcEUsVUFBSyxHQUFvQyxJQUFJLE9BQU8sRUFFakQsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXhDLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxPQUEwQjtRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Y0FDUixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPOztjQUN6QixXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDakMscUJBQXFCLEVBQUUsR0FBZSxFQUFFLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNsQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSCxDQUFDOztjQUNJLFNBQVMsR0FBRztZQUNoQixJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUN2QyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUN2QztZQUNELElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQzFDO1NBQ0Y7O2NBQ0ssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ2hDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM3QixnQkFBZ0I7WUFDaEIsVUFBVSxFQUFFLGVBQWU7WUFDM0IsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELENBQUMsQ0FBQzs7Y0FDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQzFCLElBQUksZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQ2xEOztjQUNLLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLElBQUkscUJBQVEsSUFBSSxDQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O2NBRWpCLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUNOLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBMkIsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFuRUYsVUFBVTs7OztZQWRULE9BQU87Ozs7SUFnQlAscUNBQXdCOztJQUN4QixzQ0FBdUI7O0lBRXZCLHNDQUFvRTs7SUFDcEUsdUNBRUk7O0lBRVEseUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0RXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8XG4gICAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudFxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgKSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxuICAgICAgKSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKFxuICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50KSxcbiAgICApO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pMThuID0gdGhpcy5pMThuO1xuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBzdWIkLmFkZChcbiAgICAgIGluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=