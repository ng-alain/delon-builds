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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkMsTUFBTSxzQkFBc0IsS0FBdUI7SUFDakQsT0FBTyxDQUNMLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzNFLENBQUM7Q0FDSDs7Ozs7O0FBRUQsTUFBTSxtQkFBbUIsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqRTs7Ozs7O0FBRUQsTUFBTSxrQkFBa0IsT0FBd0IsRUFBRSxRQUFrQjtJQUNsRSxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRixDQUFDLENBQUM7S0FDSjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUvc2ltcGxlLm1vZGVsJztcbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC9qd3QubW9kZWwnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vd2luX3Rva2Vucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja1NpbXBsZShtb2RlbDogU2ltcGxlVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIG1vZGVsICE9IG51bGwgJiYgdHlwZW9mIG1vZGVsLnRva2VuID09PSAnc3RyaW5nJyAmJiBtb2RlbC50b2tlbi5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja0p3dChtb2RlbDogSldUVG9rZW5Nb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGVsICE9IG51bGwgJiYgbW9kZWwudG9rZW4gJiYgIW1vZGVsLmlzRXhwaXJlZChvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9Mb2dpbihvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICBpZiAob3B0aW9ucy50b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID09PSB0cnVlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoL15odHRwcz86XFwvXFwvL2cudGVzdChvcHRpb25zLmxvZ2luX3VybCkpIHtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFdJTkRPVykubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMubG9naW5fdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGUoW29wdGlvbnMubG9naW5fdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==