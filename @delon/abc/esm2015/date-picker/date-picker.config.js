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
                    text: '今天',
                    fn: () => getTimeDistance('today'),
                },
                {
                    text: '昨天',
                    fn: () => getTimeDistance('yesterday'),
                },
                {
                    text: '近3天',
                    fn: () => getTimeDistance(-2),
                },
                {
                    text: '近7天',
                    fn: () => getTimeDistance(-6),
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
/** @nocollapse */ DatePickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    DatePickerConfig.prototype.range;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUU5QyxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0UsYUFBUSxHQUFZLFlBQVksQ0FBQztRQUlqQyxpQkFBWSxHQUFhLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBSTdCLGlCQUFZLEdBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFLOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsY0FBUyxHQUE2QjtZQUNwQyxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2lCQUNuQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztpQkFDdkM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7aUJBQ2xDO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2lCQUNuQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztpQkFDbEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7OztJQXBEQyx5Q0FBaUM7O0lBQ2pDLDRDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQix3Q0FBaUI7O0lBQ2pCLDZDQUE4Qjs7SUFDOUIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLCtDQUFxQjs7SUFDckIsK0NBQXFCOztJQUNyQix5Q0FBZTs7SUFDZiw2Q0FBOEM7O0lBQzlDLG9EQUEwQjs7SUFDMUIsb0RBQTBCOztJQUMxQiw4Q0FBb0I7O0lBQ3BCLDJDQUFpQjs7SUFDakIsNENBQW1COztJQUNuQix1Q0FBYTs7SUFDYix5Q0FBZTs7SUFDZiwwQ0FpQ0U7Ozs7O0FBR0osNkNBU0M7Ozs7OztJQVBDLDBDQUFrQjs7Ozs7SUFFbEIseUNBQWlCOzs7OztJQUlqQix1Q0FBcUM7Ozs7O0FBR3ZDLGlEQUdDOzs7SUFGQywyQ0FBYTs7SUFDYix5Q0FBMEM7O0FBSTVDLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUQ1QixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OztJQUVoQyxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRUaW1lRGlzdGFuY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb25maWcge1xuICBuekZvcm1hdD86IHN0cmluZyA9ICd5eXl5LU1NLWRkJztcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG56U2l6ZT86IHN0cmluZztcbiAgbnpTdHlsZT86IHN0cmluZztcbiAgbnpBbGxvd0NsZWFyPzogYm9vbGVhbiA9IHRydWU7XG4gIG56QXV0b0ZvY3VzPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBuekRpc2FibGVkRGF0ZT86IGFueTtcbiAgbnpEaXNhYmxlZFRpbWU/OiBhbnk7XG4gIG56TG9jYWxlPzogYW55O1xuICBuelBvcHVwU3R5bGU/OiBhbnkgPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07XG4gIG56RHJvcGRvd25DbGFzc05hbWU/OiBhbnk7XG4gIG56UmVuZGVyRXh0cmFGb290ZXI/OiBhbnk7XG4gIG56UGxhY2VIb2xkZXI/OiBhbnk7XG4gIG56U2hvd1RpbWU/OiBhbnk7XG4gIG56U2hvd1RvZGF5ID0gdHJ1ZTtcbiAgbnpNb2RlPzogYW55O1xuICBuelJhbmdlcz86IGFueTtcbiAgc2hvcnRjdXRzPzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgPSB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn5pys5pyIJyxcbiAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJyksXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQge1xuICAvKiogV2hldGhlciB0byBlbmFibGUsIGRlZmF1bHQ6IGBmYWxzZWAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIC8qKiBXaGV0aGVyIHRvIGNsb3NlIHRoZSBwYW5lbCBhZnRlciBjbGlja2luZywgZGVmYXVsdDogYHRydWVgICovXG4gIGNsb3NlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBsaXN0LCBkZWZhdWx0OiBg5LuK5aSpYCwgYOaYqOWkqWAsIGDov5Ez5aSpYCwgYOi/kTflpKlgLCBg5pys5ZGoYCwgYOacrOaciGAsIGDlhajlubRgXG4gICAqL1xuICBsaXN0PzogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIHtcbiAgdGV4dDogc3RyaW5nO1xuICBmbjogKHZhbHVlOiBbRGF0ZSwgRGF0ZV0pID0+IFtEYXRlLCBEYXRlXTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29uZmlnIHtcbiAgcmFuZ2U/OiBEYXRlUmFuZ2VQaWNrZXJDb25maWc7XG59XG4iXX0=