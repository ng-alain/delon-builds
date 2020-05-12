/**
 * @fileoverview added by tsickle
 * Generated from: page-header.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PageHeaderConfig {
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
    }
}
PageHeaderConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ PageHeaderConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PageHeaderConfig_Factory() { return new PageHeaderConfig(); }, token: PageHeaderConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7Ozs7UUFLRSxTQUFJLEdBQVksSUFBSSxDQUFDOzs7O1FBSXJCLGFBQVEsR0FBWSxHQUFHLENBQUM7Ozs7UUFReEIsbUJBQWMsR0FBYSxJQUFJLENBQUM7Ozs7O1FBS2hDLHdCQUFtQixHQUFhLEtBQUssQ0FBQzs7OztRQUl0QyxjQUFTLEdBQWEsSUFBSSxDQUFDOzs7O1FBSTNCLGNBQVMsR0FBYSxLQUFLLENBQUM7Ozs7UUFJNUIsVUFBSyxHQUFhLEtBQUssQ0FBQzs7OztRQUl4QixtQkFBYyxHQUFZLEVBQUUsQ0FBQztLQUM5Qjs7O1lBdkNBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBS2hDLGdDQUFxQjs7Ozs7SUFJckIsb0NBQXdCOzs7OztJQUl4QixvQ0FBa0I7Ozs7O0lBSWxCLDBDQUFnQzs7Ozs7O0lBS2hDLCtDQUFzQzs7Ozs7SUFJdEMscUNBQTJCOzs7OztJQUkzQixxQ0FBNEI7Ozs7O0lBSTVCLGlDQUF3Qjs7Ozs7SUFJeEIsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb25maWcge1xuICAvKipcbiAgICog6aaW6aG15paH5pys77yM6Iul5oyH5a6a56m66KGo56S65LiN5pi+56S6XG4gICAqL1xuICBob21lPzogc3RyaW5nID0gJ+mmlumhtSc7XG4gIC8qKlxuICAgKiDpppbpobXpk77mjqVcbiAgICovXG4gIGhvbWVMaW5rPzogc3RyaW5nID0gJy8nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l5Zu96ZmF5YyW5Y+C5pWwXG4gICAqL1xuICBob21lSTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOWvvOiIqu+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxuICAgKi9cbiAgYXV0b0JyZWFkY3J1bWI/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICByZWN1cnNpdmVCcmVhZGNydW1iPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBhdXRvVGl0bGU/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpuiHquWKqOWwhuagh+WHhuS/oeaBr+WQjOatpeiHsyBgVGl0bGVTZXJ2aWNlYOOAgWBSZXVzZVNlcnZpY2VgIOS4i1xuICAgKi9cbiAgc3luY1RpdGxlPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5Zu65a6a5qih5byPXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOWbuuWumuWBj+enu+WAvFxuICAgKi9cbiAgZml4ZWRPZmZzZXRUb3A/OiBudW1iZXIgPSA2NDtcbn1cbiJdfQ==