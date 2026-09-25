import * as i0 from "@angular/core";
import { PipeTransform } from "@angular/core";
import { CurrencyCNYOptions, CurrencyFormatOptions, CurrencyMegaOptions } from "@delon/util/format";
declare namespace mega_pipe_d_exports {
  export { CurrencyMegaPipe };
}
/**
 * Large number format filter
 *
 * 大数据格式化
 */
export declare class CurrencyMegaPipe implements PipeTransform {
  private readonly srv;
  private isCN;
  transform(value: number | string, options?: CurrencyMegaOptions): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyMegaPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyMegaPipe, "mega", true>;
}
declare namespace price_pipe_d_exports {
  export { CurrencyPricePipe };
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
export declare class CurrencyPricePipe implements PipeTransform {
  private readonly srv;
  transform(value: number | string, options?: CurrencyFormatOptions): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyPricePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyPricePipe, "price", true>;
}
declare namespace cny_pipe_d_exports {
  export { CurrencyCNYPipe };
}
/**
 * Converted into RMB notation.
 *
 * 转化成人民币表示法
 */
export declare class CurrencyCNYPipe implements PipeTransform {
  private readonly srv;
  transform(value: number | string, options?: CurrencyCNYOptions): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyCNYPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyCNYPipe, "cny", true>;
}
export declare class CurrencyPipeModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyPipeModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<CurrencyPipeModule, never, [typeof CurrencyMegaPipe, typeof CurrencyPricePipe, typeof CurrencyCNYPipe], [typeof CurrencyMegaPipe, typeof CurrencyPricePipe, typeof CurrencyCNYPipe]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<CurrencyPipeModule>;
}