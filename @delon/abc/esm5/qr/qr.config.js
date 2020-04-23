/**
 * @fileoverview added by tsickle
 * Generated from: qr.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/** @type {?} */
export var QR_DEFULAT_CONFIG = {
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'L',
    mime: 'image/png',
    padding: 10,
    size: 220,
};
/**
 * @deprecated `QRConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
var QRConfig = /** @class */ (function () {
    function QRConfig() {
        /**
         * 背景，默认：`white`
         */
        this.background = 'white';
        /**
         * 背景透明级别，范围：`0-1` 之间，默认：`1.0`
         */
        this.backgroundAlpha = 1;
        /**
         * 前景，默认：`black`
         */
        this.foreground = 'black';
        /**
         * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
         */
        this.foregroundAlpha = 1;
        /**
         * 误差校正级别，默认：`L`
         */
        this.level = 'L';
        /**
         * 二维码输出图片MIME类型，默认：`image/png`
         */
        this.mime = 'image/png';
        /**
         * 内边距（单位：px），默认：`10`
         */
        this.padding = 10;
        /**
         * 大小（单位：px），默认：`220`
         */
        this.size = 220;
        deprecation10Cog("QRConfig");
    }
    QRConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    QRConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ QRConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function QRConfig_Factory() { return new QRConfig(); }, token: QRConfig, providedIn: "root" });
    return QRConfig;
}());
export { QRConfig };
if (false) {
    /**
     * 背景，默认：`white`
     * @type {?}
     */
    QRConfig.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间，默认：`1.0`
     * @type {?}
     */
    QRConfig.prototype.backgroundAlpha;
    /**
     * 前景，默认：`black`
     * @type {?}
     */
    QRConfig.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
     * @type {?}
     */
    QRConfig.prototype.foregroundAlpha;
    /**
     * 误差校正级别，默认：`L`
     * @type {?}
     */
    QRConfig.prototype.level;
    /**
     * 二维码输出图片MIME类型，默认：`image/png`
     * @type {?}
     */
    QRConfig.prototype.mime;
    /**
     * 内边距（单位：px），默认：`10`
     * @type {?}
     */
    QRConfig.prototype.padding;
    /**
     * 大小（单位：px），默认：`220`
     * @type {?}
     */
    QRConfig.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFL0MsTUFBTSxLQUFPLGlCQUFpQixHQUFrQjtJQUM5QyxVQUFVLEVBQUUsT0FBTztJQUNuQixlQUFlLEVBQUUsQ0FBQztJQUNsQixVQUFVLEVBQUUsT0FBTztJQUNuQixlQUFlLEVBQUUsQ0FBQztJQUNsQixLQUFLLEVBQUUsR0FBRztJQUNWLElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsSUFBSSxFQUFFLEdBQUc7Q0FDVjs7OztBQUtEO0lBRUU7Ozs7UUFJQSxlQUFVLEdBQUcsT0FBTyxDQUFDOzs7O1FBRXJCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBRXBCLGVBQVUsR0FBRyxPQUFPLENBQUM7Ozs7UUFFckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7Ozs7UUFFcEIsVUFBSyxHQUEwQixHQUFHLENBQUM7Ozs7UUFFbkMsU0FBSSxHQUFHLFdBQVcsQ0FBQzs7OztRQUVuQixZQUFPLEdBQUcsRUFBRSxDQUFDOzs7O1FBRWIsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQWpCVCxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzttQkFsQmxDO0NBdUNDLEFBckJELElBcUJDO1NBcEJZLFFBQVE7Ozs7OztJQUtuQiw4QkFBcUI7Ozs7O0lBRXJCLG1DQUFvQjs7Ozs7SUFFcEIsOEJBQXFCOzs7OztJQUVyQixtQ0FBb0I7Ozs7O0lBRXBCLHlCQUFtQzs7Ozs7SUFFbkMsd0JBQW1COzs7OztJQUVuQiwyQkFBYTs7Ozs7SUFFYix3QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluUVJDb25maWcgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMENvZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IFFSX0RFRlVMQVRfQ09ORklHOiBBbGFpblFSQ29uZmlnID0ge1xuICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICBiYWNrZ3JvdW5kQWxwaGE6IDEsXG4gIGZvcmVncm91bmQ6ICdibGFjaycsXG4gIGZvcmVncm91bmRBbHBoYTogMSxcbiAgbGV2ZWw6ICdMJyxcbiAgbWltZTogJ2ltYWdlL3BuZycsXG4gIHBhZGRpbmc6IDEwLFxuICBzaXplOiAyMjAsXG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBRUkNvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBRUkNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYFFSQ29uZmlnYCk7XG4gIH1cbiAgLyoqIOiDjOaZr++8jOm7mOiupO+8mmB3aGl0ZWAgKi9cbiAgYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMS4wYCAqL1xuICBiYWNrZ3JvdW5kQWxwaGEgPSAxO1xuICAvKiog5YmN5pmv77yM6buY6K6k77yaYGJsYWNrYCAqL1xuICBmb3JlZ3JvdW5kID0gJ2JsYWNrJztcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxLjBgICovXG4gIGZvcmVncm91bmRBbHBoYSA9IDE7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKvvvIzpu5jorqTvvJpgTGAgKi9cbiAgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyA9ICdMJztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnovvvIzpu5jorqTvvJpgaW1hZ2UvcG5nYCAqL1xuICBtaW1lID0gJ2ltYWdlL3BuZyc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAxMGAgKi9cbiAgcGFkZGluZyA9IDEwO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMjIwYCAqL1xuICBzaXplID0gMjIwO1xufVxuIl19