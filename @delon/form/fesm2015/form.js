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
        if (typeof this.schema.readOnly !== 'undefined')
            return this.schema.readOnly;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2Vycm9ycy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL2NvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3V0aWxzLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvdGVybWluYXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2F0b21pYy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL251bWJlci5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL3N0cmluZy5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Jvb2xlYW4ucHJvcGVydHkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL29iamVjdC5wcm9wZXJ0eS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3ZhbGlkYXRvci5mYWN0b3J5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0LmZhY3RvcnkudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWZpeGVkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGltZS90aW1lLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCJuZzovL0BkZWxvbi9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldC50cyIsIm5nOi8vQGRlbG9uL2Zvcm0vc3JjL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5LnRzIiwibmc6Ly9AZGVsb24vZm9ybS9zcmMvbW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xyXG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDDpcK4woPDpcKwwpTDpsKowqHDpcK8wo/DpcKHwrrDqcKUwplgLFxyXG4gICckcmVmJzogICAgICAgICAgICAgICAgIGDDpsKXwqDDpsKzwpXDpsKJwr7DpcKIwrDDpcK8wpXDp8KUwqh7cmVmfWAsXHJcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYMOkwrjCjcOlwoXCgcOowq7CuMOowrbChcOowr/Ch3tyZWZ9YCxcclxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBgw6TCuMKNw6XChcKBw6jCrsK4w6bCnMKJw6nCosKdw6XCpMKWw6fCmsKEw6XCscKew6bCgMKnYCxcclxuICBhbnlPZjogICAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6XCusKUw6TCuMK6IGFueU9mIMOmwonCgMOmwozCh8Olwq7CmsOnwprChMOlwoXCtsOkwrjCrcOkwrjCgMOkwrjCqmAsXHJcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwovCpcOmwpzCicOlwrHCnsOmwoDCp3twcm9wZXJ0eX3Dp8KawoTDpMK+wp3DqMK1wpbDpcKxwp7DpsKAwqd7ZGVwc31gLFxyXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDDpcK6wpTDpcK9wpPDpsKYwq/DqcKiwoTDqMKuwr7DpcKuwprDp8KawoTDpsKewprDpMK4wr7DpcKAwrzDpMK5wovDpMK4woBgLFxyXG4gIGZvcm1hdDogICAgICAgICAgICAgICAgIGDDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq5gLCAvLyBgw6XCusKUw6XCvcKTw6XCjMK5w6nChcKNw6bCoMK8w6XCvMKPIFwie2Zvcm1hdH1cImAsXHJcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYMOnwrHCu8Olwp7Ci8OlwrrClMOlwr3Ck8OmwpjCryB7dHlwZX1gLFxyXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDDpcK/woXDpcKhwqvDqcKhwrlgLFxyXG4gIG1heExlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKkwpoge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqZgLFxyXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDDqMKHwrPDpcKwwpEge2xpbWl0fSDDpMK4wqrDpcKtwpfDp8KswqbDpMK7wqXDpMK4wopgLFxyXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgZm9ybWF0TWluaW11bTogICAgICAgICAgYMOlwr/ChcOpwqHCuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcclxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBgw6XCv8KFw6nCocK7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxyXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDDpcK/woXDqcKhwrsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgbWF4SXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwqTCmsOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXHJcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOpwqHCuWAsXHJcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYMOkwrjCjcOlwrrClMOlwqTCmsOkwrrCjiB7bGltaXR9IMOkwrjCqsOlwrHCnsOmwoDCp2AsXHJcbiAgbWluUHJvcGVydGllczogICAgICAgICAgYMOkwrjCjcOlwrrClMOlwrDCkcOkwrrCjiB7bGltaXR9IMOkwrjCqsOlwrHCnsOmwoDCp2AsXHJcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OmwpjCryB7bXVsdGlwbGVPZn0gw6fCmsKEw6bClcK0w6bClcKww6XCgMKNYCxcclxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCjMK5w6nChcKNIFwibm90XCIgc2NoZW1hYCxcclxuICBvbmVPZjogICAgICAgICAgICAgICAgICBgw6XCj8Kqw6jCg8K9w6XCjMK5w6nChcKNw6TCuMKAw6TCuMKqIFwib25lT2ZcIiDDpMK4wq3Dp8KawoQgc2NoZW1hYCxcclxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBgw6bClcKww6bCjcKuw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuYCxcclxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBgw6TCuMKNw6XCusKUw6XCvcKTw6XCkMKrw6bCnMKJw6nCh8KNw6XCpMKNw6nCocK5ICjDp8Kswqwge2p9IMOpwqHCucOkwrjCjsOnwqzCrCB7aX0gw6nCocK5w6bCmMKvw6nCh8KNw6XCpMKNw6fCmsKEKWAsXHJcbiAgY3VzdG9tOiAgICAgICAgICAgICAgICAgYMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCrmAsXHJcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYMOlwrHCnsOmwoDCp8OlwpDCjSBcIntwcm9wZXJ0eU5hbWV9XCIgw6bCl8Kgw6bClcKIYCxcclxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBgw6XCusKUw6XCvcKTw6bCnMKJw6XCscKew6bCgMKnw6XCjMK5w6nChcKNw6bCqMKhw6XCvMKPIHttaXNzaW5nUGF0dGVybn1gLFxyXG4gIHN3aXRjaDogICAgICAgICAgICAgICAgIGDDp8KUwrHDpMK6wo4ge2Nhc2VJbmRleH0gw6XCpMKxw6jCtMKlw6/CvMKMw6bCnMKqw6nCgMKaw6jCv8KHIFwic3dpdGNoXCIgw6bCoMKhw6nCqsKMYCxcclxuICBjb25zdDogICAgICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6fCrcKJw6TCusKOw6XCuMK4w6nCh8KPYCxcclxuICBjb250YWluczogICAgICAgICAgICAgICBgw6XCusKUw6XCvcKTw6XCjMKFw6XCkMKrw6TCuMKAw6TCuMKqw6bCnMKJw6bClcKIw6nCocK5YCxcclxuICBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDDpcK6wpTDpcK9wpPDpsKYwq/DpcK4woPDpcKwwpTDpcKAwrxgLFxyXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIMOlwrrClMOlwr3Ck8OmwpjCr8OlwrjCg8OlwrDClMOlwoDCvGAsXHJcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYMOlwrrClMOlwr3Ck8OlwozCucOpwoXCjcOmwqjCocOlwrzCjyBcIntmYWlsaW5nS2V5d29yZH1cImAsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XHJcbiAga2V5d29yZDogc3RyaW5nO1xyXG4gIGRhdGFQYXRoPzogc3RyaW5nO1xyXG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XHJcbiAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIF9jdXN0b20/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcclxuICAgKiAtIGBmYWxzZWAgw6bCj8KQw6TCusKkw6bCl8K2w6bCoMKhw6nCqsKMXHJcbiAgICovXHJcbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDDqMKHwqrDpcKuwprDpMK5wonDqcKUwpnDqMKvwq/DpMK/wqHDpsKBwq/DpsKWwofDpsKcwqzDr8K8wozDqcKUwq7DpcKQwo3DqMK1wp7DpcKQwowgYEVycm9yRGF0YS5rZXl3b3JkYCDDpcKAwrxcclxuICAgKi9cclxuICBlcnJvcnM/OiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcclxuICAgKi9cclxuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCj8Kqw6XCscKVw6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJw6TCuMKNw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxyXG4gICAqL1xyXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGBcclxuICAgKiAtIMOlwoDCvMOlwqfCi8OnwrvCiMOlwozChcOlwpDCqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxyXG4gICAqL1xyXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICogw6jCh8Kqw6XCrsKaw6TCucKJw6bCoMKhw6nCqsKMXHJcbiAgICovXHJcbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xyXG59XHJcbiIsImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBFUlJPUlNERUZBVUxUIH0gZnJvbSAnLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOlwr/CvcOnwpXCpcOmwp/CkMOkwrrCm8OmwpXCsMOmwo3CrsOnwrHCu8Olwp7Ci8OmwqDCocOpwqrCjCBgRVJST1JTREVGQVVMVGDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWyAndHlwZScsICdlbnVtJyBdYFxyXG4gICAqXHJcbiAgICogLSBgdHlwZWAgw6nCmcKQw6XCrsKaIFNjaGVtYSDDpMK4wq0gYHR5cGVgIMOnwrHCu8Olwp7Ci1xyXG4gICAqIC0gYGVudW1gIMOpwpnCkMOlwq7CmsOlwrrClMOlwr3Ck8OmwpjCr8OpwqLChMOowq7CvsOlwq7CmsOnwprChMOmwp7CmsOkwrjCvsOlwoDCvMOkwrnCi8OkwrjCgFxyXG4gICAqL1xyXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW10gPSBbJ3R5cGUnLCAnZW51bSddO1xyXG4gIC8qKlxyXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDDpcKPwoLDpsKVwrBcclxuICAgKi9cclxuICBhanY/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCrsKew6bCl8K2w6bCoMKhw6nCqsKMw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXHJcbiAgICogLSBgdHJ1ZWAgw6bCr8KPw6TCuMKAw6bCrMKhw6nCg8K9w6bCoMKhw6nCqsKMXHJcbiAgICogLSBgZmFsc2VgIMOmwo/CkMOkwrrCpMOmwpfCtsOmwqDCocOpwqrCjFxyXG4gICAqL1xyXG4gIGxpdmVWYWxpZGF0ZT8gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCh8Olwq7CmsOowqHCqMOlwo3ClSBgYXV0b2NvbXBsZXRlYCDDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgb25gXHJcbiAgICovXHJcbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDp8KrwovDpcKNwrPDpcKRwojDp8KOwrDDqcKUwpnDqMKvwq/DqMKnwobDqMKnwonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXHJcbiAgICovXHJcbiAgZmlyc3RWaXN1YWw/ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCj8Kqw6XCscKVw6fCpMK6w6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJw6TCuMKNw6bCmMK+w6fCpMK6w6nClMKZw6jCr8Kvw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxyXG4gICAqL1xyXG4gIG9ubHlWaXN1YWw/ID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogw6jCh8Kqw6XCrsKaw6TCucKJw6nCgMKaw6fClMKow6nClMKZw6jCr8Kvw6TCv8Khw6bCgcKvXHJcbiAgICovXHJcbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XHJcbiAgLyoqXHJcbiAgICogw6nCu8KYw6jCrsKkw6XChcKow6XCscKAw6XCuMKDw6XCscKAXHJcbiAgICovXHJcbiAgdWk/OiBTRlVJU2NoZW1hSXRlbTtcclxuICAvKipcclxuICAgKiDDpcKFwoPDp8K0wqDDp8K7woTDpMK7wrbDpcKkwqfDpcKwwo/Dr8K8wozDp8KUwqjDpMK6wo4gYG56U2l6ZWAgw6XCgMK8XHJcbiAgICovXHJcbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCicOpwpLCrsOpwqPCjsOmwqDCvFxyXG4gICAqL1xyXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xyXG4gICAgc3VibWl0X3R5cGU6ICdwcmltYXJ5JyxcclxuICAgIHJlc2V0X3R5cGU6ICdkZWZhdWx0JyxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cInN0cmluZ1wiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgWVlZWS1NTS1ERCBISDptbTpzc2BcclxuICAgKi9cclxuICB1aURhdGVTdHJpbmdGb3JtYXQ/ID0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xyXG4gIC8qKlxyXG4gICAqIGRhdGXDpcKwwo/DqcKDwqjDpMK7wrbDr8K8wppgdHlwZT1cIm51bWJlclwiYCDDpMK4wpTDpMK4wo3DpsKMwofDpcKuwpogYHNjaGVtYS5mb3JtYXRgIMOlwpLCjCBgdWkuZm9ybWF0YCDDpsKXwrbDpsKXwqXDpsKcwp/DpsKgwrzDpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgeGAgMTPDpMK9wo1Vbml4IFRpbWVzdGFtcFxyXG4gICAqL1xyXG4gIHVpRGF0ZU51bWJlckZvcm1hdD8gPSAneCc7XHJcbiAgLyoqXHJcbiAgICogdGltZcOlwrDCj8OpwoPCqMOkwrvCtsOvwrzCmmB0eXBlPVwic3RyaW5nXCJgIMOkwrjClMOkwrjCjcOmwozCh8Olwq7CmiBgc2NoZW1hLmZvcm1hdGAgw6XCksKMIGB1aS5mb3JtYXRgIMOmwpfCtsOmwpfCpcOmwpzCn8OmwqDCvMOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBISDptbTpzc2BcclxuICAgKi9cclxuICB1aVRpbWVTdHJpbmdGb3JtYXQ/ID0gJ0hIOm1tOnNzJztcclxuICAvKipcclxuICAgKiB0aW1lw6XCsMKPw6nCg8Kow6TCu8K2w6/CvMKaYHR5cGU9XCJudW1iZXJcImAgw6TCuMKUw6TCuMKNw6bCjMKHw6XCrsKaIGBzY2hlbWEuZm9ybWF0YCDDpcKSwowgYHVpLmZvcm1hdGAgw6bCl8K2w6bCl8Klw6bCnMKfw6bCoMK8w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHhgIDEzw6TCvcKNVW5peCBUaW1lc3RhbXDDr8K8wozDpsKXwqXDpsKcwp/Dp8K7wp/DpMK4woDDpMK9wr/Dp8KUwqggYDE5NzAtMDEtMDFgXHJcbiAgICovXHJcbiAgdWlUaW1lTnVtYmVyRm9ybWF0PyA9ICd4JztcclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hRGVmaW5pdGlvbiwgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi9zY2hlbWEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPUk1BVE1BUFMgPSB7XHJcbiAgJ2RhdGUtdGltZSc6IHtcclxuICAgIHdpZGdldDogJ2RhdGUnLFxyXG4gICAgc2hvd1RpbWU6IHRydWUsXHJcbiAgICBmb3JtYXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXHJcbiAgfSxcclxuICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxyXG4gICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxyXG4gIHRpbWU6IHsgd2lkZ2V0OiAndGltZScgfSxcclxuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxyXG4gIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAnWVlZWS1XVycgfSxcclxuICBtb250aDogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcclxuICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxyXG4gIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcclxuICBjb2xvcjogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXHJcbiAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobzogYW55KSB7XHJcbiAgcmV0dXJuIG8gPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICBjb25zb2xlLndhcm4oLi4uYXJncyk7XHJcbn1cclxuXHJcbi8qKiDDpsKgwrnDpsKNwq4gYCRyZWZgIMOmwp/CpcOmwonCviBgZGVmaW5pdGlvbnNgICovXHJcbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gIGNvbnN0IG1hdGNoID0gL14jXFwvZGVmaW5pdGlvbnNcXC8oLiopJC8uZXhlYygkcmVmKTtcclxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcclxuICAgIGNvbnN0IHBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoJy8nKTtcclxuICAgIGxldCBjdXJyZW50OiBhbnkgPSBkZWZpbml0aW9ucztcclxuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvfjEvZywgJy8nKS5yZXBsYWNlKC9+MC9nLCAnficpO1xyXG4gICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShwYXJ0KSkge1xyXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3VycmVudDtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDDpcKPwpbDpcKbwp5TY2hlbWHDr8K8wozDpcK5wrbDpcKkwoTDp8KQwoYgYCRyZWZgIMOnwprChMOlwoXCs8OnwrPCu1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlU2NoZW1hKFxyXG4gIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxyXG4pOiBTRlNjaGVtYSB7XHJcbiAgaWYgKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XHJcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcclxuICAgIC8vIHJlbW92ZSAkcmVmIHByb3BlcnR5XHJcbiAgICBjb25zdCB7ICRyZWYsIC4uLmxvY2FsU2NoZW1hIH0gPSBzY2hlbWE7XHJcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcclxuICBpZiAoIShzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2lmJykgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aGVuJykpKSByZXR1cm47XHJcblxyXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBkb2VzIG5vdCBjb250YWluICdwcm9wZXJ0aWVzJ2ApO1xyXG5cclxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLFxyXG4gICAgaWZLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLmlmLnByb3BlcnRpZXMpO1xyXG4gIGRldGVjdEtleShhbGxLZXlzLCBpZktleXMpO1xyXG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbi5yZXF1aXJlZCk7XHJcbiAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEudGhlbi5yZXF1aXJlZCk7XHJcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xyXG4gIGlmIChoYXNFbHNlKSB7XHJcbiAgICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLmVsc2UucmVxdWlyZWQpO1xyXG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2aXNpYmxlSWY6IGFueSA9IHt9O1xyXG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcclxuICBpZktleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgY29uc3QgY29uZCA9IHNjaGVtYS5pZi5wcm9wZXJ0aWVzW2tleV0uZW51bTtcclxuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcclxuICAgIGlmIChoYXNFbHNlKSB2aXNpYmxlRWxzZVtrZXldID0gKHZhbHVlOiBhbnkpID0+ICFjb25kLmluY2x1ZGVzKHZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgc2NoZW1hLnRoZW4ucmVxdWlyZWQuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUlmKSk7XHJcbiAgaWYgKGhhc0Vsc2UpXHJcbiAgICBzY2hlbWEuZWxzZS5yZXF1aXJlZC5mb3JFYWNoKFxyXG4gICAgICBrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUVsc2UpLFxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIHNjaGVtYTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0S2V5KGtleXM6IHN0cmluZ1tdLCBkZXRlY3RLZXlzOiBzdHJpbmdbXSkge1xyXG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZjogcHJvcGVydGllcyBkb2VzIG5vdCBjb250YWluICcke2tleX0nYCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHJldHVybiBwcm9wZXJ0aWVzO1xyXG4gIGNvbnN0IGFycmF5VG9IYXNoID0gYXJyID0+XHJcbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICAgIHByZXZbY3Vycl0gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxuICBjb25zdCBlcnJvclByb3BMaXN0ID0gYXJyID0+IGBwcm9wZXJ0eSBbJHthcnIuam9pbihgJywgJ2ApfV1gO1xyXG5cclxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcclxuICBjb25zdCBvcmRlckhhc2ggPSBhcnJheVRvSGFzaChvcmRlcik7XHJcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcclxuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWAsXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcclxuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XHJcbiAgaWYgKHJlc3RJbmRleCA9PT0gLTEpIHtcclxuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGRvZXMgbm90IGNvbnRhaW4gJHtlcnJvclByb3BMaXN0KHJlc3QpfWAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JkZXI7XHJcbiAgfVxyXG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScsXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XHJcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XHJcbiAgcmV0dXJuIGNvbXBsZXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pOiBTRlNjaGVtYUVudW1bXSB7XHJcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XHJcbiAgICBsaXN0ID0gbGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gPFNGU2NoZW1hRW51bT57IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChmb3JtRGF0YSkge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xyXG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcclxuICAgICAgaWYgKH5mb3JtRGF0YS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIGZpeCBkaXNhYmxlZCBzdGF0dXNcclxuICBpZiAocmVhZE9ubHkpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiBpdGVtLmRpc2FibGVkID0gdHJ1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGdldEVudW0oZGVlcENvcHkobGlzdCB8fCBbXSksIGZvcm1EYXRhLCByZWFkT25seSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKFxyXG4gIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxyXG4gIGZvcm1EYXRhOiBhbnksXHJcbiAgYXN5bmNBcmdzPzogYW55LFxyXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XHJcbiAgaWYgKHR5cGVvZiB1aS5hc3luY0RhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiB1aVxyXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHVpLl9fZGVzdHJveSAhPT0gdHJ1ZSksXHJcbiAgICAgICAgbWFwKGxpc3QgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpO1xyXG59XHJcbiIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJtaW5hdG9yU2VydmljZSB7XHJcbiAgb25EZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub25EZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveS5uZXh0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGlzQmxhbmsgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybVByb3BlcnR5IHtcclxuICBzY2hlbWFWYWxpZGF0b3I6ICh2YWx1ZTogYW55KSA9PiBFcnJvckRhdGFbXTtcclxuICBzY2hlbWE6IFNGU2NoZW1hO1xyXG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XHJcbiAgZm9ybURhdGE6IHt9O1xyXG4gIF92YWx1ZTogYW55ID0gbnVsbDtcclxuICB3aWRnZXQ6IFdpZGdldDxhbnk+O1xyXG4gIHByaXZhdGUgX2Vycm9yczogRXJyb3JEYXRhW10gPSBudWxsO1xyXG4gIHByb3RlY3RlZCBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcclxuICBwcml2YXRlIF92YWx1ZUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgcHJpdmF0ZSBfZXJyb3JzQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcclxuICBwcml2YXRlIF92aXNpYmlsaXR5Q2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgcHJpdmF0ZSBfcm9vdDogUHJvcGVydHlHcm91cDtcclxuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXA7XHJcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcclxuICAgIGZvcm1EYXRhOiB7fSxcclxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICB0aGlzLnVpID0gdWk7XHJcbiAgICB0aGlzLnNjaGVtYVZhbGlkYXRvciA9IHNjaGVtYVZhbGlkYXRvckZhY3RvcnkuY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hLCB7XHJcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGEgfHwgc2NoZW1hLmRlZmF1bHQ7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMuX3Jvb3QgPSBwYXJlbnQucm9vdDtcclxuICAgIH0gZWxzZSBpZiAodGhpcyBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcclxuICAgICAgdGhpcy5fcm9vdCA9IDxQcm9wZXJ0eUdyb3VwPig8YW55PnRoaXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWVDaGFuZ2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlcztcclxuICB9XHJcblxyXG4gIGdldCBlcnJvcnNDaGFuZ2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yc0NoYW5nZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyZW50KCk6IFByb3BlcnR5R3JvdXAge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9XHJcblxyXG4gIGdldCByb290KCk6IFByb3BlcnR5R3JvdXAge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QgfHwgPFByb3BlcnR5R3JvdXA+KDxhbnk+dGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3JzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycztcclxuICB9XHJcblxyXG4gIGdldCB2aXNpYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCrsK+w6fCvcKuw6XCgMK8XHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XHJcbiAgICovXHJcbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwofCjcOnwr3CrsOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOlwoDCvMOkwrjCuiBgc2NoZW1hLmRlZmF1bHRgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIMOlwo/CqsOlwq/CucOlwr3Ck8OlwonCjcOlwq3Cl8Omwq7CtcOmwpvCtMOmwpbCsMOlwoDCvMOlwpLCjMOmwqDCocOpwqrCjMOvwrzCm2BmYWxzZWAgw6XCjMKFw6XCkMKrw6TCuMKKw6fCusKnw6XCrcKXw6bCrsK1XHJcbiAgICovXHJcbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbik6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqICBAaW50ZXJuYWxcclxuICAgKi9cclxuICBhYnN0cmFjdCBfdXBkYXRlVmFsdWUoKTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDDpsKbwrTDpsKWwrDDpcKAwrzDpMK4wpTDpsKgwqHDqcKqwozDpsKVwrDDpsKNwq5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBbb25seVNlbGY9ZmFsc2VdIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OkwrjCisOnwrrCp8Olwq3Cl8Omwq7CtVxyXG4gICAqIEBwYXJhbSBbZW1pdFZhbHVlRXZlbnQ9dHJ1ZV0gw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRw6XCgMK8w6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlXHJcbiAgICovXHJcbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcclxuICAgIG9ubHlTZWxmID0gZmFsc2UsXHJcbiAgICBlbWl0VmFsdWVFdmVudCA9IHRydWUsXHJcbiAgICBlbWl0VmFsaWRhdG9yID0gdHJ1ZSxcclxuICApIHtcclxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XHJcblxyXG4gICAgaWYgKGVtaXRWYWx1ZUV2ZW50KSB7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYGVtaXRWYWxpZGF0b3JgIMOmwq/Cj8OkwrjCgMOmwqzCocOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOlwrfCssOnwrvCj8OlwozChcOlwpDCq8Olwq7CjMOmwpXCtMOpwpTCmcOowq/Cr8OpwpPCvsOowrfCr8OvwrzCjMOlwpDCjsOnwrvCrcOnwojCtsOoworCgsOnwoLCucOmwpXCsMOmwo3CrsOlwo/CmMOmwpvCtMOmwpfCoMOpwqHCu8OlwobCjcOowqfCpsOlwo/CkcOmwqDCocOpwqrCjFxyXG4gICAgaWYgKGVtaXRWYWxpZGF0b3IgJiYgdGhpcy51aS5saXZlVmFsaWRhdGUgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5fcnVuVmFsaWRhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcclxuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgZW1pdFZhbHVlRXZlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiDDpsKgwrnDpsKNwq7DqMK3wq/DpcK+woTDpsKQwpzDp8K0wqLDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cclxuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkge1xyXG4gICAgbGV0IHByb3A6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XHJcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCA9IG51bGw7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBpZiAocGF0aFswXSA9PT0gJy8nKSB7XHJcbiAgICAgIGJhc2UgPSB0aGlzLmZpbmRSb290KCk7XHJcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHIoMSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCAmJiBwcm9wLnBhcmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XHJcbiAgICAgICAgcmVzdWx0ID0gYmFzZS5nZXRQcm9wZXJ0eShwYXRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKfwqXDpsKJwr7DpsKgwrnDqMKhwqjDpcKNwpXDpcKxwp7DpsKAwqcgKi9cclxuICBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcclxuICAgIGxldCBwcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gdGhpcztcclxuICAgIHdoaWxlIChwcm9wZXJ0eS5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFByb3BlcnR5R3JvdXA+cHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICAvLyByZWdpb246IHByb2Nlc3MgZXJyb3JzXHJcblxyXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBfcnVuVmFsaWRhdGlvbigpIHtcclxuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xyXG4gICAgLy8gVGhlIGRlZmluaXRpb24gb2Ygc29tZSBydWxlczpcclxuICAgIC8vIDEuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGEgYW5kIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxyXG4gICAgY29uc3QgaXNFbXB0eSA9IHRoaXMuaXNFbXB0eURhdGEodGhpcy5fdmFsdWUpO1xyXG4gICAgaWYgKGlzRW1wdHkgJiYgdGhpcy51aS5fcmVxdWlyZWQpIHtcclxuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcclxuICAgIH0gZWxzZSBpZiAoaXNFbXB0eSkge1xyXG4gICAgICBlcnJvcnMgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVycm9ycyA9IHRoaXMuc2NoZW1hVmFsaWRhdG9yKHRoaXMuX3ZhbHVlKSB8fCBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XHJcbiAgICBpZiAodHlwZW9mIGN1c3RvbVZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcclxuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgICBjdXN0b21FcnJvcnMuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIHJlcyk7XHJcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgY3VzdG9tRXJyb3JzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcclxuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xyXG4gICAgLy8gZml4IGVycm9yIGZvcm1hdFxyXG4gICAgY29uc3QgaGFzQ3VzdG9tRXJyb3IgPSBsaXN0ICE9IG51bGwgJiYgbGlzdC5sZW5ndGggPiAwO1xyXG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XHJcbiAgICAgIGxpc3QuZm9yRWFjaCgoZXJyLCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGDDqMKHwqrDpcKuwprDpMK5wonDpsKgwqHDqcKqwozDpcKZwqjDpcK/woXDqcKhwrvDqMKHwrPDpcKwwpHDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogJ21lc3NhZ2UnIMOlwrHCnsOmwoDCp8OvwrzCjMOnwpTCqMOkwrrCjsOowqHCqMOnwqTCusOpwpTCmcOowq/Cr8OmwpbCh8OmwpzCrGAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGVyci5fY3VzdG9tID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLm1lcmdlRXJyb3JzKGVycm9ycywgbGlzdCk7XHJcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZXJnZUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBuZXdFcnJvcnM6IEVycm9yRGF0YSB8IEVycm9yRGF0YVtdKSB7XHJcbiAgICBpZiAobmV3RXJyb3JzKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld0Vycm9ycykpIHtcclxuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KC4uLm5ld0Vycm9ycyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3RXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ycztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgZW1pdEZvcm1hdCA9IHRydWUpIHtcclxuICAgIGlmIChlbWl0Rm9ybWF0ICYmIGVycm9ycyAmJiAhdGhpcy51aS5vbmx5VmlzdWFsKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5tYXAoKGVycjogRXJyb3JEYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPVxyXG4gICAgICAgICAgZXJyLl9jdXN0b20gPT09IHRydWUgJiYgZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxyXG4gICAgICAgICAgICA6ICh0aGlzLnVpLmVycm9ycyB8fCB7fSlbZXJyLmtleXdvcmRdIHx8XHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVycm9yc1tlcnIua2V5d29yZF0gfHxcclxuICAgICAgICAgICAgICBgYDtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZShlcnIpIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgIGlmICh+KG1lc3NhZ2UgYXMgc3RyaW5nKS5pbmRleE9mKCd7JykpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcclxuICAgICAgICAgICAgICAveyhbXFwuYS16MC05XSspfS9nLFxyXG4gICAgICAgICAgICAgICh2OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBlcnIucGFyYW1zW2tleV0gfHwgJycsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlcnIubWVzc2FnZSA9IG1lc3NhZ2UgYXMgc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcclxuICAgIHRoaXMuX2Vycm9yc0NoYW5nZXMubmV4dChlcnJvcnMpO1xyXG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxyXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICB0aGlzLl9wYXJlbnQuc2V0UGFyZW50QW5kUGxhdEVycm9ycyhlcnJvcnMsIHRoaXMucGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5fb2JqRXJyb3JzW3BhdGhdID0gZXJyb3JzO1xyXG4gICAgY29uc3QgcGxhdEVycm9yczogRXJyb3JEYXRhW10gPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcclxuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KHApO1xyXG4gICAgICBpZiAocHJvcGVydHkgJiYgIXByb3BlcnR5LnZpc2libGUpIHJldHVybjtcclxuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0RXJyb3JzKHBsYXRFcnJvcnMsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IGNvbmRpdGlvblxyXG5cclxuICBwcml2YXRlIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xyXG4gICAgLy8gw6nCg8Kow6XCiMKGw6bClcKww6bCjcKuw6bCusKQw6bCncKlw6jCh8KqIHJlc2V0XHJcbiAgICB0aGlzLnJlc2V0VmFsdWUodGhpcy52YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBBIGZpZWxkIGlzIHZpc2libGUgaWYgQVQgTEVBU1QgT05FIG9mIHRoZSBwcm9wZXJ0aWVzIGl0IGRlcGVuZHMgb24gaXMgdmlzaWJsZSBBTkQgaGFzIGEgdmFsdWUgaW4gdGhlIGxpc3RcclxuICBfYmluZFZpc2liaWxpdHkoKSB7XHJcbiAgICBjb25zdCB2aXNpYmxlSWYgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbSkudmlzaWJsZUlmO1xyXG4gICAgaWYgKHR5cGVvZiB2aXNpYmxlSWYgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZpc2libGVJZikubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZpc2libGVJZiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnRpZXNCaW5kaW5nOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10gPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5UGF0aCBpbiB2aXNpYmxlSWYpIHtcclxuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xyXG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKTtcclxuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoZWNrID0gcHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgICAgICAgbWFwKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aSA9IHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpLmluZGV4T2YoJyRBTlkkJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpLmluZGV4T2YodmFsdWUpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xyXG4gICAgICAgICAgICBjb25zdCBhbmQgPSBjb21iaW5lTGF0ZXN0KFxyXG4gICAgICAgICAgICAgIHZhbHVlQ2hlY2ssIHZpc2liaWxpdHlDaGVja1xyXG4gICAgICAgICAgICApLnBpcGUobWFwKHJlc3VsdHMgPT4gcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKSk7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNCaW5kaW5nLnB1c2goYW5kKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICBgQ2FuJ3QgZmluZCBwcm9wZXJ0eSAke2RlcGVuZGVuY3lQYXRofSBmb3IgdmlzaWJpbGl0eSBjaGVjayBvZiAke1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoXHJcbiAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgbWFwKHZhbHVlcyA9PiB2YWx1ZXMuaW5kZXhPZih0cnVlKSAhPT0gLTEpLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4gdGhpcy5zZXRWaXNpYmxlKHZpc2libGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJvcGVydHlHcm91cCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XHJcbiAgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSB8IEZvcm1Qcm9wZXJ0eVtdID0gbnVsbDtcclxuXHJcbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XHJcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XHJcblxyXG4gICAgbGV0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xyXG4gICAgaWYgKFxyXG4gICAgICBwcm9wZXJ0eSAhPT0gbnVsbCAmJlxyXG4gICAgICBzdWJQYXRoSWR4ICE9PSAtMSAmJlxyXG4gICAgICBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXBcclxuICAgICkge1xyXG4gICAgICBjb25zdCBzdWJQYXRoID0gcGF0aC5zdWJzdHIoc3ViUGF0aElkeCArIDEpO1xyXG4gICAgICBwcm9wZXJ0eSA9ICg8UHJvcGVydHlHcm91cD5wcm9wZXJ0eSkuZ2V0UHJvcGVydHkoc3ViUGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoQ2hpbGQoZm46IChmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgc3RyOiBTdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xyXG4gICAgICAgIGZuKHByb3BlcnR5LCBwcm9wZXJ0eUlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZm9yRWFjaENoaWxkKGNoaWxkID0+IHtcclxuICAgICAgZm4oY2hpbGQpO1xyXG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XHJcbiAgICAgICAgKDxQcm9wZXJ0eUdyb3VwPmNoaWxkKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcclxuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xyXG4gICAgdGhpcy5fYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCkge1xyXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUocHJvcGVydHkgPT4ge1xyXG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNSb290KCkge1xyXG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdG9taWNQcm9wZXJ0eSBleHRlbmRzIEZvcm1Qcm9wZXJ0eSB7XHJcbiAgYWJzdHJhY3QgZmFsbGJhY2tWYWx1ZSgpOiBhbnk7XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuc2NoZW1hLmRlZmF1bHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZhbGxiYWNrVmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG5cclxuICAgIGlmICh0aGlzLndpZGdldCkgdGhpcy53aWRnZXQucmVzZXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tWYWx1ZSgpICE9PSB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVZhbHVlKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcclxuICBmYWxsYmFja1ZhbHVlKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHZhbHVlID1cclxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJy4nKSA+IC0xID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXRvbWljUHJvcGVydHkgfSBmcm9tICcuL2F0b21pYy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm9wZXJ0eSBleHRlbmRzIEF0b21pY1Byb3BlcnR5IHtcbiAgZmFsbGJhY2tWYWx1ZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBdG9taWNQcm9wZXJ0eSB9IGZyb20gJy4vYXRvbWljLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuUHJvcGVydHkgZXh0ZW5kcyBBdG9taWNQcm9wZXJ0eSB7XHJcbiAgZmFsbGJhY2tWYWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xyXG4gIHRpY2sgPSAxO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcclxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBzY2hlbWE6IGFueSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XHJcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdO1xyXG4gICAgaWYgKGlzTmFOKHBvcykgfHwgcG9zID49IGxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcclxuICAgIHJldHVybiBsaXN0W3Bvc10uZ2V0UHJvcGVydHkoc3ViUGF0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XHJcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XHJcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0aGlzLl92YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVmFsdWUoKSB7XHJcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogT2JqZWN0UHJvcGVydHksIF8pID0+IHtcclxuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcclxuICAgICAgICB2YWx1ZS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5LmZvcm1EYXRhLCBwcm9wZXJ0eS52YWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFByb3BlcnR5KHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxyXG4gICAgICB0aGlzLnNjaGVtYS5pdGVtcyxcclxuICAgICAgdGhpcy51aS4kaXRlbXMsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICB0aGlzLFxyXG4gICAgKSBhcyBPYmplY3RQcm9wZXJ0eTtcclxuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcclxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShpdGVtKTtcclxuICAgICAgcHJvcGVydHkucmVzZXRWYWx1ZShpdGVtLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xyXG4gICAgaWYgKHBhdGgpIGRlbGV0ZSB0aGlzLl9vYmpFcnJvcnNbcGF0aF07XHJcbiAgICBlbHNlIHRoaXMuX29iakVycm9ycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBhY3Rpb25zXHJcblxyXG4gIGFkZCh2YWx1ZTogYW55KTogRm9ybVByb3BlcnR5IHtcclxuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgbGlzdCA9IDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXM7XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKGxpc3RbaW5kZXhdLnBhdGgpO1xyXG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IG9yZGVyUHJvcGVydGllcyB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xyXG4gIHByaXZhdGUgX3Byb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzSWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcclxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBzY2hlbWE6IGFueSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcclxuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XHJcbiAgICB0aGlzLl9wcm9wZXJ0aWVzSWQgPSBbXTtcclxuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcmVkUHJvcGVydGllcyA9IG9yZGVyUHJvcGVydGllcyhcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSxcclxuICAgICAgICB0aGlzLnVpLm9yZGVyIGFzIHN0cmluZ1tdLFxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBJbnZhbGlkICR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJ3Jvb3QnfSBvYmplY3QgZmllbGQgY29uZmlndXJhdGlvbjpgLFxyXG4gICAgICAgIGUsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBvcmRlcmVkUHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xyXG4gICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlJZF0gPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eUlkXSxcclxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxyXG4gICAgICAgICh0aGlzLmZvcm1EYXRhIHx8IHt9KVtwcm9wZXJ0eUlkXSxcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHByb3BlcnR5SWQsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3Byb3BlcnRpZXNJZC5wdXNoKHByb3BlcnR5SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XHJcbiAgfVxyXG4gIHJlc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcclxuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdLnJlc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcclxuICB9XHJcbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT0gbnVsbCAmJiAhIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aDtcclxuICB9XHJcbiAgX3VwZGF0ZVZhbHVlKCkge1xyXG4gICAgY29uc3QgdmFsdWU6IGFueSA9IHt9O1xyXG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5OiBhbnksIHByb3BlcnR5SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xyXG4gICAgICAgIHZhbHVlW3Byb3BlcnR5SWRdID0gcHJvcGVydHkudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgUHJvcGVydHlHcm91cCwgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuL251bWJlci5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xyXG5pbXBvcnQgeyBCb29sZWFuUHJvcGVydHkgfSBmcm9tICcuL2Jvb2xlYW4ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9hcnJheS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICApIHt9XHJcblxyXG4gIGNyZWF0ZVByb3BlcnR5KFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxyXG4gICAgcHJvcGVydHlJZD86IHN0cmluZyxcclxuICApOiBGb3JtUHJvcGVydHkge1xyXG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcclxuICAgIGxldCBwYXRoID0gJyc7XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XHJcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcGF0aCArPSAnLyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHBhdGggKz0gcHJvcGVydHlJZDtcclxuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICAgIHBhdGggKz0gKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS50aWNrKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICtcclxuICAgICAgICAgICAgcGFyZW50LnR5cGUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGF0aCA9ICcvJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcclxuICAgICAgY29uc3QgcmVmU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLCBwYXJlbnQucm9vdC5zY2hlbWEuZGVmaW5pdGlvbnMpO1xyXG4gICAgICBuZXdQcm9wZXJ0eSA9IHRoaXMuY3JlYXRlUHJvcGVydHkocmVmU2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmaXggcmVxdWlyZWRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHByb3BlcnR5SWQgJiZcclxuICAgICAgICAoKHBhcmVudCEuc2NoZW1hLnJlcXVpcmVkIHx8IFtdKSBhcyBzdHJpbmdbXSkuaW5kZXhPZihwcm9wZXJ0eUlkKSAhPT0gLTFcclxuICAgICAgKSB7XHJcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaXggdGl0bGVcclxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xyXG4gICAgICAvLyBmaXggZGF0ZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXHJcbiAgICAgICAgIXNjaGVtYS5mb3JtYXQgJiZcclxuICAgICAgICAhKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS5mb3JtYXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAnZGF0ZScpXHJcbiAgICAgICAgICB1aS5mb3JtYXQgPVxyXG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aURhdGVTdHJpbmdGb3JtYXRcclxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aURhdGVOdW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcclxuICAgICAgICAgIHVpLmZvcm1hdCA9XHJcbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxyXG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpVGltZU51bWJlckZvcm1hdDtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgU3RyaW5nUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1Byb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xyXG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcclxuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XHJcblxyXG5kZWNsYXJlIHZhciBBanY6IGFueTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcclxuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcclxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXHJcbiAgKTogKHZhbHVlOiBTRlNjaGVtYSkgPT4gRXJyb3JEYXRhW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IGV4dGVuZHMgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XHJcbiAgcHJvdGVjdGVkIGFqdjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KERlbG9uRm9ybUNvbmZpZylcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcclxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5hanYsIHtcclxuICAgICAgICBlcnJvckRhdGFQYXRoOiAncHJvcGVydHknLFxyXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcclxuICAgICAgICBqc29uUG9pbnRlcnM6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcclxuICAgICAgJ2RhdGEtdXJsJyxcclxuICAgICAgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdjb2xvcicsXHJcbiAgICAgIC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcclxuICAgICAgJ21vYmlsZScsXHJcbiAgICAgIC9eKDB8XFwrPzg2fDE3OTUxKT8xWzAtOV17MTB9JC8sXHJcbiAgICApO1xyXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxyXG4gICAgICAnaWQtY2FyZCcsXHJcbiAgICAgIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVmFsaWRhdG9yRm4oXHJcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxyXG4gICk6ICh2YWx1ZTogYW55KSA9PiBFcnJvckRhdGFbXSB7XHJcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbXVxyXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcclxuICAgICAgLmNvbmNhdChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMpO1xyXG5cclxuICAgIHJldHVybiAodmFsdWU6IGFueSk6IEVycm9yRGF0YVtdID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzIHRocm93biBpbiBhanYgZHVlIHRvIGludmFsaWQgc2NoZW1hcywgdGhlc2VcclxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuYWp2LmVycm9ycztcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcclxuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgSW5qZWN0YWJsZSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBDb21wb25lbnRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XHJcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRXaWRnZXQ6IGFueTtcclxuXHJcbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xyXG4gICAgdGhpcy5kZWZhdWx0V2lkZ2V0ID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xyXG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgaGFzKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcclxuICB9XHJcblxyXG4gIGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgKSB7fVxyXG5cclxuICBjcmVhdGVXaWRnZXQoXHJcbiAgICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgKTogQ29tcG9uZW50UmVmPFdpZGdldDxhbnk+PiB7XHJcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxXaWRnZXQ8YW55Pj4oXHJcbiAgICAgIGNvbXBvbmVudENsYXNzLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVlcENvcHksIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXHJcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxyXG4gIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuKSB7XHJcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgV2lkZ2V0RmFjdG9yeSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcclxuICAgICAgdXNlRmFjdG9yeTogdXNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXHJcbiAgICB9LFxyXG4gICAgVGVybWluYXRvclNlcnZpY2UsXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXHJcbiAgICAnW2NsYXNzLnNmLWVkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgbG9jYWxlOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XHJcbiAgcHJpdmF0ZSBfaXRlbTogYW55O1xyXG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcclxuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XHJcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcclxuICBfZm9ybURhdGE6IGFueTtcclxuICBfYnRuOiBTRkJ1dHRvbjtcclxuICBfc2NoZW1hOiBTRlNjaGVtYTtcclxuICBfdWk6IFNGVUlTY2hlbWE7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIC8qKiDDqMKhwqjDpcKNwpXDpcK4woPDpcKxwoDDr8K8wozDp8KtwonDpcKQwowgYG56TGF5b3V0YMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmhvcml6b250YWwgKi9cclxuICBASW5wdXQoKVxyXG4gIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xyXG5cclxuICAvKiogSlNPTiBTY2hlbWEgKi9cclxuICBASW5wdXQoKVxyXG4gIHNjaGVtYTogU0ZTY2hlbWE7XHJcblxyXG4gIC8qKiBVSSBTY2hlbWEgKi9cclxuICBASW5wdXQoKVxyXG4gIHVpOiBTRlVJU2NoZW1hO1xyXG5cclxuICAvKiogw6jCocKow6XCjcKVw6nCu8KYw6jCrsKkw6XCgMK8ICovXHJcbiAgQElucHV0KClcclxuICBmb3JtRGF0YToge307XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwozCicOpwpLCrlxyXG4gICAqIC0gw6XCgMK8w6TCuMK6IGBudWxsYCDDpsKIwpYgYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6bCicKLw6XCisKow6bCt8K7w6XCisKgw6bCjMKJw6nCksKuw6/CvMKMw6TCvcKGw6TCv8Kdw6fClcKZw6XCrsK5w6XCmcKoXHJcbiAgICogLSDDpcKAwrzDpMK4wrogYG5vbmVgIMOowqHCqMOnwqTCusOmwonCi8OlworCqMOmwrfCu8OlworCoMOmwozCicOpwpLCrsOvwrzCjMOkwrjClMOkwrjCjcOkwr/CncOnwpXCmcOlwq7CucOlwpnCqFxyXG4gICAqIC0gw6TCvcK/w6fClMKow6XCm8K6w6XCrsKaIGBsYWJlbGAgw6bCoMKHw6fCrcK+w6XCrsK9w6XCusKmw6bCl8K2w6/CvMKMw6jCi8Klw6bCl8KgIGByZW5kZXIuY2xhc3NgIMOlwojCmcOpwrvCmMOowq7CpMOkwrjCusOlwrHChcOkwrjCrcOnworCtsOmwoDCgVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKuwp7DpsKXwrbDpsKgwqHDqcKqwozDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDDpsKvwo/DpMK4woDDpsKswqHDqcKDwr3DpsKgwqHDqcKqwoxcclxuICAgKiAtIGBmYWxzZWAgw6bCj8KQw6TCusKkw6bCl8K2w6bCoMKhw6nCqsKMXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBsaXZlVmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuICAvKiogw6bCjMKHw6XCrsKaw6jCocKow6XCjcKVIGBhdXRvY29tcGxldGVgIMOlwoDCvCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XHJcblxyXG4gIC8qKiDDp8KrwovDpcKNwrPDpsKYwr7Dp8KkwrrDqcKUwpnDqMKvwq/DqMKnwobDqMKnwokgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGZpcnN0VmlzdWFsID0gdHJ1ZTtcclxuXHJcbiAgLyoqIMOowqHCqMOlwo3ClcOmwqjCocOlwrzCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcclxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLnNlYXJjaDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5fYnRuKSB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLmVkaXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtb2RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xyXG5cclxuICAvKiogw6bClcKww6bCjcKuw6XCj8KYw6bCm8K0w6bCl8K2w6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XHJcblxyXG4gIC8qKiDDpsKPwpDDpMK6wqTDqMKhwqjDpcKNwpXDpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcclxuXHJcbiAgLyoqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClcOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XHJcblxyXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8K7wpPDpsKewpzDpcKbwp7DqMKwwoMgKi9cclxuICBAT3V0cHV0KClcclxuICBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8qKiDDqMKhwqjDpcKNwpXDpsKgwqHDqcKqwozDp8KKwrbDpsKAwoEgKi9cclxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCocKow6XCjcKVw6XCgMK8ICovXHJcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KGU6IEV2ZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcclxuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcclxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlO1xyXG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWw7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlO1xyXG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcclxuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xyXG4gICAgICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcclxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xyXG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcclxuXHJcbiAgICBjb25zdCBpbkZuID0gKFxyXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgICBwYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXHJcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcclxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuLFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShcclxuICAgICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gYXMgU0ZTY2hlbWEsXHJcbiAgICAgICAgICBkZWZpbml0aW9ucyxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHVpID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIHsgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlIH0sXHJcbiAgICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdLFxyXG4gICAgICAgICAgdHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCxcclxuICAgICAgICAgICFwcm9wZXJ0eS51aSAmJlxyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJlxyXG4gICAgICAgICAgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgdGhpcy5fZGVmVWksXHJcbiAgICAgICAgICBwcm9wZXJ0eS51aSxcclxuICAgICAgICAgIHVpU2NoZW1hW3VpS2V5XSxcclxuICAgICAgICApIGFzIFNGVUlTY2hlbWFJdGVtUnVuO1xyXG4gICAgICAgIC8vIMOnwrvCp8OmwonCv8OnwojCtsOoworCgsOnwoLCucOlwrjCg8OlwrHCgMOlwrHCnsOmwoDCp1xyXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcclxuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xyXG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXHJcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgID8gNVxyXG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcclxuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcclxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgID8gMTlcclxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcclxuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxyXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2w7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XHJcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsICYmIHBhcmVudFNjaGVtYSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gcGFyZW50U2NoZW1hLnByb3BlcnRpZXNbdWkuZW5kXTtcclxuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0ZUVuZFByb3BlcnR5LnVpLCB7XHJcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVpLmVuZCA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1aS5oaWRkZW4gPSB0eXBlb2YgdWkuaGlkZGVuID09PSAnYm9vbGVhbicgPyB1aS5oaWRkZW4gOiBmYWxzZTtcclxuXHJcbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XHJcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVpO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcclxuICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gPSB1aVJlc1t1aUtleV1bJyRpdGVtcyddIHx8IHt9O1xyXG4gICAgICAgICAgaW5GbihcclxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXHJcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxyXG4gICAgICAgICAgICAodWlTY2hlbWFbdWlLZXldIHx8IHt9KVsnJGl0ZW1zJ10gfHwge30sXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluSWZGbiA9IChzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pID0+IHtcclxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2tleV07XHJcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XHJcbiAgICAgICAgcmVzb2x2ZUlmKHByb3BlcnR5LCB1aVt1aUtleV0pO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xyXG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XHJcbiAgICB0aGlzLl9kZWZVaSA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIDxTRlVJU2NoZW1hSXRlbT57XHJcbiAgICAgICAgb25seVZpc3VhbDogdGhpcy5vcHRpb25zLm9ubHlWaXN1YWwsXHJcbiAgICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXHJcbiAgICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcclxuICAgICAgICBmaXJzdFZpc3VhbDogdGhpcy5maXJzdFZpc3VhbCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5vcHRpb25zLnVpLFxyXG4gICAgICBfc2NoZW1hLnVpLFxyXG4gICAgICB0aGlzLnVpWycqJ10sXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHJvb3RcclxuICAgIHRoaXMuX3VpID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmVWkpO1xyXG5cclxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xyXG5cclxuICAgIC8vIGNvbmRcclxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XHJcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xyXG5cclxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSB7XHJcbiAgICAgIGRpKCdjb3ZlciBzY2hlbWEgJiB1aScsIHRoaXMuX3VpLCBfc2NoZW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpIHtcclxuICAgIHRoaXMuX2J0biA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHsgcmVuZGVyOiB7fSB9LFxyXG4gICAgICB0aGlzLmxvY2FsZSxcclxuICAgICAgdGhpcy5vcHRpb25zLmJ1dHRvbixcclxuICAgICAgdGhpcy5idXR0b24sXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmlyc3RLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl91aSkuZmluZCh3ID0+IHcuc3RhcnRzV2l0aCgnJCcpKTtcclxuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcclxuICAgICAgaWYgKCF0aGlzLl9idG4ucmVuZGVyLmdyaWQpIHtcclxuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7XHJcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcclxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gZml4ZWQgbGFiZWxcclxuICAgICAgaWYgKCF0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIMOlwpvCusOlwq7CmsOmwqDCh8Onwq3CvsOlwq7CvcOlwrrCpsOmwpfCtsOvwrzCjMOowovCpcOkwrjCjcOmwozCh8Olwq7CmsOmwqDCt8OlwrzCj8OvwrzCjMOlwojCmcOpwrvCmMOowq7CpMOlwrHChcOkwrjCrVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgJiZcclxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9idG4ucmVuZGVyLmdyaWQgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIGRpKCdidXR0b24gcHJvcGVydHknLCB0aGlzLl9idG4pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy52YWxpZGF0b3IoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCk7XHJcbiAgICBpZiAoIXByb3BlcnR5KSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihgw6bCnMKqw6bCicK+w6XCiMKww6jCt8Kvw6XCvsKEw6/CvMKaJHtwYXRofWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcclxuICAgICAgY29uc29sZS53YXJuKGDDpcK3wrLDp8K7wo/DpcKtwpjDpcKcwqjDp8KbwrjDpcKQwozDqMKHwqrDpcKuwprDpMK5wonDqMK3wq/DpcK+woTDr8K8wpoke3BhdGh9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcclxuICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcclxuICAgIHB1aS5fcmVuZGVyID0gdGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcclxuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcclxuICAgICAgaWYgKCFwdWkuX3JlbmRlcikgcHVpLl9yZW5kZXIgPSB0cGw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRvcigpIHtcclxuICAgIHRoaXMucm9vdFByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnM7XHJcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xyXG4gICAgaWYgKCF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKIwrfDpsKWwrAgU2NoZW1hw6/CvMKMw6TCuMKAw6jCiMKsw6nCnMKAw6jCpsKBw6XCisKow6bCgMKBw6TCv8Kuw6bClMK5IFNjaGVtYSDDpsKfwpDDpMK4wqrDpcKAwrzDpsKXwrbDpcKPwq/DpMK7wqXDpsKWwrnDpMK+wr/DqMKwwoPDp8KUwqhcclxuICAgKi9cclxuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpIHtcclxuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xyXG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcclxuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xyXG5cclxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcclxuXHJcbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xyXG5cclxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XHJcblxyXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XHJcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcclxuXHJcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcclxuICAgICAgdGhpcy5fc2NoZW1hLFxyXG4gICAgICB0aGlzLl91aSxcclxuICAgICAgdGhpcy5mb3JtRGF0YSxcclxuICAgICk7XHJcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLl9pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtRGF0YSwgdmFsdWUpO1xyXG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcclxuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcclxuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwofCjcOnwr3CrsOowqHCqMOlwo3ClVxyXG4gICAqIEBwYXJhbSBbZW1pdF0gw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBmb3JtUmVzZXRgIMOkwrrCi8OkwrvCtsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcclxuICAgKi9cclxuICByZXNldChlbWl0ID0gZmFsc2UpIHtcclxuICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcclxuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xyXG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcblxyXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3RhcmdldD48L25nLXRlbXBsYXRlPmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHJlZjogQ29tcG9uZW50UmVmPGFueT47XHJcbiAgd2lkZ2V0OiBXaWRnZXQ8YW55PiA9IG51bGw7XHJcblxyXG4gIC8vIHJlZ2lvbjogZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xyXG5cclxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgd2lkZ2V0RmFjdG9yeTogV2lkZ2V0RmFjdG9yeSxcclxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBvbldpZGdldEluc3RhbmNpYXRlZCh3aWRnZXQ6IFdpZGdldDxhbnk+KSB7XHJcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcclxuICAgIGNvbnN0IGlkID0gYF9zZi0ke25leHRVbmlxdWVJZCsrfWA7XHJcblxyXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcclxuICAgIHRoaXMud2lkZ2V0LmZvcm1Qcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5O1xyXG4gICAgdGhpcy53aWRnZXQuc2NoZW1hID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hO1xyXG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcclxuICAgIHRoaXMud2lkZ2V0LmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZGdldC5maXJzdFZpc3VhbCA9IHVpLmZpcnN0VmlzdWFsO1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkud2lkZ2V0ID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZiA9IHRoaXMud2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLFxyXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcsXHJcbiAgICApO1xyXG4gICAgdGhpcy5vbldpZGdldEluc3RhbmNpYXRlZCh0aGlzLnJlZi5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVpLl9fZGVzdHJveSA9IHRydWU7XHJcbiAgICB0aGlzLnJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tmaXhlZC1sYWJlbF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGVsOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdmaXhlZC1sYWJlbCcpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBudW06IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XHJcbiAgICBjb25zdCB3aWRnZXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmFudC1yb3cnKSB8fCB0aGlzLmVsO1xyXG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3Mod2lkZ2V0RWwsICdzZi1maXhlZCcpO1xyXG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XHJcbiAgICBjb25zdCB1bml0ID0gdGhpcy5udW0gKyAncHgnO1xyXG4gICAgaWYgKGxhYmVsRWwpIHtcclxuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XHJcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICdmbGV4JywgYDAgMCAke3VuaXR9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXInLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZXI6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWwgPSBlci5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLmluaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bnotZm9ybS1pdGVtIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiPlxyXG4gICAgPG56LWNvbCAqbmdJZj1cInNob3dUaXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XHJcbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cclxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XHJcbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxyXG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cclxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cclxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L256LWNvbD5cclxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2xcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPG56LWZvcm0tZXh0cmEgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvbnotZm9ybS1leHRyYT5cclxuICAgICAgICA8bnotZm9ybS1leHBsYWluICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCI+e3tlcnJvcn19PC9uei1mb3JtLWV4cGxhaW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1jb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcclxuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYUl0ZW07XHJcbiAgQElucHV0KCkgc2hvd0Vycm9yOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd1RpdGxlOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJsZS5fYWRkVHBsKFxyXG4gICAgICB0aGlzLnBhdGguc3RhcnRzV2l0aCgnLycpID8gdGhpcy5wYXRoIDogYC9gICsgdGhpcy5wYXRoLFxyXG4gICAgICB0aGlzLnRlbXBsYXRlUmVmLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBIb3N0QmluZGluZyxcclxuICBPcHRpb25hbCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcclxuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZm9ybVByb3BlcnR5OiBUO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbiAgc2hvd0Vycm9yID0gZmFsc2U7XHJcbiAgaWQgPSAnJztcclxuICBzY2hlbWE6IFNGU2NoZW1hO1xyXG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcclxuICBmaXJzdFZpc3VhbCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgY2xzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc2NoZW1hLnJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnJlYWRPbmx5O1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChTRkNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmQ29tcD86IFNGQ29tcG9uZW50LFxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xyXG4gICAgICAucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKVxyXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcnM6IEVycm9yRGF0YVtdKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudWkuZGVidWcpIGRpKCdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcclxuXHJcbiAgICAgICAgLy8gw6TCuMKNw6bCmMK+w6fCpMK6w6nCpsKWw6bCrMKhw6bCoMKhw6nCqsKMw6jCp8KGw6jCp8KJXHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyBlcnJvcnNbMF0ubWVzc2FnZSA6ICcnO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy51aS5kZWJ1Zykge1xyXG4gICAgICBkaSgndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogYW55KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiB7XHJcbiAgcmVzZXQodmFsdWU6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+XHJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICByZXNldCh2YWx1ZTogYW55KSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcmVzZXQodmFsdWU6IGFueSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBTRkdyaWRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkOyBlbHNlIG5vR3JpZFwiPlxyXG4gICAgPG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cclxuICAgICAgICAgIDxuei1jb2xcclxuICAgICAgICAgICAgW256U3Bhbl09XCJpLmdyaWQuc3BhblwiIFtuek9mZnNldF09XCJpLmdyaWQub2Zmc2V0XCJcclxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcclxuICAgICAgICAgICAgW256TGddPVwiaS5ncmlkLmxnXCIgW256WGxdPVwiaS5ncmlkLnhsXCIgW256WFhsXT1cImkuZ3JpZC54eGxcIj5cclxuICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XHJcbiAgICAgICAgICA8L256LWNvbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXJvdz5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI25vR3JpZD5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxyXG4gICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctdGVtcGxhdGU+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xyXG4gIGxpc3Q6IGFueVtdID0gW107XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xyXG4gICAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXHJcbiAgICAgICAgc3BhbkxhYmVsRml4ZWQ6IHByb3BlcnR5LnVpLnNwYW5MYWJlbEZpeGVkLFxyXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bnotZm9ybS1pdGVtPlxyXG4gICAgPG56LWNvbCAqbmdJZj1cInNjaGVtYS50aXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XHJcbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxyXG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cclxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cclxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhZGRcIj5cclxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cImFkZFR5cGVcIiBbZGlzYWJsZWRdPVwiYWRkRGlzYWJsZWRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgW2lubmVySFRNTF09XCJhZGRUaXRsZVwiPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbnotY29sPlxyXG4gICAgPG56LWNvbCBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbFwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxyXG5cclxuICAgICAgICA8bnotcm93IGNsYXNzPVwic2YtYXJyYXktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzOyBsZXQgaWR4PWluZGV4XCI+XHJcbiAgICAgICAgICAgIDxuei1jb2wgKm5nSWY9XCJpLnZpc2libGUgJiYgIWkudWkuaGlkZGVuXCIgW256U3Bhbl09XCJhcnJheVNwYW5cIiBbYXR0ci5kYXRhLWluZGV4XT1cImlkeFwiIGNsYXNzPVwic2YtYXJyYXktaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxuei1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpXCI+PC9zZi1pdGVtPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyZW1vdmVUaXRsZVwiIGNsYXNzPVwicmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaWR4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWRlbGV0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L256LWNhcmQ+XHJcbiAgICAgICAgICAgIDwvbnotY29sPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uei1yb3c+XHJcblxyXG4gICAgICAgIDxuei1mb3JtLWV4dHJhICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L256LWZvcm0tZXh0cmE+XHJcbiAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWNvbD5cclxuICA8L256LWZvcm0taXRlbT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYWRkVGl0bGU6IHN0cmluZztcclxuICBhZGRUeXBlOiBzdHJpbmc7XHJcbiAgcmVtb3ZlVGl0bGU6IHN0cmluZztcclxuICBhcnJheVNwYW4gPSA4O1xyXG5cclxuICBnZXQgYWRkRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnNjaGVtYS5tYXhJdGVtcyAmJlxyXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBhbnlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy51aS5ncmlkICYmIHRoaXMudWkuZ3JpZC5hcnJheVNwYW4pXHJcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gdGhpcy51aS5ncmlkLmFycmF5U3BhbjtcclxuXHJcbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy51aS5hZGRUaXRsZSB8fCAnw6bCt8K7w6XCisKgJztcclxuICAgIHRoaXMuYWRkVHlwZSA9IHRoaXMudWkuYWRkVHlwZSB8fCAnZGFzaGVkJztcclxuICAgIHRoaXMucmVtb3ZlVGl0bGUgPVxyXG4gICAgICB0aGlzLnVpLnJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogdGhpcy51aS5yZW1vdmVUaXRsZSB8fCAnw6fCp8K7w6nCmcKkJztcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQobnVsbCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI2lwdD5cclxuICAgICAgPGlucHV0IG56LWlucHV0XHJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgIFthdHRyLnR5cGVdPVwidWkudHlwZSB8fCAndGV4dCdcIlxyXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwidWkuYXV0b2NvbXBsZXRlXCJcclxuICAgICAgICBbYXR0ci5hdXRvRm9jdXNdPVwidWkuYXV0b2ZvY3VzXCI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnYWRkb24nOyBlbHNlIGlwdFwiPlxyXG4gICAgICA8bnotaW5wdXQtZ3JvdXBcclxuICAgICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXHJcbiAgICAgICAgW256QWRkT25CZWZvcmVJY29uXT1cInVpLmFkZE9uQmVmb3JlSWNvblwiIFtuekFkZE9uQWZ0ZXJJY29uXT1cInVpLmFkZE9uQWZ0ZXJJY29uXCJcclxuICAgICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCIgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcclxuICAgICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCIgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHlwZSA9ICEhKFxyXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXIgfHxcclxuICAgICAgdGhpcy51aS5hZGRPbkJlZm9yZSB8fFxyXG4gICAgICB0aGlzLnVpLmFkZE9uQWZ0ZXJJY29uIHx8XHJcbiAgICAgIHRoaXMudWkuYWRkT25CZWZvcmVJY29uIHx8XHJcbiAgICAgIHRoaXMudWkucHJlZml4IHx8XHJcbiAgICAgIHRoaXMudWkucHJlZml4SWNvbiB8fFxyXG4gICAgICB0aGlzLnVpLnN1ZmZpeCB8fFxyXG4gICAgICB0aGlzLnVpLnN1ZmZpeEljb25cclxuICAgIClcclxuICAgICAgPyAnYWRkb24nXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1udW1iZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuICAgIDxuei1pbnB1dC1udW1iZXJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbnpNaW5dPVwibWluXCJcclxuICAgICAgW256TWF4XT1cIm1heFwiXHJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXHJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxyXG4gICAgICBbbnpQYXJzZXJdPVwicGFyc2VyXCJcclxuICAgICAgW256UHJlY2lzaW9uXT1cInVpLnByZWNpc2lvblwiXHJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCI+XHJcbiAgICA8L256LWlucHV0LW51bWJlcj5cclxuICA8L3NmLWl0ZW0td3JhcD5gLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWluOiBudW1iZXI7XHJcbiAgbWF4OiBudW1iZXI7XHJcbiAgc3RlcDogbnVtYmVyO1xyXG4gIGZvcm1hdHRlciA9IHZhbHVlID0+IHZhbHVlO1xyXG4gIHBhcnNlciA9IHZhbHVlID0+IHZhbHVlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgc2NoZW1hLCB1aSB9ID0gdGhpcztcclxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1pbmltdW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubWluID0gc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gPyBzY2hlbWEubWluaW11bSArIDEgOiBzY2hlbWEubWluaW11bTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubWF4ID0gc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gPyBzY2hlbWEubWF4aW11bSAtIDEgOiBzY2hlbWEubWF4aW11bTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RlcCA9IHNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJykge1xyXG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xyXG4gICAgICB0aGlzLm1heCA9IE1hdGgudHJ1bmModGhpcy5tYXgpO1xyXG4gICAgICB0aGlzLnN0ZXAgPSBNYXRoLnRydW5jKHRoaXMuc3RlcCk7XHJcbiAgICB9XHJcbiAgICBpZiAodWkucHJlZml4ICE9IG51bGwpIHtcclxuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gYCR7dWkucHJlZml4fSAke3ZhbHVlfWA7XHJcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XHJcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3ZhbHVlfSAke3VpLnVuaXR9YDtcclxuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgICR7dWkudW5pdH1gLCAnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodWkuZm9ybWF0dGVyKSB0aGlzLmZvcm1hdHRlciA9IHVpLmZvcm1hdHRlcjtcclxuICAgIGlmICh1aS5wYXJzZXIpIHRoaXMucGFyc2VyID0gdWkucGFyc2VyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgeyB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1kYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XHJcblxyXG4gICAgICA8bnotbW9udGgtcGlja2VyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZGlzcGxheUZvcm1hdFwiXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkaXNwbGF5VmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxyXG4gICAgICAgIFtuekNsYXNzTmFtZV09XCJ1aS5jbGFzc05hbWVcIlxyXG4gICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJ1aS5kaXNhYmxlZERhdGVcIlxyXG4gICAgICAgIFtuekxvY2FsZV09XCJ1aS5sb2NhbGVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBbbnpQb3B1cFN0eWxlXT1cInVpLnBvcHVwU3R5bGVcIlxyXG4gICAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgICAobnpPbk9wZW5DaGFuZ2UpPVwiX29wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW256UmVuZGVyRXh0cmFGb290ZXJdPVwidWkucmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICA+PC9uei1tb250aC1waWNrZXI+XHJcblxyXG4gICAgICA8bnotd2Vlay1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIid3ZWVrJ1wiXHJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcclxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcclxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcclxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9uei13ZWVrLXBpY2tlcj5cclxuXHJcbiAgICAgIDxuei1yYW5nZS1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIidyYW5nZSdcIlxyXG4gICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICAgIFtuekZvcm1hdF09XCJkaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgICAgW256Q2xhc3NOYW1lXT1cInVpLmNsYXNzTmFtZVwiXHJcbiAgICAgICAgW256RGlzYWJsZWREYXRlXT1cInVpLmRpc2FibGVkRGF0ZVwiXHJcbiAgICAgICAgW256TG9jYWxlXT1cInVpLmxvY2FsZVwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelBvcHVwU3R5bGVdPVwidWkucG9wdXBTdHlsZVwiXHJcbiAgICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwidWkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICAgIChuek9uT3BlbkNoYW5nZSk9XCJfb3BlbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwidWkuZGlzYWJsZWRUaW1lXCJcclxuICAgICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJ1aS5yZW5kZXJFeHRyYUZvb3RlclwiXHJcbiAgICAgICAgW256UmFuZ2VzXT1cInVpLnJhbmdlc1wiXHJcbiAgICAgICAgKG56T25Payk9XCJfb2soJGV2ZW50KVwiXHJcbiAgICAgID48L256LXJhbmdlLXBpY2tlcj5cclxuXHJcbiAgICAgIDxuei1kYXRlLXBpY2tlciAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW256Rm9ybWF0XT1cImRpc3BsYXlGb3JtYXRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcclxuICAgICAgICBbbnpDbGFzc05hbWVdPVwidWkuY2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwidWkuZGlzYWJsZWREYXRlXCJcclxuICAgICAgICBbbnpMb2NhbGVdPVwidWkubG9jYWxlXCJcclxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256UG9wdXBTdHlsZV09XCJ1aS5wb3B1cFN0eWxlXCJcclxuICAgICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgICAgKG56T25PcGVuQ2hhbmdlKT1cIl9vcGVuQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtuekRpc2FibGVkVGltZV09XCJ1aS5kaXNhYmxlZFRpbWVcIlxyXG4gICAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cInVpLnJlbmRlckV4dHJhRm9vdGVyXCJcclxuICAgICAgICBbbnpTaG93VGltZV09XCJ1aS5zaG93VGltZVwiXHJcbiAgICAgICAgW256U2hvd1RvZGF5XT1cImkuc2hvd1RvZGF5XCJcclxuICAgICAgICAobnpPbk9rKT1cIl9vaygkZXZlbnQpXCJcclxuICAgICAgPjwvbnotZGF0ZS1waWNrZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtb2RlOiBzdHJpbmc7XHJcbiAgZGlzcGxheVZhbHVlOiBEYXRlIHwgRGF0ZVtdID0gbnVsbDtcclxuICBkaXNwbGF5Rm9ybWF0OiBzdHJpbmc7XHJcbiAgZm9ybWF0OiBzdHJpbmc7XHJcbiAgaTogYW55O1xyXG4gIGZsYXRSYW5nZSA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcclxuICAgIHRoaXMubW9kZSA9IHVpLm1vZGUgfHwgJ2RhdGUnO1xyXG4gICAgdGhpcy5mbGF0UmFuZ2UgPSB1aS5lbmQgIT0gbnVsbDtcclxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xyXG4gICAgICB0aGlzLm1vZGUgPSAncmFuZ2UnO1xyXG4gICAgfVxyXG4gICAgaWYgKCF1aS5kaXNwbGF5Rm9ybWF0KSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gYHl5eXktTU1gO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBgeXl5eS13d2A7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwbGF5Rm9ybWF0ID0gdWkuZGlzcGxheUZvcm1hdDtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybWF0ID0gdWkuZm9ybWF0XHJcbiAgICAgID8gdWkuZm9ybWF0XHJcbiAgICAgIDogdGhpcy5zY2hlbWEudHlwZSA9PT0gJ251bWJlcidcclxuICAgICAgICA/ICd4J1xyXG4gICAgICAgIDogJ1lZWVktTU0tREQgSEg6bW06c3MnO1xyXG4gICAgLy8gw6XChcKsw6XChcKxQVBJXHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGFsbG93Q2xlYXI6IHRvQm9vbCh1aS5hbGxvd0NsZWFyLCB0cnVlKSxcclxuICAgICAgLy8gbnotZGF0ZS1waWNrZXJcclxuICAgICAgc2hvd1RvZGF5OiB0b0Jvb2wodWkuc2hvd1RvZGF5LCB0cnVlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5mbGF0UmFuZ2UpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gW10gOiBbdmFsdWUsIHRoaXMuZW5kUHJvcGVydHkuZm9ybURhdGFdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jaGFuZ2UodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgIHRoaXMuc2V0RW5kKG51bGwpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICAgPyB2YWx1ZS5tYXAoZCA9PiBmb3JtYXQoZCwgdGhpcy5mb3JtYXQpKVxyXG4gICAgICA6IGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpO1xyXG5cclxuICAgIGlmICh0aGlzLmZsYXRSYW5nZSkge1xyXG4gICAgICB0aGlzLnNldEVuZChyZXNbMV0pO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHJlc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHJlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLnVpLm9uT3BlbkNoYW5nZSkgdGhpcy51aS5vbk9wZW5DaGFuZ2Uoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIF9vayh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5vbk9rKSB0aGlzLnVpLm9uT2sodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgZW5kUHJvcGVydHkoKTogRm9ybVByb3BlcnR5IHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXJlbnQucHJvcGVydGllc1t0aGlzLnVpLmVuZF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEVuZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmVuZFByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi10aW1lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG56LXRpbWUtcGlja2VyXHJcbiAgICAgIFsobmdNb2RlbCldPVwiZGlzcGxheVZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbnpGb3JtYXRdPVwiaS5kaXNwbGF5Rm9ybWF0XCJcclxuICAgICAgW256QWxsb3dFbXB0eV09XCJpLmFsbG93RW1wdHlcIlxyXG4gICAgICBbbnpDbGVhclRleHRdPVwiaS5jbGVhclRleHRcIlxyXG4gICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cImkuZGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICAgIFtuekRpc2FibGVkSG91cnNdPVwidWkuZGlzYWJsZWRIb3Vyc1wiXHJcbiAgICAgIFtuekRpc2FibGVkTWludXRlc109XCJ1aS5kaXNhYmxlZE1pbnV0ZXNcIlxyXG4gICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwidWkuZGlzYWJsZWRTZWNvbmRzXCJcclxuICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJpLmhpZGVEaXNhYmxlZE9wdGlvbnNcIlxyXG4gICAgICBbbnpIb3VyU3RlcF09XCJpLmhvdXJTdGVwXCJcclxuICAgICAgW256TWludXRlU3RlcF09XCJpLm1pbnV0ZVN0ZXBcIlxyXG4gICAgICBbbnpTZWNvbmRTdGVwXT1cImkuc2Vjb25kU3RlcFwiXHJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInVpLnBvcHVwQ2xhc3NOYW1lXCJcclxuICAgICAgPlxyXG4gICAgPC9uei10aW1lLXBpY2tlcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkaXNwbGF5VmFsdWU6IERhdGUgPSBudWxsO1xyXG4gIGZvcm1hdDogc3RyaW5nO1xyXG4gIGk6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XHJcbiAgICB0aGlzLmZvcm1hdCA9IHVpLmZvcm1hdFxyXG4gICAgICA/IHVpLmZvcm1hdFxyXG4gICAgICA6IHRoaXMuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgPyAneCdcclxuICAgICAgICA6ICdISDptbTpzcyc7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHVpLmRpc3BsYXlGb3JtYXQgfHwgJ0hIOm1tOnNzJyxcclxuICAgICAgYWxsb3dFbXB0eTogdG9Cb29sKHVpLmFsbG93RW1wdHksIHRydWUpLFxyXG4gICAgICBjbGVhclRleHQ6IHVpLmNsZWFyVGV4dCB8fCAnw6bCuMKFw6nCmcKkJyxcclxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogdWkuZGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpLFxyXG4gICAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiB0b0Jvb2wodWkuaGlkZURpc2FibGVkT3B0aW9ucywgZmFsc2UpLFxyXG4gICAgICBob3VyU3RlcDogdWkuaG91clN0ZXAgfHwgMSxcclxuICAgICAgbWludXRlU3RlcDogdWkubnpNaW51dGVTdGVwIHx8IDEsXHJcbiAgICAgIHNlY29uZFN0ZXA6IHVpLnNlY29uZFN0ZXAgfHwgMSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB2ID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XHJcblxyXG4gICAgLy8gdHJ5aW5nIHJlc3RvcmUgZnVsbCBEYXRlIGZvcm1hdFxyXG4gICAgaWYgKHYgIT0gbnVsbCAmJiB2LnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSB7XHJcbiAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnNwbGl0KCc6JykubGVuZ3RoIDw9IDEpIHZhbHVlICs9ICc6MDAnO1xyXG4gICAgICB2ID0gbmV3IERhdGUoYDE5NzAtMS0xIGAgKyB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHY7XHJcbiAgfVxyXG5cclxuICBfY2hhbmdlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51aS51dGNFcG9jaCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKFxyXG4gICAgICAgIERhdGUuVVRDKFxyXG4gICAgICAgICAgMTk3MCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgdmFsdWUuZ2V0SG91cnMoKSxcclxuICAgICAgICAgIHZhbHVlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgIHZhbHVlLmdldFNlY29uZHMoKSxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFZhbHVlKGZvcm1hdCh2YWx1ZSwgdGhpcy5mb3JtYXQpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1yYWRpbycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1yYWRpby1ncm91cFxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuek5hbWVdPVwiaWRcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN0eWxlVHlwZVwiPlxyXG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxyXG4gICAgICAgICAgbnotcmFkaW9cclxuICAgICAgICAgIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cclxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uLmxhYmVsXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN0eWxlVHlwZVwiPlxyXG4gICAgICAgIDxsYWJlbCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGRhdGFcIlxyXG4gICAgICAgICAgbnotcmFkaW8tYnV0dG9uXHJcbiAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cIm9wdGlvbi5sYWJlbFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xyXG4gIGRhdGE6IGFueVtdID0gW107XHJcbiAgc3R5bGVUeXBlOiBib29sZWFuO1xyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN0eWxlVHlwZSA9ICh0aGlzLnVpLnN0eWxlVHlwZSB8fCAnZGVmYXVsdCcpID09PSAnZGVmYXVsdCc7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+ICh0aGlzLmRhdGEgPSBsaXN0KSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtY2hlY2tib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5nLXRlbXBsYXRlICNhbGw+XHJcbiAgICA8bGFiZWwgKm5nSWY9XCJ1aS5jaGVja0FsbFwiIG56LWNoZWNrYm94IGNsYXNzPVwibXItc21cIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cImFsbENoZWNrZWRcIlxyXG4gICAgICBbbnpJbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxyXG4gICAgICAoY2xpY2spPVwib25BbGxDaGVja2VkKCRldmVudClcIj5cclxuICAgICAge3sgdWkuY2hlY2tBbGxUZXh0IHx8ICfDpcKFwqjDqcKAwoknIH19XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG56LWZvcm0taXRlbSBbc3R5bGUud2lkdGgucHhdPVwidWkud2lkdGhcIj5cclxuICAgIDxuei1jb2wgKm5nSWY9XCJkYXRhLmxlbmd0aCA+IDBcIiBbbnpTcGFuXT1cImxhYmVsXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCI+XHJcbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cclxuICAgICAgICB7eyBzY2hlbWEudGl0bGUgfX1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XHJcbiAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxyXG4gICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cclxuICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cclxuICAgICAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L256LWNvbD5cclxuICAgIDxuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwiY29udHJvbFwiIFtuek9mZnNldF09XCJvZmZzZXRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveFxyXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3NldFZhbHVlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInNjaGVtYS50aXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9wdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxyXG4gICAgICAgICAgICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJ1aS5vcHRpb25hbEhlbHBcIiBbbnpUaXRsZV09XCJ1aS5vcHRpb25hbEhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgbnotdG9vbHRpcCBjbGFzcz1cImFudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiA9PT0gMFwiPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxuei1jaGVja2JveC1ncm91cCBbbmdNb2RlbF09XCJkYXRhXCIgKG5nTW9kZWxDaGFuZ2UpPVwibm90aWZ5U2V0KClcIj48L256LWNoZWNrYm94LWdyb3VwPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiAhPT0gMFwiPlxyXG4gICAgICAgICAgICAgIDxuei1jaGVja2JveC13cmFwcGVyIGNsYXNzPVwiY2hlY2tib3gtZ3JpZC1saXN0XCIgKG56T25DaGFuZ2UpPVwiZ3JvdXBJbkdyaWRDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPG56LXJvdz5cclxuICAgICAgICAgICAgICAgICAgPG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiICpuZ0lmPVwidWkuY2hlY2tBbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9uei1jb2w+XHJcbiAgICAgICAgICAgICAgICAgIDxuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuelZhbHVlXT1cImkudmFsdWVcIiBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIiBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCI+e3tpLmxhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L256LWNvbD5cclxuICAgICAgICAgICAgICAgIDwvbnotcm93PlxyXG4gICAgICAgICAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bnotZm9ybS1leHRyYSAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9uei1mb3JtLWV4dHJhPlxyXG4gICAgICAgICAgPG56LWZvcm0tZXhwbGFpbiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiPnt7ZXJyb3J9fTwvbnotZm9ybS1leHBsYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbnotY29sPlxyXG4gIDwvbnotZm9ybS1pdGVtPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xyXG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBncmlkX3NwYW46IG51bWJlcjtcclxuICBsYWJlbDogbnVtYmVyO1xyXG4gIGNvbnRyb2w6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudWkuc3BhbkxhYmVsO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMudWkuc3BhbkNvbnRyb2w7XHJcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmxhYmVsID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy51aS5zcGFuTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JpZF9zcGFuID0gdGhpcy51aS5zcGFuICYmIHRoaXMudWkuc3BhbiA+IDAgPyB0aGlzLnVpLnNwYW4gOiAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zZXRWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5U2V0KCkge1xyXG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XHJcbiAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKS5zZXRWYWx1ZShjaGVja0xpc3QubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xyXG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UoY2hlY2tMaXN0KTtcclxuICB9XHJcblxyXG4gIGdyb3VwSW5HcmlkQ2hhbmdlKHZhbHVlczogYW55W10pIHtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKFxyXG4gICAgICBpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB2YWx1ZXMuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpLFxyXG4gICAgKTtcclxuICAgIHRoaXMubm90aWZ5U2V0KCk7XHJcbiAgfVxyXG5cclxuICBvbkFsbENoZWNrZWQoZTogRXZlbnQpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcclxuICAgIHRoaXMubm90aWZ5U2V0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGxDaGVja2VkKCk6IHRoaXMge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gZmFsc2UpKSB7XHJcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlKSkge1xyXG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnlDaGFuZ2UocmVzOiBib29sZWFuIHwgU0ZTY2hlbWFFbnVtW10pIHtcclxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UocmVzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1ib29sZWFuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICA8bnotc3dpdGNoXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgW256Q2hlY2tlZENoaWxkcmVuXT1cInVpLmNoZWNrZWRDaGlsZHJlblwiXHJcbiAgICAgIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVpLnVuQ2hlY2tlZENoaWxkcmVuXCI+XHJcbiAgICA8L256LXN3aXRjaD5cclxuICA8L3NmLWl0ZW0td3JhcD5gLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8dGV4dGFyZWEgbnotaW5wdXRcclxuICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgIFtuekF1dG9zaXplXT1cImF1dG9zaXplXCI+XHJcbiAgICA8L3RleHRhcmVhPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5gLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhdXRvc2l6ZTogYW55ID0gdHJ1ZTtcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVpLmF1dG9zaXplICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRoaXMudWkuYXV0b3NpemU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1zZWxlY3RcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXHJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJpLmF1dG9Gb2N1c1wiXHJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cImkuZHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxyXG4gICAgICBbbnpTZXJ2ZXJTZWFyY2hdPVwiaS5zZXJ2ZXJTZWFyY2hcIlxyXG4gICAgICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cImkubWF4TXVsdGlwbGVDb3VudFwiXHJcbiAgICAgIFtuek1vZGVdPVwiaS5tb2RlXCJcclxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcclxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxyXG4gICAgICAobnpPcGVuQ2hhbmdlKT1cIm9wZW5DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuek9uU2VhcmNoKT1cInNlYXJjaENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20oJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhhc0dyb3VwXCI+XHJcbiAgICAgICAgPG56LW9wdGlvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG8gb2YgZGF0YVwiXHJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvLmxhYmVsXCJcclxuICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxyXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiby5kaXNhYmxlZFwiPlxyXG4gICAgICAgIDwvbnotb3B0aW9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0dyb3VwXCI+XHJcbiAgICAgICAgPG56LW9wdGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPlxyXG4gICAgICAgICAgPG56LW9wdGlvblxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbyBvZiBpLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgW256TGFiZWxdPVwiby5sYWJlbFwiXHJcbiAgICAgICAgICAgIFtuelZhbHVlXT1cIm8udmFsdWVcIlxyXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJvLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICA8L256LW9wdGlvbj5cclxuICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXNlbGVjdD5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGk6IGFueTtcclxuICBkYXRhOiBTRlNjaGVtYUVudW1bXTtcclxuICBoYXNHcm91cCA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaSA9IHtcclxuICAgICAgYWxsb3dDbGVhcjogdGhpcy51aS5hbGxvd0NsZWFyLFxyXG4gICAgICBhdXRvRm9jdXM6IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpLFxyXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZTogdGhpcy51aS5kcm9wZG93bkNsYXNzTmFtZSB8fCBudWxsLFxyXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh0aGlzLnVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXHJcbiAgICAgIHNlcnZlclNlYXJjaDogdG9Cb29sKHRoaXMudWkuc2VydmVyU2VhcmNoLCBmYWxzZSksXHJcbiAgICAgIG1heE11bHRpcGxlQ291bnQ6IHRoaXMudWkubWF4TXVsdGlwbGVDb3VudCB8fCBJbmZpbml0eSxcclxuICAgICAgbW9kZTogdGhpcy51aS5tb2RlIHx8ICdkZWZhdWx0JyxcclxuICAgICAgbm90Rm91bmRDb250ZW50OiB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6bCs8KVw6bCicK+w6XCiMKwJyxcclxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHRoaXMudWkuc2hvd1NlYXJjaCwgdHJ1ZSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgbGlzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbGlzdDtcclxuICAgICAgICB0aGlzLmhhc0dyb3VwID0gbGlzdC5maWx0ZXIodyA9PiB3Lmdyb3VwID09PSB0cnVlKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZSh2YWx1ZXM6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZXMpO1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkNoYW5nZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB0aGlzLnVpLm9wZW5DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoQ2hhbmdlKHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMudWkub25TZWFyY2gpIHtcclxuICAgICAgdGhpcy51aS5vblNlYXJjaCh0ZXh0KS50aGVuKChyZXM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5zY3JvbGxUb0JvdHRvbSkgdGhpcy51aS5zY3JvbGxUb0JvdHRvbSh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyB0b0Jvb2wsIGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgICA8bnotdHJlZS1zZWxlY3RcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwiaS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGVcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW256Q2hlY2thYmxlXT1cImkuY2hlY2thYmxlXCJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwiaS5zaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dMaW5lXT1cImkuc2hvd0xpbmVcIlxuICAgICAgW256QXN5bmNEYXRhXT1cImkuYXN5bmNEYXRhXCJcbiAgICAgIFtuek5vZGVzXT1cImRhdGFcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZEFsbF09XCJpLmRlZmF1bHRFeHBhbmRBbGxcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZGVkS2V5c109XCJ1aS5kZWZhdWx0RXhwYW5kZWRLZXlzXCJcbiAgICAgIFtuekRpc3BsYXlXaXRoXT1cImkuZGlzcGxheVdpdGhcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV4cGFuZENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmVlLXNlbGVjdD5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgZGMoKSB7XG4gICAgLy8gTXVzZSB3YWl0IGBuei10cmVlLXNlbGVjdGAgd3JpdGUgdmFsdWVzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuRGF0YShsaXN0OiBTRlNjaGVtYUVudW1bXSkge1xuICAgIHJldHVybiBsaXN0Lm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKGRlZXBDb3B5KG5vZGUpIGFzIGFueSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB1aS5hbGxvd0NsZWFyLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHVpLnNob3dTZWFyY2gsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHVpLm11bHRpcGxlLCBmYWxzZSksXG4gICAgICBjaGVja2FibGU6IHRvQm9vbCh1aS5jaGVja2FibGUsIGZhbHNlKSxcbiAgICAgIHNob3dFeHBhbmQ6IHRvQm9vbCh1aS5zaG93RXhwYW5kLCB0cnVlKSxcbiAgICAgIHNob3dMaW5lOiB0b0Jvb2wodWkuc2hvd0xpbmUsIGZhbHNlKSxcbiAgICAgIGFzeW5jRGF0YTogdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgIGRlZmF1bHRFeHBhbmRBbGw6IHRvQm9vbCh1aS5kZWZhdWx0RXhwYW5kQWxsLCBmYWxzZSksXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKVxuICAgICAgLnBpcGUobWFwKGxpc3QgPT4gdGhpcy50cmFuRGF0YShsaXN0KSkpXG4gICAgICAuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRjKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpXG4gICAgICAucGlwZShtYXAoKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgZS5ub2RlLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRhZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei10YWdcclxuICAgICAgKm5nRm9yPVwibGV0IGkgb2YgZGF0YVwiXHJcbiAgICAgIG56TW9kZT1cImNoZWNrYWJsZVwiXHJcbiAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcclxuICAgICAgKG56QWZ0ZXJDbG9zZSk9XCJfYWZ0ZXJDbG9zZSgpXCJcclxuICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXHJcbiAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwib25DaGFuZ2UoaSlcIj5cclxuICAgICAge3tpLmxhYmVsfX1cclxuICAgIDwvbnotdGFnPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7XHJcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XHJcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xyXG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICBfYWZ0ZXJDbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2xvc2UpIHRoaXMudWkuYWZ0ZXJDbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlKGU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxyXG4gICAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKSxcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgVXBsb2FkRmlsZSwgVXBsb2FkQ2hhbmdlUGFyYW0sIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei11cGxvYWRcclxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxyXG4gICAgICBbbnpGaWxlTGlzdF09XCJmaWxlTGlzdFwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256QWN0aW9uXT1cImkuYWN0aW9uXCJcclxuICAgICAgW256QWNjZXB0XT1cImkuYWNjZXB0XCJcclxuICAgICAgW256TGltaXRdPVwiaS5saW1pdFwiXHJcbiAgICAgIFtuelNpemVdPVwiaS5zaXplXCJcclxuICAgICAgW256RmlsZVR5cGVdPVwiaS5maWxlVHlwZVwiXHJcbiAgICAgIFtuekhlYWRlcnNdPVwidWkuaGVhZGVyc1wiXHJcbiAgICAgIFtuekRhdGFdPVwidWkuZGF0YVwiXHJcbiAgICAgIFtuekxpc3RUeXBlXT1cImkubGlzdFR5cGVcIlxyXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcclxuICAgICAgW256TmFtZV09XCJpLm5hbWVcIlxyXG4gICAgICBbbnpTaG93VXBsb2FkTGlzdF09XCJpLnNob3dVcGxvYWRMaXN0XCJcclxuICAgICAgW256V2l0aENyZWRlbnRpYWxzXT1cImkud2l0aENyZWRlbnRpYWxzXCJcclxuICAgICAgW256UmVtb3ZlXT1cInVpLnJlbW92ZVwiXHJcbiAgICAgIFtuelByZXZpZXddPVwiaGFuZGxlUHJldmlld1wiXHJcbiAgICAgIChuekNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJidG5UeXBlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3BsdXMnXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RyYWcnXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24taW5ib3hcIj48L2k+PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCIgW2lubmVySFRNTF09XCJpLmhpbnRcIj48L3A+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImFudGljb24gYW50aWNvbi11cGxvYWRcIj48L2k+PHNwYW4gW2lubmVySFRNTF09XCJpLnRleHRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXVwbG9hZD5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwbG9hZFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGk6IGFueTtcclxuICBmaWxlTGlzdDogVXBsb2FkRmlsZVtdID0gW107XHJcbiAgYnRuVHlwZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihjZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaSA9IHtcclxuICAgICAgdHlwZTogdGhpcy51aS50eXBlIHx8ICdzZWxlY3QnLFxyXG4gICAgICB0ZXh0OiB0aGlzLnVpLnRleHQgfHwgJ8OnwoLCucOlwofCu8OkwrjCisOkwrzCoCcsXHJcbiAgICAgIGFjdGlvbjogdGhpcy51aS5hY3Rpb24gfHwgJycsXHJcbiAgICAgIGFjY2VwdDogdGhpcy51aS5hY2NlcHQgfHwgJycsXHJcbiAgICAgIGxpbWl0OiB0aGlzLnVpLmxpbWl0ID09IG51bGwgPyAwIDogK3RoaXMudWkubGltaXQsXHJcbiAgICAgIHNpemU6IHRoaXMudWkuc2l6ZSA9PSBudWxsID8gMCA6ICt0aGlzLnVpLnNpemUsXHJcbiAgICAgIGZpbGVUeXBlOiB0aGlzLnVpLmZpbGVUeXBlIHx8ICcnLFxyXG4gICAgICBsaXN0VHlwZTogdGhpcy51aS5saXN0VHlwZSB8fCAndGV4dCcsXHJcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodGhpcy51aS5tdWx0aXBsZSwgZmFsc2UpLFxyXG4gICAgICBuYW1lOiB0aGlzLnVpLm5hbWUgfHwgJ2ZpbGUnLFxyXG4gICAgICBzaG93VXBsb2FkTGlzdDogdG9Cb29sKHRoaXMudWkuc2hvd1VwbG9hZExpc3QsIHRydWUpLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRvQm9vbCh0aGlzLnVpLndpdGhDcmVkZW50aWFscywgZmFsc2UpLFxyXG4gICAgICByZXNSZU5hbWU6ICh0aGlzLnVpLnJlc1JlTmFtZSB8fCAnJykuc3BsaXQoJy4nKSxcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5pLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykgdGhpcy5idG5UeXBlID0gJ3BsdXMnO1xyXG4gICAgaWYgKHRoaXMuaS50eXBlID09PSAnZHJhZycpIHtcclxuICAgICAgdGhpcy5pLmxpc3RUeXBlID0gbnVsbDtcclxuICAgICAgdGhpcy5idG5UeXBlID0gJ2RyYWcnO1xyXG4gICAgICB0aGlzLmkudGV4dCA9IHRoaXMudWkudGV4dCB8fCBgw6XCjcKVw6XCh8K7w6bCiMKWw6bCi8KWw6XCisKow6bClsKHw6TCu8K2w6XCiMKww6jCr8Klw6XCjMK6w6XCn8Kfw6TCuMKKw6TCvMKgYDtcclxuICAgICAgdGhpcy5pLmhpbnQgPVxyXG4gICAgICAgIHRoaXMudWkuaGludCB8fCBgw6bClMKvw6bCjMKBw6XCjcKVw6TCuMKqw6bCiMKWw6bCicK5w6nCh8KPw6/CvMKMw6TCuMKlw6fCpsKBw6TCuMKKw6TCvMKgw6XChcKsw6XCj8K4w6bClcKww6bCjcKuw6bCiMKWw6XChcK2w6TCu8KWw6XCrsKJw6XChcKow6bClsKHw6TCu8K2YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZShhcmdzOiBVcGxvYWRDaGFuZ2VQYXJhbSkge1xyXG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShhcmdzKTtcclxuICAgIGlmIChhcmdzLnR5cGUgIT09ICdzdWNjZXNzJykgcmV0dXJuO1xyXG4gICAgdGhpcy5ub3RpZnkoYXJncy5maWxlTGlzdCk7XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICB0aGlzLmZpbGVMaXN0ID0gbGlzdCBhcyBVcGxvYWRGaWxlW107XHJcbiAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5maWxlTGlzdCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnkoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkge1xyXG4gICAgY29uc3QgcmVzID0gZmlsZUxpc3QubWFwKGl0ZW0gPT5cclxuICAgICAgZGVlcEdldChpdGVtLnJlc3BvbnNlLCB0aGlzLmkucmVzUmVOYW1lLCBpdGVtLnJlc3BvbnNlKSxcclxuICAgICk7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcclxuICAgICAgdGhpcy5pLm11bHRpcGxlID09PSB0cnVlID8gcmVzIDogcmVzLnBvcCgpLFxyXG4gICAgICBmYWxzZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGU6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgIHRoaXMubW9kYWxTcnZcclxuICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgbnpDb250ZW50OiBgPGltZyBzcmM9XCIke2ZpbGUudXJsIHx8XHJcbiAgICAgICAgICBmaWxlLnRodW1iVXJsfVwiIGNsYXNzPVwiaW1nLWZsdWlkXCIgLz5gLFxyXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxyXG4gICAgICB9KVxyXG4gICAgICAuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG56LXRyYW5zZmVyXHJcbiAgICAgIFtuekRhdGFTb3VyY2VdPVwibGlzdFwiXHJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXHJcbiAgICAgIFtuek9wZXJhdGlvbnNdPVwiaS5vcGVyYXRpb25zXCJcclxuICAgICAgW256TGlzdFN0eWxlXT1cInVpLmxpc3RTdHlsZVwiXHJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxyXG4gICAgICBbbnpJdGVtc1VuaXRdPVwiaS5pdGVtc1VuaXRcIlxyXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxyXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcclxuICAgICAgW256U2VhcmNoUGxhY2Vob2xkZXJdPVwidWkuc2VhcmNoUGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwidWkubm90Rm91bmRDb250ZW50XCJcclxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXHJcbiAgICAgIChuekNoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobnpTZWFyY2hDaGFuZ2UpPVwiX3NlYXJjaENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9uei10cmFuc2Zlcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbGlzdDogYW55W10gPSBbXTtcclxuICBpOiBhbnk7XHJcbiAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIHRpdGxlczogdGhpcy51aS50aXRsZXMgfHwgWycnLCAnJ10sXHJcbiAgICAgIG9wZXJhdGlvbnM6IHRoaXMudWkub3BlcmF0aW9ucyB8fCBbJycsICcnXSxcclxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ8OpwqHCuScsXHJcbiAgICAgIGl0ZW1zVW5pdDogdGhpcy51aS5pdGVtc1VuaXQgfHwgJ8OpwqHCuScsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xyXG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xyXG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5vdGlmeSgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIF9jYW5Nb3ZlID0gKGFyZzogYW55KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xyXG4gIH07XHJcblxyXG4gIF9jaGFuZ2Uob3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoLi4ub3B0aW9ucy5saXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IG9wdGlvbnMubGlzdC5pbmRleE9mKHcpID09PSAtMSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5ub3RpZnkoKTtcclxuICB9XHJcblxyXG4gIF9zZWFyY2hDaGFuZ2Uob3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5zZWFyY2hDaGFuZ2UpIHRoaXMudWkuc2VhcmNoQ2hhbmdlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbGVjdENoYW5nZShvcHRpb25zOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnVpLnNlbGVjdENoYW5nZSkgdGhpcy51aS5zZWxlY3RDaGFuZ2Uob3B0aW9ucyk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1zbGlkZXJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpSYW5nZV09XCJ1aS5yYW5nZVwiXHJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxyXG4gICAgICBbbnpNYXhdPVwibWF4XCJcclxuICAgICAgW256U3RlcF09XCJzdGVwXCJcclxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxyXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxyXG4gICAgICBbbnpJbmNsdWRlZF09XCJpbmNsdWRlZFwiXHJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcclxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxyXG4gICAgICAobnpPbkFmdGVyQ2hhbmdlKT1cIl9hZnRlckNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8L256LXNsaWRlcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIG1heDogbnVtYmVyO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBtYXJrczogYW55O1xyXG4gIGluY2x1ZGVkOiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWluID0gdGhpcy5zY2hlbWEubWluaW11bSB8fCAwO1xyXG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcclxuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcclxuXHJcbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xyXG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xyXG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XHJcbiAgfVxyXG5cclxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5hZnRlckNoYW5nZSkgdGhpcy51aS5hZnRlckNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtY3VzdG9tJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIiRhbnkodWkpLl9yZW5kZXJcIlxyXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogdGhpcywgc2NoZW1hOiBzY2hlbWEsIHVpOiB1aSB9XCI+PC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtcmF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG5cclxuICAgIDxuei1yYXRlXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcclxuICAgICAgW256QWxsb3dIYWxmXT1cImFsbG93SGFsZlwiXHJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxyXG4gICAgICBbbnpDb3VudF09XCJjb3VudFwiPjwvbnotcmF0ZT5cclxuICAgIDxzcGFuICpuZ0lmPVwiaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWVcIiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyBnZW5UZXh0KCkgfX08L3NwYW4+XHJcblxyXG4gIDwvc2YtaXRlbS13cmFwPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBhbGxvd0hhbGY6IGJvb2xlYW47XHJcbiAgYWxsb3dDbGVhcjogYm9vbGVhbjtcclxuICBhdXRvRm9jdXM6IGJvb2xlYW47XHJcbiAgaGFzVGV4dCA9IGZhbHNlO1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb3VudCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgNTtcclxuICAgIHRoaXMuYWxsb3dIYWxmID0gKHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMC41KSA9PT0gMC41O1xyXG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sKHRoaXMudWkuYWxsb3dDbGVhciwgdHJ1ZSk7XHJcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbCh0aGlzLnVpLmF1dG9Gb2N1cywgZmFsc2UpO1xyXG4gICAgdGhpcy5oYXNUZXh0ID0gISF0aGlzLnVpLnRleHQ7XHJcbiAgfVxyXG5cclxuICBnZW5UZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzVGV4dFxyXG4gICAgICA/ICh0aGlzLnVpLnRleHQgYXMgc3RyaW5nKS5yZXBsYWNlKCd7e3ZhbHVlfX0nLCB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZSlcclxuICAgICAgOiAnJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGZsYXRNYXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgRU1BSUxTVUZGSVggPSBbXHJcbiAgJ3FxLmNvbScsXHJcbiAgJzE2My5jb20nLFxyXG4gICdnbWFpbC5jb20nLFxyXG4gICcxMjYuY29tJyxcclxuICAnYWxpeXVuLmNvbScsXHJcbl07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgPG56LWF1dG9jb21wbGV0ZSAjYXV0b1xyXG4gICAgICAgIFtuekJhY2tmaWxsXT1cImkuYmFja2ZpbGxcIlxyXG4gICAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXHJcbiAgICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXHJcbiAgICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQ/Lm56VmFsdWUpXCI+XHJcbiAgICAgICAgPG56LWF1dG8tb3B0aW9uICpuZ0Zvcj1cImxldCBpIG9mIGxpc3QgfCBhc3luY1wiIFtuelZhbHVlXT1cImkubGFiZWxcIj57e2kubGFiZWx9fTwvbnotYXV0by1vcHRpb24+XHJcbiAgICAgIDwvbnotYXV0b2NvbXBsZXRlPlxyXG4gICAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaTogYW55O1xyXG4gIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgbGlzdDogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XHJcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcclxuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2wodGhpcy51aS5iYWNrZmlsbCwgZmFsc2UpLFxyXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnVpLndpZHRoIHx8IHVuZGVmaW5lZCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5maWx0ZXJPcHRpb24gPSB0aGlzLnVpLmZpbHRlck9wdGlvbiA9PSBudWxsID8gdHJ1ZSA6IHRoaXMudWkuZmlsdGVyT3B0aW9uO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbiA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxyXG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBc3luYyA9ICEhdGhpcy51aS5hc3luY0RhdGE7XHJcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcclxuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcclxuICAgIHRoaXMubGlzdCA9IHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUodGltZSksXHJcbiAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgIGZsYXRNYXAoXHJcbiAgICAgICAgaW5wdXQgPT5cclxuICAgICAgICAgIHRoaXMuaXNBc3luYyA/IHRoaXMudWkuYXN5bmNEYXRhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCksXHJcbiAgICAgICksXHJcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaXNBc3luYykgcmV0dXJuO1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKEVNQUlMU1VGRklYLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtLFxyXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXHJcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gb2YoXHJcbiAgICAgICAgICB0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG9mKFxyXG4gICAgICAhdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKVxyXG4gICAgICAgID8gW11cclxuICAgICAgICA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XHJcblxyXG4gICAgPG56LWNhc2NhZGVyXHJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxyXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxyXG4gICAgICBbbnpBdXRvRm9jdXNdPVwidWkuYXV0b0ZvY3VzXCJcclxuICAgICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxyXG4gICAgICBbbnpDaGFuZ2VPblNlbGVjdF09XCJ1aS5jaGFuZ2VPblNlbGVjdFwiXHJcbiAgICAgIFtuekNvbHVtbkNsYXNzTmFtZV09XCJ1aS5jb2x1bW5DbGFzc05hbWVcIlxyXG4gICAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxyXG4gICAgICBbbnpNZW51Q2xhc3NOYW1lXT1cInVpLm1lbnVDbGFzc05hbWVcIlxyXG4gICAgICBbbnpNZW51U3R5bGVdPVwidWkubWVudVN0eWxlXCJcclxuICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5XCJcclxuICAgICAgW256VmFsdWVQcm9wZXJ0eV09XCJ1aS52YWx1ZVByb3BlcnR5XCJcclxuICAgICAgW256TG9hZERhdGFdPVwibG9hZERhdGFcIlxyXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxyXG4gICAgICBbbnpTaG93SW5wdXRdPVwic2hvd0lucHV0XCJcclxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcclxuICAgICAgKG56Q2xlYXIpPVwiX2NsZWFyKCRldmVudClcIlxyXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIl92aXNpYmxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobnpTZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgPC9uei1jYXNjYWRlcj5cclxuXHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhc2NhZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgc2hvd0Fycm93OiBib29sZWFuO1xyXG4gIHNob3dJbnB1dDogYm9vbGVhbjtcclxuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcclxuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xyXG4gIGxvYWREYXRhOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclRleHQgPSB0aGlzLnVpLmNsZWFyVGV4dCB8fCAnw6bCuMKFw6nCmcKkJztcclxuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHRoaXMudWkuc2hvd0Fycm93LCB0cnVlKTtcclxuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcclxuICAgIHRoaXMudHJpZ2dlckFjdGlvbiA9IHRoaXMudWkudHJpZ2dlckFjdGlvbiB8fCBbJ2NsaWNrJ107XHJcbiAgICBpZiAoISF0aGlzLnVpLmFzeW5jRGF0YSkge1xyXG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAodGhpcy51aS5hc3luY0RhdGEgYXMgYW55KShub2RlLCBpbmRleCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCh2YWx1ZTogYW55KSB7XHJcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICBsaXN0ID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgdGhpcy51aS52aXNpYmxlQ2hhbmdlICYmIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMudWkuY2hhbmdlICYmIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZSAmJiB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnVpLnNlbGVjdCAmJiB0aGlzLnVpLnNlbGVjdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9jbGVhcihvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMudWkuY2xlYXIgJiYgdGhpcy51aS5jbGVhcihvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0RW51bSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICAgIDxuei1tZW50aW9uICNtZW50aW9uc1xyXG4gICAgICAgIFtuelN1Z2dlc3Rpb25zXT1cImRhdGFcIlxyXG4gICAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXHJcbiAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwiaS5ub3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXHJcbiAgICAgICAgW256UHJlZml4XT1cImkucHJlZml4XCJcclxuICAgICAgICAobnpPblNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxyXG4gICAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgPGlucHV0IG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcclxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIG56TWVudGlvblRyaWdnZXIgbnotaW5wdXRcclxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXHJcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgIFtuekF1dG9zaXplXT1cInVpLmF1dG9zaXplXCI+XHJcbiAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uei1tZW50aW9uPlxyXG5cclxuICAgIDwvc2YtaXRlbS13cmFwPlxyXG4gICAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnRpb25XaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdtZW50aW9ucycpIG1lbnRpb25DaGlsZDogTnpNZW50aW9uQ29tcG9uZW50O1xyXG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgaTogYW55O1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkgPSB7XHJcbiAgICAgIHZhbHVlV2l0aDogdGhpcy51aS52YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXHJcbiAgICAgIG5vdEZvdW5kQ29udGVudDpcclxuICAgICAgICB0aGlzLnVpLm5vdEZvdW5kQ29udGVudCB8fCAnw6bCl8Kgw6XCjMK5w6nChcKNw6fCu8KTw6bCnsKcw6/CvMKMw6jCvcK7w6bClcKyw6fCqcK6w6bCoMK8w6XCrsKMw6bCiMKQw6jCvsKTw6XChcKlJyxcclxuICAgICAgcGxhY2VtZW50OiB0aGlzLnVpLnBsYWNlbWVudCB8fCAnYm90dG9tJyxcclxuICAgICAgcHJlZml4OiB0aGlzLnVpLnByZWZpeCB8fCAnQCcsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWluID1cclxuICAgICAgICB0eXBlb2YgdGhpcy5zY2hlbWEubWluaW11bSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjaGVtYS5taW5pbXVtIDogLTEsXHJcbiAgICAgIG1heCA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuc2NoZW1hLm1heGltdW0gIT09ICd1bmRlZmluZWQnID8gdGhpcy5zY2hlbWEubWF4aW11bSA6IC0xO1xyXG4gICAgaWYgKCF0aGlzLnVpLnZhbGlkYXRvciAmJiAobWluICE9PSAtMSB8fCBtYXggIT09IC0xKSkge1xyXG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9IChcclxuICAgICAgICB2YWx1ZTogYW55LFxyXG4gICAgICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxyXG4gICAgICAgIGZvcm06IFByb3BlcnR5R3JvdXAsXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG1pbiAhPT0gLTEgJiYgY291bnQgPCBtaW4pIHtcclxuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDDpsKcwoDDpcKwwpHDpsKPwpDDpcKPwoogJHttaW59IMOmwqzCoWAgfV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIGNvdW50ID4gbWF4KSB7XHJcbiAgICAgICAgICByZXR1cm4gW3sga2V5d29yZDogJ21lbnRpb24nLCBtZXNzYWdlOiBgw6bCnMKAw6XCpMKaw6bCj8KQw6XCj8KKICR7bWF4fSDDpsKswqFgIH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlYXJjaChvcHRpb246IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICh0aGlzLnVpLmxvYWREYXRhKG9wdGlvbikgYXMgT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+KVxyXG4gICAgICAucGlwZSh0YXAoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSksIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5KSkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtdGV4dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxyXG4gICAge3sgdmFsdWUgfHwgdWkuZGVmYXVsdFRleHQgfHwgJy0nIH19XHJcbiAgPC9zZi1pdGVtLXdyYXA+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudWkuX3JlcXVpcmVkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi4vd2lkZ2V0LmZhY3RvcnknO1xuXG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vdGltZS90aW1lLndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZVdpZGdldCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRXaWRnZXQgfSBmcm9tICcuL3RleHQvdGV4dC53aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgTnpXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVnaXN0ZXIoJ29iamVjdCcsIE9iamVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXJyYXknLCBBcnJheVdpZGdldCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0JywgVGV4dFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc3RyaW5nJywgU3RyaW5nV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdudW1iZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2ludGVnZXInLCBOdW1iZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2RhdGUnLCBEYXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0aW1lJywgVGltZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFkaW8nLCBSYWRpb1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2hlY2tib3gnLCBDaGVja2JveFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYm9vbGVhbicsIEJvb2xlYW5XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHRhcmVhJywgVGV4dGFyZWFXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NlbGVjdCcsIFNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJlZS1zZWxlY3QnLCBUcmVlU2VsZWN0V2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0YWcnLCBUYWdXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3VwbG9hZCcsIFVwbG9hZFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndHJhbnNmZXInLCBUcmFuc2ZlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3Rlcignc2xpZGVyJywgU2xpZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdyYXRlJywgUmF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXV0b2NvbXBsZXRlJywgQXV0b0NvbXBsZXRlV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdjYXNjYWRlcicsIENhc2NhZGVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdtZW50aW9uJywgTWVudGlvbldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY3VzdG9tJywgQ3VzdG9tV2lkZ2V0KTtcblxuICAgIHRoaXMuc2V0RGVmYXVsdChTdHJpbmdXaWRnZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTRlRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTRkZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9zZi1maXhlZC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBTRkNvbXBvbmVudCxcclxuICBTRkl0ZW1Db21wb25lbnQsXHJcbiAgU0ZJdGVtV3JhcENvbXBvbmVudCxcclxuICBTRlRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gIFNGRml4ZWREaXJlY3RpdmUsXHJcbl07XHJcblxyXG4vLyByZWdpb246IHdpZGdldHNcclxuXHJcbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XHJcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0JztcclxuaW1wb3J0IHsgQXJyYXlXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0JztcclxuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcclxuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0JztcclxuaW1wb3J0IHsgRGF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0JztcclxuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcclxuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcclxuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcclxuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcclxuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcclxuaW1wb3J0IHsgU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcclxuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xyXG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGFnL3RhZy53aWRnZXQnO1xyXG5pbXBvcnQgeyBVcGxvYWRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xyXG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQnO1xyXG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xyXG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xyXG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xyXG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xyXG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xyXG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQnO1xyXG5cclxuY29uc3QgV0lER0VUUyA9IFtcclxuICBPYmplY3RXaWRnZXQsXHJcbiAgQXJyYXlXaWRnZXQsXHJcbiAgU3RyaW5nV2lkZ2V0LFxyXG4gIE51bWJlcldpZGdldCxcclxuICBEYXRlV2lkZ2V0LFxyXG4gIFRpbWVXaWRnZXQsXHJcbiAgUmFkaW9XaWRnZXQsXHJcbiAgQ2hlY2tib3hXaWRnZXQsXHJcbiAgQm9vbGVhbldpZGdldCxcclxuICBUZXh0YXJlYVdpZGdldCxcclxuICBTZWxlY3RXaWRnZXQsXHJcbiAgVHJlZVNlbGVjdFdpZGdldCxcclxuICBUYWdXaWRnZXQsXHJcbiAgVXBsb2FkV2lkZ2V0LFxyXG4gIFRyYW5zZmVyV2lkZ2V0LFxyXG4gIFNsaWRlcldpZGdldCxcclxuICBSYXRlV2lkZ2V0LFxyXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcclxuICBDYXNjYWRlcldpZGdldCxcclxuICBNZW50aW9uV2lkZ2V0LFxyXG4gIEN1c3RvbVdpZGdldCxcclxuICBUZXh0V2lkZ2V0LFxyXG5dO1xyXG5cclxuLy8gZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uV0lER0VUU10sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uV0lER0VUU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkZvcm1Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERlbG9uRm9ybUNvbmZpZyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LCB1c2VDbGFzczogTnpXaWRnZXRSZWdpc3RyeSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxNQUFhLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQVUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLGFBQWE7SUFDckMsZUFBZSxFQUFTLFlBQVk7SUFDcEMsb0JBQW9CLEVBQUksV0FBVztJQUNuQyxLQUFLLEVBQW1CLHFCQUFxQjtJQUM3QyxZQUFZLEVBQVksNkJBQTZCO0lBQ3JELElBQUksRUFBb0IsY0FBYztJQUN0QyxNQUFNLEVBQWtCLE9BQU87O0lBQy9CLElBQUksRUFBb0IsY0FBYztJQUN0QyxRQUFRLEVBQWdCLEtBQUs7SUFDN0IsU0FBUyxFQUFlLGdCQUFnQjtJQUN4QyxTQUFTLEVBQWUsa0JBQWtCO0lBQzFDLE9BQU8sRUFBaUIsd0JBQXdCO0lBQ2hELGFBQWEsRUFBVyx3QkFBd0I7SUFDaEQsT0FBTyxFQUFpQix3QkFBd0I7SUFDaEQsYUFBYSxFQUFXLHdCQUF3QjtJQUNoRCxRQUFRLEVBQWdCLGlCQUFpQjtJQUN6QyxRQUFRLEVBQWdCLGlCQUFpQjtJQUN6QyxhQUFhLEVBQVcsa0JBQWtCO0lBQzFDLGFBQWEsRUFBVyxrQkFBa0I7SUFDMUMsVUFBVSxFQUFjLHVCQUF1QjtJQUMvQyxHQUFHLEVBQXFCLG9CQUFvQjtJQUM1QyxLQUFLLEVBQW1CLDBCQUEwQjtJQUNsRCxPQUFPLEVBQWlCLFNBQVM7SUFDakMsV0FBVyxFQUFhLGdDQUFnQztJQUN4RCxNQUFNLEVBQWtCLE9BQU87SUFDL0IsYUFBYSxFQUFXLHlCQUF5QjtJQUNqRCxlQUFlLEVBQVMsNEJBQTRCO0lBQ3BELE1BQU0sRUFBa0Is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