/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.backgroundAlpha = 1.0;
        /**
         * 前景，默认：`black`
         */
        this.foreground = 'black';
        /**
         * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
         */
        this.foregroundAlpha = 1.0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7OztRQUVFLGVBQVUsR0FBRyxPQUFPLENBQUM7Ozs7UUFFckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7Ozs7UUFFdEIsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQUVyQixvQkFBZSxHQUFHLEdBQUcsQ0FBQzs7OztRQUV0QixVQUFLLEdBQTBCLEdBQUcsQ0FBQzs7OztRQUVuQyxTQUFJLEdBQUcsV0FBVyxDQUFDOzs7O1FBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7Ozs7UUFFYixTQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7Ozs7O0lBZkMsOEJBQXFCOzs7OztJQUVyQixtQ0FBc0I7Ozs7O0lBRXRCLDhCQUFxQjs7Ozs7SUFFckIsbUNBQXNCOzs7OztJQUV0Qix5QkFBbUM7Ozs7O0lBRW5DLHdCQUFtQjs7Ozs7SUFFbkIsMkJBQWE7Ozs7O0lBRWIsd0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUVJDb25maWcge1xuICAvKiog6IOM5pmv77yM6buY6K6k77yaYHdoaXRlYCAqL1xuICBiYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxLjBgICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIOWJjeaZr++8jOm7mOiupO+8mmBibGFja2AgKi9cbiAgZm9yZWdyb3VuZCA9ICdibGFjayc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMS4wYCAqL1xuICBmb3JlZ3JvdW5kQWxwaGEgPSAxLjA7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKvvvIzpu5jorqTvvJpgTGAgKi9cbiAgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyA9ICdMJztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnovvvIzpu5jorqTvvJpgaW1hZ2UvcG5nYCAqL1xuICBtaW1lID0gJ2ltYWdlL3BuZyc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAxMGAgKi9cbiAgcGFkZGluZyA9IDEwO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMjIwYCAqL1xuICBzaXplID0gMjIwO1xufVxuIl19