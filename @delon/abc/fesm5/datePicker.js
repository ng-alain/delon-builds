import { __assign, __decorate, __metadata, __spread } from 'tslib';
import { EventEmitter, Component, forwardRef, ViewChild, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { getTimeDistance, deepMergeKey, fixEndTimeOfRange, AlainConfigService, InputBoolean } from '@delon/util';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: range.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [RangePickerComponent];
var DatePickerModule = /** @class */ (function () {
    function DatePickerModule() {
    }
    DatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzDatePickerModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return DatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: datePicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DatePickerModule, RangePickerComponent };
//# sourceMappingURL=datePicker.js.map
