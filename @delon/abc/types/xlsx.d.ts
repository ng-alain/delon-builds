import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';

interface XlsxExportOptions {
    /**
     * worksheets in the workbook, e.g:
     * - `{ Sheet1: { A1: { t:"n", v:10000 } } }`
     * - `[['1'], [1]]`
     */
    sheets: Record<string, NzSafeAny> | XlsxExportSheet[];
    /** File format, default: `xlsx` */
    format?: 'csv' | 'xlsx';
    /** save file name, default: `export.xlsx` */
    filename?: string;
    /** See [Writing Options](https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md) */
    opts?: NzSafeAny;
    /** triggers when saveas */
    callback?: (wb: NzSafeAny) => void;
}
interface XlsxExportSheet {
    /** arrays to a worksheet */
    data: NzSafeAny[][];
    /** sheet name */
    name?: string;
}
interface XlsxExportResult {
    filename: string;
    wb: NzSafeAny;
}

declare class XlsxService {
    private readonly http;
    private readonly lazy;
    private readonly ngZone;
    private readonly cogSrv;
    private cog;
    constructor();
    private init;
    private read;
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     */
    import(fileOrUrl: File | string): Promise<Record<string, NzSafeAny[][]>>;
    export(options: XlsxExportOptions): Promise<XlsxExportResult>;
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    numberToSchema(val: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<XlsxService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<XlsxService>;
}

declare class XlsxDirective {
    private readonly srv;
    readonly xlsx: i0.InputSignal<XlsxExportOptions>;
    protected _click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XlsxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<XlsxDirective, "[xlsx]", ["xlsx"], { "xlsx": { "alias": "xlsx"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class XlsxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<XlsxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<XlsxModule, never, [typeof XlsxDirective], [typeof XlsxDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<XlsxModule>;
}

export { XlsxDirective, XlsxModule, XlsxService };
export type { XlsxExportOptions, XlsxExportResult, XlsxExportSheet };
