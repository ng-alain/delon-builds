/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                const property = retrieveSchema(/** @type {?} */ (schema.properties[key]), definitions);
                /** @type {?} */
                const ui = /** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                    Array.isArray(property.enum) &&
                    property.enum.length > 0
                    ? { widget: 'select' }
                    : null, this._defUi, property.ui, uiSchema[uiKey]));
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
                if (ui.widget === 'date' && ui["end"] != null && parentSchema) {
                    /** @type {?} */
                    const dateEndProperty = parentSchema.properties[ui["end"]];
                    if (dateEndProperty) {
                        dateEndProperty.ui = Object.assign({}, dateEndProperty.ui, {
                            hidden: true,
                        });
                    }
                    else {
                        ui["end"] = '';
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
        this._defUi = Object.assign(/** @type {?} */ ({
            onlyVisual: this.options.onlyVisual,
            size: this.options.size,
            liveValidate: this.liveValidate,
            firstVisual: this.firstVisual,
        }), this.options.ui, _schema.ui, this.ui['*']);
        // root
        this._ui = Object.assign({}, this._defUi);
        inFn(_schema, _schema, this.ui, this.ui, this._ui);
        // cond
        resolveIf(_schema, this._ui);
        inIfFn(_schema, this._ui);
        this._schema = _schema;
        if (this._ui["debug"]) {
            di('cover schema & ui', this._ui, _schema);
        }
    }
    /**
     * @return {?}
     */
    coverButtonProperty() {
        this._btn = Object.assign({ render: {} }, this.locale, this.options.button, this.button);
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
            if (!this._btn.render.spanLabelFixed) {
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
        if (this._ui["debug"])
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
    ngOnDestroy() {
        this.terminator.destroy();
        this.i18n$.unsubscribe();
    }
}
SFComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf, [sf]',
                template: "<ng-template #con>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\r\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\r\n  <ng-container *ngIf=\"button !== 'none'; else con\">\r\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\r\n      <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\r\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\r\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\">\r\n        <div class=\"ant-form-item-control\">\r\n          <ng-container *ngIf=\"button; else con\">\r\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\r\n            <button *ngIf=\"_btn.reset\" (click)=\"reset(true)\" type=\"button\" nz-button [nzType]=\"_btn.reset_type\">{{_btn.reset}}</button>\r\n          </ng-container>\r\n        </div>\r\n      </nz-col>\r\n    </nz-form-item>\r\n  </ng-container>\r\n</form>\r\n",
                preserveWhitespaces: false,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFJakQsTUFBTSxxQkFDSixzQkFBMkIsRUFDM0IsT0FBd0I7SUFFeEIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2pFO0FBc0JELE1BQU07Ozs7Ozs7O0lBd0hKLFlBQ1UscUJBQ0EsWUFDQSxTQUNBLElBQ0E7UUFKQSx3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLGVBQVUsR0FBVixVQUFVO1FBQ1YsWUFBTyxHQUFQLE9BQU87UUFDUCxPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJO3NCQTNIUSxFQUFFO3dCQUNMLElBQUksR0FBRyxF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O2lCQUNsQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLE1BQU07b0JBQ3BCLG1CQUFtQixFQUFFLG1CQUFtQjtvQkFDeEMsaUJBQWlCLEVBQUUsaUJBQWlCO2lCQUNyQztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWhDUSxtQkFBbUI7WUFKbkIsaUJBQWlCO1lBRmpCLGVBQWU7WUFOdEIsaUJBQWlCO1lBSVYsa0JBQWtCOzs7cUJBMkR4QixLQUFLO3FCQUlMLEtBQUs7aUJBSUwsS0FBSzt1QkFJTCxLQUFLO3FCQVNMLEtBQUs7MkJBUUwsS0FBSzsyQkFLTCxLQUFLOzBCQUlMLEtBQUs7bUJBS0wsS0FBSzt5QkF3QkwsTUFBTTt5QkFJTixNQUFNO3dCQUlOLE1BQU07d0JBSU4sTUFBTTs7O0lBakROLFlBQVksRUFBRTs7OztJQVNkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBkaSwgcmV0cmlldmVTY2hlbWEsIEZPUk1BVE1BUFMsIHJlc29sdmVJZiB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcclxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShcclxuICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBhbnksXHJcbiAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4pIHtcclxuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBXaWRnZXRGYWN0b3J5LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxyXG4gICAgICB1c2VGYWN0b3J5OiB1c2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgRGVsb25Gb3JtQ29uZmlnXSxcclxuICAgIH0sXHJcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc2ZdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy5zZi1zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcclxuICAgICdbY2xhc3Muc2YtZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgX3JlbmRlcnMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcclxuICBwcml2YXRlIF9pdGVtOiBhbnk7XHJcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2RlZlVpOiBTRlVJU2NoZW1hSXRlbTtcclxuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xyXG4gIF9mb3JtRGF0YTogYW55O1xyXG4gIF9idG46IFNGQnV0dG9uO1xyXG4gIF9zY2hlbWE6IFNGU2NoZW1hO1xyXG4gIF91aTogU0ZVSVNjaGVtYTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIC8qKiBKU09OIFNjaGVtYSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2NoZW1hOiBTRlNjaGVtYTtcclxuXHJcbiAgLyoqIFVJIFNjaGVtYSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgdWk6IFNGVUlTY2hlbWE7XHJcblxyXG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cclxuICBASW5wdXQoKVxyXG4gIGZvcm1EYXRhOiB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICog5oyJ6ZKuXHJcbiAgICogLSDlgLzkuLogYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkvYbkv53nlZnlrrnlmahcclxuICAgKiAtIOWAvOS4uiBgbm9uZWAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5LiU5LiN5L+d55WZ5a655ZmoXHJcbiAgICogLSDkvb/nlKjlm7rlrpogYGxhYmVsYCDmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxyXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxyXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGxpdmVWYWxpZGF0ZSA9IHRydWU7XHJcblxyXG4gIC8qKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC8ICovXHJcbiAgQElucHV0KClcclxuICBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcclxuXHJcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZmlyc3RWaXN1YWwgPSB0cnVlO1xyXG5cclxuICAvKiog6KGo5Y2V5qih5byPICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAnc2VhcmNoJzpcclxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xyXG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlZGl0JzpcclxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG1vZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XHJcblxyXG4gIC8qKiDmlbDmja7lj5jmm7Tml7blm57osIMgKi9cclxuICBAT3V0cHV0KClcclxuICBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcclxuXHJcbiAgLyoqIOaPkOS6pOihqOWNleaXtuWbnuiwgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xyXG5cclxuICAvKiog6YeN572u6KGo5Y2V5pe25Zue6LCDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcclxuXHJcbiAgLyoqIOihqOWNleagoemqjOe7k+aenOWbnuiwgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLyoqIOihqOWNleagoemqjOeKtuaAgSAqL1xyXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92YWxpZDtcclxuICB9XHJcblxyXG4gIC8qKiDooajljZXlgLwgKi9cclxuICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XHJcbiAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gb3B0aW9ucy5saXZlVmFsaWRhdGU7XHJcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbDtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gb3B0aW9ucy5hdXRvY29tcGxldGU7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdzZicpO1xyXG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3ZlclByb3BlcnR5KCkge1xyXG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcclxuICAgIGNvbnN0IF9zY2hlbWEgPSBkZWVwQ29weSh0aGlzLnNjaGVtYSk7XHJcbiAgICBjb25zdCB7IGRlZmluaXRpb25zIH0gPSBfc2NoZW1hO1xyXG5cclxuICAgIGNvbnN0IGluRm4gPSAoXHJcbiAgICAgIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgICAgIHVpU2NoZW1hOiBTRlVJU2NoZW1hSXRlbVJ1bixcclxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxyXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXHJcbiAgICApID0+IHtcclxuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHJldHJpZXZlU2NoZW1hKFxyXG4gICAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNba2V5XSBhcyBTRlNjaGVtYSxcclxuICAgICAgICAgIGRlZmluaXRpb25zLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdWkgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgeyB3aWRnZXQ6IHByb3BlcnR5LnR5cGUgfSxcclxuICAgICAgICAgIHByb3BlcnR5LmZvcm1hdCAmJiBGT1JNQVRNQVBTW3Byb3BlcnR5LmZvcm1hdF0sXHJcbiAgICAgICAgICB0eXBlb2YgcHJvcGVydHkudWkgPT09ICdzdHJpbmcnID8geyB3aWRnZXQ6IHByb3BlcnR5LnVpIH0gOiBudWxsLFxyXG4gICAgICAgICAgIXByb3BlcnR5LnVpICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmXHJcbiAgICAgICAgICBwcm9wZXJ0eS5lbnVtLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxyXG4gICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICB0aGlzLl9kZWZVaSxcclxuICAgICAgICAgIHByb3BlcnR5LnVpLFxyXG4gICAgICAgICAgdWlTY2hlbWFbdWlLZXldLFxyXG4gICAgICAgICkgYXMgU0ZVSVNjaGVtYUl0ZW1SdW47XHJcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXHJcbiAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgaWYgKHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcclxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWxGaXhlZCA9IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbEZpeGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5MYWJlbClcclxuICAgICAgICAgICAgICB1aS5zcGFuTGFiZWwgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgPyA1XHJcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xyXG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxyXG4gICAgICAgICAgICAgIHVpLnNwYW5Db250cm9sID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgPyAxOVxyXG4gICAgICAgICAgICAgICAgICA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xyXG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXHJcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcclxuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcclxuICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwgJiYgcGFyZW50U2NoZW1hKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBwYXJlbnRTY2hlbWEucHJvcGVydGllc1t1aS5lbmRdO1xyXG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICBkYXRlRW5kUHJvcGVydHkudWkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRlRW5kUHJvcGVydHkudWksIHtcclxuICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWkuZW5kID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xyXG5cclxuICAgICAgICB1aVJlc1t1aUtleV0gPSB1aTtcclxuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xyXG4gICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSA9IHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10gfHwge307XHJcbiAgICAgICAgICBpbkZuKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcclxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXHJcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pWyckaXRlbXMnXSB8fCB7fSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIHVpUmVzW3VpS2V5XVsnJGl0ZW1zJ10sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpbkZuKHByb3BlcnR5LCBzY2hlbWEsIHVpU2NoZW1hW3VpS2V5XSB8fCB7fSwgdWksIHVpUmVzW3VpS2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xyXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcclxuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcclxuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XHJcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHkuaXRlbXMsIHVpW3VpS2V5XS4kaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xyXG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5LCB1aVt1aUtleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcclxuICAgIHRoaXMuX2RlZlVpID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPFNGVUlTY2hlbWFJdGVtPntcclxuICAgICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcclxuICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcclxuICAgICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxyXG4gICAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLm9wdGlvbnMudWksXHJcbiAgICAgIF9zY2hlbWEudWksXHJcbiAgICAgIHRoaXMudWlbJyonXSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gcm9vdFxyXG4gICAgdGhpcy5fdWkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZVaSk7XHJcblxyXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XHJcblxyXG4gICAgLy8gY29uZFxyXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcclxuICAgIGluSWZGbihfc2NoZW1hLCB0aGlzLl91aSk7XHJcblxyXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcclxuXHJcbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIHtcclxuICAgICAgZGkoJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xyXG4gICAgdGhpcy5fYnRuID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgeyByZW5kZXI6IHt9IH0sXHJcbiAgICAgIHRoaXMubG9jYWxlLFxyXG4gICAgICB0aGlzLm9wdGlvbnMuYnV0dG9uLFxyXG4gICAgICB0aGlzLmJ1dHRvbixcclxuICAgICk7XHJcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xyXG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgY29uc3QgYnRuVWkgPSBmaXJzdEtleSA/IHRoaXMuX3VpW2ZpcnN0S2V5XSA6IHRoaXMuX2RlZlVpO1xyXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuZ3JpZCkge1xyXG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcclxuICAgICAgICAgIG9mZnNldDogYnRuVWkuc3BhbkxhYmVsLFxyXG4gICAgICAgICAgc3BhbjogYnRuVWkuc3BhbkNvbnRyb2wsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaXhlZCBsYWJlbFxyXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQpIHtcclxuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLnNwYW5MYWJlbEZpeGVkID0gYnRuVWkuc3BhbkxhYmVsRml4ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhdGhpcy5fYnRuLnJlbmRlci5jbGFzcyAmJlxyXG4gICAgICAgICh0eXBlb2YgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPT09ICdudW1iZXInICYmIGJ0blVpLnNwYW5MYWJlbEZpeGVkID4gMClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX21vZGUpIHtcclxuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl91aS5kZWJ1ZykgZGkoJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnZhbGlkYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pikge1xyXG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcclxuICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgY29uc29sZS53YXJuKGDmnKrmib7liLDot6/lvoTvvJoke3BhdGh9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYOW3sue7j+WtmOWcqOebuOWQjOiHquWumuS5iei3r+W+hO+8miR7cGF0aH1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xyXG4gICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xyXG4gICAgcHVpLl9yZW5kZXIgPSB0ZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQ3VzdG9tUmVuZGVyKCkge1xyXG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcclxuICAgICAgY29uc3QgcHVpOiBTRlVJU2NoZW1hSXRlbVJ1biA9IHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpLnVpO1xyXG4gICAgICBpZiAoIXB1aS5fcmVuZGVyKSBwdWkuX3JlbmRlciA9IHRwbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdG9yKCkge1xyXG4gICAgdGhpcy5yb290UHJvcGVydHkuX3J1blZhbGlkYXRpb24oKTtcclxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMucm9vdFByb3BlcnR5LmVycm9ycztcclxuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XHJcbiAgICBpZiAoIXRoaXMuX3ZhbGlkKSB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzkuIDoiKzpnIDopoHliqjmgIHkv67mlLkgU2NoZW1hIOafkOS4quWAvOaXtuWPr+S7peaWueS+v+iwg+eUqFxyXG4gICAqL1xyXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSkge1xyXG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XHJcbiAgICBpZiAobmV3VUkpIHRoaXMudWkgPSBuZXdVSTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XHJcblxyXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1EYXRhID0geyAuLi50aGlzLmZvcm1EYXRhIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcclxuXHJcbiAgICB0aGlzLmNvdmVyUHJvcGVydHkoKTtcclxuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xyXG5cclxuICAgIHRoaXMucm9vdFByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxyXG4gICAgICB0aGlzLl9zY2hlbWEsXHJcbiAgICAgIHRoaXMuX3VpLFxyXG4gICAgICB0aGlzLmZvcm1EYXRhLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2l0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1EYXRhLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuX2l0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xyXG4gICAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6YeN572u6KGo5Y2VXHJcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxyXG4gICAqL1xyXG4gIHJlc2V0KGVtaXQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICAgIGlmIChlbWl0KSB7XHJcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==