/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/core'), require('@delon/util'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/pie', ['exports', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/core', '@delon/util', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.pie = {}),global.rxjs,global.rxjs.operators,global.ng.common,global.ng.core,global.delon.util,global.ngZorro.antd));
}(this, (function (exports,rxjs,operators,common,core,util,ngZorroAntd) { 'use strict';

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
    var G2PieComponent = /** @class */ (function () {
        // #endregion
        function G2PieComponent(el, rend, cd, zone) {
            this.el = el;
            this.rend = rend;
            this.cd = cd;
            this.zone = zone;
            this.scroll$ = null;
            this.initFlag = false;
            this.legendData = [];
            // #region fields
            this.animate = true;
            this.color = 'rgba(24, 144, 255, 0.85)';
            this.height = 0;
            this.hasLegend = false;
            this.legendBlock = false;
            this.inner = 0.75;
            this.padding = [12, 0, 12, 0];
            this.tooltip = true;
            this.lineWidth = 0;
            this.select = true;
        }
        /**
         * @return {?}
         */
        G2PieComponent.prototype.setCls = /**
         * @return {?}
         */
            function () {
                util.updateHostClass(this.el.nativeElement, this.rend, {
                    'g2-pie': true,
                    'g2-pie__legend-has': this.hasLegend,
                    'g2-pie__legend-block': this.legendBlock,
                    'g2-pie__mini': typeof this.percent !== 'undefined',
                }, true);
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.legendBlock = this.el.nativeElement.clientWidth <= 380;
                this.setCls();
                /** @type {?} */
                var formatColor;
                /** @type {?} */
                var isPercent = typeof this.percent !== 'undefined';
                if (isPercent) {
                    this.select = false;
                    this.tooltip = false;
                    formatColor = function (value) {
                        return value === '占比' ? _this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
                    };
                    this.data = [
                        {
                            x: '占比',
                            y: this.percent,
                        },
                        {
                            x: '反比',
                            y: 100 - this.percent,
                        },
                    ];
                }
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                if (this.chart)
                    this.chart.destroy();
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: this.height,
                    padding: this.padding,
                    animate: this.animate,
                });
                if (!this.tooltip) {
                    chart.tooltip(false);
                }
                else {
                    chart.tooltip({
                        showTitle: false,
                        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
                    });
                }
                chart.axis(false);
                chart.legend(false);
                /** @type {?} */
                var dv = new DataSet.DataView();
                dv.source(this.data).transform({
                    type: 'percent',
                    field: 'y',
                    dimension: 'x',
                    as: 'percent',
                });
                chart.source(dv, {
                    x: {
                        type: 'cat',
                        range: [0, 1],
                    },
                    y: {
                        min: 0,
                    },
                });
                chart.coord('theta', { innerRadius: this.inner });
                chart
                    .intervalStack()
                    .position('y')
                    .style({ lineWidth: this.lineWidth, stroke: '#fff' })
                    .tooltip('x*percent', function (item, percent) {
                    return {
                        name: item,
                        value: _this.hasLegend ? percent : (percent * 100).toFixed(2),
                    };
                })
                    .color('x', isPercent ? formatColor : this.colors)
                    .select(this.select);
                chart.render();
                this.chart = chart;
                if (this.hasLegend) {
                    this.zone.run(function () {
                        _this.legendData = chart
                            .getAllGeoms()[0]
                            ._attrs.dataArray.map(function (item) {
                            /** @type {?} */
                            var origin = item[0]._origin;
                            origin.color = item[0].color;
                            origin.checked = true;
                            origin.percent = (origin.percent * 100).toFixed(2);
                            return origin;
                        });
                        _this.cd.detectChanges();
                    });
                }
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.installResizeEvent = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.scroll$ || !this.hasLegend)
                    return;
                this.scroll$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(200))
                    .subscribe(function () { return _this.runInstall(); });
            };
        /**
         * @param {?} i
         * @return {?}
         */
        G2PieComponent.prototype._click = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.legendData[i].checked = !this.legendData[i].checked;
                if (this.chart) {
                    this.chart.filter('x', function (val, item) { return item.checked; });
                    this.chart.repaint();
                }
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initFlag = true;
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.installResizeEvent();
                if (this.initFlag)
                    this.runInstall();
            };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.scroll$)
                    this.scroll$.unsubscribe();
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }
            };
        G2PieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-pie',
                        template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2PieComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2PieComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container',] }],
            animate: [{ type: core.Input }],
            color: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            legendBlock: [{ type: core.Input }],
            inner: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            lineWidth: [{ type: core.Input }],
            select: [{ type: core.Input }],
            data: [{ type: core.Input }],
            valueFormat: [{ type: core.Input }],
            colors: [{ type: core.Input }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "animate", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "height", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "hasLegend", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "legendBlock", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2PieComponent.prototype, "percent", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "tooltip", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "lineWidth", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "select", void 0);
        return G2PieComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2PieComponent];
    var G2PieModule = /** @class */ (function () {
        function G2PieModule() {
        }
        /**
         * @return {?}
         */
        G2PieModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2PieModule, providers: [] };
            };
        G2PieModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2PieModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2PieComponent = G2PieComponent;
    exports.G2PieModule = G2PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=pie.umd.js.map