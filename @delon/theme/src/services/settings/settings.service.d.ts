import { Platform } from '@angular/cdk/platform';
import { Observable } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './interface';
export declare const LAYOUT = "layout";
export declare const USER = "user";
export declare const APP = "app";
export declare class SettingsService {
    private platform;
    private notify$;
    private _app;
    private _user;
    private _layout;
    constructor(platform: Platform);
    getData(key: string): any;
    setData(key: string, value: any): void;
    get layout(): Layout;
    get app(): App;
    get user(): User;
    get notify(): Observable<SettingsNotify>;
    setLayout(name: string | Layout, value?: any): boolean;
    setApp(value: App): void;
    setUser(value: User): void;
}
