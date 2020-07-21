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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsdUNBSUM7OztJQUhDLGlDQUFvQjs7SUFDcEIsc0NBQW1COztJQUNuQixrQ0FBZTs7Ozs7QUFHakIsbUNBYUM7Ozs7OztJQVRDLDhCQUFlOzs7OztJQUlmLDZCQUFvQjs7Ozs7SUFJcEIsa0NBQW1COzs7OztBQUdyQiw4Q0FxQkM7Ozs7OztJQWpCQyw0Q0FBbUI7Ozs7O0lBSW5CLGtEQUF5Qjs7Ozs7SUFJekIsaURBQXdCOzs7OztJQUl4Qiw4Q0FBb0I7Ozs7O0lBSXBCLCtDQUE2Qjs7Ozs7QUFHL0IsOEJBbUJDOzs7Ozs7SUFqQkMsMEJBQWdCOzs7OztJQUVoQiwrQkFBcUI7Ozs7O0lBRXJCLCtCQUEyQjs7Ozs7SUFFM0IseUJBQWU7Ozs7O0lBRWYsOEJBQW9COzs7OztJQUVwQiw4QkFBMEI7Ozs7O0lBRTFCLDBCQUF3Qjs7Ozs7SUFFeEIsMEJBQWdCOzs7OztJQUVoQix3QkFBYzs7Ozs7QUFHaEIsa0NBU0M7Ozs7OztJQVBDLDRCQUFjOzs7OztJQUVkLDZCQUF1Qzs7Ozs7SUFFdkMsb0NBQXNCOzs7OztJQUV0QixnQ0FBa0I7Ozs7O0FBR3BCLG9DQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgU0ZSZW5kZXJTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmV4cG9ydCB0eXBlIFNGVmFsdWUgPSBhbnk7XG5cbmV4cG9ydCB0eXBlIFNGTGF5b3V0ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGRm9ybVZhbHVlQ2hhbmdlIHtcbiAgcGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgcGF0aFZhbHVlOiBTRlZhbHVlO1xuICB2YWx1ZTogU0ZWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlZhbHVlQ2hhbmdlIHtcbiAgLyoqXG4gICAqIEFsd2F5cyByZXR1cm4gY29tcGxldGUgZGF0YVxuICAgKi9cbiAgdmFsdWU6IFNGVmFsdWU7XG4gIC8qKlxuICAgKiBDdXJyZW50IHRyaWdnZXJlZCBwYXRoXG4gICAqL1xuICBwYXRoOiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICogQ3VycmVudCBwYXRoIHZhbHVlXG4gICAqL1xuICBwYXRoVmFsdWU6IFNGVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVcGRhdGVWYWx1ZUFuZFZhbGlkaXR5IHtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+S4iue6p+Wtl+aute+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuinpuWPkeWAvOWPmOabtOmAmuefpe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZW1pdFZhbHVlRXZlbnQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm6Kem5Y+R5qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBlbWl0VmFsaWRhdG9yPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW9k+WJjeabtOaWsOi3r+W+hFxuICAgKi9cbiAgdXBkYXRlUGF0aD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9k+WJjeabtOaWsOi3r+W+hOWvueW6lOWAvFxuICAgKi9cbiAgdXBkYXRlVmFsdWU/OiBTRlZhbHVlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkJ1dHRvbiB7XG4gIC8qKiDmj5DkuqTmjInpkq7mlofmnKzvvIzpu5jorqTvvJpg5o+Q5LqkYCAqL1xuICBzdWJtaXQ/OiBzdHJpbmc7XG4gIC8qKiDmj5DkuqTmjInpkq7nsbvlnovvvIzpu5jorqTvvJpgcHJpbWFyeWAgKi9cbiAgc3VibWl0X3R5cGU/OiBzdHJpbmc7XG4gIC8qKiDmj5DkuqTmjInpkq7lm77moIcgKi9cbiAgc3VibWl0X2ljb24/OiBTRkJ1dHRvbkljb247XG4gIC8qKiDph43nva7mjInpkq7mlofmnKzvvIxgbnVsbCBg5oiWIGB1bmRlZmluZWRgIOihqOekuuS4jemcgOimgeivpeaMiemSru+8jOm7mOiupO+8mmDph43nva5gICovXG4gIHJlc2V0Pzogc3RyaW5nO1xuICAvKiog6YeN572u5oyJ6ZKu57G75Z6L77yM6buY6K6k77yaYGRlZmF1bHRgICovXG4gIHJlc2V0X3R5cGU/OiBzdHJpbmc7XG4gIC8qKiDph43nva7mjInpkq7lm77moIcgKi9cbiAgcmVzZXRfaWNvbj86IFNGQnV0dG9uSWNvbjtcbiAgLyoqIOaMiemSruagt+W8j++8jOS4u+imgeeUqOS6juaMh+WumuaMiemSriBgZ3JpZGDjgIFgY2xhc3NgIOWxnuaApyAqL1xuICByZW5kZXI/OiBTRlJlbmRlckJ1dHRvbjtcbiAgLyoqIOaQnOe0ouaMiemSruaWh+acrO+8jOm7mOiupO+8mmDmkJzntKJgICovXG4gIHNlYXJjaD86IHN0cmluZztcbiAgLyoqIOe8lui+keaMiemSruaWh+acrO+8jOm7mOiupO+8mmDkv53lrZhgICovXG4gIGVkaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZCdXR0b25JY29uIHtcbiAgLyoqIOetieWQjCBgbnotaWNvbmAg55qEIGBuelR5cGVgIOWAvCAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAvKiog5LuF6YCC55So5Y+M6Imy5Zu+5qCH77yM6K6+572u5Y+M6Imy5Zu+5qCH55qE5Li76KaB6aKc6Imy77yM5LuF5a+55b2T5YmNIGljb24g55Sf5pWIICovXG4gIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgLyoqIOaMh+WumuadpeiHqiBJY29uRm9udCDnmoTlm77moIfnsbvlnosgKi9cbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZSZW5kZXJCdXR0b24gZXh0ZW5kcyBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEsIFNGUmVuZGVyU2NoZW1hIHt9XG4iXX0=