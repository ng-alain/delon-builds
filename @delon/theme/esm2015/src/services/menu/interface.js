/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MenuIcon() { }
if (false) {
    /** @type {?} */
    MenuIcon.prototype.type;
    /**
     * 值，包含：类名、图标 `type`、图像
     * @type {?}
     */
    MenuIcon.prototype.value;
    /**
     * 图标主题风格，默认：`outline`
     * @type {?|undefined}
     */
    MenuIcon.prototype.theme;
    /**
     * 是否有旋转动画，默认：`false`
     * @type {?|undefined}
     */
    MenuIcon.prototype.spin;
    /**
     * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
     * @type {?|undefined}
     */
    MenuIcon.prototype.twoToneColor;
    /**
     * 指定来自 IconFont 的图标类型
     * @type {?|undefined}
     */
    MenuIcon.prototype.iconfont;
}
/**
 * @record
 */
export function Menu() { }
if (false) {
    /**
     * 文本
     * @type {?}
     */
    Menu.prototype.text;
    /**
     * i18n主键
     * @type {?|undefined}
     */
    Menu.prototype.i18n;
    /**
     * 是否显示分组名，默认：`true`
     * @type {?|undefined}
     */
    Menu.prototype.group;
    /**
     * 路由
     * @type {?|undefined}
     */
    Menu.prototype.link;
    /**
     * @deprecated
     * 路由是否精准匹配，默认：`false`，see:
     * - [#344](https://github.com/ng-alain/ng-alain/issues/344)
     * - [RouterLinkActive](https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions)
     * @type {?|undefined}
     */
    Menu.prototype.linkExact;
    /**
     * 外部链接
     * @type {?|undefined}
     */
    Menu.prototype.externalLink;
    /**
     * 链接 target
     * @type {?|undefined}
     */
    Menu.prototype.target;
    /**
     * 图标
     * @type {?|undefined}
     */
    Menu.prototype.icon;
    /**
     * 徽标数，展示的数字。（注：`group:true` 无效）
     * @type {?|undefined}
     */
    Menu.prototype.badge;
    /**
     * 徽标数，显示小红点
     * @type {?|undefined}
     */
    Menu.prototype.badgeDot;
    /**
     * 徽标 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/ng-alain/ng-alain/blob/master/_documents/utils.md#色彩）
     * @type {?|undefined}
     */
    Menu.prototype.badgeStatus;
    /**
     * 是否禁用
     * @type {?|undefined}
     */
    Menu.prototype.disabled;
    /**
     * 是否隐藏菜单
     * @type {?|undefined}
     */
    Menu.prototype.hide;
    /**
     * 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效
     * @type {?|undefined}
     */
    Menu.prototype.hideInBreadcrumb;
    /**
     * ACL配置，若导入 `\@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
     * @type {?|undefined}
     */
    Menu.prototype.acl;
    /**
     * 是否快捷菜单项
     * @type {?|undefined}
     */
    Menu.prototype.shortcut;
    /**
     * 快捷菜单根节点
     * @type {?|undefined}
     */
    Menu.prototype.shortcutRoot;
    /**
     * 是否允许复用，需配合 `reuse-tab` 组件
     * @type {?|undefined}
     */
    Menu.prototype.reuse;
    /**
     * 二级菜单
     * @type {?|undefined}
     */
    Menu.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw4QkFZQzs7O0lBWEMsd0JBQStCOzs7OztJQUUvQix5QkFBYzs7Ozs7SUFFZCx5QkFBdUM7Ozs7O0lBRXZDLHdCQUFlOzs7OztJQUVmLGdDQUFzQjs7Ozs7SUFFdEIsNEJBQWtCOzs7OztBQUdwQiwwQkErQ0M7Ozs7OztJQTNDQyxvQkFBYTs7Ozs7SUFFYixvQkFBYzs7Ozs7SUFFZCxxQkFBZ0I7Ozs7O0lBRWhCLG9CQUFjOzs7Ozs7OztJQU9kLHlCQUFvQjs7Ozs7SUFFcEIsNEJBQXNCOzs7OztJQUV0QixzQkFBaUQ7Ozs7O0lBRWpELG9CQUF5Qjs7Ozs7SUFFekIscUJBQWU7Ozs7O0lBRWYsd0JBQW1COzs7OztJQUVuQiwyQkFBcUI7Ozs7O0lBRXJCLHdCQUFtQjs7Ozs7SUFFbkIsb0JBQWU7Ozs7O0lBRWYsZ0NBQTJCOzs7OztJQUczQixtQkFBVTs7Ozs7SUFFVix3QkFBbUI7Ozs7O0lBRW5CLDRCQUF1Qjs7Ozs7SUFFdkIscUJBQWdCOzs7OztJQUVoQix3QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE1lbnVJY29uIHtcbiAgdHlwZTogJ2NsYXNzJyB8ICdpY29uJyB8ICdpbWcnO1xuICAvKiog5YC877yM5YyF5ZCr77ya57G75ZCN44CB5Zu+5qCHIGB0eXBlYOOAgeWbvuWDjyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLyoqIOaWh+acrCAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiBpMThu5Li76ZSuICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKiDmmK/lkKbmmL7npLrliIbnu4TlkI3vvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgZ3JvdXA/OiBib29sZWFuO1xuICAvKiog6Lev55SxICovXG4gIGxpbms/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiDot6/nlLHmmK/lkKbnsr7lh4bljLnphY3vvIzpu5jorqTvvJpgZmFsc2Vg77yMc2VlOlxuICAgKiAtIFsjMzQ0XShodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzM0NClcbiAgICogLSBbUm91dGVyTGlua0FjdGl2ZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9yb3V0ZXIvUm91dGVyTGlua0FjdGl2ZSNyb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucylcbiAgICovXG4gIGxpbmtFeGFjdD86IGJvb2xlYW47XG4gIC8qKiDlpJbpg6jpk77mjqUgKi9cbiAgZXh0ZXJuYWxMaW5rPzogc3RyaW5nO1xuICAvKiog6ZO+5o6lIHRhcmdldCAqL1xuICB0YXJnZXQ/OiAnX2JsYW5rJyB8ICdfc2VsZicgfCAnX3BhcmVudCcgfCAnX3RvcCc7XG4gIC8qKiDlm77moIcgKi9cbiAgaWNvbj86IHN0cmluZyB8IE1lbnVJY29uO1xuICAvKiog5b695qCH5pWw77yM5bGV56S655qE5pWw5a2X44CC77yI5rOo77yaYGdyb3VwOnRydWVgIOaXoOaViO+8iSAqL1xuICBiYWRnZT86IG51bWJlcjtcbiAgLyoqIOW+veagh+aVsO+8jOaYvuekuuWwj+e6oueCuSAqL1xuICBiYWRnZURvdD86IGJvb2xlYW47XG4gIC8qKiDlvr3moIcgQmFkZ2Ug6aKc6ImyIO+8iOm7mOiupO+8mmVycm9y77yMIOaJgOacieminOiJsuWAvOinge+8mmh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9ibG9iL21hc3Rlci9fZG9jdW1lbnRzL3V0aWxzLm1kI+iJsuW9qe+8iSAqL1xuICBiYWRnZVN0YXR1cz86IHN0cmluZztcbiAgLyoqIOaYr+WQpuemgeeUqCAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbpmpDol4/oj5zljZUgKi9cbiAgaGlkZT86IGJvb2xlYW47XG4gIC8qKiDpmpDol4/pnaLljIXlsZHvvIzmjIcgYHBhZ2UtaGVhZGVyYCDnu4Tku7bnmoToh6rliqjnlJ/miJDpnaLljIXlsZHml7bmnInmlYggKi9cbiAgaGlkZUluQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKiBBQ0zphY3nva7vvIzoi6Xlr7zlhaUgYEBkZWxvbi9hY2xgIOaXtuiHquWKqOacieaViO+8jOetieWQjOS6jiBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIOWPguaVsOWAvCAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGFjbD86IGFueTtcbiAgLyoqIOaYr+WQpuW/q+aNt+iPnOWNlemhuSAqL1xuICBzaG9ydGN1dD86IGJvb2xlYW47XG4gIC8qKiDlv6vmjbfoj5zljZXmoLnoioLngrkgKi9cbiAgc2hvcnRjdXRSb290PzogYm9vbGVhbjtcbiAgLyoqIOaYr+WQpuWFgeiuuOWkjeeUqO+8jOmcgOmFjeWQiCBgcmV1c2UtdGFiYCDnu4Tku7YgKi9cbiAgcmV1c2U/OiBib29sZWFuO1xuICAvKiog5LqM57qn6I+c5Y2VICovXG4gIGNoaWxkcmVuPzogTWVudVtdO1xufVxuIl19