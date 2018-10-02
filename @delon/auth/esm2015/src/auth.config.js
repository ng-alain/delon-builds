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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTs7Ozs7eUJBSVMsUUFBUTs7Ozs7O3NDQU1LLElBQUk7Ozs7Z0NBSVYsRUFBRTs7Ozs4QkFJSixPQUFPOzs7Ozs7bUNBTUYsVUFBVTs7OztnQ0FJYyxRQUFROzs7O3lCQUkxQyxRQUFROzs7O3VCQUlBLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7Ozs7bUNBSW5DLGtCQUFrQjs7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVsb25BdXRoQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDlrZjlgqhLRVnlgLxcclxuICAgKi9cclxuICBzdG9yZV9rZXk/ID0gJ190b2tlbic7XHJcbiAgLyoqXHJcbiAgICog5peg5pWI5pe26Lez6L2s6Iez55m75b2V6aG177yM5YyF5ous77yaXHJcbiAgICogLSDml6DmlYh0b2tlbuWAvFxyXG4gICAqIC0gdG9rZW7lt7Lov4fmnJ/vvIjpmZBKV1TvvIlcclxuICAgKi9cclxuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PyA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogdG9rZW7ov4fmnJ/ml7bpl7TlgY/np7vlgLzvvIzpu5jorqTvvJpgMTBgIOenku+8iOWNleS9je+8muenku+8iVxyXG4gICAqL1xyXG4gIHRva2VuX2V4cF9vZmZzZXQ/ID0gMTA7XHJcbiAgLyoqXHJcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDlkI3vvIzpu5jorqTvvJp0b2tlblxyXG4gICAqL1xyXG4gIHRva2VuX3NlbmRfa2V5PyA9ICd0b2tlbic7XHJcbiAgLyoqXHJcbiAgICog5Y+R6YCBdG9rZW7mqKHmnb/vvIjpu5jorqTkuLrvvJpgJHt0b2tlbn1g77yJ77yM5L2/55SoIGAke3Rva2VufWAg6KGo56S6dG9rZW7ngrnkvY3nrKbvvIzkvovlpoLvvJpcclxuICAgKlxyXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcclxuICAgKi9cclxuICB0b2tlbl9zZW5kX3RlbXBsYXRlPyA9ICcke3Rva2VufSc7XHJcbiAgLyoqXHJcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDkvY3nva7vvIzpu5jorqTvvJpoZWFkZXJcclxuICAgKi9cclxuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJyA9ICdoZWFkZXInO1xyXG4gIC8qKlxyXG4gICAqIOeZu+W9lemhtei3r+eUseWcsOWdgFxyXG4gICAqL1xyXG4gIGxvZ2luX3VybD8gPSBgL2xvZ2luYDtcclxuICAvKipcclxuICAgKiDlv73nlaVUT0tFTueahFVSTOWcsOWdgOWIl+ihqO+8jOm7mOiupOWAvOS4uu+8mlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxyXG4gICAqL1xyXG4gIGlnbm9yZXM/OiBSZWdFeHBbXSA9IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL107XHJcbiAgLyoqXHJcbiAgICog5YWB6K645Yy/5ZCN55m75b2VS0VZ77yM6Iul6K+35rGC5Y+C5pWw5Lit5bim5pyJ6K+lS0VZ6KGo56S65b+955WlVE9LRU5cclxuICAgKi9cclxuICBhbGxvd19hbm9ueW1vdXNfa2V5PyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcclxufVxyXG4iXX0=