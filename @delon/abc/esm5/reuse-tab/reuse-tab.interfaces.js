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
/**
 * @record
 */
export function ReuseComponentHandle() { }
if (false) {
    /** @type {?} */
    ReuseComponentHandle.prototype.componentRef;
}
/**
 * @record
 */
export function ReuseComponentRef() { }
if (false) {
    /** @type {?} */
    ReuseComponentRef.prototype.instance;
}
/**
 * @record
 */
export function ReuseComponentInstance() { }
if (false) {
    /** @type {?} */
    ReuseComponentInstance.prototype._onReuseInit;
    /** @type {?} */
    ReuseComponentInstance.prototype._onReuseDestroy;
    /** @type {?} */
    ReuseComponentInstance.prototype.destroy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLElBQVksaUJBQWlCO0lBQzNCOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksR0FBQTtJQUNKOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsR0FBQTtJQUNUOztPQUVHO0lBQ0gsR0FBRyxHQUFBO0VBQ0o7Ozs7Ozs7O0FBRUQsZ0NBR0M7OztJQUZDLDBCQUFjOztJQUNkLDBCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsK0JBQWtCOztJQUVsQiw2QkFBWTs7Ozs7SUFHWixrQ0FBbUI7Ozs7O0lBR25CLGtDQUFtQzs7SUFFbkMsbUNBQWtDOztJQUVsQyxpQ0FBOEI7Ozs7O0FBR2hDLG9DQVFDOzs7Ozs7SUFOQyxnQ0FBMEc7O0lBQzFHLDZCQUFhOztJQUNiLCtCQUFtQjs7SUFDbkIsOEJBQXNCOztJQUN0Qiw4QkFBd0I7Ozs7OztBQUkxQiwrQkFPQzs7O0lBTkMsd0JBQVk7O0lBQ1osMEJBQWM7O0lBQ2QsNkJBQWtCOztJQUNsQiwwQkFBYzs7SUFDZCwyQkFBZ0I7O0lBQ2hCLHlCQUFjOzs7OztBQUdoQix1Q0FLQzs7O0lBSkMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLGlDQUFnQzs7SUFDaEMsOENBQTZDOzs7OztBQUsvQyw0Q0FJQzs7O0lBSEMsc0NBQWdCOztJQUNoQixzQ0FBZ0I7O0lBQ2hCLHFEQUE2Qjs7Ozs7QUFHL0Isc0NBS0M7OztJQUpDLGlDQUFlOztJQUNmLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixtQ0FBaUI7Ozs7O0FBR25CLDRDQUtDOzs7SUFKQyxvQ0FBVzs7SUFDWCx1Q0FBYzs7SUFDZCxvQ0FBNEQ7O0lBQzVELDBDQUF3Qzs7Ozs7QUFHMUMsMENBRUM7OztJQURDLDRDQUFnQzs7Ozs7QUFHbEMsdUNBRUM7OztJQURDLHFDQUFpQzs7Ozs7QUFLbkMsNENBSUM7OztJQUhDLDhDQUF5Qjs7SUFDekIsaURBQTRCOztJQUM1Qix5Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcbiAgdGl0bGU6IFJldXNlVGl0bGU7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIOaYr+WQpuWFgeiuuOWFs+mXre+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqIOW9k+WJjea7muWKqOadoeS9jee9riAqL1xuICBwb3NpdGlvbj86IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuXG4gIF9zbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcblxuICBfaGFuZGxlOiBSZXVzZUNvbXBvbmVudEhhbmRsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYk5vdGlmeSB7XG4gIC8qKiDkuovku7bnsbvlnosgKi9cbiAgYWN0aXZlOiAnYWRkJyB8ICdvdmVycmlkZScgfCAndGl0bGUnIHwgJ2NsZWFyJyB8ICdjbG9zYWJsZScgfCAnY2xvc2UnIHwgJ2Nsb3NlUmlnaHQnIHwgJ21vdmUnIHwgJ3JlZnJlc2gnO1xuICB1cmw/OiBzdHJpbmc7XG4gIHRpdGxlPzogUmV1c2VUaXRsZTtcbiAgaXRlbT86IFJldXNlVGFiQ2FjaGVkO1xuICBsaXN0PzogUmV1c2VUYWJDYWNoZWRbXTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbG9zYWJsZTogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcbiAgY3VzdG9tQ29udGV4dE1lbnU/OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG59XG5cbmV4cG9ydCB0eXBlIENsb3NlVHlwZSA9ICdjbG9zZScgfCAnY2xvc2VPdGhlcicgfCAnY2xvc2VSaWdodCcgfCAnY3VzdG9tJyB8ICdyZWZyZXNoJyB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XG4gIHR5cGU6IENsb3NlVHlwZTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xuICBjbG9zZT86IHN0cmluZztcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcbiAgY2xvc2VSaWdodD86IHN0cmluZztcbiAgcmVmcmVzaD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUN1c3RvbUNvbnRleHRNZW51IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZm46IChpdGVtOiBSZXVzZUl0ZW0sIG1lbnU6IFJldXNlQ3VzdG9tQ29udGV4dE1lbnUpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogKGl0ZW06IFJldXNlSXRlbSkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbXBvbmVudEhhbmRsZSB7XG4gIGNvbXBvbmVudFJlZjogUmV1c2VDb21wb25lbnRSZWY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb21wb25lbnRSZWYge1xuICBpbnN0YW5jZTogUmV1c2VDb21wb25lbnRJbnN0YW5jZTtcbn1cblxuZXhwb3J0IHR5cGUgUmV1c2VIb29rVHlwZXMgPSAnX29uUmV1c2VJbml0JyB8ICdfb25SZXVzZURlc3Ryb3knO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29tcG9uZW50SW5zdGFuY2Uge1xuICBfb25SZXVzZUluaXQ6ICgpID0+IHZvaWQ7XG4gIF9vblJldXNlRGVzdHJveTogKCkgPT4gdm9pZDtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn1cbiJdfQ==