/**
 * @fileoverview added by tsickle
 * Generated from: src/config/auth/auth.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * 刷新时长（单位：ms），默认：`3000`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshTime;
    /**
     * 偏移值（单位：ms），默认：`6000`
     * - 建议根据 `refreshTime` 倍数来设置
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC50eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9zcmMvY29uZmlnL2F1dGgvYXV0aC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBc0RDOzs7Ozs7SUFsREMsb0NBQW1COzs7Ozs7O0lBTW5CLGlEQUFpQzs7Ozs7SUFJakMsMkNBQTBCOzs7OztJQUkxQix5Q0FBd0I7Ozs7Ozs7SUFNeEIsOENBQTZCOzs7OztJQUk3QiwyQ0FBNkM7Ozs7O0lBSTdDLG9DQUFtQjs7Ozs7SUFJbkIsa0NBQW1COzs7OztJQUluQiw4Q0FBNkI7Ozs7O0lBSTdCLG1EQUFtQzs7Ozs7SUFJbkMsc0NBQXFCOzs7Ozs7SUFLckIsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBbGFpbkF1dGhDb25maWcge1xuICAvKipcbiAgICog5a2Y5YKoS0VZ5YC877yM6buY6K6k77yaYF90b2tlbmBcbiAgICovXG4gIHN0b3JlX2tleT86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXoOaViOaXtui3s+i9rOiHs+eZu+W9lemhte+8jOm7mOiupO+8mmB0cnVlYO+8jOWMheaLrO+8mlxuICAgKiAtIOaXoOaViHRva2Vu5YC8XG4gICAqIC0gdG9rZW7lt7Lov4fmnJ/vvIjpmZBKV1TvvIlcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/OiBib29sZWFuO1xuICAvKipcbiAgICogdG9rZW7ov4fmnJ/ml7bpl7TlgY/np7vlgLzvvIzpu5jorqTvvJpgMTBgIOenku+8iOWNleS9je+8muenku+8iVxuICAgKi9cbiAgdG9rZW5fZXhwX29mZnNldD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5ZCN77yM6buY6K6k77yawrdcbiAgICovXG4gIHRva2VuX3NlbmRfa2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7mqKHmnb/vvIjpu5jorqTkuLrvvJpgJyR7dG9rZW59J2DvvInvvIzkvb/nlKggYCR7dG9rZW59YCDooajnpLp0b2tlbueCueS9jeespu+8iCoq5rOo5oSP77yaKiror7fliqHlv4Xkvb/nlKggXFxgXFxgIOWMheijue+8ie+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiAtIGBCZWFyZXIgJHt0b2tlbn1gXG4gICAqL1xuICB0b2tlbl9zZW5kX3RlbXBsYXRlPzogc3RyaW5nO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDkvY3nva7vvIzpu5jorqTvvJpgaGVhZGVyYFxuICAgKi9cbiAgdG9rZW5fc2VuZF9wbGFjZT86ICdoZWFkZXInIHwgJ2JvZHknIHwgJ3VybCc7XG4gIC8qKlxuICAgKiDnmbvlvZXpobXot6/nlLHlnLDlnYDvvIzpu5jorqTvvJpgL2xvZ2luYFxuICAgKi9cbiAgbG9naW5fdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICog5b+955WlVE9LRU7nmoRVUkzlnLDlnYDliJfooajvvIzpu5jorqTlgLzkuLrvvJpgWy9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vXWBcbiAgICovXG4gIGlnbm9yZXM/OiBSZWdFeHBbXTtcbiAgLyoqXG4gICAqIOWFgeiuuOWMv+WQjeeZu+W9lUtFWe+8jOiLpeivt+axguWPguaVsOS4reW4puacieivpUtFWeihqOekuuW/veeVpVRPS0VO77yM6buY6K6k77yaYF9hbGxvd19hbm9ueW1vdXNgXG4gICAqL1xuICBhbGxvd19hbm9ueW1vdXNfa2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5piv5ZCm5qCh6aqM5aSx5pWI5pe25ZG95Lit5ZCO57un57ut6LCD55So5ZCO57ut5oum5oiq5Zmo55qEIGBpbnRlcmNlcHRgIOaWueazle+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZXhlY3V0ZU90aGVySW50ZXJjZXB0b3JzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWIt+aWsOaXtumVv++8iOWNleS9je+8mm1z77yJ77yM6buY6K6k77yaYDMwMDBgXG4gICAqL1xuICByZWZyZXNoVGltZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWBj+enu+WAvO+8iOWNleS9je+8mm1z77yJ77yM6buY6K6k77yaYDYwMDBgXG4gICAqIC0g5bu66K6u5qC55o2uIGByZWZyZXNoVGltZWAg5YCN5pWw5p2l6K6+572uXG4gICAqL1xuICByZWZyZXNoT2Zmc2V0PzogbnVtYmVyO1xufVxuIl19