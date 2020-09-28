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
    /**
     * Date change callback
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0Esd0NBNkZDOzs7SUE1RkMsa0NBQW9EOztJQUVwRCxrQ0FBaUI7O0lBRWpCLHlDQUFxQjs7Ozs7Ozs7OztJQVVyQixvQ0FBZ0I7Ozs7Ozs7SUFPaEIsMkNBQXVCOzs7OztJQUt2QixpQ0FBYTs7Ozs7SUFLYix3Q0FBcUI7Ozs7O0lBS3JCLHVDQUFtQjs7Ozs7SUFLbkIsb0NBQVk7Ozs7O0lBS1osd0NBQWdCOzs7OztJQUtoQiwrQ0FBMkI7Ozs7O0lBSzNCLDBDQUF5Qzs7Ozs7SUFLekMsMENBQThCOzs7OztJQUs5QiwwQ0FBOEI7Ozs7O0lBSzlCLCtDQUEyQjs7Ozs7SUFLM0Isc0NBQXdDOzs7OztJQUt4Qyx1Q0FBb0I7Ozs7O0lBS3BCLGtDQUFxQzs7Ozs7SUFLckMsb0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUZuLCBTdXBwb3J0VGltZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFNGRExTU2l6ZSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGRGF0ZVdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgbW9kZT86ICdkYXRlJyB8ICd3ZWVrJyB8ICdtb250aCcgfCAneWVhcicgfCAncmFuZ2UnO1xuXG4gIHNpemU/OiBTRkRMU1NpemU7XG5cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICoqSnVzdCBvbmx5IHN1cHBvcnQgZGF0ZS1mbnMqKlxuICAgKlxuICAgKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LCBbQWNjZXB0ZWQgdG9rZW5zXShodHRwczovL2RhdGUtZm5zLm9yZy92Mi4xMi4wL2RvY3MvZm9ybWF0KSwgbGlrZSB0aGlzOlxuICAgKiAtIGB5eXl5LU1NLWRkIEhIOm1tOnNzYCBEYXRlIHRpbWVcbiAgICogLSBgdGAgU2Vjb25kcyB0aW1lc3RhbXBcbiAgICogLSBgVGAgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICAgKi9cbiAgZm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUbyBzZXQgdGhlIGRhdGUgZm9ybWF0IChlcXVhciBbbnpGb3JtYXRdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RhdGUtcGlja2VyL3poI2FwaSkpXG4gICAqXG4gICAqICoqVElQUyoqIFtuekZvcm1hdCBzcGVjaWFsIGluc3RydWN0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZW4jYXBpKVxuICAgKi9cbiAgZGlzcGxheUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGVuZCB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkYXRlIHJhbmdlIGBrZXlgLCBhIGRhdGUgcmFuZ2UgW2RlbW9dKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vZGF0ZS9lbiNmb3JtLWRhdGUtcmFuZ2UpLlxuICAgKi9cbiAgZW5kPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgY2xlYXIgYnV0dG9uLCBkZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQaWNrZXIgY2xhc3NOYW1lXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExvY2FsaXphdGlvbiBjb25maWd1cmF0aW9uXG4gICAqL1xuICBsb2NhbGU/OiB7fTtcblxuICAvKipcbiAgICogVG8gY3VzdG9taXplIHRoZSBzdHlsZSBvZiB0aGUgcG9wdXAgY2FsZW5kYXJcbiAgICovXG4gIHBvcHVwU3R5bGU/OiB7fTtcblxuICAvKipcbiAgICogVG8gY3VzdG9taXplIHRoZSBjbGFzc05hbWUgb2YgdGhlIHBvcHVwIGNhbGVuZGFyXG4gICAqL1xuICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBlbWl0dGVyLCBjYW4gYmUgZXhlY3V0ZWQgd2hldGhlciB0aGUgcG9wdXAgY2FsZW5kYXIgaXMgcG9wcGVkIHVwIG9yIGNsb3NlZFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlPzogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgZGF0ZSB0aGF0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgKi9cbiAgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XG5cbiAgLyoqXG4gICAqIFRvIHNwZWNpZnkgdGhlIHRpbWUgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWQsIHN1cHBvcnQgY29tcG9uZW50czogYG56LWRhdGUtcGlja2VyYCwgYG56LXJhbmdlLXBpY2tlcmBcbiAgICovXG4gIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgZXh0cmEgZm9vdGVyIGluIHBhbmVsLCBzdXBwb3J0IGNvbXBvbmVudHM6IGBuei1kYXRlLXBpY2tlcmAsIGBuei1yYW5nZS1waWNrZXJgLCBgbnoteWVhci1waWNrZXJgLCBgbnotbW9udGgtcGlja2VyYFxuICAgKi9cbiAgcmVuZGVyRXh0cmFGb290ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvIHByb3ZpZGUgYW4gYWRkaXRpb25hbCB0aW1lIHNlbGVjdGlvblxuICAgKi9cbiAgc2hvd1RpbWU/OiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgXCJUb2RheVwiIGJ1dHRvbiwgZGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBzaG93VG9kYXk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB3aGVuIGNsaWNrIG9rIGJ1dHRvblxuICAgKi9cbiAgb25Paz86IChkYXRhOiBEYXRlIHwgRGF0ZVtdKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEYXRlIGNoYW5nZSBjYWxsYmFja1xuICAgKi9cbiAgY2hhbmdlPzogKGRhdGE6IERhdGUgfCBEYXRlW10gfCBudWxsKSA9PiB2b2lkO1xufVxuIl19