/**
 * @license ng-alain(cipchk@qq.com) v9.0.0-alpha.2
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@delon/util'), require('ng-zorro-antd/date-picker'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@delon/util', 'ng-zorro-antd/date-picker', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}), global.ng.core, global.ng.forms, global.ng.platformBrowser, global.delon.util, global['ng-zorro-antd/date-picker'], global.ng.common));
}(this, (function (exports, core, forms, platformBrowser, util, datePicker, common) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: date-picker.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        DateRangePickerConfig.prototype.nzFormat;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzClassName;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzSize;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzStyle;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzAllowClear;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzAutoFocus;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzDisabled;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzDisabledDate;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzDisabledTime;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzLocale;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzPopupStyle;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzDropdownClassName;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzRenderExtraFooter;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzPlaceHolder;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzShowTime;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzShowToday;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzMode;
        /** @type {?} */
        DateRangePickerConfig.prototype.nzRanges;
        /** @type {?} */
        DateRangePickerConfig.prototype.shortcuts;
    }
    /**
     * @record
     */
    function DateRangePickerShortcut() { }
    if (false) {
        /**
         * Whether to enable, default: `false`
         * @type {?|undefined}
         */
        DateRangePickerShortcut.prototype.enabled;
        /**
         * Whether to close the panel after clicking, default: `true`
         * @type {?|undefined}
         */
        DateRangePickerShortcut.prototype.closed;
        /**
         * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
         * @type {?|undefined}
         */
        DateRangePickerShortcut.prototype.list;
    }
    /**
     * @record
     */
    function DateRangePickerShortcutItem() { }
    if (false) {
        /** @type {?} */
        DateRangePickerShortcutItem.prototype.text;
        /** @type {?} */
        DateRangePickerShortcutItem.prototype.fn;
        /* Skipping unhandled member: [key: string]: NzSafeAny;*/
    }
    var DatePickerConfig = /** @class */ (function () {
        function DatePickerConfig() {
        }
        DatePickerConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DatePickerConfig.ɵprov = core.ɵɵdefineInjectable({ factory: function DatePickerConfig_Factory() { return new DatePickerConfig(); }, token: DatePickerConfig, providedIn: "root" });
        return DatePickerConfig;
    }());
    if (false) {
        /** @type {?} */
        DatePickerConfig.prototype.range;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: range.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RangePickerComponent = /** @class */ (function () {
        // #endregion
        function RangePickerComponent(cog, dom) {
            this.dom = dom;
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
                var _this = this;
                /** @type {?} */
                var item = (/** @type {?} */ (util.deepMergeKey({}, true, this._cog.shortcuts, val == null ? {} : val)));
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
                // tslint:disable-next-line:no-string-literal
                ((/** @type {?} */ (this.comp)))['picker'].hideOverlay();
            }
        };
        RangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'range-picker',
                        exportAs: 'rangePicker',
                        template: "<nz-range-picker #comp\n                 [ngModel]=\"value\"\n                 (ngModelChange)=\"valueChange($event)\"\n                 [nzAllowClear]=\"nzAllowClear\"\n                 [nzAutoFocus]=\"nzAutoFocus\"\n                 [class]=\"nzClassName\"\n                 [nzDisabled]=\"nzDisabled\"\n                 [nzSize]=\"nzSize\"\n                 [nzDisabledDate]=\"nzDisabledDate\"\n                 [nzLocale]=\"nzLocale\"\n                 [nzPopupStyle]=\"nzPopupStyle\"\n                 [nzDropdownClassName]=\"nzDropdownClassName\"\n                 [style]=\"nzStyle\"\n                 [nzPlaceHolder]=\"nzPlaceHolder\"\n                 (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n                 [nzDateRender]=\"nzDateRender\"\n                 [nzDisabledTime]=\"nzDisabledTime\"\n                 [nzFormat]=\"nzFormat\"\n                 [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n                 [nzShowTime]=\"nzShowTime\"\n                 [nzShowToday]=\"nzShowToday\"\n                 [nzMode]=\"nzMode\"\n                 [nzRanges]=\"nzRanges\"\n                 (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n                 (nzOnOk)=\"_nzOnOk($event)\"></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list;let first=first\"\n     (click)=\"clickShortcut(i)\"\n     [innerHTML]=\"i._text\"\n     [ngClass]=\"{'ml-sm': !first}\"></a>\n</ng-template>\n",
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
            { type: DatePickerConfig },
            { type: platformBrowser.DomSanitizer }
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

})));
//# sourceMappingURL=datePicker.umd.js.map
