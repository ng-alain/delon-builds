import { InjectionToken } from '@angular/core';
import { ReuseTabCached, ReuseTitle } from './reuse-tab.interfaces';
export declare const REUSE_TAB_CACHED_MANAGER: InjectionToken<ReuseTabCachedManager>;
export interface ReuseTabCachedManager {
    list: ReuseTabCached[];
    title: {
        [url: string]: ReuseTitle;
    };
    closable: {
        [url: string]: boolean;
    };
}
export declare class ReuseTabCachedManagerFactory implements ReuseTabCachedManager {
    list: ReuseTabCached[];
    title: {
        [url: string]: ReuseTitle;
    };
    closable: {
        [url: string]: boolean;
    };
}
