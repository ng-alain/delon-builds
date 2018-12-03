/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { deepCopy, InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
import { DelonFormConfig } from './config';
import { di, retrieveSchema, FORMATMAPS, resolveIf } from './utils';
import { TerminatorService } from './terminator.service';
import { FormPropertyFactory } from './model/form.property.factory';
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
     * @param {?} cd
     * @param {?} i18n
     */
    constructor(formPropertyFactory, terminator, options, cd, i18n) {
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.options = options;
        this.cd = cd;
        this.i18n = i18n;
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
         * - 使用固定 `label` 标签宽度时，若无 `render.class` 则默认为居中状态
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
                this.cd.detectChanges();
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
                if (this._btn)
                    this._btn.submit = this._btn.search;
                break;
            case 'edit':
                this.layout = 'horizontal';
                this.firstVisual = false;
                this.liveValidate = true;
                if (this._btn)
                    this._btn.submit = this._btn.edit;
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
                const ui = (/** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                    Array.isArray(property.enum) &&
                    property.enum.length > 0
                    ? { widget: 'select' }
                    : null, this._defUi, property.ui, uiSchema[uiKey])));
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
                                typeof parentUiSchema.spanLabel === 'undefined'
                                    ? 5
                                    : parentUiSchema.spanLabel;
                        if (!ui.spanControl)
                            ui.spanControl =
                                typeof parentUiSchema.spanControl === 'undefined'
                                    ? 19
                                    : parentUiSchema.spanControl;
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
                if (ui.widget === 'date' && ui.end != null && parentSchema) {
                    /** @type {?} */
                    const dateEndProperty = parentSchema.properties[ui.end];
                    if (dateEndProperty) {
                        dateEndProperty.ui = Object.assign({}, dateEndProperty.ui, {
                            hidden: true,
                        });
                    }
                    else {
                        ui.end = '';
                    }
                }
                ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                uiRes[uiKey] = ui;
                delete property.ui;
                if (property.items) {
                    uiRes[uiKey]['$items'] = uiRes[uiKey]['$items'] || {};
                    inFn(property.items, property.items, (uiSchema[uiKey] || {})['$items'] || {}, ui, uiRes[uiKey]['$items']);
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
        this._defUi = Object.assign((/** @type {?} */ ({
            onlyVisual: this.options.onlyVisual,
            size: this.options.size,
            liveValidate: this.liveValidate,
            firstVisual: this.firstVisual,
        })), this.options.ui, _schema.ui, this.ui['*']);
        // root
        this._ui = Object.assign({}, this._defUi);
        inFn(_schema, _schema, this.ui, this.ui, this._ui);
        // cond
        resolveIf(_schema, this._ui);
        inIfFn(_schema, this._ui);
        this._schema = _schema;
        if (this._ui.debug) {
            di('cover schema & ui', this._ui, _schema);
        }
    }
    /**
     * @return {?}
     */
    coverButtonProperty() {
        this._btn = Object.assign((/** @type {?} */ ({ render: { size: 'default' } })), this.locale, this.options.button, this.button);
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
        if (this._ui.debug)
            di('button property', this._btn);
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
        /** @type {?} */
        const property = this.rootProperty.searchProperty(path);
        if (!property) {
            console.warn(`未找到路径：${path}`);
            return;
        }
        if (this._renders.has(path)) {
            console.warn(`已经存在相同自定义路径：${path}`);
            return;
        }
        this._renders.set(path, templateRef);
        /** @type {?} */
        const pui = this.rootProperty.searchProperty(path).ui;
        pui._render = templateRef;
    }
    /**
     * @return {?}
     */
    attachCustomRender() {
        this._renders.forEach((tpl, path) => {
            /** @type {?} */
            const pui = this.rootProperty.searchProperty(path).ui;
            if (!pui._render)
                pui._render = tpl;
        });
    }
    /**
     * @return {?}
     */
    validator() {
        this.rootProperty._runValidation();
        /** @type {?} */
        const errors = this.rootProperty.errors;
        this._valid = !(errors && errors.length);
        if (!this._valid)
            this.formError.emit(errors);
        this.cd.detectChanges();
    }
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {?}
     */
    refreshSchema(newSchema, newUI) {
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
        this.rootProperty.valueChanges.subscribe(value => {
            this._item = Object.assign({}, this.formData, value);
            this.formChange.emit(this._item);
        });
        this.rootProperty.errorsChanges.subscribe(errors => {
            this._valid = !(errors && errors.length);
            this.formError.emit(errors);
            this.cd.detectChanges();
        });
        this.reset();
    }
    /**
     * 重置表单
     * @param {?=} emit
     * @return {?}
     */
    reset(emit = false) {
        this.rootProperty.resetValue(this.formData, false);
        Promise.resolve().then(() => this.cd.detectChanges());
        if (emit) {
            this.formReset.emit(this.value);
        }
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
                        useFactory: useFactory,
                        deps: [SchemaValidatorFactory, DelonFormConfig],
                    },
                    TerminatorService,
                ],
                host: {
                    '[class.sf]': 'true',
                    '[class.sf-search]': `mode === 'search'`,
                    '[class.sf-edit]': `mode === 'edit'`,
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
     * - 使用固定 `label` 标签宽度时，若无 `render.class` 则默认为居中状态
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
    SFComponent.prototype.cd;
    /** @type {?} */
    SFComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFJakQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsc0JBQTJCLEVBQzNCLE9BQXdCO0lBRXhCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBcUJELE1BQU0sT0FBTyxXQUFXOzs7Ozs7OztJQXdIdEIsWUFDVSxtQkFBd0MsRUFDeEMsVUFBNkIsRUFDN0IsT0FBd0IsRUFDeEIsRUFBcUIsRUFDckIsSUFBd0I7UUFKeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixZQUFPLEdBQVAs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LEtBQUs7MkJBS0wsS0FBSzswQkFJTCxLQUFLO21CQUtMLEtBQUs7eUJBd0JMLE1BQU07eUJBSU4sTUFBTTt3QkFJTixNQUFNO3dCQUlOLE1BQU07O0FBaERQO0lBREMsWUFBWSxFQUFFOztpREFDSztBQVNwQjtJQURDLFlBQVksRUFBRTs7Z0RBQ0k7OztJQXpEbkIsNEJBQTRCOztJQUM1Qiw2QkFBd0I7O0lBQ3hCLCtCQUF1RDs7SUFDdkQsNEJBQW1COztJQUNuQiw2QkFBc0I7O0lBQ3RCLDZCQUErQjs7SUFDL0IsOEJBQXdCOztJQUV4QixtQ0FBa0M7O0lBQ2xDLGdDQUFlOztJQUNmLDJCQUFlOztJQUNmLDhCQUFrQjs7SUFDbEIsMEJBQWdCOzs7OztJQUtoQiw2QkFDNEQ7Ozs7O0lBRzVELDZCQUNpQjs7Ozs7SUFHakIseUJBQ2U7Ozs7O0lBR2YsK0JBQ2E7Ozs7Ozs7O0lBUWIsNkJBQytCOzs7Ozs7O0lBTy9CLG1DQUVvQjs7Ozs7SUFHcEIsbUNBQzJCOzs7OztJQUczQixrQ0FFbUI7O0lBd0JuQiw0QkFBNkM7Ozs7O0lBRzdDLGlDQUM2Qzs7Ozs7SUFHN0MsaUNBQzZDOzs7OztJQUc3QyxnQ0FDNEM7Ozs7O0lBRzVDLGdDQUNxRDs7SUF1Qm5ELDBDQUFnRDs7SUFDaEQsaUNBQXFDOztJQUNyQyw4QkFBZ0M7O0lBQ2hDLHlCQUE2Qjs7SUFDN0IsMkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZGksIHJldHJpZXZlU2NoZW1hLCBGT1JNQVRNQVBTLCByZXNvbHZlSWYgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcbiAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogYW55LFxuICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4pIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIG9wdGlvbnMpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZiwgW3NmXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgRGVsb25Gb3JtQ29uZmlnXSxcbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlLFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZi1zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmLWVkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTRkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIHByaXZhdGUgX2l0ZW06IGFueTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiBhbnk7XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKVxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgc2NoZW1hOiBTRlNjaGVtYTtcblxuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHVpOiBTRlVJU2NoZW1hO1xuXG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KClcbiAgZm9ybURhdGE6IHt9O1xuXG4gIC8qKlxuICAgKiDmjInpkq5cbiAgICogLSDlgLzkuLogYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkvYbkv53nlZnlrrnlmahcbiAgICogLSDlgLzkuLogYG5vbmVgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS4lOS4jeS/neeVmeWuueWZqFxuICAgKiAtIOS9v+eUqOWbuuWumiBgbGFiZWxgIOagh+etvuWuveW6puaXtu+8jOiLpeaXoCBgcmVuZGVyLmNsYXNzYCDliJnpu5jorqTkuLrlsYXkuK3nirbmgIFcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcblxuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcblxuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKVxuICBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcblxuICAvKiog56uL5Y2z5pi+56S66ZSZ6K+v6KeG6KeJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXJzdFZpc3VhbCA9IHRydWU7XG5cbiAgLyoqIOihqOWNleaooeW8jyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcblxuICAvKiog5pWw5o2u5Y+Y5pu05pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiog6YeN572u6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDooajljZXmoKHpqoznu5Pmnpzlm57osIMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBvblN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5saXZlVmFsaWRhdGUgPSBvcHRpb25zLmxpdmVWYWxpZGF0ZTtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlO1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLFxuICAgICAgICAgIGRlZmluaXRpb25zLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB1aSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB3aWRnZXQ6IHByb3BlcnR5LnR5cGUgfSxcbiAgICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdLFxuICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwsXG4gICAgICAgICAgIXByb3BlcnR5LnVpICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJlxuICAgICAgICAgIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuX2RlZlVpLFxuICAgICAgICAgIHByb3BlcnR5LnVpLFxuICAgICAgICAgIHVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgKSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyAxOVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsICYmIHBhcmVudFNjaGVtYSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHBhcmVudFNjaGVtYS5wcm9wZXJ0aWVzW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0ZUVuZFByb3BlcnR5LnVpLCB7XG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddID0gdWlSZXNbdWlLZXldWyckaXRlbXMnXSB8fCB7fTtcbiAgICAgICAgICBpbkZuKFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pWyckaXRlbXMnXSB8fCB7fSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1trZXldO1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgcmVzb2x2ZUlmKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHkuaXRlbXMsIHVpW3VpS2V5XS4kaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTRlVJU2NoZW1hSXRlbT57XG4gICAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnVpLFxuICAgICAgX3NjaGVtYS51aSxcbiAgICAgIHRoaXMudWlbJyonXSxcbiAgICApO1xuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmVWkpO1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGlmICh0aGlzLl91aS5kZWJ1Zykge1xuICAgICAgZGkoJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpIHtcbiAgICB0aGlzLl9idG4gPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFNGQnV0dG9uPnsgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9IH0sXG4gICAgICB0aGlzLmxvY2FsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICB0aGlzLmJ1dHRvbixcbiAgICApO1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgIH1cbiAgICAgIC8vIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeS4jeaMh+Wumuagt+W8j++8jOWImem7mOiupOWxheS4rVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5fYnRuLnJlbmRlci5jbGFzcyAmJlxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VpLmRlYnVnKSBkaSgnYnV0dG9uIHByb3BlcnR5JywgdGhpcy5fYnRuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0b3IoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pikge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgY29uc29sZS53YXJuKGDmnKrmib7liLDot6/lvoTvvJoke3BhdGh9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgY29uc29sZS53YXJuKGDlt7Lnu4/lrZjlnKjnm7jlkIzoh6rlrprkuYnot6/lvoTvvJoke3BhdGh9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XG4gICAgcHVpLl9yZW5kZXIgPSB0ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCkge1xuICAgIHRoaXMuX3JlbmRlcnMuZm9yRWFjaCgodHBsLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBwdWk6IFNGVUlTY2hlbWFJdGVtUnVuID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCkudWk7XG4gICAgICBpZiAoIXB1aS5fcmVuZGVyKSBwdWkuX3JlbmRlciA9IHRwbDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRvcigpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5fcnVuVmFsaWRhdGlvbigpO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5LmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmICghdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5LiA6Iis6ZyA6KaB5Yqo5oCB5L+u5pS5IFNjaGVtYSDmn5DkuKrlgLzml7blj6/ku6Xmlrnkvr/osIPnlKhcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSkge1xuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1EYXRhLCB2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruihqOWNlVxuICAgKiBAcGFyYW0gW2VtaXRdIOaYr+WQpuinpuWPkSBgZm9ybVJlc2V0YCDkuovku7bvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNldChlbWl0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldFZhbHVlKHRoaXMuZm9ybURhdGEsIGZhbHNlKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUm9vdFN1YigpIHtcbiAgICBpZiAoIXRoaXMucm9vdFByb3BlcnR5KSByZXR1cm4gO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5Sb290U3ViKCk7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==