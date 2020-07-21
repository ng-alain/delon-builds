/**
 * @fileoverview added by tsickle
 * Generated from: src/config/abc/date-picker.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainDateRangePickerConfig() { }
if (false) {
    /**
     * 默认：`yyyy-MM-dd`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzFormat;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzClassName;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzSize;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzStyle;
    /**
     * 默认：`true`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzAllowClear;
    /**
     * 默认：`false`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzAutoFocus;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDisabledDate;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDisabledTime;
    /**
     * 默认：`{ position: 'relative' }`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzPopupStyle;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzDropdownClassName;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzRenderExtraFooter;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzShowTime;
    /**
     * 默认：`true`
     * @type {?|undefined}
     */
    AlainDateRangePickerConfig.prototype.nzShowToday;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzMode;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.nzRanges;
    /** @type {?|undefined} */
    AlainDateRangePickerConfig.prototype.shortcuts;
}
/**
 * @record
 */
export function AlainDateRangePickerShortcut() { }
if (false) {
    /**
     * Whether to enable, default: `false`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.enabled;
    /**
     * Whether to close the panel after clicking, default: `true`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.closed;
    /**
     * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
     * @type {?|undefined}
     */
    AlainDateRangePickerShortcut.prototype.list;
}
/**
 * @record
 */
export function AlainDateRangePickerShortcutItem() { }
if (false) {
    /** @type {?} */
    AlainDateRangePickerShortcutItem.prototype.text;
    /** @type {?} */
    AlainDateRangePickerShortcutItem.prototype.fn;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2NvbmZpZy9hYmMvZGF0ZS1waWNrZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLGdEQWdDQzs7Ozs7O0lBNUJDLDhDQUFrQjs7SUFDbEIsaURBQXFCOztJQUNyQiw0Q0FBZ0I7O0lBQ2hCLDZDQUFpQjs7Ozs7SUFJakIsa0RBQXVCOzs7OztJQUl2QixpREFBc0I7O0lBQ3RCLG9EQUFzQzs7SUFDdEMsb0RBQWdDOzs7OztJQUloQyxrREFBc0I7O0lBQ3RCLHlEQUE2Qjs7SUFDN0IseURBQTZCOztJQUM3QixnREFBMEM7Ozs7O0lBSTFDLGlEQUFzQjs7SUFDdEIsNENBQW1DOztJQUNuQyw4Q0FBd0I7O0lBQ3hCLCtDQUF5Qzs7Ozs7QUFHM0Msa0RBU0M7Ozs7OztJQVBDLCtDQUFrQjs7Ozs7SUFFbEIsOENBQWlCOzs7OztJQUlqQiw0Q0FBMEM7Ozs7O0FBRzVDLHNEQUtDOzs7SUFGQyxnREFBYTs7SUFDYiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIE56RGF0ZU1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5EYXRlUmFuZ2VQaWNrZXJDb25maWcge1xuICAvKipcbiAgICog6buY6K6k77yaYHl5eXktTU0tZGRgXG4gICAqL1xuICBuekZvcm1hdD86IHN0cmluZztcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56U2l6ZT86IHN0cmluZztcbiAgbnpTdHlsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgbnpBbGxvd0NsZWFyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG56QXV0b0ZvY3VzPzogYm9vbGVhbjtcbiAgbnpEaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgbnpEaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcbiAgLyoqXG4gICAqIOm7mOiupO+8mmB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH1gXG4gICAqL1xuICBuelBvcHVwU3R5bGU/OiBvYmplY3Q7XG4gIG56RHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56UmVuZGVyRXh0cmFGb290ZXI/OiBzdHJpbmc7XG4gIG56U2hvd1RpbWU/OiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuICAvKipcbiAgICog6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBuelNob3dUb2RheT86IGJvb2xlYW47XG4gIG56TW9kZT86IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW107XG4gIG56UmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICBzaG9ydGN1dHM/OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQge1xuICAvKiogV2hldGhlciB0byBlbmFibGUsIGRlZmF1bHQ6IGBmYWxzZWAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGNsb3NlIHRoZSBwYW5lbCBhZnRlciBjbGlja2luZywgZGVmYXVsdDogYHRydWVgICovXG4gIGNsb3NlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBsaXN0LCBkZWZhdWx0OiBg5LuK5aSpYCwgYOaYqOWkqWAsIGDov5Ez5aSpYCwgYOi/kTflpKlgLCBg5pys5ZGoYCwgYOacrOaciGAsIGDlhajlubRgXG4gICAqL1xuICBsaXN0PzogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcblxuICB0ZXh0OiBzdHJpbmc7XG4gIGZuOiAodmFsdWU6IFtEYXRlLCBEYXRlXSkgPT4gW0RhdGUsIERhdGVdO1xufVxuIl19