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
                    text: '近3天',
                    fn: function () { return getTimeDistance(-2); },
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
     * Shortcut list, default: `近3天`, `本周`, `本月`, `全年`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUU5QztJQUFBO1FBQ0UsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUlqQyxpQkFBWSxHQUFhLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBSTdCLGlCQUFZLEdBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFLOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsY0FBUyxHQUE2QjtZQUNwQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CO2lCQUM5QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBdkIsQ0FBdUI7aUJBQ2xDO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUF4QixDQUF3QjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCO2lCQUNsQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7SUF4Q0MseUNBQWlDOztJQUNqQyw0Q0FBcUI7O0lBQ3JCLHVDQUFnQjs7SUFDaEIsd0NBQWlCOztJQUNqQiw2Q0FBOEI7O0lBQzlCLDRDQUE4Qjs7SUFDOUIsMkNBQTZCOztJQUM3QiwrQ0FBcUI7O0lBQ3JCLCtDQUFxQjs7SUFDckIseUNBQWU7O0lBQ2YsNkNBQThDOztJQUM5QyxvREFBMEI7O0lBQzFCLG9EQUEwQjs7SUFDMUIsOENBQW9COztJQUNwQiwyQ0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsdUNBQWE7O0lBQ2IseUNBQWU7O0lBQ2YsMENBcUJFOzs7OztBQUdKLDZDQVNDOzs7Ozs7SUFQQywwQ0FBa0I7Ozs7O0lBRWxCLHlDQUFpQjs7Ozs7SUFJakIsdUNBQXFDOzs7OztBQUd2QyxpREFHQzs7O0lBRkMsMkNBQWE7O0lBQ2IseUNBQThCOztBQUdoQztJQUFBO0tBR0M7O2dCQUhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsyQkE5RGxDO0NBaUVDLEFBSEQsSUFHQztTQUZZLGdCQUFnQjs7O0lBQzNCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbmZpZyB7XG4gIG56Rm9ybWF0Pzogc3RyaW5nID0gJ3l5eXktTU0tZGQnO1xuICBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpTaXplPzogc3RyaW5nO1xuICBuelN0eWxlPzogc3RyaW5nO1xuICBuekFsbG93Q2xlYXI/OiBib29sZWFuID0gdHJ1ZTtcbiAgbnpBdXRvRm9jdXM/OiBib29sZWFuID0gZmFsc2U7XG4gIG56RGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gIG56RGlzYWJsZWREYXRlPzogYW55O1xuICBuekRpc2FibGVkVGltZT86IGFueTtcbiAgbnpMb2NhbGU/OiBhbnk7XG4gIG56UG9wdXBTdHlsZT86IGFueSA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IGFueTtcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IGFueTtcbiAgbnpQbGFjZUhvbGRlcj86IGFueTtcbiAgbnpTaG93VGltZT86IGFueTtcbiAgbnpTaG93VG9kYXkgPSB0cnVlO1xuICBuek1vZGU/OiBhbnk7XG4gIG56UmFuZ2VzPzogYW55O1xuICBzaG9ydGN1dHM/OiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB7XG4gIC8qKiBXaGV0aGVyIHRvIGVuYWJsZSwgZGVmYXVsdDogYGZhbHNlYCAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gY2xvc2UgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nLCBkZWZhdWx0OiBgdHJ1ZWAgKi9cbiAgY2xvc2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGxpc3QsIGRlZmF1bHQ6IGDov5Ez5aSpYCwgYOacrOWRqGAsIGDmnKzmnIhgLCBg5YWo5bm0YFxuICAgKi9cbiAgbGlzdD86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgZm46ICh2YWx1ZTogRGF0ZVtdKSA9PiBEYXRlW107XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIl19