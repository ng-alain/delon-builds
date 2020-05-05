/**
 * @fileoverview added by tsickle
 * Generated from: src/sf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, DelonLocaleService } from '@delon/theme';
import { AlainConfigService, deepCopy, InputBoolean } from '@delon/util';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { mergeConfig } from './config';
import { PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';
/**
 * @param {?} schemaValidatorFactory
 * @param {?} cogSrv
 * @return {?}
 */
export function useFactory(schemaValidatorFactory, cogSrv) {
    return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
}
var SFComponent = /** @class */ (function () {
    function SFComponent(formPropertyFactory, terminator, dom, cdr, localeSrv, aclSrv, i18nSrv, cogSrv) {
        var _this = this;
        this.formPropertyFactory = formPropertyFactory;
        this.terminator = terminator;
        this.dom = dom;
        this.cdr = cdr;
        this.localeSrv = localeSrv;
        this.aclSrv = aclSrv;
        this.i18nSrv = i18nSrv;
        this.unsubscribe$ = new Subject();
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
        this.disabled = false;
        this.noColon = false;
        this.cleanValue = false;
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
        this.options = mergeConfig(cogSrv);
        this.liveValidate = (/** @type {?} */ (this.options.liveValidate));
        this.firstVisual = (/** @type {?} */ (this.options.firstVisual));
        this.autocomplete = (/** @type {?} */ (this.options.autocomplete));
        this.localeSrv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.localeSrv.getData('sf');
            if (_this._inited) {
                _this.validator({ emitError: false, onlyRoot: false });
                _this.coverButtonProperty();
                _this.cdr.markForCheck();
            }
        }));
        /** @type {?} */
        var refSchemas = [
            this.aclSrv ? this.aclSrv.change : null,
            this.i18nSrv ? this.i18nSrv.change : null,
        ].filter((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return o != null; }));
        if (refSchemas.length > 0) {
            merge.apply(void 0, __spread(((/** @type {?} */ (refSchemas))))).pipe(filter((/**
             * @return {?}
             */
            function () { return _this._inited; })), takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            function () { return _this.refreshSchema(); }));
        }
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
        return (/** @type {?} */ (this.rootProperty)).searchProperty(path);
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
     * @protected
     * @param {?} key
     * @return {?}
     */
    SFComponent.prototype.fanyi = /**
     * @protected
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
    };
    /**
     * @private
     * @param {?} ui
     * @return {?}
     */
    SFComponent.prototype.inheritUI = /**
     * @private
     * @param {?} ui
     * @return {?}
     */
    function (ui) {
        var _this = this;
        ['optionalHelp'].filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !!_this._defUi[key]; })).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (ui[key] = __assign(__assign({}, _this._defUi[key]), ui[key])); }));
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
         * @param {?} _parentSchema
         * @param {?} uiSchema
         * @param {?} parentUiSchema
         * @param {?} uiRes
         * @return {?}
         */
        function (schema, _parentSchema, uiSchema, parentUiSchema, uiRes) {
            if (!Array.isArray(schema.required))
                schema.required = [];
            Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var uiKey = "$" + key;
                /** @type {?} */
                var property = retrieveSchema((/** @type {?} */ ((/** @type {?} */ (schema.properties))[key])), definitions);
                /** @type {?} */
                var ui = (/** @type {?} */ (__assign(__assign(__assign(__assign(__assign(__assign({ widget: property.type }, (property.format && ((/** @type {?} */ (_this.options.formatMap)))[property.format])), (typeof property.ui === 'string' ? { widget: property.ui } : null)), (!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null)), _this._defUi), ((/** @type {?} */ (property.ui)))), uiSchema[uiKey])));
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
                            ui.offsetControl = typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
                    }
                }
                else {
                    ui.spanLabel = null;
                    ui.spanControl = null;
                    ui.offsetControl = null;
                }
                if (ui.widget === 'date' && ui.end != null) {
                    /** @type {?} */
                    var dateEndProperty = (/** @type {?} */ (schema.properties))[ui.end];
                    if (dateEndProperty) {
                        dateEndProperty.ui = __assign(__assign({}, ((/** @type {?} */ (dateEndProperty.ui)))), { widget: ui.widget, hidden: true });
                    }
                    else {
                        ui.end = null;
                    }
                }
                _this.inheritUI(ui);
                if (ui.optionalHelp) {
                    if (typeof ui.optionalHelp === 'string') {
                        ui.optionalHelp = (/** @type {?} */ ({
                            text: ui.optionalHelp,
                        }));
                    }
                    /** @type {?} */
                    var oh = (ui.optionalHelp = __assign({ text: '', icon: 'question-circle', placement: 'top', trigger: 'hover', mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 }, ui.optionalHelp));
                    if (oh.i18n) {
                        oh.text = _this.fanyi(oh.i18n);
                    }
                    if (!oh.text) {
                        ui.optionalHelp = undefined;
                    }
                }
                if (ui.i18n) {
                    property.title = _this.fanyi(ui.i18n);
                }
                if (ui.descriptionI18n) {
                    property.description = _this.fanyi(ui.descriptionI18n);
                }
                if (property.description) {
                    property._description = _this.dom.bypassSecurityTrustHtml(property.description);
                }
                ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
                if (ui.hidden === false && ui.acl && _this.aclSrv && !_this.aclSrv.can(ui.acl)) {
                    ui.hidden = true;
                }
                uiRes[uiKey] = ui;
                delete property.ui;
                if (ui.hidden === true) {
                    /** @type {?} */
                    var idx = (/** @type {?} */ (schema.required)).indexOf(key);
                    if (idx !== -1) {
                        (/** @type {?} */ (schema.required)).splice(idx, 1);
                    }
                }
                if (property.items) {
                    /** @type {?} */
                    var uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
                    ui.$items = __assign(__assign(__assign({}, ((/** @type {?} */ (property.items.ui)))), uiSchemaInArr[uiKey]), ui.$items);
                    inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
                }
                if (property.properties && Object.keys(property.properties).length) {
                    inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
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
            Object.keys((/** @type {?} */ (schema.properties))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var property = (/** @type {?} */ (schema.properties))[key];
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
        this._defUi = __assign(__assign(__assign({ onlyVisual: this.options.onlyVisual, size: this.options.size, liveValidate: this.liveValidate, firstVisual: this.firstVisual }, this.options.ui), _schema.ui), this.ui['*']);
        if (this.onlyVisual === true) {
            this._defUi.onlyVisual = true;
        }
        // root
        this._ui = __assign({}, this._defUi);
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
        this._btn = __assign(__assign(__assign({ render: { size: 'default' } }, this.locale), this.options.button), ((/** @type {?} */ (this.button))));
        /** @type {?} */
        var firstKey = Object.keys(this._ui).find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.startsWith('$'); }));
        if (this.layout === 'horizontal') {
            /** @type {?} */
            var btnUi = firstKey ? this._ui[firstKey] : this._defUi;
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
            if (!(/** @type {?} */ (this._btn.render)).class && typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0) {
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
     * @param {?} changes
     * @return {?}
     */
    SFComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
            this.cdr.detectChanges();
            return;
        }
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
            var property = (/** @type {?} */ (_this.rootProperty)).searchProperty(path);
            if (property == null) {
                return;
            }
            property.ui._render = tpl;
        }));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} options
     * @return {THIS}
     */
    SFComponent.prototype.validator = /**
     * @template THIS
     * @this {THIS}
     * @param {?=} options
     * @return {THIS}
     */
    function (options) {
        if (options === void 0) { options = { emitError: true, onlyRoot: true }; }
        /** @type {?} */
        var fn = (/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            property._runValidation();
            if (!(property instanceof PropertyGroup) || !property.properties)
                return;
            if (Array.isArray(property.properties)) {
                property.properties.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return fn(p); }));
            }
            else {
                Object.keys(property.properties).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return fn(((/** @type {?} */ (property.properties)))[key]); }));
            }
        });
        if (options.onlyRoot) {
            (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty))._runValidation();
        }
        else {
            fn((/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)));
        }
        /** @type {?} */
        var errors = (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).errors;
        (/** @type {?} */ (this))._valid = !(errors && errors.length);
        if (options.emitError && !(/** @type {?} */ (this))._valid)
            (/** @type {?} */ (this)).formError.emit((/** @type {?} */ (errors)));
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
        (/** @type {?} */ (this))._formData = __assign({}, (/** @type {?} */ (this)).formData);
        if ((/** @type {?} */ (this))._inited)
            (/** @type {?} */ (this)).terminator.destroy();
        (/** @type {?} */ (this)).cleanRootSub();
        (/** @type {?} */ (this)).coverProperty();
        (/** @type {?} */ (this)).coverButtonProperty();
        (/** @type {?} */ (this)).rootProperty = (/** @type {?} */ (this)).formPropertyFactory.createProperty((/** @type {?} */ (this))._schema, (/** @type {?} */ (this))._ui, (/** @type {?} */ (this)).formData);
        (/** @type {?} */ (this)).attachCustomRender();
        (/** @type {?} */ (this)).cdr.detectChanges();
        (/** @type {?} */ (this)).reset();
        /** @type {?} */
        var isFirst = true;
        (/** @type {?} */ (this)).rootProperty.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            (/** @type {?} */ (_this))._item = __assign(__assign({}, ((/** @type {?} */ (_this)).cleanValue ? null : (/** @type {?} */ (_this)).formData)), value);
            if (isFirst) {
                isFirst = false;
                return;
            }
            (/** @type {?} */ (_this)).formChange.emit((/** @type {?} */ (_this))._item);
        }));
        (/** @type {?} */ (this)).rootProperty.errorsChanges.subscribe((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            (/** @type {?} */ (_this))._valid = !(errors && errors.length);
            (/** @type {?} */ (_this)).formError.emit((/** @type {?} */ (errors)));
            (/** @type {?} */ (_this)).cdr.detectChanges();
        }));
        return (/** @type {?} */ (this));
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
        (/** @type {?} */ ((/** @type {?} */ (this)).rootProperty)).resetValue((/** @type {?} */ (this)).formData, false);
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
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    SFComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf, [sf]',
                    exportAs: 'sf',
                    template: "<ng-template #con>\n  <ng-content></ng-content>\n</ng-template>\n<form nz-form [nzLayout]=\"layout\" (submit)=\"onSubmit($event)\" [attr.autocomplete]=\"autocomplete\">\n  <sf-item [formProperty]=\"rootProperty\"></sf-item>\n  <ng-container *ngIf=\"button !== 'none'; else con\">\n    <nz-form-item [ngClass]=\"_btn.render!.class\" class=\"sf-btns\" [fixed-label]=\"_btn.render!.spanLabelFixed\">\n      <div\n        nz-col\n        class=\"ant-form-item-control\"\n        [nzSpan]=\"_btn.render!.grid!.span\"\n        [nzOffset]=\"_btn.render!.grid!.offset\"\n        [nzXs]=\"_btn.render!.grid!.xs\"\n        [nzSm]=\"_btn.render!.grid!.sm\"\n        [nzMd]=\"_btn.render!.grid!.md\"\n        [nzLg]=\"_btn.render!.grid!.lg\"\n        [nzXl]=\"_btn.render!.grid!.xl\"\n        [nzXXl]=\"_btn.render!.grid!.xxl\"\n      >\n        <div class=\"ant-form-item-control-input\">\n          <div class=\"ant-form-item-control-input-content\">\n            <ng-container *ngIf=\"button; else con\">\n              <button\n                type=\"submit\"\n                nz-button\n                data-type=\"submit\"\n                [nzType]=\"_btn.submit_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [nzLoading]=\"loading\"\n                [disabled]=\"liveValidate && !valid\"\n              >\n                <i\n                  *ngIf=\"_btn.submit_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.submit_icon.type\"\n                  [nzTheme]=\"_btn.submit_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.submit_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.submit_icon.iconfont\"\n                ></i>\n                {{ _btn.submit }}\n              </button>\n              <button\n                *ngIf=\"_btn.reset\"\n                type=\"button\"\n                nz-button\n                data-type=\"reset\"\n                [nzType]=\"_btn.reset_type\"\n                [nzSize]=\"_btn.render!.size\"\n                [disabled]=\"loading\"\n                (click)=\"reset(true)\"\n              >\n                <i\n                  *ngIf=\"_btn.reset_icon\"\n                  nz-icon\n                  [nzType]=\"_btn.reset_icon.type\"\n                  [nzTheme]=\"_btn.reset_icon.theme\"\n                  [nzTwotoneColor]=\"_btn.reset_icon.twoToneColor\"\n                  [nzIconfont]=\"_btn.reset_icon.iconfont\"\n                ></i>\n                {{ _btn.reset }}\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-form-item>\n  </ng-container>\n</form>\n",
                    providers: [
                        WidgetFactory,
                        {
                            provide: FormPropertyFactory,
                            useFactory: useFactory,
                            deps: [SchemaValidatorFactory, AlainConfigService],
                        },
                        TerminatorService,
                    ],
                    host: {
                        '[class.sf]': 'true',
                        '[class.sf__inline]': "layout === 'inline'",
                        '[class.sf__search]': "mode === 'search'",
                        '[class.sf__edit]': "mode === 'edit'",
                        '[class.sf__no-error]': "onlyVisual",
                        '[class.sf__no-colon]': "noColon",
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SFComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory },
        { type: TerminatorService },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: DelonLocaleService },
        { type: ACLService, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: AlainConfigService }
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
        loading: [{ type: Input }],
        disabled: [{ type: Input }],
        noColon: [{ type: Input }],
        cleanValue: [{ type: Input }],
        formChange: [{ type: Output }],
        formSubmit: [{ type: Output }],
        formReset: [{ type: Output }],
        formError: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "liveValidate", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "firstVisual", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "onlyVisual", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "noColon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SFComponent.prototype, "cleanValue", void 0);
    return SFComponent;
}());
export { SFComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.unsubscribe$;
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
    SFComponent.prototype.options;
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
    /** @type {?} */
    SFComponent.prototype.disabled;
    /** @type {?} */
    SFComponent.prototype.noColon;
    /** @type {?} */
    SFComponent.prototype.cleanValue;
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
    SFComponent.prototype.dom;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.localeSrv;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.aclSrv;
    /**
     * @type {?}
     * @private
     */
    SFComponent.prototype.i18nSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLGtCQUFrQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7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RTs7Z0RBQWlCO0lBQ2hCO1FBQWYsWUFBWSxFQUFFOzttREFBb0I7SUF1YTlDLGtCQUFDO0NBQUEsQUE5Z0JELElBOGdCQztTQXJmWSxXQUFXOzs7Ozs7SUFDdEIsbUNBQTJDOzs7OztJQUMzQywrQkFBd0Q7Ozs7O0lBQ3hELDRCQUFrQjs7Ozs7SUFDbEIsNkJBQXNCOzs7OztJQUN0Qiw2QkFBK0I7Ozs7O0lBQy9CLDhCQUF3Qjs7SUFDeEIsOEJBQWdDOztJQUVoQyw2QkFBd0I7O0lBQ3hCLG1DQUF5Qzs7SUFDekMsZ0NBQWM7O0lBQ2QsMkJBQWU7O0lBQ2YsOEJBQWtCOztJQUNsQiwwQkFBZ0I7Ozs7O0lBS2hCLDZCQUF5Qzs7Ozs7SUFFekMsNkJBQTBCOzs7OztJQUUxQix5QkFBd0I7Ozs7O0lBRXhCLCtCQUFzQjs7Ozs7Ozs7SUFPdEIsNkJBQXdDOzs7Ozs7O0lBTXhDLG1DQUE2Qzs7Ozs7SUFFN0MsbUNBQW9DOzs7OztJQUVwQyxrQ0FBNEM7Ozs7O0lBRTVDLGlDQUE0Qzs7Ozs7SUEyQjVDLDRCQUE2Qzs7Ozs7SUFJN0MsOEJBQXlDOztJQUN6QywrQkFBMEM7O0lBQzFDLDhCQUF5Qzs7SUFDekMsaUNBQTRDOzs7OztJQUU1QyxpQ0FBdUQ7Ozs7O0lBRXZELGlDQUF1RDs7Ozs7SUFFdkQsZ0NBQXNEOzs7OztJQUV0RCxnQ0FBK0Q7Ozs7O0lBb0Q3RCwwQ0FBZ0Q7Ozs7O0lBQ2hELGlDQUFxQzs7Ozs7SUFDckMsMEJBQXlCOzs7OztJQUN6QiwwQkFBOEI7Ozs7O0lBQzlCLGdDQUFxQzs7Ozs7SUFDckMsNkJBQXNDOzs7OztJQUN0Qyw4QkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIERlbG9uTG9jYWxlU2VydmljZSwgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcsIGRlZXBDb3B5LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRkJ1dHRvbiwgU0ZMYXlvdXQgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGksIHJlc29sdmVJZiwgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBGb3JtUHJvcGVydHlGYWN0b3J5KHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIGNvZ1Nydik7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLCBbc2ZdJyxcbiAgZXhwb3J0QXM6ICdzZicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgQWxhaW5Db25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICAgIFRlcm1pbmF0b3JTZXJ2aWNlLFxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZl9faW5saW5lXSc6IGBsYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNmX19zZWFyY2hdJzogYG1vZGUgPT09ICdzZWFyY2gnYCxcbiAgICAnW2NsYXNzLnNmX19lZGl0XSc6IGBtb2RlID09PSAnZWRpdCdgLFxuICAgICdbY2xhc3Muc2ZfX25vLWVycm9yXSc6IGBvbmx5VmlzdWFsYCxcbiAgICAnW2NsYXNzLnNmX19uby1jb2xvbl0nOiBgbm9Db2xvbmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0ZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9yZW5kZXJzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPHZvaWQ+PigpO1xuICBwcml2YXRlIF9pdGVtOiB7fTtcbiAgcHJpdmF0ZSBfdmFsaWQgPSB0cnVlO1xuICBwcml2YXRlIF9kZWZVaTogU0ZVSVNjaGVtYUl0ZW07XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICByZWFkb25seSBvcHRpb25zOiBBbGFpblNGQ29uZmlnO1xuXG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICByb290UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBfZm9ybURhdGE6IHt9O1xuICBfYnRuOiBTRkJ1dHRvbjtcbiAgX3NjaGVtYTogU0ZTY2hlbWE7XG4gIF91aTogU0ZVSVNjaGVtYTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDooajljZXluIPlsYDvvIznrYnlkIwgYG56TGF5b3V0YO+8jOm7mOiupO+8mmhvcml6b250YWwgKi9cbiAgQElucHV0KCkgbGF5b3V0OiBTRkxheW91dCA9ICdob3Jpem9udGFsJztcbiAgLyoqIEpTT04gU2NoZW1hICovXG4gIEBJbnB1dCgpIHNjaGVtYTogU0ZTY2hlbWE7XG4gIC8qKiBVSSBTY2hlbWEgKi9cbiAgQElucHV0KCkgdWk6IFNGVUlTY2hlbWE7XG4gIC8qKiDooajljZXpu5jorqTlgLwgKi9cbiAgQElucHV0KCkgZm9ybURhdGE6IHt9O1xuICAvKipcbiAgICog5oyJ6ZKuXG4gICAqIC0g5YC85Li6IGBudWxsYCDmiJYgYHVuZGVmaW5lZGAg6KGo56S65omL5Yqo5re75Yqg5oyJ6ZKu77yM5L2G5L+d55WZ5a655ZmoXG4gICAqIC0g5YC85Li6IGBub25lYCDooajnpLrmiYvliqjmt7vliqDmjInpkq7vvIzkuJTkuI3kv53nlZnlrrnlmahcbiAgICogLSDkvb/nlKggYHNwYW5MYWJlbEZpeGVkYCDlm7rlrprmoIfnrb7lrr3luqbml7bvvIzoi6Xml6AgYHJlbmRlci5jbGFzc2Ag5YiZ6buY6K6k5Li65bGF5Lit54q25oCBXG4gICAqL1xuICBASW5wdXQoKSBidXR0b246IFNGQnV0dG9uIHwgJ25vbmUnID0ge307XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaXZlVmFsaWRhdGUgPSB0cnVlO1xuICAvKiog5oyH5a6a6KGo5Y2VIGBhdXRvY29tcGxldGVgIOWAvCAqL1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6ICdvbicgfCAnb2ZmJztcbiAgLyoqIOeri+WNs+aYvuekuumUmeivr+inhuiniSAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAvKiog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pysICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvbmx5VmlzdWFsID0gZmFsc2U7XG4gIC8qKiDooajljZXmqKHlvI8gKi9cbiAgQElucHV0KClcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdzZWFyY2gnIHwgJ2VkaXQnKSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaW5saW5lJztcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5zZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYnRuKSB7XG4gICAgICAgICAgdGhpcy5fYnRuLnN1Ym1pdCA9IHRoaXMuX2J0bi5lZGl0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogJ2RlZmF1bHQnIHwgJ3NlYXJjaCcgfCAnZWRpdCc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGxvYWQgc3RhdHVz77yMd2hlbiBgdHJ1ZWAgcmVzZXQgYnV0dG9uIGlzIGRpc2FibGVkIHN0YXR1cywgc3VibWl0IGJ1dHRvbiBpcyBsb2FkaW5nIHN0YXR1c1xuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0NvbG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbGVhblZhbHVlID0gZmFsc2U7XG4gIC8qKiDmlbDmja7lj5jmm7Tml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvcm1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHt9PigpO1xuICAvKiog5o+Q5Lqk6KGo5Y2V5pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOmHjee9ruihqOWNleaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybVJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx7fT4oKTtcbiAgLyoqIOihqOWNleagoemqjOe7k+aenOWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm9ybUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvckRhdGFbXT4oKTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKiDooajljZXmoKHpqoznirbmgIEgKi9cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWxpZDtcbiAgfVxuXG4gIC8qKiDooajljZXlgLwgKi9cbiAgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOWxnuaAp1xuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5yb290UHJvcGVydHkhLnNlYXJjaFByb3BlcnR5KHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrui3r+W+hOiOt+WPluihqOWNleWFg+e0oOW9k+WJjeWAvFxuICAgKiBAcGFyYW0gcGF0aCBb6Lev5b6EXShodHRwczovL25nLWFsYWluLmNvbS9mb3JtL3FhI3BhdGgpXG4gICAqL1xuICBnZXRWYWx1ZShwYXRoOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5KHBhdGgpIS52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7ot6/lvoTorr7nva7mn5DkuKrooajljZXlhYPntKDlsZ7mgKflgLxcbiAgICogQHBhcmFtIHBhdGggW+i3r+W+hF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vZm9ybS9xYSNwYXRoKVxuICAgKiBAcGFyYW0gdmFsdWUg5paw5YC8XG4gICAqL1xuICBzZXRWYWx1ZShwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB0aGlzIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRQcm9wZXJ0eShwYXRoKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXRoOiAke3BhdGh9YCk7XG4gICAgfVxuICAgIGl0ZW0ucmVzZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdWJtaXQoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMubGl2ZVZhbGlkYXRlKSB0aGlzLnZhbGlkYXRvcigpO1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuO1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBsb2NhbGVTcnY6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNydjogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmxpdmVWYWxpZGF0ZSA9IHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZpcnN0VmlzdWFsID0gdGhpcy5vcHRpb25zLmZpcnN0VmlzdWFsIGFzIGJvb2xlYW47XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlIGFzICdvbicgfCAnb2ZmJztcbiAgICB0aGlzLmxvY2FsZVNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmxvY2FsZVNydi5nZXREYXRhKCdzZicpO1xuICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvcih7IGVtaXRFcnJvcjogZmFsc2UsIG9ubHlSb290OiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlZlNjaGVtYXM6IEFycmF5PE9ic2VydmFibGU8YW55PiB8IG51bGw+ID0gW1xuICAgICAgdGhpcy5hY2xTcnYgPyB0aGlzLmFjbFNydi5jaGFuZ2UgOiBudWxsLFxuICAgICAgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmNoYW5nZSA6IG51bGwsXG4gICAgXS5maWx0ZXIobyA9PiBvICE9IG51bGwpO1xuICAgIGlmIChyZWZTY2hlbWFzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lcmdlKC4uLihyZWZTY2hlbWFzIGFzIEFycmF5PE9ic2VydmFibGU8YW55Pj4pKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5faW5pdGVkKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoU2NoZW1hKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmYW55aShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkoa2V5KSA6ICcnKSB8fCBrZXk7XG4gIH1cblxuICBwcml2YXRlIGluaGVyaXRVSSh1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiB2b2lkIHtcbiAgICBbJ29wdGlvbmFsSGVscCddLmZpbHRlcihrZXkgPT4gISF0aGlzLl9kZWZVaVtrZXldKS5mb3JFYWNoKGtleSA9PiAodWlba2V5XSA9IHsgLi4udGhpcy5fZGVmVWlba2V5XSwgLi4udWlba2V5XSB9KSk7XG4gIH1cblxuICBwcml2YXRlIGNvdmVyUHJvcGVydHkoKSB7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBfc2NoZW1hID0gZGVlcENvcHkodGhpcy5zY2hlbWEpO1xuICAgIGNvbnN0IHsgZGVmaW5pdGlvbnMgfSA9IF9zY2hlbWE7XG5cbiAgICBjb25zdCBpbkZuID0gKFxuICAgICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICAgIF9wYXJlbnRTY2hlbWE6IFNGU2NoZW1hLFxuICAgICAgdWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgcGFyZW50VWlTY2hlbWE6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICAgdWlSZXM6IFNGVUlTY2hlbWFJdGVtUnVuLFxuICAgICkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkpIHNjaGVtYS5yZXF1aXJlZCA9IFtdO1xuXG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdWlLZXkgPSBgJCR7a2V5fWA7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLnByb3BlcnRpZXMhW2tleV0gYXMgU0ZTY2hlbWEsIGRlZmluaXRpb25zKTtcbiAgICAgICAgY29uc3QgdWkgPSB7XG4gICAgICAgICAgd2lkZ2V0OiBwcm9wZXJ0eS50eXBlLFxuICAgICAgICAgIC4uLihwcm9wZXJ0eS5mb3JtYXQgJiYgKHRoaXMub3B0aW9ucy5mb3JtYXRNYXAgYXMgTnpTYWZlQW55KVtwcm9wZXJ0eS5mb3JtYXRdKSxcbiAgICAgICAgICAuLi4odHlwZW9mIHByb3BlcnR5LnVpID09PSAnc3RyaW5nJyA/IHsgd2lkZ2V0OiBwcm9wZXJ0eS51aSB9IDogbnVsbCksXG4gICAgICAgICAgLi4uKCFwcm9wZXJ0eS5mb3JtYXQgJiYgIXByb3BlcnR5LnVpICYmIEFycmF5LmlzQXJyYXkocHJvcGVydHkuZW51bSkgJiYgcHJvcGVydHkuZW51bS5sZW5ndGggPiAwID8geyB3aWRnZXQ6ICdzZWxlY3QnIH0gOiBudWxsKSxcbiAgICAgICAgICAuLi50aGlzLl9kZWZVaSxcbiAgICAgICAgICAuLi4ocHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLFxuICAgICAgICAgIC4uLnVpU2NoZW1hW3VpS2V5XSxcbiAgICAgICAgfSBhcyBTRlVJU2NoZW1hSXRlbVJ1bjtcbiAgICAgICAgLy8g57un5om/54i26IqC54K55biD5bGA5bGe5oCnXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICBpZiAocGFyZW50VWlTY2hlbWEuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkxhYmVsRml4ZWQpIHtcbiAgICAgICAgICAgICAgdWkuc3BhbkxhYmVsRml4ZWQgPSBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWxGaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1aS5zcGFuTGFiZWwpIHVpLnNwYW5MYWJlbCA9IHR5cGVvZiBwYXJlbnRVaVNjaGVtYS5zcGFuTGFiZWwgPT09ICd1bmRlZmluZWQnID8gNSA6IHBhcmVudFVpU2NoZW1hLnNwYW5MYWJlbDtcbiAgICAgICAgICAgIGlmICghdWkuc3BhbkNvbnRyb2wpIHVpLnNwYW5Db250cm9sID0gdHlwZW9mIHBhcmVudFVpU2NoZW1hLnNwYW5Db250cm9sID09PSAndW5kZWZpbmVkJyA/IDE5IDogcGFyZW50VWlTY2hlbWEuc3BhbkNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoIXVpLm9mZnNldENvbnRyb2wpXG4gICAgICAgICAgICAgIHVpLm9mZnNldENvbnRyb2wgPSB0eXBlb2YgcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50VWlTY2hlbWEub2Zmc2V0Q29udHJvbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdWkuc3BhbkxhYmVsID0gbnVsbDtcbiAgICAgICAgICB1aS5zcGFuQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgdWkub2Zmc2V0Q29udHJvbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpLndpZGdldCA9PT0gJ2RhdGUnICYmIHVpLmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZUVuZFByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW3VpLmVuZF07XG4gICAgICAgICAgaWYgKGRhdGVFbmRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgZGF0ZUVuZFByb3BlcnR5LnVpID0ge1xuICAgICAgICAgICAgICAuLi4oZGF0ZUVuZFByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgICAgd2lkZ2V0OiB1aS53aWRnZXQsXG4gICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVpLmVuZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5oZXJpdFVJKHVpKTtcbiAgICAgICAgaWYgKHVpLm9wdGlvbmFsSGVscCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdWkub3B0aW9uYWxIZWxwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0ge1xuICAgICAgICAgICAgICB0ZXh0OiB1aS5vcHRpb25hbEhlbHAsXG4gICAgICAgICAgICB9IGFzIFNGT3B0aW9uYWxIZWxwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvaCA9ICh1aS5vcHRpb25hbEhlbHAgPSB7XG4gICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgIGljb246ICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk6IDAuMTUsXG4gICAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICAgICAgICAgIC4uLnVpLm9wdGlvbmFsSGVscCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAob2guaTE4bikge1xuICAgICAgICAgICAgb2gudGV4dCA9IHRoaXMuZmFueWkob2guaTE4bik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb2gudGV4dCkge1xuICAgICAgICAgICAgdWkub3B0aW9uYWxIZWxwID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuaTE4bikge1xuICAgICAgICAgIHByb3BlcnR5LnRpdGxlID0gdGhpcy5mYW55aSh1aS5pMThuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodWkuZGVzY3JpcHRpb25JMThuKSB7XG4gICAgICAgICAgcHJvcGVydHkuZGVzY3JpcHRpb24gPSB0aGlzLmZhbnlpKHVpLmRlc2NyaXB0aW9uSTE4bik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgcHJvcGVydHkuX2Rlc2NyaXB0aW9uID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocHJvcGVydHkuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHVpLmhpZGRlbiA9IHR5cGVvZiB1aS5oaWRkZW4gPT09ICdib29sZWFuJyA/IHVpLmhpZGRlbiA6IGZhbHNlO1xuICAgICAgICBpZiAodWkuaGlkZGVuID09PSBmYWxzZSAmJiB1aS5hY2wgJiYgdGhpcy5hY2xTcnYgJiYgIXRoaXMuYWNsU3J2LmNhbih1aS5hY2wpKSB7XG4gICAgICAgICAgdWkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVpUmVzW3VpS2V5XSA9IHVpO1xuICAgICAgICBkZWxldGUgcHJvcGVydHkudWk7XG5cbiAgICAgICAgaWYgKHVpLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGlkeCA9IHNjaGVtYS5yZXF1aXJlZCEuaW5kZXhPZihrZXkpO1xuICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICBzY2hlbWEucmVxdWlyZWQhLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGNvbnN0IHVpU2NoZW1hSW5BcnIgPSAodWlTY2hlbWFbdWlLZXldIHx8IHt9KS4kaXRlbXMgfHwge307XG4gICAgICAgICAgdWkuJGl0ZW1zID0ge1xuICAgICAgICAgICAgLi4uKHByb3BlcnR5Lml0ZW1zLnVpIGFzIFNGVUlTY2hlbWFJdGVtKSxcbiAgICAgICAgICAgIC4uLnVpU2NoZW1hSW5BcnJbdWlLZXldLFxuICAgICAgICAgICAgLi4udWkuJGl0ZW1zLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaW5Gbihwcm9wZXJ0eS5pdGVtcywgcHJvcGVydHkuaXRlbXMsIHVpU2NoZW1hSW5BcnIsIHVpLiRpdGVtcywgdWkuJGl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eS5wcm9wZXJ0aWVzICYmIE9iamVjdC5rZXlzKHByb3BlcnR5LnByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgICAgIGluRm4ocHJvcGVydHksIHNjaGVtYSwgdWlTY2hlbWFbdWlLZXldIHx8IHt9LCB1aSwgdWkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5JZkZuID0gKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gc2NoZW1hLnByb3BlcnRpZXMhW2tleV07XG4gICAgICAgIGNvbnN0IHVpS2V5ID0gYCQke2tleX1gO1xuICAgICAgICByZXNvbHZlSWYocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5pdGVtcykge1xuICAgICAgICAgIGluSWZGbihwcm9wZXJ0eS5pdGVtcywgdWlbdWlLZXldLiRpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnR5LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpbklmRm4ocHJvcGVydHksIHVpW3VpS2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy51aSA9PSBudWxsKSB0aGlzLnVpID0ge307XG4gICAgdGhpcy5fZGVmVWkgPSB7XG4gICAgICBvbmx5VmlzdWFsOiB0aGlzLm9wdGlvbnMub25seVZpc3VhbCxcbiAgICAgIHNpemU6IHRoaXMub3B0aW9ucy5zaXplLFxuICAgICAgbGl2ZVZhbGlkYXRlOiB0aGlzLmxpdmVWYWxpZGF0ZSxcbiAgICAgIGZpcnN0VmlzdWFsOiB0aGlzLmZpcnN0VmlzdWFsLFxuICAgICAgLi4udGhpcy5vcHRpb25zLnVpLFxuICAgICAgLi4uX3NjaGVtYS51aSxcbiAgICAgIC4uLnRoaXMudWlbJyonXSxcbiAgICB9O1xuICAgIGlmICh0aGlzLm9ubHlWaXN1YWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2RlZlVpLm9ubHlWaXN1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJvb3RcbiAgICB0aGlzLl91aSA9IHsgLi4udGhpcy5fZGVmVWkgfTtcblxuICAgIGluRm4oX3NjaGVtYSwgX3NjaGVtYSwgdGhpcy51aSwgdGhpcy51aSwgdGhpcy5fdWkpO1xuXG4gICAgLy8gY29uZFxuICAgIHJlc29sdmVJZihfc2NoZW1hLCB0aGlzLl91aSk7XG4gICAgaW5JZkZuKF9zY2hlbWEsIHRoaXMuX3VpKTtcblxuICAgIHRoaXMuX3NjaGVtYSA9IF9zY2hlbWE7XG5cbiAgICBkaSh0aGlzLl91aSwgJ2NvdmVyIHNjaGVtYSAmIHVpJywgdGhpcy5fdWksIF9zY2hlbWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3ZlckJ1dHRvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX2J0biA9IHtcbiAgICAgIHJlbmRlcjogeyBzaXplOiAnZGVmYXVsdCcgfSxcbiAgICAgIC4uLnRoaXMubG9jYWxlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLmJ1dHRvbixcbiAgICAgIC4uLih0aGlzLmJ1dHRvbiBhcyBTRkJ1dHRvbiksXG4gICAgfTtcbiAgICBjb25zdCBmaXJzdEtleSA9IE9iamVjdC5rZXlzKHRoaXMuX3VpKS5maW5kKHcgPT4gdy5zdGFydHNXaXRoKCckJykpO1xuICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBidG5VaSA9IGZpcnN0S2V5ID8gdGhpcy5fdWlbZmlyc3RLZXldIDogdGhpcy5fZGVmVWk7XG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIhLmdyaWQpIHtcbiAgICAgICAgdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCA9IHtcbiAgICAgICAgICBvZmZzZXQ6IGJ0blVpLnNwYW5MYWJlbCxcbiAgICAgICAgICBzcGFuOiBidG5VaS5zcGFuQ29udHJvbCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeGVkIGxhYmVsXG4gICAgICBpZiAodGhpcy5fYnRuLnJlbmRlciEuc3BhbkxhYmVsRml4ZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9idG4ucmVuZGVyIS5zcGFuTGFiZWxGaXhlZCA9IGJ0blVpLnNwYW5MYWJlbEZpeGVkO1xuICAgICAgfVxuICAgICAgLy8g5Zu65a6a5qCH562+5a695bqm5pe277yM6Iul5LiN5oyH5a6a5qC35byP77yM5YiZ6buY6K6k5bGF5LitXG4gICAgICBpZiAoIXRoaXMuX2J0bi5yZW5kZXIhLmNsYXNzICYmIHR5cGVvZiBidG5VaS5zcGFuTGFiZWxGaXhlZCA9PT0gJ251bWJlcicgJiYgYnRuVWkuc3BhbkxhYmVsRml4ZWQgPiAwKSB7XG4gICAgICAgIHRoaXMuX2J0bi5yZW5kZXIhLmNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnRuLnJlbmRlciEuZ3JpZCA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZSkge1xuICAgICAgdGhpcy5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG5cbiAgICBkaSh0aGlzLl91aSwgJ2J1dHRvbiBwcm9wZXJ0eScsIHRoaXMuX2J0bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdG9yKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiAoY2hhbmdlcy5sb2FkaW5nIHx8IGNoYW5nZXMuZGlzYWJsZWQpKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFNjaGVtYSgpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkVHBsKHBhdGg6IHN0cmluZywgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlcnMuaGFzKHBhdGgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSBkZWZpbml0aW9uIFwiJHtwYXRofVwiIGN1c3RvbSB3aWRnZXRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVycy5zZXQocGF0aCwgdGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEN1c3RvbVJlbmRlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJzLmZvckVhY2goKHRwbCwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnJvb3RQcm9wZXJ0eSEuc2VhcmNoUHJvcGVydHkocGF0aCk7XG4gICAgICBpZiAocHJvcGVydHkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm9wZXJ0eS51aS5fcmVuZGVyID0gdHBsO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdG9yKG9wdGlvbnM6IHsgZW1pdEVycm9yPzogYm9vbGVhbjsgb25seVJvb3Q/OiBib29sZWFuIH0gPSB7IGVtaXRFcnJvcjogdHJ1ZSwgb25seVJvb3Q6IHRydWUgfSk6IHRoaXMge1xuICAgIGNvbnN0IGZuID0gKHByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHtcbiAgICAgIHByb3BlcnR5Ll9ydW5WYWxpZGF0aW9uKCk7XG4gICAgICBpZiAoIShwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHx8ICFwcm9wZXJ0eS5wcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eS5wcm9wZXJ0aWVzKSkge1xuICAgICAgICBwcm9wZXJ0eS5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiBmbihwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGtleSA9PiBmbigocHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAob3B0aW9ucy5vbmx5Um9vdCkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkhLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKHRoaXMucm9vdFByb3BlcnR5ISk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5yb290UHJvcGVydHkhLmVycm9ycztcbiAgICB0aGlzLl92YWxpZCA9ICEoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpO1xuICAgIGlmIChvcHRpb25zLmVtaXRFcnJvciAmJiAhdGhpcy5fdmFsaWQpIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIt+aWsCBTY2hlbWHvvIzkuIDoiKzpnIDopoHliqjmgIHkv67mlLkgU2NoZW1hIOafkOS4quWAvOaXtuWPr+S7peaWueS+v+iwg+eUqFxuICAgKi9cbiAgcmVmcmVzaFNjaGVtYShuZXdTY2hlbWE/OiBTRlNjaGVtYSwgbmV3VUk/OiBTRlVJU2NoZW1hKTogdGhpcyB7XG4gICAgaWYgKG5ld1NjaGVtYSkgdGhpcy5zY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgaWYgKG5ld1VJKSB0aGlzLnVpID0gbmV3VUk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hIHx8IHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFNjaGVtYWApO1xuICAgIGlmICh0aGlzLnNjaGVtYS51aSAmJiB0eXBlb2YgdGhpcy5zY2hlbWEudWkgPT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoYERvbid0IHN1cHBvcnQgc3RyaW5nIHdpdGggcm9vdCB1aSBwcm9wZXJ0eWApO1xuXG4gICAgdGhpcy5zY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuXG4gICAgdGhpcy5fZm9ybURhdGEgPSB7IC4uLnRoaXMuZm9ybURhdGEgfTtcblxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMudGVybWluYXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmNsZWFuUm9vdFN1YigpO1xuXG4gICAgdGhpcy5jb3ZlclByb3BlcnR5KCk7XG4gICAgdGhpcy5jb3ZlckJ1dHRvblByb3BlcnR5KCk7XG5cbiAgICB0aGlzLnJvb3RQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eSh0aGlzLl9zY2hlbWEsIHRoaXMuX3VpLCB0aGlzLmZvcm1EYXRhKTtcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVJlbmRlcigpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgdGhpcy5yb290UHJvcGVydHkudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9pdGVtID0geyAuLi4odGhpcy5jbGVhblZhbHVlID8gbnVsbCA6IHRoaXMuZm9ybURhdGEpLCAuLi52YWx1ZSB9O1xuICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLl9pdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZShlcnJvcnMgPT4ge1xuICAgICAgdGhpcy5fdmFsaWQgPSAhKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZm9ybUVycm9yLmVtaXQoZXJyb3JzISk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7ooajljZVcbiAgICogQHBhcmFtIFtlbWl0XSDmmK/lkKbop6blj5EgYGZvcm1SZXNldGAg5LqL5Lu277yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzZXQoZW1pdCA9IGZhbHNlKTogdGhpcyB7XG4gICAgdGhpcy5yb290UHJvcGVydHkhLnJlc2V0VmFsdWUodGhpcy5mb3JtRGF0YSwgZmFsc2UpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5mb3JtUmVzZXQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUm9vdFN1YigpIHtcbiAgICBpZiAoIXRoaXMucm9vdFByb3BlcnR5KSByZXR1cm47XG4gICAgdGhpcy5yb290UHJvcGVydHkuZXJyb3JzQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm9vdFByb3BlcnR5LnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJvb3RTdWIoKTtcbiAgICB0aGlzLnRlcm1pbmF0b3IuZGVzdHJveSgpO1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==