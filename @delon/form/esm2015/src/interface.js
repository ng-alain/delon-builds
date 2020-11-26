/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFFormValueChange() { }
if (false) {
    /** @type {?} */
    SFFormValueChange.prototype.path;
    /** @type {?} */
    SFFormValueChange.prototype.pathValue;
    /** @type {?} */
    SFFormValueChange.prototype.value;
}
/**
 * @record
 */
export function SFValueChange() { }
if (false) {
    /**
     * Always return complete data
     * @type {?}
     */
    SFValueChange.prototype.value;
    /**
     * Current triggered path
     * @type {?}
     */
    SFValueChange.prototype.path;
    /**
     * Current path value
     * @type {?}
     */
    SFValueChange.prototype.pathValue;
}
/**
 * @record
 */
export function SFUpdateValueAndValidity() { }
if (false) {
    /**
     * 是否包含上级字段，默认：`false`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.onlySelf;
    /**
     * 是否触发值变更通知，默认：`true`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.emitValueEvent;
    /**
     * 是否触发校验，默认：`true`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.emitValidator;
    /**
     * 当前更新路径
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.updatePath;
    /**
     * 当前更新路径对应值
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.updateValue;
}
/**
 * @record
 */
export function SFButton() { }
if (false) {
    /**
     * 提交按钮文本，默认：`提交`
     * @type {?|undefined}
     */
    SFButton.prototype.submit;
    /**
     * 提交按钮类型，默认：`primary`
     * @type {?|undefined}
     */
    SFButton.prototype.submit_type;
    /**
     * 提交按钮图标
     * @type {?|undefined}
     */
    SFButton.prototype.submit_icon;
    /**
     * 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置`
     * @type {?|undefined}
     */
    SFButton.prototype.reset;
    /**
     * 重置按钮类型，默认：`default`
     * @type {?|undefined}
     */
    SFButton.prototype.reset_type;
    /**
     * 重置按钮图标
     * @type {?|undefined}
     */
    SFButton.prototype.reset_icon;
    /**
     * 按钮样式，主要用于指定按钮 `grid`、`class` 属性
     * @type {?|undefined}
     */
    SFButton.prototype.render;
    /**
     * 搜索按钮文本，默认：`搜索`
     * @type {?|undefined}
     */
    SFButton.prototype.search;
    /**
     * 编辑按钮文本，默认：`保存`
     * @type {?|undefined}
     */
    SFButton.prototype.edit;
}
/**
 * @record
 */
export function SFButtonIcon() { }
if (false) {
    /**
     * 等同 `nz-icon` 的 `nzType` 值
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.type;
    /**
     * 图标主题风格，默认：`outline`
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.theme;
    /**
     * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.twoToneColor;
    /**
     * 指定来自 IconFont 的图标类型
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.iconfont;
}
/**
 * @record
 */
export function SFRenderButton() { }
/**
 * @record
 */
export function SFIcon() { }
if (false) {
    /** @type {?|undefined} */
    SFIcon.prototype.type;
    /** @type {?|undefined} */
    SFIcon.prototype.theme;
    /** @type {?|undefined} */
    SFIcon.prototype.twotoneColor;
    /** @type {?|undefined} */
    SFIcon.prototype.rotate;
    /** @type {?|undefined} */
    SFIcon.prototype.spin;
    /** @type {?|undefined} */
    SFIcon.prototype.iconfont;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSx1Q0FJQzs7O0lBSEMsaUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLGtDQUFlOzs7OztBQUdqQixtQ0FhQzs7Ozs7O0lBVEMsOEJBQWU7Ozs7O0lBSWYsNkJBQW9COzs7OztJQUlwQixrQ0FBbUI7Ozs7O0FBR3JCLDhDQXFCQzs7Ozs7O0lBakJDLDRDQUFtQjs7Ozs7SUFJbkIsa0RBQXlCOzs7OztJQUl6QixpREFBd0I7Ozs7O0lBSXhCLDhDQUFvQjs7Ozs7SUFJcEIsK0NBQTZCOzs7OztBQUcvQiw4QkFtQkM7Ozs7OztJQWpCQywwQkFBZ0I7Ozs7O0lBRWhCLCtCQUFxQjs7Ozs7SUFFckIsK0JBQTJCOzs7OztJQUUzQix5QkFBZTs7Ozs7SUFFZiw4QkFBb0I7Ozs7O0lBRXBCLDhCQUEwQjs7Ozs7SUFFMUIsMEJBQXdCOzs7OztJQUV4QiwwQkFBZ0I7Ozs7O0lBRWhCLHdCQUFjOzs7OztBQUdoQixrQ0FTQzs7Ozs7O0lBUEMsNEJBQWM7Ozs7O0lBRWQsNkJBQXVDOzs7OztJQUV2QyxvQ0FBc0I7Ozs7O0lBRXRCLGdDQUFrQjs7Ozs7QUFHcEIsb0NBQW1GOzs7O0FBRW5GLDRCQVlDOzs7SUFYQyxzQkFBYzs7SUFFZCx1QkFBdUM7O0lBRXZDLDhCQUFzQjs7SUFFdEIsd0JBQWdCOztJQUVoQixzQkFBZTs7SUFFZiwwQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEsIFNGUmVuZGVyU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgdHlwZSBTRlZhbHVlID0gYW55O1xuXG5leHBvcnQgdHlwZSBTRkxheW91dCA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkZvcm1WYWx1ZUNoYW5nZSB7XG4gIHBhdGg6IHN0cmluZyB8IG51bGw7XG4gIHBhdGhWYWx1ZTogU0ZWYWx1ZTtcbiAgdmFsdWU6IFNGVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZWYWx1ZUNoYW5nZSB7XG4gIC8qKlxuICAgKiBBbHdheXMgcmV0dXJuIGNvbXBsZXRlIGRhdGFcbiAgICovXG4gIHZhbHVlOiBTRlZhbHVlO1xuICAvKipcbiAgICogQ3VycmVudCB0cmlnZ2VyZWQgcGF0aFxuICAgKi9cbiAgcGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIEN1cnJlbnQgcGF0aCB2YWx1ZVxuICAgKi9cbiAgcGF0aFZhbHVlOiBTRlZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGVXBkYXRlVmFsdWVBbmRWYWxpZGl0eSB7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvkuIrnuqflrZfmrrXvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5U2VsZj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbop6blj5HlgLzlj5jmm7TpgJrnn6XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGVtaXRWYWx1ZUV2ZW50PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuinpuWPkeagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZW1pdFZhbGlkYXRvcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlvZPliY3mm7TmlrDot6/lvoRcbiAgICovXG4gIHVwZGF0ZVBhdGg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvZPliY3mm7TmlrDot6/lvoTlr7nlupTlgLxcbiAgICovXG4gIHVwZGF0ZVZhbHVlPzogU0ZWYWx1ZSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZCdXR0b24ge1xuICAvKiog5o+Q5Lqk5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOaPkOS6pGAgKi9cbiAgc3VibWl0Pzogc3RyaW5nO1xuICAvKiog5o+Q5Lqk5oyJ6ZKu57G75Z6L77yM6buY6K6k77yaYHByaW1hcnlgICovXG4gIHN1Ym1pdF90eXBlPzogc3RyaW5nO1xuICAvKiog5o+Q5Lqk5oyJ6ZKu5Zu+5qCHICovXG4gIHN1Ym1pdF9pY29uPzogU0ZCdXR0b25JY29uO1xuICAvKiog6YeN572u5oyJ6ZKu5paH5pys77yMYG51bGwgYOaIliBgdW5kZWZpbmVkYCDooajnpLrkuI3pnIDopoHor6XmjInpkq7vvIzpu5jorqTvvJpg6YeN572uYCAqL1xuICByZXNldD86IHN0cmluZztcbiAgLyoqIOmHjee9ruaMiemSruexu+Wei++8jOm7mOiupO+8mmBkZWZhdWx0YCAqL1xuICByZXNldF90eXBlPzogc3RyaW5nO1xuICAvKiog6YeN572u5oyJ6ZKu5Zu+5qCHICovXG4gIHJlc2V0X2ljb24/OiBTRkJ1dHRvbkljb247XG4gIC8qKiDmjInpkq7moLflvI/vvIzkuLvopoHnlKjkuo7mjIflrprmjInpkq4gYGdyaWRg44CBYGNsYXNzYCDlsZ7mgKcgKi9cbiAgcmVuZGVyPzogU0ZSZW5kZXJCdXR0b247XG4gIC8qKiDmkJzntKLmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg5pCc57SiYCAqL1xuICBzZWFyY2g/OiBzdHJpbmc7XG4gIC8qKiDnvJbovpHmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg5L+d5a2YYCAqL1xuICBlZGl0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGQnV0dG9uSWNvbiB7XG4gIC8qKiDnrYnlkIwgYG56LWljb25gIOeahCBgbnpUeXBlYCDlgLwgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gIGljb25mb250Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGUmVuZGVyQnV0dG9uIGV4dGVuZHMgU0ZIb3Jpem9udGFsTGF5b3V0U2NoZW1hLCBTRlJlbmRlclNjaGVtYSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGSWNvbiB7XG4gIHR5cGU/OiBzdHJpbmc7XG5cbiAgdGhlbWU/OiAnZmlsbCcgfCAnb3V0bGluZScgfCAndHdvdG9uZSc7XG5cbiAgdHdvdG9uZUNvbG9yPzogc3RyaW5nO1xuXG4gIHJvdGF0ZT86IG51bWJlcjtcblxuICBzcGluPzogYm9vbGVhbjtcblxuICBpY29uZm9udD86IHN0cmluZztcbn1cbiJdfQ==