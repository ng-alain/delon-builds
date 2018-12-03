/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/forms'), require('@delon/theme'), require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/edit', ['exports', '@angular/animations', '@angular/forms', '@delon/theme', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.edit = {}),global.ng.animations,global.ng.forms,global.delon.theme,global.ng.core,global.ng.common,global.ngZorro.antd,global.delon.util));
}(this, (function (exports,animations,forms,theme,core,common,ngZorroAntd,util) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
             */ function () {
                return this.nzLayout === 'horizontal' ? this._gutter : 0;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._gutter = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEContainerComponent.prototype, "col", {
            get: /**
             * @return {?}
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var a = util.toNumber(value, 0);
                if (a <= 0)
                    return;
                this._col = util.toNumber(value, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEContainerComponent.prototype, "nzLayout", {
            get: /**
             * @return {?}
             */ function () {
                return this._nzLayout;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._nzLayout = value;
                if (value === 'inline') {
                    this.size = 'compact';
                }
            },
            enumerable: true,
            configurable: true
        });
        SEContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-container, [se-container]',
                        template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SEContainerComponent.ctorParameters = function () {
            return [
                { type: SEConfig }
            ];
        };
        SEContainerComponent.propDecorators = {
            title: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            col: [{ type: core.Input, args: ['se-container',] }],
            labelWidth: [{ type: core.Input }],
            nzLayout: [{ type: core.Input }],
            size: [{ type: core.Input }],
            firstVisual: [{ type: core.Input }],
            line: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEContainerComponent.prototype, "labelWidth", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], SEContainerComponent.prototype, "firstVisual", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SEContainerComponent.prototype, "line", void 0);
        return SEContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SEErrorComponent = /** @class */ (function () {
        function SEErrorComponent() {
        }
        SEErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-error',
                        animations: [
                            animations.trigger('errorAnt', [
                                animations.transition('void => *', [
                                    animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-5px)',
                                    }),
                                    animations.animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', animations.style({
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    })),
                                ]),
                                animations.transition('* => void', [
                                    animations.style({
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    }),
                                    animations.animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-5px)',
                                    })),
                                ]),
                            ]),
                        ],
                        template: "\n    <div [@errorAnt]><ng-content></ng-content></div>\n  ",
                        host: {
                            '[class.ant-form-explain]': 'true',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        return SEErrorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            { type: core.Component, args: [{
                        selector: 'se-title, [se-title]',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.se__title]': 'true',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SETitleComponent.ctorParameters = function () {
            return [
                { type: SEContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        return SETitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
             */ function (value) {
                this._id = value;
                this._autoId = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "paddingLeft", {
            // #endregion
            get: 
            // #endregion
            /**
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
             */ function () {
                return this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "showErr", {
            get: /**
             * @return {?}
             */ function () {
                return this.invalid && this.parent.size !== 'compact' && !!this.error;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "ngControl", {
            get: /**
             * @return {?}
             */ function () {
                return this.ngModel || this.formControlName;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        SEComponent.prototype.setClass = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
            function () {
                var _a = ( /** @type {?} */(this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cd = _a.cd;
                ( /** @type {?} */(this)).labelWidth = parent.labelWidth;
                clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
                clsMap.length = 0;
                /** @type {?} */
                var repCls = parent.nzLayout === 'horizontal'
                    ? ( /** @type {?} */(this)).rep.genCls(col != null ? col : parent.col)
                    : [];
                clsMap.push.apply(clsMap, __spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
                if (( /** @type {?} */(this)).line || parent.line) {
                    clsMap.push(prefixCls + "__line");
                }
                clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
                cd.detectChanges();
                return ( /** @type {?} */(this));
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
                    var control = ( /** @type {?} */(util.deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
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
            { type: core.Component, args: [{
                        selector: 'se',
                        template: "<div class=\"ant-form-item-label se__label\"\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    {{_label}}\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip nz-icon type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SEComponent.ctorParameters = function () {
            return [
                { type: SEContainerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
                { type: theme.ResponsiveService },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        SEComponent.propDecorators = {
            ngModel: [{ type: core.ContentChild, args: [forms.NgModel,] }],
            formControlName: [{ type: core.ContentChild, args: [forms.FormControlName,] }],
            optional: [{ type: core.Input }],
            optionalHelp: [{ type: core.Input }],
            error: [{ type: core.Input }],
            extra: [{ type: core.Input }],
            label: [{ type: core.Input }],
            col: [{ type: core.Input }],
            required: [{ type: core.Input }],
            controlClass: [{ type: core.Input }],
            id: [{ type: core.Input }],
            line: [{ type: core.Input }],
            paddingLeft: [{ type: core.HostBinding, args: ['style.padding-left.px',] }],
            paddingRight: [{ type: core.HostBinding, args: ['style.padding-right.px',] }],
            showErr: [{ type: core.HostBinding, args: ['class.ant-form-item-with-help',] }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEComponent.prototype, "col", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SEComponent.prototype, "required", void 0);
        __decorate([
            util.InputBoolean(null),
            __metadata("design:type", Boolean)
        ], SEComponent.prototype, "line", void 0);
        return SEComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SEModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.SEContainerComponent = SEContainerComponent;
    exports.SEErrorComponent = SEErrorComponent;
    exports.SETitleComponent = SETitleComponent;
    exports.SEComponent = SEComponent;
    exports.SEConfig = SEConfig;
    exports.SEModule = SEModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=edit.umd.js.map