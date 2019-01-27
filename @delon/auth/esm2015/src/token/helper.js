/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    return model != null && model.token && !model.isExpired(offset);
}
/**
 * @param {?} options
 * @param {?} injector
 * @param {?} url
 * @return {?}
 */
export function ToLogin(options, injector, url) {
    ((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer.url = url;
    if (options.token_invalid_redirect === true) {
        setTimeout(() => {
            if (/^https?:\/\//g.test(options.login_url)) {
                injector.get(DOCUMENT).location.href = options.login_url;
            }
            else {
                injector.get(Router).navigate([options.login_url]);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxhQUFhLENBQUM7Ozs7O0FBSTlELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBdUI7SUFDakQsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUF3QixFQUFFLFFBQWtCLEVBQUUsR0FBVztJQUMvRSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3JFLElBQUksT0FBTyxDQUFDLHNCQUFzQixLQUFLLElBQUksRUFBRTtRQUMzQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUvc2ltcGxlLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gIHJldHVybiBtb2RlbCAhPSBudWxsICYmIHR5cGVvZiBtb2RlbC50b2tlbiA9PT0gJ3N0cmluZycgJiYgbW9kZWwudG9rZW4ubGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrSnd0KG1vZGVsOiBKV1RUb2tlbk1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiBtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yLCB1cmw6IHN0cmluZykge1xuICAoaW5qZWN0b3IuZ2V0KERBX1NFUlZJQ0VfVE9LRU4pIGFzIElUb2tlblNlcnZpY2UpLnJlZmVycmVyLnVybCA9IHVybDtcbiAgaWYgKG9wdGlvbnMudG9rZW5faW52YWxpZF9yZWRpcmVjdCA9PT0gdHJ1ZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9nLnRlc3Qob3B0aW9ucy5sb2dpbl91cmwpKSB7XG4gICAgICAgIGluamVjdG9yLmdldChET0NVTUVOVCkubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMubG9naW5fdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGUoW29wdGlvbnMubG9naW5fdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==