/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/ellipsis', ['exports', '@angular/common', '@angular/core', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.ellipsis = {}),global.ng.common,global.ng.core,global.delon.util));
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
    var EllipsisComponent = /** @class */ (function () {
        function EllipsisComponent(el, render) {
            /**
             * 在按照行数截取下最大的行数，超过则截取省略
             */
            this.lines = 3;
            render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
        }
        EllipsisComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ellipsis',
                        template: "\n    <ng-content></ng-content>\n  ",
                        host: { '[class.ellipsis]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        EllipsisComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        EllipsisComponent.propDecorators = {
            lines: [{ type: core.Input }, { type: core.HostBinding, args: ['style.-webkit-line-clamp',] }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], EllipsisComponent.prototype, "lines", void 0);
        return EllipsisComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [EllipsisComponent];
    var EllipsisModule = /** @class */ (function () {
        function EllipsisModule() {
        }
        EllipsisModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return EllipsisModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.EllipsisComponent = EllipsisComponent;
    exports.EllipsisModule = EllipsisModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ellipsis.umd.js.map