import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: SessionStorageStore }
 * ```
 */
export declare class SessionStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}
