import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util/config';
import { BaseInterceptor } from '../base.interceptor';
import * as i0 from "@angular/core";
/**
 * JWT 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
 * ```
 */
export declare class JWTInterceptor extends BaseInterceptor {
    isAuth(options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<any>, _options: AlainAuthConfig): HttpRequest<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JWTInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JWTInterceptor>;
}
