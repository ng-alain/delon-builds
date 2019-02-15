/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.8
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-bar', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-bar'] = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var G2MiniBarComponent = /** @class */ (function () {
        // #endregion
        function G2MiniBarComponent(el, ngZone) {
            this.el = el;
            this.ngZone = ngZone;
            // #region fields
            this.delay = 0;
            this.color = '#1890FF';
            this.height = 0;
            this.borderWidth = 5;
            this.padding = [8, 8, 8, 8];
            this.data = [];
            this.yTooltipSuffix = '';
            this.tooltipType = 'default';
        }
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _a = this, el = _a.el, height = _a.height, padding = _a.padding, yTooltipSuffix = _a.yTooltipSuffix, tooltipType = _a.tooltipType;
                /** @type {?} */
                var chart = (this.chart = new G2.Chart({
                    container: el.nativeElement,
                    forceFit: true,
                    height: height,
                    padding: padding,
                }));
                chart.source([], {
                    x: {
                        type: 'cat',
                    },
                    y: {
                        min: 0,
                    },
                });
                chart.legend(false);
                chart.axis(false);
                chart.tooltip({
                    type: tooltipType === 'mini' ? 'mini' : null,
                    showTitle: false,
                    hideMarkders: false,
                    crosshairs: false,
                    'g2-tooltip': { padding: 4 },
                    'g2-tooltip-list-item': { margin: "0px 4px" },
                });
                chart
                    .interval()
                    .position('x*y')
                    .tooltip('x*y', function (x, y) { return ({ name: x, value: y + yTooltipSuffix }); });
                chart.render();
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data, color = _a.color, borderWidth = _a.borderWidth;
                if (!chart || !data || data.length <= 0)
                    return;
                chart
                    .get('geoms')[0]
                    .size(borderWidth)
                    .color(color);
                chart.set('height', height);
                chart.set('padding', padding);
                chart.changeData(data);
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.chart) {
                    this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
                }
            };
        G2MiniBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-bar',
                        template: "",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2MiniBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.NgZone }
            ];
        };
        G2MiniBarComponent.propDecorators = {
            delay: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            yTooltipSuffix: [{ type: core.Input }],
            tooltipType: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2MiniBarComponent.prototype, "borderWidth", void 0);
        return G2MiniBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2MiniBarComponent];
    var G2MiniBarModule = /** @class */ (function () {
        function G2MiniBarModule() {
        }
        G2MiniBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2MiniBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2MiniBarComponent = G2MiniBarComponent;
    exports.G2MiniBarModule = G2MiniBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mini-bar.umd.js.map