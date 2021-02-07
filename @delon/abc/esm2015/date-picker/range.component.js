import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService } from '@delon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { InputBoolean } from '@delon/util/decorator';
import { deepMergeKey } from '@delon/util/other';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
/**
 * @deprecated Will be removed in 12.0.0, Pls used `nz-range-picker` and `[extend]` directive instead, for examples:
 * ```html
 * <range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
 * ```
 * Changed to =>
 * ```html
 * <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
 * ```
 */
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
RangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'range-picker',
                exportAs: 'rangePicker',
                template: "<nz-range-picker\n  #comp\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [ngClass]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [ngStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list; let first = first\" (click)=\"clickShortcut(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n</ng-template>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => RangePickerComponent),
                    },
                ]
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFrRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRW5FOzs7Ozs7Ozs7R0FTRztBQWFILE1BQU0sT0FBTyxvQkFBb0I7SUFtRC9CLGFBQWE7SUFFYixZQUFvQixHQUFpQixFQUFFLFNBQTZCO1FBQWhELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFoRHJDLFVBQUssR0FBdUIsRUFBRSxDQUFDO1FBaUJaLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFL0QsNEJBQTRCO1FBRW5CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBVVYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBUXZDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBR2xDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8s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QVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsbW1DQUFxQztnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ3BEO2lCQUNGO2FBQ0Y7Ozs7WUE3QlEsWUFBWTtZQUNaLGtCQUFrQjs7O21CQWlDeEIsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBR25DLEtBQUs7dUJBQ0wsS0FBSzsrQkFjTCxNQUFNOzJCQUlOLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxNQUFNOzJCQUdOLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxNQUFNO3FCQUNOLE1BQU07O0FBSmtCO0lBQWYsWUFBWSxFQUFFOzt5REFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQsIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IGZpeEVuZFRpbWVPZlJhbmdlLCBnZXRUaW1lRGlzdGFuY2UgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLCBQbHMgdXNlZCBgbnotcmFuZ2UtcGlja2VyYCBhbmQgYFtleHRlbmRdYCBkaXJlY3RpdmUgaW5zdGVhZCwgZm9yIGV4YW1wbGVzOlxuICogYGBgaHRtbFxuICogPHJhbmdlLXBpY2tlciBbKG5nTW9kZWwpXT1cImkuc3RhcnRcIiBbKG5nTW9kZWxFbmQpXT1cImkuZW5kXCI+PC9yYW5nZS1waWNrZXI+XG4gKiBgYGBcbiAqIENoYW5nZWQgdG8gPT5cbiAqIGBgYGh0bWxcbiAqIDxuei1yYW5nZS1waWNrZXIgWyhuZ01vZGVsKV09XCJpLnN0YXJ0XCIgZXh0ZW5kIFsobmdNb2RlbEVuZCldPVwiaS5lbmRcIj48L256LXJhbmdlLXBpY2tlcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICBleHBvcnRBczogJ3JhbmdlUGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9zaG9ydGN1dDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBkZWZhdWx0U2hvcnRjdXRzOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBAVmlld0NoaWxkKCdjb21wJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudDtcbiAgdmFsdWU6IEFycmF5PERhdGUgfCBudWxsPiA9IFtdO1xuXG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5kZWZhdWx0U2hvcnRjdXRzLCB2YWwgPT0gbnVsbCA/IHt9IDogdmFsKSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbDtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKTogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zaG9ydGN1dDtcbiAgfVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvLyAjcmVnaW9uIE5hdGl2ZSBwcm9wZXJ0aWVzXG5cbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKSBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKSBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBuelNob3dUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogYW55O1xuICBASW5wdXQoKSBuelJhbmdlczogYW55O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplciwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25zdCBjb2cgPSBjb25maWdTcnYubWVyZ2UoJ2RhdGFSYW5nZScsIHtcbiAgICAgIG56Rm9ybWF0OiAneXl5eS1NTS1kZCcsXG4gICAgICBuekFsbG93Q2xlYXI6IHRydWUsXG4gICAgICBuekF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBuelBvcHVwU3R5bGU6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICAgIG56U2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5LuK5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3RvZGF5JyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pio5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llc3RlcmRheScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTPlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtMiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RN+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC02KSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzlkagnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnd2VlaycpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOaciCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCdtb250aCcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+WFqOW5tCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZWFyJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSkhO1xuICAgIHRoaXMuZGVmYXVsdFNob3J0Y3V0cyA9IHsgLi4uY29nLnNob3J0Y3V0cyB9IGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uT2soZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKGU6IFtEYXRlLCBEYXRlXSk6IHZvaWQge1xuICAgIGUgPSBmaXhFbmRUaW1lT2ZSYW5nZShlKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4oZVswXSk7XG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcbiAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlWzFdKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW107XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChfZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBjbGlja1Nob3J0Y3V0KGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW0uZm4odGhpcy52YWx1ZSBhcyBhbnkpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UodGhpcy52YWx1ZSBhcyBbRGF0ZSwgRGF0ZV0pO1xuICAgIGlmICh0aGlzLl9zaG9ydGN1dC5jbG9zZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgKHRoaXMuY29tcCBhcyBOelNhZmVBbnkpWydwaWNrZXInXS5oaWRlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxufVxuIl19