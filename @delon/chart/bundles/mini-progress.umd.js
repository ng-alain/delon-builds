/**
 * @license ng-alain(cipchk@qq.com) v8.0.0-rc.1
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-progress', ['exports', '@angular/core', '@delon/theme', '@delon/util', '@angular/common', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-progress'] = {}), global.ng.core, global.delon.theme, global.delon.util, global.ng.common, global['ng-zorro-antd/tooltip']));
}(this, function (exports, core, theme, util, common, tooltip) { 'use strict';

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
    var G2MiniProgressComponent = /** @class */ (function () {
        function G2MiniProgressComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            this.color = '#1890FF';
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        G2MiniProgressComponent.prototype.fixNum = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return Math.min(Math.max(util.toNumber(value), 0), 100);
        };
        /**
         * @return {?}
         */
        G2MiniProgressComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.target = this.fixNum(this.target);
            this.percent = this.fixNum(this.percent);
            this.cdr.detectChanges();
        };
        G2MiniProgressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-progress',
                        exportAs: 'g2MiniProgress',
                        template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                        host: { '[class.g2-mini-progress]': 'true' },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        G2MiniProgressComponent.ctorParameters = function () { return [
            { type: theme.DelonLocaleService },
            { type: core.ChangeDetectorRef }
        ]; };
        G2MiniProgressComponent.propDecorators = {
            color: [{ type: core.Input }],
            target: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            strokeWidth: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2MiniProgressComponent.prototype, "target", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2MiniProgressComponent.prototype, "percent", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
        return G2MiniProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2MiniProgressComponent];
    var G2MiniProgressModule = /** @class */ (function () {
        function G2MiniProgressModule() {
        }
        G2MiniProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, theme.DelonLocaleModule, tooltip.NzToolTipModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2MiniProgressModule;
    }());

    exports.G2MiniProgressComponent = G2MiniProgressComponent;
    exports.G2MiniProgressModule = G2MiniProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mini-progress.umd.js.map
