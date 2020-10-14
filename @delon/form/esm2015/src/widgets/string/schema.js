/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/string/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * Whether hide border, Default: `false`
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.borderless;
    /**
     * 内容变更事件
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.change;
    /**
     * 焦点事件
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.focus;
    /**
     * 失焦事件
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.blur;
    /**
     * 回车事件
     * @type {?|undefined}
     */
    SFStringWidgetSchema.prototype.enter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3N0cmluZy9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwwQ0FxRkM7Ozs7OztJQWpGQyxvQ0FBYzs7Ozs7SUFLZCwyQ0FBcUI7Ozs7O0lBS3JCLDRDQUE0Qjs7Ozs7SUFLNUIseUNBQW9COzs7OztJQUtwQiwyQ0FBcUI7Ozs7O0lBS3JCLDBDQUFvQjs7Ozs7SUFLcEIsK0NBQXlCOzs7OztJQUt6Qiw4Q0FBd0I7Ozs7O0lBS3hCLHNDQUFnQjs7Ozs7SUFLaEIsMENBQW9COzs7OztJQUtwQixzQ0FBZ0I7Ozs7O0lBS2hCLDBDQUFvQjs7Ozs7SUFLcEIsMENBQXFCOzs7OztJQUtyQixzQ0FBK0I7Ozs7O0lBSy9CLHFDQUFnQzs7Ozs7SUFLaEMsb0NBQStCOzs7OztJQUsvQixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDmjIflrpogYGlucHV0YCDnmoQgYHR5cGVgIOWAvO+8jOm7mOiupOS4uu+8mmB0ZXh0YFxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICog5paH5a2X5qGG5Lit5pi+56S65o+Q56S65L+h5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5Yqo5a6M5oiQ5Yqf6IO955qE6KGo5Y2VXG4gICAqL1xuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZic7XG5cbiAgLyoqXG4gICAqIOWKoOi9veaXtuaYr+WQpuiOt+W+l+eEpueCuVxuICAgKi9cbiAgYXV0b2ZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5YmN572u5qCH562+77yM562J5ZCMIGBuekFkZE9uQmVmb3JlYFxuICAgKi9cbiAgYWRkT25CZWZvcmU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWQjue9ruagh+etvu+8jOetieWQjCBgbnpBZGRPbkFmdGVyYFxuICAgKi9cbiAgYWRkT25BZnRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5YmN572uSWNvbu+8jOetieWQjCBgbnpBZGRPbkJlZm9yZUljb25gXG4gICAqL1xuICBhZGRPbkJlZm9yZUljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWQjue9rkljb27vvIznrYnlkIwgYG56QWRkT25BZnRlckljb25gXG4gICAqL1xuICBhZGRPbkFmdGVySWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICog5bim5pyJ5YmN57yA5Zu+5qCH55qEIGlucHV077yM562J5ZCMIGBuelByZWZpeGBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZztcblxuICAvKipcbiAgICog5YmN57yA5Zu+5qCH77yM562J5ZCMIGBuelByZWZpeEljb25gXG4gICAqL1xuICBwcmVmaXhJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDluKbmnInlkI7nvIDlm77moIfnmoQgaW5wdXTvvIznrYnlkIwgYG56U3VmZml4YFxuICAgKi9cbiAgc3VmZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlkI7nvIDlm77moIfvvIznrYnlkIwgYG56U3VmZml4SWNvbmBcbiAgICovXG4gIHN1ZmZpeEljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaGlkZSBib3JkZXIsIERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlhoXlrrnlj5jmm7Tkuovku7ZcbiAgICovXG4gIGNoYW5nZT86ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcblxuICAvKipcbiAgICog54Sm54K55LqL5Lu2XG4gICAqL1xuICBmb2N1cz86IChlOiBGb2N1c0V2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDlpLHnhKbkuovku7ZcbiAgICovXG4gIGJsdXI/OiAoZTogRm9jdXNFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5Zue6L2m5LqL5Lu2XG4gICAqL1xuICBlbnRlcj86IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xufVxuIl19