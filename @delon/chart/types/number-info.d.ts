import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
declare namespace number_info_component_d_exports {
  export { NumberInfoComponent };
}
export declare class NumberInfoComponent {
  /** 标题 */
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  /** 子标题 */
  readonly subTitle: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  /** 总量 */
  readonly total: import("@angular/core").InputSignal<string | number | TemplateRef<void> | null | undefined>;
  /** 子总量 */
  readonly subTotal: import("@angular/core").InputSignal<string | number | TemplateRef<void> | null | undefined>;
  /** 总量后缀 */
  readonly suffix: import("@angular/core").InputSignal<string | null | undefined>;
  /** 增加状态 */
  readonly status: import("@angular/core").InputSignal<"up" | "down" | undefined>;
  /** 状态样式 */
  readonly theme: import("@angular/core").InputSignal<"light" | "default">;
  /** 设置数字和描述直接的间距（像素） */
  readonly gap: import("@angular/core").InputSignalWithTransform<number, unknown>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NumberInfoComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NumberInfoComponent, "number-info", ["numberInfo"], {
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "subTitle": {
      "alias": "subTitle";
      "required": false;
      "isSignal": true;
    };
    "total": {
      "alias": "total";
      "required": false;
      "isSignal": true;
    };
    "subTotal": {
      "alias": "subTotal";
      "required": false;
      "isSignal": true;
    };
    "suffix": {
      "alias": "suffix";
      "required": false;
      "isSignal": true;
    };
    "status": {
      "alias": "status";
      "required": false;
      "isSignal": true;
    };
    "theme": {
      "alias": "theme";
      "required": false;
      "isSignal": true;
    };
    "gap": {
      "alias": "gap";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class NumberInfoModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NumberInfoModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NumberInfoModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof NumberInfoComponent], [typeof NumberInfoComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NumberInfoModule>;
}