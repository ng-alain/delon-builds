import { IStore } from './interface';
import { ITokenModel } from '../token/interface';
export declare class LocalStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}
