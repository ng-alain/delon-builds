import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DelonAuthConfig } from '../auth.config';
import { ITokenModel } from './interface';
export declare abstract class BaseInterceptor implements HttpInterceptor {
    protected injector: Injector;
    constructor(injector: Injector);
    protected model: ITokenModel;
    abstract isAuth(options: DelonAuthConfig): boolean;
    abstract setReq(req: HttpRequest<any>, options: DelonAuthConfig): HttpRequest<any>;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>;
}
