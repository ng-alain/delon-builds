/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ReuseTabMatchMode = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUEsTUFBWSxpQkFBaUI7SUFDM0I7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBSSxHQUFBO0lBQ0o7Ozs7Ozs7OztPQVNHO0lBQ0gsU0FBUyxHQUFBO0lBQ1Q7O09BRUc7SUFDSCxHQUFHLEdBQUE7RUFDSjs7Ozs7Ozs7QUFJRCxnQ0FHQzs7O0lBRkMsMEJBQWM7O0lBQ2QsMEJBQWM7Ozs7O0FBR2hCLG9DQWNDOzs7SUFiQywrQkFBa0I7O0lBRWxCLDZCQUFZOzs7OztJQUdaLGtDQUFtQjs7Ozs7SUFHbkIsa0NBQW1DOztJQUVuQyxtQ0FBa0M7O0lBRWxDLGlDQUE4Qjs7Ozs7QUFHaEMsb0NBUUM7Ozs7OztJQU5DLGdDQUEwRzs7SUFDMUcsNkJBQWE7O0lBQ2IsK0JBQW1COztJQUNuQiw4QkFBc0I7O0lBQ3RCLDhCQUF3Qjs7Ozs7O0FBSTFCLCtCQU9DOzs7SUFOQyx3QkFBWTs7SUFDWiwwQkFBYzs7SUFDZCw2QkFBa0I7O0lBQ2xCLDBCQUFjOztJQUNkLDJCQUFnQjs7SUFDaEIseUJBQWM7Ozs7O0FBR2hCLHVDQUtDOzs7SUFKQyxrQ0FBa0I7O0lBQ2xCLGlDQUFnQjs7SUFDaEIsaUNBQWdDOztJQUNoQyw4Q0FBNkM7Ozs7O0FBSy9DLDRDQUlDOzs7SUFIQyxzQ0FBZ0I7O0lBQ2hCLHNDQUFnQjs7SUFDaEIscURBQTZCOzs7OztBQUcvQixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2Ysc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLG1DQUFpQjs7Ozs7QUFHbkIsNENBS0M7OztJQUpDLG9DQUFXOztJQUNYLHVDQUFjOztJQUNkLG9DQUE0RDs7SUFDNUQsMENBQXdDOzs7OztBQUcxQywwQ0FFQzs7O0lBREMsNENBQWdDOzs7OztBQUdsQyx1Q0FFQzs7O0lBREMscUNBQWlDOzs7OztBQU9uQyw0Q0FJQzs7O0lBSEMsOENBQXVEOztJQUN2RCxpREFBNEI7O0lBQzVCLHlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuXG4vKipcbiAqIOWkjeeUqOWMuemFjeaooeW8j1xuICovXG5leHBvcnQgZW51bSBSZXVzZVRhYk1hdGNoTW9kZSB7XG4gIC8qKlxuICAgKiDvvIjmjqjojZDvvInmjInoj5zljZUgYE1lbnVgIOmFjee9rlxuICAgKlxuICAgKiDlj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICog5LiN5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51LFxuICAvKipcbiAgICog5oyJ6I+c5Y2VIGBNZW51YCDlvLrliLbphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICog5LiN5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudUZvcmNlLFxuICAvKipcbiAgICog5a+55omA5pyJ6Lev55Sx5pyJ5pWI77yM5Y+v5Lul6YWN5ZCIIGBleGNsdWRlc2Ag6L+H5ruk5peg6aG75aSN55So6Lev55SxXG4gICAqL1xuICBVUkwsXG59XG5cbmV4cG9ydCB0eXBlIFJldXNlVGFiUm91dGVQYXJhbU1hdGNoTW9kZSA9ICdzdHJpY3QnIHwgJ2xvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRpdGxlIHtcbiAgdGV4dD86IHN0cmluZztcbiAgaTE4bj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYkNhY2hlZCB7XG4gIHRpdGxlOiBSZXVzZVRpdGxlO1xuXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKiDmmK/lkKblhYHorrjlhbPpl63vvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuO1xuXG4gIC8qKiDlvZPliY3mu5rliqjmnaHkvY3nva4gKi9cbiAgcG9zaXRpb24/OiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcblxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgX2hhbmRsZTogUmV1c2VDb21wb25lbnRIYW5kbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiog5LqL5Lu257G75Z6LICovXG4gIGFjdGl2ZTogJ2FkZCcgfCAnb3ZlcnJpZGUnIHwgJ3RpdGxlJyB8ICdjbGVhcicgfCAnY2xvc2FibGUnIHwgJ2Nsb3NlJyB8ICdjbG9zZVJpZ2h0JyB8ICdtb3ZlJyB8ICdyZWZyZXNoJztcbiAgdXJsPzogc3RyaW5nO1xuICB0aXRsZT86IFJldXNlVGl0bGU7XG4gIGl0ZW0/OiBSZXVzZVRhYkNhY2hlZDtcbiAgbGlzdD86IFJldXNlVGFiQ2FjaGVkW107XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2xvc2FibGU6IGJvb2xlYW47XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRFdmVudCB7XG4gIGV2ZW50OiBNb3VzZUV2ZW50O1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGNvbXA/OiBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQ7XG4gIGN1c3RvbUNvbnRleHRNZW51PzogUmV1c2VDdXN0b21Db250ZXh0TWVudVtdO1xufVxuXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2N1c3RvbScgfCAncmVmcmVzaCcgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xuICB0eXBlOiBDbG9zZVR5cGU7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XG4gIHJlZnJlc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDdXN0b21Db250ZXh0TWVudSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZuOiAoaXRlbTogUmV1c2VJdGVtLCBtZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IChpdGVtOiBSZXVzZUl0ZW0pID0+IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb21wb25lbnRIYW5kbGUge1xuICBjb21wb25lbnRSZWY6IFJldXNlQ29tcG9uZW50UmVmO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29tcG9uZW50UmVmIHtcbiAgaW5zdGFuY2U6IFJldXNlQ29tcG9uZW50SW5zdGFuY2U7XG59XG5cbmV4cG9ydCB0eXBlIFJldXNlSG9va1R5cGVzID0gJ19vblJldXNlSW5pdCcgfCAnX29uUmV1c2VEZXN0cm95JztcblxuZXhwb3J0IHR5cGUgUmV1c2VIb29rT25SZXVzZUluaXRUeXBlID0gJ2luaXQnIHwgJ3JlZnJlc2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29tcG9uZW50SW5zdGFuY2Uge1xuICBfb25SZXVzZUluaXQ6ICh0eXBlOiBSZXVzZUhvb2tPblJldXNlSW5pdFR5cGUpID0+IHZvaWQ7XG4gIF9vblJldXNlRGVzdHJveTogKCkgPT4gdm9pZDtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn1cbiJdfQ==