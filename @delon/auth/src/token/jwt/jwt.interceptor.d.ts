import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseInterceptor } from '../base.interceptor';
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
}
