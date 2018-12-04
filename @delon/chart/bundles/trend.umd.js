/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/trend', ['exports', '@angular/core', 'ng-zorro-antd', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.trend = {}),global.ng.core,global.ngZorroAntd,global.ng.common,global.delon.util));
}(this, (function (exports,core,ngZorroAntd,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TrendComponent = /** @class */ (function () {
        function TrendComponent() {
            this._colorful = true;
            this._reverseColor = false;
        }
        Object.defineProperty(TrendComponent.prototype, "colorful", {
            /** 是否彩色标记 */
            get: /**
             * 是否彩色标记
             * @return {?}
             */ function () {
                return this._colorful;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._colorful = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrendComponent.prototype, "reverseColor", {
            /** 颜色反转 */
            get: /**
             * 颜色反转
             * @return {?}
             */ function () {
                return this._reverseColor;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._reverseColor = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        TrendComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'trend',
                        template: "\n  <ng-content></ng-content>\n  <span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon type=\"caret-{{flag}}\"></i></span>\n  ",
                        host: {
                            '[class.trend]': 'true',
                            '[class.trend__grey]': '!colorful',
                            '[class.trend__reverse]': 'colorful && reverseColor',
                        },
                        preserveWhitespaces: false
                    }] }
        ];
        TrendComponent.propDecorators = {
            flag: [{ type: core.Input }],
            colorful: [{ type: core.Input }],
            reverseColor: [{ type: core.Input }]
        };
        return TrendComponent;
    }());

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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [TrendComponent];
    var TrendModule = /** @class */ (function () {
        function TrendModule() {
        }
        /**
         * @return {?}
         */
        TrendModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: TrendModule, providers: [] };
            };
        TrendModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return TrendModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.TrendComponent = TrendComponent;
    exports.TrendModule = TrendModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=trend.umd.js.map