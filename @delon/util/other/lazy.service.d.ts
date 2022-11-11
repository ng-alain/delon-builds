import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface LazyResult {
    path: string;
    status: 'ok' | 'error' | 'loading';
    error?: NzSafeAny;
}
/**
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
    load(paths: string | string[]): Promise<LazyResult[]>;
    loadScript(path: string, innerContent?: string): Promise<LazyResult>;
    loadStyle(path: string, rel?: string, innerContent?: string): Promise<LazyResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LazyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LazyService>;
}
