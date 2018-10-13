/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.4-b226e4f
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@delon/util'), require('@angular/core'), require('@delon/theme'), require('date-fns/format'), require('ng-zorro-antd'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@delon/form', ['exports', 'rxjs', 'rxjs/operators', '@delon/util', '@angular/core', '@delon/theme', 'date-fns/format', 'ng-zorro-antd', '@angular/common', '@angular/forms'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.form = {}),global.rxjs,global.rxjs.operators,global.delon.util,global.ng.core,global.delon.theme,global.format,global.ngZorro.antd,global.ng.common,global.ng.forms));
}(this, (function (exports,rxjs,operators,util,core,theme,format,ngZorroAntd,common,forms) { 'use strict';

    format = format && format.hasOwnProperty('default') ? format['default'] : format;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ERRORSDEFAULT = {
        'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
        '$ref': "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this.errors = ERRORSDEFAULT;
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
        }
        return DelonFormConfig;
    }());

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
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
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                if (e.indexOf(p[i]) < 0)
                    t[p[i]] = s[p[i]];
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
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return value == null ? defaultValue : "" + value !== 'false';
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    function di() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable-next-line:no-console
        console.warn.apply(console, __spread(args));
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
            /** @type {?} */
            var parts = match[1].split('/');
            /** @type {?} */
            var current = definitions;
            try {
                for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                    var part = parts_1_1.value;
                    part = part.replace(/~1/g, '/').replace(/~0/g, '~');
                    if (current.hasOwnProperty(part)) {
                        current = current[part];
                    }
                    else {
                        throw new Error("Could not find a definition for " + $ref + ".");
                    }
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return))
                        _a.call(parts_1);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
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
        if (definitions === void 0) {
            definitions = {};
        }
        if (schema.hasOwnProperty('$ref')) {
            /** @type {?} */
            var $refSchema = findSchemaDefinition(schema.$ref, definitions);
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
            return;
        if (!schema.if.properties)
            throw new Error("if: does not contain 'properties'");
        /** @type {?} */
        var allKeys = Object.keys(schema.properties);
        /** @type {?} */
        var ifKeys = Object.keys(schema.if.properties);
        detectKey(allKeys, ifKeys);
        detectKey(allKeys, schema.then.required);
        schema.required = schema.required.concat(schema.then.required);
        /** @type {?} */
        var hasElse = schema.hasOwnProperty('else');
        if (hasElse) {
            detectKey(allKeys, schema.else.required);
            schema.required = schema.required.concat(schema.else.required);
        }
        /** @type {?} */
        var visibleIf = {};
        /** @type {?} */
        var visibleElse = {};
        ifKeys.forEach(function (key) {
            /** @type {?} */
            var cond = schema.if.properties[key].enum;
            visibleIf[key] = cond;
            if (hasElse)
                visibleElse[key] = function (value) { return !cond.includes(value); };
        });
        schema.then.required.forEach(function (key) { return (ui["$" + key].visibleIf = visibleIf); });
        if (hasElse)
            schema.else.required.forEach(function (key) { return (ui["$" + key].visibleIf = visibleElse); });
        return schema;
    }
    /**
     * @param {?} keys
     * @param {?} detectKeys
     * @return {?}
     */
    function detectKey(keys, detectKeys) {
        detectKeys.forEach(function (key) {
            if (!keys.includes(key)) {
                throw new Error("if: properties does not contain '" + key + "'");
            }
        });
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
        var arrayToHash = function (arr) {
            return arr.reduce(function (prev, curr) {
                prev[curr] = true;
                return prev;
            }, {});
        };
        /** @type {?} */
        var errorPropList = function (arr) { return "property [" + arr.join("', '") + "]"; };
        /** @type {?} */
        var propertyHash = arrayToHash(properties);
        /** @type {?} */
        var orderHash = arrayToHash(order);
        /** @type {?} */
        var extraneous = order.filter(function (prop) { return prop !== '*' && !propertyHash[prop]; });
        if (extraneous.length) {
            throw new Error("ui schema order list contains extraneous " + errorPropList(extraneous));
        }
        /** @type {?} */
        var rest = properties.filter(function (prop) { return !orderHash[prop]; });
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
            list = list.map(function (item) {
                return /** @type {?} */ ({ label: item, value: item });
            });
        }
        if (formData) {
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach(function (item) {
                if (~formData.indexOf(item.value))
                    item.checked = true;
            });
        }
        // fix disabled status
        if (readOnly) {
            list.forEach(function (item) { return item.disabled = true; });
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
            return ui
                .asyncData(asyncArgs)
                .pipe(operators.takeWhile(function () { return ui["__destroy"] !== true; }), operators.map(function (list) { return getEnum(list, formData, schema.readOnly); }));
        }
        return rxjs.of(getCopyEnum(schema.enum, formData, schema.readOnly));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ FormProperty = /** @class */ (function () {
        function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, options) {
            this.options = options;
            this._value = null;
            this._errors = null;
            this._objErrors = {};
            this._valueChanges = new rxjs.BehaviorSubject(null);
            this._errorsChanges = new rxjs.BehaviorSubject(null);
            this._visible = true;
            this._visibilityChanges = new rxjs.BehaviorSubject(true);
            this.schema = schema;
            this.ui = ui;
            this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
                ingoreKeywords: /** @type {?} */ (this.ui["ingoreKeywords"]),
            });
            this.formData = formData || schema.default;
            this._parent = parent;
            if (parent) {
                this._root = parent.root;
            }
            else if (this instanceof PropertyGroup) {
                this._root = /** @type {?} */ (( /** @type {?} */(this)));
            }
            this._path = path;
        }
        Object.defineProperty(FormProperty.prototype, "valueChanges", {
            get: /**
             * @return {?}
             */ function () {
                return this._valueChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errorsChanges", {
            get: /**
             * @return {?}
             */ function () {
                return this._errorsChanges;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this.schema.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "parent", {
            get: /**
             * @return {?}
             */ function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "root", {
            get: /**
             * @return {?}
             */ function () {
                return this._root || /** @type {?} */ (( /** @type {?} */(this)));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "path", {
            get: /**
             * @return {?}
             */ function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "errors", {
            get: /**
             * @return {?}
             */ function () {
                return this._errors;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "visible", {
            get: /**
             * @return {?}
             */ function () {
                return this._visible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormProperty.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this._errors === null;
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
                if (onlySelf === void 0) {
                    onlySelf = false;
                }
                if (emitValueEvent === void 0) {
                    emitValueEvent = true;
                }
                if (emitValidator === void 0) {
                    emitValidator = true;
                }
                this._updateValue();
                if (emitValueEvent) {
                    this.valueChanges.next(this.value);
                }
                // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
                if (emitValidator && this.ui["liveValidate"] === true) {
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
                if (path[0] === '/') {
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
                return /** @type {?} */ (property);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        FormProperty.prototype.isEmptyData = /**
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
                /** @type {?} */
                var isEmpty = this.isEmptyData(this._value);
                if (isEmpty && this.ui["_required"]) {
                    errors = [{ keyword: 'required' }];
                }
                else if (isEmpty) {
                    errors = [];
                }
                else {
                    errors = this.schemaValidator(this._value) || [];
                }
                /** @type {?} */
                var customValidator = ( /** @type {?} */(this.ui)).validator;
                if (typeof customValidator === 'function') {
                    /** @type {?} */
                    var customErrors = customValidator(this.value, this, this.findRoot());
                    if (customErrors instanceof rxjs.Observable) {
                        customErrors.subscribe(function (res) {
                            _this.setCustomErrors(errors, res);
                            _this.widget.detectChanges();
                        });
                        return;
                    }
                    this.setCustomErrors(errors, customErrors);
                    return;
                }
                this._errors = errors;
                this.setErrors(this._errors);
            };
        /**
         * @param {?} errors
         * @param {?} list
         * @return {?}
         */
        FormProperty.prototype.setCustomErrors = /**
         * @param {?} errors
         * @param {?} list
         * @return {?}
         */
            function (errors, list) {
                /** @type {?} */
                var hasCustomError = list != null && list.length > 0;
                if (hasCustomError) {
                    list.forEach(function (err, idx) {
                        if (!err.message)
                            throw new Error("\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\u5FC5\u987B\u81F3\u5C11\u8FD4\u56DE\u4E00\u4E2A 'message' \u5C5E\u6027\uFF0C\u7528\u4E8E\u8868\u793A\u9519\u8BEF\u6587\u672C");
                        err._custom = true;
                    });
                }
                this._errors = this.mergeErrors(errors, list);
                this.setErrors(this._errors);
            };
        /**
         * @param {?} errors
         * @param {?} newErrors
         * @return {?}
         */
        FormProperty.prototype.mergeErrors = /**
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
         * @param {?} errors
         * @param {?=} emitFormat
         * @return {?}
         */
        FormProperty.prototype.setErrors = /**
         * @param {?} errors
         * @param {?=} emitFormat
         * @return {?}
         */
            function (errors, emitFormat) {
                var _this = this;
                if (emitFormat === void 0) {
                    emitFormat = true;
                }
                if (emitFormat && errors && !this.ui["onlyVisual"]) {
                    errors = errors.map(function (err) {
                        /** @type {?} */
                        var message = err._custom === true && err.message
                            ? err.message
                            : (_this.ui["errors"] || {})[err.keyword] ||
                                _this.options.errors[err.keyword] ||
                                "";
                        if (message && typeof message === 'function')
                            message = /** @type {?} */ (message(err));
                        if (message) {
                            if (~( /** @type {?} */(message)).indexOf('{')) {
                                message = ( /** @type {?} */(message)).replace(/{([\.a-z0-9]+)}/g, function (v, key) { return err.params[key] || ''; });
                            }
                            err.message = /** @type {?} */ (message);
                        }
                        return err;
                    });
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
                Object.keys(this._objErrors).forEach(function (p) {
                    /** @type {?} */
                    var property = _this.searchProperty(p);
                    if (property && !property.visible)
                        return;
                    platErrors.push.apply(platErrors, __spread(_this._objErrors[p]));
                });
                this.setErrors(platErrors, false);
            };
        /**
         * @param {?} visible
         * @return {?}
         */
        FormProperty.prototype.setVisible = /**
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
        /**
         * @return {?}
         */
        FormProperty.prototype._bindVisibility = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var visibleIf = ( /** @type {?} */(this.ui)).visibleIf;
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
                                var valueCheck = property.valueChanges.pipe(operators.map(function (value) {
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
                                }));
                                /** @type {?} */
                                var visibilityCheck = property._visibilityChanges;
                                /** @type {?} */
                                var and = rxjs.combineLatest(valueCheck, visibilityCheck).pipe(operators.map(function (results) { return results[0] && results[1]; }));
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
                        .pipe(operators.map(function (values) { return values.indexOf(true) !== -1; }), operators.distinctUntilChanged())
                        .subscribe(function (visible) { return _this.setVisible(visible); });
                }
            };
        return FormProperty;
    }());
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ PropertyGroup = /** @class */ (function (_super) {
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
                var subPathIdx = path.indexOf('/');
                /** @type {?} */
                var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
                /** @type {?} */
                var property = this.properties[propertyId];
                if (property !== null &&
                    subPathIdx !== -1 &&
                    property instanceof PropertyGroup) {
                    /** @type {?} */
                    var subPath = path.substr(subPathIdx + 1);
                    property = ( /** @type {?} */(property)).getProperty(subPath);
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
                this.forEachChild(function (child) {
                    fn(child);
                    if (child instanceof PropertyGroup) {
                        ( /** @type {?} */(child)).forEachChildRecursive(fn);
                    }
                });
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
         * @return {?}
         */
        PropertyGroup.prototype._bindVisibilityRecursive = /**
         * @return {?}
         */
            function () {
                this.forEachChildRecursive(function (property) {
                    property._bindVisibility();
                });
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ AtomicProperty = /** @class */ (function (_super) {
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
                    if (this.schema.default !== undefined) {
                        value = this.schema.default;
                    }
                    else {
                        value = this.fallbackValue();
                    }
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        value =
                            value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ArrayProperty = /** @class */ (function (_super) {
        __extends(ArrayProperty, _super);
        function ArrayProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
            var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
            _this.formPropertyFactory = formPropertyFactory;
            _this.tick = 1;
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
                var subPathIdx = path.indexOf('/');
                /** @type {?} */
                var pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
                /** @type {?} */
                var list = /** @type {?} */ (this.properties);
                if (isNaN(pos) || pos >= list.length)
                    return undefined;
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
                this.properties = [];
                this.clearErrors();
                this.resetProperties(this._value);
                this.updateValueAndValidity(onlySelf, true);
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
                this.forEachChild(function (property, _) {
                    if (property.visible && property._hasValue()) {
                        value.push(Object.assign({}, property.formData, property.value));
                    }
                });
                this._value = value;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayProperty.prototype.addProperty = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var newProperty = /** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui["$items"], value, this));
                ( /** @type {?} */(this.properties)).push(newProperty);
                return newProperty;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayProperty.prototype.resetProperties = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var e_1, _a;
                try {
                    for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                        var item = value_1_1.value;
                        /** @type {?} */
                        var property = this.addProperty(item);
                        property.resetValue(item, true);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (value_1_1 && !value_1_1.done && (_a = value_1.return))
                            _a.call(value_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @param {?=} path
         * @return {?}
         */
        ArrayProperty.prototype.clearErrors = /**
         * @param {?=} path
         * @return {?}
         */
            function (path) {
                if (path)
                    delete this._objErrors[path];
                else
                    this._objErrors = {};
            };
        // region: actions
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayProperty.prototype.add = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var newProperty = this.addProperty(value);
                newProperty.resetValue(value, false);
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
                /** @type {?} */
                var list = /** @type {?} */ (this.properties);
                this.clearErrors(list[index].path);
                list.splice(index, 1);
                this.updateValueAndValidity(false, true);
            };
        return ArrayProperty;
    }(PropertyGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function () {
                return this._propertiesId;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ObjectProperty.prototype.createProperties = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.properties = {};
                this._propertiesId = [];
                /** @type {?} */
                var orderedProperties;
                try {
                    orderedProperties = orderProperties(Object.keys(this.schema.properties), /** @type {?} */ (this.ui["order"]));
                }
                catch (e) {
                    console.error("Invalid " + (this.schema.title || 'root') + " object field configuration:", e);
                }
                orderedProperties.forEach(function (propertyId) {
                    _this.properties[propertyId] = _this.formPropertyFactory.createProperty(_this.schema.properties[propertyId], _this.ui['$' + propertyId], (_this.formData || {})[propertyId], _this, propertyId);
                    _this._propertiesId.push(propertyId);
                });
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
                    if (value.hasOwnProperty(propertyId)) {
                        this.properties[propertyId].setValue(value[propertyId], true);
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
                // tslint:disable-next-line:forin
                for (var propertyId in this.schema.properties) {
                    this.properties[propertyId].resetValue(value[propertyId], true);
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
                this.forEachChild(function (property, propertyId) {
                    if (property.visible && property._hasValue()) {
                        value[propertyId] = property.value;
                    }
                });
                this._value = value;
            };
        return ObjectProperty;
    }(PropertyGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                if (parent === void 0) {
                    parent = null;
                }
                /** @type {?} */
                var newProperty = null;
                /** @type {?} */
                var path = '';
                if (parent) {
                    path += parent.path;
                    if (parent.parent !== null) {
                        path += '/';
                    }
                    if (parent.type === 'object') {
                        path += propertyId;
                    }
                    else if (parent.type === 'array') {
                        path += ( /** @type {?} */(parent)).tick++;
                    }
                    else {
                        throw new Error('Instanciation of a FormProperty with an unknown parent type: ' +
                            parent.type);
                    }
                }
                else {
                    path = '/';
                }
                if (schema.$ref) {
                    /** @type {?} */
                    var refSchema = retrieveSchema(schema, parent.root.schema.definitions);
                    newProperty = this.createProperty(refSchema, ui, formData, parent, path);
                }
                else {
                    // fix required
                    if (propertyId &&
                        ( /** @type {?} */(( /** @type {?} */((parent)).schema.required || []))).indexOf(propertyId) !== -1) {
                        ui["_required"] = true;
                    }
                    // fix title
                    if (schema.title == null)
                        schema.title = propertyId;
                    // fix date
                    if ((schema.type === 'string' || schema.type === 'number') &&
                        !schema.format &&
                        !( /** @type {?} */(ui))["format"]) {
                        if (( /** @type {?} */(ui)).widget === 'date')
                            ui["format"] =
                                schema.type === 'string'
                                    ? this.options.uiDateStringFormat
                                    : this.options.uiDateNumberFormat;
                        else if (( /** @type {?} */(ui)).widget === 'time')
                            ui["format"] =
                                schema.type === 'string'
                                    ? this.options.uiTimeStringFormat
                                    : this.options.uiTimeNumberFormat;
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
         * @param {?} rootProperty
         * @return {?}
         */
        FormPropertyFactory.prototype.initializeRoot = /**
         * @param {?} rootProperty
         * @return {?}
         */
            function (rootProperty) {
                // rootProperty.init();
                rootProperty._bindVisibility();
            };
        return FormPropertyFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ SchemaValidatorFactory = /** @class */ (function () {
        function SchemaValidatorFactory() {
        }
        return SchemaValidatorFactory;
    }());
    var AjvSchemaValidatorFactory = /** @class */ (function (_super) {
        __extends(AjvSchemaValidatorFactory, _super);
        function AjvSchemaValidatorFactory(options) {
            var _this = _super.call(this) || this;
            _this.options = options;
            _this.ajv = new Ajv(Object.assign({}, options.ajv, {
                errorDataPath: 'property',
                allErrors: true,
                jsonPointers: true,
            }));
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
                var ingoreKeywords = []
                    .concat(this.options.ingoreKeywords)
                    .concat(extraOptions.ingoreKeywords);
                return function (value) {
                    try {
                        _this.ajv.validate(schema, value);
                    }
                    catch (e) {
                        // swallow errors thrown in ajv due to invalid schemas, these
                        // still get displayed
                    }
                    /** @type {?} */
                    var errors = _this.ajv.errors;
                    if (_this.options && ingoreKeywords && errors) {
                        errors = errors.filter(function (w) { return ingoreKeywords.indexOf(w.keyword) === -1; });
                    }
                    return errors;
                };
            };
        /** @nocollapse */
        AjvSchemaValidatorFactory.ctorParameters = function () {
            return [
                { type: DelonFormConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DelonFormConfig,] }] }
            ];
        };
        return AjvSchemaValidatorFactory;
    }(SchemaValidatorFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetRegistry = /** @class */ (function () {
        function WidgetRegistry() {
            this.widgets = {};
        }
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
                this.widgets[type] = widget;
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
                return this.widgets.hasOwnProperty(type);
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
                    return this.widgets[type];
                }
                return this.defaultWidget;
            };
        return WidgetRegistry;
    }());
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
                var componentClass = this.registry.getType(type);
                /** @type {?} */
                var componentFactory = this.resolver.resolveComponentFactory(componentClass);
                return container.createComponent(componentFactory);
            };
        WidgetFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetFactory.ctorParameters = function () {
            return [
                { type: WidgetRegistry },
                { type: core.ComponentFactoryResolver }
            ];
        };
        return WidgetFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        function SFComponent(formPropertyFactory, terminator, options, cd, i18n) {
            var _this = this;
            this.formPropertyFactory = formPropertyFactory;
            this.terminator = terminator;
            this.options = options;
            this.cd = cd;
            this.i18n = i18n;
            this.locale = {};
            this._renders = new Map();
            this._valid = true;
            this._inited = false;
            this.rootProperty = null;
            /**
             * 表单布局，等同 `nzLayout`，默认：horizontal
             */
            this.layout = 'horizontal';
            /**
             * 按钮
             * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
             * - 值为 `none` 表示手动添加按钮，且不保留容器
             * - 使用固定 `label` 标签宽度时，若无 `render.class` 则默认为居中状态
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
            this.liveValidate = options.liveValidate;
            this.firstVisual = options.firstVisual;
            this.autocomplete = options.autocomplete;
            this.i18n$ = this.i18n.change.subscribe(function () {
                _this.locale = _this.i18n.getData('sf');
                if (_this._inited) {
                    _this.coverButtonProperty();
                    _this.cd.detectChanges();
                }
            });
        }
        Object.defineProperty(SFComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
                return this._mode;
            },
            /** 表单模式 */
            set: /**
             * 表单模式
             * @param {?} value
             * @return {?}
             */ function (value) {
                switch (value) {
                    case 'search':
                        this.layout = 'inline';
                        this.firstVisual = false;
                        this.liveValidate = false;
                        if (this._btn)
                            this._btn.submit = this._btn.search;
                        break;
                    case 'edit':
                        this.layout = 'horizontal';
                        this.firstVisual = false;
                        this.liveValidate = true;
                        if (this._btn)
                            this._btn.submit = this._btn.edit;
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
            get: /**
             * 表单校验状态
             * @return {?}
             */ function () {
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
             */ function () {
                return this._item;
            },
            enumerable: true,
            configurable: true
        });
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
         * @return {?}
         */
        SFComponent.prototype.coverProperty = /**
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
                var inFn = function (schema, parentSchema, uiSchema, parentUiSchema, uiRes) {
                    Object.keys(schema.properties).forEach(function (key) {
                        /** @type {?} */
                        var uiKey = "$" + key;
                        /** @type {?} */
                        var property = retrieveSchema(/** @type {?} */ (schema.properties[key]), definitions);
                        /** @type {?} */
                        var ui = /** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                            Array.isArray(property.enum) &&
                            property.enum.length > 0
                            ? { widget: 'select' }
                            : null, _this._defUi, property.ui, uiSchema[uiKey]));
                        // 继承父节点布局属性
                        if (isHorizontal) {
                            if (parentUiSchema.spanLabelFixed) {
                                if (!ui.spanLabelFixed) {
                                    ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
                                }
                            }
                            else {
                                if (!ui.spanLabel)
                                    ui.spanLabel =
                                        typeof parentUiSchema.spanLabel === 'undefined'
                                            ? 5
                                            : parentUiSchema.spanLabel;
                                if (!ui.spanControl)
                                    ui.spanControl =
                                        typeof parentUiSchema.spanControl === 'undefined'
                                            ? 19
                                            : parentUiSchema.spanControl;
                                if (!ui.offsetControl)
                                    ui.offsetControl =
                                        typeof parentUiSchema.offsetControl === 'undefined'
                                            ? null
                                            : parentUiSchema.offsetControl;
                            }
                        }
                        else {
                            ui.spanLabel = null;
                            ui.spanControl = null;
                            ui.offsetControl = null;
                        }
                        if (ui.widget === 'date' && ui["end"] != null && parentSchema) {
                            /** @type {?} */
                            var dateEndProperty = parentSchema.properties[ui["end"]];
                            if (dateEndProperty) {
                                dateEndProperty.ui = Object.assign({}, dateEndProperty.ui, {
                                    hidden: true,
                                });
                            }
                            else {
                                ui["end"] = '';
                            }
                        }
                        ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                        uiRes[uiKey] = ui;
                        delete property.ui;
                        if (property.items) {
                            uiRes[uiKey]['$items'] = uiRes[uiKey]['$items'] || {};
                            inFn(property.items, property.items, (uiSchema[uiKey] || {})['$items'] || {}, ui, uiRes[uiKey]['$items']);
                        }
                        if (property.properties && Object.keys(property.properties).length) {
                            inFn(property, schema, uiSchema[uiKey] || {}, ui, uiRes[uiKey]);
                        }
                    });
                };
                /** @type {?} */
                var inIfFn = function (schema, ui) {
                    Object.keys(schema.properties).forEach(function (key) {
                        /** @type {?} */
                        var property = schema.properties[key];
                        /** @type {?} */
                        var uiKey = "$" + key;
                        resolveIf(property, ui[uiKey]);
                        if (property.items) {
                            inIfFn(property.items, ui[uiKey].$items);
                        }
                        if (property.properties) {
                            inIfFn(property, ui[uiKey]);
                        }
                    });
                };
                if (this.ui == null)
                    this.ui = {};
                this._defUi = Object.assign(/** @type {?} */ ({
                    onlyVisual: this.options.onlyVisual,
                    size: this.options.size,
                    liveValidate: this.liveValidate,
                    firstVisual: this.firstVisual,
                }), this.options.ui, _schema.ui, this.ui['*']);
                // root
                this._ui = Object.assign({}, this._defUi);
                inFn(_schema, _schema, this.ui, this.ui, this._ui);
                // cond
                resolveIf(_schema, this._ui);
                inIfFn(_schema, this._ui);
                this._schema = _schema;
                if (this._ui["debug"]) {
                    di('cover schema & ui', this._ui, _schema);
                }
            };
        /**
         * @return {?}
         */
        SFComponent.prototype.coverButtonProperty = /**
         * @return {?}
         */
            function () {
                this._btn = Object.assign({ render: {} }, this.locale, this.options.button, this.button);
                /** @type {?} */
                var firstKey = Object.keys(this._ui).find(function (w) { return w.startsWith('$'); });
                if (this.layout === 'horizontal') {
                    /** @type {?} */
                    var btnUi = firstKey ? this._ui[firstKey] : this._defUi;
                    if (!this._btn.render.grid) {
                        this._btn.render.grid = {
                            offset: btnUi.spanLabel,
                            span: btnUi.spanControl,
                        };
                    }
                    // fixed label
                    if (!this._btn.render.spanLabelFixed) {
                        this._btn.render.spanLabelFixed = btnUi.spanLabelFixed;
                    }
                    // 固定标签宽度时，若不指定样式，则默认居中
                    if (!this._btn.render.class &&
                        (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
                        this._btn.render.class = 'text-center';
                    }
                }
                else {
                    this._btn.render.grid = {};
                }
                if (this._mode) {
                    this.mode = this._mode;
                }
                if (this._ui["debug"])
                    di('button property', this._btn);
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
         * @return {?}
         */
        SFComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
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
                /** @type {?} */
                var property = this.rootProperty.searchProperty(path);
                if (!property) {
                    console.warn("\u672A\u627E\u5230\u8DEF\u5F84\uFF1A" + path);
                    return;
                }
                if (this._renders.has(path)) {
                    console.warn("\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u81EA\u5B9A\u4E49\u8DEF\u5F84\uFF1A" + path);
                    return;
                }
                this._renders.set(path, templateRef);
                /** @type {?} */
                var pui = this.rootProperty.searchProperty(path).ui;
                pui._render = templateRef;
            };
        /**
         * @return {?}
         */
        SFComponent.prototype.attachCustomRender = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._renders.forEach(function (tpl, path) {
                    /** @type {?} */
                    var pui = _this.rootProperty.searchProperty(path).ui;
                    if (!pui._render)
                        pui._render = tpl;
                });
            };
        /**
         * @return {?}
         */
        SFComponent.prototype.validator = /**
         * @return {?}
         */
            function () {
                this.rootProperty._runValidation();
                /** @type {?} */
                var errors = this.rootProperty.errors;
                this._valid = !(errors && errors.length);
                if (!this._valid)
                    this.formError.emit(errors);
                this.cd.detectChanges();
            };
        /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         */
        /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         * @param {?=} newSchema
         * @param {?=} newUI
         * @return {?}
         */
        SFComponent.prototype.refreshSchema = /**
         * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
         * @param {?=} newSchema
         * @param {?=} newUI
         * @return {?}
         */
            function (newSchema, newUI) {
                var _this = this;
                if (newSchema)
                    this.schema = newSchema;
                if (newUI)
                    this.ui = newUI;
                if (!this.schema || typeof this.schema.properties === 'undefined')
                    throw new Error("Invalid Schema");
                if (this.schema.ui && typeof this.schema.ui === 'string')
                    throw new Error("Don't support string with root ui property");
                this.schema.type = 'object';
                this._formData = __assign({}, this.formData);
                if (this._inited)
                    this.terminator.destroy();
                this.coverProperty();
                this.coverButtonProperty();
                this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData);
                this.attachCustomRender();
                this.rootProperty.valueChanges.subscribe(function (value) {
                    _this._item = Object.assign({}, _this.formData, value);
                    _this.formChange.emit(_this._item);
                });
                this.rootProperty.errorsChanges.subscribe(function (errors) {
                    _this._valid = !(errors && errors.length);
                    _this.formError.emit(errors);
                    _this.cd.detectChanges();
                });
                this.reset();
            };
        /**
         * 重置表单
         * @param [emit] 是否触发 `formReset` 事件，默认：`false`
         */
        /**
         * 重置表单
         * @param {?=} emit
         * @return {?}
         */
        SFComponent.prototype.reset = /**
         * 重置表单
         * @param {?=} emit
         * @return {?}
         */
            function (emit) {
                var _this = this;
                if (emit === void 0) {
                    emit = false;
                }
                this.rootProperty.resetValue(this.formData, false);
                Promise.resolve().then(function () { return _this.cd.detectChanges(); });
                if (emit) {
                    this.formReset.emit(this.value);
                }
            };
        /**
         * @return {?}
         */
        SFComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.terminator.destroy();
                this.i18n$.unsubscribe();
            };
        SFComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf, [sf]',
                        template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\" (click)=\"reset(true)\" type=\"button\" nz-button [nzType]=\"_btn.reset_type\">{{_btn.reset}}</button>\n          </ng-container>\n        </div>\n      </nz-col>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                        preserveWhitespaces: false,
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
                            '[class.sf-search]': "mode === 'search'",
                            '[class.sf-edit]': "mode === 'edit'",
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SFComponent.ctorParameters = function () {
            return [
                { type: FormPropertyFactory },
                { type: TerminatorService },
                { type: DelonFormConfig },
                { type: core.ChangeDetectorRef },
                { type: theme.DelonLocaleService }
            ];
        };
        SFComponent.propDecorators = {
            layout: [{ type: core.Input }],
            schema: [{ type: core.Input }],
            ui: [{ type: core.Input }],
            formData: [{ type: core.Input }],
            button: [{ type: core.Input }],
            liveValidate: [{ type: core.Input }],
            autocomplete: [{ type: core.Input }],
            firstVisual: [{ type: core.Input }],
            mode: [{ type: core.Input }],
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
        return SFComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextUniqueId = 0;
    var SFItemComponent = /** @class */ (function () {
        // endregion
        function SFItemComponent(widgetFactory, terminator) {
            this.widgetFactory = widgetFactory;
            this.terminator = terminator;
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
                var ui = /** @type {?} */ (this.formProperty.ui);
                this.widget.formProperty = this.formProperty;
                this.widget.schema = this.formProperty.schema;
                this.widget.ui = ui;
                this.widget.id = id;
                this.widget.firstVisual = ui.firstVisual;
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
                this.terminator.onDestroy.subscribe(function () {
                    _this.ngOnDestroy();
                });
            };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.ref = this.widgetFactory.createWidget(this.container, /** @type {?} */ ((this.formProperty.ui["widget"] || this.formProperty.schema.type)));
                this.onWidgetInstanciated(this.ref.instance);
            };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.formProperty.ui["__destroy"] = true;
                this.ref.destroy();
            };
        SFItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item',
                        template: "<ng-template #target></ng-template>"
                    }] }
        ];
        /** @nocollapse */
        SFItemComponent.ctorParameters = function () {
            return [
                { type: WidgetFactory },
                { type: TerminatorService }
            ];
        };
        SFItemComponent.propDecorators = {
            formProperty: [{ type: core.Input }],
            container: [{ type: core.ViewChild, args: ['target', { read: core.ViewContainerRef },] }]
        };
        return SFItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SFFixedDirective = /** @class */ (function () {
        function SFFixedDirective(er, render) {
            this.render = render;
            this._inited = false;
            this.el = /** @type {?} */ (er.nativeElement);
        }
        /**
         * @return {?}
         */
        SFFixedDirective.prototype.init = /**
         * @return {?}
         */
            function () {
                if (!this._inited || this.num == null || this.num <= 0)
                    return;
                /** @type {?} */
                var widgetEl = this.el.querySelector('.ant-row') || this.el;
                this.render.addClass(widgetEl, 'sf-fixed');
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
        SFFixedDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        SFFixedDirective.propDecorators = {
            num: [{ type: core.Input, args: ['fixed-label',] }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SFFixedDirective.prototype, "num", void 0);
        return SFFixedDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SFItemWrapComponent = /** @class */ (function () {
        function SFItemWrapComponent() {
        }
        SFItemWrapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item-wrap',
                        template: "\n  <nz-form-item [style.width.px]=\"ui.width\">\n    <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n        <ng-content></ng-content>\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n      </div>\n    </nz-col>\n  </nz-form-item>"
                    }] }
        ];
        SFItemWrapComponent.propDecorators = {
            id: [{ type: core.Input }],
            schema: [{ type: core.Input }],
            ui: [{ type: core.Input }],
            showError: [{ type: core.Input }],
            error: [{ type: core.Input }],
            showTitle: [{ type: core.Input }]
        };
        return SFItemWrapComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.table._addTpl(this.path.startsWith('/') ? this.path : "/" + this.path, this.templateRef);
            };
        SFTemplateDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[sf-template]',
                    },] }
        ];
        /** @nocollapse */
        SFTemplateDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: SFComponent }
            ];
        };
        SFTemplateDirective.propDecorators = {
            path: [{ type: core.Input, args: ['sf-template',] }]
        };
        return SFTemplateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // unsupported: template constraints.
    /**
     * @abstract
     * @template T
     */
    var Widget = /** @class */ (function () {
        function Widget(cd, sfComp) {
            this.cd = cd;
            this.sfComp = sfComp;
            this.showError = false;
            this.id = '';
            this.firstVisual = false;
        }
        Object.defineProperty(Widget.prototype, "cls", {
            get: /**
             * @return {?}
             */ function () {
                return this.ui.class || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                if (this.schema.readOnly === true)
                    return true;
                return null;
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
                this.formProperty.errorsChanges
                    .pipe(operators.filter(function (w) { return w != null; }))
                    .subscribe(function (errors) {
                    if (_this.ui.debug)
                        di('errorsChanges', _this.formProperty.path, errors);
                    // 不显示首次校验视觉
                    if (_this.firstVisual) {
                        _this.showError = errors.length > 0;
                        _this.error = _this.showError ? errors[0].message : '';
                        if (_this.ui["__destroy"] !== true)
                            _this.cd.detectChanges();
                    }
                    _this.firstVisual = true;
                });
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
                if (this.ui.debug) {
                    di('valueChanges', this.formProperty.path, this.formProperty);
                }
            };
        Object.defineProperty(Widget.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this.formProperty.value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        Widget.prototype.detectChanges = /**
         * @return {?}
         */
            function () {
                this.cd.detectChanges();
                this.formProperty.root.widget.cd.markForCheck();
            };
        /** @nocollapse */
        Widget.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, decorators: [{ type: core.Inject, args: [core.ChangeDetectorRef,] }] },
                { type: SFComponent, decorators: [{ type: core.Inject, args: [SFComponent,] }] }
            ];
        };
        Widget.propDecorators = {
            cls: [{ type: core.HostBinding, args: ['class',] }]
        };
        return Widget;
    }());
    var ControlWidget = /** @class */ (function (_super) {
        __extends(ControlWidget, _super);
        function ControlWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ControlWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
            function (value) { };
        return ControlWidget;
    }(Widget));
    var ArrayLayoutWidget = /** @class */ (function (_super) {
        __extends(ArrayLayoutWidget, _super);
        function ArrayLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayLayoutWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
            function (value) { };
        /**
         * @return {?}
         */
        ArrayLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.formProperty.errorsChanges.subscribe(function () { return _this.cd.detectChanges(); });
            };
        return ArrayLayoutWidget;
    }(Widget));
    var ObjectLayoutWidget = /** @class */ (function (_super) {
        __extends(ObjectLayoutWidget, _super);
        function ObjectLayoutWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ObjectLayoutWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
            function (value) { };
        /**
         * @return {?}
         */
        ObjectLayoutWidget.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.formProperty.errorsChanges.subscribe(function () { return _this.cd.detectChanges(); });
            };
        return ObjectLayoutWidget;
    }(Widget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.grid = this.ui.grid;
                /** @type {?} */
                var list = [];
                try {
                    for (var _b = __values(this.formProperty.propertiesId), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        /** @type {?} */
                        var property = /** @type {?} */ (this.formProperty.properties[key]);
                        /** @type {?} */
                        var item = {
                            property: property,
                            grid: property.ui["grid"] || this.grid || {},
                            spanLabelFixed: property.ui["spanLabelFixed"],
                            show: property.ui["hidden"] === false
                        };
                        list.push(item);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.list = list;
            };
        ObjectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-object',
                        template: "\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <nz-col\n            [nzSpan]=\"i.grid.span\" [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\" [nzSm]=\"i.grid.sm\" [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\" [nzXl]=\"i.grid.xl\" [nzXXl]=\"i.grid.xxl\">\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </nz-col>\n        </ng-container>\n      </ng-container>\n    </nz-row>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>",
                        preserveWhitespaces: false
                    }] }
        ];
        return ObjectWidget;
    }(ObjectLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function () {
                return (this.schema.maxItems &&
                    ( /** @type {?} */(this.formProperty.properties)).length >= this.schema.maxItems);
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
                if (this.ui.grid && this.ui.grid.arraySpan)
                    this.arraySpan = this.ui.grid.arraySpan;
                this.addTitle = this.ui.addTitle || '添加';
                this.addType = this.ui.addType || 'dashed';
                this.removeTitle =
                    this.ui.removable === false ? null : this.ui.removeTitle || '移除';
            };
        /**
         * @return {?}
         */
        ArrayWidget.prototype.addItem = /**
         * @return {?}
         */
            function () {
                this.formProperty.add(null);
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
                        template: "\n  <nz-form-item>\n    <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label>\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n      <div class=\"add\">\n        <button nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n      </div>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n        <nz-row class=\"sf-array-container\">\n          <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n            <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n              <nz-card>\n                <sf-item [formProperty]=\"i\"></sf-item>\n                <span *ngIf=\"removeTitle\" class=\"remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                  <i class=\"anticon anticon-delete\"></i>\n                </span>\n              </nz-card>\n            </nz-col>\n          </ng-container>\n        </nz-row>\n\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n      </div>\n    </nz-col>\n  </nz-form-item>\n  "
                    }] }
        ];
        return ArrayWidget;
    }(ArrayLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.type = !!(this.ui["addOnAfter"] || this.ui["addOnBefore"] || this.ui["addOnAfterIcon"] || this.ui["addOnBeforeIcon"] || this.ui["prefix"] || this.ui["prefixIcon"] || this.ui["suffix"] || this.ui["suffixIcon"])
                    ? 'addon'
                    : '';
            };
        StringWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-string',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <ng-template #ipt>\n      <input nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.type]=\"ui.type || 'text'\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [attr.autocomplete]=\"ui.autocomplete\"\n        [attr.autoFocus]=\"ui.autofocus\">\n    </ng-template>\n\n    <ng-container *ngIf=\"type === 'addon'; else ipt\">\n      <nz-input-group\n        [nzAddOnBefore]=\"ui.addOnBefore\" [nzAddOnAfter]=\"ui.addOnAfter\"\n        [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\" [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n        [nzPrefix]=\"ui.prefix\" [nzPrefixIcon]=\"ui.prefixIcon\"\n        [nzSuffix]=\"ui.suffix\" [nzSuffixIcon]=\"ui.suffixIcon\">\n        <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n      </nz-input-group>\n    </ng-container>\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return StringWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumberWidget = /** @class */ (function (_super) {
        __extends(NumberWidget, _super);
        function NumberWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.formatter = function (value) { return value; };
            _this.parser = function (value) { return value; };
            return _this;
        }
        /**
         * @return {?}
         */
        NumberWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _a = this, schema = _a.schema, ui = _a.ui;
                if (typeof schema.minimum !== 'undefined') {
                    this.min = schema.exclusiveMinimum ? schema.minimum + 1 : schema.minimum;
                }
                if (typeof schema.maximum !== 'undefined') {
                    this.max = schema.exclusiveMaximum ? schema.maximum - 1 : schema.maximum;
                }
                this.step = schema.multipleOf || 1;
                if (schema.type === 'integer') {
                    this.min = Math.trunc(this.min);
                    this.max = Math.trunc(this.max);
                    this.step = Math.trunc(this.step);
                }
                if (ui["prefix"] != null) {
                    ui["formatter"] = function (value) { return ui["prefix"] + " " + value; };
                    ui["parser"] = function (value) { return value.replace(ui["prefix"] + " ", ''); };
                }
                if (ui["unit"] != null) {
                    ui["formatter"] = function (value) { return value + " " + ui["unit"]; };
                    ui["parser"] = function (value) { return value.replace(" " + ui["unit"], ''); };
                }
                if (ui["formatter"])
                    this.formatter = ui["formatter"];
                if (ui["parser"])
                    this.parser = ui["parser"];
            };
        NumberWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-number',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-input-number\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzMin]=\"min\"\n      [nzMax]=\"max\"\n      [nzStep]=\"step\"\n      [nzFormatter]=\"formatter\"\n      [nzParser]=\"parser\"\n      [nzPrecision]=\"ui.precision\"\n      [nzPlaceHolder]=\"ui.placeholder || ''\">\n    </nz-input-number>\n  </sf-item-wrap>",
                        preserveWhitespaces: false
                    }] }
        ];
        return NumberWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DateWidget = /** @class */ (function (_super) {
        __extends(DateWidget, _super);
        function DateWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.displayValue = null;
            _this.flatRange = false;
            return _this;
        }
        /**
         * @return {?}
         */
        DateWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var ui = this.ui;
                this.mode = ui["mode"] || 'date';
                this.flatRange = ui["end"] != null;
                if (this.flatRange) {
                    this.mode = 'range';
                }
                if (!ui["displayFormat"]) {
                    switch (this.mode) {
                        case 'month':
                            this.displayFormat = "yyyy-MM";
                            break;
                        case 'week':
                            this.displayFormat = "yyyy-ww";
                            break;
                    }
                }
                else {
                    this.displayFormat = ui["displayFormat"];
                }
                this.format = ui["format"] ? ui["format"] : this.schema.type === 'number'
                    ? 'x'
                    : 'YYYY-MM-DD HH:mm:ss';
                // 公共API
                this.i = {
                    allowClear: toBool(ui["allowClear"], true),
                    // nz-date-picker
                    showToday: toBool(ui["showToday"], true),
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
                if (this.flatRange) {
                    this.displayValue = value == null ? [] : [value, this.endProperty.formData];
                }
                else {
                    this.displayValue = value;
                }
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
                var _this = this;
                if (value == null) {
                    this.setValue(null);
                    this.setEnd(null);
                    return;
                }
                /** @type {?} */
                var res = Array.isArray(value)
                    ? value.map(function (d) { return format(d, _this.format); })
                    : format(value, this.format);
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
                if (this.ui["onOpenChange"])
                    this.ui["onOpenChange"](status);
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
                if (this.ui["onOk"])
                    this.ui["onOk"](value);
            };
        Object.defineProperty(DateWidget.prototype, "endProperty", {
            get: /**
             * @return {?}
             */ function () {
                return this.formProperty.parent.properties[this.ui["end"]];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.setEnd = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.endProperty.setValue(value, true);
            };
        DateWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-date',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <ng-container [ngSwitch]=\"mode\">\n\n      <nz-month-picker *ngSwitchCase=\"'month'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      ></nz-month-picker>\n\n      <nz-week-picker *ngSwitchCase=\"'week'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n      ></nz-week-picker>\n\n      <nz-range-picker *ngSwitchCase=\"'range'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzRanges]=\"ui.ranges\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-range-picker>\n\n      <nz-date-picker *ngSwitchDefault\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzShowTime]=\"ui.showTime\"\n        [nzShowToday]=\"i.showToday\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-date-picker>\n    </ng-container>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return DateWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.format = ui["format"] ? ui["format"] : this.schema.type === 'number'
                    ? 'x'
                    : 'HH:mm:ss';
                this.i = {
                    displayFormat: ui["displayFormat"] || 'HH:mm:ss',
                    allowEmpty: toBool(ui["allowEmpty"], true),
                    clearText: ui["clearText"] || '清除',
                    defaultOpenValue: ui["defaultOpenValue"] || new Date(),
                    hideDisabledOptions: toBool(ui["hideDisabledOptions"], false),
                    hourStep: ui["hourStep"] || 1,
                    minuteStep: ui["nzMinuteStep"] || 1,
                    secondStep: ui["secondStep"] || 1,
                };
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
                    return;
                }
                /** @type {?} */
                var v = value != null && value.toString().length ? new Date(value) : null;
                // trying restore full Date format
                if (v != null && v.toString() === 'Invalid Date') {
                    if (value.toString().split(':').length <= 1)
                        value += ':00';
                    v = new Date("1970-1-1 " + value);
                }
                this.displayValue = v;
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
                if (this.ui["utcEpoch"] === true) {
                    this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
                    return;
                }
                this.setValue(format(value, this.format));
            };
        TimeWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-time',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-time-picker\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzFormat]=\"i.displayFormat\"\n      [nzAllowEmpty]=\"i.allowEmpty\"\n      [nzClearText]=\"i.clearText\"\n      [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n      [nzDisabledHours]=\"ui.disabledHours\"\n      [nzDisabledMinutes]=\"ui.disabledMinutes\"\n      [nzDisabledSeconds]=\"ui.disabledSeconds\"\n      [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n      [nzHourStep]=\"i.hourStep\"\n      [nzMinuteStep]=\"i.minuteStep\"\n      [nzSecondStep]=\"i.secondStep\"\n      [nzPopupClassName]=\"ui.popupClassName\"\n      >\n    </nz-time-picker>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TimeWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.styleType = (this.ui["styleType"] || 'default') === 'default';
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) { return (_this.data = list); });
            };
        RadioWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-radio',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-radio-group\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzName]=\"id\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\">\n      <ng-container *ngIf=\"styleType\">\n        <label *ngFor=\"let option of data\"\n          nz-radio\n          [nzValue]=\"option.value\"\n          [nzDisabled]=\"option.disabled\">\n          <span [innerHTML]=\"option.label\"></span>\n        </label>\n      </ng-container>\n      <ng-container *ngIf=\"!styleType\">\n        <label *ngFor=\"let option of data\"\n          nz-radio-button\n          [nzValue]=\"option.value\"\n          [nzDisabled]=\"option.disabled\">\n          <span [innerHTML]=\"option.label\"></span>\n        </label>\n      </ng-container>\n    </nz-radio-group>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return RadioWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxWidget = /** @class */ (function (_super) {
        __extends(CheckboxWidget, _super);
        function CheckboxWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.data = [];
            _this.allChecked = false;
            _this.indeterminate = false;
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.data = list;
                    _this.label = _this.ui.spanLabel;
                    _this.control = _this.ui.spanControl;
                    if (list.length === 0) {
                        _this.label = null;
                        _this.offset = _this.ui.spanLabel;
                    }
                    _this.grid_span = _this.ui["span"] && _this.ui["span"] > 0 ? _this.ui["span"] : 0;
                    _this.updateAllChecked();
                });
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
                var checkList = this.data.filter(function (w) { return w.checked; });
                this.updateAllChecked().setValue(checkList.map(function (item) { return item.value; }));
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
                this.data.forEach(function (item) { return (item.checked = values.indexOf(item.value) !== -1); });
                this.notifySet();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        CheckboxWidget.prototype.onAllChecked = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                e.stopPropagation();
                this.data.forEach(function (item) { return (item.checked = _this.allChecked); });
                this.notifySet();
            };
        /**
         * @return {?}
         */
        CheckboxWidget.prototype.updateAllChecked = /**
         * @return {?}
         */
            function () {
                if (this.data.every(function (item) { return item.checked === false; })) {
                    this.allChecked = false;
                    this.indeterminate = false;
                }
                else if (this.data.every(function (item) { return item.checked === true; })) {
                    this.allChecked = true;
                    this.indeterminate = false;
                }
                else {
                    this.indeterminate = true;
                }
                this.detectChanges();
                return this;
            };
        /**
         * @param {?} res
         * @return {?}
         */
        CheckboxWidget.prototype.notifyChange = /**
         * @param {?} res
         * @return {?}
         */
            function (res) {
                if (this.ui["change"])
                    this.ui["change"](res);
            };
        CheckboxWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-checkbox',
                        template: "\n  <ng-template #all>\n    <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\"\n      [(ngModel)]=\"allChecked\"\n      [nzIndeterminate]=\"indeterminate\"\n      (click)=\"onAllChecked($event)\">\n      {{ ui.checkAllText || '\u5168\u9009' }}\n    </label>\n  </ng-template>\n  <nz-form-item [style.width.px]=\"ui.width\">\n    <nz-col *ngIf=\"data.length > 0\" [nzSpan]=\"label\" class=\"ant-form-item-label\">\n      <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"control\" [nzOffset]=\"offset\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n          <ng-container *ngIf=\"data.length === 0\">\n            <label nz-checkbox\n              [nzDisabled]=\"disabled\"\n              [ngModel]=\"value\"\n              (ngModelChange)=\"_setValue($event)\">\n              <span [innerHTML]=\"schema.title\"></span>\n              <span class=\"optional\">\n                {{ ui.optional }}\n                <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n                  <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n                </nz-tooltip>\n              </span>\n            </label>\n          </ng-container>\n          <ng-container *ngIf=\"data.length > 0\">\n            <ng-container *ngIf=\"grid_span === 0\">\n              <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n              <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n            </ng-container>\n            <ng-container *ngIf=\"grid_span !== 0\">\n              <nz-checkbox-wrapper class=\"checkbox-grid-list\" (nzOnChange)=\"groupInGridChange($event)\">\n                <nz-row>\n                  <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n                    <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n                  </nz-col>\n                  <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n                    <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n                  </nz-col>\n                </nz-row>\n              </nz-checkbox-wrapper>\n            </ng-container>\n          </ng-container>\n\n          <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n          <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n      </div>\n    </nz-col>\n  </nz-form-item>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return CheckboxWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BooleanWidget = /** @class */ (function (_super) {
        __extends(BooleanWidget, _super);
        function BooleanWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-boolean',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-switch\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzCheckedChildren]=\"ui.checkedChildren\"\n      [nzUnCheckedChildren]=\"ui.unCheckedChildren\">\n    </nz-switch>\n  </sf-item-wrap>",
                        preserveWhitespaces: false
                    }] }
        ];
        return BooleanWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                if (this.ui["autosize"] != null) {
                    this.autosize = this.ui["autosize"];
                }
            };
        TextareaWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-textarea',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <textarea nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\">\n    </textarea>\n\n  </sf-item-wrap>",
                        preserveWhitespaces: false
                    }] }
        ];
        return TextareaWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectWidget = /** @class */ (function (_super) {
        __extends(SelectWidget, _super);
        function SelectWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasGroup = false;
            return _this;
        }
        /**
         * @return {?}
         */
        SelectWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.i = {
                    allowClear: this.ui["allowClear"],
                    autoFocus: toBool(this.ui["autoFocus"], false),
                    dropdownClassName: this.ui["dropdownClassName"] || null,
                    dropdownMatchSelectWidth: toBool(this.ui["dropdownMatchSelectWidth"], true),
                    serverSearch: toBool(this.ui["serverSearch"], false),
                    maxMultipleCount: this.ui["maxMultipleCount"] || Infinity,
                    mode: this.ui["mode"] || 'default',
                    notFoundContent: this.ui["notFoundContent"] || '无法找到',
                    showSearch: toBool(this.ui["showSearch"], true),
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.data = list;
                    _this.hasGroup = list.filter(function (w) { return w.group === true; }).length > 0;
                    _this.detectChanges();
                });
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
                if (this.ui["change"])
                    this.ui["change"](values);
                this.setValue(values);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectWidget.prototype.openChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.ui["openChange"])
                    this.ui["openChange"](value);
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
                if (this.ui["onSearch"]) {
                    this.ui["onSearch"](text).then(function (res) {
                        _this.data = res;
                        _this.detectChanges();
                    });
                    return;
                }
                this.detectChanges();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        SelectWidget.prototype.scrollToBottom = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.ui["scrollToBottom"])
                    this.ui["scrollToBottom"](value);
            };
        SelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-select',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-select\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzAllowClear]=\"i.allowClear\"\n      [nzAutoFocus]=\"i.autoFocus\"\n      [nzDropdownClassName]=\"i.dropdownClassName\"\n      [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n      [nzServerSearch]=\"i.serverSearch\"\n      [nzMaxMultipleCount]=\"i.maxMultipleCount\"\n      [nzMode]=\"i.mode\"\n      [nzNotFoundContent]=\"i.notFoundContent\"\n      [nzShowSearch]=\"i.showSearch\"\n      (nzOpenChange)=\"openChange($event)\"\n      (nzOnSearch)=\"searchChange($event)\"\n      (nzScrollToBottom)=\"scrollToBottom($event)\">\n      <ng-container *ngIf=\"!hasGroup\">\n        <nz-option\n          *ngFor=\"let o of data\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\">\n        </nz-option>\n      </ng-container>\n      <ng-container *ngIf=\"hasGroup\">\n        <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n          <nz-option\n            *ngFor=\"let o of i.children\"\n            [nzLabel]=\"o.label\"\n            [nzValue]=\"o.value\"\n            [nzDisabled]=\"o.disabled\">\n          </nz-option>\n        </nz-option-group>\n      </ng-container>\n    </nz-select>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return SelectWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        TreeSelectWidget.prototype.dc = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Muse wait `nz-tree-select` write values
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        _this.detectChanges();
                        resolve();
                    }, 101);
                });
            };
        /**
         * @param {?} list
         * @return {?}
         */
        TreeSelectWidget.prototype.tranData = /**
         * @param {?} list
         * @return {?}
         */
            function (list) {
                return list.map(function (node) { return new ngZorroAntd.NzTreeNode(/** @type {?} */ (util.deepCopy(node))); });
            };
        /**
         * @return {?}
         */
        TreeSelectWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var ui = this.ui;
                this.i = {
                    allowClear: ui["allowClear"],
                    showSearch: toBool(ui["showSearch"], false),
                    dropdownMatchSelectWidth: toBool(ui["dropdownMatchSelectWidth"], true),
                    multiple: toBool(ui["multiple"], false),
                    checkable: toBool(ui["checkable"], false),
                    showExpand: toBool(ui["showExpand"], true),
                    showLine: toBool(ui["showLine"], false),
                    asyncData: typeof ui["expandChange"] === 'function',
                    defaultExpandAll: toBool(ui["defaultExpandAll"], false),
                    displayWith: ui["displayWith"] || (function (node) { return node.title; }),
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
                getData(this.schema, this.ui, this.formProperty.formData)
                    .pipe(operators.map(function (list) { return _this.tranData(list); }))
                    .subscribe(function (list) {
                    _this.data = list;
                    _this.dc();
                });
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
                if (this.ui["change"])
                    this.ui["change"](value);
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
                if (typeof ui["expandChange"] !== 'function')
                    return;
                ui["expandChange"](e)
                    .pipe(operators.map(function (list) { return _this.tranData(list); }))
                    .subscribe(function (res) {
                    e.node.addChildren(res);
                    _this.dc();
                });
            };
        TreeSelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-tree-select',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-tree-select\n      [nzAllowClear]=\"i.allowClear\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzDisabled]=\"disabled\"\n      [nzShowSearch]=\"i.showSearch\"\n      [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n      [nzDropdownStyle]=\"ui.dropdownStyle\"\n      [nzMultiple]=\"i.multiple\"\n      [nzSize]=\"ui.size\"\n      [nzCheckable]=\"i.checkable\"\n      [nzShowExpand]=\"i.showExpand\"\n      [nzShowLine]=\"i.showLine\"\n      [nzAsyncData]=\"i.asyncData\"\n      [nzNodes]=\"data\"\n      [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n      [nzDefaultExpandedKeys]=\"ui.defaultExpandedKeys\"\n      [nzDisplayWith]=\"i.displayWith\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      (nzExpandChange)=\"expandChange($event)\">\n    </nz-tree-select>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TreeSelectWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.data = list;
                    _this.detectChanges();
                });
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
                if (this.ui["checkedChange"])
                    this.ui["checkedChange"](item.checked);
            };
        /**
         * @return {?}
         */
        TagWidget.prototype._afterClose = /**
         * @return {?}
         */
            function () {
                if (this.ui["afterClose"])
                    this.ui["afterClose"]();
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
                if (this.ui["onClose"])
                    this.ui["onClose"](e);
            };
        /**
         * @return {?}
         */
        TagWidget.prototype.updateValue = /**
         * @return {?}
         */
            function () {
                this.formProperty.setValue(this.data.filter(function (w) { return w.checked; }).map(function (i) { return i.value; }), false);
            };
        TagWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-tag',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-tag\n      *ngFor=\"let i of data\"\n      nzMode=\"checkable\"\n      [nzChecked]=\"i.checked\"\n      (nzAfterClose)=\"_afterClose()\"\n      (nzOnClose)=\"_close($event)\"\n      (nzCheckedChange)=\"onChange(i)\">\n      {{i.label}}\n    </nz-tag>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TagWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UploadWidget = /** @class */ (function (_super) {
        __extends(UploadWidget, _super);
        function UploadWidget(cd, modalSrv) {
            var _this = _super.call(this, cd) || this;
            _this.modalSrv = modalSrv;
            _this.fileList = [];
            _this.btnType = '';
            _this.handlePreview = function (file) {
                _this.modalSrv
                    .create({
                    nzContent: "<img src=\"" + (file.url ||
                        file.thumbUrl) + "\" class=\"img-fluid\" />",
                    nzFooter: null,
                })
                    .afterClose.subscribe(function () { return _this.detectChanges(); });
            };
            return _this;
        }
        /**
         * @return {?}
         */
        UploadWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.i = {
                    type: this.ui.type || 'select',
                    text: this.ui["text"] || '点击上传',
                    action: this.ui["action"] || '',
                    accept: this.ui["accept"] || '',
                    limit: this.ui["limit"] == null ? 0 : +this.ui["limit"],
                    size: this.ui.size == null ? 0 : +this.ui.size,
                    fileType: this.ui["fileType"] || '',
                    listType: this.ui["listType"] || 'text',
                    multiple: toBool(this.ui["multiple"], false),
                    name: this.ui["name"] || 'file',
                    showUploadList: toBool(this.ui["showUploadList"], true),
                    withCredentials: toBool(this.ui["withCredentials"], false),
                    resReName: (this.ui["resReName"] || '').split('.'),
                };
                if (this.i.listType === 'picture-card')
                    this.btnType = 'plus';
                if (this.i.type === 'drag') {
                    this.i.listType = null;
                    this.btnType = 'drag';
                    this.i.text = this.ui["text"] || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
                    this.i.hint =
                        this.ui["hint"] || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
                }
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
                if (this.ui["change"])
                    this.ui["change"](args);
                if (args.type !== 'success')
                    return;
                this.notify(args.fileList);
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.fileList = /** @type {?} */ (list);
                    _this.notify(_this.fileList);
                    _this.detectChanges();
                });
            };
        /**
         * @param {?} fileList
         * @return {?}
         */
        UploadWidget.prototype.notify = /**
         * @param {?} fileList
         * @return {?}
         */
            function (fileList) {
                var _this = this;
                /** @type {?} */
                var res = fileList.map(function (item) {
                    return util.deepGet(item.response, _this.i.resReName, item.response);
                });
                this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
            };
        UploadWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-upload',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-upload\n      [nzType]=\"i.type\"\n      [nzFileList]=\"fileList\"\n      [nzDisabled]=\"disabled\"\n      [nzAction]=\"i.action\"\n      [nzAccept]=\"i.accept\"\n      [nzLimit]=\"i.limit\"\n      [nzSize]=\"i.size\"\n      [nzFileType]=\"i.fileType\"\n      [nzHeaders]=\"ui.headers\"\n      [nzData]=\"ui.data\"\n      [nzListType]=\"i.listType\"\n      [nzMultiple]=\"i.multiple\"\n      [nzName]=\"i.name\"\n      [nzShowUploadList]=\"i.showUploadList\"\n      [nzWithCredentials]=\"i.withCredentials\"\n      [nzRemove]=\"ui.remove\"\n      [nzPreview]=\"handlePreview\"\n      (nzChange)=\"change($event)\">\n      <ng-container [ngSwitch]=\"btnType\">\n        <ng-container *ngSwitchCase=\"'plus'\">\n          <i class=\"anticon anticon-plus\"></i>\n          <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'drag'\">\n          <p class=\"ant-upload-drag-icon\"><i class=\"anticon anticon-inbox\"></i></p>\n          <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n          <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <button type=\"button\" nz-button>\n            <i class=\"anticon anticon-upload\"></i><span [innerHTML]=\"i.text\"></span>\n          </button>\n        </ng-container>\n      </ng-container>\n    </nz-upload>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        UploadWidget.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: ngZorroAntd.NzModalService }
            ];
        };
        return UploadWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TransferWidget = /** @class */ (function (_super) {
        __extends(TransferWidget, _super);
        function TransferWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = [];
            _this._data = [];
            _this._canMove = function (arg) {
                return _this.ui["canMove"] ? _this.ui["canMove"](arg) : rxjs.of(arg.list);
            };
            return _this;
        }
        /**
         * @return {?}
         */
        TransferWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.i = {
                    titles: this.ui["titles"] || ['', ''],
                    operations: this.ui["operations"] || ['', ''],
                    itemUnit: this.ui["itemUnit"] || '项',
                    itemsUnit: this.ui["itemsUnit"] || '项',
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
                getData(this.schema, this.ui, null).subscribe(function (list) {
                    /** @type {?} */
                    var formData = _this.formProperty.formData;
                    if (!Array.isArray(formData))
                        formData = [formData];
                    list.forEach(function (item) {
                        if (~( /** @type {?} */(formData)).indexOf(item.value))
                            item["direction"] = 'right';
                    });
                    _this.list = list;
                    _this._data = list.filter(function (w) { return w["direction"] === 'right'; });
                    _this.notify();
                    _this.detectChanges();
                });
            };
        /**
         * @return {?}
         */
        TransferWidget.prototype.notify = /**
         * @return {?}
         */
            function () {
                this.formProperty.setValue(this._data.map(function (i) { return i.value; }), false);
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
                    this._data = this._data.filter(function (w) { return options.list.indexOf(w) === -1; });
                }
                if (this.ui["change"])
                    this.ui["change"](options);
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
                if (this.ui["searchChange"])
                    this.ui["searchChange"](options);
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
                if (this.ui["selectChange"])
                    this.ui["selectChange"](options);
                this.cd.detectChanges();
            };
        TransferWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-transfer',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-transfer\n      [nzDataSource]=\"list\"\n      [nzTitles]=\"i.titles\"\n      [nzOperations]=\"i.operations\"\n      [nzListStyle]=\"ui.listStyle\"\n      [nzItemUnit]=\"i.itemUnit\"\n      [nzItemsUnit]=\"i.itemsUnit\"\n      [nzShowSearch]=\"ui.showSearch\"\n      [nzFilterOption]=\"ui.filterOption\"\n      [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n      [nzNotFoundContent]=\"ui.notFoundContent\"\n      [nzCanMove]=\"_canMove\"\n      (nzChange)=\"_change($event)\"\n      (nzSearchChange)=\"_searchChange($event)\"\n      (nzSelectChange)=\"_selectChange($event)\">\n    </nz-transfer>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TransferWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SliderWidget = /** @class */ (function (_super) {
        __extends(SliderWidget, _super);
        function SliderWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._formatter = function (value) {
                if (_this.ui["formatter"])
                    return _this.ui["formatter"](value);
                return value;
            };
            return _this;
        }
        /**
         * @return {?}
         */
        SliderWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.min = this.schema.minimum || 0;
                this.max = this.schema.maximum || 100;
                this.step = this.schema.multipleOf || 1;
                this.marks = this.ui["marks"] || null;
                /** @type {?} */
                var included = this.ui["included"];
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
                if (this.ui["afterChange"])
                    this.ui["afterChange"](value);
            };
        SliderWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-slider',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-slider\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzRange]=\"ui.range\"\n      [nzMin]=\"min\"\n      [nzMax]=\"max\"\n      [nzStep]=\"step\"\n      [nzMarks]=\"marks\"\n      [nzDots]=\"ui.dots\"\n      [nzIncluded]=\"included\"\n      [nzVertical]=\"ui.vertical\"\n      [nzTipFormatter]=\"_formatter\"\n      (nzOnAfterChange)=\"_afterChange($event)\">\n    </nz-slider>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return SliderWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CustomWidget = /** @class */ (function (_super) {
        __extends(CustomWidget, _super);
        function CustomWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-custom',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <ng-template\n      [ngTemplateOutlet]=\"$any(ui)._render\"\n      [ngTemplateOutletContext]=\"{$implicit: this, schema: schema, ui: ui }\"></ng-template>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return CustomWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RateWidget = /** @class */ (function (_super) {
        __extends(RateWidget, _super);
        function RateWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasText = false;
            return _this;
        }
        /**
         * @return {?}
         */
        RateWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.count = this.schema.maximum || 5;
                this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
                this.allowClear = toBool(this.ui["allowClear"], true);
                this.autoFocus = toBool(this.ui["autoFocus"], false);
                this.hasText = !!this.ui["text"];
            };
        /**
         * @return {?}
         */
        RateWidget.prototype.genText = /**
         * @return {?}
         */
            function () {
                return this.hasText
                    ? ( /** @type {?} */(this.ui["text"])).replace('{{value}}', this.formProperty.value)
                    : '';
            };
        RateWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-rate',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-rate\n      [nzDisabled]=\"disabled\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzAllowClear]=\"allowClear\"\n      [nzAllowHalf]=\"allowHalf\"\n      [nzAutoFocus]=\"autoFocus\"\n      [nzCount]=\"count\"></nz-rate>\n    <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ genText() }}</span>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return RateWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EMAILSUFFIX = [
        'qq.com',
        '163.com',
        'gmail.com',
        '126.com',
        'aliyun.com',
    ];
    var AutoCompleteWidget = /** @class */ (function (_super) {
        __extends(AutoCompleteWidget, _super);
        function AutoCompleteWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fixData = [];
            _this.isAsync = false;
            return _this;
        }
        /**
         * @return {?}
         */
        AutoCompleteWidget.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.i = {
                    backfill: toBool(this.ui["backfill"], false),
                    defaultActiveFirstOption: toBool(this.ui["defaultActiveFirstOption"], true),
                    width: this.ui.width || undefined,
                };
                this.filterOption = this.ui["filterOption"] == null ? true : this.ui["filterOption"];
                if (typeof this.filterOption === 'boolean') {
                    this.filterOption = function (input, option) {
                        return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
                    };
                }
                this.isAsync = !!this.ui.asyncData;
                /** @type {?} */
                var orgTime = +(this.ui["debounceTime"] || 0);
                /** @type {?} */
                var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
                this.list = this.formProperty.valueChanges.pipe(operators.debounceTime(time), operators.startWith(''), operators.flatMap(function (input) {
                    return _this.isAsync ? _this.ui.asyncData(input) : _this.filterData(input);
                }), operators.map(function (res) { return getEnum(res, null, _this.schema.readOnly); }));
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
                if (this.isAsync)
                    return;
                switch (this.ui.type) {
                    case 'email':
                        this.fixData = getCopyEnum(EMAILSUFFIX, null, this.schema.readOnly);
                        break;
                    default:
                        this.fixData = getCopyEnum(this.schema.enum, this.formProperty.formData, this.schema.readOnly);
                        break;
                }
            };
        /**
         * @param {?} input
         * @return {?}
         */
        AutoCompleteWidget.prototype.filterData = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                var _this = this;
                switch (this.ui.type) {
                    case 'email':
                        return this.addEmailSuffix(input);
                    default:
                        return rxjs.of(this.fixData.filter(function (option) { return _this.filterOption(input, option); }));
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        AutoCompleteWidget.prototype.addEmailSuffix = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return rxjs.of(!value || ~value.indexOf('@')
                    ? []
                    : this.fixData.map(function (domain) { return value + "@" + domain.label; }));
            };
        AutoCompleteWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-autocomplete',
                        template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <input nz-input [nzAutocomplete]=\"auto\"\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        autocomplete=\"off\">\n      <nz-autocomplete #auto\n        [nzBackfill]=\"i.backfill\"\n        [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n        [nzWidth]=\"i.width\"\n        (selectionChange)=\"setValue($event?.nzValue)\">\n        <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.label\">{{i.label}}</nz-auto-option>\n      </nz-autocomplete>\n    </sf-item-wrap>\n    ",
                        preserveWhitespaces: false
                    }] }
        ];
        return AutoCompleteWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.clearText = this.ui["clearText"] || '清除';
                this.showArrow = toBool(this.ui["showArrow"], true);
                this.showInput = toBool(this.ui["showInput"], true);
                this.triggerAction = this.ui["triggerAction"] || ['click'];
                if (!!this.ui.asyncData) {
                    this.loadData = function (node, index) {
                        return ( /** @type {?} */(_this.ui.asyncData))(node, index, _this);
                    };
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.data = list;
                    _this.detectChanges();
                });
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
                this.ui["visibleChange"] && this.ui["visibleChange"](status);
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
                this.ui["change"] && this.ui["change"](value);
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
                this.ui["selectionChange"] && this.ui["selectionChange"](options);
            };
        /**
         * @param {?} options
         * @return {?}
         */
        CascaderWidget.prototype._select = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.ui["select"] && this.ui["select"](options);
            };
        /**
         * @param {?} options
         * @return {?}
         */
        CascaderWidget.prototype._clear = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.ui["clear"] && this.ui["clear"](options);
            };
        CascaderWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-cascader',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-cascader\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"_change($event)\"\n      [nzOptions]=\"data\"\n      [nzAllowClear]=\"ui.allowClear\"\n      [nzAutoFocus]=\"ui.autoFocus\"\n      [nzChangeOn]=\"ui.changeOn\"\n      [nzChangeOnSelect]=\"ui.changeOnSelect\"\n      [nzColumnClassName]=\"ui.columnClassName\"\n      [nzExpandTrigger]=\"ui.expandTrigger\"\n      [nzMenuClassName]=\"ui.menuClassName\"\n      [nzMenuStyle]=\"ui.menuStyle\"\n      [nzLabelProperty]=\"ui.labelProperty\"\n      [nzValueProperty]=\"ui.valueProperty\"\n      [nzLoadData]=\"loadData\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzShowArrow]=\"showArrow\"\n      [nzShowInput]=\"showInput\"\n      [nzShowSearch]=\"ui.showSearch\"\n      (nzClear)=\"_clear($event)\"\n      (nzVisibleChange)=\"_visibleChange($event)\"\n      (nzSelect)=\"_select($event)\"\n      (nzSelectionChange)=\"_selectionChange($event)\">\n    </nz-cascader>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return CascaderWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.i = {
                    valueWith: this.ui["valueWith"] || (function (item) { return item.label; }),
                    notFoundContent: this.ui["notFoundContent"] || '无匹配结果，轻敲空格完成输入',
                    placement: this.ui["placement"] || 'bottom',
                    prefix: this.ui["prefix"] || '@',
                };
                /** @type {?} */
                var min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
                /** @type {?} */
                var max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
                if (!this.ui.validator && (min !== -1 || max !== -1)) {
                    this.ui.validator = function (value, formProperty, form) {
                        /** @type {?} */
                        var count = _this.mentionChild.getMentions().length;
                        if (min !== -1 && count < min) {
                            return [{ keyword: 'mention', message: "\u6700\u5C11\u63D0\u53CA " + min + " \u6B21" }];
                        }
                        if (max !== -1 && count > max) {
                            return [{ keyword: 'mention', message: "\u6700\u591A\u63D0\u53CA " + max + " \u6B21" }];
                        }
                        return null;
                    };
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MentionWidget.prototype.reset = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                getData(this.schema, this.ui, null).subscribe(function (list) {
                    _this.data = list;
                    _this.detectChanges();
                });
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
                if (this.ui["select"])
                    this.ui["select"](options);
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
                if (typeof this.ui["loadData"] !== 'function')
                    return;
                this.loading = true;
                ( /** @type {?} */(this.ui["loadData"](option)))
                    .pipe(operators.tap(function () { return (_this.loading = false); }), operators.map(function (res) { return getEnum(res, null, _this.schema.readOnly); }))
                    .subscribe(function (res) {
                    _this.data = res;
                    _this.cd.detectChanges();
                });
            };
        MentionWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-mention',
                        template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n      <nz-mention #mentions\n        [nzSuggestions]=\"data\"\n        [nzValueWith]=\"i.valueWith\"\n        [nzLoading]=\"loading\"\n        [nzNotFoundContent]=\"i.notFoundContent\"\n        [nzPlacement]=\"i.placement\"\n        [nzPrefix]=\"i.prefix\"\n        (nzOnSelect)=\"_select($event)\"\n        (nzOnSearchChange)=\"_search($event)\">\n\n        <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n          <input nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            autocomplete=\"off\">\n        </ng-container>\n\n        <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n          <textarea nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"ui.autosize\">\n          </textarea>\n        </ng-container>\n\n      </nz-mention>\n\n    </sf-item-wrap>\n    ",
                        preserveWhitespaces: false
                    }] }
        ];
        MentionWidget.propDecorators = {
            mentionChild: [{ type: core.ViewChild, args: ['mentions',] }]
        };
        return MentionWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                this.ui["_required"] = false;
            };
        TextWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-text',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    {{ value || ui.defaultText || '-' }}\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TextWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [
        SFComponent,
        SFItemComponent,
        SFItemWrapComponent,
        SFTemplateDirective,
        SFFixedDirective,
    ];
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
                        DelonFormConfig,
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
                        imports: [common.CommonModule, forms.FormsModule, util.DelonUtilModule, theme.DelonLocaleModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS, WIDGETS),
                        entryComponents: __spread(WIDGETS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return DelonFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.DelonFormConfig = DelonFormConfig;
    exports.useFactory = useFactory;
    exports.SFComponent = SFComponent;
    exports.SFItemComponent = SFItemComponent;
    exports.SFFixedDirective = SFFixedDirective;
    exports.DelonFormModule = DelonFormModule;
    exports.ERRORSDEFAULT = ERRORSDEFAULT;
    exports.FormProperty = FormProperty;
    exports.PropertyGroup = PropertyGroup;
    exports.FormPropertyFactory = FormPropertyFactory;
    exports.AtomicProperty = AtomicProperty;
    exports.ObjectProperty = ObjectProperty;
    exports.ArrayProperty = ArrayProperty;
    exports.StringProperty = StringProperty;
    exports.NumberProperty = NumberProperty;
    exports.BooleanProperty = BooleanProperty;
    exports.Widget = Widget;
    exports.ControlWidget = ControlWidget;
    exports.ArrayLayoutWidget = ArrayLayoutWidget;
    exports.ObjectLayoutWidget = ObjectLayoutWidget;
    exports.ObjectWidget = ObjectWidget;
    exports.ArrayWidget = ArrayWidget;
    exports.StringWidget = StringWidget;
    exports.NumberWidget = NumberWidget;
    exports.DateWidget = DateWidget;
    exports.TimeWidget = TimeWidget;
    exports.RadioWidget = RadioWidget;
    exports.CheckboxWidget = CheckboxWidget;
    exports.BooleanWidget = BooleanWidget;
    exports.TextareaWidget = TextareaWidget;
    exports.SelectWidget = SelectWidget;
    exports.TreeSelectWidget = TreeSelectWidget;
    exports.TagWidget = TagWidget;
    exports.UploadWidget = UploadWidget;
    exports.TransferWidget = TransferWidget;
    exports.SliderWidget = SliderWidget;
    exports.RateWidget = RateWidget;
    exports.EMAILSUFFIX = EMAILSUFFIX;
    exports.AutoCompleteWidget = AutoCompleteWidget;
    exports.CascaderWidget = CascaderWidget;
    exports.MentionWidget = MentionWidget;
    exports.CustomWidget = CustomWidget;
    exports.NzWidgetRegistry = NzWidgetRegistry;
    exports.WidgetRegistry = WidgetRegistry;
    exports.WidgetFactory = WidgetFactory;
    exports.SchemaValidatorFactory = SchemaValidatorFactory;
    exports.AjvSchemaValidatorFactory = AjvSchemaValidatorFactory;
    exports.ɵb = SFItemWrapComponent;
    exports.ɵa = TerminatorService;
    exports.ɵc = SFTemplateDirective;
    exports.ɵd = TextWidget;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9mb3JtL3NyYy9lcnJvcnMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9jb25maWcudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdXRpbHMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy90ZXJtaW5hdG9yLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9mb3JtLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYXRvbWljLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvbnVtYmVyLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvc3RyaW5nLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYm9vbGVhbi5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2FycmF5LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdmFsaWRhdG9yLmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtaXRlbS13cmFwLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY3VzdG9tL3NmLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90YWcvdGFnLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDDpcK4woPDpcKwwpTDpsKowqHDpcK8wo/DpcKHwrrDqcKUwplgLFxuICAnJHJlZic6ICAgICAgICAgICAgICAgICBgw6bCl8Kgw6bCs8KVw6bCicK+w6XCiMKww6XCvMKVw6fClMKoe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6ICAgICAgICBgw6TCuMKNw6XChcKBw6jCrsK4w6jCtsKFw6jCv8KHe3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBgw6TCuMKNw6XChcKBw6jCrsK4w6bCnMKJw6nCosKdw6XCpMKWw6fCmsKEw6XCscKew6bCgMKnYCxcbiAgYW55T2Y6ICAgICAgICAgICAgICAgICAgYMOmwpXCsMOmwo3CrsOlwrrClMOkwrjCuiBhbnlPZiDDpsKJwoDDpsKMwofDpcKuwprDp8KawoTDpcKFwrbDpMK4wq3DpMK4woDDpMK4wqpgLFxuICBkZXBlbmRlbmNpZXM6ICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCi8Klw6bCnMKJw6XCscKew6bCgMKne3Byb3BlcnR5fcOnwprChMOkwr7CncOowrXClsOlwrHCnsOmwoDCp3tkZXBzfWAsXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpsKYwq/DqcKiwoTDqMKuwr7DpcKuwprDp8KawoTDpsKewprDpMK4wr7DpcKAwrzDpMK5wovDpMK4woBgLFxuICBmb3JtYXQ6ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCwgLy8gYMOlwrrClMOlwr3Ck8OlwozCucOpwoXCjcOmwqDCvMOlwrzCjyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiAgICAgICAgICAgICAgICAgICBgw6fCscK7w6XCnsKLw6XCusKUw6XCvcKTw6bCmMKvIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDDpcK/woXDpcKhwqvDqcKhwrlgLFxuICBtYXhMZW5ndGg6ICAgICAgICAgICAgICBgw6jCh8Kzw6XCpMKaIHtsaW1pdH0gw6TCuMKqw6XCrcKXw6fCrMKmYCxcbiAgbWluTGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwrDCkSB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpsOkwrvCpcOkwrjCimAsXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1pbmltdW06ICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heGltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heEl0ZW1zOiAgICAgICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDqcKhwrlgLFxuICBtaW5JdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYMOkwrjCjcOlwrrClMOlwqTCmsOkwrrCjiB7bGltaXR9IMOkwrjCqsOlwrHCnsOmwoDCp2AsXG4gIG1pblByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKwwpHDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtdWx0aXBsZU9mOiAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvIHttdWx0aXBsZU9mfSDDp8KawoTDpsKVwrTDpsKVwrDDpcKAwo1gLFxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCjMK5w6nChcKNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6ICAgICAgICAgICAgICAgICAgYMOlwo/CqsOowoPCvcOlwozCucOpwoXCjcOkwrjCgMOkwrjCqiBcIm9uZU9mXCIgw6TCuMKtw6fCmsKEIHNjaGVtYWAsXG4gIHBhdHRlcm46ICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLFxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCkMKrw6bCnMKJw6nCh8KNw6XCpMKNw6nCocK5ICjDp8Kswqwge2p9IMOpwqHCucOkwrjCjsOnwqzCrCB7aX0gw6nCocK5w6bCmMKvw6nCh8KNw6XCpMKNw6fCmsKEKWAsXG4gIGN1c3RvbTogICAgICAgICAgICAgICAgIGDDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLFxuICBwcm9wZXJ0eU5hbWVzOiAgICAgICAgICBgw6XCscKew6bCgMKnw6XCkMKNIFwie3Byb3BlcnR5TmFtZX1cIiDDpsKXwqDDpsKVwohgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBgw6XCusKUw6XCvcKTw6bCnMKJw6XCscKew6bCgMKnw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6ICAgICAgICAgICAgICAgICBgw6fClMKxw6TCusKOIHtjYXNlSW5kZXh9IMOlwqTCscOowrTCpcOvwrzCjMOmwpzCqsOpwoDCmsOowr/ChyBcInN3aXRjaFwiIMOmwqDCocOpwqrCjGAsXG4gIGNvbnN0OiAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDp8KtwonDpMK6wo7DpcK4wrjDqcKHwo9gLFxuICBjb250YWluczogICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6XCjMKFw6XCkMKrw6TCuMKAw6TCuMKqw6bCnMKJw6bClcKIw6nCocK5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0gw6XCusKUw6XCvcKTw6bCmMKvw6XCuMKDw6XCsMKUw6XCgMK8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0gw6XCusKUw6XCvcKTw6bCmMKvw6XCuMKDw6XCsMKUw6XCgMK8YCxcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyBcIntmYWlsaW5nS2V5d29yZH1cImAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOpwpTCmcOowq/Cr8Okwr/CocOmwoHCr8OmwpbCh8OmwpzCrMOvwrzCjMOpwpTCrsOlwpDCjcOowrXCnsOlwpDCjCBgRXJyb3JEYXRhLmtleXdvcmRgIMOlwoDCvFxuICAgKi9cbiAgZXJyb3JzPzogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIMOlwoDCvMOlwqfCi8OnwrvCiMOlwozChcOlwpDCqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOmwqDCocOpwqrCjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIiwiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBFUlJPUlNERUZBVUxUIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIMOpwpnCkMOlwq7CmiBTY2hlbWEgw6TCuMKtIGB0eXBlYCDDp8KxwrvDpcKewotcbiAgICogLSBgZW51bWAgw6nCmcKQw6XCrsKaw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdID0gWyd0eXBlJywgJ2VudW0nXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDDpcKPwoLDpsKVwrBcbiAgICovXG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPyA9IHRydWU7XG4gIC8qKlxuICAgKiDDpsKMwofDpcKuwprDqMKhwqjDpcKNwpUgYGF1dG9jb21wbGV0ZWAgw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPyA9IGZhbHNlO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCj8Kqw6XCscKVw6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJw6TCuMKNw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOpwoDCmsOnwpTCqMOpwpTCmcOowq/Cr8Okwr/CocOmwoHCr1xuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XG4gIC8qKlxuICAgKiDDqcK7wpjDqMKuwqTDpcKFwqjDpcKxwoDDpcK4woPDpcKxwoBcbiAgICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW07XG4gIC8qKlxuICAgKiDDpcKFwoPDp8K0wqDDp8K7woTDpMK7wrbDpcKkwqfDpcKwwo/Dr8K8wozDp8KUwqjDpMK6wo4gYG56U2l6ZWAgw6XCgMK8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DqcKjwo7DpsKgwrxcbiAgICovXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xuICAgIHN1Ym1pdF90eXBlOiAncHJpbWFyeScsXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxuICB9O1xuICAvKipcbiAgICogZGF0ZcOlwrDCj8OpwoPCqMOkwrvCtsOvwrzCmmB0eXBlPVwic3RyaW5nXCJgIMOkwrjClMOkwrjCjcOmwozCh8Olwq7CmiBgc2NoZW1hLmZvcm1hdGAgw6XCksKMIGB1aS5mb3JtYXRgIMOmwpfCtsOmwpfCpcOmwpzCn8OmwqDCvMOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBZWVlZLU1NLUREIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0PyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcFxuICAgKi9cbiAgdWlEYXRlTnVtYmVyRm9ybWF0PyA9ICd4JztcbiAgLyoqXG4gICAqIHRpbWXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQ/ID0gJ0hIOm1tOnNzJztcbiAgLyoqXG4gICAqIHRpbWXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcMOvwrzCjMOmwpfCpcOmwpzCn8OnwrvCn8OkwrjCgMOkwr3Cv8OnwpTCqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdD8gPSAneCc7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hRGVmaW5pdGlvbiwgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgRk9STUFUTUFQUyA9IHtcbiAgJ2RhdGUtdGltZSc6IHtcbiAgICB3aWRnZXQ6ICdkYXRlJyxcbiAgICBzaG93VGltZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXG4gIH0sXG4gIGRhdGU6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICB0aW1lOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gICdmdWxsLXRpbWUnOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAnWVlZWS1XVycgfSxcbiAgbW9udGg6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICdtb250aCcsIGZvcm1hdDogJ1lZWVktTU0nIH0sXG4gIHVyaTogeyB3aWRnZXQ6ICd1cGxvYWQnIH0sXG4gIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgY29sb3I6IHsgd2lkZ2V0OiAnc3RyaW5nJywgdHlwZTogJ2NvbG9yJyB9LFxuICAnJzogeyB3aWRnZXQ6ICdzdHJpbmcnIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvOiBhbnkpIHtcbiAgcmV0dXJuIG8gPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGkoLi4uYXJncykge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG59XG5cbi8qKiDDpsKgwrnDpsKNwq4gYCRyZWZgIMOmwp/CpcOmwonCviBgZGVmaW5pdGlvbnNgICovXG5mdW5jdGlvbiBmaW5kU2NoZW1hRGVmaW5pdGlvbigkcmVmOiBzdHJpbmcsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24pIHtcbiAgY29uc3QgbWF0Y2ggPSAvXiNcXC9kZWZpbml0aW9uc1xcLyguKikkLy5leGVjKCRyZWYpO1xuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAvLyBwYXJzZXIgSlNPTiBQb2ludGVyXG4gICAgY29uc3QgcGFydHMgPSBtYXRjaFsxXS5zcGxpdCgnLycpO1xuICAgIGxldCBjdXJyZW50OiBhbnkgPSBkZWZpbml0aW9ucztcbiAgICBmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9+MS9nLCAnLycpLnJlcGxhY2UoL34wL2csICd+Jyk7XG4gICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShwYXJ0KSkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbn1cblxuLyoqXG4gKiDDpcKPwpbDpcKbwp5TY2hlbWHDr8K8wozDpcK5wrbDpcKkwoTDp8KQwoYgYCRyZWZgIMOnwprChMOlwoXCs8OnwrPCu1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVTY2hlbWEoXG4gIHNjaGVtYTogU0ZTY2hlbWEsXG4gIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24gPSB7fSxcbik6IFNGU2NoZW1hIHtcbiAgaWYgKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XG4gICAgY29uc3QgJHJlZlNjaGVtYSA9IGZpbmRTY2hlbWFEZWZpbml0aW9uKHNjaGVtYS4kcmVmLCBkZWZpbml0aW9ucyk7XG4gICAgLy8gcmVtb3ZlICRyZWYgcHJvcGVydHlcbiAgICBjb25zdCB7ICRyZWYsIC4uLmxvY2FsU2NoZW1hIH0gPSBzY2hlbWE7XG4gICAgcmV0dXJuIHJldHJpZXZlU2NoZW1hKHsgLi4uJHJlZlNjaGVtYSwgLi4ubG9jYWxTY2hlbWEgfSwgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJZihzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiBTRlNjaGVtYSB7XG4gIGlmICghKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnaWYnKSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkpIHJldHVybjtcblxuICBpZiAoIXNjaGVtYS5pZi5wcm9wZXJ0aWVzKVxuICAgIHRocm93IG5ldyBFcnJvcihgaWY6IGRvZXMgbm90IGNvbnRhaW4gJ3Byb3BlcnRpZXMnYCk7XG5cbiAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYucHJvcGVydGllcyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBpZktleXMpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS50aGVuLnJlcXVpcmVkKTtcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xuICBpZiAoaGFzRWxzZSkge1xuICAgIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gIH1cblxuICBjb25zdCB2aXNpYmxlSWY6IGFueSA9IHt9O1xuICBjb25zdCB2aXNpYmxlRWxzZTogYW55ID0ge307XG4gIGlmS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgY29uZCA9IHNjaGVtYS5pZi5wcm9wZXJ0aWVzW2tleV0uZW51bTtcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XG4gICAgaWYgKGhhc0Vsc2UpIHZpc2libGVFbHNlW2tleV0gPSAodmFsdWU6IGFueSkgPT4gIWNvbmQuaW5jbHVkZXModmFsdWUpO1xuICB9KTtcblxuICBzY2hlbWEudGhlbi5yZXF1aXJlZC5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlSWYpKTtcbiAgaWYgKGhhc0Vsc2UpXG4gICAgc2NoZW1hLmVsc2UucmVxdWlyZWQuZm9yRWFjaChcbiAgICAgIGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlRWxzZSksXG4gICAgKTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RLZXkoa2V5czogc3RyaW5nW10sIGRldGVjdEtleXM6IHN0cmluZ1tdKSB7XG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBwcm9wZXJ0aWVzIGRvZXMgbm90IGNvbnRhaW4gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkgcmV0dXJuIHByb3BlcnRpZXM7XG4gIGNvbnN0IGFycmF5VG9IYXNoID0gYXJyID0+XG4gICAgYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldltjdXJyXSA9IHRydWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIGNvbnN0IGVycm9yUHJvcExpc3QgPSBhcnIgPT4gYHByb3BlcnR5IFske2Fyci5qb2luKGAnLCAnYCl9XWA7XG5cbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XG4gIGNvbnN0IG9yZGVySGFzaCA9IGFycmF5VG9IYXNoKG9yZGVyKTtcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWAsXG4gICAgKTtcbiAgfVxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xuICBpZiAocmVzdEluZGV4ID09PSAtMSkge1xuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgZG9lcyBub3QgY29udGFpbiAke2Vycm9yUHJvcExpc3QocmVzdCl9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScsXG4gICAgKTtcbiAgfVxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xuICByZXR1cm4gY29tcGxldGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbik6IFNGU2NoZW1hRW51bVtdIHtcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xuICAgIGxpc3QgPSBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gPFNGU2NoZW1hRW51bT57IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9O1xuICAgIH0pO1xuICB9XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgaWYgKH5mb3JtRGF0YS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIC8vIGZpeCBkaXNhYmxlZCBzdGF0dXNcbiAgaWYgKHJlYWRPbmx5KSB7XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0uZGlzYWJsZWQgPSB0cnVlKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcHlFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbikge1xuICByZXR1cm4gZ2V0RW51bShkZWVwQ29weShsaXN0IHx8IFtdKSwgZm9ybURhdGEsIHJlYWRPbmx5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoXG4gIHNjaGVtYTogU0ZTY2hlbWEsXG4gIHVpOiBTRlVJU2NoZW1hSXRlbSxcbiAgZm9ybURhdGE6IGFueSxcbiAgYXN5bmNBcmdzPzogYW55LFxuKTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4ge1xuICBpZiAodHlwZW9mIHVpLmFzeW5jRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1aVxuICAgICAgLmFzeW5jRGF0YShhc3luY0FyZ3MpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHVpLl9fZGVzdHJveSAhPT0gdHJ1ZSksXG4gICAgICAgIG1hcChsaXN0ID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpLFxuICAgICAgKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0sIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkpKTtcbn1cbiIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFRlcm1pbmF0b3JTZXJ2aWNlIHtcbiAgb25EZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCh0cnVlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuaW1wb3J0IHsgaXNCbGFuayB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Qcm9wZXJ0eSB7XG4gIHNjaGVtYVZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IEVycm9yRGF0YVtdO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xuICBmb3JtRGF0YToge307XG4gIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PjtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBFcnJvckRhdGFbXSA9IG51bGw7XG4gIHByb3RlY3RlZCBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF9lcnJvcnNDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy51aSA9IHVpO1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEsIHtcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5fcm9vdCA9IHBhcmVudC5yb290O1xuICAgIH0gZWxzZSBpZiAodGhpcyBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSA8UHJvcGVydHlHcm91cD4oPGFueT50aGlzKTtcbiAgICB9XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXQgdmFsdWVDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZUNoYW5nZXM7XG4gIH1cblxuICBnZXQgZXJyb3JzQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzQ2hhbmdlcztcbiAgfVxuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGU7XG4gIH1cblxuICBnZXQgcGFyZW50KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdCB8fCA8UHJvcGVydHlHcm91cD4oPGFueT50aGlzKTtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBnZXQgdmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycyA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcKAwrxcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCuiBgc2NoZW1hLmRlZmF1bHRgXG4gICAqXG4gICAqIEBwYXJhbSBvbmx5U2VsZiBgdHJ1ZWAgw6XCj8Kqw6XCr8K5w6XCvcKTw6XCicKNw6XCrcKXw6bCrsK1w6bCm8K0w6bClsKww6XCgMK8w6XCksKMw6bCoMKhw6nCqsKMw6/CvMKbYGZhbHNlYCDDpcKMwoXDpcKQwqvDpMK4worDp8K6wqfDpcKtwpfDpsKuwrVcbiAgICovXG4gIGFic3RyYWN0IHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF91cGRhdGVWYWx1ZSgpOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOmwpvCtMOmwpbCsMOlwoDCvMOkwrjClMOmwqDCocOpwqrCjMOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gW29ubHlTZWxmPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpMK4worDp8K6wqfDpcKtwpfDpsKuwrVcbiAgICogQHBhcmFtIFtlbWl0VmFsdWVFdmVudD10cnVlXSDDpsKYwq/DpcKQwqbDqMKnwqbDpcKPwpHDpcKAwrzDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXG4gICAgb25seVNlbGYgPSBmYWxzZSxcbiAgICBlbWl0VmFsdWVFdmVudCA9IHRydWUsXG4gICAgZW1pdFZhbGlkYXRvciA9IHRydWUsXG4gICkge1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAoZW1pdFZhbHVlRXZlbnQpIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gYGVtaXRWYWxpZGF0b3JgIMOmwq/Cj8OkwrjCgMOmwqzCocOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOlwrfCssOnwrvCj8OlwozChcOlwpDCq8Olwq7CjMOmwpXCtMOpwpTCmcOowq/Cr8OpwpPCvsOowrfCr8OvwrzCjMOlwpDCjsOnwrvCrcOnwojCtsOoworCgsOnwoLCucOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCoMOpwqHCu8OlwobCjcOowqfCpsOlwo/CkcOmwqDCocOpwqrCjFxuICAgIGlmIChlbWl0VmFsaWRhdG9yICYmIHRoaXMudWkubGl2ZVZhbGlkYXRlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgZW1pdFZhbHVlRXZlbnQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKiogw6bCoMK5w6bCjcKuw6jCt8Kvw6XCvsKEw6bCkMKcw6fCtMKiw6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXG4gIHNlYXJjaFByb3BlcnR5KHBhdGg6IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IHByb3A6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgbGV0IGJhc2U6IFByb3BlcnR5R3JvdXAgPSBudWxsO1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHBhdGhbMF0gPT09ICcvJykge1xuICAgICAgYmFzZSA9IHRoaXMuZmluZFJvb3QoKTtcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsICYmIHByb3AucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiogw6bCn8Klw6bCicK+w6bCoMK5w6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXG4gIGZpbmRSb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIGxldCBwcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICB3aGlsZSAocHJvcGVydHkucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5O1xuICB9XG5cbiAgLy8gcmVnaW9uOiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IGFueSkge1xuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiAoJycgKyB2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfcnVuVmFsaWRhdGlvbigpIHtcbiAgICBsZXQgZXJyb3JzOiBFcnJvckRhdGFbXTtcbiAgICAvLyBUaGUgZGVmaW5pdGlvbiBvZiBzb21lIHJ1bGVzOlxuICAgIC8vIDEuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGEgYW5kIHJlcXVpcmVkIGZpZWxkc1xuICAgIC8vIDIuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGFcbiAgICBjb25zdCBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5RGF0YSh0aGlzLl92YWx1ZSk7XG4gICAgaWYgKGlzRW1wdHkgJiYgdGhpcy51aS5fcmVxdWlyZWQpIHtcbiAgICAgIGVycm9ycyA9IFt7IGtleXdvcmQ6ICdyZXF1aXJlZCcgfV07XG4gICAgfSBlbHNlIGlmIChpc0VtcHR5KSB7XG4gICAgICBlcnJvcnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21WYWxpZGF0b3IgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbVJ1bikudmFsaWRhdG9yO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tVmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGlmIChjdXN0b21FcnJvcnMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIGN1c3RvbUVycm9ycy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIHJlcyk7XG4gICAgICAgICAgdGhpcy53aWRnZXQuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRDdXN0b21FcnJvcnMoZXJyb3JzLCBjdXN0b21FcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXN0b21FcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbGlzdDogRXJyb3JEYXRhW10pIHtcbiAgICAvLyBmaXggZXJyb3IgZm9ybWF0XG4gICAgY29uc3QgaGFzQ3VzdG9tRXJyb3IgPSBsaXN0ICE9IG51bGwgJiYgbGlzdC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNDdXN0b21FcnJvcikge1xuICAgICAgbGlzdC5mb3JFYWNoKChlcnIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYMOowofCqsOlwq7CmsOkwrnCicOmwqDCocOpwqrCjMOlwpnCqMOlwr/ChcOpwqHCu8OowofCs8OlwrDCkcOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiAnbWVzc2FnZScgw6XCscKew6bCgMKnw6/CvMKMw6fClMKow6TCusKOw6jCocKow6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsYCxcbiAgICAgICAgICApO1xuICAgICAgICBlcnIuX2N1c3RvbSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3JzID0gdGhpcy5tZXJnZUVycm9ycyhlcnJvcnMsIGxpc3QpO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlRXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIG5ld0Vycm9yczogRXJyb3JEYXRhIHwgRXJyb3JEYXRhW10pIHtcbiAgICBpZiAobmV3RXJyb3JzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFcnJvcnMpKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoLi4ubmV3RXJyb3JzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9ycy5wdXNoKG5ld0Vycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIGVtaXRGb3JtYXQgPSB0cnVlKSB7XG4gICAgaWYgKGVtaXRGb3JtYXQgJiYgZXJyb3JzICYmICF0aGlzLnVpLm9ubHlWaXN1YWwpIHtcbiAgICAgIGVycm9ycyA9IGVycm9ycy5tYXAoKGVycjogRXJyb3JEYXRhKSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgICBlcnIuX2N1c3RvbSA9PT0gdHJ1ZSAmJiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkXSB8fFxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZXJyb3JzW2Vyci5rZXl3b3JkXSB8fFxuICAgICAgICAgICAgICBgYDtcblxuICAgICAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZShlcnIpIGFzIHN0cmluZztcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC97KFtcXC5hLXowLTldKyl9L2csXG4gICAgICAgICAgICAgICh2OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zW2tleV0gfHwgJycsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnIubWVzc2FnZSA9IG1lc3NhZ2UgYXMgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuX2Vycm9yc0NoYW5nZXMubmV4dChlcnJvcnMpO1xuICAgIC8vIFNob3VsZCBzZW5kIGVycm9ycyB0byBwYXJlbnQgZmllbGRcbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnQuc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnMsIHRoaXMucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmpFcnJvcnNbcGF0aF0gPSBlcnJvcnM7XG4gICAgY29uc3QgcGxhdEVycm9yczogRXJyb3JEYXRhW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9vYmpFcnJvcnMpLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkocCk7XG4gICAgICBpZiAocHJvcGVydHkgJiYgIXByb3BlcnR5LnZpc2libGUpIHJldHVybjtcbiAgICAgIHBsYXRFcnJvcnMucHVzaCguLi50aGlzLl9vYmpFcnJvcnNbcF0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RXJyb3JzKHBsYXRFcnJvcnMsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogY29uZGl0aW9uXG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIC8vIMOpwoPCqMOlwojChsOmwpXCsMOmwo3CrsOmwrrCkMOmwp3CpcOowofCqiByZXNldFxuICAgIHRoaXMucmVzZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEEgZmllbGQgaXMgdmlzaWJsZSBpZiBBVCBMRUFTVCBPTkUgb2YgdGhlIHByb3BlcnRpZXMgaXQgZGVwZW5kcyBvbiBpcyB2aXNpYmxlIEFORCBoYXMgYSB2YWx1ZSBpbiB0aGUgbGlzdFxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0JpbmRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aSA9IHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmkuaW5kZXhPZignJEFOWSQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmkuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgdmFsdWVDaGVjaywgdmlzaWJpbGl0eUNoZWNrXG4gICAgICAgICAgICApLnBpcGUobWFwKHJlc3VsdHMgPT4gcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKSk7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhcbiAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodmFsdWVzID0+IHZhbHVlcy5pbmRleE9mKHRydWUpICE9PSAtMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvcGVydHlHcm91cCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG4gIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0gfCBGb3JtUHJvcGVydHlbXSA9IG51bGw7XG5cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xuICAgIGNvbnN0IHByb3BlcnR5SWQgPSBzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aDtcblxuICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0eSAhPT0gbnVsbCAmJlxuICAgICAgc3ViUGF0aElkeCAhPT0gLTEgJiZcbiAgICAgIHByb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cFxuICAgICkge1xuICAgICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICAgIHByb3BlcnR5ID0gKDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5KS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgZm9yRWFjaENoaWxkKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksIHN0cjogU3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgZm4ocHJvcGVydHksIHByb3BlcnR5SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoY2hpbGQgPT4ge1xuICAgICAgZm4oY2hpbGQpO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgICAoPFByb3BlcnR5R3JvdXA+Y2hpbGQpLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgc3VwZXIuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5fYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkUmVjdXJzaXZlKHByb3BlcnR5ID0+IHtcbiAgICAgIHByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNSb290KCkge1xuICAgIHJldHVybiB0aGlzID09PSB0aGlzLnJvb3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdG9taWNQcm9wZXJ0eSBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XG4gIGFic3RyYWN0IGZhbGxiYWNrVmFsdWUoKTogYW55O1xuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mYWxsYmFja1ZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMud2lkZ2V0KSB0aGlzLndpZGdldC5yZXNldCh2YWx1ZSk7XG4gIH1cblxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tWYWx1ZSgpICE9PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge31cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWMucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID1cbiAgICAgICAgICB2YWx1ZS5pbmRleE9mKCcuJykgPiAtMSA/IHBhcnNlRmxvYXQodmFsdWUpIDogcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWMucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBCb29sZWFuUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XG4gIGZhbGxiYWNrVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJvcGVydHlHcm91cCwgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcblxuZXhwb3J0IGNsYXNzIEFycmF5UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcbiAgdGljayA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xuICAgIGNvbnN0IHBvcyA9ICsoc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGgpO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdO1xuICAgIGlmIChpc05hTihwb3MpIHx8IHBvcyA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgIHJldHVybiBsaXN0W3Bvc10uZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogT2JqZWN0UHJvcGVydHksIF8pID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydHkuZm9ybURhdGEsIHByb3BlcnR5LnZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJvcGVydHkodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgdGhpcy5zY2hlbWEuaXRlbXMsXG4gICAgICB0aGlzLnVpLiRpdGVtcyxcbiAgICAgIHZhbHVlLFxuICAgICAgdGhpcyxcbiAgICApIGFzIE9iamVjdFByb3BlcnR5O1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UHJvcGVydGllcyh2YWx1ZTogYW55W10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShpdGVtKTtcbiAgICAgIHByb3BlcnR5LnJlc2V0VmFsdWUoaXRlbSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckVycm9ycyhwYXRoPzogc3RyaW5nKSB7XG4gICAgaWYgKHBhdGgpIGRlbGV0ZSB0aGlzLl9vYmpFcnJvcnNbcGF0aF07XG4gICAgZWxzZSB0aGlzLl9vYmpFcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8vIHJlZ2lvbjogYWN0aW9uc1xuXG4gIGFkZCh2YWx1ZTogYW55KTogRm9ybVByb3BlcnR5IHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkodmFsdWUpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3QgPSA8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMobGlzdFtpbmRleF0ucGF0aCk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbn1cbiIsImltcG9ydCB7IFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgb3JkZXJQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcbiAgcHJpdmF0ZSBfcHJvcGVydGllc0lkOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGdldCBwcm9wZXJ0aWVzSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnRpZXNJZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogYW55LFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzSWQgPSBbXTtcbiAgICBsZXQgb3JkZXJlZFByb3BlcnRpZXM6IHN0cmluZ1tdO1xuICAgIHRyeSB7XG4gICAgICBvcmRlcmVkUHJvcGVydGllcyA9IG9yZGVyUHJvcGVydGllcyhcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcyksXG4gICAgICAgIHRoaXMudWkub3JkZXIgYXMgc3RyaW5nW10sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBJbnZhbGlkICR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJ3Jvb3QnfSBvYmplY3QgZmllbGQgY29uZmlndXJhdGlvbjpgLFxuICAgICAgICBlLFxuICAgICAgKTtcbiAgICB9XG4gICAgb3JkZXJlZFByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eUlkID0+IHtcbiAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eUlkXSxcbiAgICAgICAgdGhpcy51aVsnJCcgKyBwcm9wZXJ0eUlkXSxcbiAgICAgICAgKHRoaXMuZm9ybURhdGEgfHwge30pW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLFxuICAgICAgICBwcm9wZXJ0eUlkLFxuICAgICAgKTtcbiAgICAgIHRoaXMuX3Byb3BlcnRpZXNJZC5wdXNoKHByb3BlcnR5SWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0uc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwge307XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5yZXNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT0gbnVsbCAmJiAhIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aDtcbiAgfVxuICBfdXBkYXRlVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWU6IGFueSA9IHt9O1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogYW55LCBwcm9wZXJ0eUlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlW3Byb3BlcnR5SWRdID0gcHJvcGVydHkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuL251bWJlci5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTdHJpbmdQcm9wZXJ0eSB9IGZyb20gJy4vc3RyaW5nLnByb3BlcnR5JztcbmltcG9ydCB7IEJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4vYm9vbGVhbi5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IHJldHJpZXZlU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7fVxuXG4gIGNyZWF0ZVByb3BlcnR5KFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwID0gbnVsbCxcbiAgICBwcm9wZXJ0eUlkPzogc3RyaW5nLFxuICApOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBuZXdQcm9wZXJ0eSA9IG51bGw7XG4gICAgbGV0IHBhdGggPSAnJztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXRoICs9IHBhcmVudC5wYXRoO1xuICAgICAgaWYgKHBhcmVudC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcGF0aCArPSAnLyc7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGggKz0gcHJvcGVydHlJZDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgcGF0aCArPSAocGFyZW50IGFzIEFycmF5UHJvcGVydHkpLnRpY2srKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnSW5zdGFuY2lhdGlvbiBvZiBhIEZvcm1Qcm9wZXJ0eSB3aXRoIGFuIHVua25vd24gcGFyZW50IHR5cGU6ICcgK1xuICAgICAgICAgICAgcGFyZW50LnR5cGUsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSAnLyc7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHBhcmVudC5yb290LnNjaGVtYS5kZWZpbml0aW9ucyk7XG4gICAgICBuZXdQcm9wZXJ0eSA9IHRoaXMuY3JlYXRlUHJvcGVydHkocmVmU2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpeCByZXF1aXJlZFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wZXJ0eUlkICYmXG4gICAgICAgICgocGFyZW50IS5zY2hlbWEucmVxdWlyZWQgfHwgW10pIGFzIHN0cmluZ1tdKS5pbmRleE9mKHByb3BlcnR5SWQpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHVpLl9yZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBmaXggdGl0bGVcbiAgICAgIGlmIChzY2hlbWEudGl0bGUgPT0gbnVsbCkgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlJZDtcbiAgICAgIC8vIGZpeCBkYXRlXG4gICAgICBpZiAoXG4gICAgICAgIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgfHwgc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAhc2NoZW1hLmZvcm1hdCAmJlxuICAgICAgICAhKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS5mb3JtYXRcbiAgICAgICkge1xuICAgICAgICBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICdkYXRlJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpRGF0ZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aURhdGVOdW1iZXJGb3JtYXQ7XG4gICAgICAgIGVsc2UgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAndGltZScpXG4gICAgICAgICAgdWkuZm9ybWF0ID1cbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aVRpbWVTdHJpbmdGb3JtYXRcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlUaW1lTnVtYmVyRm9ybWF0O1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBOdW1iZXJQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgU3RyaW5nUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBCb29sZWFuUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE9iamVjdFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBBcnJheVByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZWZpbmVkIHR5cGUgJHtzY2hlbWEudHlwZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3UHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xuICAgIC8vIHJvb3RQcm9wZXJ0eS5pbml0KCk7XG4gICAgcm9vdFByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZGVjbGFyZSB2YXIgQWp2OiBhbnk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgYWp2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERlbG9uRm9ybUNvbmZpZylcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmFqdiwge1xuICAgICAgICBlcnJvckRhdGFQYXRoOiAncHJvcGVydHknLFxuICAgICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgICAgIGpzb25Qb2ludGVyczogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2RhdGEtdXJsJyxcbiAgICAgIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnY29sb3InLFxuICAgICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnbW9iaWxlJyxcbiAgICAgIC9eKDB8XFwrPzg2fDE3OTUxKT8xWzAtOV17MTB9JC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnaWQtY2FyZCcsXG4gICAgICAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvLFxuICAgICk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBhbnkpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbXVxuICAgICAgLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMpXG4gICAgICAuY29uY2F0KGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3Jkcyk7XG5cbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XG4gIHByaXZhdGUgd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBwcml2YXRlIGRlZmF1bHRXaWRnZXQ6IGFueTtcblxuICBzZXREZWZhdWx0KHdpZGdldDogYW55KSB7XG4gICAgdGhpcy5kZWZhdWx0V2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMud2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcbiAgfVxuXG4gIGhhcyh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0c1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5LFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7fVxuXG4gIGNyZWF0ZVdpZGdldChcbiAgICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdHlwZTogc3RyaW5nLFxuICApOiBDb21wb25lbnRSZWY8V2lkZ2V0PGFueT4+IHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFdpZGdldDxhbnk+PihcbiAgICAgIGNvbXBvbmVudENsYXNzLFxuICAgICk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVlcENvcHksIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGRpLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUywgcmVzb2x2ZUlmIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXG4gIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IGFueSxcbiAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuKSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeTogdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmLXNlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxuICAgICdbY2xhc3Muc2YtZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIHByaXZhdGUgX2l0ZW06IGFueTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiBhbnk7XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOowqHCqMOlwo3ClcOlwrjCg8OlwrHCgMOvwrzCjMOnwq3CicOlwpDCjCBgbnpMYXlvdXRgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKVxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgc2NoZW1hOiBTRlNjaGVtYTtcblxuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHVpOiBTRlVJU2NoZW1hO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDqcK7wpjDqMKuwqTDpcKAwrwgKi9cbiAgQElucHV0KClcbiAgZm9ybURhdGE6IHt9O1xuXG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq5cbiAgICogLSDDpcKAwrzDpMK4wrogYG51bGxgIMOmwojCliBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDpsKJwovDpcKKwqjDpsK3wrvDpcKKwqDDpsKMwonDqcKSwq7Dr8K8wozDpMK9wobDpMK/wp3Dp8KVwpnDpcKuwrnDpcKZwqhcbiAgICogLSDDpcKAwrzDpMK4wrogYG5vbmVgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwrjClMOkwrjCjcOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxuICAgKiAtIMOkwr3Cv8OnwpTCqMOlwpvCusOlwq7CmiBgbGFiZWxgIMOmwqDCh8Onwq3CvsOlwq7CvcOlwrrCpsOmwpfCtsOvwrzCjMOowovCpcOmwpfCoCBgcmVuZGVyLmNsYXNzYCDDpcKIwpnDqcK7wpjDqMKuwqTDpMK4wrrDpcKxwoXDpMK4wq3Dp8KKwrbDpsKAwoFcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcblxuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCrsKew6bCl8K2w6bCoMKhw6nCqsKMw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqIC0gYHRydWVgIMOmwq/Cj8OkwrjCgMOmwqzCocOpwoPCvcOmwqDCocOpwqrCjFxuICAgKiAtIGBmYWxzZWAgw6bCj8KQw6TCusKkw6bCl8K2w6bCoMKhw6nCqsKMXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcblxuICAvKiogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvCAqL1xuICBASW5wdXQoKVxuICBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcblxuICAvKiogw6fCq8KLw6XCjcKzw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXJzdFZpc3VhbCA9IHRydWU7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqjCocOlwrzCjyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcblxuICAvKiogw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6bCj8KQw6TCusKkw6jCocKow6XCjcKVw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6nCh8KNw6fCvcKuw6jCocKow6XCjcKVw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8K7wpPDpsKewpzDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8KKwrbDpsKAwoEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpcKAwrwgKi9cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBvblN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5saXZlVmFsaWRhdGUgPSBvcHRpb25zLmxpdmVWYWxpZGF0ZTtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlO1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLFxuICAgICAgICAgIGRlZmluaXRpb25zLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB1aSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB3aWRnZXQ6IHByb3BlcnR5LnR5cGUgfSxcbiAgICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdLFxuICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwsXG4gICAgICAgICAgIXByb3BlcnR5LnVpICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJlxuICAgICAgICAgIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuX2RlZlVpLFxuICAgICAgICAgIHByb3BlcnR5LnVpLFxuICAgICAgICAgIHVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgKSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8gw6fCu8Knw6bCicK/w6fCiMK2w6jCisKCw6fCgsK5w6XCuMKDw6XCscKAw6XCscKew6bCgMKnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyAxOVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsICYmIHBhcmVudFNjaGVtYSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHBhcmVudFNjaGVtYS5wcm9wZXJ0aWVzW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0ZUVuZFByb3BlcnR5LnVpLCB7XG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddID0gdWlSZXNbdWlLZXldWyckaXRlbXMnXSB8fCB7fTtcbiAgICAgICAgICBpbkZuKFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pWyckaXRlbXMnXSB8fCB7fSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1trZXldO1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgcmVzb2x2ZUlmKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHkuaXRlbXMsIHVpW3VpS2V5XS4kaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTRlVJU2NoZW1hSXRlbT57XG4gICAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnVpLFxuICAgICAgX3NjaGVtYS51aSxcbiAgICAgIHRoaXMudWlbJyonXSxcbiAgICApO1xuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmVWkpO1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGlmICh0aGlzLl91aS5kZWJ1Zykge1xuICAgICAgZGkoJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpIHtcbiAgICB0aGlzLl9idG4gPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyByZW5kZXI6IHt9IH0sXG4gICAgICB0aGlzLmxvY2FsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICB0aGlzLmJ1dHRvbixcbiAgICApO1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8gw6XCm8K6w6XCrsKaw6bCoMKHw6fCrcK+w6XCrsK9w6XCusKmw6bCl8K2w6/CvMKMw6jCi8Klw6TCuMKNw6bCjMKHw6XCrsKaw6bCoMK3w6XCvMKPw6/CvMKMw6XCiMKZw6nCu8KYw6jCrsKkw6XCscKFw6TCuMKtXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLl9idG4ucmVuZGVyLmNsYXNzICYmXG4gICAgICAgICh0eXBlb2YgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPT09ICdudW1iZXInICYmIGJ0blVpLnNwYW5MYWJlbEZpeGVkID4gMClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIGRpKCdidXR0b24gcHJvcGVydHknLCB0aGlzLl9idG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnZhbGlkYXRvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICBjb25zb2xlLndhcm4oYMOmwpzCqsOmwonCvsOlwojCsMOowrfCr8Olwr7ChMOvwrzCmiR7cGF0aH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYMOlwrfCssOnwrvCj8Olwq3CmMOlwpzCqMOnwpvCuMOlwpDCjMOowofCqsOlwq7CmsOkwrnCicOowrfCr8Olwr7ChMOvwrzCmiR7cGF0aH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcbiAgICBwdWkuX3JlbmRlciA9IHRlbXBsYXRlUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcbiAgICAgIGlmICghcHVpLl9yZW5kZXIpIHB1aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKCkge1xuICAgIHRoaXMucm9vdFByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKCF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwojCt8OmwpbCsCBTY2hlbWHDr8K8wozDpMK4woDDqMKIwqzDqcKcwoDDqMKmwoHDpcKKwqjDpsKAwoHDpMK/wq7DpsKUwrkgU2NoZW1hIMOmwp/CkMOkwrjCqsOlwoDCvMOmwpfCtsOlwo/Cr8OkwrvCpcOmwpbCucOkwr7Cv8OowrDCg8OnwpTCqFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKSB7XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLl9zY2hlbWEsXG4gICAgICB0aGlzLl91aSxcbiAgICAgIHRoaXMuZm9ybURhdGEsXG4gICAgKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtRGF0YSwgdmFsdWUpO1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpVcbiAgICogQHBhcmFtIFtlbWl0XSDDpsKYwq/DpcKQwqbDqMKnwqbDpcKPwpEgYGZvcm1SZXNldGAgw6TCusKLw6TCu8K2w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICN0YXJnZXQ+PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+ID0gbnVsbDtcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICkge31cblxuICBvbldpZGdldEluc3RhbmNpYXRlZCh3aWRnZXQ6IFdpZGdldDxhbnk+KSB7XG4gICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgY29uc3QgaWQgPSBgX3NmLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAgIGNvbnN0IHVpID0gdGhpcy5mb3JtUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW07XG4gICAgdGhpcy53aWRnZXQuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XG4gICAgdGhpcy53aWRnZXQuc2NoZW1hID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hO1xuICAgIHRoaXMud2lkZ2V0LnVpID0gdWk7XG4gICAgdGhpcy53aWRnZXQuaWQgPSBpZDtcbiAgICB0aGlzLndpZGdldC5maXJzdFZpc3VhbCA9IHVpLmZpcnN0VmlzdWFsO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LndpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYXRvci5vbkRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldChcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnVpLndpZGdldCB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWEudHlwZSkgYXMgc3RyaW5nLFxuICAgICk7XG4gICAgdGhpcy5vbldpZGdldEluc3RhbmNpYXRlZCh0aGlzLnJlZi5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS51aS5fX2Rlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tmaXhlZC1sYWJlbF0nIH0pXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoJ2ZpeGVkLWxhYmVsJylcbiAgQElucHV0TnVtYmVyKClcbiAgbnVtOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHdpZGdldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuYW50LXJvdycpIHx8IHRoaXMuZWw7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3Mod2lkZ2V0RWwsICdzZi1maXhlZCcpO1xuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLm51bSArICdweCc7XG4gICAgaWYgKGxhYmVsRWwpIHtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICd3aWR0aCcsIHVuaXQpO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWFyZ2luLWxlZnQnLCB1bml0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlcjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlci5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLmluaXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbS13cmFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cbiAgICA8bnotY29sICpuZ0lmPVwic2hvd1RpdGxlXCIgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L256LWNvbD5cbiAgICA8bnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cInVpLnNwYW5Db250cm9sXCIgW256T2Zmc2V0XT1cInVpLm9mZnNldENvbnRyb2xcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuei1mb3JtLWV4dHJhICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L256LWZvcm0tZXh0cmE+XG4gICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5gLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1XcmFwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBASW5wdXQoKSBzaG93RXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2YuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NmLXRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnc2YtdGVtcGxhdGUnKSBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUuX2FkZFRwbChcbiAgICAgIHRoaXMucGF0aC5zdGFydHNXaXRoKCcvJykgPyB0aGlzLnBhdGggOiBgL2AgKyB0aGlzLnBhdGgsXG4gICAgICB0aGlzLnRlbXBsYXRlUmVmLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucmVhZE9ubHkgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSkgPT4ge1xuICAgICAgICBpZiAodGhpcy51aS5kZWJ1ZykgZGkoJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAgIC8vIMOkwrjCjcOmwpjCvsOnwqTCusOpwqbClsOmwqzCocOmwqDCocOpwqrCjMOowqfChsOowqfCiVxuICAgICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuc2hvd0Vycm9yID8gZXJyb3JzWzBdLm1lc3NhZ2UgOiAnJztcblxuICAgICAgICAgIGlmICh0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLnVpLmRlYnVnKSB7XG4gICAgICBkaSgndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkdyaWRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW9iamVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkOyBlbHNlIG5vR3JpZFwiPlxuICAgIDxuei1yb3cgW256R3V0dGVyXT1cImdyaWQuZ3V0dGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgICA8bnotY29sXG4gICAgICAgICAgICBbbnpTcGFuXT1cImkuZ3JpZC5zcGFuXCIgW256T2Zmc2V0XT1cImkuZ3JpZC5vZmZzZXRcIlxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcbiAgICAgICAgICAgIFtuekxnXT1cImkuZ3JpZC5sZ1wiIFtuelhsXT1cImkuZ3JpZC54bFwiIFtuelhYbF09XCJpLmdyaWQueHhsXCI+XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXJvdz5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm9HcmlkPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMudWkuZ3JpZDtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzW2tleV0gYXMgRm9ybVByb3BlcnR5O1xuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgdGhpcy5ncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG56LWZvcm0taXRlbT5cbiAgICA8bnotY29sICpuZ0lmPVwic2NoZW1hLnRpdGxlXCIgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhZGRcIj5cbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256VHlwZV09XCJhZGRUeXBlXCIgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCIgKGNsaWNrKT1cImFkZEl0ZW0oKVwiIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG5cbiAgICAgICAgPG56LXJvdyBjbGFzcz1cInNmLWFycmF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXM7IGxldCBpZHg9aW5kZXhcIj5cbiAgICAgICAgICAgIDxuei1jb2wgKm5nSWY9XCJpLnZpc2libGUgJiYgIWkudWkuaGlkZGVuXCIgW256U3Bhbl09XCJhcnJheVNwYW5cIiBbYXR0ci5kYXRhLWluZGV4XT1cImlkeFwiIGNsYXNzPVwic2YtYXJyYXktaXRlbVwiPlxuICAgICAgICAgICAgICA8bnotY2FyZD5cbiAgICAgICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImlcIj48L3NmLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyZW1vdmVUaXRsZVwiIGNsYXNzPVwicmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaWR4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1kZWxldGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L256LWNhcmQ+XG4gICAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uei1yb3c+XG5cbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L256LWNvbD5cbiAgPC9uei1mb3JtLWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZTogc3RyaW5nO1xuICBhZGRUeXBlOiBzdHJpbmc7XG4gIHJlbW92ZVRpdGxlOiBzdHJpbmc7XG4gIGFycmF5U3BhbiA9IDg7XG5cbiAgZ2V0IGFkZERpc2FibGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNjaGVtYS5tYXhJdGVtcyAmJlxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgYW55W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtc1xuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ncmlkICYmIHRoaXMudWkuZ3JpZC5hcnJheVNwYW4pXG4gICAgICB0aGlzLmFycmF5U3BhbiA9IHRoaXMudWkuZ3JpZC5hcnJheVNwYW47XG5cbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy51aS5hZGRUaXRsZSB8fCAnw6bCt8K7w6XCisKgJztcbiAgICB0aGlzLmFkZFR5cGUgPSB0aGlzLnVpLmFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9XG4gICAgICB0aGlzLnVpLnJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogdGhpcy51aS5yZW1vdmVUaXRsZSB8fCAnw6fCp8K7w6nCmcKkJztcbiAgfVxuXG4gIGFkZEl0ZW0oKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuYWRkKG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG5nLXRlbXBsYXRlICNpcHQ+XG4gICAgICA8aW5wdXQgbnotaW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwidWkuYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2FkZG9uJzsgZWxzZSBpcHRcIj5cbiAgICAgIDxuei1pbnB1dC1ncm91cFxuICAgICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXG4gICAgICAgIFtuekFkZE9uQmVmb3JlSWNvbl09XCJ1aS5hZGRPbkJlZm9yZUljb25cIiBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXG4gICAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIiBbbnpQcmVmaXhJY29uXT1cInVpLnByZWZpeEljb25cIlxuICAgICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCIgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uei1pbnB1dC1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHlwZSA9ICEhKFxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVyIHx8XG4gICAgICB0aGlzLnVpLmFkZE9uQmVmb3JlIHx8XG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXJJY29uIHx8XG4gICAgICB0aGlzLnVpLmFkZE9uQmVmb3JlSWNvbiB8fFxuICAgICAgdGhpcy51aS5wcmVmaXggfHxcbiAgICAgIHRoaXMudWkucHJlZml4SWNvbiB8fFxuICAgICAgdGhpcy51aS5zdWZmaXggfHxcbiAgICAgIHRoaXMudWkuc3VmZml4SWNvblxuICAgIClcbiAgICAgID8gJ2FkZG9uJ1xuICAgICAgOiAnJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1udW1iZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei1pbnB1dC1udW1iZXJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256Rm9ybWF0dGVyXT1cImZvcm1hdHRlclwiXG4gICAgICBbbnpQYXJzZXJdPVwicGFyc2VyXCJcbiAgICAgIFtuelByZWNpc2lvbl09XCJ1aS5wcmVjaXNpb25cIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIgfHwgJydcIj5cbiAgICA8L256LWlucHV0LW51bWJlcj5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NoZW1hLCB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA/IHNjaGVtYS5taW5pbXVtICsgMSA6IHNjaGVtYS5taW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA/IHNjaGVtYS5tYXhpbXVtIC0gMSA6IHNjaGVtYS5tYXhpbXVtO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCAxO1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt1aS5wcmVmaXh9ICR7dmFsdWV9YDtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3ZhbHVlfSAke3VpLnVuaXR9YDtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCAke3VpLnVuaXR9YCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkuZm9ybWF0dGVyKSB0aGlzLmZvcm1hdHRlciA9IHVpLmZvcm1hdHRlcjtcbiAgICBpZiAodWkucGFyc2VyKSB0aGlzLnBhcnNlciA9IHVpLnBhcnNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWRhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm1vZGVcIj5cblxuICAgICAgPG56LW1vbnRoLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgPjwvbnotbW9udGgtcGlja2VyPlxuXG4gICAgICA8bnotd2Vlay1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIid3ZWVrJ1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L256LXdlZWstcGlja2VyPlxuXG4gICAgICA8bnotcmFuZ2UtcGlja2VyICpuZ1N3aXRjaENhc2U9XCIncmFuZ2UnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgICBbbnpSYW5nZXNdPVwidWkucmFuZ2VzXCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XG5cbiAgICAgIDxuei1kYXRlLXBpY2tlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIMOlwoXCrMOlwoXCsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5zZXRFbmQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gdmFsdWUubWFwKGQgPT4gZm9ybWF0KGQsIHRoaXMuZm9ybWF0KSlcbiAgICAgIDogZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCk7XG5cbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0RW5kKHJlc1sxXSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzKTtcbiAgICB9XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfb2sodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uT2spIHRoaXMudWkub25Payh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbmRQcm9wZXJ0eSgpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQucHJvcGVydGllc1t0aGlzLnVpLmVuZF07XG4gIH1cblxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGltZS1waWNrZXJcbiAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Rm9ybWF0XT1cImkuZGlzcGxheUZvcm1hdFwiXG4gICAgICBbbnpBbGxvd0VtcHR5XT1cImkuYWxsb3dFbXB0eVwiXG4gICAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxuICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJpLmRlZmF1bHRPcGVuVmFsdWVcIlxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJ1aS5kaXNhYmxlZEhvdXJzXCJcbiAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxuICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInVpLmRpc2FibGVkU2Vjb25kc1wiXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImkuaGlkZURpc2FibGVkT3B0aW9uc1wiXG4gICAgICBbbnpIb3VyU3RlcF09XCJpLmhvdXJTdGVwXCJcbiAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiaS5taW51dGVTdGVwXCJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInVpLnBvcHVwQ2xhc3NOYW1lXCJcbiAgICAgID5cbiAgICA8L256LXRpbWUtcGlja2VyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxuICAgICAgPyB1aS5mb3JtYXRcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyAneCdcbiAgICAgICAgOiAnSEg6bW06c3MnO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkgdmFsdWUgKz0gJzowMCc7XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoXG4gICAgICAgIERhdGUuVVRDKFxuICAgICAgICAgIDE5NzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksXG4gICAgICAgICAgdmFsdWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgIHZhbHVlLmdldFNlY29uZHMoKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhZGlvLWdyb3VwXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TmFtZV09XCJpZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3R5bGVUeXBlXCI+XG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBhbnlbXSA9IFtdO1xuICBzdHlsZVR5cGU6IGJvb2xlYW47XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3R5bGVUeXBlID0gKHRoaXMudWkuc3R5bGVUeXBlIHx8ICdkZWZhdWx0JykgPT09ICdkZWZhdWx0JztcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZSAjYWxsPlxuICAgIDxsYWJlbCAqbmdJZj1cInVpLmNoZWNrQWxsXCIgbnotY2hlY2tib3ggY2xhc3M9XCJtci1zbVwiXG4gICAgICBbKG5nTW9kZWwpXT1cImFsbENoZWNrZWRcIlxuICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcbiAgICAgIChjbGljayk9XCJvbkFsbENoZWNrZWQoJGV2ZW50KVwiPlxuICAgICAge3sgdWkuY2hlY2tBbGxUZXh0IHx8ICfDpcKFwqjDqcKAwoknIH19XG4gICAgPC9sYWJlbD5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cbiAgICA8bnotY29sICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCIgW256U3Bhbl09XCJsYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwiY29udHJvbFwiIFtuek9mZnNldF09XCJvZmZzZXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3hcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9zZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwic2NoZW1hLnRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L256LXRvb2x0aXA+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiA9PT0gMFwiPlxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LWdyb3VwIFtuZ01vZGVsXT1cImRhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJub3RpZnlTZXQoKVwiPjwvbnotY2hlY2tib3gtZ3JvdXA+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gIT09IDBcIj5cbiAgICAgICAgICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXIgY2xhc3M9XCJjaGVja2JveC1ncmlkLWxpc3RcIiAobnpPbkNoYW5nZSk9XCJncm91cEluR3JpZENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPG56LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdJZj1cInVpLmNoZWNrQWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9uei1jb2w+XG4gICAgICAgICAgICAgICAgICA8bnotY29sIFtuelNwYW5dPVwiZ3JpZF9zcGFuXCIgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggW256VmFsdWVdPVwiaS52YWx1ZVwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIj57e2kubGFiZWx9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICAgICAgICA8L256LXJvdz5cbiAgICAgICAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBncmlkX3NwYW46IG51bWJlcjtcbiAgbGFiZWw6IG51bWJlcjtcbiAgY29udHJvbDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnVpLnNwYW5MYWJlbDtcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy51aS5zcGFuQ29udHJvbDtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnVpLnNwYW5MYWJlbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG5vdGlmeVNldCgpIHtcbiAgICBjb25zdCBjaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKS5zZXRWYWx1ZShjaGVja0xpc3QubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xuICAgIHRoaXMubm90aWZ5Q2hhbmdlKGNoZWNrTGlzdCk7XG4gIH1cblxuICBncm91cEluR3JpZENoYW5nZSh2YWx1ZXM6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goXG4gICAgICBpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB2YWx1ZXMuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpLFxuICAgICk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIG9uQWxsQ2hlY2tlZChlOiBFdmVudCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdGhpcy5hbGxDaGVja2VkKSk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIHVwZGF0ZUFsbENoZWNrZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gZmFsc2UpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1ib29sZWFuJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotc3dpdGNoXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2VkQ2hpbGRyZW5dPVwidWkuY2hlY2tlZENoaWxkcmVuXCJcbiAgICAgIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVpLnVuQ2hlY2tlZENoaWxkcmVuXCI+XG4gICAgPC9uei1zd2l0Y2g+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8dGV4dGFyZWEgbnotaW5wdXRcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekF1dG9zaXplXT1cImF1dG9zaXplXCI+XG4gICAgPC90ZXh0YXJlYT5cblxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXV0b3NpemU6IGFueSA9IHRydWU7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmF1dG9zaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0aGlzLnVpLmF1dG9zaXplO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zZWxlY3RcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwiaS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256U2VydmVyU2VhcmNoXT1cImkuc2VydmVyU2VhcmNoXCJcbiAgICAgIFtuek1heE11bHRpcGxlQ291bnRdPVwiaS5tYXhNdWx0aXBsZUNvdW50XCJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpPblNlYXJjaCk9XCJzZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhhc0dyb3VwXCI+XG4gICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBkYXRhXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XG4gICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPlxuICAgICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGkuY2hpbGRyZW5cIlxuICAgICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgICAgPC9uei1vcHRpb24tZ3JvdXA+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRoaXMudWkuYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogdGhpcy51aS5kcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodGhpcy51aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IHRoaXMudWkubWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IHRoaXMudWkubW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfDpsKXwqDDpsKzwpXDpsKJwr7DpcKIwrAnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHRoaXMudWkuc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuaGFzR3JvdXAgPSBsaXN0LmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHRoaXMudWkub3BlbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBhbnlbXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20odmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHRvQm9vbCwgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei10cmVlLXNlbGVjdFxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiaS5hc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiZGF0YVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kZWRLZXlzXT1cInVpLmRlZmF1bHRFeHBhbmRlZEtleXNcIlxuICAgICAgW256RGlzcGxheVdpdGhdPVwiaS5kaXNwbGF5V2l0aFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXRyZWUtc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgcHJpdmF0ZSBkYygpIHtcbiAgICAvLyBNdXNlIHdhaXQgYG56LXRyZWUtc2VsZWN0YCB3cml0ZSB2YWx1ZXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5EYXRhKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUoZGVlcENvcHkobm9kZSkgYXMgYW55KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgYXN5bmNEYXRhOiB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nLFxuICAgICAgZGVmYXVsdEV4cGFuZEFsbDogdG9Cb29sKHVpLmRlZmF1bHRFeHBhbmRBbGwsIGZhbHNlKSxcbiAgICAgIGRpc3BsYXlXaXRoOiB1aS5kaXNwbGF5V2l0aCB8fCAoKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpXG4gICAgICAucGlwZShtYXAobGlzdCA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSlcbiAgICAgIC5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBlLm5vZGUuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGFnJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10YWdcbiAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIlxuICAgICAgbnpNb2RlPVwiY2hlY2thYmxlXCJcbiAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcbiAgICAgIChuekFmdGVyQ2xvc2UpPVwiX2FmdGVyQ2xvc2UoKVwiXG4gICAgICAobnpPbkNsb3NlKT1cIl9jbG9zZSgkZXZlbnQpXCJcbiAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwib25DaGFuZ2UoaSlcIj5cbiAgICAgIHt7aS5sYWJlbH19XG4gICAgPC9uei10YWc+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBvbkNoYW5nZShpdGVtOiBTRlNjaGVtYUVudW0pIHtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICBpZiAodGhpcy51aS5jaGVja2VkQ2hhbmdlKSB0aGlzLnVpLmNoZWNrZWRDaGFuZ2UoaXRlbS5jaGVja2VkKTtcbiAgfVxuXG4gIF9hZnRlckNsb3NlKCkge1xuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2xvc2UpIHRoaXMudWkuYWZ0ZXJDbG9zZSgpO1xuICB9XG5cbiAgX2Nsb3NlKGU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9uQ2xvc2UpIHRoaXMudWkub25DbG9zZShlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZENoYW5nZVBhcmFtLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXVwbG9hZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdXBsb2FkXG4gICAgICBbbnpUeXBlXT1cImkudHlwZVwiXG4gICAgICBbbnpGaWxlTGlzdF09XCJmaWxlTGlzdFwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpBY3Rpb25dPVwiaS5hY3Rpb25cIlxuICAgICAgW256QWNjZXB0XT1cImkuYWNjZXB0XCJcbiAgICAgIFtuekxpbWl0XT1cImkubGltaXRcIlxuICAgICAgW256U2l6ZV09XCJpLnNpemVcIlxuICAgICAgW256RmlsZVR5cGVdPVwiaS5maWxlVHlwZVwiXG4gICAgICBbbnpIZWFkZXJzXT1cInVpLmhlYWRlcnNcIlxuICAgICAgW256RGF0YV09XCJ1aS5kYXRhXCJcbiAgICAgIFtuekxpc3RUeXBlXT1cImkubGlzdFR5cGVcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpOYW1lXT1cImkubmFtZVwiXG4gICAgICBbbnpTaG93VXBsb2FkTGlzdF09XCJpLnNob3dVcGxvYWRMaXN0XCJcbiAgICAgIFtueldpdGhDcmVkZW50aWFsc109XCJpLndpdGhDcmVkZW50aWFsc1wiXG4gICAgICBbbnpSZW1vdmVdPVwidWkucmVtb3ZlXCJcbiAgICAgIFtuelByZXZpZXddPVwiaGFuZGxlUHJldmlld1wiXG4gICAgICAobnpDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImJ0blR5cGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BsdXMnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkcmFnJ1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj48aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1pbmJveFwiPjwvaT48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiIFtpbm5lckhUTUxdPVwiaS5oaW50XCI+PC9wPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXVwbG9hZFwiPjwvaT48c3BhbiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXVwbG9hZD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgYnRuVHlwZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBtb2RhbFNydjogTnpNb2RhbFNlcnZpY2UpIHtcbiAgICBzdXBlcihjZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0eXBlOiB0aGlzLnVpLnR5cGUgfHwgJ3NlbGVjdCcsXG4gICAgICB0ZXh0OiB0aGlzLnVpLnRleHQgfHwgJ8OnwoLCucOlwofCu8OkwrjCisOkwrzCoCcsXG4gICAgICBhY3Rpb246IHRoaXMudWkuYWN0aW9uIHx8ICcnLFxuICAgICAgYWNjZXB0OiB0aGlzLnVpLmFjY2VwdCB8fCAnJyxcbiAgICAgIGxpbWl0OiB0aGlzLnVpLmxpbWl0ID09IG51bGwgPyAwIDogK3RoaXMudWkubGltaXQsXG4gICAgICBzaXplOiB0aGlzLnVpLnNpemUgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5zaXplLFxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDDpcKNwpXDpcKHwrvDpsKIwpbDpsKLwpbDpcKKwqjDpsKWwofDpMK7wrbDpcKIwrDDqMKvwqXDpcKMwrrDpcKfwp/DpMK4worDpMK8wqBgO1xuICAgICAgdGhpcy5pLmhpbnQgPVxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYMOmwpTCr8OmwozCgcOlwo3ClcOkwrjCqsOmwojClsOmwonCucOpwofCj8OvwrzCjMOkwrjCpcOnwqbCgcOkwrjCisOkwrzCoMOlwoXCrMOlwo/CuMOmwpXCsMOmwo3CrsOmwojClsOlwoXCtsOkwrvClsOlwq7CicOlwoXCqMOmwpbCh8OkwrvCtmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5tb2RhbFNydlxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10cmFuc2ZlclxuICAgICAgW256RGF0YVNvdXJjZV09XCJsaXN0XCJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXG4gICAgICBbbnpMaXN0U3R5bGVdPVwidWkubGlzdFN0eWxlXCJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlYXJjaENoYW5nZSk9XCJfc2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJhbnNmZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuICBpOiBhbnk7XG4gIHByaXZhdGUgX2RhdGE6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdGl0bGVzOiB0aGlzLnVpLnRpdGxlcyB8fCBbJycsICcnXSxcbiAgICAgIG9wZXJhdGlvbnM6IHRoaXMudWkub3BlcmF0aW9ucyB8fCBbJycsICcnXSxcbiAgICAgIGl0ZW1Vbml0OiB0aGlzLnVpLml0ZW1Vbml0IHx8ICfDqcKhwrknLFxuICAgICAgaXRlbXNVbml0OiB0aGlzLnVpLml0ZW1zVW5pdCB8fCAnw6nCocK5JyxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgICAgaWYgKH4oZm9ybURhdGEgYXMgYW55W10pLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHRoaXMuX2RhdGEgPSBsaXN0LmZpbHRlcih3ID0+IHcuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIF9jYW5Nb3ZlID0gKGFyZzogYW55KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT4ge1xuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcbiAgfTtcblxuICBfY2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnRvID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoLi4ub3B0aW9ucy5saXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWFyY2hDaGFuZ2UpIHRoaXMudWkuc2VhcmNoQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotc2xpZGVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelJhbmdlXT1cInVpLnJhbmdlXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxuICAgICAgW256RG90c109XCJ1aS5kb3RzXCJcbiAgICAgIFtuekluY2x1ZGVkXT1cImluY2x1ZGVkXCJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcbiAgICAgIChuek9uQWZ0ZXJDaGFuZ2UpPVwiX2FmdGVyQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXNsaWRlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWFya3M6IGFueTtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNjaGVtYS5taW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2hhbmdlKSB0aGlzLnVpLmFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiJGFueSh1aSkuX3JlbmRlclwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGhpcywgc2NoZW1hOiBzY2hlbWEsIHVpOiB1aSB9XCI+PC9uZy10ZW1wbGF0ZT5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotcmF0ZVxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImFsbG93Q2xlYXJcIlxuICAgICAgW256QWxsb3dIYWxmXT1cImFsbG93SGFsZlwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFtuekNvdW50XT1cImNvdW50XCI+PC9uei1yYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwiaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWVcIiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyBnZW5UZXh0KCkgfX08L3NwYW4+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGFsbG93SGFsZjogYm9vbGVhbjtcbiAgYWxsb3dDbGVhcjogYm9vbGVhbjtcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBoYXNUZXh0ID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY291bnQgPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDU7XG4gICAgdGhpcy5hbGxvd0hhbGYgPSAodGhpcy5zY2hlbWEubXVsdGlwbGVPZiB8fCAwLjUpID09PSAwLjU7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sKHRoaXMudWkuYWxsb3dDbGVhciwgdHJ1ZSk7XG4gICAgdGhpcy5hdXRvRm9jdXMgPSB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKTtcbiAgICB0aGlzLmhhc1RleHQgPSAhIXRoaXMudWkudGV4dDtcbiAgfVxuXG4gIGdlblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzVGV4dFxuICAgICAgPyAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpXG4gICAgICA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBmbGF0TWFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXG4gICdxcS5jb20nLFxuICAnMTYzLmNvbScsXG4gICdnbWFpbC5jb20nLFxuICAnMTI2LmNvbScsXG4gICdhbGl5dW4uY29tJyxcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxuei1hdXRvY29tcGxldGUgI2F1dG9cbiAgICAgICAgW256QmFja2ZpbGxdPVwiaS5iYWNrZmlsbFwiXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXG4gICAgICAgIFtueldpZHRoXT1cImkud2lkdGhcIlxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudD8ubnpWYWx1ZSlcIj5cbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkubGFiZWxcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XG4gICAgICA8L256LWF1dG9jb21wbGV0ZT5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XG4gIHByaXZhdGUgaXNBc3luYyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2wodGhpcy51aS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxuICAgICAgd2lkdGg6IHRoaXMudWkud2lkdGggfHwgdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IHRoaXMudWkuZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogdGhpcy51aS5maWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLmZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cbiAgICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuXG4gICAgdGhpcy5pc0FzeW5jID0gISF0aGlzLnVpLmFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgZmxhdE1hcChcbiAgICAgICAgaW5wdXQgPT5cbiAgICAgICAgICB0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpLFxuICAgICAgKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oRU1BSUxTVUZGSVgsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxuICAgICAgICAgIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhLFxuICAgICAgICAgIHRoaXMuc2NoZW1hLnJlYWRPbmx5XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSxcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVtYWlsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gb2YoXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1jYXNjYWRlclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxuICAgICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwidWkuY2hhbmdlT25TZWxlY3RcIlxuICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXG4gICAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxuICAgICAgW256TWVudUNsYXNzTmFtZV09XCJ1aS5tZW51Q2xhc3NOYW1lXCJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxuICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5XCJcbiAgICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eVwiXG4gICAgICBbbnpMb2FkRGF0YV09XCJsb2FkRGF0YVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpTaG93QXJyb3ddPVwic2hvd0Fycm93XCJcbiAgICAgIFtuelNob3dJbnB1dF09XCJzaG93SW5wdXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIChuekNsZWFyKT1cIl9jbGVhcigkZXZlbnQpXCJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiX3Zpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdGlvbkNoYW5nZSk9XCJfc2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LWNhc2NhZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XG4gIHNob3dBcnJvdzogYm9vbGVhbjtcbiAgc2hvd0lucHV0OiBib29sZWFuO1xuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbG9hZERhdGE6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGV4dCA9IHRoaXMudWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnO1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHRoaXMudWkuc2hvd0Fycm93LCB0cnVlKTtcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbCh0aGlzLnVpLnNob3dJbnB1dCwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdGhpcy51aS50cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcbiAgICBpZiAoISF0aGlzLnVpLmFzeW5jRGF0YSkge1xuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh0aGlzLnVpLmFzeW5jRGF0YSBhcyBhbnkpKG5vZGUsIGluZGV4LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMudWkudmlzaWJsZUNoYW5nZSAmJiB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMudWkuY2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UgJiYgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuc2VsZWN0ICYmIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NsZWFyKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuY2xlYXIgJiYgdGhpcy51aS5jbGVhcihvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgICAgPG56LW1lbnRpb24gI21lbnRpb25zXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxuICAgICAgICBbbnpQcmVmaXhdPVwiaS5wcmVmaXhcIlxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgbnpNZW50aW9uVHJpZ2dlciBuei1pbnB1dFxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW256QXV0b3NpemVdPVwidWkuYXV0b3NpemVcIj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9uei1tZW50aW9uPlxuXG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gICAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB0aGlzLnVpLnZhbHVlV2l0aCB8fCAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgIG5vdEZvdW5kQ29udGVudDpcbiAgICAgICAgdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOlwozCucOpwoXCjcOnwrvCk8Omwp7CnMOvwrzCjMOowr3Cu8OmwpXCssOnwqnCusOmwqDCvMOlwq7CjMOmwojCkMOowr7Ck8OlwoXCpScsXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMudWkucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiB0aGlzLnVpLnByZWZpeCB8fCAnQCcsXG4gICAgfTtcbiAgICBjb25zdCBtaW4gPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTEsXG4gICAgICBtYXggPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogLTE7XG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoXG4gICAgICAgIHZhbHVlOiBhbnksXG4gICAgICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxuICAgICAgICBmb3JtOiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwrDCkcOmwo/CkMOlwo/CiiAke21pbn0gw6bCrMKhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDDpsKcwoDDpcKkwprDpsKPwpDDpcKPwoogJHttYXh9IMOmwqzCoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdCkgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfc2VhcmNoKG9wdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAge3sgdmFsdWUgfHwgdWkuZGVmYXVsdFRleHQgfHwgJy0nIH19XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldC5mYWN0b3J5JztcblxuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi90ZXh0L3RleHQud2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIE56V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCBPYmplY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgQXJyYXlXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dCcsIFRleHRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgRGF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFRpbWVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBCb29sZWFuV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRhcmVhV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyZWUtc2VsZWN0JywgVHJlZVNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGFnJywgVGFnV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cGxvYWQnLCBVcGxvYWRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyYW5zZmVyJywgVHJhbnNmZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NsaWRlcicsIFNsaWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmF0ZScsIFJhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2F1dG9jb21wbGV0ZScsIEF1dG9Db21wbGV0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2FzY2FkZXInLCBDYXNjYWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbWVudGlvbicsIE1lbnRpb25XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2N1c3RvbScsIEN1c3RvbVdpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNGRml4ZWREaXJlY3RpdmUgfSBmcm9tICcuL3NmLWZpeGVkLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNGQ29tcG9uZW50LFxuICBTRkl0ZW1Db21wb25lbnQsXG4gIFNGSXRlbVdyYXBDb21wb25lbnQsXG4gIFNGVGVtcGxhdGVEaXJlY3RpdmUsXG4gIFNGRml4ZWREaXJlY3RpdmUsXG5dO1xuXG4vLyByZWdpb246IHdpZGdldHNcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcblxuY29uc3QgV0lER0VUUyA9IFtcbiAgT2JqZWN0V2lkZ2V0LFxuICBBcnJheVdpZGdldCxcbiAgU3RyaW5nV2lkZ2V0LFxuICBOdW1iZXJXaWRnZXQsXG4gIERhdGVXaWRnZXQsXG4gIFRpbWVXaWRnZXQsXG4gIFJhZGlvV2lkZ2V0LFxuICBDaGVja2JveFdpZGdldCxcbiAgQm9vbGVhbldpZGdldCxcbiAgVGV4dGFyZWFXaWRnZXQsXG4gIFNlbGVjdFdpZGdldCxcbiAgVHJlZVNlbGVjdFdpZGdldCxcbiAgVGFnV2lkZ2V0LFxuICBVcGxvYWRXaWRnZXQsXG4gIFRyYW5zZmVyV2lkZ2V0LFxuICBTbGlkZXJXaWRnZXQsXG4gIFJhdGVXaWRnZXQsXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcbiAgQ2FzY2FkZXJXaWRnZXQsXG4gIE1lbnRpb25XaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldCxcbl07XG5cbi8vIGVuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uV0lER0VUU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25Gb3JtQ29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJkZWVwQ29weSIsInRha2VXaGlsZSIsIm1hcCIsIm9mIiwiU3ViamVjdCIsIkJlaGF2aW9yU3ViamVjdCIsIk9ic2VydmFibGUiLCJjb21iaW5lTGF0ZXN0IiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJEZWxvbkxvY2FsZVNlcnZpY2UiLCJJbnB1dCIsIk91dHB1dCIsIklucHV0Qm9vbGVhbiIsIlZpZXdDaGlsZCIsIlZpZXdDb250YWluZXJSZWYiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXROdW1iZXIiLCJUZW1wbGF0ZVJlZiIsImZpbHRlciIsIkhvc3RCaW5kaW5nIiwiTnpUcmVlTm9kZSIsImRlZXBHZXQiLCJOek1vZGFsU2VydmljZSIsImRlYm91bmNlVGltZSIsInN0YXJ0V2l0aCIsImZsYXRNYXAiLCJ0YXAiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIiwiRGVsb25Mb2NhbGVNb2R1bGUiLCJOZ1pvcnJvQW50ZE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLFFBQWEsYUFBYSxHQUFHO1FBQzNCLGNBQWMsRUFBVSxzQ0FBUTtRQUNoQyxNQUFNLEVBQWtCLDJDQUFhO1FBQ3JDLGVBQWUsRUFBUyxxQ0FBWTtRQUNwQyxvQkFBb0IsRUFBSSx3REFBVztRQUNuQyxLQUFLLEVBQW1CLGlGQUFxQjtRQUM3QyxZQUFZLEVBQVksb0ZBQTZCO1FBQ3JELElBQUksRUFBb0IsMEVBQWM7UUFDdEMsTUFBTSxFQUFrQixnQ0FBTzs7UUFDL0IsSUFBSSxFQUFvQix1Q0FBYztRQUN0QyxRQUFRLEVBQWdCLG9CQUFLO1FBQzdCLFNBQVMsRUFBZSx5Q0FBZ0I7UUFDeEMsU0FBUyxFQUFlLHFEQUFrQjtRQUMxQyxPQUFPLEVBQWlCLGtDQUF3QjtRQUNoRCxhQUFhLEVBQVcsa0NBQXdCO1FBQ2hELE9BQU8sRUFBaUIsa0NBQXdCO1FBQ2hELGFBQWEsRUFBVyxrQ0FBd0I7UUFDaEQsUUFBUSxFQUFnQiwrQ0FBaUI7UUFDekMsUUFBUSxFQUFnQiwrQ0FBaUI7UUFDekMsYUFBYSxFQUFXLHFEQUFrQjtRQUMxQyxhQUFhLEVBQVcscURBQWtCO1FBQzFDLFVBQVUsRUFBYywwREFBdUI7UUFDL0MsR0FBRyxFQUFxQiwrQ0FBb0I7UUFDNUMsS0FBSyxFQUFtQixvRUFBMEI7UUFDbEQsT0FBTyxFQUFpQiw0Q0FBUztRQUNqQyxXQUFXLEVBQWEscUhBQWdDO1FBQ3hELE1BQU0sRUFB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUMvRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxVQUFVO1lBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUMzRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztBQUVELHdCQUEyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUs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