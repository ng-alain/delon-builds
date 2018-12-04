import { InjectionToken } from '@angular/core';
export interface ICache {
    v: any;
    /** 过期时间戳，`0` 表示不过期 */
    e: number;
}
export declare const DC_STORE_STORAGE_TOKEN: InjectionToken<ICacheStore>;
export interface ICacheStore {
    get(key: string): ICache;
    set(key: string, value: ICache): boolean;
    remove(key: string): any;
}
export declare type CacheNotifyType = 'set' | 'remove' | 'expire';
export interface CacheNotifyResult {
    type: CacheNotifyType;
    value?: any;
}
