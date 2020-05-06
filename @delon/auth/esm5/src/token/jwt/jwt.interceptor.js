/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
/**
 * JWT 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
 * ```
 */
var JWTInterceptor = /** @class */ (function (_super) {
    __extends(JWTInterceptor, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7QUFVNUM7SUFDb0Msa0NBQWU7SUFEbkQ7O0lBY0EsQ0FBQzs7Ozs7SUFaQywrQkFBTTs7OztJQUFOLFVBQU8sT0FBd0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLENBQUM7UUFDbkYsT0FBTyxRQUFRLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBaUIsRUFBRSxtQkFBQSxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7OztJQUVELCtCQUFNOzs7OztJQUFOLFVBQU8sR0FBcUIsRUFBRSxRQUF5QjtRQUNyRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDZixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLFlBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFPO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBYkYsVUFBVTs7SUFjWCxxQkFBQztDQUFBLEFBZEQsQ0FDb0MsZUFBZSxHQWFsRDtTQWJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2hlY2tKd3QgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG4vKipcbiAqIEpXVCDmi6bmiKrlmahcbiAqXG4gKiBgYGBcbiAqIC8vIGFwcC5tb2R1bGUudHNcbiAqIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBKV1RJbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpXVEludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XG4gICAgcmV0dXJuIENoZWNrSnd0KHRoaXMubW9kZWwgYXMgSldUVG9rZW5Nb2RlbCwgb3B0aW9ucy50b2tlbl9leHBfb2Zmc2V0ISk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=