import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptorFn, HttpContextToken } from '@angular/common/http';

interface ICache {
    v: any;
    /** 过期时间戳，`0` 表示不过期 */
    e: number;
}
interface ICacheStore {
    get(key: string): ICache | PromiseLike<ICache> | null;
    set(key: string, value: ICache): boolean | PromiseLike<boolean>;
    remove(key: string): void;
}
type CacheNotifyType = 'set' | 'remove' | 'expire';
interface CacheNotifyResult {
    type: CacheNotifyType;
    value?: any;
}

declare class CacheService implements OnDestroy {
    private readonly store;
    private readonly http;
    private readonly platform;
    private readonly memory;
    private readonly notifyBuffer;
    private meta;
    private freqTick;
    private freqTime;
    private cog;
    constructor();
    private pushMeta;
    private removeMeta;
    private loadMeta;
    private saveMeta;
    getMeta(): Set<string>;
    /**
     * Persistent cached `Observable` object, for example:
     * - `set('data/1', this.http.get('data/1')).subscribe()`
     * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
     */
    set<T>(key: string, data: Observable<T>, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<T>;
    /**
     * Persistent cached `Observable` object, for example:
     * - `set('data/1', this.http.get('data/1')).subscribe()`
     * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
     */
    set(key: string, data: Observable<any>, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<any>;
    /**
     * Persistent cached simple object, for example:
     * - `set('data/1', 1)`
     * - `set('data/1', 1, { expire: 10 })`
     */
    set(key: string, data: unknown, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): void;
    /**
     * Persistent cached simple object and specify storage type, for example caching in memory:
     * - `set('data/1', 1, { type: 'm' })`
     * - `set('data/1', 1, { type: 'm', expire: 10 })`
     */
    set(key: string, data: unknown, options: {
        type: 'm' | 's';
        expire?: number;
        emitNotify?: boolean;
    }): void;
    private save;
    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get<T>(key: string, options?: {
        mode: 'promise';
        type?: 'm' | 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<T>;
    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get(key: string, options?: {
        mode: 'promise';
        type?: 'm' | 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<any>;
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    get(key: string, options: {
        mode: 'none';
        type?: 'm' | 's';
        expire?: number;
        emitNotify?: boolean;
    }): any;
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     */
    getNone<T>(key: string): T;
    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet<T>(key: string, data: Observable<T>, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<T>;
    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet(key: string, data: Observable<any>, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): Observable<any>;
    /**
     * 获取缓存，若不存在则设置持久化缓存基础对象
     */
    tryGet(key: string, data: unknown, options?: {
        type?: 's';
        expire?: number;
        emitNotify?: boolean;
    }): any;
    /**
     * 获取缓存，若不存在则设置指定缓存类型进行缓存对象
     */
    tryGet(key: string, data: unknown, options: {
        type: 'm' | 's';
        expire?: number;
        emitNotify?: boolean;
    }): any;
    /** 是否缓存 `key` */
    has(key: string): boolean;
    private _remove;
    /** 移除缓存 */
    remove(key: string): void;
    /** 清空所有缓存 */
    clear(): void;
    /**
     * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
     */
    set freq(value: number);
    private startExpireNotify;
    private runExpireNotify;
    private checkExpireNotify;
    private abortExpireNotify;
    private runNotify;
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     */
    notify(key: string): Observable<CacheNotifyResult>;
    /**
     * 取消 `key` 监听
     */
    cancelNotify(key: string): void;
    /** `key` 是否已经监听 */
    hasNotify(key: string): boolean;
    /** 清空所有 `key` 的监听 */
    clearNotify(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CacheService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CacheService>;
}

/**
 * Cache interceptor
 *
 * 缓存拦截器
 *
 * @example
 * provideHttpClient(withInterceptors([httpCacheInterceptor])),
 */
declare const httpCacheInterceptor: HttpInterceptorFn;

interface CacheOptions {
    /**
     * Whether to enable it, if `Cache-control: max-age=xxx` is found when the request returns, it will be automatically cached, and the next request will be forced to obtain data from the cache unless `enabled: false` is specified; default `true`
     *
     * 是否启用，当启用后若请求返回时发现 `Cache-control: max-age=xxx` 时自动缓存，下一次请求时除非指定 `enabled: false` 否则强制从缓存中获取数据；默认 `true`
     */
    enabled?: boolean;
    /**
     * Specify the cache unique key, which is used to distinguish cache entries, and the default is based on the requested URL
     *
     * 指定缓存唯一键，用于区分缓存条目，默认以请求的 URL 为准
     */
    key?: string;
    /**
     * Specify the storage method, `m` means memory, `s` means persistence; default: `m`
     *
     * 指定存储方式，`m` 表示内存，`s` 表示持久化；默认：`m`
     */
    saveType?: 'm' | 's';
    /**
     * Expire time, the highest priority when returning `Cache-control: max-age=xxx`, unit `second`
     *
     * 过期时间，当返回 `Cache-control: max-age=xxx` 时优先级最高，单位 `秒`
     */
    expire?: number;
    /**
     * Whether to trigger a notification, default: `true`
     *
     * 是否触发通知，默认：`true`
     */
    emitNotify?: boolean;
}
/**
 * Cache options (Don't forget to register `CacheInterceptor`)
 *
 * 缓存配置项（不要忘记注册 `CacheInterceptor`）
 *
 * @example
 * this.http.get(`my`, {
 *  context: new HttpContext().set(CACHE, { key: 'user-data' })
 * })
 */
declare const CACHE: HttpContextToken<CacheOptions>;

export { CACHE, CacheService, httpCacheInterceptor };
export type { CacheNotifyResult, CacheNotifyType, CacheOptions, ICache, ICacheStore };
