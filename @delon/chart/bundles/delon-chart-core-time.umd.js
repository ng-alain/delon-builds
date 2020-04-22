/**
 * @license ng-alain(cipchk@qq.com) v9.0.0-rc.3
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@delon/chart/core/time', ['exports'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.core = global.delon.chart.core || {}, global.delon.chart.core.time = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: time.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} val
     * @return {?}
     */
    function toDate(val) {
        if (val instanceof Date)
            return val;
        if (typeof val === 'number')
            return new Date(val);
        return new Date(val);
    }

    exports.toDate = toDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-chart-core-time.umd.js.map
