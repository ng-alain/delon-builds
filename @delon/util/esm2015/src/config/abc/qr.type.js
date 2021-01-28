/**
 * @fileoverview added by tsickle
 * Generated from: src/config/abc/qr.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainQRConfig() { }
if (false) {
    /**
     * [qrious](https://neocotic.com/qrious) 外网地址，默认：`https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`
     *
     * 若在 `angular.json` 配置 `"scripts": [ "node_modules/qrious/dist/qrious.min.js" ]` 则优先使用
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.lib;
    /**
     * 背景，默认：`white`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间，默认：`1`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.backgroundAlpha;
    /**
     * 前景，默认：`black`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间，默认：`1`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.foregroundAlpha;
    /**
     * 误差校正级别，默认：`L`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.level;
    /**
     * 二维码输出图片MIME类型，默认：`image/png`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.mime;
    /**
     * 内边距（单位：px），默认：`10`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.padding;
    /**
     * 大小（单位：px），默认：`220`
     * @type {?|undefined}
     */
    AlainQRConfig.prototype.size;
    /** @type {?|undefined} */
    AlainQRConfig.prototype.delay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2NvbmZpZy9hYmMvcXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1DQXdCQzs7Ozs7Ozs7SUFsQkMsNEJBQWE7Ozs7O0lBRWIsbUNBQW9COzs7OztJQUVwQix3Q0FBeUI7Ozs7O0lBRXpCLG1DQUFvQjs7Ozs7SUFFcEIsd0NBQXlCOzs7OztJQUV6Qiw4QkFBOEI7Ozs7O0lBRTlCLDZCQUFjOzs7OztJQUVkLGdDQUFpQjs7Ozs7SUFFakIsNkJBQWM7O0lBQ2QsOEJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluUVJDb25maWcge1xuICAvKipcbiAgICogW3FyaW91c10oaHR0cHM6Ly9uZW9jb3RpYy5jb20vcXJpb3VzKSDlpJbnvZHlnLDlnYDvvIzpu5jorqTvvJpgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3FyaW91cy80LjAuMi9xcmlvdXMubWluLmpzYFxuICAgKlxuICAgKiDoi6XlnKggYGFuZ3VsYXIuanNvbmAg6YWN572uIGBcInNjcmlwdHNcIjogWyBcIm5vZGVfbW9kdWxlcy9xcmlvdXMvZGlzdC9xcmlvdXMubWluLmpzXCIgXWAg5YiZ5LyY5YWI5L2/55SoXG4gICAqL1xuICBsaWI/OiBzdHJpbmc7XG4gIC8qKiDog4zmma/vvIzpu5jorqTvvJpgd2hpdGVgICovXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMWAgKi9cbiAgYmFja2dyb3VuZEFscGhhPzogbnVtYmVyO1xuICAvKiog5YmN5pmv77yM6buY6K6k77yaYGJsYWNrYCAqL1xuICBmb3JlZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze077yM6buY6K6k77yaYDFgICovXG4gIGZvcmVncm91bmRBbHBoYT86IG51bWJlcjtcbiAgLyoqIOivr+W3ruagoeato+e6p+WIq++8jOm7mOiupO+8mmBMYCAqL1xuICBsZXZlbD86ICdMJyB8ICdNJyB8ICdRJyB8ICdIJztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnovvvIzpu5jorqTvvJpgaW1hZ2UvcG5nYCAqL1xuICBtaW1lPzogc3RyaW5nO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvInvvIzpu5jorqTvvJpgMTBgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAyMjBgICovXG4gIHNpemU/OiBudW1iZXI7XG4gIGRlbGF5PzogbnVtYmVyO1xufVxuIl19