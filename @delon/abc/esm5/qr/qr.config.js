/**
 * @fileoverview added by tsickle
 * Generated from: qr.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/** @type {?} */
export var DEFULAT_CONFIG = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFL0MsTUFBTSxLQUFPLGNBQWMsR0FBa0I7SUFDM0MsVUFBVSxFQUFFLE9BQU87SUFDbkIsZUFBZSxFQUFFLENBQUM7SUFDbEIsVUFBVSxFQUFFLE9BQU87SUFDbkIsZUFBZSxFQUFFLENBQUM7SUFDbEIsS0FBSyxFQUFFLEdBQUc7SUFDVixJQUFJLEVBQUUsV0FBVztJQUNqQixPQUFPLEVBQUUsRUFBRTtJQUNYLElBQUksRUFBRSxHQUFHO0NBQ1Y7Ozs7QUFLRDtJQUVFOzs7O1FBSUEsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQUVyQixvQkFBZSxHQUFHLENBQUMsQ0FBQzs7OztRQUVwQixlQUFVLEdBQUcsT0FBTyxDQUFDOzs7O1FBRXJCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBRXBCLFVBQUssR0FBMEIsR0FBRyxDQUFDOzs7O1FBRW5DLFNBQUksR0FBRyxXQUFXLENBQUM7Ozs7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7OztRQUViLFNBQUksR0FBRyxHQUFHLENBQUM7UUFqQlQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7bUJBbEJsQztDQXVDQyxBQXJCRCxJQXFCQztTQXBCWSxRQUFROzs7Ozs7SUFLbkIsOEJBQXFCOzs7OztJQUVyQixtQ0FBb0I7Ozs7O0lBRXBCLDhCQUFxQjs7Ozs7SUFFckIsbUNBQW9COzs7OztJQUVwQix5QkFBbUM7Ozs7O0lBRW5DLHdCQUFtQjs7Ozs7SUFFbkIsMkJBQWE7Ozs7O0lBRWIsd0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpblFSQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTBDb2cgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZVTEFUX0NPTkZJRzogQWxhaW5RUkNvbmZpZyA9IHtcbiAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgYmFja2dyb3VuZEFscGhhOiAxLFxuICBmb3JlZ3JvdW5kOiAnYmxhY2snLFxuICBmb3JlZ3JvdW5kQWxwaGE6IDEsXG4gIGxldmVsOiAnTCcsXG4gIG1pbWU6ICdpbWFnZS9wbmcnLFxuICBwYWRkaW5nOiAxMCxcbiAgc2l6ZTogMjIwLFxufTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBgUVJDb25maWdgIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9nbG9iYWwtY29uZmlnXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUVJDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBRUkNvbmZpZ2ApO1xuICB9XG4gIC8qKiDog4zmma/vvIzpu5jorqTvvJpgd2hpdGVgICovXG4gIGJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze077yM6buY6K6k77yaYDEuMGAgKi9cbiAgYmFja2dyb3VuZEFscGhhID0gMTtcbiAgLyoqIOWJjeaZr++8jOm7mOiupO+8mmBibGFja2AgKi9cbiAgZm9yZWdyb3VuZCA9ICdibGFjayc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMS4wYCAqL1xuICBmb3JlZ3JvdW5kQWxwaGEgPSAxO1xuICAvKiog6K+v5beu5qCh5q2j57qn5Yir77yM6buY6K6k77yaYExgICovXG4gIGxldmVsOiAnTCcgfCAnTScgfCAnUScgfCAnSCcgPSAnTCc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6L77yM6buY6K6k77yaYGltYWdlL3BuZ2AgKi9cbiAgbWltZSA9ICdpbWFnZS9wbmcnO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMTBgICovXG4gIHBhZGRpbmcgPSAxMDtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJ77yM6buY6K6k77yaYDIyMGAgKi9cbiAgc2l6ZSA9IDIyMDtcbn1cbiJdfQ==