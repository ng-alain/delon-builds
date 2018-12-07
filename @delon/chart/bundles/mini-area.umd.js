/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-area', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-area'] = {}),global.ng.common,global.ng.core,global.delon.util));
}(this, (function (exports,common,core,util) { 'use strict';

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
    var G2MiniAreaComponent = /** @class */ (function () {
        // #endregion
        function G2MiniAreaComponent(el) {
            this.el = el;
            // #region fields
            this.delay = 0;
            this.color = 'rgba(24, 144, 255, 0.2)';
            this.borderColor = '#1890FF';
            this.borderWidth = 2;
            this.fit = true;
            this.line = false;
            this.animate = true;
            this.padding = [8, 8, 8, 8];
            this.data = [];
            this.yTooltipSuffix = '';
        }
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _a = this, el = _a.el, fit = _a.fit, height = _a.height, animate = _a.animate, padding = _a.padding, xAxis = _a.xAxis, yAxis = _a.yAxis, yTooltipSuffix = _a.yTooltipSuffix, data = _a.data, color = _a.color, line = _a.line, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: el.nativeElement,
                    forceFit: fit,
                    height: height,
                    animate: animate,
                    padding: padding,
                    legend: null,
                });
                if (!xAxis && !yAxis) {
                    chart.axis(false);
                }
                if (xAxis) {
                    chart.axis('x', xAxis);
                }
                else {
                    chart.axis('x', false);
                }
                if (yAxis) {
                    chart.axis('y', yAxis);
                }
                else {
                    chart.axis('y', false);
                }
                chart.tooltip({
                    'showTitle': false,
                    'hideMarkders': false,
                    'g2-tooltip': { padding: 4 },
                    'g2-tooltip-list-item': { margin: "0px 4px" },
                });
                /** @type {?} */
                var view = chart.view();
                view
                    .area()
                    .position('x*y')
                    .color(color)
                    .tooltip('x*y', function (x, y) {
                    return {
                        name: x,
                        value: y + yTooltipSuffix,
                    };
                })
                    .shape('smooth')
                    .style({ fillOpacity: 1 });
                if (line) {
                    /** @type {?} */
                    var view2 = chart.view();
                    view2
                        .line()
                        .position('x*y')
                        .color(borderColor)
                        .size(borderWidth)
                        .shape('smooth');
                    view2.tooltip(false);
                }
                chart.render();
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, xAxis = _a.xAxis, yAxis = _a.yAxis, padding = _a.padding, data = _a.data, color = _a.color, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
                if (!chart)
                    return;
                /** @type {?} */
                var dataConfig = {
                    x: {
                        type: 'cat',
                        range: [0, 1],
                        xAxis: xAxis,
                    },
                    y: {
                        min: 0,
                        yAxis: yAxis,
                    },
                };
                /** @type {?} */
                var views = chart.get('views');
                views.forEach(function (v) {
                    v.changeData(data, dataConfig);
                });
                views[0].get('geoms')[0].color(color);
                // line
                if (views.length > 1) {
                    views[1].get('geoms')[0].color(borderColor).size(borderWidth);
                }
                chart.set('padding', padding);
                chart.repaint();
            };
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () { return _this.install(); }, this.delay);
            };
        /**
         * @return {?}
         */
        G2MiniAreaComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.attachChart();
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
                }
            };
        G2MiniAreaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-area',
                        template: "",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2MiniAreaComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        G2MiniAreaComponent.propDecorators = {
            delay: [{ type: core.Input }],
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
            yTooltipSuffix: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "borderWidth", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "height", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "fit", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "line", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2MiniAreaComponent.prototype, "animate", void 0);
        return G2MiniAreaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2MiniAreaComponent];
    var G2MiniAreaModule = /** @class */ (function () {
        function G2MiniAreaModule() {
        }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2MiniAreaComponent = G2MiniAreaComponent;
    exports.G2MiniAreaModule = G2MiniAreaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mini-area.umd.js.map