import { __decorate, __metadata, __rest } from 'tslib';
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
const ERRORSDEFAULT = {
    'false schema': `布尔模式出错`,
    '$ref': `无法找到引用{ref}`,
    additionalItems: `不允许超过{ref}`,
    additionalProperties: `不允许有额外的属性`,
    anyOf: `数据应为 anyOf 所指定的其中一个`,
    dependencies: `应当拥有属性{property}的依赖属性{deps}`,
    enum: `应当是预设定的枚举值之一`,
    format: `格式不正确`,
    // `应当匹配格式 "{format}"`,
    type: `类型应当是 {type}`,
    required: `必填项`,
    maxLength: `至多 {limit} 个字符`,
    minLength: `至少 {limit} 个字符以上`,
    minimum: `必须 {comparison}{limit}`,
    formatMinimum: `必须 {comparison}{limit}`,
    maximum: `必须 {comparison}{limit}`,
    formatMaximum: `必须 {comparison}{limit}`,
    maxItems: `不应多于 {limit} 个项`,
    minItems: `不应少于 {limit} 个项`,
    maxProperties: `不应多于 {limit} 个属性`,
    minProperties: `不应少于 {limit} 个属性`,
    multipleOf: `应当是 {multipleOf} 的整数倍`,
    not: `不应当匹配 "not" schema`,
    oneOf: `只能匹配一个 "oneOf" 中的 schema`,
    pattern: `数据格式不正确`,
    uniqueItems: `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
    custom: `格式不正确`,
    propertyNames: `属性名 "{propertyName}" 无效`,
    patternRequired: `应当有属性匹配模式 {missingPattern}`,
    switch: `由于 {caseIndex} 失败，未通过 "switch" 校验`,
    const: `应当等于常量`,
    contains: `应当包含一个有效项`,
    formatExclusiveMaximum: `formatExclusiveMaximum 应当是布尔值`,
    formatExclusiveMinimum: `formatExclusiveMinimum 应当是布尔值`,
    if: `应当匹配模式 "{failingKeyword}"`,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelonFormConfig {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const FORMATMAPS = {
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
    return value == null ? defaultValue : `${value}` !== 'false';
}
/**
 * @param {...?} args
 * @return {?}
 */
function di(...args) {
    // tslint:disable-next-line:no-console
    console.warn(...args);
}
/**
 * 根据 `$ref` 查找 `definitions`
 * @param {?} $ref
 * @param {?} definitions
 * @return {?}
 */
function findSchemaDefinition($ref, definitions) {
    /** @type {?} */
    const match = /^#\/definitions\/(.*)$/.exec($ref);
    if (match && match[1]) {
        /** @type {?} */
        const parts = match[1].split('/');
        /** @type {?} */
        let current = definitions;
        for (let part of parts) {
            part = part.replace(/~1/g, '/').replace(/~0/g, '~');
            if (current.hasOwnProperty(part)) {
                current = current[part];
            }
            else {
                throw new Error(`Could not find a definition for ${$ref}.`);
            }
        }
        return current;
    }
    throw new Error(`Could not find a definition for ${$ref}.`);
}
/**
 * 取回Schema，并处理 `$ref` 的关系
 * @param {?} schema
 * @param {?=} definitions
 * @return {?}
 */
function retrieveSchema(schema, definitions = {}) {
    if (schema.hasOwnProperty('$ref')) {
        /** @type {?} */
        const $refSchema = findSchemaDefinition(schema.$ref, definitions);
        const localSchema = __rest(schema, ["$ref"]);
        return retrieveSchema(Object.assign({}, $refSchema, localSchema), definitions);
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
        throw new Error(`if: does not contain 'properties'`);
    /** @type {?} */
    const allKeys = Object.keys(schema.properties);
    /** @type {?} */
    const ifKeys = Object.keys(schema.if.properties);
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, schema.then.required);
    schema.required = schema.required.concat(schema.then.required);
    /** @type {?} */
    const hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, schema.else.required);
        schema.required = schema.required.concat(schema.else.required);
    }
    /** @type {?} */
    const visibleIf = {};
    /** @type {?} */
    const visibleElse = {};
    ifKeys.forEach(key => {
        /** @type {?} */
        const cond = schema.if.properties[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = (value) => !cond.includes(value);
    });
    schema.then.required.forEach(key => (ui[`$${key}`].visibleIf = visibleIf));
    if (hasElse)
        schema.else.required.forEach(key => (ui[`$${key}`].visibleIf = visibleElse));
    return schema;
}
/**
 * @param {?} keys
 * @param {?} detectKeys
 * @return {?}
 */
function detectKey(keys, detectKeys) {
    detectKeys.forEach(key => {
        if (!keys.includes(key)) {
            throw new Error(`if: properties does not contain '${key}'`);
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
    const arrayToHash = arr => arr.reduce((prev, curr) => {
        prev[curr] = true;
        return prev;
    }, {});
    /** @type {?} */
    const errorPropList = arr => `property [${arr.join(`', '`)}]`;
    /** @type {?} */
    const propertyHash = arrayToHash(properties);
    /** @type {?} */
    const orderHash = arrayToHash(order);
    /** @type {?} */
    const extraneous = order.filter(prop => prop !== '*' && !propertyHash[prop]);
    if (extraneous.length) {
        throw new Error(`ui schema order list contains extraneous ${errorPropList(extraneous)}`);
    }
    /** @type {?} */
    const rest = properties.filter(prop => !orderHash[prop]);
    /** @type {?} */
    const restIndex = order.indexOf('*');
    if (restIndex === -1) {
        if (rest.length) {
            throw new Error(`ui schema order list does not contain ${errorPropList(rest)}`);
        }
        return order;
    }
    if (restIndex !== order.lastIndexOf('*')) {
        throw new Error('ui schema order list contains more than one wildcard item');
    }
    /** @type {?} */
    const complete = [...order];
    complete.splice(restIndex, 1, ...rest);
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
        list = list.map((item) => {
            return /** @type {?} */ ({ label: item, value: item });
        });
    }
    if (formData) {
        if (!Array.isArray(formData))
            formData = [formData];
        list.forEach((item) => {
            if (~formData.indexOf(item.value))
                item.checked = true;
        });
    }
    // fix disabled status
    if (readOnly) {
        list.forEach((item) => item.disabled = true);
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
            .pipe(takeWhile(() => ui["__destroy"] !== true), map(list => getEnum(list, formData, schema.readOnly)));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TerminatorService {
    constructor() {
        this.onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.onDestroy.next(true);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FormProperty {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?} parent
     * @param {?} path
     * @param {?} options
     */
    constructor(schemaValidatorFactory, schema, ui, formData, parent, path, options) {
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
    /**
     * @return {?}
     */
    get valueChanges() {
        return this._valueChanges;
    }
    /**
     * @return {?}
     */
    get errorsChanges() {
        return this._errorsChanges;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.schema.type;
    }
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
    get root() {
        return this._root || /** @type {?} */ ((/** @type {?} */ (this)));
    }
    /**
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get errors() {
        return this._errors;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this._errors === null;
    }
    /**
     * 更新值且校验数据
     *
     * @param {?=} onlySelf
     * @param {?=} emitValueEvent
     * @param {?=} emitValidator
     * @return {?}
     */
    updateValueAndValidity(onlySelf = false, emitValueEvent = true, emitValidator = true) {
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
    }
    /**
     * 根据路径搜索表单属性
     * @param {?} path
     * @return {?}
     */
    searchProperty(path) {
        /** @type {?} */
        let prop = this;
        /** @type {?} */
        let base = null;
        /** @type {?} */
        let result = null;
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
    }
    /**
     * 查找根表单属性
     * @return {?}
     */
    findRoot() {
        /** @type {?} */
        let property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return /** @type {?} */ (property);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isEmptyData(value) {
        if (isBlank(value))
            return true;
        switch (this.type) {
            case 'string':
                return ('' + value).length === 0;
        }
        return false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _runValidation() {
        /** @type {?} */
        let errors;
        /** @type {?} */
        const isEmpty = this.isEmptyData(this._value);
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
        const customValidator = (/** @type {?} */ (this.ui)).validator;
        if (typeof customValidator === 'function') {
            /** @type {?} */
            const customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
                customErrors.subscribe(res => {
                    this.setCustomErrors(errors, res);
                    this.widget.detectChanges();
                });
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    }
    /**
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    setCustomErrors(errors, list) {
        /** @type {?} */
        const hasCustomError = list != null && list.length > 0;
        if (hasCustomError) {
            list.forEach((err, idx) => {
                if (!err.message)
                    throw new Error(`自定义校验器必须至少返回一个 'message' 属性，用于表示错误文本`);
                err._custom = true;
            });
        }
        this._errors = this.mergeErrors(errors, list);
        this.setErrors(this._errors);
    }
    /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    mergeErrors(errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat(...newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    }
    /**
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    setErrors(errors, emitFormat = true) {
        if (emitFormat && errors && !this.ui["onlyVisual"]) {
            errors = errors.map((err) => {
                /** @type {?} */
                let message = err._custom === true && err.message
                    ? err.message
                    : (this.ui["errors"] || {})[err.keyword] ||
                        this.options.errors[err.keyword] ||
                        ``;
                if (message && typeof message === 'function')
                    message = /** @type {?} */ (message(err));
                if (message) {
                    if (~(/** @type {?} */ (message)).indexOf('{')) {
                        message = (/** @type {?} */ (message)).replace(/{([\.a-z0-9]+)}/g, (v, key) => err.params[key] || '');
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
    }
    /**
     * @param {?} errors
     * @param {?} path
     * @return {?}
     */
    setParentAndPlatErrors(errors, path) {
        this._objErrors[path] = errors;
        /** @type {?} */
        const platErrors = [];
        Object.keys(this._objErrors).forEach(p => {
            /** @type {?} */
            const property = this.searchProperty(p);
            if (property && !property.visible)
                return;
            platErrors.push(...this._objErrors[p]);
        });
        this.setErrors(platErrors, false);
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setVisible(visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 部分数据源来自 reset
        this.resetValue(this.value, true);
    }
    /**
     * @return {?}
     */
    _bindVisibility() {
        /** @type {?} */
        const visibleIf = (/** @type {?} */ (this.ui)).visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            /** @type {?} */
            const propertiesBinding = [];
            for (const dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    /** @type {?} */
                    const property = this.searchProperty(dependencyPath);
                    if (property) {
                        /** @type {?} */
                        const valueCheck = property.valueChanges.pipe(map((value) => {
                            /** @type {?} */
                            const vi = visibleIf[dependencyPath];
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
                        const visibilityCheck = property._visibilityChanges;
                        /** @type {?} */
                        const and = combineLatest(valueCheck, visibilityCheck).pipe(map(results => results[0] && results[1]));
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
                    }
                }
            }
            combineLatest(propertiesBinding)
                .pipe(map(values => values.indexOf(true) !== -1), distinctUntilChanged())
                .subscribe(visible => this.setVisible(visible));
        }
    }
}
/**
 * @abstract
 */
class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        /** @type {?} */
        const subPathIdx = path.indexOf('/');
        /** @type {?} */
        const propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        /** @type {?} */
        let property = this.properties[propertyId];
        if (property !== null &&
            subPathIdx !== -1 &&
            property instanceof PropertyGroup) {
            /** @type {?} */
            const subPath = path.substr(subPathIdx + 1);
            property = (/** @type {?} */ (property)).getProperty(subPath);
        }
        return property;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChild(fn) {
        for (const propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                /** @type {?} */
                const property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChildRecursive(fn) {
        this.forEachChild(child => {
            fn(child);
            if (child instanceof PropertyGroup) {
                (/** @type {?} */ (child)).forEachChildRecursive(fn);
            }
        });
    }
    /**
     * @return {?}
     */
    _bindVisibility() {
        super._bindVisibility();
        this._bindVisibilityRecursive();
    }
    /**
     * @return {?}
     */
    _bindVisibilityRecursive() {
        this.forEachChildRecursive(property => {
            property._bindVisibility();
        });
    }
    /**
     * @return {?}
     */
    isRoot() {
        return this === this.root;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AtomicProperty extends FormProperty {
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
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
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    /**
     * @return {?}
     */
    _updateValue() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NumberProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return null;
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
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
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StringProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return null;
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this._value = value == null ? '' : value;
        this.updateValueAndValidity(onlySelf, true);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BooleanProperty extends AtomicProperty {
    /**
     * @return {?}
     */
    fallbackValue() {
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ArrayProperty extends PropertyGroup {
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
    constructor(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this.tick = 1;
        this.properties = [];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        /** @type {?} */
        const subPathIdx = path.indexOf('/');
        /** @type {?} */
        const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        /** @type {?} */
        const list = /** @type {?} */ (this.properties);
        if (isNaN(pos) || pos >= list.length)
            return undefined;
        /** @type {?} */
        const subPath = path.substr(subPathIdx + 1);
        return list[pos].getProperty(subPath);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this.properties = [];
        this.clearErrors();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
        this._value = value || this.schema.default || [];
        this.properties = [];
        this.clearErrors();
        this.resetProperties(this._value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return true;
    }
    /**
     * @return {?}
     */
    _updateValue() {
        /** @type {?} */
        const value = [];
        this.forEachChild((property, _) => {
            if (property.visible && property._hasValue()) {
                value.push(Object.assign({}, property.formData, property.value));
            }
        });
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addProperty(value) {
        /** @type {?} */
        const newProperty = /** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui["$items"], value, this));
        (/** @type {?} */ (this.properties)).push(newProperty);
        return newProperty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetProperties(value) {
        for (const item of value) {
            /** @type {?} */
            const property = this.addProperty(item);
            property.resetValue(item, true);
        }
    }
    /**
     * @param {?=} path
     * @return {?}
     */
    clearErrors(path) {
        if (path)
            delete this._objErrors[path];
        else
            this._objErrors = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    add(value) {
        /** @type {?} */
        const newProperty = this.addProperty(value);
        newProperty.resetValue(value, false);
        return newProperty;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        /** @type {?} */
        const list = /** @type {?} */ (this.properties);
        this.clearErrors(list[index].path);
        list.splice(index, 1);
        this.updateValueAndValidity(false, true);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ObjectProperty extends PropertyGroup {
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
    constructor(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this._propertiesId = [];
        this.createProperties();
    }
    /**
     * @return {?}
     */
    get propertiesId() {
        return this._propertiesId;
    }
    /**
     * @return {?}
     */
    createProperties() {
        this.properties = {};
        this._propertiesId = [];
        /** @type {?} */
        let orderedProperties;
        try {
            orderedProperties = orderProperties(Object.keys(this.schema.properties), /** @type {?} */ (this.ui["order"]));
        }
        catch (e) {
            console.error(`Invalid ${this.schema.title || 'root'} object field configuration:`, e);
        }
        orderedProperties.forEach(propertyId => {
            this.properties[propertyId] = this.formPropertyFactory.createProperty(this.schema.properties[propertyId], this.ui['$' + propertyId], (this.formData || {})[propertyId], this, propertyId);
            this._propertiesId.push(propertyId);
        });
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        for (const propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
        value = value || this.schema.default || {};
        // tslint:disable-next-line:forin
        for (const propertyId in this.schema.properties) {
            this.properties[propertyId].resetValue(value[propertyId], true);
        }
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.value != null && !!Object.keys(this.value).length;
    }
    /**
     * @return {?}
     */
    _updateValue() {
        /** @type {?} */
        const value = {};
        this.forEachChild((property, propertyId) => {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormPropertyFactory {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} options
     */
    constructor(schemaValidatorFactory, options) {
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
    createProperty(schema, ui, formData, parent = null, propertyId) {
        /** @type {?} */
        let newProperty = null;
        /** @type {?} */
        let path = '';
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
            const refSchema = retrieveSchema(schema, parent.root.schema.definitions);
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
                    throw new TypeError(`Undefined type ${schema.type}`);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    }
    /**
     * @param {?} rootProperty
     * @return {?}
     */
    initializeRoot(rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SchemaValidatorFactory {
}
class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    /**
     * @param {?} options
     */
    constructor(options) {
        super();
        this.options = options;
        this.ajv = new Ajv(Object.assign({}, options.ajv, {
            errorDataPath: 'property',
            allErrors: true,
            jsonPointers: true,
        }));
        this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
        this.ajv.addFormat('color', /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
        this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
        this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
    }
    /**
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    createValidatorFn(schema, extraOptions) {
        /** @type {?} */
        const ingoreKeywords = []
            .concat(this.options.ingoreKeywords)
            .concat(extraOptions.ingoreKeywords);
        return (value) => {
            try {
                this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
            }
            /** @type {?} */
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
            }
            return errors;
        };
    }
}
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: DelonFormConfig, decorators: [{ type: Optional }, { type: Inject, args: [DelonFormConfig,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WidgetRegistry {
    constructor() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    setDefault(widget) {
        this.defaultWidget = widget;
    }
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    register(type, widget) {
        this.widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    has(type) {
        return this.widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getType(type) {
        if (this.has(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }
}
class WidgetFactory {
    /**
     * @param {?} registry
     * @param {?} resolver
     */
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            console.warn(`No widget for type "${type}"`);
        }
        /** @type {?} */
        const componentClass = this.registry.getType(type);
        /** @type {?} */
        const componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    }
}
WidgetFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetFactory.ctorParameters = () => [
    { type: WidgetRegistry },
    { type: ComponentFactoryResolver }
];

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
class SFComponent {
    /**
     * @param {?} formPropertyFactory
     * @param {?} terminator
     * @param {?} options
     * @param {?} cd
     * @param {?} i18n
     */
    constructor(formPropertyFactory, terminator, options, cd, i18n) {
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
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('sf');
            if (this._inited) {
                this.coverButtonProperty();
                this.cd.detectChanges();
            }
        });
    }
    /**
     * 表单模式
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
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
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * 表单校验状态
     * @return {?}
     */
    get valid() {
        return this._valid;
    }
    /**
     * 表单值
     * @return {?}
     */
    get value() {
        return this._item;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.liveValidate)
            this.validator();
        if (!this.valid)
            return;
        this.formSubmit.emit(this.value);
    }
    /**
     * @return {?}
     */
    coverProperty() {
        /** @type {?} */
        const isHorizontal = this.layout === 'horizontal';
        /** @type {?} */
        const _schema = deepCopy(this.schema);
        const { definitions } = _schema;
        /** @type {?} */
        const inFn = (schema, parentSchema, uiSchema, parentUiSchema, uiRes) => {
            Object.keys(schema.properties).forEach(key => {
                /** @type {?} */
                const uiKey = `$${key}`;
                /** @type {?} */
                const property = retrieveSchema(/** @type {?} */ (schema.properties[key]), definitions);
                /** @type {?} */
                const ui = /** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                    Array.isArray(property.enum) &&
                    property.enum.length > 0
                    ? { widget: 'select' }
                    : null, this._defUi, property.ui, uiSchema[uiKey]));
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
                    const dateEndProperty = parentSchema.properties[ui["end"]];
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
        const inIfFn = (schema, ui) => {
            Object.keys(schema.properties).forEach(key => {
                /** @type {?} */
                const property = schema.properties[key];
                /** @type {?} */
                const uiKey = `$${key}`;
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
    }
    /**
     * @return {?}
     */
    coverButtonProperty() {
        this._btn = Object.assign({ render: {} }, this.locale, this.options.button, this.button);
        /** @type {?} */
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        if (this.layout === 'horizontal') {
            /** @type {?} */
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._inited = true;
        this.validator();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.refreshSchema();
    }
    /**
     * \@internal
     * @param {?} path
     * @param {?} templateRef
     * @return {?}
     */
    _addTpl(path, templateRef) {
        /** @type {?} */
        const property = this.rootProperty.searchProperty(path);
        if (!property) {
            console.warn(`未找到路径：${path}`);
            return;
        }
        if (this._renders.has(path)) {
            console.warn(`已经存在相同自定义路径：${path}`);
            return;
        }
        this._renders.set(path, templateRef);
        /** @type {?} */
        const pui = this.rootProperty.searchProperty(path).ui;
        pui._render = templateRef;
    }
    /**
     * @return {?}
     */
    attachCustomRender() {
        this._renders.forEach((tpl, path) => {
            /** @type {?} */
            const pui = this.rootProperty.searchProperty(path).ui;
            if (!pui._render)
                pui._render = tpl;
        });
    }
    /**
     * @return {?}
     */
    validator() {
        this.rootProperty._runValidation();
        /** @type {?} */
        const errors = this.rootProperty.errors;
        this._valid = !(errors && errors.length);
        if (!this._valid)
            this.formError.emit(errors);
        this.cd.detectChanges();
    }
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {?}
     */
    refreshSchema(newSchema, newUI) {
        if (newSchema)
            this.schema = newSchema;
        if (newUI)
            this.ui = newUI;
        if (!this.schema || typeof this.schema.properties === 'undefined')
            throw new Error(`Invalid Schema`);
        if (this.schema.ui && typeof this.schema.ui === 'string')
            throw new Error(`Don't support string with root ui property`);
        this.schema.type = 'object';
        this._formData = Object.assign({}, this.formData);
        if (this._inited)
            this.terminator.destroy();
        this.coverProperty();
        this.coverButtonProperty();
        this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData);
        this.attachCustomRender();
        this.rootProperty.valueChanges.subscribe(value => {
            this._item = Object.assign({}, this.formData, value);
            this.formChange.emit(this._item);
        });
        this.rootProperty.errorsChanges.subscribe(errors => {
            this._valid = !(errors && errors.length);
            this.formError.emit(errors);
            this.cd.detectChanges();
        });
        this.reset();
    }
    /**
     * 重置表单
     * @param {?=} emit
     * @return {?}
     */
    reset(emit = false) {
        this.rootProperty.resetValue(this.formData, false);
        Promise.resolve().then(() => this.cd.detectChanges());
        if (emit) {
            this.formReset.emit(this.value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.terminator.destroy();
        this.i18n$.unsubscribe();
    }
}
SFComponent.decorators = [
    { type: Component, args: [{
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
                    '[class.sf-search]': `mode === 'search'`,
                    '[class.sf-edit]': `mode === 'edit'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SFComponent.ctorParameters = () => [
    { type: FormPropertyFactory },
    { type: TerminatorService },
    { type: DelonFormConfig },
    { type: ChangeDetectorRef },
    { type: DelonLocaleService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId = 0;
class SFItemComponent {
    /**
     * @param {?} widgetFactory
     * @param {?} terminator
     */
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.widget = null;
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    onWidgetInstanciated(widget) {
        this.widget = widget;
        /** @type {?} */
        const id = `_sf-${nextUniqueId++}`;
        /** @type {?} */
        const ui = /** @type {?} */ (this.formProperty.ui);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.widget.firstVisual = ui.firstVisual;
        this.formProperty.widget = widget;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.terminator.onDestroy.subscribe(() => {
            this.ngOnDestroy();
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, /** @type {?} */ ((this.formProperty.ui["widget"] || this.formProperty.schema.type)));
        this.onWidgetInstanciated(this.ref.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.formProperty.ui["__destroy"] = true;
        this.ref.destroy();
    }
}
SFItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                template: `<ng-template #target></ng-template>`
            }] }
];
/** @nocollapse */
SFItemComponent.ctorParameters = () => [
    { type: WidgetFactory },
    { type: TerminatorService }
];
SFItemComponent.propDecorators = {
    formProperty: [{ type: Input }],
    container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SFFixedDirective {
    /**
     * @param {?} er
     * @param {?} render
     */
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = /** @type {?} */ (er.nativeElement);
    }
    /**
     * @return {?}
     */
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        /** @type {?} */
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf-fixed');
        /** @type {?} */
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        /** @type {?} */
        const unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'width', unit);
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
        }
        else {
            /** @type {?} */
            const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper');
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
}
SFFixedDirective.decorators = [
    { type: Directive, args: [{ selector: '[fixed-label]' },] }
];
/** @nocollapse */
SFFixedDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SFFixedDirective.propDecorators = {
    num: [{ type: Input, args: ['fixed-label',] }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SFFixedDirective.prototype, "num", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SFItemWrapComponent {
}
SFItemWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item-wrap',
                template: `
  <nz-form-item [style.width.px]="ui.width">
    <nz-col *ngIf="showTitle" [nzSpan]="ui.spanLabel" class="ant-form-item-label">
      <label [attr.for]="id" [class.ant-form-item-required]="ui._required">
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl" [nzOffset]="ui.offsetControl">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <ng-content></ng-content>
        <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
        <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>
      </div>
    </nz-col>
  </nz-form-item>`
            }] }
];
SFItemWrapComponent.propDecorators = {
    id: [{ type: Input }],
    schema: [{ type: Input }],
    ui: [{ type: Input }],
    showError: [{ type: Input }],
    error: [{ type: Input }],
    showTitle: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SFTemplateDirective {
    /**
     * @param {?} templateRef
     * @param {?} table
     */
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.table._addTpl(this.path.startsWith('/') ? this.path : `/` + this.path, this.templateRef);
    }
}
SFTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sf-template]',
            },] }
];
/** @nocollapse */
SFTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SFComponent }
];
SFTemplateDirective.propDecorators = {
    path: [{ type: Input, args: ['sf-template',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
class Widget {
    /**
     * @param {?} cd
     * @param {?=} sfComp
     */
    constructor(cd, sfComp) {
        this.cd = cd;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
        this.firstVisual = false;
    }
    /**
     * @return {?}
     */
    get cls() {
        return this.ui.class || '';
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.schema.readOnly === true)
            return true;
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(filter(w => w != null))
            .subscribe((errors) => {
            if (this.ui.debug)
                di('errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                if (this.ui["__destroy"] !== true)
                    this.cd.detectChanges();
            }
            this.firstVisual = true;
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.formProperty.setValue(value, false);
        if (this.ui.debug) {
            di('valueChanges', this.formProperty.path, this.formProperty);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.formProperty.value;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cd.detectChanges();
        this.formProperty.root.widget.cd.markForCheck();
    }
}
/** @nocollapse */
Widget.ctorParameters = () => [
    { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
    { type: SFComponent, decorators: [{ type: Inject, args: [SFComponent,] }] }
];
Widget.propDecorators = {
    cls: [{ type: HostBinding, args: ['class',] }]
};
class ControlWidget extends Widget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
}
class ArrayLayoutWidget extends Widget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges.subscribe(() => this.cd.detectChanges());
    }
}
class ObjectLayoutWidget extends Widget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges.subscribe(() => this.cd.detectChanges());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ObjectWidget extends ObjectLayoutWidget {
    constructor() {
        super(...arguments);
        this.list = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.grid = this.ui.grid;
        /** @type {?} */
        const list = [];
        for (const key of this.formProperty.propertiesId) {
            /** @type {?} */
            const property = /** @type {?} */ (this.formProperty.properties[key]);
            /** @type {?} */
            const item = {
                property,
                grid: property.ui["grid"] || this.grid || {},
                spanLabelFixed: property.ui["spanLabelFixed"],
                show: property.ui["hidden"] === false
            };
            list.push(item);
        }
        this.list = list;
    }
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-object',
                template: `
  <ng-container *ngIf="grid; else noGrid">
    <nz-row [nzGutter]="grid.gutter">
      <ng-container *ngFor="let i of list">
        <ng-container *ngIf="i.property.visible && i.show">
          <nz-col
            [nzSpan]="i.grid.span" [nzOffset]="i.grid.offset"
            [nzXs]="i.grid.xs" [nzSm]="i.grid.sm" [nzMd]="i.grid.md"
            [nzLg]="i.grid.lg" [nzXl]="i.grid.xl" [nzXXl]="i.grid.xxl">
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
          </nz-col>
        </ng-container>
      </ng-container>
    </nz-row>
  </ng-container>
  <ng-template #noGrid>
    <ng-container *ngFor="let i of list">
      <ng-container *ngIf="i.property.visible && i.show">
        <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
      </ng-container>
    </ng-container>
  </ng-template>`,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    /**
     * @return {?}
     */
    get addDisabled() {
        return (this.schema.maxItems &&
            (/** @type {?} */ (this.formProperty.properties)).length >= this.schema.maxItems);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ui.grid && this.ui.grid.arraySpan)
            this.arraySpan = this.ui.grid.arraySpan;
        this.addTitle = this.ui.addTitle || '添加';
        this.addType = this.ui.addType || 'dashed';
        this.removeTitle =
            this.ui.removable === false ? null : this.ui.removeTitle || '移除';
    }
    /**
     * @return {?}
     */
    addItem() {
        this.formProperty.add(null);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItem(index) {
        this.formProperty.remove(index);
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array',
                template: `
  <nz-form-item>
    <nz-col *ngIf="schema.title" [nzSpan]="ui.spanLabel" class="ant-form-item-label">
      <label>
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
      <div class="add">
        <button nz-button [nzType]="addType" [disabled]="addDisabled" (click)="addItem()" [innerHTML]="addTitle"></button>
      </div>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl" [nzOffset]="ui.offsetControl">
      <div class="ant-form-item-control" [class.has-error]="showError">

        <nz-row class="sf-array-container">
          <ng-container *ngFor="let i of formProperty.properties; let idx=index">
            <nz-col *ngIf="i.visible && !i.ui.hidden" [nzSpan]="arraySpan" [attr.data-index]="idx" class="sf-array-item">
              <nz-card>
                <sf-item [formProperty]="i"></sf-item>
                <span *ngIf="removeTitle" class="remove" (click)="removeItem(idx)" [attr.title]="removeTitle">
                  <i class="anticon anticon-delete"></i>
                </span>
              </nz-card>
            </nz-col>
          </ng-container>
        </nz-row>

        <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
        <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>

      </div>
    </nz-col>
  </nz-form-item>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StringWidget extends ControlWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.type = !!(this.ui["addOnAfter"] || this.ui["addOnBefore"] || this.ui["addOnAfterIcon"] || this.ui["addOnBeforeIcon"] || this.ui["prefix"] || this.ui["prefixIcon"] || this.ui["suffix"] || this.ui["suffixIcon"])
            ? 'addon'
            : '';
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <ng-template #ipt>
      <input nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus">
    </ng-template>

    <ng-container *ngIf="type === 'addon'; else ipt">
      <nz-input-group
        [nzAddOnBefore]="ui.addOnBefore" [nzAddOnAfter]="ui.addOnAfter"
        [nzAddOnBeforeIcon]="ui.addOnBeforeIcon" [nzAddOnAfterIcon]="ui.addOnAfterIcon"
        [nzPrefix]="ui.prefix" [nzPrefixIcon]="ui.prefixIcon"
        [nzSuffix]="ui.suffix" [nzSuffixIcon]="ui.suffixIcon">
        <ng-template [ngTemplateOutlet]="ipt"></ng-template>
      </nz-input-group>
    </ng-container>
  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NumberWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.formatter = value => value;
        this.parser = value => value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { schema, ui } = this;
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
            ui["formatter"] = value => `${ui["prefix"]} ${value}`;
            ui["parser"] = value => value.replace(`${ui["prefix"]} `, '');
        }
        if (ui["unit"] != null) {
            ui["formatter"] = value => `${value} ${ui["unit"]}`;
            ui["parser"] = value => value.replace(` ${ui["unit"]}`, '');
        }
        if (ui["formatter"])
            this.formatter = ui["formatter"];
        if (ui["parser"])
            this.parser = ui["parser"];
    }
}
NumberWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-number',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-input-number
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      [nzPrecision]="ui.precision"
      [nzPlaceHolder]="ui.placeholder || ''">
    </nz-input-number>
  </sf-item-wrap>`,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
        this.flatRange = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const ui = this.ui;
        this.mode = ui["mode"] || 'date';
        this.flatRange = ui["end"] != null;
        if (this.flatRange) {
            this.mode = 'range';
        }
        if (!ui["displayFormat"]) {
            switch (this.mode) {
                case 'month':
                    this.displayFormat = `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = `yyyy-ww`;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.endProperty.formData];
        }
        else {
            this.displayValue = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        if (value == null) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        /** @type {?} */
        const res = Array.isArray(value)
            ? value.map(d => format(d, this.format))
            : format(value, this.format);
        if (this.flatRange) {
            this.setEnd(res[1]);
            this.setValue(res[0]);
        }
        else {
            this.setValue(res);
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    _openChange(status) {
        if (this.ui["onOpenChange"])
            this.ui["onOpenChange"](status);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _ok(value) {
        if (this.ui["onOk"])
            this.ui["onOk"](value);
    }
    /**
     * @return {?}
     */
    get endProperty() {
        return this.formProperty.parent.properties[this.ui["end"]];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setEnd(value) {
        this.endProperty.setValue(value, true);
    }
}
DateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-date',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ng-container [ngSwitch]="mode">

      <nz-month-picker *ngSwitchCase="'month'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
      ></nz-month-picker>

      <nz-week-picker *ngSwitchCase="'week'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
      ></nz-week-picker>

      <nz-range-picker *ngSwitchCase="'range'"
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzRanges]="ui.ranges"
        (nzOnOk)="_ok($event)"
      ></nz-range-picker>

      <nz-date-picker *ngSwitchDefault
        [nzDisabled]="disabled"
        [nzSize]="ui.size"
        [nzFormat]="displayFormat"
        [(ngModel)]="displayValue"
        (ngModelChange)="_change($event)"
        [nzAllowClear]="i.allowClear"
        [nzClassName]="ui.className"
        [nzDisabledDate]="ui.disabledDate"
        [nzLocale]="ui.locale"
        [nzPlaceHolder]="ui.placeholder"
        [nzPopupStyle]="ui.popupStyle"
        [nzDropdownClassName]="ui.dropdownClassName"
        (nzOnOpenChange)="_openChange($event)"
        [nzDisabledTime]="ui.disabledTime"
        [nzRenderExtraFooter]="ui.renderExtraFooter"
        [nzShowTime]="ui.showTime"
        [nzShowToday]="i.showToday"
        (nzOnOk)="_ok($event)"
      ></nz-date-picker>
    </ng-container>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimeWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const ui = this.ui;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            return;
        }
        /** @type {?} */
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1)
                value += ':00';
            v = new Date(`1970-1-1 ` + value);
        }
        this.displayValue = v;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui["utcEpoch"] === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.format));
    }
}
TimeWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-time',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-time-picker
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName"
      >
    </nz-time-picker>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RadioWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        this.styleType = (this.ui["styleType"] || 'default') === 'default';
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => (this.data = list));
    }
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-radio-group
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzName]="id"
      [ngModel]="value"
      (ngModelChange)="setValue($event)">
      <ng-container *ngIf="styleType">
        <label *ngFor="let option of data"
          nz-radio
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
      <ng-container *ngIf="!styleType">
        <label *ngFor="let option of data"
          nz-radio-button
          [nzValue]="option.value"
          [nzDisabled]="option.disabled">
          <span [innerHTML]="option.label"></span>
        </label>
      </ng-container>
    </nz-radio-group>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.label = this.ui.spanLabel;
            this.control = this.ui.spanControl;
            if (list.length === 0) {
                this.label = null;
                this.offset = this.ui.spanLabel;
            }
            this.grid_span = this.ui["span"] && this.ui["span"] > 0 ? this.ui["span"] : 0;
            this.updateAllChecked();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }
    /**
     * @return {?}
     */
    notifySet() {
        /** @type {?} */
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    groupInGridChange(values) {
        this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.notifySet();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onAllChecked(e) {
        e.stopPropagation();
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }
    /**
     * @return {?}
     */
    updateAllChecked() {
        if (this.data.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.data.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    notifyChange(res) {
        if (this.ui["change"])
            this.ui["change"](res);
    }
}
CheckboxWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-checkbox',
                template: `
  <ng-template #all>
    <label *ngIf="ui.checkAll" nz-checkbox class="mr-sm"
      [(ngModel)]="allChecked"
      [nzIndeterminate]="indeterminate"
      (click)="onAllChecked($event)">
      {{ ui.checkAllText || '全选' }}
    </label>
  </ng-template>
  <nz-form-item [style.width.px]="ui.width">
    <nz-col *ngIf="data.length > 0" [nzSpan]="label" class="ant-form-item-label">
      <label [attr.for]="id" [class.ant-form-item-required]="ui._required">
        {{ schema.title }}
        <span class="optional">
          {{ ui.optional }}
          <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
            <i nz-tooltip class="anticon anticon-question-circle-o"></i>
          </nz-tooltip>
        </span>
      </label>
    </nz-col>
    <nz-col class="ant-form-item-control-wrapper" [nzSpan]="control" [nzOffset]="offset">
      <div class="ant-form-item-control" [class.has-error]="showError">

          <ng-container *ngIf="data.length === 0">
            <label nz-checkbox
              [nzDisabled]="disabled"
              [ngModel]="value"
              (ngModelChange)="_setValue($event)">
              <span [innerHTML]="schema.title"></span>
              <span class="optional">
                {{ ui.optional }}
                <nz-tooltip *ngIf="ui.optionalHelp" [nzTitle]="ui.optionalHelp">
                  <i nz-tooltip class="anticon anticon-question-circle-o"></i>
                </nz-tooltip>
              </span>
            </label>
          </ng-container>
          <ng-container *ngIf="data.length > 0">
            <ng-container *ngIf="grid_span === 0">
              <ng-template [ngTemplateOutlet]="all"></ng-template>
              <nz-checkbox-group [ngModel]="data" (ngModelChange)="notifySet()"></nz-checkbox-group>
            </ng-container>
            <ng-container *ngIf="grid_span !== 0">
              <nz-checkbox-wrapper class="checkbox-grid-list" (nzOnChange)="groupInGridChange($event)">
                <nz-row>
                  <nz-col [nzSpan]="grid_span" *ngIf="ui.checkAll">
                    <ng-template [ngTemplateOutlet]="all"></ng-template>
                  </nz-col>
                  <nz-col [nzSpan]="grid_span" *ngFor="let i of data">
                    <label nz-checkbox [nzValue]="i.value" [ngModel]="i.checked" [nzDisabled]="i.disabled">{{i.label}}</label>
                  </nz-col>
                </nz-row>
              </nz-checkbox-wrapper>
            </ng-container>
          </ng-container>

          <nz-form-extra *ngIf="schema.description" [innerHTML]="schema.description"></nz-form-extra>
          <nz-form-explain *ngIf="!ui.onlyVisual && showError">{{error}}</nz-form-explain>
      </div>
    </nz-col>
  </nz-form-item>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BooleanWidget extends ControlWidget {
}
BooleanWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-boolean',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-switch
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [nzCheckedChildren]="ui.checkedChildren"
      [nzUnCheckedChildren]="ui.unCheckedChildren">
    </nz-switch>
  </sf-item-wrap>`,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextareaWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ui["autosize"] != null) {
            this.autosize = this.ui["autosize"];
        }
    }
}
TextareaWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-textarea',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <textarea nz-input
      [attr.id]="id"
      [disabled]="disabled"
      [attr.disabled]="disabled"
      [nzSize]="ui.size"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [attr.maxLength]="schema.maxLength || null"
      [attr.placeholder]="ui.placeholder"
      [nzAutosize]="autosize">
    </textarea>

  </sf-item-wrap>`,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.hasGroup = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.hasGroup = list.filter(w => w.group === true).length > 0;
            this.detectChanges();
        });
    }
    /**
     * @param {?} values
     * @return {?}
     */
    change(values) {
        if (this.ui["change"])
            this.ui["change"](values);
        this.setValue(values);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openChange(value) {
        if (this.ui["openChange"])
            this.ui["openChange"](value);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    searchChange(text) {
        if (this.ui["onSearch"]) {
            this.ui["onSearch"](text).then((res) => {
                this.data = res;
                this.detectChanges();
            });
            return;
        }
        this.detectChanges();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    scrollToBottom(value) {
        if (this.ui["scrollToBottom"])
            this.ui["scrollToBottom"](value);
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-select
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [nzPlaceHolder]="ui.placeholder"
      [nzAllowClear]="i.allowClear"
      [nzAutoFocus]="i.autoFocus"
      [nzDropdownClassName]="i.dropdownClassName"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzServerSearch]="i.serverSearch"
      [nzMaxMultipleCount]="i.maxMultipleCount"
      [nzMode]="i.mode"
      [nzNotFoundContent]="i.notFoundContent"
      [nzShowSearch]="i.showSearch"
      (nzOpenChange)="openChange($event)"
      (nzOnSearch)="searchChange($event)"
      (nzScrollToBottom)="scrollToBottom($event)">
      <ng-container *ngIf="!hasGroup">
        <nz-option
          *ngFor="let o of data"
          [nzLabel]="o.label"
          [nzValue]="o.value"
          [nzDisabled]="o.disabled">
        </nz-option>
      </ng-container>
      <ng-container *ngIf="hasGroup">
        <nz-option-group *ngFor="let i of data" [nzLabel]="i.label">
          <nz-option
            *ngFor="let o of i.children"
            [nzLabel]="o.label"
            [nzValue]="o.value"
            [nzDisabled]="o.disabled">
          </nz-option>
        </nz-option-group>
      </ng-container>
    </nz-select>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TreeSelectWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @return {?}
     */
    dc() {
        // Muse wait `nz-tree-select` write values
        return new Promise(resolve => {
            setTimeout(() => {
                this.detectChanges();
                resolve();
            }, 101);
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    tranData(list) {
        return list.map(node => new NzTreeNode(/** @type {?} */ (deepCopy(node))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { ui } = this;
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
            displayWith: ui["displayWith"] || ((node) => node.title),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData)
            .pipe(map(list => this.tranData(list)))
            .subscribe(list => {
            this.data = list;
            this.dc();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    change(value) {
        if (this.ui["change"])
            this.ui["change"](value);
        this.setValue(value);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    expandChange(e) {
        const { ui } = this;
        if (typeof ui["expandChange"] !== 'function')
            return;
        ui["expandChange"](e)
            .pipe(map((list) => this.tranData(list)))
            .subscribe(res => {
            e.node.addChildren(res);
            this.dc();
        });
    }
}
TreeSelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tree-select',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-tree-select
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzDropdownStyle]="ui.dropdownStyle"
      [nzMultiple]="i.multiple"
      [nzSize]="ui.size"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzAsyncData]="i.asyncData"
      [nzNodes]="data"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDefaultExpandedKeys]="ui.defaultExpandedKeys"
      [nzDisplayWith]="i.displayWith"
      [ngModel]="value"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)">
    </nz-tree-select>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TagWidget extends ControlWidget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onChange(item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui["checkedChange"])
            this.ui["checkedChange"](item.checked);
    }
    /**
     * @return {?}
     */
    _afterClose() {
        if (this.ui["afterClose"])
            this.ui["afterClose"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _close(e) {
        if (this.ui["onClose"])
            this.ui["onClose"](e);
    }
    /**
     * @return {?}
     */
    updateValue() {
        this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
    }
}
TagWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tag',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-tag
      *ngFor="let i of data"
      nzMode="checkable"
      [nzChecked]="i.checked"
      (nzAfterClose)="_afterClose()"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)">
      {{i.label}}
    </nz-tag>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UploadWidget extends ControlWidget {
    /**
     * @param {?} cd
     * @param {?} modalSrv
     */
    constructor(cd, modalSrv) {
        super(cd);
        this.modalSrv = modalSrv;
        this.fileList = [];
        this.btnType = '';
        this.handlePreview = (file) => {
            this.modalSrv
                .create({
                nzContent: `<img src="${file.url ||
                    file.thumbUrl}" class="img-fluid" />`,
                nzFooter: null,
            })
                .afterClose.subscribe(() => this.detectChanges());
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            this.i.text = this.ui["text"] || `单击或拖动文件到该区域上传`;
            this.i.hint =
                this.ui["hint"] || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
    }
    /**
     * @param {?} args
     * @return {?}
     */
    change(args) {
        if (this.ui["change"])
            this.ui["change"](args);
        if (args.type !== 'success')
            return;
        this.notify(args.fileList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.fileList = /** @type {?} */ (list);
            this.notify(this.fileList);
            this.detectChanges();
        });
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    notify(fileList) {
        /** @type {?} */
        const res = fileList.map(item => deepGet(item.response, this.i.resReName, item.response));
        this.formProperty.setValue(this.i.multiple === true ? res : res.pop(), false);
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-upload
      [nzType]="i.type"
      [nzFileList]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzRemove]="ui.remove"
      [nzPreview]="handlePreview"
      (nzChange)="change($event)">
      <ng-container [ngSwitch]="btnType">
        <ng-container *ngSwitchCase="'plus'">
          <i class="anticon anticon-plus"></i>
          <div class="ant-upload-text" [innerHTML]="i.text"></div>
        </ng-container>
        <ng-container *ngSwitchCase="'drag'">
          <p class="ant-upload-drag-icon"><i class="anticon anticon-inbox"></i></p>
          <p class="ant-upload-text" [innerHTML]="i.text"></p>
          <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
        </ng-container>
        <ng-container *ngSwitchDefault>
          <button type="button" nz-button>
            <i class="anticon anticon-upload"></i><span [innerHTML]="i.text"></span>
          </button>
        </ng-container>
      </ng-container>
    </nz-upload>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
UploadWidget.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TransferWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.list = [];
        this._data = [];
        this._canMove = (arg) => {
            return this.ui["canMove"] ? this.ui["canMove"](arg) : of(arg.list);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            titles: this.ui["titles"] || ['', ''],
            operations: this.ui["operations"] || ['', ''],
            itemUnit: this.ui["itemUnit"] || '项',
            itemsUnit: this.ui["itemsUnit"] || '项',
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            /** @type {?} */
            let formData = this.formProperty.formData;
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach((item) => {
                if (~(/** @type {?} */ (formData)).indexOf(item.value))
                    item["direction"] = 'right';
            });
            this.list = list;
            this._data = list.filter(w => w["direction"] === 'right');
            this.notify();
            this.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    notify() {
        this.formProperty.setValue(this._data.map(i => i.value), false);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _change(options) {
        if (options.to === 'right') {
            this._data = this._data.concat(...options.list);
        }
        else {
            this._data = this._data.filter(w => options.list.indexOf(w) === -1);
        }
        if (this.ui["change"])
            this.ui["change"](options);
        this.notify();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _searchChange(options) {
        if (this.ui["searchChange"])
            this.ui["searchChange"](options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectChange(options) {
        if (this.ui["selectChange"])
            this.ui["selectChange"](options);
        this.cd.detectChanges();
    }
}
TransferWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-transfer',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-transfer
      [nzDataSource]="list"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)">
    </nz-transfer>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this._formatter = (value) => {
            if (this.ui["formatter"])
                return this.ui["formatter"](value);
            return value;
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.min = this.schema.minimum || 0;
        this.max = this.schema.maximum || 100;
        this.step = this.schema.multipleOf || 1;
        this.marks = this.ui["marks"] || null;
        /** @type {?} */
        const included = this.ui["included"];
        this.included = typeof included === 'undefined' ? true : included;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _afterChange(value) {
        if (this.ui["afterChange"])
            this.ui["afterChange"](value);
    }
}
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)">
    </nz-slider>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CustomWidget extends ControlWidget {
}
CustomWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-custom',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <ng-template
      [ngTemplateOutlet]="$any(ui)._render"
      [ngTemplateOutletContext]="{$implicit: this, schema: schema, ui: ui }"></ng-template>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RateWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.count = this.schema.maximum || 5;
        this.allowHalf = (this.schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(this.ui["allowClear"], true);
        this.autoFocus = toBool(this.ui["autoFocus"], false);
        this.hasText = !!this.ui["text"];
    }
    /**
     * @return {?}
     */
    genText() {
        return this.hasText
            ? (/** @type {?} */ (this.ui["text"])).replace('{{value}}', this.formProperty.value)
            : '';
    }
}
RateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-rate',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzAutoFocus]="autoFocus"
      [nzCount]="count"></nz-rate>
    <span *ngIf="hasText && formProperty.value" class="ant-rate-text">{{ genText() }}</span>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const EMAILSUFFIX = [
    'qq.com',
    '163.com',
    'gmail.com',
    '126.com',
    'aliyun.com',
];
class AutoCompleteWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.fixData = [];
        this.isAsync = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            backfill: toBool(this.ui["backfill"], false),
            defaultActiveFirstOption: toBool(this.ui["defaultActiveFirstOption"], true),
            width: this.ui.width || undefined,
        };
        this.filterOption = this.ui["filterOption"] == null ? true : this.ui["filterOption"];
        if (typeof this.filterOption === 'boolean') {
            this.filterOption = (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        const orgTime = +(this.ui["debounceTime"] || 0);
        /** @type {?} */
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.formProperty.valueChanges.pipe(debounceTime(time), startWith(''), flatMap(input => this.isAsync ? this.ui.asyncData(input) : this.filterData(input)), map(res => getEnum(res, null, this.schema.readOnly)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
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
    }
    /**
     * @param {?} input
     * @return {?}
     */
    filterData(input) {
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter(option => this.filterOption(input, option)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addEmailSuffix(value) {
        return of(!value || ~value.indexOf('@')
            ? []
            : this.fixData.map(domain => `${value}@${domain.label}`));
    }
}
AutoCompleteWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-autocomplete',
                template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      <input nz-input [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off">
      <nz-autocomplete #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        (selectionChange)="setValue($event?.nzValue)">
        <nz-auto-option *ngFor="let i of list | async" [nzValue]="i.label">{{i.label}}</nz-auto-option>
      </nz-autocomplete>
    </sf-item-wrap>
    `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CascaderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.clearText = this.ui["clearText"] || '清除';
        this.showArrow = toBool(this.ui["showArrow"], true);
        this.showInput = toBool(this.ui["showInput"], true);
        this.triggerAction = this.ui["triggerAction"] || ['click'];
        if (!!this.ui.asyncData) {
            this.loadData = (node, index) => (/** @type {?} */ (this.ui.asyncData))(node, index, this);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    /**
     * @param {?} status
     * @return {?}
     */
    _visibleChange(status) {
        this.ui["visibleChange"] && this.ui["visibleChange"](status);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _change(value) {
        this.setValue(value);
        this.ui["change"] && this.ui["change"](value);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _selectionChange(options) {
        this.ui["selectionChange"] && this.ui["selectionChange"](options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _select(options) {
        this.ui["select"] && this.ui["select"](options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _clear(options) {
        this.ui["clear"] && this.ui["clear"](options);
    }
}
CascaderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-cascader',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-cascader
      [nzDisabled]="disabled"
      [nzSize]="ui.size"
      [ngModel]="value"
      (ngModelChange)="_change($event)"
      [nzOptions]="data"
      [nzAllowClear]="ui.allowClear"
      [nzAutoFocus]="ui.autoFocus"
      [nzChangeOn]="ui.changeOn"
      [nzChangeOnSelect]="ui.changeOnSelect"
      [nzColumnClassName]="ui.columnClassName"
      [nzExpandTrigger]="ui.expandTrigger"
      [nzMenuClassName]="ui.menuClassName"
      [nzMenuStyle]="ui.menuStyle"
      [nzLabelProperty]="ui.labelProperty"
      [nzValueProperty]="ui.valueProperty"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch"
      (nzClear)="_clear($event)"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelect)="_select($event)"
      (nzSelectionChange)="_selectionChange($event)">
    </nz-cascader>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MentionWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i = {
            valueWith: this.ui["valueWith"] || (item => item.label),
            notFoundContent: this.ui["notFoundContent"] || '无匹配结果，轻敲空格完成输入',
            placement: this.ui["placement"] || 'bottom',
            prefix: this.ui["prefix"] || '@',
        };
        /** @type {?} */
        const min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
        /** @type {?} */
        const max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (value, formProperty, form) => {
                /** @type {?} */
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            };
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _select(options) {
        if (this.ui["select"])
            this.ui["select"](options);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    _search(option) {
        if (typeof this.ui["loadData"] !== 'function')
            return;
        this.loading = true;
        (/** @type {?} */ (this.ui["loadData"](option)))
            .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
            .subscribe(res => {
            this.data = res;
            this.cd.detectChanges();
        });
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

      <nz-mention #mentions
        [nzSuggestions]="data"
        [nzValueWith]="i.valueWith"
        [nzLoading]="loading"
        [nzNotFoundContent]="i.notFoundContent"
        [nzPlacement]="i.placement"
        [nzPrefix]="i.prefix"
        (nzOnSelect)="_select($event)"
        (nzOnSearchChange)="_search($event)">

        <ng-container *ngIf="ui.inputStyle !== 'textarea'">
          <input nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            autocomplete="off">
        </ng-container>

        <ng-container *ngIf="ui.inputStyle === 'textarea'">
          <textarea nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            [nzAutosize]="ui.autosize">
          </textarea>
        </ng-container>

      </nz-mention>

    </sf-item-wrap>
    `,
                preserveWhitespaces: false
            }] }
];
MentionWidget.propDecorators = {
    mentionChild: [{ type: ViewChild, args: ['mentions',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextWidget extends ControlWidget {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ui["_required"] = false;
    }
}
TextWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-text',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    {{ value || ui.defaultText || '-' }}
  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NzWidgetRegistry extends WidgetRegistry {
    constructor() {
        super();
        this.register('object', ObjectWidget);
        this.register('array', ArrayWidget);
        this.register('text', TextWidget);
        this.register('string', StringWidget);
        this.register('number', NumberWidget);
        this.register('integer', NumberWidget);
        this.register('date', DateWidget);
        this.register('time', TimeWidget);
        this.register('radio', RadioWidget);
        this.register('checkbox', CheckboxWidget);
        this.register('boolean', BooleanWidget);
        this.register('textarea', TextareaWidget);
        this.register('select', SelectWidget);
        this.register('tree-select', TreeSelectWidget);
        this.register('tag', TagWidget);
        this.register('upload', UploadWidget);
        this.register('transfer', TransferWidget);
        this.register('slider', SliderWidget);
        this.register('rate', RateWidget);
        this.register('autocomplete', AutoCompleteWidget);
        this.register('cascader', CascaderWidget);
        this.register('mention', MentionWidget);
        this.register('custom', CustomWidget);
        this.setDefault(StringWidget);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    SFComponent,
    SFItemComponent,
    SFItemWrapComponent,
    SFTemplateDirective,
    SFFixedDirective,
];
/** @type {?} */
const WIDGETS = [
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
class DelonFormModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DelonFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
                declarations: [...COMPONENTS, ...WIDGETS],
                entryComponents: [...WIDGETS],
                exports: [...COMPONENTS],
            },] }
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2Vycm9ycy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2NvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3V0aWxzLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2F0b21pYy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL251bWJlci5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL3N0cmluZy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Jvb2xlYW4ucHJvcGVydHkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL29iamVjdC5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3ZhbGlkYXRvci5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0LmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWZpeGVkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGltZS90aW1lLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBgw6XCuMKDw6XCsMKUw6bCqMKhw6XCvMKPw6XCh8K6w6nClMKZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYMOmwpfCoMOmwrPClcOmwonCvsOlwojCsMOlwrzClcOnwpTCqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYMOkwrjCjcOlwoXCgcOowq7CuMOowrbChcOowr/Ch3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYMOkwrjCjcOlwoXCgcOowq7CuMOmwpzCicOpwqLCncOlwqTClsOnwprChMOlwrHCnsOmwoDCp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpcK6wpTDpMK4wrogYW55T2Ygw6bCicKAw6bCjMKHw6XCrsKaw6fCmsKEw6XChcK2w6TCuMKtw6TCuMKAw6TCuMKqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwovCpcOmwpzCicOlwrHCnsOmwoDCp3twcm9wZXJ0eX3Dp8KawoTDpMK+wp3DqMK1wpbDpcKxwp7DpsKAwqd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsIC8vIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKgwrzDpcK8wo8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYMOnwrHCu8Olwp7Ci8OlwrrClMOlwr3Ck8OmwpjCryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBgw6XCv8KFw6XCocKrw6nCocK5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwqTCmiB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKwwpEge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqbDpMK7wqXDpMK4wopgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCryB7bXVsdGlwbGVPZn0gw6fCmsKEw6bClcK0w6bClcKww6XCgMKNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwozCucOpwoXCjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDDpcKPwqrDqMKDwr3DpcKMwrnDqcKFwo3DpMK4woDDpMK4wqogXCJvbmVPZlwiIMOkwrjCrcOnwprChCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwpDCq8OmwpzCicOpwofCjcOlwqTCjcOpwqHCuSAow6fCrMKsIHtqfSDDqcKhwrnDpMK4wo7Dp8Kswqwge2l9IMOpwqHCucOmwpjCr8OpwofCjcOlwqTCjcOnwprChClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYMOlwrHCnsOmwoDCp8OlwpDCjSBcIntwcm9wZXJ0eU5hbWV9XCIgw6bCl8Kgw6bClcKIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpzCicOlwrHCnsOmwoDCp8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYMOnwpTCscOkwrrCjiB7Y2FzZUluZGV4fSDDpcKkwrHDqMK0wqXDr8K8wozDpsKcwqrDqcKAwprDqMK/wocgXCJzd2l0Y2hcIiDDpsKgwqHDqcKqwoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6fCrcKJw6TCusKOw6XCuMK4w6nCh8KPYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozChcOlwpDCq8OkwrjCgMOkwrjCqsOmwpzCicOmwpXCiMOpwqHCuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq/DpsKWwofDpsKcwqzDr8K8wozDqcKUwq7DpcKQwo3DqMK1wp7DpcKQwowgYEVycm9yRGF0YS5rZXl3b3JkYCDDpcKAwrxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDDpcKAwrzDpcKnwovDp8K7wojDpcKMwoXDpcKQwqsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiIsImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRVJST1JTREVGQVVMVCB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDDqcKZwpDDpcKuwpogU2NoZW1hIMOkwrjCrSBgdHlwZWAgw6fCscK7w6XCnsKLXG4gICAqIC0gYGVudW1gIMOpwpnCkMOlwq7CmsOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykgw6XCj8KCw6bClcKwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xuICAvKipcbiAgICogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyA9IG51bGw7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKAwprDp8KUwqjDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq9cbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBFUlJPUlNERUZBVUxUO1xuICAvKipcbiAgICogw6nCu8KYw6jCrsKkw6XChcKow6XCscKAw6XCuMKDw6XCscKAXG4gICAqL1xuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xuICAvKipcbiAgICogw6XChcKDw6fCtMKgw6fCu8KEw6TCu8K2w6XCpMKnw6XCsMKPw6/CvMKMw6fClMKow6TCusKOIGBuelNpemVgIMOlwoDCvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6nCo8KOw6bCoMK8XG4gICAqL1xuICBidXR0b24/OiBTRkJ1dHRvbiA9IHtcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWVlZWS1NTS1ERCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRlw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJzdHJpbmdcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0PyA9ICdISDptbTpzcyc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXDDr8K8wozDpsKXwqXDpsKcwp/Dp8K7wp/DpMK4woDDpMK9wr/Dp8KUwqggYDE5NzAtMDEtMDFgXG4gICAqL1xuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjb25zdCBGT1JNQVRNQVBTID0ge1xuICAnZGF0ZS10aW1lJzoge1xuICAgIHdpZGdldDogJ2RhdGUnLFxuICAgIHNob3dUaW1lOiB0cnVlLFxuICAgIGZvcm1hdDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyxcbiAgfSxcbiAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gIHRpbWU6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgd2VlazogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ3dlZWsnLCBmb3JtYXQ6ICdZWVlZLVdXJyB9LFxuICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcbiAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcbiAgZW1haWw6IHsgd2lkZ2V0OiAnYXV0b2NvbXBsZXRlJywgdHlwZTogJ2VtYWlsJyB9LFxuICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbn1cblxuLyoqIMOmwqDCucOmwo3CriBgJHJlZmAgw6bCn8Klw6bCicK+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIMOlwo/ClsOlwpvCnlNjaGVtYcOvwrzCjMOlwrnCtsOlwqTChMOnwpDChiBgJHJlZmAgw6fCmsKEw6XChcKzw6fCs8K7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxuKTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xuXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLFxuICAgIGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZi5wcm9wZXJ0aWVzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbi5yZXF1aXJlZCk7XG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBjb25zdCBoYXNFbHNlID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdlbHNlJyk7XG4gIGlmIChoYXNFbHNlKSB7XG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmLnByb3BlcnRpZXNba2V5XS5lbnVtO1xuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZC5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuLnJlcXVpcmVkLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xuICBpZiAoaGFzRWxzZSlcbiAgICBzY2hlbWEuZWxzZS5yZXF1aXJlZC5mb3JFYWNoKFxuICAgICAga2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSxcbiAgICApO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcbiAgZGV0ZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSBhcnIgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCxcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyxcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiA8U0ZTY2hlbWFFbnVtPnsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxuICBmb3JtRGF0YTogYW55LFxuICBhc3luY0FyZ3M/OiBhbnksXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKCkgPT4gdWkuX19kZXN0cm95ICE9PSB0cnVlKSxcbiAgICAgICAgbWFwKGxpc3QgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgICApO1xuICB9XG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpO1xufVxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xuICBvbkRlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KHRydWUpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+O1xuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9vYmpFcnJvcnM6IHsgW2tleTogc3RyaW5nXTogRXJyb3JEYXRhW10gfSA9IHt9O1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnVpID0gdWk7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSwge1xuICAgICAgaW5nb3JlS2V5d29yZHM6IHRoaXMudWkuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhIHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOlwoDCvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfaGFzVmFsdWUoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IGFueTtcblxuICAvKipcbiAgICogw6bCm8K0w6bClsKww6XCgMK8w6TCuMKUw6bCoMKhw6nCqsKMw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkcOlwoDCvMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBvbmx5U2VsZiA9IGZhbHNlLFxuICAgIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSxcbiAgICBlbWl0VmFsaWRhdG9yID0gdHJ1ZSxcbiAgKSB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBgZW1pdFZhbGlkYXRvcmAgw6bCr8KPw6TCuMKAw6bCrMKhw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6XCt8Kyw6fCu8KPw6XCjMKFw6XCkMKrw6XCrsKMw6bClcK0w6nClMKZw6jCr8Kvw6nCk8K+w6jCt8Kvw6/CvMKMw6XCkMKOw6fCu8Ktw6fCiMK2w6jCisKCw6fCgsK5w6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8Kgw6nCocK7w6XChsKNw6jCp8Kmw6XCj8KRw6bCoMKhw6nCqsKMXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0VmFsdWVFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDDpsKgwrnDpsKNwq7DqMK3wq/DpcK+woTDpsKQwpzDp8K0wqLDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiDDpsKfwqXDpsKJwr7DpsKgwrnDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgbGV0IHByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gPFByb3BlcnR5R3JvdXA+cHJvcGVydHk7XG4gIH1cblxuICAvLyByZWdpb246IHByb2Nlc3MgZXJyb3JzXG5cbiAgcHJpdmF0ZSBpc0VtcHR5RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMw6XCmcKow6XCv8KFw6nCocK7w6jCh8Kzw6XCsMKRw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqICdtZXNzYWdlJyDDpcKxwp7DpsKAwqfDr8K8wozDp8KUwqjDpMK6wo7DqMKhwqjDp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqxgLFxuICAgICAgICAgICk7XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcCgoZXJyOiBFcnJvckRhdGEpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXG4gICAgICAgICAgICA/IGVyci5tZXNzYWdlXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlKGVycikgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH4obWVzc2FnZSBhcyBzdHJpbmcpLmluZGV4T2YoJ3snKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcbiAgICAgICAgICAgICAgKHY6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGVyci5wYXJhbXNba2V5XSB8fCAnJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9ycywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcbiAgICBjb25zdCBwbGF0RXJyb3JzOiBFcnJvckRhdGFbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiAhcHJvcGVydHkudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRFcnJvcnMocGxhdEVycm9ycywgZmFsc2UpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBjb25kaXRpb25cblxuICBwcml2YXRlIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuX3Zpc2liaWxpdHlDaGFuZ2VzLm5leHQodmlzaWJsZSk7XG4gICAgLy8gw6nCg8Kow6XCiMKGw6bClcKww6bCjcKuw6bCusKQw6bCncKlw6jCh8KqIHJlc2V0XG4gICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCB2aXNpYmxlSWYgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbSkudmlzaWJsZUlmO1xuICAgIGlmICh0eXBlb2YgdmlzaWJsZUlmID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2aXNpYmxlSWYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQmluZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCk7XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoZWNrID0gcHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gdmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICB2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgICkucGlwZShtYXAocmVzdWx0cyA9PiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pKTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNCaW5kaW5nLnB1c2goYW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgQ2FuJ3QgZmluZCBwcm9wZXJ0eSAke2RlcGVuZGVuY3lQYXRofSBmb3IgdmlzaWJpbGl0eSBjaGVjayBvZiAke1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aFxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh2YWx1ZXMgPT4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSB8IEZvcm1Qcm9wZXJ0eVtdID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcHJvcGVydHlJZCA9IHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoO1xuXG4gICAgbGV0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBudWxsICYmXG4gICAgICBzdWJQYXRoSWR4ICE9PSAtMSAmJlxuICAgICAgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwXG4gICAgKSB7XG4gICAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgICAgcHJvcGVydHkgPSAoPFByb3BlcnR5R3JvdXA+cHJvcGVydHkpLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBmb3JFYWNoQ2hpbGQoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgc3RyOiBTdHJpbmcpID0+IHZvaWQpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgICg8UHJvcGVydHlHcm91cD5jaGlsZCkuZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLl9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUocHJvcGVydHkgPT4ge1xuICAgICAgcHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0b21pY1Byb3BlcnR5IGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy53aWRnZXQpIHRoaXMud2lkZ2V0LnJlc2V0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1ZhbHVlKCkgIT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7fVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPVxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Qcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICB0aWNrID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IGFueSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcG9zID0gKyhzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aCk7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcGVydGllcyBhcyBQcm9wZXJ0eUdyb3VwW107XG4gICAgaWYgKGlzTmFOKHBvcykgfHwgcG9zID49IGxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgcmV0dXJuIGxpc3RbcG9zXS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCBbXTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModGhpcy5fdmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWU6IGFueVtdID0gW107XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBPYmplY3RQcm9wZXJ0eSwgXykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWUucHVzaChPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0eS5mb3JtRGF0YSwgcHJvcGVydHkudmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHRoaXMudWkuJGl0ZW1zLFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLFxuICAgICkgYXMgT2JqZWN0UHJvcGVydHk7XG4gICAgKDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXMpLnB1c2gobmV3UHJvcGVydHkpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnlbXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KGl0ZW0pO1xuICAgICAgcHJvcGVydHkucmVzZXRWYWx1ZShpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXJyb3JzKHBhdGg/OiBzdHJpbmcpIHtcbiAgICBpZiAocGF0aCkgZGVsZXRlIHRoaXMuX29iakVycm9yc1twYXRoXTtcbiAgICBlbHNlIHRoaXMuX29iakVycm9ycyA9IHt9O1xuICB9XG5cbiAgLy8gcmVnaW9uOiBhY3Rpb25zXG5cbiAgYWRkKHZhbHVlOiBhbnkpOiBGb3JtUHJvcGVydHkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgbmV3UHJvcGVydHkucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgbGlzdCA9IDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXM7XG4gICAgdGhpcy5jbGVhckVycm9ycyhsaXN0W2luZGV4XS5wYXRoKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICAgICAgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEludmFsaWQgJHt0aGlzLnNjaGVtYS50aXRsZSB8fCAncm9vdCd9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOmAsXG4gICAgICAgIGUsXG4gICAgICApO1xuICAgIH1cbiAgICBvcmRlcmVkUHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxuICAgICAgICAodGhpcy5mb3JtRGF0YSB8fCB7fSlbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3BlcnR5SWQsXG4gICAgICApO1xuICAgICAgdGhpcy5fcHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55ID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBhbnksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHt9XG5cbiAgY3JlYXRlUHJvcGVydHkoXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBwYXRoICs9IChwYXJlbnQgYXMgQXJyYXlQcm9wZXJ0eSkudGljaysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArXG4gICAgICAgICAgICBwYXJlbnQudHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4IHJlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BlcnR5SWQgJiZcbiAgICAgICAgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZCkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmIChcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxuICAgICAgKSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBTRlNjaGVtYSkgPT4gRXJyb3JEYXRhW107XG59XG5cbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnZGF0YS11cmwnLFxuICAgICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdjb2xvcicsXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdtb2JpbGUnLFxuICAgICAgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdpZC1jYXJkJyxcbiAgICAgIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8sXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcblxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIHNldERlZmF1bHQod2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgY3JlYXRlV2lkZ2V0KFxuICAgIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0eXBlOiBzdHJpbmcsXG4gICk6IENvbXBvbmVudFJlZjxXaWRnZXQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PGFueT4+KFxuICAgICAgY29tcG9uZW50Q2xhc3MsXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4pIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgX3JlbmRlcnMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcbiAgcHJpdmF0ZSBfaXRlbTogYW55O1xuICBwcml2YXRlIF92YWxpZCA9IHRydWU7XG4gIHByaXZhdGUgX2RlZlVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG5cbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xuICBfZm9ybURhdGE6IGFueTtcbiAgX2J0bjogU0ZCdXR0b247XG4gIF9zY2hlbWE6IFNGU2NoZW1hO1xuICBfdWk6IFNGVUlTY2hlbWE7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6jCocKow6XCjcKVw6XCuMKDw6XCscKAw6/CvMKMw6fCrcKJw6XCkMKMIGBuekxheW91dGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppob3Jpem9udGFsICovXG4gIEBJbnB1dCgpXG4gIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuXG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKVxuICBzY2hlbWE6IFNGU2NoZW1hO1xuXG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgdWk6IFNGVUlTY2hlbWE7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOpwrvCmMOowq7CpMOlwoDCvCAqL1xuICBASW5wdXQoKVxuICBmb3JtRGF0YToge307XG5cbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrlxuICAgKiAtIMOlwoDCvMOkwrjCuiBgbnVsbGAgw6bCiMKWIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwr3ChsOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxuICAgKiAtIMOlwoDCvMOkwrjCuiBgbm9uZWAgw6jCocKow6fCpMK6w6bCicKLw6XCisKow6bCt8K7w6XCisKgw6bCjMKJw6nCksKuw6/CvMKMw6TCuMKUw6TCuMKNw6TCv8Kdw6fClcKZw6XCrsK5w6XCmcKoXG4gICAqIC0gw6TCvcK/w6fClMKow6XCm8K6w6XCrsKaIGBsYWJlbGAgw6bCoMKHw6fCrcK+w6XCrsK9w6XCusKmw6bCl8K2w6/CvMKMw6jCi8Klw6bCl8KgIGByZW5kZXIuY2xhc3NgIMOlwojCmcOpwrvCmMOowq7CpMOkwrjCusOlwrHChcOkwrjCrcOnworCtsOmwoDCgVxuICAgKi9cbiAgQElucHV0KClcbiAgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xuXG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuXG4gIC8qKiDDpsKMwofDpcKuwprDqMKhwqjDpcKNwpUgYGF1dG9jb21wbGV0ZWAgw6XCgMK8ICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZTogJ29uJyB8ICdvZmYnO1xuXG4gIC8qKiDDp8KrwovDpcKNwrPDpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwokgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGZpcnN0VmlzdWFsID0gdHJ1ZTtcblxuICAvKiogw6jCocKow6XCjcKVw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuXG4gIC8qKiDDpsKVwrDDpsKNwq7DpcKPwpjDpsKbwrTDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDpsKPwpDDpMK6wqTDqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqDCocOpwqrCjMOnwrvCk8Omwp7CnMOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqDCocOpwqrCjMOnworCtsOmwoDCgSAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOlwoDCvCAqL1xuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlO1xuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBvcHRpb25zLmZpcnN0VmlzdWFsO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gb3B0aW9ucy5hdXRvY29tcGxldGU7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKFxuICAgICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gYXMgU0ZTY2hlbWEsXG4gICAgICAgICAgZGVmaW5pdGlvbnMsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7IHdpZGdldDogcHJvcGVydHkudHlwZSB9LFxuICAgICAgICAgIHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0sXG4gICAgICAgICAgdHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCxcbiAgICAgICAgICAhcHJvcGVydHkudWkgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmXG4gICAgICAgICAgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgd2lkZ2V0OiAnc2VsZWN0JyB9XG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgdGhpcy5fZGVmVWksXG4gICAgICAgICAgcHJvcGVydHkudWksXG4gICAgICAgICAgdWlTY2hlbWFbdWlLZXldLFxuICAgICAgICApIGFzIFNGVUlTY2hlbWFJdGVtUnVuO1xuICAgICAgICAvLyDDp8K7wqfDpsKJwr/Dp8KIwrbDqMKKwoLDp8KCwrnDpcK4woPDpcKxwoDDpcKxwp7DpsKAwqdcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbClcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyA1XG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLnNwYW5Db250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IDE5XG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwgJiYgcGFyZW50U2NoZW1hKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gcGFyZW50U2NoZW1hLnByb3BlcnRpZXNbdWkuZW5kXTtcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRlRW5kUHJvcGVydHkudWksIHtcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1aS5oaWRkZW4gPSB0eXBlb2YgdWkuaGlkZGVuID09PSAnYm9vbGVhbicgPyB1aS5oaWRkZW4gOiBmYWxzZTtcblxuICAgICAgICB1aVJlc1t1aUtleV0gPSB1aTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gPSB1aVJlc1t1aUtleV1bJyRpdGVtcyddIHx8IHt9O1xuICAgICAgICAgIGluRm4oXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSlbJyRpdGVtcyddIHx8IHt9LFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpUmVzW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbklmRm4gPSAoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFNGVUlTY2hlbWFJdGVtPntcbiAgICAgICAgb25seVZpc3VhbDogdGhpcy5vcHRpb25zLm9ubHlWaXN1YWwsXG4gICAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgICBmaXJzdFZpc3VhbDogdGhpcy5maXJzdFZpc3VhbCxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudWksXG4gICAgICBfc2NoZW1hLnVpLFxuICAgICAgdGhpcy51aVsnKiddLFxuICAgICk7XG5cbiAgICAvLyByb290XG4gICAgdGhpcy5fdWkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZVaSk7XG5cbiAgICBpbkZuKF9zY2hlbWEsIF9zY2hlbWEsIHRoaXMudWksIHRoaXMudWksIHRoaXMuX3VpKTtcblxuICAgIC8vIGNvbmRcbiAgICByZXNvbHZlSWYoX3NjaGVtYSwgdGhpcy5fdWkpO1xuICAgIGluSWZGbihfc2NoZW1hLCB0aGlzLl91aSk7XG5cbiAgICB0aGlzLl9zY2hlbWEgPSBfc2NoZW1hO1xuXG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSB7XG4gICAgICBkaSgnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX2J0biA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IHJlbmRlcjoge30gfSxcbiAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgdGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIHRoaXMuYnV0dG9uLFxuICAgICk7XG4gICAgY29uc3QgZmlyc3RLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl91aSkuZmluZCh3ID0+IHcuc3RhcnRzV2l0aCgnJCcpKTtcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgYnRuVWkgPSBmaXJzdEtleSA/IHRoaXMuX3VpW2ZpcnN0S2V5XSA6IHRoaXMuX2RlZlVpO1xuICAgICAgaWYgKCF0aGlzLl9idG4ucmVuZGVyLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gZml4ZWQgbGFiZWxcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDDpcKbwrrDpcKuwprDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDpsKgwrfDpcK8wo/Dr8K8wozDpcKIwpnDqcK7wpjDqMKuwqTDpcKxwoXDpMK4wq1cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgJiZcbiAgICAgICAgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91aS5kZWJ1ZykgZGkoJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6bCnMKqw6bCicK+w6XCiMKww6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6fCm8K4w6XCkMKMw6jCh8Kqw6XCrsKaw6TCucKJw6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgIHB1aS5fcmVuZGVyID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgICAgaWYgKCFwdWkuX3JlbmRlcikgcHVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3IoKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogw6XCiMK3w6bClsKwIFNjaGVtYcOvwrzCjMOkwrjCgMOowojCrMOpwpzCgMOowqbCgcOlworCqMOmwoDCgcOkwr/CrsOmwpTCuSBTY2hlbWEgw6bCn8KQw6TCuMKqw6XCgMK8w6bCl8K2w6XCj8Kvw6TCu8Klw6bClsK5w6TCvsK/w6jCsMKDw6fClMKoXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1EYXRhLCB2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClVxuICAgKiBAcGFyYW0gW2VtaXRdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkSBgZm9ybVJlc2V0YCDDpMK6wovDpMK7wrbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RhcmdldD48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpZGdldDogV2lkZ2V0PGFueT4gPSBudWxsO1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7fVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkud2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcsXG4gICAgKTtcbiAgICB0aGlzLm9uV2lkZ2V0SW5zdGFuY2lhdGVkKHRoaXMucmVmLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVpLl9fZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxuICBASW5wdXROdW1iZXIoKVxuICBudW06IG51bWJlcjtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmLWZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxuICAgIDxuei1jb2wgKm5nSWY9XCJzaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gIDwvbnotZm9ybS1pdGVtPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU0ZUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5fYWRkVHBsKFxuICAgICAgdGhpcy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMucGF0aCA6IGAvYCArIHRoaXMucGF0aCxcbiAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBJbmplY3QsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBmaXJzdFZpc3VhbCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xzKCkge1xuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChTRkNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmQ29tcD86IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcnM6IEVycm9yRGF0YVtdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnVpLmRlYnVnKSBkaSgnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XG5cbiAgICAgICAgLy8gw6TCuMKNw6bCmMK+w6fCpMK6w6nCpsKWw6bCrMKhw6bCoMKhw6nCqsKMw6jCp8KGw6jCp8KJXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSBlcnJvcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyBlcnJvcnNbMF0ubWVzc2FnZSA6ICcnO1xuXG4gICAgICAgICAgaWYgKHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMudWkuZGVidWcpIHtcbiAgICAgIGRpKCd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWQ7IGVsc2Ugbm9HcmlkXCI+XG4gICAgPG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxuei1jb2xcbiAgICAgICAgICAgIFtuelNwYW5dPVwiaS5ncmlkLnNwYW5cIiBbbnpPZmZzZXRdPVwiaS5ncmlkLm9mZnNldFwiXG4gICAgICAgICAgICBbbnpYc109XCJpLmdyaWQueHNcIiBbbnpTbV09XCJpLmdyaWQuc21cIiBbbnpNZF09XCJpLmdyaWQubWRcIlxuICAgICAgICAgICAgW256TGddPVwiaS5ncmlkLmxnXCIgW256WGxdPVwiaS5ncmlkLnhsXCIgW256WFhsXT1cImkuZ3JpZC54eGxcIj5cbiAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcm93PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNub0dyaWQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIGxpc3Q6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotZm9ybS1pdGVtPlxuICAgIDxuei1jb2wgKm5nSWY9XCJzY2hlbWEudGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxuICAgICAgICAgICAgPG56LWNvbCAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIiBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCIgY2xhc3M9XCJzZi1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRpdGxlXCIgY2xhc3M9XCJyZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpZHgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXJvdz5cblxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmdyaWQgJiYgdGhpcy51aS5ncmlkLmFycmF5U3BhbilcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gdGhpcy51aS5ncmlkLmFycmF5U3BhbjtcblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLnVpLmFkZFRpdGxlIHx8ICfDpsK3wrvDpcKKwqAnO1xuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID1cbiAgICAgIHRoaXMudWkucmVtb3ZhYmxlID09PSBmYWxzZSA/IG51bGwgOiB0aGlzLnVpLnJlbW92ZVRpdGxlIHx8ICfDp8KnwrvDqcKZwqQnO1xuICB9XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQobnVsbCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2lwdD5cbiAgICAgIDxpbnB1dCBuei1pbnB1dFxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnR5cGVdPVwidWkudHlwZSB8fCAndGV4dCdcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFthdHRyLmF1dG9jb21wbGV0ZV09XCJ1aS5hdXRvY29tcGxldGVcIlxuICAgICAgICBbYXR0ci5hdXRvRm9jdXNdPVwidWkuYXV0b2ZvY3VzXCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnYWRkb24nOyBlbHNlIGlwdFwiPlxuICAgICAgPG56LWlucHV0LWdyb3VwXG4gICAgICAgIFtuekFkZE9uQmVmb3JlXT1cInVpLmFkZE9uQmVmb3JlXCIgW256QWRkT25BZnRlcl09XCJ1aS5hZGRPbkFmdGVyXCJcbiAgICAgICAgW256QWRkT25CZWZvcmVJY29uXT1cInVpLmFkZE9uQmVmb3JlSWNvblwiIFtuekFkZE9uQWZ0ZXJJY29uXT1cInVpLmFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgW256UHJlZml4XT1cInVpLnByZWZpeFwiIFtuelByZWZpeEljb25dPVwidWkucHJlZml4SWNvblwiXG4gICAgICAgIFtuelN1ZmZpeF09XCJ1aS5zdWZmaXhcIiBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb25cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L256LWlucHV0LWdyb3VwPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LWlucHV0LW51bWJlclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpGb3JtYXR0ZXJdPVwiZm9ybWF0dGVyXCJcbiAgICAgIFtuelBhcnNlcl09XCJwYXJzZXJcIlxuICAgICAgW256UHJlY2lzaW9uXT1cInVpLnByZWNpc2lvblwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciB8fCAnJ1wiPlxuICAgIDwvbnotaW5wdXQtbnVtYmVyPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBmb3JtYXR0ZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcbiAgcGFyc2VyID0gdmFsdWUgPT4gdmFsdWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY2hlbWEsIHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbiA9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtID8gc2NoZW1hLm1pbmltdW0gKyAxIDogc2NoZW1hLm1pbmltdW07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heCA9IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtID8gc2NoZW1hLm1heGltdW0gLSAxIDogc2NoZW1hLm1heGltdW07XG4gICAgfVxuICAgIHRoaXMuc3RlcCA9IHNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHRoaXMubWluID0gTWF0aC50cnVuYyh0aGlzLm1pbik7XG4gICAgICB0aGlzLm1heCA9IE1hdGgudHJ1bmModGhpcy5tYXgpO1xuICAgICAgdGhpcy5zdGVwID0gTWF0aC50cnVuYyh0aGlzLnN0ZXApO1xuICAgIH1cbiAgICBpZiAodWkucHJlZml4ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dmFsdWV9ICR7dWkudW5pdH1gO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxuXG4gICAgICA8bnotbW9udGgtcGlja2VyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICA+PC9uei1tb250aC1waWNrZXI+XG5cbiAgICAgIDxuei13ZWVrLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvbnotd2Vlay1waWNrZXI+XG5cbiAgICAgIDxuei1yYW5nZS1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidyYW5nZSdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcbiAgICAgID48L256LXJhbmdlLXBpY2tlcj5cblxuICAgICAgPG56LWRhdGUtcGlja2VyICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxuICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXG4gICAgICAgIFtuelNob3dUb2RheV09XCJpLnNob3dUb2RheVwiXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxuICAgICAgPjwvbnotZGF0ZS1waWNrZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vZGU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdID0gbnVsbDtcbiAgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xuICBmb3JtYXQ6IHN0cmluZztcbiAgaTogYW55O1xuICBmbGF0UmFuZ2UgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgdGhpcy5tb2RlID0gdWkubW9kZSB8fCAnZGF0ZSc7XG4gICAgdGhpcy5mbGF0UmFuZ2UgPSB1aS5lbmQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMubW9kZSA9ICdyYW5nZSc7XG4gICAgfVxuICAgIGlmICghdWkuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGB5eXl5LU1NYDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktd3dgO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSB1aS5kaXNwbGF5Rm9ybWF0O1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxuICAgICAgPyB1aS5mb3JtYXRcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgPyAneCdcbiAgICAgICAgOiAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gICAgLy8gw6XChcKsw6XChcKxQVBJXG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdG9Cb29sKHVpLmFsbG93Q2xlYXIsIHRydWUpLFxuICAgICAgLy8gbnotZGF0ZS1waWNrZXJcbiAgICAgIHNob3dUb2RheTogdG9Cb29sKHVpLnNob3dUb2RheSwgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFtdIDogW3ZhbHVlLCB0aGlzLmVuZFByb3BlcnR5LmZvcm1EYXRhXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy5mb3JtYXQpKVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudC5wcm9wZXJ0aWVzW3RoaXMudWkuZW5kXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10aW1lJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10aW1lLXBpY2tlclxuICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpGb3JtYXRdPVwiaS5kaXNwbGF5Rm9ybWF0XCJcbiAgICAgIFtuekFsbG93RW1wdHldPVwiaS5hbGxvd0VtcHR5XCJcbiAgICAgIFtuekNsZWFyVGV4dF09XCJpLmNsZWFyVGV4dFwiXG4gICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cImkuZGVmYXVsdE9wZW5WYWx1ZVwiXG4gICAgICBbbnpEaXNhYmxlZEhvdXJzXT1cInVpLmRpc2FibGVkSG91cnNcIlxuICAgICAgW256RGlzYWJsZWRNaW51dGVzXT1cInVpLmRpc2FibGVkTWludXRlc1wiXG4gICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwidWkuZGlzYWJsZWRTZWNvbmRzXCJcbiAgICAgIFtuekhpZGVEaXNhYmxlZE9wdGlvbnNdPVwiaS5oaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgIFtuekhvdXJTdGVwXT1cImkuaG91clN0ZXBcIlxuICAgICAgW256TWludXRlU3RlcF09XCJpLm1pbnV0ZVN0ZXBcIlxuICAgICAgW256U2Vjb25kU3RlcF09XCJpLnNlY29uZFN0ZXBcIlxuICAgICAgW256UG9wdXBDbGFzc05hbWVdPVwidWkucG9wdXBDbGFzc05hbWVcIlxuICAgICAgPlxuICAgIDwvbnotdGltZS1waWNrZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXlWYWx1ZTogRGF0ZSA9IG51bGw7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBpOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdWkgPSB0aGlzLnVpO1xuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0XG4gICAgICA/IHVpLmZvcm1hdFxuICAgICAgOiB0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICA/ICd4J1xuICAgICAgICA6ICdISDptbTpzcyc7XG4gICAgdGhpcy5pID0ge1xuICAgICAgZGlzcGxheUZvcm1hdDogdWkuZGlzcGxheUZvcm1hdCB8fCAnSEg6bW06c3MnLFxuICAgICAgYWxsb3dFbXB0eTogdG9Cb29sKHVpLmFsbG93RW1wdHksIHRydWUpLFxuICAgICAgY2xlYXJUZXh0OiB1aS5jbGVhclRleHQgfHwgJ8OmwrjChcOpwpnCpCcsXG4gICAgICBkZWZhdWx0T3BlblZhbHVlOiB1aS5kZWZhdWx0T3BlblZhbHVlIHx8IG5ldyBEYXRlKCksXG4gICAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiB0b0Jvb2wodWkuaGlkZURpc2FibGVkT3B0aW9ucywgZmFsc2UpLFxuICAgICAgaG91clN0ZXA6IHVpLmhvdXJTdGVwIHx8IDEsXG4gICAgICBtaW51dGVTdGVwOiB1aS5uek1pbnV0ZVN0ZXAgfHwgMSxcbiAgICAgIHNlY29uZFN0ZXA6IHVpLnNlY29uZFN0ZXAgfHwgMSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB2ID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG5cbiAgICAvLyB0cnlpbmcgcmVzdG9yZSBmdWxsIERhdGUgZm9ybWF0XG4gICAgaWYgKHYgIT0gbnVsbCAmJiB2LnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnOicpLmxlbmd0aCA8PSAxKSB2YWx1ZSArPSAnOjAwJztcbiAgICAgIHYgPSBuZXcgRGF0ZShgMTk3MC0xLTEgYCArIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2O1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS51dGNFcG9jaCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShcbiAgICAgICAgRGF0ZS5VVEMoXG4gICAgICAgICAgMTk3MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgdmFsdWUuZ2V0SG91cnMoKSxcbiAgICAgICAgICB2YWx1ZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgdmFsdWUuZ2V0U2Vjb25kcygpLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZShmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotcmFkaW8tZ3JvdXBcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpOYW1lXT1cImlkXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdHlsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZGF0YVwiXG4gICAgICAgICAgbnotcmFkaW9cbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uLmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN0eWxlVHlwZVwiPlxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcbiAgICAgICAgICBuei1yYWRpby1idXR0b25cbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uLmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei1yYWRpby1ncm91cD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IGFueVtdID0gW107XG4gIHN0eWxlVHlwZTogYm9vbGVhbjtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zdHlsZVR5cGUgPSAodGhpcy51aS5zdHlsZVR5cGUgfHwgJ2RlZmF1bHQnKSA9PT0gJ2RlZmF1bHQnO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+ICh0aGlzLmRhdGEgPSBsaXN0KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLXRlbXBsYXRlICNhbGw+XG4gICAgPGxhYmVsICpuZ0lmPVwidWkuY2hlY2tBbGxcIiBuei1jaGVja2JveCBjbGFzcz1cIm1yLXNtXCJcbiAgICAgIFsobmdNb2RlbCldPVwiYWxsQ2hlY2tlZFwiXG4gICAgICBbbnpJbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgKGNsaWNrKT1cIm9uQWxsQ2hlY2tlZCgkZXZlbnQpXCI+XG4gICAgICB7eyB1aS5jaGVja0FsbFRleHQgfHwgJ8OlwoXCqMOpwoDCiScgfX1cbiAgICA8L2xhYmVsPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxuICAgIDxuei1jb2wgKm5nSWY9XCJkYXRhLmxlbmd0aCA+IDBcIiBbbnpTcGFuXT1cImxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XG4gICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XG4gICAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XG4gICAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgICA8bnotdG9vbHRpcCAqbmdJZj1cInVpLm9wdGlvbmFsSGVscFwiIFtuelRpdGxlXT1cInVpLm9wdGlvbmFsSGVscFwiPlxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cbiAgICAgICAgICA8L256LXRvb2x0aXA+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJjb250cm9sXCIgW256T2Zmc2V0XT1cIm9mZnNldFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5sZW5ndGggPT09IDBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveFxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3NldFZhbHVlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJzY2hlbWEudGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cbiAgICAgICAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XG4gICAgICAgICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZF9zcGFuID09PSAwXCI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8bnotY2hlY2tib3gtZ3JvdXAgW25nTW9kZWxdPVwiZGF0YVwiIChuZ01vZGVsQ2hhbmdlKT1cIm5vdGlmeVNldCgpXCI+PC9uei1jaGVja2JveC1ncm91cD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiAhPT0gMFwiPlxuICAgICAgICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlciBjbGFzcz1cImNoZWNrYm94LWdyaWQtbGlzdFwiIChuek9uQ2hhbmdlKT1cImdyb3VwSW5HcmlkQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8bnotcm93PlxuICAgICAgICAgICAgICAgICAgPG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiICpuZ0lmPVwidWkuY2hlY2tBbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICAgICAgICAgIDxuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbbnpWYWx1ZV09XCJpLnZhbHVlXCIgW25nTW9kZWxdPVwiaS5jaGVja2VkXCIgW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiPnt7aS5sYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgICAgICAgIDwvbnotcm93PlxuICAgICAgICAgICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuei1mb3JtLWV4dHJhICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L256LWZvcm0tZXh0cmE+XG4gICAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gIDwvbnotZm9ybS1pdGVtPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIGdyaWRfc3BhbjogbnVtYmVyO1xuICBsYWJlbDogbnVtYmVyO1xuICBjb250cm9sOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudWkuc3BhbkxhYmVsO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLnVpLnNwYW5Db250cm9sO1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmxhYmVsID0gbnVsbDtcbiAgICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMudWkuc3BhbkxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZF9zcGFuID0gdGhpcy51aS5zcGFuICYmIHRoaXMudWkuc3BhbiA+IDAgPyB0aGlzLnVpLnNwYW4gOiAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5U2V0KCkge1xuICAgIGNvbnN0IGNoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpLnNldFZhbHVlKGNoZWNrTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UoY2hlY2tMaXN0KTtcbiAgfVxuXG4gIGdyb3VwSW5HcmlkQ2hhbmdlKHZhbHVlczogYW55W10pIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChcbiAgICAgIGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHZhbHVlcy5pbmRleE9mKGl0ZW0udmFsdWUpICE9PSAtMSksXG4gICAgKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKGU6IEV2ZW50KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSBmYWxzZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDaGFuZ2UocmVzOiBib29sZWFuIHwgU0ZTY2hlbWFFbnVtW10pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHJlcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWJvb2xlYW4nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei1zd2l0Y2hcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuekNoZWNrZWRDaGlsZHJlbl09XCJ1aS5jaGVja2VkQ2hpbGRyZW5cIlxuICAgICAgW256VW5DaGVja2VkQ2hpbGRyZW5dPVwidWkudW5DaGVja2VkQ2hpbGRyZW5cIj5cbiAgICA8L256LXN3aXRjaD5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDx0ZXh0YXJlYSBuei1pbnB1dFxuICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256QXV0b3NpemVdPVwiYXV0b3NpemVcIj5cbiAgICA8L3RleHRhcmVhPlxuXG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogYW55ID0gdHJ1ZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRoaXMudWkuYXV0b3NpemU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXNlbGVjdFxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxuICAgICAgW256TWF4TXVsdGlwbGVDb3VudF09XCJpLm1heE11bHRpcGxlQ291bnRcIlxuICAgICAgW256TW9kZV09XCJpLm1vZGVcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIChuek9wZW5DaGFuZ2UpPVwib3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuek9uU2VhcmNoKT1cInNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNjcm9sbFRvQm90dG9tKT1cInNjcm9sbFRvQm90dG9tKCRldmVudClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGFzR3JvdXBcIj5cbiAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvIG9mIGRhdGFcIlxuICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWRcIj5cbiAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNHcm91cFwiPlxuICAgICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIiBbbnpMYWJlbF09XCJpLmxhYmVsXCI+XG4gICAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgaS5jaGlsZHJlblwiXG4gICAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcbiAgICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxuICAgICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG4gIGhhc0dyb3VwID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdGhpcy51aS5hbGxvd0NsZWFyLFxuICAgICAgYXV0b0ZvY3VzOiB0b0Jvb2wodGhpcy51aS5hdXRvRm9jdXMsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiB0aGlzLnVpLmRyb3Bkb3duQ2xhc3NOYW1lIHx8IG51bGwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh0aGlzLnVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBzZXJ2ZXJTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNlcnZlclNlYXJjaCwgZmFsc2UpLFxuICAgICAgbWF4TXVsdGlwbGVDb3VudDogdGhpcy51aS5tYXhNdWx0aXBsZUNvdW50IHx8IEluZmluaXR5LFxuICAgICAgbW9kZTogdGhpcy51aS5tb2RlIHx8ICdkZWZhdWx0JyxcbiAgICAgIG5vdEZvdW5kQ29udGVudDogdGhpcy51aS5ub3RGb3VuZENvbnRlbnQgfHwgJ8OmwpfCoMOmwrPClcOmwonCvsOlwojCsCcsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodGhpcy51aS5zaG93U2VhcmNoLCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5oYXNHcm91cCA9IGxpc3QuZmlsdGVyKHcgPT4gdy5ncm91cCA9PT0gdHJ1ZSkubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWVzOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlcyk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xuICB9XG5cbiAgb3BlbkNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub3BlbkNoYW5nZSkgdGhpcy51aS5vcGVuQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHNlYXJjaENoYW5nZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy51aS5vblNlYXJjaCkge1xuICAgICAgdGhpcy51aS5vblNlYXJjaCh0ZXh0KS50aGVuKChyZXM6IGFueVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20pIHRoaXMudWkuc2Nyb2xsVG9Cb3R0b20odmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgdG9Cb29sLCBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmVlLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LXRyZWUtc2VsZWN0XG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256RHJvcGRvd25TdHlsZV09XCJ1aS5kcm9wZG93blN0eWxlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJpLmNoZWNrYWJsZVwiXG4gICAgICBbbnpTaG93RXhwYW5kXT1cImkuc2hvd0V4cGFuZFwiXG4gICAgICBbbnpTaG93TGluZV09XCJpLnNob3dMaW5lXCJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJpLmFzeW5jRGF0YVwiXG4gICAgICBbbnpOb2Rlc109XCJkYXRhXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRBbGxdPVwiaS5kZWZhdWx0RXhwYW5kQWxsXCJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRlZEtleXNdPVwidWkuZGVmYXVsdEV4cGFuZGVkS2V5c1wiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJlZS1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBwcml2YXRlIGRjKCkge1xuICAgIC8vIE11c2Ugd2FpdCBgbnotdHJlZS1zZWxlY3RgIHdyaXRlIHZhbHVlc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbkRhdGEobGlzdDogU0ZTY2hlbWFFbnVtW10pIHtcbiAgICByZXR1cm4gbGlzdC5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShkZWVwQ29weShub2RlKSBhcyBhbnkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdWkuYWxsb3dDbGVhcixcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh1aS5zaG93U2VhcmNoLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh1aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh1aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgY2hlY2thYmxlOiB0b0Jvb2wodWkuY2hlY2thYmxlLCBmYWxzZSksXG4gICAgICBzaG93RXhwYW5kOiB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSksXG4gICAgICBzaG93TGluZTogdG9Cb29sKHVpLnNob3dMaW5lLCBmYWxzZSksXG4gICAgICBhc3luY0RhdGE6IHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgPT09ICdmdW5jdGlvbicsXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZSksXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSlcbiAgICAgIC5waXBlKG1hcChsaXN0ID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cblxuICBjaGFuZ2UodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZXhwYW5kQ2hhbmdlKGU6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHVpLmV4cGFuZENoYW5nZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgIHVpLmV4cGFuZENoYW5nZShlKVxuICAgICAgLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGUubm9kZS5hZGRDaGlsZHJlbihyZXMpO1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRhZ1xuICAgICAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiXG4gICAgICBuek1vZGU9XCJjaGVja2FibGVcIlxuICAgICAgW256Q2hlY2tlZF09XCJpLmNoZWNrZWRcIlxuICAgICAgKG56QWZ0ZXJDbG9zZSk9XCJfYWZ0ZXJDbG9zZSgpXCJcbiAgICAgIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIlxuICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkNoYW5nZShpKVwiPlxuICAgICAge3tpLmxhYmVsfX1cbiAgICA8L256LXRhZz5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSkge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgX2FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDbG9zZSkgdGhpcy51aS5hZnRlckNsb3NlKCk7XG4gIH1cblxuICBfY2xvc2UoZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdXBsb2FkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei11cGxvYWRcbiAgICAgIFtuelR5cGVdPVwiaS50eXBlXCJcbiAgICAgIFtuekZpbGVMaXN0XT1cImZpbGVMaXN0XCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuekFjdGlvbl09XCJpLmFjdGlvblwiXG4gICAgICBbbnpBY2NlcHRdPVwiaS5hY2NlcHRcIlxuICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXG4gICAgICBbbnpTaXplXT1cImkuc2l6ZVwiXG4gICAgICBbbnpGaWxlVHlwZV09XCJpLmZpbGVUeXBlXCJcbiAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXG4gICAgICBbbnpEYXRhXT1cInVpLmRhdGFcIlxuICAgICAgW256TGlzdFR5cGVdPVwiaS5saXN0VHlwZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuek5hbWVdPVwiaS5uYW1lXCJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cImkuc2hvd1VwbG9hZExpc3RcIlxuICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcbiAgICAgIFtuelJlbW92ZV09XCJ1aS5yZW1vdmVcIlxuICAgICAgW256UHJldmlld109XCJoYW5kbGVQcmV2aWV3XCJcbiAgICAgIChuekNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYnRuVHlwZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncGx1cydcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1wbHVzXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWluYm94XCI+PC9pPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tdXBsb2FkXCI+PC9pPjxzcGFuIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotdXBsb2FkPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGk6IGFueTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBidG5UeXBlID0gJyc7XG5cbiAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSkge1xuICAgIHN1cGVyKGNkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHR5cGU6IHRoaXMudWkudHlwZSB8fCAnc2VsZWN0JyxcbiAgICAgIHRleHQ6IHRoaXMudWkudGV4dCB8fCAnw6fCgsK5w6XCh8K7w6TCuMKKw6TCvMKgJyxcbiAgICAgIGFjdGlvbjogdGhpcy51aS5hY3Rpb24gfHwgJycsXG4gICAgICBhY2NlcHQ6IHRoaXMudWkuYWNjZXB0IHx8ICcnLFxuICAgICAgbGltaXQ6IHRoaXMudWkubGltaXQgPT0gbnVsbCA/IDAgOiArdGhpcy51aS5saW1pdCxcbiAgICAgIHNpemU6IHRoaXMudWkuc2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLnNpemUsXG4gICAgICBmaWxlVHlwZTogdGhpcy51aS5maWxlVHlwZSB8fCAnJyxcbiAgICAgIGxpc3RUeXBlOiB0aGlzLnVpLmxpc3RUeXBlIHx8ICd0ZXh0JyxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodGhpcy51aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgbmFtZTogdGhpcy51aS5uYW1lIHx8ICdmaWxlJyxcbiAgICAgIHNob3dVcGxvYWRMaXN0OiB0b0Jvb2wodGhpcy51aS5zaG93VXBsb2FkTGlzdCwgdHJ1ZSksXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh0aGlzLnVpLndpdGhDcmVkZW50aWFscywgZmFsc2UpLFxuICAgICAgcmVzUmVOYW1lOiAodGhpcy51aS5yZXNSZU5hbWUgfHwgJycpLnNwbGl0KCcuJyksXG4gICAgfTtcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xuICAgIGlmICh0aGlzLmkudHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmkubGlzdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xuICAgICAgdGhpcy5pLnRleHQgPSB0aGlzLnVpLnRleHQgfHwgYMOlwo3ClcOlwofCu8OmwojClsOmwovClsOlworCqMOmwpbCh8OkwrvCtsOlwojCsMOowq/CpcOlwozCusOlwp/Cn8OkwrjCisOkwrzCoGA7XG4gICAgICB0aGlzLmkuaGludCA9XG4gICAgICAgIHRoaXMudWkuaGludCB8fCBgw6bClMKvw6bCjMKBw6XCjcKVw6TCuMKqw6bCiMKWw6bCicK5w6nCh8KPw6/CvMKMw6TCuMKlw6fCpsKBw6TCuMKKw6TCvMKgw6XChcKsw6XCj8K4w6bClcKww6bCjcKuw6bCiMKWw6XChcK2w6TCu8KWw6XCrsKJw6XChcKow6bClsKHw6TCu8K2YDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoYXJnczogVXBsb2FkQ2hhbmdlUGFyYW0pIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGFyZ3MpO1xuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KGFyZ3MuZmlsZUxpc3QpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5maWxlTGlzdCA9IGxpc3QgYXMgVXBsb2FkRmlsZVtdO1xuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmZpbGVMaXN0KTtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeShmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cbiAgICAgIGRlZXBHZXQoaXRlbS5yZXNwb25zZSwgdGhpcy5pLnJlc1JlTmFtZSwgaXRlbS5yZXNwb25zZSksXG4gICAgKTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuaS5tdWx0aXBsZSA9PT0gdHJ1ZSA/IHJlcyA6IHJlcy5wb3AoKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcbiAgICB0aGlzLm1vZGFsU3J2XG4gICAgICAuY3JlYXRlKHtcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XG4gICAgICAgICAgZmlsZS50aHVtYlVybH1cIiBjbGFzcz1cImltZy1mbHVpZFwiIC8+YCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJhbnNmZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRyYW5zZmVyXG4gICAgICBbbnpEYXRhU291cmNlXT1cImxpc3RcIlxuICAgICAgW256VGl0bGVzXT1cImkudGl0bGVzXCJcbiAgICAgIFtuek9wZXJhdGlvbnNdPVwiaS5vcGVyYXRpb25zXCJcbiAgICAgIFtuekxpc3RTdHlsZV09XCJ1aS5saXN0U3R5bGVcIlxuICAgICAgW256SXRlbVVuaXRdPVwiaS5pdGVtVW5pdFwiXG4gICAgICBbbnpJdGVtc1VuaXRdPVwiaS5pdGVtc1VuaXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekZpbHRlck9wdGlvbl09XCJ1aS5maWx0ZXJPcHRpb25cIlxuICAgICAgW256U2VhcmNoUGxhY2Vob2xkZXJdPVwidWkuc2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpDYW5Nb3ZlXT1cIl9jYW5Nb3ZlXCJcbiAgICAgIChuekNoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3RDaGFuZ2UpPVwiX3NlbGVjdENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmFuc2Zlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IGFueVtdID0gW107XG4gIGk6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogdGhpcy51aS5vcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ8OpwqHCuScsXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfDqcKhwrknLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5fZGF0YS5tYXAoaSA9PiBpLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBhbnkpOiBPYnNlcnZhYmxlPGFueVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdENoYW5nZSkgdGhpcy51aS5zZWxlY3RDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zbGlkZXJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpNYXJrc109XCJtYXJrc1wiXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxuICAgICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgICAgW256VmVydGljYWxdPVwidWkudmVydGljYWxcIlxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotc2xpZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBtYXJrczogYW55O1xuICBpbmNsdWRlZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2NoZW1hLm1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcblxuICAgIHRoaXMubWFya3MgPSB0aGlzLnVpLm1hcmtzIHx8IG51bGw7XG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMudWkuZm9ybWF0dGVyKSByZXR1cm4gdGhpcy51aS5mb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jdXN0b20nLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KHVpKS5fcmVuZGVyXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7JGltcGxpY2l0OiB0aGlzLCBzY2hlbWE6IHNjaGVtYSwgdWk6IHVpIH1cIj48L25nLXRlbXBsYXRlPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1yYXRlXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXG4gICAgICBbbnpBbGxvd0hhbGZdPVwiYWxsb3dIYWxmXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxuICAgICAgW256Q291bnRdPVwiY291bnRcIj48L256LXJhdGU+XG4gICAgPHNwYW4gKm5nSWY9XCJoYXNUZXh0ICYmIGZvcm1Qcm9wZXJ0eS52YWx1ZVwiIGNsYXNzPVwiYW50LXJhdGUtdGV4dFwiPnt7IGdlblRleHQoKSB9fTwvc3Bhbj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY291bnQ6IG51bWJlcjtcbiAgYWxsb3dIYWxmOiBib29sZWFuO1xuICBhbGxvd0NsZWFyOiBib29sZWFuO1xuICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIGhhc1RleHQgPSBmYWxzZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgNTtcbiAgICB0aGlzLmFsbG93SGFsZiA9ICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDAuNSkgPT09IDAuNTtcbiAgICB0aGlzLmFsbG93Q2xlYXIgPSB0b0Jvb2wodGhpcy51aS5hbGxvd0NsZWFyLCB0cnVlKTtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpO1xuICAgIHRoaXMuaGFzVGV4dCA9ICEhdGhpcy51aS50ZXh0O1xuICB9XG5cbiAgZ2VuVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNUZXh0XG4gICAgICA/ICh0aGlzLnVpLnRleHQgYXMgc3RyaW5nKS5yZXBsYWNlKCd7e3ZhbHVlfX0nLCB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZSlcbiAgICAgIDogJyc7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGZsYXRNYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBFTUFJTFNVRkZJWCA9IFtcbiAgJ3FxLmNvbScsXG4gICcxNjMuY29tJyxcbiAgJ2dtYWlsLmNvbScsXG4gICcxMjYuY29tJyxcbiAgJ2FsaXl1bi5jb20nLFxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgICAgPGlucHV0IG56LWlucHV0IFtuekF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPG56LWF1dG9jb21wbGV0ZSAjYXV0b1xuICAgICAgICBbbnpCYWNrZmlsbF09XCJpLmJhY2tmaWxsXCJcbiAgICAgICAgW256RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uXT1cImkuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uXCJcbiAgICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXG4gICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50Py5uelZhbHVlKVwiPlxuICAgICAgICA8bnotYXV0by1vcHRpb24gKm5nRm9yPVwibGV0IGkgb2YgbGlzdCB8IGFzeW5jXCIgW256VmFsdWVdPVwiaS5sYWJlbFwiPnt7aS5sYWJlbH19PC9uei1hdXRvLW9wdGlvbj5cbiAgICAgIDwvbnotYXV0b2NvbXBsZXRlPlxuICAgIDwvc2YtaXRlbS13cmFwPlxuICAgIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsaXN0OiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPjtcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbCh0aGlzLnVpLmJhY2tmaWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXG4gICAgICB3aWR0aDogdGhpcy51aS53aWR0aCB8fCB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gdGhpcy51aS5maWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiB0aGlzLnVpLmZpbHRlck9wdGlvbjtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyT3B0aW9uID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxuICAgICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKChpbnB1dCB8fCAnJykudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIXRoaXMudWkuYXN5bmNEYXRhO1xuICAgIGNvbnN0IG9yZ1RpbWUgPSArKHRoaXMudWkuZGVib3VuY2VUaW1lIHx8IDApO1xuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKFxuICAgICAgICBpbnB1dCA9PlxuICAgICAgICAgIHRoaXMuaXNBc3luYyA/IHRoaXMudWkuYXN5bmNEYXRhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCksXG4gICAgICApLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpKSxcbiAgICApO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShFTUFJTFNVRkZJWCwgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxuICAgICAgICAgIHRoaXMuc2NoZW1hLmVudW0sXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHlcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJEYXRhKGlucHV0OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbWFpbFN1ZmZpeChpbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgdGhpcy5maXhEYXRhLmZpbHRlcihvcHRpb24gPT4gdGhpcy5maWx0ZXJPcHRpb24oaW5wdXQsIG9wdGlvbikpLFxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBvZihcbiAgICAgICF2YWx1ZSB8fCB+dmFsdWUuaW5kZXhPZignQCcpXG4gICAgICAgID8gW11cbiAgICAgICAgOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LWNhc2NhZGVyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuek9wdGlvbnNdPVwiZGF0YVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cInVpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpDaGFuZ2VPbl09XCJ1aS5jaGFuZ2VPblwiXG4gICAgICBbbnpDaGFuZ2VPblNlbGVjdF09XCJ1aS5jaGFuZ2VPblNlbGVjdFwiXG4gICAgICBbbnpDb2x1bW5DbGFzc05hbWVdPVwidWkuY29sdW1uQ2xhc3NOYW1lXCJcbiAgICAgIFtuekV4cGFuZFRyaWdnZXJdPVwidWkuZXhwYW5kVHJpZ2dlclwiXG4gICAgICBbbnpNZW51Q2xhc3NOYW1lXT1cInVpLm1lbnVDbGFzc05hbWVcIlxuICAgICAgW256TWVudVN0eWxlXT1cInVpLm1lbnVTdHlsZVwiXG4gICAgICBbbnpMYWJlbFByb3BlcnR5XT1cInVpLmxhYmVsUHJvcGVydHlcIlxuICAgICAgW256VmFsdWVQcm9wZXJ0eV09XCJ1aS52YWx1ZVByb3BlcnR5XCJcbiAgICAgIFtuekxvYWREYXRhXT1cImxvYWREYXRhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxuICAgICAgW256U2hvd0lucHV0XT1cInNob3dJbnB1dFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxuICAgICAgKG56Q2xlYXIpPVwiX2NsZWFyKCRldmVudClcIlxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJfdmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotY2FzY2FkZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ8OmwrjChcOpwpnCpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy51aS52aXNpYmxlQ2hhbmdlICYmIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51aS5jaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZSAmJiB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3QgJiYgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5jbGVhciAmJiB0aGlzLnVpLmNsZWFyKG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgICA8bnotbWVudGlvbiAjbWVudGlvbnNcbiAgICAgICAgW256U3VnZ2VzdGlvbnNdPVwiZGF0YVwiXG4gICAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXG4gICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXG4gICAgICAgIFtuelByZWZpeF09XCJpLnByZWZpeFwiXG4gICAgICAgIChuek9uU2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1aS5pbnB1dFN0eWxlICE9PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgPGlucHV0IG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuek1lbnRpb25UcmlnZ2VyIG56LWlucHV0XG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJ1aS5hdXRvc2l6ZVwiPlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L256LW1lbnRpb24+XG5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdtZW50aW9ucycpIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBhbnk7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB2YWx1ZVdpdGg6IHRoaXMudWkudmFsdWVXaXRoIHx8IChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgbm90Rm91bmRDb250ZW50OlxuICAgICAgICB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6XCjMK5w6nChcKNw6fCu8KTw6bCnsKcw6/CvMKMw6jCvcK7w6bClcKyw6fCqcK6w6bCoMK8w6XCrsKMw6bCiMKQw6jCvsKTw6XChcKlJyxcbiAgICAgIHBsYWNlbWVudDogdGhpcy51aS5wbGFjZW1lbnQgfHwgJ2JvdHRvbScsXG4gICAgICBwcmVmaXg6IHRoaXMudWkucHJlZml4IHx8ICdAJyxcbiAgICB9O1xuICAgIGNvbnN0IG1pbiA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1pbmltdW0gOiAtMSxcbiAgICAgIG1heCA9XG4gICAgICAgIHR5cGVvZiB0aGlzLnNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc2NoZW1hLm1heGltdW0gOiAtMTtcbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9IChcbiAgICAgICAgdmFsdWU6IGFueSxcbiAgICAgICAgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksXG4gICAgICAgIGZvcm06IFByb3BlcnR5R3JvdXAsXG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLm1lbnRpb25DaGlsZC5nZXRNZW50aW9ucygpLmxlbmd0aDtcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBgw6bCnMKAw6XCsMKRw6bCj8KQw6XCj8KKICR7bWlufSDDpsKswqFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYMOmwpzCgMOlwqTCmsOmwo/CkMOlwo/CiiAke21heH0gw6bCrMKhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0KSB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWFyY2gob3B0aW9uOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudWkubG9hZERhdGEgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgKHRoaXMudWkubG9hZERhdGEob3B0aW9uKSBhcyBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT4pXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSkpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICB7eyB2YWx1ZSB8fCB1aS5kZWZhdWx0VGV4dCB8fCAnLScgfX1cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudWkuX3JlcXVpcmVkID0gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi4vd2lkZ2V0LmZhY3RvcnknO1xuXG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vdGltZS90aW1lLndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZVdpZGdldCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRXaWRnZXQgfSBmcm9tICcuL3RleHQvdGV4dC53aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgTnpXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ29iamVjdCcsIE9iamVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXJyYXknLCBBcnJheVdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0JywgVGV4dFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc3RyaW5nJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdudW1iZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2ludGVnZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2RhdGUnLCBEYXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0aW1lJywgVGltZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFkaW8nLCBSYWRpb1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2hlY2tib3gnLCBDaGVja2JveFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYm9vbGVhbicsIEJvb2xlYW5XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHRhcmVhJywgVGV4dGFyZWFXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NlbGVjdCcsIFNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJlZS1zZWxlY3QnLCBUcmVlU2VsZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0YWcnLCBUYWdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3VwbG9hZCcsIFVwbG9hZFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJhbnNmZXInLCBUcmFuc2ZlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2xpZGVyJywgU2xpZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYXRlJywgUmF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXV0b2NvbXBsZXRlJywgQXV0b0NvbXBsZXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjYXNjYWRlcicsIENhc2NhZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdtZW50aW9uJywgTWVudGlvbldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY3VzdG9tJywgQ3VzdG9tV2lkZ2V0KTtcblxuICAgIHRoaXMuc2V0RGVmYXVsdChTdHJpbmdXaWRnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbn0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZJdGVtV3JhcENvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRlRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU0ZGaXhlZERpcmVjdGl2ZSB9IGZyb20gJy4vc2YtZml4ZWQuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgU0ZDb21wb25lbnQsXG4gIFNGSXRlbUNvbXBvbmVudCxcbiAgU0ZJdGVtV3JhcENvbXBvbmVudCxcbiAgU0ZUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgU0ZGaXhlZERpcmVjdGl2ZSxcbl07XG5cbi8vIHJlZ2lvbjogd2lkZ2V0c1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgTnpXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnknO1xuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldCc7XG5pbXBvcnQgeyBUaW1lV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBCb29sZWFuV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0JztcbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcbmltcG9ydCB7IFJhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0JztcbmltcG9ydCB7IE1lbnRpb25XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQnO1xuXG5jb25zdCBXSURHRVRTID0gW1xuICBPYmplY3RXaWRnZXQsXG4gIEFycmF5V2lkZ2V0LFxuICBTdHJpbmdXaWRnZXQsXG4gIE51bWJlcldpZGdldCxcbiAgRGF0ZVdpZGdldCxcbiAgVGltZVdpZGdldCxcbiAgUmFkaW9XaWRnZXQsXG4gIENoZWNrYm94V2lkZ2V0LFxuICBCb29sZWFuV2lkZ2V0LFxuICBUZXh0YXJlYVdpZGdldCxcbiAgU2VsZWN0V2lkZ2V0LFxuICBUcmVlU2VsZWN0V2lkZ2V0LFxuICBUYWdXaWRnZXQsXG4gIFVwbG9hZFdpZGdldCxcbiAgVHJhbnNmZXJXaWRnZXQsXG4gIFNsaWRlcldpZGdldCxcbiAgUmF0ZVdpZGdldCxcbiAgQXV0b0NvbXBsZXRlV2lkZ2V0LFxuICBDYXNjYWRlcldpZGdldCxcbiAgTWVudGlvbldpZGdldCxcbiAgQ3VzdG9tV2lkZ2V0LFxuICBUZXh0V2lkZ2V0LFxuXTtcblxuLy8gZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLldJREdFVFNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5XSURHRVRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEZWxvbkZvcm1Db25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgIHVzZUNsYXNzOiBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LCB1c2VDbGFzczogTnpXaWRnZXRSZWdpc3RyeSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBw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