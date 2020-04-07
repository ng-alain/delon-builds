/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFDateWidgetSchema() { }
if (false) {
    /** @type {?|undefined} */
    SFDateWidgetSchema.prototype.mode;
    /** @type {?|undefined} */
    SFDateWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFDateWidgetSchema.prototype.placeholder;
    /**
     * **Just only support date-fns**
     *
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v1.30.1/docs/format), like this:
     * - `YYYY-MM-DD HH:mm:ss` Date time
     * - `X` Seconds timestamp
     * - `x` Milliseconds timestamp
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.format;
    /**
     * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
     *
     * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.displayFormat;
    /**
     * The end value corresponding to the date range `key`, a date range [demo](https://ng-alain.com/form/date/en#form-date-range).
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.end;
    /**
     * Whether to show clear button, default: `true`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.allowClear;
    /**
     * Picker className
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.className;
    /**
     * Localization configuration
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.locale;
    /**
     * To customize the style of the popup calendar
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.popupStyle;
    /**
     * To customize the className of the popup calendar
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.dropdownClassName;
    /**
     * A callback emitter, can be executed whether the popup calendar is popped up or closed
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.onOpenChange;
    /**
     * Specify the date that cannot be selected
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.disabledDate;
    /**
     * To specify the time that cannot be selected, support components: `nz-date-picker`, `nz-range-picker`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.disabledTime;
    /**
     * Render extra footer in panel, support components: `nz-date-picker`, `nz-range-picker`, `nz-year-picker`, `nz-month-picker`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.renderExtraFooter;
    /**
     * To provide an additional time selection
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.showTime;
    /**
     * Whether to show "Today" button, default: `true`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.showToday;
    /**
     * Callback when click ok button
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.onOk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9kYXRlL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLHdDQXdGQzs7O0lBdkZDLGtDQUFvRDs7SUFFcEQsa0NBQWlCOztJQUVqQix5Q0FBcUI7Ozs7Ozs7Ozs7SUFVckIsb0NBQWdCOzs7Ozs7O0lBT2hCLDJDQUF1Qjs7Ozs7SUFLdkIsaUNBQWE7Ozs7O0lBS2Isd0NBQXFCOzs7OztJQUtyQix1Q0FBbUI7Ozs7O0lBS25CLG9DQUFZOzs7OztJQUtaLHdDQUFnQjs7Ozs7SUFLaEIsK0NBQTJCOzs7OztJQUszQiwwQ0FBeUM7Ozs7O0lBS3pDLDBDQUE4Qjs7Ozs7SUFLOUIsMENBQThCOzs7OztJQUs5QiwrQ0FBMkI7Ozs7O0lBSzNCLHNDQUF3Qzs7Ozs7SUFLeEMsdUNBQW9COzs7OztJQUtwQixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgRGlzYWJsZWREYXRlRm4sIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0sIFNGRExTU2l6ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZEYXRlV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICBtb2RlPzogJ2RhdGUnIHwgJ3dlZWsnIHwgJ21vbnRoJyB8ICd5ZWFyJyB8ICdyYW5nZSc7XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogKipKdXN0IG9ubHkgc3VwcG9ydCBkYXRlLWZucyoqXG4gICAqXG4gICAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQsIFtBY2NlcHRlZCB0b2tlbnNdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL3YxLjMwLjEvZG9jcy9mb3JtYXQpLCBsaWtlIHRoaXM6XG4gICAqIC0gYFlZWVktTU0tREQgSEg6bW06c3NgIERhdGUgdGltZVxuICAgKiAtIGBYYCBTZWNvbmRzIHRpbWVzdGFtcFxuICAgKiAtIGB4YCBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gICAqL1xuICBmb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvIHNldCB0aGUgZGF0ZSBmb3JtYXQgKGVxdWFyIFtuekZvcm1hdF0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvemgjYXBpKSlcbiAgICpcbiAgICogKipUSVBTKiogW256Rm9ybWF0IHNwZWNpYWwgaW5zdHJ1Y3Rpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci9lbiNhcGkpXG4gICAqL1xuICBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZW5kIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRhdGUgcmFuZ2UgYGtleWAsIGEgZGF0ZSByYW5nZSBbZGVtb10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9kYXRlL2VuI2Zvcm0tZGF0ZS1yYW5nZSkuXG4gICAqL1xuICBlbmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjbGVhciBidXR0b24sIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBpY2tlciBjbGFzc05hbWVcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTG9jYWxpemF0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGxvY2FsZT86IHt9O1xuXG4gIC8qKlxuICAgKiBUbyBjdXN0b21pemUgdGhlIHN0eWxlIG9mIHRoZSBwb3B1cCBjYWxlbmRhclxuICAgKi9cbiAgcG9wdXBTdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiBUbyBjdXN0b21pemUgdGhlIGNsYXNzTmFtZSBvZiB0aGUgcG9wdXAgY2FsZW5kYXJcbiAgICovXG4gIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGVtaXR0ZXIsIGNhbiBiZSBleGVjdXRlZCB3aGV0aGVyIHRoZSBwb3B1cCBjYWxlbmRhciBpcyBwb3BwZWQgdXAgb3IgY2xvc2VkXG4gICAqL1xuICBvbk9wZW5DaGFuZ2U/OiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBkYXRlIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkXG4gICAqL1xuICBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbjtcblxuICAvKipcbiAgICogVG8gc3BlY2lmeSB0aGUgdGltZSB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZCwgc3VwcG9ydCBjb21wb25lbnRzOiBgbnotZGF0ZS1waWNrZXJgLCBgbnotcmFuZ2UtcGlja2VyYFxuICAgKi9cbiAgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47XG5cbiAgLyoqXG4gICAqIFJlbmRlciBleHRyYSBmb290ZXIgaW4gcGFuZWwsIHN1cHBvcnQgY29tcG9uZW50czogYG56LWRhdGUtcGlja2VyYCwgYG56LXJhbmdlLXBpY2tlcmAsIGBuei15ZWFyLXBpY2tlcmAsIGBuei1tb250aC1waWNrZXJgXG4gICAqL1xuICByZW5kZXJFeHRyYUZvb3Rlcj86IHN0cmluZztcblxuICAvKipcbiAgICogVG8gcHJvdmlkZSBhbiBhZGRpdGlvbmFsIHRpbWUgc2VsZWN0aW9uXG4gICAqL1xuICBzaG93VGltZT86IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBcIlRvZGF5XCIgYnV0dG9uLCBkZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIHNob3dUb2RheT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHdoZW4gY2xpY2sgb2sgYnV0dG9uXG4gICAqL1xuICBvbk9rPzogKGRhdGE6IERhdGUgfCBEYXRlW10pID0+IHZvaWQ7XG59XG4iXX0=