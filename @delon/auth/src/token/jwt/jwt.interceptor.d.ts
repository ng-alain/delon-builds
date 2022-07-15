import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
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
    setReq(req: HttpRequest<NzSafeAny>, _options: AlainAuthConfig): HttpRequest<NzSafeAny>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JWTInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JWTInterceptor>;
}
