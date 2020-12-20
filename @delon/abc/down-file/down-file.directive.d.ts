import { HttpResponse } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { _HttpClient } from '@delon/theme';
export declare class DownFileDirective {
    private el;
    private _http;
    private isFileSaverSupported;
    /** URL请求参数 */
    httpData: {};
    /** URL请求参数 */
    httpBody: {};
    /** 请求类型 */
    httpMethod: string;
    /** 下载地址 */
    httpUrl: string;
    /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
    fileName: string | ((rep: HttpResponse<Blob>) => string);
    /** 下载前回调 */
    pre: (ev: MouseEvent) => Promise<boolean>;
    /** 成功回调 */
    readonly success: EventEmitter<HttpResponse<Blob>>;
    /** 错误回调 */
    readonly error: EventEmitter<any>;
    private getDisposition;
    constructor(el: ElementRef<HTMLButtonElement>, _http: _HttpClient);
    private setDisabled;
    _click(ev: MouseEvent): Promise<void>;
}
