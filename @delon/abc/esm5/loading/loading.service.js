/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "./loading.config";
import * as i2 from "@angular/cdk/overlay";
var LoadingService = /** @class */ (function () {
    function LoadingService(cog, overlay) {
        this.cog = cog;
        this.overlay = overlay;
        this.compRef = null;
    }
    Object.defineProperty(LoadingService.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.compRef)).instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} options
     * @return {?}
     */
    LoadingService.prototype.open = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (this.compRef)
            return;
        options = tslib_1.__assign({}, this.cog, options);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        /** @type {?} */
        var comp = new ComponentPortal(LoadingDefaultComponent);
        this.compRef = this._overlayRef.attach(comp);
        Object.assign(this.instance, { options: options });
        this.compRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this._overlayRef)
            return;
        (/** @type {?} */ (this.compRef)).destroy();
        this._overlayRef.detach();
        this.compRef = null;
    };
    LoadingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return [
        { type: LoadingConfig },
        { type: Overlay }
    ]; };
    /** @nocollapse */ LoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.LoadingConfig), i0.ɵɵinject(i2.Overlay)); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());
export { LoadingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.compRef;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTlEO0lBU0Usd0JBQW9CLEdBQWtCLEVBQVUsT0FBZ0I7UUFBNUMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFOeEQsWUFBTyxHQUFpRCxJQUFJLENBQUM7SUFNRixDQUFDO0lBSnBFLHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7Ozs7O0lBSUQsNkJBQUk7Ozs7SUFBSixVQUFLLE9BQTRCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXpCLE9BQU8sd0JBQVEsSUFBSSxDQUFDLEdBQUcsRUFBSyxPQUFPLENBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUMzQixRQUFRLEVBQUU7aUJBQ1YsTUFBTSxFQUFFO2lCQUNSLGtCQUFrQixFQUFFO2lCQUNwQixnQkFBZ0IsRUFBRTtZQUNyQixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7O1lBQ0csSUFBSSxHQUFHLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDhCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDOUIsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Z0JBcENGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLGFBQWE7Z0JBSGIsT0FBTzs7O3lCQURoQjtDQTRDQyxBQXJDRCxJQXFDQztTQXBDWSxjQUFjOzs7Ozs7SUFDekIscUNBQWdDOzs7OztJQUNoQyxpQ0FBcUU7Ozs7O0lBTXpELDZCQUEwQjs7Ozs7SUFBRSxpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IExvYWRpbmdTaG93T3B0aW9ucyB9IGZyb20gJy4vbG9hZGluZy5pbnRlcmZhY2VzJztcbmltcG9ydCB7IExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuY29uZmlnJztcbmltcG9ydCB7IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIGNvbXBSZWY6IENvbXBvbmVudFJlZjxMb2FkaW5nRGVmYXVsdENvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcblxuICBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcFJlZiEuaW5zdGFuY2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZzogTG9hZGluZ0NvbmZpZywgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIG9wZW4ob3B0aW9ucz86IExvYWRpbmdTaG93T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBSZWYpIHJldHVybjtcblxuICAgIG9wdGlvbnMgPSB7IC4uLnRoaXMuY29nLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5XG4gICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgIC5nbG9iYWwoKVxuICAgICAgICAuY2VudGVySG9yaXpvbnRhbGx5KClcbiAgICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnbG9hZGluZy1iYWNrZHJvcCcsXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IG5ldyBDb21wb25lbnRQb3J0YWwoTG9hZGluZ0RlZmF1bHRDb21wb25lbnQpO1xuICAgIHRoaXMuY29tcFJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKGNvbXApO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5pbnN0YW5jZSwgeyBvcHRpb25zIH0pO1xuICAgIHRoaXMuY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHJldHVybjtcbiAgICB0aGlzLmNvbXBSZWYhLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29tcFJlZiA9IG51bGw7XG4gIH1cbn1cbiJdfQ==