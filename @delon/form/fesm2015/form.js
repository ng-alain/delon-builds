import { __rest, __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { Injectable, Inject, NgZone, ComponentFactoryResolver, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Optional, Input, Output, ViewChild, ViewContainerRef, Directive, ElementRef, Renderer2, TemplateRef, Injector, HostBinding, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { DelonLocaleService, ALAIN_I18N_TOKEN, DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { toBoolean, InputBoolean, InputNumber } from '@delon/util/decorator';
import { deepCopy, deepGet } from '@delon/util/other';
import { of, BehaviorSubject, Observable, combineLatest, Subject, merge } from 'rxjs';
import { map, distinctUntilChanged, takeUntil, filter, debounceTime, startWith, mergeMap, tap, switchMap, catchError } from 'rxjs/operators';
import { REGEX } from '@delon/util/format';
import Ajv from 'ajv';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { CommonModule } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzModalService, NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { toDate } from '@delon/util/date-time';
import format from 'date-fns/format';

const SF_DEFAULT_CONFIG = {
    formatMap: {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`,
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
    ui: {},
    button: { submit_type: 'primary', reset_type: 'default' },
    uiDateStringFormat: 'yyyy-MM-dd HH:mm:ss',
    uiDateNumberFormat: 'T',
    uiTimeStringFormat: 'HH:mm:ss',
    uiTimeNumberFormat: 'T',
    uiEmailSuffixes: ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'],
};
function mergeConfig(srv) {
    return srv.merge('sf', SF_DEFAULT_CONFIG);
}

const SF_SEQ = '/';

function isBlank(o) {
    return o == null;
}
function toBool(value, defaultValue) {
    value = toBoolean(value, true);
    return value == null ? defaultValue : value;
}
function di(ui, ...args) {
    if (ui.debug) {
        // tslint:disable-next-line:no-console
        console.warn(...args);
    }
}
/** 根据 `$ref` 查找 `definitions` */
function findSchemaDefinition($ref, definitions) {
    const match = /^#\/definitions\/(.*)$/.exec($ref);
    if (match && match[1]) {
        // parser JSON Pointer
        const parts = match[1].split(SF_SEQ);
        let current = definitions;
        for (let part of parts) {
            part = part.replace(/~1/g, SF_SEQ).replace(/~0/g, '~');
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
 */
function retrieveSchema(schema, definitions = {}) {
    if (schema.hasOwnProperty('$ref')) {
        const $refSchema = findSchemaDefinition(schema.$ref, definitions);
        // remove $ref property
        const { $ref } = schema, localSchema = __rest(schema, ["$ref"]);
        return retrieveSchema(Object.assign(Object.assign({}, $refSchema), localSchema), definitions);
    }
    return schema;
}
function resolveIfSchema(_schema, _ui) {
    const fn = (schema, ui) => {
        resolveIf(schema, ui);
        Object.keys(schema.properties).forEach(key => {
            const property = schema.properties[key];
            const uiKey = `$${key}`;
            if (property.items) {
                fn(property.items, ui[uiKey].$items);
            }
            if (property.properties) {
                fn(property, ui[uiKey]);
            }
        });
    };
    fn(_schema, _ui);
}
function resolveIf(schema, ui) {
    if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then')))
        return null;
    if (!schema.if.properties)
        throw new Error(`if: does not contain 'properties'`);
    const allKeys = Object.keys(schema.properties);
    const ifKeys = Object.keys(schema.if.properties);
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, schema.then.required);
    schema.required = schema.required.concat(schema.then.required);
    const hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, schema.else.required);
        schema.required = schema.required.concat(schema.else.required);
    }
    const visibleIf = {};
    const visibleElse = {};
    ifKeys.forEach(key => {
        const cond = schema.if.properties[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = (value) => !cond.includes(value);
    });
    schema.then.required.forEach(key => (ui[`$${key}`].visibleIf = visibleIf));
    if (hasElse) {
        schema.else.required.forEach(key => (ui[`$${key}`].visibleIf = visibleElse));
    }
    return schema;
}
function detectKey(keys, detectKeys) {
    detectKeys.forEach(key => {
        if (!keys.includes(key)) {
            throw new Error(`if: properties does not contain '${key}'`);
        }
    });
}
function orderProperties(properties, order) {
    if (!Array.isArray(order))
        return properties;
    const arrayToHash = (arr) => arr.reduce((prev, curr) => {
        prev[curr] = true;
        return prev;
    }, {});
    const errorPropList = (arr) => `property [${arr.join(`', '`)}]`;
    const propertyHash = arrayToHash(properties);
    const orderHash = arrayToHash(order);
    const extraneous = order.filter(prop => prop !== '*' && !propertyHash[prop]);
    if (extraneous.length) {
        throw new Error(`ui schema order list contains extraneous ${errorPropList(extraneous)}`);
    }
    const rest = properties.filter(prop => !orderHash[prop]);
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
    const complete = [...order];
    complete.splice(restIndex, 1, ...rest);
    return complete;
}
function getEnum(list, formData, readOnly) {
    if (isBlank(list) || !Array.isArray(list) || list.length === 0)
        return [];
    if (typeof list[0] !== 'object') {
        list = list.map((item) => {
            return { label: item, value: item };
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
        list.forEach((item) => (item.disabled = true));
    }
    return list;
}
function getCopyEnum(list, formData, readOnly) {
    return getEnum(deepCopy(list || []), formData, readOnly);
}
function getData(schema, ui, formData, asyncArgs) {
    if (typeof ui.asyncData === 'function') {
        return ui.asyncData(asyncArgs).pipe(map((list) => getEnum(list, formData, schema.readOnly)));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}
/**
 * Whether to using date-fns to format a date
 */
function isDateFns(srv) {
    if (!srv)
        return false;
    const data = srv.getDateLocale();
    // Compatible date-fns v1.x & v2.x
    return data != null && !!data.formatDistance; // (!!data.distanceInWords || !!data.formatDistance);
}

class FormProperty {
    constructor(schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
        this._options = _options;
        this._errors = null;
        this._valueChanges = new BehaviorSubject({ path: null, pathValue: null, value: null });
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this._objErrors = {};
        this._value = null;
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: this.ui.ingoreKeywords,
            debug: ui.debug,
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else {
            this._root = this;
        }
        this.path = path;
    }
    get valueChanges() {
        return this._valueChanges;
    }
    get errorsChanges() {
        return this._errorsChanges;
    }
    get type() {
        return this.schema.type;
    }
    get parent() {
        return this._parent;
    }
    get root() {
        return this._root;
    }
    get value() {
        return this._value;
    }
    get errors() {
        return this._errors;
    }
    get visible() {
        return this._visible;
    }
    get valid() {
        return this._errors === null || this._errors.length === 0;
    }
    get options() {
        return this._options;
    }
    /**
     * 更新值且校验数据
     */
    updateValueAndValidity(options) {
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
    }
    /** 根据路径搜索表单属性 */
    searchProperty(path) {
        let prop = this;
        let base = null;
        let result = null;
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
    }
    /** 查找根表单属性 */
    findRoot() {
        let property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return property;
    }
    // #region process errors
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
     * @internal
     */
    _runValidation() {
        let errors;
        // The definition of some rules:
        // 1. Should not ajv validator when is empty data and required fields
        // 2. Should not ajv validator when is empty data
        const isEmpty = this.isEmptyData(this._value);
        if (isEmpty && this.ui._required) {
            errors = [{ keyword: 'required' }];
        }
        else if (isEmpty) {
            errors = [];
        }
        else {
            errors = this.schemaValidator(this._value) || [];
        }
        const customValidator = this.ui.validator;
        if (typeof customValidator === 'function') {
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
    setCustomErrors(errors, list) {
        // fix error format
        const hasCustomError = list != null && list.length > 0;
        if (hasCustomError) {
            list.forEach(err => {
                if (!err.message) {
                    throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
                }
                err._custom = true;
            });
        }
        this._errors = this.mergeErrors(errors, list);
        this.setErrors(this._errors);
    }
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
    setErrors(errors, emitFormat = true) {
        if (emitFormat && errors && !this.ui.onlyVisual) {
            const l = (this.widget && this.widget.l.error) || {};
            errors = errors.map((err) => {
                let message = err._custom === true && err.message
                    ? err.message
                    : (this.ui.errors || {})[err.keyword] || this._options.errors[err.keyword] || l[err.keyword] || ``;
                if (message && typeof message === 'function') {
                    message = message(err);
                }
                if (message) {
                    if (~message.indexOf('{')) {
                        message = message.replace(/{([\.a-z0-9]+)}/g, (_v, key) => err.params[key] || '');
                    }
                    err.message = message;
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
    setParentAndPlatErrors(errors, path) {
        this._objErrors[path] = errors;
        const platErrors = [];
        Object.keys(this._objErrors).forEach(p => {
            const property = this.searchProperty(p);
            if (property && !property.visible)
                return;
            platErrors.push(...this._objErrors[p]);
        });
        this.setErrors(platErrors, false);
    }
    // #endregion
    // #region condition
    /**
     * Set the hide or display of widget
     * 设置小部件的隐藏或显示
     */
    setVisible(visible) {
        var _a, _b;
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 部分数据源来自 reset
        if (((_b = (_a = this.root.widget) === null || _a === void 0 ? void 0 : _a.sfComp) === null || _b === void 0 ? void 0 : _b._inited) === true) {
            this.resetValue(this.value, true);
        }
    }
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    _bindVisibility() {
        const visibleIf = this.ui.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            const propertiesBinding = [];
            for (const dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    const property = this.searchProperty(dependencyPath);
                    if (property) {
                        const valueCheck = property.valueChanges.pipe(map(res => {
                            const vi = visibleIf[dependencyPath];
                            if (typeof vi === 'function') {
                                return vi(res.value);
                            }
                            if (vi.indexOf('$ANY$') !== -1) {
                                return res.value.length > 0;
                            }
                            else {
                                return vi.indexOf(res.value) !== -1;
                            }
                        }));
                        const visibilityCheck = property._visibilityChanges;
                        const and = combineLatest([valueCheck, visibilityCheck]).pipe(map(results => results[0] && results[1]));
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
class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    getProperty(path) {
        const subPathIdx = path.indexOf(SF_SEQ);
        const propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        let property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            const subPath = path.substr(subPathIdx + 1);
            property = property.getProperty(subPath);
        }
        return property;
    }
    forEachChild(fn) {
        for (const propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                const property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    }
    forEachChildRecursive(fn) {
        this.forEachChild(child => {
            fn(child);
            if (child instanceof PropertyGroup) {
                child.forEachChildRecursive(fn);
            }
        });
    }
    _bindVisibility() {
        super._bindVisibility();
        this._bindVisibilityRecursive();
    }
    _bindVisibilityRecursive() {
        this.forEachChildRecursive(property => {
            property._bindVisibility();
        });
    }
    isRoot() {
        return this === this.root;
    }
}

class ObjectProperty extends PropertyGroup {
    constructor(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this._propertiesId = [];
        this.createProperties();
    }
    get propertiesId() {
        return this._propertiesId;
    }
    createProperties() {
        this.properties = {};
        this._propertiesId = [];
        let orderedProperties;
        try {
            orderedProperties = orderProperties(Object.keys(this.schema.properties), this.ui.order);
        }
        catch (e) {
            console.error(`Invalid ${this.schema.title || 'root'} object field configuration:`, e);
        }
        orderedProperties.forEach(propertyId => {
            this.properties[propertyId] = this.formPropertyFactory.createProperty(this.schema.properties[propertyId], this.ui['$' + propertyId], (this.formData || {})[propertyId], this, propertyId);
            this._propertiesId.push(propertyId);
        });
    }
    setValue(value, onlySelf) {
        const properties = this.properties;
        for (const propertyId in value) {
            if (value.hasOwnProperty(propertyId) && properties[propertyId]) {
                properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        value = value || this.schema.default || {};
        const properties = this.properties;
        // tslint:disable-next-line: forin
        for (const propertyId in this.schema.properties) {
            properties[propertyId].resetValue(value[propertyId], true);
        }
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    _hasValue() {
        return this.value != null && !!Object.keys(this.value).length;
    }
    _updateValue() {
        const value = {};
        this.forEachChild((property, propertyId) => {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    }
}

class ArrayProperty extends PropertyGroup {
    constructor(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this.properties = [];
    }
    getProperty(path) {
        const subPathIdx = path.indexOf(SF_SEQ);
        const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        const list = this.properties;
        if (isNaN(pos) || pos >= list.length) {
            return undefined;
        }
        const subPath = path.substr(subPathIdx + 1);
        return list[pos].getProperty(subPath);
    }
    setValue(value, onlySelf) {
        this.properties = [];
        this.clearErrors();
        this.resetProperties(value);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        this._value = value || this.schema.default || [];
        this.setValue(this._value, onlySelf);
    }
    _hasValue() {
        return true;
    }
    _updateValue() {
        const value = [];
        this.forEachChild((property) => {
            var _a;
            if (property.visible) {
                value.push(Object.assign(Object.assign({}, (((_a = this.widget) === null || _a === void 0 ? void 0 : _a.cleanValue) ? null : property.formData)), property.value));
            }
        });
        this._value = value;
    }
    addProperty(formData) {
        const newProperty = this.formPropertyFactory.createProperty(this.schema.items, this.ui.$items, formData, this);
        this.properties.push(newProperty);
        return newProperty;
    }
    resetProperties(formDatas) {
        for (const item of formDatas) {
            const property = this.addProperty(item);
            property.resetValue(item, true);
        }
    }
    clearErrors(property) {
        (property || this)._objErrors = {};
    }
    // #region actions
    add(formData) {
        const newProperty = this.addProperty(formData);
        newProperty.resetValue(formData, false);
        return newProperty;
    }
    remove(index) {
        const list = this.properties;
        this.clearErrors();
        list.splice(index, 1);
        list.forEach((property, idx) => {
            property.path = [property.parent.path, idx].join(SF_SEQ);
            this.clearErrors(property);
            // TODO: 受限于 sf 的设计思路，对于移除数组项需要重新对每个子项进行校验，防止错误被父级合并后引起始终是错误的现象
            if (property instanceof ObjectProperty) {
                property.forEachChild(p => {
                    p.updateValueAndValidity();
                });
            }
        });
        if (list.length === 0) {
            this.updateValueAndValidity();
        }
    }
}

class AtomicProperty extends FormProperty {
    setValue(value, onlySelf) {
        this._value = value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        if (value == null) {
            value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
        }
        this._value = value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
        if (this.widget)
            this.widget.reset(value);
    }
    _hasValue() {
        return this.fallbackValue() !== this.value;
    }
    _updateValue() { }
}

class BooleanProperty extends AtomicProperty {
    fallbackValue() {
        return null;
    }
}

class NumberProperty extends AtomicProperty {
    fallbackValue() {
        return null;
    }
    setValue(value, onlySelf) {
        if (typeof value === 'string') {
            if (value.length) {
                value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
            }
            else {
                value = undefined;
            }
        }
        this._value = value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class StringProperty extends AtomicProperty {
    fallbackValue() {
        return null;
    }
    setValue(value, onlySelf) {
        this._value = value == null ? '' : value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class FormPropertyFactory {
    constructor(schemaValidatorFactory, cogSrv) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.options = mergeConfig(cogSrv);
    }
    createProperty(schema, ui, formData, parent = null, propertyId) {
        let newProperty = null;
        let path = '';
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
                    path += parent.properties.length;
                    break;
                default:
                    throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
            }
        }
        else {
            path = SF_SEQ;
        }
        if (schema.$ref) {
            const refSchema = retrieveSchema(schema, parent.root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if ((propertyId && parent.schema.required.indexOf(propertyId.split(SF_SEQ).pop()) !== -1) || ui.showRequired === true) {
                ui._required = true;
            }
            // fix title
            if (schema.title == null) {
                schema.title = propertyId;
            }
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') && !schema.format && !ui.format) {
                if (ui.widget === 'date')
                    ui._format = schema.type === 'string' ? this.options.uiDateStringFormat : this.options.uiDateNumberFormat;
                else if (ui.widget === 'time')
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
                    throw new TypeError(`Undefined type ${schema.type}`);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    }
    initializeRoot(rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    }
}

class TerminatorService {
    constructor() {
        this.onDestroy = new Subject();
    }
    destroy() {
        this.onDestroy.next(true);
    }
}

class SchemaValidatorFactory {
}
SchemaValidatorFactory.decorators = [
    { type: Injectable }
];
class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    constructor(cogSrv, ngZone) {
        super();
        this.ngZone = ngZone;
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        const customOptions = this.options.ajv || {};
        this.ngZone.runOutsideAngular(() => {
            this.ajv = new Ajv(Object.assign(Object.assign({ allErrors: true, loopEnum: 50 }, customOptions), { formats: Object.assign({ ip: REGEX.ip, 'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/, color: REGEX.color, mobile: REGEX.mobile, 'id-card': REGEX.idCard }, customOptions.formats) }));
        });
    }
    createValidatorFn(schema, extraOptions) {
        const ingoreKeywords = [...this.options.ingoreKeywords, ...(extraOptions.ingoreKeywords || [])];
        return (value) => {
            try {
                this.ngZone.runOutsideAngular(() => this.ajv.validate(schema, value));
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
                if (extraOptions.debug) {
                    console.warn(e);
                }
            }
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
            }
            return errors;
        };
    }
}
AjvSchemaValidatorFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: AlainConfigService, decorators: [{ type: Inject, args: [AlainConfigService,] }] },
    { type: NgZone }
];

class WidgetRegistry {
    constructor() {
        this._widgets = {};
    }
    get widgets() {
        return this._widgets;
    }
    setDefault(widget) {
        this.defaultWidget = widget;
    }
    register(type, widget) {
        this._widgets[type] = widget;
    }
    has(type) {
        return this._widgets.hasOwnProperty(type);
    }
    getType(type) {
        if (this.has(type)) {
            return this._widgets[type];
        }
        return this.defaultWidget;
    }
}
class WidgetFactory {
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            console.warn(`No widget for type "${type}"`);
        }
        const componentClass = this.registry.getType(type);
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

function useFactory(schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
}
class SFComponent {
    constructor(formPropertyFactory, terminator, dom, cdr, localeSrv, aclSrv, i18nSrv, cogSrv, platform) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.dom = dom;
        this.cdr = cdr;
        this.localeSrv = localeSrv;
        this.aclSrv = aclSrv;
        this.i18nSrv = i18nSrv;
        this.platform = platform;
        this.unsubscribe$ = new Subject();
        this._renders = new Map();
        this._valid = true;
        this._inited = false;
        this.locale = {};
        this.rootProperty = null;
        // #region fields
        /** 表单布局，等同 `nzLayout`，默认：horizontal */
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
        /** 立即显示错误视觉 */
        this.firstVisual = true;
        /** 是否只展示错误视觉不显示错误文本 */
        this.onlyVisual = false;
        this.compact = false;
        /**
         * Whether to load status，when `true` reset button is disabled status, submit button is loading status
         */
        this.loading = false;
        this.disabled = false;
        this.noColon = false;
        this.cleanValue = false;
        this.formValueChange = new EventEmitter();
        this.formChange = new EventEmitter();
        this.formSubmit = new EventEmitter();
        this.formReset = new EventEmitter();
        this.formError = new EventEmitter();
        this.options = mergeConfig(cogSrv);
        this.liveValidate = this.options.liveValidate;
        this.firstVisual = this.options.firstVisual;
        this.autocomplete = this.options.autocomplete;
        this.localeSrv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.localeSrv.getData('sf');
            if (this._inited) {
                this.validator({ emitError: false, onlyRoot: false });
                this.coverButtonProperty();
                this.cdr.markForCheck();
            }
        });
        const refSchemas = [
            this.aclSrv ? this.aclSrv.change : null,
            this.i18nSrv ? this.i18nSrv.change : null,
        ].filter(o => o != null);
        if (refSchemas.length > 0) {
            merge(...refSchemas)
                .pipe(filter(() => this._inited), takeUntil(this.unsubscribe$))
                .subscribe(() => this.refreshSchema());
        }
    }
    get btnGrid() {
        return this._btn.render.grid;
    }
    /** 表单模式 */
    set mode(value) {
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
    }
    get mode() {
        return this._mode;
    }
    // #endregion
    /**
     * Whether the form is valid
     *
     * 表单是否有效
     */
    get valid() {
        return this._valid;
    }
    /**
     * The value of the form
     *
     * 表单值
     */
    get value() {
        return this._item;
    }
    /**
     * Get form element property based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素属性
     */
    getProperty(path) {
        return this.rootProperty.searchProperty(path);
    }
    /**
     * Get element value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素值
     */
    getValue(path) {
        return this.getProperty(path).value;
    }
    /**
     * Set form element new value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素属性值
     */
    setValue(path, value) {
        const item = this.getProperty(path);
        if (!item) {
            throw new Error(`Invalid path: ${path}`);
        }
        item.resetValue(value, false);
        return this;
    }
    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.liveValidate)
            this.validator();
        if (!this.valid)
            return;
        this.formSubmit.emit(this.value);
    }
    fanyi(key) {
        return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
    }
    inheritUI(ui) {
        ['optionalHelp'].filter(key => !!this._defUi[key]).forEach(key => (ui[key] = Object.assign(Object.assign({}, this._defUi[key]), ui[key])));
    }
    coverProperty() {
        const isHorizontal = this.layout === 'horizontal';
        const _schema = deepCopy(this.schema);
        const { definitions } = _schema;
        const inFn = (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) => {
            if (!Array.isArray(schema.required))
                schema.required = [];
            Object.keys(schema.properties).forEach(key => {
                const uiKey = `$${key}`;
                const property = retrieveSchema(schema.properties[key], definitions);
                const ui = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ widget: property.type }, (property.format && this.options.formatMap[property.format])), (typeof property.ui === 'string' ? { widget: property.ui } : null)), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null)), this._defUi), property.ui), uiSchema[uiKey]);
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
                if (this.layout === 'inline') {
                    delete ui.grid;
                }
                // 非水平布局强制清理 `spanLabelFixed` 值
                if (this.layout !== 'horizontal') {
                    ui.spanLabelFixed = null;
                }
                // 当指定标签为固定宽度时无须指定 `spanLabel`，`spanControl`
                if (ui.spanLabelFixed != null && ui.spanLabelFixed > 0) {
                    ui.spanLabel = null;
                    ui.spanControl = null;
                }
                if (ui.widget === 'date' && ui.end != null) {
                    const dateEndProperty = schema.properties[ui.end];
                    if (dateEndProperty) {
                        dateEndProperty.ui = Object.assign(Object.assign({}, dateEndProperty.ui), { widget: ui.widget, hidden: true });
                    }
                    else {
                        ui.end = null;
                    }
                }
                this.inheritUI(ui);
                if (ui.optionalHelp) {
                    if (typeof ui.optionalHelp === 'string') {
                        ui.optionalHelp = {
                            text: ui.optionalHelp,
                        };
                    }
                    const oh = (ui.optionalHelp = Object.assign({ text: '', icon: 'question-circle', placement: 'top', trigger: 'hover', mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 }, ui.optionalHelp));
                    if (oh.i18n) {
                        oh.text = this.fanyi(oh.i18n);
                    }
                    if (!oh.text) {
                        ui.optionalHelp = undefined;
                    }
                }
                if (ui.i18n) {
                    property.title = this.fanyi(ui.i18n);
                }
                if (ui.descriptionI18n) {
                    property.description = this.fanyi(ui.descriptionI18n);
                }
                if (property.description) {
                    property._description = this.dom.bypassSecurityTrustHtml(property.description);
                }
                ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                if (ui.hidden === false && ui.acl && this.aclSrv && !this.aclSrv.can(ui.acl)) {
                    ui.hidden = true;
                }
                uiRes[uiKey] = ui;
                delete property.ui;
                if (ui.hidden === true) {
                    const idx = schema.required.indexOf(key);
                    if (idx !== -1) {
                        schema.required.splice(idx, 1);
                    }
                }
                if (property.items) {
                    const uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                    ui.$items = Object.assign(Object.assign(Object.assign({}, property.items.ui), uiSchemaInArr[uiKey]), ui.$items);
                    inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
                }
            });
        };
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
        delete _schema.ui;
        di(this._ui, 'cover schema & ui', this._ui, _schema);
    }
    coverButtonProperty() {
        this._btn = Object.assign(Object.assign(Object.assign({ render: { size: 'default' } }, this.locale), this.options.button), this.button);
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        const btnRender = this._btn.render;
        if (this.layout === 'horizontal') {
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
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
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.validator();
        this._inited = true;
    }
    ngOnChanges(changes) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
            this.cdr.detectChanges();
            return;
        }
        this.refreshSchema();
    }
    /** @internal */
    _addTpl(path, templateRef) {
        if (!this._inited) {
            return;
        }
        if (this._renders.has(path)) {
            console.warn(`Duplicate definition "${path}" custom widget`);
            return;
        }
        this._renders.set(path, templateRef);
        this.attachCustomRender();
    }
    attachCustomRender() {
        this._renders.forEach((tpl, path) => {
            const property = this.rootProperty.searchProperty(path);
            if (property == null) {
                return;
            }
            property.ui._render = tpl;
        });
    }
    /**
     * Validator the form is valid
     *
     * 校验表单是否有效
     * - `emitError` 当表单无效时是否触发 `formError` 事件，默认：`true`
     * - `onlyRoot` 只对根进行检验，不进行向下逐个递归，根已经包含整个 Json Schema，默认：`true`
     */
    validator(options = { emitError: true, onlyRoot: true }) {
        if (!this.platform.isBrowser) {
            return false;
        }
        const fn = (property) => {
            property._runValidation();
            if (!(property instanceof PropertyGroup) || !property.properties)
                return;
            if (Array.isArray(property.properties)) {
                property.properties.forEach(p => fn(p));
            }
            else {
                Object.keys(property.properties).forEach(key => fn(property.properties[key]));
            }
        };
        if (options.onlyRoot) {
            this.rootProperty._runValidation();
        }
        else {
            fn(this.rootProperty);
        }
        const errors = this.rootProperty.errors;
        this._valid = !(errors && errors.length);
        if (options.emitError && !this._valid)
            this.formError.emit(errors);
        this.cdr.detectChanges();
        return this._valid;
    }
    /**
     * Refresh the form Schema, when specifying `newSchema` means to replace the current Schema
     *
     * 刷新 Schema，当指定 `newSchema` 表示替换当前的 Schema
     *
     * 可以针对某个表单元素进行刷新，例如：
     * ```
     * // 获取某个元素
     * const statusProperty = this.sf.getProperty('/status')!;
     * // 重置 `schema` 或 `ui` 参数
     * statusProperty.schema.enum = ['1', '2', '3'];
     * // 调用 `reset` 重置初始值
     * statusProperty.widget.reset('2');
     * ```
     */
    refreshSchema(newSchema, newUI) {
        if (!this.platform.isBrowser) {
            return this;
        }
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
        this.cleanRootSub();
        this.coverProperty();
        this.coverButtonProperty();
        this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData);
        this.attachCustomRender();
        this.cdr.detectChanges();
        this.reset();
        let isFirst = true;
        this.rootProperty.valueChanges.subscribe(res => {
            this._item = Object.assign(Object.assign({}, (this.cleanValue ? null : this.formData)), res.value);
            if (isFirst) {
                isFirst = false;
                return;
            }
            this.formChange.emit(this._item);
            this.formValueChange.emit({ value: this._item, path: res.path, pathValue: res.pathValue });
        });
        this.rootProperty.errorsChanges.subscribe(errors => {
            this._valid = !(errors && errors.length);
            this.formError.emit(errors);
            this.cdr.detectChanges();
        });
        return this;
    }
    /**
     * Reset form
     *
     * 重置表单
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit = false) {
        if (!this.platform.isBrowser) {
            return this;
        }
        this.rootProperty.resetValue(this.formData, false);
        Promise.resolve().then(() => this.cdr.detectChanges());
        if (emit) {
            this.formReset.emit(this.value);
        }
        return this;
    }
    cleanRootSub() {
        if (!this.rootProperty)
            return;
        this.rootProperty.errorsChanges.unsubscribe();
        this.rootProperty.valueChanges.unsubscribe();
    }
    ngOnDestroy() {
        this.cleanRootSub();
        this.terminator.destroy();
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
SFComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf, [sf]',
                exportAs: 'sf',
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item *ngIf=\"_btn.render\" [ngClass]=\"_btn.render!.class!\" class=\"sf-btns\" [fixed-label]=\"_btn.render!.spanLabelFixed!\">\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                providers: [
                    WidgetFactory,
                    {
                        provide: FormPropertyFactory,
                        useFactory,
                        deps: [SchemaValidatorFactory, AlainConfigService],
                    },
                    TerminatorService,
                ],
                host: {
                    '[class.sf]': 'true',
                    '[class.sf__inline]': `layout === 'inline'`,
                    '[class.sf__horizontal]': `layout === 'horizontal'`,
                    '[class.sf__search]': `mode === 'search'`,
                    '[class.sf__edit]': `mode === 'edit'`,
                    '[class.sf__no-error]': `onlyVisual`,
                    '[class.sf__no-colon]': `noColon`,
                    '[class.sf__compact]': `compact`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
SFComponent.ctorParameters = () => [
    { type: FormPropertyFactory },
    { type: TerminatorService },
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: DelonLocaleService },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: AlainConfigService },
    { type: Platform }
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
    onlyVisual: [{ type: Input }],
    compact: [{ type: Input }],
    mode: [{ type: Input }],
    loading: [{ type: Input }],
    disabled: [{ type: Input }],
    noColon: [{ type: Input }],
    cleanValue: [{ type: Input }],
    formValueChange: [{ type: Output }],
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "onlyVisual", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "compact", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "noColon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SFComponent.prototype, "cleanValue", void 0);

let nextUniqueId = 0;
class SFItemComponent {
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.unsubscribe$ = new Subject();
        this.widget = null;
    }
    onWidgetInstanciated(widget) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;
        const ui = this.formProperty.ui;
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.widget.firstVisual = ui.firstVisual;
        this.formProperty.widget = widget;
    }
    ngOnInit() {
        this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
    }
    ngOnChanges() {
        const p = this.formProperty;
        this.ref = this.widgetFactory.createWidget(this.container, (p.ui.widget || p.schema.type));
        this.onWidgetInstanciated(this.ref.instance);
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.ref.destroy();
    }
}
SFItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                exportAs: 'sfItem',
                host: { '[class.sf__item]': 'true' },
                template: ` <ng-template #target></ng-template> `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
SFItemComponent.ctorParameters = () => [
    { type: WidgetFactory },
    { type: TerminatorService }
];
SFItemComponent.propDecorators = {
    formProperty: [{ type: Input }],
    container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef, static: true },] }]
};

class SFFixedDirective {
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = er.nativeElement;
    }
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control');
        const unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
            this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
        }
        else {
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
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

class SFItemWrapComponent {
    constructor() {
        this._showTitle = false;
        this.title = null;
    }
    set showTitle(val) {
        this._showTitle = !!val;
    }
    get t() {
        return this.title === null ? this.schema.title : this.title;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
}
SFItemWrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item-wrap',
                template: "<nz-form-item [style.width.px]=\"ui.width\" [class.ant-form-item-has-error]=\"showError\" [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-item-explain ant-form-item-explain-error\">\n      <div @helpMotion>{{ error }}</div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"schema._description\"></div>\n  </div>\n</nz-form-item>\n",
                animations: [helpMotion],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
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

class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
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

class Widget {
    constructor(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
        this.firstVisual = false;
    }
    get cls() {
        return this.ui.class || '';
    }
    get disabled() {
        if (this.schema.readOnly === true || this.sfComp.disabled) {
            return true;
        }
        return false;
    }
    get l() {
        return this.formProperty.root.widget.sfComp.locale;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
    get dom() {
        return this.injector.get(DomSanitizer);
    }
    get cleanValue() {
        var _a;
        return (_a = this.sfComp) === null || _a === void 0 ? void 0 : _a.cleanValue;
    }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe((errors) => {
            if (errors == null)
                return;
            di(this.ui, 'errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                this.cd.detectChanges();
            }
            this.firstVisual = true;
        });
        this.afterViewInit();
    }
    setValue(value) {
        this.formProperty.setValue(value, false);
        di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
    }
    get value() {
        return this.formProperty.value;
    }
    detectChanges(onlySelf = false) {
        if (onlySelf) {
            this.cd.markForCheck();
        }
        else {
            this.formProperty.root.widget.cd.markForCheck();
        }
    }
}
Widget.decorators = [
    { type: Directive }
];
/** @nocollapse */
Widget.ctorParameters = () => [
    { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] },
    { type: SFItemComponent, decorators: [{ type: Inject, args: [SFItemComponent,] }] },
    { type: SFComponent, decorators: [{ type: Inject, args: [SFComponent,] }] }
];
Widget.propDecorators = {
    cls: [{ type: HostBinding, args: ['class',] }]
};
class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
ControlWidget.decorators = [
    { type: Directive }
];
class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
}
ControlUIWidget.decorators = [
    { type: Directive }
];
class ArrayLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe(() => this.cd.detectChanges());
    }
}
ArrayLayoutWidget.decorators = [
    { type: Directive }
];
class ObjectLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.unsubscribe$)).subscribe(() => this.cd.detectChanges());
    }
}
ObjectLayoutWidget.decorators = [
    { type: Directive }
];

class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    get addDisabled() {
        return (this.disabled || (this.schema.maxItems != null && this.formProperty.properties.length >= this.schema.maxItems));
    }
    get showRemove() {
        return !this.disabled && !!this.removeTitle;
    }
    ngOnInit() {
        const { grid, addTitle, addType, removable, removeTitle } = this.ui;
        if (grid && grid.arraySpan) {
            this.arraySpan = grid.arraySpan;
        }
        this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
        this.addType = addType || 'dashed';
        this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
    }
    reValid() {
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        if (this.ui.add) {
            this.ui.add(property);
        }
    }
    removeItem(index) {
        this.formProperty.remove(index);
        this.reValid();
        if (this.ui.remove) {
            this.ui.remove(index);
        }
    }
}
ArrayWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-array',
                template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label>\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button type=\"button\" nz-button [nzType]=\"addType\" [disabled]=\"addDisabled\" (click)=\"addItem()\" [innerHTML]=\"addTitle\"></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx=index\">\n          <div nz-col *ngIf=\"i.visible && !i.ui.hidden\" [nzSpan]=\"arraySpan\" [attr.data-index]=\"idx\" class=\"sf__array-item\">\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{error}}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"schema._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n",
                host: { '[class.sf__array]': 'true' },
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class AutoCompleteWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.i = {};
        this.typing = '';
        this.isAsync = false;
        this.fixData = [];
    }
    updateValue(item) {
        this.typing = item.nzLabel;
        const data = item.nzValue;
        this.setValue(data.value);
        if (this.ui.change) {
            this.ui.change(item, data);
        }
    }
    _setValue(item) {
        let val = item.toString();
        if (typeof item !== 'string') {
            val = item.value;
        }
        this.setValue(val);
    }
    afterViewInit() {
        const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData } = this.ui;
        this.i = {
            backfill: toBool(backfill, false),
            defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
            width: nzWidth || undefined,
        };
        let filterOptionValue = filterOption == null ? true : filterOption;
        if (typeof filterOptionValue === 'boolean') {
            filterOptionValue = (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
        }
        this.filterOption = filterOptionValue;
        this.isAsync = !!asyncData;
        const orgTime = +(this.ui.debounceTime || 0);
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.ngModel.valueChanges.pipe(debounceTime(time), startWith(''), mergeMap(input => (this.isAsync ? asyncData(input) : this.filterData(input))), map(res => getEnum(res, null, this.schema.readOnly)));
    }
    reset(value) {
        this.typing = this.value;
        if (this.isAsync)
            return;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum(this.schema.enum || this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly);
                break;
            default:
                this.fixData = getCopyEnum(this.schema.enum, value, this.schema.readOnly);
                break;
        }
    }
    filterData(input) {
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter(option => this.filterOption(input, option)));
        }
    }
    addEmailSuffix(value) {
        return of(!value || ~value.indexOf('@') ? [] : this.fixData.map(domain => `${value}@${domain.label}`));
    }
}
AutoCompleteWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-autocomplete',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\"> {{i.label}} </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
AutoCompleteWidget.propDecorators = {
    ngModel: [{ type: ViewChild, args: [NgModel, { static: false },] }]
};

class BooleanWidget extends ControlUIWidget {
}
BooleanWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-boolean',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzCheckedChildren]=\"ui.checkedChildren!\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren!\"\n  >\n  </nz-switch>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class CascaderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    ngOnInit() {
        const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (!!asyncData) {
            this.loadData = (node, index) => asyncData(node, index, this).then(() => this.detectChanges());
        }
    }
    reset(value) {
        getData(this.schema, {}, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _visibleChange(status) {
        if (this.ui.visibleChange)
            this.ui.visibleChange(status);
    }
    _change(value) {
        this.setValue(value);
        if (this.ui.change) {
            this.ui.change(value);
        }
    }
    _selectionChange(options) {
        if (this.ui.selectionChange) {
            this.ui.selectionChange(options);
        }
    }
    _clear() {
        if (this.ui.clear)
            this.ui.clear();
    }
}
CascaderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-cascader',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-cascader\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_change($event)\"\n    [nzOptions]=\"data\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzAutoFocus]=\"ui.autoFocus\"\n    [nzChangeOn]=\"ui.changeOn\"\n    [nzChangeOnSelect]=\"ui.changeOnSelect\"\n    [nzColumnClassName]=\"ui.columnClassName\"\n    [nzExpandTrigger]=\"ui.expandTrigger!\"\n    [nzMenuClassName]=\"ui.menuClassName\"\n    [nzMenuStyle]=\"ui.menuStyle!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n    [nzValueProperty]=\"ui.valueProperty || 'value'\"\n    [nzLoadData]=\"loadData\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzShowArrow]=\"showArrow\"\n    [nzShowInput]=\"showInput\"\n    [nzShowSearch]=\"ui.showSearch!\"\n    (nzClear)=\"_clear()\"\n    (nzVisibleChange)=\"_visibleChange($event)\"\n    (nzSelectionChange)=\"_selectionChange($event)\"\n  >\n  </nz-cascader>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class CheckboxWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = ``;
        this.inited = false;
    }
    reset(value) {
        this.inited = false;
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.allChecked = false;
            this.indeterminate = false;
            this.labelTitle = list.length === 0 ? '' : this.schema.title;
            const { span } = this.ui;
            this.grid_span = span && span > 0 ? span : 0;
            this.updateAllChecked();
            this.inited = true;
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }
    notifySet() {
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    groupInGridChange(values) {
        this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.notifySet();
    }
    onAllChecked() {
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }
    updateAllChecked() {
        if (this.data.every(item => item.checked !== true)) {
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
    notifyChange(res) {
        if (this.ui.change)
            this.ui.change(res);
    }
}
CheckboxWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-checkbox',
                template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n    >{{ ui.checkAllText || l.checkAllText }}</label\n  >\n</ng-template>\n<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"true\" [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class CustomWidget extends ControlUIWidget {
}
CustomWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-custom',
                template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      <ng-template
        [ngTemplateOutlet]="$any(ui)._render"
        [ngTemplateOutletContext]="{$implicit: this, schema: schema, ui: ui }"
      ></ng-template>
    </sf-item-wrap>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class DateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.flatRange = false;
        this.displayValue = null;
    }
    ngOnInit() {
        const { mode, end, displayFormat, allowClear, showToday } = this.ui;
        this.mode = mode || 'date';
        this.flatRange = end != null;
        // 构建属性对象时会对默认值进行校验，因此可以直接使用 format 作为格式化属性
        this.startFormat = this.ui._format;
        if (this.flatRange) {
            this.mode = 'range';
            const endUi = this.endProperty.ui;
            this.endFormat = endUi.format ? endUi._format : this.startFormat;
        }
        if (!displayFormat) {
            switch (this.mode) {
                case 'year':
                    this.displayFormat = `yyyy`;
                    break;
                case 'month':
                    this.displayFormat = `yyyy-MM`;
                    break;
                case 'week':
                    this.displayFormat = `yyyy-ww`;
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
    }
    reset(value) {
        const toDateOptions = { formatString: this.startFormat, defaultValue: null };
        if (Array.isArray(value)) {
            value = value.map(v => toDate(v, toDateOptions));
        }
        else {
            value = toDate(value, toDateOptions);
        }
        if (this.flatRange) {
            const endValue = toDate(this.endProperty.formData, {
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
            setTimeout(() => this._change(this.displayValue, false));
        }
    }
    _change(value, emitModelChange = true) {
        if (emitModelChange && this.ui.change) {
            this.ui.change(value);
        }
        if (value == null || (Array.isArray(value) && value.length < 2)) {
            this.setValue(null);
            this.setEnd(null);
            return;
        }
        const res = Array.isArray(value)
            ? [format(value[0], this.startFormat), format(value[1], this.endFormat || this.startFormat)]
            : format(value, this.startFormat);
        if (this.flatRange) {
            this.setValue(res[0]);
            this.setEnd(res[1]);
        }
        else {
            this.setValue(res);
        }
    }
    _openChange(status) {
        if (this.ui.onOpenChange)
            this.ui.onOpenChange(status);
    }
    _ok(value) {
        if (this.ui.onOk)
            this.ui.onOk(value);
    }
    get endProperty() {
        return this.formProperty.parent.properties[this.ui.end];
    }
    setEnd(value) {
        if (!this.flatRange)
            return;
        this.endProperty.setValue(value, true);
        this.endProperty.updateValueAndValidity();
    }
}
DateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-date',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    ></nz-year-picker>\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    ></nz-month-picker>\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    ></nz-week-picker>\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-range-picker>\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    ></nz-date-picker>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class MentionWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.loading = false;
    }
    ngOnInit() {
        const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
        this.i = {
            valueWith: valueWith || (item => item.label),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
        };
        const { minimum, maximum } = this.schema;
        const min = typeof minimum !== 'undefined' ? minimum : -1;
        const max = typeof maximum !== 'undefined' ? maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (() => {
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            });
        }
    }
    reset(_value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _select(options) {
        if (this.ui.select)
            this.ui.select(options);
    }
    _search(option) {
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        this.ui
            .loadData(option)
            .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
            .subscribe(res => {
            this.data = res;
            this.detectChanges(true);
        });
    }
}
MentionWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-mention',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-mention\n    #mentions\n    [nzSuggestions]=\"data\"\n    [nzValueWith]=\"i.valueWith\"\n    [nzLoading]=\"loading\"\n    [nzNotFoundContent]=\"i.notFoundContent\"\n    [nzPlacement]=\"i.placement\"\n    [nzPrefix]=\"i.prefix\"\n    (nzOnSelect)=\"_select($event)\"\n    (nzOnSearchChange)=\"_search($event)\"\n  >\n    <input\n      *ngIf=\"ui.inputStyle !== 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      autocomplete=\"off\"\n    />\n    <textarea\n      *ngIf=\"ui.inputStyle === 'textarea'\"\n      nzMentionTrigger\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"i.autosize\"\n    >\n    </textarea>\n  </nz-mention>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
MentionWidget.propDecorators = {
    mentionChild: [{ type: ViewChild, args: ['mentions', { static: true },] }]
};

class NumberWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.formatter = value => value;
        this.parser = value => value;
    }
    ngOnInit() {
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
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
        const ui = this.ui;
        if (ui.prefix != null) {
            ui.formatter = value => (value == null ? '' : `${ui.prefix} ${value}`);
            ui.parser = value => value.replace(`${ui.prefix} `, '');
        }
        if (ui.unit != null) {
            ui.formatter = value => (value == null ? '' : `${value} ${ui.unit}`);
            ui.parser = value => value.replace(` ${ui.unit}`, '');
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
    }
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
    }
}
NumberWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-number',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class ObjectWidget extends ObjectLayoutWidget {
    constructor() {
        super(...arguments);
        this.type = 'default';
        this.list = [];
        this.showExpand = true;
        this.expand = true;
    }
    ngOnInit() {
        const { formProperty, ui } = this;
        const { grid, showTitle, type } = ui;
        this.showExpand = toBool(ui.showExpand, true);
        this.expand = toBool(ui.expand, true);
        this.type = type !== null && type !== void 0 ? type : 'default';
        if (this.type === 'card' || (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
            this.title = this.schema.title;
        }
        this.grid = grid;
        const list = [];
        for (const key of formProperty.propertiesId) {
            const property = formProperty.properties[key];
            const item = {
                property,
                grid: property.ui.grid || grid || {},
                spanLabelFixed: property.ui.spanLabelFixed,
                show: property.ui.hidden === false,
            };
            list.push(item);
        }
        this.list = list;
    }
    changeExpand() {
        if (!this.showExpand) {
            return;
        }
        this.expand = !this.expand;
        this.detectChanges(true);
    }
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-object',
                template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle!\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{title}}\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class RadioWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    reset(value) {
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list.map(i => {
                i.label = this.dom.bypassSecurityTrustHtml(i.label);
                return i;
            });
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group [nzSize]=\"ui.size!\" [nzName]=\"id\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\" [nzButtonStyle]=\"ui.buttonStyle || 'outline'\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\" nz-radio-button [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class RateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    get text() {
        return this.ui.text.replace('{{value}}', this.formProperty.value);
    }
    ngOnInit() {
        const { schema, ui } = this;
        this.count = schema.maximum || 5;
        this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(ui.allowClear, true);
        this.autoFocus = toBool(ui.autoFocus, false);
        this.hasText = !!ui.text;
    }
}
RateWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-rate',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-rate\n    [nzDisabled]=\"disabled\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzAllowClear]=\"allowClear\"\n    [nzAllowHalf]=\"allowHalf\"\n    [nzTooltips]=\"ui.tooltips || []\"\n    [nzAutoFocus]=\"autoFocus\"\n    [nzCount]=\"$any(count)\"\n  ></nz-rate>\n  <span *ngIf=\"hasText && formProperty.value\" class=\"ant-rate-text\">{{ text }}</span>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class SelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.hasGroup = false;
        this.loading = false;
    }
    checkGroup(list) {
        this.hasGroup = (list || []).filter(w => w.group === true).length > 0;
    }
    ngOnInit() {
        const { autoClearSearchValue, borderless, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, showArrow, } = this.ui;
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
            showArrow: typeof showArrow !== 'boolean' ? undefined : showArrow,
            compareWith: compareWith || ((o1, o2) => o1 === o2),
        };
        const onSearch = this.ui.onSearch;
        if (onSearch) {
            this.search$
                .pipe(takeUntil(this.sfItemComp.unsubscribe$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime || 300), switchMap(text => onSearch(text)), catchError(() => []))
                .subscribe(list => {
                this.data = list;
                this.checkGroup(list);
                this.loading = false;
                this.detectChanges();
            });
        }
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this._value = value;
            this.data = list;
            this.checkGroup(list);
            this.detectChanges();
        });
    }
    change(values) {
        if (this.ui.change) {
            this.ui.change(values, this.getOrgData(values));
        }
        this.setValue(values == null ? undefined : values);
    }
    getOrgData(values) {
        if (!Array.isArray(values)) {
            return this.data.find(w => w.value === values);
        }
        return values.map(value => {
            let item = null;
            this.data.forEach(list => {
                var _a;
                item = (_a = list.children) === null || _a === void 0 ? void 0 : _a.find(w => w.value === value);
            });
            return item;
        });
    }
    openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
    scrollToBottom() {
        if (this.ui.scrollToBottom) {
            this.ui.scrollToBottom();
        }
    }
    onSearch(value) {
        if (this.ui.onSearch) {
            this.loading = true;
            this.search$.next(value);
        }
    }
}
SelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option *ngFor=\"let o of data\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option *ngFor=\"let o of i.children\" [nzLabel]=\"o.label\" [nzValue]=\"o.value\" [nzDisabled]=\"o.disabled\"></nz-option>\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class SliderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this._formatter = (value) => {
            const { formatter } = this.ui;
            if (formatter)
                return formatter(value);
            return `${value}`;
        };
    }
    ngOnInit() {
        const { minimum, maximum, multipleOf } = this.schema;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        const { marks, included } = this.ui;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    }
    _afterChange(value) {
        const { afterChange } = this.ui;
        if (afterChange)
            return afterChange(value);
    }
}
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class StringWidget extends ControlUIWidget {
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, autofocus } = this.ui;
        this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
            ? 'addon'
            : '';
        if (autofocus === true) {
            setTimeout(() => {
                this.injector.get(ElementRef).nativeElement.querySelector(`#${this.id}`).focus();
            }, 20);
        }
    }
    reset(value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
        }
    }
    change(val) {
        this.setValue(val);
        if (this.ui.change)
            this.ui.change(val);
    }
    focus(e) {
        if (this.ui.focus)
            this.ui.focus(e);
    }
    blur(e) {
        if (this.ui.blur)
            this.ui.blur(e);
    }
    enter(e) {
        if (this.ui.enter)
            this.ui.enter(e);
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TagWidget extends ControlUIWidget {
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    onChange(item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui.checkedChange) {
            this.ui.checkedChange(item.checked);
        }
    }
    _close(e) {
        if (this.ui.onClose)
            this.ui.onClose(e);
    }
    updateValue() {
        this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
    }
}
TagWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tag',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #icon let-i>\n    <i nz-icon [nzType]=\"i.type\" [nzTheme]=\"i.theme\" [nzTwotoneColor]=\"i.twotoneColor\" [nzRotate]=\"i.rotate\" [nzIconfont]=\"i.iconfont\" [nzSpin]=\"i.spin\"></i>\n  </ng-template>\n  <nz-tag *ngFor=\"let i of data\" [nzMode]=\"ui.mode || 'checkable'\" [nzChecked]=\"i.checked\" (nzOnClose)=\"_close($event)\" (nzCheckedChange)=\"onChange(i)\">\n    <ng-container *ngIf=\"i.prefixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.prefixIcon }\"></ng-template>\n    </ng-container>\n    <span>{{i.label}}</span>\n    <ng-container *ngIf=\"i.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.suffixIcon }\"></ng-template>\n    </ng-container>\n  </nz-tag>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TextWidget extends ControlUIWidget {
    ngOnInit() {
        this.ui._required = false;
    }
}
TextWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-text',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  {{ value || ui.defaultText || '-' }}\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TextareaWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    ngOnInit() {
        const { autosize } = this.ui;
        if (autosize != null) {
            this.autosize = autosize;
        }
    }
    change(val) {
        this.setValue(val);
        if (this.ui.change)
            this.ui.change(val);
    }
    focus(e) {
        if (this.ui.focus)
            this.ui.focus(e);
    }
    blur(e) {
        if (this.ui.blur)
            this.ui.blur(e);
    }
}
TextareaWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-textarea',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TimeWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    ngOnInit() {
        const ui = this.ui;
        this.valueFormat = ui._format;
        const opt = {
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
            opt.displayFormat = `h:mm:ss a`;
        }
        this.i = opt;
    }
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.detectChanges();
            return;
        }
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1) {
                value += ':00';
            }
            v = new Date(`1970-1-1 ` + value);
        }
        this.displayValue = v;
        this.detectChanges();
    }
    _change(value) {
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
        this.setValue(format(value, this.valueFormat));
    }
    _openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
}
TimeWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-time',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-time-picker\n    [nzId]=\"id\"\n    [(ngModel)]=\"displayValue\"\n    (ngModelChange)=\"_change($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"$any(ui.size)\"\n    [nzFormat]=\"i.displayFormat\"\n    [nzAllowEmpty]=\"i.allowEmpty\"\n    [nzClearText]=\"i.clearText\"\n    [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n    [nzDisabledHours]=\"ui.disabledHours\"\n    [nzDisabledMinutes]=\"ui.disabledMinutes\"\n    [nzDisabledSeconds]=\"ui.disabledSeconds\"\n    [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n    [nzUse12Hours]=\"i.use12Hours\"\n    [nzHourStep]=\"i.hourStep\"\n    [nzMinuteStep]=\"i.minuteStep\"\n    [nzSecondStep]=\"i.secondStep\"\n    [nzPopupClassName]=\"ui.popupClassName!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNowText]=\"ui.nowText!\"\n    [nzOkText]=\"ui.okText!\"\n    (nzOpenChange)=\"_openChange($event)\"\n  >\n  </nz-time-picker>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TransferWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.list = [];
        this._data = [];
        this._canMove = (arg) => {
            return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
        };
    }
    ngOnInit() {
        const { titles, operations, itemUnit, itemsUnit } = this.ui;
        this.i = {
            titles: titles || ['', ''],
            operations: operations || ['', ''],
            itemUnit: itemUnit || '项',
            itemsUnit: itemsUnit || '项',
        };
    }
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            let formData = value;
            if (!Array.isArray(formData)) {
                formData = [formData];
            }
            list.forEach((item) => {
                if (~formData.indexOf(item.value)) {
                    item.direction = 'right';
                }
            });
            this.list = list;
            this._data = list.filter(w => w.direction === 'right');
            this.notify();
            this.detectChanges();
        });
    }
    notify() {
        this.formProperty.setValue(this._data.map(i => i.value), false);
    }
    _change(options) {
        if (options.to === 'right') {
            this._data = this._data.concat(...options.list);
        }
        else {
            this._data = this._data.filter((w) => options.list.indexOf(w) === -1);
        }
        if (this.ui.change)
            this.ui.change(options);
        this.notify();
    }
    _searchChange(options) {
        if (this.ui.searchChange)
            this.ui.searchChange(options);
        this.detectChanges();
    }
    _selectChange(options) {
        if (this.ui.selectChange)
            this.ui.selectChange(options);
        this.detectChanges();
    }
}
TransferWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-transfer',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-transfer\n    [nzDataSource]=\"$any(list)\"\n    [nzTitles]=\"i.titles\"\n    [nzOperations]=\"i.operations\"\n    [nzListStyle]=\"ui.listStyle!\"\n    [nzItemUnit]=\"i.itemUnit\"\n    [nzItemsUnit]=\"i.itemsUnit\"\n    [nzShowSearch]=\"ui.showSearch\"\n    [nzFilterOption]=\"ui.filterOption\"\n    [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzCanMove]=\"_canMove\"\n    (nzChange)=\"_change($event)\"\n    (nzSearchChange)=\"_searchChange($event)\"\n    (nzSelectChange)=\"_selectChange($event)\"\n  >\n  </nz-transfer>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class TreeSelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.asyncData = false;
    }
    ngOnInit() {
        const { ui } = this;
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
            displayWith: ui.displayWith || ((node) => node.title),
        };
        this.asyncData = typeof ui.expandChange === 'function';
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    change(value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    }
    expandChange(e) {
        const { ui } = this;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe(res => {
            e.node.clearChildren();
            e.node.addChildren(res);
            this.detectChanges();
        });
    }
}
TreeSelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tree-select',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tree-select\n    [nzId]=\"id\"\n    [nzAllowClear]=\"i.allowClear\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzSize]=\"ui.size!\"\n    [nzExpandedKeys]=\"ui.expandedKeys!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzMaxTagCount]=\"ui.maxTagCount!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder || null\"\n    [nzTreeTemplate]=\"ui.treeTemplate!\"\n    [nzDisabled]=\"disabled\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowIcon]=\"i.showIcon\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzMultiple]=\"i.multiple\"\n    [nzHideUnMatched]=\"i.hideUnMatched\"\n    [nzCheckable]=\"i.checkable\"\n    [nzShowExpand]=\"i.showExpand\"\n    [nzShowLine]=\"i.showLine\"\n    [nzCheckStrictly]=\"i.checkfStrictly\"\n    [nzAsyncData]=\"asyncData\"\n    [nzNodes]=\"$any(data)\"\n    [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n    [nzDisplayWith]=\"i.displayWith!\"\n    [ngModel]=\"value\"\n    [nzVirtualHeight]=\"ui.virtualHeight!\"\n    [nzVirtualItemSize]=\"ui.virtualItemSize || 28\"\n    [nzVirtualMaxBufferPx]=\"ui.virtualMaxBufferPx || 500\"\n    [nzVirtualMinBufferPx]=\"ui.virtualMinBufferPx || 28\"\n    (ngModelChange)=\"change($event)\"\n    (nzExpandChange)=\"expandChange($event)\"\n  >\n  </nz-tree-select>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

class UploadWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.fileList = [];
        this.btnType = '';
        this.handleRemove = () => {
            this._setValue(this.fileList);
            return true;
        };
        this.handlePreview = (file) => {
            if (this.ui.preview) {
                this.ui.preview(file);
                return;
            }
            const _url = file.thumbUrl || file.url;
            if (!_url) {
                return;
            }
            this.injector.get(NzModalService).create({
                nzContent: `<img src="${_url}" class="img-fluid" />`,
                nzFooter: null,
            });
        };
    }
    ngOnInit() {
        const { type, text, hint, action, accept, limit, filter, fileSize, fileType, listType, multiple, name, showUploadList, withCredentials, resReName, urlReName, beforeUpload, customRequest, directory, openFileDialogOnClick, limitFileCount, } = this.ui;
        const res = {
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
            res.text = text || `单击或拖动文件到该区域上传`;
            res.hint = hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
        }
        this.i = res;
    }
    change(args) {
        if (this.ui.change)
            this.ui.change(args);
        if (args.type !== 'success')
            return;
        this._setValue(args.fileList);
    }
    reset(value) {
        const { fileList } = this.ui;
        (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe(list => {
            this.fileList = list;
            this.formProperty._value = this.pureValue(list);
            this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
            this.detectChanges();
        });
    }
    _getValue(file) {
        return deepGet(file.response, this.i.resReName, file.response);
    }
    pureValue(fileList) {
        fileList
            .filter(file => !file.url)
            .forEach(file => {
            file.url = deepGet(file.response, this.i.urlReName);
        });
        const res = fileList.filter(w => w.status === 'done').map(file => this._getValue(file));
        return this.i.multiple === true ? res : res.pop();
    }
    _setValue(fileList) {
        this.setValue(this.pureValue(fileList));
    }
}
UploadWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-upload',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-upload\n    [nzType]=\"i.type\"\n    [(nzFileList)]=\"fileList\"\n    [nzDisabled]=\"disabled\"\n    [nzAction]=\"i.action\"\n    [nzDirectory]=\"i.directory\"\n    [nzOpenFileDialogOnClick]=\"i.openFileDialogOnClick\"\n    [nzAccept]=\"i.accept\"\n    [nzLimit]=\"i.limit\"\n    [nzFilter]=\"i.filter\"\n    [nzSize]=\"i.size\"\n    [nzFileType]=\"i.fileType\"\n    [nzHeaders]=\"ui.headers\"\n    [nzData]=\"ui.data\"\n    [nzListType]=\"i.listType\"\n    [nzMultiple]=\"i.multiple\"\n    [nzName]=\"i.name\"\n    [nzShowUploadList]=\"i.showUploadList\"\n    [nzWithCredentials]=\"i.withCredentials\"\n    [nzBeforeUpload]=\"i.beforeUpload\"\n    [nzCustomRequest]=\"i.customRequest\"\n    [nzRemove]=\"ui.remove || handleRemove\"\n    [nzPreview]=\"handlePreview\"\n    [nzPreviewFile]=\"ui.previewFile\"\n    [nzDownload]=\"ui.download\"\n    [nzTransformFile]=\"ui.transformFile\"\n    (nzChange)=\"change($event)\"\n    [nzShowButton]=\"fileList.length < i.limitFileCount\"\n  >\n    <ng-container [ngSwitch]=\"btnType\">\n      <ng-container *ngSwitchCase=\"'plus'\">\n        <i nz-icon nzType=\"plus\"></i>\n        <div class=\"ant-upload-text\" [innerHTML]=\"i.text\"></div>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'drag'\">\n        <p class=\"ant-upload-drag-icon\"><i nz-icon nzType=\"inbox\"></i></p>\n        <p class=\"ant-upload-text\" [innerHTML]=\"i.text\"></p>\n        <p class=\"ant-upload-hint\" [innerHTML]=\"i.hint\"></p>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button type=\"button\" nz-button><i nz-icon nzType=\"upload\"></i><span [innerHTML]=\"i.text\"></span></button>\n      </ng-container>\n    </ng-container>\n  </nz-upload>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];

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

const ZORROS = [
    NzAutocompleteModule,
    NzButtonModule,
    NzCardModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzModalModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSliderModule,
    NzSwitchModule,
    NzTagModule,
    NzTimePickerModule,
    NzToolTipModule,
    NzTransferModule,
    NzTreeSelectModule,
    NzUploadModule,
];
const COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];
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
// #endregion
class DelonFormModule {
    static forRoot() {
        return {
            ngModule: DelonFormModule,
            providers: [
                {
                    provide: SchemaValidatorFactory,
                    useClass: AjvSchemaValidatorFactory,
                    deps: [AlainConfigService, NgZone],
                },
                { provide: WidgetRegistry, useClass: NzWidgetRegistry },
            ],
        };
    }
}
DelonFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
                declarations: [...COMPONENTS, ...WIDGETS],
                exports: COMPONENTS,
                entryComponents: WIDGETS,
            },] }
];

const ERRORSDEFAULT = {
    'false schema': `布尔模式出错`,
    $ref: `无法找到引用{ref}`,
    additionalItems: `不允许超过{ref}`,
    additionalProperties: `不允许有额外的属性`,
    anyOf: `数据应为 anyOf 所指定的其中一个`,
    dependencies: `应当拥有属性{property}的依赖属性{deps}`,
    enum: `应当是预设定的枚举值之一`,
    format: `格式不正确`,
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
 * Generated bundle index. Do not edit.
 */

export { AjvSchemaValidatorFactory, ArrayLayoutWidget, ArrayProperty, ArrayWidget, AtomicProperty, AutoCompleteWidget, BooleanProperty, BooleanWidget, CascaderWidget, CheckboxWidget, ControlUIWidget, ControlWidget, CustomWidget, DateWidget, DelonFormModule, ERRORSDEFAULT, FormProperty, FormPropertyFactory, MentionWidget, NumberProperty, NumberWidget, NzWidgetRegistry, ObjectLayoutWidget, ObjectProperty, ObjectWidget, PropertyGroup, RadioWidget, RateWidget, SFComponent, SFFixedDirective, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SF_DEFAULT_CONFIG, SchemaValidatorFactory, SelectWidget, SliderWidget, StringProperty, StringWidget, TagWidget, TextWidget, TextareaWidget, TimeWidget, TransferWidget, TreeSelectWidget, UploadWidget, Widget, WidgetFactory, WidgetRegistry, di, getCopyEnum, getData, getEnum, isBlank, isDateFns, mergeConfig, orderProperties, resolveIfSchema, retrieveSchema, toBool, useFactory, TerminatorService as ɵa };
//# sourceMappingURL=form.js.map
