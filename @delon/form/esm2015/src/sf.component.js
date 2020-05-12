/**
 * @fileoverview added by tsickle
 * Generated from: src/sf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation, Inject, } from '@angular/core';
import { ACLService } from '@delon/acl';
import { DelonLocaleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy, InputBoolean } from '@delon/util';
import { Subject, merge } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DelonFormConfig } from './config';
import { PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema, FORMATMAPS } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';
/**
 * @param {?} schemaValidatorFactory
 * @param {?} options
 * @return {?}
 */
export function useFactory(schemaValidatorFactory, options) {
    return new FormPropertyFactory(schemaValidatorFactory, options);
}
export class SFComponent {
    /**
     * @param {?} formPropertyFactory
     * @param {?} terminator
     * @param {?} options
     * @param {?} dom
     * @param {?} cdr
     * @param {?} localeSrv
     * @param {?} aclSrv
     * @param {?} i18nSrv
     */
    constructor(formPropertyFactory, terminator, options, dom, cdr, localeSrv, aclSrv, i18nSrv) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.options = options;
        this.dom = dom;
        this.cdr = cdr;
        this.localeSrv = localeSrv;
        this.aclSrv = aclSrv;
        this.i18nSrv = i18nSrv;
        this.unsubscribe$ = new Subject();
        this._renders = new Map();
        this._valid = true;
        this._inited = false;
        this.locale = {};
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
         * 立即显示错误视觉
         */
        this.firstVisual = true;
        /**
         * 是否只展示错误视觉不显示错误文本
         */
        this.onlyVisual = false;
        /**
         * Whether to load status，when `true` reset button is disabled status, submit button is loading status
         */
        this.loading = false;
        this.disabled = false;
        this.noColon = false;
        this.cleanValue = false;
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
        this.liveValidate = (/** @type {?} */ (options.liveValidate));
        this.firstVisual = (/** @type {?} */ (options.firstVisual));
        this.autocomplete = (/** @type {?} */ (options.autocomplete));
        this.localeSrv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.localeSrv.getData('sf');
            if (this._inited) {
                this.validator({ emitError: false, onlyRoot: false });
                this.coverButtonProperty();
                this.cdr.markForCheck();
            }
        }));
        /** @type {?} */
        const refSchemas = [
            this.aclSrv ? this.aclSrv.change : null,
            this.i18nSrv ? this.i18nSrv.change : null,
        ].filter((/**
         * @param {?} o
         * @return {?}
         */
        o => o != null));
        if (refSchemas.length > 0) {
            merge(...((/** @type {?} */ (refSchemas))))
                .pipe(filter((/**
             * @return {?}
             */
            () => this._inited)), takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            () => this.refreshSchema()));
        }
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
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    // #endregion
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
     * 根据路径获取表单元素属性
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    getProperty(path) {
        return (/** @type {?} */ (this.rootProperty)).searchProperty(path);
    }
    /**
     * 根据路径获取表单元素当前值
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    getValue(path) {
        return (/** @type {?} */ (this.getProperty(path))).value;
    }
    /**
     * 根据路径设置某个表单元素属性值
     * @template THIS
     * @this {THIS}
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @param {?} value 新值
     * @return {THIS}
     */
    setValue(path, value) {
        /** @type {?} */
        const item = (/** @type {?} */ (this)).getProperty(path);
        if (!item) {
            throw new Error(`Invalid path: ${path}`);
        }
        item.resetValue(value, false);
        return (/** @type {?} */ (this));
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
     * @protected
     * @param {?} key
     * @return {?}
     */
    fanyi(key) {
        return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
    }
    /**
     * @private
     * @param {?} ui
     * @return {?}
     */
    inheritUI(ui) {
        ['optionalHelp'].filter((/**
         * @param {?} key
         * @return {?}
         */
        key => !!this._defUi[key])).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (ui[key] = Object.assign({}, this._defUi[key], ui[key]))));
    }
    /**
     * @private
     * @return {?}
     */
    coverProperty() {
        /** @type {?} */
        const isHorizontal = this.layout === 'horizontal';
        /** @type {?} */
        const _schema = deepCopy(this.schema);
        const { definitions } = _schema;
        /** @type {?} */
        const inFn = (/**
         * @param {?} schema
         * @param {?} _parentSchema
         * @param {?} uiSchema
         * @param {?} parentUiSchema
         * @param {?} uiRes
         * @return {?}
         */
        (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) => {
            if (!Array.isArray(schema.required))
                schema.required = [];
            Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const uiKey = `$${key}`;
                /** @type {?} */
                const property = retrieveSchema((/** @type {?} */ ((/** @type {?} */ (schema.properties))[key])), definitions);
                /** @type {?} */
                const ui = (/** @type {?} */ (Object.assign({ widget: property.type }, (property.format && FORMATMAPS[property.format]), (typeof property.ui === 'string' ? { widget: property.ui } : null), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null), this._defUi, ((/** @type {?} */ (property.ui))), uiSchema[uiKey])));
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
                if (ui.widget === 'date' && ui.end != null) {
                    /** @type {?} */
                    const dateEndProperty = (/** @type {?} */ (schema.properties))[ui.end];
                    if (dateEndProperty) {
                        dateEndProperty.ui = Object.assign({}, ((/** @type {?} */ (dateEndProperty.ui))), { widget: ui.widget, hidden: true });
                    }
                    else {
                        ui.end = null;
                    }
                }
                this.inheritUI(ui);
                if (ui.optionalHelp) {
                    if (typeof ui.optionalHelp === 'string') {
                        ui.optionalHelp = (/** @type {?} */ ({
                            text: ui.optionalHelp,
                        }));
                    }
                    /** @type {?} */
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
                    /** @type {?} */
                    const idx = (/** @type {?} */ (schema.required)).indexOf(key);
                    if (idx !== -1) {
                        (/** @type {?} */ (schema.required)).splice(idx, 1);
                    }
                }
                if (property.items) {
                    /** @type {?} */
                    const uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                    ui.$items = Object.assign({}, ((/** @type {?} */ (property.items.ui))), uiSchemaInArr[uiKey], ui.$items);
                    inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
                }
            }));
        });
        /** @type {?} */
        const inIfFn = (/**
         * @param {?} schema
         * @param {?} ui
         * @return {?}
         */
        (schema, ui) => {
            Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const property = (/** @type {?} */ (schema.properties))[key];
                /** @type {?} */
                const uiKey = `$${key}`;
                resolveIf(property, ui[uiKey]);
                if (property.items) {
                    inIfFn(property.items, ui[uiKey].$items);
                }
                if (property.properties) {
                    inIfFn(property, ui[uiKey]);
                }
            }));
        });
        if (this.ui == null)
            this.ui = {};
        this._defUi = Object.assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui, _schema.ui, this.ui['*']);
        if (this.onlyVisual === true) {
            this._defUi.onlyVisual = true;
        }
        // root
        this._ui = Object.assign({}, this._defUi);
        inFn(_schema, _schema, this.ui, this.ui, this._ui);
        // cond
        resolveIf(_schema, this._ui);
        inIfFn(_schema, this._ui);
        this._schema = _schema;
        di(this._ui, 'cover schema & ui', this._ui, _schema);
    }
    /**
     * @private
     * @return {?}
     */
    coverButtonProperty() {
        this._btn = Object.assign({ render: { size: 'default' } }, this.locale, this.options.button, ((/** @type {?} */ (this.button))));
        /** @type {?} */
        const firstKey = Object.keys(this._ui).find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.startsWith('$')));
        if (this.layout === 'horizontal') {
            /** @type {?} */
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
            if (!(/** @type {?} */ (this._btn.render)).grid) {
                (/** @type {?} */ (this._btn.render)).grid = {
                    offset: btnUi.spanLabel,
                    span: btnUi.spanControl,
                };
            }
            // fixed label
            if ((/** @type {?} */ (this._btn.render)).spanLabelFixed == null) {
                (/** @type {?} */ (this._btn.render)).spanLabelFixed = btnUi.spanLabelFixed;
            }
            // 固定标签宽度时，若不指定样式，则默认居中
            if (!(/** @type {?} */ (this._btn.render)).class && typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0) {
                (/** @type {?} */ (this._btn.render)).class = 'text-center';
            }
        }
        else {
            (/** @type {?} */ (this._btn.render)).grid = {};
        }
        if (this._mode) {
            this.mode = this._mode;
        }
        di(this._ui, 'button property', this._btn);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._inited = true;
        this.validator();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
            this.cdr.detectChanges();
            return;
        }
        this.refreshSchema();
    }
    /**
     * \@internal
     * @param {?} path
     * @param {?} templateRef
     * @return {?}
     */
    _addTpl(path, templateRef) {
        if (this._renders.has(path)) {
            console.warn(`Duplicate definition "${path}" custom widget`);
            return;
        }
        this._renders.set(path, templateRef);
        this.attachCustomRender();
    }
    /**
     * @private
     * @return {?}
     */
    attachCustomRender() {
        this._renders.forEach((/**
         * @param {?} tpl
         * @param {?} path
         * @return {?}
         */
        (tpl, path) => {
            /** @type {?} */
            const property = (/** @type {?} */ (this.rootProperty)).searchProperty(path);
            if (property == null) {
                return;
            }
            property.ui._render = tpl;
        }));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} options
     * @return {THIS}
     */
    validator(options = { emitError: true, onlyRoot: true }) {
        /** @type {?} */
        const fn = (/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            property._runValidation();
            if (!(property instanceof PropertyGroup) || !property.properties)
                return;
            if (Array.isArray(property.properties)) {
                property.properties.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                p => fn(p)));
            }
            else {
                Object.keys(property.properties).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => fn((/** @type {?} */ (property.properties))[key])));
            }
        });
        if (options.onlyRoot) {
            (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty))._runValidation();
        }
        else {
            fn((/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)));
        }
        /** @type {?} */
        const errors = (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).errors;
        (/** @type {?} */ (this))._valid = !(errors && errors.length);
        if (options.emitError && !(/** @type {?} */ (this))._valid)
            (/** @type {?} */ (this)).formError.emit((/** @type {?} */ (errors)));
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @template THIS
     * @this {THIS}
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {THIS}
     */
    refreshSchema(newSchema, newUI) {
        if (newSchema)
            (/** @type {?} */ (this)).schema = newSchema;
        if (newUI)
            (/** @type {?} */ (this)).ui = newUI;
        if (!(/** @type {?} */ (this)).schema || typeof (/** @type {?} */ (this)).schema.properties === 'undefined')
            throw new Error(`Invalid Schema`);
        if ((/** @type {?} */ (this)).schema.ui && typeof (/** @type {?} */ (this)).schema.ui === 'string')
            throw new Error(`Don't support string with root ui property`);
        (/** @type {?} */ (this)).schema.type = 'object';
        (/** @type {?} */ (this))._formData = Object.assign({}, (/** @type {?} */ (this)).formData);
        if ((/** @type {?} */ (this))._inited)
            (/** @type {?} */ (this)).terminator.destroy();
        (/** @type {?} */ (this)).cleanRootSub();
        (/** @type {?} */ (this)).coverProperty();
        (/** @type {?} */ (this)).coverButtonProperty();
        (/** @type {?} */ (this)).rootProperty = (/** @type {?} */ (this)).formPropertyFactory.createProperty((/** @type {?} */ (this))._schema, (/** @type {?} */ (this))._ui, (/** @type {?} */ (this)).formData);
        (/** @type {?} */ (this)).attachCustomRender();
        (/** @type {?} */ (this)).cdr.detectChanges();
        (/** @type {?} */ (this)).reset();
        /** @type {?} */
        let isFirst = true;
        (/** @type {?} */ (this)).rootProperty.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            (/** @type {?} */ (this))._item = Object.assign({}, ((/** @type {?} */ (this)).cleanValue ? null : (/** @type {?} */ (this)).formData), value);
            if (isFirst) {
                isFirst = false;
                return;
            }
            (/** @type {?} */ (this)).formChange.emit((/** @type {?} */ (this))._item);
        }));
        (/** @type {?} */ (this)).rootProperty.errorsChanges.subscribe((/**
         * @param {?} errors
         * @return {?}
         */
        errors => {
            (/** @type {?} */ (this))._valid = !(errors && errors.length);
            (/** @type {?} */ (this)).formError.emit((/** @type {?} */ (errors)));
            (/** @type {?} */ (this)).cdr.detectChanges();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * 重置表单
     * @template THIS
     * @this {THIS}
     * @param {?=} emit
     * @return {THIS}
     */
    reset(emit = false) {
        (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).resetValue((/** @type {?} */ (this)).formData, false);
        Promise.resolve().then((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this)).cdr.detectChanges()));
        if (emit) {
            (/** @type {?} */ (this)).formReset.emit((/** @type {?} */ (this)).value);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    cleanRootSub() {
        if (!this.rootProperty)
            return;
        this.rootProperty.errorsChanges.unsubscribe();
        this.rootProperty.valueChanges.unsubscribe();
    }
    /**
     * @return {?}
     */
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
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form\n      [nzLayout]=\"layout\"\n      (submit)=\"onSubmit($event)\"\n      [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\"\n                  class=\"sf-btns\"\n                  [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div nz-col\n           class=\"ant-form-item-control-wrapper\"\n           [nzSpan]=\"_btn.render!.grid!.span\"\n           [nzOffset]=\"_btn.render!.grid!.offset\"\n           [nzXs]=\"_btn.render!.grid!.xs\"\n           [nzSm]=\"_btn.render!.grid!.sm\"\n           [nzMd]=\"_btn.render!.grid!.md\"\n           [nzLg]=\"_btn.render!.grid!.lg\"\n           [nzXl]=\"_btn.render!.grid!.xl\"\n           [nzXXl]=\"_btn.render!.grid!.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\"\n                    nz-button\n                    [nzType]=\"_btn.submit_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [nzLoading]=\"loading\"\n                    [disabled]=\"liveValidate && !valid\">\n              <i *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type\"\n                  [nzTheme]=\"_btn.submit_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont\"></i>\n              {{_btn.submit}}\n            </button>\n            <button *ngIf=\"_btn.reset\"\n                    type=\"button\"\n                    nz-button\n                    [nzType]=\"_btn.reset_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [disabled]=\"loading\"\n                    (click)=\"reset(true)\">\n              <i *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type\"\n                  [nzTheme]=\"_btn.reset_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont\"></i>\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                providers: [
                    WidgetFactory,
                    {
                        provide: FormPropertyFactory,
                        useFactory,
                        deps: [SchemaValidatorFactory, DelonFormConfig],
                    },
                    TerminatorService,
                ],
                host: {
                    '[class.sf]': 'true',
                    '[class.sf__inline]': `layout === 'inline'`,
                    '[class.sf__search]': `mode === 'search'`,
                    '[class.sf__edit]': `mode === 'edit'`,
                    '[class.sf__no-error]': `onlyVisual`,
                    '[class.sf__no-colon]': `noColon`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SFComponent.ctorParameters = () => [
    { type: FormPropertyFactory },
    { type: TerminatorService },
    { type: DelonFormConfig },
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: DelonLocaleService },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
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
    mode: [{ type: Input }],
    loading: [{ type: Input }],
    disabled: [{ type: Input }],
    noColon: [{ type: Input }],
    cleanValue: [{ type: Input }],
    formChange: [{ type: Output }],
    formSubmit: [{ type: Output }],
    formReset: [{ type: Output }],
    formError: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "liveValidate", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "firstVisual", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "onlyVisual", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "disabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "noColon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SFComponent.prototype, "cleanValue", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._renders;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._item;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._valid;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._defUi;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._inited;
    /** @type {?} */
    SFComponent.prototype.locale;
    /** @type {?} */
    SFComponent.prototype.rootProperty;
    /** @type {?} */
    SFComponent.prototype._formData;
    /** @type {?} */
    SFComponent.prototype._btn;
    /** @type {?} */
    SFComponent.prototype._schema;
    /** @type {?} */
    SFComponent.prototype._ui;
    /**
     * 表单布局，等同 `nzLayout`，默认：horizontal
     * @type {?}
     */
    SFComponent.prototype.layout;
    /**
     * JSON Schema
     * @type {?}
     */
    SFComponent.prototype.schema;
    /**
     * UI Schema
     * @type {?}
     */
    SFComponent.prototype.ui;
    /**
     * 表单默认值
     * @type {?}
     */
    SFComponent.prototype.formData;
    /**
     * 按钮
     * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
     * - 值为 `none` 表示手动添加按钮，且不保留容器
     * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
     * @type {?}
     */
    SFComponent.prototype.button;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?}
     */
    SFComponent.prototype.liveValidate;
    /**
     * 指定表单 `autocomplete` 值
     * @type {?}
     */
    SFComponent.prototype.autocomplete;
    /**
     * 立即显示错误视觉
     * @type {?}
     */
    SFComponent.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本
     * @type {?}
     */
    SFComponent.prototype.onlyVisual;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype._mode;
    /**
     * Whether to load status，when `true` reset button is disabled status, submit button is loading status
     * @type {?}
     */
    SFComponent.prototype.loading;
    /** @type {?} */
    SFComponent.prototype.disabled;
    /** @type {?} */
    SFComponent.prototype.noColon;
    /** @type {?} */
    SFComponent.prototype.cleanValue;
    /**
     * 数据变更时回调
     * @type {?}
     */
    SFComponent.prototype.formChange;
    /**
     * 提交表单时回调
     * @type {?}
     */
    SFComponent.prototype.formSubmit;
    /**
     * 重置表单时回调
     * @type {?}
     */
    SFComponent.prototype.formReset;
    /**
     * 表单校验结果回调
     * @type {?}
     */
    SFComponent.prototype.formError;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.formPropertyFactory;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.terminator;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.dom;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.localeSrv;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.aclSrv;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.i18nSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQWMsZ0JBQWdCLEVBQW9CLE1BQU0sY0FBYyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUczQyxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFF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QXVEOzs7OztJQUV2RCxnQ0FBc0Q7Ozs7O0lBRXRELGdDQUErRDs7Ozs7SUFvRDdELDBDQUFnRDs7Ozs7SUFDaEQsaUNBQXFDOzs7OztJQUNyQyw4QkFBZ0M7Ozs7O0lBQ2hDLDBCQUF5Qjs7Ozs7SUFDekIsMEJBQThCOzs7OztJQUM5QixnQ0FBcUM7Ozs7O0lBQ3JDLDZCQUFzQzs7Ozs7SUFDdEMsOEJBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEsIEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHksIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uLCBTRkxheW91dCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4sIFNGT3B0aW9uYWxIZWxwIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBkaSwgcmVzb2x2ZUlmLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcpIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIGV4cG9ydEFzOiAnc2YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2ZfX2lubGluZV0nOiBgbGF5b3V0ID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5zZl9fc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZl9fZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcbiAgICAnW2NsYXNzLnNmX19uby1lcnJvcl0nOiBgb25seVZpc3VhbGAsXG4gICAgJ1tjbGFzcy5zZl9fbm8tY29sb25dJzogYG5vQ29sb25gLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjx2b2lkPj4oKTtcbiAgcHJpdmF0ZSBfaXRlbToge307XG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVmVWk6IFNGVUlTY2hlbWFJdGVtO1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiB7fTtcbiAgX2J0bjogU0ZCdXR0b247XG4gIF9zY2hlbWE6IFNGU2NoZW1hO1xuICBfdWk6IFNGVUlTY2hlbWE7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiog6KGo5Y2V5biD5bGA77yM562J5ZCMIGBuekxheW91dGDvvIzpu5jorqTvvJpob3Jpem9udGFsICovXG4gIEBJbnB1dCgpIGxheW91dDogU0ZMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhOiB7fTtcbiAgLyoqXG4gICAqIOaMiemSrlxuICAgKiAtIOWAvOS4uiBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS9huS/neeVmeWuueWZqFxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXG4gICAqIC0g5L2/55SoIGBzcGFuTGFiZWxGaXhlZGAg5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5pegIGByZW5kZXIuY2xhc3NgIOWImem7mOiupOS4uuWxheS4reeKtuaAgVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgLyoqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLwgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG4gIC8qKiDnq4vljbPmmL7npLrplJnor6/op4bop4kgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgLyoqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb25seVZpc3VhbCA9IGZhbHNlO1xuICAvKiog6KGo5Y2V5qih5byPICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xlYW5WYWx1ZSA9IGZhbHNlO1xuICAvKiog5pWw5o2u5Y+Y5pu05pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOaPkOS6pOihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG4gIC8qKiDph43nva7ooajljZXml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG4gIC8qKiDooajljZXmoKHpqoznu5Pmnpzlm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG4gIC8vICNlbmRyZWdpb25cblxuICAvKiog6KGo5Y2V5qCh6aqM54q25oCBICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKiog6KGo5Y2V5YC8ICovXG4gIGdldCB2YWx1ZSgpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTojrflj5booajljZXlhYPntKDlsZ7mgKdcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKi9cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucm9vdFByb3BlcnR5IS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTojrflj5booajljZXlhYPntKDlvZPliY3lgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKi9cbiAgZ2V0VmFsdWUocGF0aDogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKSEudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6Lev5b6E6K6+572u5p+Q5Liq6KGo5Y2V5YWD57Sg5bGe5oCn5YC8XG4gICAqIEBwYXJhbSBwYXRoIFvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICogQHBhcmFtIHZhbHVlIOaWsOWAvFxuICAgKi9cbiAgc2V0VmFsdWUocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KTogdGhpcyB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGF0aDogJHtwYXRofWApO1xuICAgIH1cbiAgICBpdGVtLnJlc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbG9jYWxlU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTcnY6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gb3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbCBhcyBib29sZWFuO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gb3B0aW9ucy5hdXRvY29tcGxldGUgYXMgJ29uJyB8ICdvZmYnO1xuICAgIHRoaXMubG9jYWxlU3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMubG9jYWxlU3J2LmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yKHsgZW1pdEVycm9yOiBmYWxzZSwgb25seVJvb3Q6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVmU2NoZW1hczogQXJyYXk8T2JzZXJ2YWJsZTxhbnk+IHwgbnVsbD4gPSBbXG4gICAgICB0aGlzLmFjbFNydiA/IHRoaXMuYWNsU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgICB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuY2hhbmdlIDogbnVsbCxcbiAgICBdLmZpbHRlcihvID0+IG8gIT0gbnVsbCk7XG4gICAgaWYgKHJlZlNjaGVtYXMubGVuZ3RoID4gMCkge1xuICAgICAgbWVyZ2UoLi4uKHJlZlNjaGVtYXMgYXMgQXJyYXk8T2JzZXJ2YWJsZTxhbnk+PikpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9pbml0ZWQpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hTY2hlbWEoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZhbnlpKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShrZXkpIDogJycpIHx8IGtleTtcbiAgfVxuXG4gIHByaXZhdGUgaW5oZXJpdFVJKHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IHZvaWQge1xuICAgIFsnb3B0aW9uYWxIZWxwJ10uZmlsdGVyKGtleSA9PiAhIXRoaXMuX2RlZlVpW2tleV0pLmZvckVhY2goa2V5ID0+ICh1aVtrZXldID0geyAuLi50aGlzLl9kZWZVaVtrZXldLCAuLi51aVtrZXldIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgX3BhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSkgc2NoZW1hLnJlcXVpcmVkID0gW107XG5cbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEucHJvcGVydGllcyFba2V5XSBhcyBTRlNjaGVtYSwgZGVmaW5pdGlvbnMpO1xuICAgICAgICBjb25zdCB1aSA9IHtcbiAgICAgICAgICB3aWRnZXQ6IHByb3BlcnR5LnR5cGUsXG4gICAgICAgICAgLi4uKHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0pLFxuICAgICAgICAgIC4uLih0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi4oIXByb3BlcnR5LmZvcm1hdCAmJiAhcHJvcGVydHkudWkgJiYgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJiBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfSA6IG51bGwpLFxuICAgICAgICAgIC4uLnRoaXMuX2RlZlVpLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgLi4udWlTY2hlbWFbdWlLZXldLFxuICAgICAgICB9IGFzIFNGVUlTY2hlbWFJdGVtUnVuO1xuICAgICAgICAvLyDnu6fmib/niLboioLngrnluIPlsYDlsZ7mgKdcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbCkgdWkuc3BhbkxhYmVsID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbCkgdWkuc3BhbkNvbnRyb2wgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gMTkgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllcyFbdWkuZW5kXTtcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSB7XG4gICAgICAgICAgICAgIC4uLihkYXRlRW5kUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgICAgICB3aWRnZXQ6IHVpLndpZGdldCxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmhlcml0VUkodWkpO1xuICAgICAgICBpZiAodWkub3B0aW9uYWxIZWxwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB1aS5vcHRpb25hbEhlbHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICAgIHRleHQ6IHVpLm9wdGlvbmFsSGVscCxcbiAgICAgICAgICAgIH0gYXMgU0ZPcHRpb25hbEhlbHA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG9oID0gKHVpLm9wdGlvbmFsSGVscCA9IHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogMC4xNSxcbiAgICAgICAgICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgICAgICAgICAgLi4udWkub3B0aW9uYWxIZWxwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChvaC5pMThuKSB7XG4gICAgICAgICAgICBvaC50ZXh0ID0gdGhpcy5mYW55aShvaC5pMThuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFvaC50ZXh0KSB7XG4gICAgICAgICAgICB1aS5vcHRpb25hbEhlbHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkudGl0bGUgPSB0aGlzLmZhbnlpKHVpLmkxOG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5kZXNjcmlwdGlvbkkxOG4pIHtcbiAgICAgICAgICBwcm9wZXJ0eS5kZXNjcmlwdGlvbiA9IHRoaXMuZmFueWkodWkuZGVzY3JpcHRpb25JMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBwcm9wZXJ0eS5fZGVzY3JpcHRpb24gPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwcm9wZXJ0eS5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG4gICAgICAgIGlmICh1aS5oaWRkZW4gPT09IGZhbHNlICYmIHVpLmFjbCAmJiB0aGlzLmFjbFNydiAmJiAhdGhpcy5hY2xTcnYuY2FuKHVpLmFjbCkpIHtcbiAgICAgICAgICB1aS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAodWkuaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgaWR4ID0gc2NoZW1hLnJlcXVpcmVkIS5pbmRleE9mKGtleSk7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNjaGVtYS5yZXF1aXJlZCEuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgdWlTY2hlbWFJbkFyciA9ICh1aVNjaGVtYVt1aUtleV0gfHwge30pLiRpdGVtcyB8fCB7fTtcbiAgICAgICAgICB1aS4kaXRlbXMgPSB7XG4gICAgICAgICAgICAuLi4ocHJvcGVydHkuaXRlbXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgICAgLi4udWlTY2hlbWFJbkFyclt1aUtleV0sXG4gICAgICAgICAgICAuLi51aS4kaXRlbXMsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5Lml0ZW1zLCBwcm9wZXJ0eS5pdGVtcywgdWlTY2hlbWFJbkFyciwgdWkuJGl0ZW1zLCB1aS4kaXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbklmRm4gPSAoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllcyFba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICAuLi50aGlzLm9wdGlvbnMudWksXG4gICAgICAuLi5fc2NoZW1hLnVpLFxuICAgICAgLi4udGhpcy51aVsnKiddLFxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGRpKHRoaXMuX3VpLCAnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0ge1xuICAgICAgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9LFxuICAgICAgLi4udGhpcy5sb2NhbGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgLi4uKHRoaXMuYnV0dG9uIGFzIFNGQnV0dG9uKSxcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gZml4ZWQgbGFiZWxcbiAgICAgIGlmICh0aGlzLl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIhLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6XkuI3mjIflrprmoLflvI/vvIzliJnpu5jorqTlsYXkuK1cbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlciEuY2xhc3MgJiYgdHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlciEuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyIS5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIGRpKHRoaXMuX3VpLCAnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoID09PSAxICYmIChjaGFuZ2VzLmxvYWRpbmcgfHwgY2hhbmdlcy5kaXNhYmxlZCkpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgRHVwbGljYXRlIGRlZmluaXRpb24gXCIke3BhdGh9XCIgY3VzdG9tIHdpZGdldGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCkge1xuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5IS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByb3BlcnR5LnVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3Iob3B0aW9uczogeyBlbWl0RXJyb3I/OiBib29sZWFuOyBvbmx5Um9vdD86IGJvb2xlYW4gfSA9IHsgZW1pdEVycm9yOiB0cnVlLCBvbmx5Um9vdDogdHJ1ZSB9KTogdGhpcyB7XG4gICAgY29uc3QgZm4gPSAocHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4ge1xuICAgICAgcHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICAgIGlmICghKHByb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkgfHwgIXByb3BlcnR5LnByb3BlcnRpZXMpIHJldHVybjtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5LnByb3BlcnRpZXMpKSB7XG4gICAgICAgIHByb3BlcnR5LnByb3BlcnRpZXMuZm9yRWFjaChwID0+IGZuKHApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IGZuKHByb3BlcnR5LnByb3BlcnRpZXMhW2tleV0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChvcHRpb25zLm9ubHlSb290KSB7XG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eSEuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4odGhpcy5yb290UHJvcGVydHkhKTtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eSEuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKG9wdGlvbnMuZW1pdEVycm9yICYmICF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog5Yi35pawIFNjaGVtYe+8jOS4gOiIrOmcgOimgeWKqOaAgeS/ruaUuSBTY2hlbWEg5p+Q5Liq5YC85pe25Y+v5Lul5pa55L6/6LCD55SoXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpOiB0aGlzIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuX3NjaGVtYSwgdGhpcy5fdWksIHRoaXMuZm9ybURhdGEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLih0aGlzLmNsZWFuVmFsdWUgPyBudWxsIDogdGhpcy5mb3JtRGF0YSksIC4uLnZhbHVlIH07XG4gICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruihqOWNlVxuICAgKiBAcGFyYW0gW2VtaXRdIOaYr+WQpuinpuWPkSBgZm9ybVJlc2V0YCDkuovku7bvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpOiB0aGlzIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSEucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Sb290U3ViKCkge1xuICAgIGlmICghdGhpcy5yb290UHJvcGVydHkpIHJldHVybjtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19