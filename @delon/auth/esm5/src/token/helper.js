/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @param {?} url
 * @return {?}
 */
export function ToLogin(options, injector, url) {
    (/** @type {?} */ (((/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)))).referrer)).url = url;
    if (options.token_invalid_redirect === true) {
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (/^https?:\/\//g.test((/** @type {?} */ (options.login_url)))) {
                injector.get(DOCUMENT).location.href = (/** @type {?} */ (options.login_url));
            }
            else {
                injector.get(Router).navigate([options.login_url]);
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxhQUFhLENBQUM7Ozs7O0FBSTlELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBOEI7SUFDeEQsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEUsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBd0IsRUFBRSxRQUFrQixFQUFFLEdBQThCO0lBQ2xHLG1CQUFBLENBQUMsbUJBQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFpQixDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN0RSxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVTs7O1FBQUM7WUFDVCxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsbUJBQUEsT0FBTyxDQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUU7Z0JBQzVDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxtQkFBQSxPQUFPLENBQUMsU0FBUyxFQUFVLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUvc2ltcGxlLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiB0eXBlb2YgbW9kZWwudG9rZW4gPT09ICdzdHJpbmcnICYmIG1vZGVsLnRva2VuLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja0p3dChtb2RlbDogSldUVG9rZW5Nb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGVsICE9IG51bGwgJiYgISFtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IERlbG9uQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yLCB1cmw6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgKGluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKSBhcyBJVG9rZW5TZXJ2aWNlKS5yZWZlcnJlciEudXJsID0gdXJsO1xuICBpZiAob3B0aW9ucy50b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID09PSB0cnVlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoL15odHRwcz86XFwvXFwvL2cudGVzdChvcHRpb25zLmxvZ2luX3VybCEpKSB7XG4gICAgICAgIGluamVjdG9yLmdldChET0NVTUVOVCkubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMubG9naW5fdXJsIGFzIHN0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikubmF2aWdhdGUoW29wdGlvbnMubG9naW5fdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==