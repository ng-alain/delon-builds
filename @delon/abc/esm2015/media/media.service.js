/**
 * @fileoverview added by tsickle
 * Generated from: media.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
export class MediaService {
    /**
     * @param {?} cogSrv
     * @param {?} lazySrv
     */
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    /**
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cog(val) {
        this._cog = this.cogSrv.merge('media', {
            urls: [
                'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js',
                'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css',
            ],
        }, val);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    load() {
        if ((/** @type {?} */ (this)).loaded)
            return (/** @type {?} */ (this));
        (/** @type {?} */ (this)).loaded = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.urls))).then((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).notify$.next();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    notify() {
        return this.notify$.asObservable();
    }
}
MediaService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];
/** @nocollapse */ MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i1.LazyService)); }, token: MediaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype._cog;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.cogSrv;
    /**
     * @type {?}
     * @private
     */
    MediaService.prototype.lazySrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbWVkaWEvIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBc0J2QixZQUFvQixNQUEwQixFQUFVLE9BQW9CO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQXBCcEUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBbUJ5QyxDQUFDOzs7O0lBakJoRixJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxHQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1A7WUFDRSxJQUFJLEVBQUU7Z0JBQ0osMkRBQTJEO2dCQUMzRCx3REFBd0Q7YUFFekQ7U0FDRixFQUNELEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBSUQsSUFBSTtRQUNGLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTTtZQUFFLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7UUFDN0IsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7O1lBcENGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsa0JBQWtCO1lBQW9CLFdBQVc7Ozs7Ozs7O0lBS3hELDRCQUErQjs7Ozs7SUFDL0IsOEJBQXVCOzs7OztJQUN2QiwrQkFBc0M7Ozs7O0lBbUIxQiw4QkFBa0M7Ozs7O0lBQUUsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbk1lZGlhQ29uZmlnLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBwcml2YXRlIF9jb2c6IEFsYWluTWVkaWFDb25maWc7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvZygpOiBBbGFpbk1lZGlhQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsOiBBbGFpbk1lZGlhQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gdGhpcy5jb2dTcnYubWVyZ2U8QWxhaW5NZWRpYUNvbmZpZywgJ21lZGlhJz4oXG4gICAgICAnbWVkaWEnLFxuICAgICAge1xuICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLm1pbi5qcycsXG4gICAgICAgICAgJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLmNzcycsXG4gICAgICAgICAgLy8gJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLnN2ZycsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdmFsLFxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7fVxuXG4gIGxvYWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMubG9hZGVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQodGhpcy5jb2cudXJscyEpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5vdGlmeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=