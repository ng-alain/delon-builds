/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { WINDOW } from '../win_tokens';
/**
 * @param {?} model
 * @return {?}
 */
export function CheckSimple(model) {
    return (model != null && typeof model.token === 'string' && model.token.length > 0);
}
/**
 * @param {?} model
 * @param {?} offset
 * @return {?}
 */
export function CheckJwt(model, offset) {
    return model != null && model.token && !model.isExpired(offset);
}
/**
 * @param {?} options
 * @param {?} injector
 * @return {?}
 */
export function ToLogin(options, injector) {
    if (options.token_invalid_redirect === true) {
        setTimeout(() => {
            if (/^https?:\/\//g.test(options.login_url)) {
                injector.get(WINDOW).location.href = options.login_url;
            }
            else {
                injector.get(Router).navigate([options.login_url]);
            }
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkMsTUFBTSxzQkFBc0IsS0FBdUI7SUFDakQsT0FBTyxDQUNMLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzNFLENBQUM7Q0FDSDs7Ozs7O0FBRUQsTUFBTSxtQkFBbUIsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqRTs7Ozs7O0FBRUQsTUFBTSxrQkFBa0IsT0FBd0IsRUFBRSxRQUFrQjtJQUNsRSxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRixDQUFDLENBQUM7S0FDSjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlL3NpbXBsZS5tb2RlbCc7XHJcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC9qd3QubW9kZWwnO1xyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uL3dpbl90b2tlbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIG1vZGVsICE9IG51bGwgJiYgdHlwZW9mIG1vZGVsLnRva2VuID09PSAnc3RyaW5nJyAmJiBtb2RlbC50b2tlbi5sZW5ndGggPiAwXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIG1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBpZiAob3B0aW9ucy50b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID09PSB0cnVlKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XHJcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFdJTkRPVykubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMubG9naW5fdXJsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19