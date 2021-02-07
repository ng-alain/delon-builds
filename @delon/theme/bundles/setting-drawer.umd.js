/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/bidi'), require('@angular/common'), require('@delon/theme'), require('@delon/util/browser'), require('@delon/util/decorator'), require('@delon/util/other'), require('ng-zorro-antd/message'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/button'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/theme/setting-drawer', ['exports', '@angular/core', '@angular/cdk/bidi', '@angular/common', '@delon/theme', '@delon/util/browser', '@delon/util/decorator', '@delon/util/other', 'ng-zorro-antd/message', 'rxjs', 'rxjs/operators', '@angular/forms', 'ng-zorro-antd/alert', 'ng-zorro-antd/button', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/switch', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.theme = global.delon.theme || {}, global.delon.theme['setting-drawer'] = {}), global.ng.core, global.ng.cdk.bidi, global.ng.common, global.delon.theme, global.browser, global.decorator, global.other, global.message, global.rxjs, global.rxjs.operators, global.ng.forms, global.alert, global.button, global.divider, global.drawer, global.icon, global.input, global.inputNumber, global._switch, global.tabs, global.tooltip));
}(this, (function (exports, core, bidi, common, theme, browser, decorator, other, message, rxjs, operators, forms, alert, button, divider, drawer, icon, input, inputNumber, _switch, tabs, tooltip) { 'use strict';

    var SettingDrawerItemComponent = /** @class */ (function () {
        function SettingDrawerItemComponent() {
            this.i = {};
            this.pxVal = 0;
            this.format = function (value) { return value + " px"; };
        }
        Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
            set: function (val) {
                this.i = val;
                if (val.type === 'px') {
                    this.pxVal = +val.value.replace('px', '');
                }
            },
            enumerable: false,
            configurable: true
        });
        SettingDrawerItemComponent.prototype.pxChange = function (val) {
            this.i.value = val + "px";
        };
        return SettingDrawerItemComponent;
    }());
    SettingDrawerItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'setting-drawer-item',
                    template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n",
                    host: {
                        '[class.setting-drawer__body-item]': 'true',
                    }
                },] }
    ];
    SettingDrawerItemComponent.propDecorators = {
        data: [{ type: core.Input }]
    };

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

    var ALAINDEFAULTVAR = 'alain-default-vars';
    var DEFAULT_COLORS = [
        {
            key: 'dust',
            color: '#F5222D',
        },
        {
            key: 'volcano',
            color: '#FA541C',
        },
        {
            key: 'sunset',
            color: '#FAAD14',
        },
        {
            key: 'cyan',
            color: '#13C2C2',
        },
        {
            key: 'green',
            color: '#52C41A',
        },
        {
            key: 'daybreak',
            color: '#1890ff',
        },
        {
            key: 'geekblue',
            color: '#2F54EB',
        },
        {
            key: 'purple',
            color: '#722ED1',
        },
        {
            key: 'black',
            color: '#001529',
        },
    ];
    var DEFAULT_VARS = {
        'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
        'alain-default-header-hg': {
            label: '高',
            type: 'px',
            default: '64px',
            max: 300,
            min: 24,
        },
        'alain-default-header-bg': {
            label: '背景色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-header-padding': {
            label: '顶部左右内边距',
            type: 'px',
            default: '16px',
        },
        // 侧边栏
        'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
        'alain-default-aside-bg': {
            label: '背景',
            type: 'color',
            default: '#ffffff',
        },
        'alain-default-aside-collapsed-wd': {
            label: '收缩宽度',
            type: 'px',
            default: '64px',
        },
        'alain-default-aside-nav-padding-top-bottom': {
            label: '项上下内边距',
            type: 'px',
            default: '8px',
            step: 8,
        },
        // 主菜单
        'alain-default-aside-nav-fs': {
            label: '菜单字号',
            type: 'px',
            default: '14px',
            min: 14,
            max: 30,
        },
        'alain-default-aside-collapsed-nav-fs': {
            label: '收缩菜单字号',
            type: 'px',
            default: '24px',
            min: 24,
            max: 32,
        },
        'alain-default-aside-nav-item-height': {
            label: '菜单项高度',
            type: 'px',
            default: '38px',
            min: 24,
            max: 64,
        },
        'alain-default-aside-nav-text-color': {
            label: '菜单文本颜色',
            type: 'color',
            default: 'rgba(0, 0, 0, 0.65)',
            rgba: true,
        },
        'alain-default-aside-nav-text-hover-color': {
            label: '菜单文本悬停颜色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-aside-nav-group-text-color': {
            label: '菜单分组文本颜色',
            type: 'color',
            default: 'rgba(0, 0, 0, 0.43)',
            rgba: true,
        },
        'alain-default-aside-nav-selected-text-color': {
            label: '菜单激活时文本颜色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-aside-nav-selected-bg': {
            label: '菜单激活时背景颜色',
            type: 'color',
            default: '#fcfcfc',
        },
        // 内容
        'alain-default-content-bg': {
            label: '背景色',
            type: 'color',
            default: '#f5f7fa',
        },
        'alain-default-content-heading-bg': {
            label: '标题背景色',
            type: 'color',
            default: '#fafbfc',
        },
        'alain-default-content-heading-border': {
            label: '标题底部边框色',
            type: 'color',
            default: '#efe3e5',
        },
        'alain-default-content-padding': {
            label: '内边距',
            type: 'px',
            default: '24px',
            min: 0,
            max: 128,
            step: 8,
        },
        // zorro组件修正
        'form-state-visual-feedback-enabled': {
            label: '开启表单元素的视觉反馈',
            type: 'switch',
            default: true,
        },
        'preserve-white-spaces-enabled': {
            label: '开启 preserveWhitespaces',
            type: 'switch',
            default: true,
        },
        'nz-table-img-radius': {
            label: '表格中：图片圆角',
            type: 'px',
            default: '4px',
            min: 0,
            max: 128,
        },
        'nz-table-img-margin-right': {
            label: '表格中：图片右外边距',
            type: 'px',
            default: '4px',
            min: 0,
            max: 128,
        },
        'nz-table-img-max-width': {
            label: '表格中：图片最大宽度',
            type: 'px',
            default: '32px',
            min: 8,
            max: 128,
        },
        'nz-table-img-max-height': {
            label: '表格中：图片最大高度',
            type: 'px',
            default: '32px',
            min: 8,
            max: 128,
        },
    };

    var SettingDrawerComponent = /** @class */ (function () {
        function SettingDrawerComponent(cdr, msg, settingSrv, lazy, zone, doc, directionality) {
            this.cdr = cdr;
            this.msg = msg;
            this.settingSrv = settingSrv;
            this.lazy = lazy;
            this.zone = zone;
            this.doc = doc;
            this.directionality = directionality;
            this.autoApplyColor = true;
            this.devTips = "When the color can't be switched, you need to run it once: npm run color-less";
            this.loadedLess = false;
            this.destroy$ = new rxjs.Subject();
            this.dir = 'ltr';
            this.isDev = core.isDevMode();
            this.collapse = false;
            this.data = {};
            this.colors = DEFAULT_COLORS;
            this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
            this.resetData(this.cachedData, false);
        }
        Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
            get: function () {
                return this.settingSrv.layout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
            get: function () {
                return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
            get: function () {
                return DEFAULT_VARS['primary-color'].default;
            },
            enumerable: false,
            configurable: true
        });
        SettingDrawerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
            if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
                this.changeColor(this.color);
                this.runLess();
            }
        };
        SettingDrawerComponent.prototype.loadLess = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_b) {
                    if (this.loadedLess) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    return [2 /*return*/, this.lazy
                            .loadStyle('./assets/color.less', 'stylesheet/less')
                            .then(function () {
                            var lessConfigNode = _this.doc.createElement('script');
                            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
                            _this.doc.body.appendChild(lessConfigNode);
                        })
                            .then(function () { return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'); })
                            .then(function () {
                            _this.loadedLess = true;
                        })];
                });
            });
        };
        SettingDrawerComponent.prototype.genVars = function () {
            var _b;
            var _c = this, data = _c.data, color = _c.color, validKeys = _c.validKeys;
            var vars = (_b = {},
                _b["@primary-color"] = color,
                _b);
            validKeys.filter(function (key) { return key !== 'primary-color'; }).forEach(function (key) { return (vars["@" + key] = data[key].value); });
            this.setLayout(ALAINDEFAULTVAR, vars);
            return vars;
        };
        SettingDrawerComponent.prototype.runLess = function () {
            var _this = this;
            var _b = this, zone = _b.zone, msg = _b.msg, cdr = _b.cdr;
            var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
            setTimeout(function () {
                zone.runOutsideAngular(function () {
                    _this.loadLess().then(function () {
                        window.less.modifyVars(_this.genVars()).then(function () {
                            msg.success('成功');
                            msg.remove(msgId);
                            zone.run(function () { return cdr.detectChanges(); });
                        });
                    });
                });
            }, 200);
        };
        SettingDrawerComponent.prototype.toggle = function () {
            this.collapse = !this.collapse;
        };
        SettingDrawerComponent.prototype.changeColor = function (color) {
            var _this = this;
            this.color = color;
            Object.keys(DEFAULT_VARS)
                .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
                .forEach(function (key) { return delete _this.cachedData["@" + key]; });
            this.resetData(this.cachedData, false);
        };
        SettingDrawerComponent.prototype.setLayout = function (name, value) {
            this.settingSrv.setLayout(name, value);
        };
        SettingDrawerComponent.prototype.resetData = function (nowData, run) {
            var _this = this;
            if (run === void 0) { run = true; }
            nowData = nowData || {};
            var data = other.deepCopy(DEFAULT_VARS);
            Object.keys(data).forEach(function (key) {
                var value = nowData["@" + key] || data[key].default || '';
                data[key].value = value === "@primary-color" ? _this.color : value;
            });
            this.data = data;
            if (run) {
                this.cdr.detectChanges();
                this.runLess();
            }
        };
        Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
            get: function () {
                var _this = this;
                return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
            },
            enumerable: false,
            configurable: true
        });
        SettingDrawerComponent.prototype.apply = function () {
            this.runLess();
        };
        SettingDrawerComponent.prototype.reset = function () {
            this.color = this.DEFAULT_PRIMARY;
            this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
            this.resetData({});
        };
        SettingDrawerComponent.prototype.copyVar = function () {
            var vars = this.genVars();
            var copyContent = Object.keys(vars)
                .map(function (key) { return key + ": " + vars[key] + ";"; })
                .join('\n');
            browser.copy(copyContent);
            this.msg.success('Copy success');
        };
        SettingDrawerComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return SettingDrawerComponent;
    }());
    SettingDrawerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'setting-drawer',
                    template: "<nz-drawer [nzVisible]=\"collapse\" [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
                    host: {
                        '[class.setting-drawer]': 'true',
                        '[class.setting-drawer-rtl]': "dir === 'rtl'",
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    /** @nocollapse */
    SettingDrawerComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: message.NzMessageService },
        { type: theme.SettingsService },
        { type: other.LazyService },
        { type: core.NgZone },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    SettingDrawerComponent.propDecorators = {
        autoApplyColor: [{ type: core.Input }],
        devTips: [{ type: core.Input }]
    };
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], SettingDrawerComponent.prototype, "autoApplyColor", void 0);

    var COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];
    var SettingDrawerModule = /** @class */ (function () {
        function SettingDrawerModule() {
        }
        return SettingDrawerModule;
    }());
    SettingDrawerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        drawer.NzDrawerModule,
                        tooltip.NzToolTipModule,
                        divider.NzDividerModule,
                        tabs.NzTabsModule,
                        _switch.NzSwitchModule,
                        alert.NzAlertModule,
                        icon.NzIconModule,
                        input.NzInputModule,
                        inputNumber.NzInputNumberModule,
                        button.NzButtonModule,
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SettingDrawerComponent = SettingDrawerComponent;
    exports.SettingDrawerItemComponent = SettingDrawerItemComponent;
    exports.SettingDrawerModule = SettingDrawerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=setting-drawer.umd.js.map
