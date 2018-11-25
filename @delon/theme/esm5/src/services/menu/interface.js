/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MenuIcon() { }
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
/**
 * @record
 */
export function Menu() { }
/* TODO: handle strange member:
[key: string]: any;
*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE1lbnVJY29uIHtcbiAgdHlwZTogJ2NsYXNzJyB8ICdpY29uJyB8ICdpbWcnO1xuICAvKiog5YC877yM5YyF5ZCr77ya57G75ZCN44CB5Zu+5qCHIGB0eXBlYOOAgeWbvuWDjyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICBzcGluPzogYm9vbGVhbjtcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8qKiDmlofmnKwgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogaTE4buS4u+mUriAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKiog5piv5ZCm5pi+56S65YiG57uE5ZCN77yM6buY6K6k77yaYHRydWVgICovXG4gIGdyb3VwPzogYm9vbGVhbjtcbiAgLyoqIOi3r+eUsSAqL1xuICBsaW5rPzogc3RyaW5nO1xuICAvKipcbiAgICog6Lev55Sx5piv5ZCm57K+5YeG5Yy56YWN77yM6buY6K6k77yaYGZhbHNlYO+8jHNlZTpcbiAgICogLSBbIzM0NF0oaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8zNDQpXG4gICAqIC0gW1JvdXRlckxpbmtBY3RpdmVdKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvcm91dGVyL1JvdXRlckxpbmtBY3RpdmUjcm91dGVyTGlua0FjdGl2ZU9wdGlvbnMpXG4gICAqL1xuICBsaW5rRXhhY3Q/OiBib29sZWFuO1xuICAvKiog5aSW6YOo6ZO+5o6lICovXG4gIGV4dGVybmFsTGluaz86IHN0cmluZztcbiAgLyoqIOmTvuaOpSB0YXJnZXQgKi9cbiAgdGFyZ2V0PzogJ19ibGFuaycgfCAnX3NlbGYnIHwgJ19wYXJlbnQnIHwgJ190b3AnO1xuICAvKiog5Zu+5qCHICovXG4gIGljb24/OiBzdHJpbmcgfCBNZW51SWNvbjtcbiAgLyoqIOW+veagh+aVsO+8jOWxleekuueahOaVsOWtl+OAgu+8iOazqO+8mmBncm91cDp0cnVlYCDml6DmlYjvvIkgKi9cbiAgYmFkZ2U/OiBudW1iZXI7XG4gIC8qKiDlvr3moIfmlbDvvIzmmL7npLrlsI/nuqLngrkgKi9cbiAgYmFkZ2VEb3Q/OiBib29sZWFuO1xuICAvKiog5b695qCHIEJhZGdlIOminOiJsiDvvIjpu5jorqTvvJplcnJvcu+8jCDmiYDmnInpopzoibLlgLzop4HvvJpodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vYmxvYi9tYXN0ZXIvX2RvY3VtZW50cy91dGlscy5tZCPoibLlvanvvIkgKi9cbiAgYmFkZ2VTdGF0dXM/OiBzdHJpbmc7XG4gIC8qKiDmmK/lkKbpmpDol4/oj5zljZUgKi9cbiAgaGlkZT86IGJvb2xlYW47XG4gIC8qKiDpmpDol4/pnaLljIXlsZHvvIzmjIcgYHBhZ2UtaGVhZGVyYCDnu4Tku7bnmoToh6rliqjnlJ/miJDpnaLljIXlsZHml7bmnInmlYggKi9cbiAgaGlkZUluQnJlYWRjcnVtYj86IGJvb2xlYW47XG4gIC8qKiBBQ0zphY3nva7vvIzoi6Xlr7zlhaUgYEBkZWxvbi9hY2xgIOaXtuiHquWKqOacieaViO+8jOetieWQjOS6jiBgQUNMU2VydmljZS5jYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSlgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG4gIC8qKiDmmK/lkKblv6vmjbfoj5zljZXpobkgKi9cbiAgc2hvcnRjdXQ/OiBib29sZWFuO1xuICAvKiog5b+r5o236I+c5Y2V5qC56IqC54K5ICovXG4gIHNob3J0Y3V0Um9vdD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKblhYHorrjlpI3nlKjvvIzpnIDphY3lkIggYHJldXNlLXRhYmAg57uE5Lu2ICovXG4gIHJldXNlPzogYm9vbGVhbjtcbiAgLyoqIOS6jOe6p+iPnOWNlSAqL1xuICBjaGlsZHJlbj86IE1lbnVbXTtcbn1cbiJdfQ==