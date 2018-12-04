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
    var G2TimelineComponent = /** @class */ (function () {
        function G2TimelineComponent(cd, zone) {
            this.cd = cd;
            this.zone = zone;
            // #region fields
            this._title = '';
            this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
            this.mask = 'HH:mm';
            this.position = 'top';
            this.height = 400;
            this.padding = [60, 20, 40, 40];
            this.borderWidth = 2;
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
                        var time = new Date(obj.x).getTime();
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
                    .size(this.borderWidth);
                chart
                    .line()
                    .position('x*y2')
                    .color(this.colorMap.y2)
                    .size(this.borderWidth);
                chart.render();
                /** @type {?} */
                var sliderPadding = __assign({}, [], this.padding);
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
                        template: "<ng-container *ngIf=\"_title; else _titleTpl\">\n  <h4>{{_title}}</h4>\n</ng-container>\n<div #container></div>\n<div #slider></div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
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
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TimelineComponent.prototype, "borderWidth", void 0);
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

    exports.G2TimelineComponent = G2TimelineComponent;
    exports.G2TimelineModule = G2TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=timeline.umd.js.map