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
        value = this.toDate(value);
        if (this.flatRange) {
            this.displayValue = value == null ? [] : [value, this.toDate(this.endProperty.formData)];
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
    /**
     * @param {?} value
     * @return {?}
     */
    toDate(value) {
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(+value))) {
            value = new Date(+value);
        }
        return value;
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
        [nzShowTime]="ui.showTime"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2Vycm9ycy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2NvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3V0aWxzLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2F0b21pYy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL251bWJlci5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL3N0cmluZy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Jvb2xlYW4ucHJvcGVydHkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL29iamVjdC5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3ZhbGlkYXRvci5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0LmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWZpeGVkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGltZS90aW1lLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBgw6XCuMKDw6XCsMKUw6bCqMKhw6XCvMKPw6XCh8K6w6nClMKZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYMOmwpfCoMOmwrPClcOmwonCvsOlwojCsMOlwrzClcOnwpTCqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYMOkwrjCjcOlwoXCgcOowq7CuMOowrbChcOowr/Ch3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYMOkwrjCjcOlwoXCgcOowq7CuMOmwpzCicOpwqLCncOlwqTClsOnwprChMOlwrHCnsOmwoDCp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDDpsKVwrDDpsKNwq7DpcK6wpTDpMK4wrogYW55T2Ygw6bCicKAw6bCjMKHw6XCrsKaw6fCmsKEw6XChcK2w6TCuMKtw6TCuMKAw6TCuMKqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwovCpcOmwpzCicOlwrHCnsOmwoDCp3twcm9wZXJ0eX3Dp8KawoTDpMK+wp3DqMK1wpbDpcKxwp7DpsKAwqd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6bCmMKvw6nCosKEw6jCrsK+w6XCrsKaw6fCmsKEw6bCnsKaw6TCuMK+w6XCgMK8w6TCucKLw6TCuMKAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsIC8vIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKgwrzDpcK8wo8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYMOnwrHCu8Olwp7Ci8OlwrrClMOlwr3Ck8OmwpjCryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBgw6XCv8KFw6XCocKrw6nCocK5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYMOowofCs8OlwqTCmiB7bGltaXR9IMOkwrjCqsOlwq3Cl8OnwqzCpmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKwwpEge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqbDpMK7wqXDpMK4wopgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCpMKaw6TCusKOIHtsaW1pdH0gw6TCuMKqw6nCocK5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDDpMK4wo3DpcK6wpTDpcKkwprDpMK6wo4ge2xpbWl0fSDDpMK4wqrDpcKxwp7DpsKAwqdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCsMKRw6TCusKOIHtsaW1pdH0gw6TCuMKqw6XCscKew6bCgMKnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCryB7bXVsdGlwbGVPZn0gw6fCmsKEw6bClcK0w6bClcKww6XCgMKNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwozCucOpwoXCjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDDpcKPwqrDqMKDwr3DpcKMwrnDqcKFwo3DpMK4woDDpMK4wqogXCJvbmVPZlwiIMOkwrjCrcOnwprChCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwr3Ck8OlwpDCq8OmwpzCicOpwofCjcOlwqTCjcOpwqHCuSAow6fCrMKsIHtqfSDDqcKhwrnDpMK4wo7Dp8Kswqwge2l9IMOpwqHCucOmwpjCr8OpwofCjcOlwqTCjcOnwprChClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBgw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYMOlwrHCnsOmwoDCp8OlwpDCjSBcIntwcm9wZXJ0eU5hbWV9XCIgw6bCl8Kgw6bClcKIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpzCicOlwrHCnsOmwoDCp8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYMOnwpTCscOkwrrCjiB7Y2FzZUluZGV4fSDDpcKkwrHDqMK0wqXDr8K8wozDpsKcwqrDqcKAwprDqMK/wocgXCJzd2l0Y2hcIiDDpsKgwqHDqcKqwoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6fCrcKJw6TCusKOw6XCuMK4w6nCh8KPYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozChcOlwpDCq8OkwrjCgMOkwrjCqsOmwpzCicOmwpXCiMOpwqHCuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpcKMwrnDqcKFwo3DpsKowqHDpcK8wo8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq/DpsKWwofDpsKcwqzDr8K8wozDqcKUwq7DpcKQwo3DqMK1wp7DpcKQwowgYEVycm9yRGF0YS5rZXl3b3JkYCDDpcKAwrxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKPwqrDpcKxwpXDp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDpMK4wo3DpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDDpcKAwrzDpcKnwovDp8K7wojDpcKMwoXDpcKQwqsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiIsImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRVJST1JTREVGQVVMVCB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWyAndHlwZScsICdlbnVtJyBdYFxuICAgKlxuICAgKiAtIGB0eXBlYCDDqcKZwpDDpcKuwpogU2NoZW1hIMOkwrjCrSBgdHlwZWAgw6fCscK7w6XCnsKLXG4gICAqIC0gYGVudW1gIMOpwpnCkMOlwq7CmsOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXSA9IFsndHlwZScsICdlbnVtJ107XG4gIC8qKlxuICAgKiBbYWp2XShodHRwOi8vZXBvYmVyZXpraW4uZ2l0aHViLmlvL2Fqdi8jb3B0aW9ucykgw6XCj8KCw6bClcKwXG4gICAqL1xuICBhanY/OiBhbnk7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xuICAvKipcbiAgICogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBvbmBcbiAgICovXG4gIGF1dG9jb21wbGV0ZT86ICdvbicgfCAnb2ZmJyA9IG51bGw7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD8gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwo/CqsOlwrHClcOnwqTCusOpwpTCmcOowq/Cr8OowqfChsOowqfCicOkwrjCjcOmwpjCvsOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKAwprDp8KUwqjDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq9cbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBFUlJPUlNERUZBVUxUO1xuICAvKipcbiAgICogw6nCu8KYw6jCrsKkw6XChcKow6XCscKAw6XCuMKDw6XCscKAXG4gICAqL1xuICB1aT86IFNGVUlTY2hlbWFJdGVtO1xuICAvKipcbiAgICogw6XChcKDw6fCtMKgw6fCu8KEw6TCu8K2w6XCpMKnw6XCsMKPw6/CvMKMw6fClMKow6TCusKOIGBuelNpemVgIMOlwoDCvFxuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6nCo8KOw6bCoMK8XG4gICAqL1xuICBidXR0b24/OiBTRkJ1dHRvbiA9IHtcbiAgICBzdWJtaXRfdHlwZTogJ3ByaW1hcnknLFxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgLyoqXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWVlZWS1NTS1ERCBISDptbTpzc2BcbiAgICovXG4gIHVpRGF0ZVN0cmluZ0Zvcm1hdD8gPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG4gIC8qKlxuICAgKiBkYXRlw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXBcbiAgICovXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJzdHJpbmdcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0PyA9ICdISDptbTpzcyc7XG4gIC8qKlxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXDDr8K8wozDpsKXwqXDpsKcwp/Dp8K7wp/DpMK4woDDpMK9wr/Dp8KUwqggYDE5NzAtMDEtMDFgXG4gICAqL1xuICB1aVRpbWVOdW1iZXJGb3JtYXQ/ID0gJ3gnO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjb25zdCBGT1JNQVRNQVBTID0ge1xuICAnZGF0ZS10aW1lJzoge1xuICAgIHdpZGdldDogJ2RhdGUnLFxuICAgIHNob3dUaW1lOiB0cnVlLFxuICAgIGZvcm1hdDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyxcbiAgfSxcbiAgZGF0ZTogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gIHRpbWU6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgJ2Z1bGwtdGltZSc6IHsgd2lkZ2V0OiAndGltZScgfSxcbiAgd2VlazogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ3dlZWsnLCBmb3JtYXQ6ICdZWVlZLVdXJyB9LFxuICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcbiAgdXJpOiB7IHdpZGdldDogJ3VwbG9hZCcgfSxcbiAgZW1haWw6IHsgd2lkZ2V0OiAnYXV0b2NvbXBsZXRlJywgdHlwZTogJ2VtYWlsJyB9LFxuICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbn1cblxuLyoqIMOmwqDCucOmwo3CriBgJHJlZmAgw6bCn8Klw6bCicK+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIMOlwo/ClsOlwpvCnlNjaGVtYcOvwrzCjMOlwrnCtsOlwqTChMOnwpDChiBgJHJlZmAgw6fCmsKEw6XChcKzw6fCs8K7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxuKTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xuXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLFxuICAgIGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZi5wcm9wZXJ0aWVzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbi5yZXF1aXJlZCk7XG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBjb25zdCBoYXNFbHNlID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdlbHNlJyk7XG4gIGlmIChoYXNFbHNlKSB7XG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlLnJlcXVpcmVkKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmLnByb3BlcnRpZXNba2V5XS5lbnVtO1xuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZC5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuLnJlcXVpcmVkLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xuICBpZiAoaGFzRWxzZSlcbiAgICBzY2hlbWEuZWxzZS5yZXF1aXJlZC5mb3JFYWNoKFxuICAgICAga2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSxcbiAgICApO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcbiAgZGV0ZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSBhcnIgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCxcbiAgICApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyxcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiA8U0ZTY2hlbWFFbnVtPnsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxuICBmb3JtRGF0YTogYW55LFxuICBhc3luY0FyZ3M/OiBhbnksXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKCkgPT4gdWkuX19kZXN0cm95ICE9PSB0cnVlKSxcbiAgICAgICAgbWFwKGxpc3QgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSksXG4gICAgICApO1xuICB9XG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpO1xufVxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgVGVybWluYXRvclNlcnZpY2Uge1xuICBvbkRlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KHRydWUpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+O1xuICBwcml2YXRlIF9lcnJvcnM6IEVycm9yRGF0YVtdID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9vYmpFcnJvcnM6IHsgW2tleTogc3RyaW5nXTogRXJyb3JEYXRhW10gfSA9IHt9O1xuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX2Vycm9yc0NoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgX3Jvb3Q6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhcmVudDogUHJvcGVydHlHcm91cDtcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnVpID0gdWk7XG4gICAgdGhpcy5zY2hlbWFWYWxpZGF0b3IgPSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LmNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYSwge1xuICAgICAgaW5nb3JlS2V5d29yZHM6IHRoaXMudWkuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1EYXRhIHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLl9yb290ID0gcGFyZW50LnJvb3Q7XG4gICAgfSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZUNoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcbiAgfVxuXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xuICAgIHJldHVybiB0aGlzLl9yb290IHx8IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOlwoDCvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6XCgMK8w6TCuMK6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDDpcKPwqrDpcKvwrnDpcK9wpPDpcKJwo3DpcKtwpfDpsKuwrXDpsKbwrTDpsKWwrDDpcKAwrzDpcKSwozDpsKgwqHDqcKqwozDr8K8wptgZmFsc2VgIMOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfaGFzVmFsdWUoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX3VwZGF0ZVZhbHVlKCk6IGFueTtcblxuICAvKipcbiAgICogw6bCm8K0w6bClsKww6XCgMK8w6TCuMKUw6bCoMKhw6nCqsKMw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxuICAgKiBAcGFyYW0gW2VtaXRWYWx1ZUV2ZW50PXRydWVdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkcOlwoDCvMOlwo/CmMOmwpvCtMOpwoDCmsOnwp/CpVxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBvbmx5U2VsZiA9IGZhbHNlLFxuICAgIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSxcbiAgICBlbWl0VmFsaWRhdG9yID0gdHJ1ZSxcbiAgKSB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcblxuICAgIGlmIChlbWl0VmFsdWVFdmVudCkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBgZW1pdFZhbGlkYXRvcmAgw6bCr8KPw6TCuMKAw6bCrMKhw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6XCt8Kyw6fCu8KPw6XCjMKFw6XCkMKrw6XCrsKMw6bClcK0w6nClMKZw6jCr8Kvw6nCk8K+w6jCt8Kvw6/CvMKMw6XCkMKOw6fCu8Ktw6fCiMK2w6jCisKCw6fCgsK5w6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8Kgw6nCocK7w6XChsKNw6jCp8Kmw6XCj8KRw6bCoMKhw6nCqsKMXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCBlbWl0VmFsdWVFdmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDDpsKgwrnDpsKNwq7DqMK3wq/DpcK+woTDpsKQwpzDp8K0wqLDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgc2VhcmNoUHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XG5cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XG4gICAgICBiYXNlID0gdGhpcy5maW5kUm9vdCgpO1xuICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IG51bGwgJiYgcHJvcC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcCA9IGJhc2UgPSBwcm9wLnBhcmVudDtcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiDDpsKfwqXDpsKJwr7DpsKgwrnDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cbiAgZmluZFJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgbGV0IHByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gPFByb3BlcnR5R3JvdXA+cHJvcGVydHk7XG4gIH1cblxuICAvLyByZWdpb246IHByb2Nlc3MgZXJyb3JzXG5cbiAgcHJpdmF0ZSBpc0VtcHR5RGF0YSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMw6XCmcKow6XCv8KFw6nCocK7w6jCh8Kzw6XCsMKRw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqICdtZXNzYWdlJyDDpcKxwp7DpsKAwqfDr8K8wozDp8KUwqjDpMK6wo7DqMKhwqjDp8KkwrrDqcKUwpnDqMKvwq/DpsKWwofDpsKcwqxgLFxuICAgICAgICAgICk7XG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgbmV3RXJyb3JzOiBFcnJvckRhdGEgfCBFcnJvckRhdGFbXSkge1xuICAgIGlmIChuZXdFcnJvcnMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCguLi5uZXdFcnJvcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcbiAgICBpZiAoZW1pdEZvcm1hdCAmJiBlcnJvcnMgJiYgIXRoaXMudWkub25seVZpc3VhbCkge1xuICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcCgoZXJyOiBFcnJvckRhdGEpID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxuICAgICAgICAgIGVyci5fY3VzdG9tID09PSB0cnVlICYmIGVyci5tZXNzYWdlXG4gICAgICAgICAgICA/IGVyci5tZXNzYWdlXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lcnJvcnNbZXJyLmtleXdvcmRdIHx8XG4gICAgICAgICAgICAgIGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlKGVycikgYXMgc3RyaW5nO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH4obWVzc2FnZSBhcyBzdHJpbmcpLmluZGV4T2YoJ3snKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcbiAgICAgICAgICAgICAgKHY6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGVyci5wYXJhbXNba2V5XSB8fCAnJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9ycywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcbiAgICBjb25zdCBwbGF0RXJyb3JzOiBFcnJvckRhdGFbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiAhcHJvcGVydHkudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRFcnJvcnMocGxhdEVycm9ycywgZmFsc2UpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBjb25kaXRpb25cblxuICBwcml2YXRlIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgIHRoaXMuX3Zpc2liaWxpdHlDaGFuZ2VzLm5leHQodmlzaWJsZSk7XG4gICAgLy8gw6nCg8Kow6XCiMKGw6bClcKww6bCjcKuw6bCusKQw6bCncKlw6jCh8KqIHJlc2V0XG4gICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgLy8gQSBmaWVsZCBpcyB2aXNpYmxlIGlmIEFUIExFQVNUIE9ORSBvZiB0aGUgcHJvcGVydGllcyBpdCBkZXBlbmRzIG9uIGlzIHZpc2libGUgQU5EIGhhcyBhIHZhbHVlIGluIHRoZSBsaXN0XG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCB2aXNpYmxlSWYgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbSkudmlzaWJsZUlmO1xuICAgIGlmICh0eXBlb2YgdmlzaWJsZUlmID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2aXNpYmxlSWYpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzQmluZGluZzogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCk7XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoZWNrID0gcHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gdmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2aS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2hlY2sgPSBwcm9wZXJ0eS5fdmlzaWJpbGl0eUNoYW5nZXM7XG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICB2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2tcbiAgICAgICAgICAgICkucGlwZShtYXAocmVzdWx0cyA9PiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pKTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNCaW5kaW5nLnB1c2goYW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgQ2FuJ3QgZmluZCBwcm9wZXJ0eSAke2RlcGVuZGVuY3lQYXRofSBmb3IgdmlzaWJpbGl0eSBjaGVjayBvZiAke1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aFxuICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbWJpbmVMYXRlc3QocHJvcGVydGllc0JpbmRpbmcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh2YWx1ZXMgPT4gdmFsdWVzLmluZGV4T2YodHJ1ZSkgIT09IC0xKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSB8IEZvcm1Qcm9wZXJ0eVtdID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcHJvcGVydHlJZCA9IHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoO1xuXG4gICAgbGV0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgIGlmIChcbiAgICAgIHByb3BlcnR5ICE9PSBudWxsICYmXG4gICAgICBzdWJQYXRoSWR4ICE9PSAtMSAmJlxuICAgICAgcHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwXG4gICAgKSB7XG4gICAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xuICAgICAgcHJvcGVydHkgPSAoPFByb3BlcnR5R3JvdXA+cHJvcGVydHkpLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBmb3JFYWNoQ2hpbGQoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgc3RyOiBTdHJpbmcpID0+IHZvaWQpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgICg8UHJvcGVydHlHcm91cD5jaGlsZCkuZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLl9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUocHJvcGVydHkgPT4ge1xuICAgICAgcHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0b21pY1Byb3BlcnR5IGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy53aWRnZXQpIHRoaXMud2lkZ2V0LnJlc2V0KHZhbHVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWxsYmFja1ZhbHVlKCkgIT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7fVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPVxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Qcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICB0aWNrID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IGFueSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcG9zID0gKyhzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aCk7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcGVydGllcyBhcyBQcm9wZXJ0eUdyb3VwW107XG4gICAgaWYgKGlzTmFOKHBvcykgfHwgcG9zID49IGxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgcmV0dXJuIGxpc3RbcG9zXS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCBbXTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModGhpcy5fdmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWU6IGFueVtdID0gW107XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBPYmplY3RQcm9wZXJ0eSwgXykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWUucHVzaChPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0eS5mb3JtRGF0YSwgcHJvcGVydHkudmFsdWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHRoaXMudWkuJGl0ZW1zLFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLFxuICAgICkgYXMgT2JqZWN0UHJvcGVydHk7XG4gICAgKDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXMpLnB1c2gobmV3UHJvcGVydHkpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnlbXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KGl0ZW0pO1xuICAgICAgcHJvcGVydHkucmVzZXRWYWx1ZShpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXJyb3JzKHBhdGg/OiBzdHJpbmcpIHtcbiAgICBpZiAocGF0aCkgZGVsZXRlIHRoaXMuX29iakVycm9yc1twYXRoXTtcbiAgICBlbHNlIHRoaXMuX29iakVycm9ycyA9IHt9O1xuICB9XG5cbiAgLy8gcmVnaW9uOiBhY3Rpb25zXG5cbiAgYWRkKHZhbHVlOiBhbnkpOiBGb3JtUHJvcGVydHkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgbmV3UHJvcGVydHkucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgbGlzdCA9IDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXM7XG4gICAgdGhpcy5jbGVhckVycm9ycyhsaXN0W2luZGV4XS5wYXRoKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBhbnksXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKFxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSxcbiAgICAgICAgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEludmFsaWQgJHt0aGlzLnNjaGVtYS50aXRsZSB8fCAncm9vdCd9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOmAsXG4gICAgICAgIGUsXG4gICAgICApO1xuICAgIH1cbiAgICBvcmRlcmVkUHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxuICAgICAgICAodGhpcy5mb3JtRGF0YSB8fCB7fSlbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3BlcnR5SWQsXG4gICAgICApO1xuICAgICAgdGhpcy5fcHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55ID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBhbnksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHt9XG5cbiAgY3JlYXRlUHJvcGVydHkoXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBwYXRoICs9IChwYXJlbnQgYXMgQXJyYXlQcm9wZXJ0eSkudGljaysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArXG4gICAgICAgICAgICBwYXJlbnQudHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4IHJlcXVpcmVkXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BlcnR5SWQgJiZcbiAgICAgICAgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZCkgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmIChcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxuICAgICAgKSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBTRlNjaGVtYSkgPT4gRXJyb3JEYXRhW107XG59XG5cbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhanY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnZGF0YS11cmwnLFxuICAgICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdjb2xvcicsXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdtb2JpbGUnLFxuICAgICAgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdpZC1jYXJkJyxcbiAgICAgIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8sXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcblxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xuXG4gIHNldERlZmF1bHQod2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXRGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgY3JlYXRlV2lkZ2V0KFxuICAgIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0eXBlOiBzdHJpbmcsXG4gICk6IENvbXBvbmVudFJlZjxXaWRnZXQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PGFueT4+KFxuICAgICAgY29tcG9uZW50Q2xhc3MsXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4pIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgX3JlbmRlcnMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcbiAgcHJpdmF0ZSBfaXRlbTogYW55O1xuICBwcml2YXRlIF92YWxpZCA9IHRydWU7XG4gIHByaXZhdGUgX2RlZlVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG5cbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xuICBfZm9ybURhdGE6IGFueTtcbiAgX2J0bjogU0ZCdXR0b247XG4gIF9zY2hlbWE6IFNGU2NoZW1hO1xuICBfdWk6IFNGVUlTY2hlbWE7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6jCocKow6XCjcKVw6XCuMKDw6XCscKAw6/CvMKMw6fCrcKJw6XCkMKMIGBuekxheW91dGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppob3Jpem9udGFsICovXG4gIEBJbnB1dCgpXG4gIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuXG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKVxuICBzY2hlbWE6IFNGU2NoZW1hO1xuXG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgdWk6IFNGVUlTY2hlbWE7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOpwrvCmMOowq7CpMOlwoDCvCAqL1xuICBASW5wdXQoKVxuICBmb3JtRGF0YToge307XG5cbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrlxuICAgKiAtIMOlwoDCvMOkwrjCuiBgbnVsbGAgw6bCiMKWIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwr3ChsOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxuICAgKiAtIMOlwoDCvMOkwrjCuiBgbm9uZWAgw6jCocKow6fCpMK6w6bCicKLw6XCisKow6bCt8K7w6XCisKgw6bCjMKJw6nCksKuw6/CvMKMw6TCuMKUw6TCuMKNw6TCv8Kdw6fClcKZw6XCrsK5w6XCmcKoXG4gICAqIC0gw6TCvcK/w6fClMKow6XCm8K6w6XCrsKaIGBsYWJlbGAgw6bCoMKHw6fCrcK+w6XCrsK9w6XCusKmw6bCl8K2w6/CvMKMw6jCi8Klw6bCl8KgIGByZW5kZXIuY2xhc3NgIMOlwojCmcOpwrvCmMOowq7CpMOkwrjCusOlwrHChcOkwrjCrcOnworCtsOmwoDCgVxuICAgKi9cbiAgQElucHV0KClcbiAgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xuXG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXG4gICAqIC0gYGZhbHNlYCDDpsKPwpDDpMK6wqTDpsKXwrbDpsKgwqHDqcKqwoxcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuXG4gIC8qKiDDpsKMwofDpcKuwprDqMKhwqjDpcKNwpUgYGF1dG9jb21wbGV0ZWAgw6XCgMK8ICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZTogJ29uJyB8ICdvZmYnO1xuXG4gIC8qKiDDp8KrwovDpcKNwrPDpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwokgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGZpcnN0VmlzdWFsID0gdHJ1ZTtcblxuICAvKiogw6jCocKow6XCjcKVw6bCqMKhw6XCvMKPICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuXG4gIC8qKiDDpsKVwrDDpsKNwq7DpcKPwpjDpsKbwrTDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDpsKPwpDDpMK6wqTDqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDDqcKHwo3Dp8K9wq7DqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqDCocOpwqrCjMOnwrvCk8Omwp7CnMOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqIMOowqHCqMOlwo3ClcOmwqDCocOpwqrCjMOnworCtsOmwoDCgSAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqIMOowqHCqMOlwo3ClcOlwoDCvCAqL1xuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlO1xuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBvcHRpb25zLmZpcnN0VmlzdWFsO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gb3B0aW9ucy5hdXRvY29tcGxldGU7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKFxuICAgICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gYXMgU0ZTY2hlbWEsXG4gICAgICAgICAgZGVmaW5pdGlvbnMsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7IHdpZGdldDogcHJvcGVydHkudHlwZSB9LFxuICAgICAgICAgIHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0sXG4gICAgICAgICAgdHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCxcbiAgICAgICAgICAhcHJvcGVydHkudWkgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmXG4gICAgICAgICAgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgd2lkZ2V0OiAnc2VsZWN0JyB9XG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgdGhpcy5fZGVmVWksXG4gICAgICAgICAgcHJvcGVydHkudWksXG4gICAgICAgICAgdWlTY2hlbWFbdWlLZXldLFxuICAgICAgICApIGFzIFNGVUlTY2hlbWFJdGVtUnVuO1xuICAgICAgICAvLyDDp8K7wqfDpsKJwr/Dp8KIwrbDqMKKwoLDp8KCwrnDpcK4woPDpcKxwoDDpcKxwp7DpsKAwqdcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbClcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyA1XG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLnNwYW5Db250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IDE5XG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwgJiYgcGFyZW50U2NoZW1hKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gcGFyZW50U2NoZW1hLnByb3BlcnRpZXNbdWkuZW5kXTtcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRlRW5kUHJvcGVydHkudWksIHtcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1aS5oaWRkZW4gPSB0eXBlb2YgdWkuaGlkZGVuID09PSAnYm9vbGVhbicgPyB1aS5oaWRkZW4gOiBmYWxzZTtcblxuICAgICAgICB1aVJlc1t1aUtleV0gPSB1aTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gPSB1aVJlc1t1aUtleV1bJyRpdGVtcyddIHx8IHt9O1xuICAgICAgICAgIGluRm4oXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSlbJyRpdGVtcyddIHx8IHt9LFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpUmVzW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbklmRm4gPSAoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFNGVUlTY2hlbWFJdGVtPntcbiAgICAgICAgb25seVZpc3VhbDogdGhpcy5vcHRpb25zLm9ubHlWaXN1YWwsXG4gICAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgICBmaXJzdFZpc3VhbDogdGhpcy5maXJzdFZpc3VhbCxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudWksXG4gICAgICBfc2NoZW1hLnVpLFxuICAgICAgdGhpcy51aVsnKiddLFxuICAgICk7XG5cbiAgICAvLyByb290XG4gICAgdGhpcy5fdWkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZVaSk7XG5cbiAgICBpbkZuKF9zY2hlbWEsIF9zY2hlbWEsIHRoaXMudWksIHRoaXMudWksIHRoaXMuX3VpKTtcblxuICAgIC8vIGNvbmRcbiAgICByZXNvbHZlSWYoX3NjaGVtYSwgdGhpcy5fdWkpO1xuICAgIGluSWZGbihfc2NoZW1hLCB0aGlzLl91aSk7XG5cbiAgICB0aGlzLl9zY2hlbWEgPSBfc2NoZW1hO1xuXG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSB7XG4gICAgICBkaSgnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX2J0biA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IHJlbmRlcjoge30gfSxcbiAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgdGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIHRoaXMuYnV0dG9uLFxuICAgICk7XG4gICAgY29uc3QgZmlyc3RLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl91aSkuZmluZCh3ID0+IHcuc3RhcnRzV2l0aCgnJCcpKTtcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgYnRuVWkgPSBmaXJzdEtleSA/IHRoaXMuX3VpW2ZpcnN0S2V5XSA6IHRoaXMuX2RlZlVpO1xuICAgICAgaWYgKCF0aGlzLl9idG4ucmVuZGVyLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gZml4ZWQgbGFiZWxcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDDpcKbwrrDpcKuwprDpsKgwofDp8Ktwr7DpcKuwr3DpcK6wqbDpsKXwrbDr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDpsKgwrfDpcK8wo/Dr8K8wozDpcKIwpnDqcK7wpjDqMKuwqTDpcKxwoXDpMK4wq1cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgJiZcbiAgICAgICAgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91aS5kZWJ1ZykgZGkoJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6bCnMKqw6bCicK+w6XCiMKww6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybihgw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6fCm8K4w6XCkMKMw6jCh8Kqw6XCrsKaw6TCucKJw6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgIHB1aS5fcmVuZGVyID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xuICAgICAgaWYgKCFwdWkuX3JlbmRlcikgcHVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3IoKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogw6XCiMK3w6bClsKwIFNjaGVtYcOvwrzCjMOkwrjCgMOowojCrMOpwpzCgMOowqbCgcOlworCqMOmwoDCgcOkwr/CrsOmwpTCuSBTY2hlbWEgw6bCn8KQw6TCuMKqw6XCgMK8w6bCl8K2w6XCj8Kvw6TCu8Klw6bClsK5w6TCvsK/w6jCsMKDw6fClMKoXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1EYXRhLCB2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClVxuICAgKiBAcGFyYW0gW2VtaXRdIMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkSBgZm9ybVJlc2V0YCDDpMK6wovDpMK7wrbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RhcmdldD48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpZGdldDogV2lkZ2V0PGFueT4gPSBudWxsO1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG5cbiAgQFZpZXdDaGlsZCgndGFyZ2V0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgKSB7fVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkud2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcsXG4gICAgKTtcbiAgICB0aGlzLm9uV2lkZ2V0SW5zdGFuY2lhdGVkKHRoaXMucmVmLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVpLl9fZGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5yZWYuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxuICBASW5wdXROdW1iZXIoKVxuICBudW06IG51bWJlcjtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmLWZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxuICAgIDxuei1jb2wgKm5nSWY9XCJzaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJpZFwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cInVpLl9yZXF1aXJlZFwiPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbnotY29sPlxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gIDwvbnotZm9ybS1pdGVtPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU0ZUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50YWJsZS5fYWRkVHBsKFxuICAgICAgdGhpcy5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMucGF0aCA6IGAvYCArIHRoaXMucGF0aCxcbiAgICAgIHRoaXMudGVtcGxhdGVSZWYsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBJbmplY3QsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBmaXJzdFZpc3VhbCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xzKCkge1xuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChTRkNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmQ29tcD86IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcnM6IEVycm9yRGF0YVtdKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnVpLmRlYnVnKSBkaSgnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XG5cbiAgICAgICAgLy8gw6TCuMKNw6bCmMK+w6fCpMK6w6nCpsKWw6bCrMKhw6bCoMKhw6nCqsKMw6jCp8KGw6jCp8KJXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSBlcnJvcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyBlcnJvcnNbMF0ubWVzc2FnZSA6ICcnO1xuXG4gICAgICAgICAgaWYgKHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMudWkuZGVidWcpIHtcbiAgICAgIGRpKCd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWQ7IGVsc2Ugbm9HcmlkXCI+XG4gICAgPG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxuei1jb2xcbiAgICAgICAgICAgIFtuelNwYW5dPVwiaS5ncmlkLnNwYW5cIiBbbnpPZmZzZXRdPVwiaS5ncmlkLm9mZnNldFwiXG4gICAgICAgICAgICBbbnpYc109XCJpLmdyaWQueHNcIiBbbnpTbV09XCJpLmdyaWQuc21cIiBbbnpNZF09XCJpLmdyaWQubWRcIlxuICAgICAgICAgICAgW256TGddPVwiaS5ncmlkLmxnXCIgW256WGxdPVwiaS5ncmlkLnhsXCIgW256WFhsXT1cImkuZ3JpZC54eGxcIj5cbiAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcm93PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNub0dyaWQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIGxpc3Q6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXJyYXknLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotZm9ybS1pdGVtPlxuICAgIDxuei1jb2wgKm5nSWY9XCJzY2hlbWEudGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgPGxhYmVsPlxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1jb2w+XG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllczsgbGV0IGlkeD1pbmRleFwiPlxuICAgICAgICAgICAgPG56LWNvbCAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIiBbbnpTcGFuXT1cImFycmF5U3BhblwiIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCIgY2xhc3M9XCJzZi1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlbW92ZVRpdGxlXCIgY2xhc3M9XCJyZW1vdmVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpZHgpXCIgW2F0dHIudGl0bGVdPVwicmVtb3ZlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXJvdz5cblxuICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotY29sPlxuICA8L256LWZvcm0taXRlbT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlOiBzdHJpbmc7XG4gIGFkZFR5cGU6IHN0cmluZztcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2NoZW1hLm1heEl0ZW1zICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmdyaWQgJiYgdGhpcy51aS5ncmlkLmFycmF5U3BhbilcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gdGhpcy51aS5ncmlkLmFycmF5U3BhbjtcblxuICAgIHRoaXMuYWRkVGl0bGUgPSB0aGlzLnVpLmFkZFRpdGxlIHx8ICfDpsK3wrvDpcKKwqAnO1xuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcbiAgICB0aGlzLnJlbW92ZVRpdGxlID1cbiAgICAgIHRoaXMudWkucmVtb3ZhYmxlID09PSBmYWxzZSA/IG51bGwgOiB0aGlzLnVpLnJlbW92ZVRpdGxlIHx8ICfDp8KnwrvDqcKZwqQnO1xuICB9XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQobnVsbCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmUoaW5kZXgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2lwdD5cbiAgICAgIDxpbnB1dCBuei1pbnB1dFxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnR5cGVdPVwidWkudHlwZSB8fCAndGV4dCdcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFthdHRyLmF1dG9jb21wbGV0ZV09XCJ1aS5hdXRvY29tcGxldGVcIlxuICAgICAgICBbYXR0ci5hdXRvRm9jdXNdPVwidWkuYXV0b2ZvY3VzXCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnYWRkb24nOyBlbHNlIGlwdFwiPlxuICAgICAgPG56LWlucHV0LWdyb3VwXG4gICAgICAgIFtuekFkZE9uQmVmb3JlXT1cInVpLmFkZE9uQmVmb3JlXCIgW256QWRkT25BZnRlcl09XCJ1aS5hZGRPbkFmdGVyXCJcbiAgICAgICAgW256QWRkT25CZWZvcmVJY29uXT1cInVpLmFkZE9uQmVmb3JlSWNvblwiIFtuekFkZE9uQWZ0ZXJJY29uXT1cInVpLmFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgW256UHJlZml4XT1cInVpLnByZWZpeFwiIFtuelByZWZpeEljb25dPVwidWkucHJlZml4SWNvblwiXG4gICAgICAgIFtuelN1ZmZpeF09XCJ1aS5zdWZmaXhcIiBbbnpTdWZmaXhJY29uXT1cInVpLnN1ZmZpeEljb25cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L256LWlucHV0LWdyb3VwPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmUgfHxcbiAgICAgIHRoaXMudWkuYWRkT25BZnRlckljb24gfHxcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICB0aGlzLnVpLnByZWZpeCB8fFxuICAgICAgdGhpcy51aS5wcmVmaXhJY29uIHx8XG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxuICAgICAgdGhpcy51aS5zdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LWlucHV0LW51bWJlclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpGb3JtYXR0ZXJdPVwiZm9ybWF0dGVyXCJcbiAgICAgIFtuelBhcnNlcl09XCJwYXJzZXJcIlxuICAgICAgW256UHJlY2lzaW9uXT1cInVpLnByZWNpc2lvblwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciB8fCAnJ1wiPlxuICAgIDwvbnotaW5wdXQtbnVtYmVyPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBmb3JtYXR0ZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcbiAgcGFyc2VyID0gdmFsdWUgPT4gdmFsdWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY2hlbWEsIHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbiA9IHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtID8gc2NoZW1hLm1pbmltdW0gKyAxIDogc2NoZW1hLm1pbmltdW07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heCA9IHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtID8gc2NoZW1hLm1heGltdW0gLSAxIDogc2NoZW1hLm1heGltdW07XG4gICAgfVxuICAgIHRoaXMuc3RlcCA9IHNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHRoaXMubWluID0gTWF0aC50cnVuYyh0aGlzLm1pbik7XG4gICAgICB0aGlzLm1heCA9IE1hdGgudHJ1bmModGhpcy5tYXgpO1xuICAgICAgdGhpcy5zdGVwID0gTWF0aC50cnVuYyh0aGlzLnN0ZXApO1xuICAgIH1cbiAgICBpZiAodWkucHJlZml4ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3VpLnByZWZpeH0gJHt2YWx1ZX1gO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dmFsdWV9ICR7dWkudW5pdH1gO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS5mb3JtYXR0ZXIpIHRoaXMuZm9ybWF0dGVyID0gdWkuZm9ybWF0dGVyO1xuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtZGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxuXG4gICAgICA8bnotbW9udGgtcGlja2VyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICA+PC9uei1tb250aC1waWNrZXI+XG5cbiAgICAgIDxuei13ZWVrLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiJ3dlZWsnXCJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvbnotd2Vlay1waWNrZXI+XG5cbiAgICAgIDxuei1yYW5nZS1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidyYW5nZSdcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgIFtuelJhbmdlc109XCJ1aS5yYW5nZXNcIlxuICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXG4gICAgICAgIChuek9uT2spPVwiX29rKCRldmVudClcIlxuICAgICAgPjwvbnotcmFuZ2UtcGlja2VyPlxuXG4gICAgICA8bnotZGF0ZS1waWNrZXIgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXG4gICAgICAgIFtuelNob3dUaW1lXT1cInVpLnNob3dUaW1lXCJcbiAgICAgICAgW256U2hvd1RvZGF5XT1cImkuc2hvd1RvZGF5XCJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXG4gICAgICA+PC9uei1kYXRlLXBpY2tlcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW9kZTogc3RyaW5nO1xuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBEYXRlW10gPSBudWxsO1xuICBkaXNwbGF5Rm9ybWF0OiBzdHJpbmc7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBpOiBhbnk7XG4gIGZsYXRSYW5nZSA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLm1vZGUgPSB1aS5tb2RlIHx8ICdkYXRlJztcbiAgICB0aGlzLmZsYXRSYW5nZSA9IHVpLmVuZCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5tb2RlID0gJ3JhbmdlJztcbiAgICB9XG4gICAgaWYgKCF1aS5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktTU1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS13d2A7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IHVpLmRpc3BsYXlGb3JtYXQ7XG4gICAgfVxuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0XG4gICAgICA/IHVpLmZvcm1hdFxuICAgICAgOiB0aGlzLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICA/ICd4J1xuICAgICAgICA6ICdZWVlZLU1NLUREIEhIOm1tOnNzJztcbiAgICAvLyDDpcKFwqzDpcKFwrFBUElcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0b0Jvb2wodWkuYWxsb3dDbGVhciwgdHJ1ZSksXG4gICAgICAvLyBuei1kYXRlLXBpY2tlclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2wodWkuc2hvd1RvZGF5LCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIHZhbHVlID0gdGhpcy50b0RhdGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gW10gOiBbdmFsdWUsIHRoaXMudG9EYXRlKHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGEpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLnNldEVuZChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy5mb3JtYXQpKVxuICAgICAgOiBmb3JtYXQodmFsdWUsIHRoaXMuZm9ybWF0KTtcblxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xuICAgICAgdGhpcy5zZXRFbmQocmVzWzFdKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUocmVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShyZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9vcGVuQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9vayh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkub25PaykgdGhpcy51aS5vbk9rKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVuZFByb3BlcnR5KCk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnBhcmVudC5wcm9wZXJ0aWVzW3RoaXMudWkuZW5kXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW5kKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9EYXRlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oK3ZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gbmV3IERhdGUoK3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRpbWUnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRpbWUtcGlja2VyXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuekZvcm1hdF09XCJpLmRpc3BsYXlGb3JtYXRcIlxuICAgICAgW256QWxsb3dFbXB0eV09XCJpLmFsbG93RW1wdHlcIlxuICAgICAgW256Q2xlYXJUZXh0XT1cImkuY2xlYXJUZXh0XCJcbiAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwiaS5kZWZhdWx0T3BlblZhbHVlXCJcbiAgICAgIFtuekRpc2FibGVkSG91cnNdPVwidWkuZGlzYWJsZWRIb3Vyc1wiXG4gICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwidWkuZGlzYWJsZWRNaW51dGVzXCJcbiAgICAgIFtuekRpc2FibGVkU2Vjb25kc109XCJ1aS5kaXNhYmxlZFNlY29uZHNcIlxuICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJpLmhpZGVEaXNhYmxlZE9wdGlvbnNcIlxuICAgICAgW256SG91clN0ZXBdPVwiaS5ob3VyU3RlcFwiXG4gICAgICBbbnpNaW51dGVTdGVwXT1cImkubWludXRlU3RlcFwiXG4gICAgICBbbnpTZWNvbmRTdGVwXT1cImkuc2Vjb25kU3RlcFwiXG4gICAgICBbbnpQb3B1cENsYXNzTmFtZV09XCJ1aS5wb3B1cENsYXNzTmFtZVwiXG4gICAgICA+XG4gICAgPC9uei10aW1lLXBpY2tlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheVZhbHVlOiBEYXRlID0gbnVsbDtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGk6IGFueTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgdGhpcy5mb3JtYXQgPSB1aS5mb3JtYXRcbiAgICAgID8gdWkuZm9ybWF0XG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gJ3gnXG4gICAgICAgIDogJ0hIOm1tOnNzJztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBkaXNwbGF5Rm9ybWF0OiB1aS5kaXNwbGF5Rm9ybWF0IHx8ICdISDptbTpzcycsXG4gICAgICBhbGxvd0VtcHR5OiB0b0Jvb2wodWkuYWxsb3dFbXB0eSwgdHJ1ZSksXG4gICAgICBjbGVhclRleHQ6IHVpLmNsZWFyVGV4dCB8fCAnw6bCuMKFw6nCmcKkJyxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHVpLmRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IHRvQm9vbCh1aS5oaWRlRGlzYWJsZWRPcHRpb25zLCBmYWxzZSksXG4gICAgICBob3VyU3RlcDogdWkuaG91clN0ZXAgfHwgMSxcbiAgICAgIG1pbnV0ZVN0ZXA6IHVpLm56TWludXRlU3RlcCB8fCAxLFxuICAgICAgc2Vjb25kU3RlcDogdWkuc2Vjb25kU3RlcCB8fCAxLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHYgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcblxuICAgIC8vIHRyeWluZyByZXN0b3JlIGZ1bGwgRGF0ZSBmb3JtYXRcbiAgICBpZiAodiAhPSBudWxsICYmIHYudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHZhbHVlICs9ICc6MDAnO1xuICAgICAgdiA9IG5ldyBEYXRlKGAxOTcwLTEtMSBgICsgdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHY7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLnV0Y0Vwb2NoID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKFxuICAgICAgICBEYXRlLlVUQyhcbiAgICAgICAgICAxOTcwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICB2YWx1ZS5nZXRIb3VycygpLFxuICAgICAgICAgIHZhbHVlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICB2YWx1ZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhZGlvJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1yYWRpby1ncm91cFxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuek5hbWVdPVwiaWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0eWxlVHlwZVwiPlxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBkYXRhXCJcbiAgICAgICAgICBuei1yYWRpb1xuICAgICAgICAgIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24ubGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3R5bGVUeXBlXCI+XG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxuICAgICAgICAgIG56LXJhZGlvLWJ1dHRvblxuICAgICAgICAgIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJvcHRpb24ubGFiZWxcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXJhZGlvLWdyb3VwPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHtcbiAgZGF0YTogYW55W10gPSBbXTtcbiAgc3R5bGVUeXBlOiBib29sZWFuO1xuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN0eWxlVHlwZSA9ICh0aGlzLnVpLnN0eWxlVHlwZSB8fCAnZGVmYXVsdCcpID09PSAnZGVmYXVsdCc7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4gKHRoaXMuZGF0YSA9IGxpc3QpLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctdGVtcGxhdGUgI2FsbD5cbiAgICA8bGFiZWwgKm5nSWY9XCJ1aS5jaGVja0FsbFwiIG56LWNoZWNrYm94IGNsYXNzPVwibXItc21cIlxuICAgICAgWyhuZ01vZGVsKV09XCJhbGxDaGVja2VkXCJcbiAgICAgIFtuekluZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAoY2xpY2spPVwib25BbGxDaGVja2VkKCRldmVudClcIj5cbiAgICAgIHt7IHVpLmNoZWNrQWxsVGV4dCB8fCAnw6XChcKow6nCgMKJJyB9fVxuICAgIDwvbGFiZWw+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuei1mb3JtLWl0ZW0gW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZHRoXCI+XG4gICAgPG56LWNvbCAqbmdJZj1cImRhdGEubGVuZ3RoID4gMFwiIFtuelNwYW5dPVwibGFiZWxcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cbiAgICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uYWxcIj5cbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgIDxuei10b29sdGlwICpuZ0lmPVwidWkub3B0aW9uYWxIZWxwXCIgW256VGl0bGVdPVwidWkub3B0aW9uYWxIZWxwXCI+XG4gICAgICAgICAgICA8aSBuei10b29sdGlwIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vXCI+PC9pPlxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L256LWNvbD5cbiAgICA8bnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cImNvbnRyb2xcIiBbbnpPZmZzZXRdPVwib2Zmc2V0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94XG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInNjaGVtYS50aXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHRpb25hbFwiPlxuICAgICAgICAgICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cbiAgICAgICAgICAgICAgICAgIDxpIG56LXRvb2x0aXAgY2xhc3M9XCJhbnRpY29uIGFudGljb24tcXVlc3Rpb24tY2lyY2xlLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9uei10b29sdGlwPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gPT09IDBcIj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxuei1jaGVja2JveC1ncm91cCBbbmdNb2RlbF09XCJkYXRhXCIgKG5nTW9kZWxDaGFuZ2UpPVwibm90aWZ5U2V0KClcIj48L256LWNoZWNrYm94LWdyb3VwPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZF9zcGFuICE9PSAwXCI+XG4gICAgICAgICAgICAgIDxuei1jaGVja2JveC13cmFwcGVyIGNsYXNzPVwiY2hlY2tib3gtZ3JpZC1saXN0XCIgKG56T25DaGFuZ2UpPVwiZ3JvdXBJbkdyaWRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxuei1yb3c+XG4gICAgICAgICAgICAgICAgICA8bnotY29sIFtuelNwYW5dPVwiZ3JpZF9zcGFuXCIgKm5nSWY9XCJ1aS5jaGVja0FsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgICAgICAgICAgPG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuelZhbHVlXT1cImkudmFsdWVcIiBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIiBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCI+e3tpLmxhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9uei1jb2w+XG4gICAgICAgICAgICAgICAgPC9uei1yb3c+XG4gICAgICAgICAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cbiAgICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L256LWNvbD5cbiAgPC9uei1mb3JtLWl0ZW0+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsOiBudW1iZXI7XG4gIGNvbnRyb2w6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcblxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy51aS5zcGFuTGFiZWw7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMudWkuc3BhbkNvbnRyb2w7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubGFiZWwgPSBudWxsO1xuICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy51aS5zcGFuTGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkX3NwYW4gPSB0aGlzLnVpLnNwYW4gJiYgdGhpcy51aS5zcGFuID4gMCA/IHRoaXMudWkuc3BhbiA6IDA7XG4gICAgICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBub3RpZnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xuICB9XG5cbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBhbnlbXSkge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKFxuICAgICAgaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdmFsdWVzLmluZGV4T2YoaXRlbS52YWx1ZSkgIT09IC0xKSxcbiAgICApO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICBvbkFsbENoZWNrZWQoZTogRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZCkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICB1cGRhdGVBbGxDaGVja2VkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IGZhbHNlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNoYW5nZShyZXM6IGJvb2xlYW4gfCBTRlNjaGVtYUVudW1bXSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UocmVzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYm9vbGVhbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgPG56LXN3aXRjaFxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Q2hlY2tlZENoaWxkcmVuXT1cInVpLmNoZWNrZWRDaGlsZHJlblwiXG4gICAgICBbbnpVbkNoZWNrZWRDaGlsZHJlbl09XCJ1aS51bkNoZWNrZWRDaGlsZHJlblwiPlxuICAgIDwvbnotc3dpdGNoPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPHRleHRhcmVhIG56LWlucHV0XG4gICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICBbbnpBdXRvc2l6ZV09XCJhdXRvc2l6ZVwiPlxuICAgIDwvdGV4dGFyZWE+XG5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF1dG9zaXplOiBhbnkgPSB0cnVlO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5hdXRvc2l6ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zaXplID0gdGhpcy51aS5hdXRvc2l6ZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotc2VsZWN0XG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImkuYXV0b0ZvY3VzXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cImkuZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuelNlcnZlclNlYXJjaF09XCJpLnNlcnZlclNlYXJjaFwiXG4gICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudFwiXG4gICAgICBbbnpNb2RlXT1cImkubW9kZVwiXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgKG56T3BlbkNoYW5nZSk9XCJvcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56T25TZWFyY2gpPVwic2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20oJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoYXNHcm91cFwiPlxuICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgZGF0YVwiXG4gICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXG4gICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxuICAgICAgICA8L256LW9wdGlvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0dyb3VwXCI+XG4gICAgICAgIDxuei1vcHRpb24tZ3JvdXAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiIFtuekxhYmVsXT1cImkubGFiZWxcIj5cbiAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBpLmNoaWxkcmVuXCJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIm8ubGFiZWxcIlxuICAgICAgICAgICAgW256VmFsdWVdPVwiby52YWx1ZVwiXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XG4gICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgIDwvbnotb3B0aW9uLWdyb3VwPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcbiAgaGFzR3JvdXAgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB0aGlzLnVpLmFsbG93Q2xlYXIsXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IHRoaXMudWkuZHJvcGRvd25DbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHRoaXMudWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHRoaXMudWkuc2VydmVyU2VhcmNoLCBmYWxzZSksXG4gICAgICBtYXhNdWx0aXBsZUNvdW50OiB0aGlzLnVpLm1heE11bHRpcGxlQ291bnQgfHwgSW5maW5pdHksXG4gICAgICBtb2RlOiB0aGlzLnVpLm1vZGUgfHwgJ2RlZmF1bHQnLFxuICAgICAgbm90Rm91bmRDb250ZW50OiB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6bCs8KVw6bCicK+w6XCiMKwJyxcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh0aGlzLnVpLnNob3dTZWFyY2gsIHRydWUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZXM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWVzKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlcyk7XG4gIH1cblxuICBvcGVuQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB0aGlzLnVpLm9wZW5DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnVpLm9uU2VhcmNoKSB7XG4gICAgICB0aGlzLnVpLm9uU2VhcmNoKHRleHQpLnRoZW4oKHJlczogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyB0b0Jvb2wsIGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotdHJlZS1zZWxlY3RcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGVcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Q2hlY2thYmxlXT1cImkuY2hlY2thYmxlXCJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwiaS5zaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dMaW5lXT1cImkuc2hvd0xpbmVcIlxuICAgICAgW256QXN5bmNEYXRhXT1cImkuYXN5bmNEYXRhXCJcbiAgICAgIFtuek5vZGVzXT1cImRhdGFcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZEFsbF09XCJpLmRlZmF1bHRFeHBhbmRBbGxcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZGVkS2V5c109XCJ1aS5kZWZhdWx0RXhwYW5kZWRLZXlzXCJcbiAgICAgIFtuekRpc3BsYXlXaXRoXT1cImkuZGlzcGxheVdpdGhcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV4cGFuZENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmVlLXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgZGMoKSB7XG4gICAgLy8gTXVzZSB3YWl0IGBuei10cmVlLXNlbGVjdGAgd3JpdGUgdmFsdWVzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuRGF0YShsaXN0OiBTRlNjaGVtYUVudW1bXSkge1xuICAgIHJldHVybiBsaXN0Lm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKGRlZXBDb3B5KG5vZGUpIGFzIGFueSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB1aS5hbGxvd0NsZWFyLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHVpLnNob3dTZWFyY2gsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHVpLm11bHRpcGxlLCBmYWxzZSksXG4gICAgICBjaGVja2FibGU6IHRvQm9vbCh1aS5jaGVja2FibGUsIGZhbHNlKSxcbiAgICAgIHNob3dFeHBhbmQ6IHRvQm9vbCh1aS5zaG93RXhwYW5kLCB0cnVlKSxcbiAgICAgIHNob3dMaW5lOiB0b0Jvb2wodWkuc2hvd0xpbmUsIGZhbHNlKSxcbiAgICAgIGFzeW5jRGF0YTogdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgIGRlZmF1bHRFeHBhbmRBbGw6IHRvQm9vbCh1aS5kZWZhdWx0RXhwYW5kQWxsLCBmYWxzZSksXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKVxuICAgICAgLnBpcGUobWFwKGxpc3QgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpXG4gICAgICAucGlwZShtYXAoKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgZS5ub2RlLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdGFnXG4gICAgICAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCJcbiAgICAgIG56TW9kZT1cImNoZWNrYWJsZVwiXG4gICAgICBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiXG4gICAgICAobnpBZnRlckNsb3NlKT1cIl9hZnRlckNsb3NlKClcIlxuICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXG4gICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCI+XG4gICAgICB7e2kubGFiZWx9fVxuICAgIDwvbnotdGFnPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdO1xuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XG4gIH1cblxuICBfYWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy51aS5hZnRlckNsb3NlKSB0aGlzLnVpLmFmdGVyQ2xvc2UoKTtcbiAgfVxuXG4gIF9jbG9zZShlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5vbkNsb3NlKSB0aGlzLnVpLm9uQ2xvc2UoZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlLCBVcGxvYWRDaGFuZ2VQYXJhbSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi11cGxvYWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXVwbG9hZFxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgW256RmlsZUxpc3RdPVwiZmlsZUxpc3RcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcbiAgICAgIFtuekFjY2VwdF09XCJpLmFjY2VwdFwiXG4gICAgICBbbnpMaW1pdF09XCJpLmxpbWl0XCJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcbiAgICAgIFtuekZpbGVUeXBlXT1cImkuZmlsZVR5cGVcIlxuICAgICAgW256SGVhZGVyc109XCJ1aS5oZWFkZXJzXCJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXG4gICAgICBbbnpMaXN0VHlwZV09XCJpLmxpc3RUeXBlXCJcbiAgICAgIFtuek11bHRpcGxlXT1cImkubXVsdGlwbGVcIlxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxuICAgICAgW256U2hvd1VwbG9hZExpc3RdPVwiaS5zaG93VXBsb2FkTGlzdFwiXG4gICAgICBbbnpXaXRoQ3JlZGVudGlhbHNdPVwiaS53aXRoQ3JlZGVudGlhbHNcIlxuICAgICAgW256UmVtb3ZlXT1cInVpLnJlbW92ZVwiXG4gICAgICBbbnpQcmV2aWV3XT1cImhhbmRsZVByZXZpZXdcIlxuICAgICAgKG56Q2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwbHVzJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLXBsdXNcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZHJhZydcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24taW5ib3hcIj48L2k+PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIiBbaW5uZXJIVE1MXT1cImkuaGludFwiPjwvcD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi11cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei11cGxvYWQ+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XG4gIGJ0blR5cGUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2QpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxuICAgICAgdGV4dDogdGhpcy51aS50ZXh0IHx8ICfDp8KCwrnDpcKHwrvDpMK4worDpMK8wqAnLFxuICAgICAgYWN0aW9uOiB0aGlzLnVpLmFjdGlvbiB8fCAnJyxcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXG4gICAgICBsaW1pdDogdGhpcy51aS5saW1pdCA9PSBudWxsID8gMCA6ICt0aGlzLnVpLmxpbWl0LFxuICAgICAgc2l6ZTogdGhpcy51aS5zaXplID09IG51bGwgPyAwIDogK3RoaXMudWkuc2l6ZSxcbiAgICAgIGZpbGVUeXBlOiB0aGlzLnVpLmZpbGVUeXBlIHx8ICcnLFxuICAgICAgbGlzdFR5cGU6IHRoaXMudWkubGlzdFR5cGUgfHwgJ3RleHQnLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh0aGlzLnVpLm11bHRpcGxlLCBmYWxzZSksXG4gICAgICBuYW1lOiB0aGlzLnVpLm5hbWUgfHwgJ2ZpbGUnLFxuICAgICAgc2hvd1VwbG9hZExpc3Q6IHRvQm9vbCh0aGlzLnVpLnNob3dVcGxvYWRMaXN0LCB0cnVlKSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdG9Cb29sKHRoaXMudWkud2l0aENyZWRlbnRpYWxzLCBmYWxzZSksXG4gICAgICByZXNSZU5hbWU6ICh0aGlzLnVpLnJlc1JlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcbiAgICB9O1xuICAgIGlmICh0aGlzLmkubGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB0aGlzLmJ0blR5cGUgPSAncGx1cyc7XG4gICAgaWYgKHRoaXMuaS50eXBlID09PSAnZHJhZycpIHtcbiAgICAgIHRoaXMuaS5saXN0VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLmJ0blR5cGUgPSAnZHJhZyc7XG4gICAgICB0aGlzLmkudGV4dCA9IHRoaXMudWkudGV4dCB8fCBgw6XCjcKVw6XCh8K7w6bCiMKWw6bCi8KWw6XCisKow6bClsKHw6TCu8K2w6XCiMKww6jCr8Klw6XCjMK6w6XCn8Kfw6TCuMKKw6TCvMKgYDtcbiAgICAgIHRoaXMuaS5oaW50ID1cbiAgICAgICAgdGhpcy51aS5oaW50IHx8IGDDpsKUwq/DpsKMwoHDpcKNwpXDpMK4wqrDpsKIwpbDpsKJwrnDqcKHwo/Dr8K8wozDpMK4wqXDp8KmwoHDpMK4worDpMK8wqDDpcKFwqzDpcKPwrjDpsKVwrDDpsKNwq7DpsKIwpbDpcKFwrbDpMK7wpbDpcKuwonDpcKFwqjDpsKWwofDpMK7wrZgO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZShhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UoYXJncyk7XG4gICAgaWYgKGFyZ3MudHlwZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm47XG4gICAgdGhpcy5ub3RpZnkoYXJncy5maWxlTGlzdCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmZpbGVMaXN0ID0gbGlzdCBhcyBVcGxvYWRGaWxlW107XG4gICAgICAgIHRoaXMubm90aWZ5KHRoaXMuZmlsZUxpc3QpO1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pIHtcbiAgICBjb25zdCByZXMgPSBmaWxlTGlzdC5tYXAoaXRlbSA9PlxuICAgICAgZGVlcEdldChpdGVtLnJlc3BvbnNlLCB0aGlzLmkucmVzUmVOYW1lLCBpdGVtLnJlc3BvbnNlKSxcbiAgICApO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5pLm11bHRpcGxlID09PSB0cnVlID8gcmVzIDogcmVzLnBvcCgpLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpZXcgPSAoZmlsZTogVXBsb2FkRmlsZSkgPT4ge1xuICAgIHRoaXMubW9kYWxTcnZcbiAgICAgIC5jcmVhdGUoe1xuICAgICAgICBuekNvbnRlbnQ6IGA8aW1nIHNyYz1cIiR7ZmlsZS51cmwgfHxcbiAgICAgICAgICBmaWxlLnRodW1iVXJsfVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgLz5gLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgIH0pXG4gICAgICAuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmFuc2ZlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotdHJhbnNmZXJcbiAgICAgIFtuekRhdGFTb3VyY2VdPVwibGlzdFwiXG4gICAgICBbbnpUaXRsZXNdPVwiaS50aXRsZXNcIlxuICAgICAgW256T3BlcmF0aW9uc109XCJpLm9wZXJhdGlvbnNcIlxuICAgICAgW256TGlzdFN0eWxlXT1cInVpLmxpc3RTdHlsZVwiXG4gICAgICBbbnpJdGVtVW5pdF09XCJpLml0ZW1Vbml0XCJcbiAgICAgIFtuekl0ZW1zVW5pdF09XCJpLml0ZW1zVW5pdFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxuICAgICAgW256RmlsdGVyT3B0aW9uXT1cInVpLmZpbHRlck9wdGlvblwiXG4gICAgICBbbnpTZWFyY2hQbGFjZWhvbGRlcl09XCJ1aS5zZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwidWkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuekNhbk1vdmVdPVwiX2Nhbk1vdmVcIlxuICAgICAgKG56Q2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWFyY2hDaGFuZ2UpPVwiX3NlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdENoYW5nZSk9XCJfc2VsZWN0Q2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXRyYW5zZmVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGlzdDogYW55W10gPSBbXTtcbiAgaTogYW55O1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHRpdGxlczogdGhpcy51aS50aXRsZXMgfHwgWycnLCAnJ10sXG4gICAgICBvcGVyYXRpb25zOiB0aGlzLnVpLm9wZXJhdGlvbnMgfHwgWycnLCAnJ10sXG4gICAgICBpdGVtVW5pdDogdGhpcy51aS5pdGVtVW5pdCB8fCAnw6nCocK5JyxcbiAgICAgIGl0ZW1zVW5pdDogdGhpcy51aS5pdGVtc1VuaXQgfHwgJ8OpwqHCuScsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCBudWxsKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICBsZXQgZm9ybURhdGEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLl9kYXRhLm1hcChpID0+IGkudmFsdWUpLCBmYWxzZSk7XG4gIH1cblxuICBfY2FuTW92ZSA9IChhcmc6IGFueSk6IE9ic2VydmFibGU8YW55W10+ID0+IHtcbiAgICByZXR1cm4gdGhpcy51aS5jYW5Nb3ZlID8gdGhpcy51aS5jYW5Nb3ZlKGFyZykgOiBvZihhcmcubGlzdCk7XG4gIH07XG5cbiAgX2NoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IG9wdGlvbnMubGlzdC5pbmRleE9mKHcpID09PSAtMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxuXG4gIF9zZWFyY2hDaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0Q2hhbmdlKSB0aGlzLnVpLnNlbGVjdENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXNsaWRlclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpSYW5nZV09XCJ1aS5yYW5nZVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtuek1hcmtzXT1cIm1hcmtzXCJcbiAgICAgIFtuekRvdHNdPVwidWkuZG90c1wiXG4gICAgICBbbnpJbmNsdWRlZF09XCJpbmNsdWRlZFwiXG4gICAgICBbbnpWZXJ0aWNhbF09XCJ1aS52ZXJ0aWNhbFwiXG4gICAgICBbbnpUaXBGb3JtYXR0ZXJdPVwiX2Zvcm1hdHRlclwiXG4gICAgICAobnpPbkFmdGVyQ2hhbmdlKT1cIl9hZnRlckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei1zbGlkZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1hcmtzOiBhbnk7XG4gIGluY2x1ZGVkOiBib29sZWFuO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWluID0gdGhpcy5zY2hlbWEubWluaW11bSB8fCAwO1xuICAgIHRoaXMubWF4ID0gdGhpcy5zY2hlbWEubWF4aW11bSB8fCAxMDA7XG4gICAgdGhpcy5zdGVwID0gdGhpcy5zY2hlbWEubXVsdGlwbGVPZiB8fCAxO1xuXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMudWkubWFya3MgfHwgbnVsbDtcbiAgICBjb25zdCBpbmNsdWRlZCA9IHRoaXMudWkuaW5jbHVkZWQ7XG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XG4gIH1cblxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy51aS5mb3JtYXR0ZXIpIHJldHVybiB0aGlzLnVpLmZvcm1hdHRlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX2FmdGVyQ2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5hZnRlckNoYW5nZSkgdGhpcy51aS5hZnRlckNoYW5nZSh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWN1c3RvbScsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIiRhbnkodWkpLl9yZW5kZXJcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IHRoaXMsIHNjaGVtYTogc2NoZW1hLCB1aTogdWkgfVwiPjwvbmctdGVtcGxhdGU+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXJhdGVcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcbiAgICAgIFtuekFsbG93SGFsZl09XCJhbGxvd0hhbGZcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgICBbbnpDb3VudF09XCJjb3VudFwiPjwvbnotcmF0ZT5cbiAgICA8c3BhbiAqbmdJZj1cImhhc1RleHQgJiYgZm9ybVByb3BlcnR5LnZhbHVlXCIgY2xhc3M9XCJhbnQtcmF0ZS10ZXh0XCI+e3sgZ2VuVGV4dCgpIH19PC9zcGFuPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb3VudDogbnVtYmVyO1xuICBhbGxvd0hhbGY6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXI6IGJvb2xlYW47XG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgaGFzVGV4dCA9IGZhbHNlO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvdW50ID0gdGhpcy5zY2hlbWEubWF4aW11bSB8fCA1O1xuICAgIHRoaXMuYWxsb3dIYWxmID0gKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbCh0aGlzLnVpLmFsbG93Q2xlYXIsIHRydWUpO1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sKHRoaXMudWkuYXV0b0ZvY3VzLCBmYWxzZSk7XG4gICAgdGhpcy5oYXNUZXh0ID0gISF0aGlzLnVpLnRleHQ7XG4gIH1cblxuICBnZW5UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmhhc1RleHRcbiAgICAgID8gKHRoaXMudWkudGV4dCBhcyBzdHJpbmcpLnJlcGxhY2UoJ3t7dmFsdWV9fScsIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlKVxuICAgICAgOiAnJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCwgZmxhdE1hcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0Q29weUVudW0sIGdldEVudW0sIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEVNQUlMU1VGRklYID0gW1xuICAncXEuY29tJyxcbiAgJzE2My5jb20nLFxuICAnZ21haWwuY29tJyxcbiAgJzEyNi5jb20nLFxuICAnYWxpeXVuLmNvbScsXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gICAgICA8aW5wdXQgbnotaW5wdXQgW256QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8bnotYXV0b2NvbXBsZXRlICNhdXRvXG4gICAgICAgIFtuekJhY2tmaWxsXT1cImkuYmFja2ZpbGxcIlxuICAgICAgICBbbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25dPVwiaS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIlxuICAgICAgICBbbnpXaWR0aF09XCJpLndpZHRoXCJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQ/Lm56VmFsdWUpXCI+XG4gICAgICAgIDxuei1hdXRvLW9wdGlvbiAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0IHwgYXN5bmNcIiBbbnpWYWx1ZV09XCJpLmxhYmVsXCI+e3tpLmxhYmVsfX08L256LWF1dG8tb3B0aW9uPlxuICAgICAgPC9uei1hdXRvY29tcGxldGU+XG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gICAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGxpc3Q6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xuICBwcml2YXRlIGZpbHRlck9wdGlvbjogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBiYWNrZmlsbDogdG9Cb29sKHRoaXMudWkuYmFja2ZpbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdG9Cb29sKHRoaXMudWkuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJPcHRpb24gPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5maWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cblxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIGZsYXRNYXAoXG4gICAgICAgIGlucHV0ID0+XG4gICAgICAgICAgdGhpcy5pc0FzeW5jID8gdGhpcy51aS5hc3luY0RhdGEoaW5wdXQpIDogdGhpcy5maWx0ZXJEYXRhKGlucHV0KSxcbiAgICAgICksXG4gICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpLFxuICAgICk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNBc3luYykgcmV0dXJuO1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKEVNQUlMU1VGRklYLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXG4gICAgICAgICAgdGhpcy5zY2hlbWEuZW51bSxcbiAgICAgICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSxcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICB0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSksXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgIXZhbHVlIHx8IH52YWx1ZS5pbmRleE9mKCdAJylcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jYXNjYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICA8bnotY2FzY2FkZXJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgW256T3B0aW9uc109XCJkYXRhXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwidWkuYXV0b0ZvY3VzXCJcbiAgICAgIFtuekNoYW5nZU9uXT1cInVpLmNoYW5nZU9uXCJcbiAgICAgIFtuekNoYW5nZU9uU2VsZWN0XT1cInVpLmNoYW5nZU9uU2VsZWN0XCJcbiAgICAgIFtuekNvbHVtbkNsYXNzTmFtZV09XCJ1aS5jb2x1bW5DbGFzc05hbWVcIlxuICAgICAgW256RXhwYW5kVHJpZ2dlcl09XCJ1aS5leHBhbmRUcmlnZ2VyXCJcbiAgICAgIFtuek1lbnVDbGFzc05hbWVdPVwidWkubWVudUNsYXNzTmFtZVwiXG4gICAgICBbbnpNZW51U3R5bGVdPVwidWkubWVudVN0eWxlXCJcbiAgICAgIFtuekxhYmVsUHJvcGVydHldPVwidWkubGFiZWxQcm9wZXJ0eVwiXG4gICAgICBbbnpWYWx1ZVByb3BlcnR5XT1cInVpLnZhbHVlUHJvcGVydHlcIlxuICAgICAgW256TG9hZERhdGFdPVwibG9hZERhdGFcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256U2hvd0Fycm93XT1cInNob3dBcnJvd1wiXG4gICAgICBbbnpTaG93SW5wdXRdPVwic2hvd0lucHV0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICAobnpDbGVhcik9XCJfY2xlYXIoJGV2ZW50KVwiXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIl92aXNpYmxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3Rpb25DaGFuZ2UpPVwiX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei1jYXNjYWRlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsZWFyVGV4dDogc3RyaW5nO1xuICBzaG93QXJyb3c6IGJvb2xlYW47XG4gIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgdHJpZ2dlckFjdGlvbjogc3RyaW5nW107XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGxvYWREYXRhOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclRleHQgPSB0aGlzLnVpLmNsZWFyVGV4dCB8fCAnw6bCuMKFw6nCmcKkJztcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbCh0aGlzLnVpLnNob3dBcnJvdywgdHJ1ZSk7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2wodGhpcy51aS5zaG93SW5wdXQsIHRydWUpO1xuICAgIHRoaXMudHJpZ2dlckFjdGlvbiA9IHRoaXMudWkudHJpZ2dlckFjdGlvbiB8fCBbJ2NsaWNrJ107XG4gICAgaWYgKCEhdGhpcy51aS5hc3luY0RhdGEpIHtcbiAgICAgIHRoaXMubG9hZERhdGEgPSAobm9kZTogYW55LCBpbmRleDogbnVtYmVyKSA9PlxuICAgICAgICAodGhpcy51aS5hc3luY0RhdGEgYXMgYW55KShub2RlLCBpbmRleCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXG4gICAgICBsaXN0ID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfdmlzaWJsZUNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnVpLnZpc2libGVDaGFuZ2UgJiYgdGhpcy51aS52aXNpYmxlQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnVpLmNoYW5nZSAmJiB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlICYmIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnVpLnNlbGVjdCAmJiB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcbiAgfVxuXG4gIF9jbGVhcihvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnVpLmNsZWFyICYmIHRoaXMudWkuY2xlYXIob3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhLCBnZXRFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgTnpNZW50aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW1lbnRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG5cbiAgICAgIDxuei1tZW50aW9uICNtZW50aW9uc1xuICAgICAgICBbbnpTdWdnZXN0aW9uc109XCJkYXRhXCJcbiAgICAgICAgW256VmFsdWVXaXRoXT1cImkudmFsdWVXaXRoXCJcbiAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgICAgW256UGxhY2VtZW50XT1cImkucGxhY2VtZW50XCJcbiAgICAgICAgW256UHJlZml4XT1cImkucHJlZml4XCJcbiAgICAgICAgKG56T25TZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25TZWFyY2hDaGFuZ2UpPVwiX3NlYXJjaCgkZXZlbnQpXCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLmlucHV0U3R5bGUgIT09ICd0ZXh0YXJlYSdcIj5cbiAgICAgICAgICA8aW5wdXQgbnpNZW50aW9uVHJpZ2dlciBuei1pbnB1dFxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1aS5pbnB1dFN0eWxlID09PSAndGV4dGFyZWEnXCI+XG4gICAgICAgICAgPHRleHRhcmVhIG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFtuekF1dG9zaXplXT1cInVpLmF1dG9zaXplXCI+XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwvbnotbWVudGlvbj5cblxuICAgIDwvc2YtaXRlbS13cmFwPlxuICAgIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBNZW50aW9uV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21lbnRpb25zJykgbWVudGlvbkNoaWxkOiBOek1lbnRpb25Db21wb25lbnQ7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IGFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHZhbHVlV2l0aDogdGhpcy51aS52YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6XG4gICAgICAgIHRoaXMudWkubm90Rm91bmRDb250ZW50IHx8ICfDpsKXwqDDpcKMwrnDqcKFwo3Dp8K7wpPDpsKewpzDr8K8wozDqMK9wrvDpsKVwrLDp8KpwrrDpsKgwrzDpcKuwozDpsKIwpDDqMK+wpPDpcKFwqUnLFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnVpLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcbiAgICAgIHByZWZpeDogdGhpcy51aS5wcmVmaXggfHwgJ0AnLFxuICAgIH07XG4gICAgY29uc3QgbWluID1cbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWluaW11bSA6IC0xLFxuICAgICAgbWF4ID1cbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IC0xO1xuICAgIGlmICghdGhpcy51aS52YWxpZGF0b3IgJiYgKG1pbiAhPT0gLTEgfHwgbWF4ICE9PSAtMSkpIHtcbiAgICAgIHRoaXMudWkudmFsaWRhdG9yID0gKFxuICAgICAgICB2YWx1ZTogYW55LFxuICAgICAgICBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSxcbiAgICAgICAgZm9ybTogUHJvcGVydHlHcm91cCxcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWVudGlvbkNoaWxkLmdldE1lbnRpb25zKCkubGVuZ3RoO1xuICAgICAgICBpZiAobWluICE9PSAtMSAmJiBjb3VudCA8IG1pbikge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDDpsKcwoDDpcKwwpHDpsKPwpDDpcKPwoogJHttaW59IMOmwqzCoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heCAhPT0gLTEgJiYgY291bnQgPiBtYXgpIHtcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBgw6bCnMKAw6XCpMKaw6bCj8KQw6XCj8KKICR7bWF4fSDDpsKswqFgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy51aS5sb2FkRGF0YSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAodGhpcy51aS5sb2FkRGF0YShvcHRpb24pIGFzIE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPilcbiAgICAgIC5waXBlKHRhcCgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKSwgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIHt7IHZhbHVlIHx8IHVpLmRlZmF1bHRUZXh0IHx8ICctJyB9fVxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51aS5fcmVxdWlyZWQgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuLi93aWRnZXQuZmFjdG9yeSc7XG5cbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgQXJyYXlXaWRnZXQgfSBmcm9tICcuL2FycmF5L2FycmF5LndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vbnVtYmVyL251bWJlci53aWRnZXQnO1xuaW1wb3J0IHsgRGF0ZVdpZGdldCB9IGZyb20gJy4vZGF0ZS9kYXRlLndpZGdldCc7XG5pbXBvcnQgeyBUaW1lV2lkZ2V0IH0gZnJvbSAnLi90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBCb29sZWFuV2lkZ2V0IH0gZnJvbSAnLi9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHsgU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi90YWcvdGFnLndpZGdldCc7XG5pbXBvcnQgeyBVcGxvYWRXaWRnZXQgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQud2lkZ2V0JztcbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLndpZGdldCc7XG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcbmltcG9ydCB7IFJhdGVXaWRnZXQgfSBmcm9tICcuL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldCc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0JztcbmltcG9ydCB7IE1lbnRpb25XaWRnZXQgfSBmcm9tICcuL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vdGV4dC90ZXh0LndpZGdldCc7XG5cbmV4cG9ydCBjbGFzcyBOeldpZGdldFJlZ2lzdHJ5IGV4dGVuZHMgV2lkZ2V0UmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlcignb2JqZWN0JywgT2JqZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdhcnJheScsIEFycmF5V2lkZ2V0KTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHQnLCBUZXh0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzdHJpbmcnLCBTdHJpbmdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ251bWJlcicsIE51bWJlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignaW50ZWdlcicsIE51bWJlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignZGF0ZScsIERhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RpbWUnLCBUaW1lV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYWRpbycsIFJhZGlvV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjaGVja2JveCcsIENoZWNrYm94V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdib29sZWFuJywgQm9vbGVhbldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGV4dGFyZWEnLCBUZXh0YXJlYVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2VsZWN0JywgU2VsZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0cmVlLXNlbGVjdCcsIFRyZWVTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RhZycsIFRhZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndXBsb2FkJywgVXBsb2FkV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0cmFuc2ZlcicsIFRyYW5zZmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzbGlkZXInLCBTbGlkZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhdGUnLCBSYXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdhdXRvY29tcGxldGUnLCBBdXRvQ29tcGxldGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Nhc2NhZGVyJywgQ2FzY2FkZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ21lbnRpb24nLCBNZW50aW9uV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjdXN0b20nLCBDdXN0b21XaWRnZXQpO1xuXG4gICAgdGhpcy5zZXREZWZhdWx0KFN0cmluZ1dpZGdldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge1xuICBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxufSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1XcmFwQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNGVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3dpZGdldHMvY3VzdG9tL3NmLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTRkZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9zZi1maXhlZC5kaXJlY3RpdmUnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBTRkNvbXBvbmVudCxcbiAgU0ZJdGVtQ29tcG9uZW50LFxuICBTRkl0ZW1XcmFwQ29tcG9uZW50LFxuICBTRlRlbXBsYXRlRGlyZWN0aXZlLFxuICBTRkZpeGVkRGlyZWN0aXZlLFxuXTtcblxuLy8gcmVnaW9uOiB3aWRnZXRzXG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBOeldpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRzL256LXdpZGdldC5yZWdpc3RyeSc7XG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgQXJyYXlXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQnO1xuaW1wb3J0IHsgRGF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGltZS90aW1lLndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHsgU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90YWcvdGFnLndpZGdldCc7XG5pbXBvcnQgeyBVcGxvYWRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zbGlkZXIvc2xpZGVyLndpZGdldCc7XG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldCc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldCc7XG5cbmNvbnN0IFdJREdFVFMgPSBbXG4gIE9iamVjdFdpZGdldCxcbiAgQXJyYXlXaWRnZXQsXG4gIFN0cmluZ1dpZGdldCxcbiAgTnVtYmVyV2lkZ2V0LFxuICBEYXRlV2lkZ2V0LFxuICBUaW1lV2lkZ2V0LFxuICBSYWRpb1dpZGdldCxcbiAgQ2hlY2tib3hXaWRnZXQsXG4gIEJvb2xlYW5XaWRnZXQsXG4gIFRleHRhcmVhV2lkZ2V0LFxuICBTZWxlY3RXaWRnZXQsXG4gIFRyZWVTZWxlY3RXaWRnZXQsXG4gIFRhZ1dpZGdldCxcbiAgVXBsb2FkV2lkZ2V0LFxuICBUcmFuc2ZlcldpZGdldCxcbiAgU2xpZGVyV2lkZ2V0LFxuICBSYXRlV2lkZ2V0LFxuICBBdXRvQ29tcGxldGVXaWRnZXQsXG4gIENhc2NhZGVyV2lkZ2V0LFxuICBNZW50aW9uV2lkZ2V0LFxuICBDdXN0b21XaWRnZXQsXG4gIFRleHRXaWRnZXQsXG5dO1xuXG4vLyBlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uV0lER0VUU10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLldJREdFVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlbG9uRm9ybUNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogV2lkZ2V0UmVnaXN0cnksIHVzZUNsYXNzOiBOeldpZGdldFJlZ2lzdHJ5IH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsTUFBYSxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFVLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixhQUFhO0lBQ3JDLGVBQWUsRUFBUyxZQUFZO0lBQ3BDLG9CQUFvQixFQUFJLFdBQVc7SUFDbkMsS0FBSyxFQUFtQixxQkFBcUI7SUFDN0MsWUFBWSxFQUFZLDZCQUE2QjtJQUNyRCxJQUFJLEVBQW9CLGNBQWM7SUFDdEMsTUFBTSxFQUFrQixPQUFPOztJQUMvQixJQUFJLEVBQW9CLGNBQWM7SUFDdEMsUUFBUSxFQUFnQixLQUFLO0lBQzdCLFNBQVMsRUFBZSxnQkFBZ0I7SUFDeEMsU0FBUyxFQUFlLGtCQUFrQjtJQUMxQyxPQUFPLEVBQWlCLHdCQUF3QjtJQUNoRCxhQUFhLEVBQVcsd0JBQXdCO0lBQ2hELE9BQU8sRUFBaUIsd0JBQXdCO0lBQ2hELGFBQWEsRUFBVyx3QkFBd0I7SUFDaEQsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsYUFBYSxFQUFXLGtCQUFrQjtJQUMxQyxhQUFhLEVBQVcsa0JBQWtCO0lBQzFDLFVBQVUsRUFBYyx1QkFBdUI7SUFDL0MsR0FBRyxFQUFxQixvQkFBb0I7SUFDNUMsS0FBSyxFQUFtQiwwQkFBMEI7SUFDbEQsT0FBTyxFQUFpQixTQUFTO0lBQ2pDLFdBQVcsRUFBYSxnQ0FBZ0M7SUFDeEQsTUFBTSxFQUFr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