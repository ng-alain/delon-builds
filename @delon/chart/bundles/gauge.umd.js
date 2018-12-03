/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/gauge', ['exports', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.gauge = {}),global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var G2GaugeComponent = /** @class */ (function () {
        function G2GaugeComponent(zone) {
            this.zone = zone;
            this.color = '#2F9CFF';
            this.bgColor = '#F0F2F5';
            this.initFlag = false;
        }
        Object.defineProperty(G2GaugeComponent.prototype, "height", {
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
        Object.defineProperty(G2GaugeComponent.prototype, "percent", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._percent = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.createData = /**
         * @return {?}
         */
            function () {
                return [{ name: this.title, value: +this._percent }];
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.draw = /**
         * @return {?}
         */
            function () {
                if (!this.chart)
                    return;
                this.chart.guide().clear();
                /** @type {?} */
                var data = this.createData();
                // 绘制仪表盘背景
                this.chart.guide().arc({
                    zIndex: 0,
                    top: false,
                    start: [0, 0.95],
                    end: [100, 0.95],
                    style: {
                        // 底灰色
                        stroke: this.bgColor,
                        lineWidth: 12,
                    },
                });
                // 绘制指标
                this.chart.guide().arc({
                    zIndex: 1,
                    start: [0, 0.95],
                    end: [data[0].value, 0.95],
                    style: {
                        stroke: this.color,
                        lineWidth: 12,
                    },
                });
                // 绘制数字
                this.chart.guide().html({
                    position: ['50%', '95%'],
                    html: "\n      <div style=\"width: 300px;text-align: center;font-size: 12px!important;\">\n        <p style=\"font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;\">" + this.title + "</p>\n        <p style=\"font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;\">\n          " + data[0].value + "%\n        </p>\n      </div>"
                });
                this.chart.changeData(data);
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var Shape = G2.Shape;
                // 自定义Shape 部分
                Shape.registerShape('point', 'pointer', {
                    drawShape: /**
                     * @param {?} cfg
                     * @param {?} group
                     * @return {?}
                     */ function (cfg, group) {
                        /** @type {?} */
                        var point = cfg.points[0];
                        point = this.parsePoint(point);
                        /** @type {?} */
                        var center = this.parsePoint({
                            // 获取极坐标系下画布中心点
                            x: 0,
                            y: 0,
                        });
                        // 绘制指针
                        group.addShape('line', {
                            attrs: {
                                x1: center.x,
                                y1: center.y,
                                x2: point.x,
                                y2: point.y,
                                stroke: cfg.color,
                                lineWidth: 2,
                                lineCap: 'round',
                            },
                        });
                        // const { origin } = cfg;
                        // group.addShape('text', {
                        //   attrs: {
                        //     x: center.x,
                        //     y: center.y + 80,
                        //     text: `${origin._origin.value}%`,
                        //     textAlign: 'center',
                        //     fontSize: 24,
                        //     fill: 'rgba(0, 0, 0, 0.85)',
                        //   },
                        // });
                        return group.addShape('circle', {
                            attrs: {
                                x: center.x,
                                y: center.y,
                                r: 9.75,
                                stroke: cfg.color,
                                lineWidth: 2,
                                fill: '#fff',
                            },
                        });
                    },
                });
                /** @type {?} */
                var data = this.createData();
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: this.height,
                    padding: [10, 10, 30, 10],
                });
                chart.source(data);
                chart.coord('polar', {
                    startAngle: -1.2 * Math.PI,
                    endAngle: 0.2 * Math.PI,
                });
                chart.scale('value', {
                    min: 0,
                    max: 100,
                    nice: true,
                    tickCount: 6,
                });
                chart.axis('1', false);
                // 刻度值
                chart.axis('value', {
                    zIndex: 2,
                    line: null,
                    label: {
                        offset: -12,
                        formatter: this.format,
                    },
                    tickLine: null,
                    grid: null,
                });
                chart.legend(false);
                chart
                    .point({
                    generatePoints: true,
                })
                    .position('value*1')
                    .shape('pointer')
                    .color(this.color)
                    .active(false);
                this.chart = chart;
                this.draw();
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initFlag = true;
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.initFlag)
                    this.draw();
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart)
                    this.chart.destroy();
            };
        G2GaugeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-gauge',
                        template: "<div #container></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2GaugeComponent.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        G2GaugeComponent.propDecorators = {
            title: [{ type: core.Input }],
            height: [{ type: core.Input }],
            color: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            format: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        return G2GaugeComponent;
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
    var COMPONENTS = [G2GaugeComponent];
    var G2GaugeModule = /** @class */ (function () {
        function G2GaugeModule() {
        }
        /**
         * @return {?}
         */
        G2GaugeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2GaugeModule, providers: [] };
            };
        G2GaugeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2GaugeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2GaugeComponent = G2GaugeComponent;
    exports.G2GaugeModule = G2GaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gauge.umd.js.map