/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7OztRQUtFLFVBQUssR0FBSSxHQUFHLENBQUM7Ozs7UUFFYixVQUFLLEdBQUksS0FBSyxDQUFDOzs7O1FBRWYsUUFBRyxHQUFJLElBQUksQ0FBQztJQUNkLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFWRCxJQVVDOzs7Ozs7O0lBUEMsK0JBQVU7Ozs7O0lBRVYsZ0NBQWE7Ozs7O0lBRWIsZ0NBQWU7Ozs7O0lBRWYsOEJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25Nb2NrQ29uZmlnIHtcbiAgLyoqIOinhOWImeWumuS5ieaVsOaNriAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGRhdGE6IGFueTtcbiAgLyoqIOivt+axguW7tui/n++8jOWNleS9je+8muavq+enku+8jOm7mOiupO+8mmAzMDBgICovXG4gIGRlbGF5ID89IDMwMDtcbiAgLyoqIOaYr+WQpuW8uuWItuaJgOacieivt+axgumDvU1vY2vvvIxgdHJ1ZWAg6KGo56S65b2T6K+35rGC55qEVVJM5LiN5a2Y5Zyo5pe255u05o6l6L+U5ZueIDQwNCDplJnor6/vvIxgZmFsc2VgIOihqOekuuacquWRveS4reaXtuWPkemAgeecn+WunkhUVFDor7fmsYIgKi9cbiAgZm9yY2UgPz0gZmFsc2U7XG4gIC8qKiDmmK/lkKbmiZPljbAgTW9jayDor7fmsYLkv6Hmga/vvIzlvKXooaXmtY/op4jlmajml6BOZXR3b3Jr5L+h5oGvICovXG4gIGxvZyA/PSB0cnVlO1xufVxuIl19