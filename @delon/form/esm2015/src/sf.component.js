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
            if (!(/** @type {?} */ (this._btn.render)).class && (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFakQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxzQkFBOEMsRUFBRSxPQUF3QjtJQUNqRyxPQUFPLElBQUksbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQXdCRCxNQUFNLE9BQU8sV0FBVzs7Ozs7Ozs7SUFxSXRCLFlBQ1UsbUJBQXdDLEVBQ3hDLFVBQTZCLEVBQzdCLE9BQXdCLEVBQ3hCLEdBQXNCLEVBQ3RCLElBQXdCO1FBSnhCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsWUFBTyxHQUFQLE9B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O0lBRTdDLG1DQUFvQzs7Ozs7SUFFcEMsa0NBQTRDOzs7OztJQUU1QyxpQ0FBNEM7Ozs7O0lBMkI1Qyw0QkFBNkM7Ozs7O0lBSTdDLDhCQUF5Qzs7Ozs7SUFFekMsaUNBQXVEOzs7OztJQUV2RCxpQ0FBdUQ7Ozs7O0lBRXZELGdDQUFzRDs7Ozs7SUFFdEQsZ0NBQStEOzs7OztJQW9EN0QsMENBQWdEOzs7OztJQUNoRCxpQ0FBcUM7Ozs7O0lBQ3JDLDhCQUFnQzs7Ozs7SUFDaEMsMEJBQThCOzs7OztJQUM5QiwyQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZiwgcmV0cmlldmVTY2hlbWEsIEZPUk1BVE1BUFMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnKSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICBleHBvcnRBczogJ3NmJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX3NlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxuICAgICdbY2xhc3Muc2ZfX2VkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXG4gICAgJ1tjbGFzcy5zZl9fbm8tZXJyb3JdJzogYG9ubHlWaXN1YWxgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBfZm9ybURhdGE6IHt9O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDooajljZXluIPlsYDvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmhvcml6b250YWwgKi9cbiAgQElucHV0KCkgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIC8qKiBKU09OIFNjaGVtYSAqL1xuICBASW5wdXQoKSBzY2hlbWE6IFNGU2NoZW1hO1xuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpIHVpOiBTRlVJU2NoZW1hO1xuICAvKiog6KGo5Y2V6buY6K6k5YC8ICovXG4gIEBJbnB1dCgpIGZvcm1EYXRhOiB7fTtcbiAgLyoqXG4gICAqIOaMiemSrlxuICAgKiAtIOWAvOS4uiBgbnVsbGAg5oiWIGB1bmRlZmluZWRgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS9huS/neeVmeWuueWZqFxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXG4gICAqIC0g5L2/55SoIGBzcGFuTGFiZWxGaXhlZGAg5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5pegIGByZW5kZXIuY2xhc3NgIOWImem7mOiupOS4uuWxheS4reeKtuaAgVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uOiBTRkJ1dHRvbiB8ICdub25lJyA9IHt9O1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgLyoqIOaMh+WumuihqOWNlSBgYXV0b2NvbXBsZXRlYCDlgLwgKi9cbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiAnb24nIHwgJ29mZic7XG4gIC8qKiDnq4vljbPmmL7npLrplJnor6/op4bop4kgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgLyoqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb25seVZpc3VhbCA9IGZhbHNlO1xuICAvKiog6KGo5Y2V5qih5byPICovXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKHZhbHVlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0Jykge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2lubGluZSc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2J0bikge1xuICAgICAgICAgIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnO1xuICAvKipcbiAgICogV2hldGhlciB0byBsb2FkIHN0YXR1c++8jHdoZW4gYHRydWVgIHJlc2V0IGJ1dHRvbiBpcyBkaXNhYmxlZCBzdGF0dXMsIHN1Ym1pdCBidXR0b24gaXMgbG9hZGluZyBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDmlbDmja7lj5jmm7Tml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOmHjee9ruihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOihqOWNleagoemqjOe7k+aenOWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHkhLnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOW9k+WJjeWAvFxuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlIGFzIGJvb2xlYW47XG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEucHJvcGVydGllcyFba2V5XSBhcyBTRlNjaGVtYSwgZGVmaW5pdGlvbnMpO1xuICAgICAgICBjb25zdCB1aSA9IHtcbiAgICAgICAgICB3aWRnZXQ6IHByb3BlcnR5LnR5cGUsXG4gICAgICAgICAgLi4uKHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0pLFxuICAgICAgICAgIC4uLih0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi4oIXByb3BlcnR5LmZvcm1hdCAmJiAhcHJvcGVydHkudWkgJiYgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJiBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8geyB3aWRnZXQ6ICdzZWxlY3QnIH1cbiAgICAgICAgICAgIDogbnVsbCksXG4gICAgICAgICAgLi4udGhpcy5fZGVmVWksXG4gICAgICAgICAgLi4uKHByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAuLi51aVNjaGVtYVt1aUtleV0sXG4gICAgICAgIH0gYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gICAgICAgIC8vIOe7p+aJv+eItuiKgueCueW4g+WxgOWxnuaAp1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbEZpeGVkKSB7XG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbEZpeGVkID0gcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsKVxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsID09PSAndW5kZWZpbmVkJyA/IDUgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyAxOSA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0ge1xuICAgICAgICAgICAgICAuLi4oZGF0ZUVuZFByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWkuZW5kID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV0uJGl0ZW1zID0gdWlSZXNbdWlLZXldLiRpdGVtcyB8fCB7fTtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5Lml0ZW1zLCBwcm9wZXJ0eS5pdGVtcywgKHVpU2NoZW1hW3VpS2V5XSB8fCB7fSkuJGl0ZW1zIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcyAmJiBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpUmVzW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbklmRm4gPSAoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllcyFba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICAuLi50aGlzLm9wdGlvbnMudWksXG4gICAgICAuLi5fc2NoZW1hLnVpLFxuICAgICAgLi4udGhpcy51aVsnKiddLFxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGRpKHRoaXMuX3VpLCAnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0ge1xuICAgICAgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9LFxuICAgICAgLi4udGhpcy5sb2NhbGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgLi4uKHRoaXMuYnV0dG9uIGFzIFNGQnV0dG9uKSxcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5ncmlkID0ge1xuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxuICAgICAgICAgIHNwYW46IGJ0blVpLnNwYW5Db250cm9sLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gZml4ZWQgbGFiZWxcbiAgICAgIGlmICh0aGlzLl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIhLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XG4gICAgICB9XG4gICAgICAvLyDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6XkuI3mjIflrprmoLflvI/vvIzliJnpu5jorqTlsYXkuK1cbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlciEuY2xhc3MgJiYgKHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKSkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIhLmdyaWQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vZGUpIHtcbiAgICAgIHRoaXMubW9kZSA9IHRoaXMuX21vZGU7XG4gICAgfVxuXG4gICAgZGkodGhpcy5fdWksICdidXR0b24gcHJvcGVydHknLCB0aGlzLl9idG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnZhbGlkYXRvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcgJiYgT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSBkZWZpbml0aW9uIFwiJHtwYXRofVwiIGN1c3RvbSB3aWRnZXRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eSEuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKCk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5IS5fcnVuVmFsaWRhdGlvbigpO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5IS5lcnJvcnM7XG4gICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyEpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5LiA6Iis6ZyA6KaB5Yqo5oCB5L+u5pS5IFNjaGVtYSDmn5DkuKrlgLzml7blj6/ku6Xmlrnkvr/osIPnlKhcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSk6IHRoaXMge1xuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG5cbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcbiAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcblxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuX3NjaGVtYSwgdGhpcy5fdWksIHRoaXMuZm9ybURhdGEpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLnRoaXMuZm9ybURhdGEsIC4uLnZhbHVlIH07XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruihqOWNlVxuICAgKiBAcGFyYW0gW2VtaXRdIOaYr+WQpuinpuWPkSBgZm9ybVJlc2V0YCDkuovku7bvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpOiB0aGlzIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSEucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmZvcm1SZXNldC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Sb290U3ViKCkge1xuICAgIGlmICghdGhpcy5yb290UHJvcGVydHkpIHJldHVybjtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=