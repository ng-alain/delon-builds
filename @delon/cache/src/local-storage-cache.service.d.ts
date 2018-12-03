import { ICache, ICacheStore } from './interface';
export declare class LocalStorageCacheService implements ICacheStore {
    get(key: string): ICache;
    set(key: string, value: ICache): boolean;
    remove(key: string): void;
}
