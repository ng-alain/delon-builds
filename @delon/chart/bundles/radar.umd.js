/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/radar', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.radar = {}),global.ng.core,global.ng.common,global.ngZorro.antd,global.delon.util));
}(this, (function (exports,core,common,ngZorroAntd,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var G2RadarComponent = /** @class */ (function () {
        function G2RadarComponent(cd, zone) {
            this.cd = cd;
            this.zone = zone;
            // #region fields
            this._title = '';
            this._height = 0;
            this.padding = [44, 30, 16, 30];
            this._hasLegend = true;
            this._tickCount = 4;
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
            this.legendData = [];
        }
        Object.defineProperty(G2RadarComponent.prototype, "title", {
            set: /**
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
        Object.defineProperty(G2RadarComponent.prototype, "height", {
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
        Object.defineProperty(G2RadarComponent.prototype, "hasLegend", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasLegend;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._hasLegend = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2RadarComponent.prototype, "tickCount", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._tickCount = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} i
         * @return {?}
         */
        G2RadarComponent.prototype._click = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                var _this = this;
                this.legendData[i].checked = !this.legendData[i].checked;
                if (this.chart) {
                    // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
                    this.chart.filter('name', function (val) { return _this.legendData.find(function (w) { return w.name === val; }).checked; });
                    this.chart.repaint();
                }
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                this.uninstall();
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: +this.height - (this.hasLegend ? 80 : 22),
                    padding: this.padding,
                });
                chart.source(this.data, {
                    value: {
                        min: 0,
                        tickCount: this._tickCount,
                    },
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
                chart
                    .line()
                    .position('label*value')
                    .color('name', this.colors);
                chart
                    .point()
                    .position('label*value')
                    .color('name', this.colors)
                    .shape('circle')
                    .size(3);
                chart.render();
                this.chart = chart;
                if (this.hasLegend) {
                    this.zone.run(function () {
                        _this.legendData = chart
                            .getAllGeoms()[0]
                            ._attrs.dataArray.map(function (item) {
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
                        _this.cd.detectChanges();
                    });
                }
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.uninstall = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2RadarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.uninstall();
            };
        G2RadarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-radar',
                        template: "<h4 *ngIf=\"_title; else _titleTpl\">\n  {{ _title }}</h4>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\"\n    class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                        host: { '[class.g2-radar]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        G2RadarComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2RadarComponent.propDecorators = {
            title: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            padding: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            tickCount: [{ type: core.Input }],
            data: [{ type: core.Input }],
            colors: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        return G2RadarComponent;
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
    var COMPONENTS = [G2RadarComponent];
    var G2RadarModule = /** @class */ (function () {
        function G2RadarModule() {
        }
        /**
         * @return {?}
         */
        G2RadarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2RadarModule, providers: [] };
            };
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2RadarComponent = G2RadarComponent;
    exports.G2RadarModule = G2RadarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=radar.umd.js.map