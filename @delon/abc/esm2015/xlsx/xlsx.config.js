/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `XlsxConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export class XlsxConfig {
    constructor() {
        /**
         * Xlsx library path
         */
        this.url = '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
        /**
         * Defines which Xlsx optional modules should get loaded, e.g:
         *
         * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
         */
        this.modules = [];
        deprecation10Cog(`XlsxConfig`);
    }
}
XlsxConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
XlsxConfig.ctorParameters = () => [];
/** @nocollapse */ XlsxConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxConfig_Factory() { return new XlsxConfig(); }, token: XlsxConfig, providedIn: "root" });
if (false) {
    /**
     * Xlsx library path
     * @type {?}
     */
    XlsxConfig.prototype.url;
    /**
     * Defines which Xlsx optional modules should get loaded, e.g:
     *
     * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
     * @type {?}
     */
    XlsxConfig.prototype.modules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQU0vQyxNQUFNLE9BQU8sVUFBVTtJQUNyQjs7OztRQU1BLFFBQUcsR0FBWSxpREFBaUQsQ0FBQzs7Ozs7O1FBTWpFLFlBQU8sR0FBYyxFQUFFLENBQUM7UUFYdEIsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7OztJQVFoQyx5QkFBaUU7Ozs7Ozs7SUFNakUsNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMENvZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBgWGxzeENvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBYbHN4Q29uZmlnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZGVwcmVjYXRpb24xMENvZyhgWGxzeENvbmZpZ2ApO1xuICB9XG4gIC8qKlxuICAgKiBYbHN4IGxpYnJhcnkgcGF0aFxuICAgKi9cbiAgdXJsPzogc3RyaW5nID0gJy8vY2RuLmJvb3Rjc3MuY29tL3hsc3gvMC4xMi4xMy94bHN4LmZ1bGwubWluLmpzJztcbiAgLyoqXG4gICAqIERlZmluZXMgd2hpY2ggWGxzeCBvcHRpb25hbCBtb2R1bGVzIHNob3VsZCBnZXQgbG9hZGVkLCBlLmc6XG4gICAqXG4gICAqIGBbICcvL2Nkbi5ib290Y3NzLmNvbS94bHN4LzAuMTIuMTMvY3BleGNlbC5qcycgXWBcbiAgICovXG4gIG1vZHVsZXM/OiBzdHJpbmdbXSA9IFtdO1xufVxuIl19