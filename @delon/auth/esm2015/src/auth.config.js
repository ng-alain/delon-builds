/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
export class DelonAuthConfig {
    constructor() {
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
        // tslint:disable-next-line:no-invalid-template-strings
        this.token_send_template = '${token}';
        /**
         * 发送token参数位置，默认：header
         */
        this.token_send_place = 'header';
        /**
         * 登录页路由地址
         */
        this.login_url = `/login`;
        /**
         * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
         */
        this.ignores = [/\/login/, /assets\//, /passport\//];
        /**
         * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
         */
        this.allow_anonymous_key = `_allow_anonymous`;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGVBQWU7SUFBNUI7Ozs7UUFJRSxjQUFTLEdBQUksUUFBUSxDQUFDOzs7Ozs7UUFNdEIsMkJBQXNCLEdBQUksSUFBSSxDQUFDOzs7O1FBSS9CLHFCQUFnQixHQUFJLEVBQUUsQ0FBQzs7OztRQUl2QixtQkFBYyxHQUFJLE9BQU8sQ0FBQzs7Ozs7OztRQU8xQix3QkFBbUIsR0FBSSxVQUFVLENBQUM7Ozs7UUFJbEMscUJBQWdCLEdBQStCLFFBQVEsQ0FBQzs7OztRQUl4RCxjQUFTLEdBQUksUUFBUSxDQUFDOzs7O1FBSXRCLFlBQU8sR0FBYyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7UUFJM0Qsd0JBQW1CLEdBQUksa0JBQWtCLENBQUM7SUFDNUMsQ0FBQztDQUFBOzs7Ozs7SUF0Q0Msb0NBQXNCOzs7Ozs7O0lBTXRCLGlEQUErQjs7Ozs7SUFJL0IsMkNBQXVCOzs7OztJQUl2Qix5Q0FBMEI7Ozs7Ozs7SUFPMUIsOENBQWtDOzs7OztJQUlsQywyQ0FBd0Q7Ozs7O0lBSXhELG9DQUFzQjs7Ozs7SUFJdEIsa0NBQTJEOzs7OztJQUkzRCw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25BdXRoQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWtmOWCqEtFWeWAvFxuICAgKi9cbiAgc3RvcmVfa2V5ID89ICdfdG9rZW4nO1xuICAvKipcbiAgICog5peg5pWI5pe26Lez6L2s6Iez55m75b2V6aG177yM5YyF5ous77yaXG4gICAqIC0g5peg5pWIdG9rZW7lgLxcbiAgICogLSB0b2tlbuW3sui/h+acn++8iOmZkEpXVO+8iVxuICAgKi9cbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdCA/PSB0cnVlO1xuICAvKipcbiAgICogdG9rZW7ov4fmnJ/ml7bpl7TlgY/np7vlgLzvvIzpu5jorqTvvJpgMTBgIOenku+8iOWNleS9je+8muenku+8iVxuICAgKi9cbiAgdG9rZW5fZXhwX29mZnNldCA/PSAxMDtcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5ZCN77yM6buY6K6k77yadG9rZW5cbiAgICovXG4gIHRva2VuX3NlbmRfa2V5ID89ICd0b2tlbic7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuaooeadv++8iOm7mOiupOS4uu+8mmAke3Rva2VufWDvvInvvIzkvb/nlKggYCR7dG9rZW59YCDooajnpLp0b2tlbueCueS9jeespu+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiAtIGBCZWFyZXIgJHt0b2tlbn1gXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10ZW1wbGF0ZS1zdHJpbmdzXG4gIHRva2VuX3NlbmRfdGVtcGxhdGUgPz0gJyR7dG9rZW59JztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5L2N572u77yM6buY6K6k77yaaGVhZGVyXG4gICAqL1xuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xuICAvKipcbiAgICog55m75b2V6aG16Lev55Sx5Zyw5Z2AXG4gICAqL1xuICBsb2dpbl91cmwgPz0gYC9sb2dpbmA7XG4gIC8qKlxuICAgKiDlv73nlaVUT0tFTueahFVSTOWcsOWdgOWIl+ihqO+8jOm7mOiupOWAvOS4uu+8mlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdID0gWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXTtcbiAgLyoqXG4gICAqIOWFgeiuuOWMv+WQjeeZu+W9lUtFWe+8jOiLpeivt+axguWPguaVsOS4reW4puacieivpUtFWeihqOekuuW/veeVpVRPS0VOXG4gICAqL1xuICBhbGxvd19hbm9ueW1vdXNfa2V5ID89IGBfYWxsb3dfYW5vbnltb3VzYDtcbn1cbiJdfQ==