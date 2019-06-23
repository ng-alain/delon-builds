/**
 * @license ng-alain(cipchk@qq.com) v8.0.0-rc.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/divider')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/pie', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/divider'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.pie = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd/divider']));
}(this, function (exports, core, util, rxjs, operators, common, divider) { 'use strict';

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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var G2PieComponent = /** @class */ (function () {
        // #endregion
        function G2PieComponent(el, rend, ngZone, cdr) {
            this.el = el;
            this.rend = rend;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.legendData = [];
            // #region fields
            this.delay = 0;
            this.animate = true;
            this.color = 'rgba(24, 144, 255, 0.85)';
            this.height = 0;
            this.hasLegend = false;
            this.inner = 0.75;
            this.padding = [12, 0, 12, 0];
            this.tooltip = true;
            this.lineWidth = 0;
            this.select = true;
            this.data = [];
        }
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.setCls = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, el = _a.el, rend = _a.rend, hasLegend = _a.hasLegend, isPercent = _a.isPercent;
            /** @type {?} */
            var ne = (/** @type {?} */ (el.nativeElement));
            util.updateHostClass(ne, rend, {
                'g2-pie': true,
                'g2-pie__legend-has': hasLegend,
                'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
                'g2-pie__mini': isPercent,
            }, true);
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.fixData = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, percent = _a.percent, color = _a.color;
            this.isPercent = percent != null;
            if (this.isPercent) {
                this.select = false;
                this.tooltip = false;
                this.percentColor = (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'); });
                this.data = [
                    {
                        x: '占比',
                        y: percent,
                    },
                    {
                        x: '反比',
                        y: 100 - percent,
                    },
                ];
            }
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.install = /**
         * @private
         * @return {?}
         */
        function () {
            this.setCls();
            var _a = this, node = _a.node, height = _a.height, padding = _a.padding, animate = _a.animate, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend;
            /** @type {?} */
            var chart = (this.chart = new G2.Chart({
                container: node.nativeElement,
                forceFit: true,
                height: height,
                padding: padding,
                animate: animate,
            }));
            if (!tooltip) {
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
            chart.coord('theta', { innerRadius: inner });
            chart.filter('x', (/**
             * @param {?} _val
             * @param {?} item
             * @return {?}
             */
            function (_val, item) { return item.checked !== false; }));
            chart
                .intervalStack()
                .position('y')
                .tooltip('x*percent', (/**
             * @param {?} name
             * @param {?} p
             * @return {?}
             */
            function (name, p) { return ({
                name: name,
                // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
                value: hasLegend ? p : (p * 100).toFixed(2),
            }); }))
                .select(this.select);
            chart.render();
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.attachChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, animate = _a.animate, data = _a.data, lineWidth = _a.lineWidth, isPercent = _a.isPercent, percentColor = _a.percentColor, colors = _a.colors;
            if (!chart)
                return;
            chart.set('height', height);
            chart.set('padding', padding);
            chart.set('animate', animate);
            chart
                .get('geoms')[0]
                .style({ lineWidth: lineWidth, stroke: '#fff' })
                .color('x', isPercent ? percentColor : colors);
            /** @type {?} */
            var dv = new DataSet.DataView();
            dv.source(data).transform({
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
            });
            chart.repaint();
            this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.genLegend(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.genLegend = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, hasLegend = _a.hasLegend, isPercent = _a.isPercent, cdr = _a.cdr, chart = _a.chart;
            if (!hasLegend || isPercent)
                return;
            this.legendData = chart
                .get('geoms')[0]
                .get('dataArray')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var origin = item[0]._origin;
                origin.color = item[0].color;
                origin.checked = true;
                origin.percent = (origin.percent * 100).toFixed(2);
                return origin;
            }));
            cdr.detectChanges();
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
            var _a = this, legendData = _a.legendData, chart = _a.chart;
            legendData[i].checked = !legendData[i].checked;
            chart.repaint();
        };
        /**
         * @private
         * @return {?}
         */
        G2PieComponent.prototype.installResizeEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.resize$ || !this.hasLegend)
                return;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(200))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.setCls(); }));
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.install(); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.fixData();
            this.setCls();
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.attachChart(); }));
            this.installResizeEvent();
        };
        /**
         * @return {?}
         */
        G2PieComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.resize$) {
                this.resize$.unsubscribe();
            }
            if (this.chart) {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return _this.chart.destroy(); }));
            }
        };
        G2PieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-pie',
                        exportAs: 'g2Pie',
                        template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\"\n         class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\"\n      (click)=\"_click(index)\"\n      class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\"\n          [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\"\n          [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2PieComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef }
        ]; };
        G2PieComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container', { static: true },] }],
            delay: [{ type: core.Input }],
            animate: [{ type: core.Input }],
            color: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            inner: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            lineWidth: [{ type: core.Input }],
            select: [{ type: core.Input }],
            valueFormat: [{ type: core.Input }],
            data: [{ type: core.Input }],
            colors: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2PieComponent.prototype, "delay", void 0);
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2PieComponent];
    var G2PieModule = /** @class */ (function () {
        function G2PieModule() {
        }
        G2PieModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, divider.NzDividerModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2PieModule;
    }());

    exports.G2PieComponent = G2PieComponent;
    exports.G2PieModule = G2PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pie.umd.js.map
