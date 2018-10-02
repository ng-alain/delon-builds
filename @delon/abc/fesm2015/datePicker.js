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
                template: "<nz-range-picker\r\n  [ngModel]=\"value\"\r\n  (ngModelChange)=\"valueChange($event)\"\r\n\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzAutoFocus]=\"nzAutoFocus\"\r\n  [nzClassName]=\"nzClassName\"\r\n  [nzDisabled]=\"nzDisabled\"\r\n  [nzSize]=\"nzSize\"\r\n  [nzDisabledDate]=\"nzDisabledDate\"\r\n  [nzLocale]=\"nzLocale\"\r\n  [nzPopupStyle]=\"nzPopupStyle\"\r\n  [nzDropdownClassName]=\"nzDropdownClassName\"\r\n  [nzStyle]=\"nzStyle\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\r\n\r\n  [nzDateRender]=\"nzDateRender\"\r\n  [nzDisabledTime]=\"nzDisabledTime\"\r\n  [nzFormat]=\"nzFormat\"\r\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\r\n  [nzShowTime]=\"nzShowTime\"\r\n  [nzShowToday]=\"nzShowToday\"\r\n  [nzMode]=\"nzMode\"\r\n  [nzRanges]=\"nzRanges\"\r\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\r\n\r\n  (nzOnOk)=\"_nzOnOk($event)\"\r\n></nz-range-picker>\r\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVBpY2tlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZGF0ZS1waWNrZXIvcmFuZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcclxuICBuekZvcm1hdD8gPSAneXl5eS1NTS1kZCc7XHJcbiAgbnpDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgbnpTaXplPzogc3RyaW5nO1xyXG4gIG56U3R5bGU/OiBzdHJpbmc7XHJcbiAgbnpBbGxvd0NsZWFyPyA9IHRydWU7XHJcbiAgbnpBdXRvRm9jdXM/ID0gZmFsc2U7XHJcbiAgbnpEaXNhYmxlZD8gPSBmYWxzZTtcclxuICBuekRpc2FibGVkRGF0ZT86IGFueTtcclxuICBuekRpc2FibGVkVGltZT86IGFueTtcclxuICBuekxvY2FsZT86IGFueTtcclxuICBuelBvcHVwU3R5bGU/ID0geyAncG9zaXRpb24nOiAncmVsYXRpdmUnIH07XHJcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IGFueTtcclxuICBuelJlbmRlckV4dHJhRm9vdGVyPzogYW55O1xyXG4gIG56UGxhY2VIb2xkZXI/OiBhbnk7XHJcbiAgbnpTaG93VGltZT86IGFueTtcclxuICBuelNob3dUb2RheSA9IHRydWU7XHJcbiAgbnpNb2RlPzogYW55O1xyXG4gIG56UmFuZ2VzPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XHJcbiAgcmFuZ2U/OiBEYXRlUmFuZ2VQaWNrZXJDb25maWc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5nTW9kZWxFbmQ6IERhdGU7XHJcbiAgQE91dHB1dCgpXHJcbiAgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG56QWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KClcclxuICBuekF1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56RGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBuelNpemU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56U3R5bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG56RGlzYWJsZWREYXRlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekxvY2FsZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpQb3B1cFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuelBsYWNlSG9sZGVyOiBhbnk7XHJcbiAgQE91dHB1dCgpXHJcbiAgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8vIHJhbmdlXHJcbiAgQElucHV0KClcclxuICBuekRhdGVSZW5kZXI6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIG56Rm9ybWF0OiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuekRpc2FibGVkVGltZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpSZW5kZXJFeHRyYUZvb3RlcjogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpTaG93VGltZTogYW55O1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbnpNb2RlOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBuelJhbmdlczogYW55O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogRGF0ZVBpY2tlckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIGNvZyAmJiBjb2cucmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xyXG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xyXG4gIH1cclxuXHJcbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcclxuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XHJcbiAgfVxyXG5cclxuICBfbnpPbk9rKGU6IGFueSkge1xyXG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlKGU6IERhdGVbXSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xyXG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcclxuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcclxuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmltcG9ydCB7IFJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtSYW5nZVBpY2tlckNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGF0ZVBpY2tlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRGF0ZVBpY2tlckNvbmZpZ10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7d0JBQ2MsWUFBWTs0QkFJUixJQUFJOzJCQUNMLEtBQUs7MEJBQ04sS0FBSzs0QkFJSCxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7MkJBSzVC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