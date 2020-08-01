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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcmV1c2UtdGFiL3JldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLE1BQVksaUJBQWlCO0lBQzNCOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksR0FBQTtJQUNKOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsR0FBQTtJQUNUOztPQUVHO0lBQ0gsR0FBRyxHQUFBO0VBQ0o7Ozs7Ozs7O0FBSUQsZ0NBR0M7OztJQUZDLDBCQUFjOztJQUNkLDBCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsK0JBQWtCOztJQUVsQiw2QkFBWTs7Ozs7SUFHWixrQ0FBbUI7Ozs7O0lBR25CLGtDQUFtQzs7SUFFbkMsbUNBQWtDOztJQUVsQyxpQ0FBOEI7Ozs7O0FBR2hDLG9DQVFDOzs7Ozs7SUFOQyxnQ0FBMEc7O0lBQzFHLDZCQUFhOztJQUNiLCtCQUFtQjs7SUFDbkIsOEJBQXNCOztJQUN0Qiw4QkFBd0I7Ozs7OztBQUkxQiwrQkFPQzs7O0lBTkMsd0JBQVk7O0lBQ1osMEJBQWM7O0lBQ2QsNkJBQWtCOztJQUNsQiwwQkFBYzs7SUFDZCwyQkFBZ0I7O0lBQ2hCLHlCQUFjOzs7OztBQUdoQix1Q0FLQzs7O0lBSkMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLGlDQUFnQzs7SUFDaEMsOENBQTZDOzs7OztBQUsvQyw0Q0FJQzs7O0lBSEMsc0NBQWdCOztJQUNoQixzQ0FBZ0I7O0lBQ2hCLHFEQUE2Qjs7Ozs7QUFHL0Isc0NBS0M7OztJQUpDLGlDQUFlOztJQUNmLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixtQ0FBaUI7Ozs7O0FBR25CLDRDQUtDOzs7SUFKQyxvQ0FBVzs7SUFDWCx1Q0FBYzs7SUFDZCxvQ0FBNEQ7O0lBQzVELDBDQUF3Qzs7Ozs7QUFHMUMsMENBRUM7OztJQURDLDRDQUFnQzs7Ozs7QUFHbEMsdUNBRUM7OztJQURDLHFDQUFpQzs7Ozs7QUFLbkMsNENBSUM7OztJQUhDLDhDQUF5Qjs7SUFDekIsaURBQTRCOztJQUM1Qix5Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgdHlwZSBSZXVzZVRhYlJvdXRlUGFyYW1NYXRjaE1vZGUgPSAnc3RyaWN0JyB8ICdsb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUaXRsZSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xuICB0aXRsZTogUmV1c2VUaXRsZTtcblxuICB1cmw6IHN0cmluZztcblxuICAvKiog5piv5ZCm5YWB6K645YWz6Zet77yM6buY6K6k77yaYHRydWVgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcblxuICAvKiog5b2T5YmN5rua5Yqo5p2h5L2N572uICovXG4gIHBvc2l0aW9uPzogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XG5cbiAgX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gIF9oYW5kbGU6IFJldXNlQ29tcG9uZW50SGFuZGxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiTm90aWZ5IHtcbiAgLyoqIOS6i+S7tuexu+WeiyAqL1xuICBhY3RpdmU6ICdhZGQnIHwgJ292ZXJyaWRlJyB8ICd0aXRsZScgfCAnY2xlYXInIHwgJ2Nsb3NhYmxlJyB8ICdjbG9zZScgfCAnY2xvc2VSaWdodCcgfCAnbW92ZScgfCAncmVmcmVzaCc7XG4gIHVybD86IHN0cmluZztcbiAgdGl0bGU/OiBSZXVzZVRpdGxlO1xuICBpdGVtPzogUmV1c2VUYWJDYWNoZWQ7XG4gIGxpc3Q/OiBSZXVzZVRhYkNhY2hlZFtdO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VJdGVtIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsb3NhYmxlOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0RXZlbnQge1xuICBldmVudDogTW91c2VFdmVudDtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBjb21wPzogUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50O1xuICBjdXN0b21Db250ZXh0TWVudT86IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjdXN0b20nIHwgJ3JlZnJlc2gnIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IHtcbiAgdHlwZTogQ2xvc2VUeXBlO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0STE4biB7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBjbG9zZU90aGVyPzogc3RyaW5nO1xuICBjbG9zZVJpZ2h0Pzogc3RyaW5nO1xuICByZWZyZXNoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ3VzdG9tQ29udGV4dE1lbnUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBmbjogKGl0ZW06IFJldXNlSXRlbSwgbWVudTogUmV1c2VDdXN0b21Db250ZXh0TWVudSkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiAoaXRlbTogUmV1c2VJdGVtKSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29tcG9uZW50SGFuZGxlIHtcbiAgY29tcG9uZW50UmVmOiBSZXVzZUNvbXBvbmVudFJlZjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbXBvbmVudFJlZiB7XG4gIGluc3RhbmNlOiBSZXVzZUNvbXBvbmVudEluc3RhbmNlO1xufVxuXG5leHBvcnQgdHlwZSBSZXVzZUhvb2tUeXBlcyA9ICdfb25SZXVzZUluaXQnIHwgJ19vblJldXNlRGVzdHJveSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb21wb25lbnRJbnN0YW5jZSB7XG4gIF9vblJldXNlSW5pdDogKCkgPT4gdm9pZDtcbiAgX29uUmV1c2VEZXN0cm95OiAoKSA9PiB2b2lkO1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xufVxuIl19