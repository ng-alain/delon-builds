import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface LazyResult {
    path: string;
    status: 'ok' | 'error' | 'loading';
    error?: NzSafeAny;
}
export interface LazyLoadItem {
    path: string;
    options?: LazyLoadOptions;
}
export interface LazyLoadOptions {
    innerContent?: string;
    attributes?: {
        [qualifiedName: string]: string;
    };
    rel?: string;
}
/**
 * `LazyService` delay loading JS or CSS files.
 *
 * 延迟加载资源（js 或 css）服务
 */
export declare class LazyService {
    private doc;
    private list;
    private cached;
    private _notify;
    constructor(doc: NzSafeAny);
    get change(): Observable<LazyResult[]>;
    clear(): void;
    private attachAttributes;
    /**
     * Load script or style files
     */
    load(paths: string | LazyLoadItem | Array<string | LazyLoadItem>): Promise<LazyResult[]>;
    /**
     * Load a script file
     */
    loadScript(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
    /**
     * Load a style file
     */
    loadStyle(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LazyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LazyService>;
}
