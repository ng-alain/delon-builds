/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class LoadingService {
    /**
     * @param {?} overlay
     * @param {?} configSrv
     */
    constructor(overlay, configSrv) {
        this.overlay = overlay;
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
        /** @type {?} */
        const comp = new ComponentPortal(LoadingDefaultComponent);
        this.compRef = this._overlayRef.attach(comp);
        Object.assign(this.instance, { options: this.opt });
        this.compRef.changeDetectorRef.markForCheck();
    }
    /**
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
    { type: AlainConfigService }
];
/** @nocollapse */ LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.AlainConfigService)); }, token: LoadingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQXNCLE1BQU0sYUFBYSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFJOUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBWXpCLFlBQW9CLE9BQWdCLEVBQUUsU0FBNkI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVY1QixZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUV0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsRUFBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRTthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsUUFBUTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO2FBQzVDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFuQkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxDQUFDOzs7OztJQW1CTyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUYsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDOztjQUNHLElBQUksR0FBRyxJQUFJLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQTRCO1FBQy9CLElBQUksQ0FBQyxHQUFHLG1DQUFRLElBQUksQ0FBQyxHQUFHLEdBQUssT0FBTyxDQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsUUFBaUI7UUFDOUIsSUFBSSxRQUFRO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBakVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFUekIsT0FBTztZQUdQLGtCQUFrQjs7Ozs7Ozs7SUFRekIscUNBQWdDOzs7OztJQUNoQyxpQ0FBcUU7Ozs7O0lBQ3JFLDZCQUE4Qzs7Ozs7SUFDOUMsNkJBQWdDOzs7OztJQUNoQyw0QkFBMkI7Ozs7O0lBQzNCLGtDQUErQjs7Ozs7SUFNbkIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5Mb2FkaW5nQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPExvYWRpbmdEZWZhdWx0Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9wdDogTG9hZGluZ1Nob3dPcHRpb25zIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29nOiBBbGFpbkxvYWRpbmdDb25maWc7XG4gIHByaXZhdGUgbiQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGxvYWRpbmckOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBSZWYgIT0gbnVsbCA/IHRoaXMuY29tcFJlZi5pbnN0YW5jZSA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ2xvYWRpbmcnLCB7XG4gICAgICB0eXBlOiAnc3BpbicsXG4gICAgICB0ZXh0OiAn5Yqg6L295LitLi4uJyxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgICAgICBzcGluOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRlbGF5OiAwLFxuICAgIH0pITtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5uJFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShkZWJvdW5jZSgoKSA9PiB0aW1lcih0aGlzLm9wdCEuZGVsYXkpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5vcHQgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2xvc2UoZmFsc2UpO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdsb2FkaW5nLWJhY2tkcm9wJyxcbiAgICB9KTtcbiAgICBjb25zdCBjb21wID0gbmV3IENvbXBvbmVudFBvcnRhbChMb2FkaW5nRGVmYXVsdENvbXBvbmVudCk7XG4gICAgdGhpcy5jb21wUmVmID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2goY29tcCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7IG9wdGlvbnM6IHRoaXMub3B0IH0pO1xuICAgIHRoaXMuY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9wZW4ob3B0aW9ucz86IExvYWRpbmdTaG93T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0ID0geyAuLi50aGlzLmNvZywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMubiQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoY2xlYW5PcHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoY2xlYW5PcHQpIHRoaXMub3B0ID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHJldHVybjtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29tcFJlZiA9IG51bGw7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19