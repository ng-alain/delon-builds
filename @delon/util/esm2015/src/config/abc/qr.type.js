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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2FiYy9xci50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsbUNBd0JDOzs7Ozs7OztJQWxCQyw0QkFBYTs7Ozs7SUFFYixtQ0FBb0I7Ozs7O0lBRXBCLHdDQUF5Qjs7Ozs7SUFFekIsbUNBQW9COzs7OztJQUVwQix3Q0FBeUI7Ozs7O0lBRXpCLDhCQUE4Qjs7Ozs7SUFFOUIsNkJBQWM7Ozs7O0lBRWQsZ0NBQWlCOzs7OztJQUVqQiw2QkFBYzs7SUFDZCw4QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWxhaW5RUkNvbmZpZyB7XG4gIC8qKlxuICAgKiBbcXJpb3VzXShodHRwczovL25lb2NvdGljLmNvbS9xcmlvdXMpIOWklue9keWcsOWdgO+8jOm7mOiupO+8mmBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvcXJpb3VzLzQuMC4yL3FyaW91cy5taW4uanNgXG4gICAqXG4gICAqIOiLpeWcqCBgYW5ndWxhci5qc29uYCDphY3nva4gYFwic2NyaXB0c1wiOiBbIFwibm9kZV9tb2R1bGVzL3FyaW91cy9kaXN0L3FyaW91cy5taW4uanNcIiBdYCDliJnkvJjlhYjkvb/nlKhcbiAgICovXG4gIGxpYj86IHN0cmluZztcbiAgLyoqIOiDjOaZr++8jOm7mOiupO+8mmB3aGl0ZWAgKi9cbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtO+8jOm7mOiupO+8mmAxYCAqL1xuICBiYWNrZ3JvdW5kQWxwaGE/OiBudW1iZXI7XG4gIC8qKiDliY3mma/vvIzpu5jorqTvvJpgYmxhY2tgICovXG4gIGZvcmVncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7TvvIzpu5jorqTvvJpgMWAgKi9cbiAgZm9yZWdyb3VuZEFscGhhPzogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5Yir77yM6buY6K6k77yaYExgICovXG4gIGxldmVsPzogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnO1xuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+Wei++8jOm7mOiupO+8mmBpbWFnZS9wbmdgICovXG4gIG1pbWU/OiBzdHJpbmc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8ie+8jOm7mOiupO+8mmAxMGAgKi9cbiAgcGFkZGluZz86IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJ77yM6buY6K6k77yaYDIyMGAgKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgZGVsYXk/OiBudW1iZXI7XG59XG4iXX0=