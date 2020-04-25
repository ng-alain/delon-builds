import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { AlainAuthConfig } from '@delon/util';
import { Observable } from 'rxjs';
import { ITokenModel } from './interface';
export declare abstract class BaseInterceptor implements HttpInterceptor {
    protected injector: Injector;
    constructor(injector: Injector);
    protected model: ITokenModel;
    abstract isAuth(options: AlainAuthConfig): boolean;
    abstract setReq(req: HttpRequest<any>, options: AlainAuthConfig): HttpRequest<any>;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
