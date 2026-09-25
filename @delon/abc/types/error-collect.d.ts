import * as i0 from "@angular/core";
import { OnInit } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
declare namespace error_collect_component_d_exports {
  export { ErrorCollectComponent };
}
export declare class ErrorCollectComponent implements OnInit {
  private readonly el;
  private readonly doc;
  private readonly platform;
  private readonly destroy$;
  private readonly cogSrv;
  private formEl;
  protected count: import("@angular/core").WritableSignal<number>;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  readonly freq: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly offsetTop: import("@angular/core").InputSignalWithTransform<number, unknown>;
  constructor();
  private get errEls();
  private update;
  protected _click(): boolean;
  private findParent;
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], {
    "freq": {
      "alias": "freq";
      "required": false;
      "isSignal": true;
    };
    "offsetTop": {
      "alias": "offsetTop";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class ErrorCollectModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<ErrorCollectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof ErrorCollectComponent], [typeof ErrorCollectComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<ErrorCollectModule>;
}