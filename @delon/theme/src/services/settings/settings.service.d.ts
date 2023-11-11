import { Platform } from '@angular/cdk/platform';
import { InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { App, Layout, SettingsNotify, User } from './types';
import * as i0 from "@angular/core";
export interface SettingsKeys {
    /** Layout data specifies the stored key,  default: `layout` */
    layout: string;
    /** User data specifies the stored key,  default: `user` */
    user: string;
    /** App data specifies the stored key,  default: `app` */
    app: string;
}
export declare const ALAIN_SETTING_KEYS: InjectionToken<SettingsKeys>;
export declare const ALAIN_SETTING_DEFAULT: Provider;
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
    setLayout<T extends Layout = Layout>(name: T, value?: NzSafeAny): boolean;
    setLayout(name: string | L, value?: NzSafeAny): boolean;
    getLayout<T>(): T;
    setApp<T extends App = App>(value: T): void;
    setApp(value: A): void;
    getApp<T>(): T;
    setUser<T extends User = User>(value: T): void;
    setUser(value: U): void;
    getUser<T>(): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsService<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SettingsService<any, any, any>>;
}
