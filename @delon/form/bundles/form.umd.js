/**
 * @license ng-alain(cipchk@qq.com) v8.9.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/button'), require('ng-zorro-antd/card'), require('ng-zorro-antd/cascader'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/mention'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/rate'), require('ng-zorro-antd/select'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/transfer'), require('ng-zorro-antd/tree-select'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/i18n'), require('date-fns/format')) :
    typeof define === 'function' && define.amd ? define('@delon/form', ['exports', '@angular/core', '@angular/platform-browser', '@delon/acl', '@delon/theme', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/forms', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/button', 'ng-zorro-antd/card', 'ng-zorro-antd/cascader', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/mention', 'ng-zorro-antd/modal', 'ng-zorro-antd/radio', 'ng-zorro-antd/rate', 'ng-zorro-antd/select', 'ng-zorro-antd/slider', 'ng-zorro-antd/switch', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/transfer', 'ng-zorro-antd/tree-select', 'ng-zorro-antd/upload', 'ng-zorro-antd/i18n', 'date-fns/format'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.form = {}), global.ng.core, global.ng.platformBrowser, global.delon.acl, global.delon.theme, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.forms, global['ng-zorro-antd/auto-complete'], global['ng-zorro-antd/button'], global['ng-zorro-antd/card'], global['ng-zorro-antd/cascader'], global['ng-zorro-antd/checkbox'], global['ng-zorro-antd/date-picker'], global['ng-zorro-antd/form'], global['ng-zorro-antd/grid'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/input'], global['ng-zorro-antd/input-number'], global['ng-zorro-antd/mention'], global['ng-zorro-antd/modal'], global['ng-zorro-antd/radio'], global['ng-zorro-antd/rate'], global['ng-zorro-antd/select'], global['ng-zorro-antd/slider'], global['ng-zorro-antd/switch'], global['ng-zorro-antd/tag'], global['ng-zorro-antd/time-picker'], global['ng-zorro-antd/tooltip'], global['ng-zorro-antd/transfer'], global['ng-zorro-antd/tree-select'], global['ng-zorro-antd/upload'], global['ng-zorro-antd/i18n'], global.format));
}(this, (function (exports, core, platformBrowser, acl, theme, util, rxjs, operators, common, forms, autoComplete, button, card, cascader, checkbox, datePicker, form, grid, icon, input, inputNumber, mention, modal, radio, rate, select, slider, _switch, tag, timePicker, tooltip, transfer, treeSelect, upload, i18n, format) { 'use strict';

    format = format && format.hasOwnProperty('default') ? format['default'] : format;

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
     * Generated from: src/config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonFormConfig = /** @class */ (function () {
        function DelonFormConfig() {
            /**
             * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
             *
             * - `type` 限定 Schema 中 `type` 类型
             * - `enum` 限定应当是预设定的枚举值之一
             */
            this.ingoreKeywords = ['type', 'enum'];
            /**
             * 是否实时校验，默认：`true`
             * - `true` 每一次都校验
             * - `false` 提交时校验
             */
            this.liveValidate = true;
            /**
             * 指定表单 `autocomplete` 值，默认：`on`
             */
            this.autocomplete = null;
            /**
             * 是否立即呈现错误视觉，默认：`false`
             */
            this.firstVisual = false;
            /**
             * 是否只展示错误视觉不显示错误文本，默认：`false`
             */
            this.onlyVisual = false;
            /**
             * 自定义通用错误信息
             */
            this.errors = {};
            /**
             * 按钮风格
             */
            this.button = {
                submit_type: 'primary',
                reset_type: 'default',
            };
            /**
             * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
             */
            this.uiDateStringFormat = 'YYYY-MM-DD HH:mm:ss';
            /**
             * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
             */
            this.uiDateNumberFormat = 'x';
            /**
             * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
             */
            this.uiTimeStringFormat = 'HH:mm:ss';
            /**
             * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
             */
            this.uiTimeNumberFormat = 'x';
            /**
             * 指定 `format: 'email'` 的默认Email后缀
             */
            this.uiEmailSuffixes = ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'];
        }
        DelonFormConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DelonFormConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DelonFormConfig_Factory() { return new DelonFormConfig(); }, token: DelonFormConfig, providedIn: "root" });
        return DelonFormConfig;
    }());
    if (false) {
        /**
         * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
         *
         * - `type` 限定 Schema 中 `type` 类型
         * - `enum` 限定应当是预设定的枚举值之一
         * @type {?}
         */
        DelonFormConfig.prototype.ingoreKeywords;
        /**
         * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
         * @type {?}
         */
        DelonFormConfig.prototype.ajv;
        /**
         * 是否实时校验，默认：`true`
         * - `true` 每一次都校验
         * - `false` 提交时校验
         * @type {?}
         */
        DelonFormConfig.prototype.liveValidate;
        /**
         * 指定表单 `autocomplete` 值，默认：`on`
         * @type {?}
         */
        DelonFormConfig.prototype.autocomplete;
        /**
         * 是否立即呈现错误视觉，默认：`false`
         * @type {?}
         */
        DelonFormConfig.prototype.firstVisual;
        /**
         * 是否只展示错误视觉不显示错误文本，默认：`false`
         * @type {?}
         */
        DelonFormConfig.prototype.onlyVisual;
        /**
         * 自定义通用错误信息
         * @type {?}
         */
        DelonFormConfig.prototype.errors;
        /**
         * 默认全局布局
         * @type {?}
         */
        DelonFormConfig.prototype.ui;
        /**
         * 元素组件大小，用于 `nzSize` 值
         * @type {?}
         */
        DelonFormConfig.prototype.size;
        /**
         * 按钮风格
         * @type {?}
         */
        DelonFormConfig.prototype.button;
        /**
         * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
         * @type {?}
         */
        DelonFormConfig.prototype.uiDateStringFormat;
        /**
         * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
         * @type {?}
         */
        DelonFormConfig.prototype.uiDateNumberFormat;
        /**
         * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
         * @type {?}
         */
        DelonFormConfig.prototype.uiTimeStringFormat;
        /**
         * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
         * @type {?}
         */
        DelonFormConfig.prototype.uiTimeNumberFormat;
        /**
         * 指定 `format: 'email'` 的默认Email后缀
         * @type {?}
         */
        DelonFormConfig.prototype.uiEmailSuffixes;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/const.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SF_SEQ = '/';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FORMATMAPS = {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: 'YYYY-MM-DDTHH:mm:ssZ',
        },
        date: { widget: 'date', format: 'YYYY-MM-DD' },
        'full-date': { widget: 'date', format: 'YYYY-MM-DD' },
        time: { widget: 'time' },
        'full-time': { widget: 'time' },
        week: { widget: 'date', mode: 'week', format: 'YYYY-WW' },
        month: { widget: 'date', mode: 'month', format: 'YYYY-MM' },
        uri: { widget: 'upload' },
        email: { widget: 'autocomplete', type: 'email' },
        color: { widget: 'string', type: 'color' },
        '': { widget: 'string' },
    };
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
            var $refSchema = findSchemaDefinition((/** @type {?} */ (schema.$ref)), definitions);
            // remove $ref property
            var $ref = schema.$ref, localSchema = __rest(schema, ["$ref"]);
            return retrieveSchema(__assign({}, $refSchema, localSchema), definitions);
        }
        return schema;
    }
    /**
     * @param {?} schema
     * @param {?} ui
     * @return {?}
     */
    function resolveIf(schema, ui) {
        if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then')))
            return null;
        if (!(/** @type {?} */ (schema.if)).properties)
            throw new Error("if: does not contain 'properties'");
        /** @type {?} */
        var allKeys = Object.keys((/** @type {?} */ (schema.properties)));
        /** @type {?} */
        var ifKeys = Object.keys((/** @type {?} */ ((/** @type {?} */ (schema.if)).properties)));
        detectKey(allKeys, ifKeys);
        detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
        schema.required = (/** @type {?} */ (schema.required)).concat((/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
        /** @type {?} */
        var hasElse = schema.hasOwnProperty('else');
        if (hasElse) {
            detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
            schema.required = schema.required.concat((/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
        }
        /** @type {?} */
        var visibleIf = {};
        /** @type {?} */
        var visibleElse = {};
        ifKeys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var cond = (/** @type {?} */ ((/** @type {?} */ (schema.if)).properties))[key].enum;
            visibleIf[key] = cond;
            if (hasElse)
                visibleElse[key] = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return !(/** @type {?} */ (cond)).includes(value); });
        }));
        (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (ui["$" + key].visibleIf = visibleIf); }));
        if (hasElse)
            (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (ui["$" + key].visibleIf = visibleElse); }));
        return schema;
    }
    /**
     * @param {?} keys
     * @param {?} detectKeys
     * @return {?}
     */
    function detectKey(keys, detectKeys) {
        detectKeys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
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
        var arrayToHash = (/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) {
            return arr.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) {
                prev[curr] = true;
                return prev;
            }), {});
        });
        /** @type {?} */
        var errorPropList = (/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return "property [" + arr.join("', '") + "]"; });
        /** @type {?} */
        var propertyHash = arrayToHash(properties);
        /** @type {?} */
        var orderHash = arrayToHash(order);
        /** @type {?} */
        var extraneous = order.filter((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) { return prop !== '*' && !propertyHash[prop]; }));
        if (extraneous.length) {
            throw new Error("ui schema order list contains extraneous " + errorPropList(extraneous));
        }
        /** @type {?} */
        var rest = properties.filter((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) { return !orderHash[prop]; }));
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
            list = list.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return (/** @type {?} */ ({ label: item, value: item }));
            }));
        }
        if (formData) {
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (~formData.indexOf(item.value))
                    item.checked = true;
            }));
        }
        // fix disabled status
        if (readOnly) {
            list.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.disabled = true); }));
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
            return ui.asyncData(asyncArgs).pipe(operators.map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) { return getEnum(list, formData, (/** @type {?} */ (schema.readOnly))); })));
        }
        return rxjs.of(getCopyEnum((/** @type {?} */ (schema.enum)), formData, (/** @type {?} */ (schema.readOnly))));
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
        return data != null && (!!data.distanceInWords || !!data.formatDistance);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/form.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    FormProperty = /** @class */ (function () {
        function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
            this._options = _options;
            this._errors = null;
            this._valueChanges = new rxjs.BehaviorSubject(null);
            this._errorsChanges = new rxjs.BehaviorSubject(null);
            this._visible = true;
            this._visibilityChanges = new rxjs.BehaviorSubject(true);
            this._objErrors = {};
            this._value = null;
            this.schema = schema;
            this.ui = ui;
            this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
                ingoreKeywords: (/** @type {?} */ (this.ui.ingoreKeywords)),
                debug: (/** @type {?} */ ((/** @type {?} */ (((/** @type {?} */ (ui))))).debug)),
            });
            this.formData = formData || schema.default;
            this._parent = parent;
            if (parent) {
                this._root = parent.root;
            }
            else {
                this._root = (/** @type {?} */ (this));
            }
            this.path = path;
        }
        Object.defineProperty(FormProperty.prototype, "valueChanges", {
            get: /**
             * @return {?}
             */
            function () {
                return this._valueChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errorsChanges", {
            get: /**
             * @return {?}
             */
            function () {
                return this._errorsChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "type", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.schema.type));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "parent", {
            get: /**
             * @return {?}
             */
            function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "root", {
            get: /**
             * @return {?}
             */
            function () {
                return this._root;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errors", {
            get: /**
             * @return {?}
             */
            function () {
                return this._errors;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "visible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._visible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this._errors === null || this._errors.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "options", {
            get: /**
             * @return {?}
             */
            function () {
                return this._options;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 更新值且校验数据
         *
         * @param [onlySelf=false] 是否包含上级字段
         * @param [emitValueEvent=true] 是否触发值变更通知
         */
        /**
         * 更新值且校验数据
         *
         * @param {?=} onlySelf
         * @param {?=} emitValueEvent
         * @param {?=} emitValidator
         * @return {?}
         */
        FormProperty.prototype.updateValueAndValidity = /**
         * 更新值且校验数据
         *
         * @param {?=} onlySelf
         * @param {?=} emitValueEvent
         * @param {?=} emitValidator
         * @return {?}
         */
        function (onlySelf, emitValueEvent, emitValidator) {
            if (onlySelf === void 0) { onlySelf = false; }
            if (emitValueEvent === void 0) { emitValueEvent = true; }
            if (emitValidator === void 0) { emitValidator = true; }
            this._updateValue();
            if (emitValueEvent) {
                this.valueChanges.next(this.value);
            }
            // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
            if (emitValidator && this.ui.liveValidate === true) {
                this._runValidation();
            }
            if (this.parent && !onlySelf) {
                this.parent.updateValueAndValidity(onlySelf, emitValueEvent, false);
            }
        };
        /** 根据路径搜索表单属性 */
        /**
         * 根据路径搜索表单属性
         * @param {?} path
         * @return {?}
         */
        FormProperty.prototype.searchProperty = /**
         * 根据路径搜索表单属性
         * @param {?} path
         * @return {?}
         */
        function (path) {
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
            return result;
        };
        /** 查找根表单属性 */
        /**
         * 查找根表单属性
         * @return {?}
         */
        FormProperty.prototype.findRoot = /**
         * 查找根表单属性
         * @return {?}
         */
        function () {
            /** @type {?} */
            var property = this;
            while (property.parent !== null) {
                property = property.parent;
            }
            return (/** @type {?} */ (property));
        };
        // #region process errors
        // #region process errors
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        FormProperty.prototype.isEmptyData = 
        // #region process errors
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isBlank(value))
                return true;
            switch (this.type) {
                case 'string':
                    return ('' + value).length === 0;
            }
            return false;
        };
        /**
         * @internal
         */
        /**
         * \@internal
         * @return {?}
         */
        FormProperty.prototype._runValidation = /**
         * \@internal
         * @return {?}
         */
        function () {
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
            var customValidator = ((/** @type {?} */ (this.ui))).validator;
            if (typeof customValidator === 'function') {
                /** @type {?} */
                var customErrors = customValidator(this.value, this, this.findRoot());
                if (customErrors instanceof rxjs.Observable) {
                    customErrors.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
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
        FormProperty.prototype.setCustomErrors = /**
         * @private
         * @param {?} errors
         * @param {?} list
         * @return {?}
         */
        function (errors, list) {
            // fix error format
            /** @type {?} */
            var hasCustomError = list != null && list.length > 0;
            if (hasCustomError) {
                list.forEach((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
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
        FormProperty.prototype.mergeErrors = /**
         * @private
         * @param {?} errors
         * @param {?} newErrors
         * @return {?}
         */
        function (errors, newErrors) {
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
        FormProperty.prototype.setErrors = /**
         * @protected
         * @param {?} errors
         * @param {?=} emitFormat
         * @return {?}
         */
        function (errors, emitFormat) {
            var _this = this;
            if (emitFormat === void 0) { emitFormat = true; }
            if (emitFormat && errors && !this.ui.onlyVisual) {
                /** @type {?} */
                var l_1 = (this.widget && this.widget.l.error) || {};
                errors = errors.map((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    /** @type {?} */
                    var message = err._custom === true && err.message
                        ? err.message
                        : (_this.ui.errors || {})[err.keyword] || (/** @type {?} */ (_this._options.errors))[err.keyword] || l_1[err.keyword] || "";
                    if (message && typeof message === 'function') {
                        message = (/** @type {?} */ (message(err)));
                    }
                    if (message) {
                        if (~((/** @type {?} */ (message))).indexOf('{')) {
                            message = ((/** @type {?} */ (message))).replace(/{([\.a-z0-9]+)}/g, (/**
                             * @param {?} _v
                             * @param {?} key
                             * @return {?}
                             */
                            function (_v, key) { return (/** @type {?} */ (err.params))[key] || ''; }));
                        }
                        err.message = (/** @type {?} */ (message));
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
        FormProperty.prototype.setParentAndPlatErrors = /**
         * @param {?} errors
         * @param {?} path
         * @return {?}
         */
        function (errors, path) {
            var _this = this;
            this._objErrors[path] = errors;
            /** @type {?} */
            var platErrors = [];
            Object.keys(this._objErrors).forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
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
        // #endregion
        // #region condition
        /**
         * @private
         * @param {?} visible
         * @return {?}
         */
        FormProperty.prototype.setVisible = 
        // #endregion
        // #region condition
        /**
         * @private
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            this._visible = visible;
            this._visibilityChanges.next(visible);
            // 部分数据源来自 reset
            this.resetValue(this.value, true);
        };
        // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
        // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
        /**
         * @return {?}
         */
        FormProperty.prototype._bindVisibility = 
        // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var visibleIf = ((/** @type {?} */ (this.ui))).visibleIf;
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
                            var valueCheck = property.valueChanges.pipe(operators.map((/**
                             * @param {?} value
                             * @return {?}
                             */
                            function (value) {
                                /** @type {?} */
                                var vi = visibleIf[dependencyPath];
                                if (typeof vi === 'function')
                                    return vi(value);
                                if (vi.indexOf('$ANY$') !== -1) {
                                    return value.length > 0;
                                }
                                else {
                                    return vi.indexOf(value) !== -1;
                                }
                            })));
                            /** @type {?} */
                            var visibilityCheck = property._visibilityChanges;
                            /** @type {?} */
                            var and = rxjs.combineLatest(valueCheck, visibilityCheck).pipe(operators.map((/**
                             * @param {?} results
                             * @return {?}
                             */
                            function (results) { return results[0] && results[1]; })));
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
                    .pipe(operators.map((/**
                 * @param {?} values
                 * @return {?}
                 */
                function (values) { return values.indexOf(true) !== -1; })), operators.distinctUntilChanged())
                    .subscribe((/**
                 * @param {?} visible
                 * @return {?}
                 */
                function (visible) { return _this.setVisible(visible); }));
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
    var   /**
     * @abstract
     */
    PropertyGroup = /** @class */ (function (_super) {
        __extends(PropertyGroup, _super);
        function PropertyGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.properties = null;
            return _this;
        }
        /**
         * @param {?} path
         * @return {?}
         */
        PropertyGroup.prototype.getProperty = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            /** @type {?} */
            var subPathIdx = path.indexOf(SF_SEQ);
            /** @type {?} */
            var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
            /** @type {?} */
            var property = (/** @type {?} */ (this.properties))[propertyId];
            if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
                /** @type {?} */
                var subPath = path.substr(subPathIdx + 1);
                property = ((/** @type {?} */ (property))).getProperty(subPath);
            }
            return property;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChild = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            for (var propertyId in this.properties) {
                if (this.properties.hasOwnProperty(propertyId)) {
                    /** @type {?} */
                    var property = this.properties[propertyId];
                    fn(property, propertyId);
                }
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        PropertyGroup.prototype.forEachChildRecursive = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.forEachChild((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                fn(child);
                if (child instanceof PropertyGroup) {
                    ((/** @type {?} */ (child))).forEachChildRecursive(fn);
                }
            }));
        };
        /**
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibility = /**
         * @return {?}
         */
        function () {
            _super.prototype._bindVisibility.call(this);
            this._bindVisibilityRecursive();
        };
        /**
         * @private
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibilityRecursive = /**
         * @private
         * @return {?}
         */
        function () {
            this.forEachChildRecursive((/**
             * @param {?} property
             * @return {?}
             */
            function (property) {
                property._bindVisibility();
            }));
        };
        /**
         * @return {?}
         */
        PropertyGroup.prototype.isRoot = /**
         * @return {?}
         */
        function () {
            return this === this.root;
        };
        return PropertyGroup;
    }(FormProperty));
    if (false) {
        /** @type {?} */
        PropertyGroup.prototype.properties;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/object.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ObjectProperty = /** @class */ (function (_super) {
        __extends(ObjectProperty, _super);
        function ObjectProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
            var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
            _this.formPropertyFactory = formPropertyFactory;
            _this._propertiesId = [];
            _this.createProperties();
            return _this;
        }
        Object.defineProperty(ObjectProperty.prototype, "propertiesId", {
            get: /**
             * @return {?}
             */
            function () {
                return this._propertiesId;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        ObjectProperty.prototype.createProperties = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.properties = {};
            this._propertiesId = [];
            /** @type {?} */
            var orderedProperties;
            try {
                orderedProperties = orderProperties(Object.keys((/** @type {?} */ (this.schema.properties))), (/** @type {?} */ (this.ui.order)));
            }
            catch (e) {
                console.error("Invalid " + (this.schema.title || 'root') + " object field configuration:", e);
            }
            (/** @type {?} */ (orderedProperties)).forEach((/**
             * @param {?} propertyId
             * @return {?}
             */
            function (propertyId) {
                (/** @type {?} */ (_this.properties))[propertyId] = _this.formPropertyFactory.createProperty((/** @type {?} */ (_this.schema.properties))[propertyId], _this.ui['$' + propertyId], (_this.formData || {})[propertyId], _this, propertyId);
                _this._propertiesId.push(propertyId);
            }));
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            for (var propertyId in value) {
                if (value.hasOwnProperty(propertyId) && (/** @type {?} */ (this.properties))[propertyId]) {
                    ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).setValue(value[propertyId], true);
                }
            }
            this.updateValueAndValidity(onlySelf, true);
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ObjectProperty.prototype.resetValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            value = value || this.schema.default || {};
            // tslint:disable-next-line: forin
            for (var propertyId in this.schema.properties) {
                ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).resetValue(value[propertyId], true);
            }
            this.updateValueAndValidity(onlySelf, true);
        };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._hasValue = /**
         * @return {?}
         */
        function () {
            return this.value != null && !!Object.keys(this.value).length;
        };
        /**
         * @return {?}
         */
        ObjectProperty.prototype._updateValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = {};
            this.forEachChild((/**
             * @param {?} property
             * @param {?} propertyId
             * @return {?}
             */
            function (property, propertyId) {
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/array.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ArrayProperty = /** @class */ (function (_super) {
        __extends(ArrayProperty, _super);
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
        ArrayProperty.prototype.getProperty = /**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            /** @type {?} */
            var subPathIdx = path.indexOf(SF_SEQ);
            /** @type {?} */
            var pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
            /** @type {?} */
            var list = (/** @type {?} */ (this.properties));
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
        ArrayProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            this.properties = [];
            this.clearErrors();
            this.resetProperties(value);
            this.updateValueAndValidity(onlySelf, true);
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        ArrayProperty.prototype.resetValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            this._value = value || this.schema.default || [];
            this.setValue(this._value, onlySelf);
        };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._hasValue = /**
         * @return {?}
         */
        function () {
            return true;
        };
        /**
         * @return {?}
         */
        ArrayProperty.prototype._updateValue = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = [];
            this.forEachChild((/**
             * @param {?} property
             * @return {?}
             */
            function (property) {
                if (property.visible && property._hasValue()) {
                    value.push(__assign({}, property.formData, property.value));
                }
            }));
            this._value = value;
        };
        /**
         * @private
         * @param {?} formData
         * @return {?}
         */
        ArrayProperty.prototype.addProperty = /**
         * @private
         * @param {?} formData
         * @return {?}
         */
        function (formData) {
            /** @type {?} */
            var newProperty = (/** @type {?} */ (this.formPropertyFactory.createProperty((/** @type {?} */ (this.schema.items)), this.ui.$items, formData, this)));
            ((/** @type {?} */ (this.properties))).push(newProperty);
            return newProperty;
        };
        /**
         * @private
         * @param {?} formDatas
         * @return {?}
         */
        ArrayProperty.prototype.resetProperties = /**
         * @private
         * @param {?} formDatas
         * @return {?}
         */
        function (formDatas) {
            var e_1, _a;
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
                    if (formDatas_1_1 && !formDatas_1_1.done && (_a = formDatas_1.return)) _a.call(formDatas_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @private
         * @param {?=} property
         * @return {?}
         */
        ArrayProperty.prototype.clearErrors = /**
         * @private
         * @param {?=} property
         * @return {?}
         */
        function (property) {
            (property || this)._objErrors = {};
        };
        // #region actions
        // #region actions
        /**
         * @param {?} formData
         * @return {?}
         */
        ArrayProperty.prototype.add = 
        // #region actions
        /**
         * @param {?} formData
         * @return {?}
         */
        function (formData) {
            /** @type {?} */
            var newProperty = this.addProperty(formData);
            newProperty.resetValue(formData, false);
            return newProperty;
        };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayProperty.prototype.remove = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            var _this = this;
            /** @type {?} */
            var list = (/** @type {?} */ (this.properties));
            this.clearErrors();
            list.splice(index, 1);
            list.forEach((/**
             * @param {?} property
             * @param {?} idx
             * @return {?}
             */
            function (property, idx) {
                property.path = [(/** @type {?} */ (property.parent)).path, idx].join(SF_SEQ);
                _this.clearErrors(property);
                // TODO: 受限于 sf 的设计思路，对于移除数组项需要重新对每个子项进行校验，防止错误被父级合并后引起始终是错误的现象
                if (property instanceof ObjectProperty) {
                    property.forEachChild((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) {
                        p.updateValueAndValidity();
                    }));
                }
            }));
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
     * @fileoverview added by tsickle
     * Generated from: src/model/atomic.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    AtomicProperty = /** @class */ (function (_super) {
        __extends(AtomicProperty, _super);
        function AtomicProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            this._value = value;
            this.updateValueAndValidity(onlySelf, true);
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        AtomicProperty.prototype.resetValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            if (value == null) {
                value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
            }
            this._value = value;
            this.updateValueAndValidity(onlySelf, true);
            if (this.widget)
                this.widget.reset(value);
        };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._hasValue = /**
         * @return {?}
         */
        function () {
            return this.fallbackValue() !== this.value;
        };
        /**
         * @return {?}
         */
        AtomicProperty.prototype._updateValue = /**
         * @return {?}
         */
        function () { };
        return AtomicProperty;
    }(FormProperty));
    if (false) {
        /**
         * @abstract
         * @return {?}
         */
        AtomicProperty.prototype.fallbackValue = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/boolean.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BooleanProperty = /** @class */ (function (_super) {
        __extends(BooleanProperty, _super);
        function BooleanProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        BooleanProperty.prototype.fallbackValue = /**
         * @return {?}
         */
        function () {
            return null;
        };
        return BooleanProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/number.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberProperty = /** @class */ (function (_super) {
        __extends(NumberProperty, _super);
        function NumberProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NumberProperty.prototype.fallbackValue = /**
         * @return {?}
         */
        function () {
            return null;
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        NumberProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            if (typeof value === 'string') {
                if (value.length) {
                    value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
                }
                else {
                    value = undefined;
                }
            }
            this._value = value;
            this.updateValueAndValidity(onlySelf, true);
        };
        return NumberProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/string.property.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StringProperty = /** @class */ (function (_super) {
        __extends(StringProperty, _super);
        function StringProperty() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringProperty.prototype.fallbackValue = /**
         * @return {?}
         */
        function () {
            return null;
        };
        /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        StringProperty.prototype.setValue = /**
         * @param {?} value
         * @param {?} onlySelf
         * @return {?}
         */
        function (value, onlySelf) {
            this._value = value == null ? '' : value;
            this.updateValueAndValidity(onlySelf, true);
        };
        return StringProperty;
    }(AtomicProperty));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/form.property.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormPropertyFactory = /** @class */ (function () {
        function FormPropertyFactory(schemaValidatorFactory, options) {
            this.schemaValidatorFactory = schemaValidatorFactory;
            this.options = options;
        }
        /**
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?=} parent
         * @param {?=} propertyId
         * @return {?}
         */
        FormPropertyFactory.prototype.createProperty = /**
         * @param {?} schema
         * @param {?} ui
         * @param {?} formData
         * @param {?=} parent
         * @param {?=} propertyId
         * @return {?}
         */
        function (schema, ui, formData, parent, propertyId) {
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
                        path += ((/** @type {?} */ (((/** @type {?} */ (parent))).properties))).length;
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
                var refSchema = retrieveSchema(schema, (/** @type {?} */ (parent)).root.schema.definitions);
                newProperty = this.createProperty(refSchema, ui, formData, parent, path);
            }
            else {
                // fix required
                if (propertyId && (/** @type {?} */ ((/** @type {?} */ (parent)).schema.required)).indexOf((/** @type {?} */ (propertyId.split(SF_SEQ).pop()))) !== -1) {
                    ui._required = true;
                }
                // fix title
                if (schema.title == null) {
                    schema.title = propertyId;
                }
                // fix date
                if ((schema.type === 'string' || schema.type === 'number') && !schema.format && !((/** @type {?} */ (ui))).format) {
                    if (((/** @type {?} */ (ui))).widget === 'date')
                        ui._format = schema.type === 'string' ? this.options.uiDateStringFormat : this.options.uiDateNumberFormat;
                    else if (((/** @type {?} */ (ui))).widget === 'time')
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
        FormPropertyFactory.prototype.initializeRoot = /**
         * @private
         * @param {?} rootProperty
         * @return {?}
         */
        function (rootProperty) {
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
        FormPropertyFactory.prototype.schemaValidatorFactory;
        /**
         * @type {?}
         * @private
         */
        FormPropertyFactory.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/terminator.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TerminatorService = /** @class */ (function () {
        function TerminatorService() {
            this.onDestroy = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TerminatorService.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.onDestroy.next(true);
        };
        return TerminatorService;
    }());
    if (false) {
        /** @type {?} */
        TerminatorService.prototype.onDestroy;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/validator.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    SchemaValidatorFactory = /** @class */ (function () {
        function SchemaValidatorFactory() {
        }
        return SchemaValidatorFactory;
    }());
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
        function AjvSchemaValidatorFactory(options) {
            var _this = _super.call(this) || this;
            _this.options = options;
            _this.ajv = new Ajv(__assign({}, options.ajv, { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
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
        AjvSchemaValidatorFactory.prototype.createValidatorFn = /**
         * @param {?} schema
         * @param {?} extraOptions
         * @return {?}
         */
        function (schema, extraOptions) {
            var _this = this;
            /** @type {?} */
            var ingoreKeywords = __spread(((/** @type {?} */ (this.options.ingoreKeywords))), (((/** @type {?} */ (extraOptions.ingoreKeywords))) || []));
            return (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
                    errors = errors.filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return ingoreKeywords.indexOf(w.keyword) === -1; }));
                }
                return errors;
            });
        };
        /** @nocollapse */
        AjvSchemaValidatorFactory.ctorParameters = function () { return [
            { type: DelonFormConfig, decorators: [{ type: core.Inject, args: [DelonFormConfig,] }] }
        ]; };
        return AjvSchemaValidatorFactory;
    }(SchemaValidatorFactory));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        AjvSchemaValidatorFactory.prototype.ajv;
        /**
         * @type {?}
         * @private
         */
        AjvSchemaValidatorFactory.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widget.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetRegistry = /** @class */ (function () {
        function WidgetRegistry() {
            this._widgets = {};
        }
        Object.defineProperty(WidgetRegistry.prototype, "widgets", {
            get: /**
             * @return {?}
             */
            function () {
                return this._widgets;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.setDefault = /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            this.defaultWidget = widget;
        };
        /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
        WidgetRegistry.prototype.register = /**
         * @param {?} type
         * @param {?} widget
         * @return {?}
         */
        function (type, widget) {
            this._widgets[type] = widget;
        };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.has = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return this._widgets.hasOwnProperty(type);
        };
        /**
         * @param {?} type
         * @return {?}
         */
        WidgetRegistry.prototype.getType = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
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
        function WidgetFactory(registry, resolver) {
            this.registry = registry;
            this.resolver = resolver;
        }
        /**
         * @param {?} container
         * @param {?} type
         * @return {?}
         */
        WidgetFactory.prototype.createWidget = /**
         * @param {?} container
         * @param {?} type
         * @return {?}
         */
        function (container, type) {
            if (!this.registry.has(type)) {
                console.warn("No widget for type \"" + type + "\"");
            }
            /** @type {?} */
            var componentClass = (/** @type {?} */ (this.registry.getType(type)));
            /** @type {?} */
            var componentFactory = this.resolver.resolveComponentFactory(componentClass);
            return container.createComponent(componentFactory);
        };
        WidgetFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetFactory.ctorParameters = function () { return [
            { type: WidgetRegistry },
            { type: core.ComponentFactoryResolver }
        ]; };
        return WidgetFactory;
    }());
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
     * @fileoverview added by tsickle
     * Generated from: src/sf.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} options
     * @return {?}
     */
    function useFactory(schemaValidatorFactory, options) {
        return new FormPropertyFactory(schemaValidatorFactory, options);
    }
    var SFComponent = /** @class */ (function () {
        function SFComponent(formPropertyFactory, terminator, options, dom, cdr, localeSrv, aclSrv, i18nSrv) {
            var _this = this;
            this.formPropertyFactory = formPropertyFactory;
            this.terminator = terminator;
            this.options = options;
            this.dom = dom;
            this.cdr = cdr;
            this.localeSrv = localeSrv;
            this.aclSrv = aclSrv;
            this.i18nSrv = i18nSrv;
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
            /**
             * Whether to load status，when `true` reset button is disabled status, submit button is loading status
             */
            this.loading = false;
            this.disabled = false;
            this.noColon = false;
            this.cleanValue = false;
            /**
             * 数据变更时回调
             */
            this.formChange = new core.EventEmitter();
            /**
             * 提交表单时回调
             */
            this.formSubmit = new core.EventEmitter();
            /**
             * 重置表单时回调
             */
            this.formReset = new core.EventEmitter();
            /**
             * 表单校验结果回调
             */
            this.formError = new core.EventEmitter();
            this.liveValidate = (/** @type {?} */ (options.liveValidate));
            this.firstVisual = (/** @type {?} */ (options.firstVisual));
            this.autocomplete = (/** @type {?} */ (options.autocomplete));
            this.localeSrv.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
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
            ].filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o != null; }));
            if (refSchemas.length > 0) {
                rxjs.merge.apply(void 0, __spread(((/** @type {?} */ (refSchemas))))).pipe(operators.filter((/**
                 * @return {?}
                 */
                function () { return _this._inited; })), operators.takeUntil(this.unsubscribe$))
                    .subscribe((/**
                 * @template THIS
                 * @this {THIS}
                 * @return {THIS}
                 */
                function () { return _this.refreshSchema(); }));
            }
        }
        Object.defineProperty(SFComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mode;
            },
            /** 表单模式 */
            set: /**
             * 表单模式
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SFComponent.prototype, "valid", {
            // #endregion
            /** 表单校验状态 */
            get: 
            // #endregion
            /**
             * 表单校验状态
             * @return {?}
             */
            function () {
                return this._valid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SFComponent.prototype, "value", {
            /** 表单值 */
            get: /**
             * 表单值
             * @return {?}
             */
            function () {
                return this._item;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 根据路径获取表单元素属性
         * @param path [路径](https://ng-alain.com/form/qa#path)
         */
        /**
         * 根据路径获取表单元素属性
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        SFComponent.prototype.getProperty = /**
         * 根据路径获取表单元素属性
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        function (path) {
            return (/** @type {?} */ (this.rootProperty)).searchProperty(path);
        };
        /**
         * 根据路径获取表单元素当前值
         * @param path [路径](https://ng-alain.com/form/qa#path)
         */
        /**
         * 根据路径获取表单元素当前值
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        SFComponent.prototype.getValue = /**
         * 根据路径获取表单元素当前值
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @return {?}
         */
        function (path) {
            return (/** @type {?} */ (this.getProperty(path))).value;
        };
        /**
         * 根据路径设置某个表单元素属性值
         * @param path [路径](https://ng-alain.com/form/qa#path)
         * @param value 新值
         */
        /**
         * 根据路径设置某个表单元素属性值
         * @template THIS
         * @this {THIS}
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @param {?} value 新值
         * @return {THIS}
         */
        SFComponent.prototype.setValue = /**
         * 根据路径设置某个表单元素属性值
         * @template THIS
         * @this {THIS}
         * @param {?} path [路径](https://ng-alain.com/form/qa#path)
         * @param {?} value 新值
         * @return {THIS}
         */
        function (path, value) {
            /** @type {?} */
            var item = (/** @type {?} */ (this)).getProperty(path);
            if (!item) {
                throw new Error("Invalid path: " + path);
            }
            item.resetValue(value, false);
            return (/** @type {?} */ (this));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        SFComponent.prototype.onSubmit = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
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
        SFComponent.prototype.fanyi = /**
         * @protected
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
        };
        /**
         * @private
         * @param {?} ui
         * @return {?}
         */
        SFComponent.prototype.inheritUI = /**
         * @private
         * @param {?} ui
         * @return {?}
         */
        function (ui) {
            var _this = this;
            ['optionalHelp'].filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return !!_this._defUi[key]; })).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (ui[key] = __assign({}, _this._defUi[key], ui[key])); }));
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.coverProperty = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var isHorizontal = this.layout === 'horizontal';
            /** @type {?} */
            var _schema = util.deepCopy(this.schema);
            var definitions = _schema.definitions;
            /** @type {?} */
            var inFn = (/**
             * @param {?} schema
             * @param {?} _parentSchema
             * @param {?} uiSchema
             * @param {?} parentUiSchema
             * @param {?} uiRes
             * @return {?}
             */
            function (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) {
                if (!Array.isArray(schema.required))
                    schema.required = [];
                Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var uiKey = "$" + key;
                    /** @type {?} */
                    var property = retrieveSchema((/** @type {?} */ ((/** @type {?} */ (schema.properties))[key])), definitions);
                    /** @type {?} */
                    var ui = (/** @type {?} */ (__assign({ widget: property.type }, (property.format && FORMATMAPS[property.format]), (typeof property.ui === 'string' ? { widget: property.ui } : null), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null), _this._defUi, ((/** @type {?} */ (property.ui))), uiSchema[uiKey])));
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
                    if (ui.widget === 'date' && ui.end != null) {
                        /** @type {?} */
                        var dateEndProperty = (/** @type {?} */ (schema.properties))[ui.end];
                        if (dateEndProperty) {
                            dateEndProperty.ui = __assign({}, ((/** @type {?} */ (dateEndProperty.ui))), { hidden: true });
                        }
                        else {
                            ui.end = null;
                        }
                    }
                    _this.inheritUI(ui);
                    if (ui.optionalHelp) {
                        if (typeof ui.optionalHelp === 'string') {
                            ui.optionalHelp = (/** @type {?} */ ({
                                text: ui.optionalHelp,
                            }));
                        }
                        /** @type {?} */
                        var oh = (ui.optionalHelp = __assign({ text: '', icon: 'question-circle', placement: 'top', trigger: 'hover', mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 }, ui.optionalHelp));
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
                        var idx = (/** @type {?} */ (schema.required)).indexOf(key);
                        if (idx !== -1) {
                            (/** @type {?} */ (schema.required)).splice(idx, 1);
                        }
                    }
                    if (property.items) {
                        /** @type {?} */
                        var uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                        ui.$items = __assign({}, ((/** @type {?} */ (property.items.ui))), uiSchemaInArr[uiKey], ui.$items);
                        inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
                    }
                    if (property.properties && Object.keys(property.properties).length) {
                        inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
                    }
                }));
            });
            /** @type {?} */
            var inIfFn = (/**
             * @param {?} schema
             * @param {?} ui
             * @return {?}
             */
            function (schema, ui) {
                Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var property = (/** @type {?} */ (schema.properties))[key];
                    /** @type {?} */
                    var uiKey = "$" + key;
                    resolveIf(property, ui[uiKey]);
                    if (property.items) {
                        inIfFn(property.items, ui[uiKey].$items);
                    }
                    if (property.properties) {
                        inIfFn(property, ui[uiKey]);
                    }
                }));
            });
            if (this.ui == null)
                this.ui = {};
            this._defUi = __assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui, _schema.ui, this.ui['*']);
            if (this.onlyVisual === true) {
                this._defUi.onlyVisual = true;
            }
            // root
            this._ui = __assign({}, this._defUi);
            inFn(_schema, _schema, this.ui, this.ui, this._ui);
            // cond
            resolveIf(_schema, this._ui);
            inIfFn(_schema, this._ui);
            this._schema = _schema;
            di(this._ui, 'cover schema & ui', this._ui, _schema);
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.coverButtonProperty = /**
         * @private
         * @return {?}
         */
        function () {
            this._btn = __assign({ render: { size: 'default' } }, this.locale, this.options.button, ((/** @type {?} */ (this.button))));
            /** @type {?} */
            var firstKey = Object.keys(this._ui).find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.startsWith('$'); }));
            if (this.layout === 'horizontal') {
                /** @type {?} */
                var btnUi = firstKey ? this._ui[firstKey] : this._defUi;
                if (!(/** @type {?} */ (this._btn.render)).grid) {
                    (/** @type {?} */ (this._btn.render)).grid = {
                        offset: btnUi.spanLabel,
                        span: btnUi.spanControl,
                    };
                }
                // fixed label
                if ((/** @type {?} */ (this._btn.render)).spanLabelFixed == null) {
                    (/** @type {?} */ (this._btn.render)).spanLabelFixed = btnUi.spanLabelFixed;
                }
                // 固定标签宽度时，若不指定样式，则默认居中
                if (!(/** @type {?} */ (this._btn.render)).class && (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
                    (/** @type {?} */ (this._btn.render)).class = 'text-center';
                }
            }
            else {
                (/** @type {?} */ (this._btn.render)).grid = {};
            }
            if (this._mode) {
                this.mode = this._mode;
            }
            di(this._ui, 'button property', this._btn);
        };
        /**
         * @return {?}
         */
        SFComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._inited = true;
            this.validator();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        SFComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
                this.cdr.detectChanges();
                return;
            }
            this.refreshSchema();
        };
        /** @internal */
        /**
         * \@internal
         * @param {?} path
         * @param {?} templateRef
         * @return {?}
         */
        SFComponent.prototype._addTpl = /**
         * \@internal
         * @param {?} path
         * @param {?} templateRef
         * @return {?}
         */
        function (path, templateRef) {
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
        SFComponent.prototype.attachCustomRender = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._renders.forEach((/**
             * @param {?} tpl
             * @param {?} path
             * @return {?}
             */
            function (tpl, path) {
                /** @type {?} */
                var property = (/** @type {?} */ (_this.rootProperty)).searchProperty(path);
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
        SFComponent.prototype.validator = /**
         * @template THIS
         * @this {THIS}
         * @param {?=} options
         * @return {THIS}
         */
        function (options) {
            if (options === void 0) { options = { emitError: true, onlyRoot: true }; }
            /** @type {?} */
            var fn = (/**
             * @param {?} property
             * @return {?}
             */
            function (property) {
                property._runValidation();
                if (!(property instanceof PropertyGroup) || !property.properties)
                    return;
                if (Array.isArray(property.properties)) {
                    property.properties.forEach((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return fn(p); }));
                }
                else {
                    Object.keys(property.properties).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return fn((/** @type {?} */ (property.properties))[key]); }));
                }
            });
            if (options.onlyRoot) {
                (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty))._runValidation();
            }
            else {
                fn((/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)));
            }
            /** @type {?} */
            var errors = (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).errors;
            (/** @type {?} */ (this))._valid = !(errors && errors.length);
            if (options.emitError && !(/** @type {?} */ (this))._valid)
                (/** @type {?} */ (this)).formError.emit((/** @type {?} */ (errors)));
            (/** @type {?} */ (this)).cdr.detectChanges();
            return (/** @type {?} */ (this));
        };
        /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         */
        /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         * @template THIS
         * @this {THIS}
         * @param {?=} newSchema
         * @param {?=} newUI
         * @return {THIS}
         */
        SFComponent.prototype.refreshSchema = /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         * @template THIS
         * @this {THIS}
         * @param {?=} newSchema
         * @param {?=} newUI
         * @return {THIS}
         */
        function (newSchema, newUI) {
            var _this = this;
            if (newSchema)
                (/** @type {?} */ (this)).schema = newSchema;
            if (newUI)
                (/** @type {?} */ (this)).ui = newUI;
            if (!(/** @type {?} */ (this)).schema || typeof (/** @type {?} */ (this)).schema.properties === 'undefined')
                throw new Error("Invalid Schema");
            if ((/** @type {?} */ (this)).schema.ui && typeof (/** @type {?} */ (this)).schema.ui === 'string')
                throw new Error("Don't support string with root ui property");
            (/** @type {?} */ (this)).schema.type = 'object';
            (/** @type {?} */ (this))._formData = __assign({}, (/** @type {?} */ (this)).formData);
            if ((/** @type {?} */ (this))._inited)
                (/** @type {?} */ (this)).terminator.destroy();
            (/** @type {?} */ (this)).cleanRootSub();
            (/** @type {?} */ (this)).coverProperty();
            (/** @type {?} */ (this)).coverButtonProperty();
            (/** @type {?} */ (this)).rootProperty = (/** @type {?} */ (this)).formPropertyFactory.createProperty((/** @type {?} */ (this))._schema, (/** @type {?} */ (this))._ui, (/** @type {?} */ (this)).formData);
            (/** @type {?} */ (this)).attachCustomRender();
            (/** @type {?} */ (this)).cdr.detectChanges();
            (/** @type {?} */ (this)).reset();
            /** @type {?} */
            var isFirst = true;
            (/** @type {?} */ (this)).rootProperty.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                (/** @type {?} */ (_this))._item = __assign({}, ((/** @type {?} */ (_this)).cleanValue ? null : (/** @type {?} */ (_this)).formData), value);
                if (isFirst) {
                    isFirst = false;
                    return;
                }
                (/** @type {?} */ (_this)).formChange.emit((/** @type {?} */ (_this))._item);
            }));
            (/** @type {?} */ (this)).rootProperty.errorsChanges.subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                (/** @type {?} */ (_this))._valid = !(errors && errors.length);
                (/** @type {?} */ (_this)).formError.emit((/** @type {?} */ (errors)));
                (/** @type {?} */ (_this)).cdr.detectChanges();
            }));
            return (/** @type {?} */ (this));
        };
        /**
         * 重置表单
         * @param [emit] 是否触发 `formReset` 事件，默认：`false`
         */
        /**
         * 重置表单
         * @template THIS
         * @this {THIS}
         * @param {?=} emit
         * @return {THIS}
         */
        SFComponent.prototype.reset = /**
         * 重置表单
         * @template THIS
         * @this {THIS}
         * @param {?=} emit
         * @return {THIS}
         */
        function (emit) {
            var _this = this;
            if (emit === void 0) { emit = false; }
            (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).resetValue((/** @type {?} */ (this)).formData, false);
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (_this)).cdr.detectChanges(); }));
            if (emit) {
                (/** @type {?} */ (this)).formReset.emit((/** @type {?} */ (this)).value);
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @return {?}
         */
        SFComponent.prototype.cleanRootSub = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.rootProperty)
                return;
            this.rootProperty.errorsChanges.unsubscribe();
            this.rootProperty.valueChanges.unsubscribe();
        };
        /**
         * @return {?}
         */
        SFComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.cleanRootSub();
            this.terminator.destroy();
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        SFComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf, [sf]',
                        exportAs: 'sf',
                        template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form\n      [nzLayout]=\"layout\"\n      (submit)=\"onSubmit($event)\"\n      [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\"\n                  class=\"sf-btns\"\n                  [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div nz-col\n           class=\"ant-form-item-control-wrapper\"\n           [nzSpan]=\"_btn.render!.grid!.span\"\n           [nzOffset]=\"_btn.render!.grid!.offset\"\n           [nzXs]=\"_btn.render!.grid!.xs\"\n           [nzSm]=\"_btn.render!.grid!.sm\"\n           [nzMd]=\"_btn.render!.grid!.md\"\n           [nzLg]=\"_btn.render!.grid!.lg\"\n           [nzXl]=\"_btn.render!.grid!.xl\"\n           [nzXXl]=\"_btn.render!.grid!.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\"\n                    nz-button\n                    [nzType]=\"_btn.submit_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [nzLoading]=\"loading\"\n                    [disabled]=\"liveValidate && !valid\">\n              <i *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type\"\n                  [nzTheme]=\"_btn.submit_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont\"></i>\n              {{_btn.submit}}\n            </button>\n            <button *ngIf=\"_btn.reset\"\n                    type=\"button\"\n                    nz-button\n                    [nzType]=\"_btn.reset_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [disabled]=\"loading\"\n                    (click)=\"reset(true)\">\n              <i *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type\"\n                  [nzTheme]=\"_btn.reset_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont\"></i>\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                        providers: [
                            WidgetFactory,
                            {
                                provide: FormPropertyFactory,
                                useFactory: useFactory,
                                deps: [SchemaValidatorFactory, DelonFormConfig],
                            },
                            TerminatorService,
                        ],
                        host: {
                            '[class.sf]': 'true',
                            '[class.sf__inline]': "layout === 'inline'",
                            '[class.sf__search]': "mode === 'search'",
                            '[class.sf__edit]': "mode === 'edit'",
                            '[class.sf__no-error]': "onlyVisual",
                            '[class.sf__no-colon]': "noColon",
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
            { type: DelonFormConfig },
            { type: platformBrowser.DomSanitizer },
            { type: core.ChangeDetectorRef },
            { type: theme.DelonLocaleService },
            { type: acl.ACLService, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] }
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
            mode: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            noColon: [{ type: core.Input }],
            cleanValue: [{ type: core.Input }],
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
        return SFComponent;
    }());
    if (false) {
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
        /**
         * @type {?}
         * @private
         */
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
        /**
         * 数据变更时回调
         * @type {?}
         */
        SFComponent.prototype.formChange;
        /**
         * 提交表单时回调
         * @type {?}
         */
        SFComponent.prototype.formSubmit;
        /**
         * 重置表单时回调
         * @type {?}
         */
        SFComponent.prototype.formReset;
        /**
         * 表单校验结果回调
         * @type {?}
         */
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
        SFComponent.prototype.options;
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
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/sf-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextUniqueId = 0;
    var SFItemComponent = /** @class */ (function () {
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
        SFItemComponent.prototype.onWidgetInstanciated = /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            this.widget = widget;
            /** @type {?} */
            var id = "_sf-" + nextUniqueId++;
            /** @type {?} */
            var ui = (/** @type {?} */ (this.formProperty.ui));
            this.widget.formProperty = this.formProperty;
            this.widget.schema = this.formProperty.schema;
            this.widget.ui = ui;
            this.widget.id = id;
            this.widget.firstVisual = (/** @type {?} */ (ui.firstVisual));
            this.formProperty.widget = widget;
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.terminator.onDestroy.subscribe((/**
             * @return {?}
             */
            function () { return _this.ngOnDestroy(); }));
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.ref = this.widgetFactory.createWidget(this.container, (/** @type {?} */ ((this.formProperty.ui.widget || this.formProperty.schema.type))));
            this.onWidgetInstanciated(this.ref.instance);
        };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
            this.ref.destroy();
        };
        SFItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item',
                        exportAs: 'sfItem',
                        template: "\n    <ng-template #target></ng-template>\n  ",
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
        return SFItemComponent;
    }());
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFFixedDirective = /** @class */ (function () {
        function SFFixedDirective(er, render) {
            this.render = render;
            this._inited = false;
            this.el = (/** @type {?} */ (er.nativeElement));
        }
        /**
         * @private
         * @return {?}
         */
        SFFixedDirective.prototype.init = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this._inited || this.num == null || this.num <= 0)
                return;
            /** @type {?} */
            var widgetEl = this.el.querySelector('.ant-row') || this.el;
            this.render.addClass(widgetEl, 'sf__fixed');
            /** @type {?} */
            var labelEl = widgetEl.querySelector('.ant-form-item-label');
            /** @type {?} */
            var unit = this.num + 'px';
            if (labelEl) {
                this.render.setStyle(labelEl, 'width', unit);
                this.render.setStyle(labelEl, 'flex', "0 0 " + unit);
            }
            else {
                /** @type {?} */
                var controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper');
                this.render.setStyle(controlEl, 'margin-left', unit);
            }
        };
        /**
         * @return {?}
         */
        SFFixedDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._inited = true;
            this.init();
        };
        /**
         * @return {?}
         */
        SFFixedDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this._inited)
                this.init();
        };
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
        return SFFixedDirective;
    }());
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFItemWrapComponent = /** @class */ (function () {
        function SFItemWrapComponent() {
            this.title = null;
        }
        Object.defineProperty(SFItemWrapComponent.prototype, "t", {
            get: /**
             * @return {?}
             */
            function () {
                return this.title === null ? this.schema.title : this.title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SFItemWrapComponent.prototype, "oh", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.ui.optionalHelp));
            },
            enumerable: true,
            configurable: true
        });
        SFItemWrapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item-wrap',
                        template: "<nz-form-item [style.width.px]=\"ui.width\" [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i *ngIf=\"oh\" nz-tooltip\n          [nzTooltipTitle]=\"oh.text\" [nzTooltipPlacement]=\"oh.placement\" [nzTooltipTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon [nzType]=\"oh.icon\"></i>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
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
        return SFItemWrapComponent;
    }());
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SFTemplateDirective = /** @class */ (function () {
        function SFTemplateDirective(templateRef, table) {
            this.templateRef = templateRef;
            this.table = table;
        }
        /**
         * @return {?}
         */
        SFTemplateDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
        };
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
        return SFTemplateDirective;
    }());
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
     * @fileoverview added by tsickle
     * Generated from: src/widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template T, UIT
     */
    var Widget = /** @class */ (function () {
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
            get: /**
             * @return {?}
             */
            function () {
                return this.ui.class || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.schema.readOnly === true || (/** @type {?} */ (this.sfComp)).disabled) {
                    return true;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "l", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.formProperty.root.widget.sfComp)).locale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "oh", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.ui.optionalHelp));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "dom", {
            get: /**
             * @return {?}
             */
            function () {
                return this.injector.get(platformBrowser.DomSanitizer);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        Widget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                if (errors == null)
                    return;
                di(_this.ui, 'errorsChanges', _this.formProperty.path, errors);
                // 不显示首次校验视觉
                if (_this.firstVisual) {
                    _this.showError = errors.length > 0;
                    _this.error = _this.showError ? ((/** @type {?} */ (errors[0].message))) : '';
                    _this.cd.detectChanges();
                }
                _this.firstVisual = true;
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        Widget.prototype.setValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formProperty.setValue(value, false);
            di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
        };
        Object.defineProperty(Widget.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this.formProperty.value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} onlySelf
         * @return {?}
         */
        Widget.prototype.detectChanges = /**
         * @param {?=} onlySelf
         * @return {?}
         */
        function (onlySelf) {
            if (onlySelf === void 0) { onlySelf = false; }
            if (onlySelf) {
                this.cd.markForCheck();
            }
            else {
                this.formProperty.root.widget.cd.markForCheck();
            }
        };
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
        return Widget;
    }());
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
        ControlWidget.prototype.reset = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { };
        return ControlWidget;
    }(Widget));
    /**
     * @template UIT
     */
    var   /**
     * @template UIT
     */
    ControlUIWidget = /** @class */ (function (_super) {
        __extends(ControlUIWidget, _super);
        function ControlUIWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ControlUIWidget.prototype.reset = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { };
        return ControlUIWidget;
    }(Widget));
    var ArrayLayoutWidget = /** @class */ (function (_super) {
        __extends(ArrayLayoutWidget, _super);
        function ArrayLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ArrayLayoutWidget.prototype.reset = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { };
        /**
         * @return {?}
         */
        ArrayLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.cd.detectChanges(); }));
        };
        return ArrayLayoutWidget;
    }(Widget));
    var ObjectLayoutWidget = /** @class */ (function (_super) {
        __extends(ObjectLayoutWidget, _super);
        function ObjectLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} _value
         * @return {?}
         */
        ObjectLayoutWidget.prototype.reset = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { };
        /**
         * @return {?}
         */
        ObjectLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formProperty.errorsChanges.pipe(operators.takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.cd.detectChanges(); }));
        };
        return ObjectLayoutWidget;
    }(Widget));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/array/array.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ArrayWidget = /** @class */ (function (_super) {
        __extends(ArrayWidget, _super);
        function ArrayWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.arraySpan = 8;
            return _this;
        }
        Object.defineProperty(ArrayWidget.prototype, "addDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this.disabled || (this.schema.maxItems && ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayWidget.prototype, "showRemove", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.disabled && this.removeTitle;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ArrayWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        ArrayWidget.prototype.addItem = /**
         * @return {?}
         */
        function () {
            this.formProperty.add({});
        };
        /**
         * @param {?} index
         * @return {?}
         */
        ArrayWidget.prototype.removeItem = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.formProperty.remove(index);
        };
        ArrayWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-array',
                        template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i *ngIf=\"oh\" nz-tooltip\n          [nzTooltipTitle]=\"oh.text\" [nzTooltipPlacement]=\"oh.placement\" [nzTooltipTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon [nzType]=\"oh.icon\"></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\"\n              nz-button\n              [nzType]=\"addType\"\n              [disabled]=\"addDisabled\"\n              (click)=\"addItem()\"\n              [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </nz-col>\n        </ng-container>\n      </nz-row>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return ArrayWidget;
    }(ArrayLayoutWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/autocomplete/autocomplete.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutoCompleteWidget = /** @class */ (function (_super) {
        __extends(AutoCompleteWidget, _super);
        function AutoCompleteWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
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
        AutoCompleteWidget.prototype.updateValue = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.typing = item.nzLabel;
            this.setValue(item.nzValue);
            if (this.ui.change)
                this.ui.change(item);
        };
        /**
         * @return {?}
         */
        AutoCompleteWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
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
                filterOptionValue = (/**
                 * @param {?} input
                 * @param {?} option
                 * @return {?}
                 */
                function (input, option) { return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1; });
            }
            this.filterOption = filterOptionValue;
            this.isAsync = !!asyncData;
            /** @type {?} */
            var orgTime = +(this.ui.debounceTime || 0);
            /** @type {?} */
            var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
            this.list = (/** @type {?} */ (this.ngModel.valueChanges)).pipe(operators.debounceTime(time), operators.startWith(''), operators.flatMap((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return (_this.isAsync ? (/** @type {?} */ (asyncData))(input) : _this.filterData(input)); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        AutoCompleteWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.typing = this.value;
            if (this.isAsync)
                return;
            switch (this.ui.type) {
                case 'email':
                    this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)) || this.formProperty.options.uiEmailSuffixes, null, (/** @type {?} */ (this.schema.readOnly)));
                    break;
                default:
                    this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)), value, (/** @type {?} */ (this.schema.readOnly)));
                    break;
            }
        };
        /**
         * @private
         * @param {?} input
         * @return {?}
         */
        AutoCompleteWidget.prototype.filterData = /**
         * @private
         * @param {?} input
         * @return {?}
         */
        function (input) {
            var _this = this;
            switch (this.ui.type) {
                case 'email':
                    return this.addEmailSuffix(input);
                default:
                    return rxjs.of(this.fixData.filter((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return _this.filterOption(input, option); })));
            }
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AutoCompleteWidget.prototype.addEmailSuffix = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return rxjs.of(!value || ~value.indexOf('@') ? [] : this.fixData.map((/**
             * @param {?} domain
             * @return {?}
             */
            function (domain) { return value + "@" + domain.label; })));
        };
        AutoCompleteWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-autocomplete',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         (ngModelChange)=\"setValue($event)\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.value\" [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        AutoCompleteWidget.propDecorators = {
            ngModel: [{ type: core.ViewChild, args: [forms.NgModel, { static: false },] }]
        };
        return AutoCompleteWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/boolean/boolean.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BooleanWidget = /** @class */ (function (_super) {
        __extends(BooleanWidget, _super);
        function BooleanWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-boolean',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-switch [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [nzCheckedChildren]=\"ui.checkedChildren\"\n             [nzUnCheckedChildren]=\"ui.unCheckedChildren\">\n  </nz-switch>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return BooleanWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/cascader/cascader.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CascaderWidget = /** @class */ (function (_super) {
        __extends(CascaderWidget, _super);
        function CascaderWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = [];
            return _this;
        }
        /**
         * @return {?}
         */
        CascaderWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this.ui, clearText = _a.clearText, showArrow = _a.showArrow, showInput = _a.showInput, triggerAction = _a.triggerAction, asyncData = _a.asyncData;
            this.clearText = clearText || '清除';
            this.showArrow = toBool(showArrow, true);
            this.showInput = toBool(showInput, true);
            this.triggerAction = triggerAction || ['click'];
            if (!!asyncData) {
                this.loadData = (/**
                 * @param {?} node
                 * @param {?} index
                 * @return {?}
                 */
                function (node, index) { return asyncData(node, index, _this).then((/**
                 * @return {?}
                 */
                function () { return _this.detectChanges(); })); });
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CascaderWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            getData(this.schema, {}, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} status
         * @return {?}
         */
        CascaderWidget.prototype._visibleChange = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (this.ui.visibleChange)
                this.ui.visibleChange(status);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        CascaderWidget.prototype._change = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
            if (this.ui.change) {
                this.ui.change(value);
            }
        };
        /**
         * @param {?} options
         * @return {?}
         */
        CascaderWidget.prototype._selectionChange = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (this.ui.selectionChange) {
                this.ui.selectionChange(options);
            }
        };
        /**
         * @return {?}
         */
        CascaderWidget.prototype._clear = /**
         * @return {?}
         */
        function () {
            if (this.ui.clear)
                this.ui.clear();
        };
        CascaderWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-cascader',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-cascader [nzDisabled]=\"disabled\"\n               [nzSize]=\"ui.size\"\n               [ngModel]=\"value\"\n               (ngModelChange)=\"_change($event)\"\n               [nzOptions]=\"data\"\n               [nzAllowClear]=\"ui.allowClear\"\n               [nzAutoFocus]=\"ui.autoFocus\"\n               [nzChangeOn]=\"ui.changeOn\"\n               [nzChangeOnSelect]=\"ui.changeOnSelect\"\n               [nzColumnClassName]=\"ui.columnClassName\"\n               [nzExpandTrigger]=\"ui.expandTrigger\"\n               [nzMenuClassName]=\"ui.menuClassName\"\n               [nzMenuStyle]=\"ui.menuStyle\"\n               [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n               [nzValueProperty]=\"ui.valueProperty || 'value'\"\n               [nzLoadData]=\"loadData\"\n               [nzPlaceHolder]=\"ui.placeholder\"\n               [nzShowArrow]=\"showArrow\"\n               [nzShowInput]=\"showInput\"\n               [nzShowSearch]=\"ui.showSearch\"\n               (nzClear)=\"_clear()\"\n               (nzVisibleChange)=\"_visibleChange($event)\"\n               (nzSelectionChange)=\"_selectionChange($event)\">\n  </nz-cascader>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CascaderWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/checkbox/checkbox.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxWidget = /** @class */ (function (_super) {
        __extends(CheckboxWidget, _super);
        function CheckboxWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
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
        CheckboxWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.inited = false;
            getData(this.schema, this.ui, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.allChecked = false;
                _this.indeterminate = false;
                _this.labelTitle = list.length === 0 ? '' : ((/** @type {?} */ (_this.schema.title)));
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
        CheckboxWidget.prototype._setValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
            this.detectChanges();
            this.notifyChange(value);
        };
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.notifySet = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkList = this.data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked; }));
            this.updateAllChecked().setValue(checkList.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; })));
            this.notifyChange(checkList);
        };
        /**
         * @param {?} values
         * @return {?}
         */
        CheckboxWidget.prototype.groupInGridChange = /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.checked = values.indexOf(item.value) !== -1); }));
            this.notifySet();
        };
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.onAllChecked = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.checked = _this.allChecked); }));
            this.notifySet();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        CheckboxWidget.prototype.updateAllChecked = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            if ((/** @type {?} */ (this)).data.every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked !== true; }))) {
                (/** @type {?} */ (this)).allChecked = false;
                (/** @type {?} */ (this)).indeterminate = false;
            }
            else if ((/** @type {?} */ (this)).data.every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked === true; }))) {
                (/** @type {?} */ (this)).allChecked = true;
                (/** @type {?} */ (this)).indeterminate = false;
            }
            else {
                (/** @type {?} */ (this)).indeterminate = true;
            }
            (/** @type {?} */ (this)).detectChanges();
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @param {?} res
         * @return {?}
         */
        CheckboxWidget.prototype.notifyChange = /**
         * @private
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (this.ui.change)
                this.ui.change(res);
        };
        CheckboxWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-checkbox',
                        template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\"\n         nz-checkbox\n         class=\"sf__checkbox-all mr-sm\"\n         [(ngModel)]=\"allChecked\"\n         (ngModelChange)=\"onAllChecked()\"\n         [nzIndeterminate]=\"indeterminate\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"true\"\n              [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox\n           [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i *ngIf=\"oh\" nz-tooltip\n          [nzTooltipTitle]=\"oh.text\" [nzTooltipPlacement]=\"oh.placement\" [nzTooltipTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon [nzType]=\"oh.icon\"></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\"\n                         (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\"\n                           (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngFor=\"let i of data\">\n            <label nz-checkbox\n                   [nzValue]=\"i.value\"\n                   [ngModel]=\"i.checked\"\n                   [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CheckboxWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/custom/custom.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomWidget = /** @class */ (function (_super) {
        __extends(CustomWidget, _super);
        function CustomWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-custom',
                        template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <ng-template\n        [ngTemplateOutlet]=\"$any(ui)._render\"\n        [ngTemplateOutletContext]=\"{$implicit: this, schema: schema, ui: ui }\"\n      ></ng-template>\n    </sf-item-wrap>\n  ",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return CustomWidget;
    }(ControlUIWidget));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/date/date.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateWidget = /** @class */ (function (_super) {
        __extends(DateWidget, _super);
        function DateWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.flatRange = false;
            _this.displayValue = null;
            return _this;
        }
        Object.defineProperty(DateWidget.prototype, "zorroI18n", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.injector.get(i18n.NzI18nService);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DateWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _a = this.ui, mode = _a.mode, end = _a.end, displayFormat = _a.displayFormat, allowClear = _a.allowClear, showToday = _a.showToday;
            this.mode = mode || 'date';
            this.flatRange = end != null;
            // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
            this.startFormat = (/** @type {?} */ (this.ui._format));
            if (this.flatRange) {
                this.mode = 'range';
                /** @type {?} */
                var endUi = (/** @type {?} */ (this.endProperty.ui));
                this.endFormat = endUi.format ? endUi._format : this.startFormat;
            }
            if (!displayFormat) {
                /** @type {?} */
                var usingDateFns = isDateFns(this.zorroI18n);
                switch (this.mode) {
                    case 'year':
                        this.displayFormat = usingDateFns ? "YYYY" : "yyyy";
                        break;
                    case 'month':
                        this.displayFormat = usingDateFns ? "YYYY-MM" : "yyyy-MM";
                        break;
                    case 'week':
                        this.displayFormat = usingDateFns ? "YYYY-WW" : "yyyy-ww";
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
        DateWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.toDate(value);
            if (this.flatRange) {
                this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
            }
            else {
                this.displayValue = value;
            }
            this.detectChanges();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype._change = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == null || ((/** @type {?} */ (value))).length < 2) {
                this.setValue(null);
                this.setEnd(null);
                return;
            }
            /** @type {?} */
            var res = Array.isArray(value)
                ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
                : format(value, this.startFormat);
            if (this.flatRange) {
                this.setEnd(res[1]);
                this.setValue(res[0]);
            }
            else {
                this.setValue(res);
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        DateWidget.prototype._openChange = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (this.ui.onOpenChange)
                this.ui.onOpenChange(status);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype._ok = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.ui.onOk)
                this.ui.onOk(value);
        };
        Object.defineProperty(DateWidget.prototype, "endProperty", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return (/** @type {?} */ ((/** @type {?} */ (this.formProperty.parent)).properties))[(/** @type {?} */ (this.ui.end))];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.setEnd = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.flatRange)
                return;
            this.endProperty.setValue(value, true);
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.toDate = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
                value = new Date(+value);
            }
            return value;
        };
        DateWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-date',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n\n    <nz-year-picker *ngSwitchCase=\"'year'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-year-picker>\n\n    <nz-month-picker *ngSwitchCase=\"'month'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"></nz-month-picker>\n\n    <nz-week-picker *ngSwitchCase=\"'week'\"\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"></nz-week-picker>\n\n    <nz-range-picker *ngSwitchCase=\"'range'\"\n                     [nzDisabled]=\"disabled\"\n                     [nzSize]=\"ui.size\"\n                     [nzFormat]=\"displayFormat\"\n                     [(ngModel)]=\"displayValue\"\n                     (ngModelChange)=\"_change($event)\"\n                     [nzAllowClear]=\"i.allowClear\"\n                     [nzClassName]=\"ui.className\"\n                     [nzDisabledDate]=\"ui.disabledDate\"\n                     [nzLocale]=\"ui.locale\"\n                     [nzPlaceHolder]=\"ui.placeholder\"\n                     [nzPopupStyle]=\"ui.popupStyle\"\n                     [nzDropdownClassName]=\"ui.dropdownClassName\"\n                     (nzOnOpenChange)=\"_openChange($event)\"\n                     [nzDisabledTime]=\"ui.disabledTime\"\n                     [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                     [nzRanges]=\"ui.ranges\"\n                     [nzShowTime]=\"ui.showTime\"\n                     (nzOnOk)=\"_ok($event)\"></nz-range-picker>\n\n    <nz-date-picker *ngSwitchDefault\n                    [nzDisabled]=\"disabled\"\n                    [nzSize]=\"ui.size\"\n                    [nzFormat]=\"displayFormat\"\n                    [(ngModel)]=\"displayValue\"\n                    (ngModelChange)=\"_change($event)\"\n                    [nzAllowClear]=\"i.allowClear\"\n                    [nzClassName]=\"ui.className\"\n                    [nzDisabledDate]=\"ui.disabledDate\"\n                    [nzLocale]=\"ui.locale\"\n                    [nzPlaceHolder]=\"ui.placeholder\"\n                    [nzPopupStyle]=\"ui.popupStyle\"\n                    [nzDropdownClassName]=\"ui.dropdownClassName\"\n                    (nzOnOpenChange)=\"_openChange($event)\"\n                    [nzDisabledTime]=\"ui.disabledTime\"\n                    [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n                    [nzShowTime]=\"ui.showTime\"\n                    [nzShowToday]=\"i.showToday\"\n                    (nzOnOk)=\"_ok($event)\"></nz-date-picker>\n  </ng-container>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return DateWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/mention/mention.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MentionWidget = /** @class */ (function (_super) {
        __extends(MentionWidget, _super);
        function MentionWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = [];
            _this.loading = false;
            return _this;
        }
        /**
         * @return {?}
         */
        MentionWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this.ui, valueWith = _a.valueWith, notFoundContent = _a.notFoundContent, placement = _a.placement, prefix = _a.prefix, autosize = _a.autosize;
            this.i = {
                valueWith: valueWith || ((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.label; })),
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
                this.ui.validator = (/** @type {?} */ (((/**
                 * @return {?}
                 */
                function () {
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
        MentionWidget.prototype.reset = /**
         * @param {?} _value
         * @return {?}
         */
        function (_value) {
            var _this = this;
            getData(this.schema, this.ui, null).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} options
         * @return {?}
         */
        MentionWidget.prototype._select = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (this.ui.select)
                this.ui.select(options);
        };
        /**
         * @param {?} option
         * @return {?}
         */
        MentionWidget.prototype._search = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            var _this = this;
            if (typeof this.ui.loadData !== 'function')
                return;
            this.loading = true;
            this.ui
                .loadData(option)
                .pipe(operators.tap((/**
             * @return {?}
             */
            function () { return (_this.loading = false); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.data = res;
                _this.detectChanges(true);
            }));
        };
        MentionWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-mention',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-mention #mentions\n              [nzSuggestions]=\"data\"\n              [nzValueWith]=\"i.valueWith\"\n              [nzLoading]=\"loading\"\n              [nzNotFoundContent]=\"i.notFoundContent\"\n              [nzPlacement]=\"i.placement\"\n              [nzPrefix]=\"i.prefix\"\n              (nzOnSelect)=\"_select($event)\"\n              (nzOnSearchChange)=\"_search($event)\">\n      <input *ngIf=\"ui.inputStyle !== 'textarea'\" nzMentionTrigger\n             nz-input\n             [attr.id]=\"id\"\n             [disabled]=\"disabled\"\n             [attr.disabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [attr.maxLength]=\"schema.maxLength || null\"\n             [attr.placeholder]=\"ui.placeholder\"\n             autocomplete=\"off\" />\n      <textarea *ngIf=\"ui.inputStyle === 'textarea'\" nzMentionTrigger\n                nz-input\n                [attr.id]=\"id\"\n                [disabled]=\"disabled\"\n                [attr.disabled]=\"disabled\"\n                [nzSize]=\"ui.size\"\n                [ngModel]=\"value\"\n                (ngModelChange)=\"setValue($event)\"\n                [attr.maxLength]=\"schema.maxLength || null\"\n                [attr.placeholder]=\"ui.placeholder\"\n                [nzAutosize]=\"i.autosize\">\n        </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        MentionWidget.propDecorators = {
            mentionChild: [{ type: core.ViewChild, args: ['mentions', { static: true },] }]
        };
        return MentionWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/number/number.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberWidget = /** @class */ (function (_super) {
        __extends(NumberWidget, _super);
        function NumberWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.formatter = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value; });
            _this.parser = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value; });
            return _this;
        }
        /**
         * @return {?}
         */
        NumberWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
                ui.formatter = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return (value == null ? '' : ui.prefix + " " + value); });
                ui.parser = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value.replace(ui.prefix + " ", ''); });
            }
            if (ui.unit != null) {
                ui.formatter = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return (value == null ? '' : value + " " + ui.unit); });
                ui.parser = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value.replace(" " + ui.unit, ''); });
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
        NumberWidget.prototype._setValue = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
        };
        NumberWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-number',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-input-number [ngModel]=\"value\"\n                   (ngModelChange)=\"_setValue($event)\"\n                   [nzDisabled]=\"disabled\"\n                   [nzSize]=\"ui.size\"\n                   [nzMin]=\"min\"\n                   [nzMax]=\"max\"\n                   [nzStep]=\"step\"\n                   [nzFormatter]=\"formatter\"\n                   [nzParser]=\"parser\"\n                   [nzPrecision]=\"ui.precision\"\n                   [nzPlaceHolder]=\"ui.placeholder || ''\"\n                   [style.width.px]=\"ui.widgetWidth || 90\">\n  </nz-input-number>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return NumberWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/object/object.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ObjectWidget = /** @class */ (function (_super) {
        __extends(ObjectWidget, _super);
        function ObjectWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = [];
            return _this;
        }
        /**
         * @return {?}
         */
        ObjectWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            var _b = this, formProperty = _b.formProperty, ui = _b.ui;
            var grid = ui.grid, showTitle = ui.showTitle;
            if (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true) {
                this.title = (/** @type {?} */ (this.schema.title));
            }
            this.grid = (/** @type {?} */ (grid));
            /** @type {?} */
            var list = [];
            try {
                for (var _c = __values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
                    /** @type {?} */
                    var property = (/** @type {?} */ ((/** @type {?} */ (formProperty.properties))[key]));
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
        ObjectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-object',
                        template: "<div *ngIf=\"title\" class=\"sf__title\">{{ title }}</div>\n<ng-container *ngIf=\"grid; else noGrid\">\n  <div nz-row\n       [nzGutter]=\"grid.gutter\">\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <div nz-col\n             [nzSpan]=\"i.grid.span\"\n             [nzOffset]=\"i.grid.offset\"\n             [nzXs]=\"i.grid.xs\"\n             [nzSm]=\"i.grid.sm\"\n             [nzMd]=\"i.grid.md\"\n             [nzLg]=\"i.grid.lg\"\n             [nzXl]=\"i.grid.xl\"\n             [nzXXl]=\"i.grid.xxl\">\n          <sf-item [formProperty]=\"i.property\"\n                   [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #noGrid>\n  <ng-container *ngFor=\"let i of list\">\n    <ng-container *ngIf=\"i.property.visible && i.show\">\n      <sf-item [formProperty]=\"i.property\"\n               [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n    </ng-container>\n  </ng-container>\n</ng-template>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return ObjectWidget;
    }(ObjectLayoutWidget));
    if (false) {
        /** @type {?} */
        ObjectWidget.prototype.grid;
        /** @type {?} */
        ObjectWidget.prototype.list;
        /** @type {?} */
        ObjectWidget.prototype.title;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/radio/radio.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadioWidget = /** @class */ (function (_super) {
        __extends(RadioWidget, _super);
        function RadioWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = [];
            return _this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        RadioWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.styleType = (this.ui.styleType || 'default') === 'default';
            getData(this.schema, this.ui, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list.map((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
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
        RadioWidget.prototype._setValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
            if (this.ui.change)
                this.ui.change(value);
        };
        RadioWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-radio',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-radio-group [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzName]=\"id\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"_setValue($event)\"\n                  [nzButtonStyle]=\"ui.buttonStyle || 'outline'\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\"\n             nz-radio-button\n             [nzValue]=\"option.value\"\n             [nzDisabled]=\"option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return RadioWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        RadioWidget.prototype.data;
        /** @type {?} */
        RadioWidget.prototype.styleType;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/rate/rate.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RateWidget = /** @class */ (function (_super) {
        __extends(RateWidget, _super);
        function RateWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasText = false;
            return _this;
        }
        Object.defineProperty(RateWidget.prototype, "text", {
            get: /**
             * @return {?}
             */
            function () {
                return ((/** @type {?} */ (this.ui.text))).replace('{{value}}', this.formProperty.value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RateWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _a = this, schema = _a.schema, ui = _a.ui;
            this.count = schema.maximum || 5;
            this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
            this.allowClear = toBool(ui.allowClear, true);
            this.autoFocus = toBool(ui.autoFocus, false);
            this.hasText = !!ui.text;
        };
        RateWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-rate',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-rate [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [nzAllowClear]=\"allowClear\"\n           [nzAllowHalf]=\"allowHalf\"\n           [nzAutoFocus]=\"autoFocus\"\n           [nzCount]=\"count\"></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\"\n        class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return RateWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/select/select.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectWidget = /** @class */ (function (_super) {
        __extends(SelectWidget, _super);
        function SelectWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasGroup = false;
            return _this;
        }
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        SelectWidget.prototype.checkGroup = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            this.hasGroup = (list || []).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.group === true; })).length > 0;
        };
        /**
         * @return {?}
         */
        SelectWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _a = this.ui, autoClearSearchValue = _a.autoClearSearchValue, allowClear = _a.allowClear, autoFocus = _a.autoFocus, dropdownClassName = _a.dropdownClassName, dropdownMatchSelectWidth = _a.dropdownMatchSelectWidth, serverSearch = _a.serverSearch, maxMultipleCount = _a.maxMultipleCount, mode = _a.mode, notFoundContent = _a.notFoundContent, showSearch = _a.showSearch, tokenSeparators = _a.tokenSeparators, maxTagCount = _a.maxTagCount, compareWith = _a.compareWith;
            this.i = {
                autoClearSearchValue: toBool(autoClearSearchValue, true),
                allowClear: allowClear,
                autoFocus: toBool(autoFocus, false),
                dropdownClassName: dropdownClassName || null,
                dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
                serverSearch: toBool(serverSearch, false),
                maxMultipleCount: maxMultipleCount || Infinity,
                mode: mode || 'default',
                notFoundContent: notFoundContent,
                showSearch: toBool(showSearch, true),
                tokenSeparators: tokenSeparators || [],
                maxTagCount: maxTagCount || undefined,
                compareWith: compareWith || ((/**
                 * @param {?} o1
                 * @param {?} o2
                 * @return {?}
                 */
                function (o1, o2) { return o1 === o2; })),
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
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
        SelectWidget.prototype.change = /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            if (this.ui.change) {
                this.ui.change(values);
            }
            this.setValue(values == null ? undefined : values);
        };
        /**
         * @param {?} status
         * @return {?}
         */
        SelectWidget.prototype.openChange = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (this.ui.openChange) {
                this.ui.openChange(status);
            }
        };
        /**
         * @param {?} text
         * @return {?}
         */
        SelectWidget.prototype.searchChange = /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            var _this = this;
            if (this.ui.onSearch) {
                this.ui.onSearch(text).then((/**
                 * @param {?} list
                 * @return {?}
                 */
                function (list) {
                    _this.data = list;
                    _this.checkGroup(list);
                    _this.detectChanges();
                }));
                return;
            }
            this.detectChanges();
        };
        /**
         * @return {?}
         */
        SelectWidget.prototype.scrollToBottom = /**
         * @return {?}
         */
        function () {
            if (this.ui.scrollToBottom) {
                this.ui.scrollToBottom();
            }
        };
        SelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-select',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-select [nzDisabled]=\"disabled\"\n             [nzSize]=\"ui.size\"\n             [(ngModel)]=\"_value\"\n             (ngModelChange)=\"change($event)\"\n             [nzPlaceHolder]=\"ui.placeholder\"\n             [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n             [nzAllowClear]=\"i.allowClear\"\n             [nzAutoFocus]=\"i.autoFocus\"\n             [nzDropdownClassName]=\"i.dropdownClassName\"\n             [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n             [nzServerSearch]=\"i.serverSearch\"\n             [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n             [nzMode]=\"i.mode\"\n             [nzNotFoundContent]=\"i.notFoundContent\"\n             [nzShowSearch]=\"i.showSearch\"\n             [nzTokenSeparators]=\"i.tokenSeparators\"\n             [nzMaxTagCount]=\"i.maxTagCount\"\n             [compareWith]=\"i.compareWith\"\n             (nzOpenChange)=\"openChange($event)\"\n             (nzOnSearch)=\"searchChange($event)\"\n             (nzScrollToBottom)=\"scrollToBottom()\">\n    <ng-container *ngIf=\"!hasGroup\">\n      <nz-option *ngFor=\"let o of data\"\n                 [nzLabel]=\"o.label\"\n                 [nzValue]=\"o.value\"\n                 [nzDisabled]=\"o.disabled\">\n      </nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\"\n                       [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\"\n                   [nzLabel]=\"o.label\"\n                   [nzValue]=\"o.value\"\n                   [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </nz-option-group>\n    </ng-container>\n  </nz-select>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return SelectWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        SelectWidget.prototype.i;
        /** @type {?} */
        SelectWidget.prototype.data;
        /** @type {?} */
        SelectWidget.prototype._value;
        /** @type {?} */
        SelectWidget.prototype.hasGroup;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/slider/slider.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SliderWidget = /** @class */ (function (_super) {
        __extends(SliderWidget, _super);
        function SliderWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._formatter = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
        SliderWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        SliderWidget.prototype._afterChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var afterChange = this.ui.afterChange;
            if (afterChange)
                return afterChange(value);
        };
        SliderWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-slider',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-slider [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzRange]=\"ui.range\"\n             [nzMin]=\"min\"\n             [nzMax]=\"max\"\n             [nzStep]=\"step\"\n             [nzMarks]=\"marks\"\n             [nzDots]=\"ui.dots\"\n             [nzIncluded]=\"included\"\n             [nzVertical]=\"ui.vertical\"\n             [nzTipFormatter]=\"_formatter\"\n             (nzOnAfterChange)=\"_afterChange($event)\">\n  </nz-slider>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return SliderWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/string/string.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StringWidget = /** @class */ (function (_super) {
        __extends(StringWidget, _super);
        function StringWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        StringWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _a = this.ui, addOnAfter = _a.addOnAfter, addOnAfterIcon = _a.addOnAfterIcon, addOnBefore = _a.addOnBefore, addOnBeforeIcon = _a.addOnBeforeIcon, prefix = _a.prefix, prefixIcon = _a.prefixIcon, suffix = _a.suffix, suffixIcon = _a.suffixIcon;
            this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
                ? 'addon'
                : '';
        };
        /**
         * @param {?} value
         * @return {?}
         */
        StringWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value && this.schema.format === 'color') {
                this.setValue('#000000');
            }
        };
        StringWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-string',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <ng-template #ipt>\n    <input nz-input\n           [attr.id]=\"id\"\n           [disabled]=\"disabled\"\n           [attr.disabled]=\"disabled\"\n           [nzSize]=\"ui.size\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"setValue($event)\"\n           [attr.maxLength]=\"schema.maxLength || null\"\n           [attr.type]=\"ui.type || 'text'\"\n           [attr.placeholder]=\"ui.placeholder\"\n           [attr.autocomplete]=\"ui.autocomplete\"\n           [attr.autoFocus]=\"ui.autofocus\">\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group [nzAddOnBefore]=\"ui.addOnBefore\"\n                    [nzAddOnAfter]=\"ui.addOnAfter\"\n                    [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n                    [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n                    [nzPrefix]=\"ui.prefix\"\n                    [nzPrefixIcon]=\"ui.prefixIcon\"\n                    [nzSuffix]=\"ui.suffix\"\n                    [nzSuffixIcon]=\"ui.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return StringWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        StringWidget.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/tag/tag.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TagWidget = /** @class */ (function (_super) {
        __extends(TagWidget, _super);
        function TagWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TagWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        TagWidget.prototype.onChange = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = !item.checked;
            this.updateValue();
            if (this.ui.checkedChange) {
                this.ui.checkedChange(item.checked);
            }
        };
        /**
         * @return {?}
         */
        TagWidget.prototype._afterClose = /**
         * @return {?}
         */
        function () {
            if (this.ui.afterClose)
                this.ui.afterClose();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TagWidget.prototype._close = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.ui.onClose)
                this.ui.onClose(e);
        };
        /**
         * @private
         * @return {?}
         */
        TagWidget.prototype.updateValue = /**
         * @private
         * @return {?}
         */
        function () {
            this.formProperty.setValue(this.data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked; })).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.value; })), false);
        };
        TagWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-tag',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-tag *ngFor=\"let i of data\"\n          [nzMode]=\"ui.mode || 'checkable'\"\n          [nzChecked]=\"i.checked\"\n          (nzAfterClose)=\"_afterClose()\"\n          (nzOnClose)=\"_close($event)\"\n          (nzCheckedChange)=\"onChange(i)\">\n    {{i.label}}\n  </nz-tag>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TagWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        TagWidget.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/text/text.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextWidget = /** @class */ (function (_super) {
        __extends(TextWidget, _super);
        function TextWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        TextWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.ui._required = false;
        };
        TextWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-text',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  {{ value || ui.defaultText || '-' }}\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TextWidget;
    }(ControlUIWidget));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/textarea/textarea.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextareaWidget = /** @class */ (function (_super) {
        __extends(TextareaWidget, _super);
        function TextareaWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.autosize = true;
            return _this;
        }
        /**
         * @return {?}
         */
        TextareaWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var autosize = this.ui.autosize;
            if (autosize != null) {
                this.autosize = autosize;
            }
        };
        TextareaWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-textarea',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <textarea nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"autosize\">\n    </textarea>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TextareaWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        TextareaWidget.prototype.autosize;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/time/time.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimeWidget = /** @class */ (function (_super) {
        __extends(TimeWidget, _super);
        function TimeWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.displayValue = null;
            return _this;
        }
        /**
         * @return {?}
         */
        TimeWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        TimeWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        TimeWidget.prototype._change = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value == null) {
                this.setValue(null);
                return;
            }
            if (this.ui.utcEpoch === true) {
                this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
                return;
            }
            this.setValue(format(value, this.valueFormat));
        };
        TimeWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-time',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-time-picker [(ngModel)]=\"displayValue\"\n                  (ngModelChange)=\"_change($event)\"\n                  [nzDisabled]=\"disabled\"\n                  [nzSize]=\"ui.size\"\n                  [nzFormat]=\"i.displayFormat\"\n                  [nzAllowEmpty]=\"i.allowEmpty\"\n                  [nzClearText]=\"i.clearText\"\n                  [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n                  [nzDisabledHours]=\"ui.disabledHours\"\n                  [nzDisabledMinutes]=\"ui.disabledMinutes\"\n                  [nzDisabledSeconds]=\"ui.disabledSeconds\"\n                  [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n                  [nzUse12Hours]=\"i.use12Hours\"\n                  [nzHourStep]=\"i.hourStep\"\n                  [nzMinuteStep]=\"i.minuteStep\"\n                  [nzSecondStep]=\"i.secondStep\"\n                  [nzPopupClassName]=\"ui.popupClassName\">\n  </nz-time-picker>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TimeWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/transfer/transfer.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TransferWidget = /** @class */ (function (_super) {
        __extends(TransferWidget, _super);
        function TransferWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = [];
            _this._data = [];
            _this._canMove = (/**
             * @param {?} arg
             * @return {?}
             */
            function (arg) {
                return _this.ui.canMove ? _this.ui.canMove(arg) : rxjs.of(arg.list);
            });
            return _this;
        }
        /**
         * @return {?}
         */
        TransferWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
        TransferWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            getData(this.schema, this.ui, null).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                /** @type {?} */
                var formData = value;
                if (!Array.isArray(formData)) {
                    formData = [formData];
                }
                list.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (~((/** @type {?} */ (formData))).indexOf(item.value)) {
                        item.direction = 'right';
                    }
                }));
                _this.list = list;
                _this._data = list.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w.direction === 'right'; }));
                _this.notify();
                _this.detectChanges();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TransferWidget.prototype.notify = /**
         * @private
         * @return {?}
         */
        function () {
            this.formProperty.setValue(this._data.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.value; })), false);
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._change = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _a;
            if (options.to === 'right') {
                this._data = (_a = this._data).concat.apply(_a, __spread(options.list));
            }
            else {
                this._data = this._data.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return options.list.indexOf(w) === -1; }));
            }
            if (this.ui.change)
                this.ui.change(options);
            this.notify();
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._searchChange = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (this.ui.searchChange)
                this.ui.searchChange(options);
            this.detectChanges();
        };
        /**
         * @param {?} options
         * @return {?}
         */
        TransferWidget.prototype._selectChange = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (this.ui.selectChange)
                this.ui.selectChange(options);
            this.detectChanges();
        };
        TransferWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-transfer',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-transfer [nzDataSource]=\"list\"\n               [nzTitles]=\"i.titles\"\n               [nzOperations]=\"i.operations\"\n               [nzListStyle]=\"ui.listStyle\"\n               [nzItemUnit]=\"i.itemUnit\"\n               [nzItemsUnit]=\"i.itemsUnit\"\n               [nzShowSearch]=\"ui.showSearch\"\n               [nzFilterOption]=\"ui.filterOption\"\n               [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n               [nzNotFoundContent]=\"ui.notFoundContent\"\n               [nzCanMove]=\"_canMove\"\n               (nzChange)=\"_change($event)\"\n               (nzSearchChange)=\"_searchChange($event)\"\n               (nzSelectChange)=\"_selectChange($event)\">\n  </nz-transfer>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TransferWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/tree-select/tree-select.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeSelectWidget = /** @class */ (function (_super) {
        __extends(TreeSelectWidget, _super);
        function TreeSelectWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = [];
            return _this;
        }
        /**
         * @return {?}
         */
        TreeSelectWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var ui = this.ui;
            this.i = {
                allowClear: ui.allowClear,
                showSearch: toBool(ui.showSearch, false),
                dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
                multiple: toBool(ui.multiple, false),
                checkable: toBool(ui.checkable, false),
                showExpand: toBool(ui.showExpand, true),
                showLine: toBool(ui.showLine, false),
                asyncData: typeof ui.expandChange === 'function',
                defaultExpandAll: toBool(ui.defaultExpandAll, false),
                defaultExpandedKeys: ui.defaultExpandedKeys || [],
                displayWith: ui.displayWith || ((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node.title; })),
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TreeSelectWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            getData(this.schema, this.ui, value).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.data = list;
                _this.detectChanges();
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TreeSelectWidget.prototype.change = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.ui.change)
                this.ui.change(value);
            this.setValue(value);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        TreeSelectWidget.prototype.expandChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            var ui = this.ui;
            if (typeof ui.expandChange !== 'function')
                return;
            ui.expandChange(e).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                (/** @type {?} */ (e.node)).clearChildren();
                (/** @type {?} */ (e.node)).addChildren(res);
                _this.detectChanges();
            }));
        };
        TreeSelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-tree-select',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-tree-select [nzAllowClear]=\"i.allowClear\"\n                  [nzPlaceHolder]=\"ui.placeholder\"\n                  [nzDisabled]=\"disabled\"\n                  [nzShowSearch]=\"i.showSearch\"\n                  [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n                  [nzDropdownStyle]=\"ui.dropdownStyle\"\n                  [nzMultiple]=\"i.multiple\"\n                  [nzSize]=\"ui.size\"\n                  [nzCheckable]=\"i.checkable\"\n                  [nzShowExpand]=\"i.showExpand\"\n                  [nzShowLine]=\"i.showLine\"\n                  [nzAsyncData]=\"i.asyncData\"\n                  [nzNodes]=\"data\"\n                  [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n                  [nzDefaultExpandedKeys]=\"i.defaultExpandedKeys\"\n                  [nzDisplayWith]=\"i.displayWith\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"change($event)\"\n                  (nzExpandChange)=\"expandChange($event)\">\n  </nz-tree-select>\n\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return TreeSelectWidget;
    }(ControlUIWidget));
    if (false) {
        /** @type {?} */
        TreeSelectWidget.prototype.i;
        /** @type {?} */
        TreeSelectWidget.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/upload/upload.widget.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UploadWidget = /** @class */ (function (_super) {
        __extends(UploadWidget, _super);
        function UploadWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fileList = [];
            _this.btnType = '';
            _this.handleRemove = (/**
             * @return {?}
             */
            function () {
                _this._setValue(_this.fileList);
                return true;
            });
            _this.handlePreview = (/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
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
        UploadWidget.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _a = this.ui, type = _a.type, text = _a.text, hint = _a.hint, action = _a.action, accept = _a.accept, limit = _a.limit, filter = _a.filter, fileSize = _a.fileSize, fileType = _a.fileType, listType = _a.listType, multiple = _a.multiple, name = _a.name, showUploadList = _a.showUploadList, withCredentials = _a.withCredentials, resReName = _a.resReName, urlReName = _a.urlReName, beforeUpload = _a.beforeUpload, customRequest = _a.customRequest, directory = _a.directory, openFileDialogOnClick = _a.openFileDialogOnClick;
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
        UploadWidget.prototype.change = /**
         * @param {?} args
         * @return {?}
         */
        function (args) {
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
        UploadWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            var fileList = this.ui.fileList;
            (fileList ? rxjs.of(fileList) : Array.isArray(value) ? rxjs.of(value) : getData(this.schema, this.ui, null)).subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.fileList = (/** @type {?} */ (list));
                _this._setValue(_this.fileList);
                _this.detectChanges();
            }));
        };
        /**
         * @private
         * @param {?} file
         * @return {?}
         */
        UploadWidget.prototype._getValue = /**
         * @private
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return util.deepGet(file.response, this.i.resReName, file.response);
        };
        /**
         * @private
         * @param {?} fileList
         * @return {?}
         */
        UploadWidget.prototype._setValue = /**
         * @private
         * @param {?} fileList
         * @return {?}
         */
        function (fileList) {
            var _this = this;
            fileList
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return !file.url; }))
                .forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.url = util.deepGet(file.response, _this.i.urlReName);
            }));
            /** @type {?} */
            var res = fileList.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.status === 'done'; })).map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return _this._getValue(file); }));
            this.setValue(this.i.multiple === true ? res : res.pop());
        };
        UploadWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-upload',
                        template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-upload [nzType]=\"i.type\"\n             [(nzFileList)]=\"fileList\"\n             [nzDisabled]=\"disabled\"\n             [nzAction]=\"i.action\"\n             [nzDirectory]=\"i.directory\"\n             [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n             [nzAccept]=\"i.accept\"\n             [nzLimit]=\"i.limit\"\n             [nzFilter]=\"i.filter\"\n             [nzSize]=\"i.size\"\n             [nzFileType]=\"i.fileType\"\n             [nzHeaders]=\"ui.headers\"\n             [nzData]=\"ui.data\"\n             [nzListType]=\"i.listType\"\n             [nzMultiple]=\"i.multiple\"\n             [nzName]=\"i.name\"\n             [nzShowUploadList]=\"i.showUploadList\"\n             [nzWithCredentials]=\"i.withCredentials\"\n             [nzBeforeUpload]=\"i.beforeUpload\"\n             [nzCustomRequest]=\"i.customRequest\"\n             [nzRemove]=\"ui.remove || handleRemove\"\n             [nzPreview]=\"handlePreview\"\n             (nzChange)=\"change($event)\">\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\" nz-button>\n          <i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n        </button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return UploadWidget;
    }(ControlUIWidget));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/nz-widget.registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        DelonFormModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DelonFormModule,
                providers: [
                    {
                        provide: SchemaValidatorFactory,
                        useClass: AjvSchemaValidatorFactory,
                    },
                    { provide: WidgetRegistry, useClass: NzWidgetRegistry },
                ],
            };
        };
        DelonFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([common.CommonModule, forms.FormsModule, util.DelonUtilModule, theme.DelonLocaleModule], ZORROS),
                        declarations: __spread(COMPONENTS, WIDGETS),
                        entryComponents: __spread(WIDGETS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return DelonFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: src/schema/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFSchemaDefinition() { }
    /**
     * @record
     */
    function SFSchemaEnum() { }
    if (false) {
        /**
         * 是否禁用状态
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.disabled;
        /**
         * 文本
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.label;
        /**
         * 文本
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.title;
        /**
         * 值
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.value;
        /**
         * 主键，适用部分小部件数据键名，例如：`tree-select`
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.key;
        /**
         * 是否选中
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.checked;
        /**
         * 组名，适用部分允许组列表的小部件，例如：`select`
         * - 组对应的文本为 `label`
         * - `children` 为子项
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.group;
        /**
         * 组对应的子类
         * @type {?|undefined}
         */
        SFSchemaEnum.prototype.children;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * JSON Schema Form 结构体
     *
     * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
     * @record
     */
    function SFSchema() { }
    if (false) {
        /**
         * 数据类型，支持 JavaScript 基础类型；注意项：
         *
         * - `integer` 表示整型，`number` 表示浮点型
         * - JSON 中 `date` 等同 `string` 类型
         * - 指定 `format` 标准参数可以自动适配渲染小部件
         * - 指定 `widget` 参数强制渲染小部件
         * @type {?|undefined}
         */
        SFSchema.prototype.type;
        /**
         * 枚举，静态数据源，例如：`radio`、`checkbox` 等
         *
         * - `disabled` 属性表示：禁用状态
         * - `label` 属性表示：文本
         * - `value` 属性表示：返回值
         * - 基础数据类型数组会自动转化成 `SFSchemaEnum` 数组格式
         * @type {?|undefined}
         */
        SFSchema.prototype.enum;
        /**
         * 最小值
         * @type {?|undefined}
         */
        SFSchema.prototype.minimum;
        /**
         * 约束是否包括 `minimum` 值
         * @type {?|undefined}
         */
        SFSchema.prototype.exclusiveMinimum;
        /**
         * 最大值
         * @type {?|undefined}
         */
        SFSchema.prototype.maximum;
        /**
         * 约束是否包括 `maximum` 值
         * @type {?|undefined}
         */
        SFSchema.prototype.exclusiveMaximum;
        /**
         * 倍数
         * @type {?|undefined}
         */
        SFSchema.prototype.multipleOf;
        /**
         * 定义字符串的最大长度
         * @type {?|undefined}
         */
        SFSchema.prototype.maxLength;
        /**
         * 定义字符串的最小长度
         * @type {?|undefined}
         */
        SFSchema.prototype.minLength;
        /**
         * 验证输入字段正则表达式字符串，若指定 `format: 'regex'` 时务必指定
         * @type {?|undefined}
         */
        SFSchema.prototype.pattern;
        /**
         * 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持
         *
         * ```json
         * items: {
         *   type: 'object',
         *   properties: {
         *     name: { type: 'string' },
         *     age: { type: 'number' }
         *   }
         * }
         * ```
         *
         * 结果
         *
         * ```json
         * [
         *   { "name": "cipchk1", "age": 18 },
         *   { "name": "cipchk2", "age": 16 }
         * ]
         * ```
         * @type {?|undefined}
         */
        SFSchema.prototype.items;
        /**
         * 约束数组最小的元素个数
         * - `type="array"` 时有效
         * @type {?|undefined}
         */
        SFSchema.prototype.minItems;
        /**
         * 约束数组最大的元素个数
         * - `type="array"` 时有效
         * @type {?|undefined}
         */
        SFSchema.prototype.maxItems;
        /**
         * 约束数组每个元素都不相同
         * - `type="array"` 时有效
         * @type {?|undefined}
         */
        SFSchema.prototype.uniqueItems;
        /**
         * 数组额外元素的校验规则
         * @type {?|undefined}
         */
        SFSchema.prototype.additionalItems;
        /**
         * 最大属性个数，必须是非负整数
         * @type {?|undefined}
         */
        SFSchema.prototype.maxProperties;
        /**
         * 最小属性个数，必须是非负整数
         * @type {?|undefined}
         */
        SFSchema.prototype.minProperties;
        /**
         * 必填项属性
         * @type {?|undefined}
         */
        SFSchema.prototype.required;
        /**
         * 定义属性
         * @type {?|undefined}
         */
        SFSchema.prototype.properties;
        /**
         * 条件验证
         * - 必须包含 `properties` 节点
         *  - 键名必须是当前节点 `properties` 值之一
         *  - 利用 `enum` 属性表示条件值，支持 `$ANY$` 表示任意值
         * - 不支持跨 Schema 节点
         * - 当条件成功会执行 `then` 否则执行 `else`
         * - `if`和`then` 是必须同时出现，`else` 可选项
         * @type {?|undefined}
         */
        SFSchema.prototype.if;
        /**
         * 条件成功时执行
         * - 只支持 `required` 参数，用于表示显示
         * @type {?|undefined}
         */
        SFSchema.prototype.then;
        /**
         * 条件失败时执行
         * - 只支持 `required` 参数，用于表示显示
         * @type {?|undefined}
         */
        SFSchema.prototype.else;
        /**
         * *不建议** 使用，可用 `required` 替代
         * @type {?|undefined}
         */
        SFSchema.prototype.allOf;
        /**
         * *不建议** 使用，可用 `required` 和 `minProperties` 替代
         * @type {?|undefined}
         */
        SFSchema.prototype.anyOf;
        /**
         * 值必须是其中之一
         * @type {?|undefined}
         */
        SFSchema.prototype.oneOf;
        /**
         * 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3)
         * - `date-time` 日期时间，渲染为 `date`，[RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6)
         * - `date`、`full-date` 日期，渲染为 `date`
         * - `time`、`full-time` 时间，渲染为 `time`
         * - `email` Email格式，渲染为 `autocomplete`
         * - 非标准：`week`，渲染为 `nz-week-picker`
         * - 非标准：`month`，渲染为 `nz-month-picker`
         * - `ip` IP地址，渲染为 `input`
         * - `uri` URL地址，渲染为 `upload`
         * - `regex` 正则表达式，必须指定 `pattern` 属性，渲染为 `input`
         * - `mobile` 手机号
         * - `id-card` 身份证
         * - `color` 颜色值
         * @type {?|undefined}
         */
        SFSchema.prototype.format;
        /**
         * 属性描述，相当于 `label` 值，按以下规则展示：
         * - 当值为 `null`、`undefined` 时使用 `key` 替代
         * - 当值为 `''` 空字符串表示不展示 `label` 部分，例如：`checkbox` 可能需要
         * @type {?|undefined}
         */
        SFSchema.prototype.title;
        /**
         * 属性目的性解释
         * @type {?|undefined}
         */
        SFSchema.prototype.description;
        /**
         * 默认值
         * @type {?|undefined}
         */
        SFSchema.prototype.default;
        /**
         * 是否只读状态
         * @type {?|undefined}
         */
        SFSchema.prototype.readOnly;
        /**
         * 内部类型定义体
         * @type {?|undefined}
         */
        SFSchema.prototype.definitions;
        /**
         * 引用定义体
         * @type {?|undefined}
         */
        SFSchema.prototype.$ref;
        /**
         * 针对开发者的注释，无任何意义，也不会被校验
         * @type {?|undefined}
         */
        SFSchema.prototype.$comment;
        /**
         * *唯一非标准：** 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值
         * @type {?|undefined}
         */
        SFSchema.prototype.ui;
        /* Skipping unhandled member: [key: string]: any;*/
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/schema/ui.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFGridSizeSchema() { }
    if (false) {
        /** @type {?|undefined} */
        SFGridSizeSchema.prototype.span;
        /** @type {?|undefined} */
        SFGridSizeSchema.prototype.order;
        /** @type {?|undefined} */
        SFGridSizeSchema.prototype.offset;
        /** @type {?|undefined} */
        SFGridSizeSchema.prototype.push;
        /** @type {?|undefined} */
        SFGridSizeSchema.prototype.pull;
    }
    /**
     * @record
     */
    function SFGridSchema() { }
    if (false) {
        /**
         * 栅格间隔
         * @type {?|undefined}
         */
        SFGridSchema.prototype.gutter;
        /**
         * 栅格占位格数，为 `0` 时相当于 `display: none`
         * @type {?|undefined}
         */
        SFGridSchema.prototype.span;
        /**
         * 数据栅格占位格数，为 `0` 时相当于 `display: none`
         * @type {?|undefined}
         */
        SFGridSchema.prototype.arraySpan;
        /**
         * 栅格左侧的间隔格数，间隔内不可以有栅格
         * @type {?|undefined}
         */
        SFGridSchema.prototype.offset;
        /** @type {?|undefined} */
        SFGridSchema.prototype.xs;
        /** @type {?|undefined} */
        SFGridSchema.prototype.sm;
        /** @type {?|undefined} */
        SFGridSchema.prototype.md;
        /** @type {?|undefined} */
        SFGridSchema.prototype.lg;
        /** @type {?|undefined} */
        SFGridSchema.prototype.xl;
        /** @type {?|undefined} */
        SFGridSchema.prototype.xxl;
    }
    /**
     * @record
     */
    function SFRenderSchema() { }
    if (false) {
        /**
         * 指定采用什么小部件渲染，所有小部件名可[查阅文档](https://ng-alain.com/)
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.widget;
        /**
         * 自定义类，等同 `[ngClass]` 值
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.class;
        /**
         * 元素组件大小
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.size;
        /**
         * 指定宽度，单位：`px`
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.width;
        /**
         * 响应式属性
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.grid;
        /**
         * 标签可选信息
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.optional;
        /**
         * 标签可选帮助，使用 `nz-tooltip` 展示
         * @type {?|undefined}
         */
        SFRenderSchema.prototype.optionalHelp;
    }
    /**
     * @record
     */
    function SFOptionalHelp() { }
    if (false) {
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.text;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.i18n;
        /**
         * 图标，默认：`question-circle`
         * @type {?|undefined}
         */
        SFOptionalHelp.prototype.icon;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.placement;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.trigger;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.mouseEnterDelay;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.mouseLeaveDelay;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.overlayClassName;
        /** @type {?|undefined} */
        SFOptionalHelp.prototype.overlayStyle;
    }
    /**
     * @record
     */
    function SFHorizontalLayoutSchema() { }
    if (false) {
        /**
         * `label` 栅格占位格数，默认：`5`
         * - `0` 时相当于 `display: none`
         * - 限 `horizontal` 水平布局有效
         * @type {?|undefined}
         */
        SFHorizontalLayoutSchema.prototype.spanLabel;
        /**
         * `control` 栅格占位格数，默认：`19`
         * - `0` 时相当于 `display: none`
         * - 限 `horizontal` 水平布局有效
         * @type {?|undefined}
         */
        SFHorizontalLayoutSchema.prototype.spanControl;
        /**
         * `control` 栅格左侧的间隔格数，间隔内不可以有栅格
         * - 限 `horizontal` 水平布局有效
         * @type {?|undefined}
         */
        SFHorizontalLayoutSchema.prototype.offsetControl;
        /**
         * `label` 固定宽度
         * - 限 `horizontal` 水平布局有效
         * @type {?|undefined}
         */
        SFHorizontalLayoutSchema.prototype.spanLabelFixed;
    }
    /**
     * @record
     */
    function SFSchemaI18n() { }
    if (false) {
        /**
         * 指 `schema.title` 的国际化键值
         * @type {?|undefined}
         */
        SFSchemaI18n.prototype.i18n;
        /**
         * 对应 `schema.description` 国际化
         * @type {?|undefined}
         */
        SFSchemaI18n.prototype.descriptionI18n;
    }
    /**
     * 指定如何渲染 `Schema`
     * @record
     */
    function SFUISchemaItem() { }
    if (false) {
        /**
         * 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用
         * @type {?|undefined}
         */
        SFUISchemaItem.prototype.debug;
        /**
         * 属性顺序
         *
         * 当你只想某几个属性靠前时，则允许使用通配符 `*` 来表示剩余部分，且只允许出现一次
         *
         * \@example
         *
         * [ 'a', 'b', 'c', 'd' ] + [ 'c', 'b', '*' ] = [ 'c', 'b', 'a', 'd']
         * @type {?|undefined}
         */
        SFUISchemaItem.prototype.order;
        /**
         * 是否隐藏
         * @type {?|undefined}
         */
        SFUISchemaItem.prototype.hidden;
        /**
         * 指定条件时才显示，但需要**注意**：
         * - 键值表示监听对象属性名
         * - JSON Schema 校验是各属性独立运行，监听对象属性每一次值变化都会重新做一次整个JSON结构计算
         *
         * 有效格式包括：
         * - `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
         * - `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
         * - `visibleIf: { shown: (value: any) => value > 0 }`：复杂表达式
         * @type {?|undefined}
         */
        SFUISchemaItem.prototype.visibleIf;
        /**
         * ACL 配置
         * @type {?|undefined}
         */
        SFUISchemaItem.prototype.acl;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * UI Schema，KEY名**务必**是 `$` 开头（例如：`$name`、`$id`），以便能区分KEY值还是UI选项
     * - 结构层级应同 `SFSchema` 一致
     * - 当KEY为 `*` 时表示对所有子表单元素都有效
     * @record
     */
    function SFUISchema() { }
    /**
     * 内部运行时使用
     * @record
     */
    function SFUISchemaItemRun() { }
    if (false) {
        /**
         * \@internal 自定义模板
         * @type {?|undefined}
         */
        SFUISchemaItemRun.prototype._render;
        /**
         * \@internal 是否必填
         * @type {?|undefined}
         */
        SFUISchemaItemRun.prototype._required;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/interface.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFButton() { }
    if (false) {
        /**
         * 提交按钮文本，默认：`提交`
         * @type {?|undefined}
         */
        SFButton.prototype.submit;
        /**
         * 提交按钮类型，默认：`primary`
         * @type {?|undefined}
         */
        SFButton.prototype.submit_type;
        /**
         * 提交按钮图标
         * @type {?|undefined}
         */
        SFButton.prototype.submit_icon;
        /**
         * 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置`
         * @type {?|undefined}
         */
        SFButton.prototype.reset;
        /**
         * 重置按钮类型，默认：`default`
         * @type {?|undefined}
         */
        SFButton.prototype.reset_type;
        /**
         * 重置按钮图标
         * @type {?|undefined}
         */
        SFButton.prototype.reset_icon;
        /**
         * 按钮样式，主要用于指定按钮 `grid`、`class` 属性
         * @type {?|undefined}
         */
        SFButton.prototype.render;
        /**
         * 搜索按钮文本，默认：`搜索`
         * @type {?|undefined}
         */
        SFButton.prototype.search;
        /**
         * 编辑按钮文本，默认：`保存`
         * @type {?|undefined}
         */
        SFButton.prototype.edit;
    }
    /**
     * @record
     */
    function SFButtonIcon() { }
    if (false) {
        /**
         * 等同 `nz-icon` 的 `nzType` 值
         * @type {?|undefined}
         */
        SFButtonIcon.prototype.type;
        /**
         * 图标主题风格，默认：`outline`
         * @type {?|undefined}
         */
        SFButtonIcon.prototype.theme;
        /**
         * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
         * @type {?|undefined}
         */
        SFButtonIcon.prototype.twoToneColor;
        /**
         * 指定来自 IconFont 的图标类型
         * @type {?|undefined}
         */
        SFButtonIcon.prototype.iconfont;
    }
    /**
     * @record
     */
    function SFRenderButton() { }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * 自定义校验
         * @type {?|undefined}
         */
        ErrorSchema.prototype.validator;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/model/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/object/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFObjectWidgetSchema() { }
    if (false) {
        /**
         * 是否显示标题，默认：`false`
         * @type {?|undefined}
         */
        SFObjectWidgetSchema.prototype.showTitle;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/array/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFArrayWidgetSchema() { }
    if (false) {
        /**
         * 指定添加按钮文本，默认：添加
         * @type {?|undefined}
         */
        SFArrayWidgetSchema.prototype.addTitle;
        /**
         * 指定添加按钮风格，等同按钮 `nzType`，默认：dashed
         * @type {?|undefined}
         */
        SFArrayWidgetSchema.prototype.addType;
        /**
         * 指定是否显示移除按钮
         * @type {?|undefined}
         */
        SFArrayWidgetSchema.prototype.removable;
        /**
         * 指定移除按钮文本，默认：移除
         * @type {?|undefined}
         */
        SFArrayWidgetSchema.prototype.removeTitle;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/string/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFStringWidgetSchema() { }
    if (false) {
        /**
         * 指定 `input` 的 `type` 值，默认为：`text`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.type;
        /**
         * 文字框中显示提示信息
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.placeholder;
        /**
         * 自动完成功能的表单
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.autocomplete;
        /**
         * 加载时是否获得焦点
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.autofocus;
        /**
         * 前置标签，等同 `nzAddOnBefore`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.addOnBefore;
        /**
         * 后置标签，等同 `nzAddOnAfter`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.addOnAfter;
        /**
         * 前置Icon，等同 `nzAddOnBeforeIcon`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.addOnBeforeIcon;
        /**
         * 后置Icon，等同 `nzAddOnAfterIcon`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.addOnAfterIcon;
        /**
         * 带有前缀图标的 input，等同 `nzPrefix`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.prefix;
        /**
         * 前缀图标，等同 `nzPrefixIcon`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.prefixIcon;
        /**
         * 带有后缀图标的 input，等同 `nzSuffix`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.suffix;
        /**
         * 后缀图标，等同 `nzSuffixIcon`
         * @type {?|undefined}
         */
        SFStringWidgetSchema.prototype.suffixIcon;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/number/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFNumberWidgetSchema() { }
    if (false) {
        /** @type {?|undefined} */
        SFNumberWidgetSchema.prototype.size;
        /**
         * 前缀，简化 `nzFormatter`、`nzParser` 的使用
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.prefix;
        /**
         * 单位，简化 `nzFormatter`、`nzParser` 的使用
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.unit;
        /**
         * 指定输入框展示值的格式
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.formatter;
        /**
         * 指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.parser;
        /**
         * 数值精度
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.precision;
        /**
         * 指定 `nz-number` 宽度
         * @type {?|undefined}
         */
        SFNumberWidgetSchema.prototype.widgetWidth;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/date/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFDateWidgetSchema() { }
    if (false) {
        /** @type {?|undefined} */
        SFDateWidgetSchema.prototype.mode;
        /** @type {?|undefined} */
        SFDateWidgetSchema.prototype.size;
        /** @type {?|undefined} */
        SFDateWidgetSchema.prototype.placeholder;
        /**
         * **Just only support date-fns**
         *
         * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v1.30.1/docs/format), like this:
         * - `YYYY-MM-DD HH:mm:ss` Date time
         * - `X` Seconds timestamp
         * - `x` Milliseconds timestamp
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.format;
        /**
         * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
         *
         * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.displayFormat;
        /**
         * The end value corresponding to the date range `key`, a date range [demo](https://ng-alain.com/form/date/en#form-date-range).
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.end;
        /**
         * Whether to show clear button, default: `true`
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.allowClear;
        /**
         * Picker className
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.className;
        /**
         * Localization configuration
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.locale;
        /**
         * To customize the style of the popup calendar
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.popupStyle;
        /**
         * To customize the className of the popup calendar
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.dropdownClassName;
        /**
         * A callback emitter, can be executed whether the popup calendar is popped up or closed
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.onOpenChange;
        /**
         * Specify the date that cannot be selected
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.disabledDate;
        /**
         * To specify the time that cannot be selected, support components: `nz-date-picker`, `nz-range-picker`
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.disabledTime;
        /**
         * Render extra footer in panel, support components: `nz-date-picker`, `nz-range-picker`, `nz-year-picker`, `nz-month-picker`
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.renderExtraFooter;
        /**
         * To provide an additional time selection
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.showTime;
        /**
         * Whether to show "Today" button, default: `true`
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.showToday;
        /**
         * Callback when click ok button
         * @type {?|undefined}
         */
        SFDateWidgetSchema.prototype.onOk;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/time/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTimeWidgetSchema() { }
    if (false) {
        /** @type {?|undefined} */
        SFTimeWidgetSchema.prototype.size;
        /** @type {?|undefined} */
        SFTimeWidgetSchema.prototype.placeholder;
        /**
         * **Just only support date-fns**
         *
         * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v1.30.1/docs/format), like this:
         * - `YYYY-MM-DD HH:mm:ss` Date time
         * - `X` Seconds timestamp
         * - `x` Milliseconds timestamp
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.format;
        /**
         * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
         *
         * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.displayFormat;
        /**
         * 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效，默认：`false`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.utcEpoch;
        /**
         * Allow clearing text, default: `true`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.allowEmpty;
        /**
         * Clear tooltip of icon, default: `清除`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.clearText;
        /**
         * Default open panel value, default: `new Date()`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.defaultOpenValue;
        /**
         * To specify the hours that cannot be selected
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.disabledHours;
        /**
         * To specify the minutes that cannot be selected
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.disabledMinutes;
        /**
         * To specify the seconds that cannot be selected
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.disabledSeconds;
        /**
         * Hide the options that can not be selected, default: `false`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.hideDisabledOptions;
        /**
         * Display as 12 hours format, with default format, default: `h:mm:ss a`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.use12Hours;
        /**
         * Interval between hours in picker, default: `1`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.hourStep;
        /**
         * Interval between minutes in picker, default: `1`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.minuteStep;
        /**
         * Interval between seconds in picker, default: `1`
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.secondStep;
        /**
         * ClassName of panel
         * @type {?|undefined}
         */
        SFTimeWidgetSchema.prototype.popupClassName;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/radio/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFRadioWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFRadioWidgetSchema.prototype.asyncData;
        /** @type {?|undefined} */
        SFRadioWidgetSchema.prototype.size;
        /**
         * radio 的样式，默认：`default`
         * @type {?|undefined}
         */
        SFRadioWidgetSchema.prototype.styleType;
        /**
         * RadioButton 的风格样式，目前有描边和填色两种风格，默认：`outline`
         * @type {?|undefined}
         */
        SFRadioWidgetSchema.prototype.buttonStyle;
        /**
         * 值变更事件
         * @type {?|undefined}
         */
        SFRadioWidgetSchema.prototype.change;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/checkbox/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFCheckboxWidgetSchema() { }
    if (false) {
        /**
         * 异步静态数据源
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.asyncData;
        /**
         * 指定每个选框单元格数量，参考[布局](https://ng.ant.design/components/checkbox/zh#components-checkbox-demo-layout)
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.span;
        /**
         * radio的样式，默认：`default`
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.styleType;
        /**
         * 是否需要全选
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.checkAll;
        /**
         * 全选按钮文本
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.checkAllText;
        /**
         * 值变更事件，参数：单个多选框为 `boolean`，否则为 `SFSchemaEnum[]`
         * @type {?|undefined}
         */
        SFCheckboxWidgetSchema.prototype.change;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/cascader/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFCascaderWidgetSchema() { }
    if (false) {
        /**
         * 异步静态数据源
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.asyncData;
        /**
         * 在文字框中显示提示讯息
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.placeholder;
        /**
         * 是否支持搜索，默认：`false`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.showSearch;
        /**
         * 是否显示清除按钮，默认：`true`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.allowClear;
        /**
         * 清除按钮的标题，默认：`清除`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.clearText;
        /**
         * 是否显示箭头，默认：`true`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.showArrow;
        /**
         * 是否显示箭头，默认：`true`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.showInput;
        /**
         * 自定义浮层类名
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.menuClassName;
        /**
         * 自定义浮层样式
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.menuStyle;
        /**
         * 弹出菜单中数据列的自定义样式
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.columnClassName;
        /**
         * 是否缓存异步加载的数据，若每次异步加载的数据都是变化的，需将该值设置为 `false`，默认：`true`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.enableCache;
        /**
         * 次级菜单的展开方式，默认：`click`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.expandTrigger;
        /**
         * 当此项为 `true` 时，点选每级菜单选项值都会发生变化，具体见上面的演示，默认：`false`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.changeOnSelect;
        /**
         * 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 `true` 时，将发生变化
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.changeOn;
        /**
         * 触发菜单出现的行为，默认：`['click']`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.triggerAction;
        /**
         * 值 `value` 的属性名称，默认：`value`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.valueProperty;
        /**
         * 值 `label` 的属性名称，默认：`label`
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.labelProperty;
        /**
         * 异步加载事件
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.visibleChange;
        /**
         * 选项值变更事件
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.change;
        /**
         * 选项变更事件
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.selectionChange;
        /**
         * 内容被清空事件
         * @type {?|undefined}
         */
        SFCascaderWidgetSchema.prototype.clear;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/textarea/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTextareaWidgetSchema() { }
    if (false) {
        /** @type {?|undefined} */
        SFTextareaWidgetSchema.prototype.size;
        /**
         * 在文字框中显示提示讯息
         * @type {?|undefined}
         */
        SFTextareaWidgetSchema.prototype.placeholder;
        /**
         * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
         * @type {?|undefined}
         */
        SFTextareaWidgetSchema.prototype.autosize;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/select/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFSelectWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.asyncData;
        /** @type {?|undefined} */
        SFSelectWidgetSchema.prototype.size;
        /**
         * 在文字框中显示提示讯息
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.placeholder;
        /**
         * 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.compareWith;
        /**
         * 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效，默认：`true`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.autoClearSearchValue;
        /**
         * 支持清除，默认：`false`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.allowClear;
        /**
         * 默认获取焦点，默认：`false`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.autoFocus;
        /**
         * 下拉菜单的 className 属性
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.dropdownClassName;
        /**
         * 下拉菜单和选择器同宽，默认：`true`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.dropdownMatchSelectWidth;
        /**
         * 下拉菜单的 style 属性
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.dropdownStyle;
        /**
         * 是否使用服务端搜索，当为 `true` 时，将不再在前端对 `nz-option` 进行过滤，默认：`false`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.serverSearch;
        /**
         * 最多选中多少个标签，默认：`Infinity`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.maxMultipleCount;
        /**
         * 设置 `nz-select` 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.mode;
        /**
         * 当下拉列表为空时显示的内容
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.notFoundContent;
        /**
         * 使单选模式可搜索，默认：`false`
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.showSearch;
        /**
         * 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.onSearch;
        /**
         * 在 `tags` 和 `multiple` 模式下自动分词的分隔符
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.tokenSeparators;
        /**
         * 最多显示多少个 tag
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.maxTagCount;
        /**
         * 选中的 `nz-option` 发生变化时，调用此函数
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.change;
        /**
         * 下拉菜单打开关闭回调函数
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.openChange;
        /**
         * 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件
         * @type {?|undefined}
         */
        SFSelectWidgetSchema.prototype.scrollToBottom;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/tree-select/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTreeSelectWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.asyncData;
        /** @type {?|undefined} */
        SFTreeSelectWidgetSchema.prototype.size;
        /** @type {?|undefined} */
        SFTreeSelectWidgetSchema.prototype.placeholder;
        /**
         * 支持清除，默认：`false`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.allowClear;
        /**
         * 下拉菜单和选择器同宽，默认：`true`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.dropdownMatchSelectWidth;
        /**
         * 下拉菜单的 style 属性
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.dropdownStyle;
        /**
         * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.multiple;
        /**
         * 节点前添加 Checkbox 复选框，默认：`false`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.checkable;
        /**
         * 节点前添加展开图标，默认：`true`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.showExpand;
        /**
         * 节点前添加展开图标，默认：`false`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.showLine;
        /**
         * 默认展开所有树节点，默认：`false`
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.defaultExpandAll;
        /**
         * 如何在输入框显示所选的节点值的方法
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.displayWith;
        /**
         * 点击展开树节点图标调用
         * @type {?|undefined}
         */
        SFTreeSelectWidgetSchema.prototype.expandChange;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/tag/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTagWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFTagWidgetSchema.prototype.asyncData;
        /**
         * 设定标签工作的模式，默认：`checkable`
         * @type {?|undefined}
         */
        SFTagWidgetSchema.prototype.mode;
        /**
         * 关闭动画完成后的回调
         * @type {?|undefined}
         */
        SFTagWidgetSchema.prototype.afterClose;
        /**
         * 关闭时的回调，在 `nzMode="closable"` 时可用
         * @type {?|undefined}
         */
        SFTagWidgetSchema.prototype.onClose;
        /**
         * 设置标签的选中状态的回调
         * @type {?|undefined}
         */
        SFTagWidgetSchema.prototype.checkedChange;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/upload/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFUploadWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.asyncData;
        /**
         * 上传类型，默认：`select`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.type;
        /**
         * 按钮文本，默认：`点击上传`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.text;
        /**
         * 提醒文本，drag 时有效，默认：`支持单个或批量，严禁上传公司数据或其他安全文件`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.hint;
        /**
         * 重命名返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示整个返回体
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.resReName;
        /**
         * 重命名预览图像URL返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示使用文件对象的 `url`、`thumbUrl` 值
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.urlReName;
        /**
         * **必选参数** 上传的地址
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.action;
        /**
         * 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.accept;
        /**
         * 限制单次最多上传数量，`multiple` 打开时有效；`0` 表示不限，默认：`0`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.limit;
        /**
         * 自定义过滤器
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.filter;
        /**
         * 文件列表
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.fileList;
        /**
         * 限制文件大小，单位：KB；`0` 表示不限，默认：`0`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.fileSize;
        /**
         * 限制文件类型，例如：`image/png,image/jpeg,image/gif,image/bmp`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.fileType;
        /**
         * 设置上传的请求头部
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.headers;
        /**
         * 上传列表的内建样式，默认：`text`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.listType;
        /**
         * 是否展示列表, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon`，默认：`true`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.showUploadList;
        /**
         * 是否支持多选文件，`IE10+` 支持。开启后按住 `ctrl` 可选择多个文件，默认：`false`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.multiple;
        /**
         * 发到后台的文件参数名，默认：`file`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.name;
        /**
         * 上传所需参数或返回上传参数的方法
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.data;
        /**
         * 上传请求时是否携带 cookie，默认：`false`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.withCredentials;
        /**
         * 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)），默认：`false`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.directory;
        /**
         * 点击打开文件对话框，默认：`true`
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.openFileDialogOnClick;
        /**
         * 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.beforeUpload;
        /**
         * 通过覆盖默认的上传行为，可以自定义自己的上传实现
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.customRequest;
        /**
         * 点击移除文件时的回调，返回值为 `false` 时不移除
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.remove;
        /**
         * 点击文件链接或预览图标时的回调
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.preview;
        /**
         * 上传文件改变时的状态
         * @type {?|undefined}
         */
        SFUploadWidgetSchema.prototype.change;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/transfer/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTransferWidgetSchema() { }
    if (false) {
        /**
         * 异步数据源
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.asyncData;
        /**
         * 标题集合，顺序从左至右，默认：`['', '']`
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.titles;
        /**
         * 操作文案集合，顺序从下至上，默认：`['', '']`
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.operations;
        /**
         * 两个穿梭框的自定义样式，以`ngStyle`写法标题
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.listStyle;
        /**
         * 单数单位
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.itemUnit;
        /**
         * 复数单位
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.itemsUnit;
        /**
         * 是否显示搜索框，默认：`false`
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.showSearch;
        /**
         * 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.filterOption;
        /**
         * 搜索框的默认值
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.searchPlaceholder;
        /**
         * 当列表为空时显示的内容
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.notFoundContent;
        /**
         * 穿梭时二次校验
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.canMove;
        /**
         * 选项在两栏之间转移时的回调函数
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.change;
        /**
         * 搜索框内容时改变时的回调函数
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.searchChange;
        /**
         * 选中项发生改变时的回调函数
         * @type {?|undefined}
         */
        SFTransferWidgetSchema.prototype.selectChange;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/slider/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFSliderWidgetSchema() { }
    if (false) {
        /**
         * 当添加该属性时，启动双滑块模式
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.range;
        /**
         * 刻度标记
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.marks;
        /**
         * 是否只能拖拽到刻度上，默认：`false`
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.dots;
        /**
         * 是否包含。`marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.included;
        /**
         * 竖直显示。添加该属性时，Slider 为垂直方向
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.vertical;
        /**
         * 与 `onmouseup` 触发时机一致，把当前值作为参数传入
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.afterChange;
        /**
         * Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip
         * @type {?|undefined}
         */
        SFSliderWidgetSchema.prototype.formatter;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/rate/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFRateWidgetSchema() { }
    if (false) {
        /**
         * 是否允许再次点击后清除，默认：`true`
         * @type {?|undefined}
         */
        SFRateWidgetSchema.prototype.allowClear;
        /**
         * 自动获取焦点，默认：`false`
         * @type {?|undefined}
         */
        SFRateWidgetSchema.prototype.autoFocus;
        /**
         * 提醒文本模板，`{{value}}` 表示当前值（注意无任何空格）
         * @type {?|undefined}
         */
        SFRateWidgetSchema.prototype.text;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/autocomplete/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFAutoCompleteWidgetSchema() { }
    if (false) {
        /**
         * 异步静态数据源
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.asyncData;
        /**
         * 在文字框中显示提示讯息
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.placeholder;
        /**
         * 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤
         * 当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.filterOption;
        /**
         * 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.type;
        /**
         * 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.debounceTime;
        /**
         * 是否默认高亮第一个选项，默认：`true`
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.defaultActiveFirstOption;
        /**
         * 使用键盘选择选项的时候把选中项回填到输入框中，默认：`false`
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.backfill;
        /**
         * 自定义宽度单位 `px`，默认：触发元素宽度
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.nzWidth;
        /**
         * 变更回调
         * @type {?|undefined}
         */
        SFAutoCompleteWidgetSchema.prototype.change;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/mention/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFMentionWidgetSchema() { }
    if (false) {
        /**
         * 异步静态数据源
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.asyncData;
        /** @type {?|undefined} */
        SFMentionWidgetSchema.prototype.size;
        /**
         * 在文字框中显示提示讯息
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.placeholder;
        /**
         * 实时数据
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.loadData;
        /**
         * 未找到时的内容，默认：`无匹配结果，轻敲空格完成输入`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.notFoundContent;
        /**
         * 建议框位置，默认：`button`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.placement;
        /**
         * 触发弹出下拉框的字符，默认：`\@`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.prefix;
        /**
         * 建议选项的取值方法，默认：`item => item.label`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.valueWith;
        /**
         * 下拉框选择建议时回调
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.select;
        /**
         * 文本框类型，默认：`text`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.inputStyle;
        /**
         * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
         * @type {?|undefined}
         */
        SFMentionWidgetSchema.prototype.autosize;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/text/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFTextWidgetSchema() { }
    if (false) {
        /**
         * 当值不存在时所指定的文本，默认：`-`
         * @type {?|undefined}
         */
        SFTextWidgetSchema.prototype.defaultText;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/widgets/custom/schema.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SFCustomWidgetSchema() { }

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
    exports.DelonFormConfig = DelonFormConfig;
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
    exports.useFactory = useFactory;
    exports.ɵa = TerminatorService;
    exports.ɵb = SFItemWrapComponent;
    exports.ɵc = SFTemplateDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form.umd.js.map
