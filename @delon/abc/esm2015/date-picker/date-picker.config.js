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
}
export class DatePickerConfig {
}
DatePickerConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DatePickerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFOUMsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUNFLGFBQVEsR0FBRyxZQUFZLENBQUM7UUFJeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixpQkFBWSxHQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBSzlDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR25CLGNBQVMsR0FBNkI7WUFDcEMsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUNuQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lCQUN2QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsS0FBSztvQkFDWCxFQUFFOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxLQUFLO29CQUNYLEVBQUU7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDOUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDbEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRTs7O29CQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7OztJQXBEQyx5Q0FBd0I7O0lBQ3hCLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUFvQjs7SUFDcEIsNENBQW9COztJQUNwQiwyQ0FBbUI7O0lBQ25CLCtDQUFxQjs7SUFDckIsK0NBQXFCOztJQUNyQix5Q0FBZTs7SUFDZiw2Q0FBOEM7O0lBQzlDLG9EQUEwQjs7SUFDMUIsb0RBQTBCOztJQUMxQiw4Q0FBb0I7O0lBQ3BCLDJDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQix1Q0FBYTs7SUFDYix5Q0FBZTs7SUFDZiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUdDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7O0FBSTVDLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUQ1QixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OztJQUVoQyxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRUaW1lRGlzdGFuY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb25maWcge1xuICBuekZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56U2l6ZT86IHN0cmluZztcbiAgbnpTdHlsZT86IHN0cmluZztcbiAgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBuekRpc2FibGVkRGF0ZT86IGFueTtcbiAgbnpEaXNhYmxlZFRpbWU/OiBhbnk7XG4gIG56TG9jYWxlPzogYW55O1xuICBuelBvcHVwU3R5bGU/OiBhbnkgPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07XG4gIG56RHJvcGRvd25DbGFzc05hbWU/OiBhbnk7XG4gIG56UmVuZGVyRXh0cmFGb290ZXI/OiBhbnk7XG4gIG56UGxhY2VIb2xkZXI/OiBhbnk7XG4gIG56U2hvd1RpbWU/OiBhbnk7XG4gIG56U2hvd1RvZGF5ID0gdHJ1ZTtcbiAgbnpNb2RlPzogYW55O1xuICBuelJhbmdlcz86IGFueTtcbiAgc2hvcnRjdXRzPzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgPSB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5pyIJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJyksXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQge1xuICAvKiogV2hldGhlciB0byBlbmFibGUsIGRlZmF1bHQ6IGBmYWxzZWAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGNsb3NlIHRoZSBwYW5lbCBhZnRlciBjbGlja2luZywgZGVmYXVsdDogYHRydWVgICovXG4gIGNsb3NlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBsaXN0LCBkZWZhdWx0OiBg5LuK5aSpYCwgYOaYqOWkqWAsIGDov5Ez5aSpYCwgYOi/kTflpKlgLCBg5pys5ZGoYCwgYOacrOaciGAsIGDlhajlubRgXG4gICAqL1xuICBsaXN0PzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIHtcbiAgdGV4dDogc3RyaW5nO1xuICBmbjogKHZhbHVlOiBbRGF0ZSwgRGF0ZV0pID0+IFtEYXRlLCBEYXRlXTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29uZmlnIHtcbiAgcmFuZ2U/OiBEYXRlUmFuZ2VQaWNrZXJDb25maWc7XG59XG4iXX0=