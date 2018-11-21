import { __decorate, __metadata } from 'tslib';
import { forwardRef, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateRangePickerConfig {
    constructor() {
        this.nzFormat = 'yyyy-MM-dd';
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = { 'position': 'relative' };
        this.nzShowToday = true;
    }
}
class DatePickerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RangePickerComponent {
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], RangePickerComponent.prototype, "nzShowToday", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [RangePickerComponent];
class DatePickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DatePickerModule,
            providers: [DatePickerConfig],
        };
    }
}
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { RangePickerComponent, DatePickerModule, DateRangePickerConfig, DatePickerConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVBpY2tlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZGF0ZS1waWNrZXIvcmFuZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcbiAgbnpGb3JtYXQ/ID0gJ3l5eXktTU0tZGQnO1xuICBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpTaXplPzogc3RyaW5nO1xuICBuelN0eWxlPzogc3RyaW5nO1xuICBuekFsbG93Q2xlYXI/ID0gdHJ1ZTtcbiAgbnpBdXRvRm9jdXM/ID0gZmFsc2U7XG4gIG56RGlzYWJsZWQ/ID0gZmFsc2U7XG4gIG56RGlzYWJsZWREYXRlPzogYW55O1xuICBuekRpc2FibGVkVGltZT86IGFueTtcbiAgbnpMb2NhbGU/OiBhbnk7XG4gIG56UG9wdXBTdHlsZT8gPSB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IGFueTtcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IGFueTtcbiAgbnpQbGFjZUhvbGRlcj86IGFueTtcbiAgbnpTaG93VGltZT86IGFueTtcbiAgbnpTaG93VG9kYXkgPSB0cnVlO1xuICBuek1vZGU/OiBhbnk7XG4gIG56UmFuZ2VzPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIiwiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogRGF0ZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgbmdNb2RlbEVuZDogRGF0ZTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpXG4gIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWREYXRlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56TG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UG9wdXBTdHlsZTogYW55O1xuICBASW5wdXQoKVxuICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UGxhY2VIb2xkZXI6IGFueTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpXG4gIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKVxuICBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKVxuICBuelJlbmRlckV4dHJhRm9vdGVyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56U2hvd1RpbWU6IGFueTtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgbnpNb2RlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UmFuZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IERhdGVQaWNrZXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG5ldyBEYXRlUmFuZ2VQaWNrZXJDb25maWcoKSwgY29nICYmIGNvZy5yYW5nZSk7XG4gIH1cblxuICBfbnpPbk9wZW5DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25PayhlOiBhbnkpIHtcbiAgICB0aGlzLm56T25Pay5lbWl0KGUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1JhbmdlUGlja2VyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGF0ZVBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RhdGVQaWNrZXJDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzt3QkFDYyxZQUFZOzRCQUlSLElBQUk7MkJBQ0wsS0FBSzswQkFDTixLQUFLOzRCQUlILEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTsyQkFLNUIsSUFBSTs7Q0FHbkI7O0NBSUE7Ozs7Ozs7Ozs7SUMyREMsWUFBWSxHQUFxQjtxQkEzRGpCLEVBQUU7Z0NBS1UsSUFBSSxZQUFZLEVBQVE7OzRCQUtyQyxJQUFJOzJCQUVMLEtBQUs7OEJBb0JPLElBQUksWUFBWSxFQUFXOzJCQWU5QixJQUFJOytCQU1BLElBQUksWUFBWSxFQUFPO3NCQUVoQyxJQUFJLFlBQVksRUFBTzswQkEwQlAsTUFBTSxLQUFLLENBQUM7MkJBQ3BCLE1BQU0sS0FBSyxDQUFDO1FBdEJwQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxL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