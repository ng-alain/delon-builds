import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 */
export declare class SessionStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}
