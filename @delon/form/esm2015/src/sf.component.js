import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, DelonLocaleService } from '@delon/theme';
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
            this.i18nSrv ? this.i18nSrv.change : null
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
                const ui = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ widget: property.type }, (property.format && this.options.formatMap[property.format])), (typeof property.ui === 'string' ? { widget: property.ui } : null)), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                    ? { widget: 'select' }
                    : null)), this._defUi), property.ui), uiSchema[uiKey]);
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
                            text: ui.optionalHelp
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
     *
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
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item\n      *ngIf=\"_btn.render\"\n      [ngClass]=\"_btn.render!.class!\"\n      class=\"sf-btns\"\n      [fixed-label]=\"_btn.render!.spanLabelFixed!\"\n    >\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"btnGrid.span\"\n        [nzOffset]=\"btnGrid.offset\"\n        [nzXs]=\"btnGrid.xs\"\n        [nzSm]=\"btnGrid.sm\"\n        [nzMd]=\"btnGrid.md\"\n        [nzLg]=\"btnGrid.lg\"\n        [nzXl]=\"btnGrid.xl\"\n        [nzXXl]=\"btnGrid.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type!\"\n                  [nzTheme]=\"_btn.submit_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont!\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type!\"\n                [nzSize]=\"_btn.render!.size!\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type!\"\n                  [nzTheme]=\"_btn.reset_icon.theme!\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor!\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont!\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                providers: [
                    WidgetFactory,
                    {
                        provide: FormPropertyFactory,
                        useFactory,
                        deps: [SchemaValidatorFactory, AlainConfigService]
                    },
                    TerminatorService
                ],
                host: {
                    '[class.sf]': 'true',
                    '[class.sf__inline]': `layout === 'inline'`,
                    '[class.sf__horizontal]': `layout === 'horizontal'`,
                    '[class.sf__search]': `mode === 'search'`,
                    '[class.sf__edit]': `mode === 'edit'`,
                    '[class.sf__no-error]': `onlyVisual`,
                    '[class.sf__no-colon]': `noColon`,
                    '[class.sf__compact]': `compact`
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFF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QjtZQWxCakIsWUFBWTtZQWZuQixpQkFBaUI7WUFvQjBCLGtCQUFrQjtZQUR0RCxVQUFVLHVCQTBOZCxRQUFROzRDQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO1lBek4vQixrQkFBa0I7WUF4QmxCLFFBQVE7OztxQkE0R2QsS0FBSztxQkFFTCxLQUFLO2lCQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFPTCxLQUFLOzJCQU1MLEtBQUs7MkJBRUwsS0FBSzswQkFFTCxLQUFLO3lCQUVMLEtBQUs7c0JBQ0wsS0FBSzttQkFFTCxLQUFLO3NCQTZCTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTs7QUE5Q2tCO0lBQWYsWUFBWSxFQUFFO2lEQUFxQjtBQUlwQjtJQUFmLFlBQVksRUFBRTtnREFBb0I7QUFFbkI7SUFBZixZQUFZLEVBQUU7K0NBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzRDQUFpQjtBQStCaEI7SUFBZixZQUFZLEVBQUU7NENBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzZDQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs0Q0FBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7K0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiwgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkJ1dHRvbiwgU0ZMYXlvdXQsIFNGVmFsdWVDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZlNjaGVtYSwgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXG4gIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlXG4pOiBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIGNvZ1Nydik7XG59XG5cbmV4cG9ydCB0eXBlIFNGTW9kZSA9ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIGV4cG9ydEFzOiAnc2YnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIEFsYWluQ29uZmlnU2VydmljZV1cbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX2hvcml6b250YWxdJzogYGxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNmX19zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmX19lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgICAnW2NsYXNzLnNmX19uby1jb2xvbl0nOiBgbm9Db2xvbmAsXG4gICAgJ1tjbGFzcy5zZl9fY29tcGFjdF0nOiBgY29tcGFjdGBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saXZlVmFsaWRhdGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpcnN0VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vbmx5VmlzdWFsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb21wYWN0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2xlYW5WYWx1ZTogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcmVuZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjx2b2lkPj4oKTtcbiAgcHJpdmF0ZSBfaXRlbTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIHByaXZhdGUgX3ZhbGlkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVmVWk6IFNGVUlTY2hlbWFJdGVtO1xuICByZWFkb25seSBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIF9pbml0ZWQgPSBmYWxzZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIF9mb3JtRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuICBnZXQgYnRuR3JpZCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9idG4ucmVuZGVyIS5ncmlkO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiog6KGo5Y2V5biD5bGA77yM562J5ZCMIGBuekxheW91dGDvvIzpu5jorqTvvJpob3Jpem9udGFsICovXG4gIEBJbnB1dCgpIGxheW91dDogU0ZMYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhOiBSZWNvcmQ8c3RyaW5nLCBOelNhZmVBbnk+O1xuICAvKipcbiAgICog5oyJ6ZKuXG4gICAqIC0g5YC85Li6IGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5L2G5L+d55WZ5a655ZmoXG4gICAqIC0g5YC85Li6IGBub25lYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkuJTkuI3kv53nlZnlrrnlmahcbiAgICogLSDkvb/nlKggYHNwYW5MYWJlbEZpeGVkYCDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXG4gICAqL1xuICBASW5wdXQoKSBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAvKiog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pysICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb21wYWN0ID0gZmFsc2U7XG4gIC8qKiDooajljZXmqKHlvI8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6IFNGTW9kZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCk6IFNGTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogU0ZNb2RlO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9Db2xvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xlYW5WYWx1ZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTRlZhbHVlQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICpcbiAgICog6KGo5Y2V5piv5ZCm5pyJ5pWIXG4gICAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgZm9ybVxuICAgKlxuICAgKiDooajljZXlgLxcbiAgICovXG4gIGdldCB2YWx1ZSgpOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9ybSBlbGVtZW50IHByb3BlcnR5IGJhc2VkIG9uIFtwYXRoXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqXG4gICAqIOagueaNrlvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aCnojrflj5booajljZXlhYPntKDlsZ7mgKdcbiAgICovXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnJvb3RQcm9wZXJ0eSEuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgdmFsdWUgYmFzZWQgb24gW3BhdGhdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICpcbiAgICog5qC55o2uW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKeiOt+WPluihqOWNleWFg+e0oOWAvFxuICAgKi9cbiAgZ2V0VmFsdWUocGF0aDogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKSEudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZvcm0gZWxlbWVudCBuZXcgdmFsdWUgYmFzZWQgb24gW3BhdGhdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICpcbiAgICog5qC55o2uW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKeiuvue9ruafkOS4quihqOWNleWFg+e0oOWxnuaAp+WAvFxuICAgKi9cbiAgc2V0VmFsdWUocGF0aDogc3RyaW5nLCB2YWx1ZTogTnpTYWZlQW55KTogdGhpcyB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGF0aDogJHtwYXRofWApO1xuICAgIH1cbiAgICBpdGVtLnJlc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uU3VibWl0KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmxpdmVWYWxpZGF0ZSkgdGhpcy52YWxpZGF0b3IoKTtcbiAgICBpZiAoIXRoaXMudmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbG9jYWxlU3J2OiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTcnY6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gdGhpcy5vcHRpb25zLmZpcnN0VmlzdWFsIGFzIGJvb2xlYW47XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmxvY2FsZVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmxvY2FsZVNydi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvcih7IGVtaXRFcnJvcjogZmFsc2UsIG9ubHlSb290OiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlZlNjaGVtYXM6IEFycmF5PE9ic2VydmFibGU8TnpTYWZlQW55PiB8IG51bGw+ID0gW1xuICAgICAgdGhpcy5hY2xTcnYgPyB0aGlzLmFjbFNydi5jaGFuZ2UgOiBudWxsLFxuICAgICAgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmNoYW5nZSA6IG51bGxcbiAgICBdLmZpbHRlcihvID0+IG8gIT0gbnVsbCk7XG4gICAgaWYgKHJlZlNjaGVtYXMubGVuZ3RoID4gMCkge1xuICAgICAgbWVyZ2UoLi4uKHJlZlNjaGVtYXMgYXMgQXJyYXk8T2JzZXJ2YWJsZTxOelNhZmVBbnk+PikpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9pbml0ZWQpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaFNjaGVtYSgpKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmFueWkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGtleSkgOiAnJykgfHwga2V5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbmhlcml0VUkodWk6IFNGVUlTY2hlbWFJdGVtUnVuKTogdm9pZCB7XG4gICAgWydvcHRpb25hbEhlbHAnXS5maWx0ZXIoa2V5ID0+ICEhdGhpcy5fZGVmVWlba2V5XSkuZm9yRWFjaChrZXkgPT4gKHVpW2tleV0gPSB7IC4uLnRoaXMuX2RlZlVpW2tleV0sIC4uLnVpW2tleV0gfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlclByb3BlcnR5KCk6IHZvaWQge1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgX3NjaGVtYSA9IGRlZXBDb3B5KHRoaXMuc2NoZW1hKTtcbiAgICBjb25zdCB7IGRlZmluaXRpb25zIH0gPSBfc2NoZW1hO1xuXG4gICAgY29uc3QgaW5GbiA9IChcbiAgICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICBfcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1blxuICAgICkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkpIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLnByb3BlcnRpZXMhW2tleV0gYXMgU0ZTY2hlbWEsIGRlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgdWkgPSB7XG4gICAgICAgICAgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS5mb3JtYXQgJiYgKHRoaXMub3B0aW9ucy5mb3JtYXRNYXAgYXMgTnpTYWZlQW55KVtwcm9wZXJ0eS5mb3JtYXRdKSxcbiAgICAgICAgICAuLi4odHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCksXG4gICAgICAgICAgLi4uKCFwcm9wZXJ0eS5mb3JtYXQgJiYgIXByb3BlcnR5LnVpICYmIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiYgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHsgd2lkZ2V0OiAnc2VsZWN0JyB9XG4gICAgICAgICAgICA6IG51bGwpLFxuICAgICAgICAgIC4uLnRoaXMuX2RlZlVpLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgLi4udWlTY2hlbWFbdWlLZXldXG4gICAgICAgIH0gYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIOe7p+aJv+eItuiKgueCueW4g+WxgOWxnuaAp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJyA/IDUgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyAxOSA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YaF6IGU5by65Yi25riF55CGIGBncmlkYCDlj4LmlbBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGRlbGV0ZSB1aS5ncmlkO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmdnuawtOW5s+W4g+WxgOW8uuWItua4heeQhiBgc3BhbkxhYmVsRml4ZWRgIOWAvFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlvZPmjIflrprmoIfnrb7kuLrlm7rlrprlrr3luqbml7bml6DpobvmjIflrpogYHNwYW5MYWJlbGDvvIxgc3BhbkNvbnRyb2xgXG4gICAgICAgIGlmICh1aS5zcGFuTGFiZWxGaXhlZCAhPSBudWxsICYmIHVpLnNwYW5MYWJlbEZpeGVkID4gMCkge1xuICAgICAgICAgIHVpLnNwYW5MYWJlbCA9IG51bGw7XG4gICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aS53aWRnZXQgPT09ICdkYXRlJyAmJiB1aS5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHNjaGVtYS5wcm9wZXJ0aWVzIVt1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IHtcbiAgICAgICAgICAgICAgLi4uKGRhdGVFbmRQcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAgIHdpZGdldDogdWkud2lkZ2V0LFxuICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5oZXJpdFVJKHVpKTtcbiAgICAgICAgaWYgKHVpLm9wdGlvbmFsSGVscCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdWkub3B0aW9uYWxIZWxwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0ge1xuICAgICAgICAgICAgICB0ZXh0OiB1aS5vcHRpb25hbEhlbHBcbiAgICAgICAgICAgIH0gYXMgU0ZPcHRpb25hbEhlbHA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG9oID0gKHVpLm9wdGlvbmFsSGVscCA9IHtcbiAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogMC4xNSxcbiAgICAgICAgICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgICAgICAgICAgLi4udWkub3B0aW9uYWxIZWxwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG9oLmkxOG4pIHtcbiAgICAgICAgICAgIG9oLnRleHQgPSB0aGlzLmZhbnlpKG9oLmkxOG4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW9oLnRleHQpIHtcbiAgICAgICAgICAgIHVpLm9wdGlvbmFsSGVscCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLmkxOG4pIHtcbiAgICAgICAgICBwcm9wZXJ0eS50aXRsZSA9IHRoaXMuZmFueWkodWkuaTE4bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLmRlc2NyaXB0aW9uSTE4bikge1xuICAgICAgICAgIHByb3BlcnR5LmRlc2NyaXB0aW9uID0gdGhpcy5mYW55aSh1aS5kZXNjcmlwdGlvbkkxOG4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgIHByb3BlcnR5Ll9kZXNjcmlwdGlvbiA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHByb3BlcnR5LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB1aS5oaWRkZW4gPSB0eXBlb2YgdWkuaGlkZGVuID09PSAnYm9vbGVhbicgPyB1aS5oaWRkZW4gOiBmYWxzZTtcbiAgICAgICAgaWYgKHVpLmhpZGRlbiA9PT0gZmFsc2UgJiYgdWkuYWNsICYmIHRoaXMuYWNsU3J2ICYmICF0aGlzLmFjbFNydi5jYW4odWkuYWNsKSkge1xuICAgICAgICAgIHVpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB1aVJlc1t1aUtleV0gPSB1aTtcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5LnVpO1xuXG4gICAgICAgIGlmICh1aS5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBpZHggPSBzY2hlbWEucmVxdWlyZWQhLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgc2NoZW1hLnJlcXVpcmVkIS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBjb25zdCB1aVNjaGVtYUluQXJyID0gKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSkuJGl0ZW1zIHx8IHt9O1xuICAgICAgICAgIHVpLiRpdGVtcyA9IHtcbiAgICAgICAgICAgIC4uLihwcm9wZXJ0eS5pdGVtcy51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAuLi51aVNjaGVtYUluQXJyW3VpS2V5XSxcbiAgICAgICAgICAgIC4uLnVpLiRpdGVtc1xuICAgICAgICAgIH07XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eS5pdGVtcywgcHJvcGVydHkuaXRlbXMsIHVpU2NoZW1hSW5BcnIsIHVpLiRpdGVtcywgdWkuJGl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0ge1xuICAgICAgb25seVZpc3VhbDogdGhpcy5vcHRpb25zLm9ubHlWaXN1YWwsXG4gICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgIGxpdmVWYWxpZGF0ZTogdGhpcy5saXZlVmFsaWRhdGUsXG4gICAgICBmaXJzdFZpc3VhbDogdGhpcy5maXJzdFZpc3VhbCxcbiAgICAgIC4uLnRoaXMub3B0aW9ucy51aSxcbiAgICAgIC4uLihfc2NoZW1hIGFzIE56U2FmZUFueSkudWksXG4gICAgICAuLi50aGlzLnVpWycqJ11cbiAgICB9O1xuICAgIGlmICh0aGlzLm9ubHlWaXN1YWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2RlZlVpLm9ubHlWaXN1YWwgPSB0cnVlO1xuICAgIH1cbiAgICAvLyDlhoXogZTlvLrliLbmuIXnkIYgYGdyaWRgIOWPguaVsFxuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2lubGluZScpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9kZWZVaS5ncmlkO1xuICAgIH1cblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IHsgLi4udGhpcy5fZGVmVWkgfTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZlNjaGVtYShfc2NoZW1hLCB0aGlzLl91aSk7XG5cbiAgICB0aGlzLl9zY2hlbWEgPSBfc2NoZW1hO1xuICAgIGRlbGV0ZSBfc2NoZW1hLnVpO1xuXG4gICAgZGkodGhpcy5fdWksICdjb3ZlciBzY2hlbWEgJiB1aScsIHRoaXMuX3VpLCBfc2NoZW1hKTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpOiB2b2lkIHtcbiAgICB0aGlzLl9idG4gPSB7XG4gICAgICByZW5kZXI6IHsgc2l6ZTogJ2RlZmF1bHQnIH0sXG4gICAgICAuLi50aGlzLmxvY2FsZSxcbiAgICAgIC4uLnRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICAuLi4odGhpcy5idXR0b24gYXMgU0ZCdXR0b24pXG4gICAgfTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGNvbnN0IGJ0blJlbmRlciA9IHRoaXMuX2J0bi5yZW5kZXIhO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIWJ0blJlbmRlci5ncmlkKSB7XG4gICAgICAgIGJ0blJlbmRlci5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBmaXhlZCBsYWJlbFxuICAgICAgaWYgKGJ0blJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIGJ0blJlbmRlci5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoIWJ0blJlbmRlci5jbGFzcyAmJiB0eXBlb2YgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPT09ICdudW1iZXInICYmIGJ0blVpLnNwYW5MYWJlbEZpeGVkID4gMCkge1xuICAgICAgICBidG5SZW5kZXIuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBidG5SZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGggPT09IDEgJiYgKGNoYW5nZXMubG9hZGluZyB8fCBjaGFuZ2VzLmRpc2FibGVkKSkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgZGVmaW5pdGlvbiBcIiR7cGF0aH1cIiBjdXN0b20gd2lkZ2V0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkhLnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICAgICAgaWYgKHByb3BlcnR5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHJvcGVydHkudWkuX3JlbmRlciA9IHRwbDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0b3IgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICpcbiAgICog5qCh6aqM6KGo5Y2V5piv5ZCm5pyJ5pWIXG4gICAqIC0gYGVtaXRFcnJvcmAg5b2T6KGo5Y2V5peg5pWI5pe25piv5ZCm6Kem5Y+RIGBmb3JtRXJyb3JgIOS6i+S7tu+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGBvbmx5Um9vdGAg5Y+q5a+55qC56L+b6KGM5qOA6aqM77yM5LiN6L+b6KGM5ZCR5LiL6YCQ5Liq6YCS5b2S77yM5qC55bey57uP5YyF5ZCr5pW05LiqIEpzb24gU2NoZW1h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICB2YWxpZGF0b3Iob3B0aW9uczogeyBlbWl0RXJyb3I/OiBib29sZWFuOyBvbmx5Um9vdD86IGJvb2xlYW4gfSA9IHsgZW1pdEVycm9yOiB0cnVlLCBvbmx5Um9vdDogdHJ1ZSB9KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IChwcm9wZXJ0eTogRm9ybVByb3BlcnR5KSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fcnVuVmFsaWRhdGlvbigpO1xuICAgICAgaWYgKCEocHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB8fCAhcHJvcGVydHkucHJvcGVydGllcykgcmV0dXJuO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHkucHJvcGVydGllcykpIHtcbiAgICAgICAgcHJvcGVydHkucHJvcGVydGllcy5mb3JFYWNoKHAgPT4gZm4ocCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgICBmbigocHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMub25seVJvb3QpIHtcbiAgICAgIHRoaXMucm9vdFByb3BlcnR5IS5fcnVuVmFsaWRhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbih0aGlzLnJvb3RQcm9wZXJ0eSEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5IS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAob3B0aW9ucy5lbWl0RXJyb3IgJiYgIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgZm9ybSBTY2hlbWEsIHdoZW4gc3BlY2lmeWluZyBgbmV3U2NoZW1hYCBtZWFucyB0byByZXBsYWNlIHRoZSBjdXJyZW50IFNjaGVtYVxuICAgKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5b2T5oyH5a6aIGBuZXdTY2hlbWFgIOihqOekuuabv+aNouW9k+WJjeeahCBTY2hlbWFcbiAgICpcbiAgICog5Y+v5Lul6ZKI5a+55p+Q5Liq6KGo5Y2V5YWD57Sg6L+b6KGM5Yi35paw77yM5L6L5aaC77yaXG4gICAqIGBgYFxuICAgKiAvLyDojrflj5bmn5DkuKrlhYPntKBcbiAgICogY29uc3Qgc3RhdHVzUHJvcGVydHkgPSB0aGlzLnNmLmdldFByb3BlcnR5KCcvc3RhdHVzJykhO1xuICAgKiAvLyDph43nva4gYHNjaGVtYWAg5oiWIGB1aWAg5Y+C5pWwXG4gICAqIHN0YXR1c1Byb3BlcnR5LnNjaGVtYS5lbnVtID0gWycxJywgJzInLCAnMyddO1xuICAgKiAvLyDosIPnlKggYHJlc2V0YCDph43nva7liJ3lp4vlgLxcbiAgICogc3RhdHVzUHJvcGVydHkud2lkZ2V0LnJlc2V0KCcyJyk7XG4gICAqIGBgYFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuX3NjaGVtYSwgdGhpcy5fdWksIHRoaXMuZm9ybURhdGEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucmVzZXQoKTtcblxuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0geyAuLi4odGhpcy5jbGVhblZhbHVlID8gbnVsbCA6IHRoaXMuZm9ybURhdGEpLCAuLi5yZXMudmFsdWUgfTtcbiAgICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgICB0aGlzLmZvcm1WYWx1ZUNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMuX2l0ZW0sIHBhdGg6IHJlcy5wYXRoLCBwYXRoVmFsdWU6IHJlcy5wYXRoVmFsdWUgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZm9ybVxuICAgKlxuICAgKiDph43nva7ooajljZVcbiAgICpcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdDogYm9vbGVhbiA9IGZhbHNlKTogdGhpcyB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMucm9vdFByb3BlcnR5IS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJvb3RTdWIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJvb3RQcm9wZXJ0eSkgcmV0dXJuO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=