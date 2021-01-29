/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
/**
 * Simple 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
 * ```
 */
export class SimpleInterceptor extends BaseInterceptor {
    /**
     * @param {?} _options
     * @return {?}
     */
    isAuth(_options) {
        this.model = (/** @type {?} */ (this.injector.get(DA_SERVICE_TOKEN).get()));
        return CheckSimple((/** @type {?} */ (this.model)));
    }
    /**
     * @param {?} req
     * @param {?} options
     * @return {?}
     */
    setReq(req, options) {
        const { token_send_template, token_send_key } = options;
        /** @type {?} */
        const token = (/** @type {?} */ (token_send_template)).replace(/\$\{([\w]+)\}/g, (/**
         * @param {?} _
         * @param {?} g
         * @return {?}
         */
        (_, g) => this.model[g]));
        switch (options.token_send_place) {
            case 'header':
                /** @type {?} */
                const obj = {};
                obj[(/** @type {?} */ (token_send_key))] = token;
                req = req.clone({
                    setHeaders: obj,
                });
                break;
            case 'body':
                /** @type {?} */
                const body = req.body || {};
                body[(/** @type {?} */ (token_send_key))] = token;
                req = req.clone({
                    body,
                });
                break;
            case 'url':
                req = req.clone({
                    params: req.params.append((/** @type {?} */ (token_send_key)), token),
                });
                break;
        }
        return req;
    }
}
SimpleInterceptor.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFZaEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7Ozs7O0lBQ3BELE1BQU0sQ0FBQyxRQUF5QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxFQUFFLEVBQW9CLENBQUM7UUFDM0UsT0FBTyxXQUFXLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxHQUFxQixFQUFFLE9BQXdCO2NBQzlDLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTzs7Y0FDakQsS0FBSyxHQUFHLG1CQUFBLG1CQUFtQixFQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQjs7Ozs7UUFBRSxDQUFDLENBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDN0YsUUFBUSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsS0FBSyxRQUFROztzQkFDTCxHQUFHLEdBQWMsRUFBRTtnQkFDekIsR0FBRyxDQUFDLG1CQUFBLGNBQWMsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLE1BQU07O3NCQUNILElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxtQkFBQSxjQUFjLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsSUFBSTtpQkFDTCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQUEsY0FBYyxFQUFDLEVBQUUsS0FBSyxDQUFDO2lCQUNsRCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFoQ0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUg5oum5oiq5ZmoXG4gKlxuICogYGBgXG4gKiAvLyBhcHAubW9kdWxlLnRzXG4gKiB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogU2ltcGxlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pLmdldCgpIGFzIFNpbXBsZVRva2VuTW9kZWw7XG4gICAgcmV0dXJuIENoZWNrU2ltcGxlKHRoaXMubW9kZWwgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBjb25zdCB7IHRva2VuX3NlbmRfdGVtcGxhdGUsIHRva2VuX3NlbmRfa2V5IH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5fc2VuZF90ZW1wbGF0ZSEucmVwbGFjZSgvXFwkXFx7KFtcXHddKylcXH0vZywgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSk7XG4gICAgc3dpdGNoIChvcHRpb25zLnRva2VuX3NlbmRfcGxhY2UpIHtcbiAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgIGNvbnN0IG9iajogTnpTYWZlQW55ID0ge307XG4gICAgICAgIG9ialt0b2tlbl9zZW5kX2tleSFdID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQodG9rZW5fc2VuZF9rZXkhLCB0b2tlbiksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxufVxuIl19