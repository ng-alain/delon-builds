import { HttpClient, HttpResponse } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { _HttpClient } from '@delon/theme';
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
export declare class DownFileDirective {
    private el;
    private http;
    private _http;
    /** URL请求参数 */
    httpData: {};
    /** 请求类型 */
    httpMethod: string;
    /** 下载地址 */
    httpUrl: string;
    /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
    fileName: string;
    /** 成功回调 */
    readonly success: EventEmitter<HttpResponse<Blob>>;
    /** 错误回调 */
    readonly error: EventEmitter<{}>;
    private getDisposition;
    constructor(el: ElementRef, http: HttpClient, _http: _HttpClient);
    _click(): void;
}
