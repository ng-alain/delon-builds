import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * `cookie` storage, muse be install [js-cookie](https://github.com/js-cookie/js-cookie) libary and import `"node_modules/js-cookie/src/js.cookie.js"` in `angular.json`
 */
export declare class CookieStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}
