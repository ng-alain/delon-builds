import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainAuthConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ITokenModel } from './interface';
import * as i0 from "@angular/core";
export declare abstract class BaseInterceptor implements HttpInterceptor {
    protected injector: Injector;
    constructor(injector: Injector);
    protected model: ITokenModel;
    abstract isAuth(options: AlainAuthConfig): boolean;
    abstract setReq(req: HttpRequest<NzSafeAny>, options: AlainAuthConfig): HttpRequest<NzSafeAny>;
    intercept(req: HttpRequest<NzSafeAny>, next: HttpHandler): Observable<HttpEvent<NzSafeAny>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseInterceptor, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseInterceptor>;
}
