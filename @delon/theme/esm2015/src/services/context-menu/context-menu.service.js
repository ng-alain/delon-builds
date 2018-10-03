/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, TemplateRef, ElementRef, } from '@angular/core';
import { Overlay, ConnectionPositionPair, } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal, } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/** @typedef {?} */
var ContextMenuType;
export { ContextMenuType };
export class ContextMenuService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @param {?} event
     * @param {?=} options
     * @return {?}
     */
    create(event, options) {
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
        this.ref = this.overlay.create(Object.assign({
            positionStrategy,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
        }, options));
        if (this.type instanceof TemplateRef) {
            this.ref.attach(new TemplatePortal(this.type, this.containerRef));
        }
        else {
            this.ref.attach(new ComponentPortal(this.type, this.containerRef));
        }
        this.ref.backdropClick().subscribe(() => this.close());
    }
    /**
     * @param {?} event
     * @param {?} ref
     * @param {?} containerRef
     * @param {?=} options
     * @return {?}
     */
    open(event, ref, containerRef, options) {
        this.close();
        this.type = ref;
        this.containerRef = containerRef;
        this.create(event, options);
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
}
ContextMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ContextMenuService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ ContextMenuService.ngInjectableDef = i0.defineInjectable({ factory: function ContextMenuService_Factory() { return new ContextMenuService(i0.inject(i1.Overlay)); }, token: ContextMenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ContextMenuService.prototype.ref;
    /** @type {?} */
    ContextMenuService.prototype.type;
    /** @type {?} */
    ContextMenuService.prototype.containerRef;
    /** @type {?} */
    ContextMenuService.prototype.overlay;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFFUCxzQkFBc0IsR0FFdkIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsR0FFaEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBTzdCLE1BQU07Ozs7SUFLSixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0tBQUk7Ozs7OztJQUVoQyxNQUFNLENBQUMsS0FBaUIsRUFBRSxPQUF1Qjs7UUFDdkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDakMscUJBQXFCLEVBQUUsR0FBZSxFQUFFLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNsQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSCxDQUFDLENBQUM7O1FBQ0gsTUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDdkM7WUFDRCxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUMxQztTQUNGLENBQUM7O1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDaEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxnQkFBZ0I7WUFDaEIsV0FBVyxFQUFFLElBQUk7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFHekQsSUFBSSxDQUNGLEtBQWlCLEVBQ2pCLEdBQW9CLEVBQ3BCLFlBQThCLEVBQzlCLE9BQXVCO1FBRXZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7S0FDZDs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztLQUNqQjs7O1lBekVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWZDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5UmVmLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBPdmVybGF5Q29uZmlnLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBUZW1wbGF0ZVBvcnRhbCxcbiAgQ29tcG9uZW50UG9ydGFsLFxuICBDb21wb25lbnRUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuZXhwb3J0IHR5cGUgQ29udGV4dE1lbnVUeXBlID0gVGVtcGxhdGVSZWY8e30+IHwgQ29tcG9uZW50VHlwZTx7fT47XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudVNlcnZpY2Uge1xuICBwcml2YXRlIHJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSB0eXBlOiBDb250ZXh0TWVudVR5cGU7XG4gIHByaXZhdGUgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICBwcml2YXRlIGNyZWF0ZShldmVudDogTW91c2VFdmVudCwgb3B0aW9ucz86IE92ZXJsYXlDb25maWcpIHtcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcbiAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcbiAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYLFxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sXG4gICAgICApLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0sXG4gICAgICApLFxuICAgIF07XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGZha2VFbGVtZW50KVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgICBpZiAodGhpcy50eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMucmVmLmF0dGFjaChuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy50eXBlLCB0aGlzLmNvbnRhaW5lclJlZikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbCh0aGlzLnR5cGUsIHRoaXMuY29udGFpbmVyUmVmKSk7XG4gICAgfVxuICAgIHRoaXMucmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgfVxuXG4gIG9wZW4oXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQsXG4gICAgcmVmOiBDb250ZXh0TWVudVR5cGUsXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIG9wdGlvbnM/OiBPdmVybGF5Q29uZmlnLFxuICApOiBmYWxzZSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMudHlwZSA9IHJlZjtcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IGNvbnRhaW5lclJlZjtcbiAgICB0aGlzLmNyZWF0ZShldmVudCwgb3B0aW9ucyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxufVxuIl19