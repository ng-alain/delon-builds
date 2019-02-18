/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.8
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/single-bar', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['single-bar'] = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var G2SingleBarComponent = /** @class */ (function () {
        // #endregion
        function G2SingleBarComponent(el, ngZone) {
            this.el = el;
            this.ngZone = ngZone;
            // #region fields
            this.delay = 0;
            this.plusColor = '#40a9ff';
            this.minusColor = '#ff4d4f';
            this.height = 60;
            this.barSize = 30;
            this.min = 0;
            this.max = 100;
            this.value = 0;
            this.line = false;
            this.padding = 0;
            this.textStyle = { fontSize: 12, color: '#595959' };
        }
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                var _a = this, el = _a.el, height = _a.height, padding = _a.padding, textStyle = _a.textStyle, line = _a.line, format = _a.format;
                /** @type {?} */
                var chart = (this.chart = new G2.Chart({
                    container: el.nativeElement,
                    forceFit: true,
                    height: height,
                    padding: padding,
                }));
                chart.legend(false);
                chart.axis(false);
                chart.tooltip({ type: 'mini' });
                chart.coord().transpose();
                chart
                    .interval()
                    .position('1*value')
                    .opacity(1)
                    .label('value', function (val) {
                    return ({
                        formatter: format,
                        offset: val > 0 ? 10 : -10,
                        textStyle: __assign({}, textStyle, { textAlign: val > 0 ? 'start' : 'end' }),
                    });
                });
                if (line) {
                    chart.guide().line({
                        start: ['50%', '0%'],
                        end: ['50%', '100%'],
                        lineStyle: {
                            stroke: '#e8e8e8',
                            lineDash: [0, 0],
                        },
                    });
                }
                chart.render();
                this.attachChart();
            };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.attachChart = /**
         * @return {?}
         */
            function () {
                var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, value = _a.value, min = _a.min, max = _a.max, plusColor = _a.plusColor, minusColor = _a.minusColor, barSize = _a.barSize;
                if (!chart)
                    return;
                chart.source([{ value: value }], { value: { max: max, min: min } });
                chart.set('height', height);
                chart.set('padding', padding);
                chart
                    .get('geoms')[0]
                    .color('value', function (val) { return (val > 0 ? plusColor : minusColor); })
                    .size(barSize);
                chart.repaint();
            };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
            };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
            };
        /**
         * @return {?}
         */
        G2SingleBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.chart) {
                    this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
                }
            };
        G2SingleBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-single-bar',
                        template: "",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2SingleBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.NgZone }
            ];
        };
        G2SingleBarComponent.propDecorators = {
            delay: [{ type: core.Input }],
            plusColor: [{ type: core.Input }],
            minusColor: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            barSize: [{ type: core.Input }],
            min: [{ type: core.Input }],
            max: [{ type: core.Input }],
            value: [{ type: core.Input }],
            line: [{ type: core.Input }],
            format: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            textStyle: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "delay", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "barSize", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "min", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "max", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "value", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], G2SingleBarComponent.prototype, "line", void 0);
        return G2SingleBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2SingleBarComponent];
    var G2SingleBarModule = /** @class */ (function () {
        function G2SingleBarModule() {
        }
        G2SingleBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2SingleBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2SingleBarComponent = G2SingleBarComponent;
    exports.G2SingleBarModule = G2SingleBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=single-bar.umd.js.map