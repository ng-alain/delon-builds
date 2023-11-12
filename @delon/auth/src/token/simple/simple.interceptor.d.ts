import { HttpRequest } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AlainAuthConfig } from '@delon/util/config';
import { BaseInterceptor } from '../base.interceptor';
import * as i0 from "@angular/core";
export declare function withAuthSimple(): Provider[];
/**
 * Simple 拦截器
 *
 * ```
 * // app.config.ts
 * withAuthSimple(),
 * ```
 */
export declare class SimpleInterceptor extends BaseInterceptor {
    isAuth(_options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<any>, options: AlainAuthConfig): HttpRequest<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SimpleInterceptor>;
}
