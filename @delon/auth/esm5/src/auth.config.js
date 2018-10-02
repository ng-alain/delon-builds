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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTs7Ozs7eUJBSWUsUUFBUTs7Ozs7O3NDQU1LLElBQUk7Ozs7Z0NBSVYsRUFBRTs7Ozs4QkFJSixPQUFPOzs7Ozs7bUNBTUYsVUFBVTs7OztnQ0FJYyxRQUFROzs7O3lCQUkxQyxRQUFROzs7O3VCQUlBLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7Ozs7bUNBSW5DLGtCQUFrQjs7MEJBeEMzQztJQXlDQyxDQUFBO0FBekNELDJCQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIOWtmOWCqEtFWeWAvFxyXG4gICAqL1xyXG4gIHN0b3JlX2tleT8gPSAnX3Rva2VuJztcclxuICAvKipcclxuICAgKiDml6DmlYjml7bot7Povazoh7PnmbvlvZXpobXvvIzljIXmi6zvvJpcclxuICAgKiAtIOaXoOaViHRva2Vu5YC8XHJcbiAgICogLSB0b2tlbuW3sui/h+acn++8iOmZkEpXVO+8iVxyXG4gICAqL1xyXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/ID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiB0b2tlbui/h+acn+aXtumXtOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMGAg56eS77yI5Y2V5L2N77ya56eS77yJXHJcbiAgICovXHJcbiAgdG9rZW5fZXhwX29mZnNldD8gPSAxMDtcclxuICAvKipcclxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOWQje+8jOm7mOiupO+8mnRva2VuXHJcbiAgICovXHJcbiAgdG9rZW5fc2VuZF9rZXk/ID0gJ3Rva2VuJztcclxuICAvKipcclxuICAgKiDlj5HpgIF0b2tlbuaooeadv++8iOm7mOiupOS4uu+8mmAke3Rva2VufWDvvInvvIzkvb/nlKggYCR7dG9rZW59YCDooajnpLp0b2tlbueCueS9jeespu+8jOS+i+Wmgu+8mlxyXG4gICAqXHJcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAqL1xyXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/ID0gJyR7dG9rZW59JztcclxuICAvKipcclxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOS9jee9ru+8jOm7mOiupO+8mmhlYWRlclxyXG4gICAqL1xyXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XHJcbiAgLyoqXHJcbiAgICog55m75b2V6aG16Lev55Sx5Zyw5Z2AXHJcbiAgICovXHJcbiAgbG9naW5fdXJsPyA9IGAvbG9naW5gO1xyXG4gIC8qKlxyXG4gICAqIOW/veeVpVRPS0VO55qEVVJM5Zyw5Z2A5YiX6KGo77yM6buY6K6k5YC85Li677yaWyAvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvLyBdXHJcbiAgICovXHJcbiAgaWdub3Jlcz86IFJlZ0V4cFtdID0gWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXTtcclxuICAvKipcclxuICAgKiDlhYHorrjljL/lkI3nmbvlvZVLRVnvvIzoi6Xor7fmsYLlj4LmlbDkuK3luKbmnInor6VLRVnooajnpLrlv73nlaVUT0tFTlxyXG4gICAqL1xyXG4gIGFsbG93X2Fub255bW91c19rZXk/ID0gYF9hbGxvd19hbm9ueW1vdXNgO1xyXG59XHJcbiJdfQ==