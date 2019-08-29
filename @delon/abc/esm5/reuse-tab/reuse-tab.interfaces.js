/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ReuseTabMatchMode = {
    /**
     * （推荐）按菜单 `Menu` 配置
     *
     * 可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard', reuse: false }`
     */
    Menu: 0,
    /**
     * 按菜单 `Menu` 强制配置
     *
     * 可复用：
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: false }`
     */
    MenuForce: 1,
    /**
     * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
     */
    URL: 2,
};
export { ReuseTabMatchMode };
ReuseTabMatchMode[ReuseTabMatchMode.Menu] = 'Menu';
ReuseTabMatchMode[ReuseTabMatchMode.MenuForce] = 'MenuForce';
ReuseTabMatchMode[ReuseTabMatchMode.URL] = 'URL';
/**
 * @record
 */
export function ReuseTitle() { }
if (false) {
    /** @type {?|undefined} */
    ReuseTitle.prototype.text;
    /** @type {?|undefined} */
    ReuseTitle.prototype.i18n;
}
/**
 * @record
 */
export function ReuseTabCached() { }
if (false) {
    /** @type {?} */
    ReuseTabCached.prototype.title;
    /** @type {?} */
    ReuseTabCached.prototype.url;
    /**
     * 是否允许关闭，默认：`true`
     * @type {?|undefined}
     */
    ReuseTabCached.prototype.closable;
    /**
     * 当前滚动条位置
     * @type {?|undefined}
     */
    ReuseTabCached.prototype.position;
    /** @type {?} */
    ReuseTabCached.prototype._snapshot;
    /** @type {?} */
    ReuseTabCached.prototype._handle;
}
/**
 * @record
 */
export function ReuseTabNotify() { }
if (false) {
    /**
     * 事件类型
     * @type {?}
     */
    ReuseTabNotify.prototype.active;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function ReuseItem() { }
if (false) {
    /** @type {?} */
    ReuseItem.prototype.url;
    /** @type {?} */
    ReuseItem.prototype.title;
    /** @type {?} */
    ReuseItem.prototype.closable;
    /** @type {?} */
    ReuseItem.prototype.index;
    /** @type {?} */
    ReuseItem.prototype.active;
    /** @type {?} */
    ReuseItem.prototype.last;
}
/**
 * @record
 */
export function ReuseContextEvent() { }
if (false) {
    /** @type {?} */
    ReuseContextEvent.prototype.event;
    /** @type {?} */
    ReuseContextEvent.prototype.item;
    /** @type {?|undefined} */
    ReuseContextEvent.prototype.comp;
    /** @type {?|undefined} */
    ReuseContextEvent.prototype.customContextMenu;
}
/**
 * @record
 */
export function ReuseContextCloseEvent() { }
if (false) {
    /** @type {?} */
    ReuseContextCloseEvent.prototype.type;
    /** @type {?} */
    ReuseContextCloseEvent.prototype.item;
    /** @type {?} */
    ReuseContextCloseEvent.prototype.includeNonCloseable;
}
/**
 * @record
 */
export function ReuseContextI18n() { }
if (false) {
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.close;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.closeOther;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.closeRight;
    /** @type {?|undefined} */
    ReuseContextI18n.prototype.clear;
}
/**
 * @record
 */
export function ReuseCustomContextMenu() { }
if (false) {
    /** @type {?} */
    ReuseCustomContextMenu.prototype.id;
    /** @type {?} */
    ReuseCustomContextMenu.prototype.title;
    /** @type {?} */
    ReuseCustomContextMenu.prototype.fn;
    /** @type {?|undefined} */
    ReuseCustomContextMenu.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU9FOzs7Ozs7Ozs7T0FTRztJQUNILE9BQUk7SUFDSjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFTO0lBQ1Q7O09BRUc7SUFDSCxNQUFHOzs7Ozs7Ozs7QUFHTCxnQ0FHQzs7O0lBRkMsMEJBQWM7O0lBQ2QsMEJBQWM7Ozs7O0FBR2hCLG9DQWNDOzs7SUFiQywrQkFBa0I7O0lBRWxCLDZCQUFZOzs7OztJQUdaLGtDQUFtQjs7Ozs7SUFHbkIsa0NBQW1DOztJQUVuQyxtQ0FBa0M7O0lBRWxDLGlDQUFhOzs7OztBQUdmLG9DQUtDOzs7Ozs7SUFIQyxnQ0FBZTs7Ozs7O0FBS2pCLCtCQU9DOzs7SUFOQyx3QkFBWTs7SUFDWiwwQkFBYzs7SUFDZCw2QkFBa0I7O0lBQ2xCLDBCQUFjOztJQUNkLDJCQUFnQjs7SUFDaEIseUJBQWM7Ozs7O0FBR2hCLHVDQUtDOzs7SUFKQyxrQ0FBa0I7O0lBQ2xCLGlDQUFnQjs7SUFDaEIsaUNBQWdDOztJQUNoQyw4Q0FBNkM7Ozs7O0FBSy9DLDRDQUlDOzs7SUFIQyxzQ0FBZ0I7O0lBQ2hCLHNDQUFnQjs7SUFDaEIscURBQTZCOzs7OztBQUcvQixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2Ysc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLGlDQUFlOzs7OztBQUdqQiw0Q0FLQzs7O0lBSkMsb0NBQVc7O0lBQ1gsdUNBQWM7O0lBQ2Qsb0NBQTREOztJQUM1RCwwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcbiAgdGl0bGU6IFJldXNlVGl0bGU7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIOaYr+WQpuWFgeiuuOWFs+mXre+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqIOW9k+WJjea7muWKqOadoeS9jee9riAqL1xuICBwb3NpdGlvbj86IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICBfaGFuZGxlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiog5LqL5Lu257G75Z6LICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2FibGU6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XG4gIGN1c3RvbUNvbnRleHRNZW51PzogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xufVxuXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2NsZWFyJyB8ICdjdXN0b20nIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IHtcbiAgdHlwZTogQ2xvc2VUeXBlO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0STE4biB7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBjbG9zZU90aGVyPzogc3RyaW5nO1xuICBjbG9zZVJpZ2h0Pzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUN1c3RvbUNvbnRleHRNZW51IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZm46IChpdGVtOiBSZXVzZUl0ZW0sIG1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogKGl0ZW06IFJldXNlSXRlbSkgPT4gYm9vbGVhbjtcbn1cbiJdfQ==