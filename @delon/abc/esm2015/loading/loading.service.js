/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBZ0IsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxhQUFhLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk5RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFZekIsWUFBb0IsT0FBZ0IsRUFBRSxTQUE2QjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBVjVCLFlBQU8sR0FBaUQsSUFBSSxDQUFDO1FBQzdELFFBQUcsR0FBOEIsSUFBSSxDQUFDO1FBRXRDLE9BQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUXpCLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDWDtZQUNELEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxFQUFDLENBQUM7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7YUFDNUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQW5CRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELENBQUM7Ozs7O0lBbUJPLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxPQUE0QjtRQUMvQixJQUFJLENBQUMsR0FBRyxtQ0FBUSxJQUFJLENBQUMsR0FBRyxHQUFLLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLFFBQWlCO1FBQzlCLElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQWhFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVHpCLE9BQU87WUFHUCxrQkFBa0I7Ozs7Ozs7O0lBUXpCLHFDQUFnQzs7Ozs7SUFDaEMsaUNBQXFFOzs7OztJQUNyRSw2QkFBOEM7Ozs7O0lBQzlDLDZCQUFnQzs7Ozs7SUFDaEMsNEJBQTJCOzs7OztJQUMzQixrQ0FBK0I7Ozs7O0lBTW5CLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTG9hZGluZ0NvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdTaG93T3B0aW9ucyB9IGZyb20gJy4vbG9hZGluZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIGNvbXBSZWY6IENvbXBvbmVudFJlZjxMb2FkaW5nRGVmYXVsdENvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBvcHQ6IExvYWRpbmdTaG93T3B0aW9ucyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNvZzogQWxhaW5Mb2FkaW5nQ29uZmlnO1xuICBwcml2YXRlIG4kID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBsb2FkaW5nJDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBpbnN0YW5jZSgpOiBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbXBSZWYgIT0gbnVsbCA/IHRoaXMuY29tcFJlZi5pbnN0YW5jZSA6IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ2xvYWRpbmcnLCB7XG4gICAgICB0eXBlOiAnc3BpbicsXG4gICAgICB0ZXh0OiAn5Yqg6L295LitLi4uJyxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgICAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgICAgICBzcGluOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRlbGF5OiAwLFxuICAgIH0pITtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5uJFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShkZWJvdW5jZSgoKSA9PiB0aW1lcih0aGlzLm9wdCEuZGVsYXkpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jcmVhdGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHQgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2xvc2UoZmFsc2UpO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdsb2FkaW5nLWJhY2tkcm9wJyxcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKExvYWRpbmdEZWZhdWx0Q29tcG9uZW50KSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7IG9wdGlvbnM6IHRoaXMub3B0IH0pO1xuICAgIHRoaXMuY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9wZW4ob3B0aW9ucz86IExvYWRpbmdTaG93T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0ID0geyAuLi50aGlzLmNvZywgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMubiQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoY2xlYW5PcHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoY2xlYW5PcHQpIHRoaXMub3B0ID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHJldHVybjtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29tcFJlZiA9IG51bGw7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19