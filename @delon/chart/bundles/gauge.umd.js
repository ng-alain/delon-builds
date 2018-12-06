/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/gauge', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.gauge = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var G2GaugeComponent = /** @class */ (function () {
        // #endregion
        function G2GaugeComponent(el) {
            this.el = el;
            // #region fields
            this.delay = 0;
            this.color = '#2F9CFF';
            this.bgColor = '#F0F2F5';
            this.padding = [10, 10, 30, 10];
        }
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.createData = /**
         * @return {?}
         */
            function () {
                return [{ name: this.title, value: this.percent }];
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.draw = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, bgColor = _a.bgColor, color = _a.color, title = _a.title;
                if (!chart)
                    return;
                /** @type {?} */
                var guide = chart.guide();
                guide.clear();
                /** @type {?} */
                var data = this.createData();
                // 绘制仪表盘背景
                guide.arc({
                    zIndex: 0,
                    top: false,
                    start: [0, 0.95],
                    end: [100, 0.95],
                    style: {
                        // 底灰色
                        stroke: bgColor,
                        lineWidth: 12,
                    },
                });
                // 绘制指标
                guide.arc({
                    zIndex: 1,
                    start: [0, 0.95],
                    end: [data[0].value, 0.95],
                    style: {
                        stroke: color,
                        lineWidth: 12,
                    },
                });
                // 绘制数字
                guide.html({
                    position: ['50%', '95%'],
                    html: "<div class=\"g2-gauge__desc\">\n        <div class=\"g2-gauge__title\">" + title + "</div>\n        <div class=\"g2-gauge__percent\">" + data[0].value + "%</div>\n      </div>",
                });
                this.chart.changeData(data);
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.install = /**
         * @return {?}
         */
            function () {
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
                var _a = this, el = _a.el, height = _a.height, padding = _a.padding, format = _a.format, color = _a.color;
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: el.nativeElement,
                    forceFit: true,
                    height: height,
                    padding: padding,
                });
                chart.source(this.createData());
                chart.coord('polar', {
                    startAngle: Math.PI * -1.2,
                    endAngle: Math.PI * 0.2,
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
                        formatter: format,
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
                    .color(color)
                    .active(false);
                this.draw();
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () { return _this.install(); }, this.delay);
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.draw();
            };
        /**
         * @return {?}
         */
        G2GaugeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                }
            };
        G2GaugeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-gauge',
                        template: "",
                        host: {
                            '[class.g2-gauge]': 'true',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2GaugeComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        G2GaugeComponent.propDecorators = {
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            height: [{ type: core.Input }],
            color: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            format: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            padding: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2GaugeComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2GaugeComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2GaugeComponent.prototype, "percent", void 0);
        return G2GaugeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2GaugeComponent];
    var G2GaugeModule = /** @class */ (function () {
        function G2GaugeModule() {
        }
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