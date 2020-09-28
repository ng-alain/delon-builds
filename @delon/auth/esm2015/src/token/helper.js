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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYXV0aC8iLCJzb3VyY2VzIjpbInNyYy90b2tlbi9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxhQUFhLENBQUM7Ozs7O0FBSTlELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBOEI7SUFDeEQsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBb0IsRUFBRSxNQUFjO0lBQzNELE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEUsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsT0FBd0IsRUFBRSxRQUFrQixFQUFFLEdBQVk7O1VBQzFFLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFTLE1BQU0sQ0FBQztJQUMzQyxtQkFBQSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNwRixJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDM0MsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLG1CQUFBLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFFO2dCQUM1QyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsbUJBQUEsT0FBTyxDQUFDLFNBQVMsRUFBVSxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUvc2ltcGxlLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrU2ltcGxlKG1vZGVsOiBTaW1wbGVUb2tlbk1vZGVsIHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gbW9kZWwgIT0gbnVsbCAmJiB0eXBlb2YgbW9kZWwudG9rZW4gPT09ICdzdHJpbmcnICYmIG1vZGVsLnRva2VuLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja0p3dChtb2RlbDogSldUVG9rZW5Nb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGVsICE9IG51bGwgJiYgISFtb2RlbC50b2tlbiAmJiAhbW9kZWwuaXNFeHBpcmVkKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb0xvZ2luKG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yLCB1cmw/OiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgcm91dGVyID0gaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcbiAgKGluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKSBhcyBJVG9rZW5TZXJ2aWNlKS5yZWZlcnJlciEudXJsID0gdXJsIHx8IHJvdXRlci51cmw7XG4gIGlmIChvcHRpb25zLnRva2VuX2ludmFsaWRfcmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vZy50ZXN0KG9wdGlvbnMubG9naW5fdXJsISkpIHtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KERPQ1VNRU5UKS5sb2NhdGlvbi5ocmVmID0gb3B0aW9ucy5sb2dpbl91cmwgYXMgc3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtvcHRpb25zLmxvZ2luX3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=