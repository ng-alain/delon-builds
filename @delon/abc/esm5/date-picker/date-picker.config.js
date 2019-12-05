/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { getTimeDistance } from '@delon/util';
import * as i0 from "@angular/core";
var DateRangePickerConfig = /** @class */ (function () {
    function DateRangePickerConfig() {
        this.nzFormat = 'yyyy-MM-dd';
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = { position: 'relative' };
        this.nzShowToday = true;
        this.shortcuts = {
            enabled: false,
            closed: true,
            list: [
                {
                    text: '今天',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance('today'); }),
                },
                {
                    text: '昨天',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance('yesterday'); }),
                },
                {
                    text: '近3天',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance(-2); }),
                },
                {
                    text: '近7天',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance(-6); }),
                },
                {
                    text: '本周',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance('week'); }),
                },
                {
                    text: '本月',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance('month'); }),
                },
                {
                    text: '全年',
                    fn: (/**
                     * @return {?}
                     */
                    function () { return getTimeDistance('year'); }),
                },
            ],
        };
    }
    return DateRangePickerConfig;
}());
export { DateRangePickerConfig };
if (false) {
    /** @type {?} */
    DateRangePickerConfig.prototype.nzFormat;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzClassName;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzSize;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzStyle;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzAllowClear;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzAutoFocus;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzDisabled;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzDisabledDate;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzLocale;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzPopupStyle;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzDropdownClassName;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzPlaceHolder;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzShowTime;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzMode;
    /** @type {?} */
    DateRangePickerConfig.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerConfig.prototype.shortcuts;
}
/**
 * @record
 */
export function DateRangePickerShortcut() { }
if (false) {
    /**
     * Whether to enable, default: `false`
     * @type {?|undefined}
     */
    DateRangePickerShortcut.prototype.enabled;
    /**
     * Whether to close the panel after clicking, default: `true`
     * @type {?|undefined}
     */
    DateRangePickerShortcut.prototype.closed;
    /**
     * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
     * @type {?|undefined}
     */
    DateRangePickerShortcut.prototype.list;
}
/**
 * @record
 */
export function DateRangePickerShortcutItem() { }
if (false) {
    /** @type {?} */
    DateRangePickerShortcutItem.prototype.text;
    /** @type {?} */
    DateRangePickerShortcutItem.prototype.fn;
    /* Skipping unhandled member: [key: string]: any;*/
}
var DatePickerConfig = /** @class */ (function () {
    function DatePickerConfig() {
    }
    DatePickerConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DatePickerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
    return DatePickerConfig;
}());
export { DatePickerConfig };
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFOUM7SUFBQTtRQUNFLGFBQVEsR0FBRyxZQUFZLENBQUM7UUFJeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixpQkFBWSxHQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBSzlDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLGNBQVMsR0FBNkI7WUFDcEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQTVCLENBQTRCLENBQUE7aUJBQ3ZDO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFBO2lCQUNsQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUE7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7OztJQXBEQyx5Q0FBd0I7O0lBQ3hCLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUFvQjs7SUFDcEIsNENBQW9COztJQUNwQiwyQ0FBbUI7O0lBQ25CLCtDQUFxQjs7SUFDckIsK0NBQXFCOztJQUNyQix5Q0FBZTs7SUFDZiw2Q0FBOEM7O0lBQzlDLG9EQUEwQjs7SUFDMUIsb0RBQTBCOztJQUMxQiw4Q0FBb0I7O0lBQ3BCLDJDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQix1Q0FBYTs7SUFDYix5Q0FBZTs7SUFDZiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUlDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7OztBQUc1QztJQUFBO0tBR0M7O2dCQUhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsyQkEzRWxDO0NBOEVDLEFBSEQsSUFHQztTQUZZLGdCQUFnQjs7O0lBQzNCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbmZpZyB7XG4gIG56Rm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpTaXplPzogc3RyaW5nO1xuICBuelN0eWxlPzogc3RyaW5nO1xuICBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBuekRpc2FibGVkID0gZmFsc2U7XG4gIG56RGlzYWJsZWREYXRlPzogYW55O1xuICBuekRpc2FibGVkVGltZT86IGFueTtcbiAgbnpMb2NhbGU/OiBhbnk7XG4gIG56UG9wdXBTdHlsZT86IGFueSA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IGFueTtcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IGFueTtcbiAgbnpQbGFjZUhvbGRlcj86IGFueTtcbiAgbnpTaG93VGltZT86IGFueTtcbiAgbnpTaG93VG9kYXkgPSB0cnVlO1xuICBuek1vZGU/OiBhbnk7XG4gIG56UmFuZ2VzPzogYW55O1xuICBzaG9ydGN1dHM/OiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmmKjlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB7XG4gIC8qKiBXaGV0aGVyIHRvIGVuYWJsZSwgZGVmYXVsdDogYGZhbHNlYCAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gY2xvc2UgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nLCBkZWZhdWx0OiBgdHJ1ZWAgKi9cbiAgY2xvc2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGxpc3QsIGRlZmF1bHQ6IGDku4rlpKlgLCBg5pio5aSpYCwgYOi/kTPlpKlgLCBg6L+RN+WkqWAsIGDmnKzlkahgLCBg5pys5pyIYCwgYOWFqOW5tGBcbiAgICovXG4gIGxpc3Q/OiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHRleHQ6IHN0cmluZztcbiAgZm46ICh2YWx1ZTogW0RhdGUsIERhdGVdKSA9PiBbRGF0ZSwgRGF0ZV07XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIl19