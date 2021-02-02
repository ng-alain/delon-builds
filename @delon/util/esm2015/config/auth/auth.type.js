/**
 * @fileoverview added by tsickle
 * Generated from: auth/auth.type.ts
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
     * 刷新间隔时长（单位：ms），默认：`3000`
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshTime;
    /**
     * 过期计算偏移值（单位：ms），默认：`6000`
     * - **建议**根据 `refreshTime` 倍数来设置
     * @type {?|undefined}
     */
    AlainAuthConfig.prototype.refreshOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC50eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9jb25maWcvYXV0aC9hdXRoLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FzREM7Ozs7OztJQWxEQyxvQ0FBbUI7Ozs7Ozs7SUFNbkIsaURBQWlDOzs7OztJQUlqQywyQ0FBMEI7Ozs7O0lBSTFCLHlDQUF3Qjs7Ozs7OztJQU14Qiw4Q0FBNkI7Ozs7O0lBSTdCLDJDQUE2Qzs7Ozs7SUFJN0Msb0NBQW1COzs7OztJQUluQixrQ0FBbUI7Ozs7O0lBSW5CLDhDQUE2Qjs7Ozs7SUFJN0IsbURBQW1DOzs7OztJQUluQyxzQ0FBcUI7Ozs7OztJQUtyQix3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluQXV0aENvbmZpZyB7XG4gIC8qKlxuICAgKiDlrZjlgqhLRVnlgLzvvIzpu5jorqTvvJpgX3Rva2VuYFxuICAgKi9cbiAgc3RvcmVfa2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICog5peg5pWI5pe26Lez6L2s6Iez55m75b2V6aG177yM6buY6K6k77yaYHRydWVg77yM5YyF5ous77yaXG4gICAqIC0g5peg5pWIdG9rZW7lgLxcbiAgICogLSB0b2tlbuW3sui/h+acn++8iOmZkEpXVO+8iVxuICAgKi9cbiAgdG9rZW5faW52YWxpZF9yZWRpcmVjdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0b2tlbui/h+acn+aXtumXtOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMGAg56eS77yI5Y2V5L2N77ya56eS77yJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0PzogbnVtYmVyO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDlkI3vvIzpu5jorqTvvJrCt1xuICAgKi9cbiAgdG9rZW5fc2VuZF9rZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuaooeadv++8iOm7mOiupOS4uu+8mmAnJHt0b2tlbn0nYO+8ie+8jOS9v+eUqCBgJHt0b2tlbn1gIOihqOekunRva2Vu54K55L2N56ym77yIKirms6jmhI/vvJoqKuivt+WKoeW/heS9v+eUqCBcXGBcXGAg5YyF6KO577yJ77yM5L6L5aaC77yaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOS9jee9ru+8jOm7mOiupO+8mmBoZWFkZXJgXG4gICAqL1xuICB0b2tlbl9zZW5kX3BsYWNlPzogJ2hlYWRlcicgfCAnYm9keScgfCAndXJsJztcbiAgLyoqXG4gICAqIOeZu+W9lemhtei3r+eUseWcsOWdgO+8jOm7mOiupO+8mmAvbG9naW5gXG4gICAqL1xuICBsb2dpbl91cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlv73nlaVUT0tFTueahFVSTOWcsOWdgOWIl+ihqO+8jOm7mOiupOWAvOS4uu+8mmBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dYFxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdO1xuICAvKipcbiAgICog5YWB6K645Yy/5ZCN55m75b2VS0VZ77yM6Iul6K+35rGC5Y+C5pWw5Lit5bim5pyJ6K+lS0VZ6KGo56S65b+955WlVE9LRU7vvIzpu5jorqTvvJpgX2FsbG93X2Fub255bW91c2BcbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKbmoKHpqozlpLHmlYjml7blkb3kuK3lkI7nu6fnu63osIPnlKjlkI7nu63mi6bmiKrlmajnmoQgYGludGVyY2VwdGAg5pa55rOV77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBleGVjdXRlT3RoZXJJbnRlcmNlcHRvcnM/OiBib29sZWFuO1xuICAvKipcbiAgICog5Yi35paw6Ze06ZqU5pe26ZW/77yI5Y2V5L2N77yabXPvvInvvIzpu5jorqTvvJpgMzAwMGBcbiAgICovXG4gIHJlZnJlc2hUaW1lPzogbnVtYmVyO1xuICAvKipcbiAgICog6L+H5pyf6K6h566X5YGP56e75YC877yI5Y2V5L2N77yabXPvvInvvIzpu5jorqTvvJpgNjAwMGBcbiAgICogLSAqKuW7uuiurioq5qC55o2uIGByZWZyZXNoVGltZWAg5YCN5pWw5p2l6K6+572uXG4gICAqL1xuICByZWZyZXNoT2Zmc2V0PzogbnVtYmVyO1xufVxuIl19