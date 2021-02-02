import { ɵɵdirectiveInject, LOCALE_ID, ɵɵdefinePipe, ɵsetClassMetadata, Pipe, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
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
/** @nocollapse */ CurrencyMegaPipe.ɵfac = function CurrencyMegaPipe_Factory(t) { return new (t || CurrencyMegaPipe)(ɵɵdirectiveInject(CurrencyService), ɵɵdirectiveInject(LOCALE_ID)); };
/** @nocollapse */ CurrencyMegaPipe.ɵpipe = ɵɵdefinePipe({ name: "mega", type: CurrencyMegaPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CurrencyMegaPipe, [{
        type: Pipe,
        args: [{ name: 'mega' }]
    }], function () { return [{ type: CurrencyService }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();

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
/** @nocollapse */ CurrencyPricePipe.ɵfac = function CurrencyPricePipe_Factory(t) { return new (t || CurrencyPricePipe)(ɵɵdirectiveInject(CurrencyService)); };
/** @nocollapse */ CurrencyPricePipe.ɵpipe = ɵɵdefinePipe({ name: "price", type: CurrencyPricePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CurrencyPricePipe, [{
        type: Pipe,
        args: [{ name: 'price' }]
    }], function () { return [{ type: CurrencyService }]; }, null); })();

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
/** @nocollapse */ CurrencyCNYPipe.ɵfac = function CurrencyCNYPipe_Factory(t) { return new (t || CurrencyCNYPipe)(ɵɵdirectiveInject(CurrencyService)); };
/** @nocollapse */ CurrencyCNYPipe.ɵpipe = ɵɵdefinePipe({ name: "cny", type: CurrencyCNYPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CurrencyCNYPipe, [{
        type: Pipe,
        args: [{ name: 'cny' }]
    }], function () { return [{ type: CurrencyService }]; }, null); })();

const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
class CurrencyPipeModule {
}
/** @nocollapse */ CurrencyPipeModule.ɵmod = ɵɵdefineNgModule({ type: CurrencyPipeModule });
/** @nocollapse */ CurrencyPipeModule.ɵinj = ɵɵdefineInjector({ factory: function CurrencyPipeModule_Factory(t) { return new (t || CurrencyPipeModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CurrencyPipeModule, { declarations: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe], exports: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CurrencyPipeModule, [{
        type: NgModule,
        args: [{
                declarations: PIPES,
                exports: PIPES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CurrencyCNYPipe, CurrencyMegaPipe, CurrencyPipeModule, CurrencyPricePipe };
//# sourceMappingURL=delon-util-pipes-currency.js.map
