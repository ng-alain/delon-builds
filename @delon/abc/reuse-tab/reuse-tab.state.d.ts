import { InjectionToken } from '@angular/core';
import type { ReuseItem } from './reuse-tab.interfaces';
export declare const REUSE_TAB_STORAGE_KEY: InjectionToken<string>;
export declare const REUSE_TAB_STORAGE_STATE: InjectionToken<ReuseTabStorageState>;
export interface ReuseTabStorageState {
    get(key: string): ReuseItem[];
    update(key: string, value: ReuseItem[]): boolean;
    remove(key: string): void;
}
export declare class ReuseTabLocalStorageState implements ReuseTabStorageState {
    get(key: string): ReuseItem[];
    update(key: string, value: ReuseItem[]): boolean;
    remove(key: string): void;
}
