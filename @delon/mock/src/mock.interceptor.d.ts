import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MockInterceptor implements HttpInterceptor {
    private injector;
    constructor(injector: Injector);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<MockInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<MockInterceptor>;
}
