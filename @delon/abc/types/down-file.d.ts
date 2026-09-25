import { HttpResponse } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@delon/theme";
declare namespace down_file_directive_d_exports {
  export { DownFileDirective };
}
export declare class DownFileDirective {
  private readonly el;
  private readonly _http;
  readonly httpData: import("@angular/core").InputSignal<any>;
  readonly httpBody: import("@angular/core").InputSignal<any>;
  readonly httpMethod: import("@angular/core").InputSignal<string>;
  readonly httpUrl: import("@angular/core").InputSignal<string>;
  readonly fileName: import("@angular/core").InputSignal<string | ((rep: HttpResponse<Blob>) => string) | undefined>;
  readonly pre: import("@angular/core").InputSignal<((ev: MouseEvent) => Promise<boolean>) | undefined>;
  readonly success: import("@angular/core").OutputEmitterRef<HttpResponse<Blob>>;
  readonly error: import("@angular/core").OutputEmitterRef<any>;
  private getDisposition;
  private isFileSaverSupported;
  constructor();
  private setDisabled;
  protected _click(ev: MouseEvent): Promise<void>;
  static ɵfac: i0.ɵɵFactoryDeclaration<DownFileDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<DownFileDirective, "[down-file]", ["downFile"], {
    "httpData": {
      "alias": "http-data";
      "required": false;
      "isSignal": true;
    };
    "httpBody": {
      "alias": "http-body";
      "required": false;
      "isSignal": true;
    };
    "httpMethod": {
      "alias": "http-method";
      "required": false;
      "isSignal": true;
    };
    "httpUrl": {
      "alias": "http-url";
      "required": true;
      "isSignal": true;
    };
    "fileName": {
      "alias": "file-name";
      "required": false;
      "isSignal": true;
    };
    "pre": {
      "alias": "pre";
      "required": false;
      "isSignal": true;
    };
  }, {
    "success": "success";
    "error": "error";
  }, never, never, true, never>;
}
export declare class DownFileModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<DownFileModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<DownFileModule, never, [typeof i1.CommonModule, typeof i2.AlainThemeModule, typeof DownFileDirective], [typeof DownFileDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<DownFileModule>;
}