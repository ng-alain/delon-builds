/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from './interface';
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
                injector.get(DOCUMENT).location.href = options.login_url;
            }
            else {
                /** @type {?} */
                var router = (/** @type {?} */ (injector.get(ActivatedRoute)));
                /** @type {?} */
                var tokenSrv = (/** @type {?} */ (injector.get(DA_SERVICE_TOKEN)));
                tokenSrv.referrer = (/** @type {?} */ (router.snapshot));
                injector.get(Router).navigate([options.login_url]);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2F1dGgvIiwic291cmNlcyI6WyJzcmMvdG9rZW4vaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBSy9DLE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBdUI7SUFDakQsT0FBTyxDQUNMLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzNFLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQW9CLEVBQUUsTUFBYztJQUMzRCxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxPQUF3QixFQUFFLFFBQWtCO0lBQ2xFLElBQUksT0FBTyxDQUFDLHNCQUFzQixLQUFLLElBQUksRUFBRTtRQUMzQyxVQUFVLENBQUM7WUFDVCxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMzQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUMxRDtpQkFBTTs7b0JBQ0MsTUFBTSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQWtCOztvQkFDdkQsUUFBUSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBZ0I7Z0JBQy9ELFFBQVEsQ0FBQyxRQUFRLEdBQUcsbUJBQUEsTUFBTSxDQUFDLFFBQVEsRUFBTyxDQUFDO2dCQUMzQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0L2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUvc2ltcGxlLm1vZGVsJztcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vdG9rZW4uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja1NpbXBsZShtb2RlbDogU2ltcGxlVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIG1vZGVsICE9IG51bGwgJiYgdHlwZW9mIG1vZGVsLnRva2VuID09PSAnc3RyaW5nJyAmJiBtb2RlbC50b2tlbi5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja0p3dChtb2RlbDogSldUVG9rZW5Nb2RlbCwgb2Zmc2V0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1vZGVsICE9IG51bGwgJiYgbW9kZWwudG9rZW4gJiYgIW1vZGVsLmlzRXhwaXJlZChvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9Mb2dpbihvcHRpb25zOiBEZWxvbkF1dGhDb25maWcsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICBpZiAob3B0aW9ucy50b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID09PSB0cnVlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoL15odHRwcz86XFwvXFwvL2cudGVzdChvcHRpb25zLmxvZ2luX3VybCkpIHtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KERPQ1VNRU5UKS5sb2NhdGlvbi5ocmVmID0gb3B0aW9ucy5sb2dpbl91cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBpbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpIGFzIEFjdGl2YXRlZFJvdXRlO1xuICAgICAgICBjb25zdCB0b2tlblNydiA9IGluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKSBhcyBUb2tlblNlcnZpY2U7XG4gICAgICAgIHRva2VuU3J2LnJlZmVycmVyID0gcm91dGVyLnNuYXBzaG90IGFzIGFueTtcbiAgICAgICAgaW5qZWN0b3IuZ2V0KFJvdXRlcikubmF2aWdhdGUoW29wdGlvbnMubG9naW5fdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==