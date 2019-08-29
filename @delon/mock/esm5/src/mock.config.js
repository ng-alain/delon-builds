/**
 * @fileoverview added by tsickle
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
     * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?}
     */
    DelonMockConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7OztRQUlFLFVBQUssR0FBWSxHQUFHLENBQUM7Ozs7UUFFckIsVUFBSyxHQUFhLEtBQUssQ0FBQzs7OztRQUV4QixRQUFHLEdBQWEsSUFBSSxDQUFDOzs7O1FBSXJCLDZCQUF3QixHQUFhLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7Ozs7OztJQVhDLCtCQUFVOzs7OztJQUVWLGdDQUFxQjs7Ozs7SUFFckIsZ0NBQXdCOzs7OztJQUV4Qiw4QkFBcUI7Ozs7O0lBSXJCLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWxvbk1vY2tDb25maWcge1xuICAvKiog6KeE5YiZ5a6a5LmJ5pWw5o2uICovXG4gIGRhdGE6IGFueTtcbiAgLyoqIOivt+axguW7tui/n++8jOWNleS9je+8muavq+enku+8jOm7mOiupO+8mmAzMDBgICovXG4gIGRlbGF5PzogbnVtYmVyID0gMzAwO1xuICAvKiog5piv5ZCm5by65Yi25omA5pyJ6K+35rGC6YO9TW9ja++8jGB0cnVlYCDooajnpLrlvZPor7fmsYLnmoRVUkzkuI3lrZjlnKjml7bnm7TmjqXov5Tlm54gNDA0IOmUmeivr++8jGBmYWxzZWAg6KGo56S65pyq5ZG95Lit5pe25Y+R6YCB55yf5a6eSFRUUOivt+axgiAqL1xuICBmb3JjZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIOaYr+WQpuaJk+WNsCBNb2NrIOivt+axguS/oeaBr++8jOW8peihpea1j+iniOWZqOaXoE5ldHdvcmvkv6Hmga8gKi9cbiAgbG9nPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDmmK/lkKbmi6bmiKrlkb3kuK3lkI7nu6fnu63osIPnlKjlkI7nu63mi6bmiKrlmajnmoQgYGludGVyY2VwdGAg5pa55rOV77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBleGVjdXRlT3RoZXJJbnRlcmNlcHRvcnM/OiBib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==