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
var MediaService = /** @class */ (function () {
    function MediaService(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loaded = false;
        this.notify$ = new Subject();
    }
    Object.defineProperty(MediaService.prototype, "cog", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cog;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cog = this.cogSrv.merge('media', {
                urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
            }, val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    MediaService.prototype.load = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        if ((/** @type {?} */ (this)).loaded) {
            (/** @type {?} */ (this)).notify$.next();
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loaded = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.urls))).then((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (_this)).notify$.next(); }));
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    MediaService.prototype.notify = /**
     * @return {?}
     */
    function () {
        return this.notify$.asObservable();
    };
    MediaService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: AlainConfigService },
        { type: LazyService }
    ]; };
    /** @nocollapse */ MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i1.LazyService)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
export { MediaService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbWVkaWEvIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFM0M7SUFtQkUsc0JBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBaEJwRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFleUMsQ0FBQztJQWJoRixzQkFBSSw2QkFBRzs7OztRQUFQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBQ0QsVUFBUSxHQUFxQjtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1A7Z0JBQ0UsSUFBSSxFQUFFLENBQUMsMkRBQTJELEVBQUUsd0RBQXdELENBQUM7YUFDOUgsRUFDRCxHQUFHLENBQ0osQ0FBQztRQUNKLENBQUM7OztPQVRBOzs7Ozs7SUFhRCwyQkFBSTs7Ozs7SUFBSjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEVBQUU7WUFDZixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUk7OztRQUFDLGNBQU0sT0FBQSxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztRQUNsRSxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkFqQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIekIsa0JBQWtCO2dCQUFvQixXQUFXOzs7dUJBRDFEO0NBc0NDLEFBbENELElBa0NDO1NBakNZLFlBQVk7Ozs7OztJQUN2Qiw0QkFBK0I7Ozs7O0lBQy9CLDhCQUF1Qjs7Ozs7SUFDdkIsK0JBQXNDOzs7OztJQWUxQiw4QkFBa0M7Ozs7O0lBQUUsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbk1lZGlhQ29uZmlnLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBwcml2YXRlIF9jb2c6IEFsYWluTWVkaWFDb25maWc7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvZygpOiBBbGFpbk1lZGlhQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsOiBBbGFpbk1lZGlhQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gdGhpcy5jb2dTcnYubWVyZ2U8QWxhaW5NZWRpYUNvbmZpZywgJ21lZGlhJz4oXG4gICAgICAnbWVkaWEnLFxuICAgICAge1xuICAgICAgICB1cmxzOiBbJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLm1pbi5qcycsICdodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvcGx5ci8zLjUuMTAvcGx5ci5jc3MnXSxcbiAgICAgIH0sXG4gICAgICB2YWwsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UpIHt9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLnVybHMhKS50aGVuKCgpID0+IHRoaXMubm90aWZ5JC5uZXh0KCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==