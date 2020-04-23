/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog, getTimeDistance } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `DateRangePickerConfig` is going to be removed in 10.0.0, Please use `AlainDateRangePickerConfig` instead
 */
var /**
 * @deprecated `DateRangePickerConfig` is going to be removed in 10.0.0, Please use `AlainDateRangePickerConfig` instead
 */
DateRangePickerConfig = /** @class */ (function () {
    function DateRangePickerConfig() {
        this.nzFormat = 'yyyy-MM-dd';
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = { position: 'relative' };
        this.nzShowToday = true;
        // tslint:disable-next-line: deprecation
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
/**
 * @deprecated `DateRangePickerConfig` is going to be removed in 10.0.0, Please use `AlainDateRangePickerConfig` instead
 */
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
 * @deprecated `DateRangePickerShortcut` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcut` instead
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
 * @deprecated `DateRangePickerShortcutItem` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcutItem` instead
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
/**
 * @deprecated `DatePickerConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
var DatePickerConfig = /** @class */ (function () {
    function DatePickerConfig() {
        deprecation10Cog("DatePickerConfig");
    }
    DatePickerConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DatePickerConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ DatePickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
    return DatePickerConfig;
}());
export { DatePickerConfig };
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFRaEU7Ozs7SUFBQTtRQUNFLGFBQVEsR0FBWSxZQUFZLENBQUM7UUFJakMsaUJBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUk3QixpQkFBWSxHQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBS2pELGdCQUFXLEdBQWEsSUFBSSxDQUFDOztRQUk3QixjQUFTLEdBQTZCO1lBQ3BDLE9BQU8sRUFBRSxLQUFLO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQUE7aUJBQ25DO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUE1QixDQUE0QixDQUFBO2lCQUN2QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFBO2lCQUM5QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFBO2lCQUM5QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsY0FBTSxPQUFBLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQTtpQkFDbEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLGNBQU0sT0FBQSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQXhCLENBQXdCLENBQUE7aUJBQ25DO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUU7OztvQkFBRSxjQUFNLE9BQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFBO2lCQUNsQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7Ozs7Ozs7SUFyREMseUNBQWlDOztJQUNqQyw0Q0FBcUI7O0lBQ3JCLHVDQUFnQjs7SUFDaEIsd0NBQWlCOztJQUNqQiw2Q0FBOEI7O0lBQzlCLDRDQUE4Qjs7SUFDOUIsMkNBQTZCOztJQUM3QiwrQ0FBc0M7O0lBQ3RDLCtDQUFnQzs7SUFDaEMseUNBQXFDOztJQUNyQyw2Q0FBaUQ7O0lBQ2pELG9EQUE2Qjs7SUFDN0Isb0RBQTZCOztJQUM3Qiw4Q0FBa0M7O0lBQ2xDLDJDQUEwQzs7SUFDMUMsNENBQTZCOztJQUM3Qix1Q0FBaUM7O0lBQ2pDLHlDQUF3Qjs7SUFFeEIsMENBaUNFOzs7Ozs7QUFNSiw2Q0FVQzs7Ozs7O0lBUkMsMENBQWtCOzs7OztJQUVsQix5Q0FBaUI7Ozs7O0lBS2pCLHVDQUFxQzs7Ozs7O0FBTXZDLGlEQUtDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7Ozs7OztBQU01QztJQUVFO1FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzsyQkE3RmxDO0NBb0dDLEFBUEQsSUFPQztTQU5ZLGdCQUFnQjs7O0lBSzNCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlcHJlY2F0aW9uMTBDb2csIGdldFRpbWVEaXN0YW5jZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYERhdGVSYW5nZVBpY2tlckNvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAsIFBsZWFzZSB1c2UgYEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnYCBpbnN0ZWFkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb25maWcge1xuICBuekZvcm1hdD86IHN0cmluZyA9ICd5eXl5LU1NLWRkJztcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56U2l6ZT86IHN0cmluZztcbiAgbnpTdHlsZT86IHN0cmluZztcbiAgbnpBbGxvd0NsZWFyPzogYm9vbGVhbiA9IHRydWU7XG4gIG56QXV0b0ZvY3VzPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBuekRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuICBuekxvY2FsZT86IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIG56UG9wdXBTdHlsZT86IG9iamVjdCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IHN0cmluZztcbiAgbnpQbGFjZUhvbGRlcj86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBuelNob3dUaW1lPzogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcbiAgbnpTaG93VG9kYXk/OiBib29sZWFuID0gdHJ1ZTtcbiAgbnpNb2RlPzogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XG4gIG56UmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gIHNob3J0Y3V0cz86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0ID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBsaXN0OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC0yKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dGAgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAsIFBsZWFzZSB1c2UgYEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRgIGluc3RlYWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB7XG4gIC8qKiBXaGV0aGVyIHRvIGVuYWJsZSwgZGVmYXVsdDogYGZhbHNlYCAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgLyoqIFdoZXRoZXIgdG8gY2xvc2UgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nLCBkZWZhdWx0OiBgdHJ1ZWAgKi9cbiAgY2xvc2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGxpc3QsIGRlZmF1bHQ6IGDku4rlpKlgLCBg5pio5aSpYCwgYOi/kTPlpKlgLCBg6L+RN+WkqWAsIGDmnKzlkahgLCBg5pys5pyIYCwgYOWFqOW5tGBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgbGlzdD86IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbVtdO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW1gIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLCBQbGVhc2UgdXNlIGBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbWAgaW5zdGVhZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB7XG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcblxuICB0ZXh0OiBzdHJpbmc7XG4gIGZuOiAodmFsdWU6IFtEYXRlLCBEYXRlXSkgPT4gW0RhdGUsIERhdGVdO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBEYXRlUGlja2VyQ29uZmlnYCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBEYXRlUGlja2VyQ29uZmlnYCk7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICByYW5nZT86IERhdGVSYW5nZVBpY2tlckNvbmZpZztcbn1cbiJdfQ==