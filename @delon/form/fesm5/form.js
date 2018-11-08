import { __extends, __assign, __decorate, __metadata, __spread, __values, __rest } from 'tslib';
import { of, Subject, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, takeWhile, distinctUntilChanged, filter, startWith, flatMap, debounceTime, tap } from 'rxjs/operators';
import { deepCopy, InputBoolean, InputNumber, deepGet, DelonUtilModule } from '@delon/util';
import { Inject, Optional, Injectable, ComponentFactoryResolver, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef, Directive, ElementRef, Renderer2, TemplateRef, HostBinding, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import format from 'date-fns/format';
import { NzTreeNode, NzModalService, NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
            return (/** @type {?} */ ({ label: item, value: item }));
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
    return getEnum(deepCopy(list || []), formData, readOnly);
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
            .pipe(takeWhile(function () { return ui.__destroy !== true; }), map(function (list) { return getEnum(list, formData, schema.readOnly); }));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TerminatorService = /** @class */ (function () {
    function TerminatorService() {
        this.onDestroy = new Subject();
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
var  /**
 * @abstract
 */
FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        this.options = options;
        this._value = null;
        this._errors = null;
        this._objErrors = {};
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: (/** @type {?} */ (this.ui.ingoreKeywords)),
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = (/** @type {?} */ (((/** @type {?} */ (this)))));
        }
        this._path = path;
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
            return this.schema.type;
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
            return this._root || (/** @type {?} */ (((/** @type {?} */ (this)))));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._path;
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
        return (/** @type {?} */ (property));
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
        var customValidator = ((/** @type {?} */ (this.ui))).validator;
        if (typeof customValidator === 'function') {
            /** @type {?} */
            var customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
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
        if (emitFormat === void 0) { emitFormat = true; }
        if (emitFormat && errors && !this.ui.onlyVisual) {
            errors = errors.map(function (err) {
                /** @type {?} */
                var message = err._custom === true && err.message
                    ? err.message
                    : (_this.ui.errors || {})[err.keyword] ||
                        _this.options.errors[err.keyword] ||
                        "";
                if (message && typeof message === 'function')
                    message = (/** @type {?} */ (message(err)));
                if (message) {
                    if (~((/** @type {?} */ (message))).indexOf('{')) {
                        message = ((/** @type {?} */ (message))).replace(/{([\.a-z0-9]+)}/g, function (v, key) { return err.params[key] || ''; });
                    }
                    err.message = (/** @type {?} */ (message));
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
                        var valueCheck = property.valueChanges.pipe(map(function (value) {
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
                        var and = combineLatest(valueCheck, visibilityCheck).pipe(map(function (results) { return results[0] && results[1]; }));
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
            combineLatest(propertiesBinding)
                .pipe(map(function (values) { return values.indexOf(true) !== -1; }), distinctUntilChanged())
                .subscribe(function (visible) { return _this.setVisible(visible); });
        }
    };
    return FormProperty;
}());
/**
 * @abstract
 */
var  /**
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
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                ((/** @type {?} */ (child))).forEachChildRecursive(fn);
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
var  /**
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
        var list = (/** @type {?} */ (this.properties));
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
        var newProperty = (/** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui.$items, value, this)));
        ((/** @type {?} */ (this.properties))).push(newProperty);
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
            }
            finally { if (e_1) throw e_1.error; }
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
        var list = (/** @type {?} */ (this.properties));
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
         */
        function () {
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
            orderedProperties = orderProperties(Object.keys(this.schema.properties), (/** @type {?} */ (this.ui.order)));
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
        if (parent === void 0) { parent = null; }
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
                path += ((/** @type {?} */ (parent))).tick++;
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
                ((/** @type {?} */ (((/** @type {?} */ (parent)).schema.required || [])))).indexOf(propertyId) !== -1) {
                ui._required = true;
            }
            // fix title
            if (schema.title == null)
                schema.title = propertyId;
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') &&
                !schema.format &&
                !((/** @type {?} */ (ui))).format) {
                if (((/** @type {?} */ (ui))).widget === 'date')
                    ui.format =
                        schema.type === 'string'
                            ? this.options.uiDateStringFormat
                            : this.options.uiDateNumberFormat;
                else if (((/** @type {?} */ (ui))).widget === 'time')
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
var  /**
 * @abstract
 */
SchemaValidatorFactory = /** @class */ (function () {
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
    AjvSchemaValidatorFactory.ctorParameters = function () { return [
        { type: DelonFormConfig, decorators: [{ type: Optional }, { type: Inject, args: [DelonFormConfig,] }] }
    ]; };
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
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetFactory.ctorParameters = function () { return [
        { type: WidgetRegistry },
        { type: ComponentFactoryResolver }
    ]; };
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
        this.formChange = new EventEmitter();
        /**
         * 提交表单时回调
         */
        this.formSubmit = new EventEmitter();
        /**
         * 重置表单时回调
         */
        this.formReset = new EventEmitter();
        /**
         * 表单校验结果回调
         */
        this.formError = new EventEmitter();
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
         */
        function () {
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
        var _schema = deepCopy(this.schema);
        var definitions = _schema.definitions;
        /** @type {?} */
        var inFn = function (schema, parentSchema, uiSchema, parentUiSchema, uiRes) {
            Object.keys(schema.properties).forEach(function (key) {
                /** @type {?} */
                var uiKey = "$" + key;
                /** @type {?} */
                var property = retrieveSchema((/** @type {?} */ (schema.properties[key])), definitions);
                /** @type {?} */
                var ui = (/** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
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
        this._defUi = Object.assign((/** @type {?} */ ({
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
        if (emit === void 0) { emit = false; }
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
        { type: Component, args: [{
                    selector: 'sf, [sf]',
                    template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\" [nzXXl]=\"_btn.render.grid.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\" (click)=\"reset(true)\" type=\"button\" nz-button [nzType]=\"_btn.reset_type\">{{_btn.reset}}</button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SFComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory },
        { type: TerminatorService },
        { type: DelonFormConfig },
        { type: ChangeDetectorRef },
        { type: DelonLocaleService }
    ]; };
    SFComponent.propDecorators = {
        layout: [{ type: Input }],
        schema: [{ type: Input }],
        ui: [{ type: Input }],
        formData: [{ type: Input }],
        button: [{ type: Input }],
        liveValidate: [{ type: Input }],
        autocomplete: [{ type: Input }],
        firstVisual: [{ type: Input }],
        mode: [{ type: Input }],
        formChange: [{ type: Output }],
        formSubmit: [{ type: Output }],
        formReset: [{ type: Output }],
        formError: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "liveValidate", void 0);
    __decorate([
        InputBoolean(),
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
        var ui = (/** @type {?} */ (this.formProperty.ui));
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
        this.formProperty.ui.__destroy = true;
        this.ref.destroy();
    };
    SFItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item',
                    template: "<ng-template #target></ng-template>"
                }] }
    ];
    /** @nocollapse */
    SFItemComponent.ctorParameters = function () { return [
        { type: WidgetFactory },
        { type: TerminatorService }
    ]; };
    SFItemComponent.propDecorators = {
        formProperty: [{ type: Input }],
        container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] }]
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
        this.el = (/** @type {?} */ (er.nativeElement));
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
        { type: Directive, args: [{ selector: '[fixed-label]' },] }
    ];
    /** @nocollapse */
    SFFixedDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SFFixedDirective.propDecorators = {
        num: [{ type: Input, args: ['fixed-label',] }]
    };
    __decorate([
        InputNumber(),
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
         */
        function () {
            return this.title === null ? this.schema.title : this.title;
        },
        enumerable: true,
        configurable: true
    });
    SFItemWrapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item-wrap',
                    template: "<nz-form-item [style.width.px]=\"ui.width\">\n  <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      {{ t }}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </nz-col>\n  <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <ng-content></ng-content>\n      <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n      <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n    </div>\n  </nz-col>\n</nz-form-item>\n",
                    preserveWhitespaces: false
                }] }
    ];
    SFItemWrapComponent.propDecorators = {
        id: [{ type: Input }],
        schema: [{ type: Input }],
        ui: [{ type: Input }],
        showError: [{ type: Input }],
        error: [{ type: Input }],
        showTitle: [{ type: Input }],
        title: [{ type: Input }]
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
        { type: Directive, args: [{
                    selector: '[sf-template]',
                },] }
    ];
    /** @nocollapse */
    SFTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: SFComponent }
    ]; };
    SFTemplateDirective.propDecorators = {
        path: [{ type: Input, args: ['sf-template',] }]
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
            .pipe(filter(function (w) { return w != null; }))
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
         */
        function () {
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
    Widget.ctorParameters = function () { return [
        { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
        { type: SFComponent, decorators: [{ type: Inject, args: [SFComponent,] }] }
    ]; };
    Widget.propDecorators = {
        cls: [{ type: HostBinding, args: ['class',] }]
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
            .pipe(filter(function () { return _this.ui.__destroy !== true; }))
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
            .pipe(filter(function () { return _this.ui.__destroy !== true; }))
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
                var property = (/** @type {?} */ (this.formProperty.properties[key]));
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.list = list;
    };
    ObjectWidget.decorators = [
        { type: Component, args: [{
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
         */
        function () {
            return (this.schema.maxItems &&
                ((/** @type {?} */ (this.formProperty.properties))).length >= this.schema.maxItems);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayWidget.prototype, "l", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
         */
        function () {
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        return _this;
    }
    Object.defineProperty(CheckboxWidget.prototype, "l", {
        get: /**
         * @return {?}
         */
        function () {
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
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.data = list;
            _this.allChecked = false;
            _this.indeterminate = false;
            _this.labelTitle = list.length === 0 ? '' : _this.schema.title;
            _this.grid_span = _this.ui.span && _this.ui.span > 0 ? _this.ui.span : 0;
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
        if ((/** @type {?} */ (this)).data.every(function (item) { return item.checked === false; })) {
            (/** @type {?} */ (this)).allChecked = false;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else if ((/** @type {?} */ (this)).data.every(function (item) { return item.checked === true; })) {
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
        { type: Component, args: [{
                    selector: 'sf-checkbox',
                    template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\" [(ngModel)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n    (click)=\"onAllChecked($event)\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\"\n  [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        return list.map(function (node) { return new NzTreeNode((/** @type {?} */ (deepCopy(node)))); });
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
            .pipe(map(function (list) { return _this.tranData(list); }))
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
            .pipe(map(function (list) { return _this.tranData(list); }))
            .subscribe(function (res) {
            e.node.clearChildren();
            e.node.addChildren(res);
            _this.dc();
        });
    };
    TreeSelectWidget.decorators = [
        { type: Component, args: [{
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
        { type: Component, args: [{
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
            size: this.ui.size == null ? 0 : +this.ui.size,
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
            _this.fileList = (/** @type {?} */ (list));
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
            return deepGet(item.response, _this.i.resReName, item.response);
        });
        this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
    };
    UploadWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-upload',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-upload\n      [nzType]=\"i.type\"\n      [nzFileList]=\"fileList\"\n      [nzDisabled]=\"disabled\"\n      [nzAction]=\"i.action\"\n      [nzAccept]=\"i.accept\"\n      [nzLimit]=\"i.limit\"\n      [nzSize]=\"i.size\"\n      [nzFileType]=\"i.fileType\"\n      [nzHeaders]=\"ui.headers\"\n      [nzData]=\"ui.data\"\n      [nzListType]=\"i.listType\"\n      [nzMultiple]=\"i.multiple\"\n      [nzName]=\"i.name\"\n      [nzShowUploadList]=\"i.showUploadList\"\n      [nzWithCredentials]=\"i.withCredentials\"\n      [nzRemove]=\"ui.remove\"\n      [nzPreview]=\"handlePreview\"\n      (nzChange)=\"change($event)\">\n      <ng-container [ngSwitch]=\"btnType\">\n        <ng-container *ngSwitchCase=\"'plus'\">\n          <i nz-icon type=\"plus\"></i>\n          <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'drag'\">\n          <p class=\"ant-upload-drag-icon\"><i nz-icon type=\"inbox\"></i></p>\n          <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n          <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <button type=\"button\" nz-button>\n            <i nz-icon type=\"upload\"></i><span [innerHTML]=\"i.text\"></span>\n          </button>\n        </ng-container>\n      </ng-container>\n    </nz-upload>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    UploadWidget.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzModalService }
    ]; };
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
            return _this.ui.canMove ? _this.ui.canMove(arg) : of(arg.list);
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
                if (~((/** @type {?} */ (formData))).indexOf(item.value))
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
            ? ((/** @type {?} */ (this.ui.text))).replace('{{value}}', this.formProperty.value)
            : '';
    };
    RateWidget.decorators = [
        { type: Component, args: [{
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
        this.list = this.formProperty.valueChanges.pipe(debounceTime(time), startWith(''), flatMap(function (input) {
            return _this.isAsync ? _this.ui.asyncData(input) : _this.filterData(input);
        }), map(function (res) { return getEnum(res, null, _this.schema.readOnly); }));
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
                return of(this.fixData.filter(function (option) { return _this.filterOption(input, option); }));
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
        return of(!value || ~value.indexOf('@')
            ? []
            : this.fixData.map(function (domain) { return value + "@" + domain.label; }));
    };
    AutoCompleteWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-autocomplete',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n      <input nz-input [nzAutocomplete]=\"auto\"\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        autocomplete=\"off\">\n      <nz-autocomplete #auto\n        [nzBackfill]=\"i.backfill\"\n        [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n        [nzWidth]=\"i.width\"\n        (selectionChange)=\"setValue($event?.nzValue)\">\n        <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.label\">{{i.label}}</nz-auto-option>\n      </nz-autocomplete>\n    </sf-item-wrap>\n    ",
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
                return ((/** @type {?} */ (_this.ui.asyncData)))(node, index, _this);
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
        { type: Component, args: [{
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
        ((/** @type {?} */ (this.ui.loadData(option))))
            .pipe(tap(function () { return (_this.loading = false); }), map(function (res) { return getEnum(res, null, _this.schema.readOnly); }))
            .subscribe(function (res) {
            _this.data = res;
            _this.cd.detectChanges();
        });
    };
    MentionWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-mention',
                    template: "\n    <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n      <nz-mention #mentions\n        [nzSuggestions]=\"data\"\n        [nzValueWith]=\"i.valueWith\"\n        [nzLoading]=\"loading\"\n        [nzNotFoundContent]=\"i.notFoundContent\"\n        [nzPlacement]=\"i.placement\"\n        [nzPrefix]=\"i.prefix\"\n        (nzOnSelect)=\"_select($event)\"\n        (nzOnSearchChange)=\"_search($event)\">\n\n        <ng-container *ngIf=\"ui.inputStyle !== 'textarea'\">\n          <input nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            autocomplete=\"off\">\n        </ng-container>\n\n        <ng-container *ngIf=\"ui.inputStyle === 'textarea'\">\n          <textarea nzMentionTrigger nz-input\n            [attr.id]=\"id\"\n            [disabled]=\"disabled\"\n            [attr.disabled]=\"disabled\"\n            [nzSize]=\"ui.size\"\n            [ngModel]=\"value\"\n            (ngModelChange)=\"setValue($event)\"\n            [attr.maxLength]=\"schema.maxLength || null\"\n            [attr.placeholder]=\"ui.placeholder\"\n            [nzAutosize]=\"ui.autosize\">\n          </textarea>\n        </ng-container>\n\n      </nz-mention>\n\n    </sf-item-wrap>\n    ",
                    preserveWhitespaces: false
                }] }
    ];
    MentionWidget.propDecorators = {
        mentionChild: [{ type: ViewChild, args: ['mentions',] }]
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
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

export { DelonFormConfig, useFactory, SFComponent, SFItemComponent, SFFixedDirective, DelonFormModule, ERRORSDEFAULT, FormProperty, PropertyGroup, FormPropertyFactory, AtomicProperty, ObjectProperty, ArrayProperty, StringProperty, NumberProperty, BooleanProperty, Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget, ObjectWidget, ArrayWidget, StringWidget, NumberWidget, DateWidget, TimeWidget, RadioWidget, CheckboxWidget, BooleanWidget, TextareaWidget, SelectWidget, TreeSelectWidget, TagWidget, UploadWidget, TransferWidget, SliderWidget, RateWidget, EMAILSUFFIX, AutoCompleteWidget, CascaderWidget, MentionWidget, CustomWidget, NzWidgetRegistry, WidgetRegistry, WidgetFactory, SchemaValidatorFactory, AjvSchemaValidatorFactory, SFItemWrapComponent as ɵb, TerminatorService as ɵa, SFTemplateDirective as ɵc, TextWidget as ɵd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2Vycm9ycy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2NvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3V0aWxzLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2F0b21pYy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL251bWJlci5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL3N0cmluZy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Jvb2xlYW4ucHJvcGVydHkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL29iamVjdC5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3ZhbGlkYXRvci5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0LmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWZpeGVkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGltZS90aW1lLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBgw6XCuMKDw6XCsMKUw6bCqMKhw6XCvMKPw6XCh8K6w6nClMKZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYMOmwpfCoMOmwrPClcOmwonCvsOlwojCsMOlwrzClcOnwpTCqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYMOkwrjCjcOlwoXCgcOowq7CuMOowrbChcOowr/Ch3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYMOkwrjCjcOlwoXCgcOowq7CuMOmwpzCicOpwqLCncOlwqTClsOnwprChMOlwrHCnsOmwoDCp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpcK6wpTDpMK4wrogYW55T2Ygw6bCicKAw6bCjMKHw6XCrsKaw6fCmsKEw6XChcK2w6TCuMKtw6TCuMKAw6TCuMKqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwovCpcOmwpzCicOlwrHCnsOmwoDCp3twcm9wZXJ0eX3Dp8KawoTDpMK+wp3DqMK1wpbDpcKxwp7DpsKAwqd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsIC8vIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKgwrzDpcK8wo8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYMOnwrHCu8Olwp7Ci8OlwrrClMOlwr3Ck8OmwpjCryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBgw6XCv8KFw6XCocKrw6nCocK5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwqTCmiB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKwwpEge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqbDpMK7wqXDpMK4wopgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCryB7bXVsdGlwbGVPZn0gw6fCmsKEw6bClcK0w6bClcKww6XCgMKNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwozCucOpwoXCjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDDpcKPwqrDqMKDwr3DpcKMwrnDqcKFwo3DpMK4woDDpMK4wqogXCJvbmVPZlwiIMOkwrjCrcOnwprChCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwpDCq8OmwpzCicOpwofCjcOlwqTCjcOpwqHCuSAow6fCrMKsIHtqfSDDqcKhwrnDpMK4wo7Dp8Kswqwge2l9IMOpwqHCucOmwpjCr8OpwofCjcOlwqTCjcOnwprChClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYMOlwrHCnsOmwoDCp8OlwpDCjSBcIntwcm9wZXJ0eU5hbWV9XCIgw6bCl8Kgw6bClcKIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpzCicOlwrHCnsOmwoDCp8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYMOnwpTCscOkwrrCjiB7Y2FzZUluZGV4fSDDpcKkwrHDqMK0wqXDr8K8wozDpsKcwqrDqcKAwprDqMK/wocgXCJzd2l0Y2hcIiDDpsKgwqHDqcKqwoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6fCrcKJw6TCusKOw6XCuMK4w6nCh8KPYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozChcOlwpDCq8OkwrjCgMOkwrjCqsOmwpzCicOmwpXCiMOpwqHCuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq/DpsKWwofDpsKcwqzDr8K8wozDqcKUwq7DpcKQwo3DqMK1wp7DpcKQwowgYEVycm9yRGF0YS5rZXl3b3JkYCDDpcKAwrxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDDpcKAwrzDpcKnwovDp8K7wojDpcKMwoXDpcKQwqsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiIsImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRVJST1JTREVGQVVMVCB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDDqcKZwpDDpcKuwpogU2NoZW1hIMOkwrjCrSBgdHlwZWAgw6fCscK7w6XCnsKLXG4gICAqIC0gYGVudW1gIMOpwpnCkMOlwq7CmsOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykgw6XCj8KCw6bClcKwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xuICAvKipcbiAgICogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyA9IG51bGw7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKAwprDp8KUwqjDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq9cbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBFUlJPUlNERUZBVUxUO1xuICAvKipcbiAgICogw6nCu8KYw6jCrsKkw6XChcKow6XCscKAw6XCuMKDw6XCscKAXG4gICAqL1xuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xuICAvKipcbiAgICogw6XChcKDw6fCtMKgw6fCu8KEw6TCu8K2w6XCpMKnw6XCsMKPw6/CvMKMw6fClMKow6TCusKOIGBuelNpemVgIMOlwoDCvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6nCo8KOw6bCoMK8XG4gICAqL1xuICBidXR0b24/OiBTRkJ1dHRvbiA9IHtcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWVlZWS1NTS1ERCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRlw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJzdHJpbmdcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0PyA9ICdISDptbTpzcyc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXDDr8K8wozDpsKXwqXDpsKcwp/Dp8K7wp/DpMK4woDDpMK9wr/Dp8KUwqggYDE5NzAtMDEtMDFgXG4gICAqL1xuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjb25zdCBGT1JNQVRNQVBTID0ge1xuICAnZGF0ZS10aW1lJzoge1xuICAgIHdpZGdldDogJ2RhdGUnLFxuICAgIHNob3dUaW1lOiB0cnVlLFxuICAgIGZvcm1hdDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyxcbiAgfSxcbiAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gIHRpbWU6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgd2VlazogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ3dlZWsnLCBmb3JtYXQ6ICdZWVlZLVdXJyB9LFxuICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcbiAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcbiAgZW1haWw6IHsgd2lkZ2V0OiAnYXV0b2NvbXBsZXRlJywgdHlwZTogJ2VtYWlsJyB9LFxuICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbn1cblxuLyoqIMOmwqDCucOmwo3CriBgJHJlZmAgw6bCn8Klw6bCicK+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIMOlwo/ClsOlwpvCnlNjaGVtYcOvwrzCjMOlwrnCtsOlwqTChMOnwpDChiBgJHJlZmAgw6fCmsKEw6XChcKzw6fCs8K7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxuKTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xuXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLFxuICAgIGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZi5wcm9wZXJ0aWVzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbi5yZXF1aXJlZCk7XG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBjb25zdCBoYXNFbHNlID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdlbHNlJyk7XG4gIGlmIChoYXNFbHNlKSB7XG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmLnByb3BlcnRpZXNba2V5XS5lbnVtO1xuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZC5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuLnJlcXVpcmVkLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xuICBpZiAoaGFzRWxzZSlcbiAgICBzY2hlbWEuZWxzZS5yZXF1aXJlZC5mb3JFYWNoKFxuICAgICAga2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSxcbiAgICApO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcbiAgZGV0ZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSBhcnIgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCxcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyxcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiA8U0ZTY2hlbWFFbnVtPnsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxuICBmb3JtRGF0YTogYW55LFxuICBhc3luY0FyZ3M/OiBhbnksXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKCkgPT4gdWkuX19kZXN0cm95ICE9PSB0cnVlKSxcbiAgICAgICAgbWFwKGxpc3QgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgICApO1xuICB9XG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpO1xufVxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xuICBvbkRlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KHRydWUpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+O1xuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9vYmpFcnJvcnM6IHsgW2tleTogc3RyaW5nXTogRXJyb3JEYXRhW10gfSA9IHt9O1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnVpID0gdWk7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSwge1xuICAgICAgaW5nb3JlS2V5d29yZHM6IHRoaXMudWkuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhIHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOlwoDCvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfaGFzVmFsdWUoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IGFueTtcblxuICAvKipcbiAgICogw6bCm8K0w6bClsKww6XCgMK8w6TCuMKUw6bCoMKhw6nCqsKMw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkcOlwoDCvMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBvbmx5U2VsZiA9IGZhbHNlLFxuICAgIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSxcbiAgICBlbWl0VmFsaWRhdG9yID0gdHJ1ZSxcbiAgKSB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBgZW1pdFZhbGlkYXRvcmAgw6bCr8KPw6TCuMKAw6bCrMKhw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6XCt8Kyw6fCu8KPw6XCjMKFw6XCkMKrw6XCrsKMw6bClcK0w6nClMKZw6jCr8Kvw6nCk8K+w6jCt8Kvw6/CvMKMw6XCkMKOw6fCu8Ktw6fCiMK2w6jCisKCw6fCgsK5w6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8Kgw6nCocK7w6XChsKNw6jCp8Kmw6XCj8KRw6bCoMKhw6nCqsKMXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0VmFsdWVFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDDpsKgwrnDpsKNwq7DqMK3wq/DpcK+woTDpsKQwpzDp8K0wqLDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiDDpsKfwqXDpsKJwr7DpsKgwrnDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgbGV0IHByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gPFByb3BlcnR5R3JvdXA+cHJvcGVydHk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZXJyb3JzXG5cbiAgcHJpdmF0ZSBpc0VtcHR5RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMw6XCmcKow6XCv8KFw6nCocK7w6jCh8Kzw6XCsMKRw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqICdtZXNzYWdlJyDDpcKxwp7DpsKAwqfDr8K8wozDp8KUwqjDpMK6wo7DqMKhwqjDp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqxgLFxuICAgICAgICAgICk7XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcCgoZXJyOiBFcnJvckRhdGEpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXG4gICAgICAgICAgICA/IGVyci5tZXNzYWdlXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlKGVycikgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH4obWVzc2FnZSBhcyBzdHJpbmcpLmluZGV4T2YoJ3snKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcbiAgICAgICAgICAgICAgKHY6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGVyci5wYXJhbXNba2V5XSB8fCAnJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9ycywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcbiAgICBjb25zdCBwbGF0RXJyb3JzOiBFcnJvckRhdGFbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiAhcHJvcGVydHkudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRFcnJvcnMocGxhdEVycm9ycywgZmFsc2UpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29uZGl0aW9uXG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIC8vIMOpwoPCqMOlwojChsOmwpXCsMOmwo3CrsOmwrrCkMOmwp3CpcOowofCqiByZXNldFxuICAgIHRoaXMucmVzZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEEgZmllbGQgaXMgdmlzaWJsZSBpZiBBVCBMRUFTVCBPTkUgb2YgdGhlIHByb3BlcnRpZXMgaXQgZGVwZW5kcyBvbiBpcyB2aXNpYmxlIEFORCBoYXMgYSB2YWx1ZSBpbiB0aGUgbGlzdFxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0JpbmRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aSA9IHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmkuaW5kZXhPZignJEFOWSQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmkuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgdmFsdWVDaGVjaywgdmlzaWJpbGl0eUNoZWNrXG4gICAgICAgICAgICApLnBpcGUobWFwKHJlc3VsdHMgPT4gcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKSk7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhcbiAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodmFsdWVzID0+IHZhbHVlcy5pbmRleE9mKHRydWUpICE9PSAtMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9IHwgRm9ybVByb3BlcnR5W10gPSBudWxsO1xuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09IG51bGwgJiZcbiAgICAgIHN1YlBhdGhJZHggIT09IC0xICYmXG4gICAgICBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXBcbiAgICApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9ICg8UHJvcGVydHlHcm91cD5wcm9wZXJ0eSkuZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgICAgIGZuKHByb3BlcnR5LCBwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKGNoaWxkID0+IHtcbiAgICAgIGZuKGNoaWxkKTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgICAgKDxQcm9wZXJ0eUdyb3VwPmNoaWxkKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShwcm9wZXJ0eSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXRvbWljUHJvcGVydHkgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBhYnN0cmFjdCBmYWxsYmFja1ZhbHVlKCk6IGFueTtcblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZmFsbGJhY2tWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLndpZGdldCkgdGhpcy53aWRnZXQucmVzZXQodmFsdWUpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhbGxiYWNrVmFsdWUoKSAhPT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHt9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIE51bWJlclByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgdmFsdWUuaW5kZXhPZignLicpID4gLTEgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWMucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhblByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIEFycmF5UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcbiAgdGljayA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZignLycpO1xuICAgIGNvbnN0IHBvcyA9ICsoc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGgpO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdO1xuICAgIGlmIChpc05hTihwb3MpIHx8IHBvcyA+PSBsaXN0Lmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgIHJldHVybiBsaXN0W3Bvc10uZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogT2JqZWN0UHJvcGVydHkpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydHkuZm9ybURhdGEsIHByb3BlcnR5LnZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJvcGVydHkodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgdGhpcy5zY2hlbWEuaXRlbXMsXG4gICAgICB0aGlzLnVpLiRpdGVtcyxcbiAgICAgIHZhbHVlLFxuICAgICAgdGhpcyxcbiAgICApIGFzIE9iamVjdFByb3BlcnR5O1xuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UHJvcGVydGllcyh2YWx1ZTogYW55W10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShpdGVtKTtcbiAgICAgIHByb3BlcnR5LnJlc2V0VmFsdWUoaXRlbSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckVycm9ycyhwYXRoPzogc3RyaW5nKSB7XG4gICAgaWYgKHBhdGgpIGRlbGV0ZSB0aGlzLl9vYmpFcnJvcnNbcGF0aF07XG4gICAgZWxzZSB0aGlzLl9vYmpFcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8vICNyZWdpb24gYWN0aW9uc1xuXG4gIGFkZCh2YWx1ZTogYW55KTogRm9ybVByb3BlcnR5IHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkodmFsdWUpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3QgPSA8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMobGlzdFtpbmRleF0ucGF0aCk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IG9yZGVyUHJvcGVydGllcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHByaXZhdGUgX3Byb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcblxuICBnZXQgcHJvcGVydGllc0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzSWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IGFueSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5jcmVhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XG4gICAgdGhpcy5fcHJvcGVydGllc0lkID0gW107XG4gICAgbGV0IG9yZGVyZWRQcm9wZXJ0aWVzOiBzdHJpbmdbXTtcbiAgICB0cnkge1xuICAgICAgb3JkZXJlZFByb3BlcnRpZXMgPSBvcmRlclByb3BlcnRpZXMoXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLFxuICAgICAgICB0aGlzLnVpLm9yZGVyIGFzIHN0cmluZ1tdLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgSW52YWxpZCAke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICdyb290J30gb2JqZWN0IGZpZWxkIGNvbmZpZ3VyYXRpb246YCxcbiAgICAgICAgZSxcbiAgICAgICk7XG4gICAgfVxuICAgIG9yZGVyZWRQcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHlJZCA9PiB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0gPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMudWlbJyQnICsgcHJvcGVydHlJZF0sXG4gICAgICAgICh0aGlzLmZvcm1EYXRhIHx8IHt9KVtwcm9wZXJ0eUlkXSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgcHJvcGVydHlJZCxcbiAgICAgICk7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IHt9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0ucmVzZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGwgJiYgISFPYmplY3Qua2V5cyh0aGlzLnZhbHVlKS5sZW5ndGg7XG4gIH1cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB7fTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IGFueSwgcHJvcGVydHlJZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgUHJvcGVydHlHcm91cCwgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE51bWJlclByb3BlcnR5IH0gZnJvbSAnLi9udW1iZXIucHJvcGVydHknO1xuaW1wb3J0IHsgU3RyaW5nUHJvcGVydHkgfSBmcm9tICcuL3N0cmluZy5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBCb29sZWFuUHJvcGVydHkgfSBmcm9tICcuL2Jvb2xlYW4ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge31cblxuICBjcmVhdGVQcm9wZXJ0eShcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCA9IG51bGwsXG4gICAgcHJvcGVydHlJZD86IHN0cmluZyxcbiAgKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSBudWxsO1xuICAgIGxldCBwYXRoID0gJyc7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIHBhdGggKz0gKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS50aWNrKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICtcbiAgICAgICAgICAgIHBhcmVudC50eXBlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gJy8nO1xuICAgIH1cblxuICAgIGlmIChzY2hlbWEuJHJlZikge1xuICAgICAgY29uc3QgcmVmU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLCBwYXJlbnQucm9vdC5zY2hlbWEuZGVmaW5pdGlvbnMpO1xuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXggcmVxdWlyZWRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcGVydHlJZCAmJlxuICAgICAgICAoKHBhcmVudCEuc2NoZW1hLnJlcXVpcmVkIHx8IFtdKSBhcyBzdHJpbmdbXSkuaW5kZXhPZihwcm9wZXJ0eUlkKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICB1aS5fcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZml4IHRpdGxlXG4gICAgICBpZiAoc2NoZW1hLnRpdGxlID09IG51bGwpIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5SWQ7XG4gICAgICAvLyBmaXggZGF0ZVxuICAgICAgaWYgKFxuICAgICAgICAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnIHx8IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgJiZcbiAgICAgICAgIXNjaGVtYS5mb3JtYXQgJiZcbiAgICAgICAgISh1aSBhcyBTRlVJU2NoZW1hSXRlbSkuZm9ybWF0XG4gICAgICApIHtcbiAgICAgICAgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAnZGF0ZScpXG4gICAgICAgICAgdWkuZm9ybWF0ID1cbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aURhdGVTdHJpbmdGb3JtYXRcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlEYXRlTnVtYmVyRm9ybWF0O1xuICAgICAgICBlbHNlIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ3RpbWUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlUaW1lU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpVGltZU51bWJlckZvcm1hdDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgTnVtYmVyUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IFN0cmluZ1Byb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVuZGVmaW5lZCB0eXBlICR7c2NoZW1hLnR5cGV9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1Byb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplUm9vdChuZXdQcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplUm9vdChyb290UHJvcGVydHk6IFByb3BlcnR5R3JvdXApIHtcbiAgICAvLyByb290UHJvcGVydHkuaW5pdCgpO1xuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmRlY2xhcmUgdmFyIEFqdjogYW55O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxuICApOiAodmFsdWU6IFNGU2NoZW1hKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChEZWxvbkZvcm1Db25maWcpXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hanYgPSBuZXcgQWp2KFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5hanYsIHtcbiAgICAgICAgZXJyb3JEYXRhUGF0aDogJ3Byb3BlcnR5JyxcbiAgICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAgICBqc29uUG9pbnRlcnM6IHRydWUsXG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdkYXRhLXVybCcsXG4gICAgICAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2NvbG9yJyxcbiAgICAgIC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ21vYmlsZScsXG4gICAgICAvXigwfFxcKz84NnwxNzk1MSk/MVswLTldezEwfSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2lkLWNhcmQnLFxuICAgICAgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpLyxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXG4gICk6ICh2YWx1ZTogYW55KSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gW11cbiAgICAgIC5jb25jYXQodGhpcy5vcHRpb25zLmluZ29yZUtleXdvcmRzKVxuICAgICAgLmNvbmNhdChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMpO1xuXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogRXJyb3JEYXRhW10gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzIHRocm93biBpbiBhanYgZHVlIHRvIGludmFsaWQgc2NoZW1hcywgdGhlc2VcbiAgICAgICAgLy8gc3RpbGwgZ2V0IGRpc3BsYXllZFxuICAgICAgfVxuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuYWp2LmVycm9ycztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5maWx0ZXIodyA9PiBpbmdvcmVLZXl3b3Jkcy5pbmRleE9mKHcua2V5d29yZCkgPT09IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIHdpZGdldHM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgcHJpdmF0ZSBkZWZhdWx0V2lkZ2V0OiBhbnk7XG5cbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLndpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSxcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge31cblxuICBjcmVhdGVXaWRnZXQoXG4gICAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgKTogQ29tcG9uZW50UmVmPFdpZGdldDxhbnk+PiB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5Lmhhcyh0eXBlKSkge1xuICAgICAgY29uc29sZS53YXJuKGBObyB3aWRnZXQgZm9yIHR5cGUgXCIke3R5cGV9XCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0VHlwZSh0eXBlKTtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxXaWRnZXQ8YW55Pj4oXG4gICAgICBjb21wb25lbnRDbGFzcyxcbiAgICApO1xuICAgIHJldHVybiBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBkaSwgcmV0cmlldmVTY2hlbWEsIEZPUk1BVE1BUFMsIHJlc29sdmVJZiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5KFxuICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBhbnksXG4gIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbikge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgb3B0aW9ucyk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgRGVsb25Gb3JtQ29uZmlnXSxcbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlLFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZi1zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmLWVkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIHByaXZhdGUgX2l0ZW06IGFueTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiBhbnk7XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOowqHCqMOlwo3ClcOlwrjCg8OlwrHCgMOvwrzCjMOnwq3CicOlwpDCjCBgbnpMYXlvdXRgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKVxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgc2NoZW1hOiBTRlNjaGVtYTtcblxuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHVpOiBTRlVJU2NoZW1hO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDqcK7wpjDqMKuwqTDpcKAwrwgKi9cbiAgQElucHV0KClcbiAgZm9ybURhdGE6IHt9O1xuXG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq5cbiAgICogLSDDpcKAwrzDpMK4wrogYG51bGxgIMOmwojCliBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDpsKJwovDpcKKwqjDpsK3wrvDpcKKwqDDpsKMwonDqcKSwq7Dr8K8wozDpMK9wobDpMK/wp3Dp8KVwpnDpcKuwrnDpcKZwqhcbiAgICogLSDDpcKAwrzDpMK4wrogYG5vbmVgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwrjClMOkwrjCjcOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxuICAgKiAtIMOkwr3Cv8OnwpTCqMOlwpvCusOlwq7CmiBgbGFiZWxgIMOmwqDCh8Onwq3CvsOlwq7CvcOlwrrCpsOmwpfCtsOvwrzCjMOowovCpcOmwpfCoCBgcmVuZGVyLmNsYXNzYCDDpcKIwpnDqcK7wpjDqMKuwqTDpMK4wrrDpcKxwoXDpMK4wq3Dp8KKwrbDpsKAwoFcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcblxuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCrsKew6bCl8K2w6bCoMKhw6nCqsKMw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqIC0gYHRydWVgIMOmwq/Cj8OkwrjCgMOmwqzCocOpwoPCvcOmwqDCocOpwqrCjFxuICAgKiAtIGBmYWxzZWAgw6bCj8KQw6TCusKkw6bCl8K2w6bCoMKhw6nCqsKMXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcblxuICAvKiogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvCAqL1xuICBASW5wdXQoKVxuICBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcblxuICAvKiogw6fCq8KLw6XCjcKzw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXJzdFZpc3VhbCA9IHRydWU7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqjCocOlwrzCjyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcblxuICAvKiogw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6bCj8KQw6TCusKkw6jCocKow6XCjcKVw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6nCh8KNw6fCvcKuw6jCocKow6XCjcKVw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8K7wpPDpsKewpzDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8KKwrbDpsKAwoEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpcKAwrwgKi9cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBvblN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5saXZlVmFsaWRhdGUgPSBvcHRpb25zLmxpdmVWYWxpZGF0ZTtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlO1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLFxuICAgICAgICAgIGRlZmluaXRpb25zLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB1aSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB3aWRnZXQ6IHByb3BlcnR5LnR5cGUgfSxcbiAgICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdLFxuICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwsXG4gICAgICAgICAgIXByb3BlcnR5LnVpICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJlxuICAgICAgICAgIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuX2RlZlVpLFxuICAgICAgICAgIHByb3BlcnR5LnVpLFxuICAgICAgICAgIHVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgKSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8gw6fCu8Knw6bCicK/w6fCiMK2w6jCisKCw6fCgsK5w6XCuMKDw6XCscKAw6XCscKew6bCgMKnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyAxOVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsICYmIHBhcmVudFNjaGVtYSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHBhcmVudFNjaGVtYS5wcm9wZXJ0aWVzW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0ZUVuZFByb3BlcnR5LnVpLCB7XG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddID0gdWlSZXNbdWlLZXldWyckaXRlbXMnXSB8fCB7fTtcbiAgICAgICAgICBpbkZuKFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pWyckaXRlbXMnXSB8fCB7fSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1trZXldO1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgcmVzb2x2ZUlmKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHkuaXRlbXMsIHVpW3VpS2V5XS4kaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTRlVJU2NoZW1hSXRlbT57XG4gICAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnVpLFxuICAgICAgX3NjaGVtYS51aSxcbiAgICAgIHRoaXMudWlbJyonXSxcbiAgICApO1xuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmVWkpO1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGlmICh0aGlzLl91aS5kZWJ1Zykge1xuICAgICAgZGkoJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpIHtcbiAgICB0aGlzLl9idG4gPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyByZW5kZXI6IHt9IH0sXG4gICAgICB0aGlzLmxvY2FsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICB0aGlzLmJ1dHRvbixcbiAgICApO1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgIH1cbiAgICAgIC8vIMOlwpvCusOlwq7CmsOmwqDCh8Onwq3CvsOlwq7CvcOlwrrCpsOmwpfCtsOvwrzCjMOowovCpcOkwrjCjcOmwozCh8Olwq7CmsOmwqDCt8OlwrzCj8OvwrzCjMOlwojCmcOpwrvCmMOowq7CpMOlwrHChcOkwrjCrVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5fYnRuLnJlbmRlci5jbGFzcyAmJlxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSBkaSgnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pikge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgY29uc29sZS53YXJuKGDDpsKcwqrDpsKJwr7DpcKIwrDDqMK3wq/DpcK+woTDr8K8wpoke3BhdGh9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgY29uc29sZS53YXJuKGDDpcK3wrLDp8K7wo/DpcKtwpjDpcKcwqjDp8KbwrjDpcKQwozDqMKHwqrDpcKuwprDpMK5wonDqMK3wq/DpcK+woTDr8K8wpoke3BhdGh9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XG4gICAgcHVpLl9yZW5kZXIgPSB0ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCkge1xuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XG4gICAgICBpZiAoIXB1aS5fcmVuZGVyKSBwdWkuX3JlbmRlciA9IHRwbDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRvcigpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5fcnVuVmFsaWRhdGlvbigpO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5LmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmICghdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKIwrfDpsKWwrAgU2NoZW1hw6/CvMKMw6TCuMKAw6jCiMKsw6nCnMKAw6jCpsKBw6XCisKow6bCgMKBw6TCv8Kuw6bClMK5IFNjaGVtYSDDpsKfwpDDpMK4wqrDpcKAwrzDpsKXwrbDpcKPwq/DpMK7wqXDpsKWwrnDpMK+wr/DqMKwwoPDp8KUwqhcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSkge1xuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgdGhpcy5fc2NoZW1hLFxuICAgICAgdGhpcy5fdWksXG4gICAgICB0aGlzLmZvcm1EYXRhLFxuICAgICk7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5faXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybURhdGEsIHZhbHVlKTtcbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCocKow6XCjcKVXG4gICAqIEBwYXJhbSBbZW1pdF0gw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBmb3JtUmVzZXRgIMOkwrrCi8OkwrvCtsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIHJlc2V0KGVtaXQgPSBmYWxzZSkge1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PiA9IG51bGw7XG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7fVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkud2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcsXG4gICAgKTtcbiAgICB0aGlzLm9uV2lkZ2V0SW5zdGFuY2lhdGVkKHRoaXMucmVmLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVpLl9fZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxuICBASW5wdXROdW1iZXIoKVxuICBudW06IG51bWJlcjtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmLWZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtV3JhcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgQElucHV0KCkgc2hvd0Vycm9yOiBib29sZWFuO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93VGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGdldCB0KCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID09PSBudWxsID8gdGhpcy5zY2hlbWEudGl0bGUgOiB0aGlzLnRpdGxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NmLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZi10ZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBTRlRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB0YWJsZTogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLl9hZGRUcGwoXG4gICAgICB0aGlzLnBhdGguc3RhcnRzV2l0aCgnLycpID8gdGhpcy5wYXRoIDogYC9gICsgdGhpcy5wYXRoLFxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIEluamVjdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBmb3JtUHJvcGVydHk6IFQ7XG4gIGVycm9yOiBzdHJpbmc7XG4gIHNob3dFcnJvciA9IGZhbHNlO1xuICBpZCA9ICcnO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudWkuZGVidWcpIGRpKCdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDDpMK4wo3DpsKYwr7Dp8KkwrrDqcKmwpbDpsKswqHDpsKgwqHDqcKqwozDqMKnwobDqMKnwolcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IGVycm9yc1swXS5tZXNzYWdlIDogJyc7XG5cbiAgICAgICAgICBpZiAodGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBpZiAodGhpcy51aS5kZWJ1Zykge1xuICAgICAgZGkoJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBhbnkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1vYmplY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZDsgZWxzZSBub0dyaWRcIj5cbiAgICA8ZGl2IG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxkaXYgbnotY29sXG4gICAgICAgICAgICBbbnpTcGFuXT1cImkuZ3JpZC5zcGFuXCIgW256T2Zmc2V0XT1cImkuZ3JpZC5vZmZzZXRcIlxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcbiAgICAgICAgICAgIFtuekxnXT1cImkuZ3JpZC5sZ1wiIFtuelhsXT1cImkuZ3JpZC54bFwiIFtuelhYbF09XCJpLmdyaWQueHhsXCI+XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm9HcmlkPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMudWkuZ3JpZDtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzW2tleV0gYXMgRm9ybVByb3BlcnR5O1xuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgdGhpcy5ncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FycmF5LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZ3JpZCAmJiB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuKVxuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMudWkuYWRkVGl0bGUgfHwgdGhpcy5sWydhZGRUZXh0J107XG4gICAgdGhpcy5hZGRUeXBlID0gdGhpcy51aS5hZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPVxuICAgICAgdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgdGhpcy5sWydyZW1vdmVUZXh0J107XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZChudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgICAgPGlucHV0IG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ1aS50eXBlIHx8ICd0ZXh0J1wiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cInVpLmF1dG9jb21wbGV0ZVwiXG4gICAgICAgIFthdHRyLmF1dG9Gb2N1c109XCJ1aS5hdXRvZm9jdXNcIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdhZGRvbic7IGVsc2UgaXB0XCI+XG4gICAgICA8bnotaW5wdXQtZ3JvdXBcbiAgICAgICAgW256QWRkT25CZWZvcmVdPVwidWkuYWRkT25CZWZvcmVcIiBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxuICAgICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCIgW256QWRkT25BZnRlckljb25dPVwidWkuYWRkT25BZnRlckljb25cIlxuICAgICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCIgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcbiAgICAgICAgW256U3VmZml4XT1cInVpLnN1ZmZpeFwiIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXB0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAhIShcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlciB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZSB8fFxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVySWNvbiB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZUljb24gfHxcbiAgICAgIHRoaXMudWkucHJlZml4IHx8XG4gICAgICB0aGlzLnVpLnByZWZpeEljb24gfHxcbiAgICAgIHRoaXMudWkuc3VmZml4IHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeEljb25cbiAgICApXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJyAmJiAhdmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxuICAgICAgW256UGFyc2VyXT1cInBhcnNlclwiXG4gICAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCI+XG4gICAgPC9uei1pbnB1dC1udW1iZXI+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIGZvcm1hdHRlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gPyBzY2hlbWEubWluaW11bSArIDEgOiBzY2hlbWEubWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWF4ID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gPyBzY2hlbWEubWF4aW11bSAtIDEgOiBzY2hlbWEubWF4aW11bTtcbiAgICB9XG4gICAgdGhpcy5zdGVwID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dWkucHJlZml4fSAke3ZhbHVlfWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt2YWx1ZX0gJHt1aS51bml0fWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XG5cbiAgICAgIDxuei1tb250aC1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgID48L256LW1vbnRoLXBpY2tlcj5cblxuICAgICAgPG56LXdlZWstcGlja2VyICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9uei13ZWVrLXBpY2tlcj5cblxuICAgICAgPG56LXJhbmdlLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XG5cbiAgICAgIDxuei1kYXRlLXBpY2tlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIMOlwoXCrMOlwoXCsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdmFsdWUgPSB0aGlzLnRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy50b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IHZhbHVlLm1hcChkID0+IGZvcm1hdChkLCB0aGlzLmZvcm1hdCkpXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGltZS1waWNrZXJcbiAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Rm9ybWF0XT1cImkuZGlzcGxheUZvcm1hdFwiXG4gICAgICBbbnpBbGxvd0VtcHR5XT1cImkuYWxsb3dFbXB0eVwiXG4gICAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxuICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJpLmRlZmF1bHRPcGVuVmFsdWVcIlxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJ1aS5kaXNhYmxlZEhvdXJzXCJcbiAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxuICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInVpLmRpc2FibGVkU2Vjb25kc1wiXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImkuaGlkZURpc2FibGVkT3B0aW9uc1wiXG4gICAgICBbbnpIb3VyU3RlcF09XCJpLmhvdXJTdGVwXCJcbiAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiaS5taW51dGVTdGVwXCJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInVpLnBvcHVwQ2xhc3NOYW1lXCJcbiAgICAgID5cbiAgICA8L256LXRpbWUtcGlja2VyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxuICAgICAgPyB1aS5mb3JtYXRcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyAneCdcbiAgICAgICAgOiAnSEg6bW06c3MnO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkgdmFsdWUgKz0gJzowMCc7XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoXG4gICAgICAgIERhdGUuVVRDKFxuICAgICAgICAgIDE5NzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksXG4gICAgICAgICAgdmFsdWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgIHZhbHVlLmdldFNlY29uZHMoKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhZGlvLWdyb3VwXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TmFtZV09XCJpZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3R5bGVUeXBlXCI+XG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBhbnlbXSA9IFtdO1xuICBzdHlsZVR5cGU6IGJvb2xlYW47XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3R5bGVUeXBlID0gKHRoaXMudWkuc3R5bGVUeXBlIHx8ICdkZWZhdWx0JykgPT09ICdkZWZhdWx0JztcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsVGl0bGUgPSBgYDtcblxuICBnZXQgbCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuc2ZDb21wLmxvY2FsZTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcblxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhYmVsVGl0bGUgPSBsaXN0Lmxlbmd0aCA9PT0gMCA/ICcnIDogdGhpcy5zY2hlbWEudGl0bGU7XG4gICAgICAgIHRoaXMuZ3JpZF9zcGFuID0gdGhpcy51aS5zcGFuICYmIHRoaXMudWkuc3BhbiA+IDAgPyB0aGlzLnVpLnNwYW4gOiAwO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBub3RpZnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xuICB9XG5cbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBhbnlbXSkge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKFxuICAgICAgaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdmFsdWVzLmluZGV4T2YoaXRlbS52YWx1ZSkgIT09IC0xKSxcbiAgICApO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICBvbkFsbENoZWNrZWQoZTogRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZCkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICB1cGRhdGVBbGxDaGVja2VkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IGZhbHNlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNoYW5nZShyZXM6IGJvb2xlYW4gfCBTRlNjaGVtYUVudW1bXSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UocmVzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYm9vbGVhbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LXN3aXRjaFxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Q2hlY2tlZENoaWxkcmVuXT1cInVpLmNoZWNrZWRDaGlsZHJlblwiXG4gICAgICBbbnpVbkNoZWNrZWRDaGlsZHJlbl09XCJ1aS51bkNoZWNrZWRDaGlsZHJlblwiPlxuICAgIDwvbnotc3dpdGNoPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPHRleHRhcmVhIG56LWlucHV0XG4gICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpBdXRvc2l6ZV09XCJhdXRvc2l6ZVwiPlxuICAgIDwvdGV4dGFyZWE+XG5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF1dG9zaXplOiBhbnkgPSB0cnVlO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5hdXRvc2l6ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zaXplID0gdGhpcy51aS5hdXRvc2l6ZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotc2VsZWN0XG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImkuYXV0b0ZvY3VzXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cImkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuelNlcnZlclNlYXJjaF09XCJpLnNlcnZlclNlYXJjaFwiXG4gICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudFwiXG4gICAgICBbbnpNb2RlXT1cImkubW9kZVwiXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56T25TZWFyY2gpPVwic2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20oJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoYXNHcm91cFwiPlxuICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgZGF0YVwiXG4gICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxuICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0dyb3VwXCI+XG4gICAgICAgIDxuei1vcHRpb24tZ3JvdXAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiIFtuekxhYmVsXT1cImkubGFiZWxcIj5cbiAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBpLmNoaWxkcmVuXCJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XG4gICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgIDwvbnotb3B0aW9uLWdyb3VwPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgaGFzR3JvdXAgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0aGlzLnVpLmFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IHRoaXMudWkuZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHRoaXMudWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHRoaXMudWkuc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiB0aGlzLnVpLm1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiB0aGlzLnVpLm1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgbm90Rm91bmRDb250ZW50OiB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6bCs8KVw6bCicK+w6XCiMKwJyxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNob3dTZWFyY2gsIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB0aGlzLnVpLm9wZW5DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnVpLm9uU2VhcmNoKHRleHQpLnRoZW4oKHJlczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyB0b0Jvb2wsIGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotdHJlZS1zZWxlY3RcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGVcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Q2hlY2thYmxlXT1cImkuY2hlY2thYmxlXCJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwiaS5zaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dMaW5lXT1cImkuc2hvd0xpbmVcIlxuICAgICAgW256QXN5bmNEYXRhXT1cImkuYXN5bmNEYXRhXCJcbiAgICAgIFtuek5vZGVzXT1cImRhdGFcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZEFsbF09XCJpLmRlZmF1bHRFeHBhbmRBbGxcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZGVkS2V5c109XCJpLmRlZmF1bHRFeHBhbmRlZEtleXNcIlxuICAgICAgW256RGlzcGxheVdpdGhdPVwiaS5kaXNwbGF5V2l0aFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXRyZWUtc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgcHJpdmF0ZSBkYygpIHtcbiAgICAvLyBNdXNlIHdhaXQgYG56LXRyZWUtc2VsZWN0YCB3cml0ZSB2YWx1ZXNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMjMxNlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCksIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuRGF0YShsaXN0OiBTRlNjaGVtYUVudW1bXSkge1xuICAgIHJldHVybiBsaXN0Lm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKGRlZXBDb3B5KG5vZGUpIGFzIGFueSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB1aS5hbGxvd0NsZWFyLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHVpLnNob3dTZWFyY2gsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHVpLm11bHRpcGxlLCBmYWxzZSksXG4gICAgICBjaGVja2FibGU6IHRvQm9vbCh1aS5jaGVja2FibGUsIGZhbHNlKSxcbiAgICAgIHNob3dFeHBhbmQ6IHRvQm9vbCh1aS5zaG93RXhwYW5kLCB0cnVlKSxcbiAgICAgIHNob3dMaW5lOiB0b0Jvb2wodWkuc2hvd0xpbmUsIGZhbHNlKSxcbiAgICAgIGFzeW5jRGF0YTogdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgIGRlZmF1bHRFeHBhbmRBbGw6IHRvQm9vbCh1aS5kZWZhdWx0RXhwYW5kQWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0RXhwYW5kZWRLZXlzOiB1aS5kZWZhdWx0RXhwYW5kZWRLZXlzIHx8IFtdLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSlcbiAgICAgIC5waXBlKG1hcChsaXN0ID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZXhwYW5kQ2hhbmdlKGU6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHVpLmV4cGFuZENoYW5nZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgIHVpLmV4cGFuZENoYW5nZShlKVxuICAgICAgLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGUubm9kZS5jbGVhckNoaWxkcmVuKCk7XG4gICAgICAgIGUubm9kZS5hZGRDaGlsZHJlbihyZXMpO1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRhZ1xuICAgICAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiXG4gICAgICBuek1vZGU9XCJjaGVja2FibGVcIlxuICAgICAgW256Q2hlY2tlZF09XCJpLmNoZWNrZWRcIlxuICAgICAgKG56QWZ0ZXJDbG9zZSk9XCJfYWZ0ZXJDbG9zZSgpXCJcbiAgICAgIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIlxuICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkNoYW5nZShpKVwiPlxuICAgICAge3tpLmxhYmVsfX1cbiAgICA8L256LXRhZz5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgX2FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDbG9zZSkgdGhpcy51aS5hZnRlckNsb3NlKCk7XG4gIH1cblxuICBfY2xvc2UoZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei11cGxvYWRcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcbiAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuekFjdGlvbl09XCJpLmFjdGlvblwiXG4gICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxuICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXG4gICAgICBbbnpTaXplXT1cImkuc2l6ZVwiXG4gICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcbiAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXG4gICAgICBbbnpEYXRhXT1cInVpLmRhdGFcIlxuICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuek5hbWVdPVwiaS5uYW1lXCJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxuICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxuICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcbiAgICAgIChuekNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGx1cydcIj5cbiAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJwbHVzXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIG56LWljb24gdHlwZT1cImluYm94XCI+PC9pPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxuICAgICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwidXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotdXBsb2FkPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSkge1xuICAgIHN1cGVyKGNkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHR5cGU6IHRoaXMudWkudHlwZSB8fCAnc2VsZWN0JyxcbiAgICAgIHRleHQ6IHRoaXMudWkudGV4dCB8fCAnw6fCgsK5w6XCh8K7w6TCuMKKw6TCvMKgJyxcbiAgICAgIGFjdGlvbjogdGhpcy51aS5hY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IHRoaXMudWkuYWNjZXB0IHx8ICcnLFxuICAgICAgbGltaXQ6IHRoaXMudWkubGltaXQgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5saW1pdCxcbiAgICAgIHNpemU6IHRoaXMudWkuc2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLnNpemUsXG4gICAgICBmaWxlVHlwZTogdGhpcy51aS5maWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiB0aGlzLnVpLmxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodGhpcy51aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogdGhpcy51aS5uYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2wodGhpcy51aS5zaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh0aGlzLnVpLndpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAodGhpcy51aS5yZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYMOlwo3ClcOlwofCu8OmwojClsOmwovClsOlworCqMOmwpbCh8OkwrvCtsOlwojCsMOowq/CpcOlwozCusOlwp/Cn8OkwrjCisOkwrzCoGA7XG4gICAgICB0aGlzLmkuaGludCA9XG4gICAgICAgIHRoaXMudWkuaGludCB8fCBgw6bClMKvw6bCjMKBw6XCjcKVw6TCuMKqw6bCiMKWw6bCicK5w6nCh8KPw6/CvMKMw6TCuMKlw6fCpsKBw6TCuMKKw6TCvMKgw6XChcKsw6XCj8K4w6bClcKww6bCjcKuw6bCiMKWw6XChcK2w6TCu8KWw6XCrsKJw6XChcKow6bClsKHw6TCu8K2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXG4gICAgKTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLm1vZGFsU3J2XG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJhbnNmZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRyYW5zZmVyXG4gICAgICBbbnpEYXRhU291cmNlXT1cImxpc3RcIlxuICAgICAgW256VGl0bGVzXT1cImkudGl0bGVzXCJcbiAgICAgIFtuek9wZXJhdGlvbnNdPVwiaS5vcGVyYXRpb25zXCJcbiAgICAgIFtuekxpc3RTdHlsZV09XCJ1aS5saXN0U3R5bGVcIlxuICAgICAgW256SXRlbVVuaXRdPVwiaS5pdGVtVW5pdFwiXG4gICAgICBbbnpJdGVtc1VuaXRdPVwiaS5pdGVtc1VuaXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekZpbHRlck9wdGlvbl09XCJ1aS5maWx0ZXJPcHRpb25cIlxuICAgICAgW256U2VhcmNoUGxhY2Vob2xkZXJdPVwidWkuc2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpDYW5Nb3ZlXT1cIl9jYW5Nb3ZlXCJcbiAgICAgIChuekNoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3RDaGFuZ2UpPVwiX3NlbGVjdENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmFuc2Zlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IGFueVtdID0gW107XG4gIGk6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogdGhpcy51aS5vcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ8OpwqHCuScsXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfDqcKhwrknLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5fZGF0YS5tYXAoaSA9PiBpLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBhbnkpOiBPYnNlcnZhYmxlPGFueVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdENoYW5nZSkgdGhpcy51aS5zZWxlY3RDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zbGlkZXJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpNYXJrc109XCJtYXJrc1wiXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxuICAgICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgICAgW256VmVydGljYWxdPVwidWkudmVydGljYWxcIlxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotc2xpZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBtYXJrczogYW55O1xuICBpbmNsdWRlZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2NoZW1hLm1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcblxuICAgIHRoaXMubWFya3MgPSB0aGlzLnVpLm1hcmtzIHx8IG51bGw7XG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMudWkuZm9ybWF0dGVyKSByZXR1cm4gdGhpcy51aS5mb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jdXN0b20nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KHVpKS5fcmVuZGVyXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7JGltcGxpY2l0OiB0aGlzLCBzY2hlbWE6IHNjaGVtYSwgdWk6IHVpIH1cIj48L25nLXRlbXBsYXRlPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1yYXRlXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXG4gICAgICBbbnpBbGxvd0hhbGZdPVwiYWxsb3dIYWxmXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxuICAgICAgW256Q291bnRdPVwiY291bnRcIj48L256LXJhdGU+XG4gICAgPHNwYW4gKm5nSWY9XCJoYXNUZXh0ICYmIGZvcm1Qcm9wZXJ0eS52YWx1ZVwiIGNsYXNzPVwiYW50LXJhdGUtdGV4dFwiPnt7IGdlblRleHQoKSB9fTwvc3Bhbj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY291bnQ6IG51bWJlcjtcbiAgYWxsb3dIYWxmOiBib29sZWFuO1xuICBhbGxvd0NsZWFyOiBib29sZWFuO1xuICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIGhhc1RleHQgPSBmYWxzZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgNTtcbiAgICB0aGlzLmFsbG93SGFsZiA9ICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcbiAgICB0aGlzLmFsbG93Q2xlYXIgPSB0b0Jvb2wodGhpcy51aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpO1xuICAgIHRoaXMuaGFzVGV4dCA9ICEhdGhpcy51aS50ZXh0O1xuICB9XG5cbiAgZ2VuVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNUZXh0XG4gICAgICA/ICh0aGlzLnVpLnRleHQgYXMgc3RyaW5nKS5yZXBsYWNlKCd7e3ZhbHVlfX0nLCB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZSlcbiAgICAgIDogJyc7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGZsYXRNYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBFTUFJTFNVRkZJWCA9IFtcbiAgJ3FxLmNvbScsXG4gICcxNjMuY29tJyxcbiAgJ2dtYWlsLmNvbScsXG4gICcxMjYuY29tJyxcbiAgJ2FsaXl1bi5jb20nLFxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgICAgPGlucHV0IG56LWlucHV0IFtuekF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPG56LWF1dG9jb21wbGV0ZSAjYXV0b1xuICAgICAgICBbbnpCYWNrZmlsbF09XCJpLmJhY2tmaWxsXCJcbiAgICAgICAgW256RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uXT1cImkuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uXCJcbiAgICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50Py5uelZhbHVlKVwiPlxuICAgICAgICA8bnotYXV0by1vcHRpb24gKm5nRm9yPVwibGV0IGkgb2YgbGlzdCB8IGFzeW5jXCIgW256VmFsdWVdPVwiaS5sYWJlbFwiPnt7aS5sYWJlbH19PC9uei1hdXRvLW9wdGlvbj5cbiAgICAgIDwvbnotYXV0b2NvbXBsZXRlPlxuICAgIDwvc2YtaXRlbS13cmFwPlxuICAgIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsaXN0OiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPjtcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbCh0aGlzLnVpLmJhY2tmaWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXG4gICAgICB3aWR0aDogdGhpcy51aS53aWR0aCB8fCB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gdGhpcy51aS5maWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiB0aGlzLnVpLmZpbHRlck9wdGlvbjtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyT3B0aW9uID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxuICAgICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKChpbnB1dCB8fCAnJykudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIXRoaXMudWkuYXN5bmNEYXRhO1xuICAgIGNvbnN0IG9yZ1RpbWUgPSArKHRoaXMudWkuZGVib3VuY2VUaW1lIHx8IDApO1xuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKFxuICAgICAgICBpbnB1dCA9PlxuICAgICAgICAgIHRoaXMuaXNBc3luYyA/IHRoaXMudWkuYXN5bmNEYXRhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCksXG4gICAgICApLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpKSxcbiAgICApO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShFTUFJTFNVRkZJWCwgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxuICAgICAgICAgIHRoaXMuc2NoZW1hLmVudW0sXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJEYXRhKGlucHV0OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbWFpbFN1ZmZpeChpbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgdGhpcy5maXhEYXRhLmZpbHRlcihvcHRpb24gPT4gdGhpcy5maWx0ZXJPcHRpb24oaW5wdXQsIG9wdGlvbikpLFxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBvZihcbiAgICAgICF2YWx1ZSB8fCB+dmFsdWUuaW5kZXhPZignQCcpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LWNhc2NhZGVyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuek9wdGlvbnNdPVwiZGF0YVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cInVpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpDaGFuZ2VPbl09XCJ1aS5jaGFuZ2VPblwiXG4gICAgICBbbnpDaGFuZ2VPblNlbGVjdF09XCJ1aS5jaGFuZ2VPblNlbGVjdFwiXG4gICAgICBbbnpDb2x1bW5DbGFzc05hbWVdPVwidWkuY29sdW1uQ2xhc3NOYW1lXCJcbiAgICAgIFtuekV4cGFuZFRyaWdnZXJdPVwidWkuZXhwYW5kVHJpZ2dlclwiXG4gICAgICBbbnpNZW51Q2xhc3NOYW1lXT1cInVpLm1lbnVDbGFzc05hbWVcIlxuICAgICAgW256TWVudVN0eWxlXT1cInVpLm1lbnVTdHlsZVwiXG4gICAgICBbbnpMYWJlbFByb3BlcnR5XT1cInVpLmxhYmVsUHJvcGVydHlcIlxuICAgICAgW256VmFsdWVQcm9wZXJ0eV09XCJ1aS52YWx1ZVByb3BlcnR5XCJcbiAgICAgIFtuekxvYWREYXRhXT1cImxvYWREYXRhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxuICAgICAgW256U2hvd0lucHV0XT1cInNob3dJbnB1dFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxuICAgICAgKG56Q2xlYXIpPVwiX2NsZWFyKCRldmVudClcIlxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJfdmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotY2FzY2FkZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ8OmwrjChcOpwpnCpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy51aS52aXNpYmxlQ2hhbmdlICYmIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51aS5jaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZSAmJiB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3QgJiYgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5jbGVhciAmJiB0aGlzLnVpLmNsZWFyKG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgICA8bnotbWVudGlvbiAjbWVudGlvbnNcbiAgICAgICAgW256U3VnZ2VzdGlvbnNdPVwiZGF0YVwiXG4gICAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXG4gICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXG4gICAgICAgIFtuelByZWZpeF09XCJpLnByZWZpeFwiXG4gICAgICAgIChuek9uU2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1aS5pbnB1dFN0eWxlICE9PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgPGlucHV0IG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJ1aS5hdXRvc2l6ZVwiPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L256LW1lbnRpb24+XG5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdtZW50aW9ucycpIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBhbnk7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB2YWx1ZVdpdGg6IHRoaXMudWkudmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgbm90Rm91bmRDb250ZW50OlxuICAgICAgICB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6XCjMK5w6nChcKNw6fCu8KTw6bCnsKcw6/CvMKMw6jCvcK7w6bClcKyw6fCqcK6w6bCoMK8w6XCrsKMw6bCiMKQw6jCvsKTw6XChcKlJyxcbiAgICAgIHBsYWNlbWVudDogdGhpcy51aS5wbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgICBwcmVmaXg6IHRoaXMudWkucHJlZml4IHx8ICdAJyxcbiAgICB9O1xuICAgIGNvbnN0IG1pbiA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiAtMSxcbiAgICAgIG1heCA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiAtMTtcbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9IChcbiAgICAgICAgdmFsdWU6IGFueSxcbiAgICAgICAgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksXG4gICAgICAgIGZvcm06IFByb3BlcnR5R3JvdXAsXG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLm1lbnRpb25DaGlsZC5nZXRNZW50aW9ucygpLmxlbmd0aDtcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBgw6bCnMKAw6XCsMKRw6bCj8KQw6XCj8KKICR7bWlufSDDpsKswqFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwqTCmsOmwo/CkMOlwo/CiiAke21heH0gw6bCrMKhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0KSB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWFyY2gob3B0aW9uOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudWkubG9hZERhdGEgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgKHRoaXMudWkubG9hZERhdGEob3B0aW9uKSBhcyBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT4pXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICB7eyB2YWx1ZSB8fCB1aS5kZWZhdWx0VGV4dCB8fCAnLScgfX1cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudWkuX3JlcXVpcmVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi4vd2lkZ2V0LmZhY3RvcnknO1xuXG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vdGltZS90aW1lLndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZVdpZGdldCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRXaWRnZXQgfSBmcm9tICcuL3RleHQvdGV4dC53aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgTnpXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ29iamVjdCcsIE9iamVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXJyYXknLCBBcnJheVdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0JywgVGV4dFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc3RyaW5nJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdudW1iZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2ludGVnZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2RhdGUnLCBEYXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0aW1lJywgVGltZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFkaW8nLCBSYWRpb1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2hlY2tib3gnLCBDaGVja2JveFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYm9vbGVhbicsIEJvb2xlYW5XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHRhcmVhJywgVGV4dGFyZWFXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NlbGVjdCcsIFNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJlZS1zZWxlY3QnLCBUcmVlU2VsZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0YWcnLCBUYWdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3VwbG9hZCcsIFVwbG9hZFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJhbnNmZXInLCBUcmFuc2ZlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2xpZGVyJywgU2xpZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYXRlJywgUmF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXV0b2NvbXBsZXRlJywgQXV0b0NvbXBsZXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjYXNjYWRlcicsIENhc2NhZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdtZW50aW9uJywgTWVudGlvbldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY3VzdG9tJywgQ3VzdG9tV2lkZ2V0KTtcblxuICAgIHRoaXMuc2V0RGVmYXVsdChTdHJpbmdXaWRnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbn0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZJdGVtV3JhcENvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRlRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU0ZGaXhlZERpcmVjdGl2ZSB9IGZyb20gJy4vc2YtZml4ZWQuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgU0ZDb21wb25lbnQsXG4gIFNGSXRlbUNvbXBvbmVudCxcbiAgU0ZJdGVtV3JhcENvbXBvbmVudCxcbiAgU0ZUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgU0ZGaXhlZERpcmVjdGl2ZSxcbl07XG5cbi8vICNyZWdpb24gd2lkZ2V0c1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgTnpXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnknO1xuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldCc7XG5pbXBvcnQgeyBUaW1lV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBCb29sZWFuV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0JztcbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcbmltcG9ydCB7IFJhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0JztcbmltcG9ydCB7IE1lbnRpb25XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQnO1xuXG5jb25zdCBXSURHRVRTID0gW1xuICBPYmplY3RXaWRnZXQsXG4gIEFycmF5V2lkZ2V0LFxuICBTdHJpbmdXaWRnZXQsXG4gIE51bWJlcldpZGdldCxcbiAgRGF0ZVdpZGdldCxcbiAgVGltZVdpZGdldCxcbiAgUmFkaW9XaWRnZXQsXG4gIENoZWNrYm94V2lkZ2V0LFxuICBCb29sZWFuV2lkZ2V0LFxuICBUZXh0YXJlYVdpZGdldCxcbiAgU2VsZWN0V2lkZ2V0LFxuICBUcmVlU2VsZWN0V2lkZ2V0LFxuICBUYWdXaWRnZXQsXG4gIFVwbG9hZFdpZGdldCxcbiAgVHJhbnNmZXJXaWRnZXQsXG4gIFNsaWRlcldpZGdldCxcbiAgUmF0ZVdpZGdldCxcbiAgQXV0b0NvbXBsZXRlV2lkZ2V0LFxuICBDYXNjYWRlcldpZGdldCxcbiAgTWVudGlvbldpZGdldCxcbiAgQ3VzdG9tV2lkZ2V0LFxuICBUZXh0V2lkZ2V0LFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uV0lER0VUU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25Gb3JtQ29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQWEsYUFBYSxHQUFHO0lBQzNCLGNBQWMsRUFBVSxzQ0FBUTtJQUNoQyxNQUFNLEVBQWtCLDJDQUFhO0lBQ3JDLGVBQWUsRUFBUyxxQ0FBWTtJQUNwQyxvQkFBb0IsRUFBSSx3REFBVztJQUNuQyxLQUFLLEVBQW1CLGlGQUFxQjtJQUM3QyxZQUFZLEVBQVksb0ZBQTZCO0lBQ3JELElBQUksRUFBb0IsMEVBQWM7SUFDdEMsTUFBTSxFQUFrQixnQ0FBTzs7SUFDL0IsSUFBSSxFQUFvQix1Q0FBYztJQUN0QyxRQUFR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