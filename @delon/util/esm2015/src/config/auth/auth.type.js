/**
 * @fileoverview added by tsickle
 * Generated from: src/config/auth/auth.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainAuthConfig() { }
if (false) {
    /**
     * 存储KEY值，默认：`_token`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.store_key;
    /**
     * 无效时跳转至登录页，默认：`true`，包括：
     * - 无效token值
     * - token已过期（限JWT）
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_invalid_redirect;
    /**
     * token过期时间偏移值，默认：`10` 秒（单位：秒）
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_exp_offset;
    /**
     * 发送token参数名，默认：·
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_key;
    /**
     * 发送token模板（默认为：`'${token}'`），使用 `${token}` 表示token点位符（**注意：**请务必使用 \`\` 包裹），例如：
     *
     * - `Bearer ${token}`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_template;
    /**
     * 发送token参数位置，默认：`header`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.token_send_place;
    /**
     * 登录页路由地址，默认：`/login`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.login_url;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：`[/\/login/, /assets\//, /passport\//]`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.ignores;
    /**
     * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN，默认：`_allow_anonymous`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.allow_anonymous_key;
    /**
     * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC50eXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2F1dGgvYXV0aC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBNkNDOzs7Ozs7SUF6Q0Msb0NBQW1COzs7Ozs7O0lBTW5CLGlEQUFpQzs7Ozs7SUFJakMsMkNBQTBCOzs7OztJQUkxQix5Q0FBd0I7Ozs7Ozs7SUFNeEIsOENBQTZCOzs7OztJQUk3QiwyQ0FBNkM7Ozs7O0lBSTdDLG9DQUFtQjs7Ozs7SUFJbkIsa0NBQW1COzs7OztJQUluQiw4Q0FBNkI7Ozs7O0lBSTdCLG1EQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWxhaW5BdXRoQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWtmOWCqEtFWeWAvO+8jOm7mOiupO+8mmBfdG9rZW5gXG4gICAqL1xuICBzdG9yZV9rZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDml6DmlYjml7bot7Povazoh7PnmbvlvZXpobXvvIzpu5jorqTvvJpgdHJ1ZWDvvIzljIXmi6zvvJpcbiAgICogLSDml6DmlYh0b2tlbuWAvFxuICAgKiAtIHRva2Vu5bey6L+H5pyf77yI6ZmQSldU77yJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHRva2Vu6L+H5pyf5pe26Ze05YGP56e75YC877yM6buY6K6k77yaYDEwYCDnp5LvvIjljZXkvY3vvJrnp5LvvIlcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOWQje+8jOm7mOiupO+8msK3XG4gICAqL1xuICB0b2tlbl9zZW5kX2tleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5qih5p2/77yI6buY6K6k5Li677yaYCcke3Rva2VufSdg77yJ77yM5L2/55SoIGAke3Rva2VufWAg6KGo56S6dG9rZW7ngrnkvY3nrKbvvIgqKuazqOaEj++8mioq6K+35Yqh5b+F5L2/55SoIFxcYFxcYCDljIXoo7nvvInvvIzkvovlpoLvvJpcbiAgICpcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxuICAgKi9cbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5L2N572u77yM6buY6K6k77yaYGhlYWRlcmBcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnO1xuICAvKipcbiAgICog55m75b2V6aG16Lev55Sx5Zyw5Z2A77yM6buY6K6k77yaYC9sb2dpbmBcbiAgICovXG4gIGxvZ2luX3VybD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW/veeVpVRPS0VO55qEVVJM5Zyw5Z2A5YiX6KGo77yM6buY6K6k5YC85Li677yaYFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL11gXG4gICAqL1xuICBpZ25vcmVzPzogUmVnRXhwW107XG4gIC8qKlxuICAgKiDlhYHorrjljL/lkI3nmbvlvZVLRVnvvIzoi6Xor7fmsYLlj4LmlbDkuK3luKbmnInor6VLRVnooajnpLrlv73nlaVUT0tFTu+8jOm7mOiupO+8mmBfYWxsb3dfYW5vbnltb3VzYFxuICAgKi9cbiAgYWxsb3dfYW5vbnltb3VzX2tleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuagoemqjOWkseaViOaXtuWRveS4reWQjue7p+e7reiwg+eUqOWQjue7reaLpuaIquWZqOeahCBgaW50ZXJjZXB0YCDmlrnms5XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9ycz86IGJvb2xlYW47XG59XG4iXX0=