/**
 * @fileoverview added by tsickle
 * Generated from: src/sf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, DelonLocaleService } from '@delon/theme';
import { AlainConfigService, deepCopy, InputBoolean } from '@delon/util';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { mergeConfig } from './config';
import { PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';
/**
 * @param {?} schemaValidatorFactory
 * @param {?} cogSrv
 * @return {?}
 */
export function useFactory(schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
}
export class SFComponent {
    /**
     * @param {?} formPropertyFactory
     * @param {?} terminator
     * @param {?} dom
     * @param {?} cdr
     * @param {?} localeSrv
     * @param {?} aclSrv
     * @param {?} i18nSrv
     * @param {?} cogSrv
     */
    constructor(formPropertyFactory, terminator, dom, cdr, localeSrv, aclSrv, i18nSrv, cogSrv) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
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
        this.options = mergeConfig(cogSrv);
        this.liveValidate = (/** @type {?} */ (this.options.liveValidate));
        this.firstVisual = (/** @type {?} */ (this.options.firstVisual));
        this.autocomplete = (/** @type {?} */ (this.options.autocomplete));
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
        key => (ui[key] = Object.assign(Object.assign({}, this._defUi[key]), ui[key]))));
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
                const ui = (/** @type {?} */ (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ widget: property.type }, (property.format && ((/** @type {?} */ (this.options.formatMap)))[property.format])), (typeof property.ui === 'string' ? { widget: property.ui } : null)), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null)), this._defUi), ((/** @type {?} */ (property.ui)))), uiSchema[uiKey])));
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
                        dateEndProperty.ui = Object.assign(Object.assign({}, ((/** @type {?} */ (dateEndProperty.ui)))), { widget: ui.widget, hidden: true });
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
                    ui.$items = Object.assign(Object.assign(Object.assign({}, ((/** @type {?} */ (property.items.ui)))), uiSchemaInArr[uiKey]), ui.$items);
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
        this._defUi = Object.assign(Object.assign(Object.assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui), _schema.ui), this.ui['*']);
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
        this._btn = Object.assign(Object.assign(Object.assign({ render: { size: 'default' } }, this.locale), this.options.button), ((/** @type {?} */ (this.button))));
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
                key => fn(((/** @type {?} */ (property.properties)))[key])));
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
     * 刷新整个 Schema，当指定 `newSchema` 表示替换当前的 Schema
     *
     * 若希望对某个表单元素进行刷新请使用：
     * ```
     * // 获取某个元素
     * const statusProperty = this.sf.getProperty('/status')!;
     * // 重置 `schema` 或 `ui` 参数
     * statusProperty.schema.enum = ['1', '2', '3'];
     * // 调用 `reset` 重置初始值
     * statusProperty.widget.reset('2');
     * ```
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
            (/** @type {?} */ (this))._item = Object.assign(Object.assign({}, ((/** @type {?} */ (this)).cleanValue ? null : (/** @type {?} */ (this)).formData)), value);
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
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"_btn.render!.grid!.span\"\n        [nzOffset]=\"_btn.render!.grid!.offset\"\n        [nzXs]=\"_btn.render!.grid!.xs\"\n        [nzSm]=\"_btn.render!.grid!.sm\"\n        [nzMd]=\"_btn.render!.grid!.md\"\n        [nzLg]=\"_btn.render!.grid!.lg\"\n        [nzXl]=\"_btn.render!.grid!.xl\"\n        [nzXXl]=\"_btn.render!.grid!.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type\"\n                  [nzTheme]=\"_btn.submit_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type\"\n                  [nzTheme]=\"_btn.reset_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: DelonLocaleService },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: AlainConfigService }
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
    SFComponent.prototype.options;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7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OztJQUVwQyxrQ0FBNEM7Ozs7O0lBRTVDLGlDQUE0Qzs7Ozs7SUEyQjVDLDRCQUE2Qzs7Ozs7SUFJN0MsOEJBQXlDOztJQUN6QywrQkFBMEM7O0lBQzFDLDhCQUF5Qzs7SUFDekMsaUNBQTRDOzs7OztJQUU1QyxpQ0FBdUQ7Ozs7O0lBRXZELGlDQUF1RDs7Ozs7SUFFdkQsZ0NBQXNEOzs7OztJQUV0RCxnQ0FBK0Q7Ozs7O0lBb0Q3RCwwQ0FBZ0Q7Ozs7O0lBQ2hELGlDQUFxQzs7Ozs7SUFDckMsMEJBQXlCOzs7OztJQUN6QiwwQkFBOEI7Ozs7O0lBQzlCLGdDQUFxQzs7Ozs7SUFDckMsNkJBQXNDOzs7OztJQUN0Qyw4QkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcsIGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkJ1dHRvbiwgU0ZMYXlvdXQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZiwgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIGNvZ1Nydik7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcbiAgZXhwb3J0QXM6ICdzZicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgQWxhaW5Db25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlLFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZl9faW5saW5lXSc6IGBsYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNmX19zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmX19lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgICAnW2NsYXNzLnNmX19uby1jb2xvbl0nOiBgbm9Db2xvbmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICByZWFkb25seSBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBfZm9ybURhdGE6IHt9O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDooajljZXluIPlsYDvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmhvcml6b250YWwgKi9cbiAgQElucHV0KCkgbGF5b3V0OiBTRkxheW91dCA9ICdob3Jpem9udGFsJztcbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWE7XG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KCkgZm9ybURhdGE6IHt9O1xuICAvKipcbiAgICog5oyJ6ZKuXG4gICAqIC0g5YC85Li6IGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5L2G5L+d55WZ5a655ZmoXG4gICAqIC0g5YC85Li6IGBub25lYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkuJTkuI3kv53nlZnlrrnlmahcbiAgICogLSDkvb/nlKggYHNwYW5MYWJlbEZpeGVkYCDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXG4gICAqL1xuICBASW5wdXQoKSBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAvKiog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pysICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIC8qKiDooajljZXmqKHlvI8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGxvYWQgc3RhdHVz77yMd2hlbiBgdHJ1ZWAgcmVzZXQgYnV0dG9uIGlzIGRpc2FibGVkIHN0YXR1cywgc3VibWl0IGJ1dHRvbiBpcyBsb2FkaW5nIHN0YXR1c1xuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0NvbG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGVhblZhbHVlID0gZmFsc2U7XG4gIC8qKiDmlbDmja7lj5jmm7Tml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOmHjee9ruihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOihqOWNleagoemqjOe7k+aenOWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHkhLnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOW9k+WJjeWAvFxuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsb2NhbGVTcnY6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNydjogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gdGhpcy5vcHRpb25zLmZpcnN0VmlzdWFsIGFzIGJvb2xlYW47XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmxvY2FsZVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmxvY2FsZVNydi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvcih7IGVtaXRFcnJvcjogZmFsc2UsIG9ubHlSb290OiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlZlNjaGVtYXM6IEFycmF5PE9ic2VydmFibGU8YW55PiB8IG51bGw+ID0gW1xuICAgICAgdGhpcy5hY2xTcnYgPyB0aGlzLmFjbFNydi5jaGFuZ2UgOiBudWxsLFxuICAgICAgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgXS5maWx0ZXIobyA9PiBvICE9IG51bGwpO1xuICAgIGlmIChyZWZTY2hlbWFzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lcmdlKC4uLihyZWZTY2hlbWFzIGFzIEFycmF5PE9ic2VydmFibGU8YW55Pj4pKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5faW5pdGVkKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoU2NoZW1hKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmYW55aShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkoa2V5KSA6ICcnKSB8fCBrZXk7XG4gIH1cblxuICBwcml2YXRlIGluaGVyaXRVSSh1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiB2b2lkIHtcbiAgICBbJ29wdGlvbmFsSGVscCddLmZpbHRlcihrZXkgPT4gISF0aGlzLl9kZWZVaVtrZXldKS5mb3JFYWNoKGtleSA9PiAodWlba2V5XSA9IHsgLi4udGhpcy5fZGVmVWlba2V5XSwgLi4udWlba2V5XSB9KSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIF9wYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkpIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLnByb3BlcnRpZXMhW2tleV0gYXMgU0ZTY2hlbWEsIGRlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgdWkgPSB7XG4gICAgICAgICAgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS5mb3JtYXQgJiYgKHRoaXMub3B0aW9ucy5mb3JtYXRNYXAgYXMgTnpTYWZlQW55KVtwcm9wZXJ0eS5mb3JtYXRdKSxcbiAgICAgICAgICAuLi4odHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCksXG4gICAgICAgICAgLi4uKCFwcm9wZXJ0eS5mb3JtYXQgJiYgIXByb3BlcnR5LnVpICYmIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiYgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwID8geyB3aWRnZXQ6ICdzZWxlY3QnIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi50aGlzLl9kZWZVaSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgfSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpIHVpLnNwYW5MYWJlbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnID8gNSA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpIHVpLnNwYW5Db250cm9sID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJyA/IDE5IDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0ge1xuICAgICAgICAgICAgICAuLi4oZGF0ZUVuZFByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgICAgd2lkZ2V0OiB1aS53aWRnZXQsXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5oZXJpdFVJKHVpKTtcbiAgICAgICAgaWYgKHVpLm9wdGlvbmFsSGVscCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdWkub3B0aW9uYWxIZWxwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0ge1xuICAgICAgICAgICAgICB0ZXh0OiB1aS5vcHRpb25hbEhlbHAsXG4gICAgICAgICAgICB9IGFzIFNGT3B0aW9uYWxIZWxwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvaCA9ICh1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGljb246ICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk6IDAuMTUsXG4gICAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICAgICAgICAgIC4uLnVpLm9wdGlvbmFsSGVscCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAob2guaTE4bikge1xuICAgICAgICAgICAgb2gudGV4dCA9IHRoaXMuZmFueWkob2guaTE4bik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb2gudGV4dCkge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuaTE4bikge1xuICAgICAgICAgIHByb3BlcnR5LnRpdGxlID0gdGhpcy5mYW55aSh1aS5pMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuZGVzY3JpcHRpb25JMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkuZGVzY3JpcHRpb24gPSB0aGlzLmZhbnlpKHVpLmRlc2NyaXB0aW9uSTE4bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgcHJvcGVydHkuX2Rlc2NyaXB0aW9uID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocHJvcGVydHkuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuICAgICAgICBpZiAodWkuaGlkZGVuID09PSBmYWxzZSAmJiB1aS5hY2wgJiYgdGhpcy5hY2xTcnYgJiYgIXRoaXMuYWNsU3J2LmNhbih1aS5hY2wpKSB7XG4gICAgICAgICAgdWkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHVpLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IHNjaGVtYS5yZXF1aXJlZCEuaW5kZXhPZihrZXkpO1xuICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICBzY2hlbWEucmVxdWlyZWQhLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGNvbnN0IHVpU2NoZW1hSW5BcnIgPSAodWlTY2hlbWFbdWlLZXldIHx8IHt9KS4kaXRlbXMgfHwge307XG4gICAgICAgICAgdWkuJGl0ZW1zID0ge1xuICAgICAgICAgICAgLi4uKHByb3BlcnR5Lml0ZW1zLnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgIC4uLnVpU2NoZW1hSW5BcnJbdWlLZXldLFxuICAgICAgICAgICAgLi4udWkuJGl0ZW1zLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eS5pdGVtcywgcHJvcGVydHkuaXRlbXMsIHVpU2NoZW1hSW5BcnIsIHVpLiRpdGVtcywgdWkuJGl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW2tleV07XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSB7XG4gICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxuICAgICAgLi4udGhpcy5vcHRpb25zLnVpLFxuICAgICAgLi4uX3NjaGVtYS51aSxcbiAgICAgIC4uLnRoaXMudWlbJyonXSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm9ubHlWaXN1YWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2RlZlVpLm9ubHlWaXN1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IHsgLi4udGhpcy5fZGVmVWkgfTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG5cbiAgICBkaSh0aGlzLl91aSwgJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX2J0biA9IHtcbiAgICAgIHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSxcbiAgICAgIC4uLnRoaXMubG9jYWxlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIC4uLih0aGlzLmJ1dHRvbiBhcyBTRkJ1dHRvbiksXG4gICAgfTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIhLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlciEuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIhLmNsYXNzICYmIHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIhLmNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiAoY2hhbmdlcy5sb2FkaW5nIHx8IGNoYW5nZXMuZGlzYWJsZWQpKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSBkZWZpbml0aW9uIFwiJHtwYXRofVwiIGN1c3RvbSB3aWRnZXRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eSEuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKG9wdGlvbnM6IHsgZW1pdEVycm9yPzogYm9vbGVhbjsgb25seVJvb3Q/OiBib29sZWFuIH0gPSB7IGVtaXRFcnJvcjogdHJ1ZSwgb25seVJvb3Q6IHRydWUgfSk6IHRoaXMge1xuICAgIGNvbnN0IGZuID0gKHByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHtcbiAgICAgIHByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgICBpZiAoIShwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHx8ICFwcm9wZXJ0eS5wcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5wcm9wZXJ0aWVzKSkge1xuICAgICAgICBwcm9wZXJ0eS5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBmbihwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiBmbigocHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5vbmx5Um9vdCkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkhLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHRoaXMucm9vdFByb3BlcnR5ISk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkhLmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmIChvcHRpb25zLmVtaXRFcnJvciAmJiAhdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsOaVtOS4qiBTY2hlbWHvvIzlvZPmjIflrpogYG5ld1NjaGVtYWAg6KGo56S65pu/5o2i5b2T5YmN55qEIFNjaGVtYVxuICAgKlxuICAgKiDoi6XluIzmnJvlr7nmn5DkuKrooajljZXlhYPntKDov5vooYzliLfmlrDor7fkvb/nlKjvvJpcbiAgICogYGBgXG4gICAqIC8vIOiOt+WPluafkOS4quWFg+e0oFxuICAgKiBjb25zdCBzdGF0dXNQcm9wZXJ0eSA9IHRoaXMuc2YuZ2V0UHJvcGVydHkoJy9zdGF0dXMnKSE7XG4gICAqIC8vIOmHjee9riBgc2NoZW1hYCDmiJYgYHVpYCDlj4LmlbBcbiAgICogc3RhdHVzUHJvcGVydHkuc2NoZW1hLmVudW0gPSBbJzEnLCAnMicsICczJ107XG4gICAqIC8vIOiwg+eUqCBgcmVzZXRgIOmHjee9ruWIneWni+WAvFxuICAgKiBzdGF0dXNQcm9wZXJ0eS53aWRnZXQucmVzZXQoJzInKTtcbiAgICogYGBgXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpOiB0aGlzIHtcbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuX3NjaGVtYSwgdGhpcy5fdWksIHRoaXMuZm9ybURhdGEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLih0aGlzLmNsZWFuVmFsdWUgPyBudWxsIDogdGhpcy5mb3JtRGF0YSksIC4uLnZhbHVlIH07XG4gICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruihqOWNlVxuICAgKiBAcGFyYW0gW2VtaXRdIOaYr+WQpuinpuWPkSBgZm9ybVJlc2V0YCDkuovku7bvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpOiB0aGlzIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSEucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Sb290U3ViKCkge1xuICAgIGlmICghdGhpcy5yb290UHJvcGVydHkpIHJldHVybjtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19