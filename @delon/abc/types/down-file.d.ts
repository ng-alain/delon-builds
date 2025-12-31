import * as _angular_core from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import * as i1 from '@angular/common';
import * as i2 from '@delon/theme';

declare class DownFileDirective {
    private readonly el;
    private readonly _http;
    readonly httpData: _angular_core.InputSignal<any>;
    readonly httpBody: _angular_core.InputSignal<any>;
    readonly httpMethod: _angular_core.InputSignal<string>;
    readonly httpUrl: _angular_core.InputSignal<string>;
    readonly fileName: _angular_core.InputSignal<string | ((rep: HttpResponse<Blob>) => string) | undefined>;
    readonly pre: _angular_core.InputSignal<((ev: MouseEvent) => Promise<boolean>) | undefined>;
    readonly success: _angular_core.OutputEmitterRef<HttpResponse<Blob>>;
    readonly error: _angular_core.OutputEmitterRef<any>;
    private getDisposition;
    private isFileSaverSupported;
    constructor();
    private setDisabled;
    protected _click(ev: MouseEvent): Promise<void>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DownFileDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<DownFileDirective, "[down-file]", ["downFile"], { "httpData": { "alias": "http-data"; "required": false; "isSignal": true; }; "httpBody": { "alias": "http-body"; "required": false; "isSignal": true; }; "httpMethod": { "alias": "http-method"; "required": false; "isSignal": true; }; "httpUrl": { "alias": "http-url"; "required": true; "isSignal": true; }; "fileName": { "alias": "file-name"; "required": false; "isSignal": true; }; "pre": { "alias": "pre"; "required": false; "isSignal": true; }; }, { "success": "success"; "error": "error"; }, never, never, true, never>;
}

declare class DownFileModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DownFileModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<DownFileModule, never, [typeof i1.CommonModule, typeof i2.AlainThemeModule, typeof DownFileDirective], [typeof DownFileDirective]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<DownFileModule>;
}

export { DownFileDirective, DownFileModule };
