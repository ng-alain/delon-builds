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
var LodopConfig = /** @class */ (function () {
    function LodopConfig() {
        deprecation10Cog("LodopConfig");
    }
    LodopConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LodopConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ LodopConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopConfig_Factory() { return new LodopConfig(); }, token: LodopConfig, providedIn: "root" });
    return LodopConfig;
}());
export { LodopConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9sb2RvcC8iLCJzb3VyY2VzIjpbImxvZG9wLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUsvQztJQUVFO1FBQ0UsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7c0JBTmxDO0NBMENDLEFBcENELElBb0NDO1NBbkNZLFdBQVc7Ozs7OztJQU90Qiw4QkFBZ0I7Ozs7O0lBSWhCLCtCQUFpQjs7Ozs7SUFJakIsK0JBQWtCOzs7OztJQUlsQixrQ0FBcUI7Ozs7Ozs7O0lBT3JCLDBCQUFhOzs7OztJQUliLDJCQUFjOzs7OztJQUlkLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTBDb2cgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYExvZG9wQ29uZmlnYCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZGVwcmVjYXRpb24xMENvZyhgTG9kb3BDb25maWdgKTtcbiAgfVxuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya5Li75rOo5YaM5Y+3XG4gICAqL1xuICBsaWNlbnNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrpmYTliqDms6jlhozlj7dBXG4gICAqL1xuICBsaWNlbnNlQTogc3RyaW5nO1xuICAvKipcbiAgICog5rOo5YaM5L+h5oGv77ya6ZmE5Yqg5rOo5YaM5Y+3QlxuICAgKi9cbiAgbGljZW5zZUI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDms6jlhozkv6Hmga/vvJrms6jlhozljZXkvY3lkI3np7BcbiAgICovXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Ag6L+c56iL6ISa5pysVVJM5Zyw5Z2A77yMKirms6jmhI8qKuWKoeW/heS9v+eUqCBgbmFtZWAg5bGe5oCn5oyH5a6a5Y+Y6YeP5YC8XG4gICAqXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xuICAgKiAtIGh0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMgW+m7mOiupF1cbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIOWPmOmHj+WQje+8jOm7mOiupO+8mmBDTE9ET1BgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5qOA5p+l5qyh5pWw77yM6buY6K6kIGAxMDBg77yM5b2T5qOA5p+l6LaF6L+H5pe26KeG5Li65byC5bi477yM6L+Z5piv5Zug5Li6IExvZG9wIOmcgOimgei/nuaOpSBXZWJTb2NrZXRcbiAgICovXG4gIGNoZWNrTWF4Q291bnQ/OiBudW1iZXI7XG59XG4iXX0=