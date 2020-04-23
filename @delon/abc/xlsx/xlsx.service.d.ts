import { HttpClient } from '@angular/common/http';
import { AlainConfigService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { XlsxExportOptions } from './xlsx.types';
export declare class XlsxService {
    private http;
    private lazy;
    private cog;
    constructor(http: HttpClient, lazy: LazyService, configSrv: AlainConfigService);
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
}
