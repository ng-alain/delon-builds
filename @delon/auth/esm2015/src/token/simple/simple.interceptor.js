/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
/**
 * Simple 拦截器
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBT2hELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7OztJQUNwRCxNQUFNLENBQUMsUUFBeUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFvQixDQUFDO1FBQzNFLE9BQU8sV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBcUIsRUFBRSxPQUF3QjtjQUM5QyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU87O2NBQ2pELEtBQUssR0FBRyxtQkFBQSxtQkFBbUIsRUFBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7Ozs7O1FBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzdGLFFBQVEsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLEtBQUssUUFBUTs7c0JBQ0wsR0FBRyxHQUFjLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxtQkFBQSxjQUFjLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsVUFBVSxFQUFFLEdBQUc7aUJBQ2hCLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1IsS0FBSyxNQUFNOztzQkFDSCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsbUJBQUEsY0FBYyxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLElBQUk7aUJBQ0wsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFBLGNBQWMsRUFBQyxFQUFFLEtBQUssQ0FBQztpQkFDbEQsQ0FBQyxDQUFDO2dCQUNILE1BQU07U0FDVDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBaENGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUg5oum5oiq5ZmoXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChfb3B0aW9uczogRGVsb25BdXRoQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pLmdldCgpIGFzIFNpbXBsZVRva2VuTW9kZWw7XG4gICAgcmV0dXJuIENoZWNrU2ltcGxlKHRoaXMubW9kZWwgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gIH1cblxuICBzZXRSZXEocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBvcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBjb25zdCB7IHRva2VuX3NlbmRfdGVtcGxhdGUsIHRva2VuX3NlbmRfa2V5IH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5fc2VuZF90ZW1wbGF0ZSEucmVwbGFjZSgvXFwkXFx7KFtcXHddKylcXH0vZywgKF86IHN0cmluZywgZykgPT4gdGhpcy5tb2RlbFtnXSk7XG4gICAgc3dpdGNoIChvcHRpb25zLnRva2VuX3NlbmRfcGxhY2UpIHtcbiAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgIGNvbnN0IG9iajogTnpTYWZlQW55ID0ge307XG4gICAgICAgIG9ialt0b2tlbl9zZW5kX2tleSFdID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQodG9rZW5fc2VuZF9rZXkhLCB0b2tlbiksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxufVxuIl19