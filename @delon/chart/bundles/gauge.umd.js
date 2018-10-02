/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/gauge', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.gauge = {}),global.ng.core,global.delon.util,global.ng.common));
}(this, (function (exports,core,util,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        var point = cfg.points[0]; // 获取第一个标记点
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2GaugeComponent = G2GaugeComponent;
    exports.G2GaugeModule = G2GaugeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlL2dhdWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodDtcclxuICBASW5wdXQoKSBjb2xvciA9ICcjMkY5Q0ZGJztcclxuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNGMEYyRjUnO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBbeyBuYW1lOiB0aGlzLnRpdGxlLCB2YWx1ZTogK3RoaXMuX3BlcmNlbnQgfV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5jbGVhcigpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgLy8gw6fCu8KYw6XCiMK2w6TCu8Kqw6jCocKow6fCm8KYw6jCg8KMw6bCmcKvXHJcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuYXJjKHtcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxyXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIC8vIMOlwrrClcOnwoHCsMOowonCslxyXG4gICAgICAgIHN0cm9rZTogdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIMOnwrvCmMOlwojCtsOmwozCh8OmwqDCh1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcclxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIMOnwrvCmMOlwojCtsOmwpXCsMOlwq3Cl1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmh0bWwoe1xyXG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnOTUlJ10sXHJcbiAgICAgIGh0bWw6IGBcclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcIj5cclxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHJnYmEoMCwwLDAsMC40Myk7bWFyZ2luOiAwO1wiPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7Y29sb3I6IHJnYmEoMCwwLDAsMC44NSk7bWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgJHtkYXRhWzBdLnZhbHVlfSVcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PmBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgU2hhcGUgPSBHMi5TaGFwZTtcclxuICAgIC8vIMOowofCqsOlwq7CmsOkwrnCiVNoYXBlIMOpwoPCqMOlwojChlxyXG4gICAgU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcclxuICAgICAgZHJhd1NoYXBlKGNmZywgZ3JvdXApIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSBjZmcucG9pbnRzWzBdOyAvLyDDqMKOwrfDpcKPwpbDp8KswqzDpMK4woDDpMK4wqrDpsKgwofDqMKuwrDDp8KCwrlcclxuICAgICAgICBwb2ludCA9IHRoaXMucGFyc2VQb2ludChwb2ludCk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wYXJzZVBvaW50KHtcclxuICAgICAgICAgIC8vIMOowo7Ct8Olwo/ClsOmwp7CgcOlwp3CkMOmwqDCh8OnwrPCu8OkwrjCi8OnwpTCu8OlwrjCg8OkwrjCrcOlwr/Cg8OnwoLCuVxyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gw6fCu8KYw6XCiMK2w6bCjMKHw6nCksKIXHJcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XHJcbiAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICB4MTogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcclxuICAgICAgICAgICAgeDI6IHBvaW50LngsXHJcbiAgICAgICAgICAgIHkyOiBwb2ludC55LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgeyBvcmlnaW4gfSA9IGNmZztcclxuICAgICAgICAvLyBncm91cC5hZGRTaGFwZSgndGV4dCcsIHtcclxuICAgICAgICAvLyAgIGF0dHJzOiB7XHJcbiAgICAgICAgLy8gICAgIHg6IGNlbnRlci54LFxyXG4gICAgICAgIC8vICAgICB5OiBjZW50ZXIueSArIDgwLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiBgJHtvcmlnaW4uX29yaWdpbi52YWx1ZX0lYCxcclxuICAgICAgICAvLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAvLyAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgIC8vICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgeDogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxyXG4gICAgICAgICAgICByOiA5Ljc1LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgcGFkZGluZzogWzEwLCAxMCwgMzAsIDEwXSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGRhdGEpO1xyXG5cclxuICAgIGNoYXJ0LmNvb3JkKCdwb2xhcicsIHtcclxuICAgICAgc3RhcnRBbmdsZTogLTEuMiAqIE1hdGguUEksXHJcbiAgICAgIGVuZEFuZ2xlOiAwLjIgKiBNYXRoLlBJLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIG5pY2U6IHRydWUsXHJcbiAgICAgIHRpY2tDb3VudDogNixcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XHJcbiAgICAvLyDDpcKIwrvDpcK6wqbDpcKAwrxcclxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgb2Zmc2V0OiAtMTIsXHJcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdCxcclxuICAgICAgfSxcclxuICAgICAgdGlja0xpbmU6IG51bGwsXHJcbiAgICAgIGdyaWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcbiAgICBjaGFydFxyXG4gICAgICAucG9pbnQoe1xyXG4gICAgICAgIGdlbmVyYXRlUG9pbnRzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAucG9zaXRpb24oJ3ZhbHVlKjEnKVxyXG4gICAgICAuc2hhcGUoJ3BvaW50ZXInKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLmFjdGl2ZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEcyR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW0cyR2F1Z2VDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyR2F1Z2VNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRvTnVtYmVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJOZ1pvbmUiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFrREUsMEJBQW9CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO3lCQWpCZixTQUFTOzJCQUNQLFNBQVM7NEJBY1QsS0FBSztTQUVZO1FBekJwQyxzQkFDSSxvQ0FBTTs7O2dCQURWO2dCQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjs7OztnQkFDRCxVQUFXLEtBQVU7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUdBLGFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQzs7O1dBSEE7UUFTRCxzQkFDSSxxQ0FBTzs7OztnQkFEWCxVQUNZLEtBQVU7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUdBLGFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQzs7O1dBQUE7Ozs7UUFZTyxxQ0FBVTs7OztnQkFDaEIsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxF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