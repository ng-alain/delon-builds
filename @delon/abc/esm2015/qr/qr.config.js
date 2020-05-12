/**
 * @fileoverview added by tsickle
 * Generated from: qr.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class QRConfig {
    constructor() {
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
    }
}
QRConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ QRConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QRConfig_Factory() { return new QRConfig(); }, token: QRConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxRQUFRO0lBRHJCOzs7O1FBR0UsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQUVyQixvQkFBZSxHQUFHLENBQUMsQ0FBQzs7OztRQUVwQixlQUFVLEdBQUcsT0FBTyxDQUFDOzs7O1FBRXJCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBRXBCLFVBQUssR0FBMEIsR0FBRyxDQUFDOzs7O1FBRW5DLFNBQUksR0FBRyxXQUFXLENBQUM7Ozs7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7OztRQUViLFNBQUksR0FBRyxHQUFHLENBQUM7S0FDWjs7O1lBbEJBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBR2hDLDhCQUFxQjs7Ozs7SUFFckIsbUNBQW9COzs7OztJQUVwQiw4QkFBcUI7Ozs7O0lBRXJCLG1DQUFvQjs7Ozs7SUFFcEIseUJBQW1DOzs7OztJQUVuQyx3QkFBbUI7Ozs7O0lBRW5CLDJCQUFhOzs7OztJQUViLHdCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFFSQ29uZmlnIHtcbiAgLyoqIOiDjOaZr++8jOm7mOiupO+8mmB3aGl0ZWAgKi9cbiAgYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMS4wYCAqL1xuICBiYWNrZ3JvdW5kQWxwaGEgPSAxO1xuICAvKiog5YmN5pmv77yM6buY6K6k77yaYGJsYWNrYCAqL1xuICBmb3JlZ3JvdW5kID0gJ2JsYWNrJztcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxLjBgICovXG4gIGZvcmVncm91bmRBbHBoYSA9IDE7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKvvvIzpu5jorqTvvJpgTGAgKi9cbiAgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyA9ICdMJztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnovvvIzpu5jorqTvvJpgaW1hZ2UvcG5nYCAqL1xuICBtaW1lID0gJ2ltYWdlL3BuZyc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAxMGAgKi9cbiAgcGFkZGluZyA9IDEwO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMjIwYCAqL1xuICBzaXplID0gMjIwO1xufVxuIl19