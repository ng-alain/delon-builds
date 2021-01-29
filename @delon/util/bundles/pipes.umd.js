/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/pipes/format-number')) :
	typeof define === 'function' && define.amd ? define('@delon/util/pipes', ['exports', '@delon/util/pipes/format-number'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.pipes = {}), global.delon.util.pipes['format-number']));
}(this, (function (exports, formatNumber) { 'use strict';

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

	Object.defineProperty(exports, 'CommasNumberPipe', {
		enumerable: true,
		get: function () {
			return formatNumber.CommasNumberPipe;
		}
	});
	Object.defineProperty(exports, 'FormatNumberPipeModule', {
		enumerable: true,
		get: function () {
			return formatNumber.FormatNumberPipeModule;
		}
	});
	Object.defineProperty(exports, 'MegaNumberPipe', {
		enumerable: true,
		get: function () {
			return formatNumber.MegaNumberPipe;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pipes.umd.js.map
