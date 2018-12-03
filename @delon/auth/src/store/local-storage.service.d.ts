import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
export declare class LocalStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}
