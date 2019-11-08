/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/string/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFStringWidgetSchema() { }
if (false) {
    /**
     * 指定 `input` 的 `type` 值，默认为：`text`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.type;
    /**
     * 文字框中显示提示信息
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.placeholder;
    /**
     * 自动完成功能的表单
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.autocomplete;
    /**
     * 加载时是否获得焦点
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.autofocus;
    /**
     * 前置标签，等同 `nzAddOnBefore`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.addOnBefore;
    /**
     * 后置标签，等同 `nzAddOnAfter`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.addOnAfter;
    /**
     * 前置Icon，等同 `nzAddOnBeforeIcon`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.addOnBeforeIcon;
    /**
     * 后置Icon，等同 `nzAddOnAfterIcon`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.addOnAfterIcon;
    /**
     * 带有前缀图标的 input，等同 `nzPrefix`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.prefix;
    /**
     * 前缀图标，等同 `nzPrefixIcon`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.prefixIcon;
    /**
     * 带有后缀图标的 input，等同 `nzSuffix`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.suffix;
    /**
     * 后缀图标，等同 `nzSuffixIcon`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.suffixIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zdHJpbmcvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsMENBNERDOzs7Ozs7SUF4REMsb0NBQWM7Ozs7O0lBS2QsMkNBQXFCOzs7OztJQUtyQiw0Q0FBNEI7Ozs7O0lBSzVCLHlDQUFvQjs7Ozs7SUFLcEIsMkNBQXFCOzs7OztJQUtyQiwwQ0FBb0I7Ozs7O0lBS3BCLCtDQUF5Qjs7Ozs7SUFLekIsOENBQXdCOzs7OztJQUt4QixzQ0FBZ0I7Ozs7O0lBS2hCLDBDQUFvQjs7Ozs7SUFLcEIsc0NBQWdCOzs7OztJQUtoQiwwQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDmjIflrpogYGlucHV0YCDnmoQgYHR5cGVgIOWAvO+8jOm7mOiupOS4uu+8mmB0ZXh0YFxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICog5paH5a2X5qGG5Lit5pi+56S65o+Q56S65L+h5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5Yqo5a6M5oiQ5Yqf6IO955qE6KGo5Y2VXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZic7XG5cbiAgLyoqXG4gICAqIOWKoOi9veaXtuaYr+WQpuiOt+W+l+eEpueCuVxuICAgKi9cbiAgYXV0b2ZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5YmN572u5qCH562+77yM562J5ZCMIGBuekFkZE9uQmVmb3JlYFxuICAgKi9cbiAgYWRkT25CZWZvcmU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWQjue9ruagh+etvu+8jOetieWQjCBgbnpBZGRPbkFmdGVyYFxuICAgKi9cbiAgYWRkT25BZnRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5YmN572uSWNvbu+8jOetieWQjCBgbnpBZGRPbkJlZm9yZUljb25gXG4gICAqL1xuICBhZGRPbkJlZm9yZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWQjue9rkljb27vvIznrYnlkIwgYG56QWRkT25BZnRlckljb25gXG4gICAqL1xuICBhZGRPbkFmdGVySWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICog5bim5pyJ5YmN57yA5Zu+5qCH55qEIGlucHV077yM562J5ZCMIGBuelByZWZpeGBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZztcblxuICAvKipcbiAgICog5YmN57yA5Zu+5qCH77yM562J5ZCMIGBuelByZWZpeEljb25gXG4gICAqL1xuICBwcmVmaXhJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDluKbmnInlkI7nvIDlm77moIfnmoQgaW5wdXTvvIznrYnlkIwgYG56U3VmZml4YFxuICAgKi9cbiAgc3VmZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlkI7nvIDlm77moIfvvIznrYnlkIwgYG56U3VmZml4SWNvbmBcbiAgICovXG4gIHN1ZmZpeEljb24/OiBzdHJpbmc7XG59XG4iXX0=