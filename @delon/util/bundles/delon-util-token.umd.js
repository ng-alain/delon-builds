/**
 * @license ng-alain(cipchk@qq.com) v11.6.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/util/token', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.token = {}), global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, common, core, rxjs, operators) { 'use strict';

    /**
     * Access to global `window` object
     *
     * 访问全局 `window` 对象
     */
    var WINDOW = new core.InjectionToken('WINDOW', {
        factory: function () {
            var defaultView = core.inject(common.DOCUMENT).defaultView;
            if (!defaultView) {
                throw new Error('Window is not available');
            }
            return defaultView;
        },
    });

    /**
     * Use the `visibilitychange` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests
     *
     * 通过 `visibilitychange` 事件来监听浏览器选项卡是否可见，一般用于当用户离开应用时暂时中断后端持续发送请求时
     */
    var PAGE_VISIBILITY = new core.InjectionToken('PAGE_VISIBILITY`', {
        factory: function () {
            var doc = core.inject(common.DOCUMENT);
            return rxjs.fromEvent(doc, 'visibilitychange').pipe(operators.startWith(0), operators.map(function () { return !doc.hidden; }), operators.distinctUntilChanged(), operators.share());
        },
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PAGE_VISIBILITY = PAGE_VISIBILITY;
    exports.WINDOW = WINDOW;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-token.umd.js.map
