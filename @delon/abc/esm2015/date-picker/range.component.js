/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { DatePickerConfig, DateRangePickerConfig } from './date-picker.config';
export class RangePickerComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYS9FLE1BQU07Ozs7SUE0REosWUFBWSxHQUFxQjtxQkEzRGpCLEVBQUU7Z0NBS0MsSUFBSSxZQUFZLEVBQVE7OzRCQUs1QixJQUFJOzJCQUVMLEtBQUs7OEJBb0JGLElBQUksWUFBWSxFQUFXOzJCQWVyQixJQUFJOytCQU1ULElBQUksWUFBWSxFQUFPO3NCQUVoQyxJQUFJLFlBQVksRUFBTzswQkEwQkUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDOzJCQUNwQixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUF0QnBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUkscUJBQXFCLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BFOzs7OztJQUVELGVBQWUsQ0FBQyxDQUFNO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELGdCQUFnQixDQUFDLENBQU07UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQU07UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxXQUFXLENBQUMsQ0FBUztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDdkU7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0tBQzVCOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixvM0JBQXFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDcEQ7aUJBQ0Y7YUFDRjs7OztZQVpRLGdCQUFnQjs7O3lCQWdCdEIsS0FBSzsrQkFFTCxNQUFNOzJCQUtOLEtBQUs7MEJBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxLQUFLOzZCQUVMLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLO2tDQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxNQUFNOzJCQUlOLEtBQUs7dUJBRUwsS0FBSzs2QkFFTCxLQUFLO2tDQUVMLEtBQUs7eUJBRUwsS0FBSzswQkFFTCxLQUFLO3FCQUdMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxNQUFNO3FCQUVOLE1BQU07OztJQVJOLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb25maWcsIERhdGVSYW5nZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBPdXRwdXQoKVxuICBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcblxuICBASW5wdXQoKVxuICBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKVxuICBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBuelNpemU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbnpTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkRGF0ZTogYW55O1xuICBASW5wdXQoKVxuICBuekxvY2FsZTogYW55O1xuICBASW5wdXQoKVxuICBuelBvcHVwU3R5bGU6IGFueTtcbiAgQElucHV0KClcbiAgbnpEcm9wZG93bkNsYXNzTmFtZTogYW55O1xuICBASW5wdXQoKVxuICBuelBsYWNlSG9sZGVyOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBuek9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyByYW5nZVxuICBASW5wdXQoKVxuICBuekRhdGVSZW5kZXI6IGFueTtcbiAgQElucHV0KClcbiAgbnpGb3JtYXQ6IGFueTtcbiAgQElucHV0KClcbiAgbnpEaXNhYmxlZFRpbWU6IGFueTtcbiAgQElucHV0KClcbiAgbnpSZW5kZXJFeHRyYUZvb3RlcjogYW55O1xuICBASW5wdXQoKVxuICBuelNob3dUaW1lOiBhbnk7XG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG56TW9kZTogYW55O1xuICBASW5wdXQoKVxuICBuelJhbmdlczogYW55O1xuICBAT3V0cHV0KClcbiAgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBEYXRlUGlja2VyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIGNvZyAmJiBjb2cucmFuZ2UpO1xuICB9XG5cbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uT2soZTogYW55KSB7XG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKGU6IERhdGVbXSkge1xuICAgIHRoaXMub25DaGFuZ2VGbihlWzBdKTtcbiAgICB0aGlzLm5nTW9kZWxFbmQgPSBlWzFdO1xuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xuICB9XG5cbiAgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19