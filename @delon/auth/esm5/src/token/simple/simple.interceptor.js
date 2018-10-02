/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';
import { CheckSimple } from '../helper';
var SimpleInterceptor = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleInterceptor, _super);
    function SimpleInterceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    SimpleInterceptor.prototype.isAuth = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.model = /** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get());
        return CheckSimple(/** @type {?} */ (this.model));
    };
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    SimpleInterceptor.prototype.setReq = /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    function (req, options) {
        var _this = this;
        /** @type {?} */
        var token = options.token_send_template.replace(/\$\{([\w]+)\}/g, function (_, g) { return _this.model[g]; });
        switch (options.token_send_place) {
            case 'header':
                /** @type {?} */
                var obj = {};
                obj[options.token_send_key] = token;
                req = req.clone({
                    setHeaders: obj,
                });
                break;
            case 'body':
                /** @type {?} */
                var body = req.body || {};
                body[options.token_send_key] = token;
                req = req.clone({
                    body: body,
                });
                break;
            case 'url':
                req = req.clone({
                    params: req.params.append(options.token_send_key, token),
                });
                break;
        }
        return req;
    };
    SimpleInterceptor.decorators = [
        { type: Injectable }
    ];
    return SimpleInterceptor;
}(BaseInterceptor));
export { SimpleInterceptor };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDOztJQUdELDZDQUFlOzs7Ozs7OztJQUNwRCxrQ0FBTTs7OztJQUFOLFVBQU8sT0FBd0I7UUFDN0IsSUFBSSxDQUFDLEtBQUsscUJBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQXNCLENBQUEsQ0FBQztRQUMzRSxPQUFPLFdBQVcsbUJBQUMsSUFBSSxDQUFDLEtBQXlCLEVBQUMsQ0FBQztLQUNwRDs7Ozs7O0lBRUQsa0NBQU07Ozs7O0lBQU4sVUFBTyxHQUFxQixFQUFFLE9BQXdCO1FBQXRELGlCQTJCQzs7UUExQkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FDL0MsZ0JBQWdCLEVBQ2hCLFVBQUMsQ0FBUyxFQUFFLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUNoQyxDQUFDO1FBQ0YsUUFBUSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsS0FBSyxRQUFROztnQkFDWCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLFVBQVUsRUFBRSxHQUFHO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssTUFBTTs7Z0JBQ1QsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7aUJBQ3pELENBQUMsQ0FBQztnQkFDSCxNQUFNO1NBQ1Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOztnQkFsQ0YsVUFBVTs7NEJBVFg7RUFVdUMsZUFBZTtTQUF6QyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xyXG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcclxuICBpc0F1dGgob3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcclxuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IG9wdGlvbnMudG9rZW5fc2VuZF90ZW1wbGF0ZS5yZXBsYWNlKFxyXG4gICAgICAvXFwkXFx7KFtcXHddKylcXH0vZyxcclxuICAgICAgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSxcclxuICAgICk7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xyXG4gICAgICBjYXNlICdoZWFkZXInOlxyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialtvcHRpb25zLnRva2VuX3NlbmRfa2V5XSA9IHRva2VuO1xyXG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XHJcbiAgICAgICAgICBzZXRIZWFkZXJzOiBvYmosXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvZHknOlxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSB8fCB7fTtcclxuICAgICAgICBib2R5W29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XHJcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQob3B0aW9ucy50b2tlbl9zZW5kX2tleSwgdG9rZW4pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcTtcclxuICB9XHJcbn1cclxuIl19