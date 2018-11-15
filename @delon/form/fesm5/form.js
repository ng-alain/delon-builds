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
            .pipe(takeWhile(function () { return ui["__destroy"] !== true; }), map(function (list) { return getEnum(list, formData, schema.readOnly); }));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            ingoreKeywords: /** @type {?} */ (this.ui["ingoreKeywords"]),
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = /** @type {?} */ ((/** @type {?} */ (this)));
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
            return this._root || /** @type {?} */ ((/** @type {?} */ (this)));
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
        var customValidator = (/** @type {?} */ (this.ui)).validator;
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
                    if (~(/** @type {?} */ (message)).indexOf('{')) {
                        message = (/** @type {?} */ (message)).replace(/{([\.a-z0-9]+)}/g, function (v, key) { return err.params[key] || ''; });
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
        var visibleIf = (/** @type {?} */ (this.ui)).visibleIf;
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
            property = (/** @type {?} */ (property)).getProperty(subPath);
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
                (/** @type {?} */ (child)).forEachChildRecursive(fn);
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
        (/** @type {?} */ (this.properties)).push(newProperty);
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
                path += (/** @type {?} */ (parent)).tick++;
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
                (/** @type {?} */ ((/** @type {?} */ ((parent)).schema.required || []))).indexOf(propertyId) !== -1) {
                ui["_required"] = true;
            }
            // fix title
            if (schema.title == null)
                schema.title = propertyId;
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') &&
                !schema.format &&
                !(/** @type {?} */ (ui))["format"]) {
                if ((/** @type {?} */ (ui)).widget === 'date')
                    ui["format"] =
                        schema.type === 'string'
                            ? this.options.uiDateStringFormat
                            : this.options.uiDateNumberFormat;
                else if ((/** @type {?} */ (ui)).widget === 'time')
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
        get: /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "\n  <nz-form-item [style.width.px]=\"ui.width\">\n    <nz-col *ngIf=\"showTitle\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n        {{ t }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip nz-icon type=\"question-circle\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n        <ng-content></ng-content>\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n      </div>\n    </nz-col>\n  </nz-form-item>"
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
            .pipe(filter(function () { return _this.ui["__destroy"] !== true; }))
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
            .pipe(filter(function () { return _this.ui["__destroy"] !== true; }))
            .subscribe(function () { return _this.cd.detectChanges(); });
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
         */
        function () {
            return (this.schema.maxItems &&
                (/** @type {?} */ (this.formProperty.properties)).length >= this.schema.maxItems);
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
                    template: "\n  <nz-form-item>\n    <nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel\" class=\"ant-form-item-label\">\n      <label>\n        {{ schema.title }}\n        <span class=\"optional\">\n          {{ ui.optional }}\n          <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n            <i nz-tooltip nz-icon type=\"question-circle\"></i>\n          </nz-tooltip>\n        </span>\n      </label>\n      <div class=\"add\">\n        <button nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n      </div>\n    </nz-col>\n    <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl\" [nzOffset]=\"ui.offsetControl\">\n      <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n\n        <nz-row class=\"sf-array-container\">\n          <ng-container *ngFor=\"let i of formProperty.properties; let idx=index\">\n            <nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf-array-item\">\n              <nz-card>\n                <sf-item [formProperty]=\"i\"></sf-item>\n                <span *ngIf=\"removeTitle\" class=\"remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                  <i nz-icon type=\"delete\"></i>\n                </span>\n              </nz-card>\n            </nz-col>\n          </ng-container>\n        </nz-row>\n\n        <nz-form-extra *ngIf=\"schema.description\" [innerHTML]=\"schema.description\"></nz-form-extra>\n        <nz-form-explain *ngIf=\"!ui.onlyVisual && showError\">{{error}}</nz-form-explain>\n\n      </div>\n    </nz-col>\n  </nz-form-item>\n  "
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
         */
        function () {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.inited = false;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.data = list;
            _this.allChecked = false;
            _this.indeterminate = false;
            _this.labelTitle = list.length === 0 ? '' : _this.schema.title;
            _this.grid_span = _this.ui["span"] && _this.ui["span"] > 0 ? _this.ui["span"] : 0;
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
     * @return {?}
     */
    CheckboxWidget.prototype.updateAllChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        // issues: https://github.com/NG-ZORRO/ng-zorro-antd/issues/2025
        setTimeout(function () { return _this.detectChanges(); });
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
        { type: Component, args: [{
                    selector: 'sf-checkbox',
                    template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\" nz-checkbox class=\"mr-sm\" [(ngModel)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\n    (click)=\"onAllChecked($event)\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\"\n  [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"ui.optionalHelp\" [nzTitle]=\"ui.optionalHelp\">\n          <i nz-tooltip nz-icon type=\"question-circle\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
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
        return list.map(function (node) { return new NzTreeNode(/** @type {?} */ (deepCopy(node))); });
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
            defaultExpandedKeys: ui["defaultExpandedKeys"] || [],
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
            size: this.ui["fileSize"] == null ? 0 : +this.ui["fileSize"],
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TransferWidget = /** @class */ (function (_super) {
    __extends(TransferWidget, _super);
    function TransferWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = [];
        _this._data = [];
        _this._canMove = function (arg) {
            return _this.ui["canMove"] ? _this.ui["canMove"](arg) : of(arg.list);
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
                if (~(/** @type {?} */ (formData)).indexOf(item.value))
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            ? (/** @type {?} */ (this.ui["text"])).replace('{{value}}', this.formProperty.value)
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
                return (/** @type {?} */ (_this.ui.asyncData))(node, index, _this);
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
        (/** @type {?} */ (this.ui["loadData"](option)))
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

export { DelonFormConfig, useFactory, SFComponent, SFItemComponent, SFFixedDirective, DelonFormModule, ERRORSDEFAULT, FormProperty, PropertyGroup, FormPropertyFactory, AtomicProperty, ObjectProperty, ArrayProperty, StringProperty, NumberProperty, BooleanProperty, Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget, ObjectWidget, ArrayWidget, StringWidget, NumberWidget, DateWidget, TimeWidget, RadioWidget, CheckboxWidget, BooleanWidget, TextareaWidget, SelectWidget, TreeSelectWidget, TagWidget, UploadWidget, TransferWidget, SliderWidget, RateWidget, EMAILSUFFIX, AutoCompleteWidget, CascaderWidget, MentionWidget, CustomWidget, NzWidgetRegistry, WidgetRegistry, WidgetFactory, SchemaValidatorFactory, AjvSchemaValidatorFactory, SFItemWrapComponent as ɵb, TerminatorService as ɵa, SFTemplateDirective as ɵc, TextWidget as ɵd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2Vycm9ycy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2NvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3V0aWxzLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2F0b21pYy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL251bWJlci5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL3N0cmluZy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Jvb2xlYW4ucHJvcGVydHkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL29iamVjdC5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3ZhbGlkYXRvci5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0LmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWZpeGVkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGltZS90aW1lLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBgw6XCuMKDw6XCsMKUw6bCqMKhw6XCvMKPw6XCh8K6w6nClMKZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYMOmwpfCoMOmwrPClcOmwonCvsOlwojCsMOlwrzClcOnwpTCqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYMOkwrjCjcOlwoXCgcOowq7CuMOowrbChcOowr/Ch3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYMOkwrjCjcOlwoXCgcOowq7CuMOmwpzCicOpwqLCncOlwqTClsOnwprChMOlwrHCnsOmwoDCp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpcK6wpTDpMK4wrogYW55T2Ygw6bCicKAw6bCjMKHw6XCrsKaw6fCmsKEw6XChcK2w6TCuMKtw6TCuMKAw6TCuMKqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwovCpcOmwpzCicOlwrHCnsOmwoDCp3twcm9wZXJ0eX3Dp8KawoTDpMK+wp3DqMK1wpbDpcKxwp7DpsKAwqd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsIC8vIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKgwrzDpcK8wo8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYMOnwrHCu8Olwp7Ci8OlwrrClMOlwr3Ck8OmwpjCryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBgw6XCv8KFw6XCocKrw6nCocK5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwqTCmiB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKwwpEge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqbDpMK7wqXDpMK4wopgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCryB7bXVsdGlwbGVPZn0gw6fCmsKEw6bClcK0w6bClcKww6XCgMKNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwozCucOpwoXCjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDDpcKPwqrDqMKDwr3DpcKMwrnDqcKFwo3DpMK4woDDpMK4wqogXCJvbmVPZlwiIMOkwrjCrcOnwprChCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwpDCq8OmwpzCicOpwofCjcOlwqTCjcOpwqHCuSAow6fCrMKsIHtqfSDDqcKhwrnDpMK4wo7Dp8Kswqwge2l9IMOpwqHCucOmwpjCr8OpwofCjcOlwqTCjcOnwprChClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYMOlwrHCnsOmwoDCp8OlwpDCjSBcIntwcm9wZXJ0eU5hbWV9XCIgw6bCl8Kgw6bClcKIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpzCicOlwrHCnsOmwoDCp8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYMOnwpTCscOkwrrCjiB7Y2FzZUluZGV4fSDDpcKkwrHDqMK0wqXDr8K8wozDpsKcwqrDqcKAwprDqMK/wocgXCJzd2l0Y2hcIiDDpsKgwqHDqcKqwoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6fCrcKJw6TCusKOw6XCuMK4w6nCh8KPYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozChcOlwpDCq8OkwrjCgMOkwrjCqsOmwpzCicOmwpXCiMOpwqHCuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq/DpsKWwofDpsKcwqzDr8K8wozDqcKUwq7DpcKQwo3DqMK1wp7DpcKQwowgYEVycm9yRGF0YS5rZXl3b3JkYCDDpcKAwrxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDDpcKAwrzDpcKnwovDp8K7wojDpcKMwoXDpcKQwqsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiIsImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRVJST1JTREVGQVVMVCB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDDqcKZwpDDpcKuwpogU2NoZW1hIMOkwrjCrSBgdHlwZWAgw6fCscK7w6XCnsKLXG4gICAqIC0gYGVudW1gIMOpwpnCkMOlwq7CmsOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykgw6XCj8KCw6bClcKwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xuICAvKipcbiAgICogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyA9IG51bGw7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKAwprDp8KUwqjDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq9cbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBFUlJPUlNERUZBVUxUO1xuICAvKipcbiAgICogw6nCu8KYw6jCrsKkw6XChcKow6XCscKAw6XCuMKDw6XCscKAXG4gICAqL1xuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xuICAvKipcbiAgICogw6XChcKDw6fCtMKgw6fCu8KEw6TCu8K2w6XCpMKnw6XCsMKPw6/CvMKMw6fClMKow6TCusKOIGBuelNpemVgIMOlwoDCvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6nCo8KOw6bCoMK8XG4gICAqL1xuICBidXR0b24/OiBTRkJ1dHRvbiA9IHtcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWVlZWS1NTS1ERCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRlw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJzdHJpbmdcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0PyA9ICdISDptbTpzcyc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXDDr8K8wozDpsKXwqXDpsKcwp/Dp8K7wp/DpMK4woDDpMK9wr/Dp8KUwqggYDE5NzAtMDEtMDFgXG4gICAqL1xuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjb25zdCBGT1JNQVRNQVBTID0ge1xuICAnZGF0ZS10aW1lJzoge1xuICAgIHdpZGdldDogJ2RhdGUnLFxuICAgIHNob3dUaW1lOiB0cnVlLFxuICAgIGZvcm1hdDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyxcbiAgfSxcbiAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gIHRpbWU6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgd2VlazogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ3dlZWsnLCBmb3JtYXQ6ICdZWVlZLVdXJyB9LFxuICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcbiAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcbiAgZW1haWw6IHsgd2lkZ2V0OiAnYXV0b2NvbXBsZXRlJywgdHlwZTogJ2VtYWlsJyB9LFxuICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbn1cblxuLyoqIMOmwqDCucOmwo3CriBgJHJlZmAgw6bCn8Klw6bCicK+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIMOlwo/ClsOlwpvCnlNjaGVtYcOvwrzCjMOlwrnCtsOlwqTChMOnwpDChiBgJHJlZmAgw6fCmsKEw6XChcKzw6fCs8K7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxuKTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xuXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLFxuICAgIGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZi5wcm9wZXJ0aWVzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbi5yZXF1aXJlZCk7XG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBjb25zdCBoYXNFbHNlID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdlbHNlJyk7XG4gIGlmIChoYXNFbHNlKSB7XG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmLnByb3BlcnRpZXNba2V5XS5lbnVtO1xuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZC5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuLnJlcXVpcmVkLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xuICBpZiAoaGFzRWxzZSlcbiAgICBzY2hlbWEuZWxzZS5yZXF1aXJlZC5mb3JFYWNoKFxuICAgICAga2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSxcbiAgICApO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcbiAgZGV0ZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSBhcnIgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCxcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyxcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiA8U0ZTY2hlbWFFbnVtPnsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxuICBmb3JtRGF0YTogYW55LFxuICBhc3luY0FyZ3M/OiBhbnksXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKCkgPT4gdWkuX19kZXN0cm95ICE9PSB0cnVlKSxcbiAgICAgICAgbWFwKGxpc3QgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgICApO1xuICB9XG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpO1xufVxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xuICBvbkRlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KHRydWUpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+O1xuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9vYmpFcnJvcnM6IHsgW2tleTogc3RyaW5nXTogRXJyb3JEYXRhW10gfSA9IHt9O1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnVpID0gdWk7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSwge1xuICAgICAgaW5nb3JlS2V5d29yZHM6IHRoaXMudWkuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhIHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOlwoDCvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfaGFzVmFsdWUoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IGFueTtcblxuICAvKipcbiAgICogw6bCm8K0w6bClsKww6XCgMK8w6TCuMKUw6bCoMKhw6nCqsKMw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkcOlwoDCvMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBvbmx5U2VsZiA9IGZhbHNlLFxuICAgIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSxcbiAgICBlbWl0VmFsaWRhdG9yID0gdHJ1ZSxcbiAgKSB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBgZW1pdFZhbGlkYXRvcmAgw6bCr8KPw6TCuMKAw6bCrMKhw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6XCt8Kyw6fCu8KPw6XCjMKFw6XCkMKrw6XCrsKMw6bClcK0w6nClMKZw6jCr8Kvw6nCk8K+w6jCt8Kvw6/CvMKMw6XCkMKOw6fCu8Ktw6fCiMK2w6jCisKCw6fCgsK5w6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8Kgw6nCocK7w6XChsKNw6jCp8Kmw6XCj8KRw6bCoMKhw6nCqsKMXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0VmFsdWVFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDDpsKgwrnDpsKNwq7DqMK3wq/DpcK+woTDpsKQwpzDp8K0wqLDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiDDpsKfwqXDpsKJwr7DpsKgwrnDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgbGV0IHByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gPFByb3BlcnR5R3JvdXA+cHJvcGVydHk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZXJyb3JzXG5cbiAgcHJpdmF0ZSBpc0VtcHR5RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMw6XCmcKow6XCv8KFw6nCocK7w6jCh8Kzw6XCsMKRw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqICdtZXNzYWdlJyDDpcKxwp7DpsKAwqfDr8K8wozDp8KUwqjDpMK6wo7DqMKhwqjDp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqxgLFxuICAgICAgICAgICk7XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcCgoZXJyOiBFcnJvckRhdGEpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXG4gICAgICAgICAgICA/IGVyci5tZXNzYWdlXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlKGVycikgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH4obWVzc2FnZSBhcyBzdHJpbmcpLmluZGV4T2YoJ3snKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcbiAgICAgICAgICAgICAgKHY6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGVyci5wYXJhbXNba2V5XSB8fCAnJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9ycywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcbiAgICBjb25zdCBwbGF0RXJyb3JzOiBFcnJvckRhdGFbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiAhcHJvcGVydHkudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRFcnJvcnMocGxhdEVycm9ycywgZmFsc2UpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29uZGl0aW9uXG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIC8vIMOpwoPCqMOlwojChsOmwpXCsMOmwo3CrsOmwrrCkMOmwp3CpcOowofCqiByZXNldFxuICAgIHRoaXMucmVzZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEEgZmllbGQgaXMgdmlzaWJsZSBpZiBBVCBMRUFTVCBPTkUgb2YgdGhlIHByb3BlcnRpZXMgaXQgZGVwZW5kcyBvbiBpcyB2aXNpYmxlIEFORCBoYXMgYSB2YWx1ZSBpbiB0aGUgbGlzdFxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0JpbmRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcbiAgICAgICAgaWYgKHZpc2libGVJZi5oYXNPd25Qcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCkpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2VhcmNoUHJvcGVydHkoZGVwZW5kZW5jeVBhdGgpO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVDaGVjayA9IHByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aSA9IHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmkuaW5kZXhPZignJEFOWSQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmkuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgdmFsdWVDaGVjaywgdmlzaWJpbGl0eUNoZWNrXG4gICAgICAgICAgICApLnBpcGUobWFwKHJlc3VsdHMgPT4gcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKSk7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYENhbid0IGZpbmQgcHJvcGVydHkgJHtkZXBlbmRlbmN5UGF0aH0gZm9yIHZpc2liaWxpdHkgY2hlY2sgb2YgJHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhcbiAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodmFsdWVzID0+IHZhbHVlcy5pbmRleE9mKHRydWUpICE9PSAtMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9IHwgRm9ybVByb3BlcnR5W10gPSBudWxsO1xuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgaWYgKFxuICAgICAgcHJvcGVydHkgIT09IG51bGwgJiZcbiAgICAgIHN1YlBhdGhJZHggIT09IC0xICYmXG4gICAgICBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXBcbiAgICApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9ICg8UHJvcGVydHlHcm91cD5wcm9wZXJ0eSkuZ2V0UHJvcGVydHkoc3ViUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IFN0cmluZykgPT4gdm9pZCkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF07XG4gICAgICAgIGZuKHByb3BlcnR5LCBwcm9wZXJ0eUlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKGNoaWxkID0+IHtcbiAgICAgIGZuKGNoaWxkKTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgICAgKDxQcm9wZXJ0eUdyb3VwPmNoaWxkKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2JpbmRWaXNpYmlsaXR5KCkge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShwcm9wZXJ0eSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXRvbWljUHJvcGVydHkgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBhYnN0cmFjdCBmYWxsYmFja1ZhbHVlKCk6IGFueTtcblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZmFsbGJhY2tWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLndpZGdldCkgdGhpcy53aWRnZXQucmVzZXQodmFsdWUpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhbGxiYWNrVmFsdWUoKSAhPT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHt9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIE51bWJlclByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgdmFsdWUuaW5kZXhPZignLicpID4gLTEgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF0b21pY1Byb3BlcnR5IH0gZnJvbSAnLi9hdG9taWMucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQm9vbGVhblByb3BlcnR5IGV4dGVuZHMgQXRvbWljUHJvcGVydHkge1xuICBmYWxsYmFja1ZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheVByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHRpY2sgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogYW55LFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcbiAgICBpZiAoaXNOYU4ocG9zKSB8fCBwb3MgPj0gbGlzdC5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IE9iamVjdFByb3BlcnR5LCBfKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5LmZvcm1EYXRhLCBwcm9wZXJ0eS52YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFkZFByb3BlcnR5KHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgdGhpcy51aS4kaXRlbXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIHRoaXMsXG4gICAgKSBhcyBPYmplY3RQcm9wZXJ0eTtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykucHVzaChuZXdQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXModmFsdWU6IGFueVtdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XG4gICAgICBwcm9wZXJ0eS5yZXNldFZhbHVlKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xuICAgIGVsc2UgdGhpcy5fb2JqRXJyb3JzID0ge307XG4gIH1cblxuICAvLyAjcmVnaW9uIGFjdGlvbnNcblxuICBhZGQodmFsdWU6IGFueSk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KHZhbHVlKTtcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcztcbiAgICB0aGlzLmNsZWFyRXJyb3JzKGxpc3RbaW5kZXhdLnBhdGgpO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICAgICAgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEludmFsaWQgJHt0aGlzLnNjaGVtYS50aXRsZSB8fCAncm9vdCd9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOmAsXG4gICAgICAgIGUsXG4gICAgICApO1xuICAgIH1cbiAgICBvcmRlcmVkUHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxuICAgICAgICAodGhpcy5mb3JtRGF0YSB8fCB7fSlbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3BlcnR5SWQsXG4gICAgICApO1xuICAgICAgdGhpcy5fcHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55ID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBhbnksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHt9XG5cbiAgY3JlYXRlUHJvcGVydHkoXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBwYXRoICs9IChwYXJlbnQgYXMgQXJyYXlQcm9wZXJ0eSkudGljaysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArXG4gICAgICAgICAgICBwYXJlbnQudHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4IHJlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BlcnR5SWQgJiZcbiAgICAgICAgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZCkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmIChcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxuICAgICAgKSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBTRlNjaGVtYSkgPT4gRXJyb3JEYXRhW107XG59XG5cbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnZGF0YS11cmwnLFxuICAgICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdjb2xvcicsXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdtb2JpbGUnLFxuICAgICAgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdpZC1jYXJkJyxcbiAgICAgIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8sXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcblxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIHNldERlZmF1bHQod2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgY3JlYXRlV2lkZ2V0KFxuICAgIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0eXBlOiBzdHJpbmcsXG4gICk6IENvbXBvbmVudFJlZjxXaWRnZXQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PGFueT4+KFxuICAgICAgY29tcG9uZW50Q2xhc3MsXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4pIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuICBwcml2YXRlIF9pdGVtOiBhbnk7XG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVmVWk6IFNGVUlTY2hlbWFJdGVtO1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IG51bGw7XG4gIF9mb3JtRGF0YTogYW55O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpcK4woPDpcKxwoDDr8K8wozDp8KtwonDpcKQwowgYG56TGF5b3V0YMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmhvcml6b250YWwgKi9cbiAgQElucHV0KClcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG5cbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHNjaGVtYTogU0ZTY2hlbWE7XG5cbiAgLyoqIFVJIFNjaGVtYSAqL1xuICBASW5wdXQoKVxuICB1aTogU0ZVSVNjaGVtYTtcblxuICAvKiogw6jCocKow6XCjcKVw6nCu8KYw6jCrsKkw6XCgMK8ICovXG4gIEBJbnB1dCgpXG4gIGZvcm1EYXRhOiB7fTtcblxuICAvKipcbiAgICogw6bCjMKJw6nCksKuXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBudWxsYCDDpsKIwpYgYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6bCicKLw6XCisKow6bCt8K7w6XCisKgw6bCjMKJw6nCksKuw6/CvMKMw6TCvcKGw6TCv8Kdw6fClcKZw6XCrsK5w6XCmcKoXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBub25lYCDDqMKhwqjDp8KkwrrDpsKJwovDpcKKwqjDpsK3wrvDpcKKwqDDpsKMwonDqcKSwq7Dr8K8wozDpMK4wpTDpMK4wo3DpMK/wp3Dp8KVwpnDpcKuwrnDpcKZwqhcbiAgICogLSDDpMK9wr/Dp8KUwqjDpcKbwrrDpcKuwpogYGxhYmVsYCDDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpsKXwqAgYHJlbmRlci5jbGFzc2Agw6XCiMKZw6nCu8KYw6jCrsKkw6TCuMK6w6XCscKFw6TCuMKtw6fCisK2w6bCgMKBXG4gICAqL1xuICBASW5wdXQoKVxuICBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG5cbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwq7CnsOmwpfCtsOmwqDCocOpwqrCjMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxpdmVWYWxpZGF0ZSA9IHRydWU7XG5cbiAgLyoqIMOmwozCh8Olwq7CmsOowqHCqMOlwo3ClSBgYXV0b2NvbXBsZXRlYCDDpcKAwrwgKi9cbiAgQElucHV0KClcbiAgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG5cbiAgLyoqIMOnwqvCi8Olwo3Cs8OmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZmlyc3RWaXN1YWwgPSB0cnVlO1xuXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKowqHDpcK8wo8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLnNlYXJjaDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLmVkaXQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XG5cbiAgLyoqIMOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOmwo/CkMOkwrrCpMOowqHCqMOlwo3ClcOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClcOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCu8KTw6bCnsKcw6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKiogw6jCocKow6XCjcKVw6bCoMKhw6nCqsKMw6fCisK2w6bCgMKBICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKiogw6jCocKow6XCjcKVw6XCgMK8ICovXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gb3B0aW9ucy5saXZlVmFsaWRhdGU7XG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBvcHRpb25zLmF1dG9jb21wbGV0ZTtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlclByb3BlcnR5KCkge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgX3NjaGVtYSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKTtcbiAgICBjb25zdCB7IGRlZmluaXRpb25zIH0gPSBfc2NoZW1hO1xuXG4gICAgY29uc3QgaW5GbiA9IChcbiAgICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICBwYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoXG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNba2V5XSBhcyBTRlNjaGVtYSxcbiAgICAgICAgICBkZWZpbml0aW9ucyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdWkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHsgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlIH0sXG4gICAgICAgICAgcHJvcGVydHkuZm9ybWF0ICYmIEZPUk1BVE1BUFNbcHJvcGVydHkuZm9ybWF0XSxcbiAgICAgICAgICB0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsLFxuICAgICAgICAgICFwcm9wZXJ0eS51aSAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiZcbiAgICAgICAgICBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB0aGlzLl9kZWZVaSxcbiAgICAgICAgICBwcm9wZXJ0eS51aSxcbiAgICAgICAgICB1aVNjaGVtYVt1aUtleV0sXG4gICAgICAgICkgYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIMOnwrvCp8OmwonCv8OnwojCtsOoworCgsOnwoLCucOlwrjCg8OlwrHCgMOlwrHCnsOmwoDCp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IDVcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gMTlcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2w7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS53aWRnZXQgPT09ICdkYXRlJyAmJiB1aS5lbmQgIT0gbnVsbCAmJiBwYXJlbnRTY2hlbWEpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBwYXJlbnRTY2hlbWEucHJvcGVydGllc1t1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGVFbmRQcm9wZXJ0eS51aSwge1xuICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSA9IHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gfHwge307XG4gICAgICAgICAgaW5GbihcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICAodWlTY2hlbWFbdWlLZXldIHx8IHt9KVsnJGl0ZW1zJ10gfHwge30sXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10sXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluSWZGbiA9IChzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U0ZVSVNjaGVtYUl0ZW0+e1xuICAgICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICAgIGxpdmVWYWxpZGF0ZTogdGhpcy5saXZlVmFsaWRhdGUsXG4gICAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucy51aSxcbiAgICAgIF9zY2hlbWEudWksXG4gICAgICB0aGlzLnVpWycqJ10sXG4gICAgKTtcblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZlVpKTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG5cbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIHtcbiAgICAgIGRpKCdjb3ZlciBzY2hlbWEgJiB1aScsIHRoaXMuX3VpLCBfc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgcmVuZGVyOiB7fSB9LFxuICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgdGhpcy5idXR0b24sXG4gICAgKTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuZ3JpZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBidG5VaS5zcGFuTGFiZWwsXG4gICAgICAgICAgc3BhbjogYnRuVWkuc3BhbkNvbnRyb2wsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBmaXhlZCBsYWJlbFxuICAgICAgaWYgKHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDDpcKbwrrDpcKuwprDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDpsKgwrfDpcK8wo/Dr8K8wozDpcKIwpnDqcK7wpjDqMKuwqTDpcKxwoXDpMK4wq1cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgJiZcbiAgICAgICAgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91aS5kZWJ1ZykgZGkoJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6bCnMKqw6bCicK+w6XCiMKww6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6fCm8K4w6XCkMKMw6jCh8Kqw6XCrsKaw6TCucKJw6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgIHB1aS5fcmVuZGVyID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgICAgaWYgKCFwdWkuX3JlbmRlcikgcHVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3IoKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogw6XCiMK3w6bClsKwIFNjaGVtYcOvwrzCjMOkwrjCgMOowojCrMOpwpzCgMOowqbCgcOlworCqMOmwoDCgcOkwr/CrsOmwpTCuSBTY2hlbWEgw6bCn8KQw6TCuMKqw6XCgMK8w6bCl8K2w6XCj8Kvw6TCu8Klw6bClsK5w6TCvsK/w6jCsMKDw6fClMKoXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1EYXRhLCB2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClVxuICAgKiBAcGFyYW0gW2VtaXRdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkSBgZm9ybVJlc2V0YCDDpMK6wovDpMK7wrbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RhcmdldD48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpZGdldDogV2lkZ2V0PGFueT4gPSBudWxsO1xuXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICkge31cblxuICBvbldpZGdldEluc3RhbmNpYXRlZCh3aWRnZXQ6IFdpZGdldDxhbnk+KSB7XG4gICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgY29uc3QgaWQgPSBgX3NmLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAgIGNvbnN0IHVpID0gdGhpcy5mb3JtUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW07XG4gICAgdGhpcy53aWRnZXQuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XG4gICAgdGhpcy53aWRnZXQuc2NoZW1hID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hO1xuICAgIHRoaXMud2lkZ2V0LnVpID0gdWk7XG4gICAgdGhpcy53aWRnZXQuaWQgPSBpZDtcbiAgICB0aGlzLndpZGdldC5maXJzdFZpc3VhbCA9IHVpLmZpcnN0VmlzdWFsO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LndpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVybWluYXRvci5vbkRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldChcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgKHRoaXMuZm9ybVByb3BlcnR5LnVpLndpZGdldCB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWEudHlwZSkgYXMgc3RyaW5nLFxuICAgICk7XG4gICAgdGhpcy5vbldpZGdldEluc3RhbmNpYXRlZCh0aGlzLnJlZi5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS51aS5fX2Rlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tmaXhlZC1sYWJlbF0nIH0pXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoJ2ZpeGVkLWxhYmVsJylcbiAgQElucHV0TnVtYmVyKClcbiAgbnVtOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHdpZGdldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuYW50LXJvdycpIHx8IHRoaXMuZWw7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3Mod2lkZ2V0RWwsICdzZi1maXhlZCcpO1xuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLm51bSArICdweCc7XG4gICAgaWYgKGxhYmVsRWwpIHtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICd3aWR0aCcsIHVuaXQpO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWFyZ2luLWxlZnQnLCB1bml0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlcjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlci5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLmluaXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbS13cmFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cbiAgICA8bnotY29sICpuZ0lmPVwic2hvd1RpdGxlXCIgW256U3Bhbl09XCJ1aS5zcGFuTGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgIDxsYWJlbCAqbmdJZj1cInRcIiBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cbiAgICAgICAge3sgdCB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBuei1pY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gIDwvbnotZm9ybS1pdGVtPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gbnVsbDtcblxuICBnZXQgdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSA9PT0gbnVsbCA/IHRoaXMuc2NoZW1hLnRpdGxlIDogdGhpcy50aXRsZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU0ZUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5fYWRkVHBsKFxuICAgICAgdGhpcy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMucGF0aCA6IGAvYCArIHRoaXMucGF0aCxcbiAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBJbmplY3QsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBmaXJzdFZpc3VhbCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xzKCkge1xuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChTRkNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmQ29tcD86IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcnM6IEVycm9yRGF0YVtdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnVpLmRlYnVnKSBkaSgnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XG5cbiAgICAgICAgLy8gw6TCuMKNw6bCmMK+w6fCpMK6w6nCpsKWw6bCrMKhw6bCoMKhw6nCqsKMw6jCp8KGw6jCp8KJXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSBlcnJvcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyBlcnJvcnNbMF0ubWVzc2FnZSA6ICcnO1xuXG4gICAgICAgICAgaWYgKHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMudWkuZGVidWcpIHtcbiAgICAgIGRpKCd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWQ7IGVsc2Ugbm9HcmlkXCI+XG4gICAgPGRpdiBuei1yb3cgW256R3V0dGVyXT1cImdyaWQuZ3V0dGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgICA8ZGl2IG56LWNvbFxuICAgICAgICAgICAgW256U3Bhbl09XCJpLmdyaWQuc3BhblwiIFtuek9mZnNldF09XCJpLmdyaWQub2Zmc2V0XCJcbiAgICAgICAgICAgIFtuelhzXT1cImkuZ3JpZC54c1wiIFtuelNtXT1cImkuZ3JpZC5zbVwiIFtuek1kXT1cImkuZ3JpZC5tZFwiXG4gICAgICAgICAgICBbbnpMZ109XCJpLmdyaWQubGdcIiBbbnpYbF09XCJpLmdyaWQueGxcIiBbbnpYWGxdPVwiaS5ncmlkLnh4bFwiPlxuICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI25vR3JpZD5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpLnByb3BlcnR5LnZpc2libGUgJiYgaS5zaG93XCI+XG4gICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctdGVtcGxhdGU+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyaWQ6IFNGR3JpZFNjaGVtYTtcbiAgbGlzdDogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLnVpLmdyaWQ7XG4gICAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzSWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllc1trZXldIGFzIEZvcm1Qcm9wZXJ0eTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBncmlkOiBwcm9wZXJ0eS51aS5ncmlkIHx8IHRoaXMuZ3JpZCB8fCB7fSxcbiAgICAgICAgc3BhbkxhYmVsRml4ZWQ6IHByb3BlcnR5LnVpLnNwYW5MYWJlbEZpeGVkLFxuICAgICAgICBzaG93OiBwcm9wZXJ0eS51aS5oaWRkZW4gPT09IGZhbHNlXG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei1mb3JtLWl0ZW0+XG4gICAgPG56LWNvbCAqbmdJZj1cInNjaGVtYS50aXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBuei1pY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxuICAgICAgICAgICAgPG56LWNvbCAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIiBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCIgY2xhc3M9XCJzZi1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRpdGxlXCIgY2xhc3M9XCJyZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpZHgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cImRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXJvdz5cblxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5zZkNvbXAubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZ3JpZCAmJiB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuKVxuICAgICAgdGhpcy5hcnJheVNwYW4gPSB0aGlzLnVpLmdyaWQuYXJyYXlTcGFuO1xuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMudWkuYWRkVGl0bGUgfHwgdGhpcy5sWydhZGRUZXh0J107XG4gICAgdGhpcy5hZGRUeXBlID0gdGhpcy51aS5hZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPVxuICAgICAgdGhpcy51aS5yZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHRoaXMudWkucmVtb3ZlVGl0bGUgfHwgdGhpcy5sWydyZW1vdmVUZXh0J107XG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmFkZChudWxsKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgICAgPGlucHV0IG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ1aS50eXBlIHx8ICd0ZXh0J1wiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cInVpLmF1dG9jb21wbGV0ZVwiXG4gICAgICAgIFthdHRyLmF1dG9Gb2N1c109XCJ1aS5hdXRvZm9jdXNcIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdhZGRvbic7IGVsc2UgaXB0XCI+XG4gICAgICA8bnotaW5wdXQtZ3JvdXBcbiAgICAgICAgW256QWRkT25CZWZvcmVdPVwidWkuYWRkT25CZWZvcmVcIiBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxuICAgICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCIgW256QWRkT25BZnRlckljb25dPVwidWkuYWRkT25BZnRlckljb25cIlxuICAgICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCIgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcbiAgICAgICAgW256U3VmZml4XT1cInVpLnN1ZmZpeFwiIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXB0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAhIShcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlciB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZSB8fFxuICAgICAgdGhpcy51aS5hZGRPbkFmdGVySWNvbiB8fFxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZUljb24gfHxcbiAgICAgIHRoaXMudWkucHJlZml4IHx8XG4gICAgICB0aGlzLnVpLnByZWZpeEljb24gfHxcbiAgICAgIHRoaXMudWkuc3VmZml4IHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeEljb25cbiAgICApXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJyAmJiAhdmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxuICAgICAgW256UGFyc2VyXT1cInBhcnNlclwiXG4gICAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCI+XG4gICAgPC9uei1pbnB1dC1udW1iZXI+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIGZvcm1hdHRlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjaGVtYSwgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWluID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gPyBzY2hlbWEubWluaW11bSArIDEgOiBzY2hlbWEubWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWF4ID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gPyBzY2hlbWEubWF4aW11bSAtIDEgOiBzY2hlbWEubWF4aW11bTtcbiAgICB9XG4gICAgdGhpcy5zdGVwID0gc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLnRydW5jKHRoaXMubWluKTtcbiAgICAgIHRoaXMubWF4ID0gTWF0aC50cnVuYyh0aGlzLm1heCk7XG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XG4gICAgfVxuICAgIGlmICh1aS5wcmVmaXggIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dWkucHJlZml4fSAke3ZhbHVlfWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt2YWx1ZX0gJHt1aS51bml0fWA7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XG5cbiAgICAgIDxuei1tb250aC1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgID48L256LW1vbnRoLXBpY2tlcj5cblxuICAgICAgPG56LXdlZWstcGlja2VyICpuZ1N3aXRjaENhc2U9XCInd2VlaydcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9uei13ZWVrLXBpY2tlcj5cblxuICAgICAgPG56LXJhbmdlLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1yYW5nZS1waWNrZXI+XG5cbiAgICAgIDxuei1kYXRlLXBpY2tlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cInVpLmRpc2FibGVkVGltZVwiXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcbiAgICAgICAgW256U2hvd1RpbWVdPVwidWkuc2hvd1RpbWVcIlxuICAgICAgICBbbnpTaG93VG9kYXldPVwiaS5zaG93VG9kYXlcIlxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb2RlOiBzdHJpbmc7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSB8IERhdGVbXSA9IG51bGw7XG4gIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcbiAgZmxhdFJhbmdlID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xuICAgIHRoaXMuZmxhdFJhbmdlID0gdWkuZW5kICE9IG51bGw7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xuICAgIH1cbiAgICBpZiAoIXVpLmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS1NTWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LXd3YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAgIC8vIMOlwoXCrMOlwoXCsUFQSVxuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcbiAgICAgIC8vIG56LWRhdGUtcGlja2VyXG4gICAgICBzaG93VG9kYXk6IHRvQm9vbCh1aS5zaG93VG9kYXksIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdmFsdWUgPSB0aGlzLnRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBbXSA6IFt2YWx1ZSwgdGhpcy50b0RhdGUodGhpcy5lbmRQcm9wZXJ0eS5mb3JtRGF0YSldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IHZhbHVlLm1hcChkID0+IGZvcm1hdChkLCB0aGlzLmZvcm1hdCkpXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xuXG4gICAgaWYgKHRoaXMuZmxhdFJhbmdlKSB7XG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgX29wZW5DaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkub25PcGVuQ2hhbmdlKSB0aGlzLnVpLm9uT3BlbkNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX29rKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucGFyZW50LnByb3BlcnRpZXNbdGhpcy51aS5lbmRdO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZW5kUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b0RhdGUodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgrdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGltZS1waWNrZXJcbiAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Rm9ybWF0XT1cImkuZGlzcGxheUZvcm1hdFwiXG4gICAgICBbbnpBbGxvd0VtcHR5XT1cImkuYWxsb3dFbXB0eVwiXG4gICAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxuICAgICAgW256RGVmYXVsdE9wZW5WYWx1ZV09XCJpLmRlZmF1bHRPcGVuVmFsdWVcIlxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJ1aS5kaXNhYmxlZEhvdXJzXCJcbiAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxuICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cInVpLmRpc2FibGVkU2Vjb25kc1wiXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cImkuaGlkZURpc2FibGVkT3B0aW9uc1wiXG4gICAgICBbbnpIb3VyU3RlcF09XCJpLmhvdXJTdGVwXCJcbiAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiaS5taW51dGVTdGVwXCJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwiaS5zZWNvbmRTdGVwXCJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInVpLnBvcHVwQ2xhc3NOYW1lXCJcbiAgICAgID5cbiAgICA8L256LXRpbWUtcGlja2VyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxuICAgICAgPyB1aS5mb3JtYXRcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyAneCdcbiAgICAgICAgOiAnSEg6bW06c3MnO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcbiAgICAgIGFsbG93RW1wdHk6IHRvQm9vbCh1aS5hbGxvd0VtcHR5LCB0cnVlKSxcbiAgICAgIGNsZWFyVGV4dDogdWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdG9Cb29sKHVpLmhpZGVEaXNhYmxlZE9wdGlvbnMsIGZhbHNlKSxcbiAgICAgIGhvdXJTdGVwOiB1aS5ob3VyU3RlcCB8fCAxLFxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDEsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdiA9IHZhbHVlICE9IG51bGwgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxuICAgIGlmICh2ICE9IG51bGwgJiYgdi50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJzonKS5sZW5ndGggPD0gMSkgdmFsdWUgKz0gJzowMCc7XG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdjtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoXG4gICAgICAgIERhdGUuVVRDKFxuICAgICAgICAgIDE5NzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIHZhbHVlLmdldEhvdXJzKCksXG4gICAgICAgICAgdmFsdWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgIHZhbHVlLmdldFNlY29uZHMoKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybWF0KHZhbHVlLCB0aGlzLmZvcm1hdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhZGlvLWdyb3VwXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TmFtZV09XCJpZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3R5bGVUeXBlXCI+XG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICAgIG56LXJhZGlvXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzdHlsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBhbnlbXSA9IFtdO1xuICBzdHlsZVR5cGU6IGJvb2xlYW47XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc3R5bGVUeXBlID0gKHRoaXMudWkuc3R5bGVUeXBlIHx8ICdkZWZhdWx0JykgPT09ICdkZWZhdWx0JztcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiAodGhpcy5kYXRhID0gbGlzdCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsVGl0bGUgPSBgYDtcbiAgaW5pdGVkID0gZmFsc2U7XG5cbiAgZ2V0IGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcC5sb2NhbGU7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYWJlbFRpdGxlID0gbGlzdC5sZW5ndGggPT09IDAgPyAnJyA6IHRoaXMuc2NoZW1hLnRpdGxlO1xuICAgICAgICB0aGlzLmdyaWRfc3BhbiA9IHRoaXMudWkuc3BhbiAmJiB0aGlzLnVpLnNwYW4gPiAwID8gdGhpcy51aS5zcGFuIDogMDtcblxuICAgICAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKTtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5U2V0KCkge1xuICAgIGNvbnN0IGNoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpLnNldFZhbHVlKGNoZWNrTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UoY2hlY2tMaXN0KTtcbiAgfVxuXG4gIGdyb3VwSW5HcmlkQ2hhbmdlKHZhbHVlczogYW55W10pIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChcbiAgICAgIGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSksXG4gICAgKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKGU6IEV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSBmYWxzZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlzc3VlczogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzIwMjVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1ib29sZWFuJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotc3dpdGNoXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2VkQ2hpbGRyZW5dPVwidWkuY2hlY2tlZENoaWxkcmVuXCJcbiAgICAgIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVpLnVuQ2hlY2tlZENoaWxkcmVuXCI+XG4gICAgPC9uei1zd2l0Y2g+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8dGV4dGFyZWEgbnotaW5wdXRcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekF1dG9zaXplXT1cImF1dG9zaXplXCI+XG4gICAgPC90ZXh0YXJlYT5cblxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXV0b3NpemU6IGFueSA9IHRydWU7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmF1dG9zaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0aGlzLnVpLmF1dG9zaXplO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zZWxlY3RcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiaS5hdXRvRm9jdXNcIlxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwiaS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256U2VydmVyU2VhcmNoXT1cImkuc2VydmVyU2VhcmNoXCJcbiAgICAgIFtuek1heE11bHRpcGxlQ291bnRdPVwiaS5tYXhNdWx0aXBsZUNvdW50XCJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpPblNlYXJjaCk9XCJzZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTY3JvbGxUb0JvdHRvbSk9XCJzY3JvbGxUb0JvdHRvbSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhhc0dyb3VwXCI+XG4gICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBkYXRhXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XG4gICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPlxuICAgICAgICAgIDxuei1vcHRpb25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGkuY2hpbGRyZW5cIlxuICAgICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJvLnZhbHVlXCJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgICAgPC9uei1vcHRpb24tZ3JvdXA+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuICBoYXNHcm91cCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHRoaXMudWkuYWxsb3dDbGVhcixcbiAgICAgIGF1dG9Gb2N1czogdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSksXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogdGhpcy51aS5kcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodGhpcy51aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgc2VydmVyU2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zZXJ2ZXJTZWFyY2gsIGZhbHNlKSxcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IHRoaXMudWkubWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcbiAgICAgIG1vZGU6IHRoaXMudWkubW9kZSB8fCAnZGVmYXVsdCcsXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfDpsKXwqDDpsKzwpXDpsKJwr7DpcKIwrAnLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHRoaXMudWkuc2hvd1NlYXJjaCwgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuaGFzR3JvdXAgPSBsaXN0LmZpbHRlcih3ID0+IHcuZ3JvdXAgPT09IHRydWUpLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLm9wZW5DaGFuZ2UpIHRoaXMudWkub3BlbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBzZWFyY2hDaGFuZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcbiAgICAgIHRoaXMudWkub25TZWFyY2godGV4dCkudGhlbigocmVzOiBhbnlbXSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2Nyb2xsVG9Cb3R0b20odmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNjcm9sbFRvQm90dG9tKSB0aGlzLnVpLnNjcm9sbFRvQm90dG9tKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHRvQm9vbCwgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei10cmVlLXNlbGVjdFxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiaS5hc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiZGF0YVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kZWRLZXlzXT1cImkuZGVmYXVsdEV4cGFuZGVkS2V5c1wiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJlZS1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBwcml2YXRlIGRjKCkge1xuICAgIC8vIE11c2Ugd2FpdCBgbnotdHJlZS1zZWxlY3RgIHdyaXRlIHZhbHVlc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yMzE2XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5EYXRhKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUoZGVlcENvcHkobm9kZSkgYXMgYW55KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgYXN5bmNEYXRhOiB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nLFxuICAgICAgZGVmYXVsdEV4cGFuZEFsbDogdG9Cb29sKHVpLmRlZmF1bHRFeHBhbmRBbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM6IHVpLmRlZmF1bHRFeHBhbmRlZEtleXMgfHwgW10sXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKVxuICAgICAgLnBpcGUobWFwKGxpc3QgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpXG4gICAgICAucGlwZShtYXAoKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgZS5ub2RlLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgICAgZS5ub2RlLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGFnXG4gICAgICAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCJcbiAgICAgIG56TW9kZT1cImNoZWNrYWJsZVwiXG4gICAgICBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiXG4gICAgICAobnpBZnRlckNsb3NlKT1cIl9hZnRlckNsb3NlKClcIlxuICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXG4gICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCI+XG4gICAgICB7e2kubGFiZWx9fVxuICAgIDwvbnotdGFnPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XG4gIH1cblxuICBfYWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy51aS5hZnRlckNsb3NlKSB0aGlzLnVpLmFmdGVyQ2xvc2UoKTtcbiAgfVxuXG4gIF9jbG9zZShlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbkNsb3NlKSB0aGlzLnVpLm9uQ2xvc2UoZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXVwbG9hZFxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgW256RmlsZUxpc3RdPVwiZmlsZUxpc3RcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgIFtuekFjY2VwdF09XCJpLmFjY2VwdFwiXG4gICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgW256UmVtb3ZlXT1cInVpLnJlbW92ZVwiXG4gICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxuICAgICAgICAgIDxpIG56LWljb24gdHlwZT1cInBsdXNcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZHJhZydcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgbnotaWNvbiB0eXBlPVwiaW5ib3hcIj48L2k+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIiBbaW5uZXJIVE1MXT1cImkuaGludFwiPjwvcD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+XG4gICAgICAgICAgICA8aSBuei1pY29uIHR5cGU9XCJ1cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei11cGxvYWQ+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2QpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfDp8KCwrnDpcKHwrvDpMK4worDpMK8wqAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxuICAgICAgc2l6ZTogdGhpcy51aS5maWxlU2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmZpbGVTaXplLFxuICAgICAgZmlsZVR5cGU6IHRoaXMudWkuZmlsZVR5cGUgfHwgJycsXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHRoaXMudWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIG5hbWU6IHRoaXMudWkubmFtZSB8fCAnZmlsZScsXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0b0Jvb2wodGhpcy51aS53aXRoQ3JlZGVudGlhbHMsIGZhbHNlKSxcbiAgICAgIHJlc1JlTmFtZTogKHRoaXMudWkucmVzUmVOYW1lIHx8ICcnKS5zcGxpdCgnLicpLFxuICAgIH07XG4gICAgaWYgKHRoaXMuaS5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHRoaXMuYnRuVHlwZSA9ICdwbHVzJztcbiAgICBpZiAodGhpcy5pLnR5cGUgPT09ICdkcmFnJykge1xuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuYnRuVHlwZSA9ICdkcmFnJztcbiAgICAgIHRoaXMuaS50ZXh0ID0gdGhpcy51aS50ZXh0IHx8IGDDpcKNwpXDpcKHwrvDpsKIwpbDpsKLwpbDpcKKwqjDpsKWwofDpMK7wrbDpcKIwrDDqMKvwqXDpcKMwrrDpcKfwp/DpMK4worDpMK8wqBgO1xuICAgICAgdGhpcy5pLmhpbnQgPVxuICAgICAgICB0aGlzLnVpLmhpbnQgfHwgYMOmwpTCr8OmwozCgcOlwo3ClcOkwrjCqsOmwojClsOmwonCucOpwofCj8OvwrzCjMOkwrjCpcOnwqbCgcOkwrjCisOkwrzCoMOlwoXCrMOlwo/CuMOmwpXCsMOmwo3CrsOmwojClsOlwoXCtsOkwrvClsOlwq7CicOlwoXCqMOmwpbCh8OkwrvCtmA7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKGFyZ3M6IFVwbG9hZENoYW5nZVBhcmFtKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcbiAgICBpZiAoYXJncy50eXBlICE9PSAnc3VjY2VzcycpIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeShhcmdzLmZpbGVMaXN0KTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBsaXN0IGFzIFVwbG9hZEZpbGVbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xuICAgIGNvbnN0IHJlcyA9IGZpbGVMaXN0Lm1hcChpdGVtID0+XG4gICAgICBkZWVwR2V0KGl0ZW0ucmVzcG9uc2UsIHRoaXMuaS5yZXNSZU5hbWUsIGl0ZW0ucmVzcG9uc2UpLFxuICAgICk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmkubXVsdGlwbGUgPT09IHRydWUgPyByZXMgOiByZXMucG9wKCksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyA9IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7XG4gICAgdGhpcy5tb2RhbFNydlxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIG56Q29udGVudDogYDxpbWcgc3JjPVwiJHtmaWxlLnVybCB8fFxuICAgICAgICAgIGZpbGUudGh1bWJVcmx9XCIgY2xhc3M9XCJpbWctZmx1aWRcIiAvPmAsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgfSlcbiAgICAgIC5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10cmFuc2ZlclxuICAgICAgW256RGF0YVNvdXJjZV09XCJsaXN0XCJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXG4gICAgICBbbnpMaXN0U3R5bGVdPVwidWkubGlzdFN0eWxlXCJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlYXJjaENoYW5nZSk9XCJfc2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJhbnNmZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuICBpOiBhbnk7XG4gIHByaXZhdGUgX2RhdGE6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdGl0bGVzOiB0aGlzLnVpLnRpdGxlcyB8fCBbJycsICcnXSxcbiAgICAgIG9wZXJhdGlvbnM6IHRoaXMudWkub3BlcmF0aW9ucyB8fCBbJycsICcnXSxcbiAgICAgIGl0ZW1Vbml0OiB0aGlzLnVpLml0ZW1Vbml0IHx8ICfDqcKhwrknLFxuICAgICAgaXRlbXNVbml0OiB0aGlzLnVpLml0ZW1zVW5pdCB8fCAnw6nCocK5JyxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgICAgaWYgKH4oZm9ybURhdGEgYXMgYW55W10pLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHRoaXMuX2RhdGEgPSBsaXN0LmZpbHRlcih3ID0+IHcuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIF9jYW5Nb3ZlID0gKGFyZzogYW55KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT4ge1xuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcbiAgfTtcblxuICBfY2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnRvID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoLi4ub3B0aW9ucy5saXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWFyY2hDaGFuZ2UpIHRoaXMudWkuc2VhcmNoQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotc2xpZGVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelJhbmdlXT1cInVpLnJhbmdlXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxuICAgICAgW256RG90c109XCJ1aS5kb3RzXCJcbiAgICAgIFtuekluY2x1ZGVkXT1cImluY2x1ZGVkXCJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcbiAgICAgIChuek9uQWZ0ZXJDaGFuZ2UpPVwiX2FmdGVyQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXNsaWRlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWFya3M6IGFueTtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNjaGVtYS5taW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2hhbmdlKSB0aGlzLnVpLmFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiJGFueSh1aSkuX3JlbmRlclwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGhpcywgc2NoZW1hOiBzY2hlbWEsIHVpOiB1aSB9XCI+PC9uZy10ZW1wbGF0ZT5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotcmF0ZVxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImFsbG93Q2xlYXJcIlxuICAgICAgW256QWxsb3dIYWxmXT1cImFsbG93SGFsZlwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFtuekNvdW50XT1cImNvdW50XCI+PC9uei1yYXRlPlxuICAgIDxzcGFuICpuZ0lmPVwiaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWVcIiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyBnZW5UZXh0KCkgfX08L3NwYW4+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGFsbG93SGFsZjogYm9vbGVhbjtcbiAgYWxsb3dDbGVhcjogYm9vbGVhbjtcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBoYXNUZXh0ID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY291bnQgPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDU7XG4gICAgdGhpcy5hbGxvd0hhbGYgPSAodGhpcy5zY2hlbWEubXVsdGlwbGVPZiB8fCAwLjUpID09PSAwLjU7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sKHRoaXMudWkuYWxsb3dDbGVhciwgdHJ1ZSk7XG4gICAgdGhpcy5hdXRvRm9jdXMgPSB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKTtcbiAgICB0aGlzLmhhc1RleHQgPSAhIXRoaXMudWkudGV4dDtcbiAgfVxuXG4gIGdlblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzVGV4dFxuICAgICAgPyAodGhpcy51aS50ZXh0IGFzIHN0cmluZykucmVwbGFjZSgne3t2YWx1ZX19JywgdGhpcy5mb3JtUHJvcGVydHkudmFsdWUpXG4gICAgICA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBmbGF0TWFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXG4gICdxcS5jb20nLFxuICAnMTYzLmNvbScsXG4gICdnbWFpbC5jb20nLFxuICAnMTI2LmNvbScsXG4gICdhbGl5dW4uY29tJyxcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxuei1hdXRvY29tcGxldGUgI2F1dG9cbiAgICAgICAgW256QmFja2ZpbGxdPVwiaS5iYWNrZmlsbFwiXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXG4gICAgICAgIFtueldpZHRoXT1cImkud2lkdGhcIlxuICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudD8ubnpWYWx1ZSlcIj5cbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkubGFiZWxcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XG4gICAgICA8L256LWF1dG9jb21wbGV0ZT5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XG4gIHByaXZhdGUgaXNBc3luYyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2wodGhpcy51aS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxuICAgICAgd2lkdGg6IHRoaXMudWkud2lkdGggfHwgdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IHRoaXMudWkuZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogdGhpcy51aS5maWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLmZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cbiAgICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuXG4gICAgdGhpcy5pc0FzeW5jID0gISF0aGlzLnVpLmFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5mb3JtUHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgZmxhdE1hcChcbiAgICAgICAgaW5wdXQgPT5cbiAgICAgICAgICB0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpLFxuICAgICAgKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oRU1BSUxTVUZGSVgsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxuICAgICAgICAgIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhLFxuICAgICAgICAgIHRoaXMuc2NoZW1hLnJlYWRPbmx5XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSxcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVtYWlsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gb2YoXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxuICAgICAgICA/IFtdXG4gICAgICAgIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1jYXNjYWRlclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxuICAgICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwidWkuY2hhbmdlT25TZWxlY3RcIlxuICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXG4gICAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxuICAgICAgW256TWVudUNsYXNzTmFtZV09XCJ1aS5tZW51Q2xhc3NOYW1lXCJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxuICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5XCJcbiAgICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eVwiXG4gICAgICBbbnpMb2FkRGF0YV09XCJsb2FkRGF0YVwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpTaG93QXJyb3ddPVwic2hvd0Fycm93XCJcbiAgICAgIFtuelNob3dJbnB1dF09XCJzaG93SW5wdXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIChuekNsZWFyKT1cIl9jbGVhcigkZXZlbnQpXCJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiX3Zpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdGlvbkNoYW5nZSk9XCJfc2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LWNhc2NhZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XG4gIHNob3dBcnJvdzogYm9vbGVhbjtcbiAgc2hvd0lucHV0OiBib29sZWFuO1xuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbG9hZERhdGE6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGV4dCA9IHRoaXMudWkuY2xlYXJUZXh0IHx8ICfDpsK4woXDqcKZwqQnO1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHRoaXMudWkuc2hvd0Fycm93LCB0cnVlKTtcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbCh0aGlzLnVpLnNob3dJbnB1dCwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdGhpcy51aS50cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcbiAgICBpZiAoISF0aGlzLnVpLmFzeW5jRGF0YSkge1xuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICh0aGlzLnVpLmFzeW5jRGF0YSBhcyBhbnkpKG5vZGUsIGluZGV4LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMudWkudmlzaWJsZUNoYW5nZSAmJiB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMudWkuY2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UgJiYgdGhpcy51aS5zZWxlY3Rpb25DaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuc2VsZWN0ICYmIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NsZWFyKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuY2xlYXIgJiYgdGhpcy51aS5jbGVhcihvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIGdldEVudW0gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOek1lbnRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgICAgPG56LW1lbnRpb24gI21lbnRpb25zXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxuICAgICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxuICAgICAgICBbbnpQcmVmaXhdPVwiaS5wcmVmaXhcIlxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDxpbnB1dCBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICA8dGV4dGFyZWEgbnpNZW50aW9uVHJpZ2dlciBuei1pbnB1dFxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW256QXV0b3NpemVdPVwidWkuYXV0b3NpemVcIj5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC9uei1tZW50aW9uPlxuXG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gICAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbWVudGlvbnMnKSBtZW50aW9uQ2hpbGQ6IE56TWVudGlvbkNvbXBvbmVudDtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB0aGlzLnVpLnZhbHVlV2l0aCB8fCAoaXRlbSA9PiBpdGVtLmxhYmVsKSxcbiAgICAgIG5vdEZvdW5kQ29udGVudDpcbiAgICAgICAgdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOlwozCucOpwoXCjcOnwrvCk8Omwp7CnMOvwrzCjMOowr3Cu8OmwpXCssOnwqnCusOmwqDCvMOlwq7CjMOmwojCkMOowr7Ck8OlwoXCpScsXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMudWkucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiB0aGlzLnVpLnByZWZpeCB8fCAnQCcsXG4gICAgfTtcbiAgICBjb25zdCBtaW4gPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTEsXG4gICAgICBtYXggPVxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5tYXhpbXVtIDogLTE7XG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xuICAgICAgdGhpcy51aS52YWxpZGF0b3IgPSAoXG4gICAgICAgIHZhbHVlOiBhbnksXG4gICAgICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxuICAgICAgICBmb3JtOiBQcm9wZXJ0eUdyb3VwLFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwrDCkcOmwo/CkMOlwo/CiiAke21pbn0gw6bCrMKhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDDpsKcwoDDpcKkwprDpsKPwpDDpcKPwoogJHttYXh9IMOmwqzCoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0KG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdCkgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfc2VhcmNoKG9wdGlvbjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxuICAgICAgLnBpcGUodGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLCBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAge3sgdmFsdWUgfHwgdWkuZGVmYXVsdFRleHQgfHwgJy0nIH19XG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVpLl9yZXF1aXJlZCA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldC5mYWN0b3J5JztcblxuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi90ZXh0L3RleHQud2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIE56V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCBPYmplY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgQXJyYXlXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dCcsIFRleHRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgRGF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFRpbWVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBCb29sZWFuV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRhcmVhV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyZWUtc2VsZWN0JywgVHJlZVNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGFnJywgVGFnV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cGxvYWQnLCBVcGxvYWRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyYW5zZmVyJywgVHJhbnNmZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NsaWRlcicsIFNsaWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmF0ZScsIFJhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2F1dG9jb21wbGV0ZScsIEF1dG9Db21wbGV0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2FzY2FkZXInLCBDYXNjYWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbWVudGlvbicsIE1lbnRpb25XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2N1c3RvbScsIEN1c3RvbVdpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNGRml4ZWREaXJlY3RpdmUgfSBmcm9tICcuL3NmLWZpeGVkLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNGQ29tcG9uZW50LFxuICBTRkl0ZW1Db21wb25lbnQsXG4gIFNGSXRlbVdyYXBDb21wb25lbnQsXG4gIFNGVGVtcGxhdGVEaXJlY3RpdmUsXG4gIFNGRml4ZWREaXJlY3RpdmUsXG5dO1xuXG4vLyAjcmVnaW9uIHdpZGdldHNcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcblxuY29uc3QgV0lER0VUUyA9IFtcbiAgT2JqZWN0V2lkZ2V0LFxuICBBcnJheVdpZGdldCxcbiAgU3RyaW5nV2lkZ2V0LFxuICBOdW1iZXJXaWRnZXQsXG4gIERhdGVXaWRnZXQsXG4gIFRpbWVXaWRnZXQsXG4gIFJhZGlvV2lkZ2V0LFxuICBDaGVja2JveFdpZGdldCxcbiAgQm9vbGVhbldpZGdldCxcbiAgVGV4dGFyZWFXaWRnZXQsXG4gIFNlbGVjdFdpZGdldCxcbiAgVHJlZVNlbGVjdFdpZGdldCxcbiAgVGFnV2lkZ2V0LFxuICBVcGxvYWRXaWRnZXQsXG4gIFRyYW5zZmVyV2lkZ2V0LFxuICBTbGlkZXJXaWRnZXQsXG4gIFJhdGVXaWRnZXQsXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcbiAgQ2FzY2FkZXJXaWRnZXQsXG4gIE1lbnRpb25XaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldCxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uV0lER0VUU10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLldJREdFVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlbG9uRm9ybUNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogV2lkZ2V0UmVnaXN0cnksIHVzZUNsYXNzOiBOeldpZGdldFJlZ2lzdHJ5IH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFhLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQVUsc0NBQVE7SUFDaEMsTUFBTSxFQUFrQiwyQ0FBYTtJQUNyQyxlQUFlLEVBQVMscUNBQVk7SUFDcEMsb0JBQW9CLEVBQUksd0RBQVc7SUFDbkMsS0FBSyxFQUFtQixpRkFBcUI7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