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
        setTimeout(function () {
            if (/^https?:\/\//g.test(options.login_url)) {
                injector.get(WINDOW).location.href = options.login_url;
            }
            else {
                injector.get(Router).navigate([options.login_url]);
            }
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFdkMsTUFBTSxzQkFBc0IsS0FBdUI7SUFDakQsT0FBTyxDQUNMLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzNFLENBQUM7Q0FDSDs7Ozs7O0FBRUQsTUFBTSxtQkFBbUIsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNqRTs7Ozs7O0FBRUQsTUFBTSxrQkFBa0IsT0FBd0IsRUFBRSxRQUFrQjtJQUNsRSxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVSxDQUFDO1lBQ1QsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNGLENBQUMsQ0FBQztLQUNKO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5fdG9rZW5zJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgbW9kZWwgIT0gbnVsbCAmJiB0eXBlb2YgbW9kZWwudG9rZW4gPT09ICdzdHJpbmcnICYmIG1vZGVsLnRva2VuLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiBtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGlmIChvcHRpb25zLnRva2VuX2ludmFsaWRfcmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vZy50ZXN0KG9wdGlvbnMubG9naW5fdXJsKSkge1xuICAgICAgICBpbmplY3Rvci5nZXQoV0lORE9XKS5sb2NhdGlvbi5ocmVmID0gb3B0aW9ucy5sb2dpbl91cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZShbb3B0aW9ucy5sb2dpbl91cmxdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19