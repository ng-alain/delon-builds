/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @type {?} */
ReuseTitle.prototype.text;
/** @type {?|undefined} */
ReuseTitle.prototype.i18n;
/**
 * @record
 */
export function ReuseTabCached() { }
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
/**
 * @record
 */
export function ReuseTabNotify() { }
/**
 * 事件类型
 * @type {?}
 */
ReuseTabNotify.prototype.active;
/**
 * @record
 */
export function ReuseItem() { }
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
/**
 * @record
 */
export function ReuseContextEvent() { }
/** @type {?} */
ReuseContextEvent.prototype.event;
/** @type {?} */
ReuseContextEvent.prototype.item;
/** @type {?|undefined} */
ReuseContextEvent.prototype.comp;
/** @typedef {?} */
var CloseType;
export { CloseType };
/**
 * @record
 */
export function ReuseContextCloseEvent() { }
/** @type {?} */
ReuseContextCloseEvent.prototype.type;
/** @type {?} */
ReuseContextCloseEvent.prototype.item;
/** @type {?} */
ReuseContextCloseEvent.prototype.includeNonCloseable;
/**
 * @record
 */
export function ReuseContextI18n() { }
/** @type {?|undefined} */
ReuseContextI18n.prototype.close;
/** @type {?|undefined} */
ReuseContextI18n.prototype.closeOther;
/** @type {?|undefined} */
ReuseContextI18n.prototype.closeRight;
/** @type {?|undefined} */
ReuseContextI18n.prototype.clear;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkUsT0FBSTs7Ozs7Ozs7Ozs7SUFXSixZQUFTOzs7O0lBSVQsTUFBRzs7O29DQWZILElBQUk7b0NBV0osU0FBUztvQ0FJVCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiDlpI3nlKjljLnphY3mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIFJldXNlVGFiTWF0Y2hNb2RlIHtcclxuICAvKipcclxuICAgKiDvvIjmjqjojZDvvInmjInoj5zljZUgYE1lbnVgIOmFjee9rlxyXG4gICAqXHJcbiAgICog5Y+v5aSN55So77yaXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxyXG4gICAqXHJcbiAgICog5LiN5Y+v5aSN55So77yaXHJcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcclxuICAgKi9cclxuICBNZW51LFxyXG4gIC8qKlxyXG4gICAqIOaMieiPnOWNlSBgTWVudWAg5by65Yi26YWN572uXHJcbiAgICpcclxuICAgKiDlj6/lpI3nlKjvvJpcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiB0cnVlIH1gXHJcbiAgICpcclxuICAgKiDkuI3lj6/lpI3nlKjvvJpcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcclxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcsIHJldXNlOiBmYWxzZSB9YFxyXG4gICAqL1xyXG4gIE1lbnVGb3JjZSxcclxuICAvKipcclxuICAgKiDlr7nmiYDmnInot6/nlLHmnInmlYjvvIzlj6/ku6XphY3lkIggYGV4Y2x1ZGVzYCDov4fmu6Tml6DpobvlpI3nlKjot6/nlLFcclxuICAgKi9cclxuICBVUkwsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUaXRsZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGkxOG4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJDYWNoZWQge1xyXG4gIHRpdGxlOiBSZXVzZVRpdGxlO1xyXG5cclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIOaYr+WQpuWFgeiuuOWFs+mXre+8jOm7mOiupO+8mmB0cnVlYCAqL1xyXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcclxuXHJcbiAgX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG5cclxuICBfaGFuZGxlOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VUYWJOb3RpZnkge1xyXG4gIC8qKiDkuovku7bnsbvlnosgKi9cclxuICBhY3RpdmU6IHN0cmluZztcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjbG9zYWJsZTogYm9vbGVhbjtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuICBsYXN0OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcclxuICBldmVudDogTW91c2VFdmVudDtcclxuICBpdGVtOiBSZXVzZUl0ZW07XHJcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjbGVhcicgfCBudWxsO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRDbG9zZUV2ZW50IHtcclxuICB0eXBlOiBDbG9zZVR5cGU7XHJcbiAgaXRlbTogUmV1c2VJdGVtO1xyXG4gIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV1c2VDb250ZXh0STE4biB7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgY2xvc2VPdGhlcj86IHN0cmluZztcclxuICBjbG9zZVJpZ2h0Pzogc3RyaW5nO1xyXG4gIGNsZWFyPzogc3RyaW5nO1xyXG59XHJcbiJdfQ==