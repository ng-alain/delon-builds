import { Pipe, Inject, LOCALE_ID, NgModule } from '@angular/core';
import { FormatCurrencyService } from '@delon/util/format';

/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyMegaPipe {
    /**
     * @param {?} srv
     * @param {?} locale
     */
    constructor(srv, locale) {
        this.srv = srv;
        this.isCN = false;
        this.isCN = locale.startsWith('zh');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    transform(value, precision = 2) {
        /** @type {?} */
        const res = this.srv.mega(value, { precision });
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
CurrencyMegaPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyMega' },] }
];
/** @nocollapse */
CurrencyMegaPipe.ctorParameters = () => [
    { type: FormatCurrencyService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.isCN;
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyCommasPipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * @param {?} value
     * @param {?=} separator
     * @return {?}
     */
    transform(value, separator = ',') {
        return this.srv.commas(value, { separator });
    }
}
CurrencyCommasPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyCommas' },] }
];
/** @nocollapse */
CurrencyCommasPipe.ctorParameters = () => [
    { type: FormatCurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyCommasPipe.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIPES = [CurrencyMegaPipe, CurrencyCommasPipe];
class CurrencyPipeModule {
}
CurrencyPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: PIPES,
                exports: PIPES,
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: format-number.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CurrencyCommasPipe, CurrencyMegaPipe, CurrencyPipeModule };
//# sourceMappingURL=format-number.js.map
