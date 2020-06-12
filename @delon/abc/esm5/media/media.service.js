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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbWVkaWEvIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFM0M7SUFtQkUsc0JBQW9CLE1BQTBCLEVBQVUsT0FBb0I7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBaEJwRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFleUMsQ0FBQztJQWJoRixzQkFBSSw2QkFBRzs7OztRQUFQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBQ0QsVUFBUSxHQUFxQjtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1A7Z0JBQ0UsSUFBSSxFQUFFLENBQUMsMkRBQTJELEVBQUUsd0RBQXdELENBQUM7YUFDOUgsRUFDRCxHQUFHLENBQ0osRUFBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BVEE7Ozs7OztJQWFELDJCQUFJOzs7OztJQUFKO1FBQUEsaUJBUUM7UUFQQyxJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sRUFBRTtZQUNmLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2I7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQUEsbUJBQUEsSUFBSSxFQUFBLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSTs7O1FBQUMsY0FBTSxPQUFBLG1CQUFBLEtBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO1FBQ2xFLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsNkJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUh6QixrQkFBa0I7Z0JBQW9CLFdBQVc7Ozt1QkFEMUQ7Q0FzQ0MsQUFsQ0QsSUFrQ0M7U0FqQ1ksWUFBWTs7Ozs7O0lBQ3ZCLDRCQUErQjs7Ozs7SUFDL0IsOEJBQXVCOzs7OztJQUN2QiwrQkFBc0M7Ozs7O0lBZTFCLDhCQUFrQzs7Ozs7SUFBRSwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTWVkaWFDb25maWcsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIHByaXZhdGUgX2NvZzogQWxhaW5NZWRpYUNvbmZpZztcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY29nKCk6IEFsYWluTWVkaWFDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWw6IEFsYWluTWVkaWFDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB0aGlzLmNvZ1Nydi5tZXJnZShcbiAgICAgICdtZWRpYScsXG4gICAgICB7XG4gICAgICAgIHVybHM6IFsnaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3BseXIvMy41LjEwL3BseXIubWluLmpzJywgJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLmNzcyddLFxuICAgICAgfSxcbiAgICAgIHZhbCxcbiAgICApITtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UpIHt9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLnVybHMhKS50aGVuKCgpID0+IHRoaXMubm90aWZ5JC5uZXh0KCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==