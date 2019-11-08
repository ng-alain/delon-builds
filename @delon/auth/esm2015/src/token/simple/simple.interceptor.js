/**
 * @fileoverview added by tsickle
 * Generated from: src/token/simple/simple.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBSWhELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlOzs7OztJQUNwRCxNQUFNLENBQUMsUUFBeUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFvQixDQUFDO1FBQzNFLE9BQU8sV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBcUIsRUFBRSxPQUF3QjtjQUM5QyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU87O2NBQ2pELEtBQUssR0FBRyxtQkFBQSxtQkFBbUIsRUFBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0I7Ozs7O1FBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzdGLFFBQVEsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLEtBQUssUUFBUTs7c0JBQ0wsR0FBRyxHQUFHLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLG1CQUFBLGNBQWMsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLE1BQU07O3NCQUNILElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxtQkFBQSxjQUFjLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsSUFBSTtpQkFDTCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQUEsY0FBYyxFQUFDLEVBQUUsS0FBSyxDQUFDO2lCQUNsRCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtTQUNUO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFoQ0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi8uLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENoZWNrU2ltcGxlIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKF9vcHRpb25zOiBEZWxvbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcbiAgICByZXR1cm4gQ2hlY2tTaW1wbGUodGhpcy5tb2RlbCBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGNvbnN0IHsgdG9rZW5fc2VuZF90ZW1wbGF0ZSwgdG9rZW5fc2VuZF9rZXkgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbl9zZW5kX3RlbXBsYXRlIS5yZXBsYWNlKC9cXCRcXHsoW1xcd10rKVxcfS9nLCAoXzogc3RyaW5nLCBnKSA9PiB0aGlzLm1vZGVsW2ddKTtcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xuICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIG9ialt0b2tlbl9zZW5kX2tleSFdID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogb2JqLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQodG9rZW5fc2VuZF9rZXkhLCB0b2tlbiksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxufVxuIl19