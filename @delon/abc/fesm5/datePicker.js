import { __decorate, __metadata, __spread } from 'tslib';
import { forwardRef, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateRangePickerConfig = /** @class */ (function () {
    function DateRangePickerConfig() {
        this.nzFormat = 'yyyy-MM-dd';
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = { 'position': 'relative' };
        this.nzShowToday = true;
    }
    return DateRangePickerConfig;
}());
var DatePickerConfig = /** @class */ (function () {
    function DatePickerConfig() {
    }
    return DatePickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RangePickerComponent = /** @class */ (function () {
    // #endregion
    function RangePickerComponent(cog) {
        this.value = [];
        this.ngModelEndChange = new EventEmitter();
        // #region Native properties
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzOnOpenChange = new EventEmitter();
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.onChangeFn = function () { return void 0; };
        this.onTouchedFn = function () { return void 0; };
        Object.assign(this, new DateRangePickerConfig(), cog && cog.range);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnOpenChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnOpenChange.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnPanelChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnPanelChange.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype._nzOnOk = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnOk.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RangePickerComponent.prototype.valueChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onChangeFn(e[0]);
        this.ngModelEnd = e[1];
        this.ngModelEndChange.emit(e[1]);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RangePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    RangePickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
    };
    RangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'range-picker',
                    template: "<nz-range-picker\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [nzClassName]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [nzStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return RangePickerComponent; }),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    RangePickerComponent.ctorParameters = function () { return [
        { type: DatePickerConfig }
    ]; };
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
    return RangePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [RangePickerComponent];
var DatePickerModule = /** @class */ (function () {
    function DatePickerModule() {
    }
    /**
     * @return {?}
     */
    DatePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DatePickerModule,
            providers: [DatePickerConfig],
        };
    };
    DatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return DatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { RangePickerComponent, DatePickerModule, DateRangePickerConfig, DatePickerConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVBpY2tlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZGF0ZS1waWNrZXIvcmFuZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIHtcbiAgbnpGb3JtYXQ/ID0gJ3l5eXktTU0tZGQnO1xuICBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgbnpTaXplPzogc3RyaW5nO1xuICBuelN0eWxlPzogc3RyaW5nO1xuICBuekFsbG93Q2xlYXI/ID0gdHJ1ZTtcbiAgbnpBdXRvRm9jdXM/ID0gZmFsc2U7XG4gIG56RGlzYWJsZWQ/ID0gZmFsc2U7XG4gIG56RGlzYWJsZWREYXRlPzogYW55O1xuICBuekRpc2FibGVkVGltZT86IGFueTtcbiAgbnpMb2NhbGU/OiBhbnk7XG4gIG56UG9wdXBTdHlsZT8gPSB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfTtcbiAgbnpEcm9wZG93bkNsYXNzTmFtZT86IGFueTtcbiAgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IGFueTtcbiAgbnpQbGFjZUhvbGRlcj86IGFueTtcbiAgbnpTaG93VGltZT86IGFueTtcbiAgbnpTaG93VG9kYXkgPSB0cnVlO1xuICBuek1vZGU/OiBhbnk7XG4gIG56UmFuZ2VzPzogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbmZpZyB7XG4gIHJhbmdlPzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xufVxuIiwiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogRGF0ZVtdID0gW107XG5cbiAgQElucHV0KClcbiAgbmdNb2RlbEVuZDogRGF0ZTtcbiAgQE91dHB1dCgpXG4gIG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpXG4gIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG56RGlzYWJsZWREYXRlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56TG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UG9wdXBTdHlsZTogYW55O1xuICBASW5wdXQoKVxuICBuekRyb3Bkb3duQ2xhc3NOYW1lOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UGxhY2VIb2xkZXI6IGFueTtcbiAgQE91dHB1dCgpXG4gIG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpXG4gIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKVxuICBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKVxuICBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKVxuICBuelJlbmRlckV4dHJhRm9vdGVyOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56U2hvd1RpbWU6IGFueTtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgbnpNb2RlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG56UmFuZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IERhdGVQaWNrZXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG5ldyBEYXRlUmFuZ2VQaWNrZXJDb25maWcoKSwgY29nICYmIGNvZy5yYW5nZSk7XG4gIH1cblxuICBfbnpPbk9wZW5DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25PayhlOiBhbnkpIHtcbiAgICB0aGlzLm56T25Pay5lbWl0KGUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1JhbmdlUGlja2VyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGF0ZVBpY2tlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RhdGVQaWNrZXJDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQUE7O3dCQUNjLFlBQVk7NEJBSVIsSUFBSTsyQkFDTCxLQUFLOzBCQUNOLEtBQUs7NEJBSUgsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFOzJCQUs1QixJQUFJOztnQ0FoQnBCO0lBbUJDLENBQUE7QUFuQkQsSUFxQkE7OzsyQkFyQkE7SUF1QkM7Ozs7Ozs7O0lDMkRDLDhCQUFZLEdBQXFCO3FCQTNEakIsRUFBRTtnQ0FLQyxJQUFJLFlBQVksRUFBUTs7NEJBSzVCLElBQUk7MkJBRUwsS0FBSzs4QkFvQkYsSUFBSSxZQUFZLEVBQVc7MkJBZXJCLElBQUk7K0JBTVQsSUFBSSxZQUFZLEVBQU87c0JBRWhDLElBQUksWUFBWSxFQUFPOzBCQTBCRSxjQUFNLE9BQUEsS0FBSyxDQUFDLEdBQUE7MkJBQ3BCLGNBQU0sT0FBQSxLQUFLLENBQUMsR0FBQTtRQXRCcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxxQkFBcUIsRUFBRSxFQUFF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