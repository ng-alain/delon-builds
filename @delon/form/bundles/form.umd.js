/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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
                        template: "<ng-template #con>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\r\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\r\n  <ng-container *ngIf=\"button !== 'none'; else con\">\r\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\r\n      <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\r\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\r\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\">\r\n        <div class=\"ant-form-item-control\">\r\n          <ng-container *ngIf=\"button; else con\">\r\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\r\n            <button *ngIf=\"_btn.reset\" (click)=\"reset(true)\" type=\"button\" nz-button [nzType]=\"_btn.reset_type\">{{_btn.reset}}</button>\r\n          </ng-container>\r\n        </div>\r\n      </nz-col>\r\n    </nz-form-item>\r\n  </ng-container>\r\n</form>\r\n",
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
                if (typeof this.schema.readOnly !== 'undefined')
                    return this.schema.readOnly;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9mb3JtL3NyYy9lcnJvcnMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9jb25maWcudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdXRpbHMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy90ZXJtaW5hdG9yLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9mb3JtLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYXRvbWljLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvbnVtYmVyLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvc3RyaW5nLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYm9vbGVhbi5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2FycmF5LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdmFsaWRhdG9yLmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtaXRlbS13cmFwLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY3VzdG9tL3NmLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90YWcvdGFnLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XHJcbiAgJ2ZhbHNlIHNjaGVtYSc6ICAgICAgICAgYMOlwrjCg8OlwrDClMOmwqjCocOlwrzCj8OlwofCusOpwpTCmWAsXHJcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYMOmwpfCoMOmwrPClcOmwonCvsOlwojCsMOlwrzClcOnwpTCqHtyZWZ9YCxcclxuICBhZGRpdGlvbmFsSXRlbXM6ICAgICAgICBgw6TCuMKNw6XChcKBw6jCrsK4w6jCtsKFw6jCv8KHe3JlZn1gLFxyXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiAgIGDDpMK4wo3DpcKFwoHDqMKuwrjDpsKcwonDqcKiwp3DpcKkwpbDp8KawoTDpcKxwp7DpsKAwqdgLFxyXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpcK6wpTDpMK4wrogYW55T2Ygw6bCicKAw6bCjMKHw6XCrsKaw6fCmsKEw6XChcK2w6TCuMKtw6TCuMKAw6TCuMKqYCxcclxuICBkZXBlbmRlbmNpZXM6ICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCi8Klw6bCnMKJw6XCscKew6bCgMKne3Byb3BlcnR5fcOnwprChMOkwr7CncOowrXClsOlwrHCnsOmwoDCp3tkZXBzfWAsXHJcbiAgZW51bTogICAgICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgGAsXHJcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsIC8vIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKgwrzDpcK8wo8gXCJ7Zm9ybWF0fVwiYCxcclxuICB0eXBlOiAgICAgICAgICAgICAgICAgICBgw6fCscK7w6XCnsKLw6XCusKUw6XCvcKTw6bCmMKvIHt0eXBlfWAsXHJcbiAgcmVxdWlyZWQ6ICAgICAgICAgICAgICAgYMOlwr/ChcOlwqHCq8OpwqHCuWAsXHJcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwqTCmiB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpmAsXHJcbiAgbWluTGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwrDCkSB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpsOkwrvCpcOkwrjCimAsXHJcbiAgbWluaW11bTogICAgICAgICAgICAgICAgYMOlwr/ChcOpwqHCuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcclxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxyXG4gIG1heGltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgZm9ybWF0TWF4aW11bTogICAgICAgICAgYMOlwr/ChcOpwqHCuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcclxuICBtYXhJdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcclxuICBtaW5JdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcclxuICBtYXhQcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcclxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcclxuICBtdWx0aXBsZU9mOiAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvIHttdWx0aXBsZU9mfSDDp8KawoTDpsKVwrTDpsKVwrDDpcKAwo1gLFxyXG4gIG5vdDogICAgICAgICAgICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo0gXCJub3RcIiBzY2hlbWFgLFxyXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDDpcKPwqrDqMKDwr3DpcKMwrnDqcKFwo3DpMK4woDDpMK4wqogXCJvbmVPZlwiIMOkwrjCrcOnwprChCBzY2hlbWFgLFxyXG4gIHBhdHRlcm46ICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLFxyXG4gIHVuaXF1ZUl0ZW1zOiAgICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcK9wpPDpcKQwqvDpsKcwonDqcKHwo3DpcKkwo3DqcKhwrkgKMOnwqzCrCB7an0gw6nCocK5w6TCuMKOw6fCrMKsIHtpfSDDqcKhwrnDpsKYwq/DqcKHwo3DpcKkwo3Dp8KawoQpYCxcclxuICBjdXN0b206ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcclxuICBwcm9wZXJ0eU5hbWVzOiAgICAgICAgICBgw6XCscKew6bCgMKnw6XCkMKNIFwie3Byb3BlcnR5TmFtZX1cIiDDpsKXwqDDpsKVwohgLFxyXG4gIHBhdHRlcm5SZXF1aXJlZDogICAgICAgIGDDpcK6wpTDpcK9wpPDpsKcwonDpcKxwp7DpsKAwqfDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8ge21pc3NpbmdQYXR0ZXJufWAsXHJcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYMOnwpTCscOkwrrCjiB7Y2FzZUluZGV4fSDDpcKkwrHDqMK0wqXDr8K8wozDpsKcwqrDqcKAwprDqMK/wocgXCJzd2l0Y2hcIiDDpsKgwqHDqcKqwoxgLFxyXG4gIGNvbnN0OiAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDp8KtwonDpMK6wo7DpcK4wrjDqcKHwo9gLFxyXG4gIGNvbnRhaW5zOiAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpcKMwoXDpcKQwqvDpMK4woDDpMK4wqrDpsKcwonDpsKVwojDqcKhwrlgLFxyXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXHJcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0gw6XCusKUw6XCvcKTw6bCmMKvw6XCuMKDw6XCsMKUw6XCgMK8YCxcclxuICBpZjogICAgICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPIFwie2ZhaWxpbmdLZXl3b3JkfVwiYCxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcclxuICBrZXl3b3JkOiBzdHJpbmc7XHJcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XHJcbiAgc2NoZW1hUGF0aD86IHN0cmluZztcclxuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgX2N1c3RvbT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JTY2hlbWEge1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxyXG4gICAqIC0gYHRydWVgIMOmwq/Cj8OkwrjCgMOmwqzCocOpwoPCvcOmwqDCocOpwqrCjFxyXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcclxuICAgKi9cclxuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOpwpTCmcOowq/Cr8Okwr/CocOmwoHCr8OmwpbCh8OmwpzCrMOvwrzCjMOpwpTCrsOlwpDCjcOowrXCnsOlwpDCjCBgRXJyb3JEYXRhLmtleXdvcmRgIMOlwoDCvFxyXG4gICAqL1xyXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6fCq8KLw6XCjcKzw6XCkcKIw6fCjsKww6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxyXG4gICAqL1xyXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXHJcbiAgICovXHJcbiAgb25seVZpc3VhbD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYFxyXG4gICAqIC0gw6XCgMK8w6XCp8KLw6fCu8KIw6XCjMKFw6XCkMKrIGBEZWxvblNjaGVtYUZvcm1Db25maWcuaW5nb3JlS2V5d29yZHNgXHJcbiAgICovXHJcbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwoxcclxuICAgKi9cclxuICB2YWxpZGF0b3I/OiAodmFsdWU6IGFueSwgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksIGZvcm06IFByb3BlcnR5R3JvdXApID0+IEVycm9yRGF0YVtdIHwgT2JzZXJ2YWJsZTxFcnJvckRhdGFbXT47XHJcbn1cclxuIiwiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IEVSUk9SU0RFRkFVTFQgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybUNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBbICd0eXBlJywgJ2VudW0nIF1gXHJcbiAgICpcclxuICAgKiAtIGB0eXBlYCDDqcKZwpDDpcKuwpogU2NoZW1hIMOkwrjCrSBgdHlwZWAgw6fCscK7w6XCnsKLXHJcbiAgICogLSBgZW51bWAgw6nCmcKQw6XCrsKaw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAXHJcbiAgICovXHJcbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XHJcbiAgLyoqXHJcbiAgICogW2Fqdl0oaHR0cDovL2Vwb2JlcmV6a2luLmdpdGh1Yi5pby9hanYvI29wdGlvbnMpIMOlwo/CgsOmwpXCsFxyXG4gICAqL1xyXG4gIGFqdj86IGFueTtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcclxuICAgKiAtIGBmYWxzZWAgw6bCj8KQw6TCusKkw6bCl8K2w6bCoMKhw6nCqsKMXHJcbiAgICovXHJcbiAgbGl2ZVZhbGlkYXRlPyA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBvbmBcclxuICAgKi9cclxuICBhdXRvY29tcGxldGU/OiAnb24nIHwgJ29mZicgPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcclxuICAgKi9cclxuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXHJcbiAgICovXHJcbiAgb25seVZpc3VhbD8gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKAwprDp8KUwqjDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq9cclxuICAgKi9cclxuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gRVJST1JTREVGQVVMVDtcclxuICAvKipcclxuICAgKiDDqcK7wpjDqMKuwqTDpcKFwqjDpcKxwoDDpcK4woPDpcKxwoBcclxuICAgKi9cclxuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xyXG4gIC8qKlxyXG4gICAqIMOlwoXCg8OnwrTCoMOnwrvChMOkwrvCtsOlwqTCp8OlwrDCj8OvwrzCjMOnwpTCqMOkwrrCjiBgbnpTaXplYCDDpcKAwrxcclxuICAgKi9cclxuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XHJcbiAgLyoqXHJcbiAgICogw6bCjMKJw6nCksKuw6nCo8KOw6bCoMK8XHJcbiAgICovXHJcbiAgYnV0dG9uPzogU0ZCdXR0b24gPSB7XHJcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxyXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogZGF0ZcOlwrDCj8OpwoPCqMOkwrvCtsOvwrzCmmB0eXBlPVwic3RyaW5nXCJgIMOkwrjClMOkwrjCjcOmwozCh8Olwq7CmiBgc2NoZW1hLmZvcm1hdGAgw6XCksKMIGB1aS5mb3JtYXRgIMOmwpfCtsOmwpfCpcOmwpzCn8OmwqDCvMOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBZWVlZLU1NLUREIEhIOm1tOnNzYFxyXG4gICAqL1xyXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XHJcbiAgLyoqXHJcbiAgICogZGF0ZcOlwrDCj8OpwoPCqMOkwrvCtsOvwrzCmmB0eXBlPVwibnVtYmVyXCJgIMOkwrjClMOkwrjCjcOmwozCh8Olwq7CmiBgc2NoZW1hLmZvcm1hdGAgw6XCksKMIGB1aS5mb3JtYXRgIMOmwpfCtsOmwpfCpcOmwpzCn8OmwqDCvMOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB4YCAxM8Okwr3CjVVuaXggVGltZXN0YW1wXHJcbiAgICovXHJcbiAgdWlEYXRlTnVtYmVyRm9ybWF0PyA9ICd4JztcclxuICAvKipcclxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJzdHJpbmdcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYEhIOm1tOnNzYFxyXG4gICAqL1xyXG4gIHVpVGltZVN0cmluZ0Zvcm1hdD8gPSAnSEg6bW06c3MnO1xyXG4gIC8qKlxyXG4gICAqIHRpbWXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcMOvwrzCjMOmwpfCpcOmwpzCn8OnwrvCn8OkwrjCgMOkwr3Cv8OnwpTCqCBgMTk3MC0wMS0wMWBcclxuICAgKi9cclxuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IFNGU2NoZW1hLCBTRlNjaGVtYURlZmluaXRpb24sIFNGU2NoZW1hRW51bSB9IGZyb20gJy4vc2NoZW1hJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT1JNQVRNQVBTID0ge1xyXG4gICdkYXRlLXRpbWUnOiB7XHJcbiAgICB3aWRnZXQ6ICdkYXRlJyxcclxuICAgIHNob3dUaW1lOiB0cnVlLFxyXG4gICAgZm9ybWF0OiAnWVlZWS1NTS1ERFRISDptbTpzc1onLFxyXG4gIH0sXHJcbiAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcclxuICAnZnVsbC1kYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcclxuICB0aW1lOiB7IHdpZGdldDogJ3RpbWUnIH0sXHJcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcclxuICB3ZWVrOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnd2VlaycsIGZvcm1hdDogJ1lZWVktV1cnIH0sXHJcbiAgbW9udGg6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICdtb250aCcsIGZvcm1hdDogJ1lZWVktTU0nIH0sXHJcbiAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcclxuICBlbWFpbDogeyB3aWRnZXQ6ICdhdXRvY29tcGxldGUnLCB0eXBlOiAnZW1haWwnIH0sXHJcbiAgY29sb3I6IHsgd2lkZ2V0OiAnc3RyaW5nJywgdHlwZTogJ2NvbG9yJyB9LFxyXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xyXG4gIHJldHVybiBvID09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2wodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGkoLi4uYXJncykge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xyXG59XHJcblxyXG4vKiogw6bCoMK5w6bCjcKuIGAkcmVmYCDDpsKfwqXDpsKJwr4gYGRlZmluaXRpb25zYCAqL1xyXG5mdW5jdGlvbiBmaW5kU2NoZW1hRGVmaW5pdGlvbigkcmVmOiBzdHJpbmcsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24pIHtcclxuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XHJcbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAvLyBwYXJzZXIgSlNPTiBQb2ludGVyXHJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XHJcbiAgICBsZXQgY3VycmVudDogYW55ID0gZGVmaW5pdGlvbnM7XHJcbiAgICBmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcclxuICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkocGFydCkpIHtcclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xyXG59XHJcblxyXG4vKipcclxuICogw6XCj8KWw6XCm8KeU2NoZW1hw6/CvMKMw6XCucK2w6XCpMKEw6fCkMKGIGAkcmVmYCDDp8KawoTDpcKFwrPDp8KzwrtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcclxuICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24gPSB7fSxcclxuKTogU0ZTY2hlbWEge1xyXG4gIGlmIChzY2hlbWEuaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xyXG4gICAgY29uc3QgJHJlZlNjaGVtYSA9IGZpbmRTY2hlbWFEZWZpbml0aW9uKHNjaGVtYS4kcmVmLCBkZWZpbml0aW9ucyk7XHJcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxyXG4gICAgY29uc3QgeyAkcmVmLCAuLi5sb2NhbFNjaGVtYSB9ID0gc2NoZW1hO1xyXG4gICAgcmV0dXJuIHJldHJpZXZlU2NoZW1hKHsgLi4uJHJlZlNjaGVtYSwgLi4ubG9jYWxTY2hlbWEgfSwgZGVmaW5pdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNjaGVtYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJZihzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiBTRlNjaGVtYSB7XHJcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xyXG5cclxuICBpZiAoIXNjaGVtYS5pZi5wcm9wZXJ0aWVzKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcclxuXHJcbiAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKSxcclxuICAgIGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZi5wcm9wZXJ0aWVzKTtcclxuICBkZXRlY3RLZXkoYWxsS2V5cywgaWZLZXlzKTtcclxuICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xyXG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xyXG4gIGNvbnN0IGhhc0Vsc2UgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Vsc2UnKTtcclxuICBpZiAoaGFzRWxzZSkge1xyXG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcclxuICAgIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLmVsc2UucmVxdWlyZWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmlzaWJsZUlmOiBhbnkgPSB7fTtcclxuICBjb25zdCB2aXNpYmxlRWxzZTogYW55ID0ge307XHJcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGNvbnN0IGNvbmQgPSBzY2hlbWEuaWYucHJvcGVydGllc1trZXldLmVudW07XHJcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XHJcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZC5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHNjaGVtYS50aGVuLnJlcXVpcmVkLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xyXG4gIGlmIChoYXNFbHNlKVxyXG4gICAgc2NoZW1hLmVsc2UucmVxdWlyZWQuZm9yRWFjaChcclxuICAgICAga2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSxcclxuICAgICk7XHJcblxyXG4gIHJldHVybiBzY2hlbWE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcclxuICBkZXRlY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcclxuICBjb25zdCBhcnJheVRvSGFzaCA9IGFyciA9PlxyXG4gICAgYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcclxuXHJcbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XHJcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xyXG4gIGNvbnN0IGV4dHJhbmVvdXMgPSBvcmRlci5maWx0ZXIocHJvcCA9PiBwcm9wICE9PSAnKicgJiYgIXByb3BlcnR5SGFzaFtwcm9wXSk7XHJcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBleHRyYW5lb3VzICR7ZXJyb3JQcm9wTGlzdChleHRyYW5lb3VzKX1gLFxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgcmVzdCA9IHByb3BlcnRpZXMuZmlsdGVyKHByb3AgPT4gIW9yZGVySGFzaFtwcm9wXSk7XHJcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xyXG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XHJcbiAgICBpZiAocmVzdC5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yZGVyO1xyXG4gIH1cclxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICd1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGl0ZW0nLFxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgY29tcGxldGUgPSBbLi4ub3JkZXJdO1xyXG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xyXG4gIHJldHVybiBjb21wbGV0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xyXG4gIGlmIChpc0JsYW5rKGxpc3QpIHx8ICFBcnJheS5pc0FycmF5KGxpc3QpIHx8IGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gW107XHJcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xyXG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIDxTRlNjaGVtYUVudW0+eyBsYWJlbDogaXRlbSwgdmFsdWU6IGl0ZW0gfTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZm9ybURhdGEpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcclxuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XHJcbiAgICAgIGlmICh+Zm9ybURhdGEuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBmaXggZGlzYWJsZWQgc3RhdHVzXHJcbiAgaWYgKHJlYWRPbmx5KSB7XHJcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xyXG4gIH1cclxuICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcHlFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbikge1xyXG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcclxuICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gIHVpOiBTRlVJU2NoZW1hSXRlbSxcclxuICBmb3JtRGF0YTogYW55LFxyXG4gIGFzeW5jQXJncz86IGFueSxcclxuKTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4ge1xyXG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdWlcclxuICAgICAgLmFzeW5jRGF0YShhc3luY0FyZ3MpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VXaGlsZSgoKSA9PiB1aS5fX2Rlc3Ryb3kgIT09IHRydWUpLFxyXG4gICAgICAgIG1hcChsaXN0ID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpLFxyXG4gICAgICApO1xyXG4gIH1cclxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0sIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xyXG4gIG9uRGVzdHJveTogU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCh0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Qcm9wZXJ0eSB7XHJcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW107XHJcbiAgc2NoZW1hOiBTRlNjaGVtYTtcclxuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xyXG4gIGZvcm1EYXRhOiB7fTtcclxuICBfdmFsdWU6IGFueSA9IG51bGw7XHJcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PjtcclxuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgX29iakVycm9yczogeyBba2V5OiBzdHJpbmddOiBFcnJvckRhdGFbXSB9ID0ge307XHJcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xyXG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBQcm9wZXJ0eUdyb3VwO1xyXG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xyXG4gICAgdGhpcy51aSA9IHVpO1xyXG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSwge1xyXG4gICAgICBpbmdvcmVLZXl3b3JkczogdGhpcy51aS5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhIHx8IHNjaGVtYS5kZWZhdWx0O1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuX3Jvb3QgPSA8UHJvcGVydHlHcm91cD4oPGFueT50aGlzKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZUNoYW5nZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3JzQ2hhbmdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmVudCgpOiBQcm9wZXJ0eUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9ycygpIHtcclxuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycyA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwoDCvFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDDqcKHwo3Dp8K9wq7DpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDpcKAwrzDpMK4wrogYHNjaGVtYS5kZWZhdWx0YFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IF9oYXNWYWx1ZSgpOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgQGludGVybmFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogw6bCm8K0w6bClsKww6XCgMK8w6TCuMKUw6bCoMKhw6nCqsKMw6bClcKww6bCjcKuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW29ubHlTZWxmPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpMK4worDp8K6wqfDpcKtwpfDpsKuwrVcclxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkcOlwoDCvMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxyXG4gICAqL1xyXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXHJcbiAgICBvbmx5U2VsZiA9IGZhbHNlLFxyXG4gICAgZW1pdFZhbHVlRXZlbnQgPSB0cnVlLFxyXG4gICAgZW1pdFZhbGlkYXRvciA9IHRydWUsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xyXG5cclxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGBlbWl0VmFsaWRhdG9yYCDDpsKvwo/DpMK4woDDpsKswqHDpsKVwrDDpsKNwq7DpcKPwpjDpsKbwrTDpcK3wrLDp8K7wo/DpcKMwoXDpcKQwqvDpcKuwozDpsKVwrTDqcKUwpnDqMKvwq/DqcKTwr7DqMK3wq/Dr8K8wozDpcKQwo7Dp8K7wq3Dp8KIwrbDqMKKwoLDp8KCwrnDpsKVwrDDpsKNwq7DpcKPwpjDpsKbwrTDpsKXwqDDqcKhwrvDpcKGwo3DqMKnwqbDpcKPwpHDpsKgwqHDqcKqwoxcclxuICAgIGlmIChlbWl0VmFsaWRhdG9yICYmIHRoaXMudWkubGl2ZVZhbGlkYXRlID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XHJcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogw6bCoMK5w6bCjcKuw6jCt8Kvw6XCvsKEw6bCkMKcw6fCtMKiw6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXHJcbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcclxuICAgIGxldCBwcm9wOiBGb3JtUHJvcGVydHkgPSB0aGlzO1xyXG4gICAgbGV0IGJhc2U6IFByb3BlcnR5R3JvdXAgPSBudWxsO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgaWYgKHBhdGhbMF0gPT09ICcvJykge1xyXG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xyXG4gICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGguc3Vic3RyKDEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICBwcm9wID0gYmFzZSA9IHByb3AucGFyZW50O1xyXG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKiogw6bCn8Klw6bCicK+w6bCoMK5w6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXHJcbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XHJcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XHJcbiAgICB3aGlsZSAocHJvcGVydHkucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBwcm9jZXNzIGVycm9yc1xyXG5cclxuICBwcml2YXRlIGlzRW1wdHlEYXRhKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkgcmV0dXJuIHRydWU7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgIHJldHVybiAoJycgKyB2YWx1ZSkubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgX3J1blZhbGlkYXRpb24oKSB7XHJcbiAgICBsZXQgZXJyb3JzOiBFcnJvckRhdGFbXTtcclxuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XHJcbiAgICAvLyAxLiBTaG91bGQgbm90IGFqdiB2YWxpZGF0b3Igd2hlbiBpcyBlbXB0eSBkYXRhIGFuZCByZXF1aXJlZCBmaWVsZHNcclxuICAgIC8vIDIuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGFcclxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcclxuICAgIGlmIChpc0VtcHR5ICYmIHRoaXMudWkuX3JlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IFt7IGtleXdvcmQ6ICdyZXF1aXJlZCcgfV07XHJcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcclxuICAgICAgZXJyb3JzID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBjdXN0b21WYWxpZGF0b3IgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbVJ1bikudmFsaWRhdG9yO1xyXG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgY3VzdG9tRXJyb3JzID0gY3VzdG9tVmFsaWRhdG9yKHRoaXMudmFsdWUsIHRoaXMsIHRoaXMuZmluZFJvb3QoKSk7XHJcbiAgICAgIGlmIChjdXN0b21FcnJvcnMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRDdXN0b21FcnJvcnMoZXJyb3JzLCByZXMpO1xyXG4gICAgICAgICAgdGhpcy53aWRnZXQuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDdXN0b21FcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbGlzdDogRXJyb3JEYXRhW10pIHtcclxuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcclxuICAgIGNvbnN0IGhhc0N1c3RvbUVycm9yID0gbGlzdCAhPSBudWxsICYmIGxpc3QubGVuZ3RoID4gMDtcclxuICAgIGlmIChoYXNDdXN0b21FcnJvcikge1xyXG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoIWVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICBgw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMw6XCmcKow6XCv8KFw6nCocK7w6jCh8Kzw6XCsMKRw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqICdtZXNzYWdlJyDDpcKxwp7DpsKAwqfDr8K8wozDp8KUwqjDpMK6wo7DqMKhwqjDp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqxgLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBlcnIuX2N1c3RvbSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZXJyb3JzID0gdGhpcy5tZXJnZUVycm9ycyhlcnJvcnMsIGxpc3QpO1xyXG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xyXG4gICAgaWYgKG5ld0Vycm9ycykge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFcnJvcnMpKSB7XHJcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKG5ld0Vycm9ycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIGVtaXRGb3JtYXQgPSB0cnVlKSB7XHJcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMubWFwKChlcnI6IEVycm9yRGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID1cclxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXHJcbiAgICAgICAgICAgID8gZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkXSB8fFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8XHJcbiAgICAgICAgICAgICAgYGA7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UoZXJyKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICBpZiAofihtZXNzYWdlIGFzIHN0cmluZykuaW5kZXhPZigneycpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcclxuICAgICAgICAgICAgICAodjogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gZXJyLnBhcmFtc1trZXldIHx8ICcnLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXJyLm1lc3NhZ2UgPSBtZXNzYWdlIGFzIHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB0aGlzLl9lcnJvcnNDaGFuZ2VzLm5leHQoZXJyb3JzKTtcclxuICAgIC8vIFNob3VsZCBzZW5kIGVycm9ycyB0byBwYXJlbnQgZmllbGRcclxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgdGhpcy5fcGFyZW50LnNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzLCB0aGlzLnBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBwYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcclxuICAgIGNvbnN0IHBsYXRFcnJvcnM6IEVycm9yRGF0YVtdID0gW107XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9vYmpFcnJvcnMpLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcclxuICAgICAgaWYgKHByb3BlcnR5ICYmICFwcm9wZXJ0eS52aXNpYmxlKSByZXR1cm47XHJcbiAgICAgIHBsYXRFcnJvcnMucHVzaCguLi50aGlzLl9vYmpFcnJvcnNbcF0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldEVycm9ycyhwbGF0RXJyb3JzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBjb25kaXRpb25cclxuXHJcbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgdGhpcy5fdmlzaWJpbGl0eUNoYW5nZXMubmV4dCh2aXNpYmxlKTtcclxuICAgIC8vIMOpwoPCqMOlwojChsOmwpXCsMOmwo3CrsOmwrrCkMOmwp3CpcOowofCqiByZXNldFxyXG4gICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XHJcbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xyXG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcclxuICAgIGlmICh0eXBlb2YgdmlzaWJsZUlmID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2aXNpYmxlSWYpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQmluZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeVBhdGggaW4gdmlzaWJsZUlmKSB7XHJcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcclxuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCk7XHJcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICAgICAgICAgIG1hcCgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmkgPSB2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZpKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDaGVjayA9IHByb3BlcnR5Ll92aXNpYmlsaXR5Q2hhbmdlcztcclxuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdChcclxuICAgICAgICAgICAgICB2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tcclxuICAgICAgICAgICAgKS5waXBlKG1hcChyZXN1bHRzID0+IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSkpO1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aFxyXG4gICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29tYmluZUxhdGVzdChwcm9wZXJ0aWVzQmluZGluZylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcCh2YWx1ZXMgPT4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xyXG4gIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0gfCBGb3JtUHJvcGVydHlbXSA9IG51bGw7XHJcblxyXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xyXG4gICAgY29uc3QgcHJvcGVydHlJZCA9IHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoO1xyXG5cclxuICAgIGxldCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcclxuICAgIGlmIChcclxuICAgICAgcHJvcGVydHkgIT09IG51bGwgJiZcclxuICAgICAgc3ViUGF0aElkeCAhPT0gLTEgJiZcclxuICAgICAgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcclxuICAgICAgcHJvcGVydHkgPSAoPFByb3BlcnR5R3JvdXA+cHJvcGVydHkpLmdldFByb3BlcnR5KHN1YlBhdGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaENoaWxkKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksIHN0cjogU3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcclxuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5KSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XHJcbiAgICAgIGZuKGNoaWxkKTtcclxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xyXG4gICAgICAgICg8UHJvcGVydHlHcm91cD5jaGlsZCkuZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfYmluZFZpc2liaWxpdHkoKSB7XHJcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcclxuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcclxuICAgIHRoaXMuZm9yRWFjaENoaWxkUmVjdXJzaXZlKHByb3BlcnR5ID0+IHtcclxuICAgICAgcHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzUm9vdCgpIHtcclxuICAgIHJldHVybiB0aGlzID09PSB0aGlzLnJvb3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXRvbWljUHJvcGVydHkgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xyXG4gIGFic3RyYWN0IGZhbGxiYWNrVmFsdWUoKTogYW55O1xyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5mYWxsYmFja1ZhbHVlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuXHJcbiAgICBpZiAodGhpcy53aWRnZXQpIHRoaXMud2lkZ2V0LnJlc2V0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZhbGxiYWNrVmFsdWUoKSAhPT0gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVWYWx1ZSgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XHJcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICB2YWx1ZSA9XHJcbiAgICAgICAgICB2YWx1ZS5pbmRleE9mKCcuJykgPiAtMSA/IHBhcnNlRmxvYXQodmFsdWUpIDogcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWMucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XG4gIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xyXG4gIGZhbGxiYWNrVmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XHJcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcclxuICB0aWNrID0gMTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXHJcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgc2NoZW1hOiBhbnksXHJcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxyXG4gICAgZm9ybURhdGE6IHt9LFxyXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICkge1xyXG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xyXG4gICAgY29uc3QgcG9zID0gKyhzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aCk7XHJcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcclxuICAgIGlmIChpc05hTihwb3MpIHx8IHBvcyA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XHJcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xyXG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xyXG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCBbXTtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xyXG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xyXG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModGhpcy5fdmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVZhbHVlKCkge1xyXG4gICAgY29uc3QgdmFsdWU6IGFueVtdID0gW107XHJcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IE9iamVjdFByb3BlcnR5LCBfKSA9PiB7XHJcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgdmFsdWUucHVzaChPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0eS5mb3JtRGF0YSwgcHJvcGVydHkudmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcclxuICAgICAgdGhpcy5zY2hlbWEuaXRlbXMsXHJcbiAgICAgIHRoaXMudWkuJGl0ZW1zLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgdGhpcyxcclxuICAgICkgYXMgT2JqZWN0UHJvcGVydHk7XHJcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykucHVzaChuZXdQcm9wZXJ0eSk7XHJcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0UHJvcGVydGllcyh2YWx1ZTogYW55W10pIHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XHJcbiAgICAgIHByb3BlcnR5LnJlc2V0VmFsdWUoaXRlbSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRXJyb3JzKHBhdGg/OiBzdHJpbmcpIHtcclxuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xyXG4gICAgZWxzZSB0aGlzLl9vYmpFcnJvcnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogYWN0aW9uc1xyXG5cclxuICBhZGQodmFsdWU6IGFueSk6IEZvcm1Qcm9wZXJ0eSB7XHJcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkodmFsdWUpO1xyXG4gICAgbmV3UHJvcGVydHkucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGxpc3QgPSA8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzO1xyXG4gICAgdGhpcy5jbGVhckVycm9ycyhsaXN0W2luZGV4XS5wYXRoKTtcclxuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcclxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcclxuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGdldCBwcm9wZXJ0aWVzSWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXHJcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgc2NoZW1hOiBhbnksXHJcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxyXG4gICAgZm9ybURhdGE6IHt9LFxyXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICkge1xyXG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUHJvcGVydGllcygpIHtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xyXG4gICAgdGhpcy5fcHJvcGVydGllc0lkID0gW107XHJcbiAgICBsZXQgb3JkZXJlZFByb3BlcnRpZXM6IHN0cmluZ1tdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgb3JkZXJlZFByb3BlcnRpZXMgPSBvcmRlclByb3BlcnRpZXMoXHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcyksXHJcbiAgICAgICAgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSxcclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgSW52YWxpZCAke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICdyb290J30gb2JqZWN0IGZpZWxkIGNvbmZpZ3VyYXRpb246YCxcclxuICAgICAgICBlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgb3JkZXJlZFByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eUlkID0+IHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxyXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlJZF0sXHJcbiAgICAgICAgdGhpcy51aVsnJCcgKyBwcm9wZXJ0eUlkXSxcclxuICAgICAgICAodGhpcy5mb3JtRGF0YSB8fCB7fSlbcHJvcGVydHlJZF0sXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICBwcm9wZXJ0eUlkLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0uc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG4gIH1cclxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwge307XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5yZXNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XHJcbiAgfVxyXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGwgJiYgISFPYmplY3Qua2V5cyh0aGlzLnZhbHVlKS5sZW5ndGg7XHJcbiAgfVxyXG4gIF91cGRhdGVWYWx1ZSgpIHtcclxuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB7fTtcclxuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogYW55LCBwcm9wZXJ0eUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcclxuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE51bWJlclByb3BlcnR5IH0gZnJvbSAnLi9udW1iZXIucHJvcGVydHknO1xyXG5pbXBvcnQgeyBTdHJpbmdQcm9wZXJ0eSB9IGZyb20gJy4vc3RyaW5nLnByb3BlcnR5JztcclxuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcclxuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vYXJyYXkucHJvcGVydHknO1xyXG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IHJldHJpZXZlU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgKSB7fVxyXG5cclxuICBjcmVhdGVQcm9wZXJ0eShcclxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxyXG4gICAgZm9ybURhdGE6IHt9LFxyXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwID0gbnVsbCxcclxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXHJcbiAgKTogRm9ybVByb3BlcnR5IHtcclxuICAgIGxldCBuZXdQcm9wZXJ0eSA9IG51bGw7XHJcbiAgICBsZXQgcGF0aCA9ICcnO1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICBwYXRoICs9IHBhcmVudC5wYXRoO1xyXG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHBhdGggKz0gJy8nO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdhcnJheScpIHtcclxuICAgICAgICBwYXRoICs9IChwYXJlbnQgYXMgQXJyYXlQcm9wZXJ0eSkudGljaysrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArXHJcbiAgICAgICAgICAgIHBhcmVudC50eXBlLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhdGggPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XHJcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcclxuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZml4IHJlcXVpcmVkXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9wZXJ0eUlkICYmXHJcbiAgICAgICAgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZCkgIT09IC0xXHJcbiAgICAgICkge1xyXG4gICAgICAgIHVpLl9yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZml4IHRpdGxlXHJcbiAgICAgIGlmIChzY2hlbWEudGl0bGUgPT0gbnVsbCkgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlJZDtcclxuICAgICAgLy8gZml4IGRhdGVcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgfHwgc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSAmJlxyXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXHJcbiAgICAgICAgISh1aSBhcyBTRlVJU2NoZW1hSXRlbSkuZm9ybWF0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxyXG4gICAgICAgICAgdWkuZm9ybWF0ID1cclxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XHJcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlEYXRlTnVtYmVyRm9ybWF0O1xyXG4gICAgICAgIGVsc2UgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAndGltZScpXHJcbiAgICAgICAgICB1aS5mb3JtYXQgPVxyXG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aVRpbWVTdHJpbmdGb3JtYXRcclxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxyXG4gICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBOdW1iZXJQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IFN0cmluZ1Byb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE9iamVjdFByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhcnJheSc6XHJcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBBcnJheVByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZWZpbmVkIHR5cGUgJHtzY2hlbWEudHlwZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplUm9vdChuZXdQcm9wZXJ0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUm9vdChyb290UHJvcGVydHk6IFByb3BlcnR5R3JvdXApIHtcclxuICAgIC8vIHJvb3RQcm9wZXJ0eS5pbml0KCk7XHJcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xyXG5cclxuZGVjbGFyZSB2YXIgQWp2OiBhbnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XHJcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXHJcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxyXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xyXG4gIHByb3RlY3RlZCBhanY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChEZWxvbkZvcm1Db25maWcpXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XHJcbiAgICAgICAgZXJyb3JEYXRhUGF0aDogJ3Byb3BlcnR5JyxcclxuICAgICAgICBhbGxFcnJvcnM6IHRydWUsXHJcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdkYXRhLXVybCcsXHJcbiAgICAgIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXHJcbiAgICApO1xyXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdtb2JpbGUnLFxyXG4gICAgICAvXigwfFxcKz84NnwxNzk1MSk/MVswLTldezEwfSQvLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcclxuICAgICAgJ2lkLWNhcmQnLFxyXG4gICAgICAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcclxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xyXG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMpXHJcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBFcnJvckRhdGFbXSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXHJcbiAgICAgICAgLy8gc3RpbGwgZ2V0IGRpc3BsYXllZFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XHJcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xyXG4gIHByaXZhdGUgd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0V2lkZ2V0OiBhbnk7XHJcblxyXG4gIHNldERlZmF1bHQod2lkZ2V0OiBhbnkpIHtcclxuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcclxuICAgIHRoaXMud2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIGhhcyh0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5oYXModHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0c1t0eXBlXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5LFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICkge31cclxuXHJcbiAgY3JlYXRlV2lkZ2V0KFxyXG4gICAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICk6IENvbXBvbmVudFJlZjxXaWRnZXQ8YW55Pj4ge1xyXG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5Lmhhcyh0eXBlKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7dHlwZX1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRUeXBlKHR5cGUpO1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PGFueT4+KFxyXG4gICAgICBjb21wb25lbnRDbGFzcyxcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IGRpLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUywgcmVzb2x2ZUlmIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcclxuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5KFxyXG4gIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IGFueSxcclxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbikge1xyXG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFdpZGdldEZhY3RvcnksXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxyXG4gICAgfSxcclxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlLFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLnNmLXNlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxyXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xyXG4gIHByaXZhdGUgX2l0ZW06IGFueTtcclxuICBwcml2YXRlIF92YWxpZCA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfZGVmVWk6IFNGVUlTY2hlbWFJdGVtO1xyXG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xyXG5cclxuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IG51bGw7XHJcbiAgX2Zvcm1EYXRhOiBhbnk7XHJcbiAgX2J0bjogU0ZCdXR0b247XHJcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XHJcbiAgX3VpOiBTRlVJU2NoZW1hO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICAvKiogw6jCocKow6XCjcKVw6XCuMKDw6XCscKAw6/CvMKMw6fCrcKJw6XCkMKMIGBuekxheW91dGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppob3Jpem9udGFsICovXHJcbiAgQElucHV0KClcclxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgLyoqIEpTT04gU2NoZW1hICovXHJcbiAgQElucHV0KClcclxuICBzY2hlbWE6IFNGU2NoZW1hO1xyXG5cclxuICAvKiogVUkgU2NoZW1hICovXHJcbiAgQElucHV0KClcclxuICB1aTogU0ZVSVNjaGVtYTtcclxuXHJcbiAgLyoqIMOowqHCqMOlwo3ClcOpwrvCmMOowq7CpMOlwoDCvCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9ybURhdGE6IHt9O1xyXG5cclxuICAvKipcclxuICAgKiDDpsKMwonDqcKSwq5cclxuICAgKiAtIMOlwoDCvMOkwrjCuiBgbnVsbGAgw6bCiMKWIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwr3ChsOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxyXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBub25lYCDDqMKhwqjDp8KkwrrDpsKJwovDpcKKwqjDpsK3wrvDpcKKwqDDpsKMwonDqcKSwq7Dr8K8wozDpMK4wpTDpMK4wo3DpMK/wp3Dp8KVwpnDpcKuwrnDpcKZwqhcclxuICAgKiAtIMOkwr3Cv8OnwpTCqMOlwpvCusOlwq7CmiBgbGFiZWxgIMOmwqDCh8Onwq3CvsOlwq7CvcOlwrrCpsOmwpfCtsOvwrzCjMOowovCpcOmwpfCoCBgcmVuZGVyLmNsYXNzYCDDpcKIwpnDqcK7wpjDqMKuwqTDpMK4wrrDpcKxwoXDpMK4wq3Dp8KKwrbDpsKAwoFcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCrsKew6bCl8K2w6bCoMKhw6nCqsKMw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXHJcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXHJcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcbiAgLyoqIMOmwozCh8Olwq7CmsOowqHCqMOlwo3ClSBgYXV0b2NvbXBsZXRlYCDDpcKAwrwgKi9cclxuICBASW5wdXQoKVxyXG4gIGF1dG9jb21wbGV0ZTogJ29uJyB8ICdvZmYnO1xyXG5cclxuICAvKiogw6fCq8KLw6XCjcKzw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBmaXJzdFZpc3VhbCA9IHRydWU7XHJcblxyXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKowqHDpcK8wo8gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICdzZWFyY2gnOlxyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XHJcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgbW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcclxuXHJcbiAgLyoqIMOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xyXG5cclxuICAvKiogw6bCj8KQw6TCusKkw6jCocKow6XCjcKVw6bCl8K2w6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XHJcblxyXG4gIC8qKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xyXG5cclxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCu8KTw6bCnsKcw6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCisK2w6bCgMKBICovXHJcbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOowqHCqMOlwo3ClcOlwoDCvCAqL1xyXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdChlOiBFdmVudCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XHJcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcclxuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXHJcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5saXZlVmFsaWRhdGUgPSBvcHRpb25zLmxpdmVWYWxpZGF0ZTtcclxuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBvcHRpb25zLmZpcnN0VmlzdWFsO1xyXG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBvcHRpb25zLmF1dG9jb21wbGV0ZTtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ3NmJyk7XHJcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcclxuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcclxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XHJcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xyXG4gICAgY29uc3QgX3NjaGVtYSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKTtcclxuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XHJcblxyXG4gICAgY29uc3QgaW5GbiA9IChcclxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcclxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxyXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXHJcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcclxuICAgICkgPT4ge1xyXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoXHJcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLFxyXG4gICAgICAgICAgZGVmaW5pdGlvbnMsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB1aSA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7IHdpZGdldDogcHJvcGVydHkudHlwZSB9LFxyXG4gICAgICAgICAgcHJvcGVydHkuZm9ybWF0ICYmIEZPUk1BVE1BUFNbcHJvcGVydHkuZm9ybWF0XSxcclxuICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwsXHJcbiAgICAgICAgICAhcHJvcGVydHkudWkgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiZcclxuICAgICAgICAgIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IHsgd2lkZ2V0OiAnc2VsZWN0JyB9XHJcbiAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgIHRoaXMuX2RlZlVpLFxyXG4gICAgICAgICAgcHJvcGVydHkudWksXHJcbiAgICAgICAgICB1aVNjaGVtYVt1aUtleV0sXHJcbiAgICAgICAgKSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcclxuICAgICAgICAvLyDDp8K7wqfDpsKJwr/Dp8KIwrbDqMKKwoLDp8KCwrnDpcK4woPDpcKxwoDDpcKxwp7DpsKAwqdcclxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XHJcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWxGaXhlZCkge1xyXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxyXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICA/IDVcclxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XHJcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICA/IDE5XHJcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XHJcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcclxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xyXG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xyXG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aS53aWRnZXQgPT09ICdkYXRlJyAmJiB1aS5lbmQgIT0gbnVsbCAmJiBwYXJlbnRTY2hlbWEpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHBhcmVudFNjaGVtYS5wcm9wZXJ0aWVzW3VpLmVuZF07XHJcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGVFbmRQcm9wZXJ0eS51aSwge1xyXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1aS5lbmQgPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XHJcblxyXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xyXG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XHJcbiAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddID0gdWlSZXNbdWlLZXldWyckaXRlbXMnXSB8fCB7fTtcclxuICAgICAgICAgIGluRm4oXHJcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcclxuICAgICAgICAgICAgKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSlbJyRpdGVtcyddIHx8IHt9LFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbklmRm4gPSAoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKSA9PiB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1trZXldO1xyXG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xyXG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcclxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcclxuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xyXG4gICAgdGhpcy5fZGVmVWkgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICA8U0ZVSVNjaGVtYUl0ZW0+e1xyXG4gICAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxyXG4gICAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxyXG4gICAgICAgIGxpdmVWYWxpZGF0ZTogdGhpcy5saXZlVmFsaWRhdGUsXHJcbiAgICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMub3B0aW9ucy51aSxcclxuICAgICAgX3NjaGVtYS51aSxcclxuICAgICAgdGhpcy51aVsnKiddLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyByb290XHJcbiAgICB0aGlzLl91aSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZlVpKTtcclxuXHJcbiAgICBpbkZuKF9zY2hlbWEsIF9zY2hlbWEsIHRoaXMudWksIHRoaXMudWksIHRoaXMuX3VpKTtcclxuXHJcbiAgICAvLyBjb25kXHJcbiAgICByZXNvbHZlSWYoX3NjaGVtYSwgdGhpcy5fdWkpO1xyXG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcclxuXHJcbiAgICB0aGlzLl9zY2hlbWEgPSBfc2NoZW1hO1xyXG5cclxuICAgIGlmICh0aGlzLl91aS5kZWJ1Zykge1xyXG4gICAgICBkaSgnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XHJcbiAgICB0aGlzLl9idG4gPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7IHJlbmRlcjoge30gfSxcclxuICAgICAgdGhpcy5sb2NhbGUsXHJcbiAgICAgIHRoaXMub3B0aW9ucy5idXR0b24sXHJcbiAgICAgIHRoaXMuYnV0dG9uLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XHJcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XHJcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge1xyXG4gICAgICAgICAgb2Zmc2V0OiBidG5VaS5zcGFuTGFiZWwsXHJcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpeGVkIGxhYmVsXHJcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCkge1xyXG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcclxuICAgICAgfVxyXG4gICAgICAvLyDDpcKbwrrDpcKuwprDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDpsKgwrfDpcK8wo/Dr8K8wozDpcKIwpnDqcK7wpjDqMKuwqTDpcKxwoXDpMK4wq1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLl9idG4ucmVuZGVyLmNsYXNzICYmXHJcbiAgICAgICAgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbW9kZSkge1xyXG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSBkaSgnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMudmFsaWRhdG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xyXG4gICAgaWYgKCFwcm9wZXJ0eSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYMOmwpzCqsOmwonCvsOlwojCsMOowrfCr8Olwr7ChMOvwrzCmiR7cGF0aH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihgw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6fCm8K4w6XCkMKMw6jCh8Kqw6XCrsKaw6TCucKJw6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XHJcbiAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XHJcbiAgICBwdWkuX3JlbmRlciA9IHRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xyXG4gICAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XHJcbiAgICAgIGlmICghcHVpLl9yZW5kZXIpIHB1aS5fcmVuZGVyID0gdHBsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0b3IoKSB7XHJcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5fcnVuVmFsaWRhdGlvbigpO1xyXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkuZXJyb3JzO1xyXG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcclxuICAgIGlmICghdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCiMK3w6bClsKwIFNjaGVtYcOvwrzCjMOkwrjCgMOowojCrMOpwpzCgMOowqbCgcOlworCqMOmwoDCgcOkwr/CrsOmwpTCuSBTY2hlbWEgw6bCn8KQw6TCuMKqw6XCgMK8w6bCl8K2w6XCj8Kvw6TCu8Klw6bClsK5w6TCvsK/w6jCsMKDw6fClMKoXHJcbiAgICovXHJcbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKSB7XHJcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcclxuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xyXG5cclxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XHJcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcclxuXHJcbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XHJcblxyXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcclxuXHJcbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xyXG5cclxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xyXG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XHJcblxyXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXHJcbiAgICAgIHRoaXMuX3NjaGVtYSxcclxuICAgICAgdGhpcy5fdWksXHJcbiAgICAgIHRoaXMuZm9ybURhdGEsXHJcbiAgICApO1xyXG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5faXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybURhdGEsIHZhbHVlKTtcclxuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XHJcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpVcclxuICAgKiBAcGFyYW0gW2VtaXRdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkSBgZm9ybVJlc2V0YCDDpMK6wovDpMK7wrbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXHJcbiAgICovXHJcbiAgcmVzZXQoZW1pdCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XHJcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcclxuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5cclxubGV0IG5leHRVbmlxdWVJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICN0YXJnZXQ+PC9uZy10ZW1wbGF0ZT5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0ZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxhbnk+O1xyXG4gIHdpZGdldDogV2lkZ2V0PGFueT4gPSBudWxsO1xyXG5cclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBASW5wdXQoKSBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksXHJcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgb25XaWRnZXRJbnN0YW5jaWF0ZWQod2lkZ2V0OiBXaWRnZXQ8YW55Pikge1xyXG4gICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XHJcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xyXG5cclxuICAgIGNvbnN0IHVpID0gdGhpcy5mb3JtUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW07XHJcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcclxuICAgIHRoaXMud2lkZ2V0LnNjaGVtYSA9IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYTtcclxuICAgIHRoaXMud2lkZ2V0LnVpID0gdWk7XHJcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWRnZXQuZmlyc3RWaXN1YWwgPSB1aS5maXJzdFZpc3VhbDtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LndpZGdldCA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5nT25EZXN0cm95KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KFxyXG4gICAgICB0aGlzLmNvbnRhaW5lcixcclxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnVpLndpZGdldCB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWEudHlwZSkgYXMgc3RyaW5nLFxyXG4gICAgKTtcclxuICAgIHRoaXMub25XaWRnZXRJbnN0YW5jaWF0ZWQodGhpcy5yZWYuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS51aS5fX2Rlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWYuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZml4ZWQtbGFiZWxdJyB9KVxyXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnVtOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xyXG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcclxuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHdpZGdldEVsLCAnc2YtZml4ZWQnKTtcclxuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xyXG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcclxuICAgIGlmIChsYWJlbEVsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICd3aWR0aCcsIHVuaXQpO1xyXG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWFyZ2luLWxlZnQnLCB1bml0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmVsID0gZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cclxuICAgIDxuei1jb2wgKm5nSWY9XCJzaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxyXG4gICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XHJcbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxyXG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cclxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XHJcbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XHJcbiAgICAgICAgICA8L256LXRvb2x0aXA+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9uei1jb2w+XHJcbiAgICA8bnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cInVpLnNwYW5Db250cm9sXCIgW256T2Zmc2V0XT1cInVpLm9mZnNldENvbnRyb2xcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxuei1mb3JtLWV4dHJhICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L256LWZvcm0tZXh0cmE+XHJcbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbnotY29sPlxyXG4gIDwvbnotZm9ybS1pdGVtPmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRkl0ZW1XcmFwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XHJcbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWFJdGVtO1xyXG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2YuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NmLXRlbXBsYXRlXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRlRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgcHJpdmF0ZSB0YWJsZTogU0ZDb21wb25lbnQsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFibGUuX2FkZFRwbChcclxuICAgICAgdGhpcy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMucGF0aCA6IGAvYCArIHRoaXMucGF0aCxcclxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3B0aW9uYWwsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBJbmplY3QsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xyXG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGZvcm1Qcm9wZXJ0eTogVDtcclxuICBlcnJvcjogc3RyaW5nO1xyXG4gIHNob3dFcnJvciA9IGZhbHNlO1xyXG4gIGlkID0gJyc7XHJcbiAgc2NoZW1hOiBTRlNjaGVtYTtcclxuICB1aTogU0ZVSVNjaGVtYUl0ZW07XHJcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNscygpIHtcclxuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZWFkT25seTtcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcclxuICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcclxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnVpLmRlYnVnKSBkaSgnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XHJcblxyXG4gICAgICAgIC8vIMOkwrjCjcOmwpjCvsOnwqTCusOpwqbClsOmwqzCocOmwqDCocOpwqrCjMOowqfChsOowqfCiVxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuc2hvd0Vycm9yID8gZXJyb3JzWzBdLm1lc3NhZ2UgOiAnJztcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMudWkuZGVidWcpIHtcclxuICAgICAgZGkoJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcmVzZXQodmFsdWU6IGFueSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLW9iamVjdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZDsgZWxzZSBub0dyaWRcIj5cclxuICAgIDxuei1yb3cgW256R3V0dGVyXT1cImdyaWQuZ3V0dGVyXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpLnByb3BlcnR5LnZpc2libGUgJiYgaS5zaG93XCI+XHJcbiAgICAgICAgICA8bnotY29sXHJcbiAgICAgICAgICAgIFtuelNwYW5dPVwiaS5ncmlkLnNwYW5cIiBbbnpPZmZzZXRdPVwiaS5ncmlkLm9mZnNldFwiXHJcbiAgICAgICAgICAgIFtuelhzXT1cImkuZ3JpZC54c1wiIFtuelNtXT1cImkuZ3JpZC5zbVwiIFtuek1kXT1cImkuZ3JpZC5tZFwiXHJcbiAgICAgICAgICAgIFtuekxnXT1cImkuZ3JpZC5sZ1wiIFtuelhsXT1cImkuZ3JpZC54bFwiIFtuelhYbF09XCJpLmdyaWQueHhsXCI+XHJcbiAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxyXG4gICAgICAgICAgPC9uei1jb2w+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uei1yb3c+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNub0dyaWQ+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cclxuICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLXRlbXBsYXRlPmAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdyaWQ6IFNGR3JpZFNjaGVtYTtcclxuICBsaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ3JpZCA9IHRoaXMudWkuZ3JpZDtcclxuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzSWQpIHtcclxuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzW2tleV0gYXMgRm9ybVByb3BlcnR5O1xyXG4gICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgdGhpcy5ncmlkIHx8IHt9LFxyXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcclxuICAgICAgICBzaG93OiBwcm9wZXJ0eS51aS5oaWRkZW4gPT09IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG56LWZvcm0taXRlbT5cclxuICAgIDxuei1jb2wgKm5nSWY9XCJzY2hlbWEudGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxyXG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cclxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XHJcbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XHJcbiAgICAgICAgICA8L256LXRvb2x0aXA+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256VHlwZV09XCJhZGRUeXBlXCIgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCIgKGNsaWNrKT1cImFkZEl0ZW0oKVwiIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWNvbD5cclxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuXHJcbiAgICAgICAgPG56LXJvdyBjbGFzcz1cInNmLWFycmF5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxyXG4gICAgICAgICAgICA8bnotY29sICpuZ0lmPVwiaS52aXNpYmxlICYmICFpLnVpLmhpZGRlblwiIFtuelNwYW5dPVwiYXJyYXlTcGFuXCIgW2F0dHIuZGF0YS1pbmRleF09XCJpZHhcIiBjbGFzcz1cInNmLWFycmF5LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8bnotY2FyZD5cclxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicmVtb3ZlVGl0bGVcIiBjbGFzcz1cInJlbW92ZVwiIChjbGljayk9XCJyZW1vdmVJdGVtKGlkeClcIiBbYXR0ci50aXRsZV09XCJyZW1vdmVUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1kZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9uei1jYXJkPlxyXG4gICAgICAgICAgICA8L256LWNvbD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotcm93PlxyXG5cclxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxyXG4gICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1jb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFkZFRpdGxlOiBzdHJpbmc7XHJcbiAgYWRkVHlwZTogc3RyaW5nO1xyXG4gIHJlbW92ZVRpdGxlOiBzdHJpbmc7XHJcbiAgYXJyYXlTcGFuID0gODtcclxuXHJcbiAgZ2V0IGFkZERpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5zY2hlbWEubWF4SXRlbXMgJiZcclxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXMgYXMgYW55W10pLmxlbmd0aCA+PSB0aGlzLnNjaGVtYS5tYXhJdGVtc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudWkuZ3JpZCAmJiB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuKVxyXG4gICAgICB0aGlzLmFycmF5U3BhbiA9IHRoaXMudWkuZ3JpZC5hcnJheVNwYW47XHJcblxyXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMudWkuYWRkVGl0bGUgfHwgJ8OmwrfCu8OlworCoCc7XHJcbiAgICB0aGlzLmFkZFR5cGUgPSB0aGlzLnVpLmFkZFR5cGUgfHwgJ2Rhc2hlZCc7XHJcbiAgICB0aGlzLnJlbW92ZVRpdGxlID1cclxuICAgICAgdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgJ8OnwqfCu8OpwpnCpCc7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKCkge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuYWRkKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNpcHQ+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dFxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcclxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cInVpLmF1dG9jb21wbGV0ZVwiXHJcbiAgICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2FkZG9uJzsgZWxzZSBpcHRcIj5cclxuICAgICAgPG56LWlucHV0LWdyb3VwXHJcbiAgICAgICAgW256QWRkT25CZWZvcmVdPVwidWkuYWRkT25CZWZvcmVcIiBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxyXG4gICAgICAgIFtuekFkZE9uQmVmb3JlSWNvbl09XCJ1aS5hZGRPbkJlZm9yZUljb25cIiBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXHJcbiAgICAgICAgW256UHJlZml4XT1cInVpLnByZWZpeFwiIFtuelByZWZpeEljb25dPVwidWkucHJlZml4SWNvblwiXHJcbiAgICAgICAgW256U3VmZml4XT1cInVpLnN1ZmZpeFwiIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnR5cGUgPSAhIShcclxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVyIHx8XHJcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcclxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVySWNvbiB8fFxyXG4gICAgICB0aGlzLnVpLmFkZE9uQmVmb3JlSWNvbiB8fFxyXG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxyXG4gICAgICB0aGlzLnVpLnByZWZpeEljb24gfHxcclxuICAgICAgdGhpcy51aS5zdWZmaXggfHxcclxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXHJcbiAgICApXHJcbiAgICAgID8gJ2FkZG9uJ1xyXG4gICAgICA6ICcnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICA8bnotaW5wdXQtbnVtYmVyXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgW256TWluXT1cIm1pblwiXHJcbiAgICAgIFtuek1heF09XCJtYXhcIlxyXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxyXG4gICAgICBbbnpGb3JtYXR0ZXJdPVwiZm9ybWF0dGVyXCJcclxuICAgICAgW256UGFyc2VyXT1cInBhcnNlclwiXHJcbiAgICAgIFtuelByZWNpc2lvbl09XCJ1aS5wcmVjaXNpb25cIlxyXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciB8fCAnJ1wiPlxyXG4gICAgPC9uei1pbnB1dC1udW1iZXI+XHJcbiAgPC9zZi1pdGVtLXdyYXA+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIG1heDogbnVtYmVyO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBmb3JtYXR0ZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuICBwYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XHJcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLm1pbiA9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtID8gc2NoZW1hLm1pbmltdW0gKyAxIDogc2NoZW1hLm1pbmltdW07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLm1heCA9IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtID8gc2NoZW1hLm1heGltdW0gLSAxIDogc2NoZW1hLm1heGltdW07XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0ZXAgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCAxO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcclxuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcclxuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcclxuICAgICAgdGhpcy5zdGVwID0gTWF0aC50cnVuYyh0aGlzLnN0ZXApO1xyXG4gICAgfVxyXG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XHJcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gO1xyXG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xyXG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt2YWx1ZX0gJHt1aS51bml0fWA7XHJcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCAke3VpLnVuaXR9YCwgJycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XHJcbiAgICBpZiAodWkucGFyc2VyKSB0aGlzLnBhcnNlciA9IHVpLnBhcnNlcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxyXG5cclxuICAgICAgPG56LW1vbnRoLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiXHJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcclxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcclxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcclxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcclxuICAgICAgPjwvbnotbW9udGgtcGlja2VyPlxyXG5cclxuICAgICAgPG56LXdlZWstcGlja2VyICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvbnotd2Vlay1waWNrZXI+XHJcblxyXG4gICAgICA8bnotcmFuZ2UtcGlja2VyICpuZ1N3aXRjaENhc2U9XCIncmFuZ2UnXCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxyXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxyXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXHJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxyXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxyXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XHJcblxyXG4gICAgICA8bnotZGF0ZS1waWNrZXIgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcclxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXHJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxyXG4gICAgICAgIFtuelNob3dUb2RheV09XCJpLnNob3dUb2RheVwiXHJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXHJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbW9kZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XHJcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xyXG4gIGZvcm1hdDogc3RyaW5nO1xyXG4gIGk6IGFueTtcclxuICBmbGF0UmFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XHJcbiAgICB0aGlzLm1vZGUgPSB1aS5tb2RlIHx8ICdkYXRlJztcclxuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XHJcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcclxuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcclxuICAgIH1cclxuICAgIGlmICghdWkuZGlzcGxheUZvcm1hdCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVpLmRpc3BsYXlGb3JtYXQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxyXG4gICAgICA/IHVpLmZvcm1hdFxyXG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgPyAneCdcclxuICAgICAgICA6ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcclxuICAgIC8vIMOlwoXCrMOlwoXCsUFQSVxyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2wodWkuYWxsb3dDbGVhciwgdHJ1ZSksXHJcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXHJcbiAgICAgIHNob3dUb2RheTogdG9Cb29sKHVpLnNob3dUb2RheSwgdHJ1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgID8gdmFsdWUubWFwKGQgPT4gZm9ybWF0KGQsIHRoaXMuZm9ybWF0KSlcclxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KTtcclxuXHJcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy51aS5vbk9wZW5DaGFuZ2UpIHRoaXMudWkub25PcGVuQ2hhbmdlKHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBfb2sodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5lbmRQcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei10aW1lLXBpY2tlclxyXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgW256Rm9ybWF0XT1cImkuZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgIFtuekFsbG93RW1wdHldPVwiaS5hbGxvd0VtcHR5XCJcclxuICAgICAgW256Q2xlYXJUZXh0XT1cImkuY2xlYXJUZXh0XCJcclxuICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJpLmRlZmF1bHRPcGVuVmFsdWVcIlxyXG4gICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cInVpLmRpc2FibGVkSG91cnNcIlxyXG4gICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwidWkuZGlzYWJsZWRNaW51dGVzXCJcclxuICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInVpLmRpc2FibGVkU2Vjb25kc1wiXHJcbiAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaS5oaWRlRGlzYWJsZWRPcHRpb25zXCJcclxuICAgICAgW256SG91clN0ZXBdPVwiaS5ob3VyU3RlcFwiXHJcbiAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiaS5taW51dGVTdGVwXCJcclxuICAgICAgW256U2Vjb25kU3RlcF09XCJpLnNlY29uZFN0ZXBcIlxyXG4gICAgICBbbnpQb3B1cENsYXNzTmFtZV09XCJ1aS5wb3B1cENsYXNzTmFtZVwiXHJcbiAgICAgID5cclxuICAgIDwvbnotdGltZS1waWNrZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGlzcGxheVZhbHVlOiBEYXRlID0gbnVsbDtcclxuICBmb3JtYXQ6IHN0cmluZztcclxuICBpOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xyXG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcclxuICAgICAgPyB1aS5mb3JtYXRcclxuICAgICAgOiB0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gJ3gnXHJcbiAgICAgICAgOiAnSEg6bW06c3MnO1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICBkaXNwbGF5Rm9ybWF0OiB1aS5kaXNwbGF5Rm9ybWF0IHx8ICdISDptbTpzcycsXHJcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcclxuICAgICAgY2xlYXJUZXh0OiB1aS5jbGVhclRleHQgfHwgJ8OmwrjChcOpwpnCpCcsXHJcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHVpLmRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSxcclxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcclxuICAgICAgaG91clN0ZXA6IHVpLmhvdXJTdGVwIHx8IDEsXHJcbiAgICAgIG1pbnV0ZVN0ZXA6IHVpLm56TWludXRlU3RlcCB8fCAxLFxyXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xyXG5cclxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcclxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnOicpLmxlbmd0aCA8PSAxKSB2YWx1ZSArPSAnOjAwJztcclxuICAgICAgdiA9IG5ldyBEYXRlKGAxOTcwLTEtMSBgICsgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2O1xyXG4gIH1cclxuXHJcbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShcclxuICAgICAgICBEYXRlLlVUQyhcclxuICAgICAgICAgIDE5NzAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMSxcclxuICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksXHJcbiAgICAgICAgICB2YWx1ZS5nZXRNaW51dGVzKCksXHJcbiAgICAgICAgICB2YWx1ZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgKSxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZShmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbnpOYW1lXT1cImlkXCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdHlsZVR5cGVcIj5cclxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcclxuICAgICAgICAgIG56LXJhZGlvXHJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cclxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcclxuICAgICAgICAgIG56LXJhZGlvLWJ1dHRvblxyXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24ubGFiZWxcIj48L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXJhZGlvLWdyb3VwPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcclxuICBkYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHN0eWxlVHlwZTogYm9vbGVhbjtcclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdHlsZVR5cGUgPSAodGhpcy51aS5zdHlsZVR5cGUgfHwgJ2RlZmF1bHQnKSA9PT0gJ2RlZmF1bHQnO1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy10ZW1wbGF0ZSAjYWxsPlxyXG4gICAgPGxhYmVsICpuZ0lmPVwidWkuY2hlY2tBbGxcIiBuei1jaGVja2JveCBjbGFzcz1cIm1yLXNtXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJhbGxDaGVja2VkXCJcclxuICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQWxsQ2hlY2tlZCgkZXZlbnQpXCI+XHJcbiAgICAgIHt7IHVpLmNoZWNrQWxsVGV4dCB8fCAnw6XChcKow6nCgMKJJyB9fVxyXG4gICAgPC9sYWJlbD5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuei1mb3JtLWl0ZW0gW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZHRoXCI+XHJcbiAgICA8bnotY29sICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCIgW256U3Bhbl09XCJsYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxyXG4gICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XHJcbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxyXG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cclxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XHJcbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XHJcbiAgICAgICAgICA8L256LXRvb2x0aXA+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9uei1jb2w+XHJcbiAgICA8bnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cImNvbnRyb2xcIiBbbnpPZmZzZXRdPVwib2Zmc2V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9zZXRWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJzY2hlbWEudGl0bGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cclxuICAgICAgICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L256LXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gPT09IDBcIj5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8bnotY2hlY2tib3gtZ3JvdXAgW25nTW9kZWxdPVwiZGF0YVwiIChuZ01vZGVsQ2hhbmdlKT1cIm5vdGlmeVNldCgpXCI+PC9uei1jaGVja2JveC1ncm91cD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gIT09IDBcIj5cclxuICAgICAgICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlciBjbGFzcz1cImNoZWNrYm94LWdyaWQtbGlzdFwiIChuek9uQ2hhbmdlKT1cImdyb3VwSW5HcmlkQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxuei1yb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdJZj1cInVpLmNoZWNrQWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvbnotY29sPlxyXG4gICAgICAgICAgICAgICAgICA8bnotY29sIFtuelNwYW5dPVwiZ3JpZF9zcGFuXCIgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbbnpWYWx1ZV09XCJpLnZhbHVlXCIgW25nTW9kZWxdPVwiaS5jaGVja2VkXCIgW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiPnt7aS5sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9uei1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L256LXJvdz5cclxuICAgICAgICAgICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cclxuICAgICAgICAgIDxuei1mb3JtLWV4cGxhaW4gKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIj57e2Vycm9yfX08L256LWZvcm0tZXhwbGFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWNvbD5cclxuICA8L256LWZvcm0taXRlbT5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcclxuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xyXG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcclxuICBpbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XHJcbiAgbGFiZWw6IG51bWJlcjtcclxuICBjb250cm9sOiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnVpLnNwYW5MYWJlbDtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnVpLnNwYW5Db250cm9sO1xyXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5sYWJlbCA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMudWkuc3BhbkxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfc2V0VmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMubm90aWZ5Q2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vdGlmeVNldCgpIHtcclxuICAgIGNvbnN0IGNoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xyXG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcclxuICAgIHRoaXMubm90aWZ5Q2hhbmdlKGNoZWNrTGlzdCk7XHJcbiAgfVxyXG5cclxuICBncm91cEluR3JpZENoYW5nZSh2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChcclxuICAgICAgaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdmFsdWVzLmluZGV4T2YoaXRlbS52YWx1ZSkgIT09IC0xKSxcclxuICAgICk7XHJcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xyXG4gIH1cclxuXHJcbiAgb25BbGxDaGVja2VkKGU6IEV2ZW50KSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdGhpcy5hbGxDaGVja2VkKSk7XHJcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcclxuICAgIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IGZhbHNlKSkge1xyXG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcclxuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XHJcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHJlcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtYm9vbGVhbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAgPG56LXN3aXRjaFxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuekNoZWNrZWRDaGlsZHJlbl09XCJ1aS5jaGVja2VkQ2hpbGRyZW5cIlxyXG4gICAgICBbbnpVbkNoZWNrZWRDaGlsZHJlbl09XCJ1aS51bkNoZWNrZWRDaGlsZHJlblwiPlxyXG4gICAgPC9uei1zd2l0Y2g+XHJcbiAgPC9zZi1pdGVtLXdyYXA+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPHRleHRhcmVhIG56LWlucHV0XHJcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnpBdXRvc2l6ZV09XCJhdXRvc2l6ZVwiPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYXV0b3NpemU6IGFueSA9IHRydWU7XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy51aS5hdXRvc2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0aGlzLnVpLmF1dG9zaXplO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotc2VsZWN0XHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxyXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcclxuICAgICAgW256U2VydmVyU2VhcmNoXT1cImkuc2VydmVyU2VhcmNoXCJcclxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnRcIlxyXG4gICAgICBbbnpNb2RlXT1cImkubW9kZVwiXHJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXHJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcclxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobnpPblNlYXJjaCk9XCJzZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoYXNHcm91cFwiPlxyXG4gICAgICAgIDxuei1vcHRpb25cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGRhdGFcIlxyXG4gICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXHJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcclxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cclxuICAgICAgICA8L256LW9wdGlvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNHcm91cFwiPlxyXG4gICAgICAgIDxuei1vcHRpb24tZ3JvdXAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiIFtuekxhYmVsXT1cImkubGFiZWxcIj5cclxuICAgICAgICAgIDxuei1vcHRpb25cclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcclxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAgPC9uei1vcHRpb24+XHJcbiAgICAgICAgPC9uei1vcHRpb24tZ3JvdXA+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uei1zZWxlY3Q+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpOiBhbnk7XHJcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XHJcbiAgaGFzR3JvdXAgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGFsbG93Q2xlYXI6IHRoaXMudWkuYWxsb3dDbGVhcixcclxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKSxcclxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IHRoaXMudWkuZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcclxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodGhpcy51aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxyXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNlcnZlclNlYXJjaCwgZmFsc2UpLFxyXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiB0aGlzLnVpLm1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXHJcbiAgICAgIG1vZGU6IHRoaXMudWkubW9kZSB8fCAnZGVmYXVsdCcsXHJcbiAgICAgIG5vdEZvdW5kQ29udGVudDogdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOmwrPClcOmwonCvsOlwojCsCcsXHJcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNob3dTZWFyY2gsIHRydWUpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5oYXNHcm91cCA9IGxpc3QuZmlsdGVyKHcgPT4gdy5ncm91cCA9PT0gdHJ1ZSkubGVuZ3RoID4gMDtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UodmFsdWVzOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcclxuICB9XHJcblxyXG4gIG9wZW5DaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkgdGhpcy51aS5vcGVuQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaENoYW5nZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XHJcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Cb3R0b20odmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20odmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgdG9Cb29sLCBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmVlLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LXRyZWUtc2VsZWN0XG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256RHJvcGRvd25TdHlsZV09XCJ1aS5kcm9wZG93blN0eWxlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJpLmNoZWNrYWJsZVwiXG4gICAgICBbbnpTaG93RXhwYW5kXT1cImkuc2hvd0V4cGFuZFwiXG4gICAgICBbbnpTaG93TGluZV09XCJpLnNob3dMaW5lXCJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJpLmFzeW5jRGF0YVwiXG4gICAgICBbbnpOb2Rlc109XCJkYXRhXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRBbGxdPVwiaS5kZWZhdWx0RXhwYW5kQWxsXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRlZEtleXNdPVwidWkuZGVmYXVsdEV4cGFuZGVkS2V5c1wiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJlZS1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBwcml2YXRlIGRjKCkge1xuICAgIC8vIE11c2Ugd2FpdCBgbnotdHJlZS1zZWxlY3RgIHdyaXRlIHZhbHVlc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbkRhdGEobGlzdDogU0ZTY2hlbWFFbnVtW10pIHtcbiAgICByZXR1cm4gbGlzdC5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShkZWVwQ29weShub2RlKSBhcyBhbnkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdWkuYWxsb3dDbGVhcixcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh1aS5zaG93U2VhcmNoLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh1aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh1aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgY2hlY2thYmxlOiB0b0Jvb2wodWkuY2hlY2thYmxlLCBmYWxzZSksXG4gICAgICBzaG93RXhwYW5kOiB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSksXG4gICAgICBzaG93TGluZTogdG9Cb29sKHVpLnNob3dMaW5lLCBmYWxzZSksXG4gICAgICBhc3luY0RhdGE6IHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgPT09ICdmdW5jdGlvbicsXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSlcbiAgICAgIC5waXBlKG1hcChsaXN0ID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZXhwYW5kQ2hhbmdlKGU6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHVpLmV4cGFuZENoYW5nZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgIHVpLmV4cGFuZENoYW5nZShlKVxuICAgICAgLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGUubm9kZS5hZGRDaGlsZHJlbihyZXMpO1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotdGFnXHJcbiAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIlxyXG4gICAgICBuek1vZGU9XCJjaGVja2FibGVcIlxyXG4gICAgICBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiXHJcbiAgICAgIChuekFmdGVyQ2xvc2UpPVwiX2FmdGVyQ2xvc2UoKVwiXHJcbiAgICAgIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIlxyXG4gICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCI+XHJcbiAgICAgIHt7aS5sYWJlbH19XHJcbiAgICA8L256LXRhZz5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xyXG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSkge1xyXG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcclxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgX2FmdGVyQ2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy51aS5hZnRlckNsb3NlKSB0aGlzLnVpLmFmdGVyQ2xvc2UoKTtcclxuICB9XHJcblxyXG4gIF9jbG9zZShlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnVpLm9uQ2xvc2UpIHRoaXMudWkub25DbG9zZShlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcclxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFVwbG9hZEZpbGUsIFVwbG9hZENoYW5nZVBhcmFtLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotdXBsb2FkXHJcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcclxuICAgICAgW256RmlsZUxpc3RdPVwiZmlsZUxpc3RcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuekFjdGlvbl09XCJpLmFjdGlvblwiXHJcbiAgICAgIFtuekFjY2VwdF09XCJpLmFjY2VwdFwiXHJcbiAgICAgIFtuekxpbWl0XT1cImkubGltaXRcIlxyXG4gICAgICBbbnpTaXplXT1cImkuc2l6ZVwiXHJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxyXG4gICAgICBbbnpIZWFkZXJzXT1cInVpLmhlYWRlcnNcIlxyXG4gICAgICBbbnpEYXRhXT1cInVpLmRhdGFcIlxyXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcclxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXHJcbiAgICAgIFtuek5hbWVdPVwiaS5uYW1lXCJcclxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXHJcbiAgICAgIFtueldpdGhDcmVkZW50aWFsc109XCJpLndpdGhDcmVkZW50aWFsc1wiXHJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxyXG4gICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxyXG4gICAgICAobnpDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcGx1c1wiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkcmFnJ1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWluYm94XCI+PC9pPjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiIFtpbm5lckhUTUxdPVwiaS5oaW50XCI+PC9wPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tdXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uei11cGxvYWQ+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpOiBhbnk7XHJcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xyXG4gIGJ0blR5cGUgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSkge1xyXG4gICAgc3VwZXIoY2QpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIHR5cGU6IHRoaXMudWkudHlwZSB8fCAnc2VsZWN0JyxcclxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfDp8KCwrnDpcKHwrvDpMK4worDpMK8wqAnLFxyXG4gICAgICBhY3Rpb246IHRoaXMudWkuYWN0aW9uIHx8ICcnLFxyXG4gICAgICBhY2NlcHQ6IHRoaXMudWkuYWNjZXB0IHx8ICcnLFxyXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxyXG4gICAgICBzaXplOiB0aGlzLnVpLnNpemUgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5zaXplLFxyXG4gICAgICBmaWxlVHlwZTogdGhpcy51aS5maWxlVHlwZSB8fCAnJyxcclxuICAgICAgbGlzdFR5cGU6IHRoaXMudWkubGlzdFR5cGUgfHwgJ3RleHQnLFxyXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcclxuICAgICAgbmFtZTogdGhpcy51aS5uYW1lIHx8ICdmaWxlJyxcclxuICAgICAgc2hvd1VwbG9hZExpc3Q6IHRvQm9vbCh0aGlzLnVpLnNob3dVcGxvYWRMaXN0LCB0cnVlKSxcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcclxuICAgICAgcmVzUmVOYW1lOiAodGhpcy51aS5yZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcclxuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XHJcbiAgICAgIHRoaXMuaS5saXN0VHlwZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcclxuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYMOlwo3ClcOlwofCu8OmwojClsOmwovClsOlworCqMOmwpbCh8OkwrvCtsOlwojCsMOowq/CpcOlwozCusOlwp/Cn8OkwrjCisOkwrzCoGA7XHJcbiAgICAgIHRoaXMuaS5oaW50ID1cclxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYMOmwpTCr8OmwozCgcOlwo3ClcOkwrjCqsOmwojClsOmwonCucOpwofCj8OvwrzCjMOkwrjCpcOnwqbCgcOkwrjCisOkwrzCoMOlwoXCrMOlwo/CuMOmwpXCsMOmwo3CrsOmwojClsOlwoXCtsOkwrvClsOlwq7CicOlwoXCqMOmwpbCh8OkwrvCtmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcclxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XHJcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcclxuICAgIHRoaXMubm90aWZ5KGFyZ3MuZmlsZUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KHRoaXMuZmlsZUxpc3QpO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm90aWZ5KGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pIHtcclxuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XHJcbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXHJcbiAgICApO1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXHJcbiAgICAgIHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICB0aGlzLm1vZGFsU3J2XHJcbiAgICAgIC5jcmVhdGUoe1xyXG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxyXG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcclxuICAgICAgICBuekZvb3RlcjogbnVsbCxcclxuICAgICAgfSlcclxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi10cmFuc2ZlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei10cmFuc2ZlclxyXG4gICAgICBbbnpEYXRhU291cmNlXT1cImxpc3RcIlxyXG4gICAgICBbbnpUaXRsZXNdPVwiaS50aXRsZXNcIlxyXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXHJcbiAgICAgIFtuekxpc3RTdHlsZV09XCJ1aS5saXN0U3R5bGVcIlxyXG4gICAgICBbbnpJdGVtVW5pdF09XCJpLml0ZW1Vbml0XCJcclxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcclxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcclxuICAgICAgW256RmlsdGVyT3B0aW9uXT1cInVpLmZpbHRlck9wdGlvblwiXHJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcclxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXHJcbiAgICAgIFtuekNhbk1vdmVdPVwiX2Nhbk1vdmVcIlxyXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKG56U2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuelNlbGVjdENoYW5nZSk9XCJfc2VsZWN0Q2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvbnotdHJhbnNmZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxpc3Q6IGFueVtdID0gW107XHJcbiAgaTogYW55O1xyXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdID0gW107XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxyXG4gICAgICBvcGVyYXRpb25zOiB0aGlzLnVpLm9wZXJhdGlvbnMgfHwgWycnLCAnJ10sXHJcbiAgICAgIGl0ZW1Vbml0OiB0aGlzLnVpLml0ZW1Vbml0IHx8ICfDqcKhwrknLFxyXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfDqcKhwrknLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcclxuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcclxuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xyXG4gICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnkoKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLl9kYXRhLm1hcChpID0+IGkudmFsdWUpLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBfY2FuTW92ZSA9IChhcmc6IGFueSk6IE9ic2VydmFibGU8YW55W10+ID0+IHtcclxuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcclxuICB9O1xyXG5cclxuICBfY2hhbmdlKG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcclxuICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1zbGlkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotc2xpZGVyXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxyXG4gICAgICBbbnpNaW5dPVwibWluXCJcclxuICAgICAgW256TWF4XT1cIm1heFwiXHJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXHJcbiAgICAgIFtuek1hcmtzXT1cIm1hcmtzXCJcclxuICAgICAgW256RG90c109XCJ1aS5kb3RzXCJcclxuICAgICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxyXG4gICAgICBbbnpWZXJ0aWNhbF09XCJ1aS52ZXJ0aWNhbFwiXHJcbiAgICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcclxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9uei1zbGlkZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgbWFya3M6IGFueTtcclxuICBpbmNsdWRlZDogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2NoZW1hLm1pbmltdW0gfHwgMDtcclxuICAgIHRoaXMubWF4ID0gdGhpcy5zY2hlbWEubWF4aW11bSB8fCAxMDA7XHJcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XHJcblxyXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMudWkubWFya3MgfHwgbnVsbDtcclxuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcclxuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xyXG4gIH1cclxuXHJcbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBpZiAodGhpcy51aS5mb3JtYXR0ZXIpIHJldHVybiB0aGlzLnVpLmZvcm1hdHRlcih2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWN1c3RvbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KHVpKS5fcmVuZGVyXCJcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IHRoaXMsIHNjaGVtYTogc2NoZW1hLCB1aTogdWkgfVwiPjwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotcmF0ZVxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXHJcbiAgICAgIFtuekFsbG93SGFsZl09XCJhbGxvd0hhbGZcIlxyXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgW256Q291bnRdPVwiY291bnRcIj48L256LXJhdGU+XHJcbiAgICA8c3BhbiAqbmdJZj1cImhhc1RleHQgJiYgZm9ybVByb3BlcnR5LnZhbHVlXCIgY2xhc3M9XCJhbnQtcmF0ZS10ZXh0XCI+e3sgZ2VuVGV4dCgpIH19PC9zcGFuPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgYWxsb3dIYWxmOiBib29sZWFuO1xyXG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XHJcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xyXG4gIGhhc1RleHQgPSBmYWxzZTtcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY291bnQgPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDU7XHJcbiAgICB0aGlzLmFsbG93SGFsZiA9ICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcclxuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh0aGlzLnVpLmFsbG93Q2xlYXIsIHRydWUpO1xyXG4gICAgdGhpcy5hdXRvRm9jdXMgPSB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKTtcclxuICAgIHRoaXMuaGFzVGV4dCA9ICEhdGhpcy51aS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2VuVGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLmhhc1RleHRcclxuICAgICAgPyAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBmbGF0TWFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVNQUlMU1VGRklYID0gW1xyXG4gICdxcS5jb20nLFxyXG4gICcxNjMuY29tJyxcclxuICAnZ21haWwuY29tJyxcclxuICAnMTI2LmNvbScsXHJcbiAgJ2FsaXl1bi5jb20nLFxyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgW256QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxyXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgIDxuei1hdXRvY29tcGxldGUgI2F1dG9cclxuICAgICAgICBbbnpCYWNrZmlsbF09XCJpLmJhY2tmaWxsXCJcclxuICAgICAgICBbbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25dPVwiaS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIlxyXG4gICAgICAgIFtueldpZHRoXT1cImkud2lkdGhcIlxyXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50Py5uelZhbHVlKVwiPlxyXG4gICAgICAgIDxuei1hdXRvLW9wdGlvbiAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0IHwgYXN5bmNcIiBbbnpWYWx1ZV09XCJpLmxhYmVsXCI+e3tpLmxhYmVsfX08L256LWF1dG8tb3B0aW9uPlxyXG4gICAgICA8L256LWF1dG9jb21wbGV0ZT5cclxuICAgIDwvc2YtaXRlbS13cmFwPlxyXG4gICAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGk6IGFueTtcclxuICBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xyXG4gIGxpc3Q6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xyXG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICBiYWNrZmlsbDogdG9Cb29sKHRoaXMudWkuYmFja2ZpbGwsIGZhbHNlKSxcclxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2wodGhpcy51aS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxyXG4gICAgICB3aWR0aDogdGhpcy51aS53aWR0aCB8fCB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gdGhpcy51aS5maWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiB0aGlzLnVpLmZpbHRlck9wdGlvbjtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJPcHRpb24gPT09ICdib29sZWFuJykge1xyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cclxuICAgICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKChpbnB1dCB8fCAnJykudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQXN5bmMgPSAhIXRoaXMudWkuYXN5bmNEYXRhO1xyXG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XHJcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XHJcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxyXG4gICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICBmbGF0TWFwKFxyXG4gICAgICAgIGlucHV0ID0+XHJcbiAgICAgICAgICB0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpLFxyXG4gICAgICApLFxyXG4gICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcclxuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShFTUFJTFNVRkZJWCwgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxyXG4gICAgICAgICAgdGhpcy5zY2hlbWEuZW51bSxcclxuICAgICAgICAgIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhLFxyXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJEYXRhKGlucHV0OiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbWFpbFN1ZmZpeChpbnB1dCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG9mKFxyXG4gICAgICAgICAgdGhpcy5maXhEYXRhLmZpbHRlcihvcHRpb24gPT4gdGhpcy5maWx0ZXJPcHRpb24oaW5wdXQsIG9wdGlvbikpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEVtYWlsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBvZihcclxuICAgICAgIXZhbHVlIHx8IH52YWx1ZS5pbmRleE9mKCdAJylcclxuICAgICAgICA/IFtdXHJcbiAgICAgICAgOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1jYXNjYWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1jYXNjYWRlclxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW256T3B0aW9uc109XCJkYXRhXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcclxuICAgICAgW256QXV0b0ZvY3VzXT1cInVpLmF1dG9Gb2N1c1wiXHJcbiAgICAgIFtuekNoYW5nZU9uXT1cInVpLmNoYW5nZU9uXCJcclxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwidWkuY2hhbmdlT25TZWxlY3RcIlxyXG4gICAgICBbbnpDb2x1bW5DbGFzc05hbWVdPVwidWkuY29sdW1uQ2xhc3NOYW1lXCJcclxuICAgICAgW256RXhwYW5kVHJpZ2dlcl09XCJ1aS5leHBhbmRUcmlnZ2VyXCJcclxuICAgICAgW256TWVudUNsYXNzTmFtZV09XCJ1aS5tZW51Q2xhc3NOYW1lXCJcclxuICAgICAgW256TWVudVN0eWxlXT1cInVpLm1lbnVTdHlsZVwiXHJcbiAgICAgIFtuekxhYmVsUHJvcGVydHldPVwidWkubGFiZWxQcm9wZXJ0eVwiXHJcbiAgICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eVwiXHJcbiAgICAgIFtuekxvYWREYXRhXT1cImxvYWREYXRhXCJcclxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnpTaG93QXJyb3ddPVwic2hvd0Fycm93XCJcclxuICAgICAgW256U2hvd0lucHV0XT1cInNob3dJbnB1dFwiXHJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXHJcbiAgICAgIChuekNsZWFyKT1cIl9jbGVhcigkZXZlbnQpXCJcclxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJfdmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKG56U2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgIChuelNlbGVjdGlvbkNoYW5nZSk9XCJfc2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvbnotY2FzY2FkZXI+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNsZWFyVGV4dDogc3RyaW5nO1xyXG4gIHNob3dBcnJvdzogYm9vbGVhbjtcclxuICBzaG93SW5wdXQ6IGJvb2xlYW47XHJcbiAgdHJpZ2dlckFjdGlvbjogc3RyaW5nW107XHJcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcclxuICBsb2FkRGF0YTogYW55O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ8OmwrjChcOpwpnCpCc7XHJcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbCh0aGlzLnVpLnNob3dBcnJvdywgdHJ1ZSk7XHJcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbCh0aGlzLnVpLnNob3dJbnB1dCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xyXG4gICAgaWYgKCEhdGhpcy51aS5hc3luY0RhdGEpIHtcclxuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBhbnksIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfdmlzaWJsZUNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudWkudmlzaWJsZUNoYW5nZSAmJiB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIF9jaGFuZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnVpLmNoYW5nZSAmJiB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBfc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UgJiYgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2Uob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy51aS5zZWxlY3QgJiYgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnVpLmNsZWFyICYmIHRoaXMudWkuY2xlYXIob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgICA8bnotbWVudGlvbiAjbWVudGlvbnNcclxuICAgICAgICBbbnpTdWdnZXN0aW9uc109XCJkYXRhXCJcclxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxyXG4gICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcclxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxyXG4gICAgICAgIFtuelByZWZpeF09XCJpLnByZWZpeFwiXHJcbiAgICAgICAgKG56T25TZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgIT09ICd0ZXh0YXJlYSdcIj5cclxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XHJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XHJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJ1aS5hdXRvc2l6ZVwiPlxyXG4gICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvbnotbWVudGlvbj5cclxuXHJcbiAgICA8L3NmLWl0ZW0td3JhcD5cclxuICAgIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcclxuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xyXG4gIGk6IGFueTtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pID0ge1xyXG4gICAgICB2YWx1ZVdpdGg6IHRoaXMudWkudmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxyXG4gICAgICBub3RGb3VuZENvbnRlbnQ6XHJcbiAgICAgICAgdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOlwozCucOpwoXCjcOnwrvCk8Omwp7CnMOvwrzCjMOowr3Cu8OmwpXCssOnwqnCusOmwqDCvMOlwq7CjMOmwojCkMOowr7Ck8OlwoXCpScsXHJcbiAgICAgIHBsYWNlbWVudDogdGhpcy51aS5wbGFjZW1lbnQgfHwgJ2JvdHRvbScsXHJcbiAgICAgIHByZWZpeDogdGhpcy51aS5wcmVmaXggfHwgJ0AnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWluaW11bSA6IC0xLFxyXG4gICAgICBtYXggPVxyXG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiAtMTtcclxuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcclxuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoXHJcbiAgICAgICAgdmFsdWU6IGFueSxcclxuICAgICAgICBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSxcclxuICAgICAgICBmb3JtOiBQcm9wZXJ0eUdyb3VwLFxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xyXG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XHJcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBgw6bCnMKAw6XCsMKRw6bCj8KQw6XCj8KKICR7bWlufSDDpsKswqFgIH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xyXG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwqTCmsOmwo/CkMOlwo/CiiAke21heH0gw6bCrMKhYCB9XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuc2VsZWN0KSB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZWFyY2gob3B0aW9uOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcclxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRleHQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuICAgIHt7IHZhbHVlIHx8IHVpLmRlZmF1bHRUZXh0IHx8ICctJyB9fVxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldC5mYWN0b3J5JztcblxuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi90ZXh0L3RleHQud2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIE56V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCBPYmplY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgQXJyYXlXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dCcsIFRleHRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgRGF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFRpbWVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBCb29sZWFuV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRhcmVhV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyZWUtc2VsZWN0JywgVHJlZVNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGFnJywgVGFnV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cGxvYWQnLCBVcGxvYWRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyYW5zZmVyJywgVHJhbnNmZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NsaWRlcicsIFNsaWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmF0ZScsIFJhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2F1dG9jb21wbGV0ZScsIEF1dG9Db21wbGV0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2FzY2FkZXInLCBDYXNjYWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbWVudGlvbicsIE1lbnRpb25XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2N1c3RvbScsIEN1c3RvbVdpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxufSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNGSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTRkl0ZW1XcmFwQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU0ZGaXhlZERpcmVjdGl2ZSB9IGZyb20gJy4vc2YtZml4ZWQuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXHJcbiAgU0ZDb21wb25lbnQsXHJcbiAgU0ZJdGVtQ29tcG9uZW50LFxyXG4gIFNGSXRlbVdyYXBDb21wb25lbnQsXHJcbiAgU0ZUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICBTRkZpeGVkRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuLy8gcmVnaW9uOiB3aWRnZXRzXHJcblxyXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xyXG5pbXBvcnQgeyBOeldpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRzL256LXdpZGdldC5yZWdpc3RyeSc7XHJcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XHJcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldCc7XHJcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zdHJpbmcvc3RyaW5nLndpZGdldCc7XHJcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XHJcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldCc7XHJcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGltZS90aW1lLndpZGdldCc7XHJcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XHJcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XHJcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XHJcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XHJcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XHJcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcclxuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcclxuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0JztcclxuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcclxuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcclxuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcclxuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0JztcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcclxuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0JztcclxuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcclxuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcclxuXHJcbmNvbnN0IFdJREdFVFMgPSBbXHJcbiAgT2JqZWN0V2lkZ2V0LFxyXG4gIEFycmF5V2lkZ2V0LFxyXG4gIFN0cmluZ1dpZGdldCxcclxuICBOdW1iZXJXaWRnZXQsXHJcbiAgRGF0ZVdpZGdldCxcclxuICBUaW1lV2lkZ2V0LFxyXG4gIFJhZGlvV2lkZ2V0LFxyXG4gIENoZWNrYm94V2lkZ2V0LFxyXG4gIEJvb2xlYW5XaWRnZXQsXHJcbiAgVGV4dGFyZWFXaWRnZXQsXHJcbiAgU2VsZWN0V2lkZ2V0LFxyXG4gIFRyZWVTZWxlY3RXaWRnZXQsXHJcbiAgVGFnV2lkZ2V0LFxyXG4gIFVwbG9hZFdpZGdldCxcclxuICBUcmFuc2ZlcldpZGdldCxcclxuICBTbGlkZXJXaWRnZXQsXHJcbiAgUmF0ZVdpZGdldCxcclxuICBBdXRvQ29tcGxldGVXaWRnZXQsXHJcbiAgQ2FzY2FkZXJXaWRnZXQsXHJcbiAgTWVudGlvbldpZGdldCxcclxuICBDdXN0b21XaWRnZXQsXHJcbiAgVGV4dFdpZGdldCxcclxuXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLldJREdFVFNdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLldJREdFVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEZWxvbkZvcm1Db25maWcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgIHVzZUNsYXNzOiBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiZGVlcENvcHkiLCJ0YWtlV2hpbGUiLCJtYXAiLCJvZiIsIlN1YmplY3QiLCJCZWhhdmlvclN1YmplY3QiLCJPYnNlcnZhYmxlIiwiY29tYmluZUxhdGVzdCIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJPcHRpb25hbCIsIkluamVjdCIsIkluamVjdGFibGUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiRGVsb25Mb2NhbGVTZXJ2aWNlIiwiSW5wdXQiLCJPdXRwdXQiLCJJbnB1dEJvb2xlYW4iLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0TnVtYmVyIiwiVGVtcGxhdGVSZWYiLCJmaWx0ZXIiLCJIb3N0QmluZGluZyIsIk56VHJlZU5vZGUiLCJkZWVwR2V0IiwiTnpNb2RhbFNlcnZpY2UiLCJkZWJvdW5jZVRpbWUiLCJzdGFydFdpdGgiLCJmbGF0TWFwIiwidGFwIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkRlbG9uVXRpbE1vZHVsZSIsIkRlbG9uTG9jYWxlTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxRQUFhLGFBQWEsR0FBRztRQUMzQixjQUFjLEVBQVUsc0NBQVE7UUFDaEMsTUFBTSxFQUFrQiwyQ0FBYTtRQUNyQyxlQUFlLEVBQVMscUNBQVk7UUFDcEMsb0JBQW9CLEVBQUksd0RBQVc7UUFDbkMsS0FBSyxFQUFtQixpRkFBcUI7UUFDN0MsWUFBWSxFQUFZLG9GQUE2QjtRQUNyRCxJQUFJLEVBQW9CLDBFQUFjO1FBQ3RDLE1BQU0sRUFBa0IsZ0NBQU87O1FBQy9CLElBQUksRUFBb0IsdUNBQWM7UUFDdEMsUUFBUSxFQUFnQixvQkFBSztRQUM3QixTQUFTLEVBQWUseUNBQWdCO1FBQ3hDLFNBQVMsRUFBZSxxREFBa0I7UUFDMUMsT0FBTyxFQUFpQixrQ0FBd0I7UUFDaEQsYUFBYSxFQUFXLGtDQUF3QjtRQUNoRCxPQUFPLEVBQWlCLGtDQUF3QjtRQUNoRCxhQUFhLEVBQVcsa0NBQXdCO1FBQ2hELFFBQVEsRUFBZ0IsK0NBQWlCO1FB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