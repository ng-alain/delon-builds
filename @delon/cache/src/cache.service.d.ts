import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CacheNotifyResult, ICacheStore } from './interface';
import * as i0 from "@angular/core";
export declare class CacheService implements OnDestroy {
    private store;
    private http;
    private readonly memory;
    private readonly notifyBuffer;
    private meta;
    private freqTick;
    private freqTime;
    private cog;
    constructor(cogSrv: AlainConfigService, store: ICacheStore, http: HttpClient);
    private deepGet;
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
    }): Observable<T>;
    /**
     * Persistent cached `Observable` object, for example:
     * - `set('data/1', this.http.get('data/1')).subscribe()`
     * - `set('data/1', this.http.get('data/1'), { expire: 10 }).subscribe()`
     */
    set(key: string, data: Observable<NzSafeAny>, options?: {
        type?: 's';
        expire?: number;
    }): Observable<NzSafeAny>;
    /**
     * Persistent cached simple object, for example:
     * - `set('data/1', 1)`
     * - `set('data/1', 1, { expire: 10 })`
     */
    set(key: string, data: unknown, options?: {
        type?: 's';
        expire?: number;
    }): void;
    /**
     * Persistent cached simple object and specify storage type, for example caching in memory:
     * - `set('data/1', 1, { type: 'm' })`
     * - `set('data/1', 1, { type: 'm', expire: 10 })`
     */
    set(key: string, data: unknown, options: {
        type: 'm' | 's';
        expire?: number;
    }): void;
    private save;
    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get<T>(key: string, options?: {
        mode: 'promise';
        type?: 'm' | 's';
        expire?: number;
    }): Observable<T>;
    /** 获取缓存数据，若 `key` 不存在则 `key` 作为HTTP请求缓存后返回 */
    get(key: string, options?: {
        mode: 'promise';
        type?: 'm' | 's';
        expire?: number;
    }): Observable<NzSafeAny>;
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    get(key: string, options: {
        mode: 'none';
        type?: 'm' | 's';
        expire?: number;
    }): NzSafeAny;
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    getNone<T>(key: string): T;
    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet<T>(key: string, data: Observable<T>, options?: {
        type?: 's';
        expire?: number;
    }): Observable<T>;
    /**
     * 获取缓存，若不存在则设置持久化缓存 `Observable` 对象
     */
    tryGet(key: string, data: Observable<NzSafeAny>, options?: {
        type?: 's';
        expire?: number;
    }): Observable<NzSafeAny>;
    /**
     * 获取缓存，若不存在则设置持久化缓存基础对象
     */
    tryGet(key: string, data: unknown, options?: {
        type?: 's';
        expire?: number;
    }): NzSafeAny;
    /**
     * 获取缓存，若不存在则设置指定缓存类型进行缓存对象
     */
    tryGet(key: string, data: unknown, options: {
        type: 'm' | 's';
        expire?: number;
    }): NzSafeAny;
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
