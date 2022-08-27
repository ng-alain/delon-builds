import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ZipSaveOptions } from './zip.types';
import * as i0 from "@angular/core";
export declare class ZipService {
    private http;
    private lazy;
    private ngZone;
    private cog;
    constructor(http: HttpClient, lazy: LazyService, configSrv: AlainConfigService, ngZone: NgZone);
    private init;
    private check;
    /** 解压 */
    read(fileOrUrl: File | string, options?: NzSafeAny): Promise<NzSafeAny>;
    /** 创建 Zip 实例，用于创建压缩文件 */
    create(): Promise<NzSafeAny | null>;
    /**
     * 下载URL资源并写入 zip
     *
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    pushUrl(zip: NzSafeAny | null, path: string, url: string): Promise<void>;
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param zip zip 对象，务必通过 `create()` 构建
     * @param options 额外参数，
     */
    save(zip: NzSafeAny | null, options?: ZipSaveOptions): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZipService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ZipService>;
}
