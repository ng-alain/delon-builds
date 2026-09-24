import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { signal, computed, afterNextRender, Injectable, inject, NgZone, input, viewChild, ViewContainerRef, effect, ViewEncapsulation, ChangeDetectionStrategy, Component, ElementRef, Renderer2, numberAttribute, Directive, booleanAttribute, model, linkedSignal, output, Injector, TemplateRef, ChangeDetectorRef, DestroyRef, NgModule, provideEnvironmentInitializer, makeEnvironmentProviders } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { map, of, BehaviorSubject, Observable, combineLatest, distinctUntilChanged, Subject, merge, filter, skip, takeUntil, debounceTime, switchMap, catchError } from 'rxjs';
import { ACLService } from '@delon/acl';
import { DelonLocaleService, ALAIN_I18N_TOKEN, DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { REGEX } from '@delon/util/format';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i2$1 from 'ng-zorro-antd/core/transition-patch';
import * as i4 from 'ng-zorro-antd/core/wave';
import * as i5 from 'ng-zorro-antd/grid';
import { NzGridModule } from 'ng-zorro-antd/grid';
import * as i6 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i7 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { withAnimationCheck } from 'ng-zorro-antd/core/animation';
import * as i5$1 from 'ng-zorro-antd/tooltip';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import * as i1$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i4$1 from 'ng-zorro-antd/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import * as i4$2 from 'ng-zorro-antd/checkbox';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import * as i2$3 from 'ng-zorro-antd/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import * as i3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i2$4 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as i2$5 from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import * as i4$3 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i2$2 from 'ng-zorro-antd/switch';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import * as i2$6 from '@angular/cdk/text-field';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
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
    delay: false,
    expandable: false
};
function mergeConfig(srv) {
    return srv.merge('sf', SF_DEFAULT_CONFIG);
}

const SF_SEQ = '/';

/** 原始对象 → 代理，保证 `reactive()` 幂等（同键存活期间代理才存活，见 `reactive()` 的注释） */
const CACHE = new WeakMap();
/** 代理对象集合，避免代理套代理叠出两套 signal */
const PROXIES = new WeakSet();
/**
 * 浅响应式对象
 *
 * 让「就地赋值」也能被 signal 跟踪：
 *
 * ```ts
 * const ui = reactive({ spanLabel: 5 });
 * const view = computed(() => ui.spanLabel);
 * ui.spanLabel = 8;   // view 会被标记为脏
 * ```
 *
 * ## 规则
 * - **只跟踪顶层 key**。嵌套结构（数组 `push`/`splice`、对象子属性）不会被跟踪，
 *   必须整值替换：`ui.optionalHelp = { ...ui.optionalHelp, text }`。
 * - **字符串 key**：读取时若值不是函数，则建立（惰性的）signal 并纳入依赖图；
 *   函数成员（含原型链上的方法）原样透传、不跟踪。`symbol` key 一律透传。
 * - **写入**：通过代理写入会同步更新 signal 并通知；直接改写原始对象（绕过代理）
 *   不会通知，并会让 signal 变陈旧。
 * - **幂等**：对同一原始对象重复调用返回同一个代理，不会产生两套 signal。
 *
 * ## 生命周期与回收
 * `CACHE` / `PROXIES` 是模块级 `WeakMap` / `WeakSet`：key（原始对象）与代理同时不可达时
 * 条目自动回收，value 反向引用 key 也不影响回收（ephemeron 语义），因此不需要显式清理。
 * 反过来，只要原始对象被外部长期持有，它的代理与已建立的 signal 也会一起常驻 ——
 * 保留量与「谁持有原始对象」绑定，而不是与 `reactive()` 的调用次数绑定。
 * `SFComponent` 每次初始化都传入全新拷贝（`deepCopy(this.schema)`、`ui` 字面量），
 * 因此不会出现长期持有。
 *
 * @internal
 */
function reactive(target) {
    if (target === null || typeof target !== 'object') {
        return target;
    }
    // 已是代理 → 原样返回（避免代理套代理产生两套 signal）
    if (PROXIES.has(target)) {
        return target;
    }
    const cached = CACHE.get(target);
    if (cached) {
        return cached;
    }
    const deps = new Map();
    const sig = (key, current) => {
        let s = deps.get(key);
        if (!s) {
            s = signal(current);
            deps.set(key, s);
        }
        return s;
    };
    const raw = target;
    const proxy = new Proxy(target, {
        get(t, key, receiver) {
            if (typeof key !== 'string') {
                return Reflect.get(t, key, receiver);
            }
            const existing = deps.get(key);
            if (existing) {
                return existing();
            }
            const value = Reflect.get(t, key, receiver);
            // 函数成员（方法/原型链）不纳入依赖图，否则会破坏调用
            if (typeof value === 'function') {
                return value;
            }
            return sig(key, value)();
        },
        set(t, key, value, receiver) {
            if (typeof key !== 'string') {
                return Reflect.set(t, key, value, receiver);
            }
            // 顺序很重要：**先写目标、成功后再通知**
            // 若反过来（先 set signal），遇到 frozen / 不可写 / 不可扩展的目标时会出现
            // 「signal 已变、目标没变」的分叉；对「不可配置且不可写」的属性，
            // 此后每次 `get` 都会因违反 Proxy 不变量而抛 TypeError。
            const previous = raw[key];
            const ok = Reflect.set(t, key, value, receiver);
            if (ok) {
                sig(key, previous).set(value);
            }
            return ok;
        },
        deleteProperty(t, key) {
            if (typeof key !== 'string') {
                return Reflect.deleteProperty(t, key);
            }
            const ok = Reflect.deleteProperty(t, key);
            if (ok) {
                // 通知依赖方「值没了」，而不是悄悄从依赖图里移除
                deps.get(key)?.set(undefined);
            }
            return ok;
        }
    });
    CACHE.set(target, proxy);
    PROXIES.add(proxy);
    return proxy;
}

function isBlank(o) {
    return o == null;
}
function toBool(value, defaultValue) {
    return value == null ? defaultValue : `${value}` !== 'false';
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
            if (Object.prototype.hasOwnProperty.call(current, part)) {
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
    if (Object.prototype.hasOwnProperty.call(schema, '$ref')) {
        const $refSchema = findSchemaDefinition(schema.$ref, definitions);
        // remove $ref property
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    if (!(Object.prototype.hasOwnProperty.call(schema, 'if') && Object.prototype.hasOwnProperty.call(schema, 'then')))
        return null;
    if (!schema.if.properties)
        throw new Error(`if: does not contain 'properties'`);
    const allKeys = Object.keys(schema.properties);
    const ifKeys = Object.keys(schema.if.properties);
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, schema.then.required);
    schema.required = schema.required.concat(schema.then.required);
    const hasElse = Object.prototype.hasOwnProperty.call(schema, 'else');
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
    return getEnum(deepCopy(list ?? []), formData, readOnly);
}
function getData(schema, ui, formData, asyncArgs) {
    if (typeof ui.asyncData === 'function') {
        return ui.asyncData(asyncArgs).pipe(map((list) => getCopyEnum(list, formData, schema.readOnly)));
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
    injector;
    _options;
    _valueChanges = new BehaviorSubject({ path: null, pathValue: null, value: null });
    _errorsChanges = new BehaviorSubject(null);
    _visibilityChanges = new BehaviorSubject(true);
    _root;
    _parent;
    /**
     * @internal 直接子节点上报的错误（key 是子属性**实例**）
     *
     * 子节点的 `path` 会随数组增删被重编号，重编号后就无法再指回原来的节点，
     * 因此这里用实例当 key。
     */
    _objErrors = new Map();
    /**
     * @internal `SFComponent.cleanValue` 在属性树上的镜像
     *
     * 供模型层读取（如 `ArrayProperty._updateValue` 合并 `formData` 时）。
     * **不要经由 `widget` 读取**——`reset()` 发生在 widget 创建之前，
     * 那时 `this.widget` 还是 undefined。
     */
    _cleanValue = false;
    schemaValidator;
    schema;
    ui;
    formData;
    widget;
    path;
    propertyId;
    // #region 响应式状态
    //
    // `_value` / `_errors` / `_visible` 的唯一存储是 signal。对外暴露同名的
    // getter（`value` / `errors` / `visible` / `valid`），因此在模板或 `computed` 中
    // 读取时会**自动建立依赖**，而读法本身与普通字段无异。
    // 写入一律保持同步（不引入 effect），以免改变事件时序。
    /** @internal 值的唯一存储 */
    _value$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_value$" }] : /* istanbul ignore next */ []));
    /** @internal 错误的唯一存储 */
    _errors$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_errors$" }] : /* istanbul ignore next */ []));
    /** @internal 可见性的唯一存储 */
    _visible$ = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_visible$" }] : /* istanbul ignore next */ []));
    _valid$ = computed(() => {
        const errors = this._errors$();
        return errors === null || errors.length === 0;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_valid$" }] : /* istanbul ignore next */ []));
    /**
     * @internal 值的兼容读写通道
     *
     * 子类会直接写 `this._value = x`，`widgets/upload` 这类 widget 也会写
     * `formProperty._value`，因此保留它并与 `_value$` 读写同一份存储。
     * 内部新代码请优先使用 `_value$`。
     */
    get _value() {
        return this._value$();
    }
    set _value(value) {
        this._value$.set(value);
    }
    // #endregion
    constructor(injector, schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
        this.injector = injector;
        this._options = _options;
        // 浅响应式包装：让 `property.ui.xxx = yyy` / `property.schema.enum = [...]` 之类的
        // 就地赋值也能进入 signal 依赖图。`schemaValidator` 用原始 `schema`，避免把代理交给 ajv。
        this.schema = reactive(schema);
        this.ui = reactive(ui);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: this.ui.ingoreKeywords,
            debug: ui.debug
        });
        this.formData = formData ?? schema.default;
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
    /** 表单值（读取时若处于响应式上下文则建立依赖） */
    get value() {
        return this._value$();
    }
    /** 当前错误列表 */
    get errors() {
        return this._errors$();
    }
    /** 是否可见 */
    get visible() {
        return this._visible$();
    }
    /** 是否有效 */
    get valid() {
        return this._valid$();
    }
    get options() {
        return this._options;
    }
    /**
     * 更新值且校验数据
     */
    updateValueAndValidity(options) {
        options = {
            onlySelf: false,
            emitValidator: true,
            emitValueEvent: true,
            updateValue: null,
            ...options
        };
        this._updateValue();
        if (options.emitValueEvent) {
            options.updatePath = options.updatePath ?? this.path ?? '';
            this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });
            options.updateValue = options.updateValue == null ? this.value : options.updateValue;
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
        let base;
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
        const isEmpty = this.isEmptyData(this._value$());
        if (isEmpty && this.ui._required) {
            errors = [{ keyword: 'required' }];
        }
        else if (isEmpty) {
            errors = [];
        }
        else {
            errors = this.schemaValidator(this._value$()) ?? [];
        }
        const customValidator = this.ui.validator;
        if (typeof customValidator === 'function') {
            const customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
                customErrors.subscribe(res => {
                    this.setCustomErrors(errors, res);
                });
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors$.set(errors);
        this.setErrors(errors);
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
        const nextErrors = hasCustomError ? errors.concat(...list) : errors;
        this._errors$.set(nextErrors);
        this.setErrors(nextErrors);
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
            const l = this._localeError();
            arrErrs = arrErrs.map((err) => {
                let message = err.keyword == null && err.message
                    ? err.message
                    : ((this.ui.errors ?? {})[err.keyword] ?? this._options.errors[err.keyword] ?? l[err.keyword] ?? ``);
                if (message && typeof message === 'function') {
                    message = message(err);
                }
                if (message) {
                    if (~message.indexOf('{') && err.params) {
                        message = message.replace(/{([.a-zA-Z0-9]+)}/g, (_v, key) => err.params[key] ?? '');
                    }
                    err.message = message;
                }
                return err;
            });
        }
        this._errors$.set(arrErrs);
        this._errorsChanges.next(arrErrs);
        // Should send errors to parent field
        // 自身错误为空时改为上报子树：手写 `setErrors`、必填空串、自定义校验器这类错误
        // 本节点自己校验不出来，不能因为自身为空就把子树的上报一起清掉
        this._parent?.setParentAndPlatErrors(arrErrs.length ? arrErrs : this._collectChildErrors(), this);
    }
    /**
     * 错误文案的本地化映射
     *
     * widget 已实例化时取它的 `l`；**widget 尚未实例化时回落到 `DelonLocaleService`**，
     * 因此 `setErrors()` 不依赖 widget 是否已存在。
     */
    _localeError() {
        if (this.widget) {
            return (this.widget.l.error ?? {});
        }
        const srv = this.injector.get(DelonLocaleService, null);
        return (srv?.getData('sf')?.error ?? {});
    }
    /**
     * @internal 记录某个子节点上报的错误，并据此重新聚合本节点的错误
     */
    setParentAndPlatErrors(errors, property) {
        this._objErrors.set(property, errors);
        this._refreshObjErrors();
    }
    /**
     * @internal 用可见子节点上报的错误重新聚合本节点，通知订阅者并向上传递
     */
    _refreshObjErrors() {
        const errors = this._collectChildErrors();
        this._errors$.set(errors);
        this._errorsChanges.next(errors);
        this._parent?.setParentAndPlatErrors(errors, this);
    }
    _collectChildErrors() {
        const errors = [];
        this._objErrors.forEach((childErrors, property) => {
            if (!property.visible)
                return;
            errors.push(...childErrors);
        });
        return errors;
    }
    // #endregion
    // #region condition
    /**
     * Set the hide or display of widget
     * 设置小部件的隐藏或显示
     */
    setVisible(visible) {
        this._visible$.set(visible);
        this._visibilityChanges.next(visible);
        // 渲染时需要重新触发 reset
        //
        // `afterNextRender` 在 zone 与 zoneless 两种模式下都表示「下一次渲染之后」，
        // 不需要探测 `ɵNoopNgZone` 这类私有 API。
        if (visible) {
            afterNextRender(() => {
                this.resetValue(this.value, true);
            }, { injector: this.injector });
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
                if (Object.prototype.hasOwnProperty.call(visibleIf, dependencyPath)) {
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
                                        // 与 `SFComponent.setRequired()` 同理：必须写入新数组，代理才会通知读取方
                                        this.parent.schema.required = [...parentRequired];
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
    }
}
class PropertyGroup extends FormProperty {
    // `properties` 被 `array.widget.ts` 的模板直接读取（`@for (... of formProperty.properties)`），
    // 用 signal 支撑 + 同名 getter/setter，数组增删后视图自动刷新。
    // 写入**只能整值替换**：就地 push/splice 不会触发通知。
    _properties$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_properties$" }] : /* istanbul ignore next */ []));
    get properties() {
        return this._properties$();
    }
    set properties(value) {
        this._properties$.set(value);
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
        // eslint-disable-next-line @typescript-eslint/no-for-in-array
        for (const propertyId in this.properties) {
            if (Object.prototype.hasOwnProperty.call(this.properties, propertyId)) {
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

class ArrayProperty extends PropertyGroup {
    formPropertyFactory;
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
        this._objErrors.clear();
        this.resetProperties(value);
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        this._value = value ?? this.schema.default ?? [];
        this.setValue(this._value, onlySelf);
    }
    _hasValue() {
        return true;
    }
    _updateValue() {
        const value = [];
        this.forEachChild((property) => {
            if (property.visible) {
                // 从根节点读 `_cleanValue`：`reset()` 早于 widget 创建，此时经 widget 读不到
                value.push({ ...(this.root._cleanValue ? null : property.formData), ...property.value });
            }
        });
        this._value = value;
    }
    addProperty(formData) {
        const newProperty = this.formPropertyFactory.createProperty(deepCopy(this.schema.items), deepCopy(this.ui.$items), formData, this);
        // 整值替换（不能就地 push），这样 `properties` 的 signal 才会通知 array 模板
        this.properties = [...this.properties, newProperty];
        return newProperty;
    }
    resetProperties(formDatas) {
        for (const item of formDatas) {
            const property = this.addProperty(item);
            property.resetValue(item, true);
        }
    }
    // #region actions
    add(formData) {
        const newProperty = this.addProperty(formData);
        newProperty.resetValue(formData, false);
        return newProperty;
    }
    remove(index) {
        const list = [...this.properties];
        const [removed] = list.splice(index, 1);
        list.forEach((property, idx) => {
            property.path = [property.parent.path, idx].join(SF_SEQ);
        });
        // 被删项自己的错误要一起丢掉；其余子项的错误按实例保留，不受 `path` 重编号影响
        this._objErrors.delete(removed);
        // 整值替换，理由同 `addProperty`
        this.properties = list;
        if (list.length === 0) {
            // 空数组要校验自身：`minItems` 这类规则只有它自己能报
            this.updateValueAndValidity();
        }
        else {
            // 下标变了要重算值（不需要校验），随后按剩下的子项重算聚合
            this.updateValueAndValidity({ emitValidator: false, emitValueEvent: false });
            this._refreshObjErrors();
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
        if (this.widget) {
            this.widget.reset(value);
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
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class ObjectProperty extends PropertyGroup {
    formPropertyFactory;
    _propertiesId = [];
    get propertiesId() {
        return this._propertiesId;
    }
    constructor(injector, formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(injector, schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
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
            console.error(`Invalid ${this.schema.title ?? 'root'} object field configuration:`, e);
        }
        orderedProperties.forEach(propertyId => {
            this.properties[propertyId] = this.formPropertyFactory.createProperty(this.schema.properties[propertyId], this.ui[`$${propertyId}`], (this.formData ?? {})[propertyId], this, propertyId);
            this._propertiesId.push(propertyId);
        });
    }
    setValue(value, onlySelf) {
        const properties = this.properties;
        for (const propertyId in value) {
            if (Object.prototype.hasOwnProperty.call(value, propertyId) && properties[propertyId]) {
                properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    resetValue(value, onlySelf) {
        value = value ?? this.schema.default ?? {};
        const properties = this.properties;
        for (const propertyId in this.schema.properties) {
            if (Object.prototype.hasOwnProperty.call(this.schema.properties, propertyId)) {
                properties[propertyId].resetValue(value[propertyId], true);
            }
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

class StringProperty extends AtomicProperty {
    fallbackValue() {
        return null;
    }
    setValue(value, onlySelf) {
        this._value = value;
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
}

class FormPropertyFactory {
    injector;
    schemaValidatorFactory;
    options;
    constructor(injector, schemaValidatorFactory, cogSrv) {
        this.injector = injector;
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.options = mergeConfig(cogSrv);
    }
    createProperty(schema, ui, formData, parent = null, propertyId) {
        let newProperty;
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
    onDestroy;
    constructor() {
        this.onDestroy = new Subject();
    }
    destroy() {
        this.onDestroy.next(true);
    }
}

class SchemaValidatorFactory {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SchemaValidatorFactory });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SchemaValidatorFactory, decorators: [{
            type: Injectable
        }] });
class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    ngZone = inject(NgZone);
    cogSrv = inject(AlainConfigService);
    ajv;
    options;
    constructor() {
        super();
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(this.cogSrv);
        const customOptions = this.options.ajv ?? {};
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
            ...(extraOptions.ingoreKeywords ?? [])
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: AjvSchemaValidatorFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: AjvSchemaValidatorFactory });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: AjvSchemaValidatorFactory, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });

class WidgetRegistry {
    _widgets = {};
    defaultWidget;
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
        return Object.prototype.hasOwnProperty.call(this._widgets, type);
    }
    getType(type) {
        if (this.has(type)) {
            return this._widgets[type];
        }
        return this.defaultWidget;
    }
}
class WidgetFactory {
    registry = inject(WidgetRegistry);
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`No widget for type "${type}"`);
            }
        }
        const componentClass = this.registry.getType(type);
        return container.createComponent(componentClass);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: WidgetFactory, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: WidgetFactory });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: WidgetFactory, decorators: [{
            type: Injectable
        }] });

let nextUniqueId = 0;
class SFItemComponent {
    widgetFactory = inject(WidgetFactory);
    terminator = inject(TerminatorService);
    destroy$ = new Subject();
    widget = null;
    formProperty = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "formProperty" }] : /* istanbul ignore next */ []));
    footer = input(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "footer" }] : /* istanbul ignore next */ []));
    container = viewChild('target', { ...(ngDevMode ? { debugName: "container" } : /* istanbul ignore next */ {}), read: ViewContainerRef });
    constructor() {
        // 创建 widget 是一段命令式的动态组件编排，用 effect 表达「formProperty 与容器就绪时创建」。
        // `container` 是 signal 查询：视图尚未创建时返回 undefined，就绪后本 effect 会自动重跑。
        effect(onCleanup => {
            const container = this.container();
            const p = this.formProperty();
            if (!container || !p) {
                return;
            }
            const ref = this.widgetFactory.createWidget(container, (p.ui.widget ?? p.schema.type));
            this.onWidgetInstanciated(ref.instance);
            // `p.ui.widget` / `p.schema.type` 也在本 effect 的依赖里：它们变了 effect 会重跑，
            // 那时必须先销毁上一个 widget，否则容器里会同时留下两个控件
            onCleanup(() => ref.destroy());
        });
    }
    onWidgetInstanciated(widget) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;
        const ui = this.formProperty().ui;
        this.widget.formProperty = this.formProperty();
        this.widget.schema = this.formProperty().schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.formProperty().widget = widget;
    }
    ngOnInit() {
        this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
    }
    ngOnDestroy() {
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "22.1.7", type: SFItemComponent, isStandalone: false, selector: "sf-item", inputs: { formProperty: { classPropertyName: "formProperty", publicName: "formProperty", isSignal: true, isRequired: true, transformFunction: null }, footer: { classPropertyName: "footer", publicName: "footer", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.sf__collapse-item": "formProperty().ui?.collapse" }, classAttribute: "sf__item" }, providers: [NzFormStatusService], viewQueries: [{ propertyName: "container", first: true, predicate: ["target"], descendants: true, read: ViewContainerRef, isSignal: true }], exportAs: ["sfItem"], ngImport: i0, template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer()" />
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-item',
                    exportAs: 'sfItem',
                    host: {
                        class: 'sf__item',
                        '[class.sf__collapse-item]': 'formProperty().ui?.collapse'
                    },
                    template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer()" />
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzFormStatusService],
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], ctorParameters: () => [], propDecorators: { formProperty: [{ type: i0.Input, args: [{ isSignal: true, alias: "formProperty", required: true }] }], footer: [{ type: i0.Input, args: [{ isSignal: true, alias: "footer", required: false }] }], container: [{ type: i0.ViewChild, args: ['target', { ...{ read: ViewContainerRef }, isSignal: true }] }] } });

class SFFixedDirective {
    el = inject(ElementRef).nativeElement;
    render = inject(Renderer2);
    _inited = false;
    /** 固定标签宽度（px），`0` 表示不固定；非法值按 `0` 处理 */
    num = input(0, { ...(ngDevMode ? { debugName: "num" } : /* istanbul ignore next */ {}), alias: 'fixed-label', transform: (v) => numberAttribute(v, 0) });
    init() {
        const num = this.num();
        if (!this._inited || num <= 0)
            return;
        const el = this.el;
        const widgetEl = el.querySelector('.ant-row') ?? el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
        const unit = `${num}px`;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFFixedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "22.1.7", type: SFFixedDirective, isStandalone: false, selector: "[fixed-label]", inputs: { num: { classPropertyName: "num", publicName: "fixed-label", isSignal: true, isRequired: false, transformFunction: null } }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFFixedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fixed-label]',
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], propDecorators: { num: [{ type: i0.Input, args: [{ isSignal: true, alias: "fixed-label", required: false }] }] } });

function useFactory(injector, schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(injector, schemaValidatorFactory, cogSrv);
}
class SFComponent {
    formPropertyFactory = inject(FormPropertyFactory);
    terminator = inject(TerminatorService);
    dom = inject(DomSanitizer);
    localeSrv = inject(DelonLocaleService);
    aclSrv = inject(ACLService);
    i18nSrv = inject(ALAIN_I18N_TOKEN);
    platform = inject(Platform);
    cogSrv = inject(AlainConfigService);
    options = mergeConfig(this.cogSrv);
    _renders = new Map();
    _item;
    _defUi;
    _inited = false;
    /**
     * @internal 首次渲染是否已完成
     *
     * 用于 `Widget.ngAfterViewInit` 里「不显示首次校验视觉」的门控。
     * 不能用 `_inited`：它在 `ngOnInit` 里就置真，而 widget 的 `errorsChanges` 订阅
     * 是在 `BehaviorSubject` 上**订阅即回放**的——若那时 `_inited` 已为真，抑制就失效。
     * `ngAfterViewInit` 晚于子 widget 的订阅建立，才是正确时机。
     */
    _rendered = false;
    /** @internal 静默窗口标记，见 `_runSilently()` */
    _silent = false;
    /**
     * @internal 在静默窗口内执行 `fn`：期间的值变更不触发 `formChange` / `formValueChange`
     *
     * widget 在自身 `ngAfterViewInit` 里推入初值时用它——那是初值同步（含格式化 `schema.default`），
     * 不是用户变更，否则页面加载就会被当成一次改动。
     */
    _runSilently(fn) {
        const prev = this._silent;
        this._silent = true;
        try {
            fn();
        }
        finally {
            this._silent = prev;
        }
    }
    _formData;
    _schema;
    _ui;
    expandable = input(false, { ...(ngDevMode ? { debugName: "expandable" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    expanded = model(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "expanded" }] : /* istanbul ignore next */ []));
    // #region 响应式状态
    //
    // 以下状态被 `<sf>` 模板直接读取。采用 signal 内核 + 同名 getter/setter，
    // 使外部写法（`sf.locale` / `sf.rootProperty` / `sf.valid` / `sf._btn`）保持有效，
    // 同时在模板中读取时自动建立依赖。
    _valid$ = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_valid$" }] : /* istanbul ignore next */ []));
    /** @internal 内部可写 */
    get _valid() {
        return this._valid$();
    }
    set _valid(value) {
        this._valid$.set(value);
    }
    get valid() {
        return this._valid$();
    }
    _locale$ = signal({}, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_locale$" }] : /* istanbul ignore next */ []));
    get locale() {
        return this._locale$();
    }
    set locale(value) {
        this._locale$.set(value);
    }
    _rootProperty$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_rootProperty$" }] : /* istanbul ignore next */ []));
    get rootProperty() {
        return this._rootProperty$();
    }
    set rootProperty(value) {
        this._rootProperty$.set(value);
    }
    _btn$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_btn$" }] : /* istanbul ignore next */ []));
    /** @internal */
    get _btn() {
        return this._btn$();
    }
    set _btn(value) {
        this._btn$.set(value);
    }
    /** @internal 是否存在 collapse: true 的字段 */
    _hasCollapse = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_hasCollapse" }] : /* istanbul ignore next */ []));
    get btnGrid() {
        return this._btn.render.grid;
    }
    // #endregion
    // #region fields
    /** 表单布局，等同 `nzLayout`，默认：horizontal */
    layoutInput = input(undefined, { ...(ngDevMode ? { debugName: "layoutInput" } : /* istanbul ignore next */ {}), alias: 'layout' });
    layout = linkedSignal({ ...(ngDevMode ? { debugName: "layout" } : /* istanbul ignore next */ {}), source: () => this.layoutInput(),
        computation: (next, prev) => next ?? prev?.value ?? 'horizontal' });
    /** JSON Schema */
    schemaInput = input(undefined, { ...(ngDevMode ? { debugName: "schemaInput" } : /* istanbul ignore next */ {}), alias: 'schema' });
    /**
     * 输入侧的有效 schema：`refreshSchema(newSchema)` 可在内部替换它；
     * 渲染用的仍是 `coverProperty()` 产出的 `_schema`
     */
    _schemaValue$ = linkedSignal({ ...(ngDevMode ? { debugName: "_schemaValue$" } : /* istanbul ignore next */ {}), source: () => this.schemaInput(),
        computation: next => next });
    /** UI Schema */
    uiInput = input(undefined, { ...(ngDevMode ? { debugName: "uiInput" } : /* istanbul ignore next */ {}), alias: 'ui' });
    /**
     * 输入侧的有效 ui：`refreshSchema(_, newUI)` 可在内部替换它；
     * 渲染用的仍是 `coverProperty()` 产出的 `_ui`
     */
    _uiValue$ = linkedSignal({ ...(ngDevMode ? { debugName: "_uiValue$" } : /* istanbul ignore next */ {}), source: () => this.uiInput(),
        computation: next => next });
    /** 表单默认值 */
    formData = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "formData" }] : /* istanbul ignore next */ []));
    /**
     * 按钮
     * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
     * - 值为 `none` 表示手动添加按钮，且不保留容器
     * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
     */
    button = input({}, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "button" }] : /* istanbul ignore next */ []));
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    liveValidateInput = input(undefined, { ...(ngDevMode ? { debugName: "liveValidateInput" } : /* istanbul ignore next */ {}), alias: 'liveValidate' });
    liveValidate = linkedSignal({ ...(ngDevMode ? { debugName: "liveValidate" } : /* istanbul ignore next */ {}), source: () => this.liveValidateInput(),
        computation: (next, prev) => next === undefined ? (prev?.value ?? Boolean(this.options.liveValidate)) : booleanAttribute(next) });
    /**
     * 指定表单 `autocomplete` 值
     *
     * 未绑定时回落到全局配置 `options.autocomplete`
     */
    autocompleteInput = input(undefined, { ...(ngDevMode ? { debugName: "autocompleteInput" } : /* istanbul ignore next */ {}), alias: 'autocomplete' });
    autocomplete = computed(() => this.autocompleteInput() ?? this.options.autocomplete, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "autocomplete" }] : /* istanbul ignore next */ []));
    /**
     * Whether to display error visuals immediately
     *
     * 是否立即显示错误视觉
     */
    firstVisualInput = input(undefined, { ...(ngDevMode ? { debugName: "firstVisualInput" } : /* istanbul ignore next */ {}), alias: 'firstVisual' });
    firstVisual = linkedSignal({ ...(ngDevMode ? { debugName: "firstVisual" } : /* istanbul ignore next */ {}), source: () => this.firstVisualInput(),
        computation: (next, prev) => next === undefined ? (prev?.value ?? Boolean(this.options.firstVisual)) : booleanAttribute(next) });
    /**
     * Whether to only display error visuals but not error text
     *
     * 是否只展示错误视觉不显示错误文本
     */
    onlyVisual = input(false, { ...(ngDevMode ? { debugName: "onlyVisual" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    compact = input(false, { ...(ngDevMode ? { debugName: "compact" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    /**
     * Form default mode, will force override `layout`, `firstVisual`, `liveValidate` parameters
     *
     * 表单预设模式，会强制覆盖 `layout`，`firstVisual`，`liveValidate` 参数
     */
    mode = input(undefined, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    /** 预设模式的级联：输入变化时（`ngOnChanges`）与按钮重建后（`coverButtonProperty`）都要应用 */
    _applyMode(mode) {
        switch (mode) {
            case 'search':
                this.layout.set('inline');
                this.firstVisual.set(false);
                this.liveValidate.set(false);
                if (this._btn) {
                    this._btn.submit = this._btn.search;
                }
                break;
            case 'edit':
                this.layout.set('horizontal');
                this.firstVisual.set(false);
                this.liveValidate.set(true);
                if (this._btn) {
                    this._btn.submit = this._btn.edit;
                }
                break;
        }
    }
    /**
     * Whether to load status，when `true` reset button is disabled status, submit button is loading status
     */
    loading = input(false, { ...(ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    disabled = input(false, { ...(ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    noColon = input(false, { ...(ngDevMode ? { debugName: "noColon" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    cleanValue = input(false, { ...(ngDevMode ? { debugName: "cleanValue" } : /* istanbul ignore next */ {}), transform: booleanAttribute });
    delayInput = input(undefined, { ...(ngDevMode ? { debugName: "delayInput" } : /* istanbul ignore next */ {}), alias: 'delay' });
    delay = linkedSignal({ ...(ngDevMode ? { debugName: "delay" } : /* istanbul ignore next */ {}), source: () => this.delayInput(),
        computation: (next, prev) => next === undefined ? (prev?.value ?? Boolean(this.options.delay)) : booleanAttribute(next) });
    formValueChange = output();
    formChange = output();
    formSubmit = output();
    formReset = output();
    formError = output();
    // #endregion
    /**
     * Whether the form is valid
     *
     * 表单是否有效
     */
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
     * Set form element new `disabled` based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `disabled` 状态
     */
    setDisabled(path, status) {
        const property = this.getProperty(path);
        if (!property) {
            throw new Error(`Invalid path: ${path}`);
        }
        property.schema.readOnly = status;
        return this;
    }
    /**
     * Set form element new `required` based on [path](https://ng-alain.com/form/qa#path)
     *
     * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `required` 状态
     */
    setRequired(path, status) {
        const property = this.getProperty(path);
        if (!property) {
            throw new Error(`Invalid path: ${path}`);
        }
        const key = path.split(SF_SEQ).pop();
        const parentRequired = property.parent?.schema.required ?? [];
        const idx = parentRequired.findIndex(w => w === key);
        if (status) {
            if (idx === -1)
                parentRequired.push(key);
        }
        else {
            if (idx !== -1)
                parentRequired.splice(idx, 1);
        }
        // 就地 push/splice 后写回同一个引用时，代理按 `Object.is` 判定相等、不会通知，因此写入新数组
        property.parent.schema.required = [...parentRequired];
        property.ui._required = status;
        this.validator({ onlyRoot: false });
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
        if (!this.liveValidate())
            this.validator();
        if (!this.valid)
            return;
        this.formSubmit.emit(this.value);
    }
    constructor() {
        this.localeSrv.change.pipe(takeUntilDestroyed()).subscribe(() => {
            this.locale = this.localeSrv.getData('sf');
            if (this._inited) {
                this.validator({ emitError: false, onlyRoot: false });
                this.coverButtonProperty();
            }
        });
        merge(this.aclSrv.change, this.i18nSrv.change)
            .pipe(filter(() => this._inited), takeUntilDestroyed())
            .subscribe(() => this.refreshSchema());
    }
    fanyi(key) {
        return this.i18nSrv.fanyi(key) ?? key;
    }
    inheritUI(ui) {
        ['optionalHelp'].filter(key => !!this._defUi[key]).forEach(key => (ui[key] = { ...this._defUi[key], ...ui[key] }));
    }
    coverProperty() {
        const isHorizontal = this.layout() === 'horizontal';
        const _schema = deepCopy(this._schemaValue$());
        const { definitions } = _schema;
        // 重置折叠检测状态
        this._hasCollapse.set(false);
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
                if (this.layout() === 'inline') {
                    delete ui.grid;
                }
                // 非水平布局强制清理 `spanLabelFixed` 值
                if (this.layout() !== 'horizontal') {
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
                if (ui.collapse)
                    this._hasCollapse.set(true);
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
                    delete property.items.ui;
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] ?? {}, ui, ui);
                }
            });
        };
        if (this._uiValue$() == null)
            this._uiValue$.set({});
        this._defUi = {
            onlyVisual: this.options.onlyVisual,
            size: this.options.size,
            liveValidate: this.liveValidate(),
            ...this.options.ui,
            ..._schema.ui,
            ...this._uiValue$()['*']
        };
        if (this.onlyVisual() === true) {
            this._defUi.onlyVisual = true;
        }
        // 内联强制清理 `grid` 参数
        if (this.layout() === 'inline') {
            delete this._defUi.grid;
        }
        // root
        this._ui = { ...this._defUi };
        inFn(_schema, _schema, this._uiValue$(), this._uiValue$(), this._ui);
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
            ...this.button()
        };
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        const btnRender = this._btn.render;
        if (this.layout() === 'horizontal') {
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
        if (this.mode()) {
            this._applyMode(this.mode());
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
    ngAfterViewInit() {
        this._rendered = true;
    }
    ngOnChanges(changes) {
        if (!this.platform.isBrowser) {
            return;
        }
        // 级联与原先 setter 的时机一致（都早于模板检查）
        if (changes['mode']) {
            this._applyMode(this.mode());
        }
        // `disabled` / `loading` 只驱动各自的 signal 与模板，不需要重建 schema
        const ingoreRender = ['disabled', 'loading'];
        if (Object.keys(changes).every(key => ingoreRender.includes(key))) {
            return;
        }
        if (!this.delay()) {
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
            this._schemaValue$.set(newSchema);
        if (newUI)
            this._uiValue$.set(newUI);
        const schema = this._schemaValue$();
        if (!schema || typeof schema.properties === 'undefined')
            throw new Error(`Invalid Schema`);
        if (schema.ui && typeof schema.ui === 'string')
            throw new Error(`Don't support string with root ui property`);
        schema.type = 'object';
        this._formData = { ...this.formData() };
        if (this._inited)
            this.terminator.destroy();
        this.cleanRootSub();
        this.coverProperty();
        this.coverButtonProperty();
        this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData());
        // 把 `cleanValue` 镜像到属性树：`reset()` 早于 widget 创建，模型层不能经 widget 读取它
        this.rootProperty._cleanValue = this.cleanValue();
        this.attachCustomRender();
        // 此处不需要额外的结构 CD，`reset()` 直接作用于属性树：
        //  ① `setErrors()` 的文案在 widget 缺失时回落到 `DelonLocaleService`；
        //  ② widget 在自身 `ngAfterViewInit` 里推入初值，那时 `ngOnInit` 已跑完；
        //  ③ 首次校验视觉由 `_rendered` 门控，不依赖 widget 的创建时机。
        this.reset();
        // `valueChanges` 是 `BehaviorSubject`，订阅时会回放当前值：先用它初始化 `_item`，
        // 再用 `skip(1)` 把这条回放排除掉——回放是初值，不是变更
        const rootProperty = this.rootProperty;
        const toItem = (value) => ({
            ...(this.cleanValue() ? null : this.formData()),
            ...value
        });
        this._item = toItem(rootProperty.value);
        rootProperty.valueChanges.pipe(skip(1)).subscribe(res => {
            this._item = toItem(res.value);
            // 初值同步也是值变更，但它不是用户改的，见 `_runSilently()`
            if (this._silent)
                return;
            this.formChange.emit(this._item);
            this.formValueChange.emit({ value: this._item, path: res.path, pathValue: res.pathValue });
        });
        this.rootProperty.errorsChanges.subscribe(errors => {
            this._valid = !(errors && errors.length);
            this.formError.emit(errors);
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
        this.rootProperty.resetValue(this.formData(), false);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: SFComponent, isStandalone: false, selector: "sf, [sf]", inputs: { expandable: { classPropertyName: "expandable", publicName: "expandable", isSignal: true, isRequired: false, transformFunction: null }, expanded: { classPropertyName: "expanded", publicName: "expanded", isSignal: true, isRequired: false, transformFunction: null }, layoutInput: { classPropertyName: "layoutInput", publicName: "layout", isSignal: true, isRequired: false, transformFunction: null }, schemaInput: { classPropertyName: "schemaInput", publicName: "schema", isSignal: true, isRequired: false, transformFunction: null }, uiInput: { classPropertyName: "uiInput", publicName: "ui", isSignal: true, isRequired: false, transformFunction: null }, formData: { classPropertyName: "formData", publicName: "formData", isSignal: true, isRequired: false, transformFunction: null }, button: { classPropertyName: "button", publicName: "button", isSignal: true, isRequired: false, transformFunction: null }, liveValidateInput: { classPropertyName: "liveValidateInput", publicName: "liveValidate", isSignal: true, isRequired: false, transformFunction: null }, autocompleteInput: { classPropertyName: "autocompleteInput", publicName: "autocomplete", isSignal: true, isRequired: false, transformFunction: null }, firstVisualInput: { classPropertyName: "firstVisualInput", publicName: "firstVisual", isSignal: true, isRequired: false, transformFunction: null }, onlyVisual: { classPropertyName: "onlyVisual", publicName: "onlyVisual", isSignal: true, isRequired: false, transformFunction: null }, compact: { classPropertyName: "compact", publicName: "compact", isSignal: true, isRequired: false, transformFunction: null }, mode: { classPropertyName: "mode", publicName: "mode", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, noColon: { classPropertyName: "noColon", publicName: "noColon", isSignal: true, isRequired: false, transformFunction: null }, cleanValue: { classPropertyName: "cleanValue", publicName: "cleanValue", isSignal: true, isRequired: false, transformFunction: null }, delayInput: { classPropertyName: "delayInput", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { expanded: "expandedChange", formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf__inline": "layout() === 'inline'", "class.sf__horizontal": "layout() === 'horizontal'", "class.sf__search": "mode() === 'search'", "class.sf__edit": "mode() === 'edit'", "class.sf__no-error": "onlyVisual()", "class.sf__no-colon": "noColon()", "class.sf__compact": "compact()", "class.sf__collapse": "expandable() && !expanded()" }, classAttribute: "sf" }, providers: [
            WidgetFactory,
            {
                provide: FormPropertyFactory,
                useFactory,
                deps: [Injector, SchemaValidatorFactory, AlainConfigService]
            },
            TerminatorService
        ], exportAs: ["sf"], usesOnChanges: true, ngImport: i0, template: "<ng-template #con>\n  <ng-content />\n</ng-template>\n<ng-template #btnTpl>\n  @if (button() !== 'none') {\n    @let btnRender = _btn.render;\n    @if (btnRender) {\n      <nz-form-item [class]=\"btnRender.class!\" class=\"sf-btns\" [fixed-label]=\"btnRender.spanLabelFixed!\">\n        <div\n          nz-col\n          class=\"ant-form-item-control\"\n          [nzSpan]=\"btnGrid.span\"\n          [nzOffset]=\"btnGrid.offset\"\n          [nzXs]=\"btnGrid.xs\"\n          [nzSm]=\"btnGrid.sm\"\n          [nzMd]=\"btnGrid.md\"\n          [nzLg]=\"btnGrid.lg\"\n          [nzXl]=\"btnGrid.xl\"\n          [nzXXl]=\"btnGrid.xxl\"\n        >\n          <div class=\"ant-form-item-control-input\">\n            <div class=\"ant-form-item-control-input-content\">\n              @if (button()) {\n                <button\n                  type=\"submit\"\n                  nz-button\n                  data-type=\"submit\"\n                  [nzType]=\"_btn.submit_type!\"\n                  [nzSize]=\"btnRender.size!\"\n                  [nzLoading]=\"loading()\"\n                  [disabled]=\"liveValidate() && !valid\"\n                >\n                  @if (_btn.submit_icon) {\n                    <nz-icon\n                      [nzType]=\"_btn.submit_icon.type!\"\n                      [nzTheme]=\"_btn.submit_icon.theme!\"\n                      [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                      [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                    />\n                  }\n                  {{ _btn.submit }}\n                </button>\n                @if (_btn.reset) {\n                  <button\n                    type=\"button\"\n                    nz-button\n                    data-type=\"reset\"\n                    [nzType]=\"_btn.reset_type!\"\n                    [nzSize]=\"btnRender.size!\"\n                    [disabled]=\"loading()\"\n                    (click)=\"reset(true)\"\n                  >\n                    @let resetIcon = _btn.reset_icon;\n                    @if (resetIcon) {\n                      <nz-icon\n                        [nzType]=\"resetIcon.type!\"\n                        [nzTheme]=\"resetIcon.theme!\"\n                        [nzTwotoneColor]=\"resetIcon.twoToneColor!\"\n                        [nzIconfont]=\"resetIcon.iconfont!\"\n                      />\n                    }\n                    {{ _btn.reset }}\n                  </button>\n                }\n                @if (expandable() && _hasCollapse()) {\n                  <button\n                    type=\"button\"\n                    nz-button\n                    nzType=\"text\"\n                    data-type=\"expand\"\n                    [attr.aria-expanded]=\"expanded()\"\n                    (click)=\"expanded.update(v => !v)\"\n                  >\n                    {{ expanded() ? locale.collapse : locale.expand }}\n                  </button>\n                }\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"con\" />\n              }\n            </div>\n          </div>\n        </div>\n      </nz-form-item>\n    }\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"con\" />\n  }\n</ng-template>\n<form\n  nz-form\n  ngNoForm\n  novalidate\n  [nzLayout]=\"layout()\"\n  (submit)=\"onSubmit($event)\"\n  [attr.autocomplete]=\"autocomplete()\"\n>\n  @if (rootProperty) {\n    <sf-item [formProperty]=\"rootProperty\" [footer]=\"btnTpl\" />\n  }\n</form>\n", dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", "nzXXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter", "nzWrap"], exportAs: ["nzRow"] }, { kind: "directive", type: i6.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon", "nzLabelAlign", "nzLabelWrap", "nzSize", "nzVariant", "nzRequiredMark"], exportAs: ["nzForm"] }, { kind: "component", type: i6.NzFormItemComponent, selector: "nz-form-item", inputs: ["nzLayout"], exportAs: ["nzFormItem"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFComponent, decorators: [{
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
                        class: 'sf',
                        '[class.sf__inline]': `layout() === 'inline'`,
                        '[class.sf__horizontal]': `layout() === 'horizontal'`,
                        '[class.sf__search]': `mode() === 'search'`,
                        '[class.sf__edit]': `mode() === 'edit'`,
                        '[class.sf__no-error]': `onlyVisual()`,
                        '[class.sf__no-colon]': `noColon()`,
                        '[class.sf__compact]': `compact()`,
                        '[class.sf__collapse]': `expandable() && !expanded()`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: false, template: "<ng-template #con>\n  <ng-content />\n</ng-template>\n<ng-template #btnTpl>\n  @if (button() !== 'none') {\n    @let btnRender = _btn.render;\n    @if (btnRender) {\n      <nz-form-item [class]=\"btnRender.class!\" class=\"sf-btns\" [fixed-label]=\"btnRender.spanLabelFixed!\">\n        <div\n          nz-col\n          class=\"ant-form-item-control\"\n          [nzSpan]=\"btnGrid.span\"\n          [nzOffset]=\"btnGrid.offset\"\n          [nzXs]=\"btnGrid.xs\"\n          [nzSm]=\"btnGrid.sm\"\n          [nzMd]=\"btnGrid.md\"\n          [nzLg]=\"btnGrid.lg\"\n          [nzXl]=\"btnGrid.xl\"\n          [nzXXl]=\"btnGrid.xxl\"\n        >\n          <div class=\"ant-form-item-control-input\">\n            <div class=\"ant-form-item-control-input-content\">\n              @if (button()) {\n                <button\n                  type=\"submit\"\n                  nz-button\n                  data-type=\"submit\"\n                  [nzType]=\"_btn.submit_type!\"\n                  [nzSize]=\"btnRender.size!\"\n                  [nzLoading]=\"loading()\"\n                  [disabled]=\"liveValidate() && !valid\"\n                >\n                  @if (_btn.submit_icon) {\n                    <nz-icon\n                      [nzType]=\"_btn.submit_icon.type!\"\n                      [nzTheme]=\"_btn.submit_icon.theme!\"\n                      [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                      [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                    />\n                  }\n                  {{ _btn.submit }}\n                </button>\n                @if (_btn.reset) {\n                  <button\n                    type=\"button\"\n                    nz-button\n                    data-type=\"reset\"\n                    [nzType]=\"_btn.reset_type!\"\n                    [nzSize]=\"btnRender.size!\"\n                    [disabled]=\"loading()\"\n                    (click)=\"reset(true)\"\n                  >\n                    @let resetIcon = _btn.reset_icon;\n                    @if (resetIcon) {\n                      <nz-icon\n                        [nzType]=\"resetIcon.type!\"\n                        [nzTheme]=\"resetIcon.theme!\"\n                        [nzTwotoneColor]=\"resetIcon.twoToneColor!\"\n                        [nzIconfont]=\"resetIcon.iconfont!\"\n                      />\n                    }\n                    {{ _btn.reset }}\n                  </button>\n                }\n                @if (expandable() && _hasCollapse()) {\n                  <button\n                    type=\"button\"\n                    nz-button\n                    nzType=\"text\"\n                    data-type=\"expand\"\n                    [attr.aria-expanded]=\"expanded()\"\n                    (click)=\"expanded.update(v => !v)\"\n                  >\n                    {{ expanded() ? locale.collapse : locale.expand }}\n                  </button>\n                }\n              } @else {\n                <ng-template [ngTemplateOutlet]=\"con\" />\n              }\n            </div>\n          </div>\n        </div>\n      </nz-form-item>\n    }\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"con\" />\n  }\n</ng-template>\n<form\n  nz-form\n  ngNoForm\n  novalidate\n  [nzLayout]=\"layout()\"\n  (submit)=\"onSubmit($event)\"\n  [attr.autocomplete]=\"autocomplete()\"\n>\n  @if (rootProperty) {\n    <sf-item [formProperty]=\"rootProperty\" [footer]=\"btnTpl\" />\n  }\n</form>\n" }]
        }], ctorParameters: () => [], propDecorators: { expandable: [{ type: i0.Input, args: [{ isSignal: true, alias: "expandable", required: false }] }], expanded: [{ type: i0.Input, args: [{ isSignal: true, alias: "expanded", required: false }] }, { type: i0.Output, args: ["expandedChange"] }], layoutInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "layout", required: false }] }], schemaInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "schema", required: false }] }], uiInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "ui", required: false }] }], formData: [{ type: i0.Input, args: [{ isSignal: true, alias: "formData", required: false }] }], button: [{ type: i0.Input, args: [{ isSignal: true, alias: "button", required: false }] }], liveValidateInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "liveValidate", required: false }] }], autocompleteInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], firstVisualInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "firstVisual", required: false }] }], onlyVisual: [{ type: i0.Input, args: [{ isSignal: true, alias: "onlyVisual", required: false }] }], compact: [{ type: i0.Input, args: [{ isSignal: true, alias: "compact", required: false }] }], mode: [{ type: i0.Input, args: [{ isSignal: true, alias: "mode", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], noColon: [{ type: i0.Input, args: [{ isSignal: true, alias: "noColon", required: false }] }], cleanValue: [{ type: i0.Input, args: [{ isSignal: true, alias: "cleanValue", required: false }] }], delayInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "delay", required: false }] }], formValueChange: [{ type: i0.Output, args: ["formValueChange"] }], formChange: [{ type: i0.Output, args: ["formChange"] }], formSubmit: [{ type: i0.Output, args: ["formSubmit"] }], formReset: [{ type: i0.Output, args: ["formReset"] }], formError: [{ type: i0.Output, args: ["formError"] }] } });

class SFItemWrapComponent {
    statusSrv = inject(NzFormStatusService);
    // signal 输入；父模板（含第三方自定义 widget）用 `[schema]="schema"` 这样的写法即可绑定
    id = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "id" }] : /* istanbul ignore next */ []));
    schema = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "schema" }] : /* istanbul ignore next */ []));
    ui = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "ui" }] : /* istanbul ignore next */ []));
    showError = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "showError" }] : /* istanbul ignore next */ []));
    error = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "error" }] : /* istanbul ignore next */ []));
    showTitle = input(/* @ts-ignore */
    ...(ngDevMode ? [undefined, { debugName: "showTitle" }] : /* istanbul ignore next */ []));
    title = input(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    /** @internal 模板用 */
    _showTitle = computed(() => !!this.showTitle(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_showTitle" }] : /* istanbul ignore next */ []));
    t = computed(() => {
        const title = this.title();
        return title === null ? this.schema().title : title;
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "t" }] : /* istanbul ignore next */ []));
    oh = computed(() => this.ui().optionalHelp, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "oh" }] : /* istanbul ignore next */ []));
    nzValidateAnimationEnter = withAnimationCheck(() => 'ant-form-validate_animation-enter');
    nzValidateAnimationLeave = withAnimationCheck(() => 'ant-form-validate_animation-leave');
    constructor() {
        // 「错误状态 → 通知 NzFormStatusService」的响应式副作用。
        //
        // effect 每次 CD 都会重跑，因此这里必须是幂等推导，并且要与另一处写入源
        // `FormProperty.updateFeedback()`（推 `{status: feedback, hasFeedback: !!feedback}`）
        // 的语义一致，否则会把它的状态覆盖掉。
        //
        // 推导规则（对两个来源等价）：
        // - `ui.feedback` 有值 → 以它为准，hasFeedback = true
        // - 否则回落到校验错误 → status = 'error'，hasFeedback 仍取决于 feedback
        effect(() => {
            const feedback = (this.ui().feedback ?? '');
            const hasError = !!this.error();
            this.statusSrv.formStatusChanges.next({
                status: feedback || (hasError ? 'error' : ''),
                hasFeedback: !!feedback
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFItemWrapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: SFItemWrapComponent, isStandalone: false, selector: "sf-item-wrap", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null }, schema: { classPropertyName: "schema", publicName: "schema", isSignal: true, isRequired: true, transformFunction: null }, ui: { classPropertyName: "ui", publicName: "ui", isSignal: true, isRequired: true, transformFunction: null }, showError: { classPropertyName: "showError", publicName: "showError", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, showTitle: { classPropertyName: "showTitle", publicName: "showTitle", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@let ui = this.ui();\n@let oh = this.oh();\n<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError()\"\n  [class.ant-form-item-with-help]=\"showError()\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  @if (_showTitle()) {\n    <div nz-col [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n      @if (t()) {\n        <label [attr.for]=\"id()\" [class.ant-form-item-required]=\"ui._required\">\n          <span class=\"sf__label-text\">{{ t() }}</span>\n          @if (ui.optional || oh) {\n            <span class=\"sf__optional\">\n              {{ ui.optional }}\n              @if (oh) {\n                <nz-icon\n                  nz-tooltip\n                  [nzTooltipTitle]=\"oh.text\"\n                  [nzTooltipPlacement]=\"oh.placement\"\n                  [nzTooltipTrigger]=\"oh.trigger\"\n                  [nzTooltipColor]=\"oh.bgColor\"\n                  [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n                  [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n                  [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n                  [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n                  [nzType]=\"oh.icon!\"\n                />\n              }\n            </span>\n          }\n        </label>\n      }\n    </div>\n  }\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    @if (!ui.onlyVisual && showError()) {\n      <div\n        [animate.enter]=\"nzValidateAnimationEnter()\"\n        [animate.leave]=\"nzValidateAnimationLeave()\"\n        class=\"ant-form-item-explain ant-form-item-explain-connected\"\n      >\n        <div role=\"alert\" class=\"ant-form-item-explain-error\">\n          {{ error() }}\n        </div>\n      </div>\n    }\n    @if (schema().description) {\n      <div class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n    }\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", "nzXXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter", "nzWrap"], exportAs: ["nzRow"] }, { kind: "component", type: i6.NzFormItemComponent, selector: "nz-form-item", inputs: ["nzLayout"], exportAs: ["nzFormItem"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: false, template: "@let ui = this.ui();\n@let oh = this.oh();\n<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError()\"\n  [class.ant-form-item-with-help]=\"showError()\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  @if (_showTitle()) {\n    <div nz-col [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n      @if (t()) {\n        <label [attr.for]=\"id()\" [class.ant-form-item-required]=\"ui._required\">\n          <span class=\"sf__label-text\">{{ t() }}</span>\n          @if (ui.optional || oh) {\n            <span class=\"sf__optional\">\n              {{ ui.optional }}\n              @if (oh) {\n                <nz-icon\n                  nz-tooltip\n                  [nzTooltipTitle]=\"oh.text\"\n                  [nzTooltipPlacement]=\"oh.placement\"\n                  [nzTooltipTrigger]=\"oh.trigger\"\n                  [nzTooltipColor]=\"oh.bgColor\"\n                  [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n                  [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n                  [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n                  [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n                  [nzType]=\"oh.icon!\"\n                />\n              }\n            </span>\n          }\n        </label>\n      }\n    </div>\n  }\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    @if (!ui.onlyVisual && showError()) {\n      <div\n        [animate.enter]=\"nzValidateAnimationEnter()\"\n        [animate.leave]=\"nzValidateAnimationLeave()\"\n        class=\"ant-form-item-explain ant-form-item-explain-connected\"\n      >\n        <div role=\"alert\" class=\"ant-form-item-explain-error\">\n          {{ error() }}\n        </div>\n      </div>\n    }\n    @if (schema().description) {\n      <div class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n    }\n  </div>\n</nz-form-item>\n" }]
        }], ctorParameters: () => [], propDecorators: { id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }], schema: [{ type: i0.Input, args: [{ isSignal: true, alias: "schema", required: true }] }], ui: [{ type: i0.Input, args: [{ isSignal: true, alias: "ui", required: true }] }], showError: [{ type: i0.Input, args: [{ isSignal: true, alias: "showError", required: false }] }], error: [{ type: i0.Input, args: [{ isSignal: true, alias: "error", required: false }] }], showTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "showTitle", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }] } });

class SFTemplateDirective {
    table = inject(SFComponent);
    templateRef = inject(TemplateRef);
    path = input.required({ ...(ngDevMode ? { debugName: "path" } : /* istanbul ignore next */ {}), alias: 'sf-template' });
    ngOnInit() {
        const path = this.path();
        this.table._addTpl(path.startsWith(SF_SEQ) ? path : SF_SEQ + path, this.templateRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "22.1.7", type: SFTemplateDirective, isStandalone: false, selector: "[sf-template]", inputs: { path: { classPropertyName: "path", publicName: "sf-template", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SFTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[sf-template]',
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }], propDecorators: { path: [{ type: i0.Input, args: [{ isSignal: true, alias: "sf-template", required: true }] }] } });

class Widget {
    /**
     * 仅内部使用：在 `ngAfterViewInit` 的错误推送里强制刷新一次 widget 视图，
     * 使 `[ngModel]` 的 model→view 写入（`writeValue`）落在同一个 tick 内。
     *
     * widget 的状态本身都会自行标脏——`ui`/`schema` 是响应式代理，局部字段与
     * `showError`/`error` 是 signal——所以这是唯一需要手动刷新的一处。
     */
    cdr = inject(ChangeDetectorRef);
    /** 错误订阅随 widget 自身销毁而结束：`ui.widget` 变化会让 `sf-item` 重建 widget */
    destroyRef = inject(DestroyRef);
    injector = inject(Injector);
    sfItemComp = inject(SFItemComponent);
    sfComp = inject(SFComponent);
    // #region 响应式状态
    //
    // 以下成员由 `SFItemComponent.onWidgetInstanciated` 赋值，并被 widget 模板直接读取。
    // 采用「同名 getter/setter + signal 内核」，因此既有模板写法（如 `[showError]="showError"`）
    // 仍然有效，同时在模板或 `computed` 中读取时会自动建立依赖。
    _formProperty$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_formProperty$" }] : /* istanbul ignore next */ []));
    _schema$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_schema$" }] : /* istanbul ignore next */ []));
    _ui$ = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_ui$" }] : /* istanbul ignore next */ []));
    _id$ = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_id$" }] : /* istanbul ignore next */ []));
    _error$ = signal(undefined, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_error$" }] : /* istanbul ignore next */ []));
    _showError$ = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_showError$" }] : /* istanbul ignore next */ []));
    get formProperty() {
        return this._formProperty$();
    }
    set formProperty(value) {
        this._formProperty$.set(value);
    }
    get schema() {
        return this._schema$();
    }
    set schema(value) {
        this._schema$.set(value);
    }
    get ui() {
        return this._ui$();
    }
    set ui(value) {
        this._ui$.set(value);
    }
    get id() {
        return this._id$();
    }
    set id(value) {
        this._id$.set(value);
    }
    get error() {
        return this._error$();
    }
    set error(value) {
        this._error$.set(value);
    }
    get showError() {
        return this._showError$();
    }
    set showError(value) {
        this._showError$.set(value);
    }
    // #endregion
    get cls() {
        return this.ui.class ?? '';
    }
    get disabled() {
        if (this.schema.readOnly === true || this.sfComp.disabled()) {
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
        return this.sfComp.cleanValue();
    }
    /**
     * 是否显示错误：数组/对象这类布局 widget 为 `false`
     *
     * 它们的 `errorsChanges` 携带的是**子节点的聚合错误**，显示出来会和子字段行内的报错重复；
     * 子节点的错误由它们各自的 widget 显示。
     */
    displayError = true;
    ngAfterViewInit() {
        if (this.displayError) {
            this.formProperty.errorsChanges
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((errors) => {
                if (errors == null)
                    return;
                di(this.ui, 'errorsChanges', this.formProperty.path, errors);
                // 不显示首次校验视觉
                const firstVisual = this.sfComp?.firstVisual();
                // 门控用 `_rendered`（首次渲染完成），不能用 `_inited`：widget 对 `errorsChanges`
                // 是「订阅即回放」，订阅时 `_inited` 已为真，抑制会失效
                if (firstVisual || (!firstVisual && this.sfComp?._rendered)) {
                    this.showError = errors.length > 0;
                    this.error = this.showError ? errors[0].message : '';
                    // 强制刷新 widget 自身视图：`[ngModel]` 的 model→view 写入（`writeValue`）
                    // 必须在同一个 tick 内完成，否则输入框拿不到初值。
                    // 与 `showError`/`error` 无关——它们由 signal 自行驱动。
                    this.cdr.detectChanges();
                }
            });
        }
        this.afterViewInit();
        // 初始值推送：`refreshSchema()` 的 `reset()` 跑在首次 CD 之前，那时 widget 还没创建，
        // `AtomicProperty.resetValue` 的 `if (this.widget)` 分支被跳过，所以这里补一次。
        //
        // 必须放在 `afterViewInit()` 之后：
        //  - 更早（在 `sf-item` 创建组件处）会早于 widget 的 `ngOnInit`：`DateWidget` 依赖
        //    `ngOnInit` 里解析的 format，会抛 `TypeError: value.map is not a function`；
        //  - 早于 `afterViewInit()`：`AutoCompleteWidget` 的 `isAsync`/`list` 尚未就绪，
        //    `reset()` 会走错分支（`typing` 拿到原值而不是 label）。
        // 这一次推送的是初值，不算用户变更
        this.sfComp._runSilently(() => this.reset(this.formProperty.value));
    }
    setValue(value) {
        this.formProperty.setValue(value, false);
        di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
    }
    get value() {
        return this.formProperty.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: Widget, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "22.1.7", type: Widget, isStandalone: true, host: { properties: { "class": "cls" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: Widget, decorators: [{
            type: Directive,
            args: [{
                    host: { '[class]': 'cls' }
                }]
        }] });
class ControlWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ControlWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "22.1.7", type: ControlWidget, isStandalone: true, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ControlWidget, decorators: [{
            type: Directive
        }] });
class ControlUIWidget extends Widget {
    reset(_value) { }
    afterViewInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ControlUIWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "22.1.7", type: ControlUIWidget, isStandalone: true, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ControlUIWidget, decorators: [{
            type: Directive
        }] });
class ArrayLayoutWidget extends Widget {
    displayError = false;
    reset(_value) { }
    afterViewInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ArrayLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "22.1.7", type: ArrayLayoutWidget, isStandalone: true, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ArrayLayoutWidget, decorators: [{
            type: Directive
        }] });
class ObjectLayoutWidget extends Widget {
    displayError = false;
    reset(_value) { }
    afterViewInit() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ObjectLayoutWidget, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "22.1.7", type: ObjectLayoutWidget, isStandalone: true, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ObjectLayoutWidget, decorators: [{
            type: Directive
        }] });

class ArrayWidget extends ArrayLayoutWidget {
    addTitle;
    addType;
    removeTitle;
    arraySpan = 8;
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
        this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle ?? this.l.addText);
        this.addType = addType ?? 'dashed';
        this.removeTitle = removable === false ? null : (removeTitle ?? this.l.removeText);
    }
    reValid(options) {
        this.formProperty.updateValueAndValidity({
            onlySelf: false,
            emitValueEvent: false,
            emitValidator: true,
            ...options
        });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        this.ui.add?.(property);
    }
    removeItem(index) {
        const updatePath = this.formProperty.properties[index].path;
        this.formProperty.remove(index);
        this.reValid({ updatePath, emitValueEvent: true });
        this.ui.remove?.(index);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: ArrayWidget, isStandalone: false, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: `<nz-form-item [class.ant-form-item-with-help]="showError">
    @if (schema.title) {
      <div nz-col [nzSpan]="ui.spanLabel!" class="ant-form-item-label">
        <label [class.ant-form-item-required]="ui.required">
          {{ schema.title }}
          <span class="sf__optional">
            {{ ui.optional }}
            @if (oh) {
              <nz-icon
                nz-tooltip
                [nzTooltipTitle]="oh.text"
                [nzTooltipPlacement]="oh.placement"
                [nzTooltipTrigger]="oh.trigger"
                [nzTooltipOverlayClassName]="oh.overlayClassName"
                [nzTooltipOverlayStyle]="oh.overlayStyle"
                [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                [nzType]="oh.icon!"
              />
            }
          </span>
        </label>
        <div class="sf__array-add">
          <button
            type="button"
            nz-button
            [nzType]="addType"
            [disabled]="addDisabled"
            (click)="addItem()"
            [innerHTML]="addTitle"
          ></button>
        </div>
      </div>
    }
    <div nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl!" [nzOffset]="ui.offsetControl!">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <div nz-row class="sf__array-container">
          @for (i of $any(formProperty).properties; track i) {
            @if (i.visible && !i.ui.hidden) {
              <div nz-col [nzSpan]="arraySpan" [attr.data-index]="$index" class="sf__array-item">
                <nz-card>
                  <sf-item [formProperty]="i" />
                  @if (showRemove) {
                    <span class="sf__array-remove" (click)="removeItem($index)" [attr.title]="removeTitle">
                      <nz-icon nzType="delete" />
                    </span>
                  }
                </nz-card>
              </div>
            }
          }
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`, isInline: true, dependencies: [{ kind: "component", type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i4$1.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", "nzXXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter", "nzWrap"], exportAs: ["nzRow"] }, { kind: "component", type: i6.NzFormItemComponent, selector: "nz-form-item", inputs: ["nzLayout"], exportAs: ["nzFormItem"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ArrayWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-array',
                    template: `<nz-form-item [class.ant-form-item-with-help]="showError">
    @if (schema.title) {
      <div nz-col [nzSpan]="ui.spanLabel!" class="ant-form-item-label">
        <label [class.ant-form-item-required]="ui.required">
          {{ schema.title }}
          <span class="sf__optional">
            {{ ui.optional }}
            @if (oh) {
              <nz-icon
                nz-tooltip
                [nzTooltipTitle]="oh.text"
                [nzTooltipPlacement]="oh.placement"
                [nzTooltipTrigger]="oh.trigger"
                [nzTooltipOverlayClassName]="oh.overlayClassName"
                [nzTooltipOverlayStyle]="oh.overlayStyle"
                [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                [nzType]="oh.icon!"
              />
            }
          </span>
        </label>
        <div class="sf__array-add">
          <button
            type="button"
            nz-button
            [nzType]="addType"
            [disabled]="addDisabled"
            (click)="addItem()"
            [innerHTML]="addTitle"
          ></button>
        </div>
      </div>
    }
    <div nz-col class="ant-form-item-control-wrapper" [nzSpan]="ui.spanControl!" [nzOffset]="ui.offsetControl!">
      <div class="ant-form-item-control" [class.has-error]="showError">
        <div nz-row class="sf__array-container">
          @for (i of $any(formProperty).properties; track i) {
            @if (i.visible && !i.ui.hidden) {
              <div nz-col [nzSpan]="arraySpan" [attr.data-index]="$index" class="sf__array-item">
                <nz-card>
                  <sf-item [formProperty]="i" />
                  @if (showRemove) {
                    <span class="sf__array-remove" (click)="removeItem($index)" [attr.title]="removeTitle">
                      <nz-icon nzType="delete" />
                    </span>
                  }
                </nz-card>
              </div>
            }
          }
        </div>
        @if (!ui.onlyVisual && showError) {
          <div class="ant-form-explain">{{ error }}</div>
        }
        @if (schema.description) {
          <div [innerHTML]="ui._description" class="ant-form-extra"></div>
        }
      </div>
    </div>
  </nz-form-item>`,
                    host: { '[class.sf__array]': 'true' },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class BooleanWidget extends ControlUIWidget {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: BooleanWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.1.7", type: BooleanWidget, isStandalone: false, selector: "sf-boolean", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-switch
      [nzId]="id"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzCheckedChildren]="ui.checkedChildren!"
      [nzUnCheckedChildren]="ui.unCheckedChildren!"
      [nzLoading]="ui.loading"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$2.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: BooleanWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-boolean',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-switch
      [nzId]="id"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzCheckedChildren]="ui.checkedChildren!"
      [nzUnCheckedChildren]="ui.unCheckedChildren!"
      [nzLoading]="ui.loading"
    />
  </sf-item-wrap>`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class CheckboxWidget extends ControlUIWidget {
    data = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    allChecked = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "allChecked" }] : /* istanbul ignore next */ []));
    indeterminate = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []));
    grid_span = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "grid_span" }] : /* istanbul ignore next */ []));
    labelTitle = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "labelTitle" }] : /* istanbul ignore next */ []));
    inited = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "inited" }] : /* istanbul ignore next */ []));
    reset(value) {
        this.inited.set(false);
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data.set(list);
            this.allChecked.set(false);
            this.indeterminate.set(false);
            this.labelTitle.set(list.length === 0 ? '' : this.schema.title);
            const { span } = this.ui;
            this.grid_span.set(span && span > 0 ? span : 0);
            this.updateAllChecked();
            this.inited.set(true);
        });
    }
    _setValue(value) {
        this.setValue(value);
        this.notifyChange(value);
    }
    notifySet() {
        const checkList = this.data().filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    groupInGridChange(values) {
        this.data().forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.bumpData();
        this.notifySet();
    }
    onAllChecked() {
        this.data().forEach(item => (item.checked = this.allChecked()));
        this.bumpData();
        this.notifySet();
    }
    updateAllChecked() {
        if (this.data().every(item => item.checked !== true)) {
            this.allChecked.set(false);
            this.indeterminate.set(false);
        }
        else if (this.data().every(item => item.checked === true)) {
            this.allChecked.set(true);
            this.indeterminate.set(false);
        }
        else {
            this.indeterminate.set(true);
        }
        return this;
    }
    /** 元素级 `item.checked` 是就地修改的，用数组身份替换让 OnPush 视图刷新 */
    bumpData() {
        this.data.set([...this.data()]);
    }
    notifyChange(res) {
        this.ui.change?.(res);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: CheckboxWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: CheckboxWidget, isStandalone: false, selector: "sf-checkbox", usesInheritance: true, ngImport: i0, template: `
    @let list = data();
    @let span = grid_span();
    <ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate()"
        >
          {{ ui.checkAllText ?? l.checkAllText }}
        </label>
      }
    </ng-template>
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="true"
      [title]="labelTitle()"
    >
      @if (inited()) {
        @if (list.length === 0) {
          <label
            nz-checkbox
            [nzDisabled]="disabled"
            [ngModel]="value"
            (ngModelChange)="_setValue($event)"
            [ngModelOptions]="{ standalone: true }"
          >
            {{ schema.title }}
            <span class="sf__optional">
              {{ ui.optional }}
              @if (oh) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="oh.text"
                  [nzTooltipPlacement]="oh.placement"
                  [nzTooltipTrigger]="oh.trigger"
                  [nzTooltipOverlayClassName]="oh.overlayClassName"
                  [nzTooltipOverlayStyle]="oh.overlayStyle"
                  [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                  [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                  [nzType]="oh.icon!"
                />
              }
            </span>
          </label>
        } @else {
          @if (span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group
              [nzDisabled]="disabled"
              [ngModel]="value"
              [ngModelOptions]="{ standalone: true }"
              [nzOptions]="$any(list)"
              (ngModelChange)="groupInGridChange($event)"
            />
          } @else {
            <nz-checkbox-group
              class="sf__checkbox-list"
              [ngModel]="value"
              (ngModelChange)="groupInGridChange($event)"
              [ngModelOptions]="{ standalone: true }"
            >
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of list; track $index) {
                  <div nz-col [nzSpan]="span">
                    <label
                      nz-checkbox
                      [nzValue]="i.value"
                      [ngModel]="i.checked"
                      [ngModelOptions]="{ standalone: true }"
                      [nzDisabled]="disabled || i.disabled"
                    >
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-group>
          }
        }
      }
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i4$2.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId", "nzName"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i4$2.NzCheckboxGroupComponent, selector: "nz-checkbox-group", inputs: ["nzName", "nzDisabled", "nzOptions"], exportAs: ["nzCheckboxGroup"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", "nzXXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter", "nzWrap"], exportAs: ["nzRow"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: CheckboxWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-checkbox',
                    template: `
    @let list = data();
    @let span = grid_span();
    <ng-template #all>
      @if (ui.checkAll) {
        <label
          nz-checkbox
          class="sf__checkbox-all mr-sm"
          [(ngModel)]="allChecked"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="onAllChecked()"
          [nzIndeterminate]="indeterminate()"
        >
          {{ ui.checkAllText ?? l.checkAllText }}
        </label>
      }
    </ng-template>
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="true"
      [title]="labelTitle()"
    >
      @if (inited()) {
        @if (list.length === 0) {
          <label
            nz-checkbox
            [nzDisabled]="disabled"
            [ngModel]="value"
            (ngModelChange)="_setValue($event)"
            [ngModelOptions]="{ standalone: true }"
          >
            {{ schema.title }}
            <span class="sf__optional">
              {{ ui.optional }}
              @if (oh) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="oh.text"
                  [nzTooltipPlacement]="oh.placement"
                  [nzTooltipTrigger]="oh.trigger"
                  [nzTooltipOverlayClassName]="oh.overlayClassName"
                  [nzTooltipOverlayStyle]="oh.overlayStyle"
                  [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                  [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                  [nzType]="oh.icon!"
                />
              }
            </span>
          </label>
        } @else {
          @if (span === 0) {
            <ng-template [ngTemplateOutlet]="all" />
            <nz-checkbox-group
              [nzDisabled]="disabled"
              [ngModel]="value"
              [ngModelOptions]="{ standalone: true }"
              [nzOptions]="$any(list)"
              (ngModelChange)="groupInGridChange($event)"
            />
          } @else {
            <nz-checkbox-group
              class="sf__checkbox-list"
              [ngModel]="value"
              (ngModelChange)="groupInGridChange($event)"
              [ngModelOptions]="{ standalone: true }"
            >
              <div nz-row>
                @if (ui.checkAll) {
                  <div nz-col [nzSpan]="span">
                    <ng-template [ngTemplateOutlet]="all" />
                  </div>
                }
                @for (i of list; track $index) {
                  <div nz-col [nzSpan]="span">
                    <label
                      nz-checkbox
                      [nzValue]="i.value"
                      [ngModel]="i.checked"
                      [ngModelOptions]="{ standalone: true }"
                      [nzDisabled]="disabled || i.disabled"
                    >
                      {{ i.label }}
                    </label>
                  </div>
                }
              </div>
            </nz-checkbox-group>
          }
        }
      }
    </sf-item-wrap>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class CustomWidget extends ControlUIWidget {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: CustomWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.1.7", type: CustomWidget, isStandalone: false, selector: "sf-custom", usesInheritance: true, ngImport: i0, template: `
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
      />
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: CustomWidget, decorators: [{
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
      />
    </sf-item-wrap>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class DateWidget extends ControlUIWidget {
    startFormat;
    endFormat;
    flatRange = false;
    mode;
    displayValue = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "displayValue" }] : /* istanbul ignore next */ []));
    displayFormat;
    i;
    ngOnInit() {
        const { mode, end, displayFormat, allowClear, showToday } = this.ui;
        this.mode = mode ?? 'date';
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
                formatString: this.endFormat ?? this.startFormat,
                defaultValue: null
            });
            this.displayValue.set(value == null || endValue == null ? [] : [value, endValue]);
        }
        else {
            this.displayValue.set(value);
        }
        // `flatRange` 缺一端时 `displayValue` 是 `[]`、单值模式是 `Date`，
        // 只有拿到完整值才回写：`_change()` 会把不完整的值当成空值，把仅剩的一端清掉
        const displayValue = this.displayValue();
        if (displayValue != null && (!Array.isArray(displayValue) || displayValue.length >= 2)) {
            // `ui.end` 指向的属性会被 `coverProperty` 置为 `hidden`，
            // 因此它**没有 widget**：整轮 reset 走到它时，`AtomicProperty.resetValue` 会把
            // `schema.default` 原样写回 `_value`，没有 widget 会再去格式化它。
            // → 同步回写一定会被这一步覆盖，必须等**整轮 reset 走完**。
            // 用微任务而不是渲染回调：整轮 reset 期间随时可能被别处的强制 CD 冲出来，
            // 那时 reset 还没走完，回写又会被覆盖。
            // 这次也是在补初值，不算用户变更。
            queueMicrotask(() => this.sfComp._runSilently(() => this._change(this.displayValue(), false)));
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
            ? [format(value[0], this.startFormat), format(value[1], this.endFormat ?? this.startFormat)]
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
        this.ui.onOpenChange?.(status);
    }
    _ok(value) {
        this.ui.onOk?.(value);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: DateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: DateWidget, isStandalone: false, selector: "sf-date", usesInheritance: true, ngImport: i0, template: `
    @let showWeekNumber = ui.showWeekNumber ?? false;
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @switch (mode) {
        @case ('year') {
          <nz-year-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('month') {
          <nz-month-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('week') {
          <nz-week-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOpenChange)="_openChange($event)"
          />
        }
        @case ('range') {
          <nz-range-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzRanges]="ui.ranges"
            [nzShowTime]="ui.showTime"
            [nzSeparator]="ui.separator"
            [nzShowWeekNumber]="showWeekNumber"
            [nzMode]="$any(ui.rangeMode)"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
        @default {
          <nz-date-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzShowTime]="ui.showTime"
            [nzShowToday]="i.showToday"
            [nzShowWeekNumber]="showWeekNumber"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
      }
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-quarter-picker,nz-year-picker,nz-range-picker", inputs: ["nzInline", "nzAllowClear", "nzAutoFocus", "nzDisabled", "nzInputReadOnly", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzVariant", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i2$3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i2$3.NzMonthPickerComponent, selector: "nz-month-picker", exportAs: ["nzMonthPicker"] }, { kind: "directive", type: i2$3.NzYearPickerComponent, selector: "nz-year-picker", exportAs: ["nzYearPicker"] }, { kind: "directive", type: i2$3.NzWeekPickerComponent, selector: "nz-week-picker", exportAs: ["nzWeekPicker"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: DateWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-date',
                    template: `
    @let showWeekNumber = ui.showWeekNumber ?? false;
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @switch (mode) {
        @case ('year') {
          <nz-year-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('month') {
          <nz-month-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
          />
        }
        @case ('week') {
          <nz-week-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOpenChange)="_openChange($event)"
          />
        }
        @case ('range') {
          <nz-range-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzRanges]="ui.ranges"
            [nzShowTime]="ui.showTime"
            [nzSeparator]="ui.separator"
            [nzShowWeekNumber]="showWeekNumber"
            [nzMode]="$any(ui.rangeMode)"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
        @default {
          <nz-date-picker
            [nzId]="id"
            [nzDisabled]="disabled"
            [nzSize]="ui.size!"
            [nzAutoFocus]="ui.autoFocus"
            [nzFormat]="displayFormat"
            [(ngModel)]="displayValue"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="_change($event)"
            [nzAllowClear]="i.allowClear"
            [class]="ui.className!"
            [nzDisabledDate]="ui.disabledDate"
            [nzLocale]="ui.locale!"
            [nzPlaceHolder]="ui.placeholder!"
            [nzPopupStyle]="ui.popupStyle!"
            [nzDropdownClassName]="ui.dropdownClassName"
            (nzOnOpenChange)="_openChange($event)"
            [nzDisabledTime]="ui.disabledTime"
            [nzRenderExtraFooter]="ui.renderExtraFooter"
            [nzShowTime]="ui.showTime"
            [nzShowToday]="i.showToday"
            [nzShowWeekNumber]="showWeekNumber"
            [nzInputReadOnly]="ui.inputReadOnly"
            [nzInline]="ui.inline!"
            (nzOnOk)="_ok($event)"
          />
        }
      }
    </sf-item-wrap>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class NumberWidget extends ControlUIWidget {
    min = Number.MIN_SAFE_INTEGER;
    max = Number.MAX_SAFE_INTEGER;
    step;
    formatter;
    parser;
    width = '';
    ngOnInit() {
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
        this.step = multipleOf ?? 1;
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
            ui.parser = value => +value.replace(`${ui.prefix} `, '');
        }
        if (ui.unit != null) {
            ui.formatter = value => (value == null ? '' : `${value} ${ui.unit}`);
            ui.parser = value => +value.replace(` ${ui.unit}`, '');
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
        this.width = typeof ui.widgetWidth === 'number' ? `${ui.widgetWidth}px` : (ui.widgetWidth ?? '90px');
    }
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
        this.ui.change?.(this.value);
    }
    focus() {
        this.ui.focus?.();
    }
    blur() {
        this.ui.blur?.();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: NumberWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "22.1.7", type: NumberWidget, isStandalone: false, selector: "sf-number", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-input-number
      [nzId]="id"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="_setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzVariant]="ui.variant ?? 'outlined'"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      [nzPrecision]="ui.precision ?? null"
      [nzPlaceHolder]="ui.placeholder ?? ''"
      [nzChangeOnWheel]="ui.changeOnWheel ?? true"
      [nzAutoFocus]="ui.autofocus"
      [nzAddonBefore]="ui.addOnBefore!"
      [nzAddonAfter]="ui.addOnAfter!"
      (nzFocus)="focus()"
      (nzBlur)="blur()"
      [style.width]="width"
      [class.ant-input-number__hide-step]="ui.hideStep"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$4.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzId", "nzSize", "nzPlaceHolder", "nzStatus", "nzVariant", "nzStep", "nzMin", "nzMax", "nzPrecision", "nzParser", "nzFormatter", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzKeyboard", "nzControls", "nzChangeOnWheel", "nzPrefix", "nzSuffix", "nzAddonBefore", "nzAddonAfter"], outputs: ["nzBlur", "nzFocus", "nzOnStep"], exportAs: ["nzInputNumber"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: NumberWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-number',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-input-number
      [nzId]="id"
      [ngModel]="value"
      [ngModelOptions]="{ standalone: true }"
      (ngModelChange)="_setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzVariant]="ui.variant ?? 'outlined'"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      [nzPrecision]="ui.precision ?? null"
      [nzPlaceHolder]="ui.placeholder ?? ''"
      [nzChangeOnWheel]="ui.changeOnWheel ?? true"
      [nzAutoFocus]="ui.autofocus"
      [nzAddonBefore]="ui.addOnBefore!"
      [nzAddonAfter]="ui.addOnAfter!"
      (nzFocus)="focus()"
      (nzBlur)="blur()"
      [style.width]="width"
      [class.ant-input-number__hide-step]="ui.hideStep"
    />
  </sf-item-wrap>`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class ObjectWidget extends ObjectLayoutWidget {
    grid;
    type = 'default';
    list = [];
    title;
    showExpand = true;
    expand = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "expand" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        const { formProperty, ui } = this;
        const { grid, showTitle, type } = ui;
        this.showExpand = toBool(ui.showExpand, true);
        this.expand.set(toBool(ui.expand, true));
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
                grid: property.ui.grid ?? grid ?? {},
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
        this.expand.set(!this.expand());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ObjectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: ObjectWidget, isStandalone: false, selector: "sf-object", usesInheritance: true, ngImport: i0, template: `@let isExpand = expand();
    <ng-template #default let-noTitle>
      @if (!noTitle && title) {
        <div class="sf__title">{{ title }}</div>
      }
      @if (grid) {
        <div nz-row [nzGutter]="grid.gutter">
          @for (i of list; track $index) {
            @if (i.property.visible && i.show) {
              <div
                nz-col
                [nzSpan]="i.grid.span"
                [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs"
                [nzSm]="i.grid.sm"
                [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg"
                [nzXl]="i.grid.xl"
                [nzXXl]="i.grid.xxl"
              >
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
              </div>
            }
          }
        </div>
      } @else {
        @for (i of list; track $index) {
          @if (i.property.visible && i.show) {
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
          }
        }
      }
    </ng-template>
    @if (type === 'card') {
      <nz-card
        [nzTitle]="cardTitleTpl"
        [nzExtra]="ui.cardExtra"
        [nzSize]="ui.cardSize ?? 'small'"
        [nzActions]="ui.cardActions ?? []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered ?? true"
        class="sf__object-card"
        [class.sf__object-card-fold]="!isExpand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <nz-icon [nzType]="isExpand ? 'down' : 'up'" class="mr-xs text-xs" />
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <nz-icon
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    [nzType]="oh.icon!"
                  />
                }
              </span>
            }
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="default" [ngTemplateOutletContext]="{ $implicit: true }" />
      </nz-card>
    } @else {
      <ng-template [ngTemplateOutlet]="default" />
    }`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i4$1.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", "nzXXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter", "nzWrap"], exportAs: ["nzRow"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5$1.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: ObjectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-object',
                    template: `@let isExpand = expand();
    <ng-template #default let-noTitle>
      @if (!noTitle && title) {
        <div class="sf__title">{{ title }}</div>
      }
      @if (grid) {
        <div nz-row [nzGutter]="grid.gutter">
          @for (i of list; track $index) {
            @if (i.property.visible && i.show) {
              <div
                nz-col
                [nzSpan]="i.grid.span"
                [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs"
                [nzSm]="i.grid.sm"
                [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg"
                [nzXl]="i.grid.xl"
                [nzXXl]="i.grid.xxl"
              >
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
              </div>
            }
          }
        </div>
      } @else {
        @for (i of list; track $index) {
          @if (i.property.visible && i.show) {
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed" />
          }
        }
      }
    </ng-template>
    @if (type === 'card') {
      <nz-card
        [nzTitle]="cardTitleTpl"
        [nzExtra]="ui.cardExtra"
        [nzSize]="ui.cardSize ?? 'small'"
        [nzActions]="ui.cardActions ?? []"
        [nzBodyStyle]="ui.cardBodyStyle!"
        [nzBordered]="ui.cardBordered ?? true"
        class="sf__object-card"
        [class.sf__object-card-fold]="!isExpand"
      >
        <ng-template #cardTitleTpl>
          <div [class.point]="showExpand" (click)="changeExpand()">
            @if (showExpand) {
              <nz-icon [nzType]="isExpand ? 'down' : 'up'" class="mr-xs text-xs" />
            }
            {{ title }}
            @if (ui.optional || oh) {
              <span class="sf__optional">
                {{ ui.optional }}
                @if (oh) {
                  <nz-icon
                    nz-tooltip
                    [nzTooltipTitle]="oh.text"
                    [nzTooltipPlacement]="oh.placement"
                    [nzTooltipTrigger]="oh.trigger"
                    [nzTooltipColor]="oh.bgColor"
                    [nzTooltipOverlayClassName]="oh.overlayClassName"
                    [nzTooltipOverlayStyle]="oh.overlayStyle"
                    [nzTooltipMouseEnterDelay]="oh.mouseEnterDelay"
                    [nzTooltipMouseLeaveDelay]="oh.mouseLeaveDelay"
                    [nzType]="oh.icon!"
                  />
                }
              </span>
            }
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="default" [ngTemplateOutletContext]="{ $implicit: true }" />
      </nz-card>
    } @else {
      <ng-template [ngTemplateOutlet]="default" />
    }`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class RadioWidget extends ControlUIWidget {
    data = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    styleType = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "styleType" }] : /* istanbul ignore next */ []));
    reset(value) {
        this.styleType.set((this.ui.styleType ?? 'default') === 'default');
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data.set(list);
        });
    }
    _setValue(value) {
        this.setValue(value);
        this.ui.change?.(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: RadioWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: RadioWidget, isStandalone: false, selector: "sf-radio", usesInheritance: true, ngImport: i0, template: `
    @let list = data();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-radio-group
        [nzSize]="ui.size!"
        [nzName]="id"
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [nzButtonStyle]="ui.buttonStyle ?? 'outline'"
      >
        @if (styleType()) {
          @for (option of list; track $index) {
            <label nz-radio [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        } @else {
          @for (option of list; track $index) {
            <label nz-radio-button [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        }
      </nz-radio-group>
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2$5.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "component", type: i2$5.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: RadioWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-radio',
                    template: `
    @let list = data();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-radio-group
        [nzSize]="ui.size!"
        [nzName]="id"
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [nzButtonStyle]="ui.buttonStyle ?? 'outline'"
      >
        @if (styleType()) {
          @for (option of list; track $index) {
            <label nz-radio [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        } @else {
          @for (option of list; track $index) {
            <label nz-radio-button [nzValue]="option.value" [nzDisabled]="disabled || option.disabled">
              <span [innerHTML]="option.label"></span>
            </label>
          }
        }
      </nz-radio-group>
    </sf-item-wrap>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class SelectWidget extends ControlUIWidget {
    search$ = new Subject();
    i;
    data = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    _value = signal(undefined, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_value" }] : /* istanbul ignore next */ []));
    loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    /** 模板读取，且在异步 `checkGroup()` 中写入，必须是 signal 才能保证 OnPush 刷新 */
    hasGroup = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hasGroup" }] : /* istanbul ignore next */ []));
    checkGroup(list) {
        this.hasGroup.set((list ?? []).filter(w => w.group === true).length > 0);
    }
    ngOnInit() {
        const { autoClearSearchValue, autoFocus, dropdownMatchSelectWidth, serverSearch, maxMultipleCount, mode, showSearch, tokenSeparators, maxTagCount, compareWith, optionHeightPx, optionOverflowSize, showArrow } = this.ui;
        this.i = {
            autoClearSearchValue: toBool(autoClearSearchValue, true),
            autoFocus: toBool(autoFocus, false),
            dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
            serverSearch: toBool(serverSearch, false),
            maxMultipleCount: maxMultipleCount ?? Infinity,
            mode: mode ?? 'default',
            showSearch: toBool(showSearch, true),
            tokenSeparators: tokenSeparators ?? [],
            maxTagCount: maxTagCount ?? Infinity,
            optionHeightPx: optionHeightPx ?? 32,
            optionOverflowSize: optionOverflowSize ?? 8,
            showArrow: toBool(showArrow, true),
            compareWith: compareWith ?? ((o1, o2) => o1 === o2)
        };
        const onSearch = this.ui.onSearch;
        if (onSearch) {
            this.search$
                .pipe(takeUntil(this.sfItemComp.destroy$), distinctUntilChanged(), debounceTime(this.ui.searchDebounceTime ?? 300), switchMap(text => onSearch(text)), catchError(() => []))
                .subscribe(list => {
                this.data.set(list);
                this.checkGroup(list);
                this.loading.set(false);
            });
        }
    }
    reset(value) {
        const onSearch = this.ui.onSearch;
        getData(this.schema, this.ui, value).subscribe(list => {
            this._value.set(value);
            if (onSearch == null)
                this.data.set(list);
            this.checkGroup(list);
        });
        if (value && onSearch != null)
            this.search$.next(value);
    }
    change(values) {
        this.ui.change?.(values, this.getOrgData(values));
        this.setValue(values == null ? this.ui.clearValue : values);
    }
    getOrgData(values) {
        const srv = this.injector.get(ArrayService);
        if (!Array.isArray(values)) {
            return srv.findTree(this.data(), (item) => item.value === values);
        }
        return values.map(value => srv.findTree(this.data(), (item) => item.value === value));
    }
    openChange(status) {
        this.ui.openChange?.(status);
    }
    scrollToBottom() {
        this.ui.scrollToBottom?.();
    }
    onSearch(value) {
        if (this.ui.onSearch) {
            this.loading.set(true);
            this.search$.next(value);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: SelectWidget, isStandalone: false, selector: "sf-select", usesInheritance: true, ngImport: i0, template: `
    @let list = data();
    @let isLoading = loading();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-select
        [nzId]="id"
        [nzDisabled]="disabled"
        [(ngModel)]="_value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="change($event)"
        [nzSize]="ui.size!"
        [nzPlaceHolder]="ui.placeholder!"
        [nzNotFoundContent]="ui.notFoundContent"
        [nzDropdownClassName]="ui.dropdownClassName!"
        [nzAllowClear]="ui.allowClear"
        [nzDropdownStyle]="ui.dropdownStyle!"
        [nzCustomTemplate]="ui.customTemplate!"
        [nzSuffixIcon]="ui.suffixIcon!"
        [nzRemoveIcon]="ui.removeIcon!"
        [nzClearIcon]="ui.clearIcon!"
        [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
        [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
        [nzDropdownRender]="ui.dropdownRender!"
        [nzAutoClearSearchValue]="i.autoClearSearchValue"
        [nzVariant]="ui.variant ?? 'outlined'"
        [nzAutoFocus]="i.autoFocus"
        [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
        [nzServerSearch]="i.serverSearch"
        [nzMaxMultipleCount]="i.maxMultipleCount!"
        [nzMode]="i.mode!"
        [nzShowSearch]="i.showSearch"
        [nzShowArrow]="i.showArrow!"
        [nzTokenSeparators]="i.tokenSeparators!"
        [nzMaxTagCount]="i.maxTagCount!"
        [compareWith]="i.compareWith!"
        [nzOptionHeightPx]="i.optionHeightPx!"
        [nzOptionOverflowSize]="i.optionOverflowSize!"
        (nzOpenChange)="openChange($event)"
        (nzOnSearch)="onSearch($event)"
        (nzScrollToBottom)="scrollToBottom()"
      >
        @if (!isLoading && !hasGroup()) {
          @for (o of list; track $index) {
            <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
          }
        }
        @if (!isLoading && hasGroup()) {
          @for (group of list; track $index) {
            <nz-option-group [nzLabel]="group.label">
              @for (o of group.children; track $index) {
                <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
              }
            </nz-option-group>
          }
        }
        @if (isLoading) {
          <nz-option nzDisabled nzCustomContent>
            <nz-icon nzType="loading" />
            {{ ui.searchLoadingText }}
          </nz-option>
        }
      </nz-select>
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$1.ɵNzTransitionPatchDirective, selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i7.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzType", "nzTheme", "nzTwotoneColor", "nzSpin", "nzRotate", "nzIconfont", "aria-label"], exportAs: ["nzIcon"] }, { kind: "component", type: i4$3.NzOptionComponent, selector: "nz-option", inputs: ["nzTitle", "nzLabel", "nzValue", "nzKey", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i4$3.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzVariant", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzPrefix", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus", "nzOnClear"], exportAs: ["nzSelect"] }, { kind: "component", type: i4$3.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: SelectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-select',
                    template: `
    @let list = data();
    @let isLoading = loading();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-select
        [nzId]="id"
        [nzDisabled]="disabled"
        [(ngModel)]="_value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="change($event)"
        [nzSize]="ui.size!"
        [nzPlaceHolder]="ui.placeholder!"
        [nzNotFoundContent]="ui.notFoundContent"
        [nzDropdownClassName]="ui.dropdownClassName!"
        [nzAllowClear]="ui.allowClear"
        [nzDropdownStyle]="ui.dropdownStyle!"
        [nzCustomTemplate]="ui.customTemplate!"
        [nzSuffixIcon]="ui.suffixIcon!"
        [nzRemoveIcon]="ui.removeIcon!"
        [nzClearIcon]="ui.clearIcon!"
        [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
        [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
        [nzDropdownRender]="ui.dropdownRender!"
        [nzAutoClearSearchValue]="i.autoClearSearchValue"
        [nzVariant]="ui.variant ?? 'outlined'"
        [nzAutoFocus]="i.autoFocus"
        [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
        [nzServerSearch]="i.serverSearch"
        [nzMaxMultipleCount]="i.maxMultipleCount!"
        [nzMode]="i.mode!"
        [nzShowSearch]="i.showSearch"
        [nzShowArrow]="i.showArrow!"
        [nzTokenSeparators]="i.tokenSeparators!"
        [nzMaxTagCount]="i.maxTagCount!"
        [compareWith]="i.compareWith!"
        [nzOptionHeightPx]="i.optionHeightPx!"
        [nzOptionOverflowSize]="i.optionOverflowSize!"
        (nzOpenChange)="openChange($event)"
        (nzOnSearch)="onSearch($event)"
        (nzScrollToBottom)="scrollToBottom()"
      >
        @if (!isLoading && !hasGroup()) {
          @for (o of list; track $index) {
            <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
          }
        }
        @if (!isLoading && hasGroup()) {
          @for (group of list; track $index) {
            <nz-option-group [nzLabel]="group.label">
              @for (o of group.children; track $index) {
                <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
              }
            </nz-option-group>
          }
        }
        @if (isLoading) {
          <nz-option nzDisabled nzCustomContent>
            <nz-icon nzType="loading" />
            {{ ui.searchLoadingText }}
          </nz-option>
        }
      </nz-select>
    </sf-item-wrap>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class StringWidget extends ControlUIWidget {
    type;
    change$ = null;
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, allowClear, autofocus } = this.ui;
        this.type =
            addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon
                ? 'addon'
                : '';
        if (allowClear === true && this.type === '') {
            this.type = 'addon';
        }
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
        this.ui.change?.(val);
    }
    focus(e) {
        this.ui.focus?.(e);
    }
    blur(e) {
        this.ui.blur?.(e);
    }
    enter(e) {
        this.ui.enter?.(e);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: StringWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: StringWidget, isStandalone: false, selector: "sf-string", usesInheritance: true, ngImport: i0, template: `
    @let maxLength = schema.maxLength ?? null;
    @let inputType = ui.type ?? 'text';
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @if (type === 'addon') {
        <nz-input-wrapper
          [nzAddonBefore]="ui.addOnBefore"
          [nzAddonAfter]="ui.addOnAfter"
          [nzPrefix]="ui.prefix"
          [nzSuffix]="ui.suffix"
          [nzAllowClear]="ui.allowClear"
        >
          <input
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [nzVariant]="ui.variant ?? 'outlined'"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="maxLength"
            [attr.type]="inputType"
            [attr.placeholder]="ui.placeholder"
            [attr.autocomplete]="ui.autocomplete"
            [attr.autoFocus]="ui.autofocus"
            (keyup.enter)="enter($event)"
            (focus)="focus($event)"
            (blur)="blur($event)"
          />
        </nz-input-wrapper>
      } @else {
        <input
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [nzVariant]="ui.variant!"
          [ngModel]="value"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="change($event)"
          [attr.maxLength]="maxLength"
          [attr.type]="inputType"
          [attr.placeholder]="ui.placeholder"
          [attr.autocomplete]="ui.autocomplete"
          [attr.autoFocus]="ui.autofocus"
          (keyup.enter)="enter($event)"
          (focus)="focus($event)"
          (blur)="blur($event)"
        />
      }
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzVariant", "nzSize", "nzStatus", "disabled", "readonly"], exportAs: ["nzInput"] }, { kind: "component", type: i3.NzInputWrapperComponent, selector: "nz-input-wrapper,nz-input-password,nz-input-search", inputs: ["nzAllowClear", "nzPrefix", "nzSuffix", "nzAddonBefore", "nzAddonAfter", "nzShowCount", "nzCount"], outputs: ["nzClear"], exportAs: ["nzInputWrapper"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: StringWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-string',
                    template: `
    @let maxLength = schema.maxLength ?? null;
    @let inputType = ui.type ?? 'text';
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @if (type === 'addon') {
        <nz-input-wrapper
          [nzAddonBefore]="ui.addOnBefore"
          [nzAddonAfter]="ui.addOnAfter"
          [nzPrefix]="ui.prefix"
          [nzSuffix]="ui.suffix"
          [nzAllowClear]="ui.allowClear"
        >
          <input
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [nzVariant]="ui.variant ?? 'outlined'"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="maxLength"
            [attr.type]="inputType"
            [attr.placeholder]="ui.placeholder"
            [attr.autocomplete]="ui.autocomplete"
            [attr.autoFocus]="ui.autofocus"
            (keyup.enter)="enter($event)"
            (focus)="focus($event)"
            (blur)="blur($event)"
          />
        </nz-input-wrapper>
      } @else {
        <input
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [nzVariant]="ui.variant!"
          [ngModel]="value"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="change($event)"
          [attr.maxLength]="maxLength"
          [attr.type]="inputType"
          [attr.placeholder]="ui.placeholder"
          [attr.autocomplete]="ui.autocomplete"
          [attr.autoFocus]="ui.autofocus"
          (keyup.enter)="enter($event)"
          (focus)="focus($event)"
          (blur)="blur($event)"
        />
      }
    </sf-item-wrap>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class TextWidget extends ControlUIWidget {
    text = signal('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "text" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.ui._required = false;
        this.ui.html = toBool(this.ui.html, true);
    }
    reset(value) {
        this.text.set(value ?? this.ui.defaultText ?? '-');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: TextWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: TextWidget, isStandalone: false, selector: "sf-text", usesInheritance: true, ngImport: i0, template: `
    @let content = text();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
      [class.sf__text-html]="ui.html"
    >
      @if (ui.html) {
        <span [innerHTML]="content"></span>
      } @else {
        <span [innerText]="content"></span>
      }
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: TextWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-text',
                    template: `
    @let content = text();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
      [class.sf__text-html]="ui.html"
    >
      @if (ui.html) {
        <span [innerHTML]="content"></span>
      } @else {
        <span [innerText]="content"></span>
      }
    </sf-item-wrap>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
        }] });

class TextareaWidget extends ControlUIWidget {
    autosize;
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
        this.ui.change?.(val);
    }
    focus(e) {
        this.ui.focus?.(e);
    }
    blur(e) {
        this.ui.blur?.(e);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: TextareaWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: TextareaWidget, isStandalone: false, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @let minRows = autosize?.minRows ?? 1;
      @let maxRows = autosize?.maxRows ?? 0;
      @let variant = ui.variant ?? 'outlined';
      @if (ui.maxCharacterCount) {
        <nz-textarea-count
          [nzMaxCharacterCount]="ui.maxCharacterCount"
          [nzComputeCharacterCount]="ui.computeCharacterCount!"
        >
          <textarea
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="schema.maxLength"
            [attr.placeholder]="ui.placeholder"
            cdkTextareaAutosize
            [cdkAutosizeMinRows]="minRows"
            [cdkAutosizeMaxRows]="maxRows"
            [nzVariant]="variant"
            (focus)="focus($event)"
            (blur)="blur($event)"
          >
          </textarea>
        </nz-textarea-count>
      } @else if (ui.allowClear) {
        <nz-input-wrapper [nzAllowClear]="ui.allowClear">
          <textarea
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="schema.maxLength"
            [attr.placeholder]="ui.placeholder"
            [nzVariant]="variant"
            (focus)="focus($event)"
            (blur)="blur($event)"
          >
          </textarea>
        </nz-input-wrapper>
      } @else {
        <textarea
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="change($event)"
          [attr.maxLength]="schema.maxLength"
          [attr.placeholder]="ui.placeholder"
          cdkTextareaAutosize
          [cdkAutosizeMinRows]="minRows"
          [cdkAutosizeMaxRows]="maxRows"
          [nzVariant]="variant"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
        </textarea>
      }
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2$6.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { kind: "component", type: i3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzVariant", "nzSize", "nzStatus", "disabled", "readonly"], exportAs: ["nzInput"] }, { kind: "component", type: i3.NzInputWrapperComponent, selector: "nz-input-wrapper,nz-input-password,nz-input-search", inputs: ["nzAllowClear", "nzPrefix", "nzSuffix", "nzAddonBefore", "nzAddonAfter", "nzShowCount", "nzCount"], outputs: ["nzClear"], exportAs: ["nzInputWrapper"] }, { kind: "component", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: TextareaWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-textarea',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @let minRows = autosize?.minRows ?? 1;
      @let maxRows = autosize?.maxRows ?? 0;
      @let variant = ui.variant ?? 'outlined';
      @if (ui.maxCharacterCount) {
        <nz-textarea-count
          [nzMaxCharacterCount]="ui.maxCharacterCount"
          [nzComputeCharacterCount]="ui.computeCharacterCount!"
        >
          <textarea
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="schema.maxLength"
            [attr.placeholder]="ui.placeholder"
            cdkTextareaAutosize
            [cdkAutosizeMinRows]="minRows"
            [cdkAutosizeMaxRows]="maxRows"
            [nzVariant]="variant"
            (focus)="focus($event)"
            (blur)="blur($event)"
          >
          </textarea>
        </nz-textarea-count>
      } @else if (ui.allowClear) {
        <nz-input-wrapper [nzAllowClear]="ui.allowClear">
          <textarea
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="schema.maxLength"
            [attr.placeholder]="ui.placeholder"
            [nzVariant]="variant"
            (focus)="focus($event)"
            (blur)="blur($event)"
          >
          </textarea>
        </nz-input-wrapper>
      } @else {
        <textarea
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="change($event)"
          [attr.maxLength]="schema.maxLength"
          [attr.placeholder]="ui.placeholder"
          cdkTextareaAutosize
          [cdkAutosizeMinRows]="minRows"
          [cdkAutosizeMaxRows]="maxRows"
          [nzVariant]="variant"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
        </textarea>
      }
    </sf-item-wrap>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/prefer-standalone
                    standalone: false
                }]
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

/* eslint-disable import-x/order */
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
    NzTooltipModule
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: DelonFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: DelonFormModule, declarations: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective, ObjectWidget,
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
            TextWidget], imports: [CommonModule, FormsModule, DelonLocaleModule, CdkTextareaAutosize, NzButtonModule,
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
            NzTooltipModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: DelonFormModule, imports: [CommonModule, FormsModule, DelonLocaleModule, ZORROS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: DelonFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, DelonLocaleModule, CdkTextareaAutosize, ...ZORROS],
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
    format: `格式不正确`, // `应当匹配格式 "{format}"`,
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
 * Just only using Standalone widgets
 */
function provideSFConfig(options) {
    const provides = [
        {
            provide: SchemaValidatorFactory,
            useClass: AjvSchemaValidatorFactory,
            deps: [AlainConfigService, NgZone]
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry }
    ];
    if (options?.widgets) {
        provides.push(provideEnvironmentInitializer(() => {
            const srv = inject(WidgetRegistry);
            options?.widgets?.forEach(widget => srv.register(widget.KEY, widget.type));
        }));
    }
    return makeEnvironmentProviders(provides);
}

/**
 * Generated bundle index. Do not edit.
 */

export { AjvSchemaValidatorFactory, ArrayLayoutWidget, ArrayProperty, ArrayWidget, AtomicProperty, BooleanProperty, BooleanWidget, CheckboxWidget, ControlUIWidget, ControlWidget, CustomWidget, DateWidget, DelonFormModule, ERRORSDEFAULT, FormProperty, FormPropertyFactory, NumberProperty, NumberWidget, NzWidgetRegistry, ObjectLayoutWidget, ObjectProperty, ObjectWidget, PropertyGroup, RadioWidget, SFComponent, SFFixedDirective, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SF_DEFAULT_CONFIG, SchemaValidatorFactory, SelectWidget, StringProperty, StringWidget, TextWidget, TextareaWidget, Widget, WidgetFactory, WidgetRegistry, di, getCopyEnum, getData, getEnum, isBlank, isDateFns, mergeConfig, orderProperties, provideSFConfig, resolveIfSchema, retrieveSchema, toBool, useFactory };
//# sourceMappingURL=form.mjs.map
