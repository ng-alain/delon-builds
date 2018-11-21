/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DelonAuthConfig = /** @class */ (function () {
    function DelonAuthConfig() {
        /**
         * 存储KEY值
         */
        this.store_key = '_token';
        /**
         * 无效时跳转至登录页，包括：
         * - 无效token值
         * - token已过期（限JWT）
         */
        this.token_invalid_redirect = true;
        /**
         * token过期时间偏移值，默认：`10` 秒（单位：秒）
         */
        this.token_exp_offset = 10;
        /**
         * 发送token参数名，默认：token
         */
        this.token_send_key = 'token';
        /**
         * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
         *
         * - `Bearer ${token}`
         */
        this.token_send_template = '${token}';
        /**
         * 发送token参数位置，默认：header
         */
        this.token_send_place = 'header';
        /**
         * 登录页路由地址
         */
        this.login_url = "/login";
        /**
         * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
         */
        this.ignores = [/\/login/, /assets\//, /passport\//];
        /**
         * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
         */
        this.allow_anonymous_key = "_allow_anonymous";
    }
    return DelonAuthConfig;
}());
export { DelonAuthConfig };
if (false) {
    /**
     * 存储KEY值
     * @type {?}
     */
    DelonAuthConfig.prototype.store_key;
    /**
     * 无效时跳转至登录页，包括：
     * - 无效token值
     * - token已过期（限JWT）
     * @type {?}
     */
    DelonAuthConfig.prototype.token_invalid_redirect;
    /**
     * token过期时间偏移值，默认：`10` 秒（单位：秒）
     * @type {?}
     */
    DelonAuthConfig.prototype.token_exp_offset;
    /**
     * 发送token参数名，默认：token
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_key;
    /**
     * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
     *
     * - `Bearer ${token}`
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_template;
    /**
     * 发送token参数位置，默认：header
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_place;
    /**
     * 登录页路由地址
     * @type {?}
     */
    DelonAuthConfig.prototype.login_url;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
     * @type {?}
     */
    DelonAuthConfig.prototype.ignores;
    /**
     * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
     * @type {?}
     */
    DelonAuthConfig.prototype.allow_anonymous_key;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTs7Ozs7eUJBSWUsUUFBUTs7Ozs7O3NDQU1LLElBQUk7Ozs7Z0NBSVYsRUFBRTs7Ozs4QkFJSixPQUFPOzs7Ozs7bUNBTUYsVUFBVTs7OztnQ0FJYyxRQUFROzs7O3lCQUkxQyxRQUFROzs7O3VCQUlBLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7Ozs7bUNBSW5DLGtCQUFrQjs7MEJBeEMzQztJQXlDQyxDQUFBO0FBekNELDJCQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xuICAvKipcbiAgICog5a2Y5YKoS0VZ5YC8XG4gICAqL1xuICBzdG9yZV9rZXk/ID0gJ190b2tlbic7XG4gIC8qKlxuICAgKiDml6DmlYjml7bot7Povazoh7PnmbvlvZXpobXvvIzljIXmi6zvvJpcbiAgICogLSDml6DmlYh0b2tlbuWAvFxuICAgKiAtIHRva2Vu5bey6L+H5pyf77yI6ZmQSldU77yJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PyA9IHRydWU7XG4gIC8qKlxuICAgKiB0b2tlbui/h+acn+aXtumXtOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMGAg56eS77yI5Y2V5L2N77ya56eS77yJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0PyA9IDEwO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDlkI3vvIzpu5jorqTvvJp0b2tlblxuICAgKi9cbiAgdG9rZW5fc2VuZF9rZXk/ID0gJ3Rva2VuJztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5qih5p2/77yI6buY6K6k5Li677yaYCR7dG9rZW59YO+8ie+8jOS9v+eUqCBgJHt0b2tlbn1gIOihqOekunRva2Vu54K55L2N56ym77yM5L6L5aaC77yaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/ID0gJyR7dG9rZW59JztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5L2N572u77yM6buY6K6k77yaaGVhZGVyXG4gICAqL1xuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xuICAvKipcbiAgICog55m75b2V6aG16Lev55Sx5Zyw5Z2AXG4gICAqL1xuICBsb2dpbl91cmw/ID0gYC9sb2dpbmA7XG4gIC8qKlxuICAgKiDlv73nlaVUT0tFTueahFVSTOWcsOWdgOWIl+ihqO+8jOm7mOiupOWAvOS4uu+8mlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdID0gWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXTtcbiAgLyoqXG4gICAqIOWFgeiuuOWMv+WQjeeZu+W9lUtFWe+8jOiLpeivt+axguWPguaVsOS4reW4puacieivpUtFWeihqOekuuW/veeVpVRPS0VOXG4gICAqL1xuICBhbGxvd19hbm9ueW1vdXNfa2V5PyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcbn1cbiJdfQ==