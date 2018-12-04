/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        // tslint:disable-next-line:no-invalid-template-strings
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
    DelonAuthConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonAuthConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonAuthConfig_Factory() { return new DelonAuthConfig(); }, token: DelonAuthConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTs7OztRQUtFLGNBQVMsR0FBSSxRQUFRLENBQUM7Ozs7OztRQU10QiwyQkFBc0IsR0FBSSxJQUFJLENBQUM7Ozs7UUFJL0IscUJBQWdCLEdBQUksRUFBRSxDQUFDOzs7O1FBSXZCLG1CQUFjLEdBQUksT0FBTyxDQUFDOzs7Ozs7O1FBTzFCLHdCQUFtQixHQUFJLFVBQVUsQ0FBQzs7OztRQUlsQyxxQkFBZ0IsR0FBK0IsUUFBUSxDQUFDOzs7O1FBSXhELGNBQVMsR0FBSSxRQUFRLENBQUM7Ozs7UUFJdEIsWUFBTyxHQUFjLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQzs7OztRQUkzRCx3QkFBbUIsR0FBSSxrQkFBa0IsQ0FBQztLQUMzQzs7Z0JBM0NBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzswQkFGbEM7Q0E2Q0MsQUEzQ0QsSUEyQ0M7U0ExQ1ksZUFBZTs7Ozs7O0lBSTFCLG9DQUFzQjs7Ozs7OztJQU10QixpREFBK0I7Ozs7O0lBSS9CLDJDQUF1Qjs7Ozs7SUFJdkIseUNBQTBCOzs7Ozs7O0lBTzFCLDhDQUFrQzs7Ozs7SUFJbEMsMkNBQXdEOzs7OztJQUl4RCxvQ0FBc0I7Ozs7O0lBSXRCLGtDQUEyRDs7Ozs7SUFJM0QsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQXV0aENvbmZpZyB7XG4gIC8qKlxuICAgKiDlrZjlgqhLRVnlgLxcbiAgICovXG4gIHN0b3JlX2tleSA/PSAnX3Rva2VuJztcbiAgLyoqXG4gICAqIOaXoOaViOaXtui3s+i9rOiHs+eZu+W9lemhte+8jOWMheaLrO+8mlxuICAgKiAtIOaXoOaViHRva2Vu5YC8XG4gICAqIC0gdG9rZW7lt7Lov4fmnJ/vvIjpmZBKV1TvvIlcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3QgPz0gdHJ1ZTtcbiAgLyoqXG4gICAqIHRva2Vu6L+H5pyf5pe26Ze05YGP56e75YC877yM6buY6K6k77yaYDEwYCDnp5LvvIjljZXkvY3vvJrnp5LvvIlcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQgPz0gMTA7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOWQje+8jOm7mOiupO+8mnRva2VuXG4gICAqL1xuICB0b2tlbl9zZW5kX2tleSA/PSAndG9rZW4nO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7mqKHmnb/vvIjpu5jorqTkuLrvvJpgJHt0b2tlbn1g77yJ77yM5L2/55SoIGAke3Rva2VufWAg6KGo56S6dG9rZW7ngrnkvY3nrKbvvIzkvovlpoLvvJpcbiAgICpcbiAgICogLSBgQmVhcmVyICR7dG9rZW59YFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWludmFsaWQtdGVtcGxhdGUtc3RyaW5nc1xuICB0b2tlbl9zZW5kX3RlbXBsYXRlID89ICcke3Rva2VufSc7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOS9jee9ru+8jOm7mOiupO+8mmhlYWRlclxuICAgKi9cbiAgdG9rZW5fc2VuZF9wbGFjZT86ICdoZWFkZXInIHwgJ2JvZHknIHwgJ3VybCcgPSAnaGVhZGVyJztcbiAgLyoqXG4gICAqIOeZu+W9lemhtei3r+eUseWcsOWdgFxuICAgKi9cbiAgbG9naW5fdXJsID89IGAvbG9naW5gO1xuICAvKipcbiAgICog5b+955WlVE9LRU7nmoRVUkzlnLDlnYDliJfooajvvIzpu5jorqTlgLzkuLrvvJpbIC9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vIF1cbiAgICovXG4gIGlnbm9yZXM/OiBSZWdFeHBbXSA9IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL107XG4gIC8qKlxuICAgKiDlhYHorrjljL/lkI3nmbvlvZVLRVnvvIzoi6Xor7fmsYLlj4LmlbDkuK3luKbmnInor6VLRVnooajnpLrlv73nlaVUT0tFTlxuICAgKi9cbiAgYWxsb3dfYW5vbnltb3VzX2tleSA/PSBgX2FsbG93X2Fub255bW91c2A7XG59XG4iXX0=