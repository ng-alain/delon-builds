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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLOUM7SUFBQTtRQUNFLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFJakMsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUk3QixpQkFBWSxHQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBS2pELGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVMsR0FBNkI7WUFDcEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQTVCLENBQTRCLENBQUE7aUJBQ3ZDO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFBO2lCQUNsQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUE7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQzs7OztJQXBEQyx5Q0FBaUM7O0lBQ2pDLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUE4Qjs7SUFDOUIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLCtDQUFzQzs7SUFDdEMsK0NBQWdDOztJQUNoQyx5Q0FBcUM7O0lBQ3JDLDZDQUFpRDs7SUFDakQsb0RBQTZCOztJQUM3QixvREFBNkI7O0lBQzdCLDhDQUFrQzs7SUFDbEMsMkNBQTBDOztJQUMxQyw0Q0FBNkI7O0lBQzdCLHVDQUFpQzs7SUFDakMseUNBQXdCOztJQUN4QiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUtDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7OztBQUc1QztJQUFBO0tBR0M7O2dCQUhBLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsyQkEvRWxDO0NBa0ZDLEFBSEQsSUFHQztTQUZZLGdCQUFnQjs7O0lBQzNCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb25maWcge1xuICBuekZvcm1hdD86IHN0cmluZyA9ICd5eXl5LU1NLWRkJztcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56U2l6ZT86IHN0cmluZztcbiAgbnpTdHlsZT86IHN0cmluZztcbiAgbnpBbGxvd0NsZWFyPzogYm9vbGVhbiA9IHRydWU7XG4gIG56QXV0b0ZvY3VzPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBuekRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuICBuekxvY2FsZT86IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIG56UG9wdXBTdHlsZT86IG9iamVjdCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IHN0cmluZztcbiAgbnpQbGFjZUhvbGRlcj86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBuelNob3dUaW1lPzogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcbiAgbnpTaG93VG9kYXk/OiBib29sZWFuID0gdHJ1ZTtcbiAgbnpNb2RlPzogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XG4gIG56UmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICBzaG9ydGN1dHM/OiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmmKjlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB7XG4gIC8qKiBXaGV0aGVyIHRvIGVuYWJsZSwgZGVmYXVsdDogYGZhbHNlYCAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gY2xvc2UgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nLCBkZWZhdWx0OiBgdHJ1ZWAgKi9cbiAgY2xvc2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGxpc3QsIGRlZmF1bHQ6IGDku4rlpKlgLCBg5pio5aSpYCwgYOi/kTPlpKlgLCBg6L+RN+WkqWAsIGDmnKzlkahgLCBg5pys5pyIYCwgYOWFqOW5tGBcbiAgICovXG4gIGxpc3Q/OiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0ge1xuICBba2V5OiBzdHJpbmddOiBOelNhZmVBbnk7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBmbjogKHZhbHVlOiBbRGF0ZSwgRGF0ZV0pID0+IFtEYXRlLCBEYXRlXTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29uZmlnIHtcbiAgcmFuZ2U/OiBEYXRlUmFuZ2VQaWNrZXJDb25maWc7XG59XG4iXX0=