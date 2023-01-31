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
                const ui = deepCopy({
                    widget: property.type,
                    ...(property.format && this.options.formatMap[property.format]),
                    ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
                    ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                        ? { widget: 'select' }
                        : null),
                    ...this._defUi,
                    ...property.ui,
                    ...uiSchema[uiKey]
                });
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
SFComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SFComponent, deps: [{ token: i1.FormPropertyFactory }, { token: i2.TerminatorService }, { token: i3.DomSanitizer }, { token: i0.ChangeDetectorRef }, { token: i4.DelonLocaleService }, { token: i5.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i6.AlainConfigService }, { token: i7.Platform }], target: i0.ɵɵFactoryTarget.Component });
SFComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SFComponent, selector: "sf, [sf]", inputs: { layout: "layout", schema: "schema", ui: "ui", formData: "formData", button: "button", liveValidate: "liveValidate", autocomplete: "autocomplete", firstVisual: "firstVisual", onlyVisual: "onlyVisual", compact: "compact", mode: "mode", loading: "loading", disabled: "disabled", noColon: "noColon", cleanValue: "cleanValue", delay: "delay" }, outputs: { formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf": "true", "class.sf__inline": "layout === 'inline'", "class.sf__horizontal": "layout === 'horizontal'", "class.sf__search": "mode === 'search'", "class.sf__edit": "mode === 'edit'", "class.sf__no-error": "onlyVisual", "class.sf__no-colon": "noColon", "class.sf__compact": "compact" } }, providers: [
        WidgetFactory,
        {
            provide: FormPropertyFactory,
            useFactory,
            deps: [SchemaValidatorFactory, AlainConfigService]
        },
        TerminatorService
    ], exportAs: ["sf"], usesOnChanges: true, ngImport: i0, template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<ng-template #btnTpl>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn && _btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\" [footer]=\"btnTpl\"></sf-item>\n</form>\n", dependencies: [{ kind: "directive", type: i8.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i9.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i9.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i10.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i11.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i12.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i13.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i13.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i14.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon"], exportAs: ["nzForm"] }, { kind: "component", type: i14.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i15.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i16.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }, { kind: "directive", type: i17.SFFixedDirective, selector: "[fixed-label]", inputs: ["fixed-label"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SFComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHckUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBa0MsTUFBTSxjQUFjLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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Z0JBRUcsRUFBRTtzQkFBVixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csTUFBTTtzQkFBZCxLQUFLO2dCQU1tQixZQUFZO3NCQUFwQyxLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRW1CLFdBQVc7c0JBQW5DLEtBQUs7Z0JBRW1CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBR0YsSUFBSTtzQkFEUCxLQUFLO2dCQTZCbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFDbUIsT0FBTztzQkFBL0IsS0FBSztnQkFDbUIsVUFBVTtzQkFBbEMsS0FBSztnQkFDbUIsS0FBSztzQkFBN0IsS0FBSztnQkFDYSxlQUFlO3NCQUFqQyxNQUFNO2dCQUNZLFVBQVU7c0JBQTVCLE1BQU07Z0JBQ1ksVUFBVTtzQkFBNUIsTUFBTTtnQkFDWSxTQUFTO3NCQUEzQixNQUFNO2dCQUNZLFNBQVM7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9mb3JtJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB0eXBlIHsgU0ZCdXR0b24sIFNGTGF5b3V0LCBTRk1vZGUsIFNGVmFsdWVDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB0eXBlIHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgdHlwZSB7IFNGT3B0aW9uYWxIZWxwLCBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IGRpLCByZXNvbHZlSWZTY2hlbWEsIHJldHJpZXZlU2NoZW1hIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWN0b3J5KFxuICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZVxuKTogRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBjb2dTcnYpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIGV4cG9ydEFzOiAnc2YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIEFsYWluQ29uZmlnU2VydmljZV1cbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNmX19zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmX19lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgICAnW2NsYXNzLnNmX19uby1jb2xvbl0nOiBgbm9Db2xvbmAsXG4gICAgJ1tjbGFzcy5zZl9fY29tcGFjdF0nOiBgY29tcGFjdGBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saXZlVmFsaWRhdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpcnN0VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vbmx5VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb21wYWN0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2xlYW5WYWx1ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjx2b2lkPj4oKTtcbiAgcHJpdmF0ZSBfaXRlbSE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBwcml2YXRlIF92YWxpZCA9IHRydWU7XG4gIHByaXZhdGUgX2RlZlVpITogU0ZVSVNjaGVtYUl0ZW07XG4gIHJlYWRvbmx5IG9wdGlvbnM6IEFsYWluU0ZDb25maWc7XG5cbiAgX2luaXRlZCA9IGZhbHNlO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgX2Zvcm1EYXRhITogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIF9idG4hOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYSE6IFNGU2NoZW1hO1xuICBfdWkhOiBTRlVJU2NoZW1hO1xuICBnZXQgYnRuR3JpZCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9idG4ucmVuZGVyIS5ncmlkO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiog6KGo5Y2V5biD5bGA77yM562J5ZCMIGBuekxheW91dGDvvIzpu5jorqTvvJpob3Jpem9udGFsICovXG4gIEBJbnB1dCgpIGxheW91dDogU0ZMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKSBzY2hlbWEhOiBTRlNjaGVtYTtcbiAgLyoqIFVJIFNjaGVtYSAqL1xuICBASW5wdXQoKSB1aSE6IFNGVUlTY2hlbWE7XG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KCkgZm9ybURhdGE/OiBSZWNvcmQ8c3RyaW5nLCBOelNhZmVBbnk+O1xuICAvKipcbiAgICog5oyJ6ZKuXG4gICAqIC0g5YC85Li6IGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5L2G5L+d55WZ5a655ZmoXG4gICAqIC0g5YC85Li6IGBub25lYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkuJTkuI3kv53nlZnlrrnlmahcbiAgICogLSDkvb/nlKggYHNwYW5MYWJlbEZpeGVkYCDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXG4gICAqL1xuICBASW5wdXQoKSBidXR0b24/OiBTRkJ1dHRvbiB8ICdub25lJyB8IG51bGwgPSB7fTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gIC8qKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC8ICovXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogJ29uJyB8ICdvZmYnO1xuICAvKiog56uL5Y2z5pi+56S66ZSZ6K+v6KeG6KeJICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbCA9IHRydWU7XG4gIC8qKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKwgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9ubHlWaXN1YWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbXBhY3QgPSBmYWxzZTtcbiAgLyoqIOihqOWNleaooeW8jyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogU0ZNb2RlKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKTogU0ZNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlITogU0ZNb2RlO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xlYW5WYWx1ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVsYXkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U0ZWYWx1ZUNoYW5nZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAqXG4gICAqIOihqOWNleaYr+WQpuacieaViFxuICAgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGZvcm1cbiAgICpcbiAgICog6KGo5Y2V5YC8XG4gICAqL1xuICBnZXQgdmFsdWUoKTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0eSBiYXNlZCBvbiBbcGF0aF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKlxuICAgKiDmoLnmja5b6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgp6I635Y+W6KGo5Y2V5YWD57Sg5bGe5oCnXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHk/LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbGVtZW50IHZhbHVlIGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnojrflj5booajljZXlhYPntKDlgLxcbiAgICovXG4gIGdldFZhbHVlKHBhdGg6IHN0cmluZyk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkocGF0aCk/LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmb3JtIGVsZW1lbnQgbmV3IHZhbHVlIGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICovXG4gIHNldFZhbHVlKHBhdGg6IHN0cmluZywgdmFsdWU6IE56U2FmZUFueSk6IHRoaXMge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9XG4gICAgaXRlbS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmZWVkYmFjayBzdGF0dXMgb2YgdGhlIHdpZGdldFxuICAgKlxuICAgKiDmm7TmlrDlsI/pg6jku7bnmoTlj43ppojnirbmgIFcbiAgICpcbiAgICogYGBgdHNcbiAgICogLy8gVmFsaWRhdGUgc3RhdHVzIG9mIHRoZSB3aWRnZXRcbiAgICogdGhpcy5zZi51cGRhdGVGZWVkYmFjaygnL25hbWUnLCAndmFsaWRhdGluZycpO1xuICAgKiAvLyBDbGVhbiB2YWxpZGF0ZSBzdGF0dXMgb2YgdGhlIHdpZGdldFxuICAgKiB0aGlzLnNmLnVwZGF0ZUZlZWRiYWNrKCcvbmFtZScpO1xuICAgKiBgYGBcbiAgICovXG4gIHVwZGF0ZUZlZWRiYWNrKHBhdGg6IHN0cmluZywgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9ICcnKTogdGhpcyB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eShwYXRoKT8udXBkYXRlRmVlZGJhY2soc3RhdHVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbG9jYWxlU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTcnY6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gdGhpcy5vcHRpb25zLmZpcnN0VmlzdWFsIGFzIGJvb2xlYW47XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmRlbGF5ID0gdGhpcy5vcHRpb25zLmRlbGF5IGFzIGJvb2xlYW47XG4gICAgdGhpcy5sb2NhbGVTcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmxvY2FsZVNydi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvcih7IGVtaXRFcnJvcjogZmFsc2UsIG9ubHlSb290OiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlZlNjaGVtYXM6IEFycmF5PE9ic2VydmFibGU8TnpTYWZlQW55PiB8IG51bGw+ID0gW1xuICAgICAgdGhpcy5hY2xTcnYgPyB0aGlzLmFjbFNydi5jaGFuZ2UgOiBudWxsLFxuICAgICAgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmNoYW5nZSA6IG51bGxcbiAgICBdLmZpbHRlcihvID0+IG8gIT0gbnVsbCk7XG4gICAgaWYgKHJlZlNjaGVtYXMubGVuZ3RoID4gMCkge1xuICAgICAgbWVyZ2UoLi4uKHJlZlNjaGVtYXMgYXMgQXJyYXk8T2JzZXJ2YWJsZTxOelNhZmVBbnk+PikpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9pbml0ZWQpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoU2NoZW1hKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmYW55aShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkoa2V5KSA6ICcnKSB8fCBrZXk7XG4gIH1cblxuICBwcml2YXRlIGluaGVyaXRVSSh1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiB2b2lkIHtcbiAgICBbJ29wdGlvbmFsSGVscCddLmZpbHRlcihrZXkgPT4gISF0aGlzLl9kZWZVaVtrZXldKS5mb3JFYWNoKGtleSA9PiAodWlba2V5XSA9IHsgLi4udGhpcy5fZGVmVWlba2V5XSwgLi4udWlba2V5XSB9KSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKTogdm9pZCB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIF9wYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuXG4gICAgKTogdm9pZCA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSkgc2NoZW1hLnJlcXVpcmVkID0gW107XG5cbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEucHJvcGVydGllcyFba2V5XSBhcyBTRlNjaGVtYSwgZGVmaW5pdGlvbnMpO1xuICAgICAgICBjb25zdCB1aSA9IGRlZXBDb3B5KHtcbiAgICAgICAgICB3aWRnZXQ6IHByb3BlcnR5LnR5cGUsXG4gICAgICAgICAgLi4uKHByb3BlcnR5LmZvcm1hdCAmJiAodGhpcy5vcHRpb25zLmZvcm1hdE1hcCBhcyBOelNhZmVBbnkpW3Byb3BlcnR5LmZvcm1hdF0pLFxuICAgICAgICAgIC4uLih0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi4oIXByb3BlcnR5LmZvcm1hdCAmJiAhcHJvcGVydHkudWkgJiYgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJiBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cbiAgICAgICAgICAgIDogbnVsbCksXG4gICAgICAgICAgLi4udGhpcy5fZGVmVWksXG4gICAgICAgICAgLi4uKHByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAuLi51aVNjaGVtYVt1aUtleV1cbiAgICAgICAgfSkgYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIOe7p+aJv+eItuiKgueCueW4g+WxgOWxnuaAp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJyA/IDUgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyAxOSA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YaF6IGU5by65Yi25riF55CGIGBncmlkYCDlj4LmlbBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGRlbGV0ZSB1aS5ncmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmdnuawtOW5s+W4g+WxgOW8uuWItua4heeQhiBgc3BhbkxhYmVsRml4ZWRgIOWAvFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlvZPmjIflrprmoIfnrb7kuLrlm7rlrprlrr3luqbml7bml6DpobvmjIflrpogYHNwYW5MYWJlbGDvvIxgc3BhbkNvbnRyb2xgXG4gICAgICAgIGlmICh1aS5zcGFuTGFiZWxGaXhlZCAhPSBudWxsICYmIHVpLnNwYW5MYWJlbEZpeGVkID4gMCkge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS53aWRnZXQgPT09ICdkYXRlJyAmJiB1aS5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHNjaGVtYS5wcm9wZXJ0aWVzIVt1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IHtcbiAgICAgICAgICAgICAgLi4uKGRhdGVFbmRQcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAgIHdpZGdldDogdWkud2lkZ2V0LFxuICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5oZXJpdFVJKHVpKTtcbiAgICAgICAgaWYgKHVpLm9wdGlvbmFsSGVscCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdWkub3B0aW9uYWxIZWxwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0ge1xuICAgICAgICAgICAgICB0ZXh0OiB1aS5vcHRpb25hbEhlbHBcbiAgICAgICAgICAgIH0gYXMgU0ZPcHRpb25hbEhlbHA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG9oID0gKHVpLm9wdGlvbmFsSGVscCA9IHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogMC4xNSxcbiAgICAgICAgICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgICAgICAgICAgLi4udWkub3B0aW9uYWxIZWxwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG9oLmkxOG4pIHtcbiAgICAgICAgICAgIG9oLnRleHQgPSB0aGlzLmZhbnlpKG9oLmkxOG4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW9oLnRleHQpIHtcbiAgICAgICAgICAgIHVpLm9wdGlvbmFsSGVscCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLmkxOG4pIHtcbiAgICAgICAgICBwcm9wZXJ0eS50aXRsZSA9IHRoaXMuZmFueWkodWkuaTE4bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLmRlc2NyaXB0aW9uSTE4bikge1xuICAgICAgICAgIHByb3BlcnR5LmRlc2NyaXB0aW9uID0gdGhpcy5mYW55aSh1aS5kZXNjcmlwdGlvbkkxOG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgIHVpLl9kZXNjcmlwdGlvbiA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHByb3BlcnR5LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB1aS5oaWRkZW4gPSB0eXBlb2YgdWkuaGlkZGVuID09PSAnYm9vbGVhbicgPyB1aS5oaWRkZW4gOiBmYWxzZTtcbiAgICAgICAgaWYgKHVpLmhpZGRlbiA9PT0gZmFsc2UgJiYgdWkuYWNsICYmIHRoaXMuYWNsU3J2ICYmICF0aGlzLmFjbFNydi5jYW4odWkuYWNsKSkge1xuICAgICAgICAgIHVpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB1aVJlc1t1aUtleV0gPSB1aTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVpO1xuXG4gICAgICAgIGlmICh1aS5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBpZHggPSBzY2hlbWEucmVxdWlyZWQhLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgc2NoZW1hLnJlcXVpcmVkIS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBjb25zdCB1aVNjaGVtYUluQXJyID0gKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSkuJGl0ZW1zIHx8IHt9O1xuICAgICAgICAgIHVpLiRpdGVtcyA9IHtcbiAgICAgICAgICAgIC4uLihwcm9wZXJ0eS5pdGVtcy51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAuLi51aVNjaGVtYUluQXJyW3VpS2V5XSxcbiAgICAgICAgICAgIC4uLnVpLiRpdGVtc1xuICAgICAgICAgIH07XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eS5pdGVtcywgcHJvcGVydHkuaXRlbXMsIHVpU2NoZW1hSW5BcnIsIHVpLiRpdGVtcywgdWkuJGl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0ge1xuICAgICAgb25seVZpc3VhbDogdGhpcy5vcHRpb25zLm9ubHlWaXN1YWwsXG4gICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgIGxpdmVWYWxpZGF0ZTogdGhpcy5saXZlVmFsaWRhdGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMudWksXG4gICAgICAuLi4oX3NjaGVtYSBhcyBOelNhZmVBbnkpLnVpLFxuICAgICAgLi4udGhpcy51aVsnKiddXG4gICAgfTtcbiAgICBpZiAodGhpcy5vbmx5VmlzdWFsID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9kZWZVaS5vbmx5VmlzdWFsID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8g5YaF6IGU5by65Yi25riF55CGIGBncmlkYCDlj4LmlbBcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdpbmxpbmUnKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZGVmVWkuZ3JpZDtcbiAgICB9XG5cbiAgICAvLyByb290XG4gICAgdGhpcy5fdWkgPSB7IC4uLnRoaXMuX2RlZlVpIH07XG5cbiAgICBpbkZuKF9zY2hlbWEsIF9zY2hlbWEsIHRoaXMudWksIHRoaXMudWksIHRoaXMuX3VpKTtcblxuICAgIC8vIGNvbmRcbiAgICByZXNvbHZlSWZTY2hlbWEoX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcbiAgICBkZWxldGUgX3NjaGVtYS51aTtcblxuICAgIGRpKHRoaXMuX3VpLCAnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKTogdm9pZCB7XG4gICAgdGhpcy5fYnRuID0ge1xuICAgICAgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9LFxuICAgICAgLi4udGhpcy5sb2NhbGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgLi4uKHRoaXMuYnV0dG9uIGFzIFNGQnV0dG9uKVxuICAgIH07XG4gICAgY29uc3QgZmlyc3RLZXkgPSBPYmplY3Qua2V5cyh0aGlzLl91aSkuZmluZCh3ID0+IHcuc3RhcnRzV2l0aCgnJCcpKTtcbiAgICBjb25zdCBidG5SZW5kZXIgPSB0aGlzLl9idG4ucmVuZGVyITtcbiAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgYnRuVWkgPSBmaXJzdEtleSA/IHRoaXMuX3VpW2ZpcnN0S2V5XSA6IHRoaXMuX2RlZlVpO1xuICAgICAgaWYgKCFidG5SZW5kZXIuZ3JpZCkge1xuICAgICAgICBidG5SZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gZml4ZWQgbGFiZWxcbiAgICAgIGlmIChidG5SZW5kZXIuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICBidG5SZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgIH1cbiAgICAgIC8vIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeS4jeaMh+Wumuagt+W8j++8jOWImem7mOiupOWxheS4rVxuICAgICAgaWYgKCFidG5SZW5kZXIuY2xhc3MgJiYgdHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApIHtcbiAgICAgICAgYnRuUmVuZGVyLmNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnRuUmVuZGVyLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuXG4gICAgZGkodGhpcy5fdWksICdidXR0b24gcHJvcGVydHknLCB0aGlzLl9idG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbGlkYXRvcigpO1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmdvcmVSZW5kZXIgPSBbJ2Rpc2FibGVkJywgJ2xvYWRpbmcnXTtcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZXZlcnkoa2V5ID0+IGluZ29yZVJlbmRlci5pbmNsdWRlcyhrZXkpKSkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGVsYXkpIHtcbiAgICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSBkZWZpbml0aW9uIFwiJHtwYXRofVwiIGN1c3RvbSB3aWRnZXRgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eT8uc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRvciB0aGUgZm9ybSBpcyB2YWxpZFxuICAgKlxuICAgKiDmoKHpqozooajljZXmmK/lkKbmnInmlYhcbiAgICogLSBgZW1pdEVycm9yYCDlvZPooajljZXml6DmlYjml7bmmK/lkKbop6blj5EgYGZvcm1FcnJvcmAg5LqL5Lu277yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYG9ubHlSb290YCDlj6rlr7nmoLnov5vooYzmo4DpqozvvIzkuI3ov5vooYzlkJHkuIvpgJDkuKrpgJLlvZLvvIzmoLnlt7Lnu4/ljIXlkKvmlbTkuKogSnNvbiBTY2hlbWHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHZhbGlkYXRvcihvcHRpb25zOiB7IGVtaXRFcnJvcj86IGJvb2xlYW47IG9ubHlSb290PzogYm9vbGVhbiB9ID0geyBlbWl0RXJyb3I6IHRydWUsIG9ubHlSb290OiB0cnVlIH0pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5yb290UHJvcGVydHkgPT0gbnVsbCB8fCAhdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSAocHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSk6IHZvaWQgPT4ge1xuICAgICAgcHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcbiAgICAgIGlmICghKHByb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkgfHwgIXByb3BlcnR5LnByb3BlcnRpZXMpIHJldHVybjtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5LnByb3BlcnRpZXMpKSB7XG4gICAgICAgIHByb3BlcnR5LnByb3BlcnRpZXMuZm9yRWFjaChwID0+IGZuKHApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+XG4gICAgICAgICAgZm4oKHByb3BlcnR5LnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlba2V5XSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChvcHRpb25zLm9ubHlSb290KSB7XG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eSEuX3J1blZhbGlkYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4odGhpcy5yb290UHJvcGVydHkhKTtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnJvb3RQcm9wZXJ0eSEuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKG9wdGlvbnMuZW1pdEVycm9yICYmICF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGZvcm0gU2NoZW1hLCB3aGVuIHNwZWNpZnlpbmcgYG5ld1NjaGVtYWAgbWVhbnMgdG8gcmVwbGFjZSB0aGUgY3VycmVudCBTY2hlbWFcbiAgICpcbiAgICog5Yi35pawIFNjaGVtYe+8jOW9k+aMh+WumiBgbmV3U2NoZW1hYCDooajnpLrmm7/mjaLlvZPliY3nmoQgU2NoZW1hXG4gICAqXG4gICAqIOWPr+S7pemSiOWvueafkOS4quihqOWNleWFg+e0oOi/m+ihjOWIt+aWsO+8jOS+i+Wmgu+8mlxuICAgKiBgYGBcbiAgICogLy8g6I635Y+W5p+Q5Liq5YWD57SgXG4gICAqIGNvbnN0IHN0YXR1c1Byb3BlcnR5ID0gdGhpcy5zZi5nZXRQcm9wZXJ0eSgnL3N0YXR1cycpITtcbiAgICogLy8g6YeN572uIGBzY2hlbWFgIOaIliBgdWlgIOWPguaVsFxuICAgKiBzdGF0dXNQcm9wZXJ0eS5zY2hlbWEuZW51bSA9IFsnMScsICcyJywgJzMnXTtcbiAgICogLy8g6LCD55SoIGByZXNldGAg6YeN572u5Yid5aeL5YC8XG4gICAqIHN0YXR1c1Byb3BlcnR5LndpZGdldC5yZXNldCgnMicpO1xuICAgKiBgYGBcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSk6IHRoaXMge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAobmV3U2NoZW1hKSB0aGlzLnNjaGVtYSA9IG5ld1NjaGVtYTtcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEgfHwgdHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eSh0aGlzLl9zY2hlbWEsIHRoaXMuX3VpLCB0aGlzLmZvcm1EYXRhISk7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLih0aGlzLmNsZWFuVmFsdWUgPyBudWxsIDogdGhpcy5mb3JtRGF0YSksIC4uLnJlcy52YWx1ZSB9O1xuICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICAgIHRoaXMuZm9ybVZhbHVlQ2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy5faXRlbSwgcGF0aDogcmVzLnBhdGgsIHBhdGhWYWx1ZTogcmVzLnBhdGhWYWx1ZSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBmb3JtXG4gICAqXG4gICAqIOmHjee9ruihqOWNlVxuICAgKlxuICAgKiBAcGFyYW0gW2VtaXRdIOaYr+WQpuinpuWPkSBgZm9ybVJlc2V0YCDkuovku7bvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0OiBib29sZWFuID0gZmFsc2UpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5yb290UHJvcGVydHkgPT0gbnVsbCB8fCAhdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJvb3RTdWIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJvb3RQcm9wZXJ0eSkgcmV0dXJuO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICBjb25zdCB7IGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIGRlc3Ryb3kkLm5leHQoKTtcbiAgICBkZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgI2Nvbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuVHBsPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uICE9PSAnbm9uZSc7IGVsc2UgY29uXCI+XG4gICAgPG56LWZvcm0taXRlbVxuICAgICAgKm5nSWY9XCJfYnRuICYmIF9idG4ucmVuZGVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cIl9idG4ucmVuZGVyIS5jbGFzcyFcIlxuICAgICAgY2xhc3M9XCJzZi1idG5zXCJcbiAgICAgIFtmaXhlZC1sYWJlbF09XCJfYnRuLnJlbmRlciEuc3BhbkxhYmVsRml4ZWQhXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG56LWNvbFxuICAgICAgICBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiXG4gICAgICAgIFtuelNwYW5dPVwiYnRuR3JpZC5zcGFuXCJcbiAgICAgICAgW256T2Zmc2V0XT1cImJ0bkdyaWQub2Zmc2V0XCJcbiAgICAgICAgW256WHNdPVwiYnRuR3JpZC54c1wiXG4gICAgICAgIFtuelNtXT1cImJ0bkdyaWQuc21cIlxuICAgICAgICBbbnpNZF09XCJidG5HcmlkLm1kXCJcbiAgICAgICAgW256TGddPVwiYnRuR3JpZC5sZ1wiXG4gICAgICAgIFtuelhsXT1cImJ0bkdyaWQueGxcIlxuICAgICAgICBbbnpYWGxdPVwiYnRuR3JpZC54eGxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uOyBlbHNlIGNvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIl9idG4uc3VibWl0X3R5cGUhXCJcbiAgICAgICAgICAgICAgICBbbnpTaXplXT1cIl9idG4ucmVuZGVyIS5zaXplIVwiXG4gICAgICAgICAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibGl2ZVZhbGlkYXRlICYmICF2YWxpZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnN1Ym1pdF9pY29uXCJcbiAgICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICAgIFtuelR5cGVdPVwiX2J0bi5zdWJtaXRfaWNvbi50eXBlIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUaGVtZV09XCJfYnRuLnN1Ym1pdF9pY29uLnRoZW1lIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiX2J0bi5zdWJtaXRfaWNvbi50d29Ub25lQ29sb3IhXCJcbiAgICAgICAgICAgICAgICAgIFtuekljb25mb250XT1cIl9idG4uc3VibWl0X2ljb24uaWNvbmZvbnQhXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgIHt7IF9idG4uc3VibWl0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnJlc2V0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnJlc2V0X3R5cGUhXCJcbiAgICAgICAgICAgICAgICBbbnpTaXplXT1cIl9idG4ucmVuZGVyIS5zaXplIVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldCh0cnVlKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJfYnRuLnJlc2V0X2ljb25cIlxuICAgICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnJlc2V0X2ljb24udHlwZSFcIlxuICAgICAgICAgICAgICAgICAgW256VGhlbWVdPVwiX2J0bi5yZXNldF9pY29uLnRoZW1lIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiX2J0bi5yZXNldF9pY29uLnR3b1RvbmVDb2xvciFcIlxuICAgICAgICAgICAgICAgICAgW256SWNvbmZvbnRdPVwiX2J0bi5yZXNldF9pY29uLmljb25mb250IVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICB7eyBfYnRuLnJlc2V0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1mb3JtLWl0ZW0+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbjxmb3JtIG56LWZvcm0gW256TGF5b3V0XT1cImxheW91dFwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbiAgPHNmLWl0ZW0gKm5nSWY9XCJyb290UHJvcGVydHlcIiBbZm9ybVByb3BlcnR5XT1cInJvb3RQcm9wZXJ0eVwiIFtmb290ZXJdPVwiYnRuVHBsXCI+PC9zZi1pdGVtPlxuPC9mb3JtPlxuIl19