import * as i0 from '@angular/core';
import { LOCALE_ID, Pipe, Inject, NgModule } from '@angular/core';
import * as i1 from '@delon/util/format';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyMegaPipe, deps: [{ token: i1.CurrencyService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: CurrencyMegaPipe, isStandalone: true, name: "mega" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyMegaPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mega', standalone: true }]
        }], ctorParameters: () => [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPricePipe, deps: [{ token: i1.CurrencyService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPricePipe, isStandalone: true, name: "price" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPricePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'price', standalone: true }]
        }], ctorParameters: () => [{ type: i1.CurrencyService }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyCNYPipe, deps: [{ token: i1.CurrencyService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: CurrencyCNYPipe, isStandalone: true, name: "cny" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyCNYPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cny', standalone: true }]
        }], ctorParameters: () => [{ type: i1.CurrencyService }] });

const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];
class CurrencyPipeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPipeModule, imports: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe], exports: [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPipeModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: CurrencyPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: PIPES,
                    exports: PIPES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CurrencyCNYPipe, CurrencyMegaPipe, CurrencyPipeModule, CurrencyPricePipe };
//# sourceMappingURL=pipe-currency.mjs.map
