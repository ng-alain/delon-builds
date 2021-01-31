/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/pipes/currency')) :
	typeof define === 'function' && define.amd ? define('@delon/util/pipes', ['exports', '@delon/util/pipes/currency'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = {}), global.delon.util.pipes.currency));
}(this, (function (exports, currency) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * Generated from: index.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * Generated from: pipes.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'CurrencyCommasPipe', {
		enumerable: true,
		get: function () {
			return currency.CurrencyCommasPipe;
		}
	});
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
	Object.defineProperty(exports, 'ɵa', {
		enumerable: true,
		get: function () {
			return currency.ɵa;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pipes.umd.js.map
