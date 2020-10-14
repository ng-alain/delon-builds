/**
 * @license ng-alain(cipchk@qq.com) v10.0.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@delon/abc/xlsx'), require('@angular/router'), require('@angular/forms'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/resizable'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/st', ['exports', '@angular/core', '@angular/platform-browser', '@delon/acl', '@delon/theme', '@delon/util', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@delon/abc/xlsx', '@angular/router', '@angular/forms', 'ng-zorro-antd/badge', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/divider', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/menu', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/radio', 'ng-zorro-antd/resizable', 'ng-zorro-antd/table', 'ng-zorro-antd/tag', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.st = {}), global.ng.core, global.ng.platformBrowser, global.delon.acl, global.delon.theme, global.delon.util, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.delon.abc.xlsx, global.ng.router, global.ng.forms, global['ng-zorro-antd/badge'], global['ng-zorro-antd/checkbox'], global['ng-zorro-antd/divider'], global['ng-zorro-antd/dropdown'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/input'], global['ng-zorro-antd/menu'], global['ng-zorro-antd/popconfirm'], global['ng-zorro-antd/radio'], global.resizable, global['ng-zorro-antd/table'], global['ng-zorro-antd/tag'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, i0, platformBrowser, acl, theme, util, common, http, rxjs, operators, xlsx, router, forms, badge, checkbox, divider, dropdown, icon, input, menu, popconfirm, radio, resizable, table, tag, tooltip) { 'use strict';

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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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
     * @fileoverview added by tsickle
     * Generated from: st-row.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STRowSource = /** @class */ (function () {
        function STRowSource() {
            this.titles = {};
            this.rows = {};
        }
        /**
         * @param {?} type
         * @param {?} path
         * @param {?} ref
         * @return {?}
         */
        STRowSource.prototype.add = function (type, path, ref) {
            this[type === 'title' ? 'titles' : 'rows'][path] = ref;
        };
        /**
         * @param {?} path
         * @return {?}
         */
        STRowSource.prototype.getTitle = function (path) {
            return this.titles[path];
        };
        /**
         * @param {?} path
         * @return {?}
         */
        STRowSource.prototype.getRow = function (path) {
            return this.rows[path];
        };
        return STRowSource;
    }());
    STRowSource.decorators = [
        { type: i0.Injectable }
    ];
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STRowSource.prototype.titles;
        /**
         * @type {?}
         * @private
         */
        STRowSource.prototype.rows;
    }
    var STRowDirective = /** @class */ (function () {
        /**
         * @param {?} ref
         * @param {?} source
         */
        function STRowDirective(ref, source) {
            this.ref = ref;
            this.source = source;
        }
        /**
         * @return {?}
         */
        STRowDirective.prototype.ngOnInit = function () {
            this.source.add(this.type, this.id, this.ref);
        };
        return STRowDirective;
    }());
    STRowDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[st-row]' },] }
    ];
    /** @nocollapse */
    STRowDirective.ctorParameters = function () { return [
        { type: i0.TemplateRef },
        { type: STRowSource, decorators: [{ type: i0.Host }] }
    ]; };
    STRowDirective.propDecorators = {
        id: [{ type: i0.Input, args: ['st-row',] }],
        type: [{ type: i0.Input }]
    };
    if (false) {
        /** @type {?} */
        STRowDirective.prototype.id;
        /** @type {?} */
        STRowDirective.prototype.type;
        /**
         * @type {?}
         * @private
         */
        STRowDirective.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        STRowDirective.prototype.source;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: st-widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STWidgetRegistry = /** @class */ (function () {
        function STWidgetRegistry() {
            this._widgets = {};
        }
        Object.defineProperty(STWidgetRegistry.prototype, "widgets", {
            /**
             * @return {?}
             */
            get: function () {
                return this._widgets;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
        STWidgetRegistry.prototype.register = function (type, widget) {
            this._widgets[type] = widget;
        };
        /**
         * @param {?} type
         * @return {?}
         */
        STWidgetRegistry.prototype.has = function (type) {
            return this._widgets.hasOwnProperty(type);
        };
        /**
         * @param {?} type
         * @return {?}
         */
        STWidgetRegistry.prototype.get = function (type) {
            return this._widgets[type];
        };
        return STWidgetRegistry;
    }());
    STWidgetRegistry.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ STWidgetRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function STWidgetRegistry_Factory() { return new STWidgetRegistry(); }, token: STWidgetRegistry, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STWidgetRegistry.prototype._widgets;
    }

    /**
     * @record
     */
    function STColumnSourceProcessOptions() { }
    if (false) {
        /** @type {?} */
        STColumnSourceProcessOptions.prototype.widthMode;
        /** @type {?} */
        STColumnSourceProcessOptions.prototype.resizable;
    }
    var STColumnSource = /** @class */ (function () {
        /**
         * @param {?} dom
         * @param {?} rowSource
         * @param {?} acl
         * @param {?} i18nSrv
         * @param {?} stWidgetRegistry
         */
        function STColumnSource(dom, rowSource, acl, i18nSrv, stWidgetRegistry) {
            this.dom = dom;
            this.rowSource = rowSource;
            this.acl = acl;
            this.i18nSrv = i18nSrv;
            this.stWidgetRegistry = stWidgetRegistry;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        STColumnSource.prototype.setCog = function (val) {
            this.cog = val;
        };
        /**
         * @private
         * @param {?} i
         * @param {?} def
         * @return {?}
         */
        STColumnSource.prototype.fixPop = function (i, def) {
            if (i.pop == null || i.pop === false) {
                i.pop = false;
                return;
            }
            /** @type {?} */
            var pop = Object.assign({}, def);
            if (typeof i.pop === 'string') {
                pop.title = i.pop;
            }
            else if (typeof i.pop === 'object') {
                pop = Object.assign(Object.assign({}, pop), i.pop);
            }
            if (typeof pop.condition !== 'function') {
                pop.condition = ( /**
                 * @return {?}
                 */function () { return false; });
            }
            i.pop = pop;
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerce = function (list) {
            var e_1, _b;
            if (!list)
                return [];
            /** @type {?} */
            var ret = [];
            var _c = this.cog, modal = _c.modal, drawer = _c.drawer, pop = _c.pop, btnIcon = _c.btnIcon;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    if (this.acl && item.acl && !this.acl.can(item.acl)) {
                        continue;
                    }
                    if (item.type === 'modal' || item.type === 'static') {
                        if (item.modal == null || item.modal.component == null) {
                            console.warn("[st] Should specify modal parameter");
                            item.type = 'none';
                        }
                        else {
                            item.modal = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, modal), item.modal);
                        }
                    }
                    if (item.type === 'drawer') {
                        if (item.drawer == null || item.drawer.component == null) {
                            console.warn("[st] Should specify drawer parameter");
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
                    this.fixPop(item, ( /** @type {?} */(pop)));
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
                    if (list_1_1 && !list_1_1.done && (_b = list_1.return)) _b.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.btnCoerceIf(ret);
            return ret;
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerceIf = function (list) {
            var e_2, _b;
            try {
                for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var item = list_2_1.value;
                    if (!item.iif)
                        item.iif = ( /**
                         * @return {?}
                         */function () { return true; });
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
                    if (list_2_1 && !list_2_1.done && (_b = list_2.return)) _b.call(list_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.fixedCoerce = function (list) {
            /** @type {?} */
            var countReduce = ( /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */function (a, b) { return a + +( /** @type {?} */(b.width)).toString().replace('px', ''); });
            // left width
            list
                .filter(( /**
         * @param {?} w
         * @return {?}
         */function (/**
         * @param {?} w
         * @return {?}
         */ w) { return w.fixed && w.fixed === 'left' && w.width; }))
                .forEach(( /**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'); }));
            // right width
            list
                .filter(( /**
         * @param {?} w
         * @return {?}
         */function (/**
         * @param {?} w
         * @return {?}
         */ w) { return w.fixed && w.fixed === 'right' && w.width; }))
                .reverse()
                .forEach(( /**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'); }));
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.sortCoerce = function (item) {
            /** @type {?} */
            var res = this.fixSortCoerce(item);
            res.reName = Object.assign(Object.assign({}, this.cog.sortReName), res.reName);
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.fixSortCoerce = function (item) {
            if (typeof item.sort === 'undefined') {
                return { enabled: false };
            }
            /** @type {?} */
            var res = {};
            if (typeof item.sort === 'string') {
                res.key = item.sort;
            }
            else if (typeof item.sort !== 'boolean') {
                res = item.sort;
            }
            else if (typeof item.sort === 'boolean') {
                res.compare = ( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return a[( /** @type {?} */(item.indexKey))] - b[( /** @type {?} */(item.indexKey))]; });
            }
            if (!res.key) {
                res.key = item.indexKey;
            }
            res.enabled = true;
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.filterCoerce = function (item) {
            var _this = this;
            if (item.filter == null) {
                return null;
            }
            /** @type {?} */
            var res = item.filter;
            res.type = res.type || 'default';
            /** @type {?} */
            var icon = 'filter';
            /** @type {?} */
            var iconTheme = 'fill';
            if (res.type === 'keyword') {
                if (res.menus == null || ( /** @type {?} */(res.menus)).length === 0) {
                    res.menus = [{ value: '' }];
                }
                icon = 'search';
                iconTheme = 'outline';
            }
            if (( /** @type {?} */(res.menus)).length === 0) {
                return null;
            }
            if (typeof res.multiple === 'undefined') {
                res.multiple = true;
            }
            res.confirmText = res.confirmText || this.cog.filterConfirmText;
            res.clearText = res.clearText || this.cog.filterClearText;
            res.key = res.key || item.indexKey;
            res.icon = res.icon || icon;
            /** @type {?} */
            var baseIcon = ( /** @type {?} */({ type: icon, theme: iconTheme }));
            if (typeof res.icon === 'string') {
                res.icon = ( /** @type {?} */(Object.assign(Object.assign({}, baseIcon), { type: res.icon })));
            }
            else {
                res.icon = Object.assign(Object.assign({}, baseIcon), res.icon);
            }
            this.updateDefault(res);
            if (this.acl) {
                res.menus = ( /** @type {?} */(res.menus)).filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return _this.acl.can(w.acl); }));
            }
            if (( /** @type {?} */(res.menus)).length <= 0) {
                res = null;
            }
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.restoreRender = function (item) {
            if (item.renderTitle) {
                item.__renderTitle =
                    typeof item.renderTitle === 'string' ? this.rowSource.getTitle(item.renderTitle) : (( /** @type {?} */(item.renderTitle)));
            }
            if (item.render) {
                item.__render = typeof item.render === 'string' ? this.rowSource.getRow(item.render) : (( /** @type {?} */(item.render)));
            }
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.widgetCoerce = function (item) {
            var _a;
            if (item.type !== 'widget')
                return;
            if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
                delete item.type;
                util.warn("st: No widget for type \"" + ((_a = item.widget) === null || _a === void 0 ? void 0 : _a.type) + "\"");
            }
        };
        /**
         * @private
         * @param {?} rootColumns
         * @return {?}
         */
        STColumnSource.prototype.genHeaders = function (rootColumns) {
            /** @type {?} */
            var rows = [];
            /** @type {?} */
            var widths = [];
            /** @type {?} */
            var fillRowCells = ( /**
             * @param {?} columns
             * @param {?} colIndex
             * @param {?=} rowIndex
             * @return {?}
             */function (columns, colIndex, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                // Init rows
                rows[rowIndex] = rows[rowIndex] || [];
                /** @type {?} */
                var currentColIndex = colIndex;
                /** @type {?} */
                var colSpans = columns.map(( /**
                 * @param {?} column
                 * @return {?}
                 */function (/**
                 * @param {?} column
                 * @return {?}
                 */ column) {
                    /** @type {?} */
                    var cell = {
                        column: column,
                        colStart: currentColIndex,
                        hasSubColumns: false,
                    };
                    /** @type {?} */
                    var colSpan = 1;
                    /** @type {?} */
                    var subColumns = column.children;
                    if (Array.isArray(subColumns) && subColumns.length > 0) {
                        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(( /**
                         * @param {?} total
                         * @param {?} count
                         * @return {?}
                         */function (total, count) { return total + count; }), 0);
                        cell.hasSubColumns = true;
                    }
                    else {
                        widths.push((( /** @type {?} */(cell.column.width))) || '');
                    }
                    if ('colSpan' in column) {
                        colSpan = ( /** @type {?} */(column.colSpan));
                    }
                    if ('rowSpan' in column) {
                        cell.rowSpan = column.rowSpan;
                    }
                    cell.colSpan = colSpan;
                    cell.colEnd = cell.colStart + colSpan - 1;
                    rows[rowIndex].push(( /** @type {?} */(cell)));
                    currentColIndex += colSpan;
                    return colSpan;
                }));
                return colSpans;
            });
            fillRowCells(rootColumns, 0);
            // Handle `rowSpan`
            /** @type {?} */
            var rowCount = rows.length;
            var _loop_1 = function (rowIndex) {
                rows[rowIndex].forEach(( /**
                 * @param {?} cell
                 * @return {?}
                 */function (/**
                 * @param {?} cell
                 * @return {?}
                 */ cell) {
                    if (!('rowSpan' in cell) && !cell.hasSubColumns) {
                        cell.rowSpan = rowCount - rowIndex;
                    }
                }));
            };
            for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
                _loop_1(rowIndex);
            }
            return { headers: rows, headerWidths: rowCount > 1 ? widths : null };
        };
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.cleanCond = function (list) {
            var e_3, _b;
            /** @type {?} */
            var res = [];
            /** @type {?} */
            var copyList = util.deepCopy(list);
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
                    if (copyList_1_1 && !copyList_1_1.done && (_b = copyList_1.return)) _b.call(copyList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res;
        };
        /**
         * @param {?} list
         * @param {?} options
         * @return {?}
         */
        STColumnSource.prototype.process = function (list, options) {
            var _this = this;
            if (!list || list.length === 0)
                throw new Error("[st]: the columns property muse be define!");
            var noIndex = this.cog.noIndex;
            /** @type {?} */
            var checkboxCount = 0;
            /** @type {?} */
            var radioCount = 0;
            /** @type {?} */
            var point = 0;
            /** @type {?} */
            var columns = [];
            /** @type {?} */
            var processItem = ( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                // index
                if (item.index) {
                    if (!Array.isArray(item.index)) {
                        item.index = item.index.split('.');
                    }
                    item.indexKey = item.index.join('.');
                }
                // #region title
                /** @type {?} */
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
                    item.selections = item.selections.filter(( /**
                     * @param {?} w
                     * @return {?}
                     */function (/**
                     * @param {?} w
                     * @return {?}
                     */ w) { return _this.acl.can(w.acl); }));
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
                    item.yn = Object.assign({ truth: true }, item.yn);
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
                    item.className = (( /** @type {?} */({
                        number: 'text-right',
                        currency: 'text-right',
                        date: 'text-center',
                    })))[( /** @type {?} */(item.type))];
                }
                item._className = item.className || (item._isTruncate ? 'text-truncate' : null);
                // width
                if (typeof item.width === 'number') {
                    item.width = item.width + "px";
                }
                // sorter
                item._sort = _this.sortCoerce(item);
                // filter
                item.filter = ( /** @type {?} */(_this.filterCoerce(item)));
                // buttons
                item.buttons = _this.btnCoerce(( /** @type {?} */(item.buttons)));
                // widget
                _this.widgetCoerce(item);
                // restore custom row
                _this.restoreRender(item);
                // resizable
                item.resizable = Object.assign(Object.assign({ disabled: true, bounds: 'window', minWidth: 60, maxWidth: 360, preview: true }, options.resizable), (typeof item.resizable === 'boolean' ? (( /** @type {?} */({ disabled: !item.resizable }))) : item.resizable));
                item.__point = point++;
                return item;
            });
            /** @type {?} */
            var processList = ( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                var e_4, _b;
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
                        if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            });
            /** @type {?} */
            var copyList = this.cleanCond(( /** @type {?} */(list)));
            processList(copyList);
            if (checkboxCount > 1) {
                throw new Error("[st]: just only one column checkbox");
            }
            if (radioCount > 1) {
                throw new Error("[st]: just only one column radio");
            }
            this.fixedCoerce(( /** @type {?} */(columns)));
            return Object.assign({ columns: columns.filter(( /**
                     * @param {?} w
                     * @return {?}
                     */function (/**
                     * @param {?} w
                     * @return {?}
                     */ w) { return !Array.isArray(w.children) || w.children.length === 0; })) }, this.genHeaders(copyList));
        };
        /**
         * @param {?} columns
         * @return {?}
         */
        STColumnSource.prototype.restoreAllRender = function (columns) {
            var _this = this;
            columns.forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return _this.restoreRender(i); }));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} filter
         * @return {THIS}
         */
        STColumnSource.prototype.updateDefault = function (filter) {
            if (filter.type === 'default') {
                filter.default = ( /** @type {?} */(filter.menus)).findIndex(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return ( /** @type {?} */(w.checked)); })) !== -1;
            }
            else {
                filter.default = !!( /** @type {?} */(filter.menus))[0].value;
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} col
         * @return {THIS}
         */
        STColumnSource.prototype.cleanFilter = function (col) {
            /** @type {?} */
            var f = ( /** @type {?} */(col.filter));
            f.default = false;
            if (f.type === 'default') {
                ( /** @type {?} */(f.menus)).forEach(( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) { return (i.checked = false); }));
            }
            else {
                ( /** @type {?} */(f.menus))[0].value = undefined;
            }
            return ( /** @type {?} */(this));
        };
        return STColumnSource;
    }());
    STColumnSource.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    STColumnSource.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: STRowSource, decorators: [{ type: i0.Host }] },
        { type: acl.ACLService, decorators: [{ type: i0.Optional }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
        { type: STWidgetRegistry }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.dom;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.rowSource;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.acl;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        STColumnSource.prototype.stWidgetRegistry;
    }

    /**
     * @record
     */
    function STDataSourceOptions() { }
    if (false) {
        /** @type {?} */
        STDataSourceOptions.prototype.pi;
        /** @type {?} */
        STDataSourceOptions.prototype.ps;
        /** @type {?} */
        STDataSourceOptions.prototype.paginator;
        /** @type {?} */
        STDataSourceOptions.prototype.data;
        /** @type {?} */
        STDataSourceOptions.prototype.total;
        /** @type {?} */
        STDataSourceOptions.prototype.req;
        /** @type {?} */
        STDataSourceOptions.prototype.res;
        /** @type {?} */
        STDataSourceOptions.prototype.page;
        /** @type {?} */
        STDataSourceOptions.prototype.columns;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.singleSort;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.multiSort;
        /** @type {?|undefined} */
        STDataSourceOptions.prototype.rowClassName;
    }
    /**
     * @record
     */
    function STDataSourceResult() { }
    if (false) {
        /**
         * 是否需要显示分页器
         * @type {?}
         */
        STDataSourceResult.prototype.pageShow;
        /**
         * 新 `pi`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.pi;
        /**
         * 新 `ps`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.ps;
        /**
         * 新 `total`，若返回 `undefined` 表示用户受控
         * @type {?}
         */
        STDataSourceResult.prototype.total;
        /**
         * 数据
         * @type {?}
         */
        STDataSourceResult.prototype.list;
        /**
         * 统计数据
         * @type {?}
         */
        STDataSourceResult.prototype.statistical;
    }
    var STDataSource = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} currentyPipe
         * @param {?} datePipe
         * @param {?} ynPipe
         * @param {?} numberPipe
         * @param {?} dom
         */
        function STDataSource(http, currentyPipe, datePipe, ynPipe, numberPipe, dom) {
            this.http = http;
            this.currentyPipe = currentyPipe;
            this.datePipe = datePipe;
            this.ynPipe = ynPipe;
            this.numberPipe = numberPipe;
            this.dom = dom;
            this.sortTick = 0;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.process = function (options) {
            var _this = this;
            /** @type {?} */
            var data$;
            /** @type {?} */
            var isRemote = false;
            var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, paginator = options.paginator, columns = options.columns;
            /** @type {?} */
            var retTotal;
            /** @type {?} */
            var retPs;
            /** @type {?} */
            var retList;
            /** @type {?} */
            var retPi;
            /** @type {?} */
            var rawData;
            /** @type {?} */
            var showPage = page.show;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = this.getByHttp(data, options).pipe(operators.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (/**
                 * @param {?} result
                 * @return {?}
                 */ result) {
                    rawData = result;
                    /** @type {?} */
                    var ret;
                    if (Array.isArray(result)) {
                        ret = result;
                        retTotal = ret.length;
                        retPs = retTotal;
                        showPage = false;
                    }
                    else {
                        // list
                        ret = util.deepGet(result, ( /** @type {?} */(( /** @type {?} */(res.reName)).list)), []);
                        if (ret == null || !Array.isArray(ret)) {
                            ret = [];
                        }
                        // total
                        /** @type {?} */
                        var resultTotal = ( /** @type {?} */(res.reName)).total && util.deepGet(result, ( /** @type {?} */(( /** @type {?} */(res.reName)).total)), null);
                        retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    }
                    return util.deepCopy(ret);
                })));
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
                operators.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    rawData = result;
                    /** @type {?} */
                    var copyResult = util.deepCopy(result);
                    /** @type {?} */
                    var sorterFn = _this.getSorterFn(( /** @type {?} */(columns)));
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                })), 
                // filter
                operators.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    columns
                        .filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w.filter; }))
                        .forEach(( /**
                 * @param {?} c
                 * @return {?}
                 */function (/**
                 * @param {?} c
                 * @return {?}
                 */ c) {
                        /** @type {?} */
                        var filter = ( /** @type {?} */(c.filter));
                        /** @type {?} */
                        var values = _this.getFilteredData(filter);
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        var onFilter = filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter(( /**
                         * @param {?} record
                         * @return {?}
                         */function (/**
                         * @param {?} record
                         * @return {?}
                         */ record) { return values.some(( /**
                         * @param {?} v
                         * @return {?}
                         */function (/**
                         * @param {?} v
                         * @return {?}
                         */ v) { return onFilter(v, record); })); }));
                    }));
                    return result;
                })), 
                // paging
                operators.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (paginator && page.front) {
                        /** @type {?} */
                        var maxPageIndex = Math.ceil(result.length / ps);
                        retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                        retTotal = result.length;
                        if (page.show === true) {
                            return result.slice((retPi - 1) * ps, retPi * ps);
                        }
                    }
                    return result;
                })));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(operators.map(( /**
                 * @param {?} result
                 * @return {?}
                 */function (/**
                 * @param {?} result
                 * @return {?}
                 */ result) { return ( /** @type {?} */(res.process))(result, rawData); })));
            }
            data$ = data$.pipe(operators.map(( /**
             * @param {?} result
             * @return {?}
             */function (/**
             * @param {?} result
             * @return {?}
             */ result) { return _this.optimizeData({ result: result, columns: columns, rowClassName: options.rowClassName }); })));
            return data$.pipe(operators.map(( /**
             * @param {?} result
             * @return {?}
             */function (/**
             * @param {?} result
             * @return {?}
             */ result) {
                retList = result;
                /** @type {?} */
                var realTotal = retTotal || total;
                /** @type {?} */
                var realPs = retPs || ps;
                return ( /** @type {?} */({
                    pi: retPi,
                    ps: retPs,
                    total: retTotal,
                    list: retList,
                    statistical: _this.genStatistical(( /** @type {?} */(columns)), retList, rawData),
                    pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                }));
            })));
        };
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.get = function (item, col, idx) {
            if (col.format) {
                /** @type {?} */
                var formatRes = col.format(item, col, idx) || '';
                if (formatRes && ~formatRes.indexOf('</')) {
                    return { text: formatRes, _text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
                }
                return { text: formatRes, _text: formatRes, org: formatRes };
            }
            /** @type {?} */
            var value = util.deepGet(item, ( /** @type {?} */(col.index)), col.default);
            /** @type {?} */
            var text = value;
            /** @type {?} */
            var color;
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
                    text = this.currentyPipe.transform(value);
                    break;
                case 'date':
                    text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
                    break;
                case 'yn':
                    text = this.ynPipe.transform(value === ( /** @type {?} */(col.yn)).truth, ( /** @type {?} */(( /** @type {?} */(col.yn)).yes)), ( /** @type {?} */(( /** @type {?} */(col.yn)).no)), ( /** @type {?} */(( /** @type {?} */(col.yn)).mode)), false);
                    break;
                case 'enum':
                    text = ( /** @type {?} */(col.enum))[value];
                    break;
                case 'tag':
                case 'badge':
                    /** @type {?} */
                    var data = col.type === 'tag' ? col.tag : col.badge;
                    if (data && data[text]) {
                        /** @type {?} */
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
            return { text: text, _text: this.dom.bypassSecurityTrustHtml(text), org: value, color: color };
        };
        /**
         * @private
         * @param {?} url
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.getByHttp = function (url, options) {
            var _a, _b;
            var req = options.req, page = options.page, paginator = options.paginator, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
            /** @type {?} */
            var method = (req.method || 'GET').toUpperCase();
            /** @type {?} */
            var params = {};
            /** @type {?} */
            var reName = ( /** @type {?} */(req.reName));
            if (paginator) {
                if (req.type === 'page') {
                    params = (_a = {},
                        _a[( /** @type {?} */(reName.pi))] = page.zeroIndexed ? pi - 1 : pi,
                        _a[( /** @type {?} */(reName.ps))] = ps,
                        _a);
                }
                else {
                    params = (_b = {},
                        _b[( /** @type {?} */(reName.skip))] = (pi - 1) * ps,
                        _b[( /** @type {?} */(reName.limit))] = ps,
                        _b);
                }
            }
            params = Object.assign(Object.assign(Object.assign(Object.assign({}, params), req.params), this.getReqSortMap(singleSort, multiSort, columns)), this.getReqFilterMap(columns));
            /** @type {?} */
            var reqOptions = {
                params: new http.HttpParams({ fromObject: params }),
                body: req.body,
                headers: req.headers,
            };
            if (method === 'POST' && req.allInBody === true) {
                reqOptions = {
                    body: Object.assign(Object.assign({}, req.body), params),
                    headers: req.headers,
                };
            }
            if (typeof req.process === 'function') {
                reqOptions = req.process(reqOptions);
            }
            return this.http.request(method, url, reqOptions);
        };
        /**
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.optimizeData = function (options) {
            var _this = this;
            var result = options.result, columns = options.columns, rowClassName = options.rowClassName;
            var _loop_1 = function (i, len) {
                result[i]._values = columns.map(( /**
                 * @param {?} c
                 * @return {?}
                 */function (/**
                 * @param {?} c
                 * @return {?}
                 */ c) { return _this.get(result[i], c, i); }));
                if (rowClassName) {
                    result[i]._rowClassName = rowClassName(result[i], i);
                }
            };
            for (var i = 0, len = result.length; i < len; i++) {
                _loop_1(i, len);
            }
            return result;
        };
        /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.getNoIndex = function (item, col, idx) {
            return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : ( /** @type {?} */(col.noIndex)) + idx;
        };
        // #region sort
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getValidSort = function (columns) {
            return columns.filter(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return item._sort && item._sort.enabled && item._sort.default; })).map(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return ( /** @type {?} */(item._sort)); }));
        };
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getSorterFn = function (columns) {
            /** @type {?} */
            var sortList = this.getValidSort(columns);
            if (sortList.length === 0) {
                return;
            }
            /** @type {?} */
            var sortItem = sortList[0];
            if (sortItem.compare === null) {
                return;
            }
            if (typeof sortItem.compare !== 'function') {
                console.warn("[st] Muse provide the compare function in sort");
                return;
            }
            return ( /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */function (a, b) {
                /** @type {?} */
                var result = ( /** @type {?} */(sortItem.compare))(a, b);
                if (result !== 0) {
                    return sortItem.default === 'descend' ? -result : result;
                }
                return 0;
            });
        };
        Object.defineProperty(STDataSource.prototype, "nextSortTick", {
            /**
             * @return {?}
             */
            get: function () {
                return ++this.sortTick;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} singleSort
         * @param {?} multiSort
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqSortMap = function (singleSort, multiSort, columns) {
            var _a;
            /** @type {?} */
            var ret = {};
            /** @type {?} */
            var sortList = this.getValidSort(columns);
            if (multiSort) {
                /** @type {?} */
                var ms_1 = Object.assign({ key: 'sort', separator: '-', nameSeparator: '.', keepEmptyKey: true, arrayParam: false }, multiSort);
                /** @type {?} */
                var sortMap = sortList
                    .sort(( /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */function (a, b) { return a.tick - b.tick; }))
                    .map(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return ( /** @type {?} */(item.key)) + ms_1.nameSeparator + ((item.reName || {})[( /** @type {?} */(item.default))] || item.default); }));
                ret = (_a = {}, _a[( /** @type {?} */(ms_1.key))] = ms_1.arrayParam ? sortMap : sortMap.join(ms_1.separator), _a);
                return sortMap.length === 0 && ms_1.keepEmptyKey === false ? {} : ret;
            }
            if (sortList.length === 0)
                return ret;
            /** @type {?} */
            var mapData = sortList[0];
            /** @type {?} */
            var sortFiled = mapData.key;
            /** @type {?} */
            var sortValue = (sortList[0].reName || {})[( /** @type {?} */(mapData.default))] || mapData.default;
            if (singleSort) {
                sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                sortFiled = singleSort.key || 'sort';
            }
            ret[( /** @type {?} */(sortFiled))] = ( /** @type {?} */(sortValue));
            return ret;
        };
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} filter
         * @return {?}
         */
        STDataSource.prototype.getFilteredData = function (filter) {
            return filter.type === 'default' ? ( /** @type {?} */(filter.menus)).filter(( /**
             * @param {?} f
             * @return {?}
             */function (/**
             * @param {?} f
             * @return {?}
             */ f) { return f.checked === true; })) : ( /** @type {?} */(filter.menus)).slice(0, 1);
        };
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqFilterMap = function (columns) {
            var _this = this;
            /** @type {?} */
            var ret = {};
            columns
                .filter(( /**
         * @param {?} w
         * @return {?}
         */function (/**
         * @param {?} w
         * @return {?}
         */ w) { return w.filter && w.filter.default === true; }))
                .forEach(( /**
         * @param {?} col
         * @return {?}
         */function (/**
         * @param {?} col
         * @return {?}
         */ col) {
                /** @type {?} */
                var filter = ( /** @type {?} */(col.filter));
                /** @type {?} */
                var values = _this.getFilteredData(filter);
                /** @type {?} */
                var obj = {};
                if (filter.reName) {
                    obj = ( /** @type {?} */(filter.reName))(( /** @type {?} */(filter.menus)), col);
                }
                else {
                    obj[( /** @type {?} */(filter.key))] = values.map(( /**
                     * @param {?} i
                     * @return {?}
                     */function (/**
                     * @param {?} i
                     * @return {?}
                     */ i) { return i.value; })).join(',');
                }
                ret = Object.assign(Object.assign({}, ret), obj);
            }));
            return ret;
        };
        // #endregion
        // #region statistical
        /**
         * @private
         * @param {?} columns
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.genStatistical = function (columns, list, rawData) {
            var _this = this;
            /** @type {?} */
            var res = {};
            columns.forEach(( /**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */function (col, index) {
                res[col.key || col.indexKey || index] = col.statistical == null ? {} : _this.getStatistical(col, index, list, rawData);
            }));
            return res;
        };
        /**
         * @private
         * @param {?} col
         * @param {?} index
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.getStatistical = function (col, index, list, rawData) {
            /** @type {?} */
            var val = col.statistical;
            /** @type {?} */
            var item = Object.assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: ( /** @type {?} */(val)) } : (( /** @type {?} */(val)))));
            /** @type {?} */
            var res = { value: 0 };
            /** @type {?} */
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
                        res.value = this.getValues(index, list).filter(( /**
                         * @param {?} value
                         * @param {?} idx
                         * @param {?} self
                         * @return {?}
                         */function (value, idx, self) { return self.indexOf(value) === idx; })).length;
                        break;
                    case 'sum':
                        res.value = this.toFixed(this.getSum(index, list), ( /** @type {?} */(item.digits)));
                        currency = true;
                        break;
                    case 'average':
                        res.value = this.toFixed(this.getSum(index, list) / list.length, ( /** @type {?} */(item.digits)));
                        currency = true;
                        break;
                    case 'max':
                        res.value = Math.max.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                    case 'min':
                        res.value = Math.min.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                }
            }
            if (item.currency === true || (item.currency == null && currency === true)) {
                res.text = ( /** @type {?} */(this.currentyPipe.transform(res.value)));
            }
            else {
                res.text = String(res.value);
            }
            return res;
        };
        /**
         * @private
         * @param {?} val
         * @param {?} digits
         * @return {?}
         */
        STDataSource.prototype.toFixed = function (val, digits) {
            if (isNaN(val) || !isFinite(val)) {
                return 0;
            }
            return parseFloat(val.toFixed(digits));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getValues = function (index, list) {
            return list.map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return i._values[index].org; })).map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i === '' || i == null ? 0 : i); }));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getSum = function (index, list) {
            return this.getValues(index, list).reduce(( /**
             * @param {?} p
             * @param {?} i
             * @return {?}
             */function (p, i) { return (p += parseFloat(String(i))); }), 0);
        };
        return STDataSource;
    }());
    STDataSource.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    STDataSource.ctorParameters = function () { return [
        { type: theme._HttpClient },
        { type: theme.CNCurrencyPipe, decorators: [{ type: i0.Host }] },
        { type: theme.DatePipe, decorators: [{ type: i0.Host }] },
        { type: theme.YNPipe, decorators: [{ type: i0.Host }] },
        { type: common.DecimalPipe, decorators: [{ type: i0.Host }] },
        { type: platformBrowser.DomSanitizer }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.sortTick;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.http;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.currentyPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.datePipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.ynPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.numberPipe;
        /**
         * @type {?}
         * @private
         */
        STDataSource.prototype.dom;
    }

    var STExport = /** @class */ (function () {
        /**
         * @param {?} xlsxSrv
         */
        function STExport(xlsxSrv) {
            this.xlsxSrv = xlsxSrv;
        }
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} index
         * @return {?}
         */
        STExport.prototype._stGet = function (item, col, index) {
            /** @type {?} */
            var ret = { t: 's', v: '' };
            if (col.format) {
                ret.v = col.format(item, col, index);
            }
            else {
                /** @type {?} */
                var val = util.deepGet(item, ( /** @type {?} */(col.index)), '');
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
                            /** @type {?} */
                            var yn = ( /** @type {?} */(col.yn));
                            ret.v = ret.v === yn.truth ? yn.yes || '是' : yn.no || '否';
                            break;
                    }
                }
            }
            ret.v = ret.v || '';
            return ret;
        };
        /**
         * @private
         * @param {?} opt
         * @return {?}
         */
        STExport.prototype.genSheet = function (opt) {
            /** @type {?} */
            var sheets = {};
            /** @type {?} */
            var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
            /** @type {?} */
            var colData = ( /** @type {?} */(opt.columens)).filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); }));
            /** @type {?} */
            var colLen = colData.length;
            /** @type {?} */
            var dataLen = ( /** @type {?} */(opt.data)).length;
            // column
            for (var i = 0; i < colLen; i++) {
                /** @type {?} */
                var tit = colData[i].title;
                sheet[this.xlsxSrv.numberToSchema(i + 1) + "1"] = {
                    t: 's',
                    v: typeof tit === 'object' ? tit.text : tit,
                };
            }
            // content
            for (var i = 0; i < dataLen; i++) {
                for (var j = 0; j < colLen; j++) {
                    sheet["" + this.xlsxSrv.numberToSchema(j + 1) + (i + 2)] = this._stGet(( /** @type {?} */(opt.data))[i], colData[j], i);
                }
            }
            if (colLen > 0 && dataLen > 0) {
                sheet['!ref'] = "A1:" + this.xlsxSrv.numberToSchema(colLen) + (dataLen + 1);
            }
            return sheets;
        };
        /**
         * @param {?} opt
         * @return {?}
         */
        STExport.prototype.export = function (opt) {
            return __awaiter(this, void 0, void 0, function () {
                var sheets;
                return __generator(this, function (_a) {
                    sheets = this.genSheet(opt);
                    return [2 /*return*/, this.xlsxSrv.export({
                            sheets: sheets,
                            filename: opt.filename,
                            callback: opt.callback,
                        })];
                });
            });
        };
        return STExport;
    }());
    STExport.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    STExport.ctorParameters = function () { return [
        { type: xlsx.XlsxService, decorators: [{ type: i0.Optional }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        STExport.prototype.xlsxSrv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: st.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ST_DEFULAT_CONFIG = {
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
            reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
        },
        res: {
            reName: { list: ['list'], total: ['total'] },
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
            simple: false,
        },
        modal: {
            paramsName: 'record',
            size: 'lg',
            exact: true,
        },
        drawer: {
            paramsName: 'record',
            size: 'md',
            footer: true,
            footerHeight: 55,
        },
        pop: {
            title: '确认删除吗？',
            trigger: 'click',
            placement: 'top',
        },
        rowClickTime: 200,
        btnIcon: {
            theme: 'outline',
            spin: false,
        },
        noIndex: 1,
        expandRowByClick: false,
        expandAccordion: false,
        widthMode: {
            type: 'default',
            strictBehavior: 'truncate',
        },
        virtualItemSize: 54,
        virtualMaxBufferPx: 200,
        virtualMinBufferPx: 100,
        iifBehavior: 'hide',
        loadingDelay: 0,
    };

    var STComponent = /** @class */ (function () {
        /**
         * @param {?} i18nSrv
         * @param {?} cdr
         * @param {?} router
         * @param {?} el
         * @param {?} exportSrv
         * @param {?} modalHelper
         * @param {?} drawerHelper
         * @param {?} doc
         * @param {?} columnSource
         * @param {?} dataSource
         * @param {?} delonI18n
         * @param {?} configSrv
         */
        function STComponent(i18nSrv, cdr, router, el, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n, configSrv) {
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
            this.unsubscribe$ = new rxjs.Subject();
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
            this.columns = [];
            this.ps = 10;
            this.pi = 1;
            this.total = 0;
            this.loading = null;
            this.loadingDelay = 0;
            this.bordered = false;
            this.expandRowByClick = false;
            this.expandAccordion = false;
            this.rowClickTime = 200;
            this.responsive = true;
            // tslint:disable-next-line:no-output-native
            this.error = new i0.EventEmitter();
            // tslint:disable-next-line:no-output-native
            this.change = new i0.EventEmitter();
            this.virtualScroll = false;
            this.virtualItemSize = 54;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            this.virtualForTrackBy = ( /**
             * @param {?} index
             * @return {?}
             */function (/**
             * @param {?} index
             * @return {?}
             */ index) { return index; });
            this.setCog(( /** @type {?} */(configSrv.merge('st', ST_DEFULAT_CONFIG))));
            this.delonI18n.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(( /**
             * @return {?}
             */function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.updateTotalTpl();
                    _this.cd();
                }
            }));
            i18nSrv.change
                .pipe(operators.takeUntil(this.unsubscribe$), operators.filter(( /**
         * @return {?}
         */function () { return _this._columns.length > 0; })))
                .subscribe(( /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */function () { return _this.refreshColumns(); }));
        }
        Object.defineProperty(STComponent.prototype, "req", {
            /**
             * @return {?}
             */
            get: function () {
                return this._req;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._req = util.deepMergeKey({}, true, this.cog.req, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "res", {
            /**
             * 返回体配置
             * @return {?}
             */
            get: function () {
                return this._res;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var item = (this._res = util.deepMergeKey({}, true, this.cog.res, value));
                /** @type {?} */
                var reName = ( /** @type {?} */(item.reName));
                if (!Array.isArray(reName.list))
                    reName.list = ( /** @type {?} */(reName.list)).split('.');
                if (!Array.isArray(reName.total))
                    reName.total = ( /** @type {?} */(reName.total)).split('.');
                this._res = item;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "page", {
            /**
             * @return {?}
             */
            get: function () {
                return this._page;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._page = Object.assign(Object.assign({}, this.cog.page), value);
                this.updateTotalTpl();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "multiSort", {
            /**
             * @return {?}
             */
            get: function () {
                return this._multiSort;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if ((typeof value === 'boolean' && !util.toBoolean(value)) || (typeof value === 'object' && Object.keys(value).length === 0)) {
                    this._multiSort = undefined;
                    return;
                }
                this._multiSort = Object.assign({}, (typeof value === 'object' ? value : {}));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "widthMode", {
            /**
             * @return {?}
             */
            get: function () {
                return this._widthMode;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._widthMode = Object.assign(Object.assign({}, this.cog.widthMode), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "widthConfig", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._widthConfig = val;
                this.customWidthConfig = val && val.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "resizable", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._resizable = typeof val === 'object' ? val : { disabled: !util.toBoolean(val) };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "count", {
            /**
             * Get the number of the current page
             * @return {?}
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
             * @return {?}
             */
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "routerState", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                var _a = this, pi = _a.pi, ps = _a.ps, total = _a.total;
                return { pi: pi, ps: ps, total: total };
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} cog
         * @return {?}
         */
        STComponent.prototype.setCog = function (cog) {
            /** @type {?} */
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
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.cd = function () {
            ( /** @type {?} */(this)).cdr.detectChanges();
            return ( /** @type {?} */(this));
        };
        /**
         * @param {?} total
         * @param {?} range
         * @return {?}
         */
        STComponent.prototype.renderTotal = function (total, range) {
            return this.totalTpl
                ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
                : '';
        };
        /**
         * @private
         * @param {?} type
         * @param {?=} data
         * @return {?}
         */
        STComponent.prototype.changeEmit = function (type, data) {
            /** @type {?} */
            var res = {
                type: type,
                pi: this.pi,
                ps: this.ps,
                total: this.total,
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
             * @return {?}
             */
            get: function () {
                return this.loadData(( /** @type {?} */({ paginator: false }))).then(( /**
                 * @param {?} res
                 * @return {?}
                 */function (/**
                 * @param {?} res
                 * @return {?}
                 */ res) { return res.list; }));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype.updateTotalTpl = function () {
            var total = this.page.total;
            if (typeof total === 'string' && total.length) {
                this.totalTpl = total;
            }
            else if (util.toBoolean(total)) {
                this.totalTpl = this.locale.total;
            }
            else {
                this.totalTpl = '';
            }
        };
        /**
         * @private
         * @param {?} val
         * @return {?}
         */
        STComponent.prototype.setLoading = function (val) {
            if (this.loading == null) {
                this._loading = val;
                this.cdr.detectChanges();
            }
        };
        /**
         * @private
         * @param {?=} options
         * @return {?}
         */
        STComponent.prototype.loadData = function (options) {
            var _this = this;
            var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, singleSort = _a.singleSort, multiSort = _a.multiSort, rowClassName = _a.rowClassName;
            return new Promise(( /**
             * @param {?} resolvePromise
             * @param {?} rejectPromise
             * @return {?}
             */function (resolvePromise, rejectPromise) {
                if (_this.data$) {
                    _this.data$.unsubscribe();
                }
                _this.data$ = _this.dataSource
                    .process(Object.assign({ pi: pi,
                    ps: ps,
                    total: total,
                    data: data,
                    req: req,
                    res: res,
                    page: page, columns: _this._columns, singleSort: singleSort,
                    multiSort: multiSort,
                    rowClassName: rowClassName, paginator: true }, options))
                    .pipe(operators.takeUntil(_this.unsubscribe$))
                    .subscribe(( /**
             * @param {?} result
             * @return {?}
             */function (/**
             * @param {?} result
             * @return {?}
             */ result) { return resolvePromise(result); }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (/**
                 * @param {?} error
                 * @return {?}
                 */ error) {
                    console.warn('st.loadDate', error);
                    rejectPromise(error);
                }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype.loadPageData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setLoading(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.loadData()];
                        case 2:
                            result = _a.sent();
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
                            this._data = ( /** @type {?} */(result.list));
                            this._statistical = ( /** @type {?} */(result.statistical));
                            this.changeEmit('loaded', result.list);
                            // Should be re-render in next tike when using virtual scroll
                            // https://github.com/ng-alain/ng-alain/issues/1836
                            if (this.cdkVirtualScrollViewport) {
                                Promise.resolve().then(( /**
                                 * @return {?}
                                 */function () { return _this.cdkVirtualScrollViewport.checkViewportSize(); }));
                            }
                            return [2 /*return*/, this._refCheck()];
                        case 3:
                            error_1 = _a.sent();
                            this.setLoading(false);
                            if (!this.unsubscribe$.isStopped) {
                                this.cdr.detectChanges();
                                this.error.emit({ type: 'req', error: error_1 });
                            }
                            return [2 /*return*/, this];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 清空所有数据
         * @template THIS
         * @this {THIS}
         * @param {?=} cleanStatus
         * @return {THIS}
         */
        STComponent.prototype.clear = function (cleanStatus) {
            if (cleanStatus === void 0) { cleanStatus = true; }
            if (cleanStatus) {
                ( /** @type {?} */(this)).clearStatus();
            }
            ( /** @type {?} */(this))._data = [];
            return ( /** @type {?} */(this)).cd();
        };
        /**
         * 清空所有状态
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearStatus = function () {
            return ( /** @type {?} */(this)).clearCheck().clearRadio().clearFilter().clearSort();
        };
        /**
         * 根据页码重新加载数据
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} pi 指定当前页码，默认：`1`
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options 选项
         * @return {THIS}
         */
        STComponent.prototype.load = function (pi, extraParams, options) {
            if (pi === void 0) { pi = 1; }
            if (pi !== -1)
                ( /** @type {?} */(this)).pi = pi;
            if (typeof extraParams !== 'undefined') {
                ( /** @type {?} */(this)).req.params = options && options.merge ? Object.assign(Object.assign({}, ( /** @type {?} */(this)).req.params), extraParams) : extraParams;
            }
            ( /** @type {?} */(this))._change('pi', options);
            return ( /** @type {?} */(this));
        };
        /**
         * 重新刷新当前页
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        STComponent.prototype.reload = function (extraParams, options) {
            return ( /** @type {?} */(this)).load(-1, extraParams, options);
        };
        /**
         * 重置且重新设置 `pi` 为 `1`，包含以下值：
         * - `check` 数据
         * - `radio` 数据
         * - `sort` 数据
         * - `fileter` 数据
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        STComponent.prototype.reset = function (extraParams, options) {
            ( /** @type {?} */(this)).clearStatus().load(1, extraParams, options);
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @param {?=} enforce
         * @return {?}
         */
        STComponent.prototype._toTop = function (enforce) {
            if (!(enforce == null ? this.page.toTop : enforce))
                return;
            /** @type {?} */
            var el = ( /** @type {?} */(this.el.nativeElement));
            if (this.scroll) {
                if (this.cdkVirtualScrollViewport) {
                    this.cdkVirtualScrollViewport.scrollTo({
                        top: 0,
                        left: 0,
                    });
                }
                else {
                    ( /** @type {?} */(el.querySelector('.ant-table-body'))).scrollTo(0, 0);
                }
                return;
            }
            el.scrollIntoView();
            // fix header height
            this.doc.documentElement.scrollTop -= ( /** @type {?} */(this.page.toTopOffset));
        };
        /**
         * @param {?} type
         * @param {?=} options
         * @return {?}
         */
        STComponent.prototype._change = function (type, options) {
            var _this = this;
            if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
                this.loadPageData().then(( /**
                 * @return {?}
                 */function () { return _this._toTop(options === null || options === void 0 ? void 0 : options.toTop); }));
            }
            this.changeEmit(type);
        };
        /**
         * @param {?} e
         * @param {?} item
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype._click = function (e, item, col) {
            e.preventDefault();
            e.stopPropagation();
            /** @type {?} */
            var res = ( /** @type {?} */(col.click))(item, this);
            if (typeof res === 'string') {
                this.router.navigateByUrl(res, { state: this.routerState });
            }
            return false;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STComponent.prototype.closeOtherExpand = function (item) {
            if (this.expandAccordion === false)
                return;
            this._data.filter(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return i !== item; })).forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i.expand = false); }));
        };
        /**
         * @param {?} e
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        STComponent.prototype._rowClick = function (e, item, index) {
            var _this = this;
            if ((( /** @type {?} */(e.target))).nodeName === 'INPUT')
                return;
            var _a = this, expand = _a.expand, expandRowByClick = _a.expandRowByClick, rowClickTime = _a.rowClickTime;
            if (!!expand && item.showExpand !== false && expandRowByClick) {
                item.expand = !item.expand;
                this.closeOtherExpand(item);
                this.changeEmit('expand', item);
                return;
            }
            ++this.rowClickCount;
            if (this.rowClickCount !== 1)
                return;
            setTimeout(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var data = { e: e, item: item, index: index };
                if (_this.rowClickCount === 1) {
                    _this.changeEmit('click', data);
                }
                else {
                    _this.changeEmit('dblClick', data);
                }
                _this.rowClickCount = 0;
            }), rowClickTime);
        };
        /**
         * @param {?} item
         * @param {?} expand
         * @return {?}
         */
        STComponent.prototype._expandChange = function (item, expand) {
            if (this.expandRowByClick) {
                return;
            }
            item.expand = expand;
            this.closeOtherExpand(item);
            this.changeEmit('expand', item);
        };
        /**
         * Remove a row in the table, like this:
         *
         * ```
         * this.st.removeRow(0)
         * this.st.removeRow(stDataItem)
         * ```
         * @template THIS
         * @this {THIS}
         * @param {?} data
         * @return {THIS}
         */
        STComponent.prototype.removeRow = function (data) {
            var _this = this;
            if (typeof data === 'number') {
                ( /** @type {?} */(this))._data.splice(data, 1);
            }
            else {
                if (!Array.isArray(data)) {
                    data = [data];
                }
                (( /** @type {?} */(data)))
                    .map(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return ( /** @type {?} */(_this))._data.indexOf(item); }))
                    .filter(( /**
             * @param {?} pos
             * @return {?}
             */function (/**
             * @param {?} pos
             * @return {?}
             */ pos) { return pos !== -1; }))
                    .forEach(( /**
             * @param {?} pos
             * @return {?}
             */function (/**
             * @param {?} pos
             * @return {?}
             */ pos) { return ( /** @type {?} */(_this))._data.splice(pos, 1); }));
            }
            // recalculate no
            ( /** @type {?} */(this))._columns
                .filter(( /**
         * @param {?} w
         * @return {?}
         */function (/**
         * @param {?} w
         * @return {?}
         */ w) { return w.type === 'no'; }))
                .forEach(( /**
         * @param {?} c
         * @return {?}
         */function (/**
         * @param {?} c
         * @return {?}
         */ c) { return ( /** @type {?} */(_this))._data.forEach(( /**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */function (i, idx) { return (i._values[( /** @type {?} */(c.__point))] = { _text: ( /** @type {?} */(_this)).dataSource.getNoIndex(i, c, idx), org: idx }); })); }));
            return ( /** @type {?} */(this)).cd();
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
         * ```
         * @template THIS
         * @this {THIS}
         * @param {?} index
         * @param {?} item
         * @param {?=} options
         * @return {THIS}
         */
        STComponent.prototype.setRow = function (index, item, options) {
            options = Object.assign({ refreshSchema: false, emitReload: false }, options);
            ( /** @type {?} */(this))._data[index] = util.deepMergeKey(( /** @type {?} */(this))._data[index], false, item);
            ( /** @type {?} */(this)).optimizeData();
            if (options.refreshSchema) {
                ( /** @type {?} */(this)).resetColumns({ emitReload: options.emitReload });
                return ( /** @type {?} */(this));
            }
            ( /** @type {?} */(this)).cdr.detectChanges();
            return ( /** @type {?} */(this));
        };
        // #endregion
        // #region sort
        /**
         * @param {?} col
         * @param {?} idx
         * @param {?} value
         * @return {?}
         */
        STComponent.prototype.sort = function (col, idx, value) {
            if (this.multiSort) {
                ( /** @type {?} */(col._sort)).default = value;
                ( /** @type {?} */(col._sort)).tick = this.dataSource.nextSortTick;
            }
            else {
                this._columns.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */function (item, index) { return (( /** @type {?} */(item._sort)).default = index === idx ? value : null); }));
            }
            this.cdr.detectChanges();
            this.loadPageData();
            /** @type {?} */
            var res = {
                value: value,
                map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
                column: col,
            };
            this.changeEmit('sort', res);
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearSort = function () {
            ( /** @type {?} */(this))._columns.forEach(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return (( /** @type {?} */(item._sort)).default = null); }));
            return ( /** @type {?} */(this));
        };
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype.handleFilter = function (col) {
            // 过滤表示一种数据的变化应重置页码为 `1`
            this.pi = 1;
            this.columnSource.updateDefault(( /** @type {?} */(col.filter)));
            this.loadPageData();
            this.changeEmit('filter', col);
        };
        /**
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype._filterConfirm = function (col) {
            this.handleFilter(col);
        };
        /**
         * @param {?} col
         * @param {?} item
         * @param {?} checked
         * @return {?}
         */
        STComponent.prototype._filterRadio = function (col, item, checked) {
            ( /** @type {?} */(( /** @type {?} */(col.filter)).menus)).forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i.checked = false); }));
            item.checked = checked;
        };
        /**
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype._filterClear = function (col) {
            this.columnSource.cleanFilter(col);
            this.handleFilter(col);
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearFilter = function () {
            var _this = this;
            ( /** @type {?} */(this))._columns.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.filter && w.filter.default === true; })).forEach(( /**
             * @param {?} col
             * @return {?}
             */function (/**
             * @param {?} col
             * @return {?}
             */ col) { return ( /** @type {?} */(_this)).columnSource.cleanFilter(col); }));
            return ( /** @type {?} */(this));
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        STComponent.prototype._filterClick = function ($event) {
            $event.stopPropagation();
        };
        // #endregion
        // #region checkbox
        /**
         * 清除所有 `checkbox`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearCheck = function () {
            return ( /** @type {?} */(this))._checkAll(false);
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype._refCheck = function () {
            /** @type {?} */
            var validData = ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return !w.disabled; }));
            /** @type {?} */
            var checkedList = validData.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.checked === true; }));
            ( /** @type {?} */(this))._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
            /** @type {?} */
            var allUnChecked = validData.every(( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) { return !value.checked; }));
            ( /** @type {?} */(this))._indeterminate = !( /** @type {?} */(this))._allChecked && !allUnChecked;
            ( /** @type {?} */(this))._allCheckedDisabled = ( /** @type {?} */(this))._data.length === ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.disabled; })).length;
            return ( /** @type {?} */(this)).cd();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?=} checked
         * @return {THIS}
         */
        STComponent.prototype._checkAll = function (checked) {
            checked = typeof checked === 'undefined' ? ( /** @type {?} */(this))._allChecked : checked;
            ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return !w.disabled; })).forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i.checked = checked); }));
            return ( /** @type {?} */(this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} i
         * @param {?} value
         * @return {THIS}
         */
        STComponent.prototype._checkSelection = function (i, value) {
            i.checked = value;
            return ( /** @type {?} */(this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} row
         * @return {THIS}
         */
        STComponent.prototype._rowSelection = function (row) {
            row.select(( /** @type {?} */(this))._data);
            return ( /** @type {?} */(this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype._checkNotify = function () {
            /** @type {?} */
            var res = ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return !w.disabled && w.checked === true; }));
            ( /** @type {?} */(this)).changeEmit('checkbox', res);
            return ( /** @type {?} */(this));
        };
        // #endregion
        // #region radio
        /**
         * 清除所有 `radio`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearRadio = function () {
            ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.checked; })).forEach(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return (item.checked = false); }));
            ( /** @type {?} */(this)).changeEmit('radio', null);
            return ( /** @type {?} */(this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} checked
         * @param {?} item
         * @return {THIS}
         */
        STComponent.prototype._refRadio = function (checked, item) {
            // if (item.disabled === true) return;
            ( /** @type {?} */(this))._data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return !w.disabled; })).forEach(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (i.checked = false); }));
            item.checked = checked;
            ( /** @type {?} */(this)).changeEmit('radio', item);
            return ( /** @type {?} */(this));
        };
        // #endregion
        // #region buttons
        /**
         * @param {?} record
         * @param {?} btn
         * @param {?=} e
         * @return {?}
         */
        STComponent.prototype._btnClick = function (record, btn, e) {
            var _a, _b;
            var _this = this;
            // should be stop propagation when expandRowByClick is true
            if (e && this.expandRowByClick === true) {
                e.stopPropagation();
            }
            if (btn.type === 'modal' || btn.type === 'static') {
                var modal = btn.modal;
                /** @type {?} */
                var obj = (_a = {}, _a[( /** @type {?} */(( /** @type {?} */(modal)).paramsName))] = record, _a);
                (( /** @type {?} */(this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))(( /** @type {?} */(modal)).component, Object.assign(Object.assign({}, obj), (( /** @type {?} */(modal)).params && ( /** @type {?} */(( /** @type {?} */(modal)).params))(record))), util.deepMergeKey({}, true, this.cog.modal, modal))
                    .pipe(operators.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return typeof w !== 'undefined'; })))
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) { return _this.btnCallback(record, btn, res); }));
                return;
            }
            else if (btn.type === 'drawer') {
                var drawer = btn.drawer;
                /** @type {?} */
                var obj = (_b = {}, _b[( /** @type {?} */(( /** @type {?} */(drawer)).paramsName))] = record, _b);
                this.drawerHelper
                    .create(( /** @type {?} */(( /** @type {?} */(drawer)).title)), ( /** @type {?} */(drawer)).component, Object.assign(Object.assign({}, obj), (( /** @type {?} */(drawer)).params && ( /** @type {?} */(( /** @type {?} */(drawer)).params))(record))), util.deepMergeKey({}, true, this.cog.drawer, drawer))
                    .pipe(operators.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return typeof w !== 'undefined'; })))
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) { return _this.btnCallback(record, btn, res); }));
                return;
            }
            else if (btn.type === 'link') {
                /** @type {?} */
                var clickRes = this.btnCallback(record, btn);
                if (typeof clickRes === 'string') {
                    this.router.navigateByUrl(clickRes, { state: this.routerState });
                }
                return;
            }
            this.btnCallback(record, btn);
        };
        /**
         * @private
         * @param {?} record
         * @param {?} btn
         * @param {?=} modal
         * @return {?}
         */
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
        /**
         * @param {?} record
         * @param {?} btn
         * @return {?}
         */
        STComponent.prototype._btnText = function (record, btn) {
            return typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
        };
        /**
         * @param {?} btns
         * @param {?} item
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype._validBtns = function (btns, item, col) {
            return btns.filter(( /**
             * @param {?} btn
             * @return {?}
             */function (/**
             * @param {?} btn
             * @return {?}
             */ btn) {
                /** @type {?} */
                var result = ( /** @type {?} */(btn.iif))(item, btn, col);
                /** @type {?} */
                var isRenderDisabled = btn.iifBehavior === 'disabled';
                btn._result = result;
                btn._disabled = !result && isRenderDisabled;
                return result || isRenderDisabled;
            }));
        };
        // #endregion
        // #region export
        /**
         * 导出当前页，确保已经注册 `XlsxModule`
         * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
         * @param {?=} opt 额外参数
         * @return {?}
         */
        STComponent.prototype.export = function (newData, opt) {
            var _this = this;
            (newData === true ? rxjs.from(this.filteredData) : rxjs.of(newData || this._data)).subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) { return _this.exportSrv.export(Object.assign(Object.assign({}, opt), { data: res, columens: _this._columns })); }));
        };
        // #endregion
        // #region resizable
        /**
         * @param {?} __0
         * @param {?} column
         * @return {?}
         */
        STComponent.prototype.colResize = function (_a, column) {
            var width = _a.width;
            column.width = width + "px";
            this.changeEmit('resize', column);
        };
        Object.defineProperty(STComponent.prototype, "cdkVirtualScrollViewport", {
            // #endregion
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.orgTable.cdkVirtualScrollViewport));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?=} options
         * @return {?}
         */
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
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.refreshColumns = function () {
            /** @type {?} */
            var res = ( /** @type {?} */(this)).columnSource.process(( /** @type {?} */(( /** @type {?} */(this)).columns)), { widthMode: ( /** @type {?} */(this)).widthMode, resizable: ( /** @type {?} */(this))._resizable });
            ( /** @type {?} */(this))._columns = res.columns;
            ( /** @type {?} */(this))._headers = res.headers;
            if (( /** @type {?} */(this)).customWidthConfig === false && res.headerWidths != null) {
                ( /** @type {?} */(this))._widthConfig = res.headerWidths;
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype.optimizeData = function () {
            this._data = this.dataSource.optimizeData({ columns: this._columns, result: this._data, rowClassName: this.rowClassName });
        };
        /**
         * @return {?}
         */
        STComponent.prototype.ngAfterViewInit = function () {
            this.columnSource.restoreAllRender(this._columns);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        STComponent.prototype.ngOnChanges = function (changes) {
            if (changes.columns) {
                this.refreshColumns().optimizeData();
            }
            /** @type {?} */
            var changeData = changes.data;
            if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
                this.loadPageData();
            }
            if (changes.loading) {
                this._loading = changes.loading.currentValue;
            }
        };
        /**
         * @return {?}
         */
        STComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return STComponent;
    }());
    STComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'st',
                    exportAs: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"_btnClick(i, btn, $event)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header\"\n  [nzFooter]=\"footer\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position\"\n  [nzItemRender]=\"page.itemRender\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n>\n  <thead class=\"st__head\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <th\n        *ngFor=\"let h of row; let index = index; let last = last\"\n        [colSpan]=\"h.colSpan\"\n        [rowSpan]=\"h.rowSpan\"\n        [nzWidth]=\"h.column.width\"\n        [nzLeft]=\"!!h.column._left\"\n        [nzRight]=\"!!h.column._right\"\n        [ngClass]=\"h.column.className\"\n        [attr.data-col]=\"h.column.indexKey\"\n        [nzShowSort]=\"h.column._sort.enabled\"\n        [nzSortOrder]=\"h.column._sort.default\"\n        (nzSortOrderChange)=\"sort(h.column, index, $event)\"\n        [nzCustomFilter]=\"h.column.filter\"\n        nz-resizable\n        [nzDisabled]=\"last || h.column.resizable.disabled\"\n        [nzMaxWidth]=\"h.column.resizable.maxWidth\"\n        [nzMinWidth]=\"h.column.resizable.minWidth\"\n        [nzBounds]=\"h.column.resizable.bounds\"\n        [nzPreview]=\"h.column.resizable.preview\"\n        (nzResizeEnd)=\"colResize($event, h.column)\"\n      >\n        <nz-resize-handle *ngIf=\"!last && !h.column.resizable.disabled\" nzDirection=\"right\"><i></i></nz-resize-handle>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"h.column.__renderTitle\" [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!h.column.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"h.column.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"h.column.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\"> </ng-template>\n              </ng-container>\n              <div *ngIf=\"h.column.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\"> </ng-template>\n                <div\n                  *ngIf=\"h.column.selections.length\"\n                  nz-dropdown\n                  nzPlacement=\"bottomLeft\"\n                  [nzDropdownMenu]=\"selectionMenu\"\n                  class=\"ant-table-selection-down st__checkall-selection\"\n                >\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of h.column.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: h.column.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div\n          nz-th-extra\n          *ngIf=\"h.column.filter\"\n          class=\"ant-table-filter-trigger-container st__filter\"\n          [class.ant-table-filter-trigger-container-open]=\"h.column.filter.visible\"\n        >\n          <span\n            class=\"ant-table-filter-trigger\"\n            [class.active]=\"h.column.filter.visible || h.column.filter.default\"\n            nz-dropdown\n            [nzDropdownMenu]=\"filterMenu\"\n            nzTrigger=\"click\"\n            [nzClickHide]=\"false\"\n            [(nzVisible)]=\"h.column.filter.visible\"\n            nzOverlayClassName=\"st__filter-wrap\"\n            (click)=\"_filterClick($event)\"\n          >\n            <i nz-icon [nzType]=\"h.column.filter.icon.type\" [nzTheme]=\"h.column.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"h.column.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"h.column.filter.menus[0].text\" [(ngModel)]=\"h.column.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(h.column, filter, $event)\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(h.column)\">{{ h.column.filter.confirmText || locale.filterConfirm }}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterClear(h.column)\">{{ h.column.filter.clearText || locale.filterReset }}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td *ngFor=\"let c of _columns; let cIdx = index\" [nzLeft]=\"!!c._left\" [nzRight]=\"!!c._right\" [ngClass]=\"c._className\" [attr.colspan]=\"c.colSpan\">\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last = last\">\n                <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"> </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"> </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template\n                [ngIf]=\"!c.__renderExpanded\"\n                [ngTemplateOutlet]=\"c.__renderExpanded\"\n                [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n              ></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                    providers: [STDataSource, STRowSource, STColumnSource, STExport, theme.CNCurrencyPipe, theme.DatePipe, theme.YNPipe, common.DecimalPipe],
                    host: {
                        '[class.st]': "true",
                        '[class.st__p-left]': "page.placement === 'left'",
                        '[class.st__p-center]': "page.placement === 'center'",
                        '[class.st__width-strict]': "widthMode.type === 'strict'",
                        '[class.ant-table-rep]': "responsive",
                        '[class.ant-table-rep__hide-header-footer]': "responsiveHideHeaderFooter",
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
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
        { type: util.AlainConfigService }
    ]; };
    STComponent.propDecorators = {
        orgTable: [{ type: i0.ViewChild, args: ['table', { static: false },] }],
        req: [{ type: i0.Input }],
        res: [{ type: i0.Input }],
        page: [{ type: i0.Input }],
        data: [{ type: i0.Input }],
        columns: [{ type: i0.Input }],
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
        virtualForTrackBy: [{ type: i0.Input }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "ps", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "pi", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "total", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "loadingDelay", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "bordered", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "expandRowByClick", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "expandAccordion", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "rowClickTime", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], STComponent.prototype, "responsive", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualScroll", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualItemSize", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualMaxBufferPx", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "virtualMinBufferPx", void 0);
    if (false) {
        /** @type {?} */
        STComponent.ngAcceptInputType_ps;
        /** @type {?} */
        STComponent.ngAcceptInputType_pi;
        /** @type {?} */
        STComponent.ngAcceptInputType_total;
        /** @type {?} */
        STComponent.ngAcceptInputType_loadingDelay;
        /** @type {?} */
        STComponent.ngAcceptInputType_bordered;
        /** @type {?} */
        STComponent.ngAcceptInputType_expandRowByClick;
        /** @type {?} */
        STComponent.ngAcceptInputType_expandAccordion;
        /** @type {?} */
        STComponent.ngAcceptInputType_rowClickTime;
        /** @type {?} */
        STComponent.ngAcceptInputType_responsive;
        /** @type {?} */
        STComponent.ngAcceptInputType_responsiveHideHeaderFooter;
        /** @type {?} */
        STComponent.ngAcceptInputType_virtualScroll;
        /** @type {?} */
        STComponent.ngAcceptInputType_virtualItemSize;
        /** @type {?} */
        STComponent.ngAcceptInputType_virtualMaxBufferPx;
        /** @type {?} */
        STComponent.ngAcceptInputType_virtualMinBufferPx;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.data$;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.totalTpl;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.rowClickCount;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._req;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._res;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._page;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._widthMode;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.customWidthConfig;
        /** @type {?} */
        STComponent.prototype._widthConfig;
        /** @type {?} */
        STComponent.prototype.locale;
        /** @type {?} */
        STComponent.prototype._loading;
        /** @type {?} */
        STComponent.prototype._data;
        /** @type {?} */
        STComponent.prototype._statistical;
        /** @type {?} */
        STComponent.prototype._isPagination;
        /** @type {?} */
        STComponent.prototype._allChecked;
        /** @type {?} */
        STComponent.prototype._allCheckedDisabled;
        /** @type {?} */
        STComponent.prototype._indeterminate;
        /** @type {?} */
        STComponent.prototype._headers;
        /** @type {?} */
        STComponent.prototype._columns;
        /** @type {?} */
        STComponent.prototype.orgTable;
        /** @type {?} */
        STComponent.prototype.data;
        /** @type {?} */
        STComponent.prototype.columns;
        /** @type {?} */
        STComponent.prototype.ps;
        /** @type {?} */
        STComponent.prototype.pi;
        /** @type {?} */
        STComponent.prototype.total;
        /** @type {?} */
        STComponent.prototype.loading;
        /** @type {?} */
        STComponent.prototype.loadingDelay;
        /** @type {?} */
        STComponent.prototype.loadingIndicator;
        /** @type {?} */
        STComponent.prototype.bordered;
        /** @type {?} */
        STComponent.prototype.size;
        /** @type {?} */
        STComponent.prototype.scroll;
        /** @type {?} */
        STComponent.prototype.singleSort;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._multiSort;
        /** @type {?} */
        STComponent.prototype.rowClassName;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype._resizable;
        /** @type {?} */
        STComponent.prototype.header;
        /** @type {?} */
        STComponent.prototype.footer;
        /** @type {?} */
        STComponent.prototype.bodyHeader;
        /** @type {?} */
        STComponent.prototype.body;
        /** @type {?} */
        STComponent.prototype.expandRowByClick;
        /** @type {?} */
        STComponent.prototype.expandAccordion;
        /** @type {?} */
        STComponent.prototype.expand;
        /** @type {?} */
        STComponent.prototype.noResult;
        /** @type {?} */
        STComponent.prototype.rowClickTime;
        /** @type {?} */
        STComponent.prototype.responsive;
        /** @type {?} */
        STComponent.prototype.responsiveHideHeaderFooter;
        /** @type {?} */
        STComponent.prototype.error;
        /** @type {?} */
        STComponent.prototype.change;
        /** @type {?} */
        STComponent.prototype.virtualScroll;
        /** @type {?} */
        STComponent.prototype.virtualItemSize;
        /** @type {?} */
        STComponent.prototype.virtualMaxBufferPx;
        /** @type {?} */
        STComponent.prototype.virtualMinBufferPx;
        /** @type {?} */
        STComponent.prototype.virtualForTrackBy;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.exportSrv;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.modalHelper;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.drawerHelper;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.columnSource;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.dataSource;
        /**
         * @type {?}
         * @private
         */
        STComponent.prototype.delonI18n;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: st-widget-host.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STWidgetHostDirective = /** @class */ (function () {
        /**
         * @param {?} stWidgetRegistry
         * @param {?} viewContainerRef
         * @param {?} componentFactoryResolver
         */
        function STWidgetHostDirective(stWidgetRegistry, viewContainerRef, componentFactoryResolver) {
            this.stWidgetRegistry = stWidgetRegistry;
            this.viewContainerRef = viewContainerRef;
            this.componentFactoryResolver = componentFactoryResolver;
        }
        /**
         * @return {?}
         */
        STWidgetHostDirective.prototype.ngOnInit = function () {
            /** @type {?} */
            var widget = ( /** @type {?} */(this.column.widget));
            /** @type {?} */
            var componentType = this.stWidgetRegistry.get(widget.type);
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(( /** @type {?} */(componentType)));
            this.viewContainerRef.clear();
            /** @type {?} */
            var componentRef = this.viewContainerRef.createComponent(componentFactory);
            var _a = this, record = _a.record, column = _a.column;
            /** @type {?} */
            var data = widget.params ? widget.params({ record: record, column: column }) : { record: record };
            Object.keys(data).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) {
                (( /** @type {?} */(componentRef.instance)))[key] = data[key];
            }));
        };
        return STWidgetHostDirective;
    }());
    STWidgetHostDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[st-widget-host]' },] }
    ];
    /** @nocollapse */
    STWidgetHostDirective.ctorParameters = function () { return [
        { type: STWidgetRegistry },
        { type: i0.ViewContainerRef },
        { type: i0.ComponentFactoryResolver }
    ]; };
    STWidgetHostDirective.propDecorators = {
        record: [{ type: i0.Input }],
        column: [{ type: i0.Input }]
    };
    if (false) {
        /** @type {?} */
        STWidgetHostDirective.prototype.record;
        /** @type {?} */
        STWidgetHostDirective.prototype.column;
        /**
         * @type {?}
         * @private
         */
        STWidgetHostDirective.prototype.stWidgetRegistry;
        /**
         * @type {?}
         * @private
         */
        STWidgetHostDirective.prototype.viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        STWidgetHostDirective.prototype.componentFactoryResolver;
    }

    /** @type {?} */
    var COMPONENTS = [STComponent];
    /** @type {?} */
    var DIRECTIVES = [STRowDirective, STWidgetHostDirective];
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
                        util.DelonUtilModule,
                        acl.DelonACLModule,
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
                        resizable.NzResizableModule,
                    ],
                    declarations: __spread(COMPONENTS, DIRECTIVES),
                    exports: __spread(COMPONENTS, DIRECTIVES),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.STColumnSource = STColumnSource;
    exports.STComponent = STComponent;
    exports.STDataSource = STDataSource;
    exports.STExport = STExport;
    exports.STModule = STModule;
    exports.STRowDirective = STRowDirective;
    exports.STWidgetRegistry = STWidgetRegistry;
    exports.ST_DEFULAT_CONFIG = ST_DEFULAT_CONFIG;
    exports.ɵa = STRowSource;
    exports.ɵb = STWidgetHostDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.umd.js.map
