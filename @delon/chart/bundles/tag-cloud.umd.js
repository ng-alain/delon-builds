/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/tag-cloud', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['tag-cloud'] = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var G2TagCloudComponent = /** @class */ (function () {
        function G2TagCloudComponent(el, cdr, zone) {
            this.el = el;
            this.cdr = cdr;
            this.zone = zone;
            // #region fields
            this.height = 0;
            this.padding = 0;
            this.initFlag = false;
        }
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.initTagCloud = /**
         * @return {?}
         */
            function () {
                // 给point注册一个词云的shape
                G2.Shape.registerShape('point', 'cloud', {
                    drawShape: /**
                     * @param {?} cfg
                     * @param {?} container
                     * @return {?}
                     */ function (cfg, container) {
                        /** @type {?} */
                        var attrs = __assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style);
                        return container.addShape('text', {
                            attrs: __assign({}, attrs, { x: cfg.x, y: cfg.y }),
                        });
                    },
                });
            };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.renderChart = /**
         * @return {?}
         */
            function () {
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                this.uninstall();
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var dv = new DataSet.View().source(this.data);
                /** @type {?} */
                var range = dv.range('value');
                /** @type {?} */
                var min = range[0];
                /** @type {?} */
                var max = range[1];
                /** @type {?} */
                var height = +this.height;
                /** @type {?} */
                var width = +this.el.nativeElement.offsetWidth;
                dv.transform({
                    type: 'tag-cloud',
                    fields: ['x', 'value'],
                    size: [width, height],
                    padding: this.padding,
                    timeInterval: 5000,
                    rotate: 
                    // max execute time
                    /**
                     * @return {?}
                     */
                    function () {
                        /** @type {?} */
                        var random = ~~(Math.random() * 4) % 4;
                        if (random === 2) {
                            random = 0;
                        }
                        return random * 90; // 0, 90, 270
                    },
                    fontSize: /**
                     * @param {?} d
                     * @return {?}
                     */ function (d) {
                        if (d.value) {
                            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                        }
                        return 0;
                    },
                });
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    width: width,
                    height: height,
                    padding: this.padding,
                    forceFit: true,
                });
                chart.source(dv, {
                    x: { nice: false },
                    y: { nice: false },
                });
                chart.legend(false);
                chart.axis(false);
                chart.tooltip({
                    showTitle: false,
                });
                chart.coord().reflect();
                chart
                    .point()
                    .position('x*y')
                    .color('category')
                    .shape('cloud')
                    .tooltip('value*category');
                chart.render();
                this.chart = chart;
            };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.renderChart(); }); });
            };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.uninstall = /**
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
        G2TagCloudComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.initFlag = true;
                this.zone.runOutsideAngular(function () {
                    return setTimeout(function () {
                        _this.initTagCloud();
                        _this.runInstall();
                    });
                });
            };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.initFlag) {
                    this.runInstall();
                    this.cdr.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.uninstall();
            };
        G2TagCloudComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-tag-cloud',
                        template: "<div #container [ngStyle]=\"{'height.px': height}\"></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        G2TagCloudComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2TagCloudComponent.propDecorators = {
            height: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2TagCloudComponent.prototype, "height", void 0);
        return G2TagCloudComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2TagCloudComponent];
    var G2TagCloudModule = /** @class */ (function () {
        function G2TagCloudModule() {
        }
        G2TagCloudModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2TagCloudModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2TagCloudComponent = G2TagCloudComponent;
    exports.G2TagCloudModule = G2TagCloudModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tag-cloud.umd.js.map