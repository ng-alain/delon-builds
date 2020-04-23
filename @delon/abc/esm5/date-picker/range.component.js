/**
 * @fileoverview added by tsickle
 * Generated from: range.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService, } from '@delon/theme';
import { deepMergeKey, fixEndTimeOfRange, getTimeDistance, InputBoolean } from '@delon/util';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
var RangePickerComponent = /** @class */ (function () {
    // #endregion
    function RangePickerComponent(dom, configSrv) {
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
        var cog = configSrv.merge('dataRange', {
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
                        function () { return getTimeDistance('today'); }),
                    },
                    {
                        text: '昨天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance('yesterday'); }),
                    },
                    {
                        text: '近3天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance(-2); }),
                    },
                    {
                        text: '近7天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance(-6); }),
                    },
                    {
                        text: '本周',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance('week'); }),
                    },
                    {
                        text: '本月',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance('month'); }),
                    },
                    {
                        text: '全年',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return getTimeDistance('year'); }),
                    },
                ],
            },
        });
        this.defaultShortcuts = (/** @type {?} */ (__assign({}, cog.shortcuts)));
        Object.assign(this, cog);
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
            var item = (/** @type {?} */ (deepMergeKey({}, true, this.defaultShortcuts, val == null ? {} : val)));
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
            // tslint:disable-next-line:no-string-literal
            ((/** @type {?} */ (this.comp)))['picker'].hideOverlay();
        }
    };
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
                            function () { return RangePickerComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    RangePickerComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: AlainConfigService }
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbInJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsa0JBQWtCLEdBSW5CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRTtJQStERSxhQUFhO0lBRWIsOEJBQW9CLEdBQWlCLEVBQUUsU0FBNkI7UUFBaEQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWhEckMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQWlCQSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOztRQUl0RCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQVVWLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVF2QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1lBSzVDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUEwQyxXQUFXLEVBQUU7WUFDaEYsUUFBUSxFQUFFLFlBQVk7WUFDdEIsWUFBWSxFQUFF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QUErRDs7SUFJL0QsNENBQTZCOztJQUM3QiwyQ0FBNkI7O0lBQzdCLDJDQUE2Qjs7SUFDN0IsMENBQTZCOztJQUM3QixzQ0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIsOENBQThDOztJQUM5Qyx3Q0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIsbURBQXFDOztJQUNyQyw2Q0FBMEM7O0lBQzFDLDhDQUFnRTs7SUFHaEUsNENBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsbURBQXVFOztJQUN2RSwwQ0FBeUI7O0lBQ3pCLDJDQUFxRDs7SUFDckQsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLCtDQUE2RDs7SUFDN0Qsc0NBQW9EOzs7OztJQUl4QyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gIEFsYWluRGF0ZVJhbmdlUGlja2VyQ29uZmlnLFxuICBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0LFxuICBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSwgZml4RW5kVGltZU9mUmFuZ2UsIGdldFRpbWVEaXN0YW5jZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYW5nZS1waWNrZXInLFxuICBleHBvcnRBczogJ3JhbmdlUGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAodmFsOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9zaG9ydGN1dDogQWxhaW5EYXRlUmFuZ2VQaWNrZXJTaG9ydGN1dDtcbiAgcHJpdmF0ZSBkZWZhdWx0U2hvcnRjdXRzOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICBAVmlld0NoaWxkKCdjb21wJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29tcDogTnpSYW5nZVBpY2tlckNvbXBvbmVudDtcbiAgdmFsdWU6IERhdGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIG5nTW9kZWxFbmQ6IERhdGU7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG9ydGN1dCh2YWw6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQgfCBudWxsKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5kZWZhdWx0U2hvcnRjdXRzLCB2YWwgPT0gbnVsbCA/IHt9IDogdmFsKSBhcyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0O1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGl0ZW0uZW5hYmxlZCA9IHZhbDtcbiAgICB9XG4gICAgKGl0ZW0ubGlzdCB8fCBbXSkuZm9yRWFjaChpID0+IHtcbiAgICAgIGkuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpLnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3Nob3J0Y3V0ID0gaXRlbTtcbiAgfVxuICBnZXQgc2hvcnRjdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0Y3V0O1xuICB9XG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ01vZGVsRW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gIC8vICNyZWdpb24gTmF0aXZlIHByb3BlcnRpZXNcblxuICBASW5wdXQoKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuelNpemU6IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TG9jYWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gcmFuZ2VcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBhbnk7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBhbnk7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBhbnk7XG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIG56U2hvd1RpbWU6IGFueTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpNb2RlOiBhbnk7XG4gIEBJbnB1dCgpIG56UmFuZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZTxBbGFpbkRhdGVSYW5nZVBpY2tlckNvbmZpZywgJ2RhdGFSYW5nZSc+KCdkYXRhUmFuZ2UnLCB7XG4gICAgICBuekZvcm1hdDogJ3l5eXktTU0tZGQnLFxuICAgICAgbnpBbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgbnpBdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgbnpQb3B1cFN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sXG4gICAgICBuelNob3dUb2RheTogdHJ1ZSxcbiAgICAgIHNob3J0Y3V0czoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgY2xvc2VkOiB0cnVlLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+S7iuWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd0b2RheScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+aYqOWkqScsXG4gICAgICAgICAgICBmbjogKCkgPT4gZ2V0VGltZURpc3RhbmNlKCd5ZXN0ZXJkYXknKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfov5Ez5aSpJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoLTIpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ+i/kTflpKknLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgtNiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAn5pys5ZGoJyxcbiAgICAgICAgICAgIGZuOiAoKSA9PiBnZXRUaW1lRGlzdGFuY2UoJ3dlZWsnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICfmnKzmnIgnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgnbW9udGgnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICflhajlubQnLFxuICAgICAgICAgICAgZm46ICgpID0+IGdldFRpbWVEaXN0YW5jZSgneWVhcicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuZGVmYXVsdFNob3J0Y3V0cyA9IHsgLi4uY29nLnNob3J0Y3V0cyB9IGFzIEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgX256T25PcGVuQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uUGFuZWxDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChlKTtcbiAgfVxuXG4gIF9uek9uT2soZTogYW55KSB7XG4gICAgdGhpcy5uek9uT2suZW1pdChlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlKGU6IFtEYXRlLCBEYXRlXSkge1xuICAgIGUgPSBmaXhFbmRUaW1lT2ZSYW5nZShlKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4oZVswXSk7XG4gICAgdGhpcy5uZ01vZGVsRW5kID0gZVsxXTtcbiAgICB0aGlzLm5nTW9kZWxFbmRDaGFuZ2UuZW1pdChlWzFdKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgJiYgdGhpcy5uZ01vZGVsRW5kID8gW3ZhbHVlLCB0aGlzLm5nTW9kZWxFbmRdIDogW107XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChfZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBjbGlja1Nob3J0Y3V0KGl0ZW06IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtKSB7XG4gICAgdGhpcy52YWx1ZSA9IGl0ZW0uZm4odGhpcy52YWx1ZSBhcyBhbnkpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UodGhpcy52YWx1ZSBhcyBbRGF0ZSwgRGF0ZV0pO1xuICAgIGlmICh0aGlzLl9zaG9ydGN1dC5jbG9zZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgKHRoaXMuY29tcCBhcyBOelNhZmVBbnkpWydwaWNrZXInXS5oaWRlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxufVxuIl19