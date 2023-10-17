import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Injector, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge, filter } from 'rxjs';
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
export function useFactory(injector, schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(injector, schemaValidatorFactory, cogSrv);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: SFComponent, deps: [{ token: i1.FormPropertyFactory }, { token: i2.TerminatorService }, { token: i3.DomSanitizer }, { token: i0.ChangeDetectorRef }, { token: i4.DelonLocaleService }, { token: i5.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i6.AlainConfigService }, { token: i7.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.9", type: SFComponent, selector: "sf, [sf]", inputs: { layout: "layout", schema: "schema", ui: "ui", formData: "formData", button: "button", liveValidate: "liveValidate", autocomplete: "autocomplete", firstVisual: "firstVisual", onlyVisual: "onlyVisual", compact: "compact", mode: "mode", loading: "loading", disabled: "disabled", noColon: "noColon", cleanValue: "cleanValue", delay: "delay" }, outputs: { formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf": "true", "class.sf__inline": "layout === 'inline'", "class.sf__horizontal": "layout === 'horizontal'", "class.sf__search": "mode === 'search'", "class.sf__edit": "mode === 'edit'", "class.sf__no-error": "onlyVisual", "class.sf__no-colon": "noColon", "class.sf__compact": "compact" } }, providers: [
            WidgetFactory,
            {
                provide: FormPropertyFactory,
                useFactory,
                deps: [Injector, SchemaValidatorFactory, AlainConfigService]
            },
            TerminatorService
        ], exportAs: ["sf"], usesOnChanges: true, ngImport: i0, template: "<ng-template #con>\n  <ng-content />\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\" />\n</form>\n", dependencies: [{ kind: "directive", type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i9.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i9.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i10.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i11.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i12.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i13.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i13.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i14.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon", "nzLabelAlign", "nzLabelWrap"], exportAs: ["nzForm"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i15.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i16.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: i17.SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: SFComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdqRCxPQUFPLEVBQW9CLGdCQUFnQixFQUFrQyxNQUFNLGNBQWMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFF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QXFCLEVBQUUsU0FBUztxQkFDakMsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBbU1sQyxRQUFROzswQkFDUixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGdCQUFnQjtvR0FuSzdCLE1BQU07c0JBQWQsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRUcsRUFBRTtzQkFBVixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csTUFBTTtzQkFBZCxLQUFLO2dCQU1tQixZQUFZO3NCQUFwQyxLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBTW1CLFdBQVc7c0JBQW5DLEtBQUs7Z0JBTW1CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBT0YsSUFBSTtzQkFEUCxLQUFLO2dCQTZCbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsVUFBVTtzQkFBbEMsS0FBSztnQkFDbUIsS0FBSztzQkFBN0IsS0FBSztnQkFDYSxlQUFlO3NCQUFqQyxNQUFNO2dCQUNZLFVBQVU7c0JBQTVCLE1BQU07Z0JBQ1ksVUFBVTtzQkFBNUIsTUFBTTtnQkFDWSxTQUFTO3NCQUEzQixNQUFNO2dCQUNZLFNBQVM7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiwgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xuXG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB0eXBlIHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHR5cGUgeyBTRkJ1dHRvbiwgU0ZMYXlvdXQsIFNGTW9kZSwgU0ZWYWx1ZUNoYW5nZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHlGYWN0b3J5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5LmZhY3RvcnknO1xuaW1wb3J0IHR5cGUgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB0eXBlIHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZlNjaGVtYSwgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXG4gIGluamVjdG9yOiBJbmplY3RvcixcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2Vcbik6IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3RvcnkoaW5qZWN0b3IsIHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIGNvZ1Nydik7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcbiAgZXhwb3J0QXM6ICdzZicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbSW5qZWN0b3IsIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksIEFsYWluQ29uZmlnU2VydmljZV1cbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNmX19zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmX19lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgICAnW2NsYXNzLnNmX19uby1jb2xvbl0nOiBgbm9Db2xvbmAsXG4gICAgJ1tjbGFzcy5zZl9fY29tcGFjdF0nOiBgY29tcGFjdGBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saXZlVmFsaWRhdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpcnN0VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vbmx5VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb21wYWN0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2xlYW5WYWx1ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtITogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVmVWkhOiBTRlVJU2NoZW1hSXRlbTtcbiAgcmVhZG9ubHkgb3B0aW9uczogQWxhaW5TRkNvbmZpZztcblxuICBfaW5pdGVkID0gZmFsc2U7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBfZm9ybURhdGEhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgX2J0biE6IFNGQnV0dG9uO1xuICBfc2NoZW1hITogU0ZTY2hlbWE7XG4gIF91aSE6IFNGVUlTY2hlbWE7XG4gIGdldCBidG5HcmlkKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2J0bi5yZW5kZXIhLmdyaWQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDooajljZXluIPlsYDvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmhvcml6b250YWwgKi9cbiAgQElucHV0KCkgbGF5b3V0OiBTRkxheW91dCA9ICdob3Jpem9udGFsJztcbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpIHNjaGVtYSE6IFNGU2NoZW1hO1xuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpIHVpITogU0ZVSVNjaGVtYTtcbiAgLyoqIOihqOWNlem7mOiupOWAvCAqL1xuICBASW5wdXQoKSBmb3JtRGF0YT86IFJlY29yZDxzdHJpbmcsIE56U2FmZUFueT47XG4gIC8qKlxuICAgKiDmjInpkq5cbiAgICogLSDlgLzkuLogYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkvYbkv53nlZnlrrnlmahcbiAgICogLSDlgLzkuLogYG5vbmVgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS4lOS4jeS/neeVmeWuueWZqFxuICAgKiAtIOS9v+eUqCBgc3BhbkxhYmVsRml4ZWRgIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeaXoCBgcmVuZGVyLmNsYXNzYCDliJnpu5jorqTkuLrlsYXkuK3nirbmgIFcbiAgICovXG4gIEBJbnB1dCgpIGJ1dHRvbj86IFNGQnV0dG9uIHwgJ25vbmUnIHwgbnVsbCA9IHt9O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgLyoqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLwgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgZXJyb3IgdmlzdWFscyBpbW1lZGlhdGVseVxuICAgKlxuICAgKiDmmK/lkKbnq4vljbPmmL7npLrplJnor6/op4bop4lcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbCA9IHRydWU7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIG9ubHkgZGlzcGxheSBlcnJvciB2aXN1YWxzIGJ1dCBub3QgZXJyb3IgdGV4dFxuICAgKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb21wYWN0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiBGb3JtIGRlZmF1bHQgbW9kZSwgd2lsbCBmb3JjZSBvdmVycmlkZSBgbGF5b3V0YCwgYGZpcnN0VmlzdWFsYCwgYGxpdmVWYWxpZGF0ZWAgcGFyYW1ldGVyc1xuICAgKlxuICAgKiDooajljZXpooTorr7mqKHlvI/vvIzkvJrlvLrliLbopobnm5YgYGxheW91dGDvvIxgZmlyc3RWaXN1YWxg77yMYGxpdmVWYWxpZGF0ZWAg5Y+C5pWwXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogU0ZNb2RlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKTogU0ZNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlITogU0ZNb2RlO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xlYW5WYWx1ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVsYXkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U0ZWYWx1ZUNoYW5nZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAqXG4gICAqIOihqOWNleaYr+WQpuacieaViFxuICAgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGZvcm1cbiAgICpcbiAgICog6KGo5Y2V5YC8XG4gICAqL1xuICBnZXQgdmFsdWUoKTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0eSBiYXNlZCBvbiBbcGF0aF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKlxuICAgKiDmoLnmja5b6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgp6I635Y+W6KGo5Y2V5YWD57Sg5bGe5oCnXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHk/LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbGVtZW50IHZhbHVlIGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnojrflj5booajljZXlhYPntKDlgLxcbiAgICovXG4gIGdldFZhbHVlKHBhdGg6IHN0cmluZyk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkocGF0aCk/LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmb3JtIGVsZW1lbnQgbmV3IHZhbHVlIGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICovXG4gIHNldFZhbHVlKHBhdGg6IHN0cmluZywgdmFsdWU6IE56U2FmZUFueSk6IHRoaXMge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9XG4gICAgaXRlbS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmZWVkYmFjayBzdGF0dXMgb2YgdGhlIHdpZGdldFxuICAgKlxuICAgKiDmm7TmlrDlsI/pg6jku7bnmoTlj43ppojnirbmgIFcbiAgICpcbiAgICogYGBgdHNcbiAgICogLy8gVmFsaWRhdGUgc3RhdHVzIG9mIHRoZSB3aWRnZXRcbiAgICogdGhpcy5zZi51cGRhdGVGZWVkYmFjaygnL25hbWUnLCAndmFsaWRhdGluZycpO1xuICAgKiAvLyBDbGVhbiB2YWxpZGF0ZSBzdGF0dXMgb2YgdGhlIHdpZGdldFxuICAgKiB0aGlzLnNmLnVwZGF0ZUZlZWRiYWNrKCcvbmFtZScpO1xuICAgKiBgYGBcbiAgICovXG4gIHVwZGF0ZUZlZWRiYWNrKHBhdGg6IHN0cmluZywgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eShwYXRoKT8udXBkYXRlRmVlZGJhY2soc3RhdHVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbG9jYWxlU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTcnY6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gdGhpcy5vcHRpb25zLmZpcnN0VmlzdWFsIGFzIGJvb2xlYW47XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmRlbGF5ID0gdGhpcy5vcHRpb25zLmRlbGF5IGFzIGJvb2xlYW47XG4gICAgdGhpcy5sb2NhbGVTcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMubG9jYWxlU3J2LmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yKHsgZW1pdEVycm9yOiBmYWxzZSwgb25seVJvb3Q6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVmU2NoZW1hczogQXJyYXk8T2JzZXJ2YWJsZTxOelNhZmVBbnk+IHwgbnVsbD4gPSBbXG4gICAgICB0aGlzLmFjbFNydiA/IHRoaXMuYWNsU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgICB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuY2hhbmdlIDogbnVsbFxuICAgIF0uZmlsdGVyKG8gPT4gbyAhPSBudWxsKTtcbiAgICBpZiAocmVmU2NoZW1hcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXJnZSguLi4ocmVmU2NoZW1hcyBhcyBBcnJheTxPYnNlcnZhYmxlPE56U2FmZUFueT4+KSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2luaXRlZCksXG4gICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaFNjaGVtYSgpKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmFueWkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGtleSkgOiAnJykgfHwga2V5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbmhlcml0VUkodWk6IFNGVUlTY2hlbWFJdGVtUnVuKTogdm9pZCB7XG4gICAgWydvcHRpb25hbEhlbHAnXS5maWx0ZXIoa2V5ID0+ICEhdGhpcy5fZGVmVWlba2V5XSkuZm9yRWFjaChrZXkgPT4gKHVpW2tleV0gPSB7IC4uLnRoaXMuX2RlZlVpW2tleV0sIC4uLnVpW2tleV0gfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlclByb3BlcnR5KCk6IHZvaWQge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgX3NjaGVtYSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKTtcbiAgICBjb25zdCB7IGRlZmluaXRpb25zIH0gPSBfc2NoZW1hO1xuXG4gICAgY29uc3QgaW5GbiA9IChcbiAgICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICBfcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1blxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkpIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXlQcmVmaXggPSAnJCc7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gdWlLZXlQcmVmaXggKyBrZXk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLnByb3BlcnRpZXMhW2tleV0gYXMgU0ZTY2hlbWEsIGRlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgY3VyVWkgPSB7XG4gICAgICAgICAgLi4uKHByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAuLi51aVNjaGVtYVt1aUtleV1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdWkgPSB7XG4gICAgICAgICAgLi4udGhpcy5fZGVmVWksXG4gICAgICAgICAgLi4ucGFyZW50VWlTY2hlbWEsXG4gICAgICAgICAgLy8g5b+955Wl6YOo5YiG5Lya5byV6LW35ZGI546w55qE5bGe5oCnXG4gICAgICAgICAgdmlzaWJsZUlmOiB1bmRlZmluZWQsXG4gICAgICAgICAgaGlkZGVuOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS5mb3JtYXQgJiYgKHRoaXMub3B0aW9ucy5mb3JtYXRNYXAgYXMgTnpTYWZlQW55KVtwcm9wZXJ0eS5mb3JtYXRdKSxcbiAgICAgICAgICAuLi4odHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCksXG4gICAgICAgICAgLi4uKCFwcm9wZXJ0eS5mb3JtYXQgJiYgIXByb3BlcnR5LnVpICYmIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiYgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgd2lkZ2V0OiAnc2VsZWN0JyB9XG4gICAgICAgICAgICA6IG51bGwpLFxuICAgICAgICAgIC4uLmN1clVpXG4gICAgICAgIH0gYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIE9iamVjdC5rZXlzKHVpKVxuICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKHVpS2V5UHJlZml4KSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4gZGVsZXRlIHVpW2tleV0pO1xuICAgICAgICAvLyDnu6fmib/niLboioLngrnluIPlsYDlsZ7mgKdcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgIGlmIChwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgaWYgKCFjdXJVaS5zcGFuTGFiZWxGaXhlZCkge1xuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbClcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gMTkgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2w7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWGheiBlOW8uuWItua4heeQhiBgZ3JpZGAg5Y+C5pWwXG4gICAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBkZWxldGUgdWkuZ3JpZDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpnZ7msLTlubPluIPlsYDlvLrliLbmuIXnkIYgYHNwYW5MYWJlbEZpeGVkYCDlgLxcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2T5oyH5a6a5qCH562+5Li65Zu65a6a5a695bqm5pe25peg6aG75oyH5a6aIGBzcGFuTGFiZWxg77yMYHNwYW5Db250cm9sYFxuICAgICAgICBpZiAodWkuc3BhbkxhYmVsRml4ZWQgIT0gbnVsbCAmJiB1aS5zcGFuTGFiZWxGaXhlZCA+IDApIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllcyFbdWkuZW5kXTtcbiAgICAgICAgICBpZiAoZGF0ZUVuZFByb3BlcnR5KSB7XG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSB7XG4gICAgICAgICAgICAgIC4uLihkYXRlRW5kUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgICAgICB3aWRnZXQ6IHVpLndpZGdldCxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaGVyaXRVSSh1aSk7XG4gICAgICAgIGlmICh1aS5vcHRpb25hbEhlbHApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHVpLm9wdGlvbmFsSGVscCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVpLm9wdGlvbmFsSGVscCA9IHtcbiAgICAgICAgICAgICAgdGV4dDogdWkub3B0aW9uYWxIZWxwXG4gICAgICAgICAgICB9IGFzIFNGT3B0aW9uYWxIZWxwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvaCA9ICh1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGljb246ICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk6IDAuMTUsXG4gICAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICAgICAgICAgIC4uLnVpLm9wdGlvbmFsSGVscFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChvaC5pMThuKSB7XG4gICAgICAgICAgICBvaC50ZXh0ID0gdGhpcy5mYW55aShvaC5pMThuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFvaC50ZXh0KSB7XG4gICAgICAgICAgICB1aS5vcHRpb25hbEhlbHAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5pMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkudGl0bGUgPSB0aGlzLmZhbnlpKHVpLmkxOG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS5kZXNjcmlwdGlvbkkxOG4pIHtcbiAgICAgICAgICBwcm9wZXJ0eS5kZXNjcmlwdGlvbiA9IHRoaXMuZmFueWkodWkuZGVzY3JpcHRpb25JMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICB1aS5fZGVzY3JpcHRpb24gPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChwcm9wZXJ0eS5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG4gICAgICAgIGlmICh1aS5oaWRkZW4gPT09IGZhbHNlICYmIHVpLmFjbCAmJiB0aGlzLmFjbFNydiAmJiAhdGhpcy5hY2xTcnYuY2FuKHVpLmFjbCkpIHtcbiAgICAgICAgICB1aS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAodWkuaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgaWR4ID0gc2NoZW1hLnJlcXVpcmVkIS5pbmRleE9mKGtleSk7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNjaGVtYS5yZXF1aXJlZCEuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgdWkuJGl0ZW1zID0ge1xuICAgICAgICAgICAgLi4uKHByb3BlcnR5Lml0ZW1zLnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgICAgIC4uLnVpLiRpdGVtc1xuICAgICAgICAgIH07XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eS5pdGVtcywgcHJvcGVydHkuaXRlbXMsIHVpU2NoZW1hW3VpS2V5XT8uJGl0ZW1zID8/IHt9LCB1aS4kaXRlbXMsIHVpLiRpdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLnVpLFxuICAgICAgLi4uKF9zY2hlbWEgYXMgTnpTYWZlQW55KS51aSxcbiAgICAgIC4uLnRoaXMudWlbJyonXVxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuICAgIC8vIOWGheiBlOW8uuWItua4heeQhiBgZ3JpZGAg5Y+C5pWwXG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaW5saW5lJykge1xuICAgICAgZGVsZXRlIHRoaXMuX2RlZlVpLmdyaWQ7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmU2NoZW1hKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG4gICAgZGVsZXRlIF9zY2hlbWEudWk7XG5cbiAgICBkaSh0aGlzLl91aSwgJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCk6IHZvaWQge1xuICAgIHRoaXMuX2J0biA9IHtcbiAgICAgIHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSxcbiAgICAgIC4uLnRoaXMubG9jYWxlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIC4uLih0aGlzLmJ1dHRvbiBhcyBTRkJ1dHRvbilcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgY29uc3QgYnRuUmVuZGVyID0gdGhpcy5fYnRuLnJlbmRlciE7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghYnRuUmVuZGVyLmdyaWQpIHtcbiAgICAgICAgYnRuUmVuZGVyLmdyaWQgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBidG5VaS5zcGFuTGFiZWwsXG4gICAgICAgICAgc3BhbjogYnRuVWkuc3BhbkNvbnRyb2xcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAoYnRuUmVuZGVyLnNwYW5MYWJlbEZpeGVkID09IG51bGwpIHtcbiAgICAgICAgYnRuUmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6XkuI3mjIflrprmoLflvI/vvIzliJnpu5jorqTlsYXkuK1cbiAgICAgIGlmICghYnRuUmVuZGVyLmNsYXNzICYmIHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKSB7XG4gICAgICAgIGJ0blJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0blJlbmRlci5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIGRpKHRoaXMuX3VpLCAnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5nb3JlUmVuZGVyID0gWydkaXNhYmxlZCcsICdsb2FkaW5nJ107XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmV2ZXJ5KGtleSA9PiBpbmdvcmVSZW5kZXIuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRlbGF5KSB7XG4gICAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgZGVmaW5pdGlvbiBcIiR7cGF0aH1cIiBjdXN0b20gd2lkZ2V0YCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHk/LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgICAgaWYgKHByb3BlcnR5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHJvcGVydHkudWkuX3JlbmRlciA9IHRwbDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICpcbiAgICog5qCh6aqM6KGo5Y2V5piv5ZCm5pyJ5pWIXG4gICAqIC0gYGVtaXRFcnJvcmAg5b2T6KGo5Y2V5peg5pWI5pe25piv5ZCm6Kem5Y+RIGBmb3JtRXJyb3JgIOS6i+S7tu+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGBvbmx5Um9vdGAg5Y+q5a+55qC56L+b6KGM5qOA6aqM77yM5LiN6L+b6KGM5ZCR5LiL6YCQ5Liq6YCS5b2S77yM5qC55bey57uP5YyF5ZCr5pW05LiqIEpzb24gU2NoZW1h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB2YWxpZGF0b3Iob3B0aW9uczogeyBlbWl0RXJyb3I/OiBib29sZWFuOyBvbmx5Um9vdD86IGJvb2xlYW4gfSA9IHsgZW1pdEVycm9yOiB0cnVlLCBvbmx5Um9vdDogdHJ1ZSB9KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5ID09IG51bGwgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gKHByb3BlcnR5OiBGb3JtUHJvcGVydHkpOiB2b2lkID0+IHtcbiAgICAgIHByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgICBpZiAoIShwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHx8ICFwcm9wZXJ0eS5wcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5wcm9wZXJ0aWVzKSkge1xuICAgICAgICBwcm9wZXJ0eS5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBmbihwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICAgIGZuKChwcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW2tleV0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5vbmx5Um9vdCkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkhLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHRoaXMucm9vdFByb3BlcnR5ISk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkhLmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmIChvcHRpb25zLmVtaXRFcnJvciAmJiAhdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBmb3JtIFNjaGVtYSwgd2hlbiBzcGVjaWZ5aW5nIGBuZXdTY2hlbWFgIG1lYW5zIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgU2NoZW1hXG4gICAqXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzlvZPmjIflrpogYG5ld1NjaGVtYWAg6KGo56S65pu/5o2i5b2T5YmN55qEIFNjaGVtYVxuICAgKlxuICAgKiDlj6/ku6Xpkojlr7nmn5DkuKrooajljZXlhYPntKDov5vooYzliLfmlrDvvIzkvovlpoLvvJpcbiAgICogYGBgXG4gICAqIC8vIOiOt+WPluafkOS4quWFg+e0oFxuICAgKiBjb25zdCBzdGF0dXNQcm9wZXJ0eSA9IHRoaXMuc2YuZ2V0UHJvcGVydHkoJy9zdGF0dXMnKSE7XG4gICAqIC8vIOmHjee9riBgc2NoZW1hYCDmiJYgYHVpYCDlj4LmlbBcbiAgICogc3RhdHVzUHJvcGVydHkuc2NoZW1hLmVudW0gPSBbJzEnLCAnMicsICczJ107XG4gICAqIC8vIOiwg+eUqCBgcmVzZXRgIOmHjee9ruWIneWni+WAvFxuICAgKiBzdGF0dXNQcm9wZXJ0eS53aWRnZXQucmVzZXQoJzInKTtcbiAgICogYGBgXG4gICAqL1xuICByZWZyZXNoU2NoZW1hKG5ld1NjaGVtYT86IFNGU2NoZW1hLCBuZXdVST86IFNGVUlTY2hlbWEpOiB0aGlzIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBzdXBwb3J0IHN0cmluZyB3aXRoIHJvb3QgdWkgcHJvcGVydHlgKTtcblxuICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcblxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XG5cbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcblxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5fc2NoZW1hLCB0aGlzLl91aSwgdGhpcy5mb3JtRGF0YSEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0geyAuLi4odGhpcy5jbGVhblZhbHVlID8gbnVsbCA6IHRoaXMuZm9ybURhdGEpLCAuLi5yZXMudmFsdWUgfTtcbiAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMuX2l0ZW0sIHBhdGg6IHJlcy5wYXRoLCBwYXRoVmFsdWU6IHJlcy5wYXRoVmFsdWUgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZm9ybVxuICAgKlxuICAgKiDph43nva7ooajljZVcbiAgICpcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdDogYm9vbGVhbiA9IGZhbHNlKTogdGhpcyB7XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5ID09IG51bGwgfHwgIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Sb290U3ViKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yb290UHJvcGVydHkpIHJldHVybjtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjY29uPlxuICA8bmctY29udGVudCAvPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuVHBsPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uICE9PSAnbm9uZSc7IGVsc2UgY29uXCI+XG4gICAgPG56LWZvcm0taXRlbVxuICAgICAgKm5nSWY9XCJfYnRuICYmIF9idG4ucmVuZGVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cIl9idG4ucmVuZGVyIS5jbGFzcyFcIlxuICAgICAgY2xhc3M9XCJzZi1idG5zXCJcbiAgICAgIFtmaXhlZC1sYWJlbF09XCJfYnRuLnJlbmRlciEuc3BhbkxhYmVsRml4ZWQhXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG56LWNvbFxuICAgICAgICBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiXG4gICAgICAgIFtuelNwYW5dPVwiYnRuR3JpZC5zcGFuXCJcbiAgICAgICAgW256T2Zmc2V0XT1cImJ0bkdyaWQub2Zmc2V0XCJcbiAgICAgICAgW256WHNdPVwiYnRuR3JpZC54c1wiXG4gICAgICAgIFtuelNtXT1cImJ0bkdyaWQuc21cIlxuICAgICAgICBbbnpNZF09XCJidG5HcmlkLm1kXCJcbiAgICAgICAgW256TGddPVwiYnRuR3JpZC5sZ1wiXG4gICAgICAgIFtuelhsXT1cImJ0bkdyaWQueGxcIlxuICAgICAgICBbbnpYWGxdPVwiYnRuR3JpZC54eGxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uOyBlbHNlIGNvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIl9idG4uc3VibWl0X3R5cGUhXCJcbiAgICAgICAgICAgICAgICBbbnpTaXplXT1cIl9idG4ucmVuZGVyIS5zaXplIVwiXG4gICAgICAgICAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibGl2ZVZhbGlkYXRlICYmICF2YWxpZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnN1Ym1pdF9pY29uXCJcbiAgICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICAgIFtuelR5cGVdPVwiX2J0bi5zdWJtaXRfaWNvbi50eXBlIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUaGVtZV09XCJfYnRuLnN1Ym1pdF9pY29uLnRoZW1lIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiX2J0bi5zdWJtaXRfaWNvbi50d29Ub25lQ29sb3IhXCJcbiAgICAgICAgICAgICAgICAgIFtuekljb25mb250XT1cIl9idG4uc3VibWl0X2ljb24uaWNvbmZvbnQhXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgIHt7IF9idG4uc3VibWl0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnJlc2V0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnJlc2V0X3R5cGUhXCJcbiAgICAgICAgICAgICAgICBbbnpTaXplXT1cIl9idG4ucmVuZGVyIS5zaXplIVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldCh0cnVlKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnJlc2V0X2ljb25cIlxuICAgICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnJlc2V0X2ljb24udHlwZSFcIlxuICAgICAgICAgICAgICAgICAgW256VGhlbWVdPVwiX2J0bi5yZXNldF9pY29uLnRoZW1lIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiX2J0bi5yZXNldF9pY29uLnR3b1RvbmVDb2xvciFcIlxuICAgICAgICAgICAgICAgICAgW256SWNvbmZvbnRdPVwiX2J0bi5yZXNldF9pY29uLmljb25mb250IVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICB7eyBfYnRuLnJlc2V0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1mb3JtLWl0ZW0+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjxmb3JtIG56LWZvcm0gW256TGF5b3V0XT1cImxheW91dFwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbiAgPHNmLWl0ZW0gKm5nSWY9XCJyb290UHJvcGVydHlcIiBbZm9ybVByb3BlcnR5XT1cInJvb3RQcm9wZXJ0eVwiIFtmb290ZXJdPVwiYnRuVHBsXCIgLz5cbjwvZm9ybT5cbiJdfQ==