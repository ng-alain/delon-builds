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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7OztRQUVFLGVBQVUsR0FBRyxPQUFPLENBQUM7Ozs7UUFFckIsb0JBQWUsR0FBRyxDQUFDLENBQUM7Ozs7UUFFcEIsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQUVyQixvQkFBZSxHQUFHLENBQUMsQ0FBQzs7OztRQUVwQixVQUFLLEdBQTBCLEdBQUcsQ0FBQzs7OztRQUVuQyxTQUFJLEdBQUcsV0FBVyxDQUFDOzs7O1FBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7Ozs7UUFFYixTQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7Ozs7O0lBZkMsOEJBQXFCOzs7OztJQUVyQixtQ0FBb0I7Ozs7O0lBRXBCLDhCQUFxQjs7Ozs7SUFFckIsbUNBQW9COzs7OztJQUVwQix5QkFBbUM7Ozs7O0lBRW5DLHdCQUFtQjs7Ozs7SUFFbkIsMkJBQWE7Ozs7O0lBRWIsd0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUVJDb25maWcge1xuICAvKiog6IOM5pmv77yM6buY6K6k77yaYHdoaXRlYCAqL1xuICBiYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxLjBgICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDE7XG4gIC8qKiDliY3mma/vvIzpu5jorqTvvJpgYmxhY2tgICovXG4gIGZvcmVncm91bmQgPSAnYmxhY2snO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze077yM6buY6K6k77yaYDEuMGAgKi9cbiAgZm9yZWdyb3VuZEFscGhhID0gMTtcbiAgLyoqIOivr+W3ruagoeato+e6p+WIq++8jOm7mOiupO+8mmBMYCAqL1xuICBsZXZlbDogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnID0gJ0wnO1xuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+Wei++8jOm7mOiupO+8mmBpbWFnZS9wbmdgICovXG4gIG1pbWUgPSAnaW1hZ2UvcG5nJztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJ77yM6buY6K6k77yaYDEwYCAqL1xuICBwYWRkaW5nID0gMTA7XG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAyMjBgICovXG4gIHNpemUgPSAyMjA7XG59XG4iXX0=