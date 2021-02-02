import { Pipe, Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CurrencyService } from '@delon/util/format';

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
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        /** @type {?} */
        const res = this.srv.mega(value, options);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
CurrencyMegaPipe.decorators = [
    { type: Pipe, args: [{ name: 'mega' },] }
];
/** @nocollapse */
CurrencyMegaPipe.ctorParameters = () => [
    { type: CurrencyService },
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
 * Generated from: price.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyPricePipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 格式化货币，用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * 10000.567 => `10,000.57`
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        return this.srv.format(value, options);
    }
}
CurrencyPricePipe.decorators = [
    { type: Pipe, args: [{ name: 'price' },] }
];
/** @nocollapse */
CurrencyPricePipe.ctorParameters = () => [
    { type: CurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyPricePipe.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: cny.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyCNYPipe {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        return this.srv.cny(value, options);
    }
}
CurrencyCNYPipe.decorators = [
    { type: Pipe, args: [{ name: 'cny' },] }
];
/** @nocollapse */
CurrencyCNYPipe.ctorParameters = () => [
    { type: CurrencyService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyCNYPipe.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
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
 * Generated from: pipe-currency.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CurrencyMegaPipe, CurrencyPipeModule, CurrencyPricePipe, CurrencyCNYPipe as ɵa };
//# sourceMappingURL=pipe-currency.js.map
