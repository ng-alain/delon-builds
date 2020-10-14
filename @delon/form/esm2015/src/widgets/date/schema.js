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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2RhdGUvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0Esd0NBa0dDOzs7SUFqR0Msa0NBQW9EOztJQUVwRCxrQ0FBaUI7O0lBRWpCLHlDQUFxQjs7Ozs7Ozs7OztJQVVyQixvQ0FBZ0I7Ozs7Ozs7SUFPaEIsMkNBQXVCOzs7OztJQUt2QixpQ0FBYTs7Ozs7SUFLYix3Q0FBcUI7Ozs7O0lBS3JCLHVDQUFtQjs7Ozs7SUFLbkIsb0NBQVk7Ozs7O0lBS1osd0NBQWdCOzs7OztJQUtoQiwrQ0FBMkI7Ozs7O0lBSzNCLHVDQUErQzs7Ozs7SUFLL0MsMENBQXlDOzs7OztJQUt6QywwQ0FBOEI7Ozs7O0lBSzlCLDBDQUE4Qjs7Ozs7SUFLOUIsK0NBQTJCOzs7OztJQUszQixzQ0FBd0M7Ozs7O0lBS3hDLHVDQUFvQjs7Ozs7SUFLcEIsa0NBQXFDOzs7OztJQUtyQyxvQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lRm4sIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgU0ZETFNTaXplLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZEYXRlV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICBtb2RlPzogJ2RhdGUnIHwgJ3dlZWsnIHwgJ21vbnRoJyB8ICd5ZWFyJyB8ICdyYW5nZSc7XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICogKipKdXN0IG9ubHkgc3VwcG9ydCBkYXRlLWZucyoqXG4gICAqXG4gICAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQsIFtBY2NlcHRlZCB0b2tlbnNdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL3YyLjEyLjAvZG9jcy9mb3JtYXQpLCBsaWtlIHRoaXM6XG4gICAqIC0gYHl5eXktTU0tZGQgSEg6bW06c3NgIERhdGUgdGltZVxuICAgKiAtIGB0YCBTZWNvbmRzIHRpbWVzdGFtcFxuICAgKiAtIGBUYCBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gICAqL1xuICBmb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvIHNldCB0aGUgZGF0ZSBmb3JtYXQgKGVxdWFyIFtuekZvcm1hdF0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvemgjYXBpKSlcbiAgICpcbiAgICogKipUSVBTKiogW256Rm9ybWF0IHNwZWNpYWwgaW5zdHJ1Y3Rpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kYXRlLXBpY2tlci9lbiNhcGkpXG4gICAqL1xuICBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZW5kIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRhdGUgcmFuZ2UgYGtleWAsIGEgZGF0ZSByYW5nZSBbZGVtb10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9kYXRlL2VuI2Zvcm0tZGF0ZS1yYW5nZSkuXG4gICAqL1xuICBlbmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBjbGVhciBidXR0b24sIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBpY2tlciBjbGFzc05hbWVcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogTG9jYWxpemF0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGxvY2FsZT86IHt9O1xuXG4gIC8qKlxuICAgKiBUbyBjdXN0b21pemUgdGhlIHN0eWxlIG9mIHRoZSBwb3B1cCBjYWxlbmRhclxuICAgKi9cbiAgcG9wdXBTdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiBUbyBjdXN0b21pemUgdGhlIGNsYXNzTmFtZSBvZiB0aGUgcG9wdXAgY2FsZW5kYXJcbiAgICovXG4gIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgcGlja2VyIG1vZGUgb2YgcmFuZ2UgcGlja2VyLCBkZWZhdWx0OiBgZGF0ZWBcbiAgICovXG4gIHJhbmdlTW9kZT86ICdkYXRlJyB8ICd3ZWVrJyB8ICdtb250aCcgfCAneWVhcic7XG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZW1pdHRlciwgY2FuIGJlIGV4ZWN1dGVkIHdoZXRoZXIgdGhlIHBvcHVwIGNhbGVuZGFyIGlzIHBvcHBlZCB1cCBvciBjbG9zZWRcbiAgICovXG4gIG9uT3BlbkNoYW5nZT86IChzdGF0dXM6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIGRhdGUgdGhhdCBjYW5ub3QgYmUgc2VsZWN0ZWRcbiAgICovXG4gIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuO1xuXG4gIC8qKlxuICAgKiBUbyBzcGVjaWZ5IHRoZSB0aW1lIHRoYXQgY2Fubm90IGJlIHNlbGVjdGVkLCBzdXBwb3J0IGNvbXBvbmVudHM6IGBuei1kYXRlLXBpY2tlcmAsIGBuei1yYW5nZS1waWNrZXJgXG4gICAqL1xuICBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcblxuICAvKipcbiAgICogUmVuZGVyIGV4dHJhIGZvb3RlciBpbiBwYW5lbCwgc3VwcG9ydCBjb21wb25lbnRzOiBgbnotZGF0ZS1waWNrZXJgLCBgbnotcmFuZ2UtcGlja2VyYCwgYG56LXllYXItcGlja2VyYCwgYG56LW1vbnRoLXBpY2tlcmBcbiAgICovXG4gIHJlbmRlckV4dHJhRm9vdGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUbyBwcm92aWRlIGFuIGFkZGl0aW9uYWwgdGltZSBzZWxlY3Rpb25cbiAgICovXG4gIHNob3dUaW1lPzogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IFwiVG9kYXlcIiBidXR0b24sIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgc2hvd1RvZGF5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiBjbGljayBvayBidXR0b25cbiAgICovXG4gIG9uT2s/OiAoZGF0YTogRGF0ZSB8IERhdGVbXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICogRGF0ZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICovXG4gIGNoYW5nZT86IChkYXRhOiBEYXRlIHwgRGF0ZVtdIHwgbnVsbCkgPT4gdm9pZDtcbn1cbiJdfQ==