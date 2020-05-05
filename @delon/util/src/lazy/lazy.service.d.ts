import { Observable } from 'rxjs';
export interface LazyResult {
    path: string;
    loaded: boolean;
    status: 'ok' | 'error' | 'loading';
    error?: {};
}
/**
 * 延迟加载资源（js 或 css）服务
 */
export declare class LazyService {
    private doc;
    private list;
    private cached;
    private _notify;
    constructor(doc: any);
    get change(): Observable<LazyResult[]>;
    clear(): void;
    load(paths: string | string[]): Promise<LazyResult[]>;
    loadScript(path: string, innerContent?: string): Promise<LazyResult>;
    loadStyle(path: string, rel?: string, innerContent?: string): Promise<LazyResult>;
}
