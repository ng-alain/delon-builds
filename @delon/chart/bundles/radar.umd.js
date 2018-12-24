/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/radar', ['exports', '@angular/common', '@angular/core', '@delon/util', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.radar = {}),global.ng.common,global.ng.core,global.delon.util,global['ng-zorro-antd']));
}(this, (function (exports,common,core,util,ngZorroAntd) { 'use strict';

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
    var G2RadarComponent = /** @class */ (function () {
        // #endregion
        function G2RadarComponent(cdr) {
            this.cdr = cdr;
            this.legendData = [];
            // #region fields
            this.delay = 0;
            this.height = 0;
            this.padding = [44, 30, 16, 30];
            this.hasLegend = true;
            this.tickCount = 4;
            this.data = [];
            this.colors = [
                '#1890FF',
                '#FACC14',
                '#2FC25B',
                '#8543E0',
                '#F04864',
                '#13C2C2',
                '#fa8c16',
                '#a0d911',
            ];
        }
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.getHeight = /**
         * @return {?}
         */
            function () {
                return this.height - (this.hasLegend ? 80 : 22);
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a = this, node = _a.node, padding = _a.padding;
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: node.nativeElement,
                    forceFit: true,
                    height: this.getHeight(),
                    padding: padding,
                });
                chart.coord('polar');
                chart.legend(false);
                chart.axis('label', {
                    line: null,
                    labelOffset: 8,
                    labels: {
                        label: {
                            fill: 'rgba(0, 0, 0, .65)',
                        },
                    },
                    grid: {
                        line: {
                            stroke: '#e9e9e9',
                            lineWidth: 1,
                            lineDash: [0, 0],
                        },
                    },
                });
                chart.axis('value', {
                    grid: {
                        type: 'polygon',
                        line: {
                            stroke: '#e9e9e9',
                            lineWidth: 1,
                            lineDash: [0, 0],
                        },
                    },
                    labels: {
                        label: {
                            fill: 'rgba(0, 0, 0, .65)',
                        },
                    },
                });
                chart.filter('name', function (name) {
                    /** @type {?} */
                    var legendItem = _this.legendData.find(function (w) { return w.name === name; });
                    return legendItem ? legendItem.checked !== false : true;
                });
                chart
                    .line()
                    .position('label*value');
                chart
                    .point()
                    .position('label*value')
                    .shape('circle')
                    .size(3);
                chart.render();
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, colors = _a.colors, tickCount = _a.tickCount;
                if (!chart || !data || data.length <= 0)
                    return;
                chart.set('height', this.getHeight());
                chart.set('padding', padding);
                chart.source(data, {
                    value: {
                        min: 0,
                        tickCount: tickCount,
                    },
                });
                chart.get('geoms').forEach(function (g) {
                    g.color('name', colors);
                });
                chart.repaint();
                this.genLegend();
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.genLegend = /**
         * @return {?}
         */
            function () {
                var _a = this, hasLegend = _a.hasLegend, cdr = _a.cdr, chart = _a.chart;
                if (!hasLegend)
                    return;
                this.legendData = chart.get('geoms')[0].get('dataArray').map(function (item) {
                    /** @type {?} */
                    var origin = item[0]._origin;
                    /** @type {?} */
                    var result = {
                        name: origin.name,
                        color: item[0].color,
                        checked: true,
                        value: item.reduce(function (p, n) { return p + n._origin.value; }, 0),
                    };
                    return result;
                });
                cdr.detectChanges();
            };
        /**
         * @param {?} i
         * @return {?}
         */
        G2RadarComponent.prototype._click = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                var _a = this, legendData = _a.legendData, chart = _a.chart;
                legendData[i].checked = !legendData[i].checked;
                chart.repaint();
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () { return _this.install(); }, this.delay);
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.legendData.forEach(function (i) { return i.checked = true; });
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                }
            };
        G2RadarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-radar',
                        template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\"\n    (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                        host: { '[class.g2-radar]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2RadarComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        G2RadarComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container',] }],
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            padding: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            tickCount: [{ type: core.Input }],
            data: [{ type: core.Input }],
            colors: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2RadarComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2RadarComponent.prototype, "height", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2RadarComponent.prototype, "hasLegend", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2RadarComponent.prototype, "tickCount", void 0);
        return G2RadarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2RadarComponent];
    var G2RadarModule = /** @class */ (function () {
        function G2RadarModule() {
        }
        G2RadarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2RadarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2RadarComponent = G2RadarComponent;
    exports.G2RadarModule = G2RadarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=radar.umd.js.map