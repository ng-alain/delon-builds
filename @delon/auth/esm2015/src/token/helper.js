/**
 * @fileoverview added by tsickle
 * Generated from: src/token/helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from './interface';
/**
 * @param {?} model
 * @return {?}
 */
export function CheckSimple(model) {
    return model != null && typeof model.token === 'string' && model.token.length > 0;
}
/**
 * @param {?} model
 * @param {?} offset
 * @return {?}
 */
export function CheckJwt(model, offset) {
    return model != null && !!model.token && !model.isExpired(offset);
}
/**
 * @param {?} options
 * @param {?} injector
 * @param {?=} url
 * @return {?}
 */
export function ToLogin(options, injector, url) {
    /** @type {?} */
    const router = injector.get(Router);
    (/** @type {?} */ (((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer)).url = url || router.url;
    if (options.token_invalid_redirect === true) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (/^https?:\/\//g.test((/** @type {?} */ (options.login_url)))) {
                injector.get(DOCUMENT).location.href = (/** @type {?} */ (options.login_url));
            }
            else {
                router.navigate([options.login_url]);
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sYUFBYSxDQUFDOzs7OztBQUk5RCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQThCO0lBQ3hELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNwRixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQW9CLEVBQUUsTUFBYztJQUMzRCxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BFLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQXdCLEVBQUUsUUFBa0IsRUFBRSxHQUFZOztVQUMxRSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUM7SUFDM0MsbUJBQUEsQ0FBQyxtQkFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQWlCLENBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEYsSUFBSSxPQUFPLENBQUMsc0JBQXNCLEtBQUssSUFBSSxFQUFFO1FBQzNDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxtQkFBQSxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUMsRUFBRTtnQkFDNUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxTQUFTLEVBQVUsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3Qvand0Lm1vZGVsJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS9zaW1wbGUubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tTaW1wbGUobW9kZWw6IFNpbXBsZVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiAhIW1vZGVsLnRva2VuICYmICFtb2RlbC5pc0V4cGlyZWQob2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvTG9naW4ob3B0aW9uczogQWxhaW5BdXRoQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IsIHVybD86IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCByb3V0ZXIgPSBpbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xuICAoaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pIGFzIElUb2tlblNlcnZpY2UpLnJlZmVycmVyIS51cmwgPSB1cmwgfHwgcm91dGVyLnVybDtcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwhKSkge1xuICAgICAgICBpbmplY3Rvci5nZXQoRE9DVU1FTlQpLmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLmxvZ2luX3VybCBhcyBzdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUoW29wdGlvbnMubG9naW5fdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==