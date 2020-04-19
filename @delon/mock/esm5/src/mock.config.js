/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DelonMockConfig = /** @class */ (function () {
    function DelonMockConfig() {
        /**
         * 请求延迟，单位：毫秒，默认：`300`
         */
        this.delay = 300;
        /**
         * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
         */
        this.force = false;
        /**
         * 是否打印 Mock 请求信息，弥补浏览器无Network信息
         */
        this.log = true;
        /**
         * 是否返回副本数据
         */
        this.copy = true;
        /**
         * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         */
        this.executeOtherInterceptors = true;
    }
    return DelonMockConfig;
}());
export { DelonMockConfig };
if (false) {
    /**
     * 规则定义数据
     * @type {?}
     */
    DelonMockConfig.prototype.data;
    /**
     * 请求延迟，单位：毫秒，默认：`300`
     * @type {?}
     */
    DelonMockConfig.prototype.delay;
    /**
     * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
     * @type {?}
     */
    DelonMockConfig.prototype.force;
    /**
     * 是否打印 Mock 请求信息，弥补浏览器无Network信息
     * @type {?}
     */
    DelonMockConfig.prototype.log;
    /**
     * 是否返回副本数据
     * @type {?}
     */
    DelonMockConfig.prototype.copy;
    /**
     * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?}
     */
    DelonMockConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7Ozs7UUFRRSxVQUFLLEdBQVksR0FBRyxDQUFDOzs7O1FBSXJCLFVBQUssR0FBYSxLQUFLLENBQUM7Ozs7UUFJeEIsUUFBRyxHQUFhLElBQUksQ0FBQzs7OztRQUlyQixTQUFJLEdBQWEsSUFBSSxDQUFDOzs7O1FBSXRCLDZCQUF3QixHQUFhLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7O0lBckJDLCtCQUFVOzs7OztJQUlWLGdDQUFxQjs7Ozs7SUFJckIsZ0NBQXdCOzs7OztJQUl4Qiw4QkFBcUI7Ozs7O0lBSXJCLCtCQUFzQjs7Ozs7SUFJdEIsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERlbG9uTW9ja0NvbmZpZyB7XG4gIC8qKlxuICAgKiDop4TliJnlrprkuYnmlbDmja5cbiAgICovXG4gIGRhdGE6IGFueTtcbiAgLyoqXG4gICAqIOivt+axguW7tui/n++8jOWNleS9je+8muavq+enku+8jOm7mOiupO+8mmAzMDBgXG4gICAqL1xuICBkZWxheT86IG51bWJlciA9IDMwMDtcbiAgLyoqXG4gICAqIOaYr+WQpuW8uuWItuaJgOacieivt+axgumDvU1vY2vvvIxgdHJ1ZWAg6KGo56S65b2T6K+35rGC55qEVVJM5LiN5a2Y5Zyo5pe255u05o6l6L+U5ZueIDQwNCDplJnor6/vvIxgZmFsc2VgIOihqOekuuacquWRveS4reaXtuWPkemAgeecn+WunkhUVFDor7fmsYJcbiAgICovXG4gIGZvcmNlPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5omT5Y2wIE1vY2sg6K+35rGC5L+h5oGv77yM5byl6KGl5rWP6KeI5Zmo5pegTmV0d29ya+S/oeaBr1xuICAgKi9cbiAgbG9nPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDmmK/lkKbov5Tlm57lia/mnKzmlbDmja5cbiAgICovXG4gIGNvcHk/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpuaLpuaIquWRveS4reWQjue7p+e7reiwg+eUqOWQjue7reaLpuaIquWZqOeahCBgaW50ZXJjZXB0YCDmlrnms5XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9ycz86IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19