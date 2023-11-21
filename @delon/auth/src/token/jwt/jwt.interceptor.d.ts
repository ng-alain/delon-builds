import { HttpRequest } from '@angular/common/http';
import { AlainAuthConfig } from '@delon/util/config';
import { BaseInterceptor } from '../base.interceptor';
import * as i0 from "@angular/core";
export declare class JWTInterceptor extends BaseInterceptor {
    isAuth(options: AlainAuthConfig): boolean;
    setReq(req: HttpRequest<any>, _options: AlainAuthConfig): HttpRequest<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JWTInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JWTInterceptor>;
}
