import { HttpRequest } from '@angular/common/http';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainAuthConfig } from '@delon/util/config';
import { BaseInterceptor } from '../base.interceptor';
/**
 * Simple 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
 * ```
 */
export declare class SimpleInterceptor extends BaseInterceptor {
    isAuth(_options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<NzSafeAny>, options: AlainAuthConfig): HttpRequest<NzSafeAny>;
}
