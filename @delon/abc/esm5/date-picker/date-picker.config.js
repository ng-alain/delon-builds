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
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
var DatePickerConfig = /** @class */ (function () {
    function DatePickerConfig() {
    }
    DatePickerConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DatePickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
    return DatePickerConfig;
}());
export { DatePickerConfig };
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLOUM7SUFBQTtRQUNFLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFJakMsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUk3QixpQkFBWSxHQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBS2pELGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVMsR0FBNkI7WUFDcEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQTVCLENBQTRCLENBQUE7aUJBQ3ZDO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFBO2lCQUNsQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUE7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7OztJQXBEQyx5Q0FBaUM7O0lBQ2pDLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUE4Qjs7SUFDOUIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLCtDQUFzQzs7SUFDdEMsK0NBQWdDOztJQUNoQyx5Q0FBcUM7O0lBQ3JDLDZDQUFpRDs7SUFDakQsb0RBQTZCOztJQUM3QixvREFBNkI7O0lBQzdCLDhDQUFrQzs7SUFDbEMsMkNBQTBDOztJQUMxQyw0Q0FBNkI7O0lBQzdCLHVDQUFpQzs7SUFDakMseUNBQXdCOztJQUN4QiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUtDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7OztBQUc1QztJQUFBO0tBR0M7O2dCQUhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsyQkEvRWxDO0NBa0ZDLEFBSEQsSUFHQztTQUZZLGdCQUFnQjs7O0lBQzNCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcy9hbnknO1xuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIFBhbmVsTW9kZSwgUHJlc2V0UmFuZ2VzLCBTdXBwb3J0VGltZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcbiAgbnpGb3JtYXQ/OiBzdHJpbmcgPSAneXl5eS1NTS1kZCc7XG4gIG56Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBuelNpemU/OiBzdHJpbmc7XG4gIG56U3R5bGU/OiBzdHJpbmc7XG4gIG56QWxsb3dDbGVhcj86IGJvb2xlYW4gPSB0cnVlO1xuICBuekF1dG9Gb2N1cz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbnpEaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgbnpEaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcbiAgbnpMb2NhbGU/OiBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xuICBuelBvcHVwU3R5bGU/OiBvYmplY3QgPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07XG4gIG56RHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56UmVuZGVyRXh0cmFGb290ZXI/OiBzdHJpbmc7XG4gIG56UGxhY2VIb2xkZXI/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgbnpTaG93VGltZT86IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XG4gIG56U2hvd1RvZGF5PzogYm9vbGVhbiA9IHRydWU7XG4gIG56TW9kZT86IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xuICBuelJhbmdlcz86IFByZXNldFJhbmdlcztcbiAgc2hvcnRjdXRzPzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgPSB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5pyIJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJyksXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQge1xuICAvKiogV2hldGhlciB0byBlbmFibGUsIGRlZmF1bHQ6IGBmYWxzZWAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGNsb3NlIHRoZSBwYW5lbCBhZnRlciBjbGlja2luZywgZGVmYXVsdDogYHRydWVgICovXG4gIGNsb3NlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBsaXN0LCBkZWZhdWx0OiBg5LuK5aSpYCwgYOaYqOWkqWAsIGDov5Ez5aSpYCwgYOi/kTflpKlgLCBg5pys5ZGoYCwgYOacrOaciGAsIGDlhajlubRgXG4gICAqL1xuICBsaXN0PzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIHtcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xuXG4gIHRleHQ6IHN0cmluZztcbiAgZm46ICh2YWx1ZTogW0RhdGUsIERhdGVdKSA9PiBbRGF0ZSwgRGF0ZV07XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIl19