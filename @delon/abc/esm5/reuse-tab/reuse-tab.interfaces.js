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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLElBQVksaUJBQWlCO0lBQzNCOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksR0FBQTtJQUNKOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsR0FBQTtJQUNUOztPQUVHO0lBQ0gsR0FBRyxHQUFBO0VBQ0o7Ozs7Ozs7O0FBRUQsZ0NBR0M7OztJQUZDLDBCQUFjOztJQUNkLDBCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsK0JBQWtCOztJQUVsQiw2QkFBWTs7Ozs7SUFHWixrQ0FBbUI7Ozs7O0lBR25CLGtDQUFtQzs7SUFFbkMsbUNBQWtDOztJQUVsQyxpQ0FBYTs7Ozs7QUFHZixvQ0FRQzs7Ozs7O0lBTkMsZ0NBQTBHOztJQUMxRyw2QkFBYTs7SUFDYiwrQkFBbUI7O0lBQ25CLDhCQUFzQjs7SUFDdEIsOEJBQXdCOzs7Ozs7QUFJMUIsK0JBT0M7OztJQU5DLHdCQUFZOztJQUNaLDBCQUFjOztJQUNkLDZCQUFrQjs7SUFDbEIsMEJBQWM7O0lBQ2QsMkJBQWdCOztJQUNoQix5QkFBYzs7Ozs7QUFHaEIsdUNBS0M7OztJQUpDLGtDQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQixpQ0FBZ0M7O0lBQ2hDLDhDQUE2Qzs7Ozs7QUFLL0MsNENBSUM7OztJQUhDLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixxREFBNkI7Ozs7O0FBRy9CLHNDQUtDOzs7SUFKQyxpQ0FBZTs7SUFDZixzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsaUNBQWU7Ozs7O0FBR2pCLDRDQUtDOzs7SUFKQyxvQ0FBVzs7SUFDWCx1Q0FBYzs7SUFDZCxvQ0FBNEQ7O0lBQzVELDBDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuXG4vKipcbiAqIOWkjeeUqOWMuemFjeaooeW8j1xuICovXG5leHBvcnQgZW51bSBSZXVzZVRhYk1hdGNoTW9kZSB7XG4gIC8qKlxuICAgKiDvvIjmjqjojZDvvInmjInoj5zljZUgYE1lbnVgIOmFjee9rlxuICAgKlxuICAgKiDlj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICog5LiN5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51LFxuICAvKipcbiAgICog5oyJ6I+c5Y2VIGBNZW51YCDlvLrliLbphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IHRydWUgfWBcbiAgICpcbiAgICog5LiN5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudUZvcmNlLFxuICAvKipcbiAgICog5a+55omA5pyJ6Lev55Sx5pyJ5pWI77yM5Y+v5Lul6YWN5ZCIIGBleGNsdWRlc2Ag6L+H5ruk5peg6aG75aSN55So6Lev55SxXG4gICAqL1xuICBVUkwsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUaXRsZSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xuICB0aXRsZTogUmV1c2VUaXRsZTtcblxuICB1cmw6IHN0cmluZztcblxuICAvKiog5piv5ZCm5YWB6K645YWz6Zet77yM6buY6K6k77yaYHRydWVgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcblxuICAvKiog5b2T5YmN5rua5Yqo5p2h5L2N572uICovXG4gIHBvc2l0aW9uPzogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XG5cbiAgX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gIF9oYW5kbGU6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYk5vdGlmeSB7XG4gIC8qKiDkuovku7bnsbvlnosgKi9cbiAgYWN0aXZlOiAnYWRkJyB8ICdvdmVycmlkZScgfCAndGl0bGUnIHwgJ2Nsb3NhYmxlJyB8ICdjbG9zZScgfCAnY2xvc2VSaWdodCcgfCAnY2xlYXInIHwgJ21vdmUnIHwgJ3JlZnJlc2gnO1xuICB1cmw/OiBzdHJpbmc7XG4gIHRpdGxlPzogUmV1c2VUaXRsZTtcbiAgaXRlbT86IFJldXNlVGFiQ2FjaGVkO1xuICBsaXN0PzogUmV1c2VUYWJDYWNoZWRbXTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbG9zYWJsZTogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcbiAgY3VzdG9tQ29udGV4dE1lbnU/OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W107XG59XG5cbmV4cG9ydCB0eXBlIENsb3NlVHlwZSA9ICdjbG9zZScgfCAnY2xvc2VPdGhlcicgfCAnY2xvc2VSaWdodCcgfCAnY3VzdG9tJyB8ICdyZWZyZXNoJyB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XG4gIHR5cGU6IENsb3NlVHlwZTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xuICBjbG9zZT86IHN0cmluZztcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcbiAgY2xvc2VSaWdodD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDdXN0b21Db250ZXh0TWVudSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZuOiAoaXRlbTogUmV1c2VJdGVtLCBtZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IChpdGVtOiBSZXVzZUl0ZW0pID0+IGJvb2xlYW47XG59XG4iXX0=