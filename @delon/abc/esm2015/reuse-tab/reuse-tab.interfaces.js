/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU9FOzs7Ozs7Ozs7T0FTRztJQUNILE9BQUk7SUFDSjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFTO0lBQ1Q7O09BRUc7SUFDSCxNQUFHOzs7Ozs7Ozs7QUFHTCxnQ0FHQzs7O0lBRkMsMEJBQWE7O0lBQ2IsMEJBQWM7Ozs7O0FBR2hCLG9DQVdDOzs7SUFWQywrQkFBa0I7O0lBRWxCLDZCQUFZOzs7OztJQUdaLGtDQUFtQjs7SUFFbkIsbUNBQWtDOztJQUVsQyxpQ0FBYTs7Ozs7QUFHZixvQ0FLQzs7Ozs7O0lBSEMsZ0NBQWU7Ozs7OztBQUtqQiwrQkFPQzs7O0lBTkMsd0JBQVk7O0lBQ1osMEJBQWM7O0lBQ2QsNkJBQWtCOztJQUNsQiwwQkFBYzs7SUFDZCwyQkFBZ0I7O0lBQ2hCLHlCQUFjOzs7OztBQUdoQix1Q0FJQzs7O0lBSEMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLGlDQUFnQzs7Ozs7QUFLbEMsNENBSUM7OztJQUhDLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixxREFBNkI7Ozs7O0FBRy9CLHNDQUtDOzs7SUFKQyxpQ0FBZTs7SUFDZixzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsaUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xuICB0aXRsZTogUmV1c2VUaXRsZTtcblxuICB1cmw6IHN0cmluZztcblxuICAvKiog5piv5ZCm5YWB6K645YWz6Zet77yM6buY6K6k77yaYHRydWVgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcblxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgX2hhbmRsZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiTm90aWZ5IHtcbiAgLyoqIOS6i+S7tuexu+WeiyAqL1xuICBhY3RpdmU6IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VJdGVtIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsb3NhYmxlOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0RXZlbnQge1xuICBldmVudDogTW91c2VFdmVudDtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBjb21wPzogUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50O1xufVxuXG5leHBvcnQgdHlwZSBDbG9zZVR5cGUgPSAnY2xvc2UnIHwgJ2Nsb3NlT3RoZXInIHwgJ2Nsb3NlUmlnaHQnIHwgJ2NsZWFyJyB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XG4gIHR5cGU6IENsb3NlVHlwZTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xuICBjbG9zZT86IHN0cmluZztcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcbiAgY2xvc2VSaWdodD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG4iXX0=