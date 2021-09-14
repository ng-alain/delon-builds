/**
 * @license ng-alain(cipchk@qq.com) v12.2.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/format')) :
    typeof define === 'function' && define.amd ? define('@delon/util/pipes/format', ['exports', '@angular/core', '@delon/util/format'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = global.delon.util.pipes || {}, global.delon.util.pipes.format = {}), global.ng.core, global.delon.util.format));
}(this, (function (exports, core, format) { 'use strict';

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
    FormatMaskPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'mask' },] }
    ];

    var PIPES = [FormatMaskPipe];
    var FormatPipeModule = /** @class */ (function () {
        function FormatPipeModule() {
        }
        return FormatPipeModule;
    }());
    FormatPipeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: PIPES,
                    exports: PIPES
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormatMaskPipe = FormatMaskPipe;
    exports.FormatPipeModule = FormatPipeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes-format.umd.js.map
