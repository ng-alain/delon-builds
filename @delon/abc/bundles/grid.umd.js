/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/theme'), require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/grid', ['exports', '@delon/theme', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.grid = {}),global.delon.theme,global.ng.common,global.ng.core,global.delon.util));
}(this, (function (exports,theme,common,core,util) { 'use strict';

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
    var SGConfig = /** @class */ (function () {
        function SGConfig() {
            /**
             * 间距，默认：`32`
             */
            this.gutter = 32;
            /**
             * 列数，默认：`2`
             */
            this.col = 2;
        }
        return SGConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SGContainerComponent = /** @class */ (function () {
        function SGContainerComponent(cog) {
            Object.assign(this, cog);
        }
        Object.defineProperty(SGContainerComponent.prototype, "col", {
            get: /**
             * @return {?}
             */ function () {
                return this._col;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var a = util.toNumber(value, 0);
                if (a <= 0)
                    return;
                this._col = util.toNumber(value, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SGContainerComponent.prototype, "marginLeft", {
            //#endregion
            get: 
            //#endregion
            /**
             * @return {?}
             */
            function () {
                return -(this.gutter / 2);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SGContainerComponent.prototype, "marginRight", {
            get: /**
             * @return {?}
             */ function () {
                return -(this.gutter / 2);
            },
            enumerable: true,
            configurable: true
        });
        SGContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sg-container, [sg-container]',
                        template: "\n    <ng-content></ng-content>\n  ",
                        host: {
                            '[class.ant-row]': 'true',
                            '[class.sg__wrap]': 'true',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SGContainerComponent.ctorParameters = function () {
            return [
                { type: SGConfig }
            ];
        };
        SGContainerComponent.propDecorators = {
            gutter: [{ type: core.Input }],
            col: [{ type: core.Input, args: ['sg-container',] }],
            marginLeft: [{ type: core.HostBinding, args: ['style.margin-left.px',] }],
            marginRight: [{ type: core.HostBinding, args: ['style.margin-right.px',] }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SGContainerComponent.prototype, "gutter", void 0);
        return SGContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls = "sg";
    var SGComponent = /** @class */ (function () {
        function SGComponent(parent, rep, el, ren) {
            this.parent = parent;
            this.rep = rep;
            this.ren = ren;
            this.clsMap = [];
            this.inited = false;
            if (parent == null) {
                throw new Error("[sg] must include 'sg-container' component");
            }
            this.el = el.nativeElement;
        }
        Object.defineProperty(SGComponent.prototype, "paddingLeft", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SGComponent.prototype, "paddingRight", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        SGComponent.prototype.setClass = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
            function () {
                var _a = ( /** @type {?} */(this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent;
                clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
                clsMap.length = 0;
                clsMap.push.apply(clsMap, __spread(( /** @type {?} */(this)).rep.genCls(col != null ? col : parent.col), [prefixCls + "__item"]));
                clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
                return ( /** @type {?} */(this));
            };
        /**
         * @return {?}
         */
        SGComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.inited)
                    this.setClass();
            };
        /**
         * @return {?}
         */
        SGComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.setClass();
                this.inited = true;
            };
        SGComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sg',
                        template: "\n    <ng-content></ng-content>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        SGComponent.ctorParameters = function () {
            return [
                { type: SGContainerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
                { type: theme.ResponsiveService },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        SGComponent.propDecorators = {
            col: [{ type: core.Input }],
            paddingLeft: [{ type: core.HostBinding, args: ['style.padding-left.px',] }],
            paddingRight: [{ type: core.HostBinding, args: ['style.padding-right.px',] }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SGComponent.prototype, "col", void 0);
        return SGComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [SGContainerComponent, SGComponent];
    var SGModule = /** @class */ (function () {
        function SGModule() {
        }
        /**
         * @return {?}
         */
        SGModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: SGModule, providers: [SGConfig] };
            };
        SGModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SGModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.SGContainerComponent = SGContainerComponent;
    exports.SGComponent = SGComponent;
    exports.SGConfig = SGConfig;
    exports.SGModule = SGModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=grid.umd.js.map