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
var SFComponent = /** @class */ (function () {
    function SFComponent(formPropertyFactory, terminator, options, cdr, i18n) {
        var _this = this;
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
        this.i18n$ = this.i18n.change.subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getData('sf');
            if (_this._inited) {
                _this.coverButtonProperty();
                _this.cdr.detectChanges();
            }
        }));
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SFComponent.prototype, "valid", {
        // #endregion
        /** 表单校验状态 */
        get: 
        // #endregion
        /**
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
     * 根据路径获取表单元素属性
     * @param path [路径](https://ng-alain.com/form/qa#path)
     */
    /**
     * 根据路径获取表单元素属性
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    SFComponent.prototype.getProperty = /**
     * 根据路径获取表单元素属性
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    function (path) {
        return this.rootProperty.searchProperty(path);
    };
    /**
     * 根据路径获取表单元素当前值
     * @param path [路径](https://ng-alain.com/form/qa#path)
     */
    /**
     * 根据路径获取表单元素当前值
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    SFComponent.prototype.getValue = /**
     * 根据路径获取表单元素当前值
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @return {?}
     */
    function (path) {
        return (/** @type {?} */ (this.getProperty(path))).value;
    };
    /**
     * 根据路径设置某个表单元素属性值
     * @param path [路径](https://ng-alain.com/form/qa#path)
     * @param value 新值
     */
    /**
     * 根据路径设置某个表单元素属性值
     * @template THIS
     * @this {THIS}
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @param {?} value 新值
     * @return {THIS}
     */
    SFComponent.prototype.setValue = /**
     * 根据路径设置某个表单元素属性值
     * @template THIS
     * @this {THIS}
     * @param {?} path [路径](https://ng-alain.com/form/qa#path)
     * @param {?} value 新值
     * @return {THIS}
     */
    function (path, value) {
        /** @type {?} */
        var item = (/** @type {?} */ (this)).getProperty(path);
        if (!item) {
            throw new Error("Invalid path: " + path);
        }
        item.resetValue(value, false);
        return (/** @type {?} */ (this));
    };
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
     * @private
     * @return {?}
     */
    SFComponent.prototype.coverProperty = /**
     * @private
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
        var inFn = (/**
         * @param {?} schema
         * @param {?} parentSchema
         * @param {?} uiSchema
         * @param {?} parentUiSchema
         * @param {?} uiRes
         * @return {?}
         */
        function (schema, parentSchema, uiSchema, parentUiSchema, uiRes) {
            Object.keys(schema.properties).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var uiKey = "$" + key;
                /** @type {?} */
                var property = retrieveSchema((/** @type {?} */ (schema.properties[key])), definitions);
                /** @type {?} */
                var ui = (/** @type {?} */ (tslib_1.__assign({ widget: property.type }, (property.format && FORMATMAPS[property.format]), (typeof property.ui === 'string' ? { widget: property.ui } : null), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
                    ? { widget: 'select' }
                    : null), _this._defUi, ((/** @type {?} */ (property.ui))), uiSchema[uiKey])));
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
                    var dateEndProperty = schema.properties[ui.end];
                    if (dateEndProperty) {
                        dateEndProperty.ui = tslib_1.__assign({}, ((/** @type {?} */ (dateEndProperty.ui))), { hidden: true });
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
        var inIfFn = (/**
         * @param {?} schema
         * @param {?} ui
         * @return {?}
         */
        function (schema, ui) {
            Object.keys(schema.properties).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
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
            }));
        });
        if (this.ui == null)
            this.ui = {};
        this._defUi = tslib_1.__assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui, _schema.ui, this.ui['*']);
        if (this.onlyVisual === true) {
            this._defUi.onlyVisual = true;
        }
        // root
        this._ui = tslib_1.__assign({}, this._defUi);
        inFn(_schema, _schema, this.ui, this.ui, this._ui);
        // cond
        resolveIf(_schema, this._ui);
        inIfFn(_schema, this._ui);
        this._schema = _schema;
        di(this._ui, 'cover schema & ui', this._ui, _schema);
    };
    /**
     * @private
     * @return {?}
     */
    SFComponent.prototype.coverButtonProperty = /**
     * @private
     * @return {?}
     */
    function () {
        this._btn = tslib_1.__assign({ render: { size: 'default' } }, this.locale, this.options.button, ((/** @type {?} */ (this.button))));
        /** @type {?} */
        var firstKey = Object.keys(this._ui).find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.startsWith('$'); }));
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
        if (this._renders.has(path)) {
            console.warn("Duplicate definition \"" + path + "\" custom widget");
            return;
        }
        this._renders.set(path, templateRef);
        this.attachCustomRender();
    };
    /**
     * @private
     * @return {?}
     */
    SFComponent.prototype.attachCustomRender = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._renders.forEach((/**
         * @param {?} tpl
         * @param {?} path
         * @return {?}
         */
        function (tpl, path) {
            /** @type {?} */
            var property = _this.rootProperty.searchProperty(path);
            if (property == null) {
                return;
            }
            property.ui._render = tpl;
        }));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    SFComponent.prototype.validator = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).rootProperty._runValidation();
        /** @type {?} */
        var errors = (/** @type {?} */ (this)).rootProperty.errors;
        (/** @type {?} */ (this))._valid = !(errors && errors.length);
        if (!(/** @type {?} */ (this))._valid)
            (/** @type {?} */ (this)).formError.emit(errors);
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     */
    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @template THIS
     * @this {THIS}
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {THIS}
     */
    SFComponent.prototype.refreshSchema = /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     * @template THIS
     * @this {THIS}
     * @param {?=} newSchema
     * @param {?=} newUI
     * @return {THIS}
     */
    function (newSchema, newUI) {
        var _this = this;
        if (newSchema)
            (/** @type {?} */ (this)).schema = newSchema;
        if (newUI)
            (/** @type {?} */ (this)).ui = newUI;
        if (!(/** @type {?} */ (this)).schema || typeof (/** @type {?} */ (this)).schema.properties === 'undefined')
            throw new Error("Invalid Schema");
        if ((/** @type {?} */ (this)).schema.ui && typeof (/** @type {?} */ (this)).schema.ui === 'string')
            throw new Error("Don't support string with root ui property");
        (/** @type {?} */ (this)).schema.type = 'object';
        (/** @type {?} */ (this))._formData = tslib_1.__assign({}, (/** @type {?} */ (this)).formData);
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
        function (value) {
            (/** @type {?} */ (_this))._item = tslib_1.__assign({}, (/** @type {?} */ (_this)).formData, value);
            (/** @type {?} */ (_this)).formChange.emit((/** @type {?} */ (_this))._item);
        }));
        (/** @type {?} */ (this)).rootProperty.errorsChanges.subscribe((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            (/** @type {?} */ (_this))._valid = !(errors && errors.length);
            (/** @type {?} */ (_this)).formError.emit(errors);
            (/** @type {?} */ (_this)).cdr.detectChanges();
        }));
        return (/** @type {?} */ (this)).reset();
    };
    /**
     * 重置表单
     * @param [emit] 是否触发 `formReset` 事件，默认：`false`
     */
    /**
     * 重置表单
     * @template THIS
     * @this {THIS}
     * @param {?=} emit
     * @return {THIS}
     */
    SFComponent.prototype.reset = /**
     * 重置表单
     * @template THIS
     * @this {THIS}
     * @param {?=} emit
     * @return {THIS}
     */
    function (emit) {
        var _this = this;
        if (emit === void 0) { emit = false; }
        (/** @type {?} */ (this)).rootProperty.resetValue((/** @type {?} */ (this)).formData, false);
        Promise.resolve().then((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (_this)).cdr.detectChanges(); }));
        if (emit) {
            (/** @type {?} */ (this)).formReset.emit((/** @type {?} */ (this)).value);
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    SFComponent.prototype.cleanRootSub = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.rootProperty)
            return;
        this.rootProperty.errorsChanges.unsubscribe();
        this.rootProperty.valueChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    SFComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cleanRootSub();
        this.terminator.destroy();
        this.i18n$.unsubscribe();
    };
    SFComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf, [sf]',
                    template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form\n      [nzLayout]=\"layout\"\n      (submit)=\"onSubmit($event)\"\n      [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render.class\"\n                  class=\"sf-btns\"\n                  [fixed-label]=\"_btn.render.spanLabelFixed\">\n      <div nz-col\n           class=\"ant-form-item-control-wrapper\"\n           [nzSpan]=\"_btn.render.grid.span\"\n           [nzOffset]=\"_btn.render.grid.offset\"\n           [nzXs]=\"_btn.render.grid.xs\"\n           [nzSm]=\"_btn.render.grid.sm\"\n           [nzMd]=\"_btn.render.grid.md\"\n           [nzLg]=\"_btn.render.grid.lg\"\n           [nzXl]=\"_btn.render.grid.xl\"\n           [nzXXl]=\"_btn.render.grid.xxl\">\n        <div class=\"ant-form-item-control\">\n          <ng-container *ngIf=\"button; else con\">\n            <button type=\"submit\"\n                    nz-button\n                    [nzType]=\"_btn.submit_type\"\n                    [nzSize]=\"_btn.render.size\"\n                    [disabled]=\"liveValidate && !valid\">{{_btn.submit}}</button>\n            <button *ngIf=\"_btn.reset\"\n                    type=\"button\"\n                    nz-button\n                    [nzType]=\"_btn.reset_type\"\n                    [nzSize]=\"_btn.render.size\"\n                    (click)=\"reset(true)\">\n              {{_btn.reset}}\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
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
                        '[class.sf__inline]': "layout === 'inline'",
                        '[class.sf__search]': "mode === 'search'",
                        '[class.sf__edit]': "mode === 'edit'",
                        '[class.sf__no-error]': "onlyVisual",
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
    return SFComponent;
}());
export { SFComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFakQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsc0JBQThDLEVBQzlDLE9BQXdCO0lBRXhCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQ7SUF1SkUscUJBQ1UsbUJBQXdDLEVBQ3hDLFVBQTZCLEVBQzdCLE9BQXdCLEVBQ3hCLEdBQXNCLEVBQ3RCLElBQXdCO1FBTGxDLGlCQWlCQztRQWhCUyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQWlC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Ozs7O0lBQ2hELGlDQUFxQzs7Ozs7SUFDckMsOEJBQWdDOzs7OztJQUNoQywwQkFBOEI7Ozs7O0lBQzlCLDJCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQnV0dG9uIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZiwgcmV0cmlldmVTY2hlbWEsIEZPUk1BVE1BUFMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3RvcnkoXG4gIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbikge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgb3B0aW9ucyk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2lkZ2V0RmFjdG9yeSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgICAgdXNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBEZWxvbkZvcm1Db25maWddLFxuICAgIH0sXG4gICAgVGVybWluYXRvclNlcnZpY2UsXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNmXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNmX19pbmxpbmVdJzogYGxheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3Muc2ZfX3NlYXJjaF0nOiBgbW9kZSA9PT0gJ3NlYXJjaCdgLFxuICAgICdbY2xhc3Muc2ZfX2VkaXRdJzogYG1vZGUgPT09ICdlZGl0J2AsXG4gICAgJ1tjbGFzcy5zZl9fbm8tZXJyb3JdJzogYG9ubHlWaXN1YWxgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IG51bGw7XG4gIF9mb3JtRGF0YToge307XG4gIF9idG46IFNGQnV0dG9uO1xuICBfc2NoZW1hOiBTRlNjaGVtYTtcbiAgX3VpOiBTRlVJU2NoZW1hO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIOihqOWNleW4g+WxgO+8jOetieWQjCBgbnpMYXlvdXRg77yM6buY6K6k77yaaG9yaXpvbnRhbCAqL1xuICBASW5wdXQoKSBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWE7XG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KCkgZm9ybURhdGE6IHt9O1xuICAvKipcbiAgICog5oyJ6ZKuXG4gICAqIC0g5YC85Li6IGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5L2G5L+d55WZ5a655ZmoXG4gICAqIC0g5YC85Li6IGBub25lYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkuJTkuI3kv53nlZnlrrnlmahcbiAgICogLSDkvb/nlKggYHNwYW5MYWJlbEZpeGVkYCDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXG4gICAqL1xuICBASW5wdXQoKSBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAvKiog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pysICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIC8qKiDooajljZXmqKHlvI8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XG5cbiAgLyoqIOaVsOaNruWPmOabtOaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e30+KCk7XG4gIC8qKiDmj5DkuqTooajljZXml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog6YeN572u6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog6KGo5Y2V5qCh6aqM57uT5p6c5Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yRGF0YVtdPigpO1xuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqIOihqOWNleagoemqjOeKtuaAgSAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xuICB9XG5cbiAgLyoqIOihqOWNleWAvCAqL1xuICBnZXQgdmFsdWUoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6Lev5b6E6I635Y+W6KGo5Y2V5YWD57Sg5bGe5oCnXG4gICAqIEBwYXJhbSBwYXRoIFvot6/lvoRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2Zvcm0vcWEjcGF0aClcbiAgICovXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZyk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdFByb3BlcnR5LnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOW9k+WJjeWAvFxuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IG9wdGlvbnMubGl2ZVZhbGlkYXRlO1xuICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBvcHRpb25zLmZpcnN0VmlzdWFsO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gb3B0aW9ucy5hdXRvY29tcGxldGU7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldERhdGEoJ3NmJyk7XG4gICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgIHRoaXMuY292ZXJCdXR0b25Qcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIHBhcmVudFNjaGVtYTogU0ZTY2hlbWEsXG4gICAgICB1aVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICBwYXJlbnRVaVNjaGVtYTogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgICB1aVJlczogU0ZVSVNjaGVtYUl0ZW1SdW4sXG4gICAgKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB1aUtleSA9IGAkJHtrZXl9YDtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEucHJvcGVydGllc1trZXldIGFzIFNGU2NoZW1hLCBkZWZpbml0aW9ucyk7XG4gICAgICAgIGNvbnN0IHVpID0ge1xuICAgICAgICAgIHdpZGdldDogcHJvcGVydHkudHlwZSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkuZm9ybWF0ICYmIEZPUk1BVE1BUFNbcHJvcGVydHkuZm9ybWF0XSksXG4gICAgICAgICAgLi4uKHR5cGVvZiBwcm9wZXJ0eS51aSA9PT0gJ3N0cmluZycgPyB7IHdpZGdldDogcHJvcGVydHkudWkgfSA6IG51bGwpLFxuICAgICAgICAgIC4uLighcHJvcGVydHkuZm9ybWF0ICYmICFwcm9wZXJ0eS51aSAmJiBBcnJheS5pc0FycmF5KHByb3BlcnR5LmVudW0pICYmIHByb3BlcnR5LmVudW0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7IHdpZGdldDogJ3NlbGVjdCcgfVxuICAgICAgICAgICAgOiBudWxsKSxcbiAgICAgICAgICAuLi50aGlzLl9kZWZVaSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgfSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpXG4gICAgICAgICAgICAgIHVpLnNwYW5MYWJlbCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogcGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsO1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuQ29udHJvbClcbiAgICAgICAgICAgICAgdWkuc3BhbkNvbnRyb2wgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyAxOSA6IHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sO1xuICAgICAgICAgICAgaWYgKCF1aS5vZmZzZXRDb250cm9sKVxuICAgICAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgOiBwYXJlbnRVaVNjaGVtYS5vZmZzZXRDb250cm9sO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1aS5zcGFuTGFiZWwgPSBudWxsO1xuICAgICAgICAgIHVpLnNwYW5Db250cm9sID0gbnVsbDtcbiAgICAgICAgICB1aS5vZmZzZXRDb250cm9sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkud2lkZ2V0ID09PSAnZGF0ZScgJiYgdWkuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBkYXRlRW5kUHJvcGVydHkgPSBzY2hlbWEucHJvcGVydGllc1t1aS5lbmRdO1xuICAgICAgICAgIGlmIChkYXRlRW5kUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGRhdGVFbmRQcm9wZXJ0eS51aSA9IHtcbiAgICAgICAgICAgICAgLi4uKGRhdGVFbmRQcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbSksXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgdWlSZXNbdWlLZXldLiRpdGVtcyA9IHVpUmVzW3VpS2V5XS4kaXRlbXMgfHwge307XG4gICAgICAgICAgaW5GbihcbiAgICAgICAgICAgIHByb3BlcnR5Lml0ZW1zLFxuICAgICAgICAgICAgcHJvcGVydHkuaXRlbXMsXG4gICAgICAgICAgICAodWlTY2hlbWFbdWlLZXldIHx8IHt9KS4kaXRlbXMgfHwge30sXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIHVpUmVzW3VpS2V5XS4kaXRlbXMsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWlSZXNbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluSWZGbiA9IChzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIHJlc29sdmVJZihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgaWYgKHByb3BlcnR5Lml0ZW1zKSB7XG4gICAgICAgICAgaW5JZkZuKHByb3BlcnR5Lml0ZW1zLCB1aVt1aUtleV0uJGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkucHJvcGVydGllcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eSwgdWlbdWlLZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnVpID09IG51bGwpIHRoaXMudWkgPSB7fTtcbiAgICB0aGlzLl9kZWZVaSA9IHtcbiAgICAgIG9ubHlWaXN1YWw6IHRoaXMub3B0aW9ucy5vbmx5VmlzdWFsLFxuICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLnNpemUsXG4gICAgICBsaXZlVmFsaWRhdGU6IHRoaXMubGl2ZVZhbGlkYXRlLFxuICAgICAgZmlyc3RWaXN1YWw6IHRoaXMuZmlyc3RWaXN1YWwsXG4gICAgICAuLi50aGlzLm9wdGlvbnMudWksXG4gICAgICAuLi5fc2NoZW1hLnVpLFxuICAgICAgLi4udGhpcy51aVsnKiddLFxuICAgIH07XG4gICAgaWYgKHRoaXMub25seVZpc3VhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmVWkub25seVZpc3VhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcm9vdFxuICAgIHRoaXMuX3VpID0geyAuLi50aGlzLl9kZWZVaSB9O1xuXG4gICAgaW5Gbihfc2NoZW1hLCBfc2NoZW1hLCB0aGlzLnVpLCB0aGlzLnVpLCB0aGlzLl91aSk7XG5cbiAgICAvLyBjb25kXG4gICAgcmVzb2x2ZUlmKF9zY2hlbWEsIHRoaXMuX3VpKTtcbiAgICBpbklmRm4oX3NjaGVtYSwgdGhpcy5fdWkpO1xuXG4gICAgdGhpcy5fc2NoZW1hID0gX3NjaGVtYTtcblxuICAgIGRpKHRoaXMuX3VpLCAnY292ZXIgc2NoZW1hICYgdWknLCB0aGlzLl91aSwgX3NjaGVtYSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyQnV0dG9uUHJvcGVydHkoKSB7XG4gICAgdGhpcy5fYnRuID0ge1xuICAgICAgcmVuZGVyOiB7IHNpemU6ICdkZWZhdWx0JyB9LFxuICAgICAgLi4udGhpcy5sb2NhbGUsXG4gICAgICAuLi50aGlzLm9wdGlvbnMuYnV0dG9uLFxuICAgICAgLi4uKHRoaXMuYnV0dG9uIGFzIFNGQnV0dG9uKSxcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0S2V5ID0gT2JqZWN0LmtleXModGhpcy5fdWkpLmZpbmQodyA9PiB3LnN0YXJ0c1dpdGgoJyQnKSk7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGJ0blVpID0gZmlyc3RLZXkgPyB0aGlzLl91aVtmaXJzdEtleV0gOiB0aGlzLl9kZWZVaTtcbiAgICAgIGlmICghdGhpcy5fYnRuLnJlbmRlci5ncmlkKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlci5zcGFuTGFiZWxGaXhlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIuc3BhbkxhYmVsRml4ZWQgPSBidG5VaS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgIH1cbiAgICAgIC8vIOWbuuWumuagh+etvuWuveW6puaXtu+8jOiLpeS4jeaMh+Wumuagt+W8j++8jOWImem7mOiupOWxheS4rVxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5fYnRuLnJlbmRlci5jbGFzcyAmJlxuICAgICAgICAodHlwZW9mIGJ0blVpLnNwYW5MYWJlbEZpeGVkID09PSAnbnVtYmVyJyAmJiBidG5VaS5zcGFuTGFiZWxGaXhlZCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlci5jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J0bi5yZW5kZXIuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hTY2hlbWEoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFRwbChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh0aGlzLl9yZW5kZXJzLmhhcyhwYXRoKSkge1xuICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgZGVmaW5pdGlvbiBcIiR7cGF0aH1cIiBjdXN0b20gd2lkZ2V0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcnMuc2V0KHBhdGgsIHRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDdXN0b21SZW5kZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVycy5mb3JFYWNoKCh0cGwsIHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5yb290UHJvcGVydHkuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKCk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkuZXJyb3JzO1xuICAgIHRoaXMuX3ZhbGlkID0gIShlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCk7XG4gICAgaWYgKCF0aGlzLl92YWxpZCkgdGhpcy5mb3JtRXJyb3IuZW1pdChlcnJvcnMpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDliLfmlrAgU2NoZW1h77yM5LiA6Iis6ZyA6KaB5Yqo5oCB5L+u5pS5IFNjaGVtYSDmn5DkuKrlgLzml7blj6/ku6Xmlrnkvr/osIPnlKhcbiAgICovXG4gIHJlZnJlc2hTY2hlbWEobmV3U2NoZW1hPzogU0ZTY2hlbWEsIG5ld1VJPzogU0ZVSVNjaGVtYSk6IHRoaXMge1xuICAgIGlmIChuZXdTY2hlbWEpIHRoaXMuc2NoZW1hID0gbmV3U2NoZW1hO1xuICAgIGlmIChuZXdVSSkgdGhpcy51aSA9IG5ld1VJO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSB8fCB0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgU2NoZW1hYCk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnVpICYmIHR5cGVvZiB0aGlzLnNjaGVtYS51aSA9PT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuX3NjaGVtYSxcbiAgICAgIHRoaXMuX3VpLFxuICAgICAgdGhpcy5mb3JtRGF0YSxcbiAgICApO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2l0ZW0gPSB7IC4uLnRoaXMuZm9ybURhdGEsIC4uLnZhbHVlIH07XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6KGo5Y2VXG4gICAqIEBwYXJhbSBbZW1pdF0g5piv5ZCm6Kem5Y+RIGBmb3JtUmVzZXRgIOS6i+S7tu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHJlc2V0KGVtaXQgPSBmYWxzZSk6IHRoaXMge1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUm9vdFN1YigpIHtcbiAgICBpZiAoIXRoaXMucm9vdFByb3BlcnR5KSByZXR1cm47XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19