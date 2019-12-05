/**
 * @fileoverview added by tsickle
 * Generated from: range.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomSanitizer } from '@angular/platform-browser';
import { forwardRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { deepMergeKey, fixEndTimeOfRange, InputBoolean } from '@delon/util';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { DatePickerConfig, DateRangePickerConfig } from './date-picker.config';
export class RangePickerComponent {
    // #endregion
    /**
     * @param {?} cog
     * @param {?} dom
     */
    constructor(cog, dom) {
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
        this._cog = deepMergeKey(new DateRangePickerConfig(), true, cog && cog.range);
        Object.assign(this, this._cog);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set shortcut(val) {
        /** @type {?} */
        const item = (/** @type {?} */ (deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
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
            this.comp.closeOverlay();
        }
    }
}
RangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'range-picker',
                exportAs: 'rangePicker',
                template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [nzClassName]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [nzStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i._text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
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
    { type: DatePickerConfig },
    { type: DomSanitizer }
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
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
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
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFjckksTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBcUQvQixZQUFZLEdBQXFCLEVBQVUsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhENUQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWlCQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLbEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxH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SUFDdkIsOENBQTZCOztJQUM3QixtREFBa0M7O0lBQ2xDLDBDQUF5Qjs7SUFDekIsMkNBQXFEOztJQUNyRCxzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIsK0NBQTZEOztJQUM3RCxzQ0FBb0Q7Ozs7O0lBSWpCLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlS2V5LCBmaXhFbmRUaW1lT2ZSYW5nZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyQ29uZmlnLCBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCwgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICBleHBvcnRBczogJ3JhbmdlUGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9zaG9ydGN1dDogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgX2NvZzogRGF0ZVJhbmdlUGlja2VyQ29uZmlnO1xuICBAVmlld0NoaWxkKCdjb21wJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudDtcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuX2NvZy5zaG9ydGN1dHMsIHZhbCA9PSBudWxsID8ge30gOiB2YWwpIGFzIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbDtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcblxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuelNpemU6IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TG9jYWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gcmFuZ2VcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBhbnk7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBhbnk7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IGFueTtcbiAgQElucHV0KCkgbnpTaG93VGltZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGU6IGFueTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGNvZzogRGF0ZVBpY2tlckNvbmZpZywgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge1xuICAgIHRoaXMuX2NvZyA9IGRlZXBNZXJnZUtleShuZXcgRGF0ZVJhbmdlUGlja2VyQ29uZmlnKCksIHRydWUsIGNvZyAmJiBjb2cucmFuZ2UpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29nKTtcbiAgfVxuXG4gIF9uek9uT3BlbkNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPblBhbmVsQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPbk9rKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9rLmVtaXQoZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShlOiBbRGF0ZSwgRGF0ZV0pIHtcbiAgICBlID0gZml4RW5kVGltZU9mUmFuZ2UoZSk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbDogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoX2ZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgLy8gdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgY2xpY2tTaG9ydGN1dChpdGVtOiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0pIHtcbiAgICB0aGlzLnZhbHVlID0gaXRlbS5mbih0aGlzLnZhbHVlIGFzIGFueSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSh0aGlzLnZhbHVlIGFzIFtEYXRlLCBEYXRlXSk7XG4gICAgaWYgKHRoaXMuX3Nob3J0Y3V0LmNsb3NlZCkge1xuICAgICAgdGhpcy5jb21wLmNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxufVxuIl19