import { CookieService } from '@delon/util/browser';
import { IStore } from './interface';
import { ITokenModel } from '../token/interface';
/**
 * `cookie` storage
 *
 * ```ts
 * provideAuth(withJWT(), withCookie())
 * ```
 */
export declare class CookieStorageStore implements IStore {
    private srv;
    constructor(srv: CookieService);
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null | undefined): boolean;
    remove(key: string): void;
}
