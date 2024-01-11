import { HttpResponse } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class DownFileDirective {
    private el;
    private _http;
    private isFileSaverSupported;
    httpData: NzSafeAny;
    httpBody: NzSafeAny;
    httpMethod: string;
    httpUrl: string;
    fileName?: string | ((rep: HttpResponse<Blob>) => string);
    pre?: (ev: MouseEvent) => Promise<boolean>;
    readonly success: EventEmitter<HttpResponse<Blob>>;
    readonly error: EventEmitter<any>;
    private getDisposition;
    constructor(el: ElementRef<HTMLButtonElement>, _http: _HttpClient);
    private setDisabled;
    _click(ev: MouseEvent): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DownFileDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DownFileDirective, "[down-file]", ["downFile"], { "httpData": { "alias": "http-data"; "required": false; }; "httpBody": { "alias": "http-body"; "required": false; }; "httpMethod": { "alias": "http-method"; "required": false; }; "httpUrl": { "alias": "http-url"; "required": true; }; "fileName": { "alias": "file-name"; "required": false; }; "pre": { "alias": "pre"; "required": false; }; }, { "success": "success"; "error": "error"; }, never, never, false, never>;
}
