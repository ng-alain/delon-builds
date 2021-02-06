import { Pipe, Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CurrencyService } from '@delon/util/format';

class CurrencyMegaPipe {
    constructor(srv, locale) {
        this.srv = srv;
        this.isCN = false;
        this.isCN = locale.startsWith('zh');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     */
    transform(value, options) {
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

class CurrencyPricePipe {
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

class CurrencyCNYPipe {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
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
 * Generated bundle index. Do not edit.
 */

export { CurrencyMegaPipe, CurrencyPipeModule, CurrencyPricePipe, CurrencyCNYPipe as ɵa };
//# sourceMappingURL=delon-util-pipes-currency.js.map
