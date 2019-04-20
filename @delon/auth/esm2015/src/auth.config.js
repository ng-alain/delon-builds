/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        /**
         * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         */
        this.executeOtherInterceptors = true;
    }
}
DelonAuthConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonAuthConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonAuthConfig_Factory() { return new DelonAuthConfig(); }, token: DelonAuthConfig, providedIn: "root" });
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
    /**
     * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?}
     */
    DelonAuthConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7Ozs7UUFLRSxjQUFTLEdBQVksUUFBUSxDQUFDOzs7Ozs7UUFNOUIsMkJBQXNCLEdBQWEsSUFBSSxDQUFDOzs7O1FBSXhDLHFCQUFnQixHQUFZLEVBQUUsQ0FBQzs7OztRQUkvQixtQkFBYyxHQUFZLE9BQU8sQ0FBQzs7Ozs7OztRQU9sQyx3QkFBbUIsR0FBWSxVQUFVLENBQUM7Ozs7UUFJMUMscUJBQWdCLEdBQStCLFFBQVEsQ0FBQzs7OztRQUl4RCxjQUFTLEdBQVksUUFBUSxDQUFDOzs7O1FBSTlCLFlBQU8sR0FBcUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDOzs7O1FBSWxFLHdCQUFtQixHQUFZLGtCQUFrQixDQUFDOzs7O1FBSWxELDZCQUF3QixHQUFhLElBQUksQ0FBQztLQUMzQzs7O1lBL0NBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBS2hDLG9DQUE4Qjs7Ozs7OztJQU05QixpREFBd0M7Ozs7O0lBSXhDLDJDQUErQjs7Ozs7SUFJL0IseUNBQWtDOzs7Ozs7O0lBT2xDLDhDQUEwQzs7Ozs7SUFJMUMsMkNBQXdEOzs7OztJQUl4RCxvQ0FBOEI7Ozs7O0lBSTlCLGtDQUFrRTs7Ozs7SUFJbEUsOENBQWtEOzs7OztJQUlsRCxtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGVsb25BdXRoQ29uZmlnIHtcbiAgLyoqXG4gICAqIOWtmOWCqEtFWeWAvFxuICAgKi9cbiAgc3RvcmVfa2V5Pzogc3RyaW5nID0gJ190b2tlbic7XG4gIC8qKlxuICAgKiDml6DmlYjml7bot7Povazoh7PnmbvlvZXpobXvvIzljIXmi6zvvJpcbiAgICogLSDml6DmlYh0b2tlbuWAvFxuICAgKiAtIHRva2Vu5bey6L+H5pyf77yI6ZmQSldU77yJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0PzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiB0b2tlbui/h+acn+aXtumXtOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMGAg56eS77yI5Y2V5L2N77ya56eS77yJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0PzogbnVtYmVyID0gMTA7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOWQje+8jOm7mOiupO+8mnRva2VuXG4gICAqL1xuICB0b2tlbl9zZW5kX2tleT86IHN0cmluZyA9ICd0b2tlbic7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuaooeadv++8iOm7mOiupOS4uu+8mmAke3Rva2VufWDvvInvvIzkvb/nlKggYCR7dG9rZW59YCDooajnpLp0b2tlbueCueS9jeespu+8jOS+i+Wmgu+8mlxuICAgKlxuICAgKiAtIGBCZWFyZXIgJHt0b2tlbn1gXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10ZW1wbGF0ZS1zdHJpbmdzXG4gIHRva2VuX3NlbmRfdGVtcGxhdGU/OiBzdHJpbmcgPSAnJHt0b2tlbn0nO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDkvY3nva7vvIzpu5jorqTvvJpoZWFkZXJcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XG4gIC8qKlxuICAgKiDnmbvlvZXpobXot6/nlLHlnLDlnYBcbiAgICovXG4gIGxvZ2luX3VybD86IHN0cmluZyA9IGAvbG9naW5gO1xuICAvKipcbiAgICog5b+955WlVE9LRU7nmoRVUkzlnLDlnYDliJfooajvvIzpu5jorqTlgLzkuLrvvJpbIC9cXC9sb2dpbi8sIC9hc3NldHNcXC8vLCAvcGFzc3BvcnRcXC8vIF1cbiAgICovXG4gIGlnbm9yZXM/OiBSZWdFeHBbXSB8IG51bGwgPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xuICAvKipcbiAgICog5YWB6K645Yy/5ZCN55m75b2VS0VZ77yM6Iul6K+35rGC5Y+C5pWw5Lit5bim5pyJ6K+lS0VZ6KGo56S65b+955WlVE9LRU5cbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXk/OiBzdHJpbmcgPSBgX2FsbG93X2Fub255bW91c2A7XG4gIC8qKlxuICAgKiDmmK/lkKbmoKHpqozlpLHmlYjml7blkb3kuK3lkI7nu6fnu63osIPnlKjlkI7nu63mi6bmiKrlmajnmoQgYGludGVyY2VwdGAg5pa55rOV77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBleGVjdXRlT3RoZXJJbnRlcmNlcHRvcnM/OiBib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==