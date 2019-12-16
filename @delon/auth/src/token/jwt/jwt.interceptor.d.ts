import { HttpRequest } from '@angular/common/http';
import { DelonAuthConfig } from '../../auth.config';
import { BaseInterceptor } from '../base.interceptor';
/**
 * JWT 拦截器
 */
export declare class JWTInterceptor extends BaseInterceptor {
    isAuth(options: DelonAuthConfig): boolean;
    setReq(req: HttpRequest<any>, _options: DelonAuthConfig): HttpRequest<any>;
}
