/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE1lbnUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIC8qKiDmlofmnKwgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogaTE4buS4u+mUriAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKiog5piv5ZCm5pi+56S65YiG57uE5ZCN77yM6buY6K6k77yaYHRydWVgICovXG4gIGdyb3VwPzogYm9vbGVhbjtcbiAgLyoqIOi3r+eUsSAqL1xuICBsaW5rPzogc3RyaW5nO1xuICAvKipcbiAgICog6Lev55Sx5piv5ZCm57K+5YeG5Yy56YWN77yM6buY6K6k77yaYGZhbHNlYO+8jHNlZTpcbiAgICogLSBbIzM0NF0oaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8zNDQpXG4gICAqIC0gW1JvdXRlckxpbmtBY3RpdmVdKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvcm91dGVyL1JvdXRlckxpbmtBY3RpdmUjcm91dGVyTGlua0FjdGl2ZU9wdGlvbnMpXG4gICAqL1xuICBsaW5rRXhhY3Q/OiBib29sZWFuO1xuICAvKiog5aSW6YOo6ZO+5o6lICovXG4gIGV4dGVybmFsTGluaz86IHN0cmluZztcbiAgLyoqIOmTvuaOpSB0YXJnZXQgKi9cbiAgdGFyZ2V0PzogJ19ibGFuaycgfCAnX3NlbGYnIHwgJ19wYXJlbnQnIHwgJ190b3AnO1xuICAvKiog5Zu+5qCHICovXG4gIGljb24/OiBzdHJpbmc7XG4gIC8qKiDlvr3moIfmlbDvvIzlsZXnpLrnmoTmlbDlrZfjgILvvIjms6jvvJpgZ3JvdXA6dHJ1ZWAg5peg5pWI77yJICovXG4gIGJhZGdlPzogbnVtYmVyO1xuICAvKiog5b695qCH5pWw77yM5pi+56S65bCP57qi54K5ICovXG4gIGJhZGdlRG90PzogYm9vbGVhbjtcbiAgLyoqIOW+veaghyBCYWRnZSDpopzoibIg77yI6buY6K6k77yaZXJyb3LvvIwg5omA5pyJ6aKc6Imy5YC86KeB77yaaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2Jsb2IvbWFzdGVyL19kb2N1bWVudHMvdXRpbHMubWQj6Imy5b2p77yJICovXG4gIGJhZGdlU3RhdHVzPzogc3RyaW5nO1xuICAvKiog5piv5ZCm6ZqQ6JeP6I+c5Y2VICovXG4gIGhpZGU/OiBib29sZWFuO1xuICAvKiog6ZqQ6JeP6Z2i5YyF5bGR77yM5oyHIGBwYWdlLWhlYWRlcmAg57uE5Lu255qE6Ieq5Yqo55Sf5oiQ6Z2i5YyF5bGR5pe25pyJ5pWIICovXG4gIGhpZGVJbkJyZWFkY3J1bWI/OiBib29sZWFuO1xuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAZGVsb24vYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cbiAgYWNsPzogYW55O1xuICAvKiog5piv5ZCm5b+r5o236I+c5Y2V6aG5ICovXG4gIHNob3J0Y3V0PzogYm9vbGVhbjtcbiAgLyoqIOW/q+aNt+iPnOWNleagueiKgueCuSAqL1xuICBzaG9ydGN1dFJvb3Q/OiBib29sZWFuO1xuICAvKiog5piv5ZCm5YWB6K645aSN55So77yM6ZyA6YWN5ZCIIGByZXVzZS10YWJgIOe7hOS7tiAqL1xuICByZXVzZT86IGJvb2xlYW47XG4gIC8qKiDkuoznuqfoj5zljZUgKi9cbiAgY2hpbGRyZW4/OiBNZW51W107XG59XG4iXX0=