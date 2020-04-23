/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@delon/theme";
var LoadingService = /** @class */ (function () {
    function LoadingService(overlay, configSrv) {
        var _this = this;
        this.overlay = overlay;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.cog = configSrv.merge('loading', {
            type: 'spin',
            text: '加载中...',
            icon: {
                type: 'loading',
                theme: 'outline',
                spin: true,
            },
            delay: 0,
        });
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
        { type: Overlay },
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.AlainConfigService)); }, token: LoadingService, providedIn: "root" });
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
    LoadingService.prototype.cog;
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
    LoadingService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLGNBQWMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRzlEO0lBYUUsd0JBQW9CLE9BQWdCLEVBQUUsU0FBNkI7UUFBbkUsaUJBZUM7UUFmbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVY1QixZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQWdDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxRQUFROzs7UUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO2FBQzVDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDcEMsQ0FBQztJQW5CRCxzQkFBSSxvQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTs7Ozs7SUFtQk8sK0JBQU07Ozs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1lBQzFGLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNyRCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUMsQ0FBQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsdUJBQXVCLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELDZCQUFJOzs7O0lBQUosVUFBSyxPQUE0QjtRQUMvQixJQUFJLENBQUMsR0FBRyx5QkFBUSxJQUFJLENBQUMsR0FBRyxHQUFLLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sK0JBQU07Ozs7O0lBQWQsVUFBZSxRQUFpQjtRQUM5QixJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBakVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBVHpCLE9BQU87Z0JBR1Asa0JBQWtCOzs7eUJBSDNCO0NBMkVDLEFBbEVELElBa0VDO1NBakVZLGNBQWM7Ozs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUFxRTs7Ozs7SUFDckUsNkJBQThDOzs7OztJQUM5Qyw2QkFBZ0M7Ozs7O0lBQ2hDLDRCQUEyQjs7Ozs7SUFDM0Isa0NBQStCOzs7OztJQU1uQixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkxvYWRpbmdDb25maWcgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdEZWZhdWx0Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9wdDogTG9hZGluZ1Nob3dPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29nOiBBbGFpbkxvYWRpbmdDb25maWc7XG4gIHByaXZhdGUgbiQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGxvYWRpbmckOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBSZWYgIT0gbnVsbCA/IHRoaXMuY29tcFJlZi5pbnN0YW5jZSA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2U8QWxhaW5Mb2FkaW5nQ29uZmlnLCAnbG9hZGluZyc+KCdsb2FkaW5nJywge1xuICAgICAgdHlwZTogJ3NwaW4nLFxuICAgICAgdGV4dDogJ+WKoOi9veS4rS4uLicsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICAgICAgc3BpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkZWxheTogMCxcbiAgICB9KTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5uJFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShkZWJvdW5jZSgoKSA9PiB0aW1lcih0aGlzLm9wdCEuZGVsYXkpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5vcHQgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2xvc2UoZmFsc2UpO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdsb2FkaW5nLWJhY2tkcm9wJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gbmV3IENvbXBvbmVudFBvcnRhbChMb2FkaW5nRGVmYXVsdENvbXBvbmVudCk7XG4gICAgdGhpcy5jb21wUmVmID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goY29tcCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7IG9wdGlvbnM6IHRoaXMub3B0IH0pO1xuICAgIHRoaXMuY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9wZW4ob3B0aW9ucz86IExvYWRpbmdTaG93T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0ID0geyAuLi50aGlzLmNvZywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMubiQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoY2xlYW5PcHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoY2xlYW5PcHQpIHRoaXMub3B0ID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHJldHVybjtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29tcFJlZiA9IG51bGw7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19