/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { deepMergeKey, fixEndTimeOfRange, InputBoolean } from '@delon/util';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { DatePickerConfig, DateRangePickerConfig, } from './date-picker.config';
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
        this._cog = deepMergeKey(new DateRangePickerConfig(), true, cog && cog.range);
        Object.assign(this, this._cog);
    }
    Object.defineProperty(RangePickerComponent.prototype, "shortcut", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shortcut;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var item = (/** @type {?} */ (deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
            if (typeof val === 'boolean') {
                item.enabled = val;
            }
            this._shortcut = item;
        },
        enumerable: true,
        configurable: true
    });
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
        e = fixEndTimeOfRange(e);
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
     * @param {?} _fn
     * @return {?}
     */
    RangePickerComponent.prototype.registerOnTouched = /**
     * @param {?} _fn
     * @return {?}
     */
    function (_fn) {
        // this.onTouchedFn = fn;
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
    /**
     * @param {?} item
     * @return {?}
     */
    RangePickerComponent.prototype.clickShortcut = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.value = item.fn((/** @type {?} */ (this.value)));
        this.valueChange((/** @type {?} */ (this.value)));
        if (this._shortcut.closed) {
            this.comp.closeOverlay();
        }
    };
    RangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'range-picker',
                    exportAs: 'rangePicker',
                    template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [nzClassName]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [nzStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i.text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return RangePickerComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    RangePickerComponent.ctorParameters = function () { return [
        { type: DatePickerConfig }
    ]; };
    RangePickerComponent.propDecorators = {
        comp: [{ type: ViewChild, args: ['comp',] }],
        ngModelEnd: [{ type: Input }],
        shortcut: [{ type: Input }],
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
    return RangePickerComponent;
}());
export { RangePickerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype._shortcut;
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype._cog;
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype.comp;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixxQkFBcUIsR0FHdEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QjtJQTRERSxhQUFhO0lBRWIsOEJBQVksR0FBcUI7UUE3Q2pDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFjQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLbEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXksIGZpeEVuZFRpbWVPZlJhbmdlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQge1xuICBEYXRlUGlja2VyQ29uZmlnLFxuICBEYXRlUmFuZ2VQaWNrZXJDb25maWcsXG4gIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0LFxuICBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0sXG59IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdyYW5nZVBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVBpY2tlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBwcml2YXRlIF9jb2c6IERhdGVSYW5nZVBpY2tlckNvbmZpZztcbiAgQFZpZXdDaGlsZCgnY29tcCcpIHByaXZhdGUgY29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudDtcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuX2NvZy5zaG9ydGN1dHMsIHZhbCA9PSBudWxsID8ge30gOiB2YWwpIGFzIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbDtcbiAgICB9XG4gICAgdGhpcy5fc2hvcnRjdXQgPSBpdGVtO1xuICB9XG4gIGdldCBzaG9ydGN1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvcnRjdXQ7XG4gIH1cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMb2NhbGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpQb3B1cFN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyByYW5nZVxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IGFueTtcbiAgQElucHV0KCkgbnpGb3JtYXQ6IGFueTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU6IGFueTtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogYW55O1xuICBASW5wdXQoKSBuelNob3dUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogYW55O1xuICBASW5wdXQoKSBuelJhbmdlczogYW55O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBEYXRlUGlja2VyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gZGVlcE1lcmdlS2V5KG5ldyBEYXRlUmFuZ2VQaWNrZXJDb25maWcoKSwgdHJ1ZSwgY29nICYmIGNvZy5yYW5nZSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb2cpO1xuICB9XG5cbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uT2soZTogYW55KSB7XG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKGU6IFtEYXRlLCBEYXRlXSkge1xuICAgIGUgPSBmaXhFbmRUaW1lT2ZSYW5nZShlKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4oZVswXSk7XG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcbiAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlWzFdKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW107XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChfZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBjbGlja1Nob3J0Y3V0KGl0ZW06IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSkge1xuICAgIHRoaXMudmFsdWUgPSBpdGVtLmZuKHRoaXMudmFsdWUgYXMgYW55KTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlKHRoaXMudmFsdWUgYXMgW0RhdGUsIERhdGVdKTtcbiAgICBpZiAodGhpcy5fc2hvcnRjdXQuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNvbXAuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=