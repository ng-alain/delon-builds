/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/array'), require('@delon/util/browser'), require('@delon/util/config'), require('@delon/util/date-time'), require('@delon/util/form'), require('@delon/util/format'), require('@delon/util/math'), require('@delon/util/decorator'), require('@delon/util/other'), require('@delon/util/pipes')) :
	typeof define === 'function' && define.amd ? define('@delon/util', ['exports', '@delon/util/array', '@delon/util/browser', '@delon/util/config', '@delon/util/date-time', '@delon/util/form', '@delon/util/format', '@delon/util/math', '@delon/util/decorator', '@delon/util/other', '@delon/util/pipes'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = {}), global.delon.util.array, global.delon.util.browser, global.delon.util.config, global.delon.util['date-time'], global.delon.util.form, global.delon.util.format, global.delon.util.math, global.delon.util.decorator, global.delon.util.other, global.delon.util.pipes));
}(this, (function (exports, array, browser, config, dateTime, form, format, math, decorator, other, pipes) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * Generated from: public_api.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * Generated from: util.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'ArrayService', {
		enumerable: true,
		get: function () {
			return array.ArrayService;
		}
	});
	Object.defineProperty(exports, 'ScrollService', {
		enumerable: true,
		get: function () {
			return browser.ScrollService;
		}
	});
	Object.defineProperty(exports, 'copy', {
		enumerable: true,
		get: function () {
			return browser.copy;
		}
	});
	Object.defineProperty(exports, 'isEmpty', {
		enumerable: true,
		get: function () {
			return browser.isEmpty;
		}
	});
	Object.defineProperty(exports, 'updateHostClass', {
		enumerable: true,
		get: function () {
			return browser.updateHostClass;
		}
	});
	Object.defineProperty(exports, 'ALAIN_CONFIG', {
		enumerable: true,
		get: function () {
			return config.ALAIN_CONFIG;
		}
	});
	Object.defineProperty(exports, 'ALAIN_CONFIG_FACTORY', {
		enumerable: true,
		get: function () {
			return config.ALAIN_CONFIG_FACTORY;
		}
	});
	Object.defineProperty(exports, 'AlainConfigService', {
		enumerable: true,
		get: function () {
			return config.AlainConfigService;
		}
	});
	Object.defineProperty(exports, 'AlainSVConfig', {
		enumerable: true,
		get: function () {
			return config.AlainSVConfig;
		}
	});
	Object.defineProperty(exports, 'fixEndTimeOfRange', {
		enumerable: true,
		get: function () {
			return dateTime.fixEndTimeOfRange;
		}
	});
	Object.defineProperty(exports, 'getTimeDistance', {
		enumerable: true,
		get: function () {
			return dateTime.getTimeDistance;
		}
	});
	Object.defineProperty(exports, 'toDate', {
		enumerable: true,
		get: function () {
			return dateTime.toDate;
		}
	});
	Object.defineProperty(exports, '_Validators', {
		enumerable: true,
		get: function () {
			return form._Validators;
		}
	});
	Object.defineProperty(exports, 'MEGA_POWERS', {
		enumerable: true,
		get: function () {
			return format.MEGA_POWERS;
		}
	});
	Object.defineProperty(exports, 'commasNumber', {
		enumerable: true,
		get: function () {
			return format.commasNumber;
		}
	});
	Object.defineProperty(exports, 'format', {
		enumerable: true,
		get: function () {
			return format.format;
		}
	});
	Object.defineProperty(exports, 'isDecimal', {
		enumerable: true,
		get: function () {
			return format.isDecimal;
		}
	});
	Object.defineProperty(exports, 'isIdCard', {
		enumerable: true,
		get: function () {
			return format.isIdCard;
		}
	});
	Object.defineProperty(exports, 'isInt', {
		enumerable: true,
		get: function () {
			return format.isInt;
		}
	});
	Object.defineProperty(exports, 'isMobile', {
		enumerable: true,
		get: function () {
			return format.isMobile;
		}
	});
	Object.defineProperty(exports, 'isNum', {
		enumerable: true,
		get: function () {
			return format.isNum;
		}
	});
	Object.defineProperty(exports, 'isUrl', {
		enumerable: true,
		get: function () {
			return format.isUrl;
		}
	});
	Object.defineProperty(exports, 'megaNumber', {
		enumerable: true,
		get: function () {
			return format.megaNumber;
		}
	});
	Object.defineProperty(exports, 'ceil', {
		enumerable: true,
		get: function () {
			return math.ceil;
		}
	});
	Object.defineProperty(exports, 'floor', {
		enumerable: true,
		get: function () {
			return math.floor;
		}
	});
	Object.defineProperty(exports, 'inRange', {
		enumerable: true,
		get: function () {
			return math.inRange;
		}
	});
	Object.defineProperty(exports, 'round', {
		enumerable: true,
		get: function () {
			return math.round;
		}
	});
	Object.defineProperty(exports, 'InputBoolean', {
		enumerable: true,
		get: function () {
			return decorator.InputBoolean;
		}
	});
	Object.defineProperty(exports, 'InputNumber', {
		enumerable: true,
		get: function () {
			return decorator.InputNumber;
		}
	});
	Object.defineProperty(exports, 'propDecoratorFactory', {
		enumerable: true,
		get: function () {
			return decorator.propDecoratorFactory;
		}
	});
	Object.defineProperty(exports, 'toBoolean', {
		enumerable: true,
		get: function () {
			return decorator.toBoolean;
		}
	});
	Object.defineProperty(exports, 'toNumber', {
		enumerable: true,
		get: function () {
			return decorator.toNumber;
		}
	});
	Object.defineProperty(exports, 'LazyService', {
		enumerable: true,
		get: function () {
			return other.LazyService;
		}
	});
	Object.defineProperty(exports, 'PREFIX', {
		enumerable: true,
		get: function () {
			return other.PREFIX;
		}
	});
	Object.defineProperty(exports, 'assert', {
		enumerable: true,
		get: function () {
			return other.assert;
		}
	});
	Object.defineProperty(exports, 'assertNumber', {
		enumerable: true,
		get: function () {
			return other.assertNumber;
		}
	});
	Object.defineProperty(exports, 'assertString', {
		enumerable: true,
		get: function () {
			return other.assertString;
		}
	});
	Object.defineProperty(exports, 'deepCopy', {
		enumerable: true,
		get: function () {
			return other.deepCopy;
		}
	});
	Object.defineProperty(exports, 'deepGet', {
		enumerable: true,
		get: function () {
			return other.deepGet;
		}
	});
	Object.defineProperty(exports, 'deepMerge', {
		enumerable: true,
		get: function () {
			return other.deepMerge;
		}
	});
	Object.defineProperty(exports, 'deepMergeKey', {
		enumerable: true,
		get: function () {
			return other.deepMergeKey;
		}
	});
	Object.defineProperty(exports, 'deprecation11', {
		enumerable: true,
		get: function () {
			return other.deprecation11;
		}
	});
	Object.defineProperty(exports, 'log', {
		enumerable: true,
		get: function () {
			return other.log;
		}
	});
	Object.defineProperty(exports, 'warn', {
		enumerable: true,
		get: function () {
			return other.warn;
		}
	});
	Object.defineProperty(exports, 'warnDeprecation', {
		enumerable: true,
		get: function () {
			return other.warnDeprecation;
		}
	});
	Object.defineProperty(exports, 'CommasNumberPipe', {
		enumerable: true,
		get: function () {
			return pipes.CommasNumberPipe;
		}
	});
	Object.defineProperty(exports, 'FormatNumberPipeModule', {
		enumerable: true,
		get: function () {
			return pipes.FormatNumberPipeModule;
		}
	});
	Object.defineProperty(exports, 'MegaNumberPipe', {
		enumerable: true,
		get: function () {
			return pipes.MegaNumberPipe;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=util.umd.js.map
