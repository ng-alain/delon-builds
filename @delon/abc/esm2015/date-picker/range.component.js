/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { forwardRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { DatePickerConfig, DateRangePickerConfig } from './date-picker.config';
export class RangePickerComponent {
    // #endregion
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.value = [];
        this.ngModelEndChange = new EventEmitter();
        // #region Native properties
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzOnOpenChange = new EventEmitter();
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        Object.assign(this, new DateRangePickerConfig(), cog && cog.range);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnOpenChange(e) {
        this.nzOnOpenChange.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnPanelChange(e) {
        this.nzOnPanelChange.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _nzOnOk(e) {
        this.nzOnOk.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    valueChange(e) {
        this.onChangeFn(e[0]);
        this.ngModelEnd = e[1];
        this.ngModelEndChange.emit(e[1]);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
    }
}
RangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'range-picker',
                template: "<nz-range-picker\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [nzClassName]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [nzStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => RangePickerComponent),
                    },
                ]
            }] }
];
/** @nocollapse */
RangePickerComponent.ctorParameters = () => [
    { type: DatePickerConfig }
];
RangePickerComponent.propDecorators = {
    ngModelEnd: [{ type: Input }],
    ngModelEndChange: [{ type: Output }],
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzLocale: [{ type: Input }],
    nzPopupStyle: [{ type: Input }],
    nzDropdownClassName: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzOnOpenChange: [{ type: Output }],
    nzDateRender: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowTime: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], RangePickerComponent.prototype, "nzShowToday", void 0);
if (false) {
    /** @type {?} */
    RangePickerComponent.prototype.value;
    /** @type {?} */
    RangePickerComponent.prototype.ngModelEnd;
    /** @type {?} */
    RangePickerComponent.prototype.ngModelEndChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    RangePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    RangePickerComponent.prototype.nzClassName;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    RangePickerComponent.prototype.nzSize;
    /** @type {?} */
    RangePickerComponent.prototype.nzStyle;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    RangePickerComponent.prototype.nzLocale;
    /** @type {?} */
    RangePickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    RangePickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    RangePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    RangePickerComponent.prototype.nzFormat;
    /** @type {?} */
    RangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    RangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    RangePickerComponent.prototype.nzShowTime;
    /** @type {?} */
    RangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    RangePickerComponent.prototype.nzMode;
    /** @type {?} */
    RangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    RangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    RangePickerComponent.prototype.onChangeFn;
    /** @type {?} */
    RangePickerComponent.prototype.onTouchedFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWEvRSxNQUFNLE9BQU8sb0JBQW9COzs7OztJQTREL0IsWUFBWSxHQUFxQjtRQTNEakMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUtWLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7O1FBS3JELGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBb0JYLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQWV0RCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQU1uQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUEwQjFDLGVBQVUsR0FBd0IsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsZ0JBQVcsR0FBZSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQXRCckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsQ0FBTTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLENBQU07UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsQ0FBTTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7OztZQTlHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG8zQkFBcUM7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwRDtpQkFDRjthQUNGOzs7O1lBWlEsZ0JBQWdCOzs7eUJBZ0J0QixLQUFLOytCQUVMLE1BQU07MkJBS04sS0FBSzswQkFFTCxLQUFLOzBCQUVMLEtBQUs7eUJBRUwsS0FBSztxQkFFTCxLQUFLO3NCQUVMLEtBQUs7NkJBRUwsS0FBSzt1QkFFTCxLQUFLOzJCQUVMLEtBQUs7a0NBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLE1BQU07MkJBSU4sS0FBSzt1QkFFTCxLQUFLOzZCQUVMLEtBQUs7a0NBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7cUJBR0wsS0FBSzt1QkFFTCxLQUFLOzhCQUVMLE1BQU07cUJBRU4sTUFBTTs7QUFQUDtJQURDLFlBQVksRUFBRTs7eURBQ2E7OztJQS9DNUIscUNBQW1COztJQUVuQiwwQ0FDaUI7O0lBQ2pCLGdEQUNxRDs7SUFJckQsNENBQ29COztJQUNwQiwyQ0FDb0I7O0lBQ3BCLDJDQUNvQjs7SUFDcEIsMENBQ29COztJQUNwQixzQ0FDZTs7SUFDZix1Q0FDZ0I7O0lBQ2hCLDhDQUNvQjs7SUFDcEIsd0NBQ2M7O0lBQ2QsNENBQ2tCOztJQUNsQixtREFDeUI7O0lBQ3pCLDZDQUNtQjs7SUFDbkIsOENBQ3NEOztJQUd0RCw0Q0FDa0I7O0lBQ2xCLHdDQUNjOztJQUNkLDhDQUNvQjs7SUFDcEIsbURBQ3lCOztJQUN6QiwwQ0FDZ0I7O0lBQ2hCLDJDQUU0Qjs7SUFDNUIsc0NBQ1k7O0lBQ1osd0NBQ2M7O0lBQ2QsK0NBQ21EOztJQUNuRCxzQ0FDMEM7O0lBMEIxQywwQ0FBK0M7O0lBQy9DLDJDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogRGF0ZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgbmdNb2RlbEVuZDogRGF0ZTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpXG4gIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWREYXRlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56TG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UG9wdXBTdHlsZTogYW55O1xuICBASW5wdXQoKVxuICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UGxhY2VIb2xkZXI6IGFueTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpXG4gIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKVxuICBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKVxuICBuelJlbmRlckV4dHJhRm9vdGVyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56U2hvd1RpbWU6IGFueTtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgbnpNb2RlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UmFuZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IERhdGVQaWNrZXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG5ldyBEYXRlUmFuZ2VQaWNrZXJDb25maWcoKSwgY29nICYmIGNvZy5yYW5nZSk7XG4gIH1cblxuICBfbnpPbk9wZW5DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25PayhlOiBhbnkpIHtcbiAgICB0aGlzLm56T25Pay5lbWl0KGUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=