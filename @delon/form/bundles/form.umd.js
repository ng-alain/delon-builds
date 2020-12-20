/**
 * @license ng-alain(cipchk@qq.com) v10.1.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@angular/platform-browser'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/button'), require('ng-zorro-antd/card'), require('ng-zorro-antd/cascader'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/mention'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/rate'), require('ng-zorro-antd/select'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/transfer'), require('ng-zorro-antd/tree-select'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/core/animation'), require('date-fns/format')) :
    typeof define === 'function' && define.amd ? define('@delon/form', ['exports', '@angular/cdk/platform', '@angular/core', '@angular/platform-browser', '@delon/acl', '@delon/theme', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/button', 'ng-zorro-antd/card', 'ng-zorro-antd/cascader', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/mention', 'ng-zorro-antd/modal', 'ng-zorro-antd/radio', 'ng-zorro-antd/rate', 'ng-zorro-antd/select', 'ng-zorro-antd/slider', 'ng-zorro-antd/switch', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/transfer', 'ng-zorro-antd/tree-select', 'ng-zorro-antd/upload', 'ng-zorro-antd/core/animation', 'date-fns/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.form = {}), global.ng.cdk.platform, global.ng.core, global.ng.platformBrowser, global.delon.acl, global.delon.theme, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms, global['ng-zorro-antd/auto-complete'], global['ng-zorro-antd/button'], global['ng-zorro-antd/card'], global['ng-zorro-antd/cascader'], global['ng-zorro-antd/checkbox'], global['ng-zorro-antd/date-picker'], global['ng-zorro-antd/form'], global['ng-zorro-antd/grid'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/input'], global['ng-zorro-antd/input-number'], global['ng-zorro-antd/mention'], global['ng-zorro-antd/modal'], global['ng-zorro-antd/radio'], global['ng-zorro-antd/rate'], global['ng-zorro-antd/select'], global['ng-zorro-antd/slider'], global['ng-zorro-antd/switch'], global['ng-zorro-antd/tag'], global['ng-zorro-antd/time-picker'], global['ng-zorro-antd/tooltip'], global['ng-zorro-antd/transfer'], global['ng-zorro-antd/tree-select'], global['ng-zorro-antd/upload'], global['ng-zorro-antd/core/animation'], global.format));
}(this, (function (exports, platform, core, platformBrowser, acl, theme, util, rxjs, operators, common, forms, autoComplete, button, card, cascader, checkbox, datePicker, form, grid, icon, input, inputNumber, mention, modal, radio, rate, select, slider, _switch, tag, timePicker, tooltip, transfer, treeSelect, upload, animation, format) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

    /**
     * @fileoverview added by tsickle
     * Generated from: src/config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SF_DEFAULT_CONFIG = {
        formatMap: {
            'date-time': {
                widget: 'date',
                showTime: true,
                format: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
            },
            date: { widget: 'date', format: 'yyyy-MM-dd' },
            'full-date': { widget: 'date', format: 'yyyy-MM-dd' },
            time: { widget: 'time', format: 'HH:mm:ss.SSSxxx' },
            'full-time': { widget: 'time' },
            week: { widget: 'date', mode: 'week', format: 'yyyy-ww' },
            month: { widget: 'date', mode: 'month', format: 'yyyy-MM' },
            uri: { widget: 'upload' },
            email: { widget: 'autocomplete', type: 'email' },
            color: { widget: 'string', type: 'color' },
            '': { widget: 'string' },
        },
        ingoreKeywords: ['type', 'enum'],
        liveValidate: true,
        autocomplete: null,
        firstVisual: false,
        onlyVisual: false,
        errors: {},
        ui: ( /** @type {?} */({})),
        button: ( /** @type {?} */({ submit_type: 'primary', reset_type: 'default' })),
        uiDateStringFormat: 'yyyy-MM-dd HH:mm:ss',
        uiDateNumberFormat: 'T',
        uiTimeStringFormat: 'HH:mm:ss',
        uiTimeNumberFormat: 'T',
        uiEmailSuffixes: ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'],
    };
    /**
     * @param {?} srv
     * @return {?}
     */
    function mergeConfig(srv) {
        return ( /** @type {?} */(srv.merge('sf', SF_DEFAULT_CONFIG)));
    }

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
     * Generated from: src/const.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SF_SEQ = '/';

    /**
     * @param {?} o
     * @return {?}
     */
    function isBlank(o) {
        return o == null;
    }
    /**
     * @param {?} value
     * @param {?} defaultValue
     * @return {?}
     */
    function toBool(value, defaultValue) {
        value = util.toBoolean(value, true);
        return value == null ? defaultValue : value;
    }
    /**
     * @param {?} ui
     * @param {...?} args
     * @return {?}
     */
    function di(ui) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (ui.debug) {
            // tslint:disable-next-line:no-console
            console.warn.apply(console, __spread(args));
        }
    }
    /**
     * 根据 `$ref` 查找 `definitions`
     * @param {?} $ref
     * @param {?} definitions
     * @return {?}
     */
    function findSchemaDefinition($ref, definitions) {
        var e_1, _a;
        /** @type {?} */
        var match = /^#\/definitions\/(.*)$/.exec($ref);
        if (match && match[1]) {
            // parser JSON Pointer
            /** @type {?} */
            var parts = match[1].split(SF_SEQ);
            /** @type {?} */
            var current = definitions;
            try {
                for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                    var part = parts_1_1.value;
                    part = part.replace(/~1/g, SF_SEQ).replace(/~0/g, '~');
                    if (current.hasOwnProperty(part)) {
                        current = current[part];
                    }
                    else {
                        throw new Error("Could not find a definition for " + $ref + ".");
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return current;
        }
        throw new Error("Could not find a definition for " + $ref + ".");
    }
    /**
     * 取回Schema，并处理 `$ref` 的关系
     * @param {?} schema
     * @param {?=} definitions
     * @return {?}
     */
    function retrieveSchema(schema, definitions) {
        if (definitions === void 0) { definitions = {}; }
        if (schema.hasOwnProperty('$ref')) {
            /** @type {?} */
            var $refSchema = findSchemaDefinition(( /** @type {?} */(schema.$ref)), definitions);
            // remove $ref property
            var $ref = schema.$ref, localSchema = __rest(schema, ["$ref"]);
            return retrieveSchema(Object.assign(Object.assign({}, $refSchema), localSchema), definitions);
        }
        return schema;
    }
    /**
     * @param {?} _schema
     * @param {?} _ui
     * @return {?}
     */
    function resolveIfSchema(_schema, _ui) {
        /** @type {?} */
        var fn = ( /**
         * @param {?} schema
         * @param {?} ui
         * @return {?}
         */function (schema, ui) {
            resolveIf(schema, ui);
            Object.keys(( /** @type {?} */(schema.properties))).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) {
                /** @type {?} */
                var property = ( /** @type {?} */(schema.properties))[key];
                /** @type {?} */
                var uiKey = "$" + key;
                if (property.items) {
                    fn(property.items, ui[uiKey].$items);
                }
                if (property.properties) {
                    fn(property, ui[uiKey]);
                }
            }));
        });
        fn(_schema, _ui);
    }
    /**
     * @param {?} schema
     * @param {?} ui
     * @return {?}
     */
    function resolveIf(schema, ui) {
        if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then')))
            return null;
        if (!( /** @type {?} */(schema.if)).properties)
            throw new Error("if: does not contain 'properties'");
        /** @type {?} */
        var allKeys = Object.keys(( /** @type {?} */(schema.properties)));
        /** @type {?} */
        var ifKeys = Object.keys(( /** @type {?} */(( /** @type {?} */(schema.if)).properties)));
        detectKey(allKeys, ifKeys);
        detectKey(allKeys, ( /** @type {?} */(( /** @type {?} */(schema.then)).required)));
        schema.required = ( /** @type {?} */(schema.required)).concat(( /** @type {?} */(( /** @type {?} */(schema.then)).required)));
        /** @type {?} */
        var hasElse = schema.hasOwnProperty('else');
        if (hasElse) {
            detectKey(allKeys, ( /** @type {?} */(( /** @type {?} */(schema.else)).required)));
            schema.required = schema.required.concat(( /** @type {?} */(( /** @type {?} */(schema.else)).required)));
        }
        /** @type {?} */
        var visibleIf = {};
        /** @type {?} */
        var visibleElse = {};
        ifKeys.forEach(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) {
            /** @type {?} */
            var cond = ( /** @type {?} */(( /** @type {?} */(schema.if)).properties))[key].enum;
            visibleIf[key] = cond;
            if (hasElse)
                visibleElse[key] = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return !( /** @type {?} */(cond)).includes(value); });
        }));
        ( /** @type {?} */(( /** @type {?} */(schema.then)).required)).forEach(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) { return (ui["$" + key].visibleIf = visibleIf); }));
        if (hasElse) {
            ( /** @type {?} */(( /** @type {?} */(schema.else)).required)).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return (ui["$" + key].visibleIf = visibleElse); }));
        }
        return schema;
    }
    /**
     * @param {?} keys
     * @param {?} detectKeys
     * @return {?}
     */
    function detectKey(keys, detectKeys) {
        detectKeys.forEach(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) {
            if (!keys.includes(key)) {
                throw new Error("if: properties does not contain '" + key + "'");
            }
        }));
    }
    /**
     * @param {?} properties
     * @param {?} order
     * @return {?}
     */
    function orderProperties(properties, order) {
        if (!Array.isArray(order))
            return properties;
        /** @type {?} */
        var arrayToHash = ( /**
         * @param {?} arr
         * @return {?}
         */function (arr) { return arr.reduce(( /**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */function (prev, curr) {
            prev[curr] = true;
            return prev;
        }), {}); });
        /** @type {?} */
        var errorPropList = ( /**
         * @param {?} arr
         * @return {?}
         */function (arr) { return "property [" + arr.join("', '") + "]"; });
        /** @type {?} */
        var propertyHash = arrayToHash(properties);
        /** @type {?} */
        var orderHash = arrayToHash(order);
        /** @type {?} */
        var extraneous = order.filter(( /**
         * @param {?} prop
         * @return {?}
         */function (/**
         * @param {?} prop
         * @return {?}
         */ prop) { return prop !== '*' && !propertyHash[prop]; }));
        if (extraneous.length) {
            throw new Error("ui schema order list contains extraneous " + errorPropList(extraneous));
        }
        /** @type {?} */
        var rest = properties.filter(( /**
         * @param {?} prop
         * @return {?}
         */function (/**
         * @param {?} prop
         * @return {?}
         */ prop) { return !orderHash[prop]; }));
        /** @type {?} */
        var restIndex = order.indexOf('*');
        if (restIndex === -1) {
            if (rest.length) {
                throw new Error("ui schema order list does not contain " + errorPropList(rest));
            }
            return order;
        }
        if (restIndex !== order.lastIndexOf('*')) {
            throw new Error('ui schema order list contains more than one wildcard item');
        }
        /** @type {?} */
        var complete = __spread(order);
        complete.splice.apply(complete, __spread([restIndex, 1], rest));
        return complete;
    }
    /**
     * @param {?} list
     * @param {?} formData
     * @param {?} readOnly
     * @return {?}
     */
    function getEnum(list, formData, readOnly) {
        if (isBlank(list) || !Array.isArray(list) || list.length === 0)
            return [];
        if (typeof list[0] !== 'object') {
            list = list.map(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                return ( /** @type {?} */({ label: item, value: item }));
            }));
        }
        if (formData) {
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                if (~formData.indexOf(item.value))
                    item.checked = true;
            }));
        }
        // fix disabled status
        if (readOnly) {
            list.forEach(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return (item.disabled = true); }));
        }
        return list;
    }
    /**
     * @param {?} list
     * @param {?} formData
     * @param {?} readOnly
     * @return {?}
     */
    function getCopyEnum(list, formData, readOnly) {
        return getEnum(util.deepCopy(list || []), formData, readOnly);
    }
    /**
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?=} asyncArgs
     * @return {?}
     */
    function getData(schema, ui, formData, asyncArgs) {
        if (typeof ui.asyncData === 'function') {
            return ui.asyncData(asyncArgs).pipe(operators.map(( /**
             * @param {?} list
             * @return {?}
             */function (list) { return getEnum(list, formData, ( /** @type {?} */(schema.readOnly))); })));
        }
        return rxjs.of(getCopyEnum(( /** @type {?} */(schema.enum)), formData, ( /** @type {?} */(schema.readOnly))));
    }
    /**
     * Whether to using date-fns to format a date
     * @param {?} srv
     * @return {?}
     */
    function isDateFns(srv) {
        if (!srv)
            return false;
        /** @type {?} */
        var data = srv.getDateLocale();
        // Compatible date-fns v1.x & v2.x
        return data != null && !!data.formatDistance; // (!!data.distanceInWords || !!data.formatDistance);
    }

    /**
     * @abstract
     */
    var FormProperty = /** @class */ (function () {
        /**
         * @param {?} schemaValidatorFactory
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?} parent
         * @param {?} path
         * @param {?} _options
         */
        function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
            this._options = _options;
            this._errors = null;
            this._valueChanges = new rxjs.BehaviorSubject({ path: null, pathValue: null, value: null });
            this._errorsChanges = new rxjs.BehaviorSubject(null);
            this._visible = true;
            this._visibilityChanges = new rxjs.BehaviorSubject(true);
            this._objErrors = {};
            this._value = null;
            this.schema = schema;
            this.ui = ui;
            this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
                ingoreKeywords: ( /** @type {?} */(this.ui.ingoreKeywords)),
                debug: ( /** @type {?} */(( /** @type {?} */((( /** @type {?} */(ui))))).debug)),
            });
            this.formData = formData || schema.default;
            this._parent = parent;
            if (parent) {
                this._root = parent.root;
            }
            else {
                this._root = ( /** @type {?} */(this));
            }
            this.path = path;
        }
        Object.defineProperty(FormProperty.prototype, "valueChanges", {
            /**
             * @return {?}
             */
            get: function () {
                return this._valueChanges;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errorsChanges", {
            /**
             * @return {?}
             */
            get: function () {
                return this._errorsChanges;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "type", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.schema.type));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "parent", {
            /**
             * @return {?}
             */
            get: function () {
                return this._parent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "root", {
            /**
             * @return {?}
             */
            get: function () {
                return this._root;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () {
                return this._value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errors", {
            /**
             * @return {?}
             */
            get: function () {
                return this._errors;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "visible", {
            /**
             * @return {?}
             */
            get: function () {
                return this._visible;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "valid", {
            /**
             * @return {?}
             */
            get: function () {
                return this._errors === null || this._errors.length === 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "options", {
            /**
             * @return {?}
             */
            get: function () {
                return this._options;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 更新值且校验数据
         * @param {?=} options
         * @return {?}
         */
        FormProperty.prototype.updateValueAndValidity = function (options) {
            options = Object.assign({ onlySelf: false, emitValidator: true, emitValueEvent: true, updatePath: '', updateValue: null }, options);
            this._updateValue();
            if (options.emitValueEvent) {
                options.updatePath = options.updatePath || this.path;
                options.updateValue = options.updateValue == null ? this.value : options.updateValue;
                this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });
            }
            // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
            if (options.emitValidator && this.ui.liveValidate === true) {
                this._runValidation();
            }
            if (this.parent && !options.onlySelf) {
                this.parent.updateValueAndValidity(Object.assign(Object.assign({}, options), { emitValidator: false }));
            }
        };
        /**
         * 根据路径搜索表单属性
         * @param {?} path
         * @return {?}
         */
        FormProperty.prototype.searchProperty = function (path) {
            /** @type {?} */
            var prop = this;
            /** @type {?} */
            var base = null;
            /** @type {?} */
            var result = null;
            if (path[0] === SF_SEQ) {
                base = this.findRoot();
                result = base.getProperty(path.substr(1));
            }
            else {
                while (result === null && prop.parent !== null) {
                    prop = base = prop.parent;
                    result = base.getProperty(path);
                }
            }
            return ( /** @type {?} */(result));
        };
        /**
         * 查找根表单属性
         * @return {?}
         */
        FormProperty.prototype.findRoot = function () {
            /** @type {?} */
            var property = this;
            while (property.parent !== null) {
                property = property.parent;
            }
            return ( /** @type {?} */(property));
        };
        // #region process errors
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        FormProperty.prototype.isEmptyData = function (value) {
            if (isBlank(value))
                return true;
            switch (this.type) {
                case 'string':
                    return ('' + value).length === 0;
            }
            return false;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormProperty.prototype._runValidation = function () {
            var _this = this;
            /** @type {?} */
            var errors;
            // The definition of some rules:
            // 1. Should not ajv validator when is empty data and required fields
            // 2. Should not ajv validator when is empty data
            /** @type {?} */
            var isEmpty = this.isEmptyData(this._value);
            if (isEmpty && this.ui._required) {
                errors = [{ keyword: 'required' }];
            }
            else if (isEmpty) {
                errors = [];
            }
            else {
                errors = this.schemaValidator(this._value) || [];
            }
            /** @type {?} */
            var customValidator = (( /** @type {?} */(this.ui))).validator;
            if (typeof customValidator === 'function') {
                /** @type {?} */
                var customErrors = customValidator(this.value, this, this.findRoot());
                if (customErrors instanceof rxjs.Observable) {
                    customErrors.subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (/**
                     * @param {?} res
                     * @return {?}
                     */ res) {
                        _this.setCustomErrors(errors, res);
                        _this.widget.detectChanges();
                    }));
                    return;
                }
                this.setCustomErrors(errors, customErrors);
                return;
            }
            this._errors = errors;
            this.setErrors(this._errors);
        };
        /**
         * @private
         * @param {?} errors
         * @param {?} list
         * @return {?}
         */
        FormProperty.prototype.setCustomErrors = function (errors, list) {
            // fix error format
            /** @type {?} */
            var hasCustomError = list != null && list.length > 0;
            if (hasCustomError) {
                list.forEach(( /**
                 * @param {?} err
                 * @return {?}
                 */function (/**
                 * @param {?} err
                 * @return {?}
                 */ err) {
                    if (!err.message) {
                        throw new Error("The custom validator must contain a 'message' attribute to viewed error text");
                    }
                    err._custom = true;
                }));
            }
            this._errors = this.mergeErrors(errors, list);
            this.setErrors(this._errors);
        };
        /**
         * @private
         * @param {?} errors
         * @param {?} newErrors
         * @return {?}
         */
        FormProperty.prototype.mergeErrors = function (errors, newErrors) {
            if (newErrors) {
                if (Array.isArray(newErrors)) {
                    errors = errors.concat.apply(errors, __spread(newErrors));
                }
                else {
                    errors.push(newErrors);
                }
            }
            return errors;
        };
        /**
         * @protected
         * @param {?} errors
         * @param {?=} emitFormat
         * @return {?}
         */
        FormProperty.prototype.setErrors = function (errors, emitFormat) {
            var _this = this;
            if (emitFormat === void 0) { emitFormat = true; }
            if (emitFormat && errors && !this.ui.onlyVisual) {
                /** @type {?} */
                var l_1 = (this.widget && this.widget.l.error) || {};
                errors = errors.map(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    /** @type {?} */
                    var message = err._custom === true && err.message
                        ? err.message
                        : (_this.ui.errors || {})[err.keyword] || ( /** @type {?} */(_this._options.errors))[err.keyword] || l_1[err.keyword] || "";
                    if (message && typeof message === 'function') {
                        message = ( /** @type {?} */(message(err)));
                    }
                    if (message) {
                        if (~(( /** @type {?} */(message))).indexOf('{')) {
                            message = (( /** @type {?} */(message))).replace(/{([\.a-z0-9]+)}/g, ( /**
                             * @param {?} _v
                             * @param {?} key
                             * @return {?}
                             */function (_v, key) { return ( /** @type {?} */(err.params))[key] || ''; }));
                        }
                        err.message = ( /** @type {?} */(message));
                    }
                    return err;
                }));
            }
            this._errors = errors;
            this._errorsChanges.next(errors);
            // Should send errors to parent field
            if (this._parent) {
                this._parent.setParentAndPlatErrors(errors, this.path);
            }
        };
        /**
         * @param {?} errors
         * @param {?} path
         * @return {?}
         */
        FormProperty.prototype.setParentAndPlatErrors = function (errors, path) {
            var _this = this;
            this._objErrors[path] = errors;
            /** @type {?} */
            var platErrors = [];
            Object.keys(this._objErrors).forEach(( /**
             * @param {?} p
             * @return {?}
             */function (/**
             * @param {?} p
             * @return {?}
             */ p) {
                /** @type {?} */
                var property = _this.searchProperty(p);
                if (property && !property.visible)
                    return;
                platErrors.push.apply(platErrors, __spread(_this._objErrors[p]));
            }));
            this.setErrors(platErrors, false);
        };
        // #endregion
        // #region condition
        /**
         * Set the hide or display of widget
         * 设置小部件的隐藏或显示
         * @param {?} visible
         * @return {?}
         */
        FormProperty.prototype.setVisible = function (visible) {
            var _a, _b;
            this._visible = visible;
            this._visibilityChanges.next(visible);
            // 部分数据源来自 reset
            if (((_b = (_a = this.root.widget) === null || _a === void 0 ? void 0 : _a.sfComp) === null || _b === void 0 ? void 0 : _b._inited) === true) {
                this.resetValue(this.value, true);
            }
        };
        // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
        /**
         * @return {?}
         */
        FormProperty.prototype._bindVisibility = function () {
            var _this = this;
            /** @type {?} */
            var visibleIf = (( /** @type {?} */(this.ui))).visibleIf;
            if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
                this.setVisible(false);
            }
            else if (visibleIf !== undefined) {
                /** @type {?} */
                var propertiesBinding = [];
                var _loop_1 = function (dependencyPath) {
                    if (visibleIf.hasOwnProperty(dependencyPath)) {
                        /** @type {?} */
                        var property = this_1.searchProperty(dependencyPath);
                        if (property) {
                            /** @type {?} */
                            var valueCheck = property.valueChanges.pipe(operators.map(( /**
                             * @param {?} res
                             * @return {?}
                             */function (/**
                             * @param {?} res
                             * @return {?}
                             */ res) {
                                /** @type {?} */
                                var vi = visibleIf[dependencyPath];
                                if (typeof vi === 'function') {
                                    return vi(res.value);
                                }
                                if (vi.indexOf('$ANY$') !== -1) {
                                    return res.value.length > 0;
                                }
                                else {
                                    return vi.indexOf(res.value) !== -1;
                                }
                            })));
                            /** @type {?} */
                            var visibilityCheck = property._visibilityChanges;
                            /** @type {?} */
                            var and = rxjs.combineLatest([valueCheck, visibilityCheck]).pipe(operators.map(( /**
                             * @param {?} results
                             * @return {?}
                             */function (/**
                             * @param {?} results
                             * @return {?}
                             */ results) { return results[0] && results[1]; })));
                            propertiesBinding.push(and);
                        }
                        else {
                            console.warn("Can't find property " + dependencyPath + " for visibility check of " + this_1.path);
                        }
                    }
                };
                var this_1 = this;
                for (var dependencyPath in visibleIf) {
                    _loop_1(dependencyPath);
                }
                rxjs.combineLatest(propertiesBinding)
                    .pipe(operators.map(( /**
             * @param {?} values
             * @return {?}
             */function (/**
             * @param {?} values
             * @return {?}
             */ values) { return values.indexOf(true) !== -1; })), operators.distinctUntilChanged())
                    .subscribe(( /**
             * @param {?} visible
             * @return {?}
             */function (/**
             * @param {?} visible
             * @return {?}
             */ visible) { return _this.setVisible(visible); }));
            }
        };
        return FormProperty;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._errors;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._valueChanges;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._errorsChanges;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._visible;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._visibilityChanges;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._root;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._parent;
        /** @type {?} */
        FormProperty.prototype._objErrors;
        /** @type {?} */
        FormProperty.prototype.schemaValidator;
        /** @type {?} */
        FormProperty.prototype.schema;
        /** @type {?} */
        FormProperty.prototype.ui;
        /** @type {?} */
        FormProperty.prototype.formData;
        /** @type {?} */
        FormProperty.prototype._value;
        /** @type {?} */
        FormProperty.prototype.widget;
        /** @type {?} */
        FormProperty.prototype.path;
        /**
         * @type {?}
         * @private
         */
        FormProperty.prototype._options;
        /**
         * 设置值
         *
         * @abstract
         * @param {?} value
         * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
         * @return {?}
         */
        FormProperty.prototype.setValue = function (value, onlySelf) { };
        /**
         * 重置值，默认值为 `schema.default`
         *
         * @abstract
         * @param {?} value
         * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
         * @return {?}
         */
        FormProperty.prototype.resetValue = function (value, onlySelf) { };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        FormProperty.prototype._hasValue = function () { };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        FormProperty.prototype._updateValue = function () { };
    }
    /**
     * @abstract
     */
    var PropertyGroup = /** @class */ (function (_super) {
        __extends(PropertyGroup, _super);
        function PropertyGroup() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.properties = null;
            return _this;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        PropertyGroup.prototype.getProperty = function (path) {
            /** @type {?} */
            var subPathIdx = path.indexOf(SF_SEQ);
            /** @type {?} */
            var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
            /** @type {?} */
            var property = (( /** @type {?} */(this.properties)))[propertyId];
            if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
                /** @type {?} */
                var subPath = path.substr(subPathIdx + 1);
                property = ( /** @type {?} */((( /** @type {?} */(property))).getProperty(subPath)));
            }
            return property;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChild = function (fn) {
            for (var propertyId in this.properties) {
                if (this.properties.hasOwnProperty(propertyId)) {
                    /** @type {?} */
                    var property = (( /** @type {?} */(this.properties)))[propertyId];
                    fn(property, propertyId);
                }
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChildRecursive = function (fn) {
            this.forEachChild(( /**
             * @param {?} child
             * @return {?}
             */function (/**
             * @param {?} child
             * @return {?}
             */ child) {
                fn(child);
                if (child instanceof PropertyGroup) {
                    (( /** @type {?} */(child))).forEachChildRecursive(fn);
                }
            }));
        };
        /**
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibility = function () {
            _super.prototype._bindVisibility.call(this);
            this._bindVisibilityRecursive();
        };
        /**
         * @private
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibilityRecursive = function () {
            this.forEachChildRecursive(( /**
             * @param {?} property
             * @return {?}
             */function (/**
             * @param {?} property
             * @return {?}
             */ property) {
                property._bindVisibility();
            }));
        };
        /**
         * @return {?}
         */
        PropertyGroup.prototype.isRoot = function () {
            return this === this.root;
        };
        return PropertyGroup;
    }(FormProperty));
    if (false) {
        /** @type {?} */
        PropertyGroup.prototype.properties;
    }

    var ObjectProperty = /** @class */ (function (_super) {
        __extends(ObjectProperty, _super);
        /**
         * @param {?} formPropertyFactory
         * @param {?} schemaValidatorFactory
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?} parent
         * @param {?} path
         * @param {?} options
         */
        function ObjectProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
            var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
            _this.formPropertyFactory = formPropertyFactory;
            _this._propertiesId = [];
            _this.createProperties();
            return _this;
        }
        Object.defineProperty(ObjectProperty.prototype, "propertiesId", {
            /**
             * @return {?}
             */
            get: function () {
                return this._propertiesId;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ObjectProperty.prototype.createProperties = function () {
            var _this = this;
            this.properties = {};
            this._propertiesId = [];
            /** @type {?} */
            var orderedProperties;
            try {
                orderedProperties = orderProperties(Object.keys(( /** @type {?} */(this.schema.properties))), ( /** @type {?} */(this.ui.order)));
            }
            catch (e) {
                console.error("Invalid " + (this.schema.title || 'root') + " object field configuration:", e);
            }
            ( /** @type {?} */(orderedProperties)).forEach(( /**
             * @param {?} propertyId
             * @return {?}
             */function (/**
             * @param {?} propertyId
             * @return {?}
             */ propertyId) {
                (( /** @type {?} */(_this.properties)))[propertyId] = _this.formPropertyFactory.createProperty(( /** @type {?} */(_this.schema.properties))[propertyId], _this.ui['$' + propertyId], (( /** @type {?} */((_this.formData || {}))))[propertyId], _this, propertyId);
                _this._propertiesId.push(propertyId);
            }));
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.setValue = function (value, onlySelf) {
            /** @type {?} */
            var properties = ( /** @type {?} */(this.properties));
            for (var propertyId in value) {
                if (value.hasOwnProperty(propertyId) && properties[propertyId]) {
                    (( /** @type {?} */(properties[propertyId]))).setValue(value[propertyId], true);
                }
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.resetValue = function (value, onlySelf) {
            value = value || this.schema.default || {};
            /** @type {?} */
            var properties = ( /** @type {?} */(this.properties));
            // tslint:disable-next-line: forin
            for (var propertyId in this.schema.properties) {
                properties[propertyId].resetValue(value[propertyId], true);
            }
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._hasValue = function () {
            return this.value != null && !!Object.keys(this.value).length;
        };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._updateValue = function () {
            /** @type {?} */
            var value = {};
            this.forEachChild(( /**
             * @param {?} property
             * @param {?} propertyId
             * @return {?}
             */function (property, propertyId) {
                if (property.visible && property._hasValue()) {
                    value[propertyId] = property.value;
                }
            }));
            this._value = value;
        };
        return ObjectProperty;
    }(PropertyGroup));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ObjectProperty.prototype._propertiesId;
        /**
         * @type {?}
         * @private
         */
        ObjectProperty.prototype.formPropertyFactory;
    }

    var ArrayProperty = /** @class */ (function (_super) {
        __extends(ArrayProperty, _super);
        /**
         * @param {?} formPropertyFactory
         * @param {?} schemaValidatorFactory
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?} parent
         * @param {?} path
         * @param {?} options
         */
        function ArrayProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
            var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
            _this.formPropertyFactory = formPropertyFactory;
            _this.properties = [];
            return _this;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        ArrayProperty.prototype.getProperty = function (path) {
            /** @type {?} */
            var subPathIdx = path.indexOf(SF_SEQ);
            /** @type {?} */
            var pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
            /** @type {?} */
            var list = ( /** @type {?} */(this.properties));
            if (isNaN(pos) || pos >= list.length) {
                return undefined;
            }
            /** @type {?} */
            var subPath = path.substr(subPathIdx + 1);
            return list[pos].getProperty(subPath);
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ArrayProperty.prototype.setValue = function (value, onlySelf) {
            this.properties = [];
            this.clearErrors();
            this.resetProperties(value);
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ArrayProperty.prototype.resetValue = function (value, onlySelf) {
            this._value = value || this.schema.default || [];
            this.setValue(this._value, onlySelf);
        };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._hasValue = function () {
            return true;
        };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._updateValue = function () {
            var _this = this;
            /** @type {?} */
            var value = [];
            this.forEachChild(( /**
             * @param {?} property
             * @return {?}
             */function (property) {
                var _a;
                if (property.visible && property._hasValue()) {
                    value.push(Object.assign(Object.assign({}, (((_a = _this.widget) === null || _a === void 0 ? void 0 : _a.cleanValue) ? null : property.formData)), property.value));
                }
            }));
            this._value = value;
        };
        /**
         * @private
         * @param {?} formData
         * @return {?}
         */
        ArrayProperty.prototype.addProperty = function (formData) {
            /** @type {?} */
            var newProperty = ( /** @type {?} */(this.formPropertyFactory.createProperty(( /** @type {?} */(this.schema.items)), this.ui.$items, formData, ( /** @type {?} */(this)))));
            (( /** @type {?} */(this.properties))).push(newProperty);
            return newProperty;
        };
        /**
         * @private
         * @param {?} formDatas
         * @return {?}
         */
        ArrayProperty.prototype.resetProperties = function (formDatas) {
            var e_1, _b;
            try {
                for (var formDatas_1 = __values(formDatas), formDatas_1_1 = formDatas_1.next(); !formDatas_1_1.done; formDatas_1_1 = formDatas_1.next()) {
                    var item = formDatas_1_1.value;
                    /** @type {?} */
                    var property = this.addProperty(item);
                    property.resetValue(item, true);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (formDatas_1_1 && !formDatas_1_1.done && (_b = formDatas_1.return)) _b.call(formDatas_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @private
         * @param {?=} property
         * @return {?}
         */
        ArrayProperty.prototype.clearErrors = function (property) {
            (property || this)._objErrors = {};
        };
        // #region actions
        /**
         * @param {?} formData
         * @return {?}
         */
        ArrayProperty.prototype.add = function (formData) {
            /** @type {?} */
            var newProperty = this.addProperty(formData);
            newProperty.resetValue(formData, false);
            return newProperty;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayProperty.prototype.remove = function (index) {
            var _this = this;
            /** @type {?} */
            var list = ( /** @type {?} */(this.properties));
            this.clearErrors();
            list.splice(index, 1);
            list.forEach(( /**
             * @param {?} property
             * @param {?} idx
             * @return {?}
             */function (property, idx) {
                property.path = [( /** @type {?} */(property.parent)).path, idx].join(SF_SEQ);
                _this.clearErrors(property);
                // TODO: 受限于 sf 的设计思路，对于移除数组项需要重新对每个子项进行校验，防止错误被父级合并后引起始终是错误的现象
                if (property instanceof ObjectProperty) {
                    property.forEachChild(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) {
                        p.updateValueAndValidity();
                    }));
                }
            }));
            if (list.length === 0) {
                this.updateValueAndValidity();
            }
        };
        return ArrayProperty;
    }(PropertyGroup));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ArrayProperty.prototype.formPropertyFactory;
    }

    /**
     * @abstract
     */
    var AtomicProperty = /** @class */ (function (_super) {
        __extends(AtomicProperty, _super);
        function AtomicProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.setValue = function (value, onlySelf) {
            this._value = value;
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.resetValue = function (value, onlySelf) {
            if (value == null) {
                value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
            }
            this._value = value;
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
            if (this.widget)
                this.widget.reset(value);
        };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._hasValue = function () {
            return this.fallbackValue() !== this.value;
        };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._updateValue = function () { };
        return AtomicProperty;
    }(FormProperty));
    if (false) {
        /**
         * @abstract
         * @return {?}
         */
        AtomicProperty.prototype.fallbackValue = function () { };
    }

    var BooleanProperty = /** @class */ (function (_super) {
        __extends(BooleanProperty, _super);
        function BooleanProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        BooleanProperty.prototype.fallbackValue = function () {
            return null;
        };
        return BooleanProperty;
    }(AtomicProperty));

    var NumberProperty = /** @class */ (function (_super) {
        __extends(NumberProperty, _super);
        function NumberProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NumberProperty.prototype.fallbackValue = function () {
            return null;
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        NumberProperty.prototype.setValue = function (value, onlySelf) {
            if (typeof value === 'string') {
                if (value.length) {
                    value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
                }
                else {
                    value = undefined;
                }
            }
            this._value = value;
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        return NumberProperty;
    }(AtomicProperty));

    var StringProperty = /** @class */ (function (_super) {
        __extends(StringProperty, _super);
        function StringProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringProperty.prototype.fallbackValue = function () {
            return null;
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        StringProperty.prototype.setValue = function (value, onlySelf) {
            this._value = value == null ? '' : value;
            this.updateValueAndValidity({ onlySelf: onlySelf, emitValueEvent: true });
        };
        return StringProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/form.property.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormPropertyFactory = /** @class */ (function () {
        /**
         * @param {?} schemaValidatorFactory
         * @param {?} cogSrv
         */
        function FormPropertyFactory(schemaValidatorFactory, cogSrv) {
            this.schemaValidatorFactory = schemaValidatorFactory;
            this.options = mergeConfig(cogSrv);
        }
        /**
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?=} parent
         * @param {?=} propertyId
         * @return {?}
         */
        FormPropertyFactory.prototype.createProperty = function (schema, ui, formData, parent, propertyId) {
            if (parent === void 0) { parent = null; }
            /** @type {?} */
            var newProperty = null;
            /** @type {?} */
            var path = '';
            if (parent) {
                path += parent.path;
                if (parent.parent !== null) {
                    path += SF_SEQ;
                }
                switch (parent.type) {
                    case 'object':
                        path += propertyId;
                        break;
                    case 'array':
                        path += (( /** @type {?} */((( /** @type {?} */(parent))).properties))).length;
                        break;
                    default:
                        throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
                }
            }
            else {
                path = SF_SEQ;
            }
            if (schema.$ref) {
                /** @type {?} */
                var refSchema = retrieveSchema(schema, ( /** @type {?} */(parent)).root.schema.definitions);
                newProperty = this.createProperty(refSchema, ui, formData, parent, path);
            }
            else {
                // fix required
                if ((propertyId && ( /** @type {?} */(( /** @type {?} */(parent)).schema.required)).indexOf(( /** @type {?} */(propertyId.split(SF_SEQ).pop()))) !== -1) || ui.showRequired === true) {
                    ui._required = true;
                }
                // fix title
                if (schema.title == null) {
                    schema.title = propertyId;
                }
                // fix date
                if ((schema.type === 'string' || schema.type === 'number') && !schema.format && !(( /** @type {?} */(ui))).format) {
                    if ((( /** @type {?} */(ui))).widget === 'date')
                        ui._format = schema.type === 'string' ? this.options.uiDateStringFormat : this.options.uiDateNumberFormat;
                    else if ((( /** @type {?} */(ui))).widget === 'time')
                        ui._format = schema.type === 'string' ? this.options.uiTimeStringFormat : this.options.uiTimeNumberFormat;
                }
                else {
                    ui._format = ui.format;
                }
                switch (schema.type) {
                    case 'integer':
                    case 'number':
                        newProperty = new NumberProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                        break;
                    case 'string':
                        newProperty = new StringProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                        break;
                    case 'boolean':
                        newProperty = new BooleanProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                        break;
                    case 'object':
                        newProperty = new ObjectProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                        break;
                    case 'array':
                        newProperty = new ArrayProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                        break;
                    default:
                        throw new TypeError("Undefined type " + schema.type);
                }
            }
            if (newProperty instanceof PropertyGroup) {
                this.initializeRoot(newProperty);
            }
            return newProperty;
        };
        /**
         * @private
         * @param {?} rootProperty
         * @return {?}
         */
        FormPropertyFactory.prototype.initializeRoot = function (rootProperty) {
            // rootProperty.init();
            rootProperty._bindVisibility();
        };
        return FormPropertyFactory;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FormPropertyFactory.prototype.options;
        /**
         * @type {?}
         * @private
         */
        FormPropertyFactory.prototype.schemaValidatorFactory;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/terminator.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TerminatorService = /** @class */ (function () {
        function TerminatorService() {
            this.onDestroy = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TerminatorService.prototype.destroy = function () {
            this.onDestroy.next(true);
        };
        return TerminatorService;
    }());
    if (false) {
        /** @type {?} */
        TerminatorService.prototype.onDestroy;
    }

    /**
     * @abstract
     */
    var SchemaValidatorFactory = /** @class */ (function () {
        function SchemaValidatorFactory() {
        }
        return SchemaValidatorFactory;
    }());
    SchemaValidatorFactory.decorators = [
        { type: core.Injectable }
    ];
    if (false) {
        /**
         * @abstract
         * @param {?} schema
         * @param {?} extraOptions
         * @return {?}
         */
        SchemaValidatorFactory.prototype.createValidatorFn = function (schema, extraOptions) { };
    }
    var AjvSchemaValidatorFactory = /** @class */ (function (_super) {
        __extends(AjvSchemaValidatorFactory, _super);
        /**
         * @param {?} cogSrv
         */
        function AjvSchemaValidatorFactory(cogSrv) {
            var _this = _super.call(this) || this;
            if (!(typeof document === 'object' && !!document)) {
                return _this;
            }
            _this.options = mergeConfig(cogSrv);
            _this.ajv = new Ajv(Object.assign(Object.assign({}, _this.options.ajv), { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
            _this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
            _this.ajv.addFormat('color', /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
            _this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
            _this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
            return _this;
        }
        /**
         * @param {?} schema
         * @param {?} extraOptions
         * @return {?}
         */
        AjvSchemaValidatorFactory.prototype.createValidatorFn = function (schema, extraOptions) {
            var _this = this;
            /** @type {?} */
            var ingoreKeywords = __spread((( /** @type {?} */(this.options.ingoreKeywords))), ((( /** @type {?} */(extraOptions.ingoreKeywords))) || []));
            return ( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                try {
                    _this.ajv.validate(schema, value);
                }
                catch (e) {
                    // swallow errors thrown in ajv due to invalid schemas, these
                    // still get displayed
                    if (extraOptions.debug) {
                        console.warn(e);
                    }
                }
                /** @type {?} */
                var errors = _this.ajv.errors;
                if (_this.options && ingoreKeywords && errors) {
                    errors = errors.filter(( /**
                     * @param {?} w
                     * @return {?}
                     */function (/**
                     * @param {?} w
                     * @return {?}
                     */ w) { return ingoreKeywords.indexOf(w.keyword) === -1; }));
                }
                return errors;
            });
        };
        return AjvSchemaValidatorFactory;
    }(SchemaValidatorFactory));
    AjvSchemaValidatorFactory.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    AjvSchemaValidatorFactory.ctorParameters = function () { return [
        { type: util.AlainConfigService, decorators: [{ type: core.Inject, args: [util.AlainConfigService,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        AjvSchemaValidatorFactory.prototype.ajv;
        /**
         * @type {?}
         * @protected
         */
        AjvSchemaValidatorFactory.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widget.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetRegistry = /** @class */ (function () {
        function WidgetRegistry() {
            this._widgets = {};
        }
        Object.defineProperty(WidgetRegistry.prototype, "widgets", {
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
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.setDefault = function (widget) {
            this.defaultWidget = widget;
        };
        /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.register = function (type, widget) {
            this._widgets[type] = widget;
        };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.has = function (type) {
            return this._widgets.hasOwnProperty(type);
        };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.getType = function (type) {
            if (this.has(type)) {
                return this._widgets[type];
            }
            return this.defaultWidget;
        };
        return WidgetRegistry;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetRegistry.prototype._widgets;
        /**
         * @type {?}
         * @private
         */
        WidgetRegistry.prototype.defaultWidget;
    }
    var WidgetFactory = /** @class */ (function () {
        /**
         * @param {?} registry
         * @param {?} resolver
         */
        function WidgetFactory(registry, resolver) {
            this.registry = registry;
            this.resolver = resolver;
        }
        /**
         * @param {?} container
         * @param {?} type
         * @return {?}
         */
        WidgetFactory.prototype.createWidget = function (container, type) {
            if (!this.registry.has(type)) {
                console.warn("No widget for type \"" + type + "\"");
            }
            /** @type {?} */
            var componentClass = ( /** @type {?} */(this.registry.getType(type)));
            /** @type {?} */
            var componentFactory = this.resolver.resolveComponentFactory(componentClass);
            return container.createComponent(componentFactory);
        };
        return WidgetFactory;
    }());
    WidgetFactory.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    WidgetFactory.ctorParameters = function () { return [
        { type: WidgetRegistry },
        { type: core.ComponentFactoryResolver }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetFactory.prototype.registry;
        /**
         * @type {?}
         * @private
         */
        WidgetFactory.prototype.resolver;
    }

    /**
     * @param {?} schemaValidatorFactory
     * @param {?} cogSrv
     * @return {?}
     */
    function useFactory(schemaValidatorFactory, cogSrv) {
        return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
    }
    var SFComponent = /** @class */ (function () {
        /**
         * @param {?} formPropertyFactory
         * @param {?} terminator
         * @param {?} dom
         * @param {?} cdr
         * @param {?} localeSrv
         * @param {?} aclSrv
         * @param {?} i18nSrv
         * @param {?} cogSrv
         * @param {?} platform
         */
        function SFComponent(formPropertyFactory, terminator, dom, cdr, localeSrv, aclSrv, i18nSrv, cogSrv, platform) {
            var _this = this;
            this.formPropertyFactory = formPropertyFactory;
            this.terminator = terminator;
            this.dom = dom;
            this.cdr = cdr;
            this.localeSrv = localeSrv;
            this.aclSrv = aclSrv;
            this.i18nSrv = i18nSrv;
            this.platform = platform;
            this.unsubscribe$ = new rxjs.Subject();
            this._renders = new Map();
            this._valid = true;
            this._inited = false;
            this.locale = {};
            this.rootProperty = null;
            // #region fields
            /**
             * 表单布局，等同 `nzLayout`，默认：horizontal
             */
            this.layout = 'horizontal';
            /**
             * 按钮
             * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
             * - 值为 `none` 表示手动添加按钮，且不保留容器
             * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
             */
            this.button = {};
            /**
             * 是否实时校验，默认：`true`
             * - `true` 每一次都校验
             * - `false` 提交时校验
             */
            this.liveValidate = true;
            /**
             * 立即显示错误视觉
             */
            this.firstVisual = true;
            /**
             * 是否只展示错误视觉不显示错误文本
             */
            this.onlyVisual = false;
            this.compact = false;
            /**
             * Whether to load status，when `true` reset button is disabled status, submit button is loading status
             */
            this.loading = false;
            this.disabled = false;
            this.noColon = false;
            this.cleanValue = false;
            this.formValueChange = new core.EventEmitter();
            this.formChange = new core.EventEmitter();
            this.formSubmit = new core.EventEmitter();
            this.formReset = new core.EventEmitter();
            this.formError = new core.EventEmitter();
            this.options = mergeConfig(cogSrv);
            this.liveValidate = ( /** @type {?} */(this.options.liveValidate));
            this.firstVisual = ( /** @type {?} */(this.options.firstVisual));
            this.autocomplete = ( /** @type {?} */(this.options.autocomplete));
            this.localeSrv.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(( /**
             * @return {?}
             */function () {
                _this.locale = _this.localeSrv.getData('sf');
                if (_this._inited) {
                    _this.validator({ emitError: false, onlyRoot: false });
                    _this.coverButtonProperty();
                    _this.cdr.markForCheck();
                }
            }));
            /** @type {?} */
            var refSchemas = [
                this.aclSrv ? this.aclSrv.change : null,
                this.i18nSrv ? this.i18nSrv.change : null,
            ].filter(( /**
             * @param {?} o
             * @return {?}
             */function (/**
             * @param {?} o
             * @return {?}
             */ o) { return o != null; }));
            if (refSchemas.length > 0) {
                rxjs.merge.apply(void 0, __spread((( /** @type {?} */(refSchemas))))).pipe(operators.filter(( /**
             * @return {?}
             */function () { return _this._inited; })), operators.takeUntil(this.unsubscribe$))
                    .subscribe(( /**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */function () { return _this.refreshSchema(); }));
            }
        }
        Object.defineProperty(SFComponent.prototype, "mode", {
            /**
             * @return {?}
             */
            get: function () {
                return this._mode;
            },
            /**
             * 表单模式
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                switch (value) {
                    case 'search':
                        this.layout = 'inline';
                        this.firstVisual = false;
                        this.liveValidate = false;
                        if (this._btn) {
                            this._btn.submit = this._btn.search;
                        }
                        break;
                    case 'edit':
                        this.layout = 'horizontal';
                        this.firstVisual = false;
                        this.liveValidate = true;
                        if (this._btn) {
                            this._btn.submit = this._btn.edit;
                        }
                        break;
                }
                this._mode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SFComponent.prototype, "valid", {
            // #endregion
            /**
             * 表单校验状态
             * @return {?}
             */
            get: function () {
                return this._valid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SFComponent.prototype, "value", {
            /**
             * 表单值
             * @return {?}
             */
            get: function () {
                return this._item;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 根据路径获取表单元素属性
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        SFComponent.prototype.getProperty = function (path) {
            return ( /** @type {?} */(this.rootProperty)).searchProperty(path);
        };
        /**
         * 根据路径获取表单元素当前值
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        SFComponent.prototype.getValue = function (path) {
            return ( /** @type {?} */(this.getProperty(path))).value;
        };
        /**
         * 根据路径设置某个表单元素属性值
         * @template THIS
         * @this {THIS}
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @param {?} value 新值
         * @return {THIS}
         */
        SFComponent.prototype.setValue = function (path, value) {
            /** @type {?} */
            var item = ( /** @type {?} */(this)).getProperty(path);
            if (!item) {
                throw new Error("Invalid path: " + path);
            }
            item.resetValue(value, false);
            return ( /** @type {?} */(this));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SFComponent.prototype.onSubmit = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!this.liveValidate)
                this.validator();
            if (!this.valid)
                return;
            this.formSubmit.emit(this.value);
        };
        /**
         * @protected
         * @param {?} key
         * @return {?}
         */
        SFComponent.prototype.fanyi = function (key) {
            return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
        };
        /**
         * @private
         * @param {?} ui
         * @return {?}
         */
        SFComponent.prototype.inheritUI = function (ui) {
            var _this = this;
            ['optionalHelp'].filter(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return !!_this._defUi[key]; })).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) { return (ui[key] = Object.assign(Object.assign({}, _this._defUi[key]), ui[key])); }));
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.coverProperty = function () {
            var _this = this;
            /** @type {?} */
            var isHorizontal = this.layout === 'horizontal';
            /** @type {?} */
            var _schema = util.deepCopy(this.schema);
            var definitions = _schema.definitions;
            /** @type {?} */
            var inFn = ( /**
             * @param {?} schema
             * @param {?} _parentSchema
             * @param {?} uiSchema
             * @param {?} parentUiSchema
             * @param {?} uiRes
             * @return {?}
             */function (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) {
                if (!Array.isArray(schema.required))
                    schema.required = [];
                Object.keys(( /** @type {?} */(schema.properties))).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) {
                    /** @type {?} */
                    var uiKey = "$" + key;
                    /** @type {?} */
                    var property = retrieveSchema(( /** @type {?} */(( /** @type {?} */(schema.properties))[key])), definitions);
                    /** @type {?} */
                    var ui = ( /** @type {?} */(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ widget: property.type }, (property.format && (( /** @type {?} */(_this.options.formatMap)))[property.format])), (typeof property.ui === 'string' ? { widget: property.ui } : null)), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null)), _this._defUi), (( /** @type {?} */(property.ui)))), uiSchema[uiKey])));
                    // 继承父节点布局属性
                    if (isHorizontal) {
                        if (parentUiSchema.spanLabelFixed) {
                            if (!ui.spanLabelFixed) {
                                ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
                            }
                        }
                        else {
                            if (!ui.spanLabel)
                                ui.spanLabel = typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
                            if (!ui.spanControl)
                                ui.spanControl = typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
                            if (!ui.offsetControl)
                                ui.offsetControl = typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
                        }
                    }
                    else {
                        ui.spanLabel = null;
                        ui.spanControl = null;
                        ui.offsetControl = null;
                    }
                    // 内联强制清理 `grid` 参数
                    if (_this.layout === 'inline') {
                        delete ui.grid;
                    }
                    // 非水平布局强制清理 `spanLabelFixed` 值
                    if (_this.layout !== 'horizontal') {
                        ui.spanLabelFixed = null;
                    }
                    // 当指定标签为固定宽度时无须指定 `spanLabel`，`spanControl`
                    if (ui.spanLabelFixed != null && ui.spanLabelFixed > 0) {
                        ui.spanLabel = null;
                        ui.spanControl = null;
                    }
                    if (ui.widget === 'date' && ui.end != null) {
                        /** @type {?} */
                        var dateEndProperty = ( /** @type {?} */(schema.properties))[ui.end];
                        if (dateEndProperty) {
                            dateEndProperty.ui = Object.assign(Object.assign({}, (( /** @type {?} */(dateEndProperty.ui)))), { widget: ui.widget, hidden: true });
                        }
                        else {
                            ui.end = null;
                        }
                    }
                    _this.inheritUI(ui);
                    if (ui.optionalHelp) {
                        if (typeof ui.optionalHelp === 'string') {
                            ui.optionalHelp = ( /** @type {?} */({
                                text: ui.optionalHelp,
                            }));
                        }
                        /** @type {?} */
                        var oh = (ui.optionalHelp = Object.assign({ text: '', icon: 'question-circle', placement: 'top', trigger: 'hover', mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 }, ui.optionalHelp));
                        if (oh.i18n) {
                            oh.text = _this.fanyi(oh.i18n);
                        }
                        if (!oh.text) {
                            ui.optionalHelp = undefined;
                        }
                    }
                    if (ui.i18n) {
                        property.title = _this.fanyi(ui.i18n);
                    }
                    if (ui.descriptionI18n) {
                        property.description = _this.fanyi(ui.descriptionI18n);
                    }
                    if (property.description) {
                        property._description = _this.dom.bypassSecurityTrustHtml(property.description);
                    }
                    ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                    if (ui.hidden === false && ui.acl && _this.aclSrv && !_this.aclSrv.can(ui.acl)) {
                        ui.hidden = true;
                    }
                    uiRes[uiKey] = ui;
                    delete property.ui;
                    if (ui.hidden === true) {
                        /** @type {?} */
                        var idx = ( /** @type {?} */(schema.required)).indexOf(key);
                        if (idx !== -1) {
                            ( /** @type {?} */(schema.required)).splice(idx, 1);
                        }
                    }
                    if (property.items) {
                        /** @type {?} */
                        var uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                        ui.$items = Object.assign(Object.assign(Object.assign({}, (( /** @type {?} */(property.items.ui)))), uiSchemaInArr[uiKey]), ui.$items);
                        inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
                    }
                    if (property.properties && Object.keys(property.properties).length) {
                        inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
                    }
                }));
            });
            if (this.ui == null)
                this.ui = {};
            this._defUi = Object.assign(Object.assign(Object.assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui), _schema.ui), this.ui['*']);
            if (this.onlyVisual === true) {
                this._defUi.onlyVisual = true;
            }
            // 内联强制清理 `grid` 参数
            if (this.layout === 'inline') {
                delete this._defUi.grid;
            }
            // root
            this._ui = Object.assign({}, this._defUi);
            inFn(_schema, _schema, this.ui, this.ui, this._ui);
            // cond
            resolveIfSchema(_schema, this._ui);
            this._schema = _schema;
            di(this._ui, 'cover schema & ui', this._ui, _schema);
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.coverButtonProperty = function () {
            this._btn = Object.assign(Object.assign(Object.assign({ render: { size: 'default' } }, this.locale), this.options.button), (( /** @type {?} */(this.button))));
            /** @type {?} */
            var firstKey = Object.keys(this._ui).find(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.startsWith('$'); }));
            /** @type {?} */
            var btnRender = ( /** @type {?} */(this._btn.render));
            if (this.layout === 'horizontal') {
                /** @type {?} */
                var btnUi = firstKey ? this._ui[firstKey] : this._defUi;
                if (!btnRender.grid) {
                    btnRender.grid = {
                        offset: btnUi.spanLabel,
                        span: btnUi.spanControl,
                    };
                }
                // fixed label
                if (btnRender.spanLabelFixed == null) {
                    btnRender.spanLabelFixed = btnUi.spanLabelFixed;
                }
                // 固定标签宽度时，若不指定样式，则默认居中
                if (!btnRender.class && typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0) {
                    btnRender.class = 'text-center';
                }
            }
            else {
                btnRender.grid = {};
            }
            if (this._mode) {
                this.mode = this._mode;
            }
            di(this._ui, 'button property', this._btn);
        };
        /**
         * @return {?}
         */
        SFComponent.prototype.ngOnInit = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            this._inited = true;
            this.validator();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        SFComponent.prototype.ngOnChanges = function (changes) {
            if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
                this.cdr.detectChanges();
                return;
            }
            this.refreshSchema();
        };
        /**
         * \@internal
         * @param {?} path
         * @param {?} templateRef
         * @return {?}
         */
        SFComponent.prototype._addTpl = function (path, templateRef) {
            if (this._renders.has(path)) {
                console.warn("Duplicate definition \"" + path + "\" custom widget");
                return;
            }
            this._renders.set(path, templateRef);
            this.attachCustomRender();
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.attachCustomRender = function () {
            var _this = this;
            this._renders.forEach(( /**
             * @param {?} tpl
             * @param {?} path
             * @return {?}
             */function (tpl, path) {
                /** @type {?} */
                var property = ( /** @type {?} */(_this.rootProperty)).searchProperty(path);
                if (property == null) {
                    return;
                }
                property.ui._render = tpl;
            }));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?=} options
         * @return {THIS}
         */
        SFComponent.prototype.validator = function (options) {
            if (options === void 0) { options = { emitError: true, onlyRoot: true }; }
            if (!( /** @type {?} */(this)).platform.isBrowser) {
                return ( /** @type {?} */(this));
            }
            /** @type {?} */
            var fn = ( /**
             * @param {?} property
             * @return {?}
             */function (property) {
                property._runValidation();
                if (!(property instanceof PropertyGroup) || !property.properties)
                    return;
                if (Array.isArray(property.properties)) {
                    property.properties.forEach(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) { return fn(p); }));
                }
                else {
                    Object.keys(property.properties).forEach(( /**
                     * @param {?} key
                     * @return {?}
                     */function (/**
                     * @param {?} key
                     * @return {?}
                     */ key) { return fn((( /** @type {?} */(property.properties)))[key]); }));
                }
            });
            if (options.onlyRoot) {
                ( /** @type {?} */(( /** @type {?} */(this)).rootProperty))._runValidation();
            }
            else {
                fn(( /** @type {?} */(( /** @type {?} */(this)).rootProperty)));
            }
            /** @type {?} */
            var errors = ( /** @type {?} */(( /** @type {?} */(this)).rootProperty)).errors;
            ( /** @type {?} */(this))._valid = !(errors && errors.length);
            if (options.emitError && !( /** @type {?} */(this))._valid)
                ( /** @type {?} */(this)).formError.emit(( /** @type {?} */(errors)));
            ( /** @type {?} */(this)).cdr.detectChanges();
            return ( /** @type {?} */(this));
        };
        /**
         * 刷新整个 Schema，当指定 `newSchema` 表示替换当前的 Schema
         *
         * 若希望对某个表单元素进行刷新请使用：
         * ```
         * // 获取某个元素
         * const statusProperty = this.sf.getProperty('/status')!;
         * // 重置 `schema` 或 `ui` 参数
         * statusProperty.schema.enum = ['1', '2', '3'];
         * // 调用 `reset` 重置初始值
         * statusProperty.widget.reset('2');
         * ```
         * @template THIS
         * @this {THIS}
         * @param {?=} newSchema
         * @param {?=} newUI
         * @return {THIS}
         */
        SFComponent.prototype.refreshSchema = function (newSchema, newUI) {
            var _this = this;
            if (!( /** @type {?} */(this)).platform.isBrowser) {
                return ( /** @type {?} */(this));
            }
            if (newSchema)
                ( /** @type {?} */(this)).schema = newSchema;
            if (newUI)
                ( /** @type {?} */(this)).ui = newUI;
            if (!( /** @type {?} */(this)).schema || typeof ( /** @type {?} */(this)).schema.properties === 'undefined')
                throw new Error("Invalid Schema");
            if (( /** @type {?} */(this)).schema.ui && typeof ( /** @type {?} */(this)).schema.ui === 'string')
                throw new Error("Don't support string with root ui property");
            ( /** @type {?} */(this)).schema.type = 'object';
            ( /** @type {?} */(this))._formData = Object.assign({}, ( /** @type {?} */(this)).formData);
            if (( /** @type {?} */(this))._inited)
                ( /** @type {?} */(this)).terminator.destroy();
            ( /** @type {?} */(this)).cleanRootSub();
            ( /** @type {?} */(this)).coverProperty();
            ( /** @type {?} */(this)).coverButtonProperty();
            ( /** @type {?} */(this)).rootProperty = ( /** @type {?} */(this)).formPropertyFactory.createProperty(( /** @type {?} */(this))._schema, ( /** @type {?} */(this))._ui, ( /** @type {?} */(this)).formData);
            ( /** @type {?} */(this)).attachCustomRender();
            ( /** @type {?} */(this)).cdr.detectChanges();
            ( /** @type {?} */(this)).reset();
            /** @type {?} */
            var isFirst = true;
            ( /** @type {?} */(this)).rootProperty.valueChanges.subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                ( /** @type {?} */(_this))._item = Object.assign(Object.assign({}, (( /** @type {?} */(_this)).cleanValue ? null : ( /** @type {?} */(_this)).formData)), res.value);
                if (isFirst) {
                    isFirst = false;
                    return;
                }
                ( /** @type {?} */(_this)).formChange.emit(( /** @type {?} */(_this))._item);
                ( /** @type {?} */(_this)).formValueChange.emit({ value: ( /** @type {?} */(_this))._item, path: res.path, pathValue: res.pathValue });
            }));
            ( /** @type {?} */(this)).rootProperty.errorsChanges.subscribe(( /**
             * @param {?} errors
             * @return {?}
             */function (/**
             * @param {?} errors
             * @return {?}
             */ errors) {
                ( /** @type {?} */(_this))._valid = !(errors && errors.length);
                ( /** @type {?} */(_this)).formError.emit(( /** @type {?} */(errors)));
                ( /** @type {?} */(_this)).cdr.detectChanges();
            }));
            return ( /** @type {?} */(this));
        };
        /**
         * 重置表单
         * @template THIS
         * @this {THIS}
         * @param {?=} emit
         * @return {THIS}
         */
        SFComponent.prototype.reset = function (emit) {
            var _this = this;
            if (emit === void 0) { emit = false; }
            if (!( /** @type {?} */(this)).platform.isBrowser) {
                return ( /** @type {?} */(this));
            }
            ( /** @type {?} */(( /** @type {?} */(this)).rootProperty)).resetValue(( /** @type {?} */(this)).formData, false);
            Promise.resolve().then(( /**
             * @return {?}
             */function () { return ( /** @type {?} */(_this)).cdr.detectChanges(); }));
            if (emit) {
                ( /** @type {?} */(this)).formReset.emit(( /** @type {?} */(this)).value);
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.cleanRootSub = function () {
            if (!this.rootProperty)
                return;
            this.rootProperty.errorsChanges.unsubscribe();
            this.rootProperty.valueChanges.unsubscribe();
        };
        /**
         * @return {?}
         */
        SFComponent.prototype.ngOnDestroy = function () {
            this.cleanRootSub();
            this.terminator.destroy();
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return SFComponent;
    }());
    SFComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf, [sf]',
                    exportAs: 'sf',
                    template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"_btn.render!.grid!.span\"\n        [nzOffset]=\"_btn.render!.grid!.offset\"\n        [nzXs]=\"_btn.render!.grid!.xs\"\n        [nzSm]=\"_btn.render!.grid!.sm\"\n        [nzMd]=\"_btn.render!.grid!.md\"\n        [nzLg]=\"_btn.render!.grid!.lg\"\n        [nzXl]=\"_btn.render!.grid!.xl\"\n        [nzXXl]=\"_btn.render!.grid!.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type\"\n                  [nzTheme]=\"_btn.submit_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type\"\n                  [nzTheme]=\"_btn.reset_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                    providers: [
                        WidgetFactory,
                        {
                            provide: FormPropertyFactory,
                            useFactory: useFactory,
                            deps: [SchemaValidatorFactory, util.AlainConfigService],
                        },
                        TerminatorService,
                    ],
                    host: {
                        '[class.sf]': 'true',
                        '[class.sf__inline]': "layout === 'inline'",
                        '[class.sf__horizontal]': "layout === 'horizontal'",
                        '[class.sf__search]': "mode === 'search'",
                        '[class.sf__edit]': "mode === 'edit'",
                        '[class.sf__no-error]': "onlyVisual",
                        '[class.sf__no-colon]': "noColon",
                        '[class.sf__compact]': "compact",
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SFComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory },
        { type: TerminatorService },
        { type: platformBrowser.DomSanitizer },
        { type: core.ChangeDetectorRef },
        { type: theme.DelonLocaleService },
        { type: acl.ACLService, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
        { type: util.AlainConfigService },
        { type: platform.Platform }
    ]; };
    SFComponent.propDecorators = {
        layout: [{ type: core.Input }],
        schema: [{ type: core.Input }],
        ui: [{ type: core.Input }],
        formData: [{ type: core.Input }],
        button: [{ type: core.Input }],
        liveValidate: [{ type: core.Input }],
        autocomplete: [{ type: core.Input }],
        firstVisual: [{ type: core.Input }],
        onlyVisual: [{ type: core.Input }],
        compact: [{ type: core.Input }],
        mode: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        noColon: [{ type: core.Input }],
        cleanValue: [{ type: core.Input }],
        formValueChange: [{ type: core.Output }],
        formChange: [{ type: core.Output }],
        formSubmit: [{ type: core.Output }],
        formReset: [{ type: core.Output }],
        formError: [{ type: core.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "liveValidate", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "firstVisual", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "onlyVisual", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "compact", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "loading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "disabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "noColon", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "cleanValue", void 0);
    if (false) {
        /** @type {?} */
        SFComponent.ngAcceptInputType_liveValidate;
        /** @type {?} */
        SFComponent.ngAcceptInputType_firstVisual;
        /** @type {?} */
        SFComponent.ngAcceptInputType_onlyVisual;
        /** @type {?} */
        SFComponent.ngAcceptInputType_compact;
        /** @type {?} */
        SFComponent.ngAcceptInputType_loading;
        /** @type {?} */
        SFComponent.ngAcceptInputType_disabled;
        /** @type {?} */
        SFComponent.ngAcceptInputType_noColon;
        /** @type {?} */
        SFComponent.ngAcceptInputType_cleanValue;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype._renders;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype._item;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype._valid;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype._defUi;
        /** @type {?} */
        SFComponent.prototype.options;
        /** @type {?} */
        SFComponent.prototype._inited;
        /** @type {?} */
        SFComponent.prototype.locale;
        /** @type {?} */
        SFComponent.prototype.rootProperty;
        /** @type {?} */
        SFComponent.prototype._formData;
        /** @type {?} */
        SFComponent.prototype._btn;
        /** @type {?} */
        SFComponent.prototype._schema;
        /** @type {?} */
        SFComponent.prototype._ui;
        /**
         * 表单布局，等同 `nzLayout`，默认：horizontal
         * @type {?}
         */
        SFComponent.prototype.layout;
        /**
         * JSON Schema
         * @type {?}
         */
        SFComponent.prototype.schema;
        /**
         * UI Schema
         * @type {?}
         */
        SFComponent.prototype.ui;
        /**
         * 表单默认值
         * @type {?}
         */
        SFComponent.prototype.formData;
        /**
         * 按钮
         * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
         * - 值为 `none` 表示手动添加按钮，且不保留容器
         * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
         * @type {?}
         */
        SFComponent.prototype.button;
        /**
         * 是否实时校验，默认：`true`
         * - `true` 每一次都校验
         * - `false` 提交时校验
         * @type {?}
         */
        SFComponent.prototype.liveValidate;
        /**
         * 指定表单 `autocomplete` 值
         * @type {?}
         */
        SFComponent.prototype.autocomplete;
        /**
         * 立即显示错误视觉
         * @type {?}
         */
        SFComponent.prototype.firstVisual;
        /**
         * 是否只展示错误视觉不显示错误文本
         * @type {?}
         */
        SFComponent.prototype.onlyVisual;
        /** @type {?} */
        SFComponent.prototype.compact;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype._mode;
        /**
         * Whether to load status，when `true` reset button is disabled status, submit button is loading status
         * @type {?}
         */
        SFComponent.prototype.loading;
        /** @type {?} */
        SFComponent.prototype.disabled;
        /** @type {?} */
        SFComponent.prototype.noColon;
        /** @type {?} */
        SFComponent.prototype.cleanValue;
        /** @type {?} */
        SFComponent.prototype.formValueChange;
        /** @type {?} */
        SFComponent.prototype.formChange;
        /** @type {?} */
        SFComponent.prototype.formSubmit;
        /** @type {?} */
        SFComponent.prototype.formReset;
        /** @type {?} */
        SFComponent.prototype.formError;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.formPropertyFactory;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.terminator;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.dom;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.localeSrv;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.aclSrv;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        SFComponent.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/sf-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextUniqueId = 0;
    var SFItemComponent = /** @class */ (function () {
        /**
         * @param {?} widgetFactory
         * @param {?} terminator
         */
        function SFItemComponent(widgetFactory, terminator) {
            this.widgetFactory = widgetFactory;
            this.terminator = terminator;
            this.unsubscribe$ = new rxjs.Subject();
            this.widget = null;
        }
        /**
         * @param {?} widget
         * @return {?}
         */
        SFItemComponent.prototype.onWidgetInstanciated = function (widget) {
            this.widget = widget;
            /** @type {?} */
            var id = "_sf-" + nextUniqueId++;
            /** @type {?} */
            var ui = ( /** @type {?} */(this.formProperty.ui));
            this.widget.formProperty = this.formProperty;
            this.widget.schema = this.formProperty.schema;
            this.widget.ui = ui;
            this.widget.id = id;
            this.widget.firstVisual = ( /** @type {?} */(ui.firstVisual));
            this.formProperty.widget = widget;
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.terminator.onDestroy.subscribe(( /**
             * @return {?}
             */function () { return _this.ngOnDestroy(); }));
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnChanges = function () {
            this.ref = this.widgetFactory.createWidget(this.container, ( /** @type {?} */((this.formProperty.ui.widget || this.formProperty.schema.type))));
            this.onWidgetInstanciated(this.ref.instance);
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
            this.ref.destroy();
        };
        return SFItemComponent;
    }());
    SFItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-item',
                    exportAs: 'sfItem',
                    host: { '[class.sf__item]': 'true' },
                    template: " <ng-template #target></ng-template> ",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SFItemComponent.ctorParameters = function () { return [
        { type: WidgetFactory },
        { type: TerminatorService }
    ]; };
    SFItemComponent.propDecorators = {
        formProperty: [{ type: core.Input }],
        container: [{ type: core.ViewChild, args: ['target', { read: core.ViewContainerRef, static: true },] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SFItemComponent.prototype.ref;
        /** @type {?} */
        SFItemComponent.prototype.unsubscribe$;
        /** @type {?} */
        SFItemComponent.prototype.widget;
        /** @type {?} */
        SFItemComponent.prototype.formProperty;
        /** @type {?} */
        SFItemComponent.prototype.container;
        /**
         * @type {?}
         * @private
         */
        SFItemComponent.prototype.widgetFactory;
        /**
         * @type {?}
         * @private
         */
        SFItemComponent.prototype.terminator;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/sf-fixed.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFFixedDirective = /** @class */ (function () {
        /**
         * @param {?} er
         * @param {?} render
         */
        function SFFixedDirective(er, render) {
            this.render = render;
            this._inited = false;
            this.el = ( /** @type {?} */(er.nativeElement));
        }
        /**
         * @private
         * @return {?}
         */
        SFFixedDirective.prototype.init = function () {
            if (!this._inited || this.num == null || this.num <= 0)
                return;
            /** @type {?} */
            var widgetEl = this.el.querySelector('.ant-row') || this.el;
            this.render.addClass(widgetEl, 'sf__fixed');
            /** @type {?} */
            var labelEl = widgetEl.querySelector('.ant-form-item-label');
            /** @type {?} */
            var controlEl = widgetEl.querySelector('.ant-form-item-control');
            /** @type {?} */
            var unit = this.num + 'px';
            if (labelEl) {
                this.render.setStyle(labelEl, 'flex', "0 0 " + unit);
                this.render.setStyle(controlEl, 'max-width', "calc(100% - " + unit + ")");
            }
            else {
                this.render.setStyle(controlEl, 'margin-left', unit);
            }
        };
        /**
         * @return {?}
         */
        SFFixedDirective.prototype.ngAfterViewInit = function () {
            this._inited = true;
            this.init();
        };
        /**
         * @return {?}
         */
        SFFixedDirective.prototype.ngOnChanges = function () {
            if (this._inited)
                this.init();
        };
        return SFFixedDirective;
    }());
    SFFixedDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[fixed-label]' },] }
    ];
    /** @nocollapse */
    SFFixedDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    SFFixedDirective.propDecorators = {
        num: [{ type: core.Input, args: ['fixed-label',] }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number)
    ], SFFixedDirective.prototype, "num", void 0);
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SFFixedDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        SFFixedDirective.prototype._inited;
        /** @type {?} */
        SFFixedDirective.prototype.num;
        /**
         * @type {?}
         * @private
         */
        SFFixedDirective.prototype.render;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/sf-item-wrap.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFItemWrapComponent = /** @class */ (function () {
        function SFItemWrapComponent() {
            this.title = null;
        }
        Object.defineProperty(SFItemWrapComponent.prototype, "t", {
            /**
             * @return {?}
             */
            get: function () {
                return this.title === null ? ( /** @type {?} */(this.schema.title)) : this.title;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SFItemWrapComponent.prototype, "oh", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.ui.optionalHelp));
            },
            enumerable: false,
            configurable: true
        });
        return SFItemWrapComponent;
    }());
    SFItemWrapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-item-wrap',
                    template: "<nz-form-item [style.width.px]=\"ui.width\" [class.ant-form-item-has-error]=\"showError\" [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon\"\n        ></i>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-item-explain ant-form-item-explain-error\">\n      <div @helpMotion>{{ error }}</div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"schema._description\"></div>\n  </nz-col>\n</nz-form-item>\n",
                    animations: [animation.helpMotion],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    SFItemWrapComponent.propDecorators = {
        id: [{ type: core.Input }],
        schema: [{ type: core.Input }],
        ui: [{ type: core.Input }],
        showError: [{ type: core.Input }],
        error: [{ type: core.Input }],
        showTitle: [{ type: core.Input }],
        title: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        SFItemWrapComponent.prototype.id;
        /** @type {?} */
        SFItemWrapComponent.prototype.schema;
        /** @type {?} */
        SFItemWrapComponent.prototype.ui;
        /** @type {?} */
        SFItemWrapComponent.prototype.showError;
        /** @type {?} */
        SFItemWrapComponent.prototype.error;
        /** @type {?} */
        SFItemWrapComponent.prototype.showTitle;
        /** @type {?} */
        SFItemWrapComponent.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/custom/sf-template.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFTemplateDirective = /** @class */ (function () {
        /**
         * @param {?} templateRef
         * @param {?} table
         */
        function SFTemplateDirective(templateRef, table) {
            this.templateRef = templateRef;
            this.table = table;
        }
        /**
         * @return {?}
         */
        SFTemplateDirective.prototype.ngOnInit = function () {
            this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
        };
        return SFTemplateDirective;
    }());
    SFTemplateDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[sf-template]',
                },] }
    ];
    /** @nocollapse */
    SFTemplateDirective.ctorParameters = function () { return [
        { type: core.TemplateRef },
        { type: SFComponent }
    ]; };
    SFTemplateDirective.propDecorators = {
        path: [{ type: core.Input, args: ['sf-template',] }]
    };
    if (false) {
        /** @type {?} */
        SFTemplateDirective.prototype.path;
        /**
         * @type {?}
         * @private
         */
        SFTemplateDirective.prototype.templateRef;
        /**
         * @type {?}
         * @private
         */
        SFTemplateDirective.prototype.table;
    }

    /**
     * @abstract
     * @template T, UIT
     */
    var Widget = /** @class */ (function () {
        /**
         * @param {?} cd
         * @param {?} injector
         * @param {?=} sfItemComp
         * @param {?=} sfComp
         */
        function Widget(cd, injector, sfItemComp, sfComp) {
            this.cd = cd;
            this.injector = injector;
            this.sfItemComp = sfItemComp;
            this.sfComp = sfComp;
            this.showError = false;
            this.id = '';
            this.firstVisual = false;
        }
        Object.defineProperty(Widget.prototype, "cls", {
            /**
             * @return {?}
             */
            get: function () {
                return this.ui.class || '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "disabled", {
            /**
             * @return {?}
             */
            get: function () {
                if (this.schema.readOnly === true || ( /** @type {?} */(this.sfComp)).disabled) {
                    return true;
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "l", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.formProperty.root.widget.sfComp)).locale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "oh", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.ui.optionalHelp));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "dom", {
            /**
             * @return {?}
             */
            get: function () {
                return this.injector.get(platformBrowser.DomSanitizer);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "cleanValue", {
            /**
             * @return {?}
             */
            get: function () {
                var _a;
                return ( /** @type {?} */((_a = this.sfComp) === null || _a === void 0 ? void 0 : _a.cleanValue));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        Widget.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil(( /** @type {?} */(this.sfItemComp)).unsubscribe$)).subscribe(( /**
             * @param {?} errors
             * @return {?}
             */function (errors) {
                if (errors == null)
                    return;
                di(_this.ui, 'errorsChanges', _this.formProperty.path, errors);
                // 不显示首次校验视觉
                if (_this.firstVisual) {
                    _this.showError = errors.length > 0;
                    _this.error = _this.showError ? (( /** @type {?} */(errors[0].message))) : '';
                    _this.cd.detectChanges();
                }
                _this.firstVisual = true;
            }));
            this.afterViewInit();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        Widget.prototype.setValue = function (value) {
            this.formProperty.setValue(value, false);
            di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
        };
        Object.defineProperty(Widget.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () {
                return this.formProperty.value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?=} onlySelf
         * @return {?}
         */
        Widget.prototype.detectChanges = function (onlySelf) {
            if (onlySelf === void 0) { onlySelf = false; }
            if (onlySelf) {
                this.cd.markForCheck();
            }
            else {
                this.formProperty.root.widget.cd.markForCheck();
            }
        };
        return Widget;
    }());
    Widget.decorators = [
        { type: core.Directive }
    ];
    /** @nocollapse */
    Widget.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, decorators: [{ type: core.Inject, args: [core.ChangeDetectorRef,] }] },
        { type: core.Injector, decorators: [{ type: core.Inject, args: [core.Injector,] }] },
        { type: SFItemComponent, decorators: [{ type: core.Inject, args: [SFItemComponent,] }] },
        { type: SFComponent, decorators: [{ type: core.Inject, args: [SFComponent,] }] }
    ]; };
    Widget.propDecorators = {
        cls: [{ type: core.HostBinding, args: ['class',] }]
    };
    if (false) {
        /** @type {?} */
        Widget.prototype.formProperty;
        /** @type {?} */
        Widget.prototype.error;
        /** @type {?} */
        Widget.prototype.showError;
        /** @type {?} */
        Widget.prototype.id;
        /** @type {?} */
        Widget.prototype.schema;
        /** @type {?} */
        Widget.prototype.ui;
        /** @type {?} */
        Widget.prototype.firstVisual;
        /** @type {?} */
        Widget.prototype.cd;
        /** @type {?} */
        Widget.prototype.injector;
        /** @type {?} */
        Widget.prototype.sfItemComp;
        /** @type {?} */
        Widget.prototype.sfComp;
        /**
         * @abstract
         * @param {?} value
         * @return {?}
         */
        Widget.prototype.reset = function (value) { };
        /**
         * @abstract
         * @return {?}
         */
        Widget.prototype.afterViewInit = function () { };
    }
    var ControlWidget = /** @class */ (function (_super) {
        __extends(ControlWidget, _super);
        function ControlWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ControlWidget.prototype.reset = function (_value) { };
        /**
         * @return {?}
         */
        ControlWidget.prototype.afterViewInit = function () { };
        return ControlWidget;
    }(Widget));
    ControlWidget.decorators = [
        { type: core.Directive }
    ];
    /**
     * @template UIT
     */
    var ControlUIWidget = /** @class */ (function (_super) {
        __extends(ControlUIWidget, _super);
        function ControlUIWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ControlUIWidget.prototype.reset = function (_value) { };
        /**
         * @return {?}
         */
        ControlUIWidget.prototype.afterViewInit = function () { };
        return ControlUIWidget;
    }(Widget));
    ControlUIWidget.decorators = [
        { type: core.Directive }
    ];
    var ArrayLayoutWidget = /** @class */ (function (_super) {
        __extends(ArrayLayoutWidget, _super);
        function ArrayLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ArrayLayoutWidget.prototype.reset = function (_value) { };
        /**
         * @return {?}
         */
        ArrayLayoutWidget.prototype.afterViewInit = function () { };
        /**
         * @return {?}
         */
        ArrayLayoutWidget.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil(( /** @type {?} */(this.sfItemComp)).unsubscribe$)).subscribe(( /**
             * @return {?}
             */function () { return _this.cd.detectChanges(); }));
        };
        return ArrayLayoutWidget;
    }(Widget));
    ArrayLayoutWidget.decorators = [
        { type: core.Directive }
    ];
    var ObjectLayoutWidget = /** @class */ (function (_super) {
        __extends(ObjectLayoutWidget, _super);
        function ObjectLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ObjectLayoutWidget.prototype.reset = function (_value) { };
        /**
         * @return {?}
         */
        ObjectLayoutWidget.prototype.afterViewInit = function () { };
        /**
         * @return {?}
         */
        ObjectLayoutWidget.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil(( /** @type {?} */(this.sfItemComp)).unsubscribe$)).subscribe(( /**
             * @return {?}
             */function () { return _this.cd.detectChanges(); }));
        };
        return ObjectLayoutWidget;
    }(Widget));
    ObjectLayoutWidget.decorators = [
        { type: core.Directive }
    ];

    var ArrayWidget = /** @class */ (function (_super) {
        __extends(ArrayWidget, _super);
        function ArrayWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.arraySpan = 8;
            return _this;
        }
        Object.defineProperty(ArrayWidget.prototype, "addDisabled", {
            /**
             * @return {?}
             */
            get: function () {
                return (this.disabled || (this.schema.maxItems != null && (( /** @type {?} */(this.formProperty.properties))).length >= ( /** @type {?} */(this.schema.maxItems))));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArrayWidget.prototype, "showRemove", {
            /**
             * @return {?}
             */
            get: function () {
                return !this.disabled && !!this.removeTitle;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ArrayWidget.prototype.ngOnInit = function () {
            var _a = this.ui, grid = _a.grid, addTitle = _a.addTitle, addType = _a.addType, removable = _a.removable, removeTitle = _a.removeTitle;
            if (grid && grid.arraySpan) {
                this.arraySpan = grid.arraySpan;
            }
            this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
            this.addType = addType || 'dashed';
            this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
        };
        /**
         * @return {?}
         */
        ArrayWidget.prototype.addItem = function () {
            /** @type {?} */
            var property = this.formProperty.add({});
            if (this.ui.add) {
                this.ui.add(property);
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayWidget.prototype.removeItem = function (index) {
            this.formProperty.remove(index);
            if (this.ui.remove) {
                this.ui.remove(index);
            }
        };
        return ArrayWidget;
    }(ArrayLayoutWidget));
    ArrayWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-array',
                    template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\" nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <div nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf__array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                    host: { '[class.sf__array]': 'true' },
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        ArrayWidget.prototype.addTitle;
        /** @type {?} */
        ArrayWidget.prototype.addType;
        /** @type {?} */
        ArrayWidget.prototype.removeTitle;
        /** @type {?} */
        ArrayWidget.prototype.arraySpan;
    }

    var AutoCompleteWidget = /** @class */ (function (_super) {
        __extends(AutoCompleteWidget, _super);
        function AutoCompleteWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.i = {};
            _this.typing = '';
            _this.isAsync = false;
            _this.fixData = [];
            return _this;
        }
        /**
         * @param {?} item
         * @return {?}
         */
        AutoCompleteWidget.prototype.updateValue = function (item) {
            this.typing = ( /** @type {?} */(item.nzLabel));
            /** @type {?} */
            var data = item.nzValue;
            this.setValue(data.value);
            if (this.ui.change) {
                this.ui.change(item, data);
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        AutoCompleteWidget.prototype._setValue = function (item) {
            /** @type {?} */
            var val = item.toString();
            if (typeof item !== 'string') {
                val = item.value;
            }
            this.setValue(val);
        };
        /**
         * @return {?}
         */
        AutoCompleteWidget.prototype.afterViewInit = function () {
            var _this = this;
            var _a = this.ui, backfill = _a.backfill, defaultActiveFirstOption = _a.defaultActiveFirstOption, nzWidth = _a.nzWidth, filterOption = _a.filterOption, asyncData = _a.asyncData;
            this.i = {
                backfill: toBool(backfill, false),
                defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
                width: nzWidth || undefined,
            };
            /** @type {?} */
            var filterOptionValue = filterOption == null ? true : filterOption;
            if (typeof filterOptionValue === 'boolean') {
                filterOptionValue = ( /**
                 * @param {?} input
                 * @param {?} option
                 * @return {?}
                 */function (input, option) { return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1; });
            }
            this.filterOption = filterOptionValue;
            this.isAsync = !!asyncData;
            /** @type {?} */
            var orgTime = +(this.ui.debounceTime || 0);
            /** @type {?} */
            var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
            this.list = ( /** @type {?} */(this.ngModel.valueChanges)).pipe(operators.debounceTime(time), operators.startWith(''), operators.mergeMap(( /**
             * @param {?} input
             * @return {?}
             */function (/**
             * @param {?} input
             * @return {?}
             */ input) { return (_this.isAsync ? ( /** @type {?} */(asyncData))(input) : _this.filterData(input)); })), operators.map(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) { return getEnum(res, null, ( /** @type {?} */(_this.schema.readOnly))); })));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AutoCompleteWidget.prototype.reset = function (value) {
            this.typing = this.value;
            if (this.isAsync)
                return;
            switch (this.ui.type) {
                case 'email':
                    this.fixData = getCopyEnum(( /** @type {?} */(this.schema.enum)) || this.formProperty.options.uiEmailSuffixes, null, ( /** @type {?} */(this.schema.readOnly)));
                    break;
                default:
                    this.fixData = getCopyEnum(( /** @type {?} */(this.schema.enum)), value, ( /** @type {?} */(this.schema.readOnly)));
                    break;
            }
        };
        /**
         * @private
         * @param {?} input
         * @return {?}
         */
        AutoCompleteWidget.prototype.filterData = function (input) {
            var _this = this;
            switch (this.ui.type) {
                case 'email':
                    return this.addEmailSuffix(input);
                default:
                    return rxjs.of(this.fixData.filter(( /**
                     * @param {?} option
                     * @return {?}
                     */function (/**
                     * @param {?} option
                     * @return {?}
                     */ option) { return _this.filterOption(input, option); })));
            }
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AutoCompleteWidget.prototype.addEmailSuffix = function (value) {
            return rxjs.of(!value || ~value.indexOf('@') ? [] : this.fixData.map(( /**
             * @param {?} domain
             * @return {?}
             */function (/**
             * @param {?} domain
             * @return {?}
             */ domain) { return value + "@" + domain.label; })));
        };
        return AutoCompleteWidget;
    }(ControlUIWidget));
    AutoCompleteWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-autocomplete',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    AutoCompleteWidget.propDecorators = {
        ngModel: [{ type: core.ViewChild, args: [forms.NgModel, { static: false },] }]
    };
    if (false) {
        /** @type {?} */
        AutoCompleteWidget.prototype.i;
        /** @type {?} */
        AutoCompleteWidget.prototype.list;
        /** @type {?} */
        AutoCompleteWidget.prototype.typing;
        /**
         * @type {?}
         * @private
         */
        AutoCompleteWidget.prototype.ngModel;
        /**
         * @type {?}
         * @private
         */
        AutoCompleteWidget.prototype.filterOption;
        /**
         * @type {?}
         * @private
         */
        AutoCompleteWidget.prototype.isAsync;
        /**
         * @type {?}
         * @private
         */
        AutoCompleteWidget.prototype.fixData;
    }

    var BooleanWidget = /** @class */ (function (_super) {
        __extends(BooleanWidget, _super);
        function BooleanWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BooleanWidget;
    }(ControlWidget));
    BooleanWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-boolean',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzCheckedChildren]=\"ui.checkedChildren\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren\"\n  >\n  </nz-switch>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];

    var CascaderWidget = /** @class */ (function (_super) {
        __extends(CascaderWidget, _super);
        function CascaderWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            return _this;
        }
        /**
         * @return {?}
         */
        CascaderWidget.prototype.ngOnInit = function () {
            var _this = this;
            var _a = this.ui, clearText = _a.clearText, showArrow = _a.showArrow, showInput = _a.showInput, triggerAction = _a.triggerAction, asyncData = _a.asyncData;
            this.clearText = clearText || '清除';
            this.showArrow = toBool(showArrow, true);
            this.showInput = toBool(showInput, true);
            this.triggerAction = triggerAction || ['click'];
            if (!!asyncData) {
                this.loadData = ( /**
                 * @param {?} node
                 * @param {?} index
                 * @return {?}
                 */function (node, index) { return asyncData(node, index, _this).then(( /**
                 * @return {?}
                 */function () { return _this.detectChanges(); })); });
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CascaderWidget.prototype.reset = function (value) {
            var _this = this;
            getData(this.schema, {}, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} status
         * @return {?}
         */
        CascaderWidget.prototype._visibleChange = function (status) {
            if (this.ui.visibleChange)
                this.ui.visibleChange(status);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CascaderWidget.prototype._change = function (value) {
            this.setValue(value);
            if (this.ui.change) {
                this.ui.change(value);
            }
        };
        /**
         * @param {?} options
         * @return {?}
         */
        CascaderWidget.prototype._selectionChange = function (options) {
            if (this.ui.selectionChange) {
                this.ui.selectionChange(options);
            }
        };
        /**
         * @return {?}
         */
        CascaderWidget.prototype._clear = function () {
            if (this.ui.clear)
                this.ui.clear();
        };
        return CascaderWidget;
    }(ControlUIWidget));
    CascaderWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-cascader',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-cascader\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_change($event)\"\n    [nzOptions]=\"data\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzAutoFocus]=\"ui.autoFocus\"\n    [nzChangeOn]=\"ui.changeOn\"\n    [nzChangeOnSelect]=\"ui.changeOnSelect\"\n    [nzColumnClassName]=\"ui.columnClassName\"\n    [nzExpandTrigger]=\"ui.expandTrigger\"\n    [nzMenuClassName]=\"ui.menuClassName\"\n    [nzMenuStyle]=\"ui.menuStyle\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n    [nzValueProperty]=\"ui.valueProperty || 'value'\"\n    [nzLoadData]=\"loadData\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzShowArrow]=\"showArrow\"\n    [nzShowInput]=\"showInput\"\n    [nzShowSearch]=\"ui.showSearch\"\n    (nzClear)=\"_clear()\"\n    (nzVisibleChange)=\"_visibleChange($event)\"\n    (nzSelectionChange)=\"_selectionChange($event)\"\n  >\n  </nz-cascader>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        CascaderWidget.prototype.clearText;
        /** @type {?} */
        CascaderWidget.prototype.showArrow;
        /** @type {?} */
        CascaderWidget.prototype.showInput;
        /** @type {?} */
        CascaderWidget.prototype.triggerAction;
        /** @type {?} */
        CascaderWidget.prototype.data;
        /** @type {?} */
        CascaderWidget.prototype.loadData;
    }

    var CheckboxWidget = /** @class */ (function (_super) {
        __extends(CheckboxWidget, _super);
        function CheckboxWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            _this.allChecked = false;
            _this.indeterminate = false;
            _this.labelTitle = "";
            _this.inited = false;
            return _this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CheckboxWidget.prototype.reset = function (value) {
            var _this = this;
            this.inited = false;
            getData(this.schema, this.ui, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list;
                _this.allChecked = false;
                _this.indeterminate = false;
                _this.labelTitle = list.length === 0 ? '' : (( /** @type {?} */(_this.schema.title)));
                var span = _this.ui.span;
                _this.grid_span = span && span > 0 ? span : 0;
                _this.updateAllChecked();
                _this.inited = true;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CheckboxWidget.prototype._setValue = function (value) {
            this.setValue(value);
            this.detectChanges();
            this.notifyChange(value);
        };
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.notifySet = function () {
            /** @type {?} */
            var checkList = this.data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.checked; }));
            this.updateAllChecked().setValue(checkList.map(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return item.value; })));
            this.notifyChange(checkList);
        };
        /**
         * @param {?} values
         * @return {?}
         */
        CheckboxWidget.prototype.groupInGridChange = function (values) {
            this.data.forEach(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return (item.checked = values.indexOf(item.value) !== -1); }));
            this.notifySet();
        };
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.onAllChecked = function () {
            var _this = this;
            this.data.forEach(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return (item.checked = _this.allChecked); }));
            this.notifySet();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        CheckboxWidget.prototype.updateAllChecked = function () {
            if (( /** @type {?} */(this)).data.every(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return item.checked !== true; }))) {
                ( /** @type {?} */(this)).allChecked = false;
                ( /** @type {?} */(this)).indeterminate = false;
            }
            else if (( /** @type {?} */(this)).data.every(( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) { return item.checked === true; }))) {
                ( /** @type {?} */(this)).allChecked = true;
                ( /** @type {?} */(this)).indeterminate = false;
            }
            else {
                ( /** @type {?} */(this)).indeterminate = true;
            }
            ( /** @type {?} */(this)).detectChanges();
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @param {?} res
         * @return {?}
         */
        CheckboxWidget.prototype.notifyChange = function (res) {
            if (this.ui.change)
                this.ui.change(res);
        };
        return CheckboxWidget;
    }(ControlUIWidget));
    CheckboxWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-checkbox',
                    template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n    >{{ ui.checkAllText || l.checkAllText }}</label\n  >\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        CheckboxWidget.prototype.data;
        /** @type {?} */
        CheckboxWidget.prototype.allChecked;
        /** @type {?} */
        CheckboxWidget.prototype.indeterminate;
        /** @type {?} */
        CheckboxWidget.prototype.grid_span;
        /** @type {?} */
        CheckboxWidget.prototype.labelTitle;
        /** @type {?} */
        CheckboxWidget.prototype.inited;
    }

    var CustomWidget = /** @class */ (function (_super) {
        __extends(CustomWidget, _super);
        function CustomWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CustomWidget;
    }(ControlUIWidget));
    CustomWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-custom',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <ng-template\n        [ngTemplateOutlet]=\"$any(ui)._render\"\n        [ngTemplateOutletContext]=\"{$implicit: this, schema: schema, ui: ui }\"\n      ></ng-template>\n    </sf-item-wrap>\n  ",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];

    var DateWidget = /** @class */ (function (_super) {
        __extends(DateWidget, _super);
        function DateWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.flatRange = false;
            _this.displayValue = null;
            return _this;
        }
        /**
         * @return {?}
         */
        DateWidget.prototype.ngOnInit = function () {
            var _a = this.ui, mode = _a.mode, end = _a.end, displayFormat = _a.displayFormat, allowClear = _a.allowClear, showToday = _a.showToday;
            this.mode = mode || 'date';
            this.flatRange = end != null;
            // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
            this.startFormat = ( /** @type {?} */(this.ui._format));
            if (this.flatRange) {
                this.mode = 'range';
                /** @type {?} */
                var endUi = ( /** @type {?} */(this.endProperty.ui));
                this.endFormat = endUi.format ? endUi._format : this.startFormat;
            }
            if (!displayFormat) {
                switch (this.mode) {
                    case 'year':
                        this.displayFormat = "yyyy";
                        break;
                    case 'month':
                        this.displayFormat = "yyyy-MM";
                        break;
                    case 'week':
                        this.displayFormat = "yyyy-ww";
                        break;
                }
            }
            else {
                this.displayFormat = displayFormat;
            }
            this.i = {
                allowClear: toBool(allowClear, true),
                // nz-date-picker
                showToday: toBool(showToday, true),
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.reset = function (value) {
            var _this = this;
            value = util.toDate(value, { formatString: this.startFormat, defaultValue: null });
            if (this.flatRange) {
                /** @type {?} */
                var endValue = util.toDate(( /** @type {?} */(this.endProperty.formData)), {
                    formatString: this.endFormat || this.startFormat,
                    defaultValue: null,
                });
                this.displayValue = value == null || endValue == null ? [] : [value, endValue];
            }
            else {
                this.displayValue = value;
            }
            this.detectChanges();
            // TODO: Need to wait for the rendering to complete, otherwise it will be overwritten of end widget
            if (this.displayValue) {
                setTimeout(( /**
                 * @return {?}
                 */function () { return _this._change(_this.displayValue, false); }));
            }
        };
        /**
         * @param {?} value
         * @param {?=} emitModelChange
         * @return {?}
         */
        DateWidget.prototype._change = function (value, emitModelChange) {
            if (emitModelChange === void 0) { emitModelChange = true; }
            if (emitModelChange && this.ui.change) {
                this.ui.change(value);
            }
            if (value == null || (Array.isArray(value) && value.length < 2)) {
                this.setValue(null);
                this.setEnd(null);
                return;
            }
            /** @type {?} */
            var res = Array.isArray(value)
                ? [format__default['default'](value[0], this.startFormat), format__default['default'](value[1], this.endFormat || this.startFormat)]
                : format__default['default'](value, this.startFormat);
            if (this.flatRange) {
                this.setValue(res[0]);
                this.setEnd(res[1]);
            }
            else {
                this.setValue(res);
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        DateWidget.prototype._openChange = function (status) {
            if (this.ui.onOpenChange)
                this.ui.onOpenChange(status);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype._ok = function (value) {
            if (this.ui.onOk)
                this.ui.onOk(value);
        };
        Object.defineProperty(DateWidget.prototype, "endProperty", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return (( /** @type {?} */(( /** @type {?} */(this.formProperty.parent)).properties)))[( /** @type {?} */(this.ui.end))];
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.setEnd = function (value) {
            if (!this.flatRange)
                return;
            this.endProperty.setValue(value, true);
            this.endProperty.updateValueAndValidity();
        };
        return DateWidget;
    }(ControlUIWidget));
    DateWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-date',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n    ></nz-year-picker>\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n    ></nz-month-picker>\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    ></nz-week-picker>\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-range-picker>\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzPopupStyle]=\"ui.popupStyle\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-date-picker>\n  </ng-container>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DateWidget.prototype.startFormat;
        /**
         * @type {?}
         * @private
         */
        DateWidget.prototype.endFormat;
        /**
         * @type {?}
         * @private
         */
        DateWidget.prototype.flatRange;
        /** @type {?} */
        DateWidget.prototype.mode;
        /** @type {?} */
        DateWidget.prototype.displayValue;
        /** @type {?} */
        DateWidget.prototype.displayFormat;
        /** @type {?} */
        DateWidget.prototype.i;
    }

    var MentionWidget = /** @class */ (function (_super) {
        __extends(MentionWidget, _super);
        function MentionWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            _this.loading = false;
            return _this;
        }
        /**
         * @return {?}
         */
        MentionWidget.prototype.ngOnInit = function () {
            var _this = this;
            var _a = this.ui, valueWith = _a.valueWith, notFoundContent = _a.notFoundContent, placement = _a.placement, prefix = _a.prefix, autosize = _a.autosize;
            this.i = {
                valueWith: valueWith || (( /**
                 * @param {?} item
                 * @return {?}
                 */function (/**
                 * @param {?} item
                 * @return {?}
                 */ item) { return item.label; })),
                notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
                placement: placement || 'bottom',
                prefix: prefix || '@',
                autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
            };
            var _b = this.schema, minimum = _b.minimum, maximum = _b.maximum;
            /** @type {?} */
            var min = typeof minimum !== 'undefined' ? minimum : -1;
            /** @type {?} */
            var max = typeof maximum !== 'undefined' ? maximum : -1;
            if (!this.ui.validator && (min !== -1 || max !== -1)) {
                this.ui.validator = ( /** @type {?} */((( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var count = _this.mentionChild.getMentions().length;
                    if (min !== -1 && count < min) {
                        return [{ keyword: 'mention', message: "\u6700\u5C11\u63D0\u53CA " + min + " \u6B21" }];
                    }
                    if (max !== -1 && count > max) {
                        return [{ keyword: 'mention', message: "\u6700\u591A\u63D0\u53CA " + max + " \u6B21" }];
                    }
                    return null;
                }))));
            }
        };
        /**
         * @param {?} _value
         * @return {?}
         */
        MentionWidget.prototype.reset = function (_value) {
            var _this = this;
            getData(this.schema, this.ui, null).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} options
         * @return {?}
         */
        MentionWidget.prototype._select = function (options) {
            if (this.ui.select)
                this.ui.select(options);
        };
        /**
         * @param {?} option
         * @return {?}
         */
        MentionWidget.prototype._search = function (option) {
            var _this = this;
            if (typeof this.ui.loadData !== 'function')
                return;
            this.loading = true;
            this.ui
                .loadData(option)
                .pipe(operators.tap(( /**
         * @return {?}
         */function () { return (_this.loading = false); })), operators.map(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) { return getEnum(res, null, ( /** @type {?} */(_this.schema.readOnly))); })))
                .subscribe(( /**
         * @param {?} res
         * @return {?}
         */function (/**
         * @param {?} res
         * @return {?}
         */ res) {
                _this.data = res;
                _this.detectChanges(true);
            }));
        };
        return MentionWidget;
    }(ControlUIWidget));
    MentionWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-mention',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-mention\n    #mentions\n    [nzSuggestions]=\"data\"\n    [nzValueWith]=\"i.valueWith\"\n    [nzLoading]=\"loading\"\n    [nzNotFoundContent]=\"i.notFoundContent\"\n    [nzPlacement]=\"i.placement\"\n    [nzPrefix]=\"i.prefix\"\n    (nzOnSelect)=\"_select($event)\"\n    (nzOnSearchChange)=\"_search($event)\"\n  >\n    <input\n      *ngIf=\"ui.inputStyle !== 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      autocomplete=\"off\"\n    />\n    <textarea\n      *ngIf=\"ui.inputStyle === 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"i.autosize\"\n    >\n    </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    MentionWidget.propDecorators = {
        mentionChild: [{ type: core.ViewChild, args: ['mentions', { static: true },] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MentionWidget.prototype.mentionChild;
        /** @type {?} */
        MentionWidget.prototype.data;
        /** @type {?} */
        MentionWidget.prototype.i;
        /** @type {?} */
        MentionWidget.prototype.loading;
    }

    var NumberWidget = /** @class */ (function (_super) {
        __extends(NumberWidget, _super);
        function NumberWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.formatter = ( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) { return value; });
            _this.parser = ( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) { return value; });
            return _this;
        }
        /**
         * @return {?}
         */
        NumberWidget.prototype.ngOnInit = function () {
            var _a = this.schema, minimum = _a.minimum, exclusiveMinimum = _a.exclusiveMinimum, maximum = _a.maximum, exclusiveMaximum = _a.exclusiveMaximum, multipleOf = _a.multipleOf, type = _a.type;
            if (typeof minimum !== 'undefined') {
                this.min = exclusiveMinimum ? minimum + 1 : minimum;
            }
            if (typeof maximum !== 'undefined') {
                this.max = exclusiveMaximum ? maximum - 1 : maximum;
            }
            this.step = multipleOf || 1;
            if (type === 'integer') {
                this.min = Math.trunc(this.min);
                this.max = Math.trunc(this.max);
                this.step = Math.trunc(this.step);
            }
            /** @type {?} */
            var ui = this.ui;
            if (ui.prefix != null) {
                ui.formatter = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (/**
                 * @param {?} value
                 * @return {?}
                 */ value) { return (value == null ? '' : ui.prefix + " " + value); });
                ui.parser = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (/**
                 * @param {?} value
                 * @return {?}
                 */ value) { return value.replace(ui.prefix + " ", ''); });
            }
            if (ui.unit != null) {
                ui.formatter = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (/**
                 * @param {?} value
                 * @return {?}
                 */ value) { return (value == null ? '' : value + " " + ui.unit); });
                ui.parser = ( /**
                 * @param {?} value
                 * @return {?}
                 */function (/**
                 * @param {?} value
                 * @return {?}
                 */ value) { return value.replace(" " + ui.unit, ''); });
            }
            if (ui.formatter)
                this.formatter = ui.formatter;
            if (ui.parser)
                this.parser = ui.parser;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        NumberWidget.prototype._setValue = function (val) {
            this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
        };
        return NumberWidget;
    }(ControlUIWidget));
    NumberWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-number',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        NumberWidget.prototype.min;
        /** @type {?} */
        NumberWidget.prototype.max;
        /** @type {?} */
        NumberWidget.prototype.step;
        /** @type {?} */
        NumberWidget.prototype.formatter;
        /** @type {?} */
        NumberWidget.prototype.parser;
    }

    var ObjectWidget = /** @class */ (function (_super) {
        __extends(ObjectWidget, _super);
        function ObjectWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.type = 'default';
            _this.list = [];
            _this.showExpand = true;
            _this.expand = true;
            return _this;
        }
        /**
         * @return {?}
         */
        ObjectWidget.prototype.ngOnInit = function () {
            var e_1, _a;
            var _b = this, formProperty = _b.formProperty, ui = _b.ui;
            var grid = ui.grid, showTitle = ui.showTitle, type = ui.type;
            this.showExpand = toBool(ui.showExpand, true);
            this.expand = toBool(ui.expand, true);
            this.type = type !== null && type !== void 0 ? type : 'default';
            if (this.type === 'card' || (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
                this.title = ( /** @type {?} */(this.schema.title));
            }
            this.grid = ( /** @type {?} */(grid));
            /** @type {?} */
            var list = [];
            try {
                for (var _c = __values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
                    /** @type {?} */
                    var property = ( /** @type {?} */((( /** @type {?} */(formProperty.properties)))[key]));
                    /** @type {?} */
                    var item = {
                        property: property,
                        grid: property.ui.grid || grid || {},
                        spanLabelFixed: property.ui.spanLabelFixed,
                        show: property.ui.hidden === false,
                    };
                    list.push(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.list = list;
        };
        /**
         * @return {?}
         */
        ObjectWidget.prototype.changeExpand = function () {
            if (!this.showExpand) {
                return;
            }
            this.expand = !this.expand;
            this.detectChanges(true);
        };
        return ObjectWidget;
    }(ObjectLayoutWidget));
    ObjectWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-object',
                    template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{title}}\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        ObjectWidget.prototype.grid;
        /** @type {?} */
        ObjectWidget.prototype.type;
        /** @type {?} */
        ObjectWidget.prototype.list;
        /** @type {?} */
        ObjectWidget.prototype.title;
        /** @type {?} */
        ObjectWidget.prototype.showExpand;
        /** @type {?} */
        ObjectWidget.prototype.expand;
    }

    var RadioWidget = /** @class */ (function (_super) {
        __extends(RadioWidget, _super);
        function RadioWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            return _this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        RadioWidget.prototype.reset = function (value) {
            var _this = this;
            this.styleType = (this.ui.styleType || 'default') === 'default';
            getData(this.schema, this.ui, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list.map(( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) {
                    i.label = _this.dom.bypassSecurityTrustHtml(i.label);
                    return i;
                }));
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        RadioWidget.prototype._setValue = function (value) {
            this.setValue(value);
            if (this.ui.change)
                this.ui.change(value);
        };
        return RadioWidget;
    }(ControlUIWidget));
    RadioWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-radio',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group [nzSize]=\"ui.size\" [nzName]=\"id\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\" [nzButtonStyle]=\"ui.buttonStyle || 'outline'\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\" nz-radio-button [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        RadioWidget.prototype.data;
        /** @type {?} */
        RadioWidget.prototype.styleType;
    }

    var RateWidget = /** @class */ (function (_super) {
        __extends(RateWidget, _super);
        function RateWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.hasText = false;
            return _this;
        }
        Object.defineProperty(RateWidget.prototype, "text", {
            /**
             * @return {?}
             */
            get: function () {
                return (( /** @type {?} */(this.ui.text))).replace('{{value}}', this.formProperty.value);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        RateWidget.prototype.ngOnInit = function () {
            var _a = this, schema = _a.schema, ui = _a.ui;
            this.count = schema.maximum || 5;
            this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
            this.allowClear = toBool(ui.allowClear, true);
            this.autoFocus = toBool(ui.autoFocus, false);
            this.hasText = !!ui.text;
        };
        return RateWidget;
    }(ControlUIWidget));
    RateWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-rate',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-rate\n    [nzDisabled]=\"disabled\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzAllowClear]=\"allowClear\"\n    [nzAllowHalf]=\"allowHalf\"\n    [nzTooltips]=\"ui.tooltips || []\"\n    [nzAutoFocus]=\"autoFocus\"\n    [nzCount]=\"count\"\n  ></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        RateWidget.prototype.count;
        /** @type {?} */
        RateWidget.prototype.allowHalf;
        /** @type {?} */
        RateWidget.prototype.allowClear;
        /** @type {?} */
        RateWidget.prototype.autoFocus;
        /** @type {?} */
        RateWidget.prototype.hasText;
    }

    var SelectWidget = /** @class */ (function (_super) {
        __extends(SelectWidget, _super);
        function SelectWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.search$ = new rxjs.Subject();
            _this.hasGroup = false;
            _this.isLoading = false;
            return _this;
        }
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        SelectWidget.prototype.checkGroup = function (list) {
            this.hasGroup = (list || []).filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.group === true; })).length > 0;
        };
        /**
         * @return {?}
         */
        SelectWidget.prototype.ngOnInit = function () {
            var _this = this;
            var _b = this.ui, autoClearSearchValue = _b.autoClearSearchValue, borderless = _b.borderless, autoFocus = _b.autoFocus, dropdownMatchSelectWidth = _b.dropdownMatchSelectWidth, serverSearch = _b.serverSearch, maxMultipleCount = _b.maxMultipleCount, mode = _b.mode, showSearch = _b.showSearch, tokenSeparators = _b.tokenSeparators, maxTagCount = _b.maxTagCount, compareWith = _b.compareWith, optionHeightPx = _b.optionHeightPx, optionOverflowSize = _b.optionOverflowSize;
            this.i = {
                autoClearSearchValue: toBool(autoClearSearchValue, true),
                borderless: toBool(borderless, false),
                autoFocus: toBool(autoFocus, false),
                dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
                serverSearch: toBool(serverSearch, false),
                maxMultipleCount: maxMultipleCount || Infinity,
                mode: mode || 'default',
                showSearch: toBool(showSearch, true),
                tokenSeparators: tokenSeparators || [],
                maxTagCount: maxTagCount || undefined,
                optionHeightPx: optionHeightPx || 32,
                optionOverflowSize: optionOverflowSize || 8,
                compareWith: compareWith || (( /**
                 * @param {?} o1
                 * @param {?} o2
                 * @return {?}
                 */function (o1, o2) { return o1 === o2; })),
            };
            if (this.ui.onSearch) {
                this.search$
                    .pipe(operators.takeUntil(( /** @type {?} */(this.sfItemComp)).unsubscribe$), operators.distinctUntilChanged(), operators.debounceTime(this.ui.searchDebounceTime || 300), operators.switchMap(( /**
             * @param {?} text
             * @return {?}
             */function (/**
             * @param {?} text
             * @return {?}
             */ text) { return ( /** @type {?} */(_this.ui.onSearch))(text); })), operators.catchError(( /**
                 * @return {?}
                 */function () { return []; })))
                    .subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                    _this.data = list;
                    _this.checkGroup(list);
                    _this.isLoading = false;
                    _this.detectChanges();
                }));
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectWidget.prototype.reset = function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this._value = value;
                _this.data = list;
                _this.checkGroup(list);
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} values
         * @return {?}
         */
        SelectWidget.prototype.change = function (values) {
            if (this.ui.change) {
                this.ui.change(values, this.getOrgData(values));
            }
            this.setValue(values == null ? undefined : values);
        };
        /**
         * @private
         * @param {?} values
         * @return {?}
         */
        SelectWidget.prototype.getOrgData = function (values) {
            var _this = this;
            if (!Array.isArray(values)) {
                return ( /** @type {?} */(this.data.find(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w.value === values; }))));
            }
            return values.map(( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) {
                /** @type {?} */
                var item = null;
                _this.data.forEach(( /**
                 * @param {?} list
                 * @return {?}
                 */function (/**
                 * @param {?} list
                 * @return {?}
                 */ list) {
                    var _a;
                    item = ( /** @type {?} */((_a = list.children) === null || _a === void 0 ? void 0 : _a.find(( /**
                     * @param {?} w
                     * @return {?}
                     */function (/**
                     * @param {?} w
                     * @return {?}
                     */ w) { return w.value === value; }))));
                }));
                return item;
            }));
        };
        /**
         * @param {?} status
         * @return {?}
         */
        SelectWidget.prototype.openChange = function (status) {
            if (this.ui.openChange) {
                this.ui.openChange(status);
            }
        };
        /**
         * @return {?}
         */
        SelectWidget.prototype.scrollToBottom = function () {
            if (this.ui.scrollToBottom) {
                this.ui.scrollToBottom();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectWidget.prototype.onSearch = function (value) {
            this.isLoading = true;
            this.search$.next(value);
        };
        return SelectWidget;
    }(ControlUIWidget));
    SelectWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-select',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzCustomTemplate]=\"ui.customTemplate\"\n    [nzSuffixIcon]=\"ui.suffixIcon\"\n    [nzRemoveIcon]=\"ui.removeIcon\"\n    [nzClearIcon]=\"ui.clearIcon\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder\"\n    [nzDropdownRender]=\"ui.dropdownRender\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n    [nzMode]=\"i.mode\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzTokenSeparators]=\"i.tokenSeparators\"\n    [nzMaxTagCount]=\"i.maxTagCount\"\n    [compareWith]=\"i.compareWith\"\n    [nzOptionHeightPx]=\"i.optionHeightPx\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!isLoading && !hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!isLoading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"isLoading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SelectWidget.prototype.search$;
        /** @type {?} */
        SelectWidget.prototype.i;
        /** @type {?} */
        SelectWidget.prototype.data;
        /** @type {?} */
        SelectWidget.prototype._value;
        /** @type {?} */
        SelectWidget.prototype.hasGroup;
        /** @type {?} */
        SelectWidget.prototype.isLoading;
    }

    var SliderWidget = /** @class */ (function (_super) {
        __extends(SliderWidget, _super);
        function SliderWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._formatter = ( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                var formatter = _this.ui.formatter;
                if (formatter)
                    return formatter(value);
                return value;
            });
            return _this;
        }
        /**
         * @return {?}
         */
        SliderWidget.prototype.ngOnInit = function () {
            var _a = this.schema, minimum = _a.minimum, maximum = _a.maximum, multipleOf = _a.multipleOf;
            this.min = minimum || 0;
            this.max = maximum || 100;
            this.step = multipleOf || 1;
            var _b = this.ui, marks = _b.marks, included = _b.included;
            this.marks = marks || null;
            this.included = typeof included === 'undefined' ? true : included;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SliderWidget.prototype._afterChange = function (value) {
            var afterChange = this.ui.afterChange;
            if (afterChange)
                return afterChange(value);
        };
        return SliderWidget;
    }(ControlUIWidget));
    SliderWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-slider',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        SliderWidget.prototype.min;
        /** @type {?} */
        SliderWidget.prototype.max;
        /** @type {?} */
        SliderWidget.prototype.step;
        /** @type {?} */
        SliderWidget.prototype.marks;
        /** @type {?} */
        SliderWidget.prototype.included;
        /** @type {?} */
        SliderWidget.prototype._formatter;
    }

    var StringWidget = /** @class */ (function (_super) {
        __extends(StringWidget, _super);
        function StringWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringWidget.prototype.ngOnInit = function () {
            var _this = this;
            var _a = this.ui, addOnAfter = _a.addOnAfter, addOnAfterIcon = _a.addOnAfterIcon, addOnBefore = _a.addOnBefore, addOnBeforeIcon = _a.addOnBeforeIcon, prefix = _a.prefix, prefixIcon = _a.prefixIcon, suffix = _a.suffix, suffixIcon = _a.suffixIcon, autofocus = _a.autofocus;
            this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
                ? 'addon'
                : '';
            if (autofocus === true) {
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    (( /** @type {?} */((( /** @type {?} */(_this.injector.get(core.ElementRef).nativeElement))).querySelector("#" + _this.id)))).focus();
                }), 20);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        StringWidget.prototype.reset = function (value) {
            if (!value && this.schema.format === 'color') {
                this.setValue('#000000');
            }
        };
        /**
         * @param {?} val
         * @return {?}
         */
        StringWidget.prototype.change = function (val) {
            this.setValue(val);
            if (this.ui.change)
                this.ui.change(val);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        StringWidget.prototype.focus = function (e) {
            if (this.ui.focus)
                this.ui.focus(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        StringWidget.prototype.blur = function (e) {
            if (this.ui.blur)
                this.ui.blur(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        StringWidget.prototype.enter = function (e) {
            if (this.ui.enter)
                this.ui.enter(e);
        };
        return StringWidget;
    }(ControlUIWidget));
    StringWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-string',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        StringWidget.prototype.type;
    }

    var TagWidget = /** @class */ (function (_super) {
        __extends(TagWidget, _super);
        function TagWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TagWidget.prototype.reset = function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        TagWidget.prototype.onChange = function (item) {
            item.checked = !item.checked;
            this.updateValue();
            if (this.ui.checkedChange) {
                this.ui.checkedChange(item.checked);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TagWidget.prototype._close = function (e) {
            if (this.ui.onClose)
                this.ui.onClose(e);
        };
        /**
         * @private
         * @return {?}
         */
        TagWidget.prototype.updateValue = function () {
            this.formProperty.setValue(this.data.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.checked; })).map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return i.value; })), false);
        };
        return TagWidget;
    }(ControlUIWidget));
    TagWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-tag',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #icon let-i>\n    <i nz-icon [nzType]=\"i.type\" [nzTheme]=\"i.theme\" [nzTwotoneColor]=\"i.twotoneColor\" [nzRotate]=\"i.rotate\" [nzIconfont]=\"i.iconfont\" [nzSpin]=\"i.spin\"></i>\n  </ng-template>\n  <nz-tag *ngFor=\"let i of data\" [nzMode]=\"ui.mode || 'checkable'\" [nzChecked]=\"i.checked\" (nzOnClose)=\"_close($event)\" (nzCheckedChange)=\"onChange(i)\">\n    <ng-container *ngIf=\"i.prefixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.prefixIcon }\"></ng-template>\n    </ng-container>\n    <span>{{i.label}}</span>\n    <ng-container *ngIf=\"i.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.suffixIcon }\"></ng-template>\n    </ng-container>\n  </nz-tag>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        TagWidget.prototype.data;
    }

    var TextWidget = /** @class */ (function (_super) {
        __extends(TextWidget, _super);
        function TextWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        TextWidget.prototype.ngOnInit = function () {
            this.ui._required = false;
        };
        return TextWidget;
    }(ControlUIWidget));
    TextWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-text',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  {{ value || ui.defaultText || '-' }}\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];

    var TextareaWidget = /** @class */ (function (_super) {
        __extends(TextareaWidget, _super);
        function TextareaWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.autosize = true;
            return _this;
        }
        /**
         * @return {?}
         */
        TextareaWidget.prototype.ngOnInit = function () {
            var autosize = this.ui.autosize;
            if (autosize != null) {
                this.autosize = autosize;
            }
        };
        /**
         * @param {?} val
         * @return {?}
         */
        TextareaWidget.prototype.change = function (val) {
            this.setValue(val);
            if (this.ui.change)
                this.ui.change(val);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TextareaWidget.prototype.focus = function (e) {
            if (this.ui.focus)
                this.ui.focus(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TextareaWidget.prototype.blur = function (e) {
            if (this.ui.blur)
                this.ui.blur(e);
        };
        return TextareaWidget;
    }(ControlUIWidget));
    TextareaWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-textarea',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        TextareaWidget.prototype.autosize;
    }

    var TimeWidget = /** @class */ (function (_super) {
        __extends(TimeWidget, _super);
        function TimeWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.displayValue = null;
            return _this;
        }
        /**
         * @return {?}
         */
        TimeWidget.prototype.ngOnInit = function () {
            /** @type {?} */
            var ui = this.ui;
            this.valueFormat = ui._format;
            /** @type {?} */
            var opt = {
                displayFormat: ui.displayFormat || 'HH:mm:ss',
                allowEmpty: toBool(ui.allowEmpty, true),
                clearText: ui.clearText || '清除',
                defaultOpenValue: ui.defaultOpenValue || new Date(),
                hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
                use12Hours: toBool(ui.use12Hours, false),
                hourStep: ui.hourStep || 1,
                minuteStep: ui.nzMinuteStep || 1,
                secondStep: ui.secondStep || 1,
            };
            if (opt.use12Hours && !ui.displayFormat) {
                opt.displayFormat = "h:mm:ss a";
            }
            this.i = opt;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeWidget.prototype.reset = function (value) {
            if (value instanceof Date) {
                this.displayValue = value;
                this.detectChanges();
                return;
            }
            /** @type {?} */
            var v = value != null && value.toString().length ? new Date(value) : null;
            // trying restore full Date format
            if (v != null && v.toString() === 'Invalid Date') {
                if (value.toString().split(':').length <= 1) {
                    value += ':00';
                }
                v = new Date("1970-1-1 " + value);
            }
            this.displayValue = v;
            this.detectChanges();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TimeWidget.prototype._change = function (value) {
            if (this.ui.change) {
                this.ui.change(value);
            }
            if (value == null) {
                this.setValue(null);
                return;
            }
            if (this.ui.utcEpoch === true) {
                this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
                return;
            }
            this.setValue(format__default['default'](value, ( /** @type {?} */(this.valueFormat))));
        };
        /**
         * @param {?} status
         * @return {?}
         */
        TimeWidget.prototype._openChange = function (status) {
            if (this.ui.openChange) {
                this.ui.openChange(status);
            }
        };
        return TimeWidget;
    }(ControlUIWidget));
    TimeWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-time',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-time-picker\n    [(ngModel)]=\"displayValue\"\n    (ngModelChange)=\"_change($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzFormat]=\"i.displayFormat\"\n    [nzAllowEmpty]=\"i.allowEmpty\"\n    [nzClearText]=\"i.clearText\"\n    [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n    [nzDisabledHours]=\"ui.disabledHours\"\n    [nzDisabledMinutes]=\"ui.disabledMinutes\"\n    [nzDisabledSeconds]=\"ui.disabledSeconds\"\n    [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n    [nzUse12Hours]=\"i.use12Hours\"\n    [nzHourStep]=\"i.hourStep\"\n    [nzMinuteStep]=\"i.minuteStep\"\n    [nzSecondStep]=\"i.secondStep\"\n    [nzPopupClassName]=\"ui.popupClassName\"\n    (nzOpenChange)=\"_openChange($event)\"\n  >\n  </nz-time-picker>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TimeWidget.prototype.valueFormat;
        /** @type {?} */
        TimeWidget.prototype.displayValue;
        /** @type {?} */
        TimeWidget.prototype.i;
    }

    var TransferWidget = /** @class */ (function (_super) {
        __extends(TransferWidget, _super);
        function TransferWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.list = [];
            _this._data = [];
            _this._canMove = ( /**
             * @param {?} arg
             * @return {?}
             */function (arg) {
                return _this.ui.canMove ? _this.ui.canMove(arg) : rxjs.of(arg.list);
            });
            return _this;
        }
        /**
         * @return {?}
         */
        TransferWidget.prototype.ngOnInit = function () {
            var _a = this.ui, titles = _a.titles, operations = _a.operations, itemUnit = _a.itemUnit, itemsUnit = _a.itemsUnit;
            this.i = {
                titles: titles || ['', ''],
                operations: operations || ['', ''],
                itemUnit: itemUnit || '项',
                itemsUnit: itemsUnit || '项',
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TransferWidget.prototype.reset = function (value) {
            var _this = this;
            getData(this.schema, this.ui, null).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                /** @type {?} */
                var formData = value;
                if (!Array.isArray(formData)) {
                    formData = [formData];
                }
                list.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (~(( /** @type {?} */(formData))).indexOf(item.value)) {
                        item.direction = 'right';
                    }
                }));
                _this.list = list;
                _this._data = list.filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w.direction === 'right'; }));
                _this.notify();
                _this.detectChanges();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TransferWidget.prototype.notify = function () {
            this.formProperty.setValue(this._data.map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return i.value; })), false);
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._change = function (options) {
            var _a;
            if (options.to === 'right') {
                this._data = (_a = this._data).concat.apply(_a, __spread(options.list));
            }
            else {
                this._data = this._data.filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (w) { return options.list.indexOf(w) === -1; }));
            }
            if (this.ui.change)
                this.ui.change(options);
            this.notify();
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._searchChange = function (options) {
            if (this.ui.searchChange)
                this.ui.searchChange(options);
            this.detectChanges();
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._selectChange = function (options) {
            if (this.ui.selectChange)
                this.ui.selectChange(options);
            this.detectChanges();
        };
        return TransferWidget;
    }(ControlUIWidget));
    TransferWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-transfer',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-transfer\n    [nzDataSource]=\"list\"\n    [nzTitles]=\"i.titles\"\n    [nzOperations]=\"i.operations\"\n    [nzListStyle]=\"ui.listStyle\"\n    [nzItemUnit]=\"i.itemUnit\"\n    [nzItemsUnit]=\"i.itemsUnit\"\n    [nzShowSearch]=\"ui.showSearch\"\n    [nzFilterOption]=\"ui.filterOption\"\n    [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzCanMove]=\"_canMove\"\n    (nzChange)=\"_change($event)\"\n    (nzSearchChange)=\"_searchChange($event)\"\n    (nzSelectChange)=\"_selectChange($event)\"\n  >\n  </nz-transfer>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        TransferWidget.prototype.list;
        /** @type {?} */
        TransferWidget.prototype.i;
        /**
         * @type {?}
         * @private
         */
        TransferWidget.prototype._data;
        /** @type {?} */
        TransferWidget.prototype._canMove;
    }

    var TreeSelectWidget = /** @class */ (function (_super) {
        __extends(TreeSelectWidget, _super);
        function TreeSelectWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.data = [];
            _this.asyncData = false;
            return _this;
        }
        /**
         * @return {?}
         */
        TreeSelectWidget.prototype.ngOnInit = function () {
            var ui = this.ui;
            this.i = {
                allowClear: ui.allowClear,
                showSearch: toBool(ui.showSearch, false),
                dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
                multiple: toBool(ui.multiple, false),
                checkable: toBool(ui.checkable, false),
                showIcon: toBool(ui.showIcon, false),
                showExpand: toBool(ui.showExpand, true),
                showLine: toBool(ui.showLine, false),
                checkStrictly: toBool(ui.checkStrictly, false),
                hideUnMatched: toBool(ui.hideUnMatched, false),
                defaultExpandAll: toBool(ui.defaultExpandAll, false),
                displayWith: ui.displayWith || (( /**
                 * @param {?} node
                 * @return {?}
                 */function (node) { return node.title; })),
            };
            this.asyncData = typeof ui.expandChange === 'function';
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TreeSelectWidget.prototype.reset = function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TreeSelectWidget.prototype.change = function (value) {
            if (this.ui.change)
                this.ui.change(value);
            this.setValue(value);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TreeSelectWidget.prototype.expandChange = function (e) {
            var _this = this;
            var ui = this.ui;
            if (typeof ui.expandChange !== 'function')
                return;
            ui.expandChange(e).subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                ( /** @type {?} */(e.node)).clearChildren();
                ( /** @type {?} */(e.node)).addChildren(res);
                _this.detectChanges();
            }));
        };
        return TreeSelectWidget;
    }(ControlUIWidget));
    TreeSelectWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-tree-select',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tree-select\n    [nzAllowClear]=\"i.allowClear\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzDropdownStyle]=\"ui.dropdownStyle\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzSize]=\"ui.size\"\n    [nzExpandedKeys]=\"ui.expandedKeys\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzMaxTagCount]=\"ui.maxTagCount\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder || null\"\n    [nzTreeTemplate]=\"ui.treeTemplate || null\"\n    [nzDisabled]=\"disabled\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowIcon]=\"i.showIcon\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzMultiple]=\"i.multiple\"\n    [nzHideUnMatched]=\"i.hideUnMatched\"\n    [nzCheckable]=\"i.checkable\"\n    [nzShowExpand]=\"i.showExpand\"\n    [nzShowLine]=\"i.showLine\"\n    [nzCheckStrictly]=\"i.checkStrictly\"\n    [nzAsyncData]=\"asyncData\"\n    [nzNodes]=\"data\"\n    [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n    [nzDisplayWith]=\"i.displayWith\"\n    [ngModel]=\"value\"\n    [nzVirtualHeight]=\"ui.virtualHeight\"\n    [nzVirtualItemSize]=\"ui.virtualItemSize || 28\"\n    [nzVirtualMaxBufferPx]=\"ui.virtualMaxBufferPx || 500\"\n    [nzVirtualMinBufferPx]=\"ui.virtualMinBufferPx || 28\"\n    (ngModelChange)=\"change($event)\"\n    (nzExpandChange)=\"expandChange($event)\"\n  >\n  </nz-tree-select>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        TreeSelectWidget.prototype.i;
        /** @type {?} */
        TreeSelectWidget.prototype.data;
        /** @type {?} */
        TreeSelectWidget.prototype.asyncData;
    }

    var UploadWidget = /** @class */ (function (_super) {
        __extends(UploadWidget, _super);
        function UploadWidget() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.fileList = [];
            _this.btnType = '';
            _this.handleRemove = ( /**
             * @return {?}
             */function () {
                _this._setValue(_this.fileList);
                return true;
            });
            _this.handlePreview = ( /**
             * @param {?} file
             * @return {?}
             */function (file) {
                if (_this.ui.preview) {
                    _this.ui.preview(file);
                    return;
                }
                /** @type {?} */
                var _url = file.thumbUrl || file.url;
                if (!_url) {
                    return;
                }
                _this.injector.get(modal.NzModalService).create({
                    nzContent: "<img src=\"" + _url + "\" class=\"img-fluid\" />",
                    nzFooter: null,
                });
            });
            return _this;
        }
        /**
         * @return {?}
         */
        UploadWidget.prototype.ngOnInit = function () {
            var _a = this.ui, type = _a.type, text = _a.text, hint = _a.hint, action = _a.action, accept = _a.accept, limit = _a.limit, filter = _a.filter, fileSize = _a.fileSize, fileType = _a.fileType, listType = _a.listType, multiple = _a.multiple, name = _a.name, showUploadList = _a.showUploadList, withCredentials = _a.withCredentials, resReName = _a.resReName, urlReName = _a.urlReName, beforeUpload = _a.beforeUpload, customRequest = _a.customRequest, directory = _a.directory, openFileDialogOnClick = _a.openFileDialogOnClick, limitFileCount = _a.limitFileCount;
            /** @type {?} */
            var res = {
                type: type || 'select',
                text: text || '点击上传',
                action: action || '',
                accept: accept || '',
                directory: toBool(directory, false),
                openFileDialogOnClick: toBool(openFileDialogOnClick, true),
                limit: limit == null ? 0 : +limit,
                filter: filter == null ? [] : filter,
                size: fileSize == null ? 0 : +fileSize,
                fileType: fileType || '',
                listType: listType || 'text',
                multiple: toBool(multiple, false),
                name: name || 'file',
                showUploadList: showUploadList == null ? true : showUploadList,
                withCredentials: toBool(withCredentials, false),
                resReName: (resReName || '').split('.'),
                urlReName: (urlReName || '').split('.'),
                beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
                customRequest: typeof customRequest === 'function' ? customRequest : null,
                limitFileCount: limitFileCount || 999,
            };
            if (res.listType === 'picture-card') {
                this.btnType = 'plus';
            }
            if (res.type === 'drag') {
                res.listType = null;
                this.btnType = 'drag';
                res.text = text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
                res.hint = hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
            }
            this.i = res;
        };
        /**
         * @param {?} args
         * @return {?}
         */
        UploadWidget.prototype.change = function (args) {
            if (this.ui.change)
                this.ui.change(args);
            if (args.type !== 'success')
                return;
            this._setValue(args.fileList);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        UploadWidget.prototype.reset = function (value) {
            var _this = this;
            var fileList = this.ui.fileList;
            (fileList ? rxjs.of(fileList) : Array.isArray(value) ? rxjs.of(value) : getData(this.schema, this.ui, null)).subscribe(( /**
             * @param {?} list
             * @return {?}
             */function (/**
             * @param {?} list
             * @return {?}
             */ list) {
                _this.fileList = ( /** @type {?} */(list));
                _this.formProperty._value = _this.pureValue(list);
                _this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
                _this.detectChanges();
            }));
        };
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        UploadWidget.prototype._getValue = function (file) {
            return util.deepGet(file.response, this.i.resReName, file.response);
        };
        /**
         * @private
         * @param {?} fileList
         * @return {?}
         */
        UploadWidget.prototype.pureValue = function (fileList) {
            var _this = this;
            fileList
                .filter(( /**
         * @param {?} file
         * @return {?}
         */function (/**
         * @param {?} file
         * @return {?}
         */ file) { return !file.url; }))
                .forEach(( /**
         * @param {?} file
         * @return {?}
         */function (/**
         * @param {?} file
         * @return {?}
         */ file) {
                file.url = util.deepGet(file.response, _this.i.urlReName);
            }));
            /** @type {?} */
            var res = fileList.filter(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.status === 'done'; })).map(( /**
             * @param {?} file
             * @return {?}
             */function (/**
             * @param {?} file
             * @return {?}
             */ file) { return _this._getValue(file); }));
            return this.i.multiple === true ? res : res.pop();
        };
        /**
         * @private
         * @param {?} fileList
         * @return {?}
         */
        UploadWidget.prototype._setValue = function (fileList) {
            this.setValue(this.pureValue(fileList));
        };
        return UploadWidget;
    }(ControlUIWidget));
    UploadWidget.decorators = [
        { type: core.Component, args: [{
                    selector: 'sf-upload',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-upload\n    [nzType]=\"i.type\"\n    [(nzFileList)]=\"fileList\"\n    [nzDisabled]=\"disabled\"\n    [nzAction]=\"i.action\"\n    [nzDirectory]=\"i.directory\"\n    [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n    [nzAccept]=\"i.accept\"\n    [nzLimit]=\"i.limit\"\n    [nzFilter]=\"i.filter\"\n    [nzSize]=\"i.size\"\n    [nzFileType]=\"i.fileType\"\n    [nzHeaders]=\"ui.headers\"\n    [nzData]=\"ui.data\"\n    [nzListType]=\"i.listType\"\n    [nzMultiple]=\"i.multiple\"\n    [nzName]=\"i.name\"\n    [nzShowUploadList]=\"i.showUploadList\"\n    [nzWithCredentials]=\"i.withCredentials\"\n    [nzBeforeUpload]=\"i.beforeUpload\"\n    [nzCustomRequest]=\"i.customRequest\"\n    [nzRemove]=\"ui.remove || handleRemove\"\n    [nzPreview]=\"handlePreview\"\n    [nzPreviewFile]=\"ui.previewFile\"\n    [nzDownload]=\"ui.download\"\n    [nzTransformFile]=\"ui.transformFile\"\n    (nzChange)=\"change($event)\"\n    [nzShowButton]=\"fileList.length < i.limitFileCount\"\n  >\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\" nz-button><i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span></button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    if (false) {
        /** @type {?} */
        UploadWidget.prototype.i;
        /** @type {?} */
        UploadWidget.prototype.fileList;
        /** @type {?} */
        UploadWidget.prototype.btnType;
        /** @type {?} */
        UploadWidget.prototype.handleRemove;
        /** @type {?} */
        UploadWidget.prototype.handlePreview;
    }

    var NzWidgetRegistry = /** @class */ (function (_super) {
        __extends(NzWidgetRegistry, _super);
        function NzWidgetRegistry() {
            var _this = _super.call(this) || this;
            _this.register('object', ObjectWidget);
            _this.register('array', ArrayWidget);
            _this.register('text', TextWidget);
            _this.register('string', StringWidget);
            _this.register('number', NumberWidget);
            _this.register('integer', NumberWidget);
            _this.register('date', DateWidget);
            _this.register('time', TimeWidget);
            _this.register('radio', RadioWidget);
            _this.register('checkbox', CheckboxWidget);
            _this.register('boolean', BooleanWidget);
            _this.register('textarea', TextareaWidget);
            _this.register('select', SelectWidget);
            _this.register('tree-select', TreeSelectWidget);
            _this.register('tag', TagWidget);
            _this.register('upload', UploadWidget);
            _this.register('transfer', TransferWidget);
            _this.register('slider', SliderWidget);
            _this.register('rate', RateWidget);
            _this.register('autocomplete', AutoCompleteWidget);
            _this.register('cascader', CascaderWidget);
            _this.register('mention', MentionWidget);
            _this.register('custom', CustomWidget);
            _this.setDefault(StringWidget);
            return _this;
        }
        return NzWidgetRegistry;
    }(WidgetRegistry));

    /** @type {?} */
    var ZORROS = [
        autoComplete.NzAutocompleteModule,
        button.NzButtonModule,
        card.NzCardModule,
        cascader.NzCascaderModule,
        checkbox.NzCheckboxModule,
        datePicker.NzDatePickerModule,
        form.NzFormModule,
        grid.NzGridModule,
        icon.NzIconModule,
        input.NzInputModule,
        inputNumber.NzInputNumberModule,
        mention.NzMentionModule,
        modal.NzModalModule,
        radio.NzRadioModule,
        rate.NzRateModule,
        select.NzSelectModule,
        slider.NzSliderModule,
        _switch.NzSwitchModule,
        tag.NzTagModule,
        timePicker.NzTimePickerModule,
        tooltip.NzToolTipModule,
        transfer.NzTransferModule,
        treeSelect.NzTreeSelectModule,
        upload.NzUploadModule,
    ];
    /** @type {?} */
    var COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];
    /** @type {?} */
    var WIDGETS = [
        ObjectWidget,
        ArrayWidget,
        StringWidget,
        NumberWidget,
        DateWidget,
        TimeWidget,
        RadioWidget,
        CheckboxWidget,
        BooleanWidget,
        TextareaWidget,
        SelectWidget,
        TreeSelectWidget,
        TagWidget,
        UploadWidget,
        TransferWidget,
        SliderWidget,
        RateWidget,
        AutoCompleteWidget,
        CascaderWidget,
        MentionWidget,
        CustomWidget,
        TextWidget,
    ];
    // #endregion
    var DelonFormModule = /** @class */ (function () {
        function DelonFormModule() {
        }
        /**
         * @return {?}
         */
        DelonFormModule.forRoot = function () {
            return {
                ngModule: DelonFormModule,
                providers: [
                    {
                        provide: SchemaValidatorFactory,
                        useClass: AjvSchemaValidatorFactory,
                        deps: [util.AlainConfigService],
                    },
                    { provide: WidgetRegistry, useClass: NzWidgetRegistry },
                ],
            };
        };
        return DelonFormModule;
    }());
    DelonFormModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: __spread([common.CommonModule, forms.FormsModule, util.DelonUtilModule, theme.DelonLocaleModule], ZORROS),
                    declarations: __spread(COMPONENTS, WIDGETS),
                    entryComponents: __spread(WIDGETS),
                    exports: __spread(COMPONENTS),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ERRORSDEFAULT = {
        'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
        $ref: "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
        additionalItems: "\u4E0D\u5141\u8BB8\u8D85\u8FC7{ref}",
        additionalProperties: "\u4E0D\u5141\u8BB8\u6709\u989D\u5916\u7684\u5C5E\u6027",
        anyOf: "\u6570\u636E\u5E94\u4E3A anyOf \u6240\u6307\u5B9A\u7684\u5176\u4E2D\u4E00\u4E2A",
        dependencies: "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027{property}\u7684\u4F9D\u8D56\u5C5E\u6027{deps}",
        enum: "\u5E94\u5F53\u662F\u9884\u8BBE\u5B9A\u7684\u679A\u4E3E\u503C\u4E4B\u4E00",
        format: "\u683C\u5F0F\u4E0D\u6B63\u786E",
        // `应当匹配格式 "{format}"`,
        type: "\u7C7B\u578B\u5E94\u5F53\u662F {type}",
        required: "\u5FC5\u586B\u9879",
        maxLength: "\u81F3\u591A {limit} \u4E2A\u5B57\u7B26",
        minLength: "\u81F3\u5C11 {limit} \u4E2A\u5B57\u7B26\u4EE5\u4E0A",
        minimum: "\u5FC5\u987B {comparison}{limit}",
        formatMinimum: "\u5FC5\u987B {comparison}{limit}",
        maximum: "\u5FC5\u987B {comparison}{limit}",
        formatMaximum: "\u5FC5\u987B {comparison}{limit}",
        maxItems: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u9879",
        minItems: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u9879",
        maxProperties: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u5C5E\u6027",
        minProperties: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u5C5E\u6027",
        multipleOf: "\u5E94\u5F53\u662F {multipleOf} \u7684\u6574\u6570\u500D",
        not: "\u4E0D\u5E94\u5F53\u5339\u914D \"not\" schema",
        oneOf: "\u53EA\u80FD\u5339\u914D\u4E00\u4E2A \"oneOf\" \u4E2D\u7684 schema",
        pattern: "\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E",
        uniqueItems: "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C {j} \u9879\u4E0E\u7B2C {i} \u9879\u662F\u91CD\u590D\u7684)",
        custom: "\u683C\u5F0F\u4E0D\u6B63\u786E",
        propertyNames: "\u5C5E\u6027\u540D \"{propertyName}\" \u65E0\u6548",
        patternRequired: "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F {missingPattern}",
        switch: "\u7531\u4E8E {caseIndex} \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C",
        const: "\u5E94\u5F53\u7B49\u4E8E\u5E38\u91CF",
        contains: "\u5E94\u5F53\u5305\u542B\u4E00\u4E2A\u6709\u6548\u9879",
        formatExclusiveMaximum: "formatExclusiveMaximum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
        formatExclusiveMinimum: "formatExclusiveMinimum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
        if: "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\"",
    };
    /**
     * @record
     */
    function ErrorData() { }
    if (false) {
        /** @type {?} */
        ErrorData.prototype.keyword;
        /** @type {?|undefined} */
        ErrorData.prototype.dataPath;
        /** @type {?|undefined} */
        ErrorData.prototype.schemaPath;
        /** @type {?|undefined} */
        ErrorData.prototype.params;
        /** @type {?|undefined} */
        ErrorData.prototype.message;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function ErrorSchema() { }
    if (false) {
        /**
         * 是否实时校验，默认：`true`
         * - `true` 每一次都校验
         * - `false` 提交时校验
         * @type {?|undefined}
         */
        ErrorSchema.prototype.liveValidate;
        /**
         * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
         * @type {?|undefined}
         */
        ErrorSchema.prototype.errors;
        /**
         * 是否立即呈现错误视觉，默认：`false`
         * @type {?|undefined}
         */
        ErrorSchema.prototype.firstVisual;
        /**
         * 是否只展示错误视觉不显示错误文本，默认：`false`
         * @type {?|undefined}
         */
        ErrorSchema.prototype.onlyVisual;
        /**
         * 是否忽略某些数据类型校验 `ERRORSDEFAULT`
         * - 值始终包含 `DelonSchemaFormConfig.ingoreKeywords`
         * @type {?|undefined}
         */
        ErrorSchema.prototype.ingoreKeywords;
        /**
         * 是否强制在标签上显示 `*` 来表示必填，一般在当使用自定义校验 `validator` 可能需要必填项处理
         * @type {?|undefined}
         */
        ErrorSchema.prototype.showRequired;
        /**
         * 自定义校验
         * @type {?|undefined}
         */
        ErrorSchema.prototype.validator;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/form.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: form.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AjvSchemaValidatorFactory = AjvSchemaValidatorFactory;
    exports.ArrayLayoutWidget = ArrayLayoutWidget;
    exports.ArrayProperty = ArrayProperty;
    exports.ArrayWidget = ArrayWidget;
    exports.AtomicProperty = AtomicProperty;
    exports.AutoCompleteWidget = AutoCompleteWidget;
    exports.BooleanProperty = BooleanProperty;
    exports.BooleanWidget = BooleanWidget;
    exports.CascaderWidget = CascaderWidget;
    exports.CheckboxWidget = CheckboxWidget;
    exports.ControlUIWidget = ControlUIWidget;
    exports.ControlWidget = ControlWidget;
    exports.CustomWidget = CustomWidget;
    exports.DateWidget = DateWidget;
    exports.DelonFormModule = DelonFormModule;
    exports.ERRORSDEFAULT = ERRORSDEFAULT;
    exports.FormProperty = FormProperty;
    exports.FormPropertyFactory = FormPropertyFactory;
    exports.MentionWidget = MentionWidget;
    exports.NumberProperty = NumberProperty;
    exports.NumberWidget = NumberWidget;
    exports.NzWidgetRegistry = NzWidgetRegistry;
    exports.ObjectLayoutWidget = ObjectLayoutWidget;
    exports.ObjectProperty = ObjectProperty;
    exports.ObjectWidget = ObjectWidget;
    exports.PropertyGroup = PropertyGroup;
    exports.RadioWidget = RadioWidget;
    exports.RateWidget = RateWidget;
    exports.SFComponent = SFComponent;
    exports.SFFixedDirective = SFFixedDirective;
    exports.SFItemComponent = SFItemComponent;
    exports.SF_DEFAULT_CONFIG = SF_DEFAULT_CONFIG;
    exports.SchemaValidatorFactory = SchemaValidatorFactory;
    exports.SelectWidget = SelectWidget;
    exports.SliderWidget = SliderWidget;
    exports.StringProperty = StringProperty;
    exports.StringWidget = StringWidget;
    exports.TagWidget = TagWidget;
    exports.TextWidget = TextWidget;
    exports.TextareaWidget = TextareaWidget;
    exports.TimeWidget = TimeWidget;
    exports.TransferWidget = TransferWidget;
    exports.TreeSelectWidget = TreeSelectWidget;
    exports.UploadWidget = UploadWidget;
    exports.Widget = Widget;
    exports.WidgetFactory = WidgetFactory;
    exports.WidgetRegistry = WidgetRegistry;
    exports.di = di;
    exports.getCopyEnum = getCopyEnum;
    exports.getData = getData;
    exports.getEnum = getEnum;
    exports.isBlank = isBlank;
    exports.isDateFns = isDateFns;
    exports.mergeConfig = mergeConfig;
    exports.orderProperties = orderProperties;
    exports.resolveIfSchema = resolveIfSchema;
    exports.retrieveSchema = retrieveSchema;
    exports.toBool = toBool;
    exports.useFactory = useFactory;
    exports.ɵa = TerminatorService;
    exports.ɵb = SFItemWrapComponent;
    exports.ɵc = SFTemplateDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form.umd.js.map
