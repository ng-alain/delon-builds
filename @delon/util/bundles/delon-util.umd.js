/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/util/array'), require('@delon/util/browser'), require('@delon/util/config'), require('@delon/util/date-time'), require('@delon/util/form'), require('@delon/util/format'), require('@delon/util/math'), require('@delon/util/decorator'), require('@delon/util/other'), require('@delon/util/pipes'), require('@delon/util/token')) :
	typeof define === 'function' && define.amd ? define('@delon/util', ['exports', '@delon/util/array', '@delon/util/browser', '@delon/util/config', '@delon/util/date-time', '@delon/util/form', '@delon/util/format', '@delon/util/math', '@delon/util/decorator', '@delon/util/other', '@delon/util/pipes', '@delon/util/token'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = {}), global.delon.util.array, global.delon.util.browser, global.delon.util.config, global.delon.util['date-time'], global.delon.util.form, global.delon.util.format, global.delon.util.math, global.delon.util.decorator, global.delon.util.other, global.delon.util.pipes, global.delon.util.token));
}(this, (function (exports, array, browser, config, dateTime, form, format, math, decorator, other, pipes, token) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * Generated from: index.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * Generated from: delon-util.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'ArrayService', {
		enumerable: true,
		get: function () {
			return array.ArrayService;
		}
	});
	Object.defineProperty(exports, 'CookieService', {
		enumerable: true,
		get: function () {
			return browser.CookieService;
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
	Object.defineProperty(exports, 'DateTimePickerUtil', {
		enumerable: true,
		get: function () {
			return dateTime.DateTimePickerUtil;
		}
	});
	Object.defineProperty(exports, 'dateTimePickerUtil', {
		enumerable: true,
		get: function () {
			return dateTime.dateTimePickerUtil;
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
	Object.defineProperty(exports, 'CurrencyMega_Powers', {
		enumerable: true,
		get: function () {
			return format.CurrencyMega_Powers;
		}
	});
	Object.defineProperty(exports, 'CurrencyService', {
		enumerable: true,
		get: function () {
			return format.CurrencyService;
		}
	});
	Object.defineProperty(exports, 'REGEX', {
		enumerable: true,
		get: function () {
			return format.REGEX;
		}
	});
	Object.defineProperty(exports, 'REGEX_STR', {
		enumerable: true,
		get: function () {
			return format.REGEX_STR;
		}
	});
	Object.defineProperty(exports, 'format', {
		enumerable: true,
		get: function () {
			return format.format;
		}
	});
	Object.defineProperty(exports, 'formatMask', {
		enumerable: true,
		get: function () {
			return format.formatMask;
		}
	});
	Object.defineProperty(exports, 'isChinese', {
		enumerable: true,
		get: function () {
			return format.isChinese;
		}
	});
	Object.defineProperty(exports, 'isColor', {
		enumerable: true,
		get: function () {
			return format.isColor;
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
	Object.defineProperty(exports, 'isIp', {
		enumerable: true,
		get: function () {
			return format.isIp;
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
	Object.defineProperty(exports, 'assertArray', {
		enumerable: true,
		get: function () {
			return other.assertArray;
		}
	});
	Object.defineProperty(exports, 'assertEmpty', {
		enumerable: true,
		get: function () {
			return other.assertEmpty;
		}
	});
	Object.defineProperty(exports, 'assertNumber', {
		enumerable: true,
		get: function () {
			return other.assertNumber;
		}
	});
	Object.defineProperty(exports, 'assertObservable', {
		enumerable: true,
		get: function () {
			return other.assertObservable;
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
	Object.defineProperty(exports, 'CurrencyMegaPipe', {
		enumerable: true,
		get: function () {
			return pipes.CurrencyMegaPipe;
		}
	});
	Object.defineProperty(exports, 'CurrencyPipeModule', {
		enumerable: true,
		get: function () {
			return pipes.CurrencyPipeModule;
		}
	});
	Object.defineProperty(exports, 'CurrencyPricePipe', {
		enumerable: true,
		get: function () {
			return pipes.CurrencyPricePipe;
		}
	});
	Object.defineProperty(exports, 'FilterPipe', {
		enumerable: true,
		get: function () {
			return pipes.FilterPipe;
		}
	});
	Object.defineProperty(exports, 'FilterPipeModule', {
		enumerable: true,
		get: function () {
			return pipes.FilterPipeModule;
		}
	});
	Object.defineProperty(exports, 'FormatMaskPipe', {
		enumerable: true,
		get: function () {
			return pipes.FormatMaskPipe;
		}
	});
	Object.defineProperty(exports, 'FormatPipeModule', {
		enumerable: true,
		get: function () {
			return pipes.FormatPipeModule;
		}
	});
	Object.defineProperty(exports, 'ɵa', {
		enumerable: true,
		get: function () {
			return pipes.ɵa;
		}
	});
	Object.defineProperty(exports, 'PAGE_VISIBILITY', {
		enumerable: true,
		get: function () {
			return token.PAGE_VISIBILITY;
		}
	});
	Object.defineProperty(exports, 'WINDOW', {
		enumerable: true,
		get: function () {
			return token.WINDOW;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-util.umd.js.map
