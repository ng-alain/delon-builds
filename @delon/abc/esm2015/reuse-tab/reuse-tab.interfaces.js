/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab.interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLE1BQVksaUJBQWlCO0lBQzNCOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksR0FBQTtJQUNKOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsR0FBQTtJQUNUOztPQUVHO0lBQ0gsR0FBRyxHQUFBO0VBQ0o7Ozs7Ozs7O0FBRUQsZ0NBR0M7OztJQUZDLDBCQUFjOztJQUNkLDBCQUFjOzs7OztBQUdoQixvQ0FjQzs7O0lBYkMsK0JBQWtCOztJQUVsQiw2QkFBWTs7Ozs7SUFHWixrQ0FBbUI7Ozs7O0lBR25CLGtDQUFtQzs7SUFFbkMsbUNBQWtDOztJQUVsQyxpQ0FBYTs7Ozs7QUFHZixvQ0FLQzs7Ozs7O0lBSEMsZ0NBQWU7Ozs7OztBQUtqQiwrQkFPQzs7O0lBTkMsd0JBQVk7O0lBQ1osMEJBQWM7O0lBQ2QsNkJBQWtCOztJQUNsQiwwQkFBYzs7SUFDZCwyQkFBZ0I7O0lBQ2hCLHlCQUFjOzs7OztBQUdoQix1Q0FLQzs7O0lBSkMsa0NBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLGlDQUFnQzs7SUFDaEMsOENBQTZDOzs7OztBQUsvQyw0Q0FJQzs7O0lBSEMsc0NBQWdCOztJQUNoQixzQ0FBZ0I7O0lBQ2hCLHFEQUE2Qjs7Ozs7QUFHL0Isc0NBS0M7OztJQUpDLGlDQUFlOztJQUNmLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixpQ0FBZTs7Ozs7QUFHakIsNENBS0M7OztJQUpDLG9DQUFXOztJQUNYLHVDQUFjOztJQUNkLG9DQUE0RDs7SUFDNUQsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5cbi8qKlxuICog5aSN55So5Yy56YWN5qih5byPXG4gKi9cbmV4cG9ydCBlbnVtIFJldXNlVGFiTWF0Y2hNb2RlIHtcbiAgLyoqXG4gICAqIO+8iOaOqOiNkO+8ieaMieiPnOWNlSBgTWVudWAg6YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDkuI3lj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnUsXG4gIC8qKlxuICAgKiDmjInoj5zljZUgYE1lbnVgIOW8uuWItumFjee9rlxuICAgKlxuICAgKiDlj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDkuI3lj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51Rm9yY2UsXG4gIC8qKlxuICAgKiDlr7nmiYDmnInot6/nlLHmnInmlYjvvIzlj6/ku6XphY3lkIggYGV4Y2x1ZGVzYCDov4fmu6Tml6DpobvlpI3nlKjot6/nlLFcbiAgICovXG4gIFVSTCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRpdGxlIHtcbiAgdGV4dD86IHN0cmluZztcbiAgaTE4bj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYkNhY2hlZCB7XG4gIHRpdGxlOiBSZXVzZVRpdGxlO1xuXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qKiDmmK/lkKblhYHorrjlhbPpl63vvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgY2xvc2FibGU/OiBib29sZWFuO1xuXG4gIC8qKiDlvZPliY3mu5rliqjmnaHkvY3nva4gKi9cbiAgcG9zaXRpb24/OiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcblxuICBfc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG5cbiAgX2hhbmRsZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiTm90aWZ5IHtcbiAgLyoqIOS6i+S7tuexu+WeiyAqL1xuICBhY3RpdmU6IHN0cmluZztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VJdGVtIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNsb3NhYmxlOiBib29sZWFuO1xuICBpbmRleDogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0RXZlbnQge1xuICBldmVudDogTW91c2VFdmVudDtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBjb21wPzogUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50O1xuICBjdXN0b21Db250ZXh0TWVudT86IFJldXNlQ3VzdG9tQ29udGV4dE1lbnVbXTtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjbGVhcicgfCAnY3VzdG9tJyB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCB7XG4gIHR5cGU6IENsb3NlVHlwZTtcbiAgaXRlbTogUmV1c2VJdGVtO1xuICBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEkxOG4ge1xuICBjbG9zZT86IHN0cmluZztcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcbiAgY2xvc2VSaWdodD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDdXN0b21Db250ZXh0TWVudSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZuOiAoaXRlbTogUmV1c2VJdGVtLCBtZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51KSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IChpdGVtOiBSZXVzZUl0ZW0pID0+IGJvb2xlYW47XG59XG4iXX0=