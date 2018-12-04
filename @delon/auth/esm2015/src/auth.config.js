/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7Ozs7UUFLRSxjQUFTLEdBQUksUUFBUSxDQUFDOzs7Ozs7UUFNdEIsMkJBQXNCLEdBQUksSUFBSSxDQUFDOzs7O1FBSS9CLHFCQUFnQixHQUFJLEVBQUUsQ0FBQzs7OztRQUl2QixtQkFBYyxHQUFJLE9BQU8sQ0FBQzs7Ozs7OztRQU8xQix3QkFBbUIsR0FBSSxVQUFVLENBQUM7Ozs7UUFJbEMscUJBQWdCLEdBQStCLFFBQVEsQ0FBQzs7OztRQUl4RCxjQUFTLEdBQUksUUFBUSxDQUFDOzs7O1FBSXRCLFlBQU8sR0FBYyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7UUFJM0Qsd0JBQW1CLEdBQUksa0JBQWtCLENBQUM7S0FDM0M7OztZQTNDQSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztJQUtoQyxvQ0FBc0I7Ozs7Ozs7SUFNdEIsaURBQStCOzs7OztJQUkvQiwyQ0FBdUI7Ozs7O0lBSXZCLHlDQUEwQjs7Ozs7OztJQU8xQiw4Q0FBa0M7Ozs7O0lBSWxDLDJDQUF3RDs7Ozs7SUFJeEQsb0NBQXNCOzs7OztJQUl0QixrQ0FBMkQ7Ozs7O0lBSTNELDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xuICAvKipcbiAgICog5a2Y5YKoS0VZ5YC8XG4gICAqL1xuICBzdG9yZV9rZXkgPz0gJ190b2tlbic7XG4gIC8qKlxuICAgKiDml6DmlYjml7bot7Povazoh7PnmbvlvZXpobXvvIzljIXmi6zvvJpcbiAgICogLSDml6DmlYh0b2tlbuWAvFxuICAgKiAtIHRva2Vu5bey6L+H5pyf77yI6ZmQSldU77yJXG4gICAqL1xuICB0b2tlbl9pbnZhbGlkX3JlZGlyZWN0ID89IHRydWU7XG4gIC8qKlxuICAgKiB0b2tlbui/h+acn+aXtumXtOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMGAg56eS77yI5Y2V5L2N77ya56eS77yJXG4gICAqL1xuICB0b2tlbl9leHBfb2Zmc2V0ID89IDEwO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDlkI3vvIzpu5jorqTvvJp0b2tlblxuICAgKi9cbiAgdG9rZW5fc2VuZF9rZXkgPz0gJ3Rva2VuJztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5qih5p2/77yI6buY6K6k5Li677yaYCR7dG9rZW59YO+8ie+8jOS9v+eUqCBgJHt0b2tlbn1gIOihqOekunRva2Vu54K55L2N56ym77yM5L6L5aaC77yaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnZhbGlkLXRlbXBsYXRlLXN0cmluZ3NcbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZSA/PSAnJHt0b2tlbn0nO1xuICAvKipcbiAgICog5Y+R6YCBdG9rZW7lj4LmlbDkvY3nva7vvIzpu5jorqTvvJpoZWFkZXJcbiAgICovXG4gIHRva2VuX3NlbmRfcGxhY2U/OiAnaGVhZGVyJyB8ICdib2R5JyB8ICd1cmwnID0gJ2hlYWRlcic7XG4gIC8qKlxuICAgKiDnmbvlvZXpobXot6/nlLHlnLDlnYBcbiAgICovXG4gIGxvZ2luX3VybCA/PSBgL2xvZ2luYDtcbiAgLyoqXG4gICAqIOW/veeVpVRPS0VO55qEVVJM5Zyw5Z2A5YiX6KGo77yM6buY6K6k5YC85Li677yaWyAvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvLyBdXG4gICAqL1xuICBpZ25vcmVzPzogUmVnRXhwW10gPSBbL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy9dO1xuICAvKipcbiAgICog5YWB6K645Yy/5ZCN55m75b2VS0VZ77yM6Iul6K+35rGC5Y+C5pWw5Lit5bim5pyJ6K+lS0VZ6KGo56S65b+955WlVE9LRU5cbiAgICovXG4gIGFsbG93X2Fub255bW91c19rZXkgPz0gYF9hbGxvd19hbm9ueW1vdXNgO1xufVxuIl19