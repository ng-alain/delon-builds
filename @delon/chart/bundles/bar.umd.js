/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/bar', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.bar = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,rxjs,operators,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var G2BarComponent = /** @class */ (function () {
        function G2BarComponent(el, cd, zone) {
            this.el = el;
            this.cd = cd;
            this.zone = zone;
            this.autoHideXLabels = false;
            this.resize$ = null;
            // #region fields
            this._title = '';
            this.color = 'rgba(24, 144, 255, 0.85)';
            this._height = 0;
            this._autoLabel = true;
        }
        Object.defineProperty(G2BarComponent.prototype, "title", {
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
                this.cd.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2BarComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                return this._height;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._height = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2BarComponent.prototype, "autoLabel", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._autoLabel = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2BarComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var canvasWidth = this.el.nativeElement.clientWidth;
                /** @type {?} */
                var minWidth = this.data.length * 30;
                if (canvasWidth <= minWidth) {
                    if (!this.autoHideXLabels) {
                        this.autoHideXLabels = true;
                    }
                }
                else if (this.autoHideXLabels) {
                    this.autoHideXLabels = false;
                }
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: this._title || this._titleTpl ? this.height - 41 : this.height,
                    legend: null,
                    padding: this.padding || 'auto',
                });
                chart.axis('x', !this.autoHideXLabels);
                chart.axis('y', {
                    title: false,
                    line: false,
                    tickLine: false,
                });
                chart.source(this.data, {
                    x: {
                        type: 'cat',
                    },
                    y: {
                        min: 0,
                    },
                });
                chart.tooltip({
                    showTitle: false,
                });
                chart
                    .interval()
                    .position('x*y')
                    .color(this.color)
                    .tooltip('x*y', function (x, y) {
                    return {
                        name: x,
                        value: y,
                    };
                });
                chart.render();
                this.chart = chart;
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.installResizeEvent = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._autoLabel || this.resize$)
                    return;
                this.resize$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(200))
                    .subscribe(function () { return _this.runInstall(); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.installResizeEvent();
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.resize$)
                    this.resize$.unsubscribe();
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }
            };
        G2BarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-bar',
                        template: "<ng-container *ngIf=\"_title; else _titleTpl\">\n  <h4 style=\"margin-bottom:20px\">{{_title}}</h4>\n</ng-container>\n<div #container></div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2BarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2BarComponent.propDecorators = {
            title: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            autoLabel: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        return G2BarComponent;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2BarComponent];
    var G2BarModule = /** @class */ (function () {
        function G2BarModule() {
        }
        /**
         * @return {?}
         */
        G2BarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2BarModule, providers: [] };
            };
        G2BarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2BarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2BarComponent = G2BarComponent;
    exports.G2BarModule = G2BarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=bar.umd.js.map