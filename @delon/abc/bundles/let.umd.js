/**
 * @license ng-alain(cipchk@qq.com) v12.0.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/let', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.let = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var LetContext = /** @class */ (function () {
        function LetContext(dir) {
            this.dir = dir;
        }
        Object.defineProperty(LetContext.prototype, "$implicit", {
            get: function () {
                return this.dir.let;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LetContext.prototype, "let", {
            get: function () {
                return this.dir.let;
            },
            enumerable: false,
            configurable: true
        });
        return LetContext;
    }());
    var LetDirective = /** @class */ (function () {
        function LetDirective(vc, ref) {
            vc.createEmbeddedView(ref, new LetContext(this));
        }
        LetDirective.ngTemplateContextGuard = function (_dir, _ctx) {
            return true;
        };
        return LetDirective;
    }());
    LetDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[let]' },] }
    ];
    LetDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef, decorators: [{ type: core.Inject, args: [core.ViewContainerRef,] }] },
        { type: core.TemplateRef, decorators: [{ type: core.Inject, args: [core.TemplateRef,] }] }
    ]; };
    LetDirective.propDecorators = {
        let: [{ type: core.Input }]
    };

    var DIRECTIVES = [LetDirective];
    var LetModule = /** @class */ (function () {
        function LetModule() {
        }
        return LetModule;
    }());
    LetModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LetContext = LetContext;
    exports.LetDirective = LetDirective;
    exports.LetModule = LetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=let.umd.js.map
