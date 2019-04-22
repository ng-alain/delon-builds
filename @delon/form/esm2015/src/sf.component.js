/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { deepCopy, InputBoolean } from '@delon/util';
import { DelonFormConfig } from './config';
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
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(formPropertyFactory, terminator, options, cdr, i18n) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.options = options;
        this.cdr = cdr;
        this.i18n = i18n;
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
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getData('sf');
            if (this._inited) {
                this.coverButtonProperty();
                this.cdr.detectChanges();
            }
        }));
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
         * @param {?} parentSchema
         * @param {?} uiSchema
         * @param {?} parentUiSchema
         * @param {?} uiRes
         * @return {?}
         */
        (schema, parentSchema, uiSchema, parentUiSchema, uiRes) => {
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
                const ui = (/** @type {?} */ (Object.assign({ widget: property.type }, (property.format && FORMATMAPS[property.format]), (typeof property.ui === 'string' ? { widget: property.ui } : null), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                    ? { widget: 'select' }
                    : null), this._defUi, ((/** @type {?} */ (property.ui))), uiSchema[uiKey])));
                // 继承父节点布局属性
                if (isHorizontal) {
                    if (parentUiSchema.spanLabelFixed) {
                        if (!ui.spanLabelFixed) {
                            ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
                        }
                    }
                    else {
                        if (!ui.spanLabel)
                            ui.spanLabel =
                                typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
                        if (!ui.spanControl)
                            ui.spanControl =
                                typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
                        if (!ui.offsetControl)
                            ui.offsetControl =
                                typeof parentUiSchema.offsetControl === 'undefined'
                                    ? null
                                    : parentUiSchema.offsetControl;
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
                        dateEndProperty.ui = Object.assign({}, ((/** @type {?} */ (dateEndProperty.ui))), { hidden: true });
                    }
                    else {
                        ui.end = null;
                    }
                }
                ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                uiRes[uiKey] = ui;
                delete property.ui;
                if (property.items) {
                    uiRes[uiKey].$items = uiRes[uiKey].$items || {};
                    inFn(property.items, property.items, (uiSchema[uiKey] || {}).$items || {}, ui, uiRes[uiKey].$items);
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] || {}, ui, uiRes[uiKey]);
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
            if (!(/** @type {?} */ (this._btn.render)).class &&
                (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
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
        if (changes.loading && Object.keys(changes).length === 1) {
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
     * @return {THIS}
     */
    validator() {
        (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty))._runValidation();
        /** @type {?} */
        const errors = (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).errors;
        (/** @type {?} */ (this))._valid = !(errors && errors.length);
        if (!(/** @type {?} */ (this))._valid)
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
        (/** @type {?} */ (this)).rootProperty.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            (/** @type {?} */ (this))._item = Object.assign({}, (/** @type {?} */ (this)).formData, value);
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
        return (/** @type {?} */ (this)).reset();
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
        this.i18n$.unsubscribe();
    }
}
SFComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf, [sf]',
                exportAs: 'sf',
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form\n      [nzLayout]=\"layout\"\n      (submit)=\"onSubmit($event)\"\n      [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\"\n                  class=\"sf-btns\"\n                  [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div nz-col\n           class=\"ant-form-item-control-wrapper\"\n           [nzSpan]=\"_btn.render!.grid!.span\"\n           [nzOffset]=\"_btn.render!.grid!.offset\"\n           [nzXs]=\"_btn.render!.grid!.xs\"\n           [nzSm]=\"_btn.render!.grid!.sm\"\n           [nzMd]=\"_btn.render!.grid!.md\"\n           [nzLg]=\"_btn.render!.grid!.lg\"\n           [nzXl]=\"_btn.render!.grid!.xl\"\n           [nzXXl]=\"_btn.render!.grid!.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\"\n                    nz-button\n                    [nzType]=\"_btn.submit_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [nzLoading]=\"loading\"\n                    [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\"\n                    type=\"button\"\n                    nz-button\n                    [nzType]=\"_btn.reset_type\"\n                    [nzSize]=\"_btn.render!.size\"\n                    [disabled]=\"loading\"\n                    (click)=\"reset(true)\">\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SFComponent.ctorParameters = () => [
    { type: FormPropertyFactory },
    { type: TerminatorService },
    { type: DelonFormConfig },
    { type: ChangeDetectorRef },
    { type: DelonLocaleService }
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.i18n$;
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
    SFComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFakQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsc0JBQThDLEVBQzlDLE9BQXdCO0lBRXhCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBd0JELE1BQU0sT0FBTyxXQUFXOzs7Ozs7OztJQXFJdEIsWUFDVSxtQkFBd0MsRUFDeEMsVUFBNkIsRUFDN0IsT0FBd0IsRUFDeEIsR0FBc0IsRUFDdEIsSUFBd0I7UUFKeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixZQUFPLEdBQVAs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LG1DQUE2Qzs7Ozs7SUFFN0MsbUNBQW9DOzs7OztJQUVwQyxrQ0FBNEM7Ozs7O0lBRTVDLGlDQUE0Qzs7Ozs7SUEyQjVDLDRCQUE2Qzs7Ozs7SUFJN0MsOEJBQXlDOzs7OztJQUV6QyxpQ0FBdUQ7Ozs7O0lBRXZELGlDQUF1RDs7Ozs7SUFFdkQsZ0NBQXNEOzs7OztJQUV0RCxnQ0FBK0Q7Ozs7O0lBb0Q3RCwwQ0FBZ0Q7Ozs7O0lBQ2hELGlDQUFxQzs7Ozs7SUFDckMsOEJBQWdDOzs7OztJQUNoQywwQkFBOEI7Ozs7O0lBQzlCLDJCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlLCBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBkaSwgcmVzb2x2ZUlmLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuKSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICBleHBvcnRBczogJ3NmJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX3NlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxuICAgICdbY2xhc3Muc2ZfX2VkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXG4gICAgJ1tjbGFzcy5zZl9fbm8tZXJyb3JdJzogYG9ubHlWaXN1YWxgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBfZm9ybURhdGE6IHt9O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDooajljZXluIPlsYDvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmhvcml6b250YWwgKi9cbiAgQElucHV0KCkgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhOiB7fTtcbiAgLyoqXG4gICAqIOaMiemSrlxuICAgKiAtIOWAvOS4uiBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS9huS/neeVmeWuueWZqFxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXG4gICAqIC0g5L2/55SoIGBzcGFuTGFiZWxGaXhlZGAg5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5pegIGByZW5kZXIuY2xhc3NgIOWImem7mOiupOS4uuWxheS4reeKtuaAgVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgLyoqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLwgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG4gIC8qKiDnq4vljbPmmL7npLrplJnor6/op4bop4kgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgLyoqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb25seVZpc3VhbCA9IGZhbHNlO1xuICAvKiog6KGo5Y2V5qih5byPICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDmlbDmja7lj5jmm7Tml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOmHjee9ruihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOihqOWNleagoemqjOe7k+aenOWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHkhLnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOW9k+WJjeWAvFxuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlIGFzIGJvb2xlYW47XG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEucHJvcGVydGllcyFba2V5XSBhcyBTRlNjaGVtYSwgZGVmaW5pdGlvbnMpO1xuICAgICAgICBjb25zdCB1aSA9IHtcbiAgICAgICAgICB3aWRnZXQ6IHByb3BlcnR5LnR5cGUsXG4gICAgICAgICAgLi4uKHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0pLFxuICAgICAgICAgIC4uLih0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi4oIXByb3BlcnR5LmZvcm1hdCAmJiAhcHJvcGVydHkudWkgJiYgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJiBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cbiAgICAgICAgICAgIDogbnVsbCksXG4gICAgICAgICAgLi4udGhpcy5fZGVmVWksXG4gICAgICAgICAgLi4uKHByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAuLi51aVNjaGVtYVt1aUtleV0sXG4gICAgICAgIH0gYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIOe7p+aJv+eItuiKgueCueW4g+WxgOWxnuaAp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnID8gNSA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLnNwYW5Db250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2wgPT09ICd1bmRlZmluZWQnID8gMTkgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0ge1xuICAgICAgICAgICAgICAuLi4oZGF0ZUVuZFByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV0uJGl0ZW1zID0gdWlSZXNbdWlLZXldLiRpdGVtcyB8fCB7fTtcbiAgICAgICAgICBpbkZuKFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pLiRpdGVtcyB8fCB7fSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgdWlSZXNbdWlLZXldLiRpdGVtcyxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW2tleV07XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSB7XG4gICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxuICAgICAgLi4udGhpcy5vcHRpb25zLnVpLFxuICAgICAgLi4uX3NjaGVtYS51aSxcbiAgICAgIC4uLnRoaXMudWlbJyonXSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm9ubHlWaXN1YWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2RlZlVpLm9ubHlWaXN1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IHsgLi4udGhpcy5fZGVmVWkgfTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG5cbiAgICBkaSh0aGlzLl91aSwgJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX2J0biA9IHtcbiAgICAgIHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSxcbiAgICAgIC4uLnRoaXMubG9jYWxlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIC4uLih0aGlzLmJ1dHRvbiBhcyBTRkJ1dHRvbiksXG4gICAgfTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIhLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlciEuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLl9idG4ucmVuZGVyIS5jbGFzcyAmJlxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlciEuY2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idG4ucmVuZGVyIS5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cblxuICAgIGRpKHRoaXMuX3VpLCAnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nICYmIE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodGhpcy5fcmVuZGVycy5oYXMocGF0aCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgRHVwbGljYXRlIGRlZmluaXRpb24gXCIke3BhdGh9XCIgY3VzdG9tIHdpZGdldGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJzLnNldChwYXRoLCB0ZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCkge1xuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucm9vdFByb3BlcnR5IS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByb3BlcnR5LnVpLl9yZW5kZXIgPSB0cGw7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0b3IoKTogdGhpcyB7XG4gICAgdGhpcy5yb290UHJvcGVydHkhLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkhLmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmICghdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzkuIDoiKzpnIDopoHliqjmgIHkv67mlLkgU2NoZW1hIOafkOS4quWAvOaXtuWPr+S7peaWueS+v+iwg+eUqFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKTogdGhpcyB7XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgdGhpcy5fc2NoZW1hLFxuICAgICAgdGhpcy5fdWksXG4gICAgICB0aGlzLmZvcm1EYXRhLFxuICAgICk7XG4gICAgdGhpcy5hdHRhY2hDdXN0b21SZW5kZXIoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5faXRlbSA9IHsgLi4udGhpcy5mb3JtRGF0YSwgLi4udmFsdWUgfTtcbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKGVycm9ycyA9PiB7XG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgICAgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMhKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6KGo5Y2VXG4gICAqIEBwYXJhbSBbZW1pdF0g5piv5ZCm6Kem5Y+RIGBmb3JtUmVzZXRgIOS6i+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc2V0KGVtaXQgPSBmYWxzZSk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5IS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJvb3RTdWIoKSB7XG4gICAgaWYgKCF0aGlzLnJvb3RQcm9wZXJ0eSkgcmV0dXJuO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==