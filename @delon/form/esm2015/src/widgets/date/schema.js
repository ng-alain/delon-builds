/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/date/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v2.12.0/docs/format), like this:
     * - `yyyy-MM-dd HH:mm:ss` Date time
     * - `t` Seconds timestamp
     * - `T` Milliseconds timestamp
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
     * Set picker mode of range picker, default: `date`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.rangeMode;
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
     * Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices), default: `false`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.inputReadOnly;
    /**
     * Callback when click ok button
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.onOk;
    /**
     * Date change callback
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0Esd0NBdUdDOzs7SUF0R0Msa0NBQW9EOztJQUVwRCxrQ0FBaUI7O0lBRWpCLHlDQUFxQjs7Ozs7Ozs7OztJQVVyQixvQ0FBZ0I7Ozs7Ozs7SUFPaEIsMkNBQXVCOzs7OztJQUt2QixpQ0FBYTs7Ozs7SUFLYix3Q0FBcUI7Ozs7O0lBS3JCLHVDQUFtQjs7Ozs7SUFLbkIsb0NBQVk7Ozs7O0lBS1osd0NBQWdCOzs7OztJQUtoQiwrQ0FBMkI7Ozs7O0lBSzNCLHVDQUErQzs7Ozs7SUFLL0MsMENBQXlDOzs7OztJQUt6QywwQ0FBOEI7Ozs7O0lBSzlCLDBDQUE4Qjs7Ozs7SUFLOUIsK0NBQTJCOzs7OztJQUszQixzQ0FBd0M7Ozs7O0lBS3hDLHVDQUFvQjs7Ozs7SUFLcEIsMkNBQXdCOzs7OztJQUt4QixrQ0FBcUM7Ozs7O0lBS3JDLG9DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc2FibGVkRGF0ZUZuLCBEaXNhYmxlZFRpbWVGbiwgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBTRkRMU1NpemUsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkRhdGVXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIG1vZGU/OiAnZGF0ZScgfCAnd2VlaycgfCAnbW9udGgnIHwgJ3llYXInIHwgJ3JhbmdlJztcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAqKkp1c3Qgb25seSBzdXBwb3J0IGRhdGUtZm5zKipcbiAgICpcbiAgICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdCwgW0FjY2VwdGVkIHRva2Vuc10oaHR0cHM6Ly9kYXRlLWZucy5vcmcvdjIuMTIuMC9kb2NzL2Zvcm1hdCksIGxpa2UgdGhpczpcbiAgICogLSBgeXl5eS1NTS1kZCBISDptbTpzc2AgRGF0ZSB0aW1lXG4gICAqIC0gYHRgIFNlY29uZHMgdGltZXN0YW1wXG4gICAqIC0gYFRgIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogVG8gc2V0IHRoZSBkYXRlIGZvcm1hdCAoZXF1YXIgW256Rm9ybWF0XShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci96aCNhcGkpKVxuICAgKlxuICAgKiAqKlRJUFMqKiBbbnpGb3JtYXQgc3BlY2lhbCBpbnN0cnVjdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2VuI2FwaSlcbiAgICovXG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBlbmQgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZGF0ZSByYW5nZSBga2V5YCwgYSBkYXRlIHJhbmdlIFtkZW1vXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL2RhdGUvZW4jZm9ybS1kYXRlLXJhbmdlKS5cbiAgICovXG4gIGVuZD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IGNsZWFyIGJ1dHRvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUGlja2VyIGNsYXNzTmFtZVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMb2NhbGl6YXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgbG9jYWxlPzoge307XG5cbiAgLyoqXG4gICAqIFRvIGN1c3RvbWl6ZSB0aGUgc3R5bGUgb2YgdGhlIHBvcHVwIGNhbGVuZGFyXG4gICAqL1xuICBwb3B1cFN0eWxlPzoge307XG5cbiAgLyoqXG4gICAqIFRvIGN1c3RvbWl6ZSB0aGUgY2xhc3NOYW1lIG9mIHRoZSBwb3B1cCBjYWxlbmRhclxuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBwaWNrZXIgbW9kZSBvZiByYW5nZSBwaWNrZXIsIGRlZmF1bHQ6IGBkYXRlYFxuICAgKi9cbiAgcmFuZ2VNb2RlPzogJ2RhdGUnIHwgJ3dlZWsnIHwgJ21vbnRoJyB8ICd5ZWFyJztcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBlbWl0dGVyLCBjYW4gYmUgZXhlY3V0ZWQgd2hldGhlciB0aGUgcG9wdXAgY2FsZW5kYXIgaXMgcG9wcGVkIHVwIG9yIGNsb3NlZFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlPzogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgZGF0ZSB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgKi9cbiAgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XG5cbiAgLyoqXG4gICAqIFRvIHNwZWNpZnkgdGhlIHRpbWUgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWQsIHN1cHBvcnQgY29tcG9uZW50czogYG56LWRhdGUtcGlja2VyYCwgYG56LXJhbmdlLXBpY2tlcmBcbiAgICovXG4gIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgZXh0cmEgZm9vdGVyIGluIHBhbmVsLCBzdXBwb3J0IGNvbXBvbmVudHM6IGBuei1kYXRlLXBpY2tlcmAsIGBuei1yYW5nZS1waWNrZXJgLCBgbnoteWVhci1waWNrZXJgLCBgbnotbW9udGgtcGlja2VyYFxuICAgKi9cbiAgcmVuZGVyRXh0cmFGb290ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvIHByb3ZpZGUgYW4gYWRkaXRpb25hbCB0aW1lIHNlbGVjdGlvblxuICAgKi9cbiAgc2hvd1RpbWU/OiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgXCJUb2RheVwiIGJ1dHRvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBzaG93VG9kYXk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlYWRvbmx5IGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQgdGFnIChhdm9pZHMgdmlydHVhbCBrZXlib2FyZCBvbiB0b3VjaCBkZXZpY2VzKSwgZGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgaW5wdXRSZWFkT25seT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHdoZW4gY2xpY2sgb2sgYnV0dG9uXG4gICAqL1xuICBvbk9rPzogKGRhdGE6IERhdGUgfCBEYXRlW10pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERhdGUgY2hhbmdlIGNhbGxiYWNrXG4gICAqL1xuICBjaGFuZ2U/OiAoZGF0YTogRGF0ZSB8IERhdGVbXSB8IG51bGwpID0+IHZvaWQ7XG59XG4iXX0=