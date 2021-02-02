/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns/addSeconds'), require('date-fns/format'), require('@angular/common'), require('ngx-countdown')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/count-down', ['exports', '@angular/core', 'date-fns/addSeconds', 'date-fns/format', '@angular/common', 'ngx-countdown'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['count-down'] = {}), global.ng.core, global.addSeconds, global.format, global.ng.common, global.ngxCountDown));
}(this, (function (exports, core, addSeconds, format, common, ngxCountdown) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var addSeconds__default = /*#__PURE__*/_interopDefaultLegacy(addSeconds);
    var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

    /**
     * @fileoverview added by tsickle
     * Generated from: count-down.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CountDownComponent = /** @class */ (function () {
        function CountDownComponent() {
            this.event = new core.EventEmitter();
        }
        Object.defineProperty(CountDownComponent.prototype, "target", {
            /**
             * 目标时间
             * @param {?} value
             * @return {?}
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
        /**
         * @param {?} e
         * @return {?}
         */
        CountDownComponent.prototype.handleEvent = function (e) {
            this.event.emit(e);
        };
        return CountDownComponent;
    }());
    CountDownComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: " <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown> ",
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    CountDownComponent.propDecorators = {
        instance: [{ type: core.ViewChild, args: ['cd', { static: false },] }],
        config: [{ type: core.Input }],
        target: [{ type: core.Input }],
        event: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        CountDownComponent.prototype.instance;
        /** @type {?} */
        CountDownComponent.prototype.config;
        /** @type {?} */
        CountDownComponent.prototype.event;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: count-down.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [CountDownComponent];
    var CountDownModule = /** @class */ (function () {
        function CountDownModule() {
        }
        return CountDownModule;
    }());
    CountDownModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, ngxCountdown.CountdownModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: count-down.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CountDownComponent = CountDownComponent;
    exports.CountDownModule = CountDownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=count-down.umd.js.map
