import { IStore } from './interface';
import { ITokenModel } from '../token/interface';
/**
 * `cookie` storage
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withCookie()),
 * ```
 */
export declare class CookieStorageStore implements IStore {
    private readonly srv;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null | undefined): boolean;
    remove(key: string): void;
}
