/**
 * @license ng-alain(cipchk@qq.com) v11.10.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@delon/acl'), require('@delon/theme'), require('@delon/util/other'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@delon/util/format'), require('@delon/abc/xlsx'), require('@angular/router'), require('ng-zorro-antd/dropdown'), require('@delon/util/config'), require('@delon/util/decorator'), require('@angular/forms'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/resizable'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/tooltip'), require('@delon/abc/let')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/st', ['exports', '@angular/core', '@angular/platform-browser', '@delon/acl', '@delon/theme', '@delon/util/other', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@delon/util/format', '@delon/abc/xlsx', '@angular/router', 'ng-zorro-antd/dropdown', '@delon/util/config', '@delon/util/decorator', '@angular/forms', 'ng-zorro-antd/badge', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/divider', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/menu', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/radio', 'ng-zorro-antd/resizable', 'ng-zorro-antd/table', 'ng-zorro-antd/tag', 'ng-zorro-antd/tooltip', '@delon/abc/let'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.st = {}), global.ng.core, global.ng.platformBrowser, global.delon.acl, global.delon.theme, global.other, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.format, global.delon.abc.xlsx, global.ng.router, global['ng-zorro-antd/dropdown'], global.config, global.decorator, global.ng.forms, global['ng-zorro-antd/badge'], global['ng-zorro-antd/checkbox'], global['ng-zorro-antd/divider'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/input'], global['ng-zorro-antd/menu'], global['ng-zorro-antd/popconfirm'], global['ng-zorro-antd/radio'], global.resizable, global['ng-zorro-antd/table'], global['ng-zorro-antd/tag'], global['ng-zorro-antd/tooltip'], global.delon.abc.let));
}(this, (function (exports, i0, platformBrowser, acl, theme, other, common, http, rxjs, operators, format, xlsx, router, dropdown, config, decorator, forms, badge, checkbox, divider, icon, input, menu, popconfirm, radio, resizable, table, tag, tooltip, _let) { 'use strict';

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
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
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var STRowSource = /** @class */ (function () {
        function STRowSource() {
            this.titles = {};
            this.rows = {};
        }
        STRowSource.prototype.add = function (type, path, ref) {
            this[type === 'title' ? 'titles' : 'rows'][path] = ref;
        };
        STRowSource.prototype.getTitle = function (path) {
            return this.titles[path];
        };
        STRowSource.prototype.getRow = function (path) {
            return this.rows[path];
        };
        return STRowSource;
    }());
    STRowSource.decorators = [
        { type: i0.Injectable }
    ];
    var STRowDirective = /** @class */ (function () {
        function STRowDirective(ref, source) {
            this.ref = ref;
            this.source = source;
        }
        STRowDirective.prototype.ngOnInit = function () {
            this.source.add(this.type, this.id, this.ref);
        };
        return STRowDirective;
    }());
    STRowDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[st-row]' },] }
    ];
    STRowDirective.ctorParameters = function () { return [
        { type: i0.TemplateRef },
        { type: STRowSource, decorators: [{ type: i0.Host }] }
    ]; };
    STRowDirective.propDecorators = {
        id: [{ type: i0.Input, args: ['st-row',] }],
        type: [{ type: i0.Input }]
    };

    var STWidgetRegistry = /** @class */ (function () {
        function STWidgetRegistry() {
            this._widgets = {};
        }
        Object.defineProperty(STWidgetRegistry.prototype, "widgets", {
            get: function () {
                return this._widgets;
            },
            enumerable: false,
            configurable: true
        });
        STWidgetRegistry.prototype.register = function (type, widget) {
            this._widgets[type] = widget;
        };
        STWidgetRegistry.prototype.has = function (type) {
            return this._widgets.hasOwnProperty(type);
        };
        STWidgetRegistry.prototype.get = function (type) {
            return this._widgets[type];
        };
        return STWidgetRegistry;
    }());
    STWidgetRegistry.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function STWidgetRegistry_Factory() { return new STWidgetRegistry(); }, token: STWidgetRegistry, providedIn: "root" });
    STWidgetRegistry.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    var STColumnSource = /** @class */ (function () {
        function STColumnSource(dom, rowSource, acl, i18nSrv, stWidgetRegistry) {
            this.dom = dom;
            this.rowSource = rowSource;
            this.acl = acl;
            this.i18nSrv = i18nSrv;
            this.stWidgetRegistry = stWidgetRegistry;
        }
        STColumnSource.prototype.setCog = function (val) {
            this.cog = val;
        };
        STColumnSource.prototype.fixPop = function (i, def) {
            if (i.pop == null || i.pop === false) {
                i.pop = false;
                return;
            }
            var pop = Object.assign({}, def);
            if (typeof i.pop === 'string') {
                pop.title = i.pop;
            }
            else if (typeof i.pop === 'object') {
                pop = Object.assign(Object.assign({}, pop), i.pop);
            }
            if (typeof pop.condition !== 'function') {
                pop.condition = function () { return false; };
            }
            i.pop = pop;
        };
        STColumnSource.prototype.btnCoerce = function (list) {
            var e_1, _c;
            if (!list)
                return [];
            var ret = [];
            var _d = this.cog, modal = _d.modal, drawer = _d.drawer, pop = _d.pop, btnIcon = _d.btnIcon;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    if (this.acl && item.acl && !this.acl.can(item.acl)) {
                        continue;
                    }
                    if (item.type === 'modal' || item.type === 'static') {
                        if (item.modal == null || item.modal.component == null) {
                            console.warn("[st] Should specify modal parameter when type is modal or static");
                            item.type = 'none';
                        }
                        else {
                            item.modal = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, modal), item.modal);
                        }
                    }
                    if (item.type === 'drawer') {
                        if (item.drawer == null || item.drawer.component == null) {
                            console.warn("[st] Should specify drawer parameter when type is drawer");
                            item.type = 'none';
                        }
                        else {
                            item.drawer = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, drawer), item.drawer);
                        }
                    }
                    if (item.type === 'del' && typeof item.pop === 'undefined') {
                        item.pop = true;
                    }
                    // pop
                    this.fixPop(item, pop);
                    if (item.icon) {
                        item.icon = Object.assign(Object.assign({}, btnIcon), (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
                    }
                    item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
                    // i18n
                    if (item.i18n && this.i18nSrv) {
                        item.text = this.i18nSrv.fanyi(item.i18n);
                    }
                    ret.push(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_c = list_1.return)) _c.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.btnCoerceIf(ret);
            return ret;
        };
        STColumnSource.prototype.btnCoerceIf = function (list) {
            var e_2, _c;
            try {
                for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var item = list_2_1.value;
                    if (!item.iif)
                        item.iif = function () { return true; };
                    item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
                    if (item.children && item.children.length > 0) {
                        this.btnCoerceIf(item.children);
                    }
                    else {
                        item.children = [];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (list_2_1 && !list_2_1.done && (_c = list_2.return)) _c.call(list_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        STColumnSource.prototype.fixedCoerce = function (list) {
            var countReduce = function (a, b) { return a + +b.width.toString().replace('px', ''); };
            // left width
            list
                .filter(function (w) { return w.fixed && w.fixed === 'left' && w.width; })
                .forEach(function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + "px"); });
            // right width
            list
                .filter(function (w) { return w.fixed && w.fixed === 'right' && w.width; })
                .reverse()
                .forEach(function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + "px"); });
        };
        STColumnSource.prototype.sortCoerce = function (item) {
            var res = this.fixSortCoerce(item);
            res.reName = Object.assign(Object.assign({}, this.cog.sortReName), res.reName);
            return res;
        };
        STColumnSource.prototype.fixSortCoerce = function (item) {
            if (typeof item.sort === 'undefined') {
                return { enabled: false };
            }
            var res = {};
            if (typeof item.sort === 'string') {
                res.key = item.sort;
            }
            else if (typeof item.sort !== 'boolean') {
                res = item.sort;
            }
            else if (typeof item.sort === 'boolean') {
                res.compare = function (a, b) { return a[item.indexKey] - b[item.indexKey]; };
            }
            if (!res.key) {
                res.key = item.indexKey;
            }
            res.enabled = true;
            return res;
        };
        STColumnSource.prototype.filterCoerce = function (item) {
            var _this = this;
            if (item.filter == null) {
                return null;
            }
            var res = item.filter;
            res.type = res.type || 'default';
            var icon = 'filter';
            var iconTheme = 'fill';
            if (res.type === 'keyword') {
                if (res.menus == null || res.menus.length === 0) {
                    res.menus = [{ value: '' }];
                }
                icon = 'search';
                iconTheme = 'outline';
            }
            if (res.menus.length === 0) {
                return null;
            }
            if (typeof res.multiple === 'undefined') {
                res.multiple = true;
            }
            res.confirmText = res.confirmText || this.cog.filterConfirmText;
            res.clearText = res.clearText || this.cog.filterClearText;
            res.key = res.key || item.indexKey;
            res.icon = res.icon || icon;
            var baseIcon = { type: icon, theme: iconTheme };
            if (typeof res.icon === 'string') {
                res.icon = Object.assign(Object.assign({}, baseIcon), { type: res.icon });
            }
            else {
                res.icon = Object.assign(Object.assign({}, baseIcon), res.icon);
            }
            this.updateDefault(res);
            if (this.acl) {
                res.menus = res.menus.filter(function (w) { return _this.acl.can(w.acl); });
            }
            if (res.menus.length <= 0) {
                res = null;
            }
            return res;
        };
        STColumnSource.prototype.restoreRender = function (item) {
            if (item.renderTitle) {
                item.__renderTitle =
                    typeof item.renderTitle === 'string'
                        ? this.rowSource.getTitle(item.renderTitle)
                        : item.renderTitle;
            }
            if (item.render) {
                item.__render =
                    typeof item.render === 'string' ? this.rowSource.getRow(item.render) : item.render;
            }
        };
        STColumnSource.prototype.widgetCoerce = function (item) {
            var _a;
            if (item.type !== 'widget')
                return;
            if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
                delete item.type;
                other.warn("st: No widget for type \"" + ((_a = item.widget) === null || _a === void 0 ? void 0 : _a.type) + "\"");
            }
        };
        STColumnSource.prototype.genHeaders = function (rootColumns) {
            var rows = [];
            var widths = [];
            var fillRowCells = function (columns, colIndex, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                // Init rows
                rows[rowIndex] = rows[rowIndex] || [];
                var currentColIndex = colIndex;
                var colSpans = columns.map(function (column) {
                    var cell = {
                        column: column,
                        colStart: currentColIndex,
                        hasSubColumns: false
                    };
                    var colSpan = 1;
                    var subColumns = column.children;
                    if (Array.isArray(subColumns) && subColumns.length > 0) {
                        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) { return total + count; }, 0);
                        cell.hasSubColumns = true;
                    }
                    else {
                        widths.push(cell.column.width || '');
                    }
                    if ('colSpan' in column) {
                        colSpan = column.colSpan;
                    }
                    if ('rowSpan' in column) {
                        cell.rowSpan = column.rowSpan;
                    }
                    cell.colSpan = colSpan;
                    cell.colEnd = cell.colStart + colSpan - 1;
                    rows[rowIndex].push(cell);
                    currentColIndex += colSpan;
                    return colSpan;
                });
                return colSpans;
            };
            fillRowCells(rootColumns, 0);
            // Handle `rowSpan`
            var rowCount = rows.length;
            var _loop_1 = function (rowIndex) {
                rows[rowIndex].forEach(function (cell) {
                    if (!('rowSpan' in cell) && !cell.hasSubColumns) {
                        cell.rowSpan = rowCount - rowIndex;
                    }
                });
            };
            for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
                _loop_1(rowIndex);
            }
            return { headers: rows, headerWidths: rowCount > 1 ? widths : null };
        };
        STColumnSource.prototype.cleanCond = function (list) {
            var e_3, _c;
            var res = [];
            var copyList = other.deepCopy(list);
            try {
                for (var copyList_1 = __values(copyList), copyList_1_1 = copyList_1.next(); !copyList_1_1.done; copyList_1_1 = copyList_1.next()) {
                    var item = copyList_1_1.value;
                    if (item.iif && !item.iif(item)) {
                        continue;
                    }
                    if (this.acl && item.acl && !this.acl.can(item.acl)) {
                        continue;
                    }
                    res.push(item);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (copyList_1_1 && !copyList_1_1.done && (_c = copyList_1.return)) _c.call(copyList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res;
        };
        STColumnSource.prototype.process = function (list, options) {
            var _this = this;
            if (!list || list.length === 0)
                throw new Error("[st]: the columns property muse be define!");
            var noIndex = this.cog.noIndex;
            var checkboxCount = 0;
            var radioCount = 0;
            var point = 0;
            var columns = [];
            var processItem = function (item) {
                var _a, _b;
                // index
                if (item.index) {
                    if (!Array.isArray(item.index)) {
                        item.index = item.index.split('.');
                    }
                    item.indexKey = item.index.join('.');
                }
                // #region title
                var tit = (typeof item.title === 'string' ? { text: item.title } : item.title) || {};
                if (tit.i18n && _this.i18nSrv) {
                    tit.text = _this.i18nSrv.fanyi(tit.i18n);
                }
                if (tit.text) {
                    tit._text = _this.dom.bypassSecurityTrustHtml(tit.text);
                }
                item.title = tit;
                // #endregion
                // no
                if (item.type === 'no') {
                    item.noIndex = item.noIndex == null ? noIndex : item.noIndex;
                }
                // checkbox
                if (item.selections == null) {
                    item.selections = [];
                }
                if (item.type === 'checkbox') {
                    ++checkboxCount;
                    if (!item.width) {
                        item.width = (item.selections.length > 0 ? 62 : 50) + "px";
                    }
                }
                if (_this.acl) {
                    item.selections = item.selections.filter(function (w) { return _this.acl.can(w.acl); });
                }
                // radio
                if (item.type === 'radio') {
                    ++radioCount;
                    item.selections = [];
                    if (!item.width) {
                        item.width = '50px';
                    }
                }
                // types
                if (item.type === 'yn') {
                    item.yn = Object.assign(Object.assign({ truth: true }, _this.cog.yn), item.yn);
                }
                // date
                if (item.type === 'date') {
                    item.dateFormat = item.dateFormat || ((_a = _this.cog.date) === null || _a === void 0 ? void 0 : _a.format);
                }
                if ((item.type === 'link' && typeof item.click !== 'function') ||
                    (item.type === 'badge' && item.badge == null) ||
                    (item.type === 'tag' && item.tag == null) ||
                    (item.type === 'enum' && item.enum == null)) {
                    item.type = '';
                }
                item._isTruncate = !!item.width && options.widthMode.strictBehavior === 'truncate' && item.type !== 'img';
                // className
                if (!item.className) {
                    item.className = {
                        number: 'text-right',
                        currency: 'text-right',
                        date: 'text-center'
                    }[item.type];
                }
                item._className = item.className || (item._isTruncate ? 'text-truncate' : null);
                // width
                if (typeof item.width === 'number') {
                    item.width = item.width + "px";
                }
                item._left = false;
                item._right = false;
                item.safeType = (_b = item.safeType) !== null && _b !== void 0 ? _b : options.safeType;
                // sorter
                item._sort = _this.sortCoerce(item);
                // filter
                item.filter = _this.filterCoerce(item);
                // buttons
                item.buttons = _this.btnCoerce(item.buttons);
                // widget
                _this.widgetCoerce(item);
                // restore custom row
                _this.restoreRender(item);
                // resizable
                item.resizable = Object.assign(Object.assign({ disabled: true, bounds: 'window', minWidth: 60, maxWidth: 360, preview: true }, options.resizable), (typeof item.resizable === 'boolean' ? { disabled: !item.resizable } : item.resizable));
                item.__point = point++;
                return item;
            };
            var processList = function (data) {
                var e_4, _c;
                try {
                    for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var item = data_1_1.value;
                        columns.push(processItem(item));
                        if (Array.isArray(item.children)) {
                            processList(item.children);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_c = data_1.return)) _c.call(data_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            };
            var copyList = this.cleanCond(list);
            processList(copyList);
            if (checkboxCount > 1) {
                throw new Error("[st]: just only one column checkbox");
            }
            if (radioCount > 1) {
                throw new Error("[st]: just only one column radio");
            }
            this.fixedCoerce(columns);
            return Object.assign({ columns: columns.filter(function (w) { return !Array.isArray(w.children) || w.children.length === 0; }) }, this.genHeaders(copyList));
        };
        STColumnSource.prototype.restoreAllRender = function (columns) {
            var _this = this;
            columns.forEach(function (i) { return _this.restoreRender(i); });
        };
        STColumnSource.prototype.updateDefault = function (filter) {
            if (filter.type === 'default') {
                filter.default = filter.menus.findIndex(function (w) { return w.checked; }) !== -1;
            }
            else {
                filter.default = !!filter.menus[0].value;
            }
            return this;
        };
        STColumnSource.prototype.cleanFilter = function (col) {
            var f = col.filter;
            f.default = false;
            if (f.type === 'default') {
                f.menus.forEach(function (i) { return (i.checked = false); });
            }
            else {
                f.menus[0].value = undefined;
            }
            return this;
        };
        return STColumnSource;
    }());
    STColumnSource.decorators = [
        { type: i0.Injectable }
    ];
    STColumnSource.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: STRowSource, decorators: [{ type: i0.Host }] },
        { type: acl.ACLService, decorators: [{ type: i0.Optional }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
        { type: STWidgetRegistry }
    ]; };

    var STDataSource = /** @class */ (function () {
        function STDataSource(http, datePipe, ynPipe, numberPipe, currencySrv, dom) {
            this.http = http;
            this.datePipe = datePipe;
            this.ynPipe = ynPipe;
            this.numberPipe = numberPipe;
            this.currencySrv = currencySrv;
            this.dom = dom;
            this.sortTick = 0;
        }
        STDataSource.prototype.process = function (options) {
            var _this = this;
            var data$;
            var isRemote = false;
            var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, paginator = options.paginator, columns = options.columns;
            var retTotal;
            var retPs;
            var retList;
            var retPi;
            var rawData;
            var showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByRemote(data, options).pipe(operators.map(function (result) {
                    rawData = result;
                    var ret;
                    if (Array.isArray(result)) {
                        ret = result;
                        retTotal = ret.length;
                        retPs = retTotal;
                        showPage = false;
                    }
                    else {
                        // list
                        ret = other.deepGet(result, res.reName.list, []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        var resultTotal = res.reName.total && other.deepGet(result, res.reName.total, null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return other.deepCopy(ret);
                }));
            }
            else if (Array.isArray(data)) {
                data$ = rxjs.of(data);
            }
            else {
                // a cold observable
                data$ = data;
            }
            if (!isRemote) {
                data$ = data$.pipe(
                // sort
                operators.map(function (result) {
                    rawData = result;
                    var copyResult = other.deepCopy(result);
                    var sorterFn = _this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                }), 
                // filter
                operators.map(function (result) {
                    columns
                        .filter(function (w) { return w.filter; })
                        .forEach(function (c) {
                        var filter = c.filter;
                        var values = _this.getFilteredData(filter);
                        if (values.length === 0)
                            return;
                        var onFilter = filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter(function (record) { return values.some(function (v) { return onFilter(v, record); }); });
                    });
                    return result;
                }), 
                // paging
                operators.map(function (result) {
                    if (paginator && page.front) {
                        var maxPageIndex = Math.ceil(result.length / ps);
                        retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                        retTotal = result.length;
                        if (page.show === true) {
                            return result.slice((retPi - 1) * ps, retPi * ps);
                        }
                    }
                    return result;
                }));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(operators.map(function (result) { return res.process(result, rawData); }));
            }
            data$ = data$.pipe(operators.map(function (result) { return _this.optimizeData({ result: result, columns: columns, rowClassName: options.rowClassName }); }));
            return data$.pipe(operators.map(function (result) {
                retList = result;
                var realTotal = retTotal || total;
                var realPs = retPs || ps;
                return {
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: _this.genStatistical(columns, retList, rawData),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage
                };
            }));
        };
        STDataSource.prototype.get = function (item, col, idx) {
            var _a;
            try {
                var safeHtml = col.safeType === 'safeHtml';
                if (col.format) {
                    var formatRes = col.format(item, col, idx) || '';
                    return {
                        text: formatRes,
                        _text: safeHtml ? this.dom.bypassSecurityTrustHtml(formatRes) : formatRes,
                        org: formatRes,
                        safeType: col.safeType
                    };
                }
                var value = other.deepGet(item, col.index, col.default);
                var text = value;
                var color = void 0;
                switch (col.type) {
                    case 'no':
                        text = this.getNoIndex(item, col, idx);
                        break;
                    case 'img':
                        text = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
                        break;
                    case 'number':
                        text = this.numberPipe.transform(value, col.numberDigits);
                        break;
                    case 'currency':
                        text = this.currencySrv.format(value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
                        break;
                    case 'date':
                        text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                        break;
                    case 'yn':
                        text = this.ynPipe.transform(value === col.yn.truth, col.yn.yes, col.yn.no, col.yn.mode, false);
                        break;
                    case 'enum':
                        text = col.enum[value];
                        break;
                    case 'tag':
                    case 'badge':
                        var data = col.type === 'tag' ? col.tag : col.badge;
                        if (data && data[text]) {
                            var dataItem = data[text];
                            text = dataItem.text;
                            color = dataItem.color;
                        }
                        else {
                            text = '';
                        }
                        break;
                }
                if (text == null)
                    text = '';
                return {
                    text: text,
                    _text: safeHtml ? this.dom.bypassSecurityTrustHtml(text) : text,
                    org: value,
                    color: color,
                    safeType: col.safeType,
                    buttons: []
                };
            }
            catch (ex) {
                var text = "INVALID DATA";
                console.error("Failed to get data", item, col, ex);
                return { text: text, _text: text, org: text, buttons: [], safeType: 'text' };
            }
        };
        STDataSource.prototype.getByRemote = function (url, options) {
            var _b, _c;
            var req = options.req, page = options.page, paginator = options.paginator, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
            var method = (req.method || 'GET').toUpperCase();
            var params = {};
            var reName = req.reName;
            if (paginator) {
                if (req.type === 'page') {
                    params = (_b = {},
                        _b[reName.pi] = page.zeroIndexed ? pi - 1 : pi,
                        _b[reName.ps] = ps,
                        _b);
                }
                else {
                    params = (_c = {},
                        _c[reName.skip] = (pi - 1) * ps,
                        _c[reName.limit] = ps,
                        _c);
                }
            }
            params = Object.assign(Object.assign(Object.assign(Object.assign({}, params), req.params), this.getReqSortMap(singleSort, multiSort, columns)), this.getReqFilterMap(columns));
            var reqOptions = {
                params: params,
                body: req.body,
                headers: req.headers
            };
            if (method === 'POST' && req.allInBody === true) {
                reqOptions = {
                    body: Object.assign(Object.assign({}, req.body), params),
                    headers: req.headers
                };
            }
            if (typeof req.process === 'function') {
                reqOptions = req.process(reqOptions);
            }
            if (!(reqOptions.params instanceof http.HttpParams)) {
                reqOptions.params = new http.HttpParams({ fromObject: reqOptions.params });
            }
            if (typeof options.customRequest === 'function') {
                return options.customRequest({ method: method, url: url, options: reqOptions });
            }
            return this.http.request(method, url, reqOptions);
        };
        STDataSource.prototype.optimizeData = function (options) {
            var _this = this;
            var result = options.result, columns = options.columns, rowClassName = options.rowClassName;
            var _loop_1 = function (i, len) {
                result[i]._values = columns.map(function (c) {
                    if (Array.isArray(c.buttons) && c.buttons.length > 0) {
                        return { buttons: _this.genButtons(c.buttons, result[i], c) };
                    }
                    return _this.get(result[i], c, i);
                });
                if (rowClassName) {
                    result[i]._rowClassName = rowClassName(result[i], i);
                }
            };
            for (var i = 0, len = result.length; i < len; i++) {
                _loop_1(i, len);
            }
            return result;
        };
        STDataSource.prototype.getNoIndex = function (item, col, idx) {
            return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex + idx;
        };
        STDataSource.prototype.genButtons = function (_btns, item, col) {
            var fn = function (btns) {
                return other.deepCopy(btns).filter(function (btn) {
                    var result = btn.iif(item, btn, col);
                    var isRenderDisabled = btn.iifBehavior === 'disabled';
                    btn._result = result;
                    btn._disabled = !result && isRenderDisabled;
                    if (btn.children.length > 0) {
                        btn.children = fn(btn.children);
                    }
                    delete btn.iif;
                    return result || isRenderDisabled;
                });
            };
            var res = fn(_btns);
            var fnText = function (btns) {
                var e_1, _b;
                try {
                    for (var btns_1 = __values(btns), btns_1_1 = btns_1.next(); !btns_1_1.done; btns_1_1 = btns_1.next()) {
                        var btn = btns_1_1.value;
                        btn._text = typeof btn.text === 'function' ? btn.text(item, btn) : btn.text || '';
                        if (btn.children.length > 0) {
                            btn.children = fnText(btn.children);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (btns_1_1 && !btns_1_1.done && (_b = btns_1.return)) _b.call(btns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return btns;
            };
            return fnText(res);
        };
        // #region sort
        STDataSource.prototype.getValidSort = function (columns) {
            return columns.filter(function (item) { return item._sort && item._sort.enabled && item._sort.default; }).map(function (item) { return item._sort; });
        };
        STDataSource.prototype.getSorterFn = function (columns) {
            var sortList = this.getValidSort(columns);
            if (sortList.length === 0) {
                return;
            }
            var sortItem = sortList[0];
            if (sortItem.compare === null) {
                return;
            }
            if (typeof sortItem.compare !== 'function') {
                console.warn("[st] Muse provide the compare function in sort");
                return;
            }
            return function (a, b) {
                var result = sortItem.compare(a, b);
                if (result !== 0) {
                    return sortItem.default === 'descend' ? -result : result;
                }
                return 0;
            };
        };
        Object.defineProperty(STDataSource.prototype, "nextSortTick", {
            get: function () {
                return ++this.sortTick;
            },
            enumerable: false,
            configurable: true
        });
        STDataSource.prototype.getReqSortMap = function (singleSort, multiSort, columns) {
            var _b;
            var ret = {};
            var sortList = this.getValidSort(columns);
            if (multiSort) {
                var ms_1 = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.', keepEmptyKey: true, arrayParam: false }, multiSort);
                var sortMap = sortList
                    .sort(function (a, b) { return a.tick - b.tick; })
                    .map(function (item) { return item.key + ms_1.nameSeparator + ((item.reName || {})[item.default] || item.default); });
                ret = (_b = {}, _b[ms_1.key] = ms_1.arrayParam ? sortMap : sortMap.join(ms_1.separator), _b);
                return sortMap.length === 0 && ms_1.keepEmptyKey === false ? {} : ret;
            }
            if (sortList.length === 0)
                return ret;
            var mapData = sortList[0];
            var sortFiled = mapData.key;
            var sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[sortFiled] = sortValue;
            return ret;
        };
        // #endregion
        // #region filter
        STDataSource.prototype.getFilteredData = function (filter) {
            return filter.type === 'default' ? filter.menus.filter(function (f) { return f.checked === true; }) : filter.menus.slice(0, 1);
        };
        STDataSource.prototype.getReqFilterMap = function (columns) {
            var _this = this;
            var ret = {};
            columns
                .filter(function (w) { return w.filter && w.filter.default === true; })
                .forEach(function (col) {
                var filter = col.filter;
                var values = _this.getFilteredData(filter);
                var obj = {};
                if (filter.reName) {
                    obj = filter.reName(filter.menus, col);
                }
                else {
                    obj[filter.key] = values.map(function (i) { return i.value; }).join(',');
                }
                ret = Object.assign(Object.assign({}, ret), obj);
            });
            return ret;
        };
        // #endregion
        // #region statistical
        STDataSource.prototype.genStatistical = function (columns, list, rawData) {
            var _this = this;
            var res = {};
            columns.forEach(function (col, index) {
                res[col.key || col.indexKey || index] =
                    col.statistical == null ? {} : _this.getStatistical(col, index, list, rawData);
            });
            return res;
        };
        STDataSource.prototype.getStatistical = function (col, index, list, rawData) {
            var _a;
            var val = col.statistical;
            var item = Object.assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: val } : val));
            var res = { value: 0 };
            var currency = false;
            if (typeof item.type === 'function') {
                res = item.type(this.getValues(index, list), col, list, rawData);
                currency = true;
            }
            else {
                switch (item.type) {
                    case 'count':
                        res.value = list.length;
                        break;
                    case 'distinctCount':
                        res.value = this.getValues(index, list).filter(function (value, idx, self) { return self.indexOf(value) === idx; }).length;
                        break;
                    case 'sum':
                        res.value = this.toFixed(this.getSum(index, list), item.digits);
                        currency = true;
                        break;
                    case 'average':
                        res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits);
                        currency = true;
                        break;
                    case 'max':
                        res.value = Math.max.apply(Math, __spreadArray([], __read(this.getValues(index, list))));
                        currency = true;
                        break;
                    case 'min':
                        res.value = Math.min.apply(Math, __spreadArray([], __read(this.getValues(index, list))));
                        currency = true;
                        break;
                }
            }
            if (item.currency === true || (item.currency == null && currency === true)) {
                res.text = this.currencySrv.format(res.value, (_a = col.currency) === null || _a === void 0 ? void 0 : _a.format);
            }
            else {
                res.text = String(res.value);
            }
            return res;
        };
        STDataSource.prototype.toFixed = function (val, digits) {
            if (isNaN(val) || !isFinite(val)) {
                return 0;
            }
            return parseFloat(val.toFixed(digits));
        };
        STDataSource.prototype.getValues = function (index, list) {
            return list.map(function (i) { return i._values[index].org; }).map(function (i) { return (i === '' || i == null ? 0 : i); });
        };
        STDataSource.prototype.getSum = function (index, list) {
            return this.getValues(index, list).reduce(function (p, i) { return (p += parseFloat(String(i))); }, 0);
        };
        return STDataSource;
    }());
    STDataSource.decorators = [
        { type: i0.Injectable }
    ];
    STDataSource.ctorParameters = function () { return [
        { type: theme._HttpClient },
        { type: theme.DatePipe, decorators: [{ type: i0.Host }] },
        { type: theme.YNPipe, decorators: [{ type: i0.Host }] },
        { type: common.DecimalPipe, decorators: [{ type: i0.Host }] },
        { type: format.CurrencyService },
        { type: platformBrowser.DomSanitizer }
    ]; };

    var STExport = /** @class */ (function () {
        function STExport(xlsxSrv) {
            this.xlsxSrv = xlsxSrv;
        }
        STExport.prototype._stGet = function (item, col, index, colIndex) {
            var ret = { t: 's', v: '' };
            if (col.format) {
                ret.v = col.format(item, col, index);
            }
            else {
                var val = item._values ? item._values[colIndex].text : other.deepGet(item, col.index, '');
                ret.v = val;
                if (val != null) {
                    switch (col.type) {
                        case 'currency':
                            ret.t = 'n';
                            break;
                        case 'date':
                            ret.t = 'd';
                            break;
                        case 'yn':
                            var yn = col.yn;
                            ret.v = ret.v === yn.truth ? yn.yes : yn.no;
                            break;
                    }
                }
            }
            ret.v = ret.v || '';
            return ret;
        };
        STExport.prototype.genSheet = function (opt) {
            var sheets = {};
            var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
            var dataLen = opt.data.length;
            var validColCount = 0;
            var loseCount = 0;
            for (var colIdx = 0; colIdx < opt.columens.length; colIdx++) {
                var col = opt.columens[colIdx];
                if (col.exported === false || !col.index || !(!col.buttons || col.buttons.length === 0)) {
                    ++loseCount;
                    continue;
                }
                ++validColCount;
                var columnName = this.xlsxSrv.numberToSchema(colIdx + 1 - loseCount);
                sheet[columnName + "1"] = {
                    t: 's',
                    v: typeof col.title === 'object' ? col.title.text : col.title
                };
                for (var dataIdx = 0; dataIdx < dataLen; dataIdx++) {
                    sheet["" + columnName + (dataIdx + 2)] = this._stGet(opt.data[dataIdx], col, dataIdx, colIdx);
                }
            }
            if (validColCount > 0 && dataLen > 0) {
                sheet['!ref'] = "A1:" + this.xlsxSrv.numberToSchema(validColCount) + (dataLen + 1);
            }
            return sheets;
        };
        STExport.prototype.export = function (opt) {
            return __awaiter(this, void 0, void 0, function () {
                var sheets;
                return __generator(this, function (_a) {
                    sheets = this.genSheet(opt);
                    return [2 /*return*/, this.xlsxSrv.export({
                            sheets: sheets,
                            filename: opt.filename,
                            callback: opt.callback
                        })];
                });
            });
        };
        return STExport;
    }());
    STExport.decorators = [
        { type: i0.Injectable }
    ];
    STExport.ctorParameters = function () { return [
        { type: xlsx.XlsxService, decorators: [{ type: i0.Optional }] }
    ]; };

    var STWidgetHostDirective = /** @class */ (function () {
        function STWidgetHostDirective(stWidgetRegistry, viewContainerRef, componentFactoryResolver) {
            this.stWidgetRegistry = stWidgetRegistry;
            this.viewContainerRef = viewContainerRef;
            this.componentFactoryResolver = componentFactoryResolver;
        }
        STWidgetHostDirective.prototype.ngOnInit = function () {
            var widget = this.column.widget;
            var componentType = this.stWidgetRegistry.get(widget.type);
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(componentFactory);
            var _a = this, record = _a.record, column = _a.column;
            var data = widget.params ? widget.params({ record: record, column: column }) : { record: record };
            Object.keys(data).forEach(function (key) {
                componentRef.instance[key] = data[key];
            });
        };
        return STWidgetHostDirective;
    }());
    STWidgetHostDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[st-widget-host]' },] }
    ];
    STWidgetHostDirective.ctorParameters = function () { return [
        { type: STWidgetRegistry },
        { type: i0.ViewContainerRef },
        { type: i0.ComponentFactoryResolver }
    ]; };
    STWidgetHostDirective.propDecorators = {
        record: [{ type: i0.Input }],
        column: [{ type: i0.Input }]
    };

    var ST_DEFAULT_CONFIG = {
        pi: 1,
        ps: 10,
        size: 'default',
        responsive: true,
        responsiveHideHeaderFooter: false,
        req: {
            type: 'page',
            method: 'GET',
            allInBody: false,
            lazyLoad: false,
            reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }
        },
        res: {
            reName: { list: ['list'], total: ['total'] }
        },
        page: {
            front: true,
            zeroIndexed: false,
            position: 'bottom',
            placement: 'right',
            show: true,
            showSize: false,
            pageSizes: [10, 20, 30, 40, 50],
            showQuickJumper: false,
            total: true,
            toTop: true,
            toTopOffset: 100,
            itemRender: null,
            simple: false
        },
        modal: {
            paramsName: 'record',
            size: 'lg',
            exact: true
        },
        drawer: {
            paramsName: 'record',
            size: 'md',
            footer: true,
            footerHeight: 55
        },
        pop: {
            title: '确认删除吗？',
            trigger: 'click',
            placement: 'top'
        },
        rowClickTime: 200,
        btnIcon: {
            theme: 'outline',
            spin: false
        },
        noIndex: 1,
        expandRowByClick: false,
        expandAccordion: false,
        widthMode: {
            type: 'default',
            strictBehavior: 'truncate'
        },
        virtualItemSize: 54,
        virtualMaxBufferPx: 200,
        virtualMinBufferPx: 100,
        iifBehavior: 'hide',
        loadingDelay: 0,
        safeType: 'safeHtml',
        date: {
            format: "yyyy-MM-dd HH:mm"
        },
        yn: {
            truth: true,
            yes: '是',
            mode: 'icon'
        }
    };

    var STComponent = /** @class */ (function () {
        function STComponent(i18nSrv, cdr, router, el, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n, configSrv, cms) {
            var _this = this;
            this.cdr = cdr;
            this.router = router;
            this.el = el;
            this.exportSrv = exportSrv;
            this.modalHelper = modalHelper;
            this.drawerHelper = drawerHelper;
            this.doc = doc;
            this.columnSource = columnSource;
            this.dataSource = dataSource;
            this.delonI18n = delonI18n;
            this.cms = cms;
            this.destroy$ = new rxjs.Subject();
            this.totalTpl = "";
            this.rowClickCount = 0;
            this.customWidthConfig = false;
            this._widthConfig = [];
            this.locale = {};
            this._loading = false;
            this._data = [];
            this._statistical = {};
            this._isPagination = true;
            this._allChecked = false;
            this._allCheckedDisabled = false;
            this._indeterminate = false;
            this._headers = [];
            this._columns = [];
            this.contextmenuList = [];
            this.columns = [];
            this.ps = 10;
            this.pi = 1;
            this.total = 0;
            this.loading = null;
            this.loadingDelay = 0;
            this.bordered = false;
            this.showHeader = true;
            this.expandRowByClick = false;
            this.expandAccordion = false;
            this.rowClickTime = 200;
            this.responsive = true;
            this.error = new i0.EventEmitter();
            this.change = new i0.EventEmitter();
            this.virtualScroll = false;
            this.virtualItemSize = 54;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            this.virtualForTrackBy = function (index) { return index; };
            this.setCog(configSrv.merge('st', ST_DEFAULT_CONFIG));
            this.delonI18n.change.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.updateTotalTpl();
                    _this.cd();
                }
            });
            i18nSrv.change
                .pipe(operators.takeUntil(this.destroy$), operators.filter(function () { return _this._columns.length > 0; }))
                .subscribe(function () { return _this.refreshColumns(); });
        }
        Object.defineProperty(STComponent.prototype, "req", {
            get: function () {
                return this._req;
            },
            set: function (value) {
                this._req = other.deepMergeKey({}, true, this.cog.req, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "res", {
            /** 返回体配置 */
            get: function () {
                return this._res;
            },
            set: function (value) {
                var item = (this._res = other.deepMergeKey({}, true, this.cog.res, value));
                var reName = item.reName;
                if (!Array.isArray(reName.list))
                    reName.list = reName.list.split('.');
                if (!Array.isArray(reName.total))
                    reName.total = reName.total.split('.');
                this._res = item;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                this._page = Object.assign(Object.assign({}, this.cog.page), value);
                this.updateTotalTpl();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "multiSort", {
            get: function () {
                return this._multiSort;
            },
            set: function (value) {
                if ((typeof value === 'boolean' && !decorator.toBoolean(value)) ||
                    (typeof value === 'object' && Object.keys(value).length === 0)) {
                    this._multiSort = undefined;
                    return;
                }
                this._multiSort = Object.assign({}, (typeof value === 'object' ? value : {}));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "widthMode", {
            get: function () {
                return this._widthMode;
            },
            set: function (value) {
                this._widthMode = Object.assign(Object.assign({}, this.cog.widthMode), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "widthConfig", {
            set: function (val) {
                this._widthConfig = val;
                this.customWidthConfig = val && val.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "resizable", {
            set: function (val) {
                this._resizable = typeof val === 'object' ? val : { disabled: !decorator.toBoolean(val) };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "count", {
            /**
             * Get the number of the current page
             */
            get: function () {
                return this._data.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "list", {
            /**
             * Get the data of the current page
             */
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "routerState", {
            get: function () {
                var _b = this, pi = _b.pi, ps = _b.ps, total = _b.total;
                return { pi: pi, ps: ps, total: total };
            },
            enumerable: false,
            configurable: true
        });
        STComponent.prototype.setCog = function (cog) {
            var copyMultiSort = Object.assign({}, cog.multiSort);
            // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
            delete cog.multiSort;
            this.cog = cog;
            Object.assign(this, cog);
            if (copyMultiSort.global !== false) {
                this.multiSort = copyMultiSort;
            }
            this.columnSource.setCog(cog);
        };
        STComponent.prototype.cd = function () {
            this.cdr.detectChanges();
            return this;
        };
        STComponent.prototype.renderTotal = function (total, range) {
            return this.totalTpl
                ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
                : '';
        };
        STComponent.prototype.changeEmit = function (type, data) {
            var res = {
                type: type,
                pi: this.pi,
                ps: this.ps,
                total: this.total
            };
            if (data != null) {
                res[type] = data;
            }
            this.change.emit(res);
        };
        Object.defineProperty(STComponent.prototype, "filteredData", {
            // #region data
            /**
             * 获取过滤后所有数据
             * - 本地数据：包含排序、过滤后不分页数据
             * - 远程数据：不传递 `pi`、`ps` 两个参数
             */
            get: function () {
                return this.loadData({ paginator: false }).then(function (res) { return res.list; });
            },
            enumerable: false,
            configurable: true
        });
        STComponent.prototype.updateTotalTpl = function () {
            var total = this.page.total;
            if (typeof total === 'string' && total.length) {
                this.totalTpl = total;
            }
            else if (decorator.toBoolean(total)) {
                this.totalTpl = this.locale.total;
            }
            else {
                this.totalTpl = '';
            }
        };
        STComponent.prototype.setLoading = function (val) {
            if (this.loading == null) {
                this._loading = val;
                this.cdr.detectChanges();
            }
        };
        STComponent.prototype.loadData = function (options) {
            var _this = this;
            var _b = this, pi = _b.pi, ps = _b.ps, data = _b.data, req = _b.req, res = _b.res, page = _b.page, total = _b.total, singleSort = _b.singleSort, multiSort = _b.multiSort, rowClassName = _b.rowClassName;
            return new Promise(function (resolvePromise, rejectPromise) {
                if (_this.data$) {
                    _this.data$.unsubscribe();
                }
                _this.data$ = _this.dataSource
                    .process(Object.assign({ pi: pi, ps: ps, total: total, data: data, req: req, res: res, page: page, columns: _this._columns, singleSort: singleSort, multiSort: multiSort, rowClassName: rowClassName, paginator: true, customRequest: _this.customRequest || _this.cog.customRequest }, options))
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (result) { return resolvePromise(result); }, function (error) {
                    console.warn('st.loadDate', error);
                    rejectPromise(error);
                });
            });
        };
        STComponent.prototype.loadPageData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.setLoading(true);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.loadData()];
                        case 2:
                            result = _b.sent();
                            this.setLoading(false);
                            if (typeof result.pi !== 'undefined') {
                                this.pi = result.pi;
                            }
                            if (typeof result.ps !== 'undefined') {
                                this.ps = result.ps;
                            }
                            if (typeof result.total !== 'undefined') {
                                this.total = result.total;
                            }
                            if (typeof result.pageShow !== 'undefined') {
                                this._isPagination = result.pageShow;
                            }
                            this._data = result.list;
                            this._statistical = result.statistical;
                            this.changeEmit('loaded', result.list);
                            // Should be re-render in next tike when using virtual scroll
                            // https://github.com/ng-alain/ng-alain/issues/1836
                            if (this.cdkVirtualScrollViewport) {
                                Promise.resolve().then(function () { return _this.cdkVirtualScrollViewport.checkViewportSize(); });
                            }
                            return [2 /*return*/, this._refCheck()];
                        case 3:
                            error_1 = _b.sent();
                            this.setLoading(false);
                            if (!this.destroy$.isStopped) {
                                this.cdr.detectChanges();
                                this.error.emit({ type: 'req', error: error_1 });
                            }
                            return [2 /*return*/, this];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /** 清空所有数据 */
        STComponent.prototype.clear = function (cleanStatus) {
            if (cleanStatus === void 0) { cleanStatus = true; }
            if (cleanStatus) {
                this.clearStatus();
            }
            this._data = [];
            return this.cd();
        };
        /** 清空所有状态 */
        STComponent.prototype.clearStatus = function () {
            return this.clearCheck().clearRadio().clearFilter().clearSort();
        };
        /**
         * 根据页码重新加载数据
         *
         * @param pi 指定当前页码，默认：`1`
         * @param extraParams 重新指定 `extraParams` 值
         * @param options 选项
         */
        STComponent.prototype.load = function (pi, extraParams, options) {
            if (pi === void 0) { pi = 1; }
            if (pi !== -1)
                this.pi = pi;
            if (typeof extraParams !== 'undefined') {
                this.req.params = options && options.merge ? Object.assign(Object.assign({}, this.req.params), extraParams) : extraParams;
            }
            this._change('pi', options);
            return this;
        };
        /**
         * 重新刷新当前页
         *
         * @param extraParams 重新指定 `extraParams` 值
         */
        STComponent.prototype.reload = function (extraParams, options) {
            return this.load(-1, extraParams, options);
        };
        /**
         * 重置且重新设置 `pi` 为 `1`，包含以下值：
         * - `check` 数据
         * - `radio` 数据
         * - `sort` 数据
         * - `fileter` 数据
         *
         * @param extraParams 重新指定 `extraParams` 值
         */
        STComponent.prototype.reset = function (extraParams, options) {
            this.clearStatus().load(1, extraParams, options);
            return this;
        };
        STComponent.prototype._toTop = function (enforce) {
            var _a;
            if (!(enforce == null ? this.page.toTop : enforce))
                return;
            var el = this.el.nativeElement;
            if (this.scroll) {
                if (this.cdkVirtualScrollViewport) {
                    this.cdkVirtualScrollViewport.scrollTo({
                        top: 0,
                        left: 0
                    });
                }
                else {
                    (_a = el.querySelector('.ant-table-body, .ant-table-content')) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
                }
                return;
            }
            el.scrollIntoView();
            // fix header height
            this.doc.documentElement.scrollTop -= this.page.toTopOffset;
        };
        STComponent.prototype._change = function (type, options) {
            var _this = this;
            if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
                this.loadPageData().then(function () { return _this._toTop(options === null || options === void 0 ? void 0 : options.toTop); });
            }
            this.changeEmit(type);
        };
        STComponent.prototype._click = function (e, item, col) {
            e.preventDefault();
            e.stopPropagation();
            var res = col.click(item, this);
            if (typeof res === 'string') {
                this.router.navigateByUrl(res, { state: this.routerState });
            }
            return false;
        };
        STComponent.prototype.closeOtherExpand = function (item) {
            if (this.expandAccordion === false)
                return;
            this._data.filter(function (i) { return i !== item; }).forEach(function (i) { return (i.expand = false); });
        };
        STComponent.prototype._rowClick = function (e, item, index) {
            var _this = this;
            if (e.target.nodeName === 'INPUT')
                return;
            var _b = this, expand = _b.expand, expandRowByClick = _b.expandRowByClick, rowClickTime = _b.rowClickTime;
            if (!!expand && item.showExpand !== false && expandRowByClick) {
                item.expand = !item.expand;
                this.closeOtherExpand(item);
                this.changeEmit('expand', item);
                return;
            }
            ++this.rowClickCount;
            if (this.rowClickCount !== 1)
                return;
            setTimeout(function () {
                var data = { e: e, item: item, index: index };
                if (_this.rowClickCount === 1) {
                    _this.changeEmit('click', data);
                }
                else {
                    _this.changeEmit('dblClick', data);
                }
                _this.rowClickCount = 0;
            }, rowClickTime);
        };
        STComponent.prototype._expandChange = function (item, expand) {
            item.expand = expand;
            this.closeOtherExpand(item);
            this.changeEmit('expand', item);
        };
        STComponent.prototype._stopPropagation = function (ev) {
            ev.stopPropagation();
        };
        /**
         * Remove a row in the table, like this:
         *
         * ```
         * this.st.removeRow(0)
         * this.st.removeRow(stDataItem)
         * ```
         */
        STComponent.prototype.removeRow = function (data) {
            var _this = this;
            if (typeof data === 'number') {
                this._data.splice(data, 1);
            }
            else {
                if (!Array.isArray(data)) {
                    data = [data];
                }
                data
                    .map(function (item) { return _this._data.indexOf(item); })
                    .filter(function (pos) { return pos !== -1; })
                    .forEach(function (pos) { return _this._data.splice(pos, 1); });
            }
            // recalculate no
            this._columns
                .filter(function (w) { return w.type === 'no'; })
                .forEach(function (c) { return _this._data.forEach(function (i, idx) {
                var text = "" + _this.dataSource.getNoIndex(i, c, idx);
                i._values[c.__point] = { text: text, _text: text, org: idx, safeType: 'text' };
            }); });
            return this.cd();
        };
        /**
         * Sets the row value for the `index` in the table, like this:
         *
         * - `optinos.refreshSchema` Whether to refresh of st schemas
         * - `optinos.emitReload` Whether to trigger a reload http request when data is url
         *
         * ```
         * this.st.setRow(0, { price: 100 })
         * this.st.setRow(0, { price: 100, name: 'asdf' })
         * this.st.setRow(item, { price: 100 })
         * ```
         */
        STComponent.prototype.setRow = function (index, item, options) {
            options = Object.assign({ refreshSchema: false, emitReload: false }, options);
            if (typeof index !== 'number') {
                index = this._data.indexOf(index);
            }
            this._data[index] = other.deepMergeKey(this._data[index], false, item);
            this.optimizeData();
            if (options.refreshSchema) {
                this.resetColumns({ emitReload: options.emitReload });
                return this;
            }
            this.cdr.detectChanges();
            return this;
        };
        // #endregion
        // #region sort
        STComponent.prototype.sort = function (col, idx, value) {
            if (this.multiSort) {
                col._sort.default = value;
                col._sort.tick = this.dataSource.nextSortTick;
            }
            else {
                this._columns.forEach(function (item, index) { return (item._sort.default = index === idx ? value : null); });
            }
            this.cdr.detectChanges();
            this.loadPageData();
            var res = {
                value: value,
                map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
                column: col
            };
            this.changeEmit('sort', res);
        };
        STComponent.prototype.clearSort = function () {
            this._columns.forEach(function (item) { return (item._sort.default = null); });
            return this;
        };
        // #endregion
        // #region filter
        STComponent.prototype.handleFilter = function (col) {
            // 过滤表示一种数据的变化应重置页码为 `1`
            this.pi = 1;
            this.columnSource.updateDefault(col.filter);
            this.loadPageData();
            this.changeEmit('filter', col);
        };
        STComponent.prototype._filterConfirm = function (col) {
            this.handleFilter(col);
        };
        STComponent.prototype._filterRadio = function (col, item, checked) {
            col.filter.menus.forEach(function (i) { return (i.checked = false); });
            item.checked = checked;
        };
        STComponent.prototype._filterClear = function (col) {
            this.columnSource.cleanFilter(col);
            this.handleFilter(col);
        };
        STComponent.prototype.clearFilter = function () {
            var _this = this;
            this._columns.filter(function (w) { return w.filter && w.filter.default === true; }).forEach(function (col) { return _this.columnSource.cleanFilter(col); });
            return this;
        };
        STComponent.prototype._filterClick = function ($event) {
            $event.stopPropagation();
        };
        // #endregion
        // #region checkbox
        /** 清除所有 `checkbox` */
        STComponent.prototype.clearCheck = function () {
            return this._checkAll(false);
        };
        STComponent.prototype._refCheck = function () {
            var validData = this._data.filter(function (w) { return !w.disabled; });
            var checkedList = validData.filter(function (w) { return w.checked === true; });
            this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
            var allUnChecked = validData.every(function (value) { return !value.checked; });
            this._indeterminate = !this._allChecked && !allUnChecked;
            this._allCheckedDisabled = this._data.length === this._data.filter(function (w) { return w.disabled; }).length;
            return this.cd();
        };
        STComponent.prototype._checkAll = function (checked) {
            checked = typeof checked === 'undefined' ? this._allChecked : checked;
            this._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = checked); });
            return this._refCheck()._checkNotify();
        };
        STComponent.prototype._checkSelection = function (i, value) {
            i.checked = value;
            return this._refCheck()._checkNotify();
        };
        STComponent.prototype._rowSelection = function (row) {
            row.select(this._data);
            return this._refCheck()._checkNotify();
        };
        STComponent.prototype._checkNotify = function () {
            var res = this._data.filter(function (w) { return !w.disabled && w.checked === true; });
            this.changeEmit('checkbox', res);
            return this;
        };
        // #endregion
        // #region radio
        /** 清除所有 `radio` */
        STComponent.prototype.clearRadio = function () {
            this._data.filter(function (w) { return w.checked; }).forEach(function (item) { return (item.checked = false); });
            this.changeEmit('radio', null);
            return this;
        };
        STComponent.prototype._refRadio = function (checked, item) {
            // if (item.disabled === true) return;
            this._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = false); });
            item.checked = checked;
            this.changeEmit('radio', item);
            return this;
        };
        // #endregion
        // #region buttons
        STComponent.prototype._btnClick = function (record, btn, ev) {
            var _b, _c;
            var _this = this;
            if (ev) {
                ev.stopPropagation();
            }
            if (btn.type === 'modal' || btn.type === 'static') {
                var modal = btn.modal;
                var obj = (_b = {}, _b[modal.paramsName] = record, _b);
                this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'](modal.component, Object.assign(Object.assign({}, obj), (modal.params && modal.params(record))), other.deepMergeKey({}, true, this.cog.modal, modal))
                    .pipe(operators.filter(function (w) { return typeof w !== 'undefined'; }))
                    .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
                return;
            }
            else if (btn.type === 'drawer') {
                var drawer = btn.drawer;
                var obj = (_c = {}, _c[drawer.paramsName] = record, _c);
                this.drawerHelper
                    .create(drawer.title, drawer.component, Object.assign(Object.assign({}, obj), (drawer.params && drawer.params(record))), other.deepMergeKey({}, true, this.cog.drawer, drawer))
                    .pipe(operators.filter(function (w) { return typeof w !== 'undefined'; }))
                    .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
                return;
            }
            else if (btn.type === 'link') {
                var clickRes = this.btnCallback(record, btn);
                if (typeof clickRes === 'string') {
                    this.router.navigateByUrl(clickRes, { state: this.routerState });
                }
                return;
            }
            this.btnCallback(record, btn);
        };
        STComponent.prototype.btnCallback = function (record, btn, modal) {
            if (!btn.click)
                return;
            if (typeof btn.click === 'string') {
                switch (btn.click) {
                    case 'load':
                        this.load();
                        break;
                    case 'reload':
                        this.reload();
                        break;
                }
            }
            else {
                return btn.click(record, modal, this);
            }
        };
        // #endregion
        // #region export
        /**
         * 导出当前页，确保已经注册 `XlsxModule`
         *
         * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
         * @param opt 额外参数
         */
        STComponent.prototype.export = function (newData, opt) {
            var _this = this;
            (newData === true ? rxjs.from(this.filteredData) : rxjs.of(newData || this._data)).subscribe(function (res) { return _this.exportSrv.export(Object.assign(Object.assign({ columens: _this._columns }, opt), { data: res })); });
        };
        // #endregion
        // #region resizable
        STComponent.prototype.colResize = function (_b, column) {
            var width = _b.width;
            column.width = width + "px";
            this.changeEmit('resize', column);
        };
        // #endregion
        // #region contextmenu
        STComponent.prototype.onContextmenu = function (event) {
            var _this = this;
            if (!this.contextmenu) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            var colEl = event.target.closest('[data-col-index]');
            if (!colEl) {
                return;
            }
            var colIndex = Number(colEl.dataset.colIndex);
            var rowIndex = Number(colEl.closest('tr').dataset.index);
            var isTitle = isNaN(rowIndex);
            var obs$ = this.contextmenu({
                event: event,
                type: isTitle ? 'head' : 'body',
                rowIndex: isTitle ? null : rowIndex,
                colIndex: colIndex,
                data: isTitle ? null : this.list[rowIndex],
                column: this._columns[colIndex]
            });
            (rxjs.isObservable(obs$) ? obs$ : rxjs.of(obs$))
                .pipe(operators.takeUntil(this.destroy$), operators.filter(function (res) { return res.length > 0; }))
                .subscribe(function (res) {
                _this.contextmenuList = res.map(function (i) {
                    if (!Array.isArray(i.children)) {
                        i.children = [];
                    }
                    return i;
                });
                _this.cdr.detectChanges();
                _this.cms.create(event, _this.contextmenuTpl);
            });
        };
        Object.defineProperty(STComponent.prototype, "cdkVirtualScrollViewport", {
            // #endregion
            get: function () {
                return this.orgTable.cdkVirtualScrollViewport;
            },
            enumerable: false,
            configurable: true
        });
        STComponent.prototype.resetColumns = function (options) {
            options = Object.assign({ emitReload: true, preClearData: false }, options);
            if (typeof options.columns !== 'undefined') {
                this.columns = options.columns;
            }
            if (typeof options.pi !== 'undefined') {
                this.pi = options.pi;
            }
            if (typeof options.ps !== 'undefined') {
                this.ps = options.ps;
            }
            if (options.emitReload) {
                // Should clean data, Because of changing columns may cause inaccurate data
                options.preClearData = true;
            }
            if (options.preClearData) {
                this._data = [];
            }
            this.refreshColumns();
            if (options.emitReload) {
                return this.loadPageData();
            }
            else {
                this.cd();
                return Promise.resolve(this);
            }
        };
        STComponent.prototype.refreshColumns = function () {
            var res = this.columnSource.process(this.columns, {
                widthMode: this.widthMode,
                resizable: this._resizable,
                safeType: this.cog.safeType
            });
            this._columns = res.columns;
            this._headers = res.headers;
            if (this.customWidthConfig === false && res.headerWidths != null) {
                this._widthConfig = res.headerWidths;
            }
            return this;
        };
        STComponent.prototype.optimizeData = function () {
            this._data = this.dataSource.optimizeData({
                columns: this._columns,
                result: this._data,
                rowClassName: this.rowClassName
            });
        };
        /**
         * Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend
         *
         * 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端
         */
        STComponent.prototype.pureItem = function (itemOrIndex) {
            if (typeof itemOrIndex === 'number') {
                itemOrIndex = this._data[itemOrIndex];
            }
            if (!itemOrIndex) {
                return null;
            }
            var copyItem = other.deepCopy(itemOrIndex);
            delete copyItem._values;
            return copyItem;
        };
        STComponent.prototype.ngAfterViewInit = function () {
            this.columnSource.restoreAllRender(this._columns);
        };
        STComponent.prototype.ngOnChanges = function (changes) {
            if (changes.columns) {
                this.refreshColumns().optimizeData();
            }
            var changeData = changes.data;
            if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
                this.loadPageData();
            }
            if (changes.loading) {
                this._loading = changes.loading.currentValue;
            }
        };
        STComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return STComponent;
    }());
    STComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'st',
                    exportAs: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"_btnClick(i, btn)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n    (click)=\"_stopPropagation($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"btn._text\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i\n    *ngIf=\"i.optionalHelp\"\n    class=\"st__head-tip\"\n    nz-tooltip\n    [nzTooltipTitle]=\"i.optionalHelp\"\n    nz-icon\n    nzType=\"question-circle\"\n  ></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c.className!\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"$any(_c).filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\"\n            ><i></i\n          ></nz-resize-handle>\n          <ng-template\n            #renderTitle\n            [ngTemplateOutlet]=\"_c.__renderTitle!\"\n            [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n          ></ng-template>\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\">\n                  </ng-template>\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\">\n                  </ng-template>\n                  <div\n                    *ngIf=\"_c.selections!.length\"\n                    nz-dropdown\n                    nzPlacement=\"bottomLeft\"\n                    [nzDropdownMenu]=\"selectionMenu\"\n                    class=\"ant-table-selection-down st__checkall-selection\"\n                  >\n                    <i nz-icon nzType=\"down\"></i>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li\n                        nz-menu-item\n                        *ngFor=\"let rw of _c.selections\"\n                        (click)=\"_rowSelection(rw)\"\n                        [innerHTML]=\"rw.text\"\n                      ></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template\n                  [ngTemplateOutlet]=\"titleTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: _c.title }\"\n                ></ng-template>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <div\n              nz-th-extra\n              *let=\"_c.filter as _f\"\n              class=\"ant-table-filter-trigger-container st__filter\"\n              [class.ant-table-filter-trigger-container-open]=\"$any(_f).visible\"\n            >\n              <span\n                class=\"ant-table-filter-trigger\"\n                [class.active]=\"$any(_f).visible || _f.default\"\n                nz-dropdown\n                [nzDropdownMenu]=\"filterMenu\"\n                nzTrigger=\"click\"\n                [nzClickHide]=\"false\"\n                [(nzVisible)]=\"$any(_f).visible\"\n                nzOverlayClassName=\"st__filter-wrap\"\n                (click)=\"_filterClick($event)\"\n              >\n                <i nz-icon [nzType]=\"$any(_f).icon.type\" [nzTheme]=\"$any(_f).icon.theme\"></i>\n              </span>\n              <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n                <div class=\"ant-table-filter-dropdown\">\n                  <ng-container [ngSwitch]=\"_f.type\">\n                    <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                      <input\n                        type=\"text\"\n                        nz-input\n                        [attr.placeholder]=\"$any(_f).menus[0].text\"\n                        [(ngModel)]=\"$any(_f).menus[0].value\"\n                      />\n                    </div>\n                    <ul *ngSwitchDefault nz-menu>\n                      <ng-container *ngIf=\"_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                        </li>\n                      </ng-container>\n                      <ng-container *ngIf=\"!_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label\n                            nz-radio\n                            [ngModel]=\"filter.checked\"\n                            (ngModelChange)=\"_filterRadio(h.column, filter, $event)\"\n                            >{{ filter.text }}</label\n                          >\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </ng-container>\n                  <div class=\"ant-table-filter-dropdown-btns\">\n                    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterConfirm(h.column)\">{{ _f.confirmText || locale.filterConfirm }}</span>\n                    </a>\n                    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterClear(h.column)\">{{ _f.clearText || locale.filterReset }}</span>\n                    </a>\n                  </div>\n                </div>\n              </nz-dropdown-menu>\n            </div>\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template\n        [ngTemplateOutlet]=\"bodyHeader!\"\n        [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"\n      ></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          (click)=\"_stopPropagation($event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td\n          *ngFor=\"let c of _columns; let cIdx = index\"\n          [nzLeft]=\"!!c._left\"\n          [nzRight]=\"!!c._right\"\n          [attr.data-col-index]=\"cIdx\"\n          [ngClass]=\"c._className!\"\n          [attr.colspan]=\"c.colSpan\"\n        >\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template\n              #render\n              [ngTemplateOutlet]=\"c.__render!\"\n              [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n            ></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label\n                  *ngSwitchCase=\"'radio'\"\n                  nz-radio\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_refRadio($event, i)\"\n                ></label>\n                <a\n                  *ngSwitchCase=\"'link'\"\n                  (click)=\"_click($event, i, c)\"\n                  [innerHTML]=\"i._values[cIdx]._text\"\n                  [attr.title]=\"i._values[cIdx].text\"\n                ></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge\n                    *ngSwitchCase=\"'badge'\"\n                    [nzStatus]=\"i._values[cIdx].color\"\n                    [nzText]=\"i._values[cIdx].text\"\n                  ></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <ng-container *ngSwitchDefault>\n                  <span\n                    *ngIf=\"c.safeType !== 'text'\"\n                    [innerHTML]=\"i._values[cIdx]._text\"\n                    [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n                  ></span>\n                  <span\n                    *ngIf=\"c.safeType === 'text'\"\n                    [innerText]=\"i._values[cIdx]._text\"\n                    [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n                  ></span>\n                </ng-container>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n                <a\n                  *ngIf=\"btn.children!.length > 0\"\n                  nz-dropdown\n                  [nzDropdownMenu]=\"btnMenu\"\n                  nzOverlayClassName=\"st__btn-sub\"\n                >\n                  <span [innerHTML]=\"btn._text\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children!\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template\n                          [ngTemplateOutlet]=\"btnTpl\"\n                          [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"\n                        >\n                        </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children!.length === 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\">\n                  </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template\n          [ngTemplateOutlet]=\"expand\"\n          [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"\n        ></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n",
                    providers: [STDataSource, STRowSource, STColumnSource, STExport, theme.DatePipe, theme.YNPipe, common.DecimalPipe],
                    host: {
                        '[class.st]': "true",
                        '[class.st__p-left]': "page.placement === 'left'",
                        '[class.st__p-center]': "page.placement === 'center'",
                        '[class.st__width-strict]': "widthMode.type === 'strict'",
                        '[class.ant-table-rep]': "responsive",
                        '[class.ant-table-rep__hide-header-footer]': "responsiveHideHeaderFooter"
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];
    STComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
        { type: i0.ChangeDetectorRef },
        { type: router.Router },
        { type: i0.ElementRef },
        { type: STExport },
        { type: theme.ModalHelper },
        { type: theme.DrawerHelper },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] },
        { type: STColumnSource },
        { type: STDataSource },
        { type: theme.DelonLocaleService },
        { type: config.AlainConfigService },
        { type: dropdown.NzContextMenuService }
    ]; };
    STComponent.propDecorators = {
        orgTable: [{ type: i0.ViewChild, args: ['table',] }],
        contextmenuTpl: [{ type: i0.ViewChild, args: ['contextmenuTpl',] }],
        req: [{ type: i0.Input }],
        res: [{ type: i0.Input }],
        page: [{ type: i0.Input }],
        data: [{ type: i0.Input }],
        columns: [{ type: i0.Input }],
        contextmenu: [{ type: i0.Input }],
        ps: [{ type: i0.Input }],
        pi: [{ type: i0.Input }],
        total: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        loadingDelay: [{ type: i0.Input }],
        loadingIndicator: [{ type: i0.Input }],
        bordered: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        scroll: [{ type: i0.Input }],
        singleSort: [{ type: i0.Input }],
        multiSort: [{ type: i0.Input }],
        rowClassName: [{ type: i0.Input }],
        widthMode: [{ type: i0.Input }],
        widthConfig: [{ type: i0.Input }],
        resizable: [{ type: i0.Input }],
        header: [{ type: i0.Input }],
        showHeader: [{ type: i0.Input }],
        footer: [{ type: i0.Input }],
        bodyHeader: [{ type: i0.Input }],
        body: [{ type: i0.Input }],
        expandRowByClick: [{ type: i0.Input }],
        expandAccordion: [{ type: i0.Input }],
        expand: [{ type: i0.Input }],
        noResult: [{ type: i0.Input }],
        rowClickTime: [{ type: i0.Input }],
        responsive: [{ type: i0.Input }],
        responsiveHideHeaderFooter: [{ type: i0.Input }],
        error: [{ type: i0.Output }],
        change: [{ type: i0.Output }],
        virtualScroll: [{ type: i0.Input }],
        virtualItemSize: [{ type: i0.Input }],
        virtualMaxBufferPx: [{ type: i0.Input }],
        virtualMinBufferPx: [{ type: i0.Input }],
        customRequest: [{ type: i0.Input }],
        virtualForTrackBy: [{ type: i0.Input }]
    };
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "ps", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "pi", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "total", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "loadingDelay", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "bordered", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "showHeader", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "expandRowByClick", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "expandAccordion", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "rowClickTime", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "responsive", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    __decorate([
        decorator.InputBoolean()
    ], STComponent.prototype, "virtualScroll", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "virtualItemSize", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "virtualMaxBufferPx", void 0);
    __decorate([
        decorator.InputNumber()
    ], STComponent.prototype, "virtualMinBufferPx", void 0);

    var COMPONENTS = [STComponent, STRowDirective, STWidgetHostDirective];
    var STModule = /** @class */ (function () {
        function STModule() {
        }
        return STModule;
    }());
    STModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        acl.DelonACLModule,
                        _let.LetModule,
                        popconfirm.NzPopconfirmModule,
                        table.NzTableModule,
                        icon.NzIconModule,
                        badge.NzBadgeModule,
                        checkbox.NzCheckboxModule,
                        divider.NzDividerModule,
                        dropdown.NzDropDownModule,
                        menu.NzMenuModule,
                        radio.NzRadioModule,
                        tag.NzTagModule,
                        input.NzInputModule,
                        tooltip.NzToolTipModule,
                        resizable.NzResizableModule
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.STColumnSource = STColumnSource;
    exports.STComponent = STComponent;
    exports.STDataSource = STDataSource;
    exports.STExport = STExport;
    exports.STModule = STModule;
    exports.STRowDirective = STRowDirective;
    exports.STWidgetHostDirective = STWidgetHostDirective;
    exports.STWidgetRegistry = STWidgetRegistry;
    exports.ST_DEFAULT_CONFIG = ST_DEFAULT_CONFIG;
    exports.ɵa = STRowSource;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.umd.js.map
