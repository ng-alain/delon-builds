import { Pipe, Inject, LOCALE_ID, NgModule } from '@angular/core';
import { megaNumber, commasNumber } from '@delon/util/format';

/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MegaNumberPipe {
    /**
     * @param {?} locale
     */
    constructor(locale) {
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
        const res = megaNumber(value, precision);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
MegaNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'megaNumber' },] }
];
/** @nocollapse */
MegaNumberPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MegaNumberPipe.prototype.isCN;
}

/**
 * @fileoverview added by tsickle
 * Generated from: commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommasNumberPipe {
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * @param {?} value
     * @param {?=} separator
     * @return {?}
     */
    transform(value, separator = ',') {
        return commasNumber(value, separator);
    }
}
CommasNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'commasNumber' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIPES = [MegaNumberPipe, CommasNumberPipe];
class FormatNumberPipeModule {
}
FormatNumberPipeModule.decorators = [
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

export { CommasNumberPipe, FormatNumberPipeModule, MegaNumberPipe };
//# sourceMappingURL=format-number.js.map
