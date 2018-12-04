/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/number-info', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['number-info'] = {}),global.ng.core,global.ng.common,global.ngZorroAntd,global.delon.util));
}(this, (function (exports,core,common,ngZorroAntd,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumberInfoComponent = /** @class */ (function () {
        function NumberInfoComponent(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this._title = '';
            this._subTitle = '';
            this._total = '';
            this._isSubTotal = false;
            this._subTotal = '';
            /**
             * 状态样式
             */
            this.theme = 'light';
            this._gap = 8;
            this._classMap = [];
        }
        Object.defineProperty(NumberInfoComponent.prototype, "title", {
            /** 标题 */
            set: /**
             * 标题
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                }
                else
                    this._title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NumberInfoComponent.prototype, "subTitle", {
            /** 子标题 */
            set: /**
             * 子标题
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._subTitle = null;
                    this._subTitleTpl = value;
                }
                else
                    this._subTitle = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NumberInfoComponent.prototype, "total", {
            /** 总量 */
            set: /**
             * 总量
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._total = null;
                    this._totalTpl = value;
                }
                else
                    this._total = '' + value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NumberInfoComponent.prototype, "subTotal", {
            /** 总量后缀 */
            set: /**
             * 总量后缀
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._subTotal = null;
                    this._subTotalTpl = value;
                }
                else
                    this._subTotal = value;
                this._isSubTotal = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NumberInfoComponent.prototype, "gap", {
            /** 设置数字和描述直接的间距（像素） */
            get: /**
             * 设置数字和描述直接的间距（像素）
             * @return {?}
             */ function () {
                return this._gap;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._gap = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NumberInfoComponent.prototype.setClass = /**
         * @return {?}
         */
            function () {
                var _a;
                util.updateHostClass(this.el.nativeElement, this.renderer, (_a = {
                    'number-info': true
                },
                    _a["number-info__" + this.theme] = true,
                    _a), true);
                this.cd.detectChanges();
            };
        /**
         * @return {?}
         */
        NumberInfoComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setClass();
            };
        NumberInfoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'number-info',
                        template: "\n  <div *ngIf=\"_title || _titleTpl\" class=\"number-info__title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n  <div *ngIf=\"_subTitle || _subTitleTpl\" class=\"number-info__title-sub\"><ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container></div>\n  <div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n    <span class=\"number-info__value-text\"><ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em></span>\n    <span *ngIf=\"status || _isSubTotal\" class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n      <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n    </span>\n  </div>\n  ",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NumberInfoComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        NumberInfoComponent.propDecorators = {
            title: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            subTotal: [{ type: core.Input }],
            suffix: [{ type: core.Input }],
            status: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            gap: [{ type: core.Input }]
        };
        return NumberInfoComponent;
    }());

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
    /** @type {?} */
    var COMPONENTS = [NumberInfoComponent];
    var NumberInfoModule = /** @class */ (function () {
        function NumberInfoModule() {
        }
        /**
         * @return {?}
         */
        NumberInfoModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: NumberInfoModule, providers: [] };
            };
        NumberInfoModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return NumberInfoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NumberInfoComponent = NumberInfoComponent;
    exports.NumberInfoModule = NumberInfoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=number-info.umd.js.map