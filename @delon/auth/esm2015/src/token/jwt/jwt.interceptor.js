/**
 * @fileoverview added by tsickle
 * Generated from: src/token/jwt/jwt.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class JWTInterceptor extends BaseInterceptor {
    /**
     * @param {?} options
     * @return {?}
     */
    isAuth(options) {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
        return CheckJwt((/** @type {?} */ (this.model)), (/** @type {?} */ (options.token_exp_offset)));
    }
    /**
     * @param {?} req
     * @param {?} _options
     * @return {?}
     */
    setReq(req, _options) {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.model.token}`,
            },
        });
    }
}
JWTInterceptor.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7OztBQVc1QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7O0lBQ2pELE1BQU0sQ0FBQyxPQUF3QjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsQ0FBQztRQUNuRixPQUFPLFFBQVEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFpQixFQUFFLG1CQUFBLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQXFCLEVBQUUsUUFBeUI7UUFDckQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBYkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDaGVja0p3dCB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5cbi8qKlxuICogSldUIOaLpuaIquWZqFxuICpcbiAqIGBgYFxuICogLy8gYXBwLm1vZHVsZS50c1xuICogeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEpXVEludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSldUSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xuICBpc0F1dGgob3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcbiAgICByZXR1cm4gQ2hlY2tKd3QodGhpcy5tb2RlbCBhcyBKV1RUb2tlbk1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQhKTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMubW9kZWwudG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==