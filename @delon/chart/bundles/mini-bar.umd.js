/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
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
        function G2MiniBarComponent(zone) {
            this.zone = zone;
            // #region fields
            this.color = '#1890FF';
            this.height = 0;
            this.borderWidth = 5;
            this.padding = [8, 8, 8, 8];
            this.yTooltipSuffix = '';
        }
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: +this.height,
                    padding: this.padding,
                    legend: null,
                });
                chart.axis(false);
                chart.source(this.data, {
                    x: {
                        type: 'cat',
                    },
                    y: {
                        min: 0,
                    },
                });
                chart.tooltip({
                    'showTitle': false,
                    'hideMarkders': false,
                    'crosshairs': false,
                    'g2-tooltip': { padding: 4 },
                    'g2-tooltip-list-item': { margin: "0px 4px" },
                });
                chart
                    .interval()
                    .position('x*y')
                    .size(this.borderWidth)
                    .color(this.color)
                    .tooltip('x*y', function (x, y) {
                    return {
                        name: x,
                        value: y + _this.yTooltipSuffix,
                    };
                });
                chart.render();
                this.chart = chart;
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2MiniBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }
            };
        G2MiniBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-bar',
                        template: "<div #container></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2MiniBarComponent.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        G2MiniBarComponent.propDecorators = {
            color: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            yTooltipSuffix: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
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
        /**
         * @return {?}
         */
        G2MiniBarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2MiniBarModule, providers: [] };
            };
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