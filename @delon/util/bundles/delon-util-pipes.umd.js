/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/pipes/currency'), require('@delon/util/pipes/format'), require('@delon/util/pipes/filter')) :
	typeof define === 'function' && define.amd ? define('@delon/util/pipes', ['exports', '@delon/util/pipes/currency', '@delon/util/pipes/format', '@delon/util/pipes/filter'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = {}), global.delon.util.pipes.currency, global.delon.util.pipes.format, global.delon.util.pipes.filter));
}(this, (function (exports, currency, format, filter) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * Generated from: index.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * Generated from: delon-util-pipes.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'CurrencyMegaPipe', {
		enumerable: true,
		get: function () {
			return currency.CurrencyMegaPipe;
		}
	});
	Object.defineProperty(exports, 'CurrencyPipeModule', {
		enumerable: true,
		get: function () {
			return currency.CurrencyPipeModule;
		}
	});
	Object.defineProperty(exports, 'CurrencyPricePipe', {
		enumerable: true,
		get: function () {
			return currency.CurrencyPricePipe;
		}
	});
	Object.defineProperty(exports, 'ɵa', {
		enumerable: true,
		get: function () {
			return currency.ɵa;
		}
	});
	Object.defineProperty(exports, 'FormatMaskPipe', {
		enumerable: true,
		get: function () {
			return format.FormatMaskPipe;
		}
	});
	Object.defineProperty(exports, 'FormatPipeModule', {
		enumerable: true,
		get: function () {
			return format.FormatPipeModule;
		}
	});
	Object.defineProperty(exports, 'FilterPipe', {
		enumerable: true,
		get: function () {
			return filter.FilterPipe;
		}
	});
	Object.defineProperty(exports, 'FilterPipeModule', {
		enumerable: true,
		get: function () {
			return filter.FilterPipeModule;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util-pipes.umd.js.map
