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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU9FOzs7Ozs7Ozs7T0FTRztJQUNILE9BQUk7SUFDSjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFTO0lBQ1Q7O09BRUc7SUFDSCxNQUFHOzs7Ozs7Ozs7QUFHTCxnQ0FHQzs7O0lBRkMsMEJBQWE7O0lBQ2IsMEJBQWM7Ozs7O0FBR2hCLG9DQVlDOzs7SUFYQywrQkFBa0I7O0lBRWxCLDZCQUFZOzs7OztJQUdaLGtDQUFtQjs7SUFFbkIsbUNBQWtDOztJQUdsQyxpQ0FBYTs7Ozs7QUFHZixvQ0FNQzs7Ozs7O0lBSkMsZ0NBQWU7Ozs7OztBQU1qQiwrQkFPQzs7O0lBTkMsd0JBQVk7O0lBQ1osMEJBQWM7O0lBQ2QsNkJBQWtCOztJQUNsQiwwQkFBYzs7SUFDZCwyQkFBZ0I7O0lBQ2hCLHlCQUFjOzs7OztBQUdoQix1Q0FJQzs7O0lBSEMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLGlDQUFnQzs7Ozs7QUFLbEMsNENBSUM7OztJQUhDLHNDQUFnQjs7SUFDaEIsc0NBQWdCOztJQUNoQixxREFBNkI7Ozs7O0FBRy9CLHNDQUtDOzs7SUFKQyxpQ0FBZTs7SUFDZixzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsaUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcblxuLyoqXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cbiAqL1xuZXhwb3J0IGVudW0gUmV1c2VUYWJNYXRjaE1vZGUge1xuICAvKipcbiAgICog77yI5o6o6I2Q77yJ5oyJ6I+c5Y2VIGBNZW51YCDphY3nva5cbiAgICpcbiAgICog5Y+v5aSN55So77yaXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJyB9YFxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxuICAgKi9cbiAgTWVudSxcbiAgLyoqXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXG4gICAqXG4gICAqIOS4jeWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnVGb3JjZSxcbiAgLyoqXG4gICAqIOWvueaJgOaciei3r+eUseacieaViO+8jOWPr+S7pemFjeWQiCBgZXhjbHVkZXNgIOi/h+a7pOaXoOmhu+WkjeeUqOi3r+eUsVxuICAgKi9cbiAgVVJMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGl0bGUge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xuICB0aXRsZTogUmV1c2VUaXRsZTtcblxuICB1cmw6IHN0cmluZztcblxuICAvKiog5piv5ZCm5YWB6K645YWz6Zet77yM6buY6K6k77yaYHRydWVgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcblxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfaGFuZGxlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xuICAvKiog5LqL5Lu257G75Z6LICovXG4gIGFjdGl2ZTogc3RyaW5nO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbG9zYWJsZTogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjbGVhcicgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xuICB0eXBlOiBDbG9zZVR5cGU7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuIl19