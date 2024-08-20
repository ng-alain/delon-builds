import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
export declare function DA_STORE_TOKEN_LOCAL_FACTORY(): IStore;
/**
 * `localStorage` storage, **not lost after closing the browser**.
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
 * ```
 */
export declare class LocalStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}
