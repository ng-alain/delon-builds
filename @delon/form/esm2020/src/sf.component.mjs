import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { merge, Subject, filter, takeUntil } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean } from '@delon/util/decorator';
import { deepCopy } from '@delon/util/other';
import { mergeConfig } from './config';
import { PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { TerminatorService } from './terminator.service';
import { di, resolveIfSchema, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';
import * as i0 from "@angular/core";
import * as i1 from "./model/form.property.factory";
import * as i2 from "./terminator.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@delon/theme";
import * as i5 from "@delon/acl";
import * as i6 from "@delon/util/config";
import * as i7 from "@angular/cdk/platform";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
import * as i10 from "ng-zorro-antd/button";
import * as i11 from "ng-zorro-antd/core/transition-patch";
import * as i12 from "ng-zorro-antd/core/wave";
import * as i13 from "ng-zorro-antd/grid";
import * as i14 from "ng-zorro-antd/form";
import * as i15 from "ng-zorro-antd/icon";
import * as i16 from "./sf-item.component";
import * as i17 from "./sf-fixed.directive";
export function useFactory(schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
}
export class SFComponent {
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
        this.destroy$ = new Subject();
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
        this.localeSrv.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
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
                .pipe(filter(() => this._inited), takeUntil(this.destroy$))
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
                const uiKey = `$${key}`;
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
                    widget: property.type,
                    ...(property.format && this.options.formatMap[property.format]),
                    ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
                    ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                        ? { widget: 'select' }
                        : null),
                    ...curUi
                };
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
                    const uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                    ui.$items = {
                        ...property.items.ui,
                        ...uiSchemaInArr[uiKey],
                        ...ui.$items
                    };
                    inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
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
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
SFComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SFComponent, deps: [{ token: i1.FormPropertyFactory }, { token: i2.TerminatorService }, { token: i3.DomSanitizer }, { token: i0.ChangeDetectorRef }, { token: i4.DelonLocaleService }, { token: i5.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i6.AlainConfigService }, { token: i7.Platform }], target: i0.ɵɵFactoryTarget.Component });
SFComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: SFComponent, selector: "sf, [sf]", inputs: { layout: "layout", schema: "schema", ui: "ui", formData: "formData", button: "button", liveValidate: "liveValidate", autocomplete: "autocomplete", firstVisual: "firstVisual", onlyVisual: "onlyVisual", compact: "compact", mode: "mode", loading: "loading", disabled: "disabled", noColon: "noColon", cleanValue: "cleanValue", delay: "delay" }, outputs: { formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf": "true", "class.sf__inline": "layout === 'inline'", "class.sf__horizontal": "layout === 'horizontal'", "class.sf__search": "mode === 'search'", "class.sf__edit": "mode === 'edit'", "class.sf__no-error": "onlyVisual", "class.sf__no-colon": "noColon", "class.sf__compact": "compact" } }, providers: [
        WidgetFactory,
        {
            provide: FormPropertyFactory,
            useFactory,
            deps: [SchemaValidatorFactory, AlainConfigService]
        },
        TerminatorService
    ], exportAs: ["sf"], usesOnChanges: true, ngImport: i0, template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\"></sf-item>\n</form>\n", dependencies: [{ kind: "directive", type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i9.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i9.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i10.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i11.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i12.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i13.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i13.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i14.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon", "nzLabelAlign"], exportAs: ["nzForm"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i15.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i16.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: i17.SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf, [sf]', exportAs: 'sf', providers: [
                        WidgetFactory,
                        {
                            provide: FormPropertyFactory,
                            useFactory,
                            deps: [SchemaValidatorFactory, AlainConfigService]
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
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\"></sf-item>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormPropertyFactory }, { type: i2.TerminatorService }, { type: i3.DomSanitizer }, { type: i0.ChangeDetectorRef }, { type: i4.DelonLocaleService }, { type: i5.ACLService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHckUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBa0MsTUFBTSxjQUFjLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFpQixDQUFDLElBQUk7OzBCQW9NbEMsUUFBUTs7MEJBQ1IsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxnQkFBZ0I7b0dBbks3QixNQUFNO3NCQUFkLEtBQUs7Z0JBRUcsTUFBTTtzQkFBZCxLQUFLO2dCQUVHLEVBQUU7c0JBQVYsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLE1BQU07c0JBQWQsS0FBSztnQkFNbUIsWUFBWTtzQkFBcEMsS0FBSztnQkFFRyxZQUFZO3NCQUFwQixLQUFLO2dCQU1tQixXQUFXO3NCQUFuQyxLQUFLO2dCQU1tQixVQUFVO3NCQUFsQyxLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO2dCQU9GLElBQUk7c0JBRFAsS0FBSztnQkE2Qm1CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLEtBQUs7c0JBQTdCLEtBQUs7Z0JBQ2EsZUFBZTtzQkFBakMsTUFBTTtnQkFDWSxVQUFVO3NCQUE1QixNQUFNO2dCQUNZLFVBQVU7c0JBQTVCLE1BQU07Z0JBQ1ksU0FBUztzQkFBM0IsTUFBTTtnQkFDWSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBOekZvcm1Db250cm9sU3RhdHVzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5cbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgdHlwZSB7IFNGQnV0dG9uLCBTRkxheW91dCwgU0ZNb2RlLCBTRlZhbHVlQ2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBkaSwgcmVzb2x2ZUlmU2NoZW1hLCByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2Vcbik6IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgY29nU3J2KTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICBleHBvcnRBczogJ3NmJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBBbGFpbkNvbmZpZ1NlcnZpY2VdXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZl9faW5saW5lXSc6IGBsYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNmX19ob3Jpem9udGFsXSc6IGBsYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zZl9fc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZl9fZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcbiAgICAnW2NsYXNzLnNmX19uby1lcnJvcl0nOiBgb25seVZpc3VhbGAsXG4gICAgJ1tjbGFzcy5zZl9fbm8tY29sb25dJzogYG5vQ29sb25gLFxuICAgICdbY2xhc3Muc2ZfX2NvbXBhY3RdJzogYGNvbXBhY3RgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGl2ZVZhbGlkYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXJzdFZpc3VhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb25seVZpc3VhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29tcGFjdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NsZWFuVmFsdWU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3JlbmRlcnMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8dm9pZD4+KCk7XG4gIHByaXZhdGUgX2l0ZW0hOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaSE6IFNGVUlTY2hlbWFJdGVtO1xuICByZWFkb25seSBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIF9pbml0ZWQgPSBmYWxzZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIF9mb3JtRGF0YSE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBfYnRuITogU0ZCdXR0b247XG4gIF9zY2hlbWEhOiBTRlNjaGVtYTtcbiAgX3VpITogU0ZVSVNjaGVtYTtcbiAgZ2V0IGJ0bkdyaWQoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fYnRuLnJlbmRlciEuZ3JpZDtcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKSBsYXlvdXQ6IFNGTGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KCkgc2NoZW1hITogU0ZTY2hlbWE7XG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KCkgdWkhOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhPzogUmVjb3JkPHN0cmluZywgTnpTYWZlQW55PjtcbiAgLyoqXG4gICAqIOaMiemSrlxuICAgKiAtIOWAvOS4uiBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS9huS/neeVmeWuueWZqFxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXG4gICAqIC0g5L2/55SoIGBzcGFuTGFiZWxGaXhlZGAg5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5pegIGByZW5kZXIuY2xhc3NgIOWImem7mOiupOS4uuWxheS4reeKtuaAgVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uPzogU0ZCdXR0b24gfCAnbm9uZScgfCBudWxsID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSBlcnJvciB2aXN1YWxzIGltbWVkaWF0ZWx5XG4gICAqXG4gICAqIOaYr+WQpueri+WNs+aYvuekuumUmeivr+inhuiniVxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gb25seSBkaXNwbGF5IGVycm9yIHZpc3VhbHMgYnV0IG5vdCBlcnJvciB0ZXh0XG4gICAqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrFxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9ubHlWaXN1YWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbXBhY3QgPSBmYWxzZTtcbiAgLyoqXG4gICAqIEZvcm0gZGVmYXVsdCBtb2RlLCB3aWxsIGZvcmNlIG92ZXJyaWRlIGBsYXlvdXRgLCBgZmlyc3RWaXN1YWxgLCBgbGl2ZVZhbGlkYXRlYCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIOihqOWNlemihOiuvuaooeW8j++8jOS8muW8uuWItuimhuebliBgbGF5b3V0YO+8jGBmaXJzdFZpc3VhbGDvvIxgbGl2ZVZhbGlkYXRlYCDlj4LmlbBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiBTRk1vZGUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHtcbiAgICAgICAgICB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLnNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHtcbiAgICAgICAgICB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLmVkaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpOiBTRk1vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGUhOiBTRk1vZGU7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGxvYWQgc3RhdHVz77yMd2hlbiBgdHJ1ZWAgcmVzZXQgYnV0dG9uIGlzIGRpc2FibGVkIHN0YXR1cywgc3VibWl0IGJ1dHRvbiBpcyBsb2FkaW5nIHN0YXR1c1xuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0NvbG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGVhblZhbHVlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWxheSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTRlZhbHVlQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICpcbiAgICog6KGo5Y2V5piv5ZCm5pyJ5pWIXG4gICAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZm9ybVxuICAgKlxuICAgKiDooajljZXlgLxcbiAgICovXG4gIGdldCB2YWx1ZSgpOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9ybSBlbGVtZW50IHByb3BlcnR5IGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnojrflj5booajljZXlhYPntKDlsZ7mgKdcbiAgICovXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJvb3RQcm9wZXJ0eT8uc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgdmFsdWUgYmFzZWQgb24gW3BhdGhdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICpcbiAgICog5qC55o2uW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKeiOt+WPluihqOWNleWFg+e0oOWAvFxuICAgKi9cbiAgZ2V0VmFsdWUocGF0aDogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKT8udmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZvcm0gZWxlbWVudCBuZXcgdmFsdWUgYmFzZWQgb24gW3BhdGhdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICpcbiAgICog5qC55o2uW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKeiuvue9ruafkOS4quihqOWNleWFg+e0oOWxnuaAp+WAvFxuICAgKi9cbiAgc2V0VmFsdWUocGF0aDogc3RyaW5nLCB2YWx1ZTogTnpTYWZlQW55KTogdGhpcyB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGF0aDogJHtwYXRofWApO1xuICAgIH1cbiAgICBpdGVtLnJlc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGZlZWRiYWNrIHN0YXR1cyBvZiB0aGUgd2lkZ2V0XG4gICAqXG4gICAqIOabtOaWsOWwj+mDqOS7tueahOWPjemmiOeKtuaAgVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiAvLyBWYWxpZGF0ZSBzdGF0dXMgb2YgdGhlIHdpZGdldFxuICAgKiB0aGlzLnNmLnVwZGF0ZUZlZWRiYWNrKCcvbmFtZScsICd2YWxpZGF0aW5nJyk7XG4gICAqIC8vIENsZWFuIHZhbGlkYXRlIHN0YXR1cyBvZiB0aGUgd2lkZ2V0XG4gICAqIHRoaXMuc2YudXBkYXRlRmVlZGJhY2soJy9uYW1lJyk7XG4gICAqIGBgYFxuICAgKi9cbiAgdXBkYXRlRmVlZGJhY2socGF0aDogc3RyaW5nLCBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJycpOiB0aGlzIHtcbiAgICB0aGlzLmdldFByb3BlcnR5KHBhdGgpPy51cGRhdGVGZWVkYmFjayhzdGF0dXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsb2NhbGVTcnY6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNydjogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb2dTcnYpO1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdGhpcy5vcHRpb25zLmxpdmVWYWxpZGF0ZSBhcyBib29sZWFuO1xuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0aGlzLm9wdGlvbnMuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5hdXRvY29tcGxldGUgYXMgJ29uJyB8ICdvZmYnO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGVsYXkgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmxvY2FsZVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMubG9jYWxlU3J2LmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yKHsgZW1pdEVycm9yOiBmYWxzZSwgb25seVJvb3Q6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVmU2NoZW1hczogQXJyYXk8T2JzZXJ2YWJsZTxOelNhZmVBbnk+IHwgbnVsbD4gPSBbXG4gICAgICB0aGlzLmFjbFNydiA/IHRoaXMuYWNsU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgICB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuY2hhbmdlIDogbnVsbFxuICAgIF0uZmlsdGVyKG8gPT4gbyAhPSBudWxsKTtcbiAgICBpZiAocmVmU2NoZW1hcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXJnZSguLi4ocmVmU2NoZW1hcyBhcyBBcnJheTxPYnNlcnZhYmxlPE56U2FmZUFueT4+KSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2luaXRlZCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hTY2hlbWEoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZhbnlpKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShrZXkpIDogJycpIHx8IGtleTtcbiAgfVxuXG4gIHByaXZhdGUgaW5oZXJpdFVJKHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IHZvaWQge1xuICAgIFsnb3B0aW9uYWxIZWxwJ10uZmlsdGVyKGtleSA9PiAhIXRoaXMuX2RlZlVpW2tleV0pLmZvckVhY2goa2V5ID0+ICh1aVtrZXldID0geyAuLi50aGlzLl9kZWZVaVtrZXldLCAuLi51aVtrZXldIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgX3BhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW5cbiAgICApOiB2b2lkID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpKSBzY2hlbWEucmVxdWlyZWQgPSBbXTtcblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5wcm9wZXJ0aWVzIVtrZXldIGFzIFNGU2NoZW1hLCBkZWZpbml0aW9ucyk7XG4gICAgICAgIGNvbnN0IGN1clVpID0ge1xuICAgICAgICAgIC4uLihwcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgLi4udWlTY2hlbWFbdWlLZXldXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVpID0ge1xuICAgICAgICAgIC4uLnRoaXMuX2RlZlVpLFxuICAgICAgICAgIC4uLnBhcmVudFVpU2NoZW1hLFxuICAgICAgICAgIC8vIOW/veeVpemDqOWIhuS8muW8lei1t+WRiOeOsOeahOWxnuaAp1xuICAgICAgICAgIHZpc2libGVJZjogdW5kZWZpbmVkLFxuICAgICAgICAgIGhpZGRlbjogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZGdldDogcHJvcGVydHkudHlwZSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkuZm9ybWF0ICYmICh0aGlzLm9wdGlvbnMuZm9ybWF0TWFwIGFzIE56U2FmZUFueSlbcHJvcGVydHkuZm9ybWF0XSksXG4gICAgICAgICAgLi4uKHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwpLFxuICAgICAgICAgIC4uLighcHJvcGVydHkuZm9ybWF0ICYmICFwcm9wZXJ0eS51aSAmJiBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsKSxcbiAgICAgICAgICAuLi5jdXJVaVxuICAgICAgICB9IGFzIFNGVUlTY2hlbWFJdGVtUnVuO1xuICAgICAgICAvLyDnu6fmib/niLboioLngrnluIPlsYDlsZ7mgKdcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgaWYgKCFjdXJVaS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbClcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gMTkgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2w7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWGheiBlOW8uuWItua4heeQhiBgZ3JpZGAg5Y+C5pWwXG4gICAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBkZWxldGUgdWkuZ3JpZDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpnZ7msLTlubPluIPlsYDlvLrliLbmuIXnkIYgYHNwYW5MYWJlbEZpeGVkYCDlgLxcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2T5oyH5a6a5qCH562+5Li65Zu65a6a5a695bqm5pe25peg6aG75oyH5a6aIGBzcGFuTGFiZWxg77yMYHNwYW5Db250cm9sYFxuICAgICAgICBpZiAodWkuc3BhbkxhYmVsRml4ZWQgIT0gbnVsbCAmJiB1aS5zcGFuTGFiZWxGaXhlZCA+IDApIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllcyFbdWkuZW5kXTtcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSB7XG4gICAgICAgICAgICAgIC4uLihkYXRlRW5kUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgICAgICB3aWRnZXQ6IHVpLndpZGdldCxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaGVyaXRVSSh1aSk7XG4gICAgICAgIGlmICh1aS5vcHRpb25hbEhlbHApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHVpLm9wdGlvbmFsSGVscCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVpLm9wdGlvbmFsSGVscCA9IHtcbiAgICAgICAgICAgICAgdGV4dDogdWkub3B0aW9uYWxIZWxwXG4gICAgICAgICAgICB9IGFzIFNGT3B0aW9uYWxIZWxwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvaCA9ICh1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGljb246ICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk6IDAuMTUsXG4gICAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICAgICAgICAgIC4uLnVpLm9wdGlvbmFsSGVscFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChvaC5pMThuKSB7XG4gICAgICAgICAgICBvaC50ZXh0ID0gdGhpcy5mYW55aShvaC5pMThuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFvaC50ZXh0KSB7XG4gICAgICAgICAgICB1aS5vcHRpb25hbEhlbHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkudGl0bGUgPSB0aGlzLmZhbnlpKHVpLmkxOG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5kZXNjcmlwdGlvbkkxOG4pIHtcbiAgICAgICAgICBwcm9wZXJ0eS5kZXNjcmlwdGlvbiA9IHRoaXMuZmFueWkodWkuZGVzY3JpcHRpb25JMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICB1aS5fZGVzY3JpcHRpb24gPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwcm9wZXJ0eS5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG4gICAgICAgIGlmICh1aS5oaWRkZW4gPT09IGZhbHNlICYmIHVpLmFjbCAmJiB0aGlzLmFjbFNydiAmJiAhdGhpcy5hY2xTcnYuY2FuKHVpLmFjbCkpIHtcbiAgICAgICAgICB1aS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAodWkuaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgaWR4ID0gc2NoZW1hLnJlcXVpcmVkIS5pbmRleE9mKGtleSk7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNjaGVtYS5yZXF1aXJlZCEuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgY29uc3QgdWlTY2hlbWFJbkFyciA9ICh1aVNjaGVtYVt1aUtleV0gfHwge30pLiRpdGVtcyB8fCB7fTtcbiAgICAgICAgICB1aS4kaXRlbXMgPSB7XG4gICAgICAgICAgICAuLi4ocHJvcGVydHkuaXRlbXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgICAgLi4udWlTY2hlbWFJbkFyclt1aUtleV0sXG4gICAgICAgICAgICAuLi51aS4kaXRlbXNcbiAgICAgICAgICB9O1xuICAgICAgICAgIGluRm4ocHJvcGVydHkuaXRlbXMsIHByb3BlcnR5Lml0ZW1zLCB1aVNjaGVtYUluQXJyLCB1aS4kaXRlbXMsIHVpLiRpdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLnVpLFxuICAgICAgLi4uKF9zY2hlbWEgYXMgTnpTYWZlQW55KS51aSxcbiAgICAgIC4uLnRoaXMudWlbJyonXVxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuICAgIC8vIOWGheiBlOW8uuWItua4heeQhiBgZ3JpZGAg5Y+C5pWwXG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaW5saW5lJykge1xuICAgICAgZGVsZXRlIHRoaXMuX2RlZlVpLmdyaWQ7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmU2NoZW1hKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG4gICAgZGVsZXRlIF9zY2hlbWEudWk7XG5cbiAgICBkaSh0aGlzLl91aSwgJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCk6IHZvaWQge1xuICAgIHRoaXMuX2J0biA9IHtcbiAgICAgIHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSxcbiAgICAgIC4uLnRoaXMubG9jYWxlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIC4uLih0aGlzLmJ1dHRvbiBhcyBTRkJ1dHRvbilcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgY29uc3QgYnRuUmVuZGVyID0gdGhpcy5fYnRuLnJlbmRlciE7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghYnRuUmVuZGVyLmdyaWQpIHtcbiAgICAgICAgYnRuUmVuZGVyLmdyaWQgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBidG5VaS5zcGFuTGFiZWwsXG4gICAgICAgICAgc3BhbjogYnRuVWkuc3BhbkNvbnRyb2xcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAoYnRuUmVuZGVyLnNwYW5MYWJlbEZpeGVkID09IG51bGwpIHtcbiAgICAgICAgYnRuUmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6XkuI3mjIflrprmoLflvI/vvIzliJnpu5jorqTlsYXkuK1cbiAgICAgIGlmICghYnRuUmVuZGVyLmNsYXNzICYmIHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKSB7XG4gICAgICAgIGJ0blJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0blJlbmRlci5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIGRpKHRoaXMuX3VpLCAnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5nb3JlUmVuZGVyID0gWydkaXNhYmxlZCcsICdsb2FkaW5nJ107XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmV2ZXJ5KGtleSA9PiBpbmdvcmVSZW5kZXIuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRlbGF5KSB7XG4gICAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgZGVmaW5pdGlvbiBcIiR7cGF0aH1cIiBjdXN0b20gd2lkZ2V0YCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHk/LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgICAgaWYgKHByb3BlcnR5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHJvcGVydHkudWkuX3JlbmRlciA9IHRwbDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICpcbiAgICog5qCh6aqM6KGo5Y2V5piv5ZCm5pyJ5pWIXG4gICAqIC0gYGVtaXRFcnJvcmAg5b2T6KGo5Y2V5peg5pWI5pe25piv5ZCm6Kem5Y+RIGBmb3JtRXJyb3JgIOS6i+S7tu+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGBvbmx5Um9vdGAg5Y+q5a+55qC56L+b6KGM5qOA6aqM77yM5LiN6L+b6KGM5ZCR5LiL6YCQ5Liq6YCS5b2S77yM5qC55bey57uP5YyF5ZCr5pW05LiqIEpzb24gU2NoZW1h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB2YWxpZGF0b3Iob3B0aW9uczogeyBlbWl0RXJyb3I/OiBib29sZWFuOyBvbmx5Um9vdD86IGJvb2xlYW4gfSA9IHsgZW1pdEVycm9yOiB0cnVlLCBvbmx5Um9vdDogdHJ1ZSB9KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5ID09IG51bGwgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gKHByb3BlcnR5OiBGb3JtUHJvcGVydHkpOiB2b2lkID0+IHtcbiAgICAgIHByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgICBpZiAoIShwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHx8ICFwcm9wZXJ0eS5wcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5wcm9wZXJ0aWVzKSkge1xuICAgICAgICBwcm9wZXJ0eS5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBmbihwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICAgIGZuKChwcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW2tleV0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5vbmx5Um9vdCkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkhLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHRoaXMucm9vdFByb3BlcnR5ISk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkhLmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmIChvcHRpb25zLmVtaXRFcnJvciAmJiAhdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBmb3JtIFNjaGVtYSwgd2hlbiBzcGVjaWZ5aW5nIGBuZXdTY2hlbWFgIG1lYW5zIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgU2NoZW1hXG4gICAqXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzlvZPmjIflrpogYG5ld1NjaGVtYWAg6KGo56S65pu/5o2i5b2T5YmN55qEIFNjaGVtYVxuICAgKlxuICAgKiDlj6/ku6Xpkojlr7nmn5DkuKrooajljZXlhYPntKDov5vooYzliLfmlrDvvIzkvovlpoLvvJpcbiAgICogYGBgXG4gICAqIC8vIOiOt+WPluafkOS4quWFg+e0oFxuICAgKiBjb25zdCBzdGF0dXNQcm9wZXJ0eSA9IHRoaXMuc2YuZ2V0UHJvcGVydHkoJy9zdGF0dXMnKSE7XG4gICAqIC8vIOmHjee9riBgc2NoZW1hYCDmiJYgYHVpYCDlj4LmlbBcbiAgICogc3RhdHVzUHJvcGVydHkuc2NoZW1hLmVudW0gPSBbJzEnLCAnMicsICczJ107XG4gICAqIC8vIOiwg+eUqCBgcmVzZXRgIOmHjee9ruWIneWni+WAvFxuICAgKiBzdGF0dXNQcm9wZXJ0eS53aWRnZXQucmVzZXQoJzInKTtcbiAgICogYGBgXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpOiB0aGlzIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcblxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5fc2NoZW1hLCB0aGlzLl91aSwgdGhpcy5mb3JtRGF0YSEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0geyAuLi4odGhpcy5jbGVhblZhbHVlID8gbnVsbCA6IHRoaXMuZm9ybURhdGEpLCAuLi5yZXMudmFsdWUgfTtcbiAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMuX2l0ZW0sIHBhdGg6IHJlcy5wYXRoLCBwYXRoVmFsdWU6IHJlcy5wYXRoVmFsdWUgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZm9ybVxuICAgKlxuICAgKiDph43nva7ooajljZVcbiAgICpcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdDogYm9vbGVhbiA9IGZhbHNlKTogdGhpcyB7XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5ID09IG51bGwgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Sb290U3ViKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yb290UHJvcGVydHkpIHJldHVybjtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgY29uc3QgeyBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBkZXN0cm95JC5uZXh0KCk7XG4gICAgZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNjb24+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2J0blRwbD5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ1dHRvbiAhPT0gJ25vbmUnOyBlbHNlIGNvblwiPlxuICAgIDxuei1mb3JtLWl0ZW1cbiAgICAgICpuZ0lmPVwiX2J0biAmJiBfYnRuLnJlbmRlclwiXG4gICAgICBbbmdDbGFzc109XCJfYnRuLnJlbmRlciEuY2xhc3MhXCJcbiAgICAgIGNsYXNzPVwic2YtYnRuc1wiXG4gICAgICBbZml4ZWQtbGFiZWxdPVwiX2J0bi5yZW5kZXIhLnNwYW5MYWJlbEZpeGVkIVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBuei1jb2xcbiAgICAgICAgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIlxuICAgICAgICBbbnpTcGFuXT1cImJ0bkdyaWQuc3BhblwiXG4gICAgICAgIFtuek9mZnNldF09XCJidG5HcmlkLm9mZnNldFwiXG4gICAgICAgIFtuelhzXT1cImJ0bkdyaWQueHNcIlxuICAgICAgICBbbnpTbV09XCJidG5HcmlkLnNtXCJcbiAgICAgICAgW256TWRdPVwiYnRuR3JpZC5tZFwiXG4gICAgICAgIFtuekxnXT1cImJ0bkdyaWQubGdcIlxuICAgICAgICBbbnpYbF09XCJidG5HcmlkLnhsXCJcbiAgICAgICAgW256WFhsXT1cImJ0bkdyaWQueHhsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ1dHRvbjsgZWxzZSBjb25cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnN1Ym1pdF90eXBlIVwiXG4gICAgICAgICAgICAgICAgW256U2l6ZV09XCJfYnRuLnJlbmRlciEuc2l6ZSFcIlxuICAgICAgICAgICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxpdmVWYWxpZGF0ZSAmJiAhdmFsaWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiX2J0bi5zdWJtaXRfaWNvblwiXG4gICAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIl9idG4uc3VibWl0X2ljb24udHlwZSFcIlxuICAgICAgICAgICAgICAgICAgW256VGhlbWVdPVwiX2J0bi5zdWJtaXRfaWNvbi50aGVtZSFcIlxuICAgICAgICAgICAgICAgICAgW256VHdvdG9uZUNvbG9yXT1cIl9idG4uc3VibWl0X2ljb24udHdvVG9uZUNvbG9yIVwiXG4gICAgICAgICAgICAgICAgICBbbnpJY29uZm9udF09XCJfYnRuLnN1Ym1pdF9pY29uLmljb25mb250IVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICB7eyBfYnRuLnN1Ym1pdCB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiX2J0bi5yZXNldFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgICAgIFtuelR5cGVdPVwiX2J0bi5yZXNldF90eXBlIVwiXG4gICAgICAgICAgICAgICAgW256U2l6ZV09XCJfYnRuLnJlbmRlciEuc2l6ZSFcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVzZXQodHJ1ZSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiX2J0bi5yZXNldF9pY29uXCJcbiAgICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICAgIFtuelR5cGVdPVwiX2J0bi5yZXNldF9pY29uLnR5cGUhXCJcbiAgICAgICAgICAgICAgICAgIFtuelRoZW1lXT1cIl9idG4ucmVzZXRfaWNvbi50aGVtZSFcIlxuICAgICAgICAgICAgICAgICAgW256VHdvdG9uZUNvbG9yXT1cIl9idG4ucmVzZXRfaWNvbi50d29Ub25lQ29sb3IhXCJcbiAgICAgICAgICAgICAgICAgIFtuekljb25mb250XT1cIl9idG4ucmVzZXRfaWNvbi5pY29uZm9udCFcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAge3sgX2J0bi5yZXNldCB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotZm9ybS1pdGVtPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG48Zm9ybSBuei1mb3JtIFtuekxheW91dF09XCJsYXlvdXRcIiAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIiBbYXR0ci5hdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCI+XG4gIDxzZi1pdGVtICpuZ0lmPVwicm9vdFByb3BlcnR5XCIgW2Zvcm1Qcm9wZXJ0eV09XCJyb290UHJvcGVydHlcIiBbZm9vdGVyXT1cImJ0blRwbFwiPjwvc2YtaXRlbT5cbjwvZm9ybT5cbiJdfQ==