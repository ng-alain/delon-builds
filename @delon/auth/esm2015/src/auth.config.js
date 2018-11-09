/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7eUJBSVMsUUFBUTs7Ozs7O3NDQU1LLElBQUk7Ozs7Z0NBSVYsRUFBRTs7Ozs4QkFJSixPQUFPOzs7Ozs7bUNBTUYsVUFBVTs7OztnQ0FJYyxRQUFROzs7O3lCQUkxQyxRQUFROzs7O3VCQUlBLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7Ozs7bUNBSW5DLGtCQUFrQjs7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25BdXRoQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWtmOWCqEtFWeWAvFxuICAgKi9cbiAgc3RvcmVfa2V5PyA9ICdfdG9rZW4nO1xuICAvKipcbiAgICog5peg5pWI5pe26Lez6L2s6Iez55m75b2V6aG177yM5YyF5ous77yaXG4gICAqIC0g5peg5pWIdG9rZW7lgLxcbiAgICogLSB0b2tlbuW3sui/h+acn++8iOmZkEpXVO+8iVxuICAgKi9cbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdD8gPSB0cnVlO1xuICAvKipcbiAgICogdG9rZW7ov4fmnJ/ml7bpl7TlgY/np7vlgLzvvIzpu5jorqTvvJpgMTBgIOenku+8iOWNleS9je+8muenku+8iVxuICAgKi9cbiAgdG9rZW5fZXhwX29mZnNldD8gPSAxMDtcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5ZCN77yM6buY6K6k77yadG9rZW5cbiAgICovXG4gIHRva2VuX3NlbmRfa2V5PyA9ICd0b2tlbic7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuaooeadv++8iOm7mOiupOS4uu+8mmAke3Rva2VufWDvvInvvIzkvb/nlKggYCR7dG9rZW59YCDooajnpLp0b2tlbueCueS9jeespu+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiAtIGBCZWFyZXIgJHt0b2tlbn1gXG4gICAqL1xuICB0b2tlbl9zZW5kX3RlbXBsYXRlPyA9ICcke3Rva2VufSc7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOS9jee9ru+8jOm7mOiupO+8mmhlYWRlclxuICAgKi9cbiAgdG9rZW5fc2VuZF9wbGFjZT86ICdoZWFkZXInIHwgJ2JvZHknIHwgJ3VybCcgPSAnaGVhZGVyJztcbiAgLyoqXG4gICAqIOeZu+W9lemhtei3r+eUseWcsOWdgFxuICAgKi9cbiAgbG9naW5fdXJsPyA9IGAvbG9naW5gO1xuICAvKipcbiAgICog5b+955WlVE9LRU7nmoRVUkzlnLDlnYDliJfooajvvIzpu5jorqTlgLzkuLrvvJpbIC9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vIF1cbiAgICovXG4gIGlnbm9yZXM/OiBSZWdFeHBbXSA9IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL107XG4gIC8qKlxuICAgKiDlhYHorrjljL/lkI3nmbvlvZVLRVnvvIzoi6Xor7fmsYLlj4LmlbDkuK3luKbmnInor6VLRVnooajnpLrlv73nlaVUT0tFTlxuICAgKi9cbiAgYWxsb3dfYW5vbnltb3VzX2tleT8gPSBgX2FsbG93X2Fub255bW91c2A7XG59XG4iXX0=