/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injector, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { DelonAuthConfig } from '../auth.config';
import { ToLogin } from './helper';
/**
 * @abstract
 */
var BaseInterceptor = /** @class */ (function () {
    function BaseInterceptor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    BaseInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var e_1, _a;
        /** @type {?} */
        var options = Object.assign(new DelonAuthConfig(), this.injector.get(DelonAuthConfig, null));
        if (options.ignores) {
            try {
                for (var _b = tslib_1.__values(/** @type {?} */ (options.ignores)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.test(req.url))
                        return next.handle(req);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (options.allow_anonymous_key &&
            (req.params.has(options.allow_anonymous_key) ||
                this.injector
                    .get(Router)
                    .parseUrl(req.urlWithParams)
                    .queryParamMap.has(options.allow_anonymous_key))) {
            return next.handle(req);
        }
        if (this.isAuth(options)) {
            req = this.setReq(req, options);
        }
        else {
            ToLogin(options, this.injector);
            /** @type {?} */
            var hc = this.injector.get(_HttpClient, null);
            if (hc)
                hc.end();
            return new Observable(function (observer) {
                /** @type {?} */
                var res = new HttpErrorResponse({
                    status: 401,
                    statusText: "From Simple Intercept --> https://ng-alain.com/docs/auth",
                });
                observer.error(res);
            });
        }
        return next.handle(req);
    };
    /** @nocollapse */
    BaseInterceptor.ctorParameters = function () { return [
        { type: Injector, decorators: [{ type: Optional }] }
    ]; };
    return BaseInterceptor;
}());
export { BaseInterceptor };
if (false) {
    /** @type {?} */
    BaseInterceptor.prototype.model;
    /** @type {?} */
    BaseInterceptor.prototype.injector;
    /**
     * @abstract
     * @param {?} options
     * @return {?}
     */
    BaseInterceptor.prototype.isAuth = function (options) { };
    /**
     * @abstract
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    BaseInterceptor.prototype.setReq = function (req, options) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL2Jhc2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQVVMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7SUFHakMseUJBQWtDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7S0FBSTs7Ozs7O0lBV3hELG1DQUFTOzs7OztJQUFULFVBQ0UsR0FBcUIsRUFDckIsSUFBaUI7OztRQVFqQixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMzQixJQUFJLGVBQWUsRUFBRSxFQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQ3pDLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O2dCQUNuQixpREFBbUIsT0FBTyxDQUFDLE9BQW1CLDhDQUFFO29CQUEzQyxJQUFNLElBQUksV0FBQTtvQkFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pEOzs7Ozs7Ozs7U0FDRjtRQUVELElBQ0UsT0FBTyxDQUFDLG1CQUFtQjtZQUMzQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQztxQkFDWCxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUNwRDtZQUNBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUVoQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsSUFBSSxFQUFFO2dCQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQixPQUFPLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBa0M7O2dCQUN2RCxJQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixDQUFDO29CQUNoQyxNQUFNLEVBQUUsR0FBRztvQkFDWCxVQUFVLEVBQUUsMERBQTBEO2lCQUN2RSxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6Qjs7O2dCQWpGTSxRQUFRLHVCQXVCRixRQUFROzswQkF2QnZCOztTQXNCc0IsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwU2VudEV2ZW50LFxyXG4gIEh0dHBIZWFkZXJSZXNwb25zZSxcclxuICBIdHRwUHJvZ3Jlc3NFdmVudCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cFVzZXJFdmVudCxcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcclxuaW1wb3J0IHsgVG9Mb2dpbiB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIHByb3RlY3RlZCBtb2RlbDogSVRva2VuTW9kZWw7XHJcblxyXG4gIGFic3RyYWN0IGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuO1xyXG5cclxuICBhYnN0cmFjdCBzZXRSZXEoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsXHJcbiAgKTogSHR0cFJlcXVlc3Q8YW55PjtcclxuXHJcbiAgaW50ZXJjZXB0KFxyXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxyXG4gICAgbmV4dDogSHR0cEhhbmRsZXIsXHJcbiAgKTogT2JzZXJ2YWJsZTxcclxuICAgIHwgSHR0cFNlbnRFdmVudFxyXG4gICAgfCBIdHRwSGVhZGVyUmVzcG9uc2VcclxuICAgIHwgSHR0cFByb2dyZXNzRXZlbnRcclxuICAgIHwgSHR0cFJlc3BvbnNlPGFueT5cclxuICAgIHwgSHR0cFVzZXJFdmVudDxhbnk+XHJcbiAgPiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgbmV3IERlbG9uQXV0aENvbmZpZygpLFxyXG4gICAgICB0aGlzLmluamVjdG9yLmdldChEZWxvbkF1dGhDb25maWcsIG51bGwpLFxyXG4gICAgKTtcclxuICAgIGlmIChvcHRpb25zLmlnbm9yZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaWdub3JlcyBhcyBSZWdFeHBbXSkge1xyXG4gICAgICAgIGlmIChpdGVtLnRlc3QocmVxLnVybCkpIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkgJiZcclxuICAgICAgKHJlcS5wYXJhbXMuaGFzKG9wdGlvbnMuYWxsb3dfYW5vbnltb3VzX2tleSkgfHxcclxuICAgICAgICB0aGlzLmluamVjdG9yXHJcbiAgICAgICAgICAuZ2V0KFJvdXRlcilcclxuICAgICAgICAgIC5wYXJzZVVybChyZXEudXJsV2l0aFBhcmFtcylcclxuICAgICAgICAgIC5xdWVyeVBhcmFtTWFwLmhhcyhvcHRpb25zLmFsbG93X2Fub255bW91c19rZXkpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQXV0aChvcHRpb25zKSkge1xyXG4gICAgICByZXEgPSB0aGlzLnNldFJlcShyZXEsIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVG9Mb2dpbihvcHRpb25zLCB0aGlzLmluamVjdG9yKTtcclxuICAgICAgLy8gb2JzZXJ2ZXIuZXJyb3LvvJrkvJrlr7zlgJLlkI7nu63mi6bmiKrlmajml6Dms5Xop6blj5HvvIzlm6DmraTvvIzpnIDopoHlpITnkIYgYF9IdHRwQ2xpZW50YCDnirbmgIHpl67pophcclxuICAgICAgY29uc3QgaGMgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCk7XHJcbiAgICAgIGlmIChoYykgaGMuZW5kKCk7XHJcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEh0dHBFdmVudDxhbnk+PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XHJcbiAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgIHN0YXR1c1RleHQ6IGBGcm9tIFNpbXBsZSBJbnRlcmNlcHQgLS0+IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvYXV0aGAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICB9XHJcbn1cclxuIl19