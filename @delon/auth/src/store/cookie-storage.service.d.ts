import { CookieService } from '@delon/util/browser';
import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * `cookie` storage
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore }
 * ```
 */
export declare class CookieStorageStore implements IStore {
    private srv;
    constructor(srv: CookieService);
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null | undefined): boolean;
    remove(key: string): void;
}
