/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns/addSeconds'), require('date-fns/format'), require('@angular/common'), require('ngx-countdown')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/count-down', ['exports', '@angular/core', 'date-fns/addSeconds', 'date-fns/format', '@angular/common', 'ngx-countdown'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['count-down'] = {}), global.ng.core, global.addSeconds, global.format, global.ng.common, global.ngxCountDown));
}(this, (function (exports, i0, addSeconds, format, i1, i2) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var addSeconds__default = /*#__PURE__*/_interopDefaultLegacy(addSeconds);
    var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

    var CountDownComponent = /** @class */ (function () {
        function CountDownComponent() {
            this.event = new i0.EventEmitter();
        }
        Object.defineProperty(CountDownComponent.prototype, "target", {
            /**
             * 目标时间
             */
            set: function (value) {
                this.config = {
                    format: "HH:mm:ss",
                    stopTime: typeof value === 'number' ? addSeconds__default['default'](new Date(), value).valueOf() : +format__default['default'](value, 't'),
                };
            },
            enumerable: false,
            configurable: true
        });
        CountDownComponent.prototype.handleEvent = function (e) {
            this.event.emit(e);
        };
        return CountDownComponent;
    }());
    /** @nocollapse */ CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(); };
    /** @nocollapse */ CountDownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: CountDownComponent, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["countDown"], ngImport: i0__namespace, template: " <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown> ", isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountDownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'count-down',
                        exportAs: 'countDown',
                        template: " <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown> ",
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, { instance: [{
                    type: i0.ViewChild,
                    args: ['cd', { static: false }]
                }], config: [{
                    type: i0.Input
                }], target: [{
                    type: i0.Input
                }], event: [{
                    type: i0.Output
                }] });
    })();

    var COMPONENTS = [CountDownComponent];
    var CountDownModule = /** @class */ (function () {
        function CountDownModule() {
        }
        return CountDownModule;
    }());
    /** @nocollapse */ CountDownModule.ɵmod = i0.ɵɵdefineNgModule({ type: CountDownModule });
    /** @nocollapse */ CountDownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CountDownModule_Factory(t) { return new (t || CountDownModule)(); }, imports: [[i1.CommonModule, i2.CountdownModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CountDownModule, { declarations: [CountDownComponent], imports: [i1.CommonModule, i2.CountdownModule], exports: [CountDownComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountDownModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, i2.CountdownModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CountDownComponent = CountDownComponent;
    exports.CountDownModule = CountDownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=count-down.umd.js.map
