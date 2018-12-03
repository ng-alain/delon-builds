import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
export declare class MockInterceptor implements HttpInterceptor {
    private injector;
    constructor(injector: Injector);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>;
}
