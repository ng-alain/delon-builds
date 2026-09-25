import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/observers";
import * as i3 from "@angular/router";
import * as i4 from "@delon/theme";
import * as i5 from "ng-zorro-antd/button";
declare namespace exception_component_d_exports {
  export { ExceptionComponent, ExceptionType };
}
export type ExceptionType = 403 | 404 | 500;
export declare class ExceptionComponent {
  private readonly dom;
  private readonly cogSrv;
  private readonly conTpl;
  protected locale: import("@angular/core").Signal<import("@delon/theme").ExceptionLocaleData>;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  protected hasCon: import("@angular/core").WritableSignal<boolean>;
  private typeDict;
  protected typeItem: import("@angular/core").WritableSignal<{
    img: string;
    title: string;
    desc?: string;
  } | null>;
  readonly type: import("@angular/core").InputSignal<ExceptionType>;
  readonly img: import("@angular/core").InputSignal<string | undefined>;
  readonly title: import("@angular/core").InputSignal<string | undefined>;
  readonly desc: import("@angular/core").InputSignal<string | undefined>;
  readonly backRouterLink: import("@angular/core").InputSignal<string | any[]>;
  protected readonly _img: import("@angular/core").Signal<import("@angular/platform-browser").SafeStyle | null>;
  protected readonly _title: import("@angular/core").Signal<import("@angular/platform-browser").SafeHtml | null>;
  protected readonly _desc: import("@angular/core").Signal<import("@angular/platform-browser").SafeHtml | null>;
  constructor();
  protected checkContent(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], {
    "type": {
      "alias": "type";
      "required": false;
      "isSignal": true;
    };
    "img": {
      "alias": "img";
      "required": false;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "desc": {
      "alias": "desc";
      "required": false;
      "isSignal": true;
    };
    "backRouterLink": {
      "alias": "backRouterLink";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class ExceptionModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<ExceptionModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.RouterModule, typeof i4.DelonLocaleModule, typeof i5.NzButtonModule, typeof ExceptionComponent], [typeof ExceptionComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<ExceptionModule>;
}