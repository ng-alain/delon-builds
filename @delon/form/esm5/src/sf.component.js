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
var SFComponent = /** @class */ (function () {
    function SFComponent(formPropertyFactory, terminator, options, cd, i18n) {
        var _this = this;
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
        this.i18n$ = this.i18n.change.subscribe(function () {
            _this.locale = _this.i18n.getData('sf');
            if (_this._inited) {
                _this.coverButtonProperty();
                _this.cd.detectChanges();
            }
        });
    }
    Object.defineProperty(SFComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        /** 表单模式 */
        set: /**
         * 表单模式
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SFComponent.prototype, "valid", {
        // #endregion
        /** 表单校验状态 */
        get: /**
         * 表单校验状态
         * @return {?}
         */
        function () {
            return this._valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SFComponent.prototype, "value", {
        /** 表单值 */
        get: /**
         * 表单值
         * @return {?}
         */
        function () {
            return this._item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SFComponent.prototype.onSubmit = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.liveValidate)
            this.validator();
        if (!this.valid)
            return;
        this.formSubmit.emit(this.value);
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.coverProperty = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this.layout === 'horizontal';
        /** @type {?} */
        var _schema = deepCopy(this.schema);
        var definitions = _schema.definitions;
        /** @type {?} */
        var inFn = function (schema, parentSchema, uiSchema, parentUiSchema, uiRes) {
            Object.keys(schema.properties).forEach(function (key) {
                /** @type {?} */
                var uiKey = "$" + key;
                /** @type {?} */
                var property = retrieveSchema(/** @type {?} */ (schema.properties[key]), definitions);
                /** @type {?} */
                var ui = /** @type {?} */ (Object.assign({ widget: property.type }, property.format && FORMATMAPS[property.format], typeof property.ui === 'string' ? { widget: property.ui } : null, !property.ui &&
                    Array.isArray(property.enum) &&
                    property.enum.length > 0
                    ? { widget: 'select' }
                    : null, _this._defUi, property.ui, uiSchema[uiKey]));
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
                    var dateEndProperty = parentSchema.properties[ui["end"]];
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
        var inIfFn = function (schema, ui) {
            Object.keys(schema.properties).forEach(function (key) {
                /** @type {?} */
                var property = schema.properties[key];
                /** @type {?} */
                var uiKey = "$" + key;
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
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.coverButtonProperty = /**
     * @return {?}
     */
    function () {
        this._btn = Object.assign({ render: {} }, this.locale, this.options.button, this.button);
        /** @type {?} */
        var firstKey = Object.keys(this._ui).find(function (w) { return w.startsWith('$'); });
        if (this.layout === 'horizontal') {
            /** @type {?} */
            var btnUi = firstKey ? this._ui[firstKey] : this._defUi;
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
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._inited = true;
        this.validator();
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.refreshSchema();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} path
     * @param {?} templateRef
     * @return {?}
     */
    SFComponent.prototype._addTpl = /**
     * \@internal
     * @param {?} path
     * @param {?} templateRef
     * @return {?}
     */
    function (path, templateRef) {
        /** @type {?} */
        var property = this.rootProperty.searchProperty(path);
        if (!property) {
            console.warn("\u672A\u627E\u5230\u8DEF\u5F84\uFF1A" + path);
            return;
        }
        if (this._renders.has(path)) {
            console.warn("\u5DF2\u7ECF\u5B58\u5728\u76F8\u540C\u81EA\u5B9A\u4E49\u8DEF\u5F84\uFF1A" + path);
            return;
        }
        this._renders.set(path, templateRef);
        /** @type {?} */
        var pui = this.rootProperty.searchProperty(path).ui;
        pui._render = templateRef;
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.attachCustomRender = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renders.forEach(function (tpl, path) {
            /** @type {?} */
            var pui = _this.rootProperty.searchProperty(path).ui;
            if (!pui._render)
                pui._render = tpl;
        });
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.validator = /**
     * @return {?}
     */
    function () {
        this.rootProperty._runValidation();
        /** @type {?} */
        var errors = this.rootProperty.errors;
        this._valid = !(errors && errors.length);
        if (!this._valid)
            this.formError.emit(errors);
        this.cd.detectChanges();
    };
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     */
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {?}
     */
    SFComponent.prototype.refreshSchema = /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {?}
     */
    function (newSchema, newUI) {
        var _this = this;
        if (newSchema)
            this.schema = newSchema;
        if (newUI)
            this.ui = newUI;
        if (!this.schema || typeof this.schema.properties === 'undefined')
            throw new Error("Invalid Schema");
        if (this.schema.ui && typeof this.schema.ui === 'string')
            throw new Error("Don't support string with root ui property");
        this.schema.type = 'object';
        this._formData = tslib_1.__assign({}, this.formData);
        if (this._inited)
            this.terminator.destroy();
        this.coverProperty();
        this.coverButtonProperty();
        this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData);
        this.attachCustomRender();
        this.rootProperty.valueChanges.subscribe(function (value) {
            _this._item = Object.assign({}, _this.formData, value);
            _this.formChange.emit(_this._item);
        });
        this.rootProperty.errorsChanges.subscribe(function (errors) {
            _this._valid = !(errors && errors.length);
            _this.formError.emit(errors);
            _this.cd.detectChanges();
        });
        this.reset();
    };
    /**
     * 重置表单
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    /**
     * 重置表单
     * @param {?=} emit
     * @return {?}
     */
    SFComponent.prototype.reset = /**
     * 重置表单
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        var _this = this;
        if (emit === void 0) { emit = false; }
        this.rootProperty.resetValue(this.formData, false);
        Promise.resolve().then(function () { return _this.cd.detectChanges(); });
        if (emit) {
            this.formReset.emit(this.value);
        }
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.terminator.destroy();
        this.i18n$.unsubscribe();
    };
    SFComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf, [sf]',
                    template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"_btn.render.grid.span\" [nzOffset]=\"_btn.render.grid.offset\"\n              [nzXs]=\"_btn.render.grid.xs\" [nzSm]=\"_btn.render.grid.sm\" [nzMd]=\"_btn.render.grid.md\"\n              [nzLg]=\"_btn.render.grid.lg\" [nzXl]=\"_btn.render.grid.xl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\" nz-button [nzType]=\"_btn.submit_type\" [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\" (click)=\"reset(true)\" type=\"button\" nz-button [nzType]=\"_btn.reset_type\">{{_btn.reset}}</button>\n          </ng-container>\n        </div>\n      </nz-col>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
                        '[class.sf-search]': "mode === 'search'",
                        '[class.sf-edit]': "mode === 'edit'",
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SFComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory },
        { type: TerminatorService },
        { type: DelonFormConfig },
        { type: ChangeDetectorRef },
        { type: DelonLocaleService }
    ]; };
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
    return SFComponent;
}());
export { SFComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFJakQsTUFBTSxxQkFDSixzQkFBMkIsRUFDM0IsT0FBd0I7SUFFeEIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2pFOztJQThJQyxxQkFDVSxxQkFDQSxZQUNBLFNBQ0EsSUFDQTtRQUxWLGlCQWlCQztRQWhCUyx3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLGVBQVUsR0FBVixVQUFVO1FBQ1YsWUFBTyxHQUFQLE9BQU87UUFDUCxPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJO3NCQTNIUSxFQUFFO3dCQUNMLElBQUksR0FBRyxFQUE0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RUFBRSxLQUFLO29CQUMxQixTQUFTLEVBQUU7d0JBQ1QsYUFBYTt3QkFDYjs0QkFDRSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixVQUFVLEVBQUUsVUFBVTs0QkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDO3lCQUNoRDt3QkFDRCxpQkFBaUI7cUJBQ2xCO29CQUNELElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsTUFBTTt3QkFDcEIsbUJBQW1CLEVBQUUsbUJBQW1CO3dCQUN4QyxpQkFBaUIsRUFBRSxpQkFBaUI7cUJBQ3JDO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQ1EsbUJBQW1CO2dCQUpuQixpQkFBaUI7Z0JBRmpCLGVBQWU7Z0JBTnRCLGlCQUFpQjtnQkFJVixrQkFBa0I7Ozt5QkEyRHhCLEtBQUs7eUJBSUwsS0FBSztxQkFJTCxLQUFLOzJCQUlMLEtBQUs7eUJBU0wsS0FBSzsrQkFRTCxLQUFLOytCQUtMLEtBQUs7OEJBSUwsS0FBSzt1QkFLTCxLQUFLOzZCQXdCTCxNQUFNOzZCQUlOLE1BQU07NEJBSU4sTUFBTTs0QkFJTixNQUFNOzs7UUFqRE4sWUFBWSxFQUFFOzs7O1FBU2QsWUFBWSxFQUFFOzs7c0JBaEhqQjs7U0F1RGEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVlcENvcHksIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGRpLCByZXRyaWV2ZVNjaGVtYSwgRk9STUFUTUFQUywgcmVzb2x2ZUlmIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRkJ1dHRvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXG4gIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IGFueSxcbiAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuKSB7XG4gIHJldHVybiBuZXcgRm9ybVByb3BlcnR5RmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBvcHRpb25zKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YsIFtzZl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeTogdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmLXNlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxuICAgICdbY2xhc3Muc2YtZWRpdF0nOiBgbW9kZSA9PT0gJ2VkaXQnYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNGQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG4gIHByaXZhdGUgX2l0ZW06IGFueTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIHJvb3RQcm9wZXJ0eTogRm9ybVByb3BlcnR5ID0gbnVsbDtcbiAgX2Zvcm1EYXRhOiBhbnk7XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKVxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcblxuICAvKiogSlNPTiBTY2hlbWEgKi9cbiAgQElucHV0KClcbiAgc2NoZW1hOiBTRlNjaGVtYTtcblxuICAvKiogVUkgU2NoZW1hICovXG4gIEBJbnB1dCgpXG4gIHVpOiBTRlVJU2NoZW1hO1xuXG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KClcbiAgZm9ybURhdGE6IHt9O1xuXG4gIC8qKlxuICAgKiDmjInpkq5cbiAgICogLSDlgLzkuLogYG51bGxgIOaIliBgdW5kZWZpbmVkYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkvYbkv53nlZnlrrnlmahcbiAgICogLSDlgLzkuLogYG5vbmVgIOihqOekuuaJi+WKqOa3u+WKoOaMiemSru+8jOS4lOS4jeS/neeVmeWuueWZqFxuICAgKiAtIOS9v+eUqOWbuuWumiBgbGFiZWxgIOagh+etvuWuveW6puaXtu+8jOiLpeaXoCBgcmVuZGVyLmNsYXNzYCDliJnpu5jorqTkuLrlsYXkuK3nirbmgIFcbiAgICovXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogU0ZCdXR0b24gfCAnbm9uZScgPSB7fTtcblxuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbGl2ZVZhbGlkYXRlID0gdHJ1ZTtcblxuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKVxuICBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcblxuICAvKiog56uL5Y2z5pi+56S66ZSZ6K+v6KeG6KeJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXJzdFZpc3VhbCA9IHRydWU7XG5cbiAgLyoqIOihqOWNleaooeW8jyAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCcpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZVZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uc2VhcmNoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICB0aGlzLmxheW91dCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9idG4pIHRoaXMuX2J0bi5zdWJtaXQgPSB0aGlzLl9idG4uZWRpdDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiAnZGVmYXVsdCcgfCAnc2VhcmNoJyB8ICdlZGl0JztcblxuICAvKiog5pWw5o2u5Y+Y5pu05pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcblxuICAvKiog6YeN572u6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKVxuICBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuXG4gIC8qKiDooajljZXmoKHpqoznu5Pmnpzlm57osIMgKi9cbiAgQE91dHB1dCgpXG4gIGZvcm1FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3JEYXRhW10+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBvblN1Ym1pdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5saXZlVmFsaWRhdGUpIHRoaXMudmFsaWRhdG9yKCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkKSByZXR1cm47XG4gICAgdGhpcy5mb3JtU3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5saXZlVmFsaWRhdGUgPSBvcHRpb25zLmxpdmVWYWxpZGF0ZTtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gb3B0aW9ucy5maXJzdFZpc3VhbDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG9wdGlvbnMuYXV0b2NvbXBsZXRlO1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLmNvdmVyQnV0dG9uUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShcbiAgICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLFxuICAgICAgICAgIGRlZmluaXRpb25zLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB1aSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB3aWRnZXQ6IHByb3BlcnR5LnR5cGUgfSxcbiAgICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgJiYgRk9STUFUTUFQU1twcm9wZXJ0eS5mb3JtYXRdLFxuICAgICAgICAgIHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwsXG4gICAgICAgICAgIXByb3BlcnR5LnVpICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5lbnVtKSAmJlxuICAgICAgICAgIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIHRoaXMuX2RlZlVpLFxuICAgICAgICAgIHByb3BlcnR5LnVpLFxuICAgICAgICAgIHVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgKSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWw7XG4gICAgICAgICAgICBpZiAoIXVpLnNwYW5Db250cm9sKVxuICAgICAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyAxOVxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbDtcbiAgICAgICAgICAgIGlmICghdWkub2Zmc2V0Q29udHJvbClcbiAgICAgICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLm9mZnNldENvbnRyb2wgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsICYmIHBhcmVudFNjaGVtYSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVFbmRQcm9wZXJ0eSA9IHBhcmVudFNjaGVtYS5wcm9wZXJ0aWVzW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0ZUVuZFByb3BlcnR5LnVpLCB7XG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aS5lbmQgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWkuaGlkZGVuID0gdHlwZW9mIHVpLmhpZGRlbiA9PT0gJ2Jvb2xlYW4nID8gdWkuaGlkZGVuIDogZmFsc2U7XG5cbiAgICAgICAgdWlSZXNbdWlLZXldID0gdWk7XG4gICAgICAgIGRlbGV0ZSBwcm9wZXJ0eS51aTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICB1aVJlc1t1aUtleV1bJyRpdGVtcyddID0gdWlSZXNbdWlLZXldWyckaXRlbXMnXSB8fCB7fTtcbiAgICAgICAgICBpbkZuKFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICBwcm9wZXJ0eS5pdGVtcyxcbiAgICAgICAgICAgICh1aVNjaGVtYVt1aUtleV0gfHwge30pWyckaXRlbXMnXSB8fCB7fSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgdWlSZXNbdWlLZXldWyckaXRlbXMnXSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMgJiYgT2JqZWN0LmtleXMocHJvcGVydHkucHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eSwgc2NoZW1hLCB1aVNjaGVtYVt1aUtleV0gfHwge30sIHVpLCB1aVJlc1t1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1trZXldO1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgcmVzb2x2ZUlmKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICBpZiAocHJvcGVydHkuaXRlbXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHkuaXRlbXMsIHVpW3VpS2V5XS4kaXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5LCB1aVt1aUtleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudWkgPT0gbnVsbCkgdGhpcy51aSA9IHt9O1xuICAgIHRoaXMuX2RlZlVpID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxTRlVJU2NoZW1hSXRlbT57XG4gICAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuc2l6ZSxcbiAgICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnVpLFxuICAgICAgX3NjaGVtYS51aSxcbiAgICAgIHRoaXMudWlbJyonXSxcbiAgICApO1xuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmVWkpO1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGlmICh0aGlzLl91aS5kZWJ1Zykge1xuICAgICAgZGkoJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY292ZXJCdXR0b25Qcm9wZXJ0eSgpIHtcbiAgICB0aGlzLl9idG4gPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyByZW5kZXI6IHt9IH0sXG4gICAgICB0aGlzLmxvY2FsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5idXR0b24sXG4gICAgICB0aGlzLmJ1dHRvbixcbiAgICApO1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLl9idG4ucmVuZGVyLmNsYXNzICYmXG4gICAgICAgICh0eXBlb2YgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPT09ICdudW1iZXInICYmIGJ0blVpLnNwYW5MYWJlbEZpeGVkID4gMClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyLmNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnRuLnJlbmRlci5ncmlkID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLm1vZGUgPSB0aGlzLl9tb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdWkuZGVidWcpIGRpKCdidXR0b24gcHJvcGVydHknLCB0aGlzLl9idG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnZhbGlkYXRvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoU2NoZW1hKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRUcGwocGF0aDogc3RyaW5nLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICBjb25zb2xlLndhcm4oYOacquaJvuWIsOi3r+W+hO+8miR7cGF0aH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYOW3sue7j+WtmOWcqOebuOWQjOiHquWumuS5iei3r+W+hO+8miR7cGF0aH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcbiAgICBwdWkuX3JlbmRlciA9IHRlbXBsYXRlUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4gPSB0aGlzLnJvb3RQcm9wZXJ0eS5zZWFyY2hQcm9wZXJ0eShwYXRoKS51aTtcbiAgICAgIGlmICghcHVpLl9yZW5kZXIpIHB1aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKCkge1xuICAgIHRoaXMucm9vdFByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKCF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzkuIDoiKzpnIDopoHliqjmgIHkv67mlLkgU2NoZW1hIOafkOS4quWAvOaXtuWPr+S7peaWueS+v+iwg+eUqFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKSB7XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBTY2hlbWFgKTtcbiAgICBpZiAodGhpcy5zY2hlbWEudWkgJiYgdHlwZW9mIHRoaXMuc2NoZW1hLnVpID09PSAnc3RyaW5nJylcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qgc3VwcG9ydCBzdHJpbmcgd2l0aCByb290IHVpIHByb3BlcnR5YCk7XG5cbiAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG5cbiAgICB0aGlzLl9mb3JtRGF0YSA9IHsgLi4udGhpcy5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuY292ZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLl9zY2hlbWEsXG4gICAgICB0aGlzLl91aSxcbiAgICAgIHRoaXMuZm9ybURhdGEsXG4gICAgKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuXG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtRGF0YSwgdmFsdWUpO1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5faXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoZXJyb3JzID0+IHtcbiAgICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZvcm1FcnJvci5lbWl0KGVycm9ycyk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7ooajljZVcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5yb290UHJvcGVydHkucmVzZXRWYWx1ZSh0aGlzLmZvcm1EYXRhLCBmYWxzZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZm9ybVJlc2V0LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==