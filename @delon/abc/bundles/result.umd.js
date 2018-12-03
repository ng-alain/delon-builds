/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/result', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.result = {}),global.ng.core,global.ng.common,global.ngZorroAntd));
}(this, (function (exports,core,common,ngZorroAntd) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ResultComponent = /** @class */ (function () {
        function ResultComponent() {
            this._type = '';
            this._icon = '';
            this._title = '';
            this._description = '';
            this._extra = '';
        }
        Object.defineProperty(ResultComponent.prototype, "type", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value;
                switch (value) {
                    case 'success':
                        this._icon = 'check-circle';
                        break;
                    case 'error':
                        this._icon = 'close-circle';
                        break;
                    default:
                        this._icon = value;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResultComponent.prototype, "title", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                }
                else
                    this._title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResultComponent.prototype, "description", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._description = null;
                    this._descriptionTpl = value;
                }
                else
                    this._description = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResultComponent.prototype, "extra", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._extra = null;
                    this._extraTpl = value;
                }
                else
                    this._extra = value;
            },
            enumerable: true,
            configurable: true
        });
        ResultComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'result',
                        template: "<div class=\"result__icon\"><i nz-icon class=\"anticon anticon-{{_icon}} result__icon-{{_type}}\"></i></div>\n<div class=\"result__title\">\n  <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n</div>\n<div *ngIf=\"_description || _descriptionTpl\" class=\"result__desc\">\n  <ng-container *ngIf=\"_description; else _descriptionTpl\">{{_description}}</ng-container>\n</div>\n<div *ngIf=\"_extra || _extraTpl\" class=\"result__extra\">\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n",
                        host: { '[class.result]': 'true' }
                    }] }
        ];
        ResultComponent.propDecorators = {
            type: [{ type: core.Input }],
            title: [{ type: core.Input }],
            description: [{ type: core.Input }],
            extra: [{ type: core.Input }]
        };
        return ResultComponent;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [ResultComponent];
    var ResultModule = /** @class */ (function () {
        function ResultModule() {
        }
        /**
         * @return {?}
         */
        ResultModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ResultModule, providers: [] };
            };
        ResultModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return ResultModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.ResultComponent = ResultComponent;
    exports.ResultModule = ResultModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=result.umd.js.map