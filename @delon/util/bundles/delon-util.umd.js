/**
 * @license ng-alain(cipchk@qq.com) v12.2.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/array'), require('@delon/util/browser'), require('@delon/util/config'), require('@delon/util/date-time'), require('@delon/util/form'), require('@delon/util/format'), require('@delon/util/math'), require('@delon/util/decorator'), require('@delon/util/other'), require('@delon/util/pipes'), require('@delon/util/token')) :
	typeof define === 'function' && define.amd ? define('@delon/util', ['exports', '@delon/util/array', '@delon/util/browser', '@delon/util/config', '@delon/util/date-time', '@delon/util/form', '@delon/util/format', '@delon/util/math', '@delon/util/decorator', '@delon/util/other', '@delon/util/pipes', '@delon/util/token'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = {}), global.delon.util.array, global.delon.util.browser, global.delon.util.config, global.delon.util['date-time'], global.delon.util.form, global.delon.util.format, global.delon.util.math, global.delon.util.decorator, global.delon.util.other, global.delon.util.pipes, global.delon.util.token));
}(this, (function (exports, array, browser, config, dateTime, form, format, math, decorator, other, pipes, token) { 'use strict';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(array).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return array[k];
			}
		});
	});
	Object.keys(browser).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return browser[k];
			}
		});
	});
	Object.keys(config).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return config[k];
			}
		});
	});
	Object.keys(dateTime).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return dateTime[k];
			}
		});
	});
	Object.keys(form).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return form[k];
			}
		});
	});
	Object.keys(format).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return format[k];
			}
		});
	});
	Object.keys(math).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return math[k];
			}
		});
	});
	Object.keys(decorator).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return decorator[k];
			}
		});
	});
	Object.keys(other).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return other[k];
			}
		});
	});
	Object.keys(pipes).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return pipes[k];
			}
		});
	});
	Object.keys(token).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return token[k];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util.umd.js.map
