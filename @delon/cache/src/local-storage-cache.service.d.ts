import { InjectionToken } from '@angular/core';
import { ICache, ICacheStore } from './interface';
export declare const DC_STORE_STORAGE_TOKEN: InjectionToken<ICacheStore>;
export declare class LocalStorageCacheService implements ICacheStore {
    private readonly platform;
    get(key: string): ICache | null;
    set(key: string, value: ICache): boolean;
    remove(key: string): void;
}
