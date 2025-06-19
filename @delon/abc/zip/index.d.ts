import jsZipType from 'jszip';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from '@angular/core';

interface ZipWriteOptions {
    /** save file name, default: `download.zip` */
    filename?: string;
    options?: jsZipType.JSZipGeneratorOptions;
    /** The optional function called on each internal update with the metadata. */
    update?: (percent: number, currentFile: string) => void;
    /** triggers when saveas */
    callback?: () => void;
}
interface ZipSaveOptions {
    /**
     * 指定保存文件名，默认 `download.zip`
     */
    filename?: string;
    /**
     * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `options` 选项
     */
    options?: jsZipType.JSZipGeneratorOptions;
    /**
     * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `onUpdate` 回调
     */
    update?: (percent: number, currentFile: string) => void;
    /**
     * 保存前回调方法
     */
    callback?: (blob: Blob) => void;
}

declare class ZipService {
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

export { ZipService };
export type { ZipSaveOptions, ZipWriteOptions };
