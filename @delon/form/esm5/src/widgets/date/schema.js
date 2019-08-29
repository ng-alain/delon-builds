/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9kYXRlL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0Esd0NBd0ZDOzs7SUF2RkMsa0NBQW9EOztJQUVwRCxrQ0FBaUI7O0lBRWpCLHlDQUFxQjs7Ozs7Ozs7OztJQVVyQixvQ0FBZ0I7Ozs7Ozs7SUFPaEIsMkNBQXVCOzs7OztJQUt2QixpQ0FBYTs7Ozs7SUFLYix3Q0FBcUI7Ozs7O0lBS3JCLHVDQUFtQjs7Ozs7SUFLbkIsb0NBQVk7Ozs7O0lBS1osd0NBQWdCOzs7OztJQUtoQiwrQ0FBMkI7Ozs7O0lBSzNCLDBDQUF5Qzs7Ozs7SUFLekMsMENBQThCOzs7OztJQUs5QiwwQ0FBOEI7Ozs7O0lBSzlCLCtDQUEyQjs7Ozs7SUFLM0Isc0NBQXdDOzs7OztJQUt4Qyx1Q0FBb0I7Ozs7O0lBS3BCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc2FibGVkVGltZUZuLCBEaXNhYmxlZERhdGVGbiwgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSwgU0ZETFNTaXplIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkRhdGVXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIG1vZGU/OiAnZGF0ZScgfCAnd2VlaycgfCAnbW9udGgnIHwgJ3llYXInIHwgJ3JhbmdlJztcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAqKkp1c3Qgb25seSBzdXBwb3J0IGRhdGUtZm5zKipcbiAgICpcbiAgICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdCwgW0FjY2VwdGVkIHRva2Vuc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvdjEuMzAuMS9kb2NzL2Zvcm1hdCksIGxpa2UgdGhpczpcbiAgICogLSBgWVlZWS1NTS1ERCBISDptbTpzc2AgRGF0ZSB0aW1lXG4gICAqIC0gYFhgIFNlY29uZHMgdGltZXN0YW1wXG4gICAqIC0gYHhgIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogVG8gc2V0IHRoZSBkYXRlIGZvcm1hdCAoZXF1YXIgW256Rm9ybWF0XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci96aCNhcGkpKVxuICAgKlxuICAgKiAqKlRJUFMqKiBbbnpGb3JtYXQgc3BlY2lhbCBpbnN0cnVjdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2VuI2FwaSlcbiAgICovXG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBlbmQgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZGF0ZSByYW5nZSBga2V5YCwgYSBkYXRlIHJhbmdlIFtkZW1vXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL2RhdGUvZW4jZm9ybS1kYXRlLXJhbmdlKS5cbiAgICovXG4gIGVuZD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IGNsZWFyIGJ1dHRvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUGlja2VyIGNsYXNzTmFtZVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMb2NhbGl6YXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgbG9jYWxlPzoge307XG5cbiAgLyoqXG4gICAqIFRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUgb2YgdGhlIHBvcHVwIGNhbGVuZGFyXG4gICAqL1xuICBwb3B1cFN0eWxlPzoge307XG5cbiAgLyoqXG4gICAqIFRvIGN1c3RvbWl6ZSB0aGUgY2xhc3NOYW1lIG9mIHRoZSBwb3B1cCBjYWxlbmRhclxuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZW1pdHRlciwgY2FuIGJlIGV4ZWN1dGVkIHdoZXRoZXIgdGhlIHBvcHVwIGNhbGVuZGFyIGlzIHBvcHBlZCB1cCBvciBjbG9zZWRcbiAgICovXG4gIG9uT3BlbkNoYW5nZT86IChzdGF0dXM6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGRhdGUgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICovXG4gIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuO1xuXG4gIC8qKlxuICAgKiBUbyBzcGVjaWZ5IHRoZSB0aW1lIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkLCBzdXBwb3J0IGNvbXBvbmVudHM6IGBuei1kYXRlLXBpY2tlcmAsIGBuei1yYW5nZS1waWNrZXJgXG4gICAqL1xuICBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcblxuICAvKipcbiAgICogUmVuZGVyIGV4dHJhIGZvb3RlciBpbiBwYW5lbCwgc3VwcG9ydCBjb21wb25lbnRzOiBgbnotZGF0ZS1waWNrZXJgLCBgbnotcmFuZ2UtcGlja2VyYCwgYG56LXllYXItcGlja2VyYCwgYG56LW1vbnRoLXBpY2tlcmBcbiAgICovXG4gIHJlbmRlckV4dHJhRm9vdGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUbyBwcm92aWRlIGFuIGFkZGl0aW9uYWwgdGltZSBzZWxlY3Rpb25cbiAgICovXG4gIHNob3dUaW1lPzogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IFwiVG9kYXlcIiBidXR0b24sIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgc2hvd1RvZGF5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiBjbGljayBvayBidXR0b25cbiAgICovXG4gIG9uT2s/OiAoZGF0YTogRGF0ZSB8IERhdGVbXSkgPT4gdm9pZDtcbn1cbiJdfQ==