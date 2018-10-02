/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxPQUFPLEVBRVAsc0JBQXNCLEdBQ3ZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQVloRixnQ0FBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFMRCxJQUFJLE9BQU8sRUFBcUI7cUJBQzFCLElBQUksT0FBTyxFQUVqRDtLQUVxQzs7OztJQUV4Qyx1Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztLQUNqQjs7Ozs7SUFFRCxxQ0FBSTs7OztJQUFKLFVBQUssT0FBMEI7UUFBL0IsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNOLElBQUEscUJBQUssRUFBRSxtQkFBSSxDQUFhOztRQUNoQyxJQUFNLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUNqQyxxQkFBcUIsRUFBRSxjQUFrQixPQUFBLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDckIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDbEIsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLEVBUHVDLENBT3ZDO1NBQ0gsQ0FBQyxDQUFDOztRQUNILElBQU0sU0FBUyxHQUFHO1lBQ2hCLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQ3ZDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ3ZDO1lBQ0QsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FDMUM7U0FDRixDQUFDOztRQUNGLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2FBQ2hDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQixrQkFBQTtZQUNoQixVQUFVLEVBQUUsZUFBZTtZQUMzQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7U0FDdEQsQ0FBQyxDQUFDOztRQUNILElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUMxQixJQUFJLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUNsRCxDQUFDOztRQUNGLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLHdCQUFRLElBQUksQ0FBRSxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztRQUV2QixJQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUEyQjtZQUNuRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZixDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0tBQzFDOztnQkFuRUYsVUFBVTs7OztnQkFkVCxPQUFPOztpQ0FGVDs7U0FpQmEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE92ZXJsYXksXHJcbiAgT3ZlcmxheVJlZixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBSZXVzZUNvbnRleHRFdmVudCxcclxuICBSZXVzZUNvbnRleHRJMThuLFxyXG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXHJcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJldXNlVGFiQ29udGV4dFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xyXG4gIGkxOG46IFJldXNlQ29udGV4dEkxOG47XHJcblxyXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XHJcbiAgY2xvc2U6IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4gPSBuZXcgU3ViamVjdDxcclxuICAgIFJldXNlQ29udGV4dENsb3NlRXZlbnRcclxuICA+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgaWYgKCF0aGlzLnJlZikgcmV0dXJuO1xyXG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XHJcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvcGVuKGNvbnRleHQ6IFJldXNlQ29udGV4dEV2ZW50KSB7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgeyBldmVudCwgaXRlbSB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gbmV3IEVsZW1lbnRSZWYoe1xyXG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XHJcbiAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxyXG4gICAgICApLFxyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXHJcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sXHJcbiAgICAgICksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAucG9zaXRpb24oKVxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgIHBhbmVsQ2xhc3M6ICdyZXVzZS10YWJfX2NtJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbXAgPSB0aGlzLnJlZi5hdHRhY2goXHJcbiAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCksXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wLmluc3RhbmNlO1xyXG4gICAgaW5zdGFuY2UuaTE4biA9IHRoaXMuaTE4bjtcclxuICAgIGluc3RhbmNlLml0ZW0gPSB7IC4uLml0ZW0gfTtcclxuICAgIGluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XHJcblxyXG4gICAgY29uc3Qgc3ViJCA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHN1YiQuYWRkKFxyXG4gICAgICBpbnN0YW5jZS5jbG9zZS5zdWJzY3JpYmUoKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UubmV4dChyZXMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICAgIGNvbXAub25EZXN0cm95KCgpID0+IHN1YiQudW5zdWJzY3JpYmUoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==