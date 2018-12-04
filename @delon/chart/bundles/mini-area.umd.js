/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-area', ['exports', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-area'] = {}),global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var G2MiniAreaComponent = /** @class */ (function () {
        function G2MiniAreaComponent(zone) {
            this.zone = zone;
            // #region fields
            this.color = 'rgba(24, 144, 255, 0.2)';
            this.borderColor = '#1890FF';
            this._borderWidth = 2;
            this._fit = true;
            this._line = false;
            this._animate = true;
            this.padding = [8, 8, 8, 8];
            this.yTooltipSuffix = '';
        }
        Object.defineProperty(G2MiniAreaComponent.prototype, "borderWidth", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._borderWidth = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2MiniAreaComponent.prototype, "height", {
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
        Object.defineProperty(G2MiniAreaComponent.prototype, "fit", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._fit = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2MiniAreaComponent.prototype, "line", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._line = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2MiniAreaComponent.prototype, "animate", {
            get: /**
             * @return {?}
             */ function () {
                return this._animate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._animate = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: this._fit,
                    height: +this.height,
                    animate: this.animate,
                    padding: this.padding,
                    legend: null,
                });
                if (!this.xAxis && !this.yAxis) {
                    chart.axis(false);
                }
                if (this.xAxis) {
                    chart.axis('x', this.xAxis);
                }
                else {
                    chart.axis('x', false);
                }
                if (this.yAxis) {
                    chart.axis('y', this.yAxis);
                }
                else {
                    chart.axis('y', false);
                }
                /** @type {?} */
                var dataConfig = {
                    x: {
                        type: 'cat',
                        range: [0, 1],
                        xAxis: this.xAxis,
                    },
                    y: {
                        min: 0,
                        yAxis: this.yAxis,
                    },
                };
                chart.tooltip({
                    showTitle: false,
                    hideMarkders: false,
                    'g2-tooltip': { padding: 4 },
                    'g2-tooltip-list-item': { margin: "0px 4px" },
                });
                /** @type {?} */
                var view = chart.view();
                view.source(this.data, dataConfig);
                view
                    .area()
                    .position('x*y')
                    .color(this.color)
                    .tooltip('x*y', function (x, y) {
                    return {
                        name: x,
                        value: y + _this.yTooltipSuffix,
                    };
                })
                    .shape('smooth')
                    .style({ fillOpacity: 1 });
                if (this._line) {
                    /** @type {?} */
                    var view2 = chart.view();
                    view2.source(this.data, dataConfig);
                    view2
                        .line()
                        .position('x*y')
                        .color(this.borderColor)
                        .size(this._borderWidth)
                        .shape('smooth');
                    view2.tooltip(false);
                }
                chart.render();
                this.chart = chart;
            };
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }
            };
        G2MiniAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-area',
                        template: "<div #container></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2MiniAreaComponent.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        G2MiniAreaComponent.propDecorators = {
            color: [{ type: core.Input }],
            borderColor: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            fit: [{ type: core.Input }],
            line: [{ type: core.Input }],
            animate: [{ type: core.Input }],
            xAxis: [{ type: core.Input }],
            yAxis: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            yTooltipSuffix: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        return G2MiniAreaComponent;
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
    var COMPONENTS = [G2MiniAreaComponent];
    var G2MiniAreaModule = /** @class */ (function () {
        function G2MiniAreaModule() {
        }
        /**
         * @return {?}
         */
        G2MiniAreaModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2MiniAreaModule, providers: [] };
            };
        G2MiniAreaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2MiniAreaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2MiniAreaComponent = G2MiniAreaComponent;
    exports.G2MiniAreaModule = G2MiniAreaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mini-area.umd.js.map