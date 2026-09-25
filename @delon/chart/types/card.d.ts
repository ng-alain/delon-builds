import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/card";
import * as i3 from "ng-zorro-antd/spin";
import * as i4 from "ng-zorro-antd/core/outlet";
declare namespace card_component_d_exports {
  export { G2CardComponent };
}
export declare class G2CardComponent {
  /** 是否显示边框 */
  readonly bordered: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly avatar: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly action: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly total: import("@angular/core").InputSignal<string>;
  readonly contentHeight: import("@angular/core").InputSignal<string | number | undefined>;
  readonly footer: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  /** 是否显示Loading */
  readonly loading: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  protected readonly _height: import("@angular/core").Signal<string | undefined>;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2CardComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2CardComponent, "g2-card", ["g2Card"], {
    "bordered": {
      "alias": "bordered";
      "required": false;
      "isSignal": true;
    };
    "avatar": {
      "alias": "avatar";
      "required": false;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "action": {
      "alias": "action";
      "required": false;
      "isSignal": true;
    };
    "total": {
      "alias": "total";
      "required": false;
      "isSignal": true;
    };
    "contentHeight": {
      "alias": "contentHeight";
      "required": false;
      "isSignal": true;
    };
    "footer": {
      "alias": "footer";
      "required": false;
      "isSignal": true;
    };
    "loading": {
      "alias": "loading";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class G2CardModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2CardModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2CardModule, never, [typeof i1.CommonModule, typeof i2.NzCardModule, typeof i3.NzSpinModule, typeof i4.NzOutletModule, typeof G2CardComponent], [typeof G2CardComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2CardModule>;
}