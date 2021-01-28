import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AlainConfigService } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare type _HttpHeaders = HttpHeaders | {
    [header: string]: string | string[];
};
export declare type HttpObserve = 'body' | 'events' | 'response';
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
export declare class _HttpClient {
    private http;
    private cog;
    constructor(http: HttpClient, cogSrv: AlainConfigService);
    private lc;
    /**
     * Get whether it's loading
     *
     * 获取是否正在加载中
     */
    get loading(): boolean;
    /**
     * Get the currently loading count
     *
     * 获取当前加载中的数量
     */
    get loadingCount(): number;
    parseParams(params: NzSafeAny): HttpParams;
    appliedUrl(url: string, params?: NzSafeAny): string;
    private setCount;
    private push;
    private pop;
    /**
     * @deprecated Will be removed in 12.0.0, Pls used `cleanLoading` instead
     */
    end(): void;
    /**
     * Clean loading count
     *
     * 清空加载中
     */
    cleanLoading(): void;
    /**
     * **GET Request** Return a `string` type / 返回一个 `string` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **GET Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * **GET Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<any>>;
    /**
     * **GET Request** Return a `HttpResponse<T>` type / 返回一个 `HttpResponse<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<T>>;
    /**
     * **GET Request** Return a `any` type / 返回一个 `any` 类型
     */
    get(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * **GET Request** Return a generic type / 返回一个泛类型
     */
    get<T>(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'body';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **POST Request** Return a `string` type / 返回一个 `string` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **POST Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    post<T>(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * **POST Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<any>>;
    /**
     * **POST Request** Return a `any` type / 返回一个 `any` 类型
     */
    post(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * **POST Request** Return a JSON type / 返回一个 `JSON` 类型
     */
    post<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **DELETE Request** Return a `string` type / 返回一个 `string` 类型
     */
    delete(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **DELETE Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    delete(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * **DELETE Request** Return a `any` type / 返回一个 `any` 类型
     */
    delete(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * c返回一个泛类型
     */
    delete<T>(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **JSONP Request**
     *
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url: string, params?: any, callbackParam?: string): Observable<any>;
    /**
     * **PATCH Request** Return a `string` type / 返回一个 `string` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **PATCH Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * **PATCH Request** Return a `any` type / 返回一个 `any` 类型
     */
    patch(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * **PATCH Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    patch<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **PUT Request** Return a `string` type / 返回一个 `string` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **PUT Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<{}>>;
    /**
     * **PUT Request** Return a `any` type / 返回一个 `any` 类型
     */
    put(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * **PUT Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    put<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **Form Request** Return a `string` type / 返回一个 `string` 类型
     */
    form(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **Form Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    form<T>(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<T>>;
    /**
     * **Form Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    form(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<any>>;
    /**
     * **Form Request** Return a `any` type / 返回一个 `any` 类型
     */
    form(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * **Form Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    form<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * **Request** Return a `ArrayBuffer` type / 返回一个 `ArrayBuffer` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<ArrayBuffer>;
    /**
     * **Request** Return a `Blob` type / 返回一个 `Blob` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<Blob>;
    /**
     * **Request** Return a `string` type / 返回一个 `string` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * **Request** Return a `HttpEvent<ArrayBuffer>` type / 返回一个 `HttpEvent<ArrayBuffer>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * **Request** Return a `HttpEvent<Blob>` type / 返回一个 `HttpEvent<Blob>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpEvent<Blob>>;
    /**
     * **Request** Return a `HttpEvent<string>` type / 返回一个 `HttpEvent<string>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpEvent<string>>;
    /**
     * **Request** Return a `HttpEvent<any>` type / 返回一个 `HttpEvent<any>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<any>>;
    /**
     * **Request** Return a `HttpEvent<R>` type / 返回一个 `HttpEvent<R>` 类型
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpEvent<R>>;
    /**
     * **Request** Return a `HttpResponse<ArrayBuffer>` type / 返回一个 `HttpResponse<ArrayBuffer>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * **Request** Return a `HttpResponse<Blob>` type / 返回一个 `HttpResponse<Blob>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Blob>>;
    /**
     * **Request** Return a `HttpResponse<string>` type / 返回一个 `HttpResponse<string>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
    }): Observable<HttpResponse<string>>;
    /**
     * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * **Request** Return a `HttpResponse<R>` type / 返回一个 `HttpResponse<R>` 类型
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<HttpResponse<R>>;
    /**
     * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<Object>;
    /**
     * **Request** Return a `R` type / 返回一个 `R` 类型
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<R>;
    /**
     * **Request** Return a `any` type / 返回一个 `any` 类型
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: HttpObserve;
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    }): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<_HttpClient, never>;
    static ɵprov: i0.ɵɵInjectableDef<_HttpClient>;
}
