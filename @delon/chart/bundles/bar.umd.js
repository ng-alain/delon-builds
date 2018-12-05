/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
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
        function G2BarComponent() {
            this.resize$ = null;
            this.inited = false;
            this.color = 'rgba(24, 144, 255, 0.85)';
            this.height = 0;
            this.autoLabel = true;
        }
        /**
         * @return {?}
         */
        G2BarComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                this.uninstall();
                /** @type {?} */
                var container = ( /** @type {?} */(this.node.nativeElement));
                container.innerHTML = '';
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                /** @type {?} */
                var chart = this.chart = new G2.Chart({
                    container: container,
                    forceFit: true,
                    height: this.title ? this.height - TITLE_HEIGHT : this.height,
                    legend: null,
                    padding: this.padding || 'auto',
                });
                this.updatelabel();
                chart.axis('y', {
                    title: false,
                    line: false,
                    tickLine: false,
                });
                chart.source(this.data, {
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
                    .color(this.color)
                    .tooltip('x*y', function (x, y) {
                    return ({
                        name: x,
                        value: y,
                    });
                });
                chart.render();
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.uninstall = /**
         * @return {?}
         */
            function () {
                if (this.chart) {
                    this.chart.destroy();
                }
                this.chart = null;
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.updatelabel = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var canvasWidth = this.node.nativeElement.clientWidth;
                /** @type {?} */
                var minWidth = this.data.length * 30;
                this.chart.axis('x', canvasWidth > minWidth);
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
                    .subscribe(function () { return _this.updatelabel(); });
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.installResizeEvent();
                this.install();
                this.inited = true;
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.inited) {
                    this.installResizeEvent();
                    this.install();
                }
            };
        /**
         * @return {?}
         */
        G2BarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.resize$)
                    this.resize$.unsubscribe();
                this.uninstall();
            };
        G2BarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-bar',
                        template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        G2BarComponent.propDecorators = {
            title: [{ type: core.Input }],
            color: [{ type: core.Input }],
            height: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.Input }],
            padding: [{ type: core.Input }],
            data: [{ type: core.Input }],
            autoLabel: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }]
        };
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