import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ɵɵngDeclareComponent, forwardRef, ɵsetClassMetadata, Component, ViewChild, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService } from '@delon/util/config';
import { getTimeDistance, fixEndTimeOfRange } from '@delon/util/date-time';
import { InputBoolean } from '@delon/util/decorator';
import { deepMergeKey } from '@delon/util/other';
import { NzDatePickerComponent, NzRangePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgClass, NgStyle, NgForOf, CommonModule } from '@angular/common';

class RangePickerComponent {
    // #endregion
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
        const cog = configSrv.merge('dataRange', {
            nzFormat: 'yyyy-MM-dd',
            nzAllowClear: true,
            nzAutoFocus: false,
            nzPopupStyle: { position: 'relative' },
            nzShowToday: true,
            shortcuts: {
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
            },
        });
        this.defaultShortcuts = Object.assign({}, cog.shortcuts);
        Object.assign(this, cog);
    }
    set shortcut(val) {
        const item = deepMergeKey({}, true, this.defaultShortcuts, val == null ? {} : val);
        if (typeof val === 'boolean') {
            item.enabled = val;
        }
        (item.list || []).forEach(i => {
            i._text = this.dom.bypassSecurityTrustHtml(i.text);
        });
        this._shortcut = item;
    }
    get shortcut() {
        return this._shortcut;
    }
    _nzOnOpenChange(e) {
        this.nzOnOpenChange.emit(e);
    }
    _nzOnPanelChange(e) {
        this.nzOnPanelChange.emit(e);
    }
    _nzOnOk(e) {
        this.nzOnOk.emit(e);
    }
    valueChange(e) {
        e = fixEndTimeOfRange(e);
        this.onChangeFn(e[0]);
        this.ngModelEnd = e[1];
        this.ngModelEndChange.emit(e[1]);
    }
    writeValue(value) {
        this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(_fn) {
        // this.onTouchedFn = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
    }
    clickShortcut(item) {
        this.value = item.fn(this.value);
        this.valueChange(this.value);
        if (this._shortcut.closed) {
            // tslint:disable-next-line:no-string-literal
            this.comp['picker'].hideOverlay();
        }
    }
}
/** @nocollapse */ RangePickerComponent.ɵfac = function RangePickerComponent_Factory(t) { return new (t || RangePickerComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(AlainConfigService)); };
/** @nocollapse */ RangePickerComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: RangePickerComponent, selector: "range-picker", inputs: { ngModelEnd: "ngModelEnd", shortcut: "shortcut", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzClassName: "nzClassName", nzDisabled: "nzDisabled", nzSize: "nzSize", nzStyle: "nzStyle", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzPlaceHolder: "nzPlaceHolder", nzDateRender: "nzDateRender", nzFormat: "nzFormat", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowTime: "nzShowTime", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges" }, outputs: { ngModelEndChange: "ngModelEndChange", nzOnOpenChange: "nzOnOpenChange", nzOnPanelChange: "nzOnPanelChange", nzOnOk: "nzOnOk" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef((() => RangePickerComponent)),
        },
    ], viewQueries: [{ propertyName: "comp", first: true, predicate: ["comp"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["rangePicker"], ngImport: i0, template: "<nz-range-picker\n  #comp\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [ngClass]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [ngStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list; let first = first\" (click)=\"clickShortcut(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n</ng-template>\n", directives: [{ type: NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzPlaceHolder", "nzPopupStyle", "nzSize", "nzShowToday", "nzMode", "nzShowNow", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzId", "nzShowTime", "nzFormat", "nzLocale", "nzOpen", "nzDisabledDate", "nzDropdownClassName", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzRanges"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { type: NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { type: NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], RangePickerComponent.prototype, "nzShowToday", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RangePickerComponent, [{
        type: Component,
        args: [{
                selector: 'range-picker',
                exportAs: 'rangePicker',
                templateUrl: './range.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef((() => RangePickerComponent)),
                    },
                ],
            }]
    }], function () { return [{ type: DomSanitizer }, { type: AlainConfigService }]; }, { comp: [{
            type: ViewChild,
            args: ['comp', { static: false }]
        }], ngModelEnd: [{
            type: Input
        }], shortcut: [{
            type: Input
        }], ngModelEndChange: [{
            type: Output
        }], nzAllowClear: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzClassName: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzDisabledDate: [{
            type: Input
        }], nzLocale: [{
            type: Input
        }], nzPopupStyle: [{
            type: Input
        }], nzDropdownClassName: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzOnOpenChange: [{
            type: Output
        }], nzDateRender: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzDisabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzShowTime: [{
            type: Input
        }], nzShowToday: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzRanges: [{
            type: Input
        }], nzOnPanelChange: [{
            type: Output
        }], nzOnOk: [{
            type: Output
        }] }); })();

const COMPONENTS = [RangePickerComponent];
class DatePickerModule {
}
/** @nocollapse */ DatePickerModule.ɵmod = ɵɵdefineNgModule({ type: DatePickerModule });
/** @nocollapse */ DatePickerModule.ɵinj = ɵɵdefineInjector({ factory: function DatePickerModule_Factory(t) { return new (t || DatePickerModule)(); }, imports: [[CommonModule, FormsModule, NzDatePickerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DatePickerModule, { declarations: [RangePickerComponent], imports: [CommonModule, FormsModule, NzDatePickerModule], exports: [RangePickerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzDatePickerModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DatePickerModule, RangePickerComponent };
//# sourceMappingURL=datePicker.js.map
