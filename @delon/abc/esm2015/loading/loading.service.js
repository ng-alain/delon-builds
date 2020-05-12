/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "./loading.config";
import * as i2 from "@angular/cdk/overlay";
export class LoadingService {
    /**
     * @param {?} cog
     * @param {?} overlay
     */
    constructor(cog, overlay) {
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
        this.opt = Object.assign({}, this.cog, options);
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
    { type: LoadingConfig },
    { type: Overlay }
];
/** @nocollapse */ LoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.LoadingConfig), i0.ɵɵinject(i2.Overlay)); }, token: LoadingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUc5RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFXekIsWUFBb0IsR0FBa0IsRUFBVSxPQUFnQjtRQUE1QyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVR4RCxZQUFPLEdBQWlELElBQUksQ0FBQztRQUM3RCxRQUFHLEdBQThCLElBQUksQ0FBQztRQUN0QyxPQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVF6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2FBQ3BCLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSCxRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQ3ZDO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQVhELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFXTyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDM0IsUUFBUSxFQUFFO2lCQUNWLE1BQU0sRUFBRTtpQkFDUixrQkFBa0IsRUFBRTtpQkFDcEIsZ0JBQWdCLEVBQUU7WUFDckIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDOztjQUNHLElBQUksR0FBRyxJQUFJLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQTRCO1FBQy9CLElBQUksQ0FBQyxHQUFHLHFCQUFRLElBQUksQ0FBQyxHQUFHLEVBQUssT0FBTyxDQUFFLENBQUM7UUFFdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsUUFBaUI7UUFDOUIsSUFBSSxRQUFRO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBN0RGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsYUFBYTtZQUxiLE9BQU87Ozs7Ozs7O0lBVWQscUNBQWdDOzs7OztJQUNoQyxpQ0FBcUU7Ozs7O0lBQ3JFLDZCQUE4Qzs7Ozs7SUFDOUMsNEJBQTJCOzs7OztJQUMzQixrQ0FBK0I7Ozs7O0lBTW5CLDZCQUEwQjs7Ozs7SUFBRSxpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9sb2FkaW5nLmNvbmZpZyc7XG5pbXBvcnQgeyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBjb21wUmVmOiBDb21wb25lbnRSZWY8TG9hZGluZ0RlZmF1bHRDb21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb3B0OiBMb2FkaW5nU2hvd09wdGlvbnMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBuJCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgbG9hZGluZyQ6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcFJlZiAhPSBudWxsID8gdGhpcy5jb21wUmVmLmluc3RhbmNlIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nOiBMb2FkaW5nQ29uZmlnLCBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5uJFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5vcHQhLmRlbGF5KSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY3JlYXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMub3B0ID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuX2Nsb3NlKGZhbHNlKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxuICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAuZ2xvYmFsKClcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXG4gICAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2xvYWRpbmctYmFja2Ryb3AnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXAgPSBuZXcgQ29tcG9uZW50UG9ydGFsKExvYWRpbmdEZWZhdWx0Q29tcG9uZW50KTtcbiAgICB0aGlzLmNvbXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChjb21wKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuaW5zdGFuY2UsIHsgb3B0aW9uczogdGhpcy5vcHQgfSk7XG4gICAgdGhpcy5jb21wUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb3BlbihvcHRpb25zPzogTG9hZGluZ1Nob3dPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5vcHQgPSB7IC4uLnRoaXMuY29nLCAuLi5vcHRpb25zIH07XG5cbiAgICB0aGlzLm4kLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKGNsZWFuT3B0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGNsZWFuT3B0KSB0aGlzLm9wdCA9IG51bGw7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSByZXR1cm47XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB0aGlzLmNvbXBSZWYgPSBudWxsO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==