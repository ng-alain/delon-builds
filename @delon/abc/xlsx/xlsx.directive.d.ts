import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';
import * as i0 from "@angular/core";
export declare class XlsxDirective {
    private srv;
    data: XlsxExportOptions;
    constructor(srv: XlsxService);
    _click(): void;
    static ɵfac: i0.ɵɵFactoryDef<XlsxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<XlsxDirective, "[xlsx]", ["xlsx"], { "data": "xlsx"; }, {}, never>;
}
