/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingDefaultComponent } from './loading.component';
import { LoadingConfig } from './loading.config';
import * as i0 from "@angular/core";
import * as i1 from "./loading.config";
import * as i2 from "@angular/cdk/overlay";
var LoadingService = /** @class */ (function () {
    function LoadingService(cog, overlay) {
        var _this = this;
        this.cog = cog;
        this.overlay = overlay;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce((/**
         * @return {?}
         */
        function () { return timer((/** @type {?} */ (_this.opt)).delay); })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.create(); }));
    }
    Object.defineProperty(LoadingService.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.compRef != null ? this.compRef.instance : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LoadingService.prototype.create = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        /** @type {?} */
        var comp = new ComponentPortal(LoadingDefaultComponent);
        this.compRef = this._overlayRef.attach(comp);
        Object.assign(this.instance, { options: this.opt });
        this.compRef.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    LoadingService.prototype.open = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.opt = __assign(__assign({}, this.cog), options);
        this.n$.next();
    };
    /**
     * @private
     * @param {?} cleanOpt
     * @return {?}
     */
    LoadingService.prototype._close = /**
     * @private
     * @param {?} cleanOpt
     * @return {?}
     */
    function (cleanOpt) {
        if (cleanOpt)
            this.opt = null;
        if (!this._overlayRef)
            return;
        this._overlayRef.detach();
        this.compRef = null;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.close = /**
     * @return {?}
     */
    function () {
        this._close(true);
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.loading$.unsubscribe();
    };
    LoadingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return [
        { type: LoadingConfig },
        { type: Overlay }
    ]; };
    /** @nocollapse */ LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.LoadingConfig), i0.ɵɵinject(i2.Overlay)); }, token: LoadingService, providedIn: "root" });
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
    LoadingService.prototype.opt;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.n$;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.loading$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHakQ7SUFZRSx3QkFBb0IsR0FBa0IsRUFBVSxPQUFnQjtRQUFoRSxpQkFLQztRQUxtQixRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVR4RCxZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUN0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxRQUFROzs7UUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO2FBQzVDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDcEMsQ0FBQztJQVRELHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELENBQUM7OztPQUFBOzs7OztJQVNPLCtCQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7O1lBQ0csSUFBSSxHQUFHLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssT0FBNEI7UUFDL0IsSUFBSSxDQUFDLEdBQUcseUJBQVEsSUFBSSxDQUFDLEdBQUcsR0FBSyxPQUFPLENBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLCtCQUFNOzs7OztJQUFkLFVBQWUsUUFBaUI7UUFDOUIsSUFBSSxRQUFRO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCw4QkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQXZERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUh6QixhQUFhO2dCQU5iLE9BQU87Ozt5QkFBaEI7Q0FpRUMsQUF4REQsSUF3REM7U0F2RFksY0FBYzs7Ozs7O0lBQ3pCLHFDQUFnQzs7Ozs7SUFDaEMsaUNBQXFFOzs7OztJQUNyRSw2QkFBOEM7Ozs7O0lBQzlDLDRCQUEyQjs7Ozs7SUFDM0Isa0NBQStCOzs7OztJQU1uQiw2QkFBMEI7Ozs7O0lBQUUsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuY29uZmlnJztcbmltcG9ydCB7IExvYWRpbmdTaG93T3B0aW9ucyB9IGZyb20gJy4vbG9hZGluZy5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdEZWZhdWx0Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9wdDogTG9hZGluZ1Nob3dPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbiQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGxvYWRpbmckOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBSZWYgIT0gbnVsbCA/IHRoaXMuY29tcFJlZi5pbnN0YW5jZSA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZzogTG9hZGluZ0NvbmZpZywgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMubiRcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUoZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5vcHQhLmRlbGF5KSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMub3B0ID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuX2Nsb3NlKGZhbHNlKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnbG9hZGluZy1iYWNrZHJvcCcsXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IG5ldyBDb21wb25lbnRQb3J0YWwoTG9hZGluZ0RlZmF1bHRDb21wb25lbnQpO1xuICAgIHRoaXMuY29tcFJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKGNvbXApO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5pbnN0YW5jZSwgeyBvcHRpb25zOiB0aGlzLm9wdCB9KTtcbiAgICB0aGlzLmNvbXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvcGVuKG9wdGlvbnM/OiBMb2FkaW5nU2hvd09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLm9wdCA9IHsgLi4udGhpcy5jb2csIC4uLm9wdGlvbnMgfTtcblxuICAgIHRoaXMubiQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoY2xlYW5PcHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoY2xlYW5PcHQpIHRoaXMub3B0ID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHJldHVybjtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29tcFJlZiA9IG51bGw7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19