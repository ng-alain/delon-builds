/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90aW1lL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsd0NBc0ZDOzs7SUFyRkMsa0NBQWlCOztJQUVqQix5Q0FBcUI7Ozs7Ozs7Ozs7SUFVckIsb0NBQWdCOzs7Ozs7O0lBT2hCLDJDQUF1Qjs7Ozs7SUFLdkIsc0NBQW1COzs7OztJQUtuQix3Q0FBcUI7Ozs7O0lBS3JCLHVDQUFtQjs7Ozs7SUFLbkIsOENBQXdCOzs7OztJQUt4QiwyQ0FBK0I7Ozs7O0lBSy9CLDZDQUE2Qzs7Ozs7SUFLN0MsNkNBQTZEOzs7OztJQUs3RCxpREFBOEI7Ozs7O0lBSzlCLHdDQUFxQjs7Ozs7SUFLckIsc0NBQWtCOzs7OztJQUtsQix3Q0FBb0I7Ozs7O0lBS3BCLHdDQUFvQjs7Ozs7SUFLcEIsNENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0sIFNGRExTU2l6ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZUaW1lV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAqKkp1c3Qgb25seSBzdXBwb3J0IGRhdGUtZm5zKipcbiAgICpcbiAgICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdCwgW0FjY2VwdGVkIHRva2Vuc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvdjEuMzAuMS9kb2NzL2Zvcm1hdCksIGxpa2UgdGhpczpcbiAgICogLSBgWVlZWS1NTS1ERCBISDptbTpzc2AgRGF0ZSB0aW1lXG4gICAqIC0gYFhgIFNlY29uZHMgdGltZXN0YW1wXG4gICAqIC0gYHhgIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogVG8gc2V0IHRoZSBkYXRlIGZvcm1hdCAoZXF1YXIgW256Rm9ybWF0XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci96aCNhcGkpKVxuICAgKlxuICAgKiAqKlRJUFMqKiBbbnpGb3JtYXQgc3BlY2lhbCBpbnN0cnVjdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2VuI2FwaSlcbiAgICovXG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQplVUQ+aWsOe6quWFg++8iOihqOekuuS7jiBgMTk3MGAg5byA5aeL6K6h5q+r56eS5pWw77yJ77yM5b2TIGB0eXBlPSdudW1iZXInYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB1dGNFcG9jaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93IGNsZWFyaW5nIHRleHQsIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgYWxsb3dFbXB0eT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENsZWFyIHRvb2x0aXAgb2YgaWNvbiwgZGVmYXVsdDogYOa4hemZpGBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogRGVmYXVsdCBvcGVuIHBhbmVsIHZhbHVlLCBkZWZhdWx0OiBgbmV3IERhdGUoKWBcbiAgICovXG4gIGRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUbyBzcGVjaWZ5IHRoZSBob3VycyB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgKi9cbiAgZGlzYWJsZWRIb3Vycz86ICgpID0+IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBUbyBzcGVjaWZ5IHRoZSBtaW51dGVzIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkXG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcblxuICAvKipcbiAgICogVG8gc3BlY2lmeSB0aGUgc2Vjb25kcyB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgKi9cbiAgZGlzYWJsZWRTZWNvbmRzPzogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBvcHRpb25zIHRoYXQgY2FuIG5vdCBiZSBzZWxlY3RlZCwgZGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgaGlkZURpc2FibGVkT3B0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYXMgMTIgaG91cnMgZm9ybWF0LCB3aXRoIGRlZmF1bHQgZm9ybWF0LCBkZWZhdWx0OiBgaDptbTpzcyBhYFxuICAgKi9cbiAgdXNlMTJIb3Vycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEludGVydmFsIGJldHdlZW4gaG91cnMgaW4gcGlja2VyLCBkZWZhdWx0OiBgMWBcbiAgICovXG4gIGhvdXJTdGVwPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbnRlcnZhbCBiZXR3ZWVuIG1pbnV0ZXMgaW4gcGlja2VyLCBkZWZhdWx0OiBgMWBcbiAgICovXG4gIG1pbnV0ZVN0ZXA/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludGVydmFsIGJldHdlZW4gc2Vjb25kcyBpbiBwaWNrZXIsIGRlZmF1bHQ6IGAxYFxuICAgKi9cbiAgc2Vjb25kU3RlcD86IG51bWJlcjtcblxuICAvKipcbiAgICogQ2xhc3NOYW1lIG9mIHBhbmVsXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZztcbn1cbiJdfQ==