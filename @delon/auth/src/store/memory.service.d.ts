import { IStore } from './interface';
import { ITokenModel } from '../token/interface';
export declare class MemoryStore implements IStore {
    private cache;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}
