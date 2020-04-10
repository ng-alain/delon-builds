/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { getTimeDistance } from '@delon/util';
import * as i0 from "@angular/core";
export class DateRangePickerConfig {
    constructor() {
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
                    () => getTimeDistance('today')),
                },
                {
                    text: '昨天',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance('yesterday')),
                },
                {
                    text: '近3天',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance(-2)),
                },
                {
                    text: '近7天',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance(-6)),
                },
                {
                    text: '本周',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance('week')),
                },
                {
                    text: '本月',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance('month')),
                },
                {
                    text: '全年',
                    fn: (/**
                     * @return {?}
                     */
                    () => getTimeDistance('year')),
                },
            ],
        };
    }
}
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
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
export class DatePickerConfig {
}
DatePickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DatePickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLOUMsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUNFLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFJakMsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUk3QixpQkFBWSxHQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBS2pELGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVMsR0FBNkI7WUFDcEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUNuQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lCQUN2QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDOUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDbEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7OztJQXBEQyx5Q0FBaUM7O0lBQ2pDLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUE4Qjs7SUFDOUIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLCtDQUFzQzs7SUFDdEMsK0NBQWdDOztJQUNoQyx5Q0FBcUM7O0lBQ3JDLDZDQUFpRDs7SUFDakQsb0RBQTZCOztJQUM3QixvREFBNkI7O0lBQzdCLDhDQUFrQzs7SUFDbEMsMkNBQTBDOztJQUMxQyw0Q0FBNkI7O0lBQzdCLHVDQUFpQzs7SUFDakMseUNBQXdCOztJQUN4QiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUtDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7OztBQUk1QyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFENUIsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7SUFFaEMsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbmZpZyB7XG4gIG56Rm9ybWF0Pzogc3RyaW5nID0gJ3l5eXktTU0tZGQnO1xuICBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpTaXplPzogc3RyaW5nO1xuICBuelN0eWxlPzogc3RyaW5nO1xuICBuekFsbG93Q2xlYXI/OiBib29sZWFuID0gdHJ1ZTtcbiAgbnpBdXRvRm9jdXM/OiBib29sZWFuID0gZmFsc2U7XG4gIG56RGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIG56RGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIG56RGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47XG4gIG56TG9jYWxlPzogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcbiAgbnpQb3B1cFN0eWxlPzogb2JqZWN0ID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9O1xuICBuekRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBuelJlbmRlckV4dHJhRm9vdGVyPzogc3RyaW5nO1xuICBuelBsYWNlSG9sZGVyPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIG56U2hvd1RpbWU/OiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuICBuelNob3dUb2RheT86IGJvb2xlYW4gPSB0cnVlO1xuICBuek1vZGU/OiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcbiAgbnpSYW5nZXM/OiBQcmVzZXRSYW5nZXM7XG4gIHNob3J0Y3V0cz86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0ID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC0yKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHtcbiAgLyoqIFdoZXRoZXIgdG8gZW5hYmxlLCBkZWZhdWx0OiBgZmFsc2VgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICAvKiogV2hldGhlciB0byBjbG9zZSB0aGUgcGFuZWwgYWZ0ZXIgY2xpY2tpbmcsIGRlZmF1bHQ6IGB0cnVlYCAqL1xuICBjbG9zZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvcnRjdXQgbGlzdCwgZGVmYXVsdDogYOS7iuWkqWAsIGDmmKjlpKlgLCBg6L+RM+WkqWAsIGDov5E35aSpYCwgYOacrOWRqGAsIGDmnKzmnIhgLCBg5YWo5bm0YFxuICAgKi9cbiAgbGlzdD86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcblxuICB0ZXh0OiBzdHJpbmc7XG4gIGZuOiAodmFsdWU6IFtEYXRlLCBEYXRlXSkgPT4gW0RhdGUsIERhdGVdO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb25maWcge1xuICByYW5nZT86IERhdGVSYW5nZVBpY2tlckNvbmZpZztcbn1cbiJdfQ==