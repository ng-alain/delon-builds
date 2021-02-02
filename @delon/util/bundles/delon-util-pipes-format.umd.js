/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/format', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes.format = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, i0, format) { 'use strict';

    var FormatMaskPipe = /** @class */ (function () {
        function FormatMaskPipe() {
        }
        /**
         * Format mask
         *
         * 格式化掩码
         * ```ts
         * formatMask('123', '(###)') => (123)
         * ```
         */
        FormatMaskPipe.prototype.transform = function (value, mask) {
            return format.formatMask(value, mask);
        };
        return FormatMaskPipe;
    }());
    /** @nocollapse */ FormatMaskPipe.ɵfac = function FormatMaskPipe_Factory(t) { return new (t || FormatMaskPipe)(); };
    /** @nocollapse */ FormatMaskPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "mask", type: FormatMaskPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatMaskPipe, [{
                type: i0.Pipe,
                args: [{ name: 'mask' }]
            }], null, null);
    })();

    var PIPES = [FormatMaskPipe];
    var FormatPipeModule = /** @class */ (function () {
        function FormatPipeModule() {
        }
        return FormatPipeModule;
    }());
    /** @nocollapse */ FormatPipeModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormatPipeModule });
    /** @nocollapse */ FormatPipeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormatPipeModule_Factory(t) { return new (t || FormatPipeModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormatPipeModule, { declarations: [FormatMaskPipe], exports: [FormatMaskPipe] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatPipeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: PIPES,
                        exports: PIPES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormatMaskPipe = FormatMaskPipe;
    exports.FormatPipeModule = FormatPipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes-format.umd.js.map
