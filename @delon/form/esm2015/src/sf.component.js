/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._renders = new Map();
        this._valid = true;
        this._inited = false;
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
        this.liveValidate = options.liveValidate;
        this.firstVisual = options.firstVisual;
        this.autocomplete = options.autocomplete;
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('sf');
            if (this._inited) {
                this.coverButtonProperty();
                this.cdr.detectChanges();
            }
        });
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
    // tslint:disable-next-line:no-any
    get value() {
        return this._item;
    }
    /**
     * 根据路径获取表单元素属性
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    getProperty(path) {
        return this.rootProperty.searchProperty(path);
    }
    /**
     * 根据路径获取表单元素当前值
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    // tslint:disable-next-line:no-any
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
    // tslint:disable-next-line:no-any
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
     * @return {?}
     */
    coverProperty() {
        /** @type {?} */
        const isHorizontal = this.layout === 'horizontal';
        /** @type {?} */
        const _schema = deepCopy(this.schema);
        const { definitions } = _schema;
        /** @type {?} */
        const inFn = (schema, parentSchema, uiSchema, parentUiSchema, uiRes) => {
            Object.keys(schema.properties).forEach(key => {
                /** @type {?} */
                const uiKey = `$${key}`;
                /** @type {?} */
                const property = retrieveSchema((/** @type {?} */ (schema.properties[key])), definitions);
                /** @type {?} */
                const ui = (/** @type {?} */ (Object.assign({ widget: property.type }, (property.format && FORMATMAPS[property.format]), (typeof property.ui === 'string' ? { widget: property.ui } : null), (!property.ui && Array.isArray(property.enum) && property.enum.length > 0
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
                    const dateEndProperty = schema.properties[ui.end];
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
            });
        };
        /** @type {?} */
        const inIfFn = (schema, ui) => {
            Object.keys(schema.properties).forEach(key => {
                /** @type {?} */
                const property = schema.properties[key];
                /** @type {?} */
                const uiKey = `$${key}`;
                resolveIf(property, ui[uiKey]);
                if (property.items) {
                    inIfFn(property.items, ui[uiKey].$items);
                }
                if (property.properties) {
                    inIfFn(property, ui[uiKey]);
                }
            });
        };
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
     * @return {?}
     */
    coverButtonProperty() {
        this._btn = Object.assign({ render: { size: 'default' } }, this.locale, this.options.button, ((/** @type {?} */ (this.button))));
        /** @type {?} */
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        if (this.layout === 'horizontal') {
            /** @type {?} */
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
            if (!this._btn.render.grid) {
                this._btn.render.grid = {
                    offset: btnUi.spanLabel,
                    span: btnUi.spanControl,
                };
            }
            // fixed label
            if (this._btn.render.spanLabelFixed == null) {
                this._btn.render.spanLabelFixed = btnUi.spanLabelFixed;
            }
            // 固定标签宽度时，若不指定样式，则默认居中
            if (!this._btn.render.class &&
                (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
                this._btn.render.class = 'text-center';
            }
        }
        else {
            this._btn.render.grid = {};
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
     * @return {?}
     */
    ngOnChanges() {
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
     * @return {?}
     */
    attachCustomRender() {
        this._renders.forEach((tpl, path) => {
            /** @type {?} */
            const property = this.rootProperty.searchProperty(path);
            if (property == null) {
                return;
            }
            property.ui._render = tpl;
        });
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    validator() {
        (/** @type {?} */ (this)).rootProperty._runValidation();
        /** @type {?} */
        const errors = (/** @type {?} */ (this)).rootProperty.errors;
        (/** @type {?} */ (this))._valid = !(errors && errors.length);
        if (!(/** @type {?} */ (this))._valid)
            (/** @type {?} */ (this)).formError.emit(errors);
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
        (/** @type {?} */ (this)).rootProperty.valueChanges.subscribe(value => {
            (/** @type {?} */ (this))._item = Object.assign({}, (/** @type {?} */ (this)).formData, value);
            (/** @type {?} */ (this)).formChange.emit((/** @type {?} */ (this))._item);
        });
        (/** @type {?} */ (this)).rootProperty.errorsChanges.subscribe(errors => {
            (/** @type {?} */ (this))._valid = !(errors && errors.length);
            (/** @type {?} */ (this)).formError.emit(errors);
            (/** @type {?} */ (this)).cdr.detectChanges();
        });
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
        (/** @type {?} */ (this)).rootProperty.resetValue((/** @type {?} */ (this)).formData, false);
        Promise.resolve().then(() => (/** @type {?} */ (this)).cdr.detectChanges());
        if (emit) {
            (/** @type {?} */ (this)).formReset.emit((/** @type {?} */ (this)).value);
        }
        return (/** @type {?} */ (this));
    }
    /**
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
                template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\" [nzXXl]=\"_btn.render.grid.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [nzSize]=\"_btn.render.size\"\n              [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\" type=\"button\" nz-button\n              [nzType]=\"_btn.reset_type\" [nzSize]=\"_btn.render.size\" (click)=\"reset(true)\">\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
                    '[class.sf-search]': `mode === 'search'`,
                    '[class.sf-edit]': `mode === 'edit'`,
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
if (false) {
    /** @type {?} */
    SFComponent.prototype.i18n$;
    /** @type {?} */
    SFComponent.prototype.locale;
    /** @type {?} */
    SFComponent.prototype._renders;
    /** @type {?} */
    SFComponent.prototype._item;
    /** @type {?} */
    SFComponent.prototype._valid;
    /** @type {?} */
    SFComponent.prototype._defUi;
    /** @type {?} */
    SFComponent.prototype._inited;
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
    /** @type {?} */
    SFComponent.prototype._mode;
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
    /** @type {?} */
    SFComponent.prototype.formPropertyFactory;
    /** @type {?} */
    SFComponent.prototype.terminator;
    /** @type {?} */
    SFComponent.prototype.options;
    /** @type {?} */
    SFComponent.prototype.cdr;
    /** @type {?} */
    SFComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFakQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsc0JBQThDLEVBQzlDLE9BQXdCO0lBRXhCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBc0JELE1BQU0sT0FBTyxXQUFXOzs7Ozs7OztJQXNJdEIsWUFDVSxtQkFBd0MsRUFDeEMsVUFBNkIsRUFDN0IsT0FBd0IsRUFDeEIsR0FBc0IsRUFDdEIsSUFBd0I7UUFKeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixZQUFPLEdBQVAs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O0FBRW5CO0lBQWYsWUFBWSxFQUFFOzsrQ0FBb0I7OztJQTNDNUMsNEJBQTRCOztJQUU1Qiw2QkFBaUI7O0lBQ2pCLCtCQUF3RDs7SUFDeEQsNEJBQWtCOztJQUNsQiw2QkFBc0I7O0lBQ3RCLDZCQUErQjs7SUFDL0IsOEJBQXdCOztJQUV4QixtQ0FBa0M7O0lBQ2xDLGdDQUFjOztJQUNkLDJCQUFlOztJQUNmLDhCQUFrQjs7SUFDbEIsMEJBQWdCOzs7OztJQUtoQiw2QkFBcUU7Ozs7O0lBRXJFLDZCQUEwQjs7Ozs7SUFFMUIseUJBQXdCOzs7OztJQUV4QiwrQkFBc0I7Ozs7Ozs7O0lBT3RCLDZCQUF3Qzs7Ozs7OztJQU14QyxtQ0FBNkM7Ozs7O0lBRTdDLG1DQUFvQzs7Ozs7SUFFcEMsa0NBQTRDOzs7OztJQUU1QyxpQ0FBNEM7O0lBMkI1Qyw0QkFBNkM7Ozs7O0lBRzdDLGlDQUF1RDs7Ozs7SUFFdkQsaUNBQXVEOzs7OztJQUV2RCxnQ0FBc0Q7Ozs7O0lBRXRELGdDQUErRDs7SUF1RDdELDBDQUFnRDs7SUFDaEQsaUNBQXFDOztJQUNyQyw4QkFBZ0M7O0lBQ2hDLDBCQUE4Qjs7SUFDOUIsMkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBkaSwgcmVzb2x2ZUlmLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgV2lkZ2V0RmFjdG9yeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuKSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBXaWRnZXRGYWN0b3J5LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgICB1c2VGYWN0b3J5LFxuICAgICAgZGVwczogW1NjaGVtYVZhbGlkYXRvckZhY3RvcnksIERlbG9uRm9ybUNvbmZpZ10sXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2Ytc2VhcmNoXSc6IGBtb2RlID09PSAnc2VhcmNoJ2AsXG4gICAgJ1tjbGFzcy5zZi1lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiB7fTtcbiAgX2J0bjogU0ZCdXR0b247XG4gIF9zY2hlbWE6IFNGU2NoZW1hO1xuICBfdWk6IFNGVUlTY2hlbWE7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiog6KGo5Y2V5biD5bGA77yM562J5ZCMIGBuekxheW91dGDvvIzpu5jorqTvvJpob3Jpem9udGFsICovXG4gIEBJbnB1dCgpIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KCkgc2NoZW1hOiBTRlNjaGVtYTtcbiAgLyoqIFVJIFNjaGVtYSAqL1xuICBASW5wdXQoKSB1aTogU0ZVSVNjaGVtYTtcbiAgLyoqIOihqOWNlem7mOiupOWAvCAqL1xuICBASW5wdXQoKSBmb3JtRGF0YToge307XG4gIC8qKlxuICAgKiDmjInpkq5cbiAgICogLSDlgLzkuLogYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkvYbkv53nlZnlrrnlmahcbiAgICogLSDlgLzkuLogYG5vbmVgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS4lOS4jeS/neeVmeWuueWZqFxuICAgKiAtIOS9v+eUqCBgc3BhbkxhYmVsRml4ZWRgIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeaXoCBgcmVuZGVyLmNsYXNzYCDliJnpu5jorqTkuLrlsYXkuK3nirbmgIFcbiAgICovXG4gIEBJbnB1dCgpIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gIC8qKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC8ICovXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogJ29uJyB8ICdvZmYnO1xuICAvKiog56uL5Y2z5pi+56S66ZSZ6K+v6KeG6KeJICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbCA9IHRydWU7XG4gIC8qKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKwgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9ubHlWaXN1YWwgPSBmYWxzZTtcbiAgLyoqIOihqOWNleaooeW8jyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHtcbiAgICAgICAgICB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLnNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHtcbiAgICAgICAgICB0aGlzLl9idG4uc3VibWl0ID0gdGhpcy5fYnRuLmVkaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcblxuICAvKiog5pWw5o2u5Y+Y5pu05pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOaPkOS6pOihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG4gIC8qKiDph43nva7ooajljZXml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG4gIC8qKiDooajljZXmoKHpqoznu5Pmnpzlm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG4gIC8vICNlbmRyZWdpb25cblxuICAvKiog6KGo5Y2V5qCh6aqM54q25oCBICovXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWQ7XG4gIH1cblxuICAvKiog6KGo5Y2V5YC8ICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkge1xuICAgIHJldHVybiB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTojrflj5booajljZXlhYPntKDlvZPliY3lgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldFZhbHVlKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IHRoaXMge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldFByb3BlcnR5KHBhdGgpO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9XG4gICAgaXRlbS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvblN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gb3B0aW9ucy5saXZlVmFsaWRhdGU7XG4gICAgdGhpcy5maXJzdFZpc3VhbCA9IG9wdGlvbnMuZmlyc3RWaXN1YWw7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBvcHRpb25zLmF1dG9jb21wbGV0ZTtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0RGF0YSgnc2YnKTtcbiAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY292ZXJQcm9wZXJ0eSgpIHtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XG4gICAgY29uc3QgeyBkZWZpbml0aW9ucyB9ID0gX3NjaGVtYTtcblxuICAgIGNvbnN0IGluRm4gPSAoXG4gICAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgcGFyZW50U2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHBhcmVudFVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICAgIHVpUmVzOiBTRlVJU2NoZW1hSXRlbVJ1bixcbiAgICApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gYXMgU0ZTY2hlbWEsIGRlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgdWkgPSB7XG4gICAgICAgICAgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdKSxcbiAgICAgICAgICAuLi4odHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCksXG4gICAgICAgICAgLi4uKCFwcm9wZXJ0eS51aSAmJiBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsKSxcbiAgICAgICAgICAuLi50aGlzLl9kZWZVaSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgfSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyAxOSA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1t1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IHtcbiAgICAgICAgICAgICAgLi4uKGRhdGVFbmRQcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgdWlSZXNbdWlLZXldLiRpdGVtcyA9IHVpUmVzW3VpS2V5XS4kaXRlbXMgfHwge307XG4gICAgICAgICAgaW5GbihcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICAodWlTY2hlbWFbdWlLZXldIHx8IHt9KS4kaXRlbXMgfHwge30sXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIHVpUmVzW3VpS2V5XS4kaXRlbXMsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluSWZGbiA9IChzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICAuLi50aGlzLm9wdGlvbnMudWksXG4gICAgICAuLi5fc2NoZW1hLnVpLFxuICAgICAgLi4udGhpcy51aVsnKiddLFxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGRpKHRoaXMuX3VpLCAnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0ge1xuICAgICAgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9LFxuICAgICAgLi4udGhpcy5sb2NhbGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgLi4uKHRoaXMuYnV0dG9uIGFzIFNGQnV0dG9uKSxcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgIH1cbiAgICAgIC8vIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeS4jeaMh+Wumuagt+W8j++8jOWImem7mOiupOWxheS4rVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5fYnRuLnJlbmRlci5jbGFzcyAmJlxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgZGVmaW5pdGlvbiBcIiR7cGF0aH1cIiBjdXN0b20gd2lkZ2V0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKCk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKCF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5LiA6Iis6ZyA6KaB5Yqo5oCB5L+u5pS5IFNjaGVtYSDmn5DkuKrlgLzml7blj6/ku6Xmlrnkvr/osIPnlKhcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSk6IHRoaXMge1xuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLnRoaXMuZm9ybURhdGEsIC4uLnZhbHVlIH07XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6KGo5Y2VXG4gICAqIEBwYXJhbSBbZW1pdF0g5piv5ZCm6Kem5Y+RIGBmb3JtUmVzZXRgIOS6i+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc2V0KGVtaXQgPSBmYWxzZSk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUm9vdFN1YigpIHtcbiAgICBpZiAoIXRoaXMucm9vdFByb3BlcnR5KSByZXR1cm47XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19