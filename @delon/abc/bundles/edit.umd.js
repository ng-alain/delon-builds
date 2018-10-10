/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.4-8e87bff
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/animations'), require('@angular/forms'), require('@delon/theme'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/edit', ['exports', '@angular/core', '@delon/util', '@angular/animations', '@angular/forms', '@delon/theme', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.edit = {}),global.ng.core,global.delon.util,global.ng.animations,global.ng.forms,global.delon.theme,global.ng.common,global.ngZorro.antd));
}(this, (function (exports,core,util,animations,forms,theme,common,ngZorroAntd) { 'use strict';

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
                        preserveWhitespaces: false
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SEErrorComponent = /** @class */ (function () {
        function SEErrorComponent() {
        }
        SEErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-error',
                        preserveWhitespaces: false,
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
            { type: core.Component, args: [{
                        selector: 'se-title, [se-title]',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.se__title]': 'true',
                        }
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
            get: /**
             * @return {?}
             */ function () {
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
                    var control = /** @type {?} */ (util.deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement'));
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
                        template: "<div class=\"ant-form-item-label se__label\"\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    {{_label}}\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                        preserveWhitespaces: false,
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.SEContainerComponent = SEContainerComponent;
    exports.SEErrorComponent = SEErrorComponent;
    exports.SETitleComponent = SETitleComponent;
    exports.SEComponent = SEComponent;
    exports.SEConfig = SEConfig;
    exports.SEModule = SEModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZWRpdC9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZWRpdC9lZGl0LWVycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lZGl0L2VkaXQtdGl0bGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZWRpdC9lZGl0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTRUNvbmZpZyB7XG4gIC8qKlxuICAgKiDDpcKkwqfDpcKwwo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZGVmYXVsdGBcbiAgICogLSBgY29tcGFjdGAgw6fCtMKnw6XCh8KRw6XCnsKLw6/CvMKMw6XCvMK6w6XCiMK2w6XCv8K9w6fClcKlIGBlcnJvcmDDo8KAwoFgZXh0cmFgIMOlwrHClcOnwqTCulxuICAgKi9cbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICogw6XCuMKDw6XCscKAw6fCscK7w6XCnsKLw6/CvMKMw6fCrcKJw6XCkMKMIGBuekxheW91dGBcbiAgICogLSBgaW5saW5lYCDDpsKXwrbDpcK8wrrDpcKIwrbDpcKkwqfDpcKwwo/DpMK4wrogYGNvbXBhY3RgXG4gICAqL1xuICBuekxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuICAvKipcbiAgICogw6nCl8K0w6jCt8Kdw6/CvMKMw6XCvcKTIGBuekxheW91dDpob3Jpem9udGFsYCDDpsKXwrbDpsKcwonDpsKVwojDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzJgXG4gICAqL1xuICBndXR0ZXI/ID0gMzI7XG4gIC8qKlxuICAgKiDDpcKIwpfDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMmBcbiAgICovXG4gIGNvbD8gPSAyO1xuICAvKipcbiAgICogw6bCoMKHw6fCrcK+w6bClsKHw6bCnMKsw6XCrsK9w6XCusKmw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaYHB4YMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxNTBgXG4gICAqL1xuICBsYWJlbFdpZHRoPyA9IDE1MDtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOnwqvCi8Olwo3Cs8OlwpHCiMOnwo7CsMOpwpTCmcOowq/Cr8OowqfChsOowqfCiVxuICAgKi9cbiAgZmlyc3RWaXN1YWw/ID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRUNvbmZpZyB9IGZyb20gJy4vZWRpdC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJylcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgYSA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICB9XG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgbGFiZWxXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGZpcnN0VmlzdWFsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsaW5lID0gZmFsc2U7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBTRUNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1lcnJvcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXJyb3JBbnQnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbQGVycm9yQW50XT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PmAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWV4cGxhaW5dJzogJ3RydWUnLFxuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNFRXJyb3JDb21wb25lbnQge31cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS10aXRsZSwgW3NlLXRpdGxlXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNlX190aXRsZV0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2UtdGl0bGVdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLnBhcmVudDtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBDb250ZW50Q2hpbGQsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcEdldCwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzZWA7XG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXR1cyQ6IFN1YnNjcmlwdGlvbjtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsKVxuICBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw6IE5nTW9kZWw7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKVxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbmNlRmxhZyA9IGZhbHNlO1xuICBpbnZhbGlkID0gZmFsc2U7XG4gIGxhYmVsV2lkdGggPSBudWxsO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KClcbiAgb3B0aW9uYWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBvcHRpb25hbEhlbHA6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBlcnJvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBzdHJpbmc7XG5cbiAgX2xhYmVsID0gJyc7XG4gIF9sYWJlbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhYmVsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKG51bGwpXG4gIGNvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIHRoaXMuX2F1dG9JZCA9IGZhbHNlO1xuICB9XG5cbiAgX2lkID0gYF9zZS0ke25leHRVbmlxdWVJZCsrfWA7XG4gIF9hdXRvSWQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcbiAgbGluZTogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHAnKVxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmIHRoaXMucGFyZW50LnNpemUgIT09ICdjb21wYWN0JyAmJiAhIXRoaXMuZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdDb250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5uZ01vZGVsIHx8IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASG9zdCgpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkIH0gPSB0aGlzO1xuICAgIHRoaXMubGFiZWxXaWR0aCA9IHBhcmVudC5sYWJlbFdpZHRoO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IHRoaXMucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2wpXG4gICAgICAgIDogW107XG4gICAgY2xzTWFwLnB1c2goYGFudC1mb3JtLWl0ZW1gLCAuLi5yZXBDbHMsIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAodGhpcy5saW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgYmluZE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5zdGF0dXMkKSByZXR1cm47XG5cbiAgICB0aGlzLnN0YXR1cyQgPSB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzICE9PSAnVkFMSUQnO1xuICAgICAgaWYgKCF0aGlzLm9uY2VGbGFnIHx8IHRoaXMuaW52YWxpZCA9PT0gc3RhdHVzKSB7XG4gICAgICAgIHRoaXMub25jZUZsYWcgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmludmFsaWQgPSBzdGF0dXM7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gZGVlcEdldChcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvcixcbiAgICAgICAgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnLFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uY2VGbGFnID0gdGhpcy5wYXJlbnQuZmlyc3RWaXN1YWw7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyQpIHtcbiAgICAgIHRoaXMuc3RhdHVzJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbmZpZyB9IGZyb20gJy4vZWRpdC5jb25maWcnO1xuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0VFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0VUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC10aXRsZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBTRUNvbnRhaW5lckNvbXBvbmVudCxcbiAgU0VDb21wb25lbnQsXG4gIFNFRXJyb3JDb21wb25lbnQsXG4gIFNFVGl0bGVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU0VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU0VNb2R1bGUsIHByb3ZpZGVyczogW1NFQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVtcGxhdGVSZWYiLCJ0b051bWJlciIsIkNvbXBvbmVudCIsIklucHV0IiwiSW5wdXROdW1iZXIiLCJJbnB1dEJvb2xlYW4iLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsInN0eWxlIiwiYW5pbWF0ZSIsIkhvc3QiLCJPcHRpb25hbCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJkZWVwR2V0IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJSZXNwb25zaXZlU2VydmljZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiQ29udGVudENoaWxkIiwiTmdNb2RlbCIsIkZvcm1Db250cm9sTmFtZSIsIkhvc3RCaW5kaW5nIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiLCJOZ1pvcnJvQW50ZE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esd0JBb0MyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdB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