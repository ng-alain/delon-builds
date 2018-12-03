/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@delon/abc/error-collect'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/footer-toolbar', ['exports', '@angular/core', '@angular/common', '@delon/abc/error-collect', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['footer-toolbar'] = {}),global.ng.core,global.ng.common,global.delon.abc['error-collect'],global.delon.util));
}(this, (function (exports,core,common,errorCollect,util) { 'use strict';

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
    var CLSBODY = 'footer-toolbar__body';
    var FooterToolbarComponent = /** @class */ (function () {
        function FooterToolbarComponent(el, renderer, doc) {
            this.el = el;
            this.renderer = renderer;
            this.doc = doc;
            this.errorCollect = false;
            this._extra = '';
        }
        Object.defineProperty(FooterToolbarComponent.prototype, "extra", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._extra = null;
                    this._extraTpl = value;
                }
                else {
                    this._extra = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FooterToolbarComponent.prototype, "bodyCls", {
            get: /**
             * @return {?}
             */ function () {
                return this.doc.querySelector('body').classList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FooterToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
                this.bodyCls.add(CLSBODY);
            };
        /**
         * @return {?}
         */
        FooterToolbarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.bodyCls.remove(CLSBODY);
            };
        FooterToolbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'footer-toolbar',
                        template: "<div class=\"footer-toolbar__left\">\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        FooterToolbarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        FooterToolbarComponent.propDecorators = {
            errorCollect: [{ type: core.Input }],
            extra: [{ type: core.Input }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], FooterToolbarComponent.prototype, "errorCollect", void 0);
        return FooterToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [FooterToolbarComponent];
    var FooterToolbarModule = /** @class */ (function () {
        function FooterToolbarModule() {
        }
        /**
         * @return {?}
         */
        FooterToolbarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: FooterToolbarModule, providers: [] };
            };
        FooterToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, errorCollect.ErrorCollectModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return FooterToolbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.FooterToolbarComponent = FooterToolbarComponent;
    exports.FooterToolbarModule = FooterToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=footerToolbar.umd.js.map