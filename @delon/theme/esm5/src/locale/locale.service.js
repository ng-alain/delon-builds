/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
var DelonLocaleService = /** @class */ (function () {
    function DelonLocaleService(locale) {
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    Object.defineProperty(DelonLocaleService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this.change$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    DelonLocaleService.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    };
    Object.defineProperty(DelonLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    DelonLocaleService.prototype.getData = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._locale[path] || {};
    };
    DelonLocaleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DelonLocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
    ]; };
    return DelonLocaleService;
}());
export { DelonLocaleService };
if (false) {
    /** @type {?} */
    DelonLocaleService.prototype._locale;
    /** @type {?} */
    DelonLocaleService.prototype.change$;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new DelonLocaleService(locale);
}
/** @type {?} */
export var DELON_LOCALE_SERVICE_PROVIDER = {
    provide: DelonLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxJQUFJLE1BQU0sbUJBQW1CLENBQUM7QUFDckMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DO0lBS0UsNEJBQWtDLE1BQWtCO1FBRjVDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLHNDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWtCO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSSxzQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBM0JGLFVBQVU7Ozs7Z0RBS0ksTUFBTSxTQUFDLFlBQVk7O0lBdUJsQyx5QkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLGtCQUFrQjs7O0lBQzdCLHFDQUE0Qjs7SUFDNUIscUNBQWdFOzs7Ozs7O0FBMkJsRSxNQUFNLFVBQVUscUNBQXFDLENBQUMsS0FBeUIsRUFBRSxNQUFrQjtJQUNqRyxPQUFPLEtBQUssSUFBSSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxLQUFPLDZCQUE2QixHQUFhO0lBQ3JELE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLFlBQVksQ0FBQztDQUMzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBMb2NhbGVEYXRhO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvY2FsZURhdGE+KHRoaXMuX2xvY2FsZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChERUxPTl9MT0NBTEUpIGxvY2FsZTogTG9jYWxlRGF0YSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aENOKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxMb2NhbGVEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IExvY2FsZURhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldERhdGEocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZVtwYXRoXSB8fCB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogRGVsb25Mb2NhbGVTZXJ2aWNlLCBsb2NhbGU6IExvY2FsZURhdGEpOiBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xufVxuXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2VdLCBERUxPTl9MT0NBTEVdLFxufTtcbiJdfQ==