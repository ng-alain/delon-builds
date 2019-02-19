/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    text: '近3天',
                    fn: () => getTimeDistance(-2),
                },
                {
                    text: '本周',
                    fn: () => getTimeDistance('week'),
                },
                {
                    text: '本月',
                    fn: () => getTimeDistance('month'),
                },
                {
                    text: '全年',
                    fn: () => getTimeDistance('year'),
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
export class DatePickerConfig {
}
DatePickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DatePickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUU5QyxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0UsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUlqQyxpQkFBWSxHQUFhLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBSTdCLGlCQUFZLEdBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFLOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsY0FBUyxHQUE2QjtZQUNwQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2lCQUNsQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUFBOzs7SUF4Q0MseUNBQWlDOztJQUNqQyw0Q0FBcUI7O0lBQ3JCLHVDQUFnQjs7SUFDaEIsd0NBQWlCOztJQUNqQiw2Q0FBOEI7O0lBQzlCLDRDQUE4Qjs7SUFDOUIsMkNBQTZCOztJQUM3QiwrQ0FBcUI7O0lBQ3JCLCtDQUFxQjs7SUFDckIseUNBQWU7O0lBQ2YsNkNBQThDOztJQUM5QyxvREFBMEI7O0lBQzFCLG9EQUEwQjs7SUFDMUIsOENBQW9COztJQUNwQiwyQ0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIsdUNBQWE7O0lBQ2IseUNBQWU7O0lBQ2YsMENBcUJFOzs7OztBQUdKLDZDQVNDOzs7Ozs7SUFQQywwQ0FBa0I7Ozs7O0lBRWxCLHlDQUFpQjs7Ozs7SUFJakIsdUNBQXFDOzs7OztBQUd2QyxpREFHQzs7O0lBRkMsMkNBQWE7O0lBQ2IseUNBQThCOztBQUloQyxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFENUIsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7SUFFaEMsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGltZURpc3RhbmNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcbiAgbnpGb3JtYXQ/OiBzdHJpbmcgPSAneXl5eS1NTS1kZCc7XG4gIG56Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBuelNpemU/OiBzdHJpbmc7XG4gIG56U3R5bGU/OiBzdHJpbmc7XG4gIG56QWxsb3dDbGVhcj86IGJvb2xlYW4gPSB0cnVlO1xuICBuekF1dG9Gb2N1cz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZERhdGU/OiBhbnk7XG4gIG56RGlzYWJsZWRUaW1lPzogYW55O1xuICBuekxvY2FsZT86IGFueTtcbiAgbnpQb3B1cFN0eWxlPzogYW55ID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9O1xuICBuekRyb3Bkb3duQ2xhc3NOYW1lPzogYW55O1xuICBuelJlbmRlckV4dHJhRm9vdGVyPzogYW55O1xuICBuelBsYWNlSG9sZGVyPzogYW55O1xuICBuelNob3dUaW1lPzogYW55O1xuICBuelNob3dUb2RheSA9IHRydWU7XG4gIG56TW9kZT86IGFueTtcbiAgbnpSYW5nZXM/OiBhbnk7XG4gIHNob3J0Y3V0cz86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0ID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHtcbiAgLyoqIFdoZXRoZXIgdG8gZW5hYmxlLCBkZWZhdWx0OiBgZmFsc2VgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICAvKiogV2hldGhlciB0byBjbG9zZSB0aGUgcGFuZWwgYWZ0ZXIgY2xpY2tpbmcsIGRlZmF1bHQ6IGB0cnVlYCAqL1xuICBjbG9zZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvcnRjdXQgbGlzdCwgZGVmYXVsdDogYOi/kTPlpKlgLCBg5pys5ZGoYCwgYOacrOaciGAsIGDlhajlubRgXG4gICAqL1xuICBsaXN0PzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIHtcbiAgdGV4dDogc3RyaW5nO1xuICBmbjogKHZhbHVlOiBEYXRlW10pID0+IERhdGVbXTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29uZmlnIHtcbiAgcmFuZ2U/OiBEYXRlUmFuZ2VQaWNrZXJDb25maWc7XG59XG4iXX0=