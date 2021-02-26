/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@delon/util/config'), require('@delon/util/date-time'), require('@delon/util/decorator'), require('@delon/util/other'), require('@angular/common'), require('ng-zorro-antd/date-picker'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/date-picker', ['exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@delon/util/config', '@delon/util/date-time', '@delon/util/decorator', '@delon/util/other', '@angular/common', 'ng-zorro-antd/date-picker', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['date-picker'] = {}), global.ng.core, global.ng.forms, global.ng.platformBrowser, global.config, global.dateTime, global.decorator, global.other, global.ng.common, global['ng-zorro-antd/date-picker'], global.rxjs));
}(this, (function (exports, core, forms, platformBrowser, config, dateTime, decorator, other, common, datePicker, rxjs) { 'use strict';

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
    var RangePickerComponent = /** @class */ (function () {
        // #endregion
        function RangePickerComponent(dom, configSrv) {
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
    RangePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'range-picker',
                    exportAs: 'rangePicker',
                    template: "<nz-range-picker\n  #comp\n  [ngModel]=\"value\"\n  (ngModelChange)=\"valueChange($event)\"\n  [nzAllowClear]=\"nzAllowClear\"\n  [nzAutoFocus]=\"nzAutoFocus\"\n  [ngClass]=\"nzClassName\"\n  [nzDisabled]=\"nzDisabled\"\n  [nzSize]=\"nzSize\"\n  [nzDisabledDate]=\"nzDisabledDate\"\n  [nzLocale]=\"nzLocale\"\n  [nzPopupStyle]=\"nzPopupStyle\"\n  [nzDropdownClassName]=\"nzDropdownClassName\"\n  [ngStyle]=\"nzStyle\"\n  [nzPlaceHolder]=\"nzPlaceHolder\"\n  (nzOnOpenChange)=\"_nzOnOpenChange($event)\"\n  [nzDateRender]=\"nzDateRender\"\n  [nzDisabledTime]=\"nzDisabledTime\"\n  [nzFormat]=\"nzFormat\"\n  [nzRenderExtraFooter]=\"nzRenderExtraFooter || (shortcut?.enabled ? shortcutTpl : null)\"\n  [nzShowTime]=\"nzShowTime\"\n  [nzShowToday]=\"nzShowToday\"\n  [nzMode]=\"nzMode\"\n  [nzRanges]=\"nzRanges\"\n  (nzOnPanelChange)=\"_nzOnPanelChange($event)\"\n  (nzOnOk)=\"_nzOnOk($event)\"\n></nz-range-picker>\n<ng-template #shortcutTpl>\n  <a *ngFor=\"let i of shortcut?.list; let first = first\" (click)=\"clickShortcut(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n</ng-template>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: core.forwardRef(function () { return RangePickerComponent; }),
                        },
                    ]
                },] }
    ];
    /** @nocollapse */
    RangePickerComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: config.AlainConfigService }
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
        decorator.InputBoolean(),
        __metadata("design:type", Boolean)
    ], RangePickerComponent.prototype, "nzShowToday", void 0);

    var RangePickerShortcutTplComponent = /** @class */ (function () {
        function RangePickerShortcutTplComponent() {
            this.list = [];
        }
        RangePickerShortcutTplComponent.prototype.click = function (_) { };
        return RangePickerShortcutTplComponent;
    }());
    RangePickerShortcutTplComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '',
                    template: "\n    <ng-template #tpl>\n      <a *ngFor=\"let i of list; let first = first\" (click)=\"click(i)\" [innerHTML]=\"i._text\" [ngClass]=\"{ 'ml-sm': !first }\"></a>\n    </ng-template>\n  "
                },] }
    ];
    RangePickerShortcutTplComponent.propDecorators = {
        tpl: [{ type: core.ViewChild, args: ['tpl', { static: true },] }]
    };

    var RangePickerDirective = /** @class */ (function () {
        function RangePickerDirective(dom, configSrv, nativeComp, resolver, injector) {
            this.dom = dom;
            this.nativeComp = nativeComp;
            this.resolver = resolver;
            this.injector = injector;
            this.destroy$ = new rxjs.Subject();
            this.shortcutFactory = null;
            this.start = null;
            this.end = null;
            this.ngModelEndChange = new core.EventEmitter();
            other.assert(!!nativeComp, "It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]=\"i.start\" extend [(ngModelEnd)]=\"i.end\" shortcut></nz-range-picker>'");
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
        Object.defineProperty(RangePickerDirective.prototype, "shortcut", {
            get: function () {
                return this._shortcut;
            },
            set: function (val) {
                var _this = this;
                var item = other.deepMergeKey({ list: [] }, true, this.defaultShortcuts, val == null ? {} : val);
                if (typeof val !== 'object') {
                    item.enabled = val !== false;
                }
                (item.list || []).forEach(function (i) {
                    i._text = _this.dom.bypassSecurityTrustHtml(i.text);
                });
                this._shortcut = item;
                this.refreshShortcut();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangePickerDirective.prototype, "dp", {
            get: function () {
                return this.nativeComp.datePicker;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RangePickerDirective.prototype, "srv", {
            get: function () {
                return this.dp.datePickerService;
            },
            enumerable: false,
            configurable: true
        });
        RangePickerDirective.prototype.cd = function () {
            this.dp.cdr.markForCheck();
        };
        RangePickerDirective.prototype.overrideNative = function () {
            var _this = this;
            var dp = this.dp;
            dp.writeValue = function (value) {
                var dates = (value && _this.ngModelEnd ? [value, _this.ngModelEnd] : []).filter(function (w) { return !!w; });
                _this.srv.setValue(_this.srv.makeValue(dates));
                _this.start = dates.length > 0 ? dates[0] : null;
                _this.end = dates.length > 0 ? dates[1] : null;
                _this.cd();
            };
            var oldOnChangeFn = dp.onChangeFn;
            dp.onChangeFn = function (list) {
                var _a;
                var start = null;
                var end = null;
                if (list.length > 0 && list.filter(function (w) { return w != null; }).length === 2) {
                    _a = __read(dateTime.fixEndTimeOfRange([list[0], list[1]]), 2), start = _a[0], end = _a[1];
                }
                _this.start = start;
                _this.end = end;
                oldOnChangeFn(start);
                _this.ngModelEnd = end;
                _this.ngModelEndChange.emit(end);
            };
        };
        RangePickerDirective.prototype.refreshShortcut = function () {
            var _this = this;
            if (!this._shortcut) {
                return;
            }
            var _a = this._shortcut, enabled = _a.enabled, list = _a.list;
            var extraFooter;
            if (!this.nativeComp || !enabled) {
                extraFooter = undefined;
            }
            else {
                if (!this.shortcutFactory) {
                    var factory = this.resolver.resolveComponentFactory(RangePickerShortcutTplComponent);
                    this.shortcutFactory = factory.create(this.injector);
                }
                var instance = this.shortcutFactory.instance;
                instance.list = list;
                instance.click = function (item) {
                    var res = item.fn([_this.start, _this.end]);
                    _this.srv.setValue(_this.srv.makeValue(res));
                    _this.dp.onChangeFn(res);
                    _this.dp.close();
                };
                extraFooter = instance.tpl;
            }
            this.nativeComp.datePicker.extraFooter = extraFooter;
            Promise.resolve().then(function () { return _this.cd(); });
        };
        RangePickerDirective.prototype.ngAfterViewInit = function () {
            this.overrideNative();
            this.refreshShortcut();
        };
        RangePickerDirective.prototype.destoryShortcut = function () {
            if (this.shortcutFactory != null) {
                this.shortcutFactory.destroy();
            }
        };
        RangePickerDirective.prototype.ngOnDestroy = function () {
            this.destoryShortcut();
            this.destroy$.next();
            this.destroy$.complete();
        };
        return RangePickerDirective;
    }());
    RangePickerDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'nz-range-picker[extend]',
                    exportAs: 'extendRangePicker',
                },] }
    ];
    /** @nocollapse */
    RangePickerDirective.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: config.AlainConfigService },
        { type: datePicker.NzRangePickerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
        { type: core.ComponentFactoryResolver },
        { type: core.Injector }
    ]; };
    RangePickerDirective.propDecorators = {
        ngModelEnd: [{ type: core.Input }],
        shortcut: [{ type: core.Input }],
        ngModelEndChange: [{ type: core.Output }]
    };

    var COMPONENTS = [RangePickerComponent, RangePickerDirective, RangePickerShortcutTplComponent];
    var DatePickerModule = /** @class */ (function () {
        function DatePickerModule() {
        }
        return DatePickerModule;
    }());
    DatePickerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, forms.FormsModule, datePicker.NzDatePickerModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DatePickerModule = DatePickerModule;
    exports.RangePickerComponent = RangePickerComponent;
    exports.RangePickerDirective = RangePickerDirective;
    exports.ɵa = RangePickerShortcutTplComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=datePicker.umd.js.map
