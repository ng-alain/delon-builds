import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { REP_TYPE } from "@delon/theme";
import { NzTSType } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/observers";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/core/outlet";
declare namespace sv_container_component_d_exports {
  export { SVContainerComponent, SVTitleComponent };
}
export declare class SVTitleComponent {
  private readonly parentComp;
  protected paddingValue: import("@angular/core").Signal<number>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<SVTitleComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SVTitleComponent, "sv-title, [sv-title]", ["svTitle"], {}, {}, never, ["*"], true, never>;
}
export declare class SVContainerComponent {
  private readonly cogSrv;
  readonly colInCon: import("@angular/core").InputSignalWithTransform<REP_TYPE | null, unknown>;
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | undefined>;
  readonly size: import("@angular/core").InputSignal<"small" | "large" | "default">;
  /** 列表项间距，单位为 `px` */
  readonly gutter: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly layout: import("@angular/core").InputSignal<"horizontal" | "vertical">;
  readonly labelWidth: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  readonly col: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly default: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly noColon: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly bordered: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  protected margin: import("@angular/core").Signal<{
    'margin-left'?: undefined;
    'margin-right'?: undefined;
  } | {
    'margin-left': string;
    'margin-right': string;
  }>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<SVContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SVContainerComponent, "sv-container, [sv-container]", ["svContainer"], {
    "colInCon": {
      "alias": "sv-container";
      "required": false;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "size": {
      "alias": "size";
      "required": false;
      "isSignal": true;
    };
    "gutter": {
      "alias": "gutter";
      "required": false;
      "isSignal": true;
    };
    "layout": {
      "alias": "layout";
      "required": false;
      "isSignal": true;
    };
    "labelWidth": {
      "alias": "labelWidth";
      "required": false;
      "isSignal": true;
    };
    "col": {
      "alias": "col";
      "required": false;
      "isSignal": true;
    };
    "default": {
      "alias": "default";
      "required": false;
      "isSignal": true;
    };
    "noColon": {
      "alias": "noColon";
      "required": false;
      "isSignal": true;
    };
    "bordered": {
      "alias": "bordered";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
declare namespace sv_value_component_d_exports {
  export { SVValueComponent };
}
export declare class SVValueComponent {
  prefix?: string;
  unit?: string;
  tooltip?: NzTSType | null;
  size: 'large' | 'small' | 'default';
  static ɵfac: i0.ɵɵFactoryDeclaration<SVValueComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SVValueComponent, "sv-value, [sv-value]", ["svValue"], {
    "prefix": {
      "alias": "prefix";
      "required": false;
    };
    "unit": {
      "alias": "unit";
      "required": false;
    };
    "tooltip": {
      "alias": "tooltip";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, ["*"], true, never>;
}
declare namespace sv_component_d_exports {
  export { SVComponent };
}
export declare class SVComponent {
  private readonly parentComp;
  private readonly rep;
  private readonly conEl;
  protected _noColon: import("@angular/core").Signal<boolean>;
  readonly optional: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly optionalHelp: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly optionalHelpColor: import("@angular/core").InputSignal<string | undefined>;
  readonly label: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly unit: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly col: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly default: import("@angular/core").InputSignalWithTransform<boolean | null, unknown>;
  readonly type: import("@angular/core").InputSignal<"primary" | "success" | "danger" | "warning" | null | undefined>;
  readonly noColon: import("@angular/core").InputSignalWithTransform<boolean | null, unknown>;
  readonly hideLabel: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  protected paddingValue: import("@angular/core").Signal<number | null>;
  protected labelWidth: import("@angular/core").Signal<number | null | undefined>;
  protected cls: import("@angular/core").Signal<string[]>;
  constructor();
  checkContent(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<SVComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SVComponent, "sv, [sv]", ["sv"], {
    "optional": {
      "alias": "optional";
      "required": false;
      "isSignal": true;
    };
    "optionalHelp": {
      "alias": "optionalHelp";
      "required": false;
      "isSignal": true;
    };
    "optionalHelpColor": {
      "alias": "optionalHelpColor";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "unit": {
      "alias": "unit";
      "required": false;
      "isSignal": true;
    };
    "col": {
      "alias": "col";
      "required": false;
      "isSignal": true;
    };
    "default": {
      "alias": "default";
      "required": false;
      "isSignal": true;
    };
    "type": {
      "alias": "type";
      "required": false;
      "isSignal": true;
    };
    "noColon": {
      "alias": "noColon";
      "required": false;
      "isSignal": true;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class SVModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<SVModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<SVModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzTooltipModule, typeof i4.NzIconModule, typeof i5.NzOutletModule, typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent], [typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<SVModule>;
}