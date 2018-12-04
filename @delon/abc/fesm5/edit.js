import { animate, style, transition, trigger } from '@angular/animations';
import { NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, TemplateRef, Host, ElementRef, Renderer2, Optional, ContentChild, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { toNumber, InputNumber, InputBoolean, deepGet, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEConfig = /** @class */ (function () {
    function SEConfig() {
        /**
         * 大小，默认：`default`
         * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
         */
        this.size = 'default';
        /**
         * 布局类型，等同 `nzLayout`
         * - `inline` 时强制大小为 `compact`
         */
        this.nzLayout = 'horizontal';
        /**
         * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
        /**
         * 标签文本宽度，单位：`px`，默认：`150`
         */
        this.labelWidth = 150;
        /**
         * 是否立即呈现错误视觉
         */
        this.firstVisual = false;
    }
    return SEConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEContainerComponent = /** @class */ (function () {
    //#endregion
    function SEContainerComponent(cog) {
        //#region fields
        this._title = '';
        this.line = false;
        Object.assign(this, cog);
    }
    Object.defineProperty(SEContainerComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzLayout === 'horizontal' ? this._gutter : 0;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var a = toNumber(value, 0);
            if (a <= 0)
                return;
            this._col = toNumber(value, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "nzLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzLayout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzLayout = value;
            if (value === 'inline') {
                this.size = 'compact';
            }
        },
        enumerable: true,
        configurable: true
    });
    SEContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-container, [se-container]',
                    template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SEContainerComponent.ctorParameters = function () { return [
        { type: SEConfig }
    ]; };
    SEContainerComponent.propDecorators = {
        title: [{ type: Input }],
        gutter: [{ type: Input }],
        col: [{ type: Input, args: ['se-container',] }],
        labelWidth: [{ type: Input }],
        nzLayout: [{ type: Input }],
        size: [{ type: Input }],
        firstVisual: [{ type: Input }],
        line: [{ type: Input }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], SEContainerComponent.prototype, "firstVisual", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SEContainerComponent.prototype, "line", void 0);
    return SEContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SEErrorComponent = /** @class */ (function () {
    function SEErrorComponent() {
    }
    SEErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-error',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('errorAnt', [
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)',
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                })),
                            ]),
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)',
                                })),
                            ]),
                        ]),
                    ],
                    template: "\n  <div [@errorAnt]>\n    <ng-content></ng-content>\n  </div>",
                    host: {
                        '[class.ant-form-explain]': 'true',
                    },
                    styles: ["\n      :host {\n        display: block;\n      }\n    "]
                }] }
    ];
    return SEErrorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SETitleComponent = /** @class */ (function () {
    function SETitleComponent(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[se-title] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SETitleComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var gutter = this.parent.gutter;
        var el = this.el;
        this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
        this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    SETitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SETitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-title, [se-title]',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.se__title]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    SETitleComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return SETitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls = "se";
/** @type {?} */
var nextUniqueId = 0;
var SEComponent = /** @class */ (function () {
    function SEComponent(parent, rep, el, ren, cd) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.cd = cd;
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.invalid = false;
        this.labelWidth = null;
        this._label = '';
        this.required = false;
        this.controlClass = '';
        this._id = "_se-" + nextUniqueId++;
        this._autoId = true;
        if (parent == null) {
            throw new Error("[se] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SEComponent.prototype, "label", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._label = null;
                this._labelTpl = value;
            }
            else {
                this._label = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "id", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
            this._autoId = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "paddingLeft", {
        // #endregion
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "showErr", {
        get: /**
         * @return {?}
         */
        function () {
            return this.invalid && this.parent.size !== 'compact' && !!this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngModel || this.formControlName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SEComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cd = _a.cd;
        this.labelWidth = parent.labelWidth;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal'
            ? this.rep.genCls(col != null ? col : parent.col)
            : [];
        clsMap.push.apply(clsMap, __spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if (this.line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.bindModel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ngControl || this.status$)
            return;
        this.status$ = this.ngControl.statusChanges.subscribe(function (res) {
            /** @type {?} */
            var status = res !== 'VALID';
            if (!_this.onceFlag || _this.invalid === status) {
                _this.onceFlag = true;
                return;
            }
            _this.invalid = status;
            _this.cd.detectChanges();
        });
        if (this._autoId) {
            /** @type {?} */
            var control = /** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement'));
            if (control) {
                control.id = this._id;
            }
        }
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited)
            this.setClass().bindModel();
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass().bindModel();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.status$) {
            this.status$.unsubscribe();
        }
    };
    SEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se',
                    template: "<div class=\"ant-form-item-label se__label\"\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    {{_label}}\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip nz-icon type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SEComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SEComponent.propDecorators = {
        ngModel: [{ type: ContentChild, args: [NgModel,] }],
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        optional: [{ type: Input }],
        optionalHelp: [{ type: Input }],
        error: [{ type: Input }],
        extra: [{ type: Input }],
        label: [{ type: Input }],
        col: [{ type: Input }],
        required: [{ type: Input }],
        controlClass: [{ type: Input }],
        id: [{ type: Input }],
        line: [{ type: Input }],
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
        showErr: [{ type: HostBinding, args: ['class.ant-form-item-with-help',] }]
    };
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEComponent.prototype, "col", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SEComponent.prototype, "required", void 0);
    __decorate([
        InputBoolean(null),
        __metadata("design:type", Boolean)
    ], SEComponent.prototype, "line", void 0);
    return SEComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [
    SEContainerComponent,
    SEComponent,
    SEErrorComponent,
    SETitleComponent,
];
var SEModule = /** @class */ (function () {
    function SEModule() {
    }
    /**
     * @return {?}
     */
    SEModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SEModule, providers: [SEConfig] };
    };
    SEModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return SEModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SEContainerComponent, SEErrorComponent, SETitleComponent, SEComponent, SEConfig, SEModule };

//# sourceMappingURL=edit.js.map