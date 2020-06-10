/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/time/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTimeWidgetSchema() { }
if (false) {
    /** @type {?|undefined} */
    SFTimeWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFTimeWidgetSchema.prototype.placeholder;
    /**
     * **Just only support date-fns**
     *
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v2.12.0/docs/format), like this:
     * - `yyyy-MM-dd HH:mm:ss` Date time
     * - `t` Seconds timestamp
     * - `T` Milliseconds timestamp
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.format;
    /**
     * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
     *
     * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.displayFormat;
    /**
     * 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效，默认：`false`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.utcEpoch;
    /**
     * Allow clearing text, default: `true`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.allowEmpty;
    /**
     * Clear tooltip of icon, default: `清除`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.clearText;
    /**
     * Default open panel value, default: `new Date()`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.defaultOpenValue;
    /**
     * To specify the hours that cannot be selected
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledHours;
    /**
     * To specify the minutes that cannot be selected
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledMinutes;
    /**
     * To specify the seconds that cannot be selected
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledSeconds;
    /**
     * Hide the options that can not be selected, default: `false`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.hideDisabledOptions;
    /**
     * Display as 12 hours format, with default format, default: `h:mm:ss a`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.use12Hours;
    /**
     * Interval between hours in picker, default: `1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.hourStep;
    /**
     * Interval between minutes in picker, default: `1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.minuteStep;
    /**
     * Interval between seconds in picker, default: `1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.secondStep;
    /**
     * ClassName of panel
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.popupClassName;
    /**
     * a callback function, can be executed when the selected time is changing
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.change;
    /**
     * a callback function which will be called while panel opening/closing
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.openChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90aW1lL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHdDQWdHQzs7O0lBL0ZDLGtDQUFpQjs7SUFFakIseUNBQXFCOzs7Ozs7Ozs7O0lBVXJCLG9DQUFnQjs7Ozs7OztJQU9oQiwyQ0FBdUI7Ozs7O0lBS3ZCLHNDQUFtQjs7Ozs7SUFLbkIsd0NBQXFCOzs7OztJQUtyQix1Q0FBbUI7Ozs7O0lBS25CLDhDQUF3Qjs7Ozs7SUFLeEIsMkNBQStCOzs7OztJQUsvQiw2Q0FBNkM7Ozs7O0lBSzdDLDZDQUE2RDs7Ozs7SUFLN0QsaURBQThCOzs7OztJQUs5Qix3Q0FBcUI7Ozs7O0lBS3JCLHNDQUFrQjs7Ozs7SUFLbEIsd0NBQW9COzs7OztJQUtwQix3Q0FBb0I7Ozs7O0lBS3BCLDRDQUF3Qjs7Ozs7SUFLeEIsb0NBQXNDOzs7OztJQUt0Qyx3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRkRMU1NpemUsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlRpbWVXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIHNpemU/OiBTRkRMU1NpemU7XG5cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICoqSnVzdCBvbmx5IHN1cHBvcnQgZGF0ZS1mbnMqKlxuICAgKlxuICAgKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LCBbQWNjZXB0ZWQgdG9rZW5zXShodHRwczovL2RhdGUtZm5zLm9yZy92Mi4xMi4wL2RvY3MvZm9ybWF0KSwgbGlrZSB0aGlzOlxuICAgKiAtIGB5eXl5LU1NLWRkIEhIOm1tOnNzYCBEYXRlIHRpbWVcbiAgICogLSBgdGAgU2Vjb25kcyB0aW1lc3RhbXBcbiAgICogLSBgVGAgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICAgKi9cbiAgZm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUbyBzZXQgdGhlIGRhdGUgZm9ybWF0IChlcXVhciBbbnpGb3JtYXRdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RhdGUtcGlja2VyL3poI2FwaSkpXG4gICAqXG4gICAqICoqVElQUyoqIFtuekZvcm1hdCBzcGVjaWFsIGluc3RydWN0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZW4jYXBpKVxuICAgKi9cbiAgZGlzcGxheUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCmVVRD5paw57qq5YWD77yI6KGo56S65LuOIGAxOTcwYCDlvIDlp4vorqHmr6vnp5LmlbDvvInvvIzlvZMgYHR5cGU9J251bWJlcidgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHV0Y0Vwb2NoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWxsb3cgY2xlYXJpbmcgdGV4dCwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBhbGxvd0VtcHR5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ2xlYXIgdG9vbHRpcCBvZiBpY29uLCBkZWZhdWx0OiBg5riF6ZmkYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG9wZW4gcGFuZWwgdmFsdWUsIGRlZmF1bHQ6IGBuZXcgRGF0ZSgpYFxuICAgKi9cbiAgZGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG5cbiAgLyoqXG4gICAqIFRvIHNwZWNpZnkgdGhlIGhvdXJzIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkXG4gICAqL1xuICBkaXNhYmxlZEhvdXJzPzogKCkgPT4gbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFRvIHNwZWNpZnkgdGhlIG1pbnV0ZXMgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICovXG4gIGRpc2FibGVkTWludXRlcz86IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBUbyBzcGVjaWZ5IHRoZSBzZWNvbmRzIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkXG4gICAqL1xuICBkaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIG9wdGlvbnMgdGhhdCBjYW4gbm90IGJlIHNlbGVjdGVkLCBkZWZhdWx0OiBgZmFsc2VgXG4gICAqL1xuICBoaWRlRGlzYWJsZWRPcHRpb25zPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzcGxheSBhcyAxMiBob3VycyBmb3JtYXQsIHdpdGggZGVmYXVsdCBmb3JtYXQsIGRlZmF1bHQ6IGBoOm1tOnNzIGFgXG4gICAqL1xuICB1c2UxMkhvdXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBob3VycyBpbiBwaWNrZXIsIGRlZmF1bHQ6IGAxYFxuICAgKi9cbiAgaG91clN0ZXA/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludGVydmFsIGJldHdlZW4gbWludXRlcyBpbiBwaWNrZXIsIGRlZmF1bHQ6IGAxYFxuICAgKi9cbiAgbWludXRlU3RlcD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBzZWNvbmRzIGluIHBpY2tlciwgZGVmYXVsdDogYDFgXG4gICAqL1xuICBzZWNvbmRTdGVwPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDbGFzc05hbWUgb2YgcGFuZWxcbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBjYW4gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgc2VsZWN0ZWQgdGltZSBpcyBjaGFuZ2luZ1xuICAgKi9cbiAgY2hhbmdlPzogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogYSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCB3aGlsZSBwYW5lbCBvcGVuaW5nL2Nsb3NpbmdcbiAgICovXG4gIG9wZW5DaGFuZ2U/OiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xufVxuIl19