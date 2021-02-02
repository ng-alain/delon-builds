import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { XlsxExportOptions, XlsxExportResult } from './xlsx.types';
import * as i0 from "@angular/core";
export declare class XlsxService {
    private http;
    private lazy;
    private ngZone;
    constructor(http: HttpClient, lazy: LazyService, configSrv: AlainConfigService, ngZone: NgZone);
    private cog;
    private init;
    private read;
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     */
    import(fileOrUrl: File | string): Promise<{
        [key: string]: any[][];
    }>;
    /**
     * @deprecated 无须指定 `rABS` 参数，从12.x后将移除
     *
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param rABS 加载数据方式 `readAsBinaryString` 或 `readAsArrayBuffer` （默认），[更多细节](http://t.cn/R3n63A0)
     */
    import(fileOrUrl: File | string, rABS: 'readAsBinaryString' | 'readAsArrayBuffer'): Promise<{
        [key: string]: any[][];
    }>;
    export(options: XlsxExportOptions): Promise<XlsxExportResult>;
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    numberToSchema(val: number): string;
    static ɵfac: i0.ɵɵFactoryDef<XlsxService, never>;
    static ɵprov: i0.ɵɵInjectableDef<XlsxService>;
}
