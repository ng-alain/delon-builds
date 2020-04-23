/**
 * @fileoverview added by tsickle
 * Generated from: range.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService, } from '@delon/theme';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsa0JBQWtCLEdBSW5CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWNuRSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFxRC9CLFlBQW9CLEdBQWlCLEVBQUUsU0FBNkI7UUFBaEQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhEckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWlCQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O2NBSzVDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUEwQyxXQUFXLEVBQUU7WUFDaEYsUUFBUSxFQUFFLFlBQVk7WUFD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SUFDM0Isd0NBQXVCOztJQUN2Qiw4Q0FBNkI7O0lBQzdCLG1EQUF1RTs7SUFDdkUsMENBQXlCOztJQUN6QiwyQ0FBcUQ7O0lBQ3JELHNDQUFxQjs7SUFDckIsd0NBQXVCOztJQUN2QiwrQ0FBNkQ7O0lBQzdELHNDQUFvRDs7Ozs7SUFJeEMsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgQWxhaW5Db25maWdTZXJ2aWNlLFxuICBBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZyxcbiAgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dCxcbiAgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dEl0ZW0sXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXksIGZpeEVuZFRpbWVPZlJhbmdlLCBnZXRUaW1lRGlzdGFuY2UsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56UmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdyYW5nZVBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVBpY2tlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKHZhbDogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2hvcnRjdXQ6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gIHByaXZhdGUgZGVmYXVsdFNob3J0Y3V0czogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgQFZpZXdDaGlsZCgnY29tcCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvbXA6IE56UmFuZ2VQaWNrZXJDb21wb25lbnQ7XG4gIHZhbHVlOiBEYXRlW10gPSBbXTtcblxuICBASW5wdXQoKSBuZ01vZGVsRW5kOiBEYXRlO1xuICBASW5wdXQoKVxuICBzZXQgc2hvcnRjdXQodmFsOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0IHwgbnVsbCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuZGVmYXVsdFNob3J0Y3V0cywgdmFsID09IG51bGwgPyB7fSA6IHZhbCkgYXMgQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpdGVtLmVuYWJsZWQgPSB2YWw7XG4gICAgfVxuICAgIChpdGVtLmxpc3QgfHwgW10pLmZvckVhY2goaSA9PiB7XG4gICAgICBpLl90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS50ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zaG9ydGN1dCA9IGl0ZW07XG4gIH1cbiAgZ2V0IHNob3J0Y3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG9ydGN1dDtcbiAgfVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmdNb2RlbEVuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAvLyAjcmVnaW9uIE5hdGl2ZSBwcm9wZXJ0aWVzXG5cbiAgQElucHV0KCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIHJhbmdlXG4gIEBJbnB1dCgpIG56RGF0ZVJlbmRlcjogYW55O1xuICBASW5wdXQoKSBuekZvcm1hdDogYW55O1xuICBASW5wdXQoKSBuekRpc2FibGVkVGltZTogYW55O1xuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBuelNob3dUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogYW55O1xuICBASW5wdXQoKSBuelJhbmdlczogYW55O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplciwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25zdCBjb2cgPSBjb25maWdTcnYubWVyZ2U8QWxhaW5EYXRlUmFuZ2VQaWNrZXJDb25maWcsICdkYXRhUmFuZ2UnPignZGF0YVJhbmdlJywge1xuICAgICAgbnpGb3JtYXQ6ICd5eXl5LU1NLWRkJyxcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIG56QXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG56UG9wdXBTdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXG4gICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfku4rlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgndG9kYXknKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmmKjlpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVzdGVyZGF5JyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn6L+RM+WkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKC0yKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5E35aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTYpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+acrOWRqCcsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd3ZWVrJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5pyIJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ21vbnRoJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5YWo5bm0JyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3llYXInKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmRlZmF1bHRTaG9ydGN1dHMgPSB7IC4uLmNvZy5zaG9ydGN1dHMgfSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIF9uek9uT3BlbkNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPblBhbmVsQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQoZSk7XG4gIH1cblxuICBfbnpPbk9rKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9rLmVtaXQoZSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShlOiBbRGF0ZSwgRGF0ZV0pIHtcbiAgICBlID0gZml4RW5kVGltZU9mUmFuZ2UoZSk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKGVbMF0pO1xuICAgIHRoaXMubmdNb2RlbEVuZCA9IGVbMV07XG4gICAgdGhpcy5uZ01vZGVsRW5kQ2hhbmdlLmVtaXQoZVsxXSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlICYmIHRoaXMubmdNb2RlbEVuZCA/IFt2YWx1ZSwgdGhpcy5uZ01vZGVsRW5kXSA6IFtdO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbDogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoX2ZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgLy8gdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgY2xpY2tTaG9ydGN1dChpdGVtOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSkge1xuICAgIHRoaXMudmFsdWUgPSBpdGVtLmZuKHRoaXMudmFsdWUgYXMgYW55KTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlKHRoaXMudmFsdWUgYXMgW0RhdGUsIERhdGVdKTtcbiAgICBpZiAodGhpcy5fc2hvcnRjdXQuY2xvc2VkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgICh0aGlzLmNvbXAgYXMgTnpTYWZlQW55KVsncGlja2VyJ10uaGlkZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==