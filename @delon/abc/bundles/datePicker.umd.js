/**
 * @license ng-alain(cipchk@qq.com) v8.3.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@delon/util'), require('ng-zorro-antd/date-picker'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@angular/core', '@angular/forms', '@delon/util', 'ng-zorro-antd/date-picker', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}), global.ng.core, global.ng.forms, global.delon.util, global['ng-zorro-antd/date-picker'], global.ng.common));
}(this, function (exports, core, forms, util, datePicker, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePickerConfig = /** @class */ (function () {
        function DateRangePickerConfig() {
            this.nzFormat = 'yyyy-MM-dd';
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = { position: 'relative' };
            this.nzShowToday = true;
            this.shortcuts = {
                enabled: false,
                closed: true,
                list: [
                    {
                        text: '今天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance('today'); }),
                    },
                    {
                        text: '昨天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance('yesterday'); }),
                    },
                    {
                        text: '近3天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance(-2); }),
                    },
                    {
                        text: '近7天',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance(-6); }),
                    },
                    {
                        text: '本周',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance('week'); }),
                    },
                    {
                        text: '本月',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance('month'); }),
                    },
                    {
                        text: '全年',
                        fn: (/**
                         * @return {?}
                         */
                        function () { return util.getTimeDistance('year'); }),
                    },
                ],
            };
        }
        return DateRangePickerConfig;
    }());
    var DatePickerConfig = /** @class */ (function () {
        function DatePickerConfig() {
        }
        DatePickerConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DatePickerConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
        return DatePickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RangePickerComponent = /** @class */ (function () {
        // #endregion
        function RangePickerComponent(cog) {
            this.value = [];
            this.ngModelEndChange = new core.EventEmitter();
            // #region Native properties
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzOnOpenChange = new core.EventEmitter();
            this.nzShowToday = true;
            this.nzOnPanelChange = new core.EventEmitter();
            this.nzOnOk = new core.EventEmitter();
            this._cog = util.deepMergeKey(new DateRangePickerConfig(), true, cog && cog.range);
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
                var item = (/** @type {?} */ (util.deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
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
            e = util.fixEndTimeOfRange(e);
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
            { type: core.Component, args: [{
                        selector: 'range-picker',
                        exportAs: 'rangePicker',
                        template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [nzClassName]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [nzStyle]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i.text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef((/**
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
            comp: [{ type: core.ViewChild, args: ['comp', { static: false },] }],
            ngModelEnd: [{ type: core.Input }],
            shortcut: [{ type: core.Input }],
            ngModelEndChange: [{ type: core.Output }],
            nzAllowClear: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzClassName: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzDisabledDate: [{ type: core.Input }],
            nzLocale: [{ type: core.Input }],
            nzPopupStyle: [{ type: core.Input }],
            nzDropdownClassName: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzOnOpenChange: [{ type: core.Output }],
            nzDateRender: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }],
            nzDisabledTime: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzShowTime: [{ type: core.Input }],
            nzShowToday: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzRanges: [{ type: core.Input }],
            nzOnPanelChange: [{ type: core.Output }],
            nzOnOk: [{ type: core.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], RangePickerComponent.prototype, "nzShowToday", void 0);
        return RangePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [RangePickerComponent];
    var DatePickerModule = /** @class */ (function () {
        function DatePickerModule() {
        }
        DatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, datePicker.NzDatePickerModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return DatePickerModule;
    }());

    exports.DatePickerConfig = DatePickerConfig;
    exports.DatePickerModule = DatePickerModule;
    exports.DateRangePickerConfig = DateRangePickerConfig;
    exports.RangePickerComponent = RangePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=datePicker.umd.js.map
