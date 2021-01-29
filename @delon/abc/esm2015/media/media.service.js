/**
 * @fileoverview added by tsickle
 * Generated from: media.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
export class MediaService {
    /**
     * @param {?} cogSrv
     * @param {?} lazySrv
     */
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
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
        this._cog = (/** @type {?} */ (this.cogSrv.merge('media', {
            urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
        }, val)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    load() {
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
        () => {
            (/** @type {?} */ (this)).loaded = true;
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
/** @nocollapse */ MediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.LazyService)); }, token: MediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHM0MsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBbUJ2QixZQUFvQixNQUEwQixFQUFVLE9BQW9CO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQWpCcEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFleUMsQ0FBQzs7OztJQWJoRixJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxHQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1A7WUFDRSxJQUFJLEVBQUUsQ0FBQywyREFBMkQsRUFBRSx3REFBd0QsQ0FBQztTQUM5SCxFQUNELEdBQUcsQ0FDSixFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFJRCxJQUFJO1FBQ0YsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUp6QixrQkFBa0I7WUFDbEIsV0FBVzs7Ozs7Ozs7SUFLbEIsNEJBQStCOzs7OztJQUMvQiwrQkFBd0I7Ozs7O0lBQ3hCLDhCQUF1Qjs7Ozs7SUFDdkIsK0JBQXNDOzs7OztJQWUxQiw4QkFBa0M7Ozs7O0lBQUUsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbk1lZGlhQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIHByaXZhdGUgX2NvZzogQWxhaW5NZWRpYUNvbmZpZztcbiAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvZygpOiBBbGFpbk1lZGlhQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsOiBBbGFpbk1lZGlhQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gdGhpcy5jb2dTcnYubWVyZ2UoXG4gICAgICAnbWVkaWEnLFxuICAgICAge1xuICAgICAgICB1cmxzOiBbJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9wbHlyLzMuNS4xMC9wbHlyLm1pbi5qcycsICdodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvcGx5ci8zLjUuMTAvcGx5ci5jc3MnXSxcbiAgICAgIH0sXG4gICAgICB2YWwsXG4gICAgKSE7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7fVxuXG4gIGxvYWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxhenlTcnYubG9hZCh0aGlzLmNvZy51cmxzISkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==