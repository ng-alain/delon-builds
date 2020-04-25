import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util';
import { BaseInterceptor } from '../base.interceptor';
/**
 * Simple 拦截器
 */
export declare class SimpleInterceptor extends BaseInterceptor {
    isAuth(_options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<any>, options: AlainAuthConfig): HttpRequest<any>;
}
