import type jsZipType from 'jszip';
import { AlainConfigService } from '@delon/util/config';
import { ZipSaveOptions } from './zip.types';
import * as i0 from "@angular/core";
export declare class ZipService {
    private readonly http;
    private readonly lazy;
    private readonly ngZone;
    private cog;
    constructor(configSrv: AlainConfigService);
    private init;
    private check;
    /** 解压 */
    read(fileOrUrl: File | string, options?: jsZipType.JSZipLoadOptions): Promise<jsZipType>;
    /** 创建 Zip 实例，用于创建压缩文件 */
    create(): Promise<jsZipType | null>;
    /**
     * 下载URL资源并写入 zip
     *
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    pushUrl(zip: jsZipType | null, path: string, url: string): Promise<void>;
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param zip zip 对象，务必通过 `create()` 构建
     * @param options 额外参数，
     */
    save(zip: jsZipType | null, options?: ZipSaveOptions): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZipService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ZipService>;
}
