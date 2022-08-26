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
    updateFeedback(path, status = '', icon) {
        this.getProperty(path)?.updateFeedback(status, icon);
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
SFComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: SFComponent, deps: [{ token: i1.FormPropertyFactory }, { token: i2.TerminatorService }, { token: i3.DomSanitizer }, { token: i0.ChangeDetectorRef }, { token: i4.DelonLocaleService }, { token: i5.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i6.AlainConfigService }, { token: i7.Platform }], target: i0.ɵɵFactoryTarget.Component });
SFComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: SFComponent, selector: "sf, [sf]", inputs: { layout: "layout", schema: "schema", ui: "ui", formData: "formData", button: "button", liveValidate: "liveValidate", autocomplete: "autocomplete", firstVisual: "firstVisual", onlyVisual: "onlyVisual", compact: "compact", mode: "mode", loading: "loading", disabled: "disabled", noColon: "noColon", cleanValue: "cleanValue", delay: "delay" }, outputs: { formValueChange: "formValueChange", formChange: "formChange", formSubmit: "formSubmit", formReset: "formReset", formError: "formError" }, host: { properties: { "class.sf": "true", "class.sf__inline": "layout === 'inline'", "class.sf__horizontal": "layout === 'horizontal'", "class.sf__search": "mode === 'search'", "class.sf__edit": "mode === 'edit'", "class.sf__no-error": "onlyVisual", "class.sf__no-colon": "noColon", "class.sf__compact": "compact" } }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: SFComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHckUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBa0MsTUFBTSxjQUFjLENBQUM7QUFDbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVYsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLE1BQU07c0JBQWQsS0FBSztnQkFNbUIsWUFBWTtzQkFBcEMsS0FBSztnQkFFRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVtQixXQUFXO3NCQUFuQyxLQUFLO2dCQUVtQixVQUFVO3NCQUFsQyxLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO2dCQUdGLElBQUk7c0JBRFAsS0FBSztnQkE2Qm1CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ21CLEtBQUs7c0JBQTdCLEtBQUs7Z0JBQ2EsZUFBZTtzQkFBakMsTUFBTTtnQkFDWSxVQUFVO3NCQUE1QixNQUFNO2dCQUNZLFVBQVU7c0JBQTVCLE1BQU07Z0JBQ1ksU0FBUztzQkFBM0IsTUFBTTtnQkFDWSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBEZWxvbkxvY2FsZVNlcnZpY2UsIExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNGQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBOekZvcm1Db250cm9sU3RhdHVzVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5cbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHR5cGUgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgdHlwZSB7IFNGQnV0dG9uLCBTRkxheW91dCwgU0ZNb2RlLCBTRlZhbHVlQ2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBkaSwgcmVzb2x2ZUlmU2NoZW1hLCByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2Vcbik6IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgY29nU3J2KTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICBleHBvcnRBczogJ3NmJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBBbGFpbkNvbmZpZ1NlcnZpY2VdXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZl9faW5saW5lXSc6IGBsYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNmX19ob3Jpem9udGFsXSc6IGBsYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zZl9fc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZl9fZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcbiAgICAnW2NsYXNzLnNmX19uby1lcnJvcl0nOiBgb25seVZpc3VhbGAsXG4gICAgJ1tjbGFzcy5zZl9fbm8tY29sb25dJzogYG5vQ29sb25gLFxuICAgICdbY2xhc3Muc2ZfX2NvbXBhY3RdJzogYGNvbXBhY3RgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGl2ZVZhbGlkYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXJzdFZpc3VhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb25seVZpc3VhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29tcGFjdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NsZWFuVmFsdWU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3JlbmRlcnMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8dm9pZD4+KCk7XG4gIHByaXZhdGUgX2l0ZW0hOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaSE6IFNGVUlTY2hlbWFJdGVtO1xuICByZWFkb25seSBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIF9pbml0ZWQgPSBmYWxzZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIF9mb3JtRGF0YSE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBfYnRuITogU0ZCdXR0b247XG4gIF9zY2hlbWEhOiBTRlNjaGVtYTtcbiAgX3VpITogU0ZVSVNjaGVtYTtcbiAgZ2V0IGJ0bkdyaWQoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fYnRuLnJlbmRlciEuZ3JpZDtcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKSBsYXlvdXQ6IFNGTGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KCkgc2NoZW1hITogU0ZTY2hlbWE7XG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KCkgdWkhOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhPzogUmVjb3JkPHN0cmluZywgTnpTYWZlQW55PjtcbiAgLyoqXG4gICAqIOaMiemSrlxuICAgKiAtIOWAvOS4uiBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS9huS/neeVmeWuueWZqFxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXG4gICAqIC0g5L2/55SoIGBzcGFuTGFiZWxGaXhlZGAg5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5pegIGByZW5kZXIuY2xhc3NgIOWImem7mOiupOS4uuWxheS4reeKtuaAgVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uPzogU0ZCdXR0b24gfCAnbm9uZScgfCBudWxsID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAvKiog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pysICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb21wYWN0ID0gZmFsc2U7XG4gIC8qKiDooajljZXmqKHlvI8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6IFNGTW9kZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCk6IFNGTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZSE6IFNGTW9kZTtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gbG9hZCBzdGF0dXPvvIx3aGVuIGB0cnVlYCByZXNldCBidXR0b24gaXMgZGlzYWJsZWQgc3RhdHVzLCBzdWJtaXQgYnV0dG9uIGlzIGxvYWRpbmcgc3RhdHVzXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQ29sb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsZWFuVmFsdWUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlbGF5ID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNGVmFsdWVDaGFuZ2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZm9ybSBpcyB2YWxpZFxuICAgKlxuICAgKiDooajljZXmmK/lkKbmnInmlYhcbiAgICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBmb3JtXG4gICAqXG4gICAqIOihqOWNleWAvFxuICAgKi9cbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmb3JtIGVsZW1lbnQgcHJvcGVydHkgYmFzZWQgb24gW3BhdGhdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICpcbiAgICog5qC55o2uW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKeiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKi9cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKTogRm9ybVByb3BlcnR5IHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucm9vdFByb3BlcnR5Py5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZWxlbWVudCB2YWx1ZSBiYXNlZCBvbiBbcGF0aF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKlxuICAgKiDmoLnmja5b6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgp6I635Y+W6KGo5Y2V5YWD57Sg5YC8XG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpPy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZm9ybSBlbGVtZW50IG5ldyB2YWx1ZSBiYXNlZCBvbiBbcGF0aF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKlxuICAgKiDmoLnmja5b6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgp6K6+572u5p+Q5Liq6KGo5Y2V5YWD57Sg5bGe5oCn5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZmVlZGJhY2sgc3RhdHVzIG9mIHRoZSB3aWRnZXRcbiAgICpcbiAgICog5pu05paw5bCP6YOo5Lu255qE5Y+N6aaI54q25oCBXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIC8vIFZhbGlkYXRlIHN0YXR1cyBvZiB0aGUgd2lkZ2V0XG4gICAqIHRoaXMuc2YudXBkYXRlRmVlZGJhY2soJy9uYW1lJywgJ3ZhbGlkYXRpbmcnKTtcbiAgICogLy8gQ2xlYW4gdmFsaWRhdGUgc3RhdHVzIG9mIHRoZSB3aWRnZXRcbiAgICogdGhpcy5zZi51cGRhdGVGZWVkYmFjaygnL25hbWUnKTtcbiAgICogYGBgXG4gICAqL1xuICB1cGRhdGVGZWVkYmFjayhwYXRoOiBzdHJpbmcsIHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSAnJywgaWNvbj86IHN0cmluZyB8IG51bGwpOiB0aGlzIHtcbiAgICB0aGlzLmdldFByb3BlcnR5KHBhdGgpPy51cGRhdGVGZWVkYmFjayhzdGF0dXMsIGljb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsb2NhbGVTcnY6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNydjogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb2dTcnYpO1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdGhpcy5vcHRpb25zLmxpdmVWYWxpZGF0ZSBhcyBib29sZWFuO1xuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0aGlzLm9wdGlvbnMuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5hdXRvY29tcGxldGUgYXMgJ29uJyB8ICdvZmYnO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGVsYXkgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmxvY2FsZVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMubG9jYWxlU3J2LmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yKHsgZW1pdEVycm9yOiBmYWxzZSwgb25seVJvb3Q6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVmU2NoZW1hczogQXJyYXk8T2JzZXJ2YWJsZTxOelNhZmVBbnk+IHwgbnVsbD4gPSBbXG4gICAgICB0aGlzLmFjbFNydiA/IHRoaXMuYWNsU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgICB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuY2hhbmdlIDogbnVsbFxuICAgIF0uZmlsdGVyKG8gPT4gbyAhPSBudWxsKTtcbiAgICBpZiAocmVmU2NoZW1hcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXJnZSguLi4ocmVmU2NoZW1hcyBhcyBBcnJheTxPYnNlcnZhYmxlPE56U2FmZUFueT4+KSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2luaXRlZCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hTY2hlbWEoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZhbnlpKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShrZXkpIDogJycpIHx8IGtleTtcbiAgfVxuXG4gIHByaXZhdGUgaW5oZXJpdFVJKHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IHZvaWQge1xuICAgIFsnb3B0aW9uYWxIZWxwJ10uZmlsdGVyKGtleSA9PiAhIXRoaXMuX2RlZlVpW2tleV0pLmZvckVhY2goa2V5ID0+ICh1aVtrZXldID0geyAuLi50aGlzLl9kZWZVaVtrZXldLCAuLi51aVtrZXldIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgX3BhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW5cbiAgICApOiB2b2lkID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpKSBzY2hlbWEucmVxdWlyZWQgPSBbXTtcblxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5wcm9wZXJ0aWVzIVtrZXldIGFzIFNGU2NoZW1hLCBkZWZpbml0aW9ucyk7XG4gICAgICAgIGNvbnN0IHVpID0gZGVlcENvcHkoe1xuICAgICAgICAgIHdpZGdldDogcHJvcGVydHkudHlwZSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkuZm9ybWF0ICYmICh0aGlzLm9wdGlvbnMuZm9ybWF0TWFwIGFzIE56U2FmZUFueSlbcHJvcGVydHkuZm9ybWF0XSksXG4gICAgICAgICAgLi4uKHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwpLFxuICAgICAgICAgIC4uLighcHJvcGVydHkuZm9ybWF0ICYmICFwcm9wZXJ0eS51aSAmJiBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsKSxcbiAgICAgICAgICAuLi50aGlzLl9kZWZVaSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XVxuICAgICAgICB9KSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnID8gNSA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJyA/IDE5IDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlhoXogZTlvLrliLbmuIXnkIYgYGdyaWRgIOWPguaVsFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgZGVsZXRlIHVpLmdyaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6Z2e5rC05bmz5biD5bGA5by65Yi25riF55CGIGBzcGFuTGFiZWxGaXhlZGAg5YC8XG4gICAgICAgIGlmICh0aGlzLmxheW91dCAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOW9k+aMh+Wumuagh+etvuS4uuWbuuWumuWuveW6puaXtuaXoOmhu+aMh+WumiBgc3BhbkxhYmVsYO+8jGBzcGFuQ29udHJvbGBcbiAgICAgICAgaWYgKHVpLnNwYW5MYWJlbEZpeGVkICE9IG51bGwgJiYgdWkuc3BhbkxhYmVsRml4ZWQgPiAwKSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0ge1xuICAgICAgICAgICAgICAuLi4oZGF0ZUVuZFByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgICAgd2lkZ2V0OiB1aS53aWRnZXQsXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmhlcml0VUkodWkpO1xuICAgICAgICBpZiAodWkub3B0aW9uYWxIZWxwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB1aS5vcHRpb25hbEhlbHAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICAgIHRleHQ6IHVpLm9wdGlvbmFsSGVscFxuICAgICAgICAgICAgfSBhcyBTRk9wdGlvbmFsSGVscDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgb2ggPSAodWkub3B0aW9uYWxIZWxwID0ge1xuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBpY29uOiAncXVlc3Rpb24tY2lyY2xlJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInLFxuICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5OiAwLjE1LFxuICAgICAgICAgICAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gICAgICAgICAgICAuLi51aS5vcHRpb25hbEhlbHBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAob2guaTE4bikge1xuICAgICAgICAgICAgb2gudGV4dCA9IHRoaXMuZmFueWkob2guaTE4bik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb2gudGV4dCkge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuaTE4bikge1xuICAgICAgICAgIHByb3BlcnR5LnRpdGxlID0gdGhpcy5mYW55aSh1aS5pMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuZGVzY3JpcHRpb25JMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkuZGVzY3JpcHRpb24gPSB0aGlzLmZhbnlpKHVpLmRlc2NyaXB0aW9uSTE4bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgdWkuX2Rlc2NyaXB0aW9uID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocHJvcGVydHkuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuICAgICAgICBpZiAodWkuaGlkZGVuID09PSBmYWxzZSAmJiB1aS5hY2wgJiYgdGhpcy5hY2xTcnYgJiYgIXRoaXMuYWNsU3J2LmNhbih1aS5hY2wpKSB7XG4gICAgICAgICAgdWkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHVpLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IHNjaGVtYS5yZXF1aXJlZCEuaW5kZXhPZihrZXkpO1xuICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICBzY2hlbWEucmVxdWlyZWQhLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGNvbnN0IHVpU2NoZW1hSW5BcnIgPSAodWlTY2hlbWFbdWlLZXldIHx8IHt9KS4kaXRlbXMgfHwge307XG4gICAgICAgICAgdWkuJGl0ZW1zID0ge1xuICAgICAgICAgICAgLi4uKHByb3BlcnR5Lml0ZW1zLnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgIC4uLnVpU2NoZW1hSW5BcnJbdWlLZXldLFxuICAgICAgICAgICAgLi4udWkuJGl0ZW1zXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5Lml0ZW1zLCBwcm9wZXJ0eS5pdGVtcywgdWlTY2hlbWFJbkFyciwgdWkuJGl0ZW1zLCB1aS4kaXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSB7XG4gICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgIC4uLnRoaXMub3B0aW9ucy51aSxcbiAgICAgIC4uLihfc2NoZW1hIGFzIE56U2FmZUFueSkudWksXG4gICAgICAuLi50aGlzLnVpWycqJ11cbiAgICB9O1xuICAgIGlmICh0aGlzLm9ubHlWaXN1YWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2RlZlVpLm9ubHlWaXN1YWwgPSB0cnVlO1xuICAgIH1cbiAgICAvLyDlhoXogZTlvLrliLbmuIXnkIYgYGdyaWRgIOWPguaVsFxuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2lubGluZScpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9kZWZVaS5ncmlkO1xuICAgIH1cblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IHsgLi4udGhpcy5fZGVmVWkgfTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZlNjaGVtYShfc2NoZW1hLCB0aGlzLl91aSk7XG5cbiAgICB0aGlzLl9zY2hlbWEgPSBfc2NoZW1hO1xuICAgIGRlbGV0ZSBfc2NoZW1hLnVpO1xuXG4gICAgZGkodGhpcy5fdWksICdjb3ZlciBzY2hlbWEgJiB1aScsIHRoaXMuX3VpLCBfc2NoZW1hKTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpOiB2b2lkIHtcbiAgICB0aGlzLl9idG4gPSB7XG4gICAgICByZW5kZXI6IHsgc2l6ZTogJ2RlZmF1bHQnIH0sXG4gICAgICAuLi50aGlzLmxvY2FsZSxcbiAgICAgIC4uLnRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICAuLi4odGhpcy5idXR0b24gYXMgU0ZCdXR0b24pXG4gICAgfTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGNvbnN0IGJ0blJlbmRlciA9IHRoaXMuX2J0bi5yZW5kZXIhO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIWJ0blJlbmRlci5ncmlkKSB7XG4gICAgICAgIGJ0blJlbmRlci5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBmaXhlZCBsYWJlbFxuICAgICAgaWYgKGJ0blJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIGJ0blJlbmRlci5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoIWJ0blJlbmRlci5jbGFzcyAmJiB0eXBlb2YgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPT09ICdudW1iZXInICYmIGJ0blVpLnNwYW5MYWJlbEZpeGVkID4gMCkge1xuICAgICAgICBidG5SZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBidG5SZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZ29yZVJlbmRlciA9IFsnZGlzYWJsZWQnLCAnbG9hZGluZyddO1xuICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5ldmVyeShrZXkgPT4gaW5nb3JlUmVuZGVyLmluY2x1ZGVzKGtleSkpKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5kZWxheSkge1xuICAgICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRHVwbGljYXRlIGRlZmluaXRpb24gXCIke3BhdGh9XCIgY3VzdG9tIHdpZGdldGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5Py5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByb3BlcnR5LnVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdG9yIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAqXG4gICAqIOagoemqjOihqOWNleaYr+WQpuacieaViFxuICAgKiAtIGBlbWl0RXJyb3JgIOW9k+ihqOWNleaXoOaViOaXtuaYr+WQpuinpuWPkSBgZm9ybUVycm9yYCDkuovku7bvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgb25seVJvb3RgIOWPquWvueaguei/m+ihjOajgOmqjO+8jOS4jei/m+ihjOWQkeS4i+mAkOS4qumAkuW9ku+8jOagueW3sue7j+WMheWQq+aVtOS4qiBKc29uIFNjaGVtYe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgdmFsaWRhdG9yKG9wdGlvbnM6IHsgZW1pdEVycm9yPzogYm9vbGVhbjsgb25seVJvb3Q/OiBib29sZWFuIH0gPSB7IGVtaXRFcnJvcjogdHJ1ZSwgb25seVJvb3Q6IHRydWUgfSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSA9PSBudWxsIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IChwcm9wZXJ0eTogRm9ybVByb3BlcnR5KTogdm9pZCA9PiB7XG4gICAgICBwcm9wZXJ0eS5fcnVuVmFsaWRhdGlvbigpO1xuICAgICAgaWYgKCEocHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB8fCAhcHJvcGVydHkucHJvcGVydGllcykgcmV0dXJuO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHkucHJvcGVydGllcykpIHtcbiAgICAgICAgcHJvcGVydHkucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gZm4ocCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgICBmbigocHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMub25seVJvb3QpIHtcbiAgICAgIHRoaXMucm9vdFByb3BlcnR5IS5fcnVuVmFsaWRhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbih0aGlzLnJvb3RQcm9wZXJ0eSEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5IS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAob3B0aW9ucy5lbWl0RXJyb3IgJiYgIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgZm9ybSBTY2hlbWEsIHdoZW4gc3BlY2lmeWluZyBgbmV3U2NoZW1hYCBtZWFucyB0byByZXBsYWNlIHRoZSBjdXJyZW50IFNjaGVtYVxuICAgKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5b2T5oyH5a6aIGBuZXdTY2hlbWFgIOihqOekuuabv+aNouW9k+WJjeeahCBTY2hlbWFcbiAgICpcbiAgICog5Y+v5Lul6ZKI5a+55p+Q5Liq6KGo5Y2V5YWD57Sg6L+b6KGM5Yi35paw77yM5L6L5aaC77yaXG4gICAqIGBgYFxuICAgKiAvLyDojrflj5bmn5DkuKrlhYPntKBcbiAgICogY29uc3Qgc3RhdHVzUHJvcGVydHkgPSB0aGlzLnNmLmdldFByb3BlcnR5KCcvc3RhdHVzJykhO1xuICAgKiAvLyDph43nva4gYHNjaGVtYWAg5oiWIGB1aWAg5Y+C5pWwXG4gICAqIHN0YXR1c1Byb3BlcnR5LnNjaGVtYS5lbnVtID0gWycxJywgJzInLCAnMyddO1xuICAgKiAvLyDosIPnlKggYHJlc2V0YCDph43nva7liJ3lp4vlgLxcbiAgICogc3RhdHVzUHJvcGVydHkud2lkZ2V0LnJlc2V0KCcyJyk7XG4gICAqIGBgYFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuX3NjaGVtYSwgdGhpcy5fdWksIHRoaXMuZm9ybURhdGEhKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5faXRlbSA9IHsgLi4uKHRoaXMuY2xlYW5WYWx1ZSA/IG51bGwgOiB0aGlzLmZvcm1EYXRhKSwgLi4ucmVzLnZhbHVlIH07XG4gICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xuICAgICAgdGhpcy5mb3JtVmFsdWVDaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLl9pdGVtLCBwYXRoOiByZXMucGF0aCwgcGF0aFZhbHVlOiByZXMucGF0aFZhbHVlIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGZvcm1cbiAgICpcbiAgICog6YeN572u6KGo5Y2VXG4gICAqXG4gICAqIEBwYXJhbSBbZW1pdF0g5piv5ZCm6Kem5Y+RIGBmb3JtUmVzZXRgIOS6i+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc2V0KGVtaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHRoaXMge1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSA9PSBudWxsIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUm9vdFN1YigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucm9vdFByb3BlcnR5KSByZXR1cm47XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIGNvbnN0IHsgZGVzdHJveSQgfSA9IHRoaXM7XG4gICAgZGVzdHJveSQubmV4dCgpO1xuICAgIGRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjY29uPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNidG5UcGw+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJidXR0b24gIT09ICdub25lJzsgZWxzZSBjb25cIj5cbiAgICA8bnotZm9ybS1pdGVtXG4gICAgICAqbmdJZj1cIl9idG4gJiYgX2J0bi5yZW5kZXJcIlxuICAgICAgW25nQ2xhc3NdPVwiX2J0bi5yZW5kZXIhLmNsYXNzIVwiXG4gICAgICBjbGFzcz1cInNmLWJ0bnNcIlxuICAgICAgW2ZpeGVkLWxhYmVsXT1cIl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCFcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgbnotY29sXG4gICAgICAgIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCJcbiAgICAgICAgW256U3Bhbl09XCJidG5HcmlkLnNwYW5cIlxuICAgICAgICBbbnpPZmZzZXRdPVwiYnRuR3JpZC5vZmZzZXRcIlxuICAgICAgICBbbnpYc109XCJidG5HcmlkLnhzXCJcbiAgICAgICAgW256U21dPVwiYnRuR3JpZC5zbVwiXG4gICAgICAgIFtuek1kXT1cImJ0bkdyaWQubWRcIlxuICAgICAgICBbbnpMZ109XCJidG5HcmlkLmxnXCJcbiAgICAgICAgW256WGxdPVwiYnRuR3JpZC54bFwiXG4gICAgICAgIFtuelhYbF09XCJidG5HcmlkLnh4bFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJidXR0b247IGVsc2UgY29uXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIFtuelR5cGVdPVwiX2J0bi5zdWJtaXRfdHlwZSFcIlxuICAgICAgICAgICAgICAgIFtuelNpemVdPVwiX2J0bi5yZW5kZXIhLnNpemUhXCJcbiAgICAgICAgICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsaXZlVmFsaWRhdGUgJiYgIXZhbGlkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIl9idG4uc3VibWl0X2ljb25cIlxuICAgICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgICAgW256VHlwZV09XCJfYnRuLnN1Ym1pdF9pY29uLnR5cGUhXCJcbiAgICAgICAgICAgICAgICAgIFtuelRoZW1lXT1cIl9idG4uc3VibWl0X2ljb24udGhlbWUhXCJcbiAgICAgICAgICAgICAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJfYnRuLnN1Ym1pdF9pY29uLnR3b1RvbmVDb2xvciFcIlxuICAgICAgICAgICAgICAgICAgW256SWNvbmZvbnRdPVwiX2J0bi5zdWJtaXRfaWNvbi5pY29uZm9udCFcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAge3sgX2J0bi5zdWJtaXQgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cIl9idG4ucmVzZXRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIl9idG4ucmVzZXRfdHlwZSFcIlxuICAgICAgICAgICAgICAgIFtuelNpemVdPVwiX2J0bi5yZW5kZXIhLnNpemUhXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0KHRydWUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIl9idG4ucmVzZXRfaWNvblwiXG4gICAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIl9idG4ucmVzZXRfaWNvbi50eXBlIVwiXG4gICAgICAgICAgICAgICAgICBbbnpUaGVtZV09XCJfYnRuLnJlc2V0X2ljb24udGhlbWUhXCJcbiAgICAgICAgICAgICAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJfYnRuLnJlc2V0X2ljb24udHdvVG9uZUNvbG9yIVwiXG4gICAgICAgICAgICAgICAgICBbbnpJY29uZm9udF09XCJfYnRuLnJlc2V0X2ljb24uaWNvbmZvbnQhXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgIHt7IF9idG4ucmVzZXQgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L256LWZvcm0taXRlbT5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuPGZvcm0gbnotZm9ybSBbbnpMYXlvdXRdPVwibGF5b3V0XCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiPlxuICA8c2YtaXRlbSAqbmdJZj1cInJvb3RQcm9wZXJ0eVwiIFtmb3JtUHJvcGVydHldPVwicm9vdFByb3BlcnR5XCIgW2Zvb3Rlcl09XCJidG5UcGxcIj48L3NmLWl0ZW0+XG48L2Zvcm0+XG4iXX0=