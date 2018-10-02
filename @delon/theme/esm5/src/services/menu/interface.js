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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE1lbnUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAvKiog5paH5pysICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qKiBpMThu5Li76ZSuICovXHJcbiAgaTE4bj86IHN0cmluZztcclxuICAvKiog5piv5ZCm5pi+56S65YiG57uE5ZCN77yM6buY6K6k77yaYHRydWVgICovXHJcbiAgZ3JvdXA/OiBib29sZWFuO1xyXG4gIC8qKiDot6/nlLEgKi9cclxuICBsaW5rPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOi3r+eUseaYr+WQpueyvuWHhuWMuemFje+8jOm7mOiupO+8mmBmYWxzZWDvvIxzZWU6XHJcbiAgICogLSBbIzM0NF0oaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8zNDQpXHJcbiAgICogLSBbUm91dGVyTGlua0FjdGl2ZV0oaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9yb3V0ZXIvUm91dGVyTGlua0FjdGl2ZSNyb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucylcclxuICAgKi9cclxuICBsaW5rRXhhY3Q/OiBib29sZWFuO1xyXG4gIC8qKiDlpJbpg6jpk77mjqUgKi9cclxuICBleHRlcm5hbExpbms/OiBzdHJpbmc7XHJcbiAgLyoqIOmTvuaOpSB0YXJnZXQgKi9cclxuICB0YXJnZXQ/OiAnX2JsYW5rJyB8ICdfc2VsZicgfCAnX3BhcmVudCcgfCAnX3RvcCc7XHJcbiAgLyoqIOWbvuaghyAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcbiAgLyoqIOW+veagh+aVsO+8jOWxleekuueahOaVsOWtl+OAgu+8iOazqO+8mmBncm91cDp0cnVlYCDml6DmlYjvvIkgKi9cclxuICBiYWRnZT86IG51bWJlcjtcclxuICAvKiog5b695qCH5pWw77yM5pi+56S65bCP57qi54K5ICovXHJcbiAgYmFkZ2VEb3Q/OiBib29sZWFuO1xyXG4gIC8qKiDlvr3moIcgQmFkZ2Ug6aKc6ImyIO+8iOm7mOiupO+8mmVycm9y77yMIOaJgOacieminOiJsuWAvOinge+8mmh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9ibG9iL21hc3Rlci9fZG9jdW1lbnRzL3V0aWxzLm1kI+iJsuW9qe+8iSAqL1xyXG4gIGJhZGdlU3RhdHVzPzogc3RyaW5nO1xyXG4gIC8qKiDmmK/lkKbpmpDol4/oj5zljZUgKi9cclxuICBoaWRlPzogYm9vbGVhbjtcclxuICAvKiog6ZqQ6JeP6Z2i5YyF5bGR77yM5oyHIGBwYWdlLWhlYWRlcmAg57uE5Lu255qE6Ieq5Yqo55Sf5oiQ6Z2i5YyF5bGR5pe25pyJ5pWIICovXHJcbiAgaGlkZUluQnJlYWRjcnVtYj86IGJvb2xlYW47XHJcbiAgLyoqIEFDTOmFjee9ru+8jOiLpeWvvOWFpSBgQGRlbG9uL2FjbGAg5pe26Ieq5Yqo5pyJ5pWI77yM562J5ZCM5LqOIGBBQ0xTZXJ2aWNlLmNhbihyb2xlT3JBYmlsaXR5OiBBQ0xDYW5UeXBlKWAg5Y+C5pWw5YC8ICovXHJcbiAgYWNsPzogYW55O1xyXG4gIC8qKiDmmK/lkKblv6vmjbfoj5zljZXpobkgKi9cclxuICBzaG9ydGN1dD86IGJvb2xlYW47XHJcbiAgLyoqIOW/q+aNt+iPnOWNleagueiKgueCuSAqL1xyXG4gIHNob3J0Y3V0Um9vdD86IGJvb2xlYW47XHJcbiAgLyoqIOaYr+WQpuWFgeiuuOWkjeeUqO+8jOmcgOmFjeWQiCBgcmV1c2UtdGFiYCDnu4Tku7YgKi9cclxuICByZXVzZT86IGJvb2xlYW47XHJcbiAgLyoqIOS6jOe6p+iPnOWNlSAqL1xyXG4gIGNoaWxkcmVuPzogTWVudVtdO1xyXG59XHJcbiJdfQ==