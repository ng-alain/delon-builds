import { InjectionToken } from '@angular/core';
import { AlainAuthConfig } from '@delon/util';
import { Observable } from 'rxjs';
export declare const DA_SERVICE_TOKEN: InjectionToken<ITokenService>;
export interface ITokenModel {
    [key: string]: any;
    token: string | null | undefined;
}
export interface AuthReferrer {
    url?: string | null | undefined;
}
export interface ITokenService {
    /** 获取登录地址 */
    readonly login_url: string | undefined;
    /** 获取授权失败前路由信息 */
    readonly referrer?: AuthReferrer;
    readonly options: AlainAuthConfig;
    set(data: ITokenModel | null): boolean;
    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     */
    get(type?: any): ITokenModel | null;
    /**
     * 获取Token，形式包括：
     * - `get()` 获取 Simple Token
     * - `get<JWTTokenModel>(JWTTokenModel)` 获取 JWT Token
     */
    get<T extends ITokenModel>(type?: any): T;
    /**
     * Clean authorization data
     */
    clear(options?: {
        onlyToken: boolean;
    }): void;
    change(): Observable<ITokenModel | null>;
}
