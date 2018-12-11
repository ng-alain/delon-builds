/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/timeline', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.timeline = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
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
    var G2TimelineData = /** @class */ (function () {
        function G2TimelineData() {
        }
        return G2TimelineData;
    }());
    var G2TimelineComponent = /** @class */ (function () {
        function G2TimelineComponent() {
            // #region fields
            this.delay = 0;
            this.data = [];
            this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
            this.mask = 'HH:mm';
            this.position = 'top';
            this.height = 400;
            this.padding = [60, 20, 40, 40];
            this.borderWidth = 2;
            this.tickCount = 8;
            this.slider = true;
        }
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnInit =
            // #endregion
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                setTimeout(function () { return _this.install(); }, this.delay);
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _a = this, node = _a.node, sliderNode = _a.sliderNode, height = _a.height, padding = _a.padding, mask = _a.mask, tickCount = _a.tickCount, slider = _a.slider;
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: node.nativeElement,
                    forceFit: true,
                    height: height,
                    padding: padding,
                });
                chart.axis('x', { title: false });
                chart.axis('y1', { title: false });
                chart.axis('y2', false);
                chart.line().position('x*y1');
                chart.line().position('x*y2');
                chart.render();
                /** @type {?} */
                var sliderPadding = __assign({}, [], padding);
                sliderPadding[0] = 0;
                if (slider) {
                    /** @type {?} */
                    var _slider = this._slider = new Slider({
                        container: sliderNode.nativeElement,
                        width: 'auto',
                        height: 26,
                        padding: sliderPadding,
                        scales: {
                            x: {
                                type: 'time',
                                tickCount: tickCount,
                                mask: mask,
                            },
                        },
                        backgroundChart: {
                            type: 'line',
                        },
                        xAxis: 'x',
                        yAxis: 'y1',
                        data: [],
                    });
                    _slider.render();
                }
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, _slider = _a._slider, slider = _a.slider, height = _a.height, padding = _a.padding, data = _a.data, mask = _a.mask, titleMap = _a.titleMap, position = _a.position, colorMap = _a.colorMap, borderWidth = _a.borderWidth, tickCount = _a.tickCount;
                if (!chart || !data || data.length <= 0)
                    return;
                chart.legend({
                    position: position,
                    custom: true,
                    clickable: false,
                    items: [
                        { value: titleMap.y1, fill: colorMap.y1 },
                        { value: titleMap.y2, fill: colorMap.y2 },
                    ],
                });
                // border
                chart.get('geoms').forEach(function (v, idx) {
                    v.color(colorMap["y" + (idx + 1)]).size(borderWidth);
                });
                data.filter(function (v) { return !(v.x instanceof Number); }).forEach(function (v) {
                    v.x = +new Date(v.x);
                });
                data.sort(function (a, b) { return +a.x - +b.x; });
                chart.set('height', height);
                chart.set('padding', padding);
                /** @type {?} */
                var begin = Math.ceil(data.length > tickCount ? (data.length - tickCount) / 2 : 0);
                /** @type {?} */
                var ds = new DataSet({
                    state: {
                        start: data[begin - 1].x,
                        end: data[begin - 1 + tickCount].x,
                    },
                });
                /** @type {?} */
                var dv = ds.createView().source(data);
                dv.source(data).transform({
                    type: 'filter',
                    callback: function (val) {
                        /** @type {?} */
                        var time = +val.x;
                        return time >= ds.state.start && time <= ds.state.end;
                    },
                });
                /** @type {?} */
                var max;
                if (data[0] && data[0].y1 && data[0].y2) {
                    max = Math.max(data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
                }
                chart.source(dv, {
                    x: {
                        type: 'timeCat',
                        tickCount: tickCount,
                        mask: mask,
                        range: [0, 1],
                    },
                    y1: {
                        alias: titleMap.y1,
                        max: max,
                        min: 0,
                    },
                    y2: {
                        alias: titleMap.y2,
                        max: max,
                        min: 0,
                    },
                });
                chart.repaint();
                if (slider) {
                    _slider.start = ds.state.start;
                    _slider.end = ds.state.end;
                    _slider.onChange = function (_a) {
                        var startValue = _a.startValue, endValue = _a.endValue;
                        ds.setState('start', startValue);
                        ds.setState('end', endValue);
                    };
                    _slider.changeData(data);
                }
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart)
                    this.chart.destroy();
                if (this._slider)
                    this._slider.destroy();
            };
        G2TimelineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-timeline',
                        template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div #sliderContainer *ngIf=\"slider\"></div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        G2TimelineComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container',] }],
            sliderNode: [{ type: core.ViewChild, args: ['sliderContainer',] }],
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            data: [{ type: core.Input }],
            titleMap: [{ type: core.Input }],
            colorMap: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            position: [{ type: core.Input }],
            height: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            tickCount: [{ type: core.Input }],
            slider: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "borderWidth", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "tickCount", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "slider", void 0);
        return G2TimelineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2TimelineComponent];
    var G2TimelineModule = /** @class */ (function () {
        function G2TimelineModule() {
        }
        G2TimelineModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2TimelineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2TimelineData = G2TimelineData;
    exports.G2TimelineComponent = G2TimelineComponent;
    exports.G2TimelineModule = G2TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=timeline.umd.js.map