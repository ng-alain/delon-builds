/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@delon/util";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRzlEO0lBYUUsd0JBQW9CLE9BQWdCLEVBQUUsU0FBNkI7UUFBbkUsaUJBZUM7UUFmbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVY1QixZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQWdDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxRQUFROzs7UUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO2FBQzVDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDcEMsQ0FBQztJQW5CRCxzQkFBSSxvQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTs7Ozs7SUFtQk8sK0JBQU07Ozs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFO1lBQzFGLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNyRCxXQUFXLEVBQUUsSUFBSTtZQUNqQixhQUFhLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUMsQ0FBQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsdUJBQXVCLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELDZCQUFJOzs7O0lBQUosVUFBSyxPQUE0QjtRQUMvQixJQUFJLENBQUMsR0FBRyx5QkFBUSxJQUFJLENBQUMsR0FBRyxHQUFLLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sK0JBQU07Ozs7O0lBQWQsVUFBZSxRQUFpQjtRQUM5QixJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBakVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBVHpCLE9BQU87Z0JBR1Asa0JBQWtCOzs7eUJBSDNCO0NBMkVDLEFBbEVELElBa0VDO1NBakVZLGNBQWM7Ozs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUFxRTs7Ozs7SUFDckUsNkJBQThDOzs7OztJQUM5Qyw2QkFBZ0M7Ozs7O0lBQ2hDLDRCQUEyQjs7Ozs7SUFDM0Isa0NBQStCOzs7OztJQU1uQixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkxvYWRpbmdDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBjb21wUmVmOiBDb21wb25lbnRSZWY8TG9hZGluZ0RlZmF1bHRDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb3B0OiBMb2FkaW5nU2hvd09wdGlvbnMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluTG9hZGluZ0NvbmZpZztcbiAgcHJpdmF0ZSBuJCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgbG9hZGluZyQ6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcFJlZiAhPSBudWxsID8gdGhpcy5jb21wUmVmLmluc3RhbmNlIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZTxBbGFpbkxvYWRpbmdDb25maWcsICdsb2FkaW5nJz4oJ2xvYWRpbmcnLCB7XG4gICAgICB0eXBlOiAnc3BpbicsXG4gICAgICB0ZXh0OiAn5Yqg6L295LitLi4uJyxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgICAgICBzcGluOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRlbGF5OiAwLFxuICAgIH0pO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLm4kXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKHRoaXMub3B0IS5kZWxheSkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLm9wdCA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLl9jbG9zZShmYWxzZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2xvYWRpbmctYmFja2Ryb3AnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXAgPSBuZXcgQ29tcG9uZW50UG9ydGFsKExvYWRpbmdEZWZhdWx0Q29tcG9uZW50KTtcbiAgICB0aGlzLmNvbXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChjb21wKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuaW5zdGFuY2UsIHsgb3B0aW9uczogdGhpcy5vcHQgfSk7XG4gICAgdGhpcy5jb21wUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb3BlbihvcHRpb25zPzogTG9hZGluZ1Nob3dPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5vcHQgPSB7IC4uLnRoaXMuY29nLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5uJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZShjbGVhbk9wdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChjbGVhbk9wdCkgdGhpcy5vcHQgPSBudWxsO1xuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZikgcmV0dXJuO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5jb21wUmVmID0gbnVsbDtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=