/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
/**
 * JWT 拦截器
 */
var JWTInterceptor = /** @class */ (function (_super) {
    tslib_1.__extends(JWTInterceptor, _super);
    function JWTInterceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    JWTInterceptor.prototype.isAuth = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
        return CheckJwt((/** @type {?} */ (this.model)), (/** @type {?} */ (options.token_exp_offset)));
    };
    /**
     * @param {?} req
     * @param {?} _options
     * @return {?}
     */
    JWTInterceptor.prototype.setReq = /**
     * @param {?} req
     * @param {?} _options
     * @return {?}
     */
    function (req, _options) {
        return req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.model.token,
            },
        });
    };
    JWTInterceptor.decorators = [
        { type: Injectable }
    ];
    return JWTInterceptor;
}(BaseInterceptor));
export { JWTInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSzVDO0lBQ29DLDBDQUFlO0lBRG5EOztJQWNBLENBQUM7Ozs7O0lBWkMsK0JBQU07Ozs7SUFBTixVQUFPLE9BQXdCO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQWdCLGFBQWEsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQWlCLEVBQUUsbUJBQUEsT0FBTyxDQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFFRCwrQkFBTTs7Ozs7SUFBTixVQUFPLEdBQXFCLEVBQUUsUUFBeUI7UUFDckQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxZQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTzthQUM1QztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWJGLFVBQVU7O0lBY1gscUJBQUM7Q0FBQSxBQWRELENBQ29DLGVBQWUsR0FhbEQ7U0FiWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2hlY2tKd3QgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG4vKipcbiAqIEpXVCDmi6bmiKrlmahcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XG4gICAgcmV0dXJuIENoZWNrSnd0KHRoaXMubW9kZWwgYXMgSldUVG9rZW5Nb2RlbCwgb3B0aW9ucy50b2tlbl9leHBfb2Zmc2V0ISk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBfb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=