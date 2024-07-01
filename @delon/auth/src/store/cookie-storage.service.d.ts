import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * `cookie` storage
 *
 * ```ts
 * provideAuth(withJWT(), withCookie())
 * ```
 */
export declare class CookieStorageStore implements IStore {
    private readonly srv;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null | undefined): boolean;
    remove(key: string): void;
}
