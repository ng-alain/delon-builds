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
var ContextMenuService = /** @class */ (function () {
    function ContextMenuService(overlay) {
        this.overlay = overlay;
    }
    /**
     * @param {?} event
     * @param {?=} options
     * @return {?}
     */
    ContextMenuService.prototype.create = /**
     * @param {?} event
     * @param {?=} options
     * @return {?}
     */
    function (event, options) {
        var _this = this;
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
        this.ref = this.overlay.create(Object.assign({
            positionStrategy: positionStrategy,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
        }, options));
        if (this.type instanceof TemplateRef) {
            this.ref.attach(new TemplatePortal(this.type, this.containerRef));
        }
        else {
            this.ref.attach(new ComponentPortal(this.type, this.containerRef));
        }
        this.ref.backdropClick().subscribe(function () { return _this.close(); });
    };
    /**
     * @param {?} event
     * @param {?} ref
     * @param {?} containerRef
     * @param {?=} options
     * @return {?}
     */
    ContextMenuService.prototype.open = /**
     * @param {?} event
     * @param {?} ref
     * @param {?} containerRef
     * @param {?=} options
     * @return {?}
     */
    function (event, ref, containerRef, options) {
        this.close();
        this.type = ref;
        this.containerRef = containerRef;
        this.create(event, options);
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
    /**
     * @return {?}
     */
    ContextMenuService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    };
    ContextMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ ContextMenuService.ngInjectableDef = i0.defineInjectable({ factory: function ContextMenuService_Factory() { return new ContextMenuService(i0.inject(i1.Overlay)); }, token: ContextMenuService, providedIn: "root" });
    return ContextMenuService;
}());
export { ContextMenuService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFFUCxzQkFBc0IsR0FFdkIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsR0FFaEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztJQVkzQiw0QkFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztLQUFJOzs7Ozs7SUFFaEMsbUNBQU07Ozs7O2NBQUMsS0FBaUIsRUFBRSxPQUF1Qjs7O1FBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksVUFBVSxDQUFDO1lBQ2pDLHFCQUFxQixFQUFFLGNBQWtCLE9BQUEsQ0FBQztnQkFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNsQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsRUFQdUMsQ0FPdkM7U0FDSCxDQUFDLENBQUM7O1FBQ0gsSUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FDdkM7WUFDRCxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUMxQztTQUNGLENBQUM7O1FBQ0YsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxXQUFXLENBQUM7YUFDaEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxnQkFBZ0Isa0JBQUE7WUFDaEIsV0FBVyxFQUFFLElBQUk7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7Ozs7Ozs7OztJQUd6RCxpQ0FBSTs7Ozs7OztJQUFKLFVBQ0UsS0FBaUIsRUFDakIsR0FBb0IsRUFDcEIsWUFBOEIsRUFDOUIsT0FBdUI7UUFFdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztLQUNkOzs7O0lBRUQsa0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDakI7O2dCQXpFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWZDLE9BQU87Ozs2QkFQVDs7U0F1QmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJbmplY3RhYmxlLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBPdmVybGF5Q29uZmlnLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBUZW1wbGF0ZVBvcnRhbCxcclxuICBDb21wb25lbnRQb3J0YWwsXHJcbiAgQ29tcG9uZW50VHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHRNZW51VHlwZSA9IFRlbXBsYXRlUmVmPHt9PiB8IENvbXBvbmVudFR5cGU8e30+O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB0eXBlOiBDb250ZXh0TWVudVR5cGU7XHJcbiAgcHJpdmF0ZSBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIG9wdGlvbnM/OiBPdmVybGF5Q29uZmlnKSB7XHJcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcclxuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xyXG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcclxuICAgICAgKSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxyXG4gICAgICApLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLnR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnJlZi5hdHRhY2gobmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcblxyXG4gIG9wZW4oXHJcbiAgICBldmVudDogTW91c2VFdmVudCxcclxuICAgIHJlZjogQ29udGV4dE1lbnVUeXBlLFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgb3B0aW9ucz86IE92ZXJsYXlDb25maWcsXHJcbiAgKTogZmFsc2Uge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy50eXBlID0gcmVmO1xyXG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBjb250YWluZXJSZWY7XHJcbiAgICB0aGlzLmNyZWF0ZShldmVudCwgb3B0aW9ucyk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcclxuICAgIHRoaXMucmVmLmRldGFjaCgpO1xyXG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5yZWYgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=