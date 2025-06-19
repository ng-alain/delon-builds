import * as i0 from '@angular/core';
import { InjectionToken, OnDestroy, Provider, EnvironmentProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainAuthConfig, AlainConfigService } from '@delon/util/config';
import { CanActivateFn, CanActivateChildFn, CanMatchFn } from '@angular/router';
import { HttpInterceptorFn, HttpRequest, HttpEvent, HttpContextToken } from '@angular/common/http';

declare const DA_SERVICE_TOKEN: InjectionToken<ITokenService>;
interface ITokenModel {
    [key: string]: any;
    token: string | null | undefined;
    /**
     * 过期时间，单位：ms
     * - 不管Simple、JWT模式都必须指定
     */
    expired?: number;
}
interface AuthReferrer {
    url?: string | null | undefined;
}
interface ITokenService {
    /**
     * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
     */
    readonly login_url: string | undefined;
    /**
     * 当前请求页面的来源页面的地址
     */
    readonly referrer?: AuthReferrer;
    readonly options: AlainAuthConfig;
    /**
     * 订阅刷新，订阅时会自动产生一个定时器，每隔一段时间进行一些校验
     * - **注意** 会多次触发，请务必做好业务判断
     */
    readonly refresh: Observable<ITokenModel>;
    /**
     * 设置 Token 信息，当用户 Token 发生变动时都需要调用此方法重新刷新
     * - 如果需要监听过期，需要传递 `expired` 值
     */
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
     * 清除 Token 信息，当用户退出登录时调用。
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     */
    clear(options?: {
        onlyToken: boolean;
    }): void;
    /**
     * 订阅 Token 对象变更通知
     */
    change(): Observable<ITokenModel | null>;
}

type SocialOpenType = 'href' | 'window';
declare class SocialService implements OnDestroy {
    private readonly tokenService;
    private readonly doc;
    private readonly router;
    private _win;
    private _winTime;
    private observer;
    /**
     * 使用窗体打开授权页，返回值是 `Observable<ITokenModel>` 用于订阅授权后返回的结果
     *
     * @param url 获取授权地址
     * @param callback 回调路由地址
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    login(url: string, callback?: string, options?: {
        type?: 'window';
        windowFeatures?: string;
    }): Observable<ITokenModel>;
    /**
     * 跳转至授权页
     *
     * @param url 获取授权地址
     * @param callback 回调路由地址
     */
    login(url: string, callback?: string, options?: {
        type?: 'href';
    }): void;
    /**
     * 授权成功后的回调处理
     *
     * @param rawData 指定回调认证信息，为空时从根据当前URL解析
     */
    callback(rawData?: ITokenModel | string | null): ITokenModel;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocialService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SocialService>;
}

declare const DA_STORE_TOKEN: InjectionToken<IStore>;
interface IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}

declare function DA_STORE_TOKEN_LOCAL_FACTORY(): IStore;
/**
 * `localStorage` storage, **not lost after closing the browser**.
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withLocalStorage()),
 * ```
 */
declare class LocalStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}

/**
 * 内存存储，关掉浏览器标签后**丢失**。
 */
declare class MemoryStore implements IStore {
    private cache;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel): boolean;
    remove(key: string): void;
}

/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withSessionStorage()),
 * ```
 */
declare class SessionStorageStore implements IStore {
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null): boolean;
    remove(key: string): void;
}

/**
 * `cookie` storage
 *
 * ```ts
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
  provideAuth(withCookie()),
 * ```
 */
declare class CookieStorageStore implements IStore {
    private readonly srv;
    get(key: string): ITokenModel;
    set(key: string, value: ITokenModel | null | undefined): boolean;
    remove(key: string): void;
}

declare class AuthJWTGuardService {
    private readonly srv;
    process(url?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthJWTGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthJWTGuardService>;
}
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authJWTCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authJWTCanActivate: CanActivateFn;
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authJWTCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authJWTCanActivateChild: CanActivateChildFn;
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authJWTCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authJWTCanMatch: CanMatchFn;

declare const authJWTInterceptor: HttpInterceptorFn;

interface JWT {
    /**
     * Issuerd
     */
    iss: string;
    /**
     * Issued At
     */
    iat: string;
    /**
     * Subject
     */
    sub: string;
    /**
     * Expiration Time
     */
    exp: number;
    /**
     * Audience
     */
    aud: string;
    /**
     * Not Before
     */
    nbf: string;
    /**
     * JWT ID
     */
    jti: string;
    [key: string]: any;
    [key: number]: any;
}
declare class JWTTokenModel implements ITokenModel {
    [key: string]: any;
    token: string | null | undefined;
    expired?: number;
    /**
     * 获取载荷信息
     */
    get payload(): JWT;
    /**
     * 获取过期时间戳（单位：ms）
     */
    get exp(): number | null;
    /**
     * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
     *
     * @param offsetSeconds 偏移量
     */
    isExpired(offsetSeconds?: number): boolean | null;
}

declare function urlBase64Decode(str: string): string;

declare class AuthSimpleGuardService {
    private readonly srv;
    process(url?: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthSimpleGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthSimpleGuardService>;
}
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authSimpleCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authSimpleCanActivate: CanActivateFn;
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authSimpleCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authSimpleCanActivateChild: CanActivateChildFn;
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authSimpleCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const authSimpleCanMatch: CanMatchFn;

declare const authSimpleInterceptor: HttpInterceptorFn;

declare class SimpleTokenModel implements ITokenModel {
    [key: string]: any;
    token: string | null | undefined;
    expired?: number;
}

declare function isAnonymous(req: HttpRequest<unknown>, options: AlainAuthConfig): boolean;
declare function throwErr(req: HttpRequest<unknown>, options: AlainAuthConfig): Observable<HttpEvent<unknown>>;

declare function DA_SERVICE_TOKEN_FACTORY(): ITokenService;
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
declare class TokenService implements ITokenService, OnDestroy {
    private readonly store;
    private refresh$;
    private change$;
    private interval$?;
    private _referrer;
    private _options;
    constructor(configSrv: AlainConfigService);
    get refresh(): Observable<ITokenModel>;
    get login_url(): string | undefined;
    get referrer(): AuthReferrer;
    get options(): AlainAuthConfig;
    set(data: ITokenModel): boolean;
    get(type?: any): any;
    get<T extends ITokenModel>(type?: new () => T): T;
    clear(options?: {
        onlyToken: boolean;
    }): void;
    change(): Observable<ITokenModel | null>;
    private builderRefresh;
    private cleanRefresh;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TokenService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TokenService>;
}

/**
 * Whether to allow anonymous login
 *
 * 是否允许匿名登录
 *
 * @example
 * this.http.post(`login`, {
 *  name: 'cipchk', pwd: '123456'
 * }, {
 *  context: new HttpContext().set(ALLOW_ANONYMOUS, true)
 * })
 */
declare const ALLOW_ANONYMOUS: HttpContextToken<boolean>;

declare const AUTH_DEFAULT_CONFIG: AlainAuthConfig;
declare function mergeConfig(srv: AlainConfigService): AlainAuthConfig;

declare enum AuthFeatureKind {
    Store = 0
}
interface AuthFeature<KindT extends AuthFeatureKind> {
    ɵkind: KindT;
    ɵproviders: Provider[];
}
/**
 * Configures authentication process service to be available for injection.
 *
 * @see {@link withCookie}
 * @see {@link withLocalStorage}
 * @see {@link withSessionStorage}
 */
declare function provideAuth(store?: AuthFeature<AuthFeatureKind.Store>): EnvironmentProviders;
/** `cookie` storage */
declare function withCookie(): AuthFeature<AuthFeatureKind.Store>;
/** `localStorage` storage, **not lost after closing the browser**. */
declare function withLocalStorage(): AuthFeature<AuthFeatureKind.Store>;
/** `sessionStorage` storage, **lost after closing the browser**. */
declare function withSessionStorage(): AuthFeature<AuthFeatureKind.Store>;
/** Memory storage, **lost after closing the browser tab**. */
declare function withMemoryStorage(): AuthFeature<AuthFeatureKind.Store>;

export { ALLOW_ANONYMOUS, AUTH_DEFAULT_CONFIG, AuthFeatureKind, AuthJWTGuardService, AuthSimpleGuardService, CookieStorageStore, DA_SERVICE_TOKEN, DA_SERVICE_TOKEN_FACTORY, DA_STORE_TOKEN, DA_STORE_TOKEN_LOCAL_FACTORY, JWTTokenModel, LocalStorageStore, MemoryStore, SessionStorageStore, SimpleTokenModel, SocialService, TokenService, authJWTCanActivate, authJWTCanActivateChild, authJWTCanMatch, authJWTInterceptor, authSimpleCanActivate, authSimpleCanActivateChild, authSimpleCanMatch, authSimpleInterceptor, isAnonymous, mergeConfig, provideAuth, throwErr, urlBase64Decode, withCookie, withLocalStorage, withMemoryStorage, withSessionStorage };
export type { AuthFeature, AuthReferrer, IStore, ITokenModel, ITokenService, JWT, SocialOpenType };
