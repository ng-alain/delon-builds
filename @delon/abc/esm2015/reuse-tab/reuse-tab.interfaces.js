/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3JldXNlLXRhYi8iLCJzb3VyY2VzIjpbInJldXNlLXRhYi5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkUsT0FBSTs7Ozs7Ozs7Ozs7SUFXSixZQUFTOzs7O0lBSVQsTUFBRzs7O29DQWZILElBQUk7b0NBV0osU0FBUztvQ0FJVCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5cbi8qKlxuICog5aSN55So5Yy56YWN5qih5byPXG4gKi9cbmV4cG9ydCBlbnVtIFJldXNlVGFiTWF0Y2hNb2RlIHtcbiAgLyoqXG4gICAqIO+8iOaOqOiNkO+8ieaMieiPnOWNlSBgTWVudWAg6YWN572uXG4gICAqXG4gICAqIOWPr+WkjeeUqO+8mlxuICAgKiAtIGB7IHRleHQ6J0Rhc2hib2FyZCcgfWBcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDkuI3lj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogZmFsc2UgfWBcbiAgICovXG4gIE1lbnUsXG4gIC8qKlxuICAgKiDmjInoj5zljZUgYE1lbnVgIOW8uuWItumFjee9rlxuICAgKlxuICAgKiDlj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnLCByZXVzZTogdHJ1ZSB9YFxuICAgKlxuICAgKiDkuI3lj6/lpI3nlKjvvJpcbiAgICogLSBgeyB0ZXh0OidEYXNoYm9hcmQnIH1gXG4gICAqIC0gYHsgdGV4dDonRGFzaGJvYXJkJywgcmV1c2U6IGZhbHNlIH1gXG4gICAqL1xuICBNZW51Rm9yY2UsXG4gIC8qKlxuICAgKiDlr7nmiYDmnInot6/nlLHmnInmlYjvvIzlj6/ku6XphY3lkIggYGV4Y2x1ZGVzYCDov4fmu6Tml6DpobvlpI3nlKjot6/nlLFcbiAgICovXG4gIFVSTCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRpdGxlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlVGFiQ2FjaGVkIHtcbiAgdGl0bGU6IFJldXNlVGl0bGU7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqIOaYr+WQpuWFgeiuuOWFs+mXre+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW47XG5cbiAgX3NuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuXG4gIF9oYW5kbGU6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZVRhYk5vdGlmeSB7XG4gIC8qKiDkuovku7bnsbvlnosgKi9cbiAgYWN0aXZlOiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlSXRlbSB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbG9zYWJsZTogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dEV2ZW50IHtcbiAgZXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgY29tcD86IFJldXNlVGFiQ29udGV4dENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvc2VUeXBlID0gJ2Nsb3NlJyB8ICdjbG9zZU90aGVyJyB8ICdjbG9zZVJpZ2h0JyB8ICdjbGVhcicgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldXNlQ29udGV4dENsb3NlRXZlbnQge1xuICB0eXBlOiBDbG9zZVR5cGU7XG4gIGl0ZW06IFJldXNlSXRlbTtcbiAgaW5jbHVkZU5vbkNsb3NlYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXVzZUNvbnRleHRJMThuIHtcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIGNsb3NlT3RoZXI/OiBzdHJpbmc7XG4gIGNsb3NlUmlnaHQ/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuIl19