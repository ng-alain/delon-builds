import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
/**
 * 内存存储，关掉浏览器标签后**丢失**。
 */
export declare class MemoryStore implements IStore {
    private cache;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}
