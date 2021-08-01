import { HttpResponse } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { _HttpClient } from '@delon/theme';
export declare class DownFileDirective {
    private el;
    private _http;
    private isFileSaverSupported;
    httpData: NzSafeAny;
    httpBody: NzSafeAny;
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
}
