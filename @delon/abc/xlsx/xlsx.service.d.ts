import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { XlsxExportOptions } from './xlsx.types';
export declare class XlsxService {
    private http;
    private lazy;
    private ngZone;
    private cog;
    constructor(http: HttpClient, lazy: LazyService, configSrv: AlainConfigService, ngZone: NgZone);
    private init;
    private read;
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     */
    import(fileOrUrl: File | string, rABS?: 'readAsBinaryString' | 'readAsArrayBuffer'): Promise<{
        [key: string]: any[][];
    }>;
    /** 导出 */
    export(options: XlsxExportOptions): Promise<void>;
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    numberToSchema(val: number): string;
}
