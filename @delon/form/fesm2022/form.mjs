import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { NgZone, Injectable, Inject, ViewContainerRef, Component, ViewEncapsulation, Input, ViewChild, Directive, EventEmitter, Injector, ChangeDetectionStrategy, Optional, Output, ChangeDetectorRef, HostBinding, ElementRef, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, of, BehaviorSubject, Observable, take, combineLatest, distinctUntilChanged, Subject, merge, filter, takeUntil, debounceTime, switchMap, catchError } from 'rxjs';
import * as i4 from '@delon/theme';
import { ALAIN_I18N_TOKEN, DelonLocaleModule } from '@delon/theme';
import * as i6 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import { toBoolean, InputNumber, InputBoolean } from '@delon/util/decorator';
import { deepCopy } from '@delon/util/other';
import * as i1$1 from 'ng-zorro-antd/core/form';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { REGEX } from '@delon/util/format';
import * as i3 from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import * as i5 from '@delon/acl';
import * as i7 from '@angular/cdk/platform';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i10 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i3$1 from 'ng-zorro-antd/core/transition-patch';
import * as i12 from 'ng-zorro-antd/core/wave';
import * as i4$1 from 'ng-zorro-antd/grid';
import { NzGridModule } from 'ng-zorro-antd/grid';
import * as i14 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i6$1 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import * as i7$1 from 'ng-zorro-antd/tooltip';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i5$1 from 'ng-zorro-antd/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import * as i4$2 from 'ng-zorro-antd/checkbox';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import * as i3$2 from 'ng-zorro-antd/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import * as i4$3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i3$3 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as i3$4 from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import * as i5$2 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i2$1 from 'ng-zorro-antd/switch';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { format } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import { ArrayService } from '@delon/util/array';

const SF_DEFAULT_CONFIG = {
    formatMap: {
        'date-time': {
            widget: 'date',
            showTime: true,
            format: `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`
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
        '': { widget: 'string' }
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
    delay: false
};
function mergeConfig(srv) {
    return srv.merge('sf', SF_DEFAULT_CONFIG);
}

const SF_SEQ = '/';

function isBlank(o) {
    return o == null;
}
function toBool(value, defaultValue) {
    return toBoolean(value, defaultValue);
}
function di(ui, ...args) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (ui.debug) {
            console.warn(...args);
        }
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
        const { $ref, ...localSchema } = schema;
        return retrieveSchema({ ...$refSchema, ...localSchema }, definitions);
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
    constructor(injector, schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
        this.injector = injector;
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
            debug: ui.debug
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
    cd(onlySelf = false) {
        this.widget?.detectChanges(onlySelf);
    }
    /**
     * 更新值且校验数据
     */
    updateValueAndValidity(options) {
        options = {
            onlySelf: false,
            emitValidator: true,
            emitValueEvent: true,
            updatePath: '',
            updateValue: null,
            ...options
        };
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
            this.parent.updateValueAndValidity({ ...options, emitValidator: false });
        }
    }
    /** 根据路径搜索表单属性 */
    searchProperty(path) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let prop = this;
        let base = null;
        let result = null;
        if (path[0] === SF_SEQ) {
            base = this.findRoot();
            result = base.getProperty(path.substring(1));
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
        // eslint-disable-next-line @typescript-eslint/no-this-alias
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
                return `${value}`.length === 0;
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
                    this.cd(false);
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
        const hasCustomError = Array.isArray(list) && list.length > 0;
        if (hasCustomError) {
            list.forEach(err => {
                if (!err.message) {
                    throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
                }
                err.keyword = null;
            });
        }
        this._errors = hasCustomError ? errors.concat(...list) : errors;
        this.setErrors(this._errors);
    }
    /**
     * Set the current error message
     *
     * 设置当前错误消息
     *
     * @param emitFormat 若提供的消息带有 `{xx}` 会自动根据参数进行转化，包含自定义函数
     *
     * @example
     *
     * this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
     * this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
     * this.sf.getProperty('/name')?.setErrors(); // Clean error
     */
    setErrors(errors = [], emitFormat = true) {
        let arrErrs = Array.isArray(errors) ? errors : [errors];
        if (emitFormat && arrErrs && !this.ui.onlyVisual) {
            const l = (this.widget && this.widget.l.error) || {};
            arrErrs = arrErrs.map((err) => {
                let message = err.keyword == null && err.message
                    ? err.message
                    : (this.ui.errors || {})[err.keyword] || this._options.errors[err.keyword] || l[err.keyword] || ``;
                if (message && typeof message === 'function') {
                    message = message(err);
                }
                if (message) {
                    if (~message.indexOf('{') && err.params) {
                        message = message.replace(/{([\.a-zA-Z0-9]+)}/g, (_v, key) => err.params[key] || '');
                    }
                    err.message = message;
                }
                return err;
            });
        }
        this._errors = arrErrs;
        this._errorsChanges.next(arrErrs);
        // Should send errors to parent field
        if (this._parent) {
            this._parent.setParentAndPlatErrors(arrErrs, this.path);
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
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 渲染时需要重新触发 reset
        if (visible) {
            this.injector
                .get(NgZone)
                .onStable.pipe(take(1))
                .subscribe(() => {
                this.resetValue(this.value, true);
            });
        }
        return this;
    }
    _bindVisibility() {
        const visibleIf = this.ui.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf != null) {
            const propertiesBinding = [];
            for (const dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    const property = this.searchProperty(dependencyPath);
                    if (property) {
                        const valueCheck = property.valueChanges.pipe(map(res => {
                            const vi = visibleIf[dependencyPath];
                            if (typeof vi === 'function') {
                                const viFnRes = vi(res.value, property);
                                // 同步更新 required
                                if (typeof viFnRes === 'object') {
                                    const fixViFnRes = { show: false, required: false, ...viFnRes };
                                    const parentRequired = this.parent?.schema.required;
                                    if (parentRequired && this.propertyId) {
                                        const idx = parentRequired.findIndex(w => w === this.propertyId);
                                        if (fixViFnRes.required) {
                                            if (idx === -1)
                                                parentRequired.push(this.propertyId);
                                        }
                                        else {
                                            if (idx !== -1)
                                                parentRequired.splice(idx, 1);
                                        }
                                        this.ui._required = fixViFnRes.required;
                                    }
                                    return fixViFnRes.show;
                                }
                                return viFnRes;
                            }
                            if (vi.indexOf('$ANY$') !== -1) {
                                return res.value && res.value.length > 0;
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
                        if (typeof ngDevMode === 'undefined' || ngDevMode) {
                            console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
                        }
                    }
                }
            }
            combineLatest(propertiesBinding)
                .pipe(map(values => (this.ui.visibleIfLogical === 'and' ? values.every(v => v) : values.some(v => v))), distinctUntilChanged())
                .subscribe(visible => this.setVisible(visible));
        }
    }
    // #endregion
    updateFeedback(status = '') {
        this.ui.feedback = status;
        this.widget?.injector.get(NzFormStatusService).formStatusChanges.next({ status, hasFeedback: !!status });
        this.cd(true);
    }
}
class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    getProperty(path) {
        const subPathIdx = path.indexOf(SF_SEQ);
        const propertyId = subPathIdx !== -1 ? path.substring(0, subPathIdx) : path;
        let property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            const subPath = path.substring(subPathIdx + 1);
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
    get propertiesId() {
        return this._propertiesId;
    }
    constructor(injector, formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(injector, schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this._propertiesId = [];
        this.createProperties();
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
            this.properties[propertyId] = this.formPropertyFactory.createProperty(this.schema.properties[propertyId], this.ui[`$${propertyId}`], (this.formData || {})[propertyId], this, propertyId);
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
        this.cd(onlySelf);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        value = value || this.schema.default || {};
        const properties = this.properties;
        for (const propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                properties[propertyId].resetValue(value[propertyId], true);
            }
        }
        this.cd(onlySelf);
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
    constructor(injector, formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(injector, schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this.properties = [];
    }
    getProperty(path) {
        const subPathIdx = path.indexOf(SF_SEQ);
        const pos = +(subPathIdx !== -1 ? path.substring(0, subPathIdx) : path);
        const list = this.properties;
        if (isNaN(pos) || pos >= list.length) {
            return undefined;
        }
        const subPath = path.substring(subPathIdx + 1);
        return list[pos].getProperty(subPath);
    }
    setValue(value, onlySelf) {
        this.properties = [];
        this.clearErrors();
        this.resetProperties(value);
        this.cd(onlySelf);
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
            if (property.visible) {
                value.push({ ...(this.widget?.cleanValue ? null : property.formData), ...property.value });
            }
        });
        this._value = value;
    }
    addProperty(formData) {
        const newProperty = this.formPropertyFactory.createProperty(deepCopy(this.schema.items), deepCopy(this.ui.$items), formData, this);
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
        this.cd(onlySelf);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        if (value == null) {
            value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
        }
        this._value = value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
        if (this.widget) {
            this.widget.reset(value);
            this.cd(onlySelf);
        }
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
        this.cd(onlySelf);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class StringProperty extends AtomicProperty {
    fallbackValue() {
        return null;
    }
    setValue(value, onlySelf) {
        this._value = value == null ? '' : value;
        this.cd(onlySelf);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class FormPropertyFactory {
    constructor(injector, schemaValidatorFactory, cogSrv) {
        this.injector = injector;
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
                    throw new Error(`Instanciation of a FormProperty with an unknown parent type: ${parent.type}`);
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
            if ((propertyId && parent.schema.required.indexOf(propertyId.split(SF_SEQ).pop()) !== -1) ||
                ui.showRequired === true) {
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
                    newProperty = new NumberProperty(this.injector, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'string':
                    newProperty = new StringProperty(this.injector, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'boolean':
                    newProperty = new BooleanProperty(this.injector, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'object':
                    newProperty = new ObjectProperty(this.injector, this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'array':
                    newProperty = new ArrayProperty(this.injector, this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                default:
                    throw new TypeError(`Undefined type ${schema.type}`);
            }
        }
        newProperty.propertyId = propertyId;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaValidatorFactory }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
            type: Injectable
        }] });
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
            this.ajv = new Ajv({
                allErrors: true,
                loopEnum: 50,
                ...customOptions,
                formats: {
                    'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/,
                    color: REGEX.color,
                    mobile: REGEX.mobile,
                    'id-card': REGEX.idCard,
                    ...customOptions.formats
                }
            });
            addFormats(this.ajv);
        });
    }
    createValidatorFn(schema, extraOptions) {
        const ingoreKeywords = [
            ...this.options.ingoreKeywords,
            ...(extraOptions.ingoreKeywords || [])
        ];
        return (value) => {
            try {
                this.ngZone.runOutsideAngular(() => this.ajv.validate(schema, value));
            }
            catch (e) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    // swallow errors thrown in ajv due to invalid schemas, these
                    // still get displayed
                    if (extraOptions.debug) {
                        console.warn(e);
                    }
                }
            }
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
            }
            return errors;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [{ token: AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AjvSchemaValidatorFactory }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i6.AlainConfigService, decorators: [{
                    type: Inject,
                    args: [AlainConfigService]
                }] }, { type: i0.NgZone }]; } });

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
    constructor(registry) {
        this.registry = registry;
    }
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`No widget for type "${type}"`);
            }
        }
        const componentClass = this.registry.getType(type);
        return container.createComponent(componentClass);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WidgetFactory, deps: [{ token: WidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WidgetFactory }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: WidgetFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: WidgetRegistry }]; } });

let nextUniqueId = 0;
class SFItemComponent {
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.destroy$ = new Subject();
        this.widget = null;
        this.footer = null;
    }
    onWidgetInstanciated(widget) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;
        const ui = this.formProperty.ui;
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
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
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
        this.ref.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFItemComponent, deps: [{ token: WidgetFactory }, { token: TerminatorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SFItemComponent, selector: "sf-item", inputs: { formProperty: "formProperty", footer: "footer" }, host: { properties: { "class.sf__item": "true" } }, providers: [NzFormStatusService], viewQueries: [{ propertyName: "container", first: true, predicate: ["target"], descendants: true, read: ViewContainerRef, static: true }], exportAs: ["sfItem"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer" />
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-item',
                    exportAs: 'sfItem',
                    host: { '[class.sf__item]': 'true' },
                    template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer" />
  `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzFormStatusService]
                }]
        }], ctorParameters: function () { return [{ type: WidgetFactory }, { type: TerminatorService }]; }, propDecorators: { formProperty: [{
                type: Input
            }], footer: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['target', { read: ViewContainerRef, static: true }]
            }] } });

class SFFixedDirective {
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        const el = this.el.nativeElement;
        const widgetEl = el.querySelector('.ant-row') || el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
        const unit = `${this.num}px`;
        if (labelEl) {
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
            this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
        }
        else {
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this._inited = false;
    }
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFFixedDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SFFixedDirective, selector: "[fixed-label]", inputs: { num: ["fixed-label", "num"] }, usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    InputNumber()
], SFFixedDirective.prototype, "num", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFFixedDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[fixed-label]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { num: [{
                type: Input,
                args: ['fixed-label']
            }] } });

function useFactory(injector, schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(injector, schemaValidatorFactory, cogSrv);
}
class SFComponent {
    get btnGrid() {
        return this._btn.render.grid;
    }
    /**
     * Form default mode, will force override `layout`, `firstVisual`, `liveValidate` parameters
     *
     * 表单预设模式，会强制覆盖 `layout`，`firstVisual`，`liveValidate` 参数
     */
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
        return this.rootProperty?.searchProperty(path);
    }
    /**
     * Get element value based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素值
     */
    getValue(path) {
        return this.getProperty(path)?.value;
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
    /**
     * Update the feedback status of the widget
     *
     * 更新小部件的反馈状态
     *
     * ```ts
     * // Validate status of the widget
     * this.sf.updateFeedback('/name', 'validating');
     * // Clean validate status of the widget
     * this.sf.updateFeedback('/name');
     * ```
     */
    updateFeedback(path, status = '') {
        this.getProperty(path)?.updateFeedback(status);
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
    constructor(formPropertyFactory, terminator, dom, cdr, localeSrv, aclSrv, i18nSrv, cogSrv, platform) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.dom = dom;
        this.cdr = cdr;
        this.localeSrv = localeSrv;
        this.aclSrv = aclSrv;
        this.i18nSrv = i18nSrv;
        this.platform = platform;
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
        /**
         * Whether to display error visuals immediately
         *
         * 是否立即显示错误视觉
         */
        this.firstVisual = true;
        /**
         * Whether to only display error visuals but not error text
         *
         * 是否只展示错误视觉不显示错误文本
         */
        this.onlyVisual = false;
        this.compact = false;
        /**
         * Whether to load status，when `true` reset button is disabled status, submit button is loading status
         */
        this.loading = false;
        this.disabled = false;
        this.noColon = false;
        this.cleanValue = false;
        this.delay = false;
        this.formValueChange = new EventEmitter();
        this.formChange = new EventEmitter();
        this.formSubmit = new EventEmitter();
        this.formReset = new EventEmitter();
        this.formError = new EventEmitter();
        this.options = mergeConfig(cogSrv);
        this.liveValidate = this.options.liveValidate;
        this.firstVisual = this.options.firstVisual;
        this.autocomplete = this.options.autocomplete;
        this.delay = this.options.delay;
        this.localeSrv.change.pipe(takeUntilDestroyed()).subscribe(() => {
            this.locale = this.localeSrv.getData('sf');
            if (this._inited) {
                this.validator({ emitError: false, onlyRoot: false });
                this.coverButtonProperty();
                this.cdr.markForCheck();
            }
        });
        const refSchemas = [
            this.aclSrv ? this.aclSrv.change : null,
            this.i18nSrv ? this.i18nSrv.change : null
        ].filter(o => o != null);
        if (refSchemas.length > 0) {
            merge(...refSchemas)
                .pipe(filter(() => this._inited), takeUntilDestroyed())
                .subscribe(() => this.refreshSchema());
        }
    }
    fanyi(key) {
        return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
    }
    inheritUI(ui) {
        ['optionalHelp'].filter(key => !!this._defUi[key]).forEach(key => (ui[key] = { ...this._defUi[key], ...ui[key] }));
    }
    coverProperty() {
        const isHorizontal = this.layout === 'horizontal';
        const _schema = deepCopy(this.schema);
        const { definitions } = _schema;
        const inFn = (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) => {
            if (!Array.isArray(schema.required))
                schema.required = [];
            Object.keys(schema.properties).forEach(key => {
                const uiKeyPrefix = '$';
                const uiKey = uiKeyPrefix + key;
                const property = retrieveSchema(schema.properties[key], definitions);
                const curUi = {
                    ...property.ui,
                    ...uiSchema[uiKey]
                };
                const ui = {
                    ...this._defUi,
                    ...parentUiSchema,
                    // 忽略部分会引起呈现的属性
                    visibleIf: undefined,
                    hidden: undefined,
                    optional: undefined,
                    optionalHelp: undefined,
                    widget: property.type,
                    ...(property.format && this.options.formatMap[property.format]),
                    ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
                    ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                        ? { widget: 'select' }
                        : null),
                    ...curUi
                };
                Object.keys(ui)
                    .filter(key => key.startsWith(uiKeyPrefix))
                    .forEach(key => delete ui[key]);
                // 继承父节点布局属性
                if (isHorizontal) {
                    if (parentUiSchema.spanLabelFixed) {
                        if (!curUi.spanLabelFixed) {
                            ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
                        }
                    }
                    else {
                        if (!ui.spanLabel)
                            ui.spanLabel = typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
                        if (!ui.spanControl)
                            ui.spanControl = typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
                        if (!ui.offsetControl)
                            ui.offsetControl =
                                typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
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
                        dateEndProperty.ui = {
                            ...dateEndProperty.ui,
                            widget: ui.widget,
                            hidden: true
                        };
                    }
                    else {
                        ui.end = null;
                    }
                }
                this.inheritUI(ui);
                if (ui.optionalHelp) {
                    if (typeof ui.optionalHelp === 'string') {
                        ui.optionalHelp = {
                            text: ui.optionalHelp
                        };
                    }
                    const oh = (ui.optionalHelp = {
                        text: '',
                        icon: 'question-circle',
                        placement: 'top',
                        trigger: 'hover',
                        mouseEnterDelay: 0.15,
                        mouseLeaveDelay: 0.1,
                        ...ui.optionalHelp
                    });
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
                    ui._description = this.dom.bypassSecurityTrustHtml(property.description);
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
                    ui.$items = {
                        ...property.items.ui,
                        ...uiSchema[uiKey],
                        ...ui.$items
                    };
                    inFn(property.items, property.items, uiSchema[uiKey]?.$items ?? {}, ui.$items, ui.$items);
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
                }
            });
        };
        if (this.ui == null)
            this.ui = {};
        this._defUi = {
            onlyVisual: this.options.onlyVisual,
            size: this.options.size,
            liveValidate: this.liveValidate,
            ...this.options.ui,
            ..._schema.ui,
            ...this.ui['*']
        };
        if (this.onlyVisual === true) {
            this._defUi.onlyVisual = true;
        }
        // 内联强制清理 `grid` 参数
        if (this.layout === 'inline') {
            delete this._defUi.grid;
        }
        // root
        this._ui = { ...this._defUi };
        inFn(_schema, _schema, this.ui, this.ui, this._ui);
        // cond
        resolveIfSchema(_schema, this._ui);
        this._schema = _schema;
        delete _schema.ui;
        di(this._ui, 'cover schema & ui', this._ui, _schema);
    }
    coverButtonProperty() {
        this._btn = {
            render: { size: 'default' },
            ...this.locale,
            ...this.options.button,
            ...this.button
        };
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        const btnRender = this._btn.render;
        if (this.layout === 'horizontal') {
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
            if (!btnRender.grid) {
                btnRender.grid = {
                    offset: btnUi.spanLabel,
                    span: btnUi.spanControl
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
        const ingoreRender = ['disabled', 'loading'];
        if (Object.keys(changes).every(key => ingoreRender.includes(key))) {
            this.cdr.detectChanges();
            return;
        }
        if (!this.delay) {
            this.refreshSchema();
        }
    }
    /** @internal */
    _addTpl(path, templateRef) {
        if (!this._inited) {
            return;
        }
        if (this._renders.has(path)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`Duplicate definition "${path}" custom widget`);
            }
            return;
        }
        this._renders.set(path, templateRef);
        this.attachCustomRender();
    }
    attachCustomRender() {
        this._renders.forEach((tpl, path) => {
            const property = this.rootProperty?.searchProperty(path);
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
        if (this.rootProperty == null || !this.platform.isBrowser) {
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
        this._formData = { ...this.formData };
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
            this._item = { ...(this.cleanValue ? null : this.formData), ...res.value };
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
     *
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    reset(emit = false) {
        if (this.rootProperty == null || !this.platform.isBrowser) {
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFComponent, deps: [{ token: FormPropertyFactory }, { token: TerminatorService }, { token: i3.DomSanitizer }, { token: i0.ChangeDetectorRef }, { token: i4.DelonLocaleService }, { token: i5.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i6.AlainConfigService }, { token: i7.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SFComponent, selector: "sf, [sf]", inputs: { layout: "layout", schema: "schema", ui: "ui", formData: "formData", button: "button", liveValidate: "liveValidate", autocomplete: "autocomplete", firstVisual: "firstVisual", onlyVisual: "onlyVisual", compact: "compact", mode: "mode", loading: "loading", disabled: "disabled", noColon: "noColon", cleanValue: "cleanValue", delay: "delay" }, outputs: { formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf": "true", "class.sf__inline": "layout === 'inline'", "class.sf__horizontal": "layout === 'horizontal'", "class.sf__search": "mode === 'search'", "class.sf__edit": "mode === 'edit'", "class.sf__no-error": "onlyVisual", "class.sf__no-colon": "noColon", "class.sf__compact": "compact" } }, providers: [
            WidgetFactory,
            {
                provide: FormPropertyFactory,
                useFactory,
                deps: [Injector, SchemaValidatorFactory, AlainConfigService]
            },
            TerminatorService
        ], exportAs: ["sf"], usesOnChanges: true, ngImport: i0, template: "<ng-template #con>\n  <ng-content />\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\" />\n</form>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i10.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i12.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i4$1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4$1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i14.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon", "nzLabelAlign", "nzLabelWrap"], exportAs: ["nzForm"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], SFComponent.prototype, "liveValidate", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "firstVisual", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "onlyVisual", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "compact", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "noColon", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "cleanValue", void 0);
__decorate([
    InputBoolean()
], SFComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf, [sf]', exportAs: 'sf', providers: [
                        WidgetFactory,
                        {
                            provide: FormPropertyFactory,
                            useFactory,
                            deps: [Injector, SchemaValidatorFactory, AlainConfigService]
                        },
                        TerminatorService
                    ], host: {
                        '[class.sf]': 'true',
                        '[class.sf__inline]': `layout === 'inline'`,
                        '[class.sf__horizontal]': `layout === 'horizontal'`,
                        '[class.sf__search]': `mode === 'search'`,
                        '[class.sf__edit]': `mode === 'edit'`,
                        '[class.sf__no-error]': `onlyVisual`,
                        '[class.sf__no-colon]': `noColon`,
                        '[class.sf__compact]': `compact`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #con>\n  <ng-content />\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\" />\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: FormPropertyFactory }, { type: TerminatorService }, { type: i3.DomSanitizer }, { type: i0.ChangeDetectorRef }, { type: i4.DelonLocaleService }, { type: i5.ACLService, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i6.AlainConfigService }, { type: i7.Platform }]; }, propDecorators: { layout: [{
                type: Input
            }], schema: [{
                type: Input
            }], ui: [{
                type: Input
            }], formData: [{
                type: Input
            }], button: [{
                type: Input
            }], liveValidate: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], firstVisual: [{
                type: Input
            }], onlyVisual: [{
                type: Input
            }], compact: [{
                type: Input
            }], mode: [{
                type: Input
            }], loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], noColon: [{
                type: Input
            }], cleanValue: [{
                type: Input
            }], delay: [{
                type: Input
            }], formValueChange: [{
                type: Output
            }], formChange: [{
                type: Output
            }], formSubmit: [{
                type: Output
            }], formReset: [{
                type: Output
            }], formError: [{
                type: Output
            }] } });

class SFItemWrapComponent {
    set showTitle(val) {
        this._showTitle = !!val;
    }
    get t() {
        return this.title === null ? this.schema.title : this.title;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
    constructor(statusSrv) {
        this.statusSrv = statusSrv;
        this._showTitle = false;
        this.title = null;
    }
    ngOnChanges() {
        const hasError = !!this.error;
        this.statusSrv.formStatusChanges.next({ status: hasError ? 'error' : '', hasFeedback: !!this.ui.feedback });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFItemWrapComponent, deps: [{ token: i1$1.NzFormStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, usesOnChanges: true, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4$1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4$1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', animations: [helpMotion], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n" }]
        }], ctorParameters: function () { return [{ type: i1$1.NzFormStatusService }]; }, propDecorators: { id: [{
                type: Input
            }], schema: [{
                type: Input
            }], ui: [{
                type: Input
            }], showError: [{
                type: Input
            }], error: [{
                type: Input
            }], showTitle: [{
                type: Input
            }], title: [{
                type: Input
            }] } });

class SFTemplateDirective {
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    ngOnInit() {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFTemplateDirective, deps: [{ token: i0.TemplateRef }, { token: SFComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SFTemplateDirective, selector: "[sf-template]", inputs: { path: ["sf-template", "path"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SFTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sf-template]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: SFComponent }]; }, propDecorators: { path: [{
                type: Input,
                args: ['sf-template']
            }] } });

class Widget {
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
        return this.sfComp?.cleanValue;
    }
    constructor(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
    }
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil(this.sfItemComp.destroy$))
            .subscribe((errors) => {
            if (errors == null)
                return;
            di(this.ui, 'errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            const firstVisual = this.sfComp?.firstVisual;
            if (firstVisual || (!firstVisual && this.sfComp?._inited)) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                this.cd.detectChanges();
            }
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
            this.formProperty.root.widget?.cd.markForCheck();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Widget, deps: [{ token: ChangeDetectorRef }, { token: Injector }, { token: SFItemComponent }, { token: SFComponent }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: Widget, host: { properties: { "class": "this.cls" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Widget, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: SFItemComponent, decorators: [{
                    type: Inject,
                    args: [SFItemComponent]
                }] }, { type: SFComponent, decorators: [{
                    type: Inject,
                    args: [SFComponent]
                }] }]; }, propDecorators: { cls: [{
                type: HostBinding,
                args: ['class']
            }] } });
class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ControlWidget, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlWidget, decorators: [{
            type: Directive
        }] });
class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlUIWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ControlUIWidget, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlUIWidget, decorators: [{
            type: Directive
        }] });
class ArrayLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ArrayLayoutWidget, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutWidget, decorators: [{
            type: Directive
        }] });
class ObjectLayoutWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp.destroy$)).subscribe(() => this.cd.detectChanges());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ObjectLayoutWidget, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectLayoutWidget, decorators: [{
            type: Directive
        }] });

class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    get addDisabled() {
        return (this.disabled ||
            (this.schema.maxItems != null && this.formProperty.properties.length >= this.schema.maxItems));
    }
    get showRemove() {
        if (this.disabled || !this.removeTitle)
            return false;
        if (this.schema.minItems != null &&
            this.formProperty.properties.length <= this.schema.minItems)
            return false;
        return true;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\" />\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i10.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i12.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i5$1.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i4$1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4$1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-array', host: { '[class.sf__array]': 'true' }, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\" />\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n" }]
        }] });

class BooleanWidget extends ControlUIWidget {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BooleanWidget, selector: "sf-boolean", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzCheckedChildren]=\"ui.checkedChildren!\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren!\"\n    [nzLoading]=\"ui.loading\"\n  />\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$1.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-boolean', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzCheckedChildren]=\"ui.checkedChildren!\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren!\"\n    [nzLoading]=\"ui.loading\"\n  />\n</sf-item-wrap>\n" }]
        }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxWidget, selector: "sf-checkbox", usesInheritance: true, ngImport: i0, template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n  >\n    {{ ui.checkAllText || l.checkAllText }}\n  </label>\n</ng-template>\n<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"true\"\n  [title]=\"labelTitle\"\n>\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\" />\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\" />\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\" />\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{ i.label }}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i4$2.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i4$2.NzCheckboxGroupComponent, selector: "nz-checkbox-group", inputs: ["nzDisabled"], exportAs: ["nzCheckboxGroup"] }, { kind: "component", type: i4$2.NzCheckboxWrapperComponent, selector: "nz-checkbox-wrapper", outputs: ["nzOnChange"], exportAs: ["nzCheckboxWrapper"] }, { kind: "directive", type: i4$1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4$1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-checkbox', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n  >\n    {{ ui.checkAllText || l.checkAllText }}\n  </label>\n</ng-template>\n<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"true\"\n  [title]=\"labelTitle\"\n>\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\" />\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\" />\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\" />\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{ i.label }}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });

class CustomWidget extends ControlUIWidget {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CustomWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CustomWidget, selector: "sf-custom", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <ng-template
        [ngTemplateOutlet]="$any(ui)._render"
        [ngTemplateOutletContext]="{ $implicit: this, schema: schema, ui: ui }"
      ></ng-template>
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CustomWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-custom',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <ng-template
        [ngTemplateOutlet]="$any(ui)._render"
        [ngTemplateOutletContext]="{ $implicit: this, schema: schema, ui: ui }"
      ></ng-template>
    </sf-item-wrap>
  `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

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
            showToday: toBool(showToday, true)
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
                defaultValue: null
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DateWidget, selector: "sf-date", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    />\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzSeparator]=\"ui.separator\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$2.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i3$2.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i3$2.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i3$2.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i3$2.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-date', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-container [ngSwitch]=\"mode\">\n    <nz-year-picker\n      *ngSwitchCase=\"'year'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-month-picker\n      *ngSwitchCase=\"'month'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n    />\n\n    <nz-week-picker\n      *ngSwitchCase=\"'week'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n    />\n\n    <nz-range-picker\n      *ngSwitchCase=\"'range'\"\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzRanges]=\"ui.ranges\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzSeparator]=\"ui.separator\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzMode]=\"ui.rangeMode\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n\n    <nz-date-picker\n      *ngSwitchDefault\n      [nzId]=\"id\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzFormat]=\"displayFormat\"\n      [(ngModel)]=\"displayValue\"\n      (ngModelChange)=\"_change($event)\"\n      [nzAllowClear]=\"i.allowClear\"\n      [ngClass]=\"ui.className!\"\n      [nzDisabledDate]=\"ui.disabledDate\"\n      [nzLocale]=\"ui.locale!\"\n      [nzPlaceHolder]=\"ui.placeholder!\"\n      [nzPopupStyle]=\"ui.popupStyle!\"\n      [nzDropdownClassName]=\"ui.dropdownClassName\"\n      (nzOnOpenChange)=\"_openChange($event)\"\n      [nzDisabledTime]=\"ui.disabledTime\"\n      [nzRenderExtraFooter]=\"ui.renderExtraFooter\"\n      [nzShowTime]=\"ui.showTime\"\n      [nzShowToday]=\"i.showToday\"\n      [nzShowWeekNumber]=\"ui.showWeekNumber || false\"\n      [nzInputReadOnly]=\"ui.inputReadOnly\"\n      [nzInline]=\"ui.inline!\"\n      (nzOnOk)=\"_ok($event)\"\n    />\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });

class NumberWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.formatter = value => value;
        this.parser = value => value;
        this.width = '';
    }
    ngOnInit() {
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
        this.step = multipleOf || 1;
        if (typeof minimum !== 'undefined') {
            this.min = exclusiveMinimum ? minimum + this.step : minimum;
        }
        if (typeof maximum !== 'undefined') {
            this.max = exclusiveMaximum ? maximum - this.step : maximum;
        }
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
        this.width = typeof ui.widgetWidth === 'number' ? `${ui.widgetWidth}px` : ui.widgetWidth ?? '90px';
    }
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
        if (this.ui.change)
            this.ui.change(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NumberWidget, selector: "sf-number", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width]=\"width\"\n    [ngClass]=\"{ 'ant-input-number__hide-step': ui.hideStep }\"\n  />\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$3.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-number', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width]=\"width\"\n    [ngClass]=\"{ 'ant-input-number__hide-step': ui.hideStep }\"\n  />\n</sf-item-wrap>\n" }]
        }] });

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
        this.type = type ?? 'default';
        if (this.type === 'card' ||
            (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
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
                show: property.ui.hidden === false
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ObjectWidget, selector: "sf-object", usesInheritance: true, ngImport: i0, template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\" />\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\" />\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle!\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{ title }}\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n</nz-card>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i5$1.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i4$1.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4$1.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-object', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\" />\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\" />\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle!\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{ title }}\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n</nz-card>\n" }]
        }] });

class RadioWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    reset(value) {
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioWidget, selector: "sf-radio", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group\n    [nzSize]=\"ui.size!\"\n    [nzName]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzButtonStyle]=\"ui.buttonStyle || 'outline'\"\n  >\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label\n        *ngFor=\"let option of data\"\n        nz-radio-button\n        [nzValue]=\"option.value\"\n        [nzDisabled]=\"disabled || option.disabled\"\n      >\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$4.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: i3$4.NzRadioButtonDirective, selector: "[nz-radio-button]" }, { kind: "component", type: i3$4.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-radio', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group\n    [nzSize]=\"ui.size!\"\n    [nzName]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzButtonStyle]=\"ui.buttonStyle || 'outline'\"\n  >\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label\n        *ngFor=\"let option of data\"\n        nz-radio-button\n        [nzValue]=\"option.value\"\n        [nzDisabled]=\"disabled || option.disabled\"\n      >\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n" }]
        }] });

class SelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.data = [];
        this.hasGroup = false;
        this.loading = false;
    }
    checkGroup(list) {
        this.hasGroup = (list || []).filter(w => w.group === true).length > 0;
    }
    ngOnInit() {
        const { autoClearSearchValue, borderless, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, showArrow } = this.ui;
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
            compareWith: compareWith || ((o1, o2) => o1 === o2)
        };
        const onSearch = this.ui.onSearch;
        if (onSearch) {
            this.search$
                .pipe(takeUntil(this.sfItemComp.destroy$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime || 300), switchMap(text => onSearch(text)), catchError(() => []))
                .subscribe(list => {
                this.data = list;
                this.checkGroup(list);
                this.loading = false;
                this.detectChanges();
            });
        }
    }
    reset(value) {
        const onSearch = this.ui.onSearch;
        getData(this.schema, this.ui, value).subscribe(list => {
            this._value = value;
            if (onSearch == null)
                this.data = list;
            this.checkGroup(list);
            this.detectChanges();
        });
        if (value && onSearch != null)
            this.search$.next(value);
    }
    change(values) {
        if (this.ui.change) {
            this.ui.change(values, this.getOrgData(values));
        }
        this.setValue(values == null ? undefined : values);
    }
    getOrgData(values) {
        const srv = this.injector.get(ArrayService);
        if (!Array.isArray(values)) {
            return srv.findTree(this.data, (item) => item.value === values);
        }
        return values.map(value => srv.findTree(this.data, (item) => item.value === value));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SelectWidget, selector: "sf-select", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      />\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        />\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i6$1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i5$2.NzOptionComponent, selector: "nz-option", inputs: ["nzTitle", "nzLabel", "nzValue", "nzKey", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i5$2.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i5$2.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-select', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-select\n    [nzId]=\"id\"\n    [nzDisabled]=\"disabled\"\n    [(ngModel)]=\"_value\"\n    (ngModelChange)=\"change($event)\"\n    [nzSize]=\"ui.size!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzDropdownClassName]=\"ui.dropdownClassName!\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzCustomTemplate]=\"ui.customTemplate!\"\n    [nzSuffixIcon]=\"ui.suffixIcon!\"\n    [nzRemoveIcon]=\"ui.removeIcon!\"\n    [nzClearIcon]=\"ui.clearIcon!\"\n    [nzMenuItemSelectedIcon]=\"ui.menuItemSelectedIcon!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder!\"\n    [nzDropdownRender]=\"ui.dropdownRender!\"\n    [nzAutoClearSearchValue]=\"i.autoClearSearchValue\"\n    [nzBorderless]=\"i.borderless\"\n    [nzAutoFocus]=\"i.autoFocus\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth!\"\n    [nzServerSearch]=\"i.serverSearch\"\n    [nzMaxMultipleCount]=\"i.maxMultipleCount!\"\n    [nzMode]=\"i.mode!\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowArrow]=\"i.showArrow!\"\n    [nzTokenSeparators]=\"i.tokenSeparators!\"\n    [nzMaxTagCount]=\"i.maxTagCount!\"\n    [compareWith]=\"i.compareWith!\"\n    [nzOptionHeightPx]=\"i.optionHeightPx!\"\n    [nzOptionOverflowSize]=\"i.optionOverflowSize!\"\n    (nzOpenChange)=\"openChange($event)\"\n    (nzOnSearch)=\"onSearch($event)\"\n    (nzScrollToBottom)=\"scrollToBottom()\"\n  >\n    <ng-container *ngIf=\"!loading && !hasGroup\">\n      <nz-option\n        *ngFor=\"let o of data\"\n        [nzLabel]=\"o.label\"\n        [nzValue]=\"o.value\"\n        [nzHide]=\"o.hide\"\n        [nzDisabled]=\"o.disabled\"\n      />\n    </ng-container>\n    <ng-container *ngIf=\"!loading && hasGroup\">\n      <nz-option-group *ngFor=\"let i of data\" [nzLabel]=\"i.label\">\n        <nz-option\n          *ngFor=\"let o of i.children\"\n          [nzLabel]=\"o.label\"\n          [nzValue]=\"o.value\"\n          [nzDisabled]=\"o.disabled\"\n          [nzHide]=\"o.hide\"\n        />\n      </nz-option-group>\n    </ng-container>\n    <nz-option *ngIf=\"loading\" nzDisabled nzCustomContent>\n      <i nz-icon nzType=\"loading\"></i>\n      {{ ui.searchLoadingText }}\n    </nz-option>\n  </nz-select>\n</sf-item-wrap>\n" }]
        }] });

class StringWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.change$ = null;
    }
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, autofocus } = this.ui;
        this.type = !!(addOnAfter ||
            addOnBefore ||
            addOnAfterIcon ||
            addOnBeforeIcon ||
            prefix ||
            prefixIcon ||
            suffix ||
            suffixIcon)
            ? 'addon'
            : '';
        if (autofocus === true) {
            setTimeout(() => {
                this.injector.get(ElementRef).nativeElement.querySelector(`#${this.id}`).focus();
            }, 20);
        }
        this.initChange();
    }
    reset(value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
        }
    }
    initChange() {
        const dueTime = this.ui.changeDebounceTime;
        const changeFn = this.ui.change;
        if (dueTime == null || dueTime <= 0 || changeFn == null)
            return;
        this.change$ = new BehaviorSubject(this.value);
        let obs = this.change$.asObservable().pipe(debounceTime(dueTime), takeUntil(this.sfItemComp.destroy$));
        if (this.ui.changeMap != null) {
            obs = obs.pipe(switchMap(this.ui.changeMap));
        }
        obs.subscribe(val => changeFn(val));
    }
    change(val) {
        this.setValue(val);
        if (this.change$ != null) {
            this.change$.next(val);
            return;
        }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StringWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: StringWidget, selector: "sf-string", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\" />\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4$3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i4$3.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzStatus", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }, { kind: "directive", type: i4$3.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StringWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-string', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\" />\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });

class TextWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.text = '';
    }
    ngOnInit() {
        this.ui._required = false;
        this.ui.html = toBool(this.ui.html, true);
    }
    reset(value) {
        this.text = value || this.ui.defaultText || '-';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextWidget, selector: "sf-text", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-text', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"schema.title\"\n  [class.sf__text-html]=\"ui.html\"\n>\n  <span *ngIf=\"ui.html\" [innerHTML]=\"text\"></span>\n  <span *ngIf=\"!ui.html\" [innerText]=\"text\"></span>\n</sf-item-wrap>\n" }]
        }] });

class TextareaWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    ngOnInit() {
        if (this.ui.autosize != null) {
            this.autosize = this.ui.autosize;
        }
        if (this.ui.computeCharacterCount == null) {
            this.ui.computeCharacterCount = v => v.length;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextareaWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextareaWidget, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <textarea\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\"\n      [nzBorderless]=\"ui.borderless\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    >\n    </textarea>\n  </ng-template>\n\n  <ng-container *ngIf=\"ui.maxCharacterCount; else ipt\">\n    <nz-textarea-count\n      [nzMaxCharacterCount]=\"ui.maxCharacterCount\"\n      [nzComputeCharacterCount]=\"ui.computeCharacterCount!\"\n    >\n      <textarea\n        nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size!\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"change($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [nzAutosize]=\"autosize\"\n        [nzBorderless]=\"ui.borderless\"\n        (focus)=\"focus($event)\"\n        (blur)=\"blur($event)\"\n      >\n      </textarea>\n    </nz-textarea-count>\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i4$3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i4$3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i4$3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextareaWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-textarea', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <textarea\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\"\n      [nzBorderless]=\"ui.borderless\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    >\n    </textarea>\n  </ng-template>\n\n  <ng-container *ngIf=\"ui.maxCharacterCount; else ipt\">\n    <nz-textarea-count\n      [nzMaxCharacterCount]=\"ui.maxCharacterCount\"\n      [nzComputeCharacterCount]=\"ui.computeCharacterCount!\"\n    >\n      <textarea\n        nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size!\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"change($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [nzAutosize]=\"autosize\"\n        [nzBorderless]=\"ui.borderless\"\n        (focus)=\"focus($event)\"\n        (blur)=\"blur($event)\"\n      >\n      </textarea>\n    </nz-textarea-count>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });

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
        this.register('radio', RadioWidget);
        this.register('checkbox', CheckboxWidget);
        this.register('boolean', BooleanWidget);
        this.register('textarea', TextareaWidget);
        this.register('select', SelectWidget);
        this.register('custom', CustomWidget);
        this.setDefault(StringWidget);
    }
}

/* eslint-disable import/order */
const ZORROS = [
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzRadioModule,
    NzSelectModule,
    NzSwitchModule,
    NzToolTipModule
];
const COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];
const WIDGETS = [
    ObjectWidget,
    ArrayWidget,
    StringWidget,
    NumberWidget,
    DateWidget,
    RadioWidget,
    CheckboxWidget,
    BooleanWidget,
    TextareaWidget,
    SelectWidget,
    CustomWidget,
    TextWidget
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
                    deps: [AlainConfigService, NgZone]
                },
                { provide: WidgetRegistry, useClass: NzWidgetRegistry }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DelonFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DelonFormModule, declarations: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective, ObjectWidget,
            ArrayWidget,
            StringWidget,
            NumberWidget,
            DateWidget,
            RadioWidget,
            CheckboxWidget,
            BooleanWidget,
            TextareaWidget,
            SelectWidget,
            CustomWidget,
            TextWidget], imports: [CommonModule, FormsModule, DelonLocaleModule, NzButtonModule,
            NzCardModule,
            NzCheckboxModule,
            NzDatePickerModule,
            NzFormModule,
            NzGridModule,
            NzIconModule,
            NzInputModule,
            NzInputNumberModule,
            NzModalModule,
            NzRadioModule,
            NzSelectModule,
            NzSwitchModule,
            NzToolTipModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DelonFormModule, imports: [CommonModule, FormsModule, DelonLocaleModule, ZORROS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DelonFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
                    declarations: [...COMPONENTS, ...WIDGETS],
                    exports: COMPONENTS
                }]
        }] });

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
    if: `应当匹配模式 "{failingKeyword}"`
};

/**
 * Generated bundle index. Do not edit.
 */

export { AjvSchemaValidatorFactory, ArrayLayoutWidget, ArrayProperty, ArrayWidget, AtomicProperty, BooleanProperty, BooleanWidget, CheckboxWidget, ControlUIWidget, ControlWidget, CustomWidget, DateWidget, DelonFormModule, ERRORSDEFAULT, FormProperty, FormPropertyFactory, NumberProperty, NumberWidget, NzWidgetRegistry, ObjectLayoutWidget, ObjectProperty, ObjectWidget, PropertyGroup, RadioWidget, SFComponent, SFFixedDirective, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SF_DEFAULT_CONFIG, SchemaValidatorFactory, SelectWidget, StringProperty, StringWidget, TextWidget, TextareaWidget, Widget, WidgetFactory, WidgetRegistry, di, getCopyEnum, getData, getEnum, isBlank, isDateFns, mergeConfig, orderProperties, resolveIfSchema, retrieveSchema, toBool, useFactory };
//# sourceMappingURL=form.mjs.map
