/**
 * @fileoverview added by tsickle
 * Generated from: src/config/abc/page-header.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9hYmMvcGFnZS1oZWFkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQXNDQzs7Ozs7O0lBbENDLHFDQUFjOzs7OztJQUlkLHlDQUFrQjs7Ozs7SUFJbEIseUNBQWtCOzs7OztJQUlsQiwrQ0FBeUI7Ozs7OztJQUt6QixvREFBOEI7Ozs7O0lBSTlCLDBDQUFvQjs7Ozs7SUFJcEIsMENBQW9COzs7OztJQUlwQixzQ0FBZ0I7Ozs7O0lBSWhCLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQWxhaW5QYWdlSGVhZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIOmmlumhteaWh+acrO+8jOiLpeaMh+WumuepuuihqOekuuS4jeaYvuekuu+8jOm7mOiupO+8mmDpppbpobVgXG4gICAqL1xuICBob21lPzogc3RyaW5nO1xuICAvKipcbiAgICog6aaW6aG16ZO+5o6l77yM6buY6K6k77yaYC9gXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZztcbiAgLyoqXG4gICAqIOmmlumhtemTvuaOpeWbvemZheWMluWPguaVsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWKqOWQkeS4iumAkuW9kuafpeaJvu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICogIC0g6I+c5Y2V5pWw5o2u5rqQ5YyF5ZCrIGAvd2FyZWDvvIzliJkgYC93YXJlLzFgIOS5n+inhuS4uiBgL3dhcmVgIOmhuVxuICAgKi9cbiAgcmVjdXJzaXZlQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDmoIfpopjvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9UaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIflh4bkv6Hmga/lkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHN5bmNUaXRsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrprmqKHlvI/vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXhlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlm7rlrprlgY/np7vlgLzvvIzpu5jorqTvvJpgNjRgXG4gICAqL1xuICBmaXhlZE9mZnNldFRvcD86IG51bWJlcjtcbn1cbiJdfQ==