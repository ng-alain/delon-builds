import { HttpResponse } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import * as i0 from "@angular/core";
export declare class DownFileDirective {
    private el;
    private _http;
    private isFileSaverSupported;
    httpData: {};
    httpBody: {};
    httpMethod: string;
    httpUrl: string;
    fileName: string | ((rep: HttpResponse<Blob>) => string);
    pre: (ev: MouseEvent) => Promise<boolean>;
    readonly success: EventEmitter<HttpResponse<Blob>>;
    readonly error: EventEmitter<any>;
    private getDisposition;
    constructor(el: ElementRef<HTMLButtonElement>, _http: _HttpClient);
    private setDisabled;
    _click(ev: MouseEvent): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<DownFileDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DownFileDirective, "[down-file]", ["downFile"], { "httpData": "http-data"; "httpBody": "http-body"; "httpMethod": "http-method"; "httpUrl": "http-url"; "fileName": "file-name"; "pre": "pre"; }, { "success": "success"; "error": "error"; }, never>;
}
