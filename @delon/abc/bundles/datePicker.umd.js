/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@delon/util/date-time'), require('@delon/util/decorator'), require('@delon/util/other'), require('@angular/platform-browser'), require('@delon/util/config'), require('ng-zorro-antd/date-picker'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@angular/core', '@angular/forms', '@delon/util/date-time', '@delon/util/decorator', '@delon/util/other', '@angular/platform-browser', '@delon/util/config', 'ng-zorro-antd/date-picker', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}), global.ng.core, global.ng.forms, global.dateTime, global.decorator, global.other, global.ng.platformBrowser, global.i2, global['ng-zorro-antd/date-picker'], global.ng.common));
}(this, (function (exports, i0, i4, dateTime, decorator, other, i1, i2, i3, i5) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    var RangePickerComponent = /** @class */ (function () {
        // #endregion
        function RangePickerComponent(dom, configSrv) {
            this.dom = dom;
            this.value = [];
            this.ngModelEndChange = new i0.EventEmitter();
            // #region Native properties
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzOnOpenChange = new i0.EventEmitter();
            this.nzShowToday = true;
            this.nzOnPanelChange = new i0.EventEmitter();
            this.nzOnOk = new i0.EventEmitter();
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
                            fn: function () { return dateTime.getTimeDistance('today'); },
                        },
                        {
                            text: '昨天',
                            fn: function () { return dateTime.getTimeDistance('yesterday'); },
                        },
                        {
                            text: '近3天',
                            fn: function () { return dateTime.getTimeDistance(-2); },
                        },
                        {
                            text: '近7天',
                            fn: function () { return dateTime.getTimeDistance(-6); },
                        },
                        {
                            text: '本周',
                            fn: function () { return dateTime.getTimeDistance('week'); },
                        },
                        {
                            text: '本月',
                            fn: function () { return dateTime.getTimeDistance('month'); },
                        },
                        {
                            text: '全年',
                            fn: function () { return dateTime.getTimeDistance('year'); },
                        },
                    ],
                },
            });
            this.defaultShortcuts = Object.assign({}, cog.shortcuts);
            Object.assign(this, cog);
        }
        Object.defineProperty(RangePickerComponent.prototype, "shortcut", {
            get: function () {
                return this._shortcut;
            },
            set: function (val) {
                var _this = this;
                var item = other.deepMergeKey({}, true, this.defaultShortcuts, val == null ? {} : val);
                if (typeof val === 'boolean') {
                    item.enabled = val;
                }
                (item.list || []).forEach(function (i) {
                    i._text = _this.dom.bypassSecurityTrustHtml(i.text);
                });
                this._shortcut = item;
            },
            enumerable: false,
            configurable: true
        });
        RangePickerComponent.prototype._nzOnOpenChange = function (e) {
            this.nzOnOpenChange.emit(e);
        };
        RangePickerComponent.prototype._nzOnPanelChange = function (e) {
            this.nzOnPanelChange.emit(e);
        };
        RangePickerComponent.prototype._nzOnOk = function (e) {
            this.nzOnOk.emit(e);
        };
        RangePickerComponent.prototype.valueChange = function (e) {
            e = dateTime.fixEndTimeOfRange(e);
            this.onChangeFn(e[0]);
            this.ngModelEnd = e[1];
            this.ngModelEndChange.emit(e[1]);
        };
        RangePickerComponent.prototype.writeValue = function (value) {
            this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
        };
        RangePickerComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        RangePickerComponent.prototype.registerOnTouched = function (_fn) {
            // this.onTouchedFn = fn;
        };
        RangePickerComponent.prototype.setDisabledState = function (disabled) {
            this.nzDisabled = disabled;
        };
        RangePickerComponent.prototype.clickShortcut = function (item) {
            this.value = item.fn(this.value);
            this.valueChange(this.value);
            if (this._shortcut.closed) {
                // tslint:disable-next-line:no-string-literal
                this.comp['picker'].hideOverlay();
            }
        };
        return RangePickerComponent;
    }());
    /** @nocollapse */ RangePickerComponent.ɵfac = function RangePickerComponent_Factory(t) { return new (t || RangePickerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.AlainConfigService)); };
    /** @nocollapse */ RangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: RangePickerComponent, selector: "range-picker", inputs: { ngModelEnd: "ngModelEnd", shortcut: "shortcut", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzClassName: "nzClassName", nzDisabled: "nzDisabled", nzSize: "nzSize", nzStyle: "nzStyle", nzDisabledDate: "nzDisabledDate", nzLocale: "nzLocale", nzPopupStyle: "nzPopupStyle", nzDropdownClassName: "nzDropdownClassName", nzPlaceHolder: "nzPlaceHolder", nzDateRender: "nzDateRender", nzFormat: "nzFormat", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzShowTime: "nzShowTime", nzShowToday: "nzShowToday", nzMode: "nzMode", nzRanges: "nzRanges" }, outputs: { ngModelEndChange: "ngModelEndChange", nzOnOpenChange: "nzOnOpenChange", nzOnPanelChange: "nzOnPanelChange", nzOnOk: "nzOnOk" }, providers: [
            {
                provide: i4.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: i0.forwardRef((function () { return RangePickerComponent; })),
            },
        ], viewQueries: [{ propertyName: "comp", first: true, predicate: ["comp"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["rangePicker"], ngImport: i0__namespace, template: "<nz-range-picker\n  #comp\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [ngClass]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [ngStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list; let first = first\" (click)=\"clickShortcut(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n</ng-template>\n", directives: [{ type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzPlaceHolder", "nzPopupStyle", "nzSize", "nzShowToday", "nzMode", "nzShowNow", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzId", "nzShowTime", "nzFormat", "nzLocale", "nzOpen", "nzDisabledDate", "nzDropdownClassName", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzRanges"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Boolean)
    ], RangePickerComponent.prototype, "nzShowToday", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RangePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'range-picker',
                        exportAs: 'rangePicker',
                        templateUrl: './range.component.html',
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: i0.forwardRef((function () { return RangePickerComponent; })),
                            },
                        ],
                    }]
            }], function () { return [{ type: i1.DomSanitizer }, { type: i2.AlainConfigService }]; }, { comp: [{
                    type: i0.ViewChild,
                    args: ['comp', { static: false }]
                }], ngModelEnd: [{
                    type: i0.Input
                }], shortcut: [{
                    type: i0.Input
                }], ngModelEndChange: [{
                    type: i0.Output
                }], nzAllowClear: [{
                    type: i0.Input
                }], nzAutoFocus: [{
                    type: i0.Input
                }], nzClassName: [{
                    type: i0.Input
                }], nzDisabled: [{
                    type: i0.Input
                }], nzSize: [{
                    type: i0.Input
                }], nzStyle: [{
                    type: i0.Input
                }], nzDisabledDate: [{
                    type: i0.Input
                }], nzLocale: [{
                    type: i0.Input
                }], nzPopupStyle: [{
                    type: i0.Input
                }], nzDropdownClassName: [{
                    type: i0.Input
                }], nzPlaceHolder: [{
                    type: i0.Input
                }], nzOnOpenChange: [{
                    type: i0.Output
                }], nzDateRender: [{
                    type: i0.Input
                }], nzFormat: [{
                    type: i0.Input
                }], nzDisabledTime: [{
                    type: i0.Input
                }], nzRenderExtraFooter: [{
                    type: i0.Input
                }], nzShowTime: [{
                    type: i0.Input
                }], nzShowToday: [{
                    type: i0.Input
                }], nzMode: [{
                    type: i0.Input
                }], nzRanges: [{
                    type: i0.Input
                }], nzOnPanelChange: [{
                    type: i0.Output
                }], nzOnOk: [{
                    type: i0.Output
                }] });
    })();

    var COMPONENTS = [RangePickerComponent];
    var DatePickerModule = /** @class */ (function () {
        function DatePickerModule() {
        }
        return DatePickerModule;
    }());
    /** @nocollapse */ DatePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatePickerModule });
    /** @nocollapse */ DatePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatePickerModule_Factory(t) { return new (t || DatePickerModule)(); }, imports: [[i5.CommonModule, i4.FormsModule, i3.NzDatePickerModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatePickerModule, { declarations: [RangePickerComponent], imports: [i5.CommonModule, i4.FormsModule, i3.NzDatePickerModule], exports: [RangePickerComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i5.CommonModule, i4.FormsModule, i3.NzDatePickerModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DatePickerModule = DatePickerModule;
    exports.RangePickerComponent = RangePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datePicker.umd.js.map
