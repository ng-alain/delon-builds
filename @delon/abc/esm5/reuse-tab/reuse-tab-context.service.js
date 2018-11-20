/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, ElementRef } from '@angular/core';
import { Overlay, ConnectionPositionPair, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription, Subject } from 'rxjs';
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
        var event = context.event, item = context.item;
        /** @type {?} */
        var fakeElement = new ElementRef({
            getBoundingClientRect: function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); },
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
        instance.event = event;
        /** @type {?} */
        var sub$ = new Subscription();
        sub$.add(instance.close.subscribe(function (res) {
            _this.close.next(res);
            _this.remove();
        }));
        comp.onDestroy(function () { return sub$.unsubscribe(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxPQUFPLEVBRVAsc0JBQXNCLEdBQ3ZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxGO0lBVUUsZ0NBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFMcEMsU0FBSSxHQUErQixJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUNwRSxVQUFLLEdBQW9DLElBQUksT0FBTyxFQUVqRCxDQUFDO0lBRW1DLENBQUM7Ozs7SUFFeEMsdUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBSTs7OztJQUFKLFVBQUssT0FBMEI7UUFBL0IsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNOLElBQUEscUJBQUssRUFBRSxtQkFBSTs7WUFDYixXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDakMscUJBQXFCLEVBQUUsY0FBa0IsT0FBQSxDQUFDO2dCQUN4QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ2xCLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxFQVB1QyxDQU92QztTQUNILENBQUM7O1lBQ0ksU0FBUyxHQUFHO1lBQ2hCLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQ3ZDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ3ZDO1lBQ0QsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDMUM7U0FDRjs7WUFDSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDaEMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQixrQkFBQTtZQUNoQixVQUFVLEVBQUUsZUFBZTtZQUMzQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7U0FDdEQsQ0FBQyxDQUFDOztZQUNHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDMUIsSUFBSSxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FDbEQ7O1lBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsSUFBSSx3QkFBUSxJQUFJLENBQUUsQ0FBQztRQUM1QixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFFakIsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUEyQjtZQUNuRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQW5FRixVQUFVOzs7O2dCQWRULE9BQU87O0lBa0ZULDZCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FuRVksc0JBQXNCOzs7SUFDakMscUNBQXdCOztJQUN4QixzQ0FBdUI7O0lBRXZCLHNDQUFvRTs7SUFDcEUsdUNBRUk7O0lBRVEseUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0RXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xuICBpMThuOiBSZXVzZUNvbnRleHRJMThuO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8XG4gICAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudFxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgKSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxuICAgICAgKSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAncmV1c2UtdGFiX19jbScsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gdGhpcy5yZWYuYXR0YWNoKFxuICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50KSxcbiAgICApO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pMThuID0gdGhpcy5pMThuO1xuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcbiAgICBpbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBzdWIkLmFkZChcbiAgICAgIGluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBjb21wLm9uRGVzdHJveSgoKSA9PiBzdWIkLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=