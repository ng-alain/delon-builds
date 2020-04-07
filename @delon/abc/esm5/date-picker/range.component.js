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
var RangePickerComponent = /** @class */ (function () {
    // #endregion
    function RangePickerComponent(cog, dom) {
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
            var _this = this;
            /** @type {?} */
            var item = (/** @type {?} */ (deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
            if (typeof val === 'boolean') {
                item.enabled = val;
            }
            (item.list || []).forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i._text = _this.dom.bypassSecurityTrustHtml(i.text);
            }));
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
                    template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [nzClassName]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [nzStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i._text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
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
        { type: DatePickerConfig },
        { type: DomSanitizer }
    ]; };
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
    /**
     * @type {?}
     * @private
     */
    RangePickerComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFFckk7SUErREUsYUFBYTtJQUViLDhCQUFZLEdBQXFCLEVBQVUsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhENUQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWlCQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLbEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FB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QUM3QixzQ0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIsOENBQThDOztJQUM5Qyx3Q0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIsbURBQXFDOztJQUNyQyw2Q0FBMEM7O0lBQzFDLDhDQUFnRTs7SUFHaEUsNENBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsbURBQWtDOztJQUNsQywwQ0FBeUI7O0lBQ3pCLDJDQUFxRDs7SUFDckQsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLCtDQUE2RDs7SUFDN0Qsc0NBQW9EOzs7OztJQUlqQixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSwgZml4RW5kVGltZU9mUmFuZ2UsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb25maWcsIERhdGVSYW5nZVBpY2tlckNvbmZpZywgRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQsIERhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdyYW5nZVBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVBpY2tlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IERhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBwcml2YXRlIF9jb2c6IERhdGVSYW5nZVBpY2tlckNvbmZpZztcbiAgQFZpZXdDaGlsZCgnY29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvbXA6IE56UmFuZ2VQaWNrZXJDb21wb25lbnQ7XG4gIHZhbHVlOiBEYXRlW10gPSBbXTtcblxuICBASW5wdXQoKSBuZ01vZGVsRW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLl9jb2cuc2hvcnRjdXRzLCB2YWwgPT0gbnVsbCA/IHt9IDogdmFsKSBhcyBEYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWw7XG4gICAgfVxuICAgIChpdGVtLmxpc3QgfHwgW10pLmZvckVhY2goaSA9PiB7XG4gICAgICBpLl90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zaG9ydGN1dCA9IGl0ZW07XG4gIH1cbiAgZ2V0IHNob3J0Y3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG9ydGN1dDtcbiAgfVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvLyAjcmVnaW9uIE5hdGl2ZSBwcm9wZXJ0aWVzXG5cbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKSBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKSBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBhbnk7XG4gIEBJbnB1dCgpIG56U2hvd1RpbWU6IGFueTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpNb2RlOiBhbnk7XG4gIEBJbnB1dCgpIG56UmFuZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IERhdGVQaWNrZXJDb25maWcsIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHtcbiAgICB0aGlzLl9jb2cgPSBkZWVwTWVyZ2VLZXkobmV3IERhdGVSYW5nZVBpY2tlckNvbmZpZygpLCB0cnVlLCBjb2cgJiYgY29nLnJhbmdlKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvZyk7XG4gIH1cblxuICBfbnpPbk9wZW5DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25QYW5lbENoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25QYW5lbENoYW5nZS5lbWl0KGUpO1xuICB9XG5cbiAgX256T25PayhlOiBhbnkpIHtcbiAgICB0aGlzLm56T25Pay5lbWl0KGUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoZTogW0RhdGUsIERhdGVdKSB7XG4gICAgZSA9IGZpeEVuZFRpbWVPZlJhbmdlKGUpO1xuICAgIHRoaXMub25DaGFuZ2VGbihlWzBdKTtcbiAgICB0aGlzLm5nTW9kZWxFbmQgPSBlWzFdO1xuICAgIHRoaXMubmdNb2RlbEVuZENoYW5nZS5lbWl0KGVbMV0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSAmJiB0aGlzLm5nTW9kZWxFbmQgPyBbdmFsdWUsIHRoaXMubmdNb2RlbEVuZF0gOiBbXTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWw6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF9mbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIC8vIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGNsaWNrU2hvcnRjdXQoaXRlbTogRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSB7XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW0uZm4odGhpcy52YWx1ZSBhcyBhbnkpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UodGhpcy52YWx1ZSBhcyBbRGF0ZSwgRGF0ZV0pO1xuICAgIGlmICh0aGlzLl9zaG9ydGN1dC5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY29tcC5jbG9zZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==