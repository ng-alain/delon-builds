/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/card', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.card = {}),global.ng.core,global.ng.common,global.ngZorro.antd,global.delon.util));
}(this, (function (exports,core,common,ngZorroAntd,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var G2CardComponent = /** @class */ (function () {
        function G2CardComponent() {
            this._bordered = false;
            this._avatar = '';
            this._title = '';
            this._action = '';
            this.total = '';
            this._height = 'auto';
            this._footer = '';
            this._loading = false;
        }
        Object.defineProperty(G2CardComponent.prototype, "bordered", {
            /** 是否显示边框 */
            get: /**
             * 是否显示边框
             * @return {?}
             */ function () {
                return this._bordered;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._bordered = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2CardComponent.prototype, "avatar", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._avatar = null;
                    this._avatarTpl = value;
                }
                else
                    this._avatar = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2CardComponent.prototype, "title", {
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
        Object.defineProperty(G2CardComponent.prototype, "action", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._action = null;
                    this._actionTpl = value;
                }
                else
                    this._action = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2CardComponent.prototype, "contentHeight", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._orgHeight = value;
                this._height =
                    typeof value === 'number' ? (this._height = value + "px") : value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2CardComponent.prototype, "footer", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._footer = null;
                    this._footerTpl = value;
                }
                else
                    this._footer = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2CardComponent.prototype, "loading", {
            /** 是否显示Loading */
            get: /**
             * 是否显示Loading
             * @return {?}
             */ function () {
                return this._loading;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._loading = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        G2CardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-card',
                        template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"_action || _actionTpl\">\n            <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"_footer || _footerTpl\">\n      <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                        host: { '[class.g2-card]': 'true' },
                        preserveWhitespaces: false
                    }] }
        ];
        G2CardComponent.propDecorators = {
            bordered: [{ type: core.Input }],
            avatar: [{ type: core.Input }],
            title: [{ type: core.Input }],
            action: [{ type: core.Input }],
            total: [{ type: core.Input }],
            contentHeight: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            loading: [{ type: core.Input }]
        };
        return G2CardComponent;
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
    var COMPONENTS = [G2CardComponent];
    var G2CardModule = /** @class */ (function () {
        function G2CardModule() {
        }
        /**
         * @return {?}
         */
        G2CardModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2CardModule, providers: [] };
            };
        G2CardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2CardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2CardComponent = G2CardComponent;
    exports.G2CardModule = G2CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=card.umd.js.map