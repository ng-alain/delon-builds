/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
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
        this.model = (/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get()));
        return CheckSimple((/** @type {?} */ (this.model)));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    SimpleInterceptor.prototype.setReq = 
    // tslint:disable-next-line:no-any
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR2hEO0lBQ3VDLDZDQUFlO0lBRHREOztJQW9DQSxDQUFDOzs7OztJQWxDQyxrQ0FBTTs7OztJQUFOLFVBQU8sT0FBd0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFvQixDQUFDO1FBQzNFLE9BQU8sV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7O0lBQ2xDLGtDQUFNOzs7Ozs7O0lBQU4sVUFBTyxHQUFxQixFQUFFLE9BQXdCO1FBQXRELGlCQTJCQzs7WUExQk8sS0FBSyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQy9DLGdCQUFnQixFQUNoQixVQUFDLENBQVMsRUFBRSxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FDaEM7UUFDRCxRQUFRLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxLQUFLLFFBQVE7O29CQUNMLEdBQUcsR0FBRyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLE1BQU07O29CQUNILElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxJQUFJLE1BQUE7aUJBQ0wsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2lCQUN6RCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkFuQ0YsVUFBVTs7SUFvQ1gsd0JBQUM7Q0FBQSxBQXBDRCxDQUN1QyxlQUFlLEdBbUNyRDtTQW5DWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcbiAgICByZXR1cm4gQ2hlY2tTaW1wbGUodGhpcy5tb2RlbCBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgdG9rZW4gPSBvcHRpb25zLnRva2VuX3NlbmRfdGVtcGxhdGUucmVwbGFjZShcbiAgICAgIC9cXCRcXHsoW1xcd10rKVxcfS9nLFxuICAgICAgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSxcbiAgICApO1xuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqW29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W29wdGlvbnMudG9rZW5fc2VuZF9rZXldID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBwYXJhbXM6IHJlcS5wYXJhbXMuYXBwZW5kKG9wdGlvbnMudG9rZW5fc2VuZF9rZXksIHRva2VuKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9XG59XG4iXX0=