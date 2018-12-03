/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util'), require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@delon/util', '@angular/core', '@angular/common', '@angular/forms', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}),global.delon.util,global.ng.core,global.ng.common,global.ng.forms,global.ngZorro.antd));
}(this, (function (exports,util,core,common,forms,ngZorroAntd) { 'use strict';

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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var DateRangePickerConfig = /** @class */ (function () {
        function DateRangePickerConfig() {
            this.nzFormat = 'yyyy-MM-dd';
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = { 'position': 'relative' };
            this.nzShowToday = true;
        }
        return DateRangePickerConfig;
    }());
    var DatePickerConfig = /** @class */ (function () {
        function DatePickerConfig() {
        }
        return DatePickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            this.onChangeFn = function () { return void 0; };
            this.onTouchedFn = function () { return void 0; };
            Object.assign(this, new DateRangePickerConfig(), cog && cog.range);
        }
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
         * @param {?} fn
         * @return {?}
         */
        RangePickerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouchedFn = fn;
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
        RangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'range-picker',
                        template: "<nz-range-picker\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [nzClassName]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [nzStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(function () { return RangePickerComponent; }),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        RangePickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerConfig }
            ];
        };
        RangePickerComponent.propDecorators = {
            ngModelEnd: [{ type: core.Input }],
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [RangePickerComponent];
    var DatePickerModule = /** @class */ (function () {
        function DatePickerModule() {
        }
        /**
         * @return {?}
         */
        DatePickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DatePickerModule,
                    providers: [DatePickerConfig],
                };
            };
        DatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return DatePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.RangePickerComponent = RangePickerComponent;
    exports.DatePickerModule = DatePickerModule;
    exports.DateRangePickerConfig = DateRangePickerConfig;
    exports.DatePickerConfig = DatePickerConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=datePicker.umd.js.map