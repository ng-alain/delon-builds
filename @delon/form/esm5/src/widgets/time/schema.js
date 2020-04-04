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
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v1.30.1/docs/format), like this:
     * - `YYYY-MM-DD HH:mm:ss` Date time
     * - `X` Seconds timestamp
     * - `x` Milliseconds timestamp
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90aW1lL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHdDQXNGQzs7O0lBckZDLGtDQUFpQjs7SUFFakIseUNBQXFCOzs7Ozs7Ozs7O0lBVXJCLG9DQUFnQjs7Ozs7OztJQU9oQiwyQ0FBdUI7Ozs7O0lBS3ZCLHNDQUFtQjs7Ozs7SUFLbkIsd0NBQXFCOzs7OztJQUtyQix1Q0FBbUI7Ozs7O0lBS25CLDhDQUF3Qjs7Ozs7SUFLeEIsMkNBQStCOzs7OztJQUsvQiw2Q0FBNkM7Ozs7O0lBSzdDLDZDQUE2RDs7Ozs7SUFLN0QsaURBQThCOzs7OztJQUs5Qix3Q0FBcUI7Ozs7O0lBS3JCLHNDQUFrQjs7Ozs7SUFLbEIsd0NBQW9COzs7OztJQUtwQix3Q0FBb0I7Ozs7O0lBS3BCLDRDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGRExTU2l6ZSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGVGltZVdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogKipKdXN0IG9ubHkgc3VwcG9ydCBkYXRlLWZucyoqXG4gICAqXG4gICAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQsIFtBY2NlcHRlZCB0b2tlbnNdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL3YxLjMwLjEvZG9jcy9mb3JtYXQpLCBsaWtlIHRoaXM6XG4gICAqIC0gYFlZWVktTU0tREQgSEg6bW06c3NgIERhdGUgdGltZVxuICAgKiAtIGBYYCBTZWNvbmRzIHRpbWVzdGFtcFxuICAgKiAtIGB4YCBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gICAqL1xuICBmb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvIHNldCB0aGUgZGF0ZSBmb3JtYXQgKGVxdWFyIFtuekZvcm1hdF0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvemgjYXBpKSlcbiAgICpcbiAgICogKipUSVBTKiogW256Rm9ybWF0IHNwZWNpYWwgaW5zdHJ1Y3Rpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci9lbiNhcGkpXG4gICAqL1xuICBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKZVVEPmlrDnuqrlhYPvvIjooajnpLrku44gYDE5NzBgIOW8gOWni+iuoeavq+enkuaVsO+8ie+8jOW9kyBgdHlwZT0nbnVtYmVyJ2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgdXRjRXBvY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBjbGVhcmluZyB0ZXh0LCBkZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIGFsbG93RW1wdHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDbGVhciB0b29sdGlwIG9mIGljb24sIGRlZmF1bHQ6IGDmuIXpmaRgXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3BlbiBwYW5lbCB2YWx1ZSwgZGVmYXVsdDogYG5ldyBEYXRlKClgXG4gICAqL1xuICBkZWZhdWx0T3BlblZhbHVlPzogRGF0ZTtcblxuICAvKipcbiAgICogVG8gc3BlY2lmeSB0aGUgaG91cnMgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICovXG4gIGRpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXTtcblxuICAvKipcbiAgICogVG8gc3BlY2lmeSB0aGUgbWludXRlcyB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgKi9cbiAgZGlzYWJsZWRNaW51dGVzPzogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFRvIHNwZWNpZnkgdGhlIHNlY29uZHMgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICovXG4gIGRpc2FibGVkU2Vjb25kcz86IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcblxuICAvKipcbiAgICogSGlkZSB0aGUgb3B0aW9ucyB0aGF0IGNhbiBub3QgYmUgc2VsZWN0ZWQsIGRlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIGhpZGVEaXNhYmxlZE9wdGlvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGFzIDEyIGhvdXJzIGZvcm1hdCwgd2l0aCBkZWZhdWx0IGZvcm1hdCwgZGVmYXVsdDogYGg6bW06c3MgYWBcbiAgICovXG4gIHVzZTEySG91cnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbnRlcnZhbCBiZXR3ZWVuIGhvdXJzIGluIHBpY2tlciwgZGVmYXVsdDogYDFgXG4gICAqL1xuICBob3VyU3RlcD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBtaW51dGVzIGluIHBpY2tlciwgZGVmYXVsdDogYDFgXG4gICAqL1xuICBtaW51dGVTdGVwPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbnRlcnZhbCBiZXR3ZWVuIHNlY29uZHMgaW4gcGlja2VyLCBkZWZhdWx0OiBgMWBcbiAgICovXG4gIHNlY29uZFN0ZXA/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENsYXNzTmFtZSBvZiBwYW5lbFxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU/OiBzdHJpbmc7XG59XG4iXX0=