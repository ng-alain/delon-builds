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
 */ var PageHeaderConfig = /** @class */ (function () {
    function PageHeaderConfig() {
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
        deprecation10Cog("PageHeaderConfig");
    }
    PageHeaderConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    PageHeaderConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ PageHeaderConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageHeaderConfig_Factory() { return new PageHeaderConfig(); }, token: PageHeaderConfig, providedIn: "root" });
    return PageHeaderConfig;
}());
export { PageHeaderConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0lBSTNDO0lBRUY7Ozs7UUFNQSxTQUFJLEdBQVksSUFBSSxDQUFDOzs7O1FBSXJCLGFBQVEsR0FBWSxHQUFHLENBQUM7Ozs7UUFReEIsbUJBQWMsR0FBYSxJQUFJLENBQUM7Ozs7O1FBS2hDLHdCQUFtQixHQUFhLEtBQUssQ0FBQzs7OztRQUl0QyxjQUFTLEdBQWEsSUFBSSxDQUFDOzs7O1FBSTNCLGNBQVMsR0FBYSxLQUFLLENBQUM7Ozs7UUFJNUIsVUFBSyxHQUFhLEtBQUssQ0FBQzs7OztRQUl4QixtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQXRDM0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFKRSxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzsyQkFMdEM7Q0ErQ0MsQUExQ0csSUEwQ0g7U0F6Q1ksZ0JBQWdCOzs7Ozs7SUFPM0IsZ0NBQXFCOzs7OztJQUlyQixvQ0FBd0I7Ozs7O0lBSXhCLG9DQUFrQjs7Ozs7SUFJbEIsMENBQWdDOzs7Ozs7SUFLaEMsK0NBQXNDOzs7OztJQUl0QyxxQ0FBMkI7Ozs7O0lBSTNCLHFDQUE0Qjs7Ozs7SUFJNUIsaUNBQXdCOzs7OztJQUl4QiwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBQYWdlSGVhZGVyQ29uZmlnYCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xuICovIEBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRlcHJlY2F0aW9uMTBDb2coYFBhZ2VIZWFkZXJDb25maWdgKTtcbiAgfVxuICAvKipcbiAgICog6aaW6aG15paH5pys77yM6Iul5oyH5a6a56m66KGo56S65LiN5pi+56S6XG4gICAqL1xuICBob21lPzogc3RyaW5nID0gJ+mmlumhtSc7XG4gIC8qKlxuICAgKiDpppbpobXpk77mjqVcbiAgICovXG4gIGhvbWVMaW5rPzogc3RyaW5nID0gJy8nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l5Zu96ZmF5YyW5Y+C5pWwXG4gICAqL1xuICBob21lSTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOWvvOiIqu+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxuICAgKi9cbiAgYXV0b0JyZWFkY3J1bWI/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICByZWN1cnNpdmVCcmVhZGNydW1iPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBhdXRvVGl0bGU/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpuiHquWKqOWwhuagh+WHhuS/oeaBr+WQjOatpeiHsyBgVGl0bGVTZXJ2aWNlYOOAgWBSZXVzZVNlcnZpY2VgIOS4i1xuICAgKi9cbiAgc3luY1RpdGxlPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5Zu65a6a5qih5byPXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOWbuuWumuWBj+enu+WAvFxuICAgKi9cbiAgZml4ZWRPZmZzZXRUb3A/OiBudW1iZXIgPSA2NDtcbn1cbiJdfQ==