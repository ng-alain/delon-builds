/**
 * @fileoverview added by tsickle
 * Generated from: src/services/responsive/responsive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
/** @type {?} */
export const REP_MAX = 6;
export class ResponsiveService {
    /**
     * @param {?} cogSrv
     */
    constructor(cogSrv) {
        this.cog = (/** @type {?} */ (cogSrv.merge('themeResponsive', {
            rules: {
                1: { xs: 24 },
                2: { xs: 24, sm: 12 },
                3: { xs: 24, sm: 12, md: 8 },
                4: { xs: 24, sm: 12, md: 8, lg: 6 },
                5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
            },
        })));
        if (Object.keys(this.cog.rules)
            .map((/**
         * @param {?} i
         * @return {?}
         */
        i => +i))
            .some((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i < 1 || i > REP_MAX))) {
            throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
        }
    }
    /**
     * @param {?} count
     * @return {?}
     */
    genCls(count) {
        /** @type {?} */
        const rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
        /** @type {?} */
        const antColClass = 'ant-col';
        /** @type {?} */
        const clsMap = [`${antColClass}-xs-${rule.xs}`];
        if (rule.sm)
            clsMap.push(`${antColClass}-sm-${rule.sm}`);
        if (rule.md)
            clsMap.push(`${antColClass}-md-${rule.md}`);
        if (rule.lg)
            clsMap.push(`${antColClass}-lg-${rule.lg}`);
        if (rule.xl)
            clsMap.push(`${antColClass}-xl-${rule.xl}`);
        if (rule.xxl)
            clsMap.push(`${antColClass}-xxl-${rule.xxl}`);
        return clsMap;
    }
}
ResponsiveService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ResponsiveService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ ResponsiveService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(i0.ɵɵinject(i1.AlainConfigService)); }, token: ResponsiveService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResponsiveService.prototype.cog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixNQUFNLGFBQWEsQ0FBQzs7OztBQUU3RSxNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUM7QUFLeEIsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFZLE1BQTBCO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUN6QyxLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ3JCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2FBQ25EO1NBQ0YsQ0FBQyxFQUFDLENBQUM7UUFDSixJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDeEIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7YUFDWixJQUFJOzs7O1FBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBQyxFQUM1QztZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFhOztjQUNaLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUNyRSxXQUFXLEdBQUcsU0FBUzs7Y0FDdkIsTUFBTSxHQUFHLENBQUMsR0FBRyxXQUFXLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTnpCLGtCQUFrQjs7Ozs7Ozs7SUFRekIsZ0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblRoZW1lUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IFJFUF9NQVggPSA2O1xuXG5leHBvcnQgdHlwZSBSRVBfVFlQRSA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblRoZW1lUmVzcG9uc2l2ZUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvZ1Nydi5tZXJnZSgndGhlbWVSZXNwb25zaXZlJywge1xuICAgICAgcnVsZXM6IHtcbiAgICAgICAgMTogeyB4czogMjQgfSxcbiAgICAgICAgMjogeyB4czogMjQsIHNtOiAxMiB9LFxuICAgICAgICAzOiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCB9LFxuICAgICAgICA0OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYgfSxcbiAgICAgICAgNTogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCB9LFxuICAgICAgICA2OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0LCB4eGw6IDIgfSxcbiAgICAgIH0sXG4gICAgfSkhO1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29nLnJ1bGVzKVxuICAgICAgICAubWFwKGkgPT4gK2kpXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ2xzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuY29nLnJ1bGVzW2NvdW50ID4gUkVQX01BWCA/IFJFUF9NQVggOiBNYXRoLm1heChjb3VudCwgMSldO1xuICAgIGNvbnN0IGFudENvbENsYXNzID0gJ2FudC1jb2wnO1xuICAgIGNvbnN0IGNsc01hcCA9IFtgJHthbnRDb2xDbGFzc30teHMtJHtydWxlLnhzfWBdO1xuICAgIGlmIChydWxlLnNtKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tc20tJHtydWxlLnNtfWApO1xuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtydWxlLm1kfWApO1xuICAgIGlmIChydWxlLmxnKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbGctJHtydWxlLmxnfWApO1xuICAgIGlmIChydWxlLnhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teGwtJHtydWxlLnhsfWApO1xuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3J1bGUueHhsfWApO1xuICAgIHJldHVybiBjbHNNYXA7XG4gIH1cbn1cbiJdfQ==