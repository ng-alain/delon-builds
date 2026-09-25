import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
declare namespace quick_menu_component_d_exports {
  export { QuickMenuComponent };
}
export declare class QuickMenuComponent {
  private readonly el;
  private readonly render;
  readonly icon: import("@angular/core").InputSignal<string | TemplateRef<void>>;
  readonly top: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly width: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly bgColor: import("@angular/core").InputSignal<string | undefined>;
  readonly borderColor: import("@angular/core").InputSignal<string | undefined>;
  readonly expand: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly expandChange: import("@angular/core").OutputEmitterRef<boolean>;
  private show;
  protected ctrlStyle: import("@angular/core").Signal<Record<string, string | undefined>>;
  constructor();
  _click(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<QuickMenuComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<QuickMenuComponent, "quick-menu", ["quickMenu"], {
    "icon": {
      "alias": "icon";
      "required": false;
      "isSignal": true;
    };
    "top": {
      "alias": "top";
      "required": false;
      "isSignal": true;
    };
    "width": {
      "alias": "width";
      "required": false;
      "isSignal": true;
    };
    "bgColor": {
      "alias": "bgColor";
      "required": false;
      "isSignal": true;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
      "isSignal": true;
    };
    "expand": {
      "alias": "expand";
      "required": false;
      "isSignal": true;
    };
  }, {
    "expandChange": "expandChange";
  }, never, ["*"], true, never>;
}
export declare class QuickMenuModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<QuickMenuModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<QuickMenuModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof QuickMenuComponent], [typeof QuickMenuComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<QuickMenuModule>;
}