/**
 * @license ng-alain(cipchk@qq.com) v7.3.1
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/number-info', ['exports', '@angular/core', '@delon/util', '@angular/common', 'ng-zorro-antd'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['number-info'] = {}), global.ng.core, global.delon.util, global.ng.common, global.ngZorroAntd));
}(this, function (exports, core, util, common, ngZorroAntd) { 'use strict';

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
    var NumberInfoComponent = /** @class */ (function () {
        function NumberInfoComponent(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            /**
             * 状态样式
             */
            this.theme = 'light';
            /**
             * 设置数字和描述直接的间距（像素）
             */
            this.gap = 8;
        }
        /**
         * @return {?}
         */
        NumberInfoComponent.prototype.setClass = /**
         * @return {?}
         */
        function () {
            var _a;
            var _b = this, el = _b.el, renderer = _b.renderer, theme = _b.theme;
            util.updateHostClass(el.nativeElement, renderer, (_a = {
                    'number-info': true
                },
                _a["number-info__" + theme] = true,
                _a), true);
        };
        /**
         * @return {?}
         */
        NumberInfoComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        NumberInfoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'number-info',
                        exportAs: 'numberInfo',
                        template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *stringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *stringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *stringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NumberInfoComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NumberInfoComponent.propDecorators = {
            title: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            subTotal: [{ type: core.Input }],
            suffix: [{ type: core.Input }],
            status: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            gap: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], NumberInfoComponent.prototype, "gap", void 0);
        return NumberInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NumberInfoComponent];
    var NumberInfoModule = /** @class */ (function () {
        function NumberInfoModule() {
        }
        NumberInfoModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return NumberInfoModule;
    }());

    exports.NumberInfoComponent = NumberInfoComponent;
    exports.NumberInfoModule = NumberInfoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=number-info.umd.js.map
