/**
 * @license ng-alain(cipchk@qq.com) v11.7.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/pipes/currency'), require('@delon/util/pipes/format'), require('@delon/util/pipes/filter')) :
	typeof define === 'function' && define.amd ? define('@delon/util/pipes', ['exports', '@delon/util/pipes/currency', '@delon/util/pipes/format', '@delon/util/pipes/filter'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = {}), global.delon.util.pipes.currency, global.delon.util.pipes.format, global.delon.util.pipes.filter));
}(this, (function (exports, currency, format, filter) { 'use strict';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(currency).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return currency[k];
			}
		});
	});
	Object.keys(format).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return format[k];
			}
		});
	});
	Object.keys(filter).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return filter[k];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes.umd.js.map
