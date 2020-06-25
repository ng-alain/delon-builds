import { InjectionToken } from '@angular/core';
import { ICache, ICacheStore } from './interface';
export declare const DC_STORE_STORAGE_TOKEN: InjectionToken<ICacheStore>;
export declare function DC_STORE_STORAGE_TOKEN_FACTORY(): LocalStorageCacheService;
export declare class LocalStorageCacheService implements ICacheStore {
    get(key: string): ICache;
    set(key: string, value: ICache): boolean;
    remove(key: string): void;
}
