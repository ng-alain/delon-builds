/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.4
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/bar', ['exports', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.bar = {}),global.rxjs,global.rxjs.operators,global.ng.common,global.ng.core,global.delon.util));
}(this, (function (exports,rxjs,operators,common,core,util) { 'use strict';

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
    /** @type {?} */
    var TITLE_HEIGHT = 41;
    var G2BarComponent = /** @class */ (function () {
        // #endregion
        function G2BarComponent(ngZone) {
            this.ngZone = ngZone;
            // #region fields
            this.delay = 0;
            this.color = 'rgba(24, 144, 255, 0.85)';
            this.height = 0;
            this.padding = 'auto';
            this.data = [];
            this.autoLabel = true;
        }
        /**
         * @return {?}
         */
        G2BarComponent.prototype.getHeight = /**
         * @return {?}
         */
            function () {
                return this.title ? this.height - TITLE_HEIGHT : this.height;
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _a = this, node = _a.node, padding = _a.padding;
                /** @type {?} */
                var container = ( /** @type {?} */(node.nativeElement));
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: container,
                    forceFit: true,
                    legend: null,
                    height: this.getHeight(),
                    padding: padding,
                });
                this.updatelabel();
                chart.axis('y', {
                    title: false,
                    line: false,
                    tickLine: false,
                });
                chart.source([], {
                    x: {
                        type: 'cat',
                    },
                    y: {
                        min: 0,
                    },
                });
                chart.tooltip({
                    showTitle: false,
                });
                chart
                    .interval()
                    .position('x*y')
                    .tooltip('x*y', function (x, y) { return ({ name: x, value: y }); });
                chart.render();
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, color = _a.color;
                if (!chart || !data || data.length <= 0)
                    return;
                this.installResizeEvent();
                /** @type {?} */
                var height = this.getHeight();
                if (chart.get('height') !== height) {
                    chart.changeHeight(height);
                }
                // color
                chart.get('geoms')[0].color(color);
                chart.set('padding', padding);
                chart.changeData(data);
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.updatelabel = /**
         * @return {?}
         */
            function () {
                var _a = this, node = _a.node, data = _a.data, chart = _a.chart;
                /** @type {?} */
                var canvasWidth = node.nativeElement.clientWidth;
                /** @type {?} */
                var minWidth = data.length * 30;
                chart.axis('x', canvasWidth > minWidth).repaint();
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.installResizeEvent = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.autoLabel || this.resize$)
                    return;
                this.resize$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.filter(function () { return _this.chart; }), operators.debounceTime(200))
                    .subscribe(function () { return _this.ngZone.runOutsideAngular(function () { return _this.updatelabel(); }); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.resize$) {
                    this.resize$.unsubscribe();
                }
                if (this.chart) {
                    this.chart.destroy();
                }
            };
        G2BarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-bar',
                        template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2BarComponent.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        G2BarComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container',] }],
            delay: [{ type: core.Input }],
            title: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            autoLabel: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2BarComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2BarComponent.prototype, "height", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2BarComponent.prototype, "autoLabel", void 0);
        return G2BarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2BarComponent];
    var G2BarModule = /** @class */ (function () {
        function G2BarModule() {
        }
        G2BarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2BarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2BarComponent = G2BarComponent;
    exports.G2BarModule = G2BarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=bar.umd.js.map