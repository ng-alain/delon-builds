import { Platform } from '@angular/cdk/platform';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { App, Layout, SettingsNotify, User } from './types';
export interface SettingsKeys {
    /** Layout data specifies the stored key,  default: `layout` */
    layout: string;
    /** User data specifies the stored key,  default: `user` */
    user: string;
    /** App data specifies the stored key,  default: `app` */
    app: string;
}
export declare const ALAIN_SETTING_KEYS: InjectionToken<SettingsKeys>;
export declare class SettingsService<L extends Layout = Layout, U extends User = User, A extends App = App> {
    private platform;
    private KEYS;
    private notify$;
    private _app;
    private _user;
    private _layout;
    constructor(platform: Platform, KEYS: SettingsKeys);
    getData(key: string): NzSafeAny;
    setData(key: string, value: NzSafeAny): void;
    get layout(): L;
    get app(): A;
    get user(): U;
    get notify(): Observable<SettingsNotify>;
    setLayout(name: string | L, value?: NzSafeAny): boolean;
    setApp(value: A): void;
    setUser(value: U): void;
}
