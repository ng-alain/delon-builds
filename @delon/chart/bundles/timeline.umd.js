/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/timeline', ['exports', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.timeline = {}),global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var G2TimelineComponent = /** @class */ (function () {
        function G2TimelineComponent(cd, zone) {
            this.cd = cd;
            this.zone = zone;
            // #region fields
            this._title = '';
            this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
            this.mask = 'HH:mm';
            this.position = 'top';
            this._height = 400;
            this.padding = [60, 20, 40, 40];
            this._borderWidth = 2;
            this.initFlag = false;
        }
        Object.defineProperty(G2TimelineComponent.prototype, "title", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                }
                else {
                    this._title = value;
                }
                this.cd.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2TimelineComponent.prototype, "height", {
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
        Object.defineProperty(G2TimelineComponent.prototype, "borderWidth", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._borderWidth = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initFlag = true;
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                // clean
                this.uninstall();
                this.sliderNode.nativeElement.innerHTML = '';
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var MAX = 8;
                /** @type {?} */
                var begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
                /** @type {?} */
                var ds = new DataSet({
                    state: {
                        start: this.data[begin - 1].x,
                        end: this.data[begin - 1 + MAX].x,
                    },
                });
                /** @type {?} */
                var dv = ds.createView().source(this.data);
                dv.source(this.data).transform({
                    type: 'filter',
                    callback: /**
                     * @param {?} obj
                     * @return {?}
                     */ function (obj) {
                        /** @type {?} */
                        var time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                        return time >= ds.state.start && time <= ds.state.end;
                    },
                });
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: +this.height,
                    padding: this.padding,
                });
                chart.axis('x', { title: false });
                chart.axis('y1', {
                    title: false,
                });
                chart.axis('y2', false);
                /** @type {?} */
                var max;
                if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
                    max = Math.max(this.data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, this.data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
                }
                chart.source(dv, {
                    x: {
                        type: 'timeCat',
                        tickCount: MAX,
                        mask: this.mask,
                        range: [0, 1],
                    },
                    y1: {
                        alias: this.titleMap.y1,
                        max: max,
                        min: 0,
                    },
                    y2: {
                        alias: this.titleMap.y2,
                        max: max,
                        min: 0,
                    },
                });
                chart.legend({
                    position: this.position,
                    custom: true,
                    clickable: false,
                    items: [
                        { value: this.titleMap.y1, fill: this.colorMap.y1 },
                        { value: this.titleMap.y2, fill: this.colorMap.y2 },
                    ],
                });
                chart
                    .line()
                    .position('x*y1')
                    .color(this.colorMap.y1)
                    .size(this._borderWidth);
                chart
                    .line()
                    .position('x*y2')
                    .color(this.colorMap.y2)
                    .size(this._borderWidth);
                chart.render();
                /** @type {?} */
                var sliderPadding = Object.assign([], this.padding);
                sliderPadding[0] = 0;
                /** @type {?} */
                var slider = new Slider({
                    container: this.sliderNode.nativeElement,
                    height: 26,
                    padding: sliderPadding,
                    scales: {
                        x: {
                            type: 'time',
                            tickCount: 16,
                            mask: this.mask,
                        },
                    },
                    backgroundChart: {
                        type: 'line',
                    },
                    start: ds.state.start,
                    end: ds.state.end,
                    xAxis: 'x',
                    yAxis: 'y1',
                    data: this.data,
                    onChange: /**
                     * @param {?} __0
                     * @return {?}
                     */ function (_a) {
                        var startValue = _a.startValue, endValue = _a.endValue;
                        ds.setState('start', startValue);
                        ds.setState('end', endValue);
                    },
                });
                slider.render();
                this.chart = chart;
                this.slider = slider;
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.uninstall = /**
         * @return {?}
         */
            function () {
                if (this.chart)
                    this.chart.destroy();
                if (this.slider)
                    this.slider.destroy();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.initFlag)
                    this.runInstall();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.uninstall();
            };
        G2TimelineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-timeline',
                        template: "\n  <ng-container *ngIf=\"_title; else _titleTpl\"><h4>{{_title}}</h4></ng-container>\n  <div #container></div>\n  <div #slider></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        G2TimelineComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2TimelineComponent.propDecorators = {
            title: [{ type: core.Input }],
            data: [{ type: core.Input }],
            titleMap: [{ type: core.Input }],
            colorMap: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            position: [{ type: core.Input }],
            height: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }],
            sliderNode: [{ type: core.ViewChild, args: ['slider',] }]
        };
        return G2TimelineComponent;
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
    var COMPONENTS = [G2TimelineComponent];
    var G2TimelineModule = /** @class */ (function () {
        function G2TimelineModule() {
        }
        /**
         * @return {?}
         */
        G2TimelineModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2TimelineModule, providers: [] };
            };
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2TimelineComponent = G2TimelineComponent;
    exports.G2TimelineModule = G2TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=timeline.umd.js.map