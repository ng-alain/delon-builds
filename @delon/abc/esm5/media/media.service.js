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
        this.loading = false;
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
            this._cog = (/** @type {?} */ (this.cogSrv.merge('media', {
                urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
            }, val)));
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
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.urls))).then((/**
         * @return {?}
         */
        function () {
            (/** @type {?} */ (_this)).loaded = true;
            (/** @type {?} */ (_this)).notify$.next();
        }));
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
    MediaService.prototype.loading;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbWVkaWEvIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFM0M7SUFvQkUsc0JBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBakJwRSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQWV5QyxDQUFDO0lBYmhGLHNCQUFJLDZCQUFHOzs7O1FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFRLEdBQXFCO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQzNCLE9BQU8sRUFDUDtnQkFDRSxJQUFJLEVBQUUsQ0FBQywyREFBMkQsRUFBRSx3REFBd0QsQ0FBQzthQUM5SCxFQUNELEdBQUcsQ0FDSixFQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FUQTs7Ozs7O0lBYUQsMkJBQUk7Ozs7O0lBQUo7UUFBQSxpQkFhQztRQVpDLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxFQUFFO2dCQUNmLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtZQUNELE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7U0FDYjtRQUNELG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxJQUFJOzs7UUFBQztZQUNyQyxtQkFBQSxLQUFJLEVBQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLG1CQUFBLEtBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsNkJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXZDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUh6QixrQkFBa0I7Z0JBQW9CLFdBQVc7Ozt1QkFEMUQ7Q0E0Q0MsQUF4Q0QsSUF3Q0M7U0F2Q1ksWUFBWTs7Ozs7O0lBQ3ZCLDRCQUErQjs7Ozs7SUFDL0IsK0JBQXdCOzs7OztJQUN4Qiw4QkFBdUI7Ozs7O0lBQ3ZCLCtCQUFzQzs7Ozs7SUFlMUIsOEJBQWtDOzs7OztJQUFFLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5NZWRpYUNvbmZpZywgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY29nOiBBbGFpbk1lZGlhQ29uZmlnO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY29nKCk6IEFsYWluTWVkaWFDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWw6IEFsYWluTWVkaWFDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB0aGlzLmNvZ1Nydi5tZXJnZShcbiAgICAgICdtZWRpYScsXG4gICAgICB7XG4gICAgICAgIHVybHM6IFsnaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3BseXIvMy41LjEwL3BseXIubWluLmpzJywgJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLmNzcyddLFxuICAgICAgfSxcbiAgICAgIHZhbCxcbiAgICApITtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UpIHt9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLnVybHMhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBub3RpZnkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19