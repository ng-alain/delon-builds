/**
 * @fileoverview added by tsickle
 * Generated from: src/services/responsive/responsive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.cog = cogSrv.merge('themeResponsive', {
            rules: {
                1: { xs: 24 },
                2: { xs: 24, sm: 12 },
                3: { xs: 24, sm: 12, md: 8 },
                4: { xs: 24, sm: 12, md: 8, lg: 6 },
                5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
            },
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBOEIsTUFBTSxhQUFhLENBQUM7Ozs7QUFFN0UsTUFBTSxPQUFPLE9BQU8sR0FBRyxDQUFDO0FBS3hCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBWSxNQUEwQjtRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQWdELGlCQUFpQixFQUFFO1lBQ3hGLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDckIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzVCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ25DLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDMUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7YUFDbkQ7U0FDRixDQUFDLENBQUM7UUFDSCxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDeEIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7YUFDWixJQUFJOzs7O1FBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBQyxFQUM1QztZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFhOztjQUNaLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUNyRSxXQUFXLEdBQUcsU0FBUzs7Y0FDdkIsTUFBTSxHQUFHLENBQUMsR0FBRyxXQUFXLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTnpCLGtCQUFrQjs7Ozs7Ozs7SUFRekIsZ0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblRoZW1lUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IFJFUF9NQVggPSA2O1xuXG5leHBvcnQgdHlwZSBSRVBfVFlQRSA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblRoZW1lUmVzcG9uc2l2ZUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvZ1Nydi5tZXJnZTxBbGFpblRoZW1lUmVzcG9uc2l2ZUNvbmZpZywgJ3RoZW1lUmVzcG9uc2l2ZSc+KCd0aGVtZVJlc3BvbnNpdmUnLCB7XG4gICAgICBydWxlczoge1xuICAgICAgICAxOiB7IHhzOiAyNCB9LFxuICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXG4gICAgICAgIDM6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4IH0sXG4gICAgICAgIDQ6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiB9LFxuICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXG4gICAgICAgIDY6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQsIHh4bDogMiB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvZy5ydWxlcylcbiAgICAgICAgLm1hcChpID0+ICtpKVxuICAgICAgICAuc29tZSgoaTogbnVtYmVyKSA9PiBpIDwgMSB8fCBpID4gUkVQX01BWClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3RoZW1lXSB0aGUgcmVzcG9uc2VpdmUgcnVsZSBpbmRleCB2YWx1ZSByYW5nZSBtdXN0IGJlIDEtJHtSRVBfTUFYfWApO1xuICAgIH1cbiAgfVxuXG4gIGdlbkNscyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmNvZy5ydWxlc1tjb3VudCA+IFJFUF9NQVggPyBSRVBfTUFYIDogTWF0aC5tYXgoY291bnQsIDEpXTtcbiAgICBjb25zdCBhbnRDb2xDbGFzcyA9ICdhbnQtY29sJztcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cnVsZS54c31gXTtcbiAgICBpZiAocnVsZS5zbSkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXNtLSR7cnVsZS5zbX1gKTtcbiAgICBpZiAocnVsZS5tZCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LW1kLSR7cnVsZS5tZH1gKTtcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cnVsZS5sZ31gKTtcbiAgICBpZiAocnVsZS54bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXhsLSR7cnVsZS54bH1gKTtcbiAgICBpZiAocnVsZS54eGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14eGwtJHtydWxlLnh4bH1gKTtcbiAgICByZXR1cm4gY2xzTWFwO1xuICB9XG59XG4iXX0=