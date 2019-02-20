/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    fn: function () { return getTimeDistance('today'); },
                },
                {
                    text: '昨天',
                    fn: function () { return getTimeDistance('yesterday'); },
                },
                {
                    text: '近3天',
                    fn: function () { return getTimeDistance(-2); },
                },
                {
                    text: '近7天',
                    fn: function () { return getTimeDistance(-6); },
                },
                {
                    text: '本周',
                    fn: function () { return getTimeDistance('week'); },
                },
                {
                    text: '本月',
                    fn: function () { return getTimeDistance('month'); },
                },
                {
                    text: '全年',
                    fn: function () { return getTimeDistance('year'); },
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
}
var DatePickerConfig = /** @class */ (function () {
    function DatePickerConfig() {
    }
    DatePickerConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DatePickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
    return DatePickerConfig;
}());
export { DatePickerConfig };
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUU5QztJQUFBO1FBQ0UsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUlqQyxpQkFBWSxHQUFhLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBSTdCLGlCQUFZLEdBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFLOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsY0FBUyxHQUE2QjtZQUNwQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUF4QixDQUF3QjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQTVCLENBQTRCO2lCQUN2QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFLEVBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQjtpQkFDOUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUI7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QjtpQkFDbEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCO2lCQUNuQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBdkIsQ0FBdUI7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7OztJQXBEQyx5Q0FBaUM7O0lBQ2pDLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUE4Qjs7SUFDOUIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLCtDQUFxQjs7SUFDckIsK0NBQXFCOztJQUNyQix5Q0FBZTs7SUFDZiw2Q0FBOEM7O0lBQzlDLG9EQUEwQjs7SUFDMUIsb0RBQTBCOztJQUMxQiw4Q0FBb0I7O0lBQ3BCLDJDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQix1Q0FBYTs7SUFDYix5Q0FBZTs7SUFDZiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUdDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7O0FBRzVDO0lBQUE7S0FHQzs7Z0JBSEEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzJCQTFFbEM7Q0E2RUMsQUFIRCxJQUdDO1NBRlksZ0JBQWdCOzs7SUFDM0IsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcbiAgbnpGb3JtYXQ/OiBzdHJpbmcgPSAneXl5eS1NTS1kZCc7XG4gIG56Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBuelNpemU/OiBzdHJpbmc7XG4gIG56U3R5bGU/OiBzdHJpbmc7XG4gIG56QWxsb3dDbGVhcj86IGJvb2xlYW4gPSB0cnVlO1xuICBuekF1dG9Gb2N1cz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZERhdGU/OiBhbnk7XG4gIG56RGlzYWJsZWRUaW1lPzogYW55O1xuICBuekxvY2FsZT86IGFueTtcbiAgbnpQb3B1cFN0eWxlPzogYW55ID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9O1xuICBuekRyb3Bkb3duQ2xhc3NOYW1lPzogYW55O1xuICBuelJlbmRlckV4dHJhRm9vdGVyPzogYW55O1xuICBuelBsYWNlSG9sZGVyPzogYW55O1xuICBuelNob3dUaW1lPzogYW55O1xuICBuelNob3dUb2RheSA9IHRydWU7XG4gIG56TW9kZT86IGFueTtcbiAgbnpSYW5nZXM/OiBhbnk7XG4gIHNob3J0Y3V0cz86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0ID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC0yKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHtcbiAgLyoqIFdoZXRoZXIgdG8gZW5hYmxlLCBkZWZhdWx0OiBgZmFsc2VgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICAvKiogV2hldGhlciB0byBjbG9zZSB0aGUgcGFuZWwgYWZ0ZXIgY2xpY2tpbmcsIGRlZmF1bHQ6IGB0cnVlYCAqL1xuICBjbG9zZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvcnRjdXQgbGlzdCwgZGVmYXVsdDogYOS7iuWkqWAsIGDmmKjlpKlgLCBg6L+RM+WkqWAsIGDov5E35aSpYCwgYOacrOWRqGAsIGDmnKzmnIhgLCBg5YWo5bm0YFxuICAgKi9cbiAgbGlzdD86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgZm46ICh2YWx1ZTogW0RhdGUsIERhdGVdKSA9PiBbRGF0ZSwgRGF0ZV07XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIl19