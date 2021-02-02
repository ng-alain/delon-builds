import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService } from '@delon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { InputBoolean } from '@delon/util/decorator';
import { deepMergeKey } from '@delon/util/other';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@delon/util/config";
import * as i3 from "ng-zorro-antd/date-picker";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
export class RangePickerComponent {
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
/** @nocollapse */ RangePickerComponent.ɵfac = function RangePickerComponent_Factory(t) { return new (t || RangePickerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.AlainConfigService)); };
/** @nocollapse */ RangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: RangePickerComponent, selector: "range-picker", inputs: { ngModelEnd: "ngModelEnd", shortcut: "shortcut", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzClassName: "nzClassName", nzDisabled: "nzDisabled", nzSize: "nzSize", nzStyle: "nzStyle", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzPlaceHolder: "nzPlaceHolder", nzDateRender: "nzDateRender", nzFormat: "nzFormat", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowTime: "nzShowTime", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges" }, outputs: { ngModelEndChange: "ngModelEndChange", nzOnOpenChange: "nzOnOpenChange", nzOnPanelChange: "nzOnPanelChange", nzOnOk: "nzOnOk" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef((() => RangePickerComponent)),
        },
    ], viewQueries: [{ propertyName: "comp", first: true, predicate: ["comp"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["rangePicker"], ngImport: i0, template: "<nz-range-picker\n  #comp\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [ngClass]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [ngStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list; let first = first\" (click)=\"clickShortcut(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n</ng-template>\n", directives: [{ type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzPlaceHolder", "nzPopupStyle", "nzSize", "nzShowToday", "nzMode", "nzShowNow", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzId", "nzShowTime", "nzFormat", "nzLocale", "nzOpen", "nzDisabledDate", "nzDropdownClassName", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzRanges"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], RangePickerComponent.prototype, "nzShowToday", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RangePickerComponent, [{
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
    }], function () { return [{ type: i1.DomSanitizer }, { type: i2.AlainConfigService }]; }, { comp: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9kYXRlLXBpY2tlci9yYW5nZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFrRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBY25FLE1BQU0sT0FBTyxvQkFBb0I7SUFtRC9CLGFBQWE7SUFFYixZQUFvQixHQUFpQixFQUFFLFNBQTZCO1FBQWhELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFoRHJDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFpQkEscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUvRCw0QkFBNEI7UUFFbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFRdkMsZ0JB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a0JBQXRCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ2EsZUFBZTtrQkFBakMsTUFBTTtZQUNZLE1BQU07a0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IGZpeEVuZFRpbWVPZlJhbmdlLCBnZXRUaW1lRGlzdGFuY2UgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdyYW5nZVBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVBpY2tlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgQFZpZXdDaGlsZCgnY29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvbXA6IE56UmFuZ2VQaWNrZXJDb21wb25lbnQ7XG4gIHZhbHVlOiBEYXRlW10gPSBbXTtcblxuICBASW5wdXQoKSBuZ01vZGVsRW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuZGVmYXVsdFNob3J0Y3V0cywgdmFsID09IG51bGwgPyB7fSA6IHZhbCkgYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWw7XG4gICAgfVxuICAgIChpdGVtLmxpc3QgfHwgW10pLmZvckVhY2goaSA9PiB7XG4gICAgICBpLl90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zaG9ydGN1dCA9IGl0ZW07XG4gIH1cbiAgZ2V0IHNob3J0Y3V0KCk6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvcnRjdXQ7XG4gIH1cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5nTW9kZWxFbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgLy8gI3JlZ2lvbiBOYXRpdmUgcHJvcGVydGllc1xuXG4gIEBJbnB1dCgpIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMb2NhbGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpQb3B1cFN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvLyByYW5nZVxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IGFueTtcbiAgQElucHV0KCkgbnpGb3JtYXQ6IGFueTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU6IGFueTtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgbnpTaG93VGltZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGU6IGFueTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uc3QgY29nID0gY29uZmlnU3J2Lm1lcmdlKCdkYXRhUmFuZ2UnLCB7XG4gICAgICBuekZvcm1hdDogJ3l5eXktTU0tZGQnLFxuICAgICAgbnpBbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgbnpBdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgbnpQb3B1cFN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sXG4gICAgICBuelNob3dUb2RheTogdHJ1ZSxcbiAgICAgIHNob3J0Y3V0czoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgY2xvc2VkOiB0cnVlLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pITtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIF9uek9uT3BlbkNoYW5nZShlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPblBhbmVsQ2hhbmdlKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPbk9rKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubnpPbk9rLmVtaXQoZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShlOiBbRGF0ZSwgRGF0ZV0pOiB2b2lkIHtcbiAgICBlID0gZml4RW5kVGltZU9mUmFuZ2UoZSk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbDogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoX2ZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgLy8gdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgY2xpY2tTaG9ydGN1dChpdGVtOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBpdGVtLmZuKHRoaXMudmFsdWUgYXMgYW55KTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlKHRoaXMudmFsdWUgYXMgW0RhdGUsIERhdGVdKTtcbiAgICBpZiAodGhpcy5fc2hvcnRjdXQuY2xvc2VkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICh0aGlzLmNvbXAgYXMgTnpTYWZlQW55KVsncGlja2VyJ10uaGlkZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuei1yYW5nZS1waWNrZXJcbiAgI2NvbXBcbiAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAobmdNb2RlbENoYW5nZSk9XCJ2YWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgW256QWxsb3dDbGVhcl09XCJuekFsbG93Q2xlYXJcIlxuICBbbnpBdXRvRm9jdXNdPVwibnpBdXRvRm9jdXNcIlxuICBbbmdDbGFzc109XCJuekNsYXNzTmFtZVwiXG4gIFtuekRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICBbbnpTaXplXT1cIm56U2l6ZVwiXG4gIFtuekRpc2FibGVkRGF0ZV09XCJuekRpc2FibGVkRGF0ZVwiXG4gIFtuekxvY2FsZV09XCJuekxvY2FsZVwiXG4gIFtuelBvcHVwU3R5bGVdPVwibnpQb3B1cFN0eWxlXCJcbiAgW256RHJvcGRvd25DbGFzc05hbWVdPVwibnpEcm9wZG93bkNsYXNzTmFtZVwiXG4gIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxuICBbbnpQbGFjZUhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcbiAgKG56T25PcGVuQ2hhbmdlKT1cIl9uek9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgW256RGF0ZVJlbmRlcl09XCJuekRhdGVSZW5kZXJcIlxuICBbbnpEaXNhYmxlZFRpbWVdPVwibnpEaXNhYmxlZFRpbWVcIlxuICBbbnpGb3JtYXRdPVwibnpGb3JtYXRcIlxuICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJuelJlbmRlckV4dHJhRm9vdGVyIHx8IChzaG9ydGN1dD8uZW5hYmxlZCA/IHNob3J0Y3V0VHBsIDogbnVsbClcIlxuICBbbnpTaG93VGltZV09XCJuelNob3dUaW1lXCJcbiAgW256U2hvd1RvZGF5XT1cIm56U2hvd1RvZGF5XCJcbiAgW256TW9kZV09XCJuek1vZGVcIlxuICBbbnpSYW5nZXNdPVwibnpSYW5nZXNcIlxuICAobnpPblBhbmVsQ2hhbmdlKT1cIl9uek9uUGFuZWxDaGFuZ2UoJGV2ZW50KVwiXG4gIChuek9uT2spPVwiX256T25PaygkZXZlbnQpXCJcbj48L256LXJhbmdlLXBpY2tlcj5cbjxuZy10ZW1wbGF0ZSAjc2hvcnRjdXRUcGw+XG4gIDxhICpuZ0Zvcj1cImxldCBpIG9mIHNob3J0Y3V0Py5saXN0OyBsZXQgZmlyc3QgPSBmaXJzdFwiIChjbGljayk9XCJjbGlja1Nob3J0Y3V0KGkpXCIgW2lubmVySFRNTF09XCJpLl90ZXh0XCIgW25nQ2xhc3NdPVwieyAnbWwtc20nOiAhZmlyc3QgfVwiPjwvYT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=