/**
 * @fileoverview added by tsickle
 * Generated from: zip.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `ZipConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
var ZipConfig = /** @class */ (function () {
    function ZipConfig() {
        /**
         * Zip library path
         */
        this.url = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
        /**
         * Defines which zip optional utils should get loaded
         */
        this.utils = [];
        deprecation10Cog("ZipConfig");
    }
    ZipConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ZipConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ ZipConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipConfig_Factory() { return new ZipConfig(); }, token: ZipConfig, providedIn: "root" });
    return ZipConfig;
}());
export { ZipConfig };
if (false) {
    /**
     * Zip library path
     * @type {?}
     */
    ZipConfig.prototype.url;
    /**
     * Defines which zip optional utils should get loaded
     * @type {?}
     */
    ZipConfig.prototype.utils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvemlwLyIsInNvdXJjZXMiOlsiemlwLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUsvQztJQUVFOzs7O1FBTUEsUUFBRyxHQUFZLDRDQUE0QyxDQUFDOzs7O1FBSTVELFVBQUssR0FBYyxFQUFFLENBQUM7UUFUcEIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7b0JBTmxDO0NBbUJDLEFBYkQsSUFhQztTQVpZLFNBQVM7Ozs7OztJQU9wQix3QkFBNEQ7Ozs7O0lBSTVELDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTBDb2cgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYFppcENvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBaaXBDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBaaXBDb25maWdgKTtcbiAgfVxuICAvKipcbiAgICogWmlwIGxpYnJhcnkgcGF0aFxuICAgKi9cbiAgdXJsPzogc3RyaW5nID0gJy8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMS41L2pzemlwLm1pbi5qcyc7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoaWNoIHppcCBvcHRpb25hbCB1dGlscyBzaG91bGQgZ2V0IGxvYWRlZFxuICAgKi9cbiAgdXRpbHM/OiBzdHJpbmdbXSA9IFtdO1xufVxuIl19