import { REP_TYPE } from "@delon/theme";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
declare namespace sg_container_component_d_exports {
  export { SGContainerComponent };
}
export declare class SGContainerComponent {
  private readonly cogSrv;
  readonly gutter: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly colInCon: import("@angular/core").InputSignalWithTransform<REP_TYPE | null, unknown>;
  readonly col: import("@angular/core").InputSignalWithTransform<REP_TYPE | null, unknown>;
  protected marginValue: import("@angular/core").Signal<number>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<SGContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], {
    "gutter": {
      "alias": "gutter";
      "required": false;
      "isSignal": true;
    };
    "colInCon": {
      "alias": "sg-container";
      "required": false;
      "isSignal": true;
    };
    "col": {
      "alias": "col";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
declare namespace sg_component_d_exports {
  export { SGComponent };
}
export declare class SGComponent {
  private readonly rep;
  private readonly parentComp;
  protected paddingValue: import("@angular/core").Signal<number>;
  readonly col: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly cls: import("@angular/core").Signal<string[]>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<SGComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SGComponent, "sg", ["sg"], {
    "col": {
      "alias": "col";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class SGModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<SGModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<SGModule, never, [typeof i1.CommonModule, typeof SGContainerComponent, typeof SGComponent], [typeof SGContainerComponent, typeof SGComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<SGModule>;
}