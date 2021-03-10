import { Platform } from '@angular/cdk/platform';
import { Observable } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './types';
/** Layout data specifies the stored key */
export declare const LAYOUT = "layout";
/** User data specifies the stored key */
export declare const USER = "user";
/** App data specifies the stored key */
export declare const APP = "app";
export declare class SettingsService<L extends Layout = Layout, U extends User = User, A extends App = App> {
    private platform;
    private notify$;
    private _app;
    private _user;
    private _layout;
    constructor(platform: Platform);
    getData(key: string): any;
    setData(key: string, value: any): void;
    get layout(): L;
    get app(): A;
    get user(): U;
    get notify(): Observable<SettingsNotify>;
    setLayout(name: string | L, value?: any): boolean;
    setApp(value: A): void;
    setUser(value: U): void;
}
