import { XlsxService } from '@delon/abc/xlsx';
import { STExportOptions } from './st.interfaces';
export declare class STExport {
    private xlsxSrv;
    constructor(xlsxSrv: XlsxService);
    private _stGet;
    private genSheet;
    export(opt: STExportOptions): Promise<import("../../../dist/@delon/abc/xlsx/xlsx.types").XlsxExportResult>;
}
