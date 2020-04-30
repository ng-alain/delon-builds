/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.interfaces.ts
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
    /** @type {?|undefined} */
    ReuseTabNotify.prototype.url;
    /** @type {?|undefined} */
    ReuseTabNotify.prototype.title;
    /** @type {?|undefined} */
    ReuseTabNotify.prototype.item;
    /** @type {?|undefined} */
    ReuseTabNotify.prototype.list;
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
    ReuseContextI18n.prototype.refresh;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLElBQVksaUJBQWlCO0lBQzNCOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksR0FBQTtJQUNKOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsR0FBQTtJQUNUOztPQUVHO0lBQ0gsR0FBRyxHQUFBO0VBQ0o7Ozs7Ozs7O0FBRUQsZ0NBR0M7OztJQUZDLDBCQUFjOztJQUNkLDBCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsK0JBQWtCOztJQUVsQiw2QkFBWTs7Ozs7SUFHWixrQ0FBbUI7Ozs7O0lBR25CLGtDQUFtQzs7SUFFbkMsbUNBQWtDOztJQUVsQyxpQ0FBYTs7Ozs7QUFHZixvQ0FRQzs7Ozs7O0lBTkMsZ0NBQTBHOztJQUMxRyw2QkFBYTs7SUFDYiwrQkFBbUI7O0lBQ25CLDhCQUFzQjs7SUFDdEIsOEJBQXdCOzs7Ozs7QUFJMUIsK0JBT0M7OztJQU5DLHdCQUFZOztJQUNaLDBCQUFjOztJQUNkLDZCQUFrQjs7SUFDbEIsMEJBQWM7O0lBQ2QsMkJBQWdCOztJQUNoQix5QkFBYzs7Ozs7QUFHaEIsdUNBS0M7OztJQUpDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQixpQ0FBZ0M7O0lBQ2hDLDhDQUE2Qzs7Ozs7QUFLL0MsNENBSUM7OztJQUhDLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixxREFBNkI7Ozs7O0FBRy9CLHNDQUtDOzs7SUFKQyxpQ0FBZTs7SUFDZixzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsbUNBQWlCOzs7OztBQUduQiw0Q0FLQzs7O0lBSkMsb0NBQVc7O0lBQ1gsdUNBQWM7O0lBQ2Qsb0NBQTREOztJQUM1RCwwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcbiAgdGl0bGU6IFJldXNlVGl0bGU7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIOaYr+WQpuWFgeiuuOWFs+mXre+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqIOW9k+WJjea7muWKqOadoeS9jee9riAqL1xuICBwb3NpdGlvbj86IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICBfaGFuZGxlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiog5LqL5Lu257G75Z6LICovXG4gIGFjdGl2ZTogJ2FkZCcgfCAnb3ZlcnJpZGUnIHwgJ3RpdGxlJyB8ICdjbGVhcicgfCAnY2xvc2FibGUnIHwgJ2Nsb3NlJyB8ICdjbG9zZVJpZ2h0JyB8ICdtb3ZlJyB8ICdyZWZyZXNoJztcbiAgdXJsPzogc3RyaW5nO1xuICB0aXRsZT86IFJldXNlVGl0bGU7XG4gIGl0ZW0/OiBSZXVzZVRhYkNhY2hlZDtcbiAgbGlzdD86IFJldXNlVGFiQ2FjaGVkW107XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2FibGU6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XG4gIGN1c3RvbUNvbnRleHRNZW51PzogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xufVxuXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2N1c3RvbScgfCAncmVmcmVzaCcgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xuICB0eXBlOiBDbG9zZVR5cGU7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XG4gIHJlZnJlc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDdXN0b21Db250ZXh0TWVudSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZuOiAoaXRlbTogUmV1c2VJdGVtLCBtZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IChpdGVtOiBSZXVzZUl0ZW0pID0+IGJvb2xlYW47XG59XG4iXX0=