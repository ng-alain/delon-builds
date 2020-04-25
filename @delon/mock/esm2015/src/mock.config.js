/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DelonMockConfig {
    constructor() {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxlQUFlO0lBQTVCOzs7O1FBUUUsVUFBSyxHQUFZLEdBQUcsQ0FBQzs7OztRQUlyQixVQUFLLEdBQWEsS0FBSyxDQUFDOzs7O1FBSXhCLFFBQUcsR0FBYSxJQUFJLENBQUM7Ozs7UUFJckIsU0FBSSxHQUFhLElBQUksQ0FBQzs7OztRQUl0Qiw2QkFBd0IsR0FBYSxJQUFJLENBQUM7SUFDNUMsQ0FBQztDQUFBOzs7Ozs7SUFyQkMsK0JBQVU7Ozs7O0lBSVYsZ0NBQXFCOzs7OztJQUlyQixnQ0FBd0I7Ozs7O0lBSXhCLDhCQUFxQjs7Ozs7SUFJckIsK0JBQXNCOzs7OztJQUl0QixtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25Nb2NrQ29uZmlnIHtcbiAgLyoqXG4gICAqIOinhOWImeWumuS5ieaVsOaNrlxuICAgKi9cbiAgZGF0YTogYW55O1xuICAvKipcbiAgICog6K+35rGC5bu26L+f77yM5Y2V5L2N77ya5q+r56eS77yM6buY6K6k77yaYDMwMGBcbiAgICovXG4gIGRlbGF5PzogbnVtYmVyID0gMzAwO1xuICAvKipcbiAgICog5piv5ZCm5by65Yi25omA5pyJ6K+35rGC6YO9TW9ja++8jGB0cnVlYCDooajnpLrlvZPor7fmsYLnmoRVUkzkuI3lrZjlnKjml7bnm7TmjqXov5Tlm54gNDA0IOmUmeivr++8jGBmYWxzZWAg6KGo56S65pyq5ZG95Lit5pe25Y+R6YCB55yf5a6eSFRUUOivt+axglxuICAgKi9cbiAgZm9yY2U/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDmmK/lkKbmiZPljbAgTW9jayDor7fmsYLkv6Hmga/vvIzlvKXooaXmtY/op4jlmajml6BOZXR3b3Jr5L+h5oGvXG4gICAqL1xuICBsb2c/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpui/lOWbnuWJr+acrOaVsOaNrlxuICAgKi9cbiAgY29weT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICog5piv5ZCm5oum5oiq5ZG95Lit5ZCO57un57ut6LCD55So5ZCO57ut5oum5oiq5Zmo55qEIGBpbnRlcmNlcHRgIOaWueazle+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzPzogYm9vbGVhbiA9IHRydWU7XG59XG4iXX0=