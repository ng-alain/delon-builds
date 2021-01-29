/**
 * @fileoverview added by tsickle
 * Generated from: abc/page-header.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainPageHeaderConfig() { }
if (false) {
    /**
     * 首页文本，若指定空表示不显示，默认：`首页`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.home;
    /**
     * 首页链接，默认：`/`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.homeLink;
    /**
     * 首页链接国际化参数
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.homeI18n;
    /**
     * 自动生成导航，以当前路由从主菜单中定位，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.autoBreadcrumb;
    /**
     * 自动向上递归查找，默认：`false`
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.recursiveBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.autoTitle;
    /**
     * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下，默认：`true`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.syncTitle;
    /**
     * 是否固定模式，默认：`false`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.fixed;
    /**
     * 固定偏移值，默认：`64`
     * @type {?|undefined}
     */
    AlainPageHeaderConfig.prototype.fixedOffsetTop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvY29uZmlnL2FiYy9wYWdlLWhlYWRlci50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBc0NDOzs7Ozs7SUFsQ0MscUNBQWM7Ozs7O0lBSWQseUNBQWtCOzs7OztJQUlsQix5Q0FBa0I7Ozs7O0lBSWxCLCtDQUF5Qjs7Ozs7O0lBS3pCLG9EQUE4Qjs7Ozs7SUFJOUIsMENBQW9COzs7OztJQUlwQiwwQ0FBb0I7Ozs7O0lBSXBCLHNDQUFnQjs7Ozs7SUFJaEIsK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBbGFpblBhZ2VIZWFkZXJDb25maWcge1xuICAvKipcbiAgICog6aaW6aG15paH5pys77yM6Iul5oyH5a6a56m66KGo56S65LiN5pi+56S677yM6buY6K6k77yaYOmmlumhtWBcbiAgICovXG4gIGhvbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpppbpobXpk77mjqXvvIzpu5jorqTvvJpgL2BcbiAgICovXG4gIGhvbWVMaW5rPzogc3RyaW5nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l5Zu96ZmF5YyW5Y+C5pWwXG4gICAqL1xuICBob21lSTE4bj86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOWvvOiIqu+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9je+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYXV0b0JyZWFkY3J1bWI/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5Yqo5ZCR5LiK6YCS5b2S5p+l5om+77yM6buY6K6k77yaYGZhbHNlYFxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XG4gICAqL1xuICByZWN1cnNpdmVCcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9je+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYXV0b1RpdGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuiHquWKqOWwhuagh+WHhuS/oeaBr+WQjOatpeiHsyBgVGl0bGVTZXJ2aWNlYOOAgWBSZXVzZVNlcnZpY2VgIOS4i++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc3luY1RpdGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWbuuWumuaooeW8j++8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWbuuWumuWBj+enu+WAvO+8jOm7mOiupO+8mmA2NGBcbiAgICovXG4gIGZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyO1xufVxuIl19