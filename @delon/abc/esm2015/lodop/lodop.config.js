/**
 * @fileoverview added by tsickle
 * Generated from: lodop.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `LodopConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export class LodopConfig {
    constructor() {
        deprecation10Cog(`LodopConfig`);
    }
}
LodopConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LodopConfig.ctorParameters = () => [];
/** @nocollapse */ LodopConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopConfig_Factory() { return new LodopConfig(); }, token: LodopConfig, providedIn: "root" });
if (false) {
    /**
     * 注册信息：主注册号
     * @type {?}
     */
    LodopConfig.prototype.license;
    /**
     * 注册信息：附加注册号A
     * @type {?}
     */
    LodopConfig.prototype.licenseA;
    /**
     * 注册信息：附加注册号B
     * @type {?}
     */
    LodopConfig.prototype.licenseB;
    /**
     * 注册信息：注册单位名称
     * @type {?}
     */
    LodopConfig.prototype.companyName;
    /**
     * Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值
     *
     * - http://localhost:18000/CLodopfuncs.js
     * - https://localhost:8443/CLodopfuncs.js [默认]
     * @type {?}
     */
    LodopConfig.prototype.url;
    /**
     * Lodop 变量名，默认：`CLODOP`
     * @type {?}
     */
    LodopConfig.prototype.name;
    /**
     * 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket
     * @type {?}
     */
    LodopConfig.prototype.checkMaxCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2RvcC8iLCJzb3VyY2VzIjpbImxvZG9wLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQU0vQyxNQUFNLE9BQU8sV0FBVztJQUN0QjtRQUNFLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQUpGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7Ozs7SUFRaEMsOEJBQWdCOzs7OztJQUloQiwrQkFBaUI7Ozs7O0lBSWpCLCtCQUFrQjs7Ozs7SUFJbEIsa0NBQXFCOzs7Ozs7OztJQU9yQiwwQkFBYTs7Ozs7SUFJYiwyQkFBYzs7Ozs7SUFJZCxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBMb2RvcENvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2RvcENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYExvZG9wQ29uZmlnYCk7XG4gIH1cbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8muS4u+azqOWGjOWPt1xuICAgKi9cbiAgbGljZW5zZTogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya6ZmE5Yqg5rOo5YaM5Y+3QVxuICAgKi9cbiAgbGljZW5zZUE6IHN0cmluZztcbiAgLyoqXG4gICAqIOazqOWGjOS/oeaBr++8mumZhOWKoOazqOWGjOWPt0JcbiAgICovXG4gIGxpY2Vuc2VCPzogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya5rOo5YaM5Y2V5L2N5ZCN56ewXG4gICAqL1xuICBjb21wYW55TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIOi/nOeoi+iEmuacrFVSTOWcsOWdgO+8jCoq5rOo5oSPKirliqHlv4Xkvb/nlKggYG5hbWVgIOWxnuaAp+aMh+WumuWPmOmHj+WAvFxuICAgKlxuICAgKiAtIGh0dHA6Ly9sb2NhbGhvc3Q6MTgwMDAvQ0xvZG9wZnVuY3MuanNcbiAgICogLSBodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzIFvpu5jorqRdXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2RvcCDlj5jph4/lkI3vvIzpu5jorqTvvJpgQ0xPRE9QYFxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOajgOafpeasoeaVsO+8jOm7mOiupCBgMTAwYO+8jOW9k+ajgOafpei2hei/h+aXtuinhuS4uuW8guW4uO+8jOi/meaYr+WboOS4uiBMb2RvcCDpnIDopoHov57mjqUgV2ViU29ja2V0XG4gICAqL1xuICBjaGVja01heENvdW50PzogbnVtYmVyO1xufVxuIl19