/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import { CheckJwt } from '../helper';
export class JWTInterceptor extends BaseInterceptor {
    /**
     * @param {?} options
     * @return {?}
     */
    isAuth(options) {
        this.model = this.injector
            .get(DA_SERVICE_TOKEN)
            .get(JWTTokenModel);
        return CheckJwt(/** @type {?} */ (this.model), options.token_exp_offset);
    }
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    setReq(req, options) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUdyQyxNQUFNLHFCQUFzQixTQUFRLGVBQWU7Ozs7O0lBQ2pELE1BQU0sQ0FBQyxPQUF3QjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3ZCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNyQixHQUFHLENBQWdCLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sUUFBUSxtQkFBQyxJQUFJLENBQUMsS0FBc0IsR0FBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN4RTs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQXFCLEVBQUUsT0FBd0I7UUFDcEQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7OztZQWZGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja0p3dCB9IGZyb20gJy4uL2hlbHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3RvclxuICAgICAgLmdldChEQV9TRVJWSUNFX1RPS0VOKVxuICAgICAgLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcbiAgICByZXR1cm4gQ2hlY2tKd3QodGhpcy5tb2RlbCBhcyBKV1RUb2tlbk1vZGVsLCBvcHRpb25zLnRva2VuX2V4cF9vZmZzZXQpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgcmV0dXJuIHJlcS5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm1vZGVsLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=