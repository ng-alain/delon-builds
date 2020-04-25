import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util';
import { BaseInterceptor } from '../base.interceptor';
/**
 * JWT 拦截器
 */
export declare class JWTInterceptor extends BaseInterceptor {
    isAuth(options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<any>, _options: AlainAuthConfig): HttpRequest<any>;
}
