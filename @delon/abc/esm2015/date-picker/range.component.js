/**
 * @fileoverview added by tsickle
 * Generated from: range.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService } from '@delon/theme';
import { deepMergeKey, fixEndTimeOfRange, getTimeDistance, InputBoolean } from '@delon/util';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
export class RangePickerComponent {
    // #endregion
    /**
     * @param {?} dom
     * @param {?} configSrv
     */
    constructor(dom, configSrv) {
        this.dom = dom;
        this.value = [];
        this.ngModelEndChange = new EventEmitter();
        // #region Native properties
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzOnOpenChange = new EventEmitter();
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        /** @type {?} */
        const cog = configSrv.merge('dataRange', {
            nzFormat: 'yyyy-MM-dd',
            nzAllowClear: true,
            nzAutoFocus: false,
            nzDisabled: false,
            nzPopupStyle: { position: 'relative' },
            nzShowToday: true,
            shortcuts: {
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
            },
        });
        this.defaultShortcuts = (/** @type {?} */ (Object.assign({}, cog.shortcuts)));
        Object.assign(this, cog);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set shortcut(val) {
        /** @type {?} */
        const item = (/** @type {?} */ (deepMergeKey({}, true, this.defaultShortcuts, val == null ? {} : val)));
        if (typeof val === 'boolean') {
            item.enabled = val;
        }
        (item.list || []).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._text = this.dom.bypassSecurityTrustHtml(i.text);
        }));
        this._shortcut = item;
    }
    /**
     * @return {?}
     */
    get shortcut() {
        return this._shortcut;
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
        e = fixEndTimeOfRange(e);
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
     * @param {?} _fn
     * @return {?}
     */
    registerOnTouched(_fn) {
        // this.onTouchedFn = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    clickShortcut(item) {
        this.value = item.fn((/** @type {?} */ (this.value)));
        this.valueChange((/** @type {?} */ (this.value)));
        if (this._shortcut.closed) {
            // tslint:disable-next-line:no-string-literal
            ((/** @type {?} */ (this.comp)))['picker'].hideOverlay();
        }
    }
}
RangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'range-picker',
                exportAs: 'rangePicker',
                template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [ngClass]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [ngStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i._text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => RangePickerComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
RangePickerComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: AlainConfigService }
];
RangePickerComponent.propDecorators = {
    comp: [{ type: ViewChild, args: ['comp', { static: false },] }],
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], RangePickerComponent.prototype, "nzShowToday", void 0);
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
    RangePickerComponent.prototype.defaultShortcuts;
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
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQWtFLE1BQU0sY0FBYyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWNuRSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFxRC9CLFlBQW9CLEdBQWlCLEVBQUUsU0FBNkI7UUFBaEQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhEckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWlCQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O2NBSzVDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxRQUFRLEVBQUUsWUFBWTtZQUN0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QWdFOztJQUdoRSw0Q0FBMkI7O0lBQzNCLHdDQUF1Qjs7SUFDdkIsOENBQTZCOztJQUM3QixtREFBdUU7O0lBQ3ZFLDBDQUF5Qjs7SUFDekIsMkNBQXFEOztJQUNyRCxzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIsK0NBQTZEOztJQUM3RCxzQ0FBb0Q7Ozs7O0lBSXhDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCwgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlS2V5LCBmaXhFbmRUaW1lT2ZSYW5nZSwgZ2V0VGltZURpc3RhbmNlLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhbmdlLXBpY2tlcicsXG4gIGV4cG9ydEFzOiAncmFuZ2VQaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VQaWNrZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIG9uQ2hhbmdlRm46ICh2YWw6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgX3Nob3J0Y3V0OiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBwcml2YXRlIGRlZmF1bHRTaG9ydGN1dHM6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIEBWaWV3Q2hpbGQoJ2NvbXAnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBjb21wOiBOelJhbmdlUGlja2VyQ29tcG9uZW50O1xuICB2YWx1ZTogRGF0ZVtdID0gW107XG5cbiAgQElucHV0KCkgbmdNb2RlbEVuZDogRGF0ZTtcbiAgQElucHV0KClcbiAgc2V0IHNob3J0Y3V0KHZhbDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmRlZmF1bHRTaG9ydGN1dHMsIHZhbCA9PSBudWxsID8ge30gOiB2YWwpIGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgaXRlbS5lbmFibGVkID0gdmFsO1xuICAgIH1cbiAgICAoaXRlbS5saXN0IHx8IFtdKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGkudGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2hvcnRjdXQgPSBpdGVtO1xuICB9XG4gIGdldCBzaG9ydGN1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvcnRjdXQ7XG4gIH1cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMb2NhbGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpQb3B1cFN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyByYW5nZVxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IGFueTtcbiAgQElucHV0KCkgbnpGb3JtYXQ6IGFueTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU6IGFueTtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgbnpTaG93VGltZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGU6IGFueTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uc3QgY29nID0gY29uZmlnU3J2Lm1lcmdlKCdkYXRhUmFuZ2UnLCB7XG4gICAgICBuekZvcm1hdDogJ3l5eXktTU0tZGQnLFxuICAgICAgbnpBbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgbnpBdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgbnpEaXNhYmxlZDogZmFsc2UsXG4gICAgICBuelBvcHVwU3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICAgIG56U2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy5kZWZhdWx0U2hvcnRjdXRzID0geyAuLi5jb2cuc2hvcnRjdXRzIH0gYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBfbnpPbk9wZW5DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25PayhlOiBhbnkpIHtcbiAgICB0aGlzLm56T25Pay5lbWl0KGUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoZTogW0RhdGUsIERhdGVdKSB7XG4gICAgZSA9IGZpeEVuZFRpbWVPZlJhbmdlKGUpO1xuICAgIHRoaXMub25DaGFuZ2VGbihlWzBdKTtcbiAgICB0aGlzLm5nTW9kZWxFbmQgPSBlWzFdO1xuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWw6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF9mbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIC8vIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGNsaWNrU2hvcnRjdXQoaXRlbTogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0pIHtcbiAgICB0aGlzLnZhbHVlID0gaXRlbS5mbih0aGlzLnZhbHVlIGFzIGFueSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSh0aGlzLnZhbHVlIGFzIFtEYXRlLCBEYXRlXSk7XG4gICAgaWYgKHRoaXMuX3Nob3J0Y3V0LmNsb3NlZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgICAodGhpcy5jb21wIGFzIE56U2FmZUFueSlbJ3BpY2tlciddLmhpZGVPdmVybGF5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=