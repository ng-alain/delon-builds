import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "@delon/theme";
declare namespace tag_select_component_d_exports {
  export { TagSelectComponent };
}
export declare class TagSelectComponent {
  protected locale: import("@angular/core").Signal<import("@delon/theme").TagSelectLocaleData>;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  expand: import("@angular/core").WritableSignal<boolean>;
  /** 是否启用 `展开与收进` */
  readonly expandable: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly change: import("@angular/core").OutputEmitterRef<boolean>;
  trigger(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<TagSelectComponent, "tag-select", ["tagSelect"], {
    "expandable": {
      "alias": "expandable";
      "required": false;
      "isSignal": true;
    };
  }, {
    "change": "change";
  }, never, ["*"], true, never>;
}
export declare class TagSelectModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<TagSelectModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<TagSelectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.DelonLocaleModule, typeof TagSelectComponent], [typeof TagSelectComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<TagSelectModule>;
}