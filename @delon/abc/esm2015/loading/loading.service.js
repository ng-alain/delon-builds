/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@delon/util/config";
import * as i3 from "@angular/cdk/bidi";
export class LoadingService {
    /**
     * @param {?} overlay
     * @param {?} configSrv
     * @param {?} directionality
     */
    constructor(overlay, configSrv, directionality) {
        this.overlay = overlay;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.cog = (/** @type {?} */ (configSrv.merge('loading', {
            type: 'spin',
            text: '加载中...',
            icon: {
                type: 'loading',
                theme: 'outline',
                spin: true,
            },
            delay: 0,
        })));
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce((/**
         * @return {?}
         */
        () => timer((/** @type {?} */ (this.opt)).delay))))
            .subscribe((/**
         * @return {?}
         */
        () => this.create()));
    }
    /**
     * @return {?}
     */
    get instance() {
        return this.compRef != null ? this.compRef.instance : null;
    }
    /**
     * @private
     * @return {?}
     */
    create() {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
        /** @type {?} */
        const dir = (/** @type {?} */ (this.configSrv.get('loading'))).direction || this.directionality.value;
        Object.assign(this.instance, { options: this.opt, dir });
        this.compRef.changeDetectorRef.markForCheck();
    }
    /**
     * Open a new loading indicator
     *
     * 打开一个新加载指示符
     * @param {?=} options
     * @return {?}
     */
    open(options) {
        this.opt = Object.assign(Object.assign({}, this.cog), options);
        this.n$.next();
    }
    /**
     * @private
     * @param {?} cleanOpt
     * @return {?}
     */
    _close(cleanOpt) {
        if (cleanOpt)
            this.opt = null;
        if (!this._overlayRef)
            return;
        this._overlayRef.detach();
        this.compRef = null;
    }
    /**
     * Turn off a loading indicator
     *
     * 关闭一个加载指示符
     * @return {?}
     */
    close() {
        this._close(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [
    { type: Overlay },
    { type: AlainConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
/** @nocollapse */ LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i3.Directionality, 8)); }, token: LoadingService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.configSrv;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.directionality;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUk5RCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBWXpCLFlBQW9CLE9BQWdCLEVBQVUsU0FBNkIsRUFBc0IsY0FBOEI7UUFBM0csWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQXNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZ2SCxZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7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O0lBQ3JFLDZCQUE4Qzs7Ozs7SUFDOUMsNkJBQWdDOzs7OztJQUNoQyw0QkFBMkI7Ozs7O0lBQzNCLGtDQUErQjs7Ozs7SUFNbkIsaUNBQXdCOzs7OztJQUFFLG1DQUFxQzs7Ozs7SUFBRSx3Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkxvYWRpbmdDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdEZWZhdWx0Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9wdDogTG9hZGluZ1Nob3dPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29nOiBBbGFpbkxvYWRpbmdDb25maWc7XG4gIHByaXZhdGUgbiQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGxvYWRpbmckOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGluc3RhbmNlKCk6IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcFJlZiAhPSBudWxsID8gdGhpcy5jb21wUmVmLmluc3RhbmNlIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnbG9hZGluZycsIHtcbiAgICAgIHR5cGU6ICdzcGluJyxcbiAgICAgIHRleHQ6ICfliqDovb3kuK0uLi4nLFxuICAgICAgaWNvbjoge1xuICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgICAgIHNwaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgZGVsYXk6IDAsXG4gICAgfSkhO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLm4kXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKHRoaXMub3B0IS5kZWxheSkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNyZWF0ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdCA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLl9jbG9zZShmYWxzZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2xvYWRpbmctYmFja2Ryb3AnLFxuICAgIH0pO1xuICAgIHRoaXMuY29tcFJlZiA9IHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTG9hZGluZ0RlZmF1bHRDb21wb25lbnQpKTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmNvbmZpZ1Nydi5nZXQoJ2xvYWRpbmcnKSEuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7IG9wdGlvbnM6IHRoaXMub3B0LCBkaXIgfSk7XG4gICAgdGhpcy5jb21wUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYSBuZXcgbG9hZGluZyBpbmRpY2F0b3JcbiAgICpcbiAgICog5omT5byA5LiA5Liq5paw5Yqg6L295oyH56S656ymXG4gICAqL1xuICBvcGVuKG9wdGlvbnM/OiBMb2FkaW5nU2hvd09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLm9wdCA9IHsgLi4udGhpcy5jb2csIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLm4kLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKGNsZWFuT3B0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGNsZWFuT3B0KSB0aGlzLm9wdCA9IG51bGw7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSByZXR1cm47XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB0aGlzLmNvbXBSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gb2ZmIGEgbG9hZGluZyBpbmRpY2F0b3JcbiAgICpcbiAgICog5YWz6Zet5LiA5Liq5Yqg6L295oyH56S656ymXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19