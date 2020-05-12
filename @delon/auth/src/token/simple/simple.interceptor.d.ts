import { HttpRequest } from '@angular/common/http';
import { DelonAuthConfig } from '../../auth.config';
import { BaseInterceptor } from '../base.interceptor';
/**
 * Simple 拦截器
 */
export declare class SimpleInterceptor extends BaseInterceptor {
    isAuth(_options: DelonAuthConfig): boolean;
    setReq(req: HttpRequest<any>, options: DelonAuthConfig): HttpRequest<any>;
}
