/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            // parser JSON Pointer
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
                return ( /** @type {?} */({ label: item, value: item }));
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
                .pipe(operators.takeWhile(function () { return ui.__destroy !== true; }), operators.map(function (list) { return getEnum(list, formData, schema.readOnly); }));
        }
        return rxjs.of(getCopyEnum(schema.enum, formData, schema.readOnly));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                ingoreKeywords: ( /** @type {?} */(this.ui.ingoreKeywords)),
            });
            this.formData = formData || schema.default;
            this._parent = parent;
            if (parent) {
                this._root = parent.root;
            }
            else if (this instanceof PropertyGroup) {
                this._root = ( /** @type {?} */((( /** @type {?} */(this)))));
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
                return this._root || ( /** @type {?} */((( /** @type {?} */(this)))));
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
                return ( /** @type {?} */(property));
            };
        // #region process errors
        // #region process errors
        /**
         * @param {?} value
         * @return {?}
         */
        FormProperty.prototype.isEmptyData =
            // #region process errors
            /**
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
                var customValidator = (( /** @type {?} */(this.ui))).validator;
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
                // fix error format
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
                if (emitFormat && errors && !this.ui.onlyVisual) {
                    errors = errors.map(function (err) {
                        /** @type {?} */
                        var message = err._custom === true && err.message
                            ? err.message
                            : (_this.ui.errors || {})[err.keyword] ||
                                _this.options.errors[err.keyword] ||
                                "";
                        if (message && typeof message === 'function')
                            message = ( /** @type {?} */(message(err)));
                        if (message) {
                            if (~(( /** @type {?} */(message))).indexOf('{')) {
                                message = (( /** @type {?} */(message))).replace(/{([\.a-z0-9]+)}/g, function (v, key) { return err.params[key] || ''; });
                            }
                            err.message = ( /** @type {?} */(message));
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
        // #endregion
        // #region condition
        // #endregion
        // #region condition
        /**
         * @param {?} visible
         * @return {?}
         */
        FormProperty.prototype.setVisible =
            // #endregion
            // #region condition
            /**
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
                    property = (( /** @type {?} */(property))).getProperty(subPath);
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
                        (( /** @type {?} */(child))).forEachChildRecursive(fn);
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                var list = ( /** @type {?} */(this.properties));
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
                this.forEachChild(function (property) {
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
                var newProperty = ( /** @type {?} */(this.formPropertyFactory.createProperty(this.schema.items, this.ui.$items, value, this)));
                (( /** @type {?} */(this.properties))).push(newProperty);
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
        // #region actions
        // #region actions
        /**
         * @param {?} value
         * @return {?}
         */
        ArrayProperty.prototype.add =
            // #region actions
            /**
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
                var list = ( /** @type {?} */(this.properties));
                this.clearErrors(list[index].path);
                list.splice(index, 1);
                this.updateValueAndValidity(false, true);
            };
        return ArrayProperty;
    }(PropertyGroup));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    orderedProperties = orderProperties(Object.keys(this.schema.properties), ( /** @type {?} */(this.ui.order)));
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                        path += (( /** @type {?} */(parent))).tick++;
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
                        (( /** @type {?} */((( /** @type {?} */(parent)).schema.required || [])))).indexOf(propertyId) !== -1) {
                        ui._required = true;
                    }
                    // fix title
                    if (schema.title == null)
                        schema.title = propertyId;
                    // fix date
                    if ((schema.type === 'string' || schema.type === 'number') &&
                        !schema.format &&
                        !(( /** @type {?} */(ui))).format) {
                        if ((( /** @type {?} */(ui))).widget === 'date')
                            ui.format =
                                schema.type === 'string'
                                    ? this.options.uiDateStringFormat
                                    : this.options.uiDateNumberFormat;
                        else if ((( /** @type {?} */(ui))).widget === 'time')
                            ui.format =
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            // #region fields
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
                        var property = retrieveSchema(( /** @type {?} */(schema.properties[key])), definitions);
                        /** @type {?} */
                        var ui = ( /** @type {?} */(Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                            Array.isArray(property.enum) &&
                            property.enum.length > 0
                            ? { widget: 'select' }
                            : null, _this._defUi, property.ui, uiSchema[uiKey])));
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
                        if (ui.widget === 'date' && ui.end != null && parentSchema) {
                            /** @type {?} */
                            var dateEndProperty = parentSchema.properties[ui.end];
                            if (dateEndProperty) {
                                dateEndProperty.ui = Object.assign({}, dateEndProperty.ui, {
                                    hidden: true,
                                });
                            }
                            else {
                                ui.end = '';
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
                this._defUi = Object.assign(( /** @type {?} */({
                    onlyVisual: this.options.onlyVisual,
                    size: this.options.size,
                    liveValidate: this.liveValidate,
                    firstVisual: this.firstVisual,
                })), this.options.ui, _schema.ui, this.ui['*']);
                // root
                this._ui = Object.assign({}, this._defUi);
                inFn(_schema, _schema, this.ui, this.ui, this._ui);
                // cond
                resolveIf(_schema, this._ui);
                inIfFn(_schema, this._ui);
                this._schema = _schema;
                if (this._ui.debug) {
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
                this._btn = Object.assign(( /** @type {?} */({ render: { size: 'default' } })), this.locale, this.options.button, this.button);
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
                    if (this._btn.render.spanLabelFixed == null) {
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
                if (this._ui.debug)
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
                this.cleanRootSub();
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
        SFComponent.prototype.cleanRootSub = /**
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
                this.i18n$.unsubscribe();
            };
        SFComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf, [sf]',
                        template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\" [nzXXl]=\"_btn.render.grid.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [nzSize]=\"_btn.render.size\"\n              [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\" type=\"button\" nz-button\n              [nzType]=\"_btn.reset_type\" [nzSize]=\"_btn.render.size\" (click)=\"reset(true)\">\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextUniqueId = 0;
    var SFItemComponent = /** @class */ (function () {
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
                var ui = ( /** @type {?} */(this.formProperty.ui));
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
                this.ref = this.widgetFactory.createWidget(this.container, ( /** @type {?} */((this.formProperty.ui.widget || this.formProperty.schema.type))));
                this.onWidgetInstanciated(this.ref.instance);
            };
        /**
         * @return {?}
         */
        SFItemComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.formProperty.ui.__destroy = true;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SFFixedDirective = /** @class */ (function () {
        function SFFixedDirective(er, render) {
            this.render = render;
            this._inited = false;
            this.el = ( /** @type {?} */(er.nativeElement));
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SFItemWrapComponent = /** @class */ (function () {
        function SFItemWrapComponent() {
            this.title = null;
        }
        Object.defineProperty(SFItemWrapComponent.prototype, "t", {
            get: /**
             * @return {?}
             */ function () {
                return this.title === null ? this.schema.title : this.title;
            },
            enumerable: true,
            configurable: true
        });
        SFItemWrapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-item-wrap',
                        template: "<nz-form-item [style.width.px]=\"ui.width\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                        preserveWhitespaces: false
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
                        if (_this.ui.__destroy !== true)
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
                this.formProperty.errorsChanges
                    .pipe(operators.filter(function () { return _this.ui.__destroy !== true; }))
                    .subscribe(function () { return _this.cd.detectChanges(); });
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
                this.formProperty.errorsChanges
                    .pipe(operators.filter(function () { return _this.ui.__destroy !== true; }))
                    .subscribe(function () { return _this.cd.detectChanges(); });
            };
        return ObjectLayoutWidget;
    }(Widget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                        var property = ( /** @type {?} */(this.formProperty.properties[key]));
                        /** @type {?} */
                        var item = {
                            property: property,
                            grid: property.ui.grid || this.grid || {},
                            spanLabelFixed: property.ui.spanLabelFixed,
                            show: property.ui.hidden === false
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
                        template: "\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div nz-col\n            [nzSpan]=\"i.grid.span\" [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\" [nzSm]=\"i.grid.sm\" [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\" [nzXl]=\"i.grid.xl\" [nzXXl]=\"i.grid.xxl\">\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>",
                        preserveWhitespaces: false
                    }] }
        ];
        return ObjectWidget;
    }(ObjectLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    (( /** @type {?} */(this.formProperty.properties))).length >= this.schema.maxItems);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ArrayWidget.prototype, "l", {
            get: /**
             * @return {?}
             */ function () {
                return this.formProperty.root.widget.sfComp.locale;
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
                this.addTitle = this.ui.addTitle || this.l['addText'];
                this.addType = this.ui.addType || 'dashed';
                this.removeTitle =
                    this.ui.removable === false ? null : this.ui.removeTitle || this.l['removeText'];
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
                        template: "<nz-form-item>\n  <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n    <div class=\"add\">\n      <button nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n    </div>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n      <nz-row class=\"sf-array-container\">\n        <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n          <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"removeTitle\" class=\"remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon type=\"delete\"></i>\n              </span>\n            </nz-card>\n          </nz-col>\n        </ng-container>\n      </nz-row>\n\n      <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                        preserveWhitespaces: false
                    }] }
        ];
        return ArrayWidget;
    }(ArrayLayoutWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this.type = !!(this.ui.addOnAfter ||
                    this.ui.addOnBefore ||
                    this.ui.addOnAfterIcon ||
                    this.ui.addOnBeforeIcon ||
                    this.ui.prefix ||
                    this.ui.prefixIcon ||
                    this.ui.suffix ||
                    this.ui.suffixIcon)
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
                if (this.schema.format === 'color' && !value) {
                    this.setValue('#000000');
                }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                if (ui.prefix != null) {
                    ui.formatter = function (value) { return ui.prefix + " " + value; };
                    ui.parser = function (value) { return value.replace(ui.prefix + " ", ''); };
                }
                if (ui.unit != null) {
                    ui.formatter = function (value) { return value + " " + ui.unit; };
                    ui.parser = function (value) { return value.replace(" " + ui.unit, ''); };
                }
                if (ui.formatter)
                    this.formatter = ui.formatter;
                if (ui.parser)
                    this.parser = ui.parser;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this.mode = ui.mode || 'date';
                this.flatRange = ui.end != null;
                if (this.flatRange) {
                    this.mode = 'range';
                }
                if (!ui.displayFormat) {
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
                    this.displayFormat = ui.displayFormat;
                }
                this.format = ui.format
                    ? ui.format
                    : this.schema.type === 'number'
                        ? 'x'
                        : 'YYYY-MM-DD HH:mm:ss';
                // 公共API
                this.i = {
                    allowClear: toBool(ui.allowClear, true),
                    // nz-date-picker
                    showToday: toBool(ui.showToday, true),
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
             * @return {?}
             */ function () {
                return this.formProperty.parent.properties[this.ui.end];
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
        /**
         * @param {?} value
         * @return {?}
         */
        DateWidget.prototype.toDate = /**
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
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <ng-container [ngSwitch]=\"mode\">\n\n      <nz-month-picker *ngSwitchCase=\"'month'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      ></nz-month-picker>\n\n      <nz-week-picker *ngSwitchCase=\"'week'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n      ></nz-week-picker>\n\n      <nz-range-picker *ngSwitchCase=\"'range'\"\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzRanges]=\"ui.ranges\"\n        [nzShowTime]=\"ui.showTime\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-range-picker>\n\n      <nz-date-picker *ngSwitchDefault\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [nzFormat]=\"displayFormat\"\n        [(ngModel)]=\"displayValue\"\n        (ngModelChange)=\"_change($event)\"\n        [nzAllowClear]=\"i.allowClear\"\n        [nzClassName]=\"ui.className\"\n        [nzDisabledDate]=\"ui.disabledDate\"\n        [nzLocale]=\"ui.locale\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzPopupStyle]=\"ui.popupStyle\"\n        [nzDropdownClassName]=\"ui.dropdownClassName\"\n        (nzOnOpenChange)=\"_openChange($event)\"\n        [nzDisabledTime]=\"ui.disabledTime\"\n        [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n        [nzShowTime]=\"ui.showTime\"\n        [nzShowToday]=\"i.showToday\"\n        (nzOnOk)=\"_ok($event)\"\n      ></nz-date-picker>\n    </ng-container>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return DateWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this.format = ui.format
                    ? ui.format
                    : this.schema.type === 'number'
                        ? 'x'
                        : 'HH:mm:ss';
                this.i = {
                    displayFormat: ui.displayFormat || 'HH:mm:ss',
                    allowEmpty: toBool(ui.allowEmpty, true),
                    clearText: ui.clearText || '清除',
                    defaultOpenValue: ui.defaultOpenValue || new Date(),
                    hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
                    hourStep: ui.hourStep || 1,
                    minuteStep: ui.nzMinuteStep || 1,
                    secondStep: ui.secondStep || 1,
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
                if (this.ui.utcEpoch === true) {
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        Object.defineProperty(CheckboxWidget.prototype, "l", {
            get: /**
             * @return {?}
             */ function () {
                return this.formProperty.root.widget.sfComp.locale;
            },
            enumerable: true,
            configurable: true
        });
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
                getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
                    _this.data = list;
                    _this.allChecked = false;
                    _this.indeterminate = false;
                    _this.labelTitle = list.length === 0 ? '' : _this.schema.title;
                    _this.grid_span = _this.ui.span && _this.ui.span > 0 ? _this.ui.span : 0;
                    _this.updateAllChecked();
                    _this.inited = true;
                    _this.cd.detectChanges();
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
                var _this = this;
                if (( /** @type {?} */(this)).data.every(function (item) { return item.checked === false; })) {
                    ( /** @type {?} */(this)).allChecked = false;
                    ( /** @type {?} */(this)).indeterminate = false;
                }
                else if (( /** @type {?} */(this)).data.every(function (item) { return item.checked === true; })) {
                    ( /** @type {?} */(this)).allChecked = true;
                    ( /** @type {?} */(this)).indeterminate = false;
                }
                else {
                    ( /** @type {?} */(this)).indeterminate = true;
                }
                // issues: https://github.com/NG-ZORRO/ng-zorro-antd/issues/2025
                setTimeout(function () { return ( /** @type {?} */(_this)).detectChanges(); });
                return ( /** @type {?} */(this));
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
                if (this.ui.change)
                    this.ui.change(res);
            };
        CheckboxWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-checkbox',
                        template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\" [(ngModel)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n    (click)=\"onAllChecked($event)\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\"\n  [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                        preserveWhitespaces: false
                    }] }
        ];
        return CheckboxWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                if (this.ui.autosize != null) {
                    this.autosize = this.ui.autosize;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    allowClear: this.ui.allowClear,
                    autoFocus: toBool(this.ui.autoFocus, false),
                    dropdownClassName: this.ui.dropdownClassName || null,
                    dropdownMatchSelectWidth: toBool(this.ui.dropdownMatchSelectWidth, true),
                    serverSearch: toBool(this.ui.serverSearch, false),
                    maxMultipleCount: this.ui.maxMultipleCount || Infinity,
                    mode: this.ui.mode || 'default',
                    notFoundContent: this.ui.notFoundContent || '无法找到',
                    showSearch: toBool(this.ui.showSearch, true),
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
                if (this.ui.change)
                    this.ui.change(values);
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
                if (this.ui.openChange)
                    this.ui.openChange(value);
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
                    this.ui.onSearch(text).then(function (res) {
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
                if (this.ui.scrollToBottom)
                    this.ui.scrollToBottom(value);
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                // https://github.com/NG-ZORRO/ng-zorro-antd/issues/2316
                setTimeout(function () { return _this.detectChanges(); }, 1000);
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
                return list.map(function (node) { return new ngZorroAntd.NzTreeNode(( /** @type {?} */(util.deepCopy(node)))); });
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
                    displayWith: ui.displayWith || (function (node) { return node.title; }),
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
                ui.expandChange(e)
                    .pipe(operators.map(function (list) { return _this.tranData(list); }))
                    .subscribe(function (res) {
                    e.node.clearChildren();
                    e.node.addChildren(res);
                    _this.dc();
                });
            };
        TreeSelectWidget.decorators = [
            { type: core.Component, args: [{
                        selector: 'sf-tree-select',
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    <nz-tree-select\n      [nzAllowClear]=\"i.allowClear\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzDisabled]=\"disabled\"\n      [nzShowSearch]=\"i.showSearch\"\n      [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n      [nzDropdownStyle]=\"ui.dropdownStyle\"\n      [nzMultiple]=\"i.multiple\"\n      [nzSize]=\"ui.size\"\n      [nzCheckable]=\"i.checkable\"\n      [nzShowExpand]=\"i.showExpand\"\n      [nzShowLine]=\"i.showLine\"\n      [nzAsyncData]=\"i.asyncData\"\n      [nzNodes]=\"data\"\n      [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n      [nzDefaultExpandedKeys]=\"i.defaultExpandedKeys\"\n      [nzDisplayWith]=\"i.displayWith\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      (nzExpandChange)=\"expandChange($event)\">\n    </nz-tree-select>\n\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TreeSelectWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                if (this.ui.checkedChange)
                    this.ui.checkedChange(item.checked);
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    text: this.ui.text || '点击上传',
                    action: this.ui.action || '',
                    accept: this.ui.accept || '',
                    limit: this.ui.limit == null ? 0 : +this.ui.limit,
                    size: this.ui.fileSize == null ? 0 : +this.ui.fileSize,
                    fileType: this.ui.fileType || '',
                    listType: this.ui.listType || 'text',
                    multiple: toBool(this.ui.multiple, false),
                    name: this.ui.name || 'file',
                    showUploadList: toBool(this.ui.showUploadList, true),
                    withCredentials: toBool(this.ui.withCredentials, false),
                    resReName: (this.ui.resReName || '').split('.'),
                };
                if (this.i.listType === 'picture-card')
                    this.btnType = 'plus';
                if (this.i.type === 'drag') {
                    this.i.listType = null;
                    this.btnType = 'drag';
                    this.i.text = this.ui.text || "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8BE5\u533A\u57DF\u4E0A\u4F20";
                    this.i.hint =
                        this.ui.hint || "\u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\uFF0C\u4E25\u7981\u4E0A\u4F20\u516C\u53F8\u6570\u636E\u6216\u5176\u4ED6\u5B89\u5168\u6587\u4EF6";
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
                if (this.ui.change)
                    this.ui.change(args);
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
                    _this.fileList = ( /** @type {?} */(list));
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
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-upload\n      [nzType]=\"i.type\"\n      [nzFileList]=\"fileList\"\n      [nzDisabled]=\"disabled\"\n      [nzAction]=\"i.action\"\n      [nzAccept]=\"i.accept\"\n      [nzLimit]=\"i.limit\"\n      [nzSize]=\"i.size\"\n      [nzFileType]=\"i.fileType\"\n      [nzHeaders]=\"ui.headers\"\n      [nzData]=\"ui.data\"\n      [nzListType]=\"i.listType\"\n      [nzMultiple]=\"i.multiple\"\n      [nzName]=\"i.name\"\n      [nzShowUploadList]=\"i.showUploadList\"\n      [nzWithCredentials]=\"i.withCredentials\"\n      [nzRemove]=\"ui.remove\"\n      [nzPreview]=\"handlePreview\"\n      (nzChange)=\"change($event)\">\n      <ng-container [ngSwitch]=\"btnType\">\n        <ng-container *ngSwitchCase=\"'plus'\">\n          <i nz-icon type=\"plus\"></i>\n          <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'drag'\">\n          <p class=\"ant-upload-drag-icon\"><i nz-icon type=\"inbox\"></i></p>\n          <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n          <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <button type=\"button\" nz-button>\n            <i nz-icon type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n          </button>\n        </ng-container>\n      </ng-container>\n    </nz-upload>\n\n  </sf-item-wrap>\n  ",
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TransferWidget = /** @class */ (function (_super) {
        __extends(TransferWidget, _super);
        function TransferWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = [];
            _this._data = [];
            _this._canMove = function (arg) {
                return _this.ui.canMove ? _this.ui.canMove(arg) : rxjs.of(arg.list);
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
                    titles: this.ui.titles || ['', ''],
                    operations: this.ui.operations || ['', ''],
                    itemUnit: this.ui.itemUnit || '项',
                    itemsUnit: this.ui.itemsUnit || '项',
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
                        if (~(( /** @type {?} */(formData))).indexOf(item.value))
                            item.direction = 'right';
                    });
                    _this.list = list;
                    _this._data = list.filter(function (w) { return w.direction === 'right'; });
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SliderWidget = /** @class */ (function (_super) {
        __extends(SliderWidget, _super);
        function SliderWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._formatter = function (value) {
                if (_this.ui.formatter)
                    return _this.ui.formatter(value);
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
                this.marks = this.ui.marks || null;
                /** @type {?} */
                var included = this.ui.included;
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
                if (this.ui.afterChange)
                    this.ui.afterChange(value);
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this.allowClear = toBool(this.ui.allowClear, true);
                this.autoFocus = toBool(this.ui.autoFocus, false);
                this.hasText = !!this.ui.text;
            };
        /**
         * @return {?}
         */
        RateWidget.prototype.genText = /**
         * @return {?}
         */
            function () {
                return this.hasText
                    ? (( /** @type {?} */(this.ui.text))).replace('{{value}}', this.formProperty.value)
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    backfill: toBool(this.ui.backfill, false),
                    defaultActiveFirstOption: toBool(this.ui.defaultActiveFirstOption, true),
                    width: this.ui.width || undefined,
                };
                this.filterOption = this.ui.filterOption == null ? true : this.ui.filterOption;
                if (typeof this.filterOption === 'boolean') {
                    this.filterOption = function (input, option) {
                        return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
                    };
                }
                this.isAsync = !!this.ui.asyncData;
                /** @type {?} */
                var orgTime = +(this.ui.debounceTime || 0);
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
                        template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <input nz-input [nzAutocomplete]=\"auto\"\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        autocomplete=\"off\">\n      <nz-autocomplete #auto\n        [nzBackfill]=\"i.backfill\"\n        [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n        [nzWidth]=\"i.width\"\n        (selectionChange)=\"setValue($event?.nzValue)\">\n        <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.value\">{{i.label}}</nz-auto-option>\n      </nz-autocomplete>\n    </sf-item-wrap>\n    ",
                        preserveWhitespaces: false
                    }] }
        ];
        return AutoCompleteWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this.clearText = this.ui.clearText || '清除';
                this.showArrow = toBool(this.ui.showArrow, true);
                this.showInput = toBool(this.ui.showInput, true);
                this.triggerAction = this.ui.triggerAction || ['click'];
                if (!!this.ui.asyncData) {
                    this.loadData = function (node, index) {
                        return (( /** @type {?} */(_this.ui.asyncData)))(node, index, _this);
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
                this.ui.visibleChange && this.ui.visibleChange(status);
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
                this.ui.change && this.ui.change(value);
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
                this.ui.selectionChange && this.ui.selectionChange(options);
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
                this.ui.select && this.ui.select(options);
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
                this.ui.clear && this.ui.clear(options);
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    valueWith: this.ui.valueWith || (function (item) { return item.label; }),
                    notFoundContent: this.ui.notFoundContent || '无匹配结果，轻敲空格完成输入',
                    placement: this.ui.placement || 'bottom',
                    prefix: this.ui.prefix || '@',
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
                (( /** @type {?} */(this.ui.loadData(option))))
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                        template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n    {{ value || ui.defaultText || '-' }}\n  </sf-item-wrap>\n  ",
                        preserveWhitespaces: false
                    }] }
        ];
        return TextWidget;
    }(ControlWidget));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9mb3JtL3NyYy9lcnJvcnMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9jb25maWcudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdXRpbHMudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy90ZXJtaW5hdG9yLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9mb3JtLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYXRvbWljLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvbnVtYmVyLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvc3RyaW5nLnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvYm9vbGVhbi5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2FycmF5LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdmFsaWRhdG9yLmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvc2YtaXRlbS13cmFwLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY3VzdG9tL3NmLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90YWcvdGFnLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDDpcK4woPDpcKwwpTDpsKowqHDpcK8wo/DpcKHwrrDqcKUwplgLFxuICAnJHJlZic6ICAgICAgICAgICAgICAgICBgw6bCl8Kgw6bCs8KVw6bCicK+w6XCiMKww6XCvMKVw6fClMKoe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6ICAgICAgICBgw6TCuMKNw6XChcKBw6jCrsK4w6jCtsKFw6jCv8KHe3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBgw6TCuMKNw6XChcKBw6jCrsK4w6bCnMKJw6nCosKdw6XCpMKWw6fCmsKEw6XCscKew6bCgMKnYCxcbiAgYW55T2Y6ICAgICAgICAgICAgICAgICAgYMOmwpXCsMOmwo3CrsOlwrrClMOkwrjCuiBhbnlPZiDDpsKJwoDDpsKMwofDpcKuwprDp8KawoTDpcKFwrbDpMK4wq3DpMK4woDDpMK4wqpgLFxuICBkZXBlbmRlbmNpZXM6ICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCi8Klw6bCnMKJw6XCscKew6bCgMKne3Byb3BlcnR5fcOnwprChMOkwr7CncOowrXClsOlwrHCnsOmwoDCp3tkZXBzfWAsXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpsKYwq/DqcKiwoTDqMKuwr7DpcKuwprDp8KawoTDpsKewprDpMK4wr7DpcKAwrzDpMK5wovDpMK4woBgLFxuICBmb3JtYXQ6ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCwgLy8gYMOlwrrClMOlwr3Ck8OlwozCucOpwoXCjcOmwqDCvMOlwrzCjyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiAgICAgICAgICAgICAgICAgICBgw6fCscK7w6XCnsKLw6XCusKUw6XCvcKTw6bCmMKvIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDDpcK/woXDpcKhwqvDqcKhwrlgLFxuICBtYXhMZW5ndGg6ICAgICAgICAgICAgICBgw6jCh8Kzw6XCpMKaIHtsaW1pdH0gw6TCuMKqw6XCrcKXw6fCrMKmYCxcbiAgbWluTGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwrDCkSB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpsOkwrvCpcOkwrjCimAsXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1pbmltdW06ICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heGltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heEl0ZW1zOiAgICAgICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDqcKhwrlgLFxuICBtaW5JdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYMOkwrjCjcOlwrrClMOlwqTCmsOkwrrCjiB7bGltaXR9IMOkwrjCqsOlwrHCnsOmwoDCp2AsXG4gIG1pblByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKwwpHDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtdWx0aXBsZU9mOiAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvIHttdWx0aXBsZU9mfSDDp8KawoTDpsKVwrTDpsKVwrDDpcKAwo1gLFxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCjMK5w6nChcKNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6ICAgICAgICAgICAgICAgICAgYMOlwo/CqsOowoPCvcOlwozCucOpwoXCjcOkwrjCgMOkwrjCqiBcIm9uZU9mXCIgw6TCuMKtw6fCmsKEIHNjaGVtYWAsXG4gIHBhdHRlcm46ICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLFxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCkMKrw6bCnMKJw6nCh8KNw6XCpMKNw6nCocK5ICjDp8Kswqwge2p9IMOpwqHCucOkwrjCjsOnwqzCrCB7aX0gw6nCocK5w6bCmMKvw6nCh8KNw6XCpMKNw6fCmsKEKWAsXG4gIGN1c3RvbTogICAgICAgICAgICAgICAgIGDDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLFxuICBwcm9wZXJ0eU5hbWVzOiAgICAgICAgICBgw6XCscKew6bCgMKnw6XCkMKNIFwie3Byb3BlcnR5TmFtZX1cIiDDpsKXwqDDpsKVwohgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBgw6XCusKUw6XCvcKTw6bCnMKJw6XCscKew6bCgMKnw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6ICAgICAgICAgICAgICAgICBgw6fClMKxw6TCusKOIHtjYXNlSW5kZXh9IMOlwqTCscOowrTCpcOvwrzCjMOmwpzCqsOpwoDCmsOowr/ChyBcInN3aXRjaFwiIMOmwqDCocOpwqrCjGAsXG4gIGNvbnN0OiAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDp8KtwonDpMK6wo7DpcK4wrjDqcKHwo9gLFxuICBjb250YWluczogICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6XCjMKFw6XCkMKrw6TCuMKAw6TCuMKqw6bCnMKJw6bClcKIw6nCocK5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0gw6XCusKUw6XCvcKTw6bCmMKvw6XCuMKDw6XCsMKUw6XCgMK8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0gw6XCusKUw6XCvcKTw6bCmMKvw6XCuMKDw6XCsMKUw6XCgMK8YCxcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyBcIntmYWlsaW5nS2V5d29yZH1cImAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOpwpTCmcOowq/Cr8Okwr/CocOmwoHCr8OmwpbCh8OmwpzCrMOvwrzCjMOpwpTCrsOlwpDCjcOowrXCnsOlwpDCjCBgRXJyb3JEYXRhLmtleXdvcmRgIMOlwoDCvFxuICAgKi9cbiAgZXJyb3JzPzogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIMOlwoDCvMOlwqfCi8OnwrvCiMOlwozChcOlwpDCqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOmwqDCocOpwqrCjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIiwiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBFUlJPUlNERUZBVUxUIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCv8K9w6fClcKlw6bCn8KQw6TCusKbw6bClcKww6bCjcKuw6fCscK7w6XCnsKLw6bCoMKhw6nCqsKMIGBFUlJPUlNERUZBVUxUYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIMOpwpnCkMOlwq7CmiBTY2hlbWEgw6TCuMKtIGB0eXBlYCDDp8KxwrvDpcKewotcbiAgICogLSBgZW51bWAgw6nCmcKQw6XCrsKaw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdID0gWyd0eXBlJywgJ2VudW0nXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDDpcKPwoLDpsKVwrBcbiAgICovXG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPyA9IHRydWU7XG4gIC8qKlxuICAgKiDDpsKMwofDpcKuwprDqMKhwqjDpcKNwpUgYGF1dG9jb21wbGV0ZWAgw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPyA9IGZhbHNlO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCj8Kqw6XCscKVw6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJw6TCuMKNw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOowofCqsOlwq7CmsOkwrnCicOpwoDCmsOnwpTCqMOpwpTCmcOowq/Cr8Okwr/CocOmwoHCr1xuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XG4gIC8qKlxuICAgKiDDqcK7wpjDqMKuwqTDpcKFwqjDpcKxwoDDpcK4woPDpcKxwoBcbiAgICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW07XG4gIC8qKlxuICAgKiDDpcKFwoPDp8K0wqDDp8K7woTDpMK7wrbDpcKkwqfDpcKwwo/Dr8K8wozDp8KUwqjDpMK6wo4gYG56U2l6ZWAgw6XCgMK8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DqcKjwo7DpsKgwrxcbiAgICovXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xuICAgIHN1Ym1pdF90eXBlOiAncHJpbWFyeScsXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxuICB9O1xuICAvKipcbiAgICogZGF0ZcOlwrDCj8OpwoPCqMOkwrvCtsOvwrzCmmB0eXBlPVwic3RyaW5nXCJgIMOkwrjClMOkwrjCjcOmwozCh8Olwq7CmiBgc2NoZW1hLmZvcm1hdGAgw6XCksKMIGB1aS5mb3JtYXRgIMOmwpfCtsOmwpfCpcOmwpzCn8OmwqDCvMOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBZWVlZLU1NLUREIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0PyA9ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcFxuICAgKi9cbiAgdWlEYXRlTnVtYmVyRm9ybWF0PyA9ICd4JztcbiAgLyoqXG4gICAqIHRpbWXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgSEg6bW06c3NgXG4gICAqL1xuICB1aVRpbWVTdHJpbmdGb3JtYXQ/ID0gJ0hIOm1tOnNzJztcbiAgLyoqXG4gICAqIHRpbWXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcMOvwrzCjMOmwpfCpcOmwpzCn8OnwrvCn8OkwrjCgMOkwr3Cv8OnwpTCqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdD8gPSAneCc7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hRGVmaW5pdGlvbiwgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY29uc3QgRk9STUFUTUFQUyA9IHtcbiAgJ2RhdGUtdGltZSc6IHtcbiAgICB3aWRnZXQ6ICdkYXRlJyxcbiAgICBzaG93VGltZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXG4gIH0sXG4gIGRhdGU6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICB0aW1lOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gICdmdWxsLXRpbWUnOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAnWVlZWS1XVycgfSxcbiAgbW9udGg6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICdtb250aCcsIGZvcm1hdDogJ1lZWVktTU0nIH0sXG4gIHVyaTogeyB3aWRnZXQ6ICd1cGxvYWQnIH0sXG4gIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgY29sb3I6IHsgd2lkZ2V0OiAnc3RyaW5nJywgdHlwZTogJ2NvbG9yJyB9LFxuICAnJzogeyB3aWRnZXQ6ICdzdHJpbmcnIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvOiBhbnkpIHtcbiAgcmV0dXJuIG8gPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGkoLi4uYXJncykge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG59XG5cbi8qKiDDpsKgwrnDpsKNwq4gYCRyZWZgIMOmwp/CpcOmwonCviBgZGVmaW5pdGlvbnNgICovXG5mdW5jdGlvbiBmaW5kU2NoZW1hRGVmaW5pdGlvbigkcmVmOiBzdHJpbmcsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24pIHtcbiAgY29uc3QgbWF0Y2ggPSAvXiNcXC9kZWZpbml0aW9uc1xcLyguKikkLy5leGVjKCRyZWYpO1xuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAvLyBwYXJzZXIgSlNPTiBQb2ludGVyXG4gICAgY29uc3QgcGFydHMgPSBtYXRjaFsxXS5zcGxpdCgnLycpO1xuICAgIGxldCBjdXJyZW50OiBhbnkgPSBkZWZpbml0aW9ucztcbiAgICBmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9+MS9nLCAnLycpLnJlcGxhY2UoL34wL2csICd+Jyk7XG4gICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShwYXJ0KSkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbn1cblxuLyoqXG4gKiDDpcKPwpbDpcKbwp5TY2hlbWHDr8K8wozDpcK5wrbDpcKkwoTDp8KQwoYgYCRyZWZgIMOnwprChMOlwoXCs8OnwrPCu1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVTY2hlbWEoXG4gIHNjaGVtYTogU0ZTY2hlbWEsXG4gIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24gPSB7fSxcbik6IFNGU2NoZW1hIHtcbiAgaWYgKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XG4gICAgY29uc3QgJHJlZlNjaGVtYSA9IGZpbmRTY2hlbWFEZWZpbml0aW9uKHNjaGVtYS4kcmVmLCBkZWZpbml0aW9ucyk7XG4gICAgLy8gcmVtb3ZlICRyZWYgcHJvcGVydHlcbiAgICBjb25zdCB7ICRyZWYsIC4uLmxvY2FsU2NoZW1hIH0gPSBzY2hlbWE7XG4gICAgcmV0dXJuIHJldHJpZXZlU2NoZW1hKHsgLi4uJHJlZlNjaGVtYSwgLi4ubG9jYWxTY2hlbWEgfSwgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJZihzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiBTRlNjaGVtYSB7XG4gIGlmICghKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnaWYnKSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkpIHJldHVybjtcblxuICBpZiAoIXNjaGVtYS5pZi5wcm9wZXJ0aWVzKVxuICAgIHRocm93IG5ldyBFcnJvcihgaWY6IGRvZXMgbm90IGNvbnRhaW4gJ3Byb3BlcnRpZXMnYCk7XG5cbiAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYucHJvcGVydGllcyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBpZktleXMpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS50aGVuLnJlcXVpcmVkKTtcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xuICBpZiAoaGFzRWxzZSkge1xuICAgIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gIH1cblxuICBjb25zdCB2aXNpYmxlSWY6IGFueSA9IHt9O1xuICBjb25zdCB2aXNpYmxlRWxzZTogYW55ID0ge307XG4gIGlmS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgY29uZCA9IHNjaGVtYS5pZi5wcm9wZXJ0aWVzW2tleV0uZW51bTtcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XG4gICAgaWYgKGhhc0Vsc2UpIHZpc2libGVFbHNlW2tleV0gPSAodmFsdWU6IGFueSkgPT4gIWNvbmQuaW5jbHVkZXModmFsdWUpO1xuICB9KTtcblxuICBzY2hlbWEudGhlbi5yZXF1aXJlZC5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlSWYpKTtcbiAgaWYgKGhhc0Vsc2UpXG4gICAgc2NoZW1hLmVsc2UucmVxdWlyZWQuZm9yRWFjaChcbiAgICAgIGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlRWxzZSksXG4gICAgKTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RLZXkoa2V5czogc3RyaW5nW10sIGRldGVjdEtleXM6IHN0cmluZ1tdKSB7XG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBwcm9wZXJ0aWVzIGRvZXMgbm90IGNvbnRhaW4gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkgcmV0dXJuIHByb3BlcnRpZXM7XG4gIGNvbnN0IGFycmF5VG9IYXNoID0gYXJyID0+XG4gICAgYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldltjdXJyXSA9IHRydWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIGNvbnN0IGVycm9yUHJvcExpc3QgPSBhcnIgPT4gYHByb3BlcnR5IFske2Fyci5qb2luKGAnLCAnYCl9XWA7XG5cbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XG4gIGNvbnN0IG9yZGVySGFzaCA9IGFycmF5VG9IYXNoKG9yZGVyKTtcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWAsXG4gICAgKTtcbiAgfVxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xuICBpZiAocmVzdEluZGV4ID09PSAtMSkge1xuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgZG9lcyBub3QgY29udGFpbiAke2Vycm9yUHJvcExpc3QocmVzdCl9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScsXG4gICAgKTtcbiAgfVxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xuICByZXR1cm4gY29tcGxldGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbik6IFNGU2NoZW1hRW51bVtdIHtcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xuICAgIGxpc3QgPSBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gPFNGU2NoZW1hRW51bT57IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9O1xuICAgIH0pO1xuICB9XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgaWYgKH5mb3JtRGF0YS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIC8vIGZpeCBkaXNhYmxlZCBzdGF0dXNcbiAgaWYgKHJlYWRPbmx5KSB7XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IGl0ZW0uZGlzYWJsZWQgPSB0cnVlKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcHlFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbikge1xuICByZXR1cm4gZ2V0RW51bShkZWVwQ29weShsaXN0IHx8IFtdKSwgZm9ybURhdGEsIHJlYWRPbmx5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoXG4gIHNjaGVtYTogU0ZTY2hlbWEsXG4gIHVpOiBTRlVJU2NoZW1hSXRlbSxcbiAgZm9ybURhdGE6IGFueSxcbiAgYXN5bmNBcmdzPzogYW55LFxuKTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4ge1xuICBpZiAodHlwZW9mIHVpLmFzeW5jRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1aVxuICAgICAgLmFzeW5jRGF0YShhc3luY0FyZ3MpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHVpLl9fZGVzdHJveSAhPT0gdHJ1ZSksXG4gICAgICAgIG1hcChsaXN0ID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpLFxuICAgICAgKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0sIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkpKTtcbn1cbiIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFRlcm1pbmF0b3JTZXJ2aWNlIHtcbiAgb25EZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kubmV4dCh0cnVlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuaW1wb3J0IHsgaXNCbGFuayB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Qcm9wZXJ0eSB7XG4gIHNjaGVtYVZhbGlkYXRvcjogKHZhbHVlOiBhbnkpID0+IEVycm9yRGF0YVtdO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xuICBmb3JtRGF0YToge307XG4gIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PjtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBFcnJvckRhdGFbXSA9IG51bGw7XG4gIHByb3RlY3RlZCBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF9lcnJvcnNDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy51aSA9IHVpO1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEsIHtcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxuICAgIH0pO1xuICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5fcm9vdCA9IHBhcmVudC5yb290O1xuICAgIH0gZWxzZSBpZiAodGhpcyBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSA8UHJvcGVydHlHcm91cD4oPGFueT50aGlzKTtcbiAgICB9XG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XG4gIH1cblxuICBnZXQgdmFsdWVDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZUNoYW5nZXM7XG4gIH1cblxuICBnZXQgZXJyb3JzQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzQ2hhbmdlcztcbiAgfVxuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGU7XG4gIH1cblxuICBnZXQgcGFyZW50KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBnZXQgcm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdCB8fCA8UHJvcGVydHlHcm91cD4oPGFueT50aGlzKTtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBnZXQgdmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycyA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcKAwrxcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCuiBgc2NoZW1hLmRlZmF1bHRgXG4gICAqXG4gICAqIEBwYXJhbSBvbmx5U2VsZiBgdHJ1ZWAgw6XCj8Kqw6XCr8K5w6XCvcKTw6XCicKNw6XCrcKXw6bCrsK1w6bCm8K0w6bClsKww6XCgMK8w6XCksKMw6bCoMKhw6nCqsKMw6/CvMKbYGZhbHNlYCDDpcKMwoXDpcKQwqvDpMK4worDp8K6wqfDpcKtwpfDpsKuwrVcbiAgICovXG4gIGFic3RyYWN0IHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF91cGRhdGVWYWx1ZSgpOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOmwpvCtMOmwpbCsMOlwoDCvMOkwrjClMOmwqDCocOpwqrCjMOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gW29ubHlTZWxmPWZhbHNlXSDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpMK4worDp8K6wqfDpcKtwpfDpsKuwrVcbiAgICogQHBhcmFtIFtlbWl0VmFsdWVFdmVudD10cnVlXSDDpsKYwq/DpcKQwqbDqMKnwqbDpcKPwpHDpcKAwrzDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXG4gICAgb25seVNlbGYgPSBmYWxzZSxcbiAgICBlbWl0VmFsdWVFdmVudCA9IHRydWUsXG4gICAgZW1pdFZhbGlkYXRvciA9IHRydWUsXG4gICkge1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAoZW1pdFZhbHVlRXZlbnQpIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gYGVtaXRWYWxpZGF0b3JgIMOmwq/Cj8OkwrjCgMOmwqzCocOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOlwrfCssOnwrvCj8OlwozChcOlwpDCq8Olwq7CjMOmwpXCtMOpwpTCmcOowq/Cr8OpwpPCvsOowrfCr8OvwrzCjMOlwpDCjsOnwrvCrcOnwojCtsOoworCgsOnwoLCucOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCoMOpwqHCu8OlwobCjcOowqfCpsOlwo/CkcOmwqDCocOpwqrCjFxuICAgIGlmIChlbWl0VmFsaWRhdG9yICYmIHRoaXMudWkubGl2ZVZhbGlkYXRlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgZW1pdFZhbHVlRXZlbnQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKiogw6bCoMK5w6bCjcKuw6jCt8Kvw6XCvsKEw6bCkMKcw6fCtMKiw6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXG4gIHNlYXJjaFByb3BlcnR5KHBhdGg6IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IHByb3A6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgbGV0IGJhc2U6IFByb3BlcnR5R3JvdXAgPSBudWxsO1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHBhdGhbMF0gPT09ICcvJykge1xuICAgICAgYmFzZSA9IHRoaXMuZmluZFJvb3QoKTtcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsICYmIHByb3AucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiogw6bCn8Klw6bCicK+w6bCoMK5w6jCocKow6XCjcKVw6XCscKew6bCgMKnICovXG4gIGZpbmRSb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIGxldCBwcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICB3aGlsZSAocHJvcGVydHkucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIDxQcm9wZXJ0eUdyb3VwPnByb3BlcnR5O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IGFueSkge1xuICAgIGlmIChpc0JsYW5rKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJldHVybiAoJycgKyB2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfcnVuVmFsaWRhdGlvbigpIHtcbiAgICBsZXQgZXJyb3JzOiBFcnJvckRhdGFbXTtcbiAgICAvLyBUaGUgZGVmaW5pdGlvbiBvZiBzb21lIHJ1bGVzOlxuICAgIC8vIDEuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGEgYW5kIHJlcXVpcmVkIGZpZWxkc1xuICAgIC8vIDIuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGFcbiAgICBjb25zdCBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5RGF0YSh0aGlzLl92YWx1ZSk7XG4gICAgaWYgKGlzRW1wdHkgJiYgdGhpcy51aS5fcmVxdWlyZWQpIHtcbiAgICAgIGVycm9ycyA9IFt7IGtleXdvcmQ6ICdyZXF1aXJlZCcgfV07XG4gICAgfSBlbHNlIGlmIChpc0VtcHR5KSB7XG4gICAgICBlcnJvcnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21WYWxpZGF0b3IgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbVJ1bikudmFsaWRhdG9yO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tVmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGlmIChjdXN0b21FcnJvcnMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIGN1c3RvbUVycm9ycy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIHJlcyk7XG4gICAgICAgICAgdGhpcy53aWRnZXQuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRDdXN0b21FcnJvcnMoZXJyb3JzLCBjdXN0b21FcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXN0b21FcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbGlzdDogRXJyb3JEYXRhW10pIHtcbiAgICAvLyBmaXggZXJyb3IgZm9ybWF0XG4gICAgY29uc3QgaGFzQ3VzdG9tRXJyb3IgPSBsaXN0ICE9IG51bGwgJiYgbGlzdC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNDdXN0b21FcnJvcikge1xuICAgICAgbGlzdC5mb3JFYWNoKChlcnIsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYMOowofCqsOlwq7CmsOkwrnCicOmwqDCocOpwqrCjMOlwpnCqMOlwr/ChcOpwqHCu8OowofCs8OlwrDCkcOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiAnbWVzc2FnZScgw6XCscKew6bCgMKnw6/CvMKMw6fClMKow6TCusKOw6jCocKow6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsYCxcbiAgICAgICAgICApO1xuICAgICAgICBlcnIuX2N1c3RvbSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3JzID0gdGhpcy5tZXJnZUVycm9ycyhlcnJvcnMsIGxpc3QpO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlRXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIG5ld0Vycm9yczogRXJyb3JEYXRhIHwgRXJyb3JEYXRhW10pIHtcbiAgICBpZiAobmV3RXJyb3JzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdFcnJvcnMpKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoLi4ubmV3RXJyb3JzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9ycy5wdXNoKG5ld0Vycm9ycyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIGVtaXRGb3JtYXQgPSB0cnVlKSB7XG4gICAgaWYgKGVtaXRGb3JtYXQgJiYgZXJyb3JzICYmICF0aGlzLnVpLm9ubHlWaXN1YWwpIHtcbiAgICAgIGVycm9ycyA9IGVycm9ycy5tYXAoKGVycjogRXJyb3JEYXRhKSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgICBlcnIuX2N1c3RvbSA9PT0gdHJ1ZSAmJiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkXSB8fFxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZXJyb3JzW2Vyci5rZXl3b3JkXSB8fFxuICAgICAgICAgICAgICBgYDtcblxuICAgICAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZShlcnIpIGFzIHN0cmluZztcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSBhcyBzdHJpbmcpLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC97KFtcXC5hLXowLTldKyl9L2csXG4gICAgICAgICAgICAgICh2OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zW2tleV0gfHwgJycsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnIubWVzc2FnZSA9IG1lc3NhZ2UgYXMgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuX2Vycm9yc0NoYW5nZXMubmV4dChlcnJvcnMpO1xuICAgIC8vIFNob3VsZCBzZW5kIGVycm9ycyB0byBwYXJlbnQgZmllbGRcbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnQuc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnMsIHRoaXMucGF0aCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmpFcnJvcnNbcGF0aF0gPSBlcnJvcnM7XG4gICAgY29uc3QgcGxhdEVycm9yczogRXJyb3JEYXRhW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9vYmpFcnJvcnMpLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkocCk7XG4gICAgICBpZiAocHJvcGVydHkgJiYgIXByb3BlcnR5LnZpc2libGUpIHJldHVybjtcbiAgICAgIHBsYXRFcnJvcnMucHVzaCguLi50aGlzLl9vYmpFcnJvcnNbcF0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RXJyb3JzKHBsYXRFcnJvcnMsIGZhbHNlKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNvbmRpdGlvblxuXG4gIHByaXZhdGUgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUNoYW5nZXMubmV4dCh2aXNpYmxlKTtcbiAgICAvLyDDqcKDwqjDpcKIwobDpsKVwrDDpsKNwq7DpsK6wpDDpsKdwqXDqMKHwqogcmVzZXRcbiAgICB0aGlzLnJlc2V0VmFsdWUodGhpcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBBIGZpZWxkIGlzIHZpc2libGUgaWYgQVQgTEVBU1QgT05FIG9mIHRoZSBwcm9wZXJ0aWVzIGl0IGRlcGVuZHMgb24gaXMgdmlzaWJsZSBBTkQgaGFzIGEgdmFsdWUgaW4gdGhlIGxpc3RcbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIGNvbnN0IHZpc2libGVJZiA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtKS52aXNpYmxlSWY7XG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlSWYgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZpc2libGVJZikubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodmlzaWJsZUlmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNCaW5kaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeVBhdGggaW4gdmlzaWJsZUlmKSB7XG4gICAgICAgIGlmICh2aXNpYmxlSWYuaGFzT3duUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKTtcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ2hlY2sgPSBwcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmkgPSB2aXNpYmxlSWZbZGVwZW5kZW5jeVBhdGhdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmkgPT09ICdmdW5jdGlvbicpIHJldHVybiB2aSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpLmluZGV4T2YoJyRBTlkkJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDaGVjayA9IHByb3BlcnR5Ll92aXNpYmlsaXR5Q2hhbmdlcztcbiAgICAgICAgICAgIGNvbnN0IGFuZCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgIHZhbHVlQ2hlY2ssIHZpc2liaWxpdHlDaGVja1xuICAgICAgICAgICAgKS5waXBlKG1hcChyZXN1bHRzID0+IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0JpbmRpbmcucHVzaChhbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBDYW4ndCBmaW5kIHByb3BlcnR5ICR7ZGVwZW5kZW5jeVBhdGh9IGZvciB2aXNpYmlsaXR5IGNoZWNrIG9mICR7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoXG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tYmluZUxhdGVzdChwcm9wZXJ0aWVzQmluZGluZylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHZhbHVlcyA9PiB2YWx1ZXMuaW5kZXhPZih0cnVlKSAhPT0gLTEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4gdGhpcy5zZXRWaXNpYmxlKHZpc2libGUpKTtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSB8IEZvcm1Qcm9wZXJ0eVtdID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcHJvcGVydHlJZCA9IHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoO1xuXG4gICAgbGV0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBudWxsICYmXG4gICAgICBzdWJQYXRoSWR4ICE9PSAtMSAmJlxuICAgICAgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwXG4gICAgKSB7XG4gICAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgICAgcHJvcGVydHkgPSAoPFByb3BlcnR5R3JvdXA+cHJvcGVydHkpLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBmb3JFYWNoQ2hpbGQoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgc3RyOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgICg8UHJvcGVydHlHcm91cD5jaGlsZCkuZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLl9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUocHJvcGVydHkgPT4ge1xuICAgICAgcHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0b21pY1Byb3BlcnR5IGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy53aWRnZXQpIHRoaXMud2lkZ2V0LnJlc2V0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1ZhbHVlKCkgIT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7fVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPVxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Qcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheVByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHRpY2sgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogYW55LFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcbiAgICBpZiAoaXNOYU4ocG9zKSB8fCBwb3MgPj0gbGlzdC5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IE9iamVjdFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5LmZvcm1EYXRhLCBwcm9wZXJ0eS52YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFkZFByb3BlcnR5KHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgdGhpcy51aS4kaXRlbXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIHRoaXMsXG4gICAgKSBhcyBPYmplY3RQcm9wZXJ0eTtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykucHVzaChuZXdQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXModmFsdWU6IGFueVtdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XG4gICAgICBwcm9wZXJ0eS5yZXNldFZhbHVlKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xuICAgIGVsc2UgdGhpcy5fb2JqRXJyb3JzID0ge307XG4gIH1cblxuICAvLyAjcmVnaW9uIGFjdGlvbnNcblxuICBhZGQodmFsdWU6IGFueSk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KHZhbHVlKTtcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcztcbiAgICB0aGlzLmNsZWFyRXJyb3JzKGxpc3RbaW5kZXhdLnBhdGgpO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICAgICAgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEludmFsaWQgJHt0aGlzLnNjaGVtYS50aXRsZSB8fCAncm9vdCd9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOmAsXG4gICAgICAgIGUsXG4gICAgICApO1xuICAgIH1cbiAgICBvcmRlcmVkUHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxuICAgICAgICAodGhpcy5mb3JtRGF0YSB8fCB7fSlbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3BlcnR5SWQsXG4gICAgICApO1xuICAgICAgdGhpcy5fcHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55ID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBhbnksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHt9XG5cbiAgY3JlYXRlUHJvcGVydHkoXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBwYXRoICs9IChwYXJlbnQgYXMgQXJyYXlQcm9wZXJ0eSkudGljaysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArXG4gICAgICAgICAgICBwYXJlbnQudHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4IHJlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BlcnR5SWQgJiZcbiAgICAgICAgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZCkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmIChcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxuICAgICAgKSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBTRlNjaGVtYSkgPT4gRXJyb3JEYXRhW107XG59XG5cbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnZGF0YS11cmwnLFxuICAgICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdjb2xvcicsXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdtb2JpbGUnLFxuICAgICAgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdpZC1jYXJkJyxcbiAgICAgIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8sXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcblxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIHNldERlZmF1bHQod2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgY3JlYXRlV2lkZ2V0KFxuICAgIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0eXBlOiBzdHJpbmcsXG4gICk6IENvbXBvbmVudFJlZjxXaWRnZXQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PGFueT4+KFxuICAgICAgY29tcG9uZW50Q2xhc3MsXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4pIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuICBwcml2YXRlIF9pdGVtOiBhbnk7XG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVmVWk6IFNGVUlTY2hlbWFJdGVtO1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IG51bGw7XG4gIF9mb3JtRGF0YTogYW55O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpcK4woPDpcKxwoDDr8K8wozDp8KtwonDpcKQwowgYG56TGF5b3V0YMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmhvcml6b250YWwgKi9cbiAgQElucHV0KClcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG5cbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHNjaGVtYTogU0ZTY2hlbWE7XG5cbiAgLyoqIFVJIFNjaGVtYSAqL1xuICBASW5wdXQoKVxuICB1aTogU0ZVSVNjaGVtYTtcblxuICAvKiogw6jCocKow6XCjcKVw6nCu8KYw6jCrsKkw6XCgMK8ICovXG4gIEBJbnB1dCgpXG4gIGZvcm1EYXRhOiB7fTtcblxuICAvKipcbiAgICogw6bCjMKJw6nCksKuXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBudWxsYCDDpsKIwpYgYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6bCicKLw6XCisKow6bCt8K7w6XCisKgw6bCjMKJw6nCksKuw6/CvMKMw6TCvcKGw6TCv8Kdw6fClcKZw6XCrsK5w6XCmcKoXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBub25lYCDDqMKhwqjDp8KkwrrDpsKJwovDpcKKwqjDpsK3wrvDpcKKwqDDpsKMwonDqcKSwq7Dr8K8wozDpMK4wpTDpMK4wo3DpMK/wp3Dp8KVwpnDpcKuwrnDpcKZwqhcbiAgICogLSDDpMK9wr/Dp8KUwqjDpcKbwrrDpcKuwpogYGxhYmVsYCDDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpsKXwqAgYHJlbmRlci5jbGFzc2Agw6XCiMKZw6nCu8KYw6jCrsKkw6TCuMK6w6XCscKFw6TCuMKtw6fCisK2w6bCgMKBXG4gICAqL1xuICBASW5wdXQoKVxuICBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG5cbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxpdmVWYWxpZGF0ZSA9IHRydWU7XG5cbiAgLyoqIMOmwozCh8Olwq7CmsOowqHCqMOlwo3ClSBgYXV0b2NvbXBsZXRlYCDDpcKAwrwgKi9cbiAgQElucHV0KClcbiAgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG5cbiAgLyoqIMOnwqvCi8Olwo3Cs8OmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZmlyc3RWaXN1YWwgPSB0cnVlO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKowqHDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLnNlYXJjaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLmVkaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XG5cbiAgLyoqIMOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOmwo/CkMOkwrrCpMOowqHCqMOlwo3ClcOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClcOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCu8KTw6bCnsKcw6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCisK2w6bCgMKBICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKiogw6jCocKow6XCjcKVw6XCgMK8ICovXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gb3B0aW9ucy5saXZlVmFsaWRhdGU7XG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBvcHRpb25zLmF1dG9jb21wbGV0ZTtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlclByb3BlcnR5KCkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgX3NjaGVtYSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKTtcbiAgICBjb25zdCB7IGRlZmluaXRpb25zIH0gPSBfc2NoZW1hO1xuXG4gICAgY29uc3QgaW5GbiA9IChcbiAgICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICBwYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoXG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNba2V5XSBhcyBTRlNjaGVtYSxcbiAgICAgICAgICBkZWZpbml0aW9ucyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdWkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHsgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlIH0sXG4gICAgICAgICAgcHJvcGVydHkuZm9ybWF0ICYmIEZPUk1BVE1BUFNbcHJvcGVydHkuZm9ybWF0XSxcbiAgICAgICAgICB0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsLFxuICAgICAgICAgICFwcm9wZXJ0eS51aSAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiZcbiAgICAgICAgICBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB0aGlzLl9kZWZVaSxcbiAgICAgICAgICBwcm9wZXJ0eS51aSxcbiAgICAgICAgICB1aVNjaGVtYVt1aUtleV0sXG4gICAgICAgICkgYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIMOnwrvCp8OmwonCv8OnwojCtsOoworCgsOnwoLCucOlwrjCg8OlwrHCgMOlwrHCnsOmwoDCp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IDVcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gMTlcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2w7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS53aWRnZXQgPT09ICdkYXRlJyAmJiB1aS5lbmQgIT0gbnVsbCAmJiBwYXJlbnRTY2hlbWEpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBwYXJlbnRTY2hlbWEucHJvcGVydGllc1t1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGVFbmRQcm9wZXJ0eS51aSwge1xuICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSA9IHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gfHwge307XG4gICAgICAgICAgaW5GbihcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICAodWlTY2hlbWFbdWlLZXldIHx8IHt9KVsnJGl0ZW1zJ10gfHwge30sXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10sXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluSWZGbiA9IChzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U0ZVSVNjaGVtYUl0ZW0+e1xuICAgICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICAgIGxpdmVWYWxpZGF0ZTogdGhpcy5saXZlVmFsaWRhdGUsXG4gICAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucy51aSxcbiAgICAgIF9zY2hlbWEudWksXG4gICAgICB0aGlzLnVpWycqJ10sXG4gICAgKTtcblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZlVpKTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG5cbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIHtcbiAgICAgIGRpKCdjb3ZlciBzY2hlbWEgJiB1aScsIHRoaXMuX3VpLCBfc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTRkJ1dHRvbj57IHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSB9LFxuICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgdGhpcy5idXR0b24sXG4gICAgKTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuZ3JpZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBidG5VaS5zcGFuTGFiZWwsXG4gICAgICAgICAgc3BhbjogYnRuVWkuc3BhbkNvbnRyb2wsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBmaXhlZCBsYWJlbFxuICAgICAgaWYgKHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDDpcKbwrrDpcKuwprDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDpsKgwrfDpcK8wo/Dr8K8wozDpcKIwpnDqcK7wpjDqMKuwqTDpcKxwoXDpMK4wq1cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgJiZcbiAgICAgICAgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91aS5kZWJ1ZykgZGkoJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6bCnMKqw6bCicK+w6XCiMKww6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6fCm8K4w6XCkMKMw6jCh8Kqw6XCrsKaw6TCucKJw6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgIHB1aS5fcmVuZGVyID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgICAgaWYgKCFwdWkuX3JlbmRlcikgcHVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3IoKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogw6XCiMK3w6bClsKwIFNjaGVtYcOvwrzCjMOkwrjCgMOowojCrMOpwpzCgMOowqbCgcOlworCqMOmwoDCgcOkwr/CrsOmwpTCuSBTY2hlbWEgw6bCn8KQw6TCuMKqw6XCgMK8w6bCl8K2w6XCj8Kvw6TCu8Klw6bClsK5w6TCvsK/w6jCsMKDw6fClMKoXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcblxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLl9zY2hlbWEsXG4gICAgICB0aGlzLl91aSxcbiAgICAgIHRoaXMuZm9ybURhdGEsXG4gICAgKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtRGF0YSwgdmFsdWUpO1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpVcbiAgICogQHBhcmFtIFtlbWl0XSDDpsKYwq/DpcKQwqbDqMKnwqbDpcKPwpEgYGZvcm1SZXNldGAgw6TCusKLw6TCu8K2w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJvb3RTdWIoKSB7XG4gICAgaWYgKCF0aGlzLnJvb3RQcm9wZXJ0eSkgcmV0dXJuIDtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PiA9IG51bGw7XG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7fVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkud2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcsXG4gICAgKTtcbiAgICB0aGlzLm9uV2lkZ2V0SW5zdGFuY2lhdGVkKHRoaXMucmVmLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVpLl9fZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxuICBASW5wdXROdW1iZXIoKVxuICBudW06IG51bWJlcjtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmLWZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtV3JhcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgQElucHV0KCkgc2hvd0Vycm9yOiBib29sZWFuO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGdldCB0KCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID09PSBudWxsID8gdGhpcy5zY2hlbWEudGl0bGUgOiB0aGlzLnRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NmLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZi10ZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBTRlRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB0YWJsZTogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLl9hZGRUcGwoXG4gICAgICB0aGlzLnBhdGguc3RhcnRzV2l0aCgnLycpID8gdGhpcy5wYXRoIDogYC9gICsgdGhpcy5wYXRoLFxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIEluamVjdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBmb3JtUHJvcGVydHk6IFQ7XG4gIGVycm9yOiBzdHJpbmc7XG4gIHNob3dFcnJvciA9IGZhbHNlO1xuICBpZCA9ICcnO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudWkuZGVidWcpIGRpKCdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDDpMK4wo3DpsKYwr7Dp8KkwrrDqcKmwpbDpsKswqHDpsKgwqHDqcKqwozDqMKnwobDqMKnwolcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IGVycm9yc1swXS5tZXNzYWdlIDogJyc7XG5cbiAgICAgICAgICBpZiAodGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBpZiAodGhpcy51aS5kZWJ1Zykge1xuICAgICAgZGkoJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBhbnkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1vYmplY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZDsgZWxzZSBub0dyaWRcIj5cbiAgICA8ZGl2IG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxkaXYgbnotY29sXG4gICAgICAgICAgICBbbnpTcGFuXT1cImkuZ3JpZC5zcGFuXCIgW256T2Zmc2V0XT1cImkuZ3JpZC5vZmZzZXRcIlxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcbiAgICAgICAgICAgIFtuekxnXT1cImkuZ3JpZC5sZ1wiIFtuelhsXT1cImkuZ3JpZC54bFwiIFtuelhYbF09XCJpLmdyaWQueHhsXCI+XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm9HcmlkPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMudWkuZ3JpZDtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzW2tleV0gYXMgRm9ybVByb3BlcnR5O1xuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgdGhpcy5ncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FycmF5LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZ3JpZCAmJiB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuKVxuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMudWkuYWRkVGl0bGUgfHwgdGhpcy5sWydhZGRUZXh0J107XG4gICAgdGhpcy5hZGRUeXBlID0gdGhpcy51aS5hZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPVxuICAgICAgdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgdGhpcy5sWydyZW1vdmVUZXh0J107XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZChudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgICAgPGlucHV0IG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ1aS50eXBlIHx8ICd0ZXh0J1wiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cInVpLmF1dG9jb21wbGV0ZVwiXG4gICAgICAgIFthdHRyLmF1dG9Gb2N1c109XCJ1aS5hdXRvZm9jdXNcIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdhZGRvbic7IGVsc2UgaXB0XCI+XG4gICAgICA8bnotaW5wdXQtZ3JvdXBcbiAgICAgICAgW256QWRkT25CZWZvcmVdPVwidWkuYWRkT25CZWZvcmVcIiBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxuICAgICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCIgW256QWRkT25BZnRlckljb25dPVwidWkuYWRkT25BZnRlckljb25cIlxuICAgICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCIgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcbiAgICAgICAgW256U3VmZml4XT1cInVpLnN1ZmZpeFwiIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXB0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAhIShcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlciB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZSB8fFxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVySWNvbiB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZUljb24gfHxcbiAgICAgIHRoaXMudWkucHJlZml4IHx8XG4gICAgICB0aGlzLnVpLnByZWZpeEljb24gfHxcbiAgICAgIHRoaXMudWkuc3VmZml4IHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeEljb25cbiAgICApXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJyAmJiAhdmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxuICAgICAgW256UGFyc2VyXT1cInBhcnNlclwiXG4gICAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCI+XG4gICAgPC9uei1pbnB1dC1udW1iZXI+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIGZvcm1hdHRlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gPyBzY2hlbWEubWluaW11bSArIDEgOiBzY2hlbWEubWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWF4ID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gPyBzY2hlbWEubWF4aW11bSAtIDEgOiBzY2hlbWEubWF4aW11bTtcbiAgICB9XG4gICAgdGhpcy5zdGVwID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dWkucHJlZml4fSAke3ZhbHVlfWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt2YWx1ZX0gJHt1aS51bml0fWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XG5cbiAgICAgIDxuei1tb250aC1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgID48L256LW1vbnRoLXBpY2tlcj5cblxuICAgICAgPG56LXdlZWstcGlja2VyICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9uei13ZWVrLXBpY2tlcj5cblxuICAgICAgPG56LXJhbmdlLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XG5cbiAgICAgIDxuei1kYXRlLXBpY2tlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIMOlwoXCrMOlwoXCsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdmFsdWUgPSB0aGlzLnRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy50b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IHZhbHVlLm1hcChkID0+IGZvcm1hdChkLCB0aGlzLmZvcm1hdCkpXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGltZS1waWNrZXJcbiAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Rm9ybWF0XT1cImkuZGlzcGxheUZvcm1hdFwiXG4gICAgICBbbnpBbGxvd0VtcHR5XT1cImkuYWxsb3dFbXB0eVwiXG4gICAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxuICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJpLmRlZmF1bHRPcGVuVmFsdWVcIlxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJ1aS5kaXNhYmxlZEhvdXJzXCJcbiAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxuICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInVpLmRpc2FibGVkU2Vjb25kc1wiXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImkuaGlkZURpc2FibGVkT3B0aW9uc1wiXG4gICAgICBbbnpIb3VyU3RlcF09XCJpLmhvdXJTdGVwXCJcbiAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiaS5taW51dGVTdGVwXCJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInVpLnBvcHVwQ2xhc3NOYW1lXCJcbiAgICAgID5cbiAgICA8L256LXRpbWUtcGlja2VyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxuICAgICAgPyB1aS5mb3JtYXRcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyAneCdcbiAgICAgICAgOiAnSEg6bW06c3MnO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkgdmFsdWUgKz0gJzowMCc7XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoXG4gICAgICAgIERhdGUuVVRDKFxuICAgICAgICAgIDE5NzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksXG4gICAgICAgICAgdmFsdWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgIHZhbHVlLmdldFNlY29uZHMoKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhZGlvLWdyb3VwXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TmFtZV09XCJpZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3R5bGVUeXBlXCI+XG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBhbnlbXSA9IFtdO1xuICBzdHlsZVR5cGU6IGJvb2xlYW47XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3R5bGVUeXBlID0gKHRoaXMudWkuc3R5bGVUeXBlIHx8ICdkZWZhdWx0JykgPT09ICdkZWZhdWx0JztcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsVGl0bGUgPSBgYDtcbiAgaW5pdGVkID0gZmFsc2U7XG5cbiAgZ2V0IGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcC5sb2NhbGU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbFRpdGxlID0gbGlzdC5sZW5ndGggPT09IDAgPyAnJyA6IHRoaXMuc2NoZW1hLnRpdGxlO1xuICAgICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcblxuICAgICAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKTtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5U2V0KCkge1xuICAgIGNvbnN0IGNoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpLnNldFZhbHVlKGNoZWNrTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UoY2hlY2tMaXN0KTtcbiAgfVxuXG4gIGdyb3VwSW5HcmlkQ2hhbmdlKHZhbHVlczogYW55W10pIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChcbiAgICAgIGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSksXG4gICAgKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKGU6IEV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSBmYWxzZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlzc3VlczogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzIwMjVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1ib29sZWFuJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotc3dpdGNoXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2VkQ2hpbGRyZW5dPVwidWkuY2hlY2tlZENoaWxkcmVuXCJcbiAgICAgIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVpLnVuQ2hlY2tlZENoaWxkcmVuXCI+XG4gICAgPC9uei1zd2l0Y2g+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8dGV4dGFyZWEgbnotaW5wdXRcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekF1dG9zaXplXT1cImF1dG9zaXplXCI+XG4gICAgPC90ZXh0YXJlYT5cblxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXV0b3NpemU6IGFueSA9IHRydWU7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmF1dG9zaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0aGlzLnVpLmF1dG9zaXplO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zZWxlY3RcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwiaS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256U2VydmVyU2VhcmNoXT1cImkuc2VydmVyU2VhcmNoXCJcbiAgICAgIFtuek1heE11bHRpcGxlQ291bnRdPVwiaS5tYXhNdWx0aXBsZUNvdW50XCJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpPblNlYXJjaCk9XCJzZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhhc0dyb3VwXCI+XG4gICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBkYXRhXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XG4gICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPlxuICAgICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGkuY2hpbGRyZW5cIlxuICAgICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgICAgPC9uei1vcHRpb24tZ3JvdXA+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRoaXMudWkuYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogdGhpcy51aS5kcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodGhpcy51aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IHRoaXMudWkubWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IHRoaXMudWkubW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfDpsKXwqDDpsKzwpXDpsKJwr7DpcKIwrAnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHRoaXMudWkuc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuaGFzR3JvdXAgPSBsaXN0LmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHRoaXMudWkub3BlbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBhbnlbXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20odmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHRvQm9vbCwgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei10cmVlLXNlbGVjdFxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiaS5hc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiZGF0YVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kZWRLZXlzXT1cImkuZGVmYXVsdEV4cGFuZGVkS2V5c1wiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJlZS1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBwcml2YXRlIGRjKCkge1xuICAgIC8vIE11c2Ugd2FpdCBgbnotdHJlZS1zZWxlY3RgIHdyaXRlIHZhbHVlc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yMzE2XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5EYXRhKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUoZGVlcENvcHkobm9kZSkgYXMgYW55KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgYXN5bmNEYXRhOiB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nLFxuICAgICAgZGVmYXVsdEV4cGFuZEFsbDogdG9Cb29sKHVpLmRlZmF1bHRFeHBhbmRBbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM6IHVpLmRlZmF1bHRFeHBhbmRlZEtleXMgfHwgW10sXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKVxuICAgICAgLnBpcGUobWFwKGxpc3QgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpXG4gICAgICAucGlwZShtYXAoKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgZS5ub2RlLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgICAgZS5ub2RlLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGFnXG4gICAgICAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCJcbiAgICAgIG56TW9kZT1cImNoZWNrYWJsZVwiXG4gICAgICBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiXG4gICAgICAobnpBZnRlckNsb3NlKT1cIl9hZnRlckNsb3NlKClcIlxuICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXG4gICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCI+XG4gICAgICB7e2kubGFiZWx9fVxuICAgIDwvbnotdGFnPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XG4gIH1cblxuICBfYWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy51aS5hZnRlckNsb3NlKSB0aGlzLnVpLmFmdGVyQ2xvc2UoKTtcbiAgfVxuXG4gIF9jbG9zZShlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbkNsb3NlKSB0aGlzLnVpLm9uQ2xvc2UoZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXVwbG9hZFxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgW256RmlsZUxpc3RdPVwiZmlsZUxpc3RcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgIFtuekFjY2VwdF09XCJpLmFjY2VwdFwiXG4gICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgW256UmVtb3ZlXT1cInVpLnJlbW92ZVwiXG4gICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxuICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cInBsdXNcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZHJhZydcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgbnotaWNvbiB0eXBlPVwiaW5ib3hcIj48L2k+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIiBbaW5uZXJIVE1MXT1cImkuaGludFwiPjwvcD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+XG4gICAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJ1cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei11cGxvYWQ+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2QpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfDp8KCwrnDpcKHwrvDpMK4worDpMK8wqAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxuICAgICAgc2l6ZTogdGhpcy51aS5maWxlU2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDDpcKNwpXDpcKHwrvDpsKIwpbDpsKLwpbDpcKKwqjDpsKWwofDpMK7wrbDpcKIwrDDqMKvwqXDpcKMwrrDpcKfwp/DpMK4worDpMK8wqBgO1xuICAgICAgdGhpcy5pLmhpbnQgPVxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYMOmwpTCr8OmwozCgcOlwo3ClcOkwrjCqsOmwojClsOmwonCucOpwofCj8OvwrzCjMOkwrjCpcOnwqbCgcOkwrjCisOkwrzCoMOlwoXCrMOlwo/CuMOmwpXCsMOmwo3CrsOmwojClsOlwoXCtsOkwrvClsOlwq7CicOlwoXCqMOmwpbCh8OkwrvCtmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5tb2RhbFNydlxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10cmFuc2ZlclxuICAgICAgW256RGF0YVNvdXJjZV09XCJsaXN0XCJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXG4gICAgICBbbnpMaXN0U3R5bGVdPVwidWkubGlzdFN0eWxlXCJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlYXJjaENoYW5nZSk9XCJfc2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJhbnNmZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuICBpOiBhbnk7XG4gIHByaXZhdGUgX2RhdGE6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdGl0bGVzOiB0aGlzLnVpLnRpdGxlcyB8fCBbJycsICcnXSxcbiAgICAgIG9wZXJhdGlvbnM6IHRoaXMudWkub3BlcmF0aW9ucyB8fCBbJycsICcnXSxcbiAgICAgIGl0ZW1Vbml0OiB0aGlzLnVpLml0ZW1Vbml0IHx8ICfDqcKhwrknLFxuICAgICAgaXRlbXNVbml0OiB0aGlzLnVpLml0ZW1zVW5pdCB8fCAnw6nCocK5JyxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgICAgaWYgKH4oZm9ybURhdGEgYXMgYW55W10pLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHRoaXMuX2RhdGEgPSBsaXN0LmZpbHRlcih3ID0+IHcuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIF9jYW5Nb3ZlID0gKGFyZzogYW55KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT4ge1xuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcbiAgfTtcblxuICBfY2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnRvID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoLi4ub3B0aW9ucy5saXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWFyY2hDaGFuZ2UpIHRoaXMudWkuc2VhcmNoQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotc2xpZGVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelJhbmdlXT1cInVpLnJhbmdlXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxuICAgICAgW256RG90c109XCJ1aS5kb3RzXCJcbiAgICAgIFtuekluY2x1ZGVkXT1cImluY2x1ZGVkXCJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcbiAgICAgIChuek9uQWZ0ZXJDaGFuZ2UpPVwiX2FmdGVyQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXNsaWRlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWFya3M6IGFueTtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNjaGVtYS5taW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2hhbmdlKSB0aGlzLnVpLmFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiJGFueSh1aSkuX3JlbmRlclwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGhpcywgc2NoZW1hOiBzY2hlbWEsIHVpOiB1aSB9XCI+PC9uZy10ZW1wbGF0ZT5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotcmF0ZVxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImFsbG93Q2xlYXJcIlxuICAgICAgW256QWxsb3dIYWxmXT1cImFsbG93SGFsZlwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFtuekNvdW50XT1cImNvdW50XCI+PC9uei1yYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwiaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWVcIiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyBnZW5UZXh0KCkgfX08L3NwYW4+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGFsbG93SGFsZjogYm9vbGVhbjtcbiAgYWxsb3dDbGVhcjogYm9vbGVhbjtcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBoYXNUZXh0ID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY291bnQgPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDU7XG4gICAgdGhpcy5hbGxvd0hhbGYgPSAodGhpcy5zY2hlbWEubXVsdGlwbGVPZiB8fCAwLjUpID09PSAwLjU7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sKHRoaXMudWkuYWxsb3dDbGVhciwgdHJ1ZSk7XG4gICAgdGhpcy5hdXRvRm9jdXMgPSB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKTtcbiAgICB0aGlzLmhhc1RleHQgPSAhIXRoaXMudWkudGV4dDtcbiAgfVxuXG4gIGdlblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzVGV4dFxuICAgICAgPyAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpXG4gICAgICA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBmbGF0TWFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXG4gICdxcS5jb20nLFxuICAnMTYzLmNvbScsXG4gICdnbWFpbC5jb20nLFxuICAnMTI2LmNvbScsXG4gICdhbGl5dW4uY29tJyxcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxuei1hdXRvY29tcGxldGUgI2F1dG9cbiAgICAgICAgW256QmFja2ZpbGxdPVwiaS5iYWNrZmlsbFwiXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXG4gICAgICAgIFtueldpZHRoXT1cImkud2lkdGhcIlxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudD8ubnpWYWx1ZSlcIj5cbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkudmFsdWVcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XG4gICAgICA8L256LWF1dG9jb21wbGV0ZT5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XG4gIHByaXZhdGUgaXNBc3luYyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2wodGhpcy51aS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxuICAgICAgd2lkdGg6IHRoaXMudWkud2lkdGggfHwgdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IHRoaXMudWkuZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogdGhpcy51aS5maWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLmZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cbiAgICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuXG4gICAgdGhpcy5pc0FzeW5jID0gISF0aGlzLnVpLmFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgZmxhdE1hcChcbiAgICAgICAgaW5wdXQgPT5cbiAgICAgICAgICB0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpLFxuICAgICAgKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oRU1BSUxTVUZGSVgsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxuICAgICAgICAgIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhLFxuICAgICAgICAgIHRoaXMuc2NoZW1hLnJlYWRPbmx5XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSxcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVtYWlsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gb2YoXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1jYXNjYWRlclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxuICAgICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwidWkuY2hhbmdlT25TZWxlY3RcIlxuICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXG4gICAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxuICAgICAgW256TWVudUNsYXNzTmFtZV09XCJ1aS5tZW51Q2xhc3NOYW1lXCJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxuICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5XCJcbiAgICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eVwiXG4gICAgICBbbnpMb2FkRGF0YV09XCJsb2FkRGF0YVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpTaG93QXJyb3ddPVwic2hvd0Fycm93XCJcbiAgICAgIFtuelNob3dJbnB1dF09XCJzaG93SW5wdXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIChuekNsZWFyKT1cIl9jbGVhcigkZXZlbnQpXCJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiX3Zpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdGlvbkNoYW5nZSk9XCJfc2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LWNhc2NhZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XG4gIHNob3dBcnJvdzogYm9vbGVhbjtcbiAgc2hvd0lucHV0OiBib29sZWFuO1xuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbG9hZERhdGE6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGV4dCA9IHRoaXMudWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnO1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHRoaXMudWkuc2hvd0Fycm93LCB0cnVlKTtcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbCh0aGlzLnVpLnNob3dJbnB1dCwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdGhpcy51aS50cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcbiAgICBpZiAoISF0aGlzLnVpLmFzeW5jRGF0YSkge1xuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh0aGlzLnVpLmFzeW5jRGF0YSBhcyBhbnkpKG5vZGUsIGluZGV4LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMudWkudmlzaWJsZUNoYW5nZSAmJiB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMudWkuY2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UgJiYgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuc2VsZWN0ICYmIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NsZWFyKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuY2xlYXIgJiYgdGhpcy51aS5jbGVhcihvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgICAgPG56LW1lbnRpb24gI21lbnRpb25zXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxuICAgICAgICBbbnpQcmVmaXhdPVwiaS5wcmVmaXhcIlxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgbnpNZW50aW9uVHJpZ2dlciBuei1pbnB1dFxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW256QXV0b3NpemVdPVwidWkuYXV0b3NpemVcIj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9uei1tZW50aW9uPlxuXG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gICAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB0aGlzLnVpLnZhbHVlV2l0aCB8fCAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgIG5vdEZvdW5kQ29udGVudDpcbiAgICAgICAgdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOlwozCucOpwoXCjcOnwrvCk8Omwp7CnMOvwrzCjMOowr3Cu8OmwpXCssOnwqnCusOmwqDCvMOlwq7CjMOmwojCkMOowr7Ck8OlwoXCpScsXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMudWkucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiB0aGlzLnVpLnByZWZpeCB8fCAnQCcsXG4gICAgfTtcbiAgICBjb25zdCBtaW4gPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTEsXG4gICAgICBtYXggPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogLTE7XG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoXG4gICAgICAgIHZhbHVlOiBhbnksXG4gICAgICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxuICAgICAgICBmb3JtOiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwrDCkcOmwo/CkMOlwo/CiiAke21pbn0gw6bCrMKhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDDpsKcwoDDpcKkwprDpsKPwpDDpcKPwoogJHttYXh9IMOmwqzCoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdCkgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfc2VhcmNoKG9wdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAge3sgdmFsdWUgfHwgdWkuZGVmYXVsdFRleHQgfHwgJy0nIH19XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldC5mYWN0b3J5JztcblxuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi90ZXh0L3RleHQud2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIE56V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCBPYmplY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgQXJyYXlXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dCcsIFRleHRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgRGF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFRpbWVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBCb29sZWFuV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRhcmVhV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyZWUtc2VsZWN0JywgVHJlZVNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGFnJywgVGFnV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cGxvYWQnLCBVcGxvYWRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyYW5zZmVyJywgVHJhbnNmZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NsaWRlcicsIFNsaWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmF0ZScsIFJhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2F1dG9jb21wbGV0ZScsIEF1dG9Db21wbGV0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2FzY2FkZXInLCBDYXNjYWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbWVudGlvbicsIE1lbnRpb25XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2N1c3RvbScsIEN1c3RvbVdpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNGRml4ZWREaXJlY3RpdmUgfSBmcm9tICcuL3NmLWZpeGVkLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNGQ29tcG9uZW50LFxuICBTRkl0ZW1Db21wb25lbnQsXG4gIFNGSXRlbVdyYXBDb21wb25lbnQsXG4gIFNGVGVtcGxhdGVEaXJlY3RpdmUsXG4gIFNGRml4ZWREaXJlY3RpdmUsXG5dO1xuXG4vLyAjcmVnaW9uIHdpZGdldHNcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcblxuY29uc3QgV0lER0VUUyA9IFtcbiAgT2JqZWN0V2lkZ2V0LFxuICBBcnJheVdpZGdldCxcbiAgU3RyaW5nV2lkZ2V0LFxuICBOdW1iZXJXaWRnZXQsXG4gIERhdGVXaWRnZXQsXG4gIFRpbWVXaWRnZXQsXG4gIFJhZGlvV2lkZ2V0LFxuICBDaGVja2JveFdpZGdldCxcbiAgQm9vbGVhbldpZGdldCxcbiAgVGV4dGFyZWFXaWRnZXQsXG4gIFNlbGVjdFdpZGdldCxcbiAgVHJlZVNlbGVjdFdpZGdldCxcbiAgVGFnV2lkZ2V0LFxuICBVcGxvYWRXaWRnZXQsXG4gIFRyYW5zZmVyV2lkZ2V0LFxuICBTbGlkZXJXaWRnZXQsXG4gIFJhdGVXaWRnZXQsXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcbiAgQ2FzY2FkZXJXaWRnZXQsXG4gIE1lbnRpb25XaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldCxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uV0lER0VUU10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLldJREdFVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlbG9uRm9ybUNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogV2lkZ2V0UmVnaXN0cnksIHVzZUNsYXNzOiBOeldpZGdldFJlZ2lzdHJ5IH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiZGVlcENvcHkiLCJ0YWtlV2hpbGUiLCJtYXAiLCJvZiIsIlN1YmplY3QiLCJCZWhhdmlvclN1YmplY3QiLCJPYnNlcnZhYmxlIiwiY29tYmluZUxhdGVzdCIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJPcHRpb25hbCIsIkluamVjdCIsIkluamVjdGFibGUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiRGVsb25Mb2NhbGVTZXJ2aWNlIiwiSW5wdXQiLCJPdXRwdXQiLCJ0c2xpYl8xLl9fZGVjb3JhdGUiLCJJbnB1dEJvb2xlYW4iLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0TnVtYmVyIiwiVGVtcGxhdGVSZWYiLCJmaWx0ZXIiLCJIb3N0QmluZGluZyIsIk56VHJlZU5vZGUiLCJkZWVwR2V0IiwiTnpNb2RhbFNlcnZpY2UiLCJkZWJvdW5jZVRpbWUiLCJzdGFydFdpdGgiLCJmbGF0TWFwIiwidGFwIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkRlbG9uVXRpbE1vZHVsZSIsIkRlbG9uTG9jYWxlTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxRQUFhLGFBQWEsR0FBRztRQUMzQixjQUFjLEVBQVUsc0NBQVE7UUFDaEMsTUFBTSxFQUFrQiwyQ0FBYTtRQUNyQyxlQUFlLEVBQVMscUNBQVk7UUFDcEMsb0JBQW9CLEVBQUksd0RBQVc7UUFDbkMsS0FBSyxFQUFtQixpRkFBcUI7UUFDN0MsWUFBWSxFQUFZLG9GQUE2QjtRQUNyRCxJQUFJLEVBQW9CLDBFQUFjO1FBQ3RDLE1BQU0sRUFBa0IsZ0NBQU87O1FBQy9CLElBQUksRUFBb0IsdUNBQWM7UUFDdEMsUUFBUSxFQUFnQixvQkFBSztRQUM3QixTQUFTLEVBQWUseUNBQWdCO1FBQ3hDLFNBQVMsRUFBZSxxREFBa0I7UUFDMUMsT0FBTyxFQUFpQixrQ0FBd0I7UUFDaEQsYUFBYSxFQUFXLGtDQUF3QjtRQUNoRCxPQUFPLEVBQWlCLGtDQUF3QjtRQUNoRCxhQUFhLEVBQVcsa0NBQXdCO1FBQ2hELFFBQVEsRUFBZ0IsK0NBQWlCO1FBQ3pDLFFBQVEsRUFBZ0IsK0NBQWlCO1FBQ3pDLGFBQWEsRUFBVyxxREFBa0I7UUFDMUMsYUFBYSxFQUFXLHFEQUFrQjtRQUMxQyxVQUFVLEVBQWMsMERBQXVCO1FBQy9DLEdBQUcsRUFBcUIsK0NBQW9CO1FBQzVDLEtBQUssRUFBbUIsb0VBQTBCO1FBQ2xELE9BQU8sRUFBaUIsNENBQVM7UUFDakMsV0FBVyxFQUFhLHFIQUFnQztRQUN4RCxNQUFNLEVBQWtCLGdDQUFPO1FBQy9CLGFBQWEsRUFBVyxvREFBeUI7UUFDakQsZUFBZSxFQUFTLHlFQUE0QjtRQUNwRCxNQUFNLEVBQWtCLHVGQUFtQztRQUMzRCxLQUFLLEVBQW1CLHNDQUFRO1FBQ2hDLFFBQVEsRUFBZ0Isd0RBQVc7UUFDbkMsc0JBQXNCLEVBQUUsNkRBQStCO1FBQ3ZELHNCQUFzQixFQUFFLDZEQUErQjtRQUN2RCxFQUFFLEVBQXNCLDJEQUEyQjtLQUNwRDs7Ozs7O0FDckNEO1FBR0E7Ozs7Ozs7WUFPRSxtQkFBYyxHQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7WUFVN0MsaUJBQVksR0FBSSxJQUFJLENBQUM7Ozs7WUFJckIsaUJBQVksR0FBa0IsSUFBSSxDQUFDOzs7O1lBSW5DLGdCQUFXLEdBQUksS0FBSyxDQUFDOzs7O1lBSXJCLGVBQVUsR0FBSSxLQUFLLENBQUM7Ozs7WUFJcEIsV0FBTSxHQUErQixhQUFhLENBQUM7Ozs7WUFZbkQsV0FBTSxHQUFjO2dCQUNsQixXQUFXLEVBQUUsU0FBUztnQkFDdEIsVUFBVSxFQUFFLFNBQVM7YUFDdEIsQ0FBQzs7OztZQUlGLHVCQUFrQixHQUFJLHFCQUFxQixDQUFDOzs7O1lBSTVDLHVCQUFrQixHQUFJLEdBQUcsQ0FBQzs7OztZQUkxQix1QkFBa0IsR0FBSSxVQUFVLENBQUM7Ozs7WUFJakMsdUJBQWtCLEdBQUksR0FBRyxDQUFDO1NBQzNCO1FBQUQsc0JBQUM7SUFBRCxDQUFDOztJQ3JFRDs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFFRCxJQUFPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTtBQUVELGFBQWdCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUMvRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxVQUFVO1lBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUMzRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztBQUVELGFBQWdCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztBQUVELGFBSWdCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsYUFBYTtRQUNqRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkksQ0FBQztBQUVELGFBeUNnQixRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtvQkFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFFRCxhQUFnQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVELGFBQWdCLFFBQVE7UUFDcEIsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0FDcElELFFBQWEsVUFBVSxHQUFHO1FBQ3hCLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsc0JBQXNCO1NBQy9CO1FBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1FBQzlDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtRQUNyRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBQ3hCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7UUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtRQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7S0FDekI7Ozs7O0FBRUQsYUFBZ0IsT0FBTyxDQUFDLENBQU07UUFDNUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7OztBQUVELGFBQWdCLE1BQU0sQ0FBQyxLQUFVLEVBQUUsWUFBcUI7UUFDdEQsT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7SUFDL0QsQ0FBQzs7Ozs7QUFFRCxhQUFnQixFQUFFO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7O1FBRXhCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxXQUFTLElBQUksR0FBRTtJQUN4QixDQUFDOzs7Ozs7O0lBR0QsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsV0FBK0I7OztZQUNuRSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztnQkFFZixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUM3QixPQUFPLEdBQVEsV0FBVzs7Z0JBQzlCLEtBQWlCLElBQUEsVUFBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQW5CLElBQUksSUFBSSxrQkFBQTtvQkFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN6Qjt5QkFBTTt3QkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO3FCQUM3RDtpQkFDRjs7Ozs7Ozs7Ozs7Ozs7O1lBQ0QsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7Ozs7QUFLRCxhQUFnQixjQUFjLENBQzVCLE1BQWdCLEVBQ2hCLFdBQW9DO1FBQXBDLDRCQUFBO1lBQUEsZ0JBQW9DOztRQUVwQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUMzQixVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUM7O1lBRXpELElBQUEsa0JBQUksRUFBRSxzQ0FBYztZQUM1QixPQUFPLGNBQWMsY0FBTSxVQUFVLEVBQUssV0FBVyxHQUFJLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0FBRUQsYUFBZ0IsU0FBUyxDQUFDLE1BQWdCLEVBQUUsRUFBcUI7UUFDL0QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUFFLE9BQU87UUFFNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O1lBRWpELE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7O1lBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0IsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDekQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksT0FBTyxFQUFFO1lBQ1gsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRTs7WUFFSyxTQUFTLEdBQVEsRUFBRTs7WUFDbkIsV0FBVyxHQUFRLEVBQUU7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7O2dCQUNWLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO1lBQzNDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxPQUFPO2dCQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDO1NBQ3ZFLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEVBQUUsQ0FBQyxNQUFJLEdBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksT0FBTztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDMUIsVUFBQSxHQUFHLElBQUksUUFBQyxFQUFFLENBQUMsTUFBSSxHQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxJQUFDLENBQy9DLENBQUM7UUFFSixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFjLEVBQUUsVUFBb0I7UUFDckQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQW9DLEdBQUcsTUFBRyxDQUFDLENBQUM7YUFDN0Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7QUFFRCxhQUFnQixlQUFlLENBQUMsVUFBb0IsRUFBRSxLQUFlO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sVUFBVSxDQUFDOztZQUN2QyxXQUFXLEdBQUcsVUFBQSxHQUFHO1lBQ3JCLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixPQUFPLElBQUksQ0FBQzthQUNiLEVBQUUsRUFBRSxDQUFDO1NBQUE7O1lBQ0YsYUFBYSxHQUFHLFVBQUEsR0FBRyxJQUFJLE9BQUEsZUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFHLEdBQUE7O1lBRXZELFlBQVksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDOztZQUN0QyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFDOUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUM7UUFDNUUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQ2IsOENBQTRDLGFBQWEsQ0FBQyxVQUFVLENBQUcsQ0FDeEUsQ0FBQztTQUNIOztZQUNLLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQzs7WUFDbEQsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixNQUFNLElBQUksS0FBSyxDQUNiLDJDQUF5QyxhQUFhLENBQUMsSUFBSSxDQUFHLENBQy9ELENBQUM7YUFDSDtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQ2IsMkRBQTJELENBQzVELENBQUM7U0FDSDs7WUFDSyxRQUFRLFlBQU8sS0FBSyxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxNQUFNLE9BQWYsUUFBUSxZQUFRLFNBQVMsRUFBRSxDQUFDLEdBQUssSUFBSSxHQUFFO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7QUFFRCxhQUFnQixPQUFPLENBQUMsSUFBVyxFQUFFLFFBQWEsRUFBRSxRQUFpQjtRQUNuRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDMUUsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTO2dCQUN4QiwwQkFBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBQzthQUNuRCxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUFFLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFrQjtnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4RCxDQUFDLENBQUM7U0FDSjs7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFrQixJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUEsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0FBRUQsYUFBZ0IsV0FBVyxDQUFDLElBQVcsRUFBRSxRQUFhLEVBQUUsUUFBaUI7UUFDdkUsT0FBTyxPQUFPLENBQUNDLGFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0FBRUQsYUFBZ0IsT0FBTyxDQUNyQixNQUFnQixFQUNoQixFQUFrQixFQUNsQixRQUFhLEVBQ2IsU0FBZTtRQUVmLElBQUksT0FBTyxFQUFFLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEVBQUU7aUJBQ04sU0FBUyxDQUFDLFNBQVMsQ0FBQztpQkFDcEIsSUFBSSxDQUNIQyxtQkFBUyxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksR0FBQSxDQUFDLEVBQ3RDQyxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUEsQ0FBQyxDQUN0RCxDQUFDO1NBQ0w7UUFDRCxPQUFPQyxPQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztBQ2hNRDtRQUtFO1lBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJQyxZQUFPLEVBQUUsQ0FBQztTQUNoQzs7OztRQUVELG1DQUFPOzs7WUFBUDtnQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtRQUNILHdCQUFDO0lBQUQsQ0FBQzs7Ozs7Ozs7O0FDQUQ7OztRQWlCRSxzQkFDRSxzQkFBOEMsRUFDOUMsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQXFCLEVBQ3JCLElBQVksRUFDSixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtZQW5CbEMsV0FBTSxHQUFRLElBQUksQ0FBQztZQUVYLFlBQU8sR0FBZ0IsSUFBSSxDQUFDO1lBQzFCLGVBQVUsR0FBbUMsRUFBRSxDQUFDO1lBQ2xELGtCQUFhLEdBQUcsSUFBSUMsb0JBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztZQUMvQyxtQkFBYyxHQUFHLElBQUlBLG9CQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7WUFDaEQsYUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQix1QkFBa0IsR0FBRyxJQUFJQSxvQkFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1lBYzlELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RFLGNBQWMscUJBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQVk7YUFDbkQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLFlBQVksYUFBYSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSywwQ0FBd0IsSUFBSSxLQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELHNCQUFJLHNDQUFZOzs7Z0JBQWhCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQjs7O1dBQUE7UUFFRCxzQkFBSSx1Q0FBYTs7O2dCQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDNUI7OztXQUFBO1FBRUQsc0JBQUksOEJBQUk7OztnQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3pCOzs7V0FBQTtRQUVELHNCQUFJLGdDQUFNOzs7Z0JBQVY7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7V0FBQTtRQUVELHNCQUFJLDhCQUFJOzs7Z0JBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSywyQ0FBeUIsSUFBSSxLQUFDLENBQUM7YUFDakQ7OztXQUFBO1FBRUQsc0JBQUksOEJBQUk7OztnQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7OztXQUFBO1FBRUQsc0JBQUksK0JBQUs7OztnQkFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEI7OztXQUFBO1FBRUQsc0JBQUksZ0NBQU07OztnQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7OztXQUFBO1FBRUQsc0JBQUksaUNBQU87OztnQkFBWDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7OztXQUFBO1FBRUQsc0JBQUksK0JBQUs7OztnQkFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO2FBQzlCOzs7V0FBQTs7Ozs7Ozs7Ozs7Ozs7O1FBZ0NELDZDQUFzQjs7Ozs7Ozs7WUFBdEIsVUFDRSxRQUFnQixFQUNoQixjQUFxQixFQUNyQixhQUFvQjtnQkFGcEIseUJBQUE7b0JBQUEsZ0JBQWdCOztnQkFDaEIsK0JBQUE7b0JBQUEscUJBQXFCOztnQkFDckIsOEJBQUE7b0JBQUEsb0JBQW9COztnQkFFcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUVwQixJQUFJLGNBQWMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQzs7Z0JBR0QsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO29CQUNsRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3ZCO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNyRTthQUNGOzs7Ozs7O1FBR0QscUNBQWM7Ozs7O1lBQWQsVUFBZSxJQUFZOztvQkFDckIsSUFBSSxHQUFpQixJQUFJOztvQkFDekIsSUFBSSxHQUFrQixJQUFJOztvQkFFMUIsTUFBTSxHQUFHLElBQUk7Z0JBQ2pCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDTCxPQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7d0JBQzlDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO2dCQUNELE9BQU8sTUFBTSxDQUFDO2FBQ2Y7Ozs7OztRQUdELCtCQUFROzs7O1lBQVI7O29CQUNNLFFBQVEsR0FBaUIsSUFBSTtnQkFDakMsT0FBTyxRQUFRLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDL0IsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzVCO2dCQUNELDBCQUFzQixRQUFRLEdBQUM7YUFDaEM7Ozs7Ozs7UUFJTyxrQ0FBVzs7Ozs7O1lBQW5CLFVBQW9CLEtBQVU7Z0JBQzVCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFDaEMsUUFBUSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLFFBQVE7d0JBQ1gsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUMsQ0FBQztpQkFDcEM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDs7Ozs7Ozs7UUFLRCxxQ0FBYzs7OztZQUFkO2dCQUFBLGlCQTZCQzs7b0JBNUJLLE1BQW1COzs7OztvQkFJakIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNLElBQUksT0FBTyxFQUFFO29CQUNsQixNQUFNLEdBQUcsRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xEOztvQkFDSyxlQUFlLEdBQUcsb0JBQUMsSUFBSSxDQUFDLEVBQUUsSUFBdUIsU0FBUztnQkFDaEUsSUFBSSxPQUFPLGVBQWUsS0FBSyxVQUFVLEVBQUU7O3dCQUNuQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdkUsSUFBSSxZQUFZLFlBQVlDLGVBQVUsRUFBRTt3QkFDdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7NEJBQ3hCLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO3lCQUM3QixDQUFDLENBQUM7d0JBQ0gsT0FBTztxQkFDUjtvQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDM0MsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUI7Ozs7OztRQUVPLHNDQUFlOzs7OztZQUF2QixVQUF3QixNQUFtQixFQUFFLElBQWlCOzs7b0JBRXRELGNBQWMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDdEQsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBVzt3QkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPOzRCQUNkLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUtBQXNDLENBQ3ZDLENBQUM7d0JBQ0osR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBQ3BCLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5Qjs7Ozs7O1FBRU8sa0NBQVc7Ozs7O1lBQW5CLFVBQW9CLE1BQW1CLEVBQUUsU0FBa0M7Z0JBQ3pFLElBQUksU0FBUyxFQUFFO29CQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLE9BQWIsTUFBTSxXQUFXLFNBQVMsRUFBQyxDQUFDO3FCQUN0Qzt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDRjtnQkFDRCxPQUFPLE1BQU0sQ0FBQzthQUNmOzs7Ozs7UUFFUyxnQ0FBUzs7Ozs7WUFBbkIsVUFBb0IsTUFBbUIsRUFBRSxVQUFpQjtnQkFBMUQsaUJBK0JDO2dCQS9Cd0MsMkJBQUE7b0JBQUEsaUJBQWlCOztnQkFDeEQsSUFBSSxVQUFVLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7b0JBQy9DLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYzs7NEJBQzdCLE9BQU8sR0FDVCxHQUFHLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTzs4QkFDL0IsR0FBRyxDQUFDLE9BQU87OEJBQ1gsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQ0FDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsRUFBRTt3QkFFUixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVOzRCQUMxQyxPQUFPLHNCQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBVSxDQUFDO3dCQUVuQyxJQUFJLE9BQU8sRUFBRTs0QkFDWCxJQUFJLENBQUMsb0JBQUMsT0FBTyxJQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQ0FDckMsT0FBTyxHQUFHLG9CQUFDLE9BQU8sSUFBWSxPQUFPLENBQ25DLGtCQUFrQixFQUNsQixVQUFDLENBQVMsRUFBRSxHQUFXLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBQSxDQUNsRCxDQUFDOzZCQUNIOzRCQUNELEdBQUcsQ0FBQyxPQUFPLHNCQUFHLE9BQU8sRUFBVSxDQUFDO3lCQUNqQzt3QkFDRCxPQUFPLEdBQUcsQ0FBQztxQkFDWixDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztnQkFFakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7Ozs7OztRQUVELDZDQUFzQjs7Ozs7WUFBdEIsVUFBdUIsTUFBbUIsRUFBRSxJQUFZO2dCQUF4RCxpQkFTQztnQkFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7b0JBQ3pCLFVBQVUsR0FBZ0IsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzs7d0JBQzlCLFFBQVEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzt3QkFBRSxPQUFPO29CQUMxQyxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsV0FBUyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFFO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7Ozs7Ozs7OztRQU1PLGlDQUFVOzs7Ozs7O1lBQWxCLFVBQW1CLE9BQWdCO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Z0JBRXRDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNuQzs7Ozs7O1FBR0Qsc0NBQWU7Ozs7O1lBQWY7Z0JBQUEsaUJBMkNDOztvQkExQ08sU0FBUyxHQUFHLG9CQUFDLElBQUksQ0FBQyxFQUFFLElBQW9CLFNBQVM7Z0JBQ3ZELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFOzt3QkFDNUIsaUJBQWlCLEdBQTBCLEVBQUU7NENBQ3hDLGNBQWM7d0JBQ3ZCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTs7Z0NBQ3RDLFFBQVEsR0FBRyxPQUFLLGNBQWMsQ0FBQyxjQUFjLENBQUM7NEJBQ3BELElBQUksUUFBUSxFQUFFOztvQ0FDTixVQUFVLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzNDSixhQUFHLENBQUMsVUFBQyxLQUFVOzt3Q0FDUCxFQUFFLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztvQ0FDcEMsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVO3dDQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO29DQUMvQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0NBQzlCLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7cUNBQ3pCO3lDQUFNO3dDQUNMLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQ0FDakM7aUNBQ0YsQ0FBQyxDQUNIOztvQ0FDSyxlQUFlLEdBQUcsUUFBUSxDQUFDLGtCQUFrQjs7b0NBQzdDLEdBQUcsR0FBR0ssa0JBQWEsQ0FDdkIsVUFBVSxFQUFFLGVBQWUsQ0FDNUIsQ0FBQyxJQUFJLENBQUNMLGFBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dDQUNoRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQzdCO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YseUJBQXVCLGNBQWMsaUNBQ25DLE9BQUssSUFDTCxDQUNILENBQUM7NkJBQ0g7eUJBQ0Y7cUJBQ0Y7O29CQTVCRCxLQUFLLElBQU0sY0FBYyxJQUFJLFNBQVM7Z0NBQTNCLGNBQWM7cUJBNEJ4QjtvQkFFREssa0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQzt5QkFDN0IsSUFBSSxDQUNITCxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFBLENBQUMsRUFDMUNNLDhCQUFvQixFQUFFLENBQ3ZCO3lCQUNBLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2lCQUNuRDthQUNGO1FBR0gsbUJBQUM7SUFBRCxDQUFDLElBQUE7Ozs7QUFFRDs7O1FBQTRDQyxpQ0FBWTtRQUF4RDtZQUFBLHFFQW1EQztZQWxEQyxnQkFBVSxHQUFxRCxJQUFJLENBQUM7O1NBa0RyRTs7Ozs7UUFoREMsbUNBQVc7Ozs7WUFBWCxVQUFZLElBQVk7O29CQUNoQixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7O29CQUM5QixVQUFVLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUk7O29CQUVwRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQzFDLElBQ0UsUUFBUSxLQUFLLElBQUk7b0JBQ2pCLFVBQVUsS0FBSyxDQUFDLENBQUM7b0JBQ2pCLFFBQVEsWUFBWSxhQUFhLEVBQ2pDOzt3QkFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMzQyxRQUFRLEdBQUcsb0JBQWdCLFFBQVEsSUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELE9BQU8sUUFBUSxDQUFDO2FBQ2pCOzs7OztRQUVELG9DQUFZOzs7O1lBQVosVUFBYSxFQUFxRDtnQkFDaEUsS0FBSyxJQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFOzs0QkFDeEMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO3dCQUM1QyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3FCQUMxQjtpQkFDRjthQUNGOzs7OztRQUVELDZDQUFxQjs7OztZQUFyQixVQUFzQixFQUF3QztnQkFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFBLEtBQUs7b0JBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDVixJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7d0JBQ2xDLG9CQUFnQixLQUFLLElBQUUscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2xEO2lCQUNGLENBQUMsQ0FBQzthQUNKOzs7O1FBRUQsdUNBQWU7OztZQUFmO2dCQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzthQUNqQzs7OztRQUVPLGdEQUF3Qjs7O1lBQWhDO2dCQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFBLFFBQVE7b0JBQ2pDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDNUIsQ0FBQyxDQUFDO2FBQ0o7Ozs7UUFFRCw4QkFBTTs7O1lBQU47Z0JBQ0UsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzQjtRQUNILG9CQUFDO0lBQUQsQ0FuREEsQ0FBNEMsWUFBWTs7Ozs7Ozs7O0FDelZ4RDs7O1FBQTZDQSxrQ0FBWTtRQUF6RDs7U0E0QkM7Ozs7OztRQXpCQyxpQ0FBUTs7Ozs7WUFBUixVQUFTLEtBQVUsRUFBRSxRQUFpQjtnQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0M7Ozs7OztRQUVELG1DQUFVOzs7OztZQUFWLFVBQVcsS0FBVSxFQUFFLFFBQWlCO2dCQUN0QyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO3dCQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQzlCO2lCQUNGO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLElBQUksQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDOzs7O1FBRUQsa0NBQVM7OztZQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDNUM7Ozs7UUFFRCxxQ0FBWTs7O1lBQVosZUFBaUI7UUFDbkIscUJBQUM7SUFBRCxDQTVCQSxDQUE2QyxZQUFZOzs7Ozs7O1FDQXJCQSxrQ0FBYztRQUFsRDs7U0FpQkM7Ozs7UUFoQkMsc0NBQWE7OztZQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7OztRQUVELGlDQUFROzs7OztZQUFSLFVBQVMsS0FBVSxFQUFFLFFBQWlCO2dCQUNwQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNoQixLQUFLOzRCQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ3JFO3lCQUFNO3dCQUNMLEtBQUssR0FBRyxTQUFTLENBQUM7cUJBQ25CO2lCQUNGO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDO1FBQ0gscUJBQUM7SUFBRCxDQWpCQSxDQUFvQyxjQUFjOzs7Ozs7O1FDQWRBLGtDQUFjO1FBQWxEOztTQVNDOzs7O1FBUkMsc0NBQWE7OztZQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7OztRQUVELGlDQUFROzs7OztZQUFSLFVBQVMsS0FBVSxFQUFFLFFBQWlCO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDekMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM3QztRQUNILHFCQUFDO0lBQUQsQ0FUQSxDQUFvQyxjQUFjOzs7Ozs7O1FDQWJBLG1DQUFjO1FBQW5EOztTQUlDOzs7O1FBSEMsdUNBQWE7OztZQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxzQkFBQztJQUFELENBSkEsQ0FBcUMsY0FBYzs7Ozs7OztRQ0toQkEsaUNBQWE7UUFHOUMsdUJBQ1UsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxNQUFXLEVBQ1gsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQXFCLEVBQ3JCLElBQVksRUFDWixPQUF3QjtZQVIxQixZQVVFLGtCQUFNLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBRTNFO1lBWFMseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtZQUhsRCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1lBYVAsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1NBQ3RCOzs7OztRQUVELG1DQUFXOzs7O1lBQVgsVUFBWSxJQUFZOztvQkFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDOztvQkFDOUIsR0FBRyxHQUFHLEVBQUUsVUFBVSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzs7b0JBQzlELElBQUksc0JBQUcsSUFBSSxDQUFDLFVBQVUsRUFBbUI7Z0JBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPLFNBQVMsQ0FBQzs7b0JBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qzs7Ozs7O1FBRUQsZ0NBQVE7Ozs7O1lBQVIsVUFBUyxLQUFVLEVBQUUsUUFBaUI7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0M7Ozs7OztRQUVELGtDQUFVOzs7OztZQUFWLFVBQVcsS0FBVSxFQUFFLFFBQWlCO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDOzs7O1FBRUQsaUNBQVM7OztZQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7UUFFRCxvQ0FBWTs7O1lBQVo7O29CQUNRLEtBQUssR0FBVSxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsUUFBd0I7b0JBQ3pDLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDbEU7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCOzs7OztRQUVPLG1DQUFXOzs7O1lBQW5CLFVBQW9CLEtBQVU7O29CQUN0QixXQUFXLHNCQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFDZCxLQUFLLEVBQ0wsSUFBSSxDQUNMLEVBQWtCO2dCQUNuQixvQkFBaUIsSUFBSSxDQUFDLFVBQVUsSUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sV0FBVyxDQUFDO2FBQ3BCOzs7OztRQUVPLHVDQUFlOzs7O1lBQXZCLFVBQXdCLEtBQVk7OztvQkFDbEMsS0FBbUIsSUFBQSxVQUFBVixTQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTt3QkFBckIsSUFBTSxJQUFJLGtCQUFBOzs0QkFDUCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNqQzs7Ozs7Ozs7Ozs7Ozs7O2FBQ0Y7Ozs7O1FBRU8sbUNBQVc7Ozs7WUFBbkIsVUFBb0IsSUFBYTtnQkFDL0IsSUFBSSxJQUFJO29CQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQzNCOzs7Ozs7O1FBSUQsMkJBQUc7Ozs7OztZQUFILFVBQUksS0FBVTs7b0JBQ04sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckMsT0FBTyxXQUFXLENBQUM7YUFDcEI7Ozs7O1FBRUQsOEJBQU07Ozs7WUFBTixVQUFPLEtBQWE7O29CQUNaLElBQUksc0JBQW1CLElBQUksQ0FBQyxVQUFVLEVBQUE7Z0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMxQztRQUdILG9CQUFDO0lBQUQsQ0E5RkEsQ0FBbUMsYUFBYTs7Ozs7OztRQ0FaVSxrQ0FBYTtRQU8vQyx3QkFDVSxtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLE1BQVcsRUFDWCxFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBcUIsRUFDckIsSUFBWSxFQUNaLE9BQXdCO1lBUjFCLFlBVUUsa0JBQU0sc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FFM0U7WUFYUyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1lBUDFDLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1lBaUJuQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7U0FDekI7UUFoQkQsc0JBQUksd0NBQVk7OztnQkFBaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7V0FBQTs7OztRQWdCTyx5Q0FBZ0I7OztZQUF4QjtnQkFBQSxpQkF5QkM7Z0JBeEJDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ3BCLGlCQUEyQjtnQkFDL0IsSUFBSTtvQkFDRixpQkFBaUIsR0FBRyxlQUFlLENBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMscUJBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUNkLENBQUM7aUJBQ0g7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FDWCxjQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sa0NBQThCLEVBQ3BFLENBQUMsQ0FDRixDQUFDO2lCQUNIO2dCQUNELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FDbkUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQ2xDLEtBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUN6QixDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUNqQyxLQUFJLEVBQ0osVUFBVSxDQUNYLENBQUM7b0JBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKOzs7Ozs7UUFFRCxpQ0FBUTs7Ozs7WUFBUixVQUFTLEtBQVUsRUFBRSxRQUFpQjtnQkFDcEMsS0FBSyxJQUFNLFVBQVUsSUFBSSxLQUFLLEVBQUU7b0JBQzlCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUMvRDtpQkFDRjtnQkFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDOzs7Ozs7UUFDRCxtQ0FBVTs7Ozs7WUFBVixVQUFXLEtBQVUsRUFBRSxRQUFpQjtnQkFDdEMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7O2dCQUUzQyxLQUFLLElBQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2pFO2dCQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0M7Ozs7UUFDRCxrQ0FBUzs7O1lBQVQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQy9EOzs7O1FBQ0QscUNBQVk7OztZQUFaOztvQkFDUSxLQUFLLEdBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFDLFFBQWEsRUFBRSxVQUFrQjtvQkFDbEQsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRTt3QkFDNUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7cUJBQ3BDO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtRQUNILHFCQUFDO0lBQUQsQ0E1RUEsQ0FBb0MsYUFBYTs7Ozs7O0FDTGpEO1FBV0UsNkJBQ1Usc0JBQThDLEVBQzlDLE9BQXdCO1lBRHhCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7WUFDOUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7U0FDOUI7Ozs7Ozs7OztRQUVKLDRDQUFjOzs7Ozs7OztZQUFkLFVBQ0UsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQTRCLEVBQzVCLFVBQW1CO2dCQURuQix1QkFBQTtvQkFBQSxhQUE0Qjs7O29CQUd4QixXQUFXLEdBQUcsSUFBSTs7b0JBQ2xCLElBQUksR0FBRyxFQUFFO2dCQUNiLElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO3dCQUMxQixJQUFJLElBQUksR0FBRyxDQUFDO3FCQUNiO29CQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQzVCLElBQUksSUFBSSxVQUFVLENBQUM7cUJBQ3BCO3lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ2xDLElBQUksSUFBSSxvQkFBQyxNQUFNLElBQW1CLElBQUksRUFBRSxDQUFDO3FCQUMxQzt5QkFBTTt3QkFDTCxNQUFNLElBQUksS0FBSyxDQUNiLCtEQUErRDs0QkFDN0QsTUFBTSxDQUFDLElBQUksQ0FDZCxDQUFDO3FCQUNIO2lCQUNGO3FCQUFNO29CQUNMLElBQUksR0FBRyxHQUFHLENBQUM7aUJBQ1o7Z0JBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFOzt3QkFDVCxTQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQ3hFLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDMUU7cUJBQU07O29CQUVMLElBQ0UsVUFBVTt3QkFDVixxQkFBRSxtQkFBQSxNQUFNLEdBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLEtBQWUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN4RTt3QkFDQSxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDckI7O29CQUVELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO3dCQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDOztvQkFFcEQsSUFDRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTt3QkFDckQsQ0FBQyxNQUFNLENBQUMsTUFBTTt3QkFDZCxDQUFDLG9CQUFDLEVBQUUsSUFBb0IsTUFBTSxFQUM5Qjt3QkFDQSxJQUFJLG9CQUFDLEVBQUUsSUFBb0IsTUFBTSxLQUFLLE1BQU07NEJBQzFDLEVBQUUsQ0FBQyxNQUFNO2dDQUNQLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtzQ0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7c0NBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7NkJBQ25DLElBQUksb0JBQUMsRUFBRSxJQUFvQixNQUFNLEtBQUssTUFBTTs0QkFDL0MsRUFBRSxDQUFDLE1BQU07Z0NBQ1AsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRO3NDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQjtzQ0FDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztxQkFDekM7b0JBQ0QsUUFBUSxNQUFNLENBQUMsSUFBSTt3QkFDakIsS0FBSyxTQUFTLENBQUM7d0JBQ2YsS0FBSyxRQUFROzRCQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQzs0QkFDRixNQUFNO3dCQUNSLEtBQUssUUFBUTs0QkFDWCxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQzlCLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsTUFBTSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixLQUFLLFNBQVM7NEJBQ1osV0FBVyxHQUFHLElBQUksZUFBZSxDQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLE1BQU0sRUFDTixFQUFFLEVBQ0YsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDOzRCQUNGLE1BQU07d0JBQ1IsS0FBSyxRQUFROzRCQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxFQUNKLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsTUFBTSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixLQUFLLE9BQU87NEJBQ1YsV0FBVyxHQUFHLElBQUksYUFBYSxDQUM3QixJQUFJLEVBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQzs0QkFDRixNQUFNO3dCQUNSOzRCQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQztxQkFDeEQ7aUJBQ0Y7Z0JBRUQsSUFBSSxXQUFXLFlBQVksYUFBYSxFQUFFO29CQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsQztnQkFFRCxPQUFPLFdBQVcsQ0FBQzthQUNwQjs7Ozs7UUFFTyw0Q0FBYzs7OztZQUF0QixVQUF1QixZQUEyQjs7Z0JBRWhELFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUNoQztRQUNILDBCQUFDO0lBQUQsQ0FBQzs7Ozs7Ozs7O0FDaEpEOzs7UUFBQTtTQUtDO1FBQUQsNkJBQUM7SUFBRCxDQUFDLElBQUE7O1FBRThDQSw2Q0FBc0I7UUFHbkUsbUNBR1UsT0FBd0I7WUFIbEMsWUFLRSxpQkFBTyxTQXdCUjtZQTFCUyxhQUFPLEdBQVAsT0FBTyxDQUFpQjtZQUdoQyxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUM3QixhQUFhLEVBQUUsVUFBVTtnQkFDekIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUNILENBQUM7WUFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsVUFBVSxFQUNWLHNEQUFzRCxDQUN2RCxDQUFDO1lBQ0YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLE9BQU8sRUFDUCw0WUFBNFksQ0FDN1ksQ0FBQztZQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixRQUFRLEVBQ1IsOEJBQThCLENBQy9CLENBQUM7WUFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsU0FBUyxFQUNULGdDQUFnQyxDQUNqQyxDQUFDOztTQUNIOzs7Ozs7UUFFRCxxREFBaUI7Ozs7O1lBQWpCLFVBQ0UsTUFBZ0IsRUFDaEIsWUFBMEM7Z0JBRjVDLGlCQXFCQzs7b0JBakJPLGNBQWMsR0FBYSxFQUFFO3FCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7cUJBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO2dCQUV0QyxPQUFPLFVBQUMsS0FBVTtvQkFDaEIsSUFBSTt3QkFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ2xDO29CQUFDLE9BQU8sQ0FBQyxFQUFFOzs7cUJBR1g7O3dCQUNHLE1BQU0sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07b0JBQzVCLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO3dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztxQkFDdkU7b0JBQ0QsT0FBTyxNQUFNLENBQUM7aUJBQ2YsQ0FBQzthQUNIOzs7O3dCQXBFTSxlQUFlLHVCQWlCbkJDLGFBQVEsWUFDUkMsV0FBTSxTQUFDLGVBQWU7OztRQW1EM0IsZ0NBQUM7S0FBQSxDQXhEOEMsc0JBQXNCOzs7Ozs7QUNkckU7UUFRQTtZQUNVLFlBQU8sR0FBNEIsRUFBRSxDQUFDO1NBc0IvQzs7Ozs7UUFsQkMsbUNBQVU7Ozs7WUFBVixVQUFXLE1BQVc7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2FBQzdCOzs7Ozs7UUFFRCxpQ0FBUTs7Ozs7WUFBUixVQUFTLElBQVksRUFBRSxNQUFXO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUM3Qjs7Ozs7UUFFRCw0QkFBRzs7OztZQUFILFVBQUksSUFBWTtnQkFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDOzs7OztRQUVELGdDQUFPOzs7O1lBQVAsVUFBUSxJQUFZO2dCQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCO1FBQ0gscUJBQUM7SUFBRCxDQUFDLElBQUE7O1FBSUMsdUJBQ1UsUUFBd0IsRUFDeEIsUUFBa0M7WUFEbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7WUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7U0FDeEM7Ozs7OztRQUVKLG9DQUFZOzs7OztZQUFaLFVBQ0UsU0FBMkIsRUFDM0IsSUFBWTtnQkFFWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQXVCLElBQUksT0FBRyxDQUFDLENBQUM7aUJBQzlDOztvQkFFSyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztvQkFDNUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDNUQsY0FBYyxDQUNmO2dCQUNELE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3BEOztvQkFwQkZDLGVBQVU7Ozs7O3dCQUdXLGNBQWM7d0JBbENsQ0MsNkJBQXdCOzs7UUFvRDFCLG9CQUFDO0tBckJEOzs7Ozs7Ozs7OztBQ0xBLGFBQWdCLFVBQVUsQ0FDeEIsc0JBQTJCLEVBQzNCLE9BQXdCO1FBRXhCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBRUQ7UUE0SUUscUJBQ1UsbUJBQXdDLEVBQ3hDLFVBQTZCLEVBQzdCLE9BQXdCLEVBQ3hCLEVBQXFCLEVBQ3JCLElBQXdCO1lBTGxDLGlCQWlCQztZQWhCUyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1lBQ3hDLGVBQVUsR0FBVixVQUFVLENBQW1CO1lBQzdCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1lBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1lBQ3JCLFNBQUksR0FBSixJQUFJLENBQW9CO1lBM0gzQixXQUFNLEdBQVEsRUFBRSxDQUFDO1lBQ2hCLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztZQUUvQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1lBRWQsWUFBTyxHQUFHLEtBQUssQ0FBQztZQUV4QixpQkFBWSxHQUFpQixJQUFJLENBQUM7Ozs7O1lBVWxDLFdBQU0sR0FBeUMsWUFBWSxDQUFDOzs7Ozs7O1lBcUI1RCxXQUFNLEdBQXNCLEVBQUUsQ0FBQzs7Ozs7O1lBUy9CLGlCQUFZLEdBQUcsSUFBSSxDQUFDOzs7O1lBU3BCLGdCQUFXLEdBQUcsSUFBSSxDQUFDOzs7O1lBNEJWLGVBQVUsR0FBRyxJQUFJQyxpQkFBWSxFQUFNLENBQUM7Ozs7WUFJcEMsZUFBVSxHQUFHLElBQUlBLGlCQUFZLEVBQU0sQ0FBQzs7OztZQUlwQyxjQUFTLEdBQUcsSUFBSUEsaUJBQVksRUFBTSxDQUFDOzs7O1lBSW5DLGNBQVMsR0FBRyxJQUFJQSxpQkFBWSxFQUFlLENBQUM7WUE2Qm5ELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN6QjthQUNGLENBQUMsQ0FBQztTQUNKO1FBNUVELHNCQUNJLDZCQUFJOzs7Z0JBaUJSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjs7Ozs7O2dCQXBCRCxVQUNTLEtBQW9DO2dCQUMzQyxRQUFRLEtBQUs7b0JBQ1gsS0FBSyxRQUFRO3dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO3dCQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLElBQUksSUFBSSxDQUFDLElBQUk7NEJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ25ELE1BQU07b0JBQ1IsS0FBSyxNQUFNO3dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO3dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ3pCLElBQUksSUFBSSxDQUFDLElBQUk7NEJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ2pELE1BQU07aUJBQ1Q7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7OztXQUFBO1FBeUJELHNCQUFJLDhCQUFLOzs7Ozs7Ozs7WUFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEI7OztXQUFBO1FBR0Qsc0JBQUksOEJBQUs7Ozs7O2dCQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjs7O1dBQUE7Ozs7O1FBRUQsOEJBQVE7Ozs7WUFBUixVQUFTLENBQVE7Z0JBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7Ozs7UUFxQk8sbUNBQWE7OztZQUFyQjtnQkFBQSxpQkFvSUM7O29CQW5JTyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZOztvQkFDM0MsT0FBTyxHQUFHZCxhQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsSUFBQSxpQ0FBVzs7b0JBRWIsSUFBSSxHQUFHLFVBQ1gsTUFBZ0IsRUFDaEIsWUFBc0IsRUFDdEIsUUFBMkIsRUFDM0IsY0FBaUMsRUFDakMsS0FBd0I7b0JBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7OzRCQUNsQyxLQUFLLEdBQUcsTUFBSSxHQUFLOzs0QkFDakIsUUFBUSxHQUFHLGNBQWMsb0JBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQ3RCLFdBQVcsQ0FDWjs7NEJBQ0ssRUFBRSxzQkFBRyxNQUFNLENBQUMsTUFBTSxDQUN0QixFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQ3pCLFFBQVEsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDOUMsT0FBTyxRQUFRLENBQUMsRUFBRSxLQUFLLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUNoRSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs0QkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQzs4QkFDcEIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUNwQixJQUFJLEVBQ1IsS0FBSSxDQUFDLE1BQU0sRUFDWCxRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDaEIsRUFBcUI7O3dCQUV0QixJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxjQUFjLENBQUMsY0FBYyxFQUFFO2dDQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtvQ0FDdEIsRUFBRSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO2lDQUNuRDs2QkFDRjtpQ0FBTTtnQ0FDTCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVM7b0NBQ2YsRUFBRSxDQUFDLFNBQVM7d0NBQ1YsT0FBTyxjQUFjLENBQUMsU0FBUyxLQUFLLFdBQVc7OENBQzNDLENBQUM7OENBQ0QsY0FBYyxDQUFDLFNBQVMsQ0FBQztnQ0FDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXO29DQUNqQixFQUFFLENBQUMsV0FBVzt3Q0FDWixPQUFPLGNBQWMsQ0FBQyxXQUFXLEtBQUssV0FBVzs4Q0FDN0MsRUFBRTs4Q0FDRixjQUFjLENBQUMsV0FBVyxDQUFDO2dDQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7b0NBQ25CLEVBQUUsQ0FBQyxhQUFhO3dDQUNkLE9BQU8sY0FBYyxDQUFDLGFBQWEsS0FBSyxXQUFXOzhDQUMvQyxJQUFJOzhDQUNKLGNBQWMsQ0FBQyxhQUFhLENBQUM7NkJBQ3RDO3lCQUNGOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsRUFBRSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQ3pCO3dCQUNELElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFOztnQ0FDcEQsZUFBZSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzs0QkFDdkQsSUFBSSxlQUFlLEVBQUU7Z0NBQ25CLGVBQWUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLEVBQUUsRUFBRTtvQ0FDekQsTUFBTSxFQUFFLElBQUk7aUNBQ2IsQ0FBQyxDQUFDOzZCQUNKO2lDQUFNO2dDQUNMLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzZCQUNiO3lCQUNGO3dCQUNELEVBQUUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFFL0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDbEIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDO3dCQUVuQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7NEJBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUN0RCxJQUFJLENBQ0YsUUFBUSxDQUFDLEtBQUssRUFDZCxRQUFRLENBQUMsS0FBSyxFQUNkLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQ3ZDLEVBQUUsRUFDRixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQ3ZCLENBQUM7eUJBQ0g7d0JBRUQsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRTs0QkFDbEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ2pFO3FCQUNGLENBQUMsQ0FBQztpQkFDSjs7b0JBRUssTUFBTSxHQUFHLFVBQUMsTUFBZ0IsRUFBRSxFQUFxQjtvQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7NEJBQ2xDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzs7NEJBQ2pDLEtBQUssR0FBRyxNQUFJLEdBQUs7d0JBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTs0QkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUMxQzt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7NEJBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQzdCO3FCQUNGLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSTtvQkFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxvQkFDVDtvQkFDZCxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO29CQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7b0JBQy9CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDOUIsSUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFDZixPQUFPLENBQUMsRUFBRSxFQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQ2IsQ0FBQzs7Z0JBR0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUduRCxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUV2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO29CQUNsQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDNUM7YUFDRjs7OztRQUVPLHlDQUFtQjs7O1lBQTNCO2dCQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sb0JBQ2IsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFDekMsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDOztvQkFDSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDO2dCQUNuRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUFFOzt3QkFDMUIsS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO29CQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUc7NEJBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUzs0QkFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXO3lCQUN4QixDQUFDO3FCQUNIOztvQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUU7d0JBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO3FCQUN4RDs7b0JBRUQsSUFDRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7eUJBQ3RCLE9BQU8sS0FBSyxDQUFDLGNBQWMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFDdEU7d0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztxQkFDeEM7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDNUI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7b0JBQUUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0RDs7OztRQUVELDhCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCOzs7O1FBRUQsaUNBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0Qjs7Ozs7Ozs7UUFHRCw2QkFBTzs7Ozs7O1lBQVAsVUFBUSxJQUFZLEVBQUUsV0FBNEI7O29CQUMxQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQVMsSUFBTSxDQUFDLENBQUM7b0JBQzlCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyw2RUFBZSxJQUFNLENBQUMsQ0FBQztvQkFDcEMsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7O29CQUMvQixHQUFHLEdBQXNCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2FBQzNCOzs7O1FBRU8sd0NBQWtCOzs7WUFBMUI7Z0JBQUEsaUJBS0M7Z0JBSkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTs7d0JBQ3hCLEdBQUcsR0FBc0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPO3dCQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjs7OztRQUVELCtCQUFTOzs7WUFBVDtnQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDOztvQkFDN0IsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6Qjs7Ozs7Ozs7OztRQUtELG1DQUFhOzs7Ozs7WUFBYixVQUFjLFNBQW9CLEVBQUUsS0FBa0I7Z0JBQXRELGlCQXNDQztnQkFyQ0MsSUFBSSxTQUFTO29CQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN2QyxJQUFJLEtBQUs7b0JBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssV0FBVztvQkFDL0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUTtvQkFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2dCQUVoRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBRTVCLElBQUksQ0FBQyxTQUFTLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFFdEMsSUFBSSxJQUFJLENBQUMsT0FBTztvQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUU1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FDekQsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFFMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztvQkFDNUMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUM5QyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3pCLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDs7Ozs7Ozs7OztRQU1ELDJCQUFLOzs7OztZQUFMLFVBQU0sSUFBWTtnQkFBbEIsaUJBTUM7Z0JBTksscUJBQUE7b0JBQUEsWUFBWTs7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Y7Ozs7UUFFTyxrQ0FBWTs7O1lBQXBCO2dCQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFBRSxPQUFRO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUM7Ozs7UUFFRCxpQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzFCOztvQkFsYkZlLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsMjFDQUFrQzt3QkFDbEMsbUJBQW1CLEVBQUUsS0FBSzt3QkFDMUIsU0FBUyxFQUFFOzRCQUNULGFBQWE7NEJBQ2I7Z0NBQ0UsT0FBTyxFQUFFLG1CQUFtQjtnQ0FDNUIsVUFBVSxFQUFFLFVBQVU7Z0NBQ3RCLElBQUksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGVBQWUsQ0FBQzs2QkFDaEQ7NEJBQ0QsaUJBQWlCO3lCQUNsQjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osWUFBWSxFQUFFLE1BQU07NEJBQ3BCLG1CQUFtQixFQUFFLG1CQUFtQjs0QkFDeEMsaUJBQWlCLEVBQUUsaUJBQWlCO3lCQUNyQzt3QkFDRCxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7Ozt3QkFoQ1EsbUJBQW1CO3dCQUpuQixpQkFBaUI7d0JBRmpCLGVBQWU7d0JBTnRCQyxzQkFBaUI7d0JBSVZDLHdCQUFrQjs7Ozs2QkEyRHhCQyxVQUFLOzZCQUlMQSxVQUFLO3lCQUlMQSxVQUFLOytCQUlMQSxVQUFLOzZCQVNMQSxVQUFLO21DQVFMQSxVQUFLO21DQUtMQSxVQUFLO2tDQUlMQSxVQUFLOzJCQUtMQSxVQUFLO2lDQXdCTEMsV0FBTTtpQ0FJTkEsV0FBTTtnQ0FJTkEsV0FBTTtnQ0FJTkEsV0FBTTs7UUFoRFBDO1lBRENDLGlCQUFZLEVBQUU7O3lEQUNLO1FBU3BCRDtZQURDQyxpQkFBWSxFQUFFOzt3REFDSTtRQXFXckIsa0JBQUM7S0FuYkQ7Ozs7OztBQ25DQTtRQWdCSSxZQUFZLEdBQUcsQ0FBQztBQUVwQjtRQWFFLHlCQUNVLGFBQTRCLEVBQzVCLFVBQTZCO1lBRDdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBQzVCLGVBQVUsR0FBVixVQUFVLENBQW1CO1lBVHZDLFdBQU0sR0FBZ0IsSUFBSSxDQUFDO1NBVXZCOzs7OztRQUVKLDhDQUFvQjs7OztZQUFwQixVQUFxQixNQUFtQjtnQkFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O29CQUNmLEVBQUUsR0FBRyxTQUFPLFlBQVksRUFBSTs7b0JBRTVCLEVBQUUsc0JBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQWtCO2dCQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUNuQzs7OztRQUVELGtDQUFROzs7WUFBUjtnQkFBQSxpQkFJQztnQkFIQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7UUFFRCxxQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FDeEMsSUFBSSxDQUFDLFNBQVMsc0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFDOUQsQ0FBQztnQkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5Qzs7OztRQUVELHFDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3BCOztvQkFoREZQLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHFDQUFxQztxQkFDaEQ7Ozs7O3dCQVRRLGFBQWE7d0JBQ2IsaUJBQWlCOzs7O21DQWF2QkksVUFBSztnQ0FFTEksY0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRUMscUJBQWdCLEVBQUU7O1FBdUNqRCxzQkFBQztLQWpERDs7Ozs7OztRQ2tCRSwwQkFBWSxFQUFjLEVBQVUsTUFBaUI7WUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztZQXZCN0MsWUFBTyxHQUFHLEtBQUssQ0FBQztZQXdCdEIsSUFBSSxDQUFDLEVBQUUsc0JBQUcsRUFBRSxDQUFDLGFBQWEsRUFBa0IsQ0FBQztTQUM5Qzs7OztRQW5CTywrQkFBSTs7O1lBQVo7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUFFLE9BQU87O29CQUN6RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzs7b0JBQ3JDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDOztvQkFDeEQsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSTtnQkFDNUIsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFPLElBQU0sQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTs7d0JBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3RDLGdDQUFnQyxDQUNqQztvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN0RDthQUNGOzs7O1FBTUQsMENBQWU7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjs7OztRQUVELHNDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLElBQUksQ0FBQyxPQUFPO29CQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjs7b0JBckNGQyxjQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7Ozt3QkFQdENDLGVBQVU7d0JBQ1ZDLGNBQVM7Ozs7MEJBV1JSLFVBQUssU0FBQyxhQUFhOztRQUVwQkU7WUFEQ08sZ0JBQVcsRUFBRTs7cURBQ0Y7UUErQmQsdUJBQUM7S0F0Q0Q7Ozs7OztBQ1ZBO1FBSUE7WUFZVyxVQUFLLEdBQVcsSUFBSSxDQUFDO1NBSy9CO1FBSEMsc0JBQUksa0NBQUM7OztnQkFBTDtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0Q7OztXQUFBOztvQkFoQkZiLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsNjhCQUE0Qzt3QkFDNUMsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7Ozt5QkFFRUksVUFBSzs2QkFDTEEsVUFBSzt5QkFDTEEsVUFBSztnQ0FDTEEsVUFBSzs0QkFDTEEsVUFBSztnQ0FDTEEsVUFBSzs0QkFDTEEsVUFBSzs7UUFLUiwwQkFBQztLQWpCRDs7Ozs7O0FDSkE7UUFVRSw2QkFDVSxXQUE2QixFQUM3QixLQUFrQjtZQURsQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7WUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtTQUN4Qjs7OztRQUVKLHNDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQzthQUNIOztvQkFqQkZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTtxQkFDMUI7Ozs7O3dCQUwwQkksZ0JBQVc7d0JBQzdCLFdBQVc7Ozs7MkJBT2pCVixVQUFLLFNBQUMsYUFBYTs7UUFhdEIsMEJBQUM7S0FsQkQ7Ozs7Ozs7Ozs7QUNjQTtRQW9CRSxnQkFDNkMsRUFBcUIsRUFDM0IsTUFBb0I7WUFEZCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtZQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFjO1lBbkIzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7WUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztTQWdCaEI7UUFkSixzQkFDSSx1QkFBRzs7O2dCQURQO2dCQUVFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2FBQzVCOzs7V0FBQTtRQUVELHNCQUFJLDRCQUFROzs7Z0JBQVo7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJO29CQUFFLE9BQU8sSUFBSSxDQUFDO2dCQUUvQyxPQUFPLElBQUksQ0FBQzthQUNiOzs7V0FBQTs7OztRQU9ELGdDQUFlOzs7WUFBZjtnQkFBQSxpQkFlQztnQkFkQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7cUJBQzVCLElBQUksQ0FBQ1csZ0JBQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLEdBQUEsQ0FBQyxDQUFDO3FCQUM1QixTQUFTLENBQUMsVUFBQyxNQUFtQjtvQkFDN0IsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7d0JBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7b0JBR3ZFLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTt3QkFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUVyRCxJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUk7NEJBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDekQ7b0JBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3pCLENBQUMsQ0FBQzthQUNOOzs7OztRQUVELHlCQUFROzs7O1lBQVIsVUFBUyxLQUFVO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMvRDthQUNGO1FBRUQsc0JBQUkseUJBQUs7OztnQkFBVDtnQkFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ2hDOzs7V0FBQTs7OztRQUVELDhCQUFhOzs7WUFBYjtnQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2pEOzs7O3dCQW5FRGIsc0JBQWlCLHVCQWlDZE4sV0FBTSxTQUFDTSxzQkFBaUI7d0JBdkJwQixXQUFXLHVCQXdCZk4sV0FBTSxTQUFDLFdBQVc7Ozs7MEJBYnBCb0IsZ0JBQVcsU0FBQyxPQUFPOztRQWlEdEIsYUFBQztLQTFERCxJQTBEQzs7UUFFa0N0QixpQ0FBb0I7UUFBdkQ7O1NBRUM7Ozs7O1FBREMsNkJBQUs7Ozs7WUFBTCxVQUFNLEtBQVUsS0FBSTtRQUN0QixvQkFBQztJQUFELENBRkEsQ0FBbUMsTUFBTSxHQUV4Qzs7UUFFc0NBLHFDQUFxQjtRQUE1RDs7U0FTQzs7Ozs7UUFQQyxpQ0FBSzs7OztZQUFMLFVBQU0sS0FBVSxLQUFJOzs7O1FBRXBCLDJDQUFlOzs7WUFBZjtnQkFBQSxpQkFJQztnQkFIQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7cUJBQzVCLElBQUksQ0FBQ3FCLGdCQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksR0FBQSxDQUFDLENBQUM7cUJBQzlDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBQSxDQUFDLENBQUM7YUFDN0M7UUFDSCx3QkFBQztJQUFELENBVEEsQ0FBdUMsTUFBTSxHQVM1Qzs7UUFFdUNyQixzQ0FBc0I7UUFBOUQ7O1NBU0M7Ozs7O1FBUEMsa0NBQUs7Ozs7WUFBTCxVQUFNLEtBQVUsS0FBSTs7OztRQUVwQiw0Q0FBZTs7O1lBQWY7Z0JBQUEsaUJBSUM7Z0JBSEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhO3FCQUM1QixJQUFJLENBQUNxQixnQkFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUEsQ0FBQyxDQUFDO3FCQUM5QyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUEsQ0FBQyxDQUFDO2FBQzdDO1FBQ0gseUJBQUM7SUFBRCxDQVRBLENBQXdDLE1BQU07Ozs7Ozs7UUM3RFpyQixnQ0FBa0I7UUExQnBEO1lBQUEscUVBNkNDO1lBakJDLFVBQUksR0FBVSxFQUFFLENBQUM7O1NBaUJsQjs7OztRQWZDLCtCQUFROzs7WUFBUjs7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs7b0JBQ25CLElBQUksR0FBVSxFQUFFOztvQkFDdEIsS0FBa0IsSUFBQSxLQUFBVixTQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO3dCQUE3QyxJQUFNLEdBQUcsV0FBQTs7NEJBQ04sUUFBUSxzQkFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBZ0I7OzRCQUM1RCxJQUFJLEdBQUc7NEJBQ1gsUUFBUSxVQUFBOzRCQUNSLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBQ3pDLGNBQWMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWM7NEJBQzFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxLQUFLO3lCQUNuQzt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNqQjs7Ozs7Ozs7Ozs7Ozs7O2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCOztvQkE1Q0ZnQixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxrNkJBcUJLO3dCQUNmLG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOztRQW9CRCxtQkFBQztLQUFBLENBbkJpQyxrQkFBa0I7Ozs7Ozs7UUN2Qm5CTiwrQkFBaUI7UUFMbEQ7WUFBQSxxRUF1Q0M7WUE5QkMsZUFBUyxHQUFHLENBQUMsQ0FBQzs7U0E4QmY7UUE1QkMsc0JBQUksb0NBQVc7OztnQkFBZjtnQkFDRSxRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDcEIsb0JBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQVcsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUN0RTthQUNIOzs7V0FBQTtRQUVELHNCQUFJLDBCQUFDOzs7Z0JBQUw7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwRDs7O1dBQUE7Ozs7UUFFRCw4QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BGOzs7O1FBRUQsNkJBQU87OztZQUFQO2dCQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCOzs7OztRQUVELGdDQUFVOzs7O1lBQVYsVUFBVyxLQUFhO2dCQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQzs7b0JBdENGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLGdtREFBa0M7d0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOztRQW1DRCxrQkFBQztLQUFBLENBbENnQyxpQkFBaUI7Ozs7Ozs7UUM0QmhCTixnQ0FBYTtRQWpDL0M7O1NBd0RDOzs7O1FBcEJDLCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7b0JBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztvQkFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjO29CQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWU7b0JBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7b0JBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FDbkI7c0JBQ0csT0FBTztzQkFDUCxFQUFFLENBQUM7YUFDUjs7Ozs7UUFFRCw0QkFBSzs7OztZQUFMLFVBQU0sS0FBVTtnQkFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDMUI7YUFDRjs7b0JBdkRGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSw4b0NBNEJUO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOztRQXdCRCxtQkFBQztLQUFBLENBdkJpQyxhQUFhOzs7Ozs7O1FDYmJOLGdDQUFhO1FBcEIvQztZQUFBLHFFQW9EQztZQTVCQyxlQUFTLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUEsQ0FBQztZQUMzQixZQUFNLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUEsQ0FBQzs7U0EyQnpCOzs7O1FBekJDLCtCQUFROzs7WUFBUjtnQkFDUSxJQUFBLFNBQXFCLEVBQW5CLGtCQUFNLEVBQUUsVUFBVztnQkFDM0IsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO29CQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUMxRTtnQkFDRCxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQzFFO2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBRyxFQUFFLENBQUMsTUFBTSxTQUFJLEtBQU8sR0FBQSxDQUFDO29CQUNoRCxFQUFFLENBQUMsTUFBTSxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBSSxFQUFFLENBQUMsTUFBTSxNQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUEsQ0FBQztpQkFDekQ7Z0JBQ0QsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDbkIsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFBLEtBQUssSUFBSSxPQUFHLEtBQUssU0FBSSxFQUFFLENBQUMsSUFBTSxHQUFBLENBQUM7b0JBQzlDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQUksRUFBRSxDQUFDLElBQU0sRUFBRSxFQUFFLENBQUMsR0FBQSxDQUFDO2lCQUN2RDtnQkFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTO29CQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTTtvQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDeEM7O29CQW5ERk0sY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsNGlCQWVNO3dCQUNoQixtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFpQ0QsbUJBQUM7S0FBQSxDQWhDaUMsYUFBYTs7Ozs7OztRQ3FFZk4sOEJBQWE7UUF0RjdDO1lBQUEscUVBZ0xDO1lBeEZDLGtCQUFZLEdBQWtCLElBQUksQ0FBQztZQUluQyxlQUFTLEdBQUcsS0FBSyxDQUFDOztTQW9GbkI7Ozs7UUFsRkMsNkJBQVE7OztZQUFSOztvQkFDUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7aUJBQ3JCO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO29CQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJO3dCQUNmLEtBQUssT0FBTzs0QkFDVixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs0QkFDL0IsTUFBTTt3QkFDUixLQUFLLE1BQU07NEJBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7NEJBQy9CLE1BQU07cUJBQ1Q7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN2QztnQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNO3NCQUNuQixFQUFFLENBQUMsTUFBTTtzQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFROzBCQUMzQixHQUFHOzBCQUNILHFCQUFxQixDQUFDOztnQkFFNUIsSUFBSSxDQUFDLENBQUMsR0FBRztvQkFDUCxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDOztvQkFFdkMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztpQkFDdEMsQ0FBQzthQUNIOzs7OztRQUVELDBCQUFLOzs7O1lBQUwsVUFBTSxLQUFVO2dCQUNkLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQzFGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjthQUNGOzs7OztRQUVELDRCQUFPOzs7O1lBQVAsVUFBUSxLQUFvQjtnQkFBNUIsaUJBaUJDO2dCQWhCQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE9BQU87aUJBQ1I7O29CQUVLLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztzQkFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUM7c0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjthQUNGOzs7OztRQUVELGdDQUFXOzs7O1lBQVgsVUFBWSxNQUFlO2dCQUN6QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4RDs7Ozs7UUFFRCx3QkFBRzs7OztZQUFILFVBQUksS0FBVTtnQkFDWixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztRQUVELHNCQUFZLG1DQUFXOzs7Z0JBQXZCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7OztXQUFBOzs7OztRQUVPLDJCQUFNOzs7O1lBQWQsVUFBZSxLQUFVO2dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDeEM7Ozs7O1FBRU8sMkJBQU07Ozs7WUFBZCxVQUFlLEtBQVU7Z0JBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxLQUFLLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlFLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkOztvQkEvS0ZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHNsR0FpRlQ7d0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBMkZELGlCQUFDO0tBQUEsQ0ExRitCLGFBQWE7Ozs7Ozs7UUMxRGJOLDhCQUFhO1FBN0I3QztZQUFBLHFFQXdGQztZQTFEQyxrQkFBWSxHQUFTLElBQUksQ0FBQzs7U0EwRDNCOzs7O1FBdERDLDZCQUFROzs7WUFBUjs7b0JBQ1EsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNO3NCQUNuQixFQUFFLENBQUMsTUFBTTtzQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFROzBCQUMzQixHQUFHOzBCQUNILFVBQVUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLENBQUMsR0FBRztvQkFDUCxhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsSUFBSSxVQUFVO29CQUM3QyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO29CQUN2QyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJO29CQUMvQixnQkFBZ0IsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUU7b0JBQ25ELG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO29CQUMxRCxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDO29CQUMxQixVQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDO29CQUNoQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDO2lCQUMvQixDQUFDO2FBQ0g7Ozs7O1FBRUQsMEJBQUs7Ozs7WUFBTCxVQUFNLEtBQVU7Z0JBQ2QsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsT0FBTztpQkFDUjs7b0JBQ0csQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJOztnQkFHekUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLEVBQUU7b0JBQ2hELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxLQUFLLElBQUksS0FBSyxDQUFDO29CQUM1RCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUN2Qjs7Ozs7UUFFRCw0QkFBTzs7OztZQUFQLFVBQVEsS0FBVztnQkFDakIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixPQUFPO2lCQUNSO2dCQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUM3QixJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxHQUFHLENBQ04sSUFBSSxFQUNKLENBQUMsRUFDRCxDQUFDLEVBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUNoQixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQ2xCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FDbkIsQ0FDRixDQUFDO29CQUNGLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNDOztvQkF2RkZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHMzQkF3QlQ7d0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBNERELGlCQUFDO0tBQUEsQ0EzRCtCLGFBQWE7Ozs7Ozs7UUNHWk4sK0JBQWE7UUFqQzlDO1lBQUEscUVBMkNDO1lBVEMsVUFBSSxHQUFVLEVBQUUsQ0FBQzs7U0FTbEI7Ozs7O1FBTkMsMkJBQUs7Ozs7WUFBTCxVQUFNLEtBQVU7Z0JBQWhCLGlCQUtDO2dCQUpDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLE1BQU0sU0FBUyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUksSUFBSSxRQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFDLENBQzNCLENBQUM7YUFDSDs7b0JBMUNGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxnN0JBNEJUO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOztRQVdELGtCQUFDO0tBQUEsQ0FWZ0MsYUFBYTs7Ozs7OztRQzNCVk4sa0NBQWE7UUFMakQ7WUFBQSxxRUE2RUM7WUF2RUMsVUFBSSxHQUFtQixFQUFFLENBQUM7WUFDMUIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7WUFDbkIsbUJBQWEsR0FBRyxLQUFLLENBQUM7WUFFdEIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7WUFDaEIsWUFBTSxHQUFHLEtBQUssQ0FBQzs7U0FrRWhCO1FBaEVDLHNCQUFJLDZCQUFDOzs7Z0JBQUw7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwRDs7O1dBQUE7Ozs7O1FBRUQsOEJBQUs7Ozs7WUFBTCxVQUFNLEtBQVU7Z0JBQWhCLGlCQWVDO2dCQWRDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7b0JBQ0YsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQzdELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFFckUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN6QixDQUNGLENBQUM7YUFDSDs7Ozs7UUFFRCxrQ0FBUzs7OztZQUFULFVBQVUsS0FBVTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCOzs7O1FBRUQsa0NBQVM7OztZQUFUOztvQkFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxHQUFBLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssR0FBQSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5Qjs7Ozs7UUFFRCwwQ0FBaUI7Ozs7WUFBakIsVUFBa0IsTUFBYTtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ2YsVUFBQSxJQUFJLElBQUksUUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFDLENBQzNELENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCOzs7OztRQUVELHFDQUFZOzs7O1lBQVosVUFBYSxDQUFRO2dCQUFyQixpQkFJQztnQkFIQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLFFBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxJQUFDLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCOzs7Ozs7UUFFRCx5Q0FBZ0I7Ozs7O1lBQWhCO2dCQUFBLGlCQWFDO2dCQVpDLElBQUksbUJBQUEsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBQSxDQUFDLEVBQUU7b0JBQ25ELG1CQUFBLElBQUksR0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixtQkFBQSxJQUFJLEdBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDNUI7cUJBQU0sSUFBSSxtQkFBQSxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxHQUFBLENBQUMsRUFBRTtvQkFDekQsbUJBQUEsSUFBSSxHQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLG1CQUFBLElBQUksR0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxtQkFBQSxJQUFJLEdBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDM0I7O2dCQUVELFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQUEsS0FBSSxHQUFDLGFBQWEsRUFBRSxHQUFBLENBQUMsQ0FBQztnQkFDdkMsMEJBQU8sSUFBSSxHQUFDO2FBQ2I7Ozs7O1FBRU8scUNBQVk7Ozs7WUFBcEIsVUFBcUIsR0FBNkI7Z0JBQ2hELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDOztvQkE1RUZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsNnZEQUFxQzt3QkFDckMsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBeUVELHFCQUFDO0tBQUEsQ0F4RW1DLGFBQWE7Ozs7Ozs7UUNRZE4saUNBQWE7UUFmaEQ7O1NBZW1EOztvQkFmbERNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDJhQVVNO3dCQUNoQixtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFDaUQsb0JBQUM7S0FBQSxDQUFoQixhQUFhOzs7Ozs7O1FDTVpOLGtDQUFhO1FBcEJqRDtZQUFBLHFFQTJCQztZQU5DLGNBQVEsR0FBUSxJQUFJLENBQUM7O1NBTXRCOzs7O1FBTEMsaUNBQVE7OztZQUFSO2dCQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO29CQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNsQzthQUNGOztvQkExQkZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDJnQkFlTTt3QkFDaEIsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBUUQscUJBQUM7S0FBQSxDQVBtQyxhQUFhOzs7Ozs7O1FDNEJmTixnQ0FBYTtRQS9DL0M7WUFBQSxxRUFtR0M7WUFqREMsY0FBUSxHQUFHLEtBQUssQ0FBQzs7U0FpRGxCOzs7O1FBL0NDLCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7b0JBQzlCLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO29CQUMzQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixJQUFJLElBQUk7b0JBQ3BELHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztvQkFDeEUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7b0JBQ2pELGdCQUFnQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLElBQUksUUFBUTtvQkFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVM7b0JBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsSUFBSSxNQUFNO29CQUNsRCxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztpQkFDN0MsQ0FBQzthQUNIOzs7OztRQUVELDRCQUFLOzs7O1lBQUwsVUFBTSxLQUFVO2dCQUFoQixpQkFRQztnQkFQQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7b0JBQ0YsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUM5RCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCLENBQ0YsQ0FBQzthQUNIOzs7OztRQUVELDZCQUFNOzs7O1lBQU4sVUFBTyxNQUFXO2dCQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2Qjs7Ozs7UUFFRCxpQ0FBVTs7OztZQUFWLFVBQVcsS0FBVTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7b0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkQ7Ozs7O1FBRUQsbUNBQVk7Ozs7WUFBWixVQUFhLElBQVk7Z0JBQXpCLGlCQVNDO2dCQVJDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVU7d0JBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUNoQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQ3RCLENBQUMsQ0FBQztvQkFDSCxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0Qjs7Ozs7UUFFRCxxQ0FBYzs7OztZQUFkLFVBQWUsS0FBVTtnQkFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWM7b0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0Q7O29CQWxHRk0sY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsZ2dEQTBDVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFxREQsbUJBQUM7S0FBQSxDQXBEaUMsYUFBYTs7Ozs7OztRQ2RUTixvQ0FBYTtRQTlCbkQ7WUFBQSxxRUFzRkM7WUF0REMsVUFBSSxHQUFtQixFQUFFLENBQUM7O1NBc0QzQjs7OztRQXBEUyw2QkFBRTs7O1lBQVY7Z0JBQUEsaUJBSUM7OztnQkFEQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsR0FBQSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlDOzs7OztRQUVPLG1DQUFROzs7O1lBQWhCLFVBQWlCLElBQW9CO2dCQUNuQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJdUIsc0JBQVUsb0JBQUNoQyxhQUFRLENBQUMsSUFBSSxDQUFDLEdBQVEsR0FBQSxDQUFDLENBQUM7YUFDaEU7Ozs7UUFFRCxtQ0FBUTs7O1lBQVI7Z0JBQ1UsSUFBQSxZQUFFO2dCQUNWLElBQUksQ0FBQyxDQUFDLEdBQUc7b0JBQ1AsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVO29CQUN6QixVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO29CQUN4Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztvQkFDbkUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztvQkFDcEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztvQkFDdEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztvQkFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztvQkFDcEMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxVQUFVO29CQUNoRCxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztvQkFDcEQsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixJQUFJLEVBQUU7b0JBQ2pELFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxLQUFLLFVBQUMsSUFBZ0IsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEdBQUEsQ0FBQztpQkFDbEUsQ0FBQzthQUNIOzs7OztRQUVELGdDQUFLOzs7O1lBQUwsVUFBTSxLQUFVO2dCQUFoQixpQkFPQztnQkFOQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO3FCQUN0RCxJQUFJLENBQUNFLGFBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO3FCQUN0QyxTQUFTLENBQUMsVUFBQSxJQUFJO29CQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixLQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ1gsQ0FBQyxDQUFDO2FBQ047Ozs7O1FBRUQsaUNBQU07Ozs7WUFBTixVQUFPLEtBQVU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07b0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7Ozs7O1FBRUQsdUNBQVk7Ozs7WUFBWixVQUFhLENBQW9CO2dCQUFqQyxpQkFVQztnQkFUUyxJQUFBLFlBQUU7Z0JBQ1YsSUFBSSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssVUFBVTtvQkFBRSxPQUFPO2dCQUNsRCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDZixJQUFJLENBQUNBLGFBQUcsQ0FBQyxVQUFDLElBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztxQkFDeEQsU0FBUyxDQUFDLFVBQUEsR0FBRztvQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNYLENBQUMsQ0FBQzthQUNOOztvQkFyRkZhLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsaTlCQXlCVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUF5REQsdUJBQUM7S0FBQSxDQXhEcUMsYUFBYTs7Ozs7OztRQ2RwQk4sNkJBQWE7UUFuQjVDOztTQW1EQzs7Ozs7UUE3QkMseUJBQUs7Ozs7WUFBTCxVQUFNLEtBQVU7Z0JBQWhCLGlCQU9DO2dCQU5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2pFLFVBQUEsSUFBSTtvQkFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN0QixDQUNGLENBQUM7YUFDSDs7Ozs7UUFFRCw0QkFBUTs7OztZQUFSLFVBQVMsSUFBa0I7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTs7OztRQUVELCtCQUFXOzs7WUFBWDtnQkFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVTtvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzlDOzs7OztRQUVELDBCQUFNOzs7O1lBQU4sVUFBTyxDQUFNO2dCQUNYLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDOzs7O1FBRU8sK0JBQVc7OztZQUFuQjtnQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxHQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsRUFDbEQsS0FBSyxDQUNOLENBQUM7YUFDSDs7b0JBbERGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx3YUFjVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFpQ0QsZ0JBQUM7S0FBQSxDQWhDOEIsYUFBYTs7Ozs7OztRQzRCVk4sZ0NBQWE7UUFLN0Msc0JBQVksRUFBcUIsRUFBVSxRQUF3QjtZQUFuRSxZQUNFLGtCQUFNLEVBQUUsQ0FBQyxTQUNWO1lBRjBDLGNBQVEsR0FBUixRQUFRLENBQWdCO1lBSG5FLGNBQVEsR0FBaUIsRUFBRSxDQUFDO1lBQzVCLGFBQU8sR0FBRyxFQUFFLENBQUM7WUEwRGIsbUJBQWEsR0FBRyxVQUFDLElBQWdCO2dCQUMvQixLQUFJLENBQUMsUUFBUTtxQkFDVixNQUFNLENBQUM7b0JBQ04sU0FBUyxFQUFFLGlCQUFhLElBQUksQ0FBQyxHQUFHO3dCQUM5QixJQUFJLENBQUMsUUFBUSwrQkFBd0I7b0JBQ3ZDLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7cUJBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxHQUFBLENBQUMsQ0FBQzthQUNyRCxDQUFDOztTQTlERDs7OztRQUVELCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNQLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxRQUFRO29CQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTTtvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUU7b0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFO29CQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztvQkFDakQsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7b0JBQ3RELFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxFQUFFO29CQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksTUFBTTtvQkFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7b0JBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNO29CQUM1QixjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztvQkFDcEQsZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7b0JBQ3ZELFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNoRCxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssY0FBYztvQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDOUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLGdGQUFlLENBQUM7b0JBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTt3QkFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSw0SUFBeUIsQ0FBQztpQkFDN0M7YUFDRjs7Ozs7UUFFRCw2QkFBTTs7OztZQUFOLFVBQU8sSUFBdUI7Z0JBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUztvQkFBRSxPQUFPO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1Qjs7Ozs7UUFFRCw0QkFBSzs7OztZQUFMLFVBQU0sS0FBVTtnQkFBaEIsaUJBUUM7Z0JBUEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQSxJQUFJO29CQUNGLEtBQUksQ0FBQyxRQUFRLHNCQUFHLElBQUksRUFBZ0IsQ0FBQztvQkFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEIsQ0FDRixDQUFDO2FBQ0g7Ozs7O1FBRU8sNkJBQU07Ozs7WUFBZCxVQUFlLFFBQXNCO2dCQUFyQyxpQkFRQzs7b0JBUE8sR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO29CQUMzQixPQUFBd0IsWUFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFBQSxDQUN4RDtnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQzFDLEtBQUssQ0FDTixDQUFDO2FBQ0g7O29CQXpHRmxCLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDZoREF5Q1Q7d0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7Ozs7O3dCQW5EMkJFLHNCQUFpQjt3QkFFTGlCLDBCQUFjOzs7UUF3SHRELG1CQUFDO0tBQUEsQ0F0RWlDLGFBQWE7Ozs7Ozs7UUNwQlh6QixrQ0FBYTtRQTFCakQ7WUFBQSxxRUFnRkM7WUFyREMsVUFBSSxHQUFVLEVBQUUsQ0FBQztZQUVULFdBQUssR0FBVSxFQUFFLENBQUM7WUE2QjFCLGNBQVEsR0FBRyxVQUFDLEdBQVE7Z0JBQ2xCLE9BQU8sS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUdOLE9BQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUQsQ0FBQzs7U0FvQkg7Ozs7UUFqREMsaUNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxDQUFDLEdBQUc7b0JBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLEdBQUc7b0JBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxHQUFHO2lCQUNwQyxDQUFDO2FBQ0g7Ozs7O1FBRUQsOEJBQUs7Ozs7WUFBTCxVQUFNLEtBQVU7Z0JBQWhCLGlCQVlDO2dCQVhDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTs7d0JBQzVDLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7b0JBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzt3QkFBRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCO3dCQUM5QixJQUFJLENBQUMsb0JBQUMsUUFBUSxJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3FCQUN4RSxDQUFDLENBQUM7b0JBQ0gsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxHQUFBLENBQUMsQ0FBQztvQkFDdkQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7UUFFTywrQkFBTTs7O1lBQWQ7Z0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqRTs7Ozs7UUFNRCxnQ0FBTzs7OztZQUFQLFVBQVEsT0FBWTs7Z0JBQ2xCLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQSxLQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsTUFBTSxvQkFBSSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUM7aUJBQ2pEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7aUJBQ3JFO2dCQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjs7Ozs7UUFFRCxzQ0FBYTs7OztZQUFiLFVBQWMsT0FBWTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekQ7Ozs7O1FBRUQsc0NBQWE7Ozs7WUFBYixVQUFjLE9BQVk7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCOztvQkEvRUZZLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLG93QkFxQlQ7d0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBdURELHFCQUFDO0tBQUEsQ0F0RG1DLGFBQWE7Ozs7Ozs7UUNKZk4sZ0NBQWE7UUF6Qi9DO1lBQUEscUVBa0RDO1lBUkMsZ0JBQVUsR0FBRyxVQUFDLEtBQVU7Z0JBQ3RCLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO29CQUFFLE9BQU8sS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sS0FBSyxDQUFDO2FBQ2QsQ0FBQTs7U0FLRjs7OztRQWxCQywrQkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7O29CQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ25FOzs7OztRQU9ELG1DQUFZOzs7O1lBQVosVUFBYSxLQUFVO2dCQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyRDs7b0JBakRGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSx5bUJBb0JUO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOztRQTBCRCxtQkFBQztLQUFBLENBekJpQyxhQUFhOzs7Ozs7O1FDWmJOLGdDQUFhO1FBYi9DOztTQWFrRDs7b0JBYmpETSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxvVUFRVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFDZ0QsbUJBQUM7S0FBQSxDQUFoQixhQUFhOzs7Ozs7O1FDT2ZOLDhCQUFhO1FBbkI3QztZQUFBLHFFQXNDQztZQWRDLGFBQU8sR0FBRyxLQUFLLENBQUM7O1NBY2pCOzs7O1FBYkMsNkJBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzthQUMvQjs7OztRQUVELDRCQUFPOzs7WUFBUDtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPO3NCQUNmLG9CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFZLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7c0JBQ3RFLEVBQUUsQ0FBQzthQUNSOztvQkFyQ0ZNLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDZnQkFjVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFvQkQsaUJBQUM7S0FBQSxDQW5CK0IsYUFBYTs7Ozs7OztBQ2hCN0MsUUFBYSxXQUFXLEdBQUc7UUFDekIsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7S0FDYjtBQUVEO1FBeUJ3Q04sc0NBQWE7UUF6QnJEO1lBQUEscUVBNkZDO1lBbEVDLGFBQU8sR0FBbUIsRUFBRSxDQUFDO1lBR3JCLGFBQU8sR0FBRyxLQUFLLENBQUM7O1NBK0R6Qjs7OztRQTdEQyxxQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBeUJDO2dCQXhCQyxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO29CQUN6Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7b0JBQ3hFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxTQUFTO2lCQUNsQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDL0UsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQW9CO3dCQUN0RCxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFBQSxDQUFDO2lCQUN4RTtnQkFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs7b0JBQzdCLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQzs7b0JBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzdDMEIsc0JBQVksQ0FBQyxJQUFJLENBQUMsRUFDbEJDLG1CQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2JDLGlCQUFPLENBQ0wsVUFBQSxLQUFLO29CQUNILE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFBQSxDQUNuRSxFQUNEbkMsYUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBQSxDQUFDLENBQ3JELENBQUM7YUFDSDs7Ozs7UUFFRCxrQ0FBSzs7OztZQUFMLFVBQU0sS0FBVTtnQkFDZCxJQUFJLElBQUksQ0FBQyxPQUFPO29CQUFFLE9BQU87Z0JBQ3pCLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO29CQUNsQixLQUFLLE9BQU87d0JBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNwRSxNQUFNO29CQUNSO3dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNyQixDQUFDO3dCQUNGLE1BQU07aUJBQ1Q7YUFDRjs7Ozs7UUFFTyx1Q0FBVTs7OztZQUFsQixVQUFtQixLQUFhO2dCQUFoQyxpQkFTQztnQkFSQyxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtvQkFDbEIsS0FBSyxPQUFPO3dCQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEM7d0JBQ0UsT0FBT0MsT0FBRSxDQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUNoRSxDQUFDO2lCQUNMO2FBQ0Y7Ozs7O1FBRU8sMkNBQWM7Ozs7WUFBdEIsVUFBdUIsS0FBYTtnQkFDbEMsT0FBT0EsT0FBRSxDQUNQLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7c0JBQ3pCLEVBQUU7c0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBRyxLQUFLLFNBQUksTUFBTSxDQUFDLEtBQU8sR0FBQSxDQUFDLENBQzNELENBQUM7YUFDSDs7b0JBNUZGWSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDg0QkFvQlA7d0JBQ0gsbUJBQW1CLEVBQUUsS0FBSztxQkFDM0I7O1FBcUVELHlCQUFDO0tBQUEsQ0FwRXVDLGFBQWE7Ozs7Ozs7UUNDakJOLGtDQUFhO1FBcENqRDtZQUFBLHFFQW9GQztZQTNDQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQzs7U0EyQzNCOzs7O1FBeENDLGlDQUFROzs7WUFBUjtnQkFBQSxpQkFTQztnQkFSQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUMsSUFBUyxFQUFFLEtBQWE7d0JBQ3ZDLE9BQUEsb0JBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUM7cUJBQUEsQ0FBQztpQkFDakQ7YUFDRjs7Ozs7UUFFRCw4QkFBSzs7OztZQUFMLFVBQU0sS0FBVTtnQkFBaEIsaUJBT0M7Z0JBTkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakUsVUFBQSxJQUFJO29CQUNGLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCLENBQ0YsQ0FBQzthQUNIOzs7OztRQUVELHVDQUFjOzs7O1lBQWQsVUFBZSxNQUFlO2dCQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4RDs7Ozs7UUFFRCxnQ0FBTzs7OztZQUFQLFVBQVEsS0FBYTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7Ozs7O1FBRUQseUNBQWdCOzs7O1lBQWhCLFVBQWlCLE9BQVk7Z0JBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdEOzs7OztRQUVELGdDQUFPOzs7O1lBQVAsVUFBUSxPQUFZO2dCQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQzs7Ozs7UUFFRCwrQkFBTTs7OztZQUFOLFVBQU8sT0FBWTtnQkFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekM7O29CQW5GRk0sY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMm9DQStCVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFpREQscUJBQUM7S0FBQSxDQWhEbUMsYUFBYTs7Ozs7OztRQ2dCZE4saUNBQWE7UUFoRGhEO1lBQUEscUVBMEdDO1lBeERDLFVBQUksR0FBbUIsRUFBRSxDQUFDO1lBRTFCLGFBQU8sR0FBRyxLQUFLLENBQUM7O1NBc0RqQjs7OztRQXBEQyxnQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBNEJDO2dCQTNCQyxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEdBQUEsQ0FBQztvQkFDcEQsZUFBZSxFQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxJQUFJLGdCQUFnQjtvQkFDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVE7b0JBQ3hDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxHQUFHO2lCQUM5QixDQUFDOztvQkFDSSxHQUFHLEdBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztvQkFDdkUsR0FBRyxHQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFDbEIsS0FBVSxFQUNWLFlBQTBCLEVBQzFCLElBQW1COzs0QkFFYixLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNO3dCQUNwRCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFOzRCQUM3QixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSw4QkFBUSxHQUFHLFlBQUksRUFBRSxDQUFDLENBQUM7eUJBQzNEO3dCQUNELElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7NEJBQzdCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDhCQUFRLEdBQUcsWUFBSSxFQUFFLENBQUMsQ0FBQzt5QkFDM0Q7d0JBQ0QsT0FBTyxJQUFJLENBQUM7cUJBQ2IsQ0FBQztpQkFDSDthQUNGOzs7OztRQUVELDZCQUFLOzs7O1lBQUwsVUFBTSxLQUFVO2dCQUFoQixpQkFLQztnQkFKQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7b0JBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCLENBQUMsQ0FBQzthQUNKOzs7OztRQUVELCtCQUFPOzs7O1lBQVAsVUFBUSxPQUFZO2dCQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3Qzs7Ozs7UUFFRCwrQkFBTzs7OztZQUFQLFVBQVEsTUFBVztnQkFBbkIsaUJBVUM7Z0JBVEMsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLFVBQVU7b0JBQUUsT0FBTztnQkFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLG9CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDdEIsSUFBSSxDQUFDNkIsYUFBRyxDQUFDLGNBQU0sUUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssSUFBQyxDQUFDLEVBQUVwQyxhQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFBLENBQUMsQ0FBQztxQkFDN0YsU0FBUyxDQUFDLFVBQUEsR0FBRztvQkFDWixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztvQkFDaEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekIsQ0FBQyxDQUFDO2FBQ047O29CQXpHRmEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsa2pEQTJDUDt3QkFDSCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7O21DQUVFUSxjQUFTLFNBQUMsVUFBVTs7UUF5RHZCLG9CQUFDO0tBQUEsQ0ExRGtDLGFBQWE7Ozs7Ozs7UUM3Q2hCZCw4QkFBYTtRQVQ3Qzs7U0FhQzs7OztRQUhDLDZCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDM0I7O29CQVpGTSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSwwTUFJVDt3QkFDRCxtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjs7UUFLRCxpQkFBQztLQUFBLENBSitCLGFBQWE7Ozs7Ozs7UUNhUE4sb0NBQWM7UUFDbEQ7WUFBQSxZQUNFLGlCQUFPLFNBNEJSO1lBMUJDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXBDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUV0QyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOztTQUMvQjtRQUNILHVCQUFDO0lBQUQsQ0EvQkEsQ0FBc0MsY0FBYzs7Ozs7OztRQ1A5QyxVQUFVLEdBQUc7UUFDakIsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtLQUNqQjs7UUE2QkssT0FBTyxHQUFHO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLGNBQWM7UUFDZCxhQUFhO1FBQ2IsY0FBYztRQUNkLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTtRQUNaLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtLQUNYOztBQUlEO1FBQUE7U0FvQkM7Ozs7UUFiUSx1QkFBTzs7O1lBQWQ7Z0JBQ0UsT0FBTztvQkFDTCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFO3dCQUNULGVBQWU7d0JBQ2Y7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLHlCQUF5Qjt5QkFDcEM7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtxQkFDeEQ7aUJBQ0YsQ0FBQzthQUNIOztvQkFuQkY4QixhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLEVBQUVDLGlCQUFXLEVBQUVDLG9CQUFlLEVBQUVDLHVCQUFpQixFQUFFQyw2QkFBaUIsQ0FBQzt3QkFDM0YsWUFBWSxXQUFNLFVBQVUsRUFBSyxPQUFPLENBQUM7d0JBQ3pDLGVBQWUsV0FBTSxPQUFPLENBQUM7d0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7cUJBQ3pCOztRQWVELHNCQUFDO0tBcEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=