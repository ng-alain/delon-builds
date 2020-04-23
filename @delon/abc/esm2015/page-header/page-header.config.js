/**
 * @fileoverview added by tsickle
 * Generated from: page-header.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `PageHeaderConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */ export class PageHeaderConfig {
    constructor() {
        /**
         * 首页文本，若指定空表示不显示
         */
        this.home = '首页';
        /**
         * 首页链接
         */
        this.homeLink = '/';
        /**
         * 自动生成导航，以当前路由从主菜单中定位
         */
        this.autoBreadcrumb = true;
        /**
         * 自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        this.recursiveBreadcrumb = false;
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        /**
         * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
         */
        this.syncTitle = false;
        /**
         * 是否固定模式
         */
        this.fixed = false;
        /**
         * 固定偏移值
         */
        this.fixedOffsetTop = 64;
        deprecation10Cog(`PageHeaderConfig`);
    }
}
PageHeaderConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
PageHeaderConfig.ctorParameters = () => [];
/** @nocollapse */ PageHeaderConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageHeaderConfig_Factory() { return new PageHeaderConfig(); }, token: PageHeaderConfig, providedIn: "root" });
if (false) {
    /**
     * 首页文本，若指定空表示不显示
     * @type {?}
     */
    PageHeaderConfig.prototype.home;
    /**
     * 首页链接
     * @type {?}
     */
    PageHeaderConfig.prototype.homeLink;
    /**
     * 首页链接国际化参数
     * @type {?}
     */
    PageHeaderConfig.prototype.homeI18n;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderConfig.prototype.autoBreadcrumb;
    /**
     * 自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @type {?}
     */
    PageHeaderConfig.prototype.recursiveBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderConfig.prototype.autoTitle;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
     * @type {?}
     */
    PageHeaderConfig.prototype.syncTitle;
    /**
     * 是否固定模式
     * @type {?}
     */
    PageHeaderConfig.prototype.fixed;
    /**
     * 固定偏移值
     * @type {?}
     */
    PageHeaderConfig.prototype.fixedOffsetTop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0lBSy9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7Ozs7UUFNQSxTQUFJLEdBQVksSUFBSSxDQUFDOzs7O1FBSXJCLGFBQVEsR0FBWSxHQUFHLENBQUM7Ozs7UUFReEIsbUJBQWMsR0FBYSxJQUFJLENBQUM7Ozs7O1FBS2hDLHdCQUFtQixHQUFhLEtBQUssQ0FBQzs7OztRQUl0QyxjQUFTLEdBQWEsSUFBSSxDQUFDOzs7O1FBSTNCLGNBQVMsR0FBYSxLQUFLLENBQUM7Ozs7UUFJNUIsVUFBSyxHQUFhLEtBQUssQ0FBQzs7OztRQUl4QixtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQXRDM0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFKRSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7Ozs7O0lBUXBDLGdDQUFxQjs7Ozs7SUFJckIsb0NBQXdCOzs7OztJQUl4QixvQ0FBa0I7Ozs7O0lBSWxCLDBDQUFnQzs7Ozs7O0lBS2hDLCtDQUFzQzs7Ozs7SUFJdEMscUNBQTJCOzs7OztJQUkzQixxQ0FBNEI7Ozs7O0lBSTVCLGlDQUF3Qjs7Ozs7SUFJeEIsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMENvZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBgUGFnZUhlYWRlckNvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqLyBASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBQYWdlSGVhZGVyQ29uZmlnYCk7XG4gIH1cbiAgLyoqXG4gICAqIOmmlumhteaWh+acrO+8jOiLpeaMh+WumuepuuihqOekuuS4jeaYvuekulxuICAgKi9cbiAgaG9tZT86IHN0cmluZyA9ICfpppbpobUnO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6lXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZyA9ICcvJztcbiAgLyoqXG4gICAqIOmmlumhtemTvuaOpeWbvemZheWMluWPguaVsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY1cbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDoh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgcmVjdXJzaXZlQnJlYWRjcnVtYj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxuICAgKi9cbiAgYXV0b1RpdGxlPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIflh4bkv6Hmga/lkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuItcbiAgICovXG4gIHN5bmNUaXRsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWbuuWumuaooeW8j1xuICAgKi9cbiAgZml4ZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDlm7rlrprlgY/np7vlgLxcbiAgICovXG4gIGZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyID0gNjQ7XG59XG4iXX0=