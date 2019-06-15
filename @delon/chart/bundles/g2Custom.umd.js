/**
 * @license ng-alain(cipchk@qq.com) v7.7.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/custom', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.custom = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, util, rxjs, operators, common) { 'use strict';

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
    var G2CustomComponent = /** @class */ (function () {
        // #endregion
        function G2CustomComponent(el) {
            this.el = el;
            this.resize$ = null;
            this.resizeTime = 0;
            this.render = new core.EventEmitter();
            this.resize = new core.EventEmitter();
            this.destroy = new core.EventEmitter();
        }
        /**
         * @private
         * @return {?}
         */
        G2CustomComponent.prototype.renderChart = /**
         * @private
         * @return {?}
         */
        function () {
            this.el.nativeElement.innerHTML = '';
            this.render.emit(this.el);
            this.installResizeEvent();
        };
        /**
         * @private
         * @return {?}
         */
        G2CustomComponent.prototype.installResizeEvent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.resizeTime <= 0 || this.resize$)
                return;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(Math.min(200, this.resizeTime)))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.resize.emit(_this.el); }));
        };
        /**
         * @return {?}
         */
        G2CustomComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.renderChart();
        };
        /**
         * @return {?}
         */
        G2CustomComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy.emit(this.el);
            if (this.resize$)
                this.resize$.unsubscribe();
        };
        G2CustomComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2,g2-custom',
                        exportAs: 'g2Custom',
                        template: "\n    <ng-content></ng-content>\n  ",
                        host: {
                            '[style.height.px]': 'height',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2CustomComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        G2CustomComponent.propDecorators = {
            height: [{ type: core.Input }],
            resizeTime: [{ type: core.Input }],
            render: [{ type: core.Output }],
            resize: [{ type: core.Output }],
            destroy: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2CustomComponent.prototype, "height", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], G2CustomComponent.prototype, "resizeTime", void 0);
        return G2CustomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2CustomComponent];
    var G2CustomModule = /** @class */ (function () {
        function G2CustomModule() {
        }
        G2CustomModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2CustomModule;
    }());

    exports.G2CustomComponent = G2CustomComponent;
    exports.G2CustomModule = G2CustomModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=g2Custom.umd.js.map
