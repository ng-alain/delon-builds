import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { REP_TYPE } from "@delon/theme";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/core/outlet";
export type SELayout = 'horizontal' | 'vertical' | 'inline';
export type SESize = 'default' | 'compact';
export type SEErrorType = string | TemplateRef<void> | SEError;
export type SEError = Record<string, string | TemplateRef<void>>;
export interface SEErrorRefresh {
  name: string;
  error: SEErrorType;
}
declare namespace se_container_component_d_exports {
  export { SEContainerComponent, SETitleComponent };
}
export declare class SETitleComponent {
  private readonly parentComp;
  constructor();
  protected paddingValue: import("@angular/core").Signal<number>;
  static ɵfac: i0.ɵɵFactoryDeclaration<SETitleComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"], true, never>;
}
export declare class SEContainerComponent {
  private readonly cogSrv;
  readonly colInCon: import("@angular/core").InputSignalWithTransform<REP_TYPE | null, unknown>;
  readonly labelWidth: import("@angular/core").InputSignalWithTransform<REP_TYPE | 150 | null, unknown>;
  readonly col: import("@angular/core").InputSignalWithTransform<REP_TYPE | null, unknown>;
  readonly noColon: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly gutter: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly nzLayout: import("@angular/core").InputSignal<SELayout>;
  readonly size: import("@angular/core").InputSignal<"default" | "compact">;
  readonly firstVisual: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly ingoreDirty: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly line: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly errors: import("@angular/core").InputSignal<SEErrorRefresh[]>;
  readonly _gutter: import("@angular/core").Signal<number>;
  readonly _size: import("@angular/core").Signal<"default" | "compact">;
  protected margin: import("@angular/core").Signal<number>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<SEContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SEContainerComponent, "se-container, [se-container]", ["seContainer"], {
    "colInCon": {
      "alias": "se-container";
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
    "noColon": {
      "alias": "noColon";
      "required": false;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "gutter": {
      "alias": "gutter";
      "required": false;
      "isSignal": true;
    };
    "nzLayout": {
      "alias": "nzLayout";
      "required": false;
      "isSignal": true;
    };
    "size": {
      "alias": "size";
      "required": false;
      "isSignal": true;
    };
    "firstVisual": {
      "alias": "firstVisual";
      "required": false;
      "isSignal": true;
    };
    "ingoreDirty": {
      "alias": "ingoreDirty";
      "required": false;
      "isSignal": true;
    };
    "line": {
      "alias": "line";
      "required": false;
      "isSignal": true;
    };
    "errors": {
      "alias": "errors";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
declare namespace se_component_d_exports {
  export { SEComponent };
}
export declare class SEComponent {
  private readonly parentComp;
  private readonly rep;
  private readonly statusSrv;
  private readonly destroy$;
  private readonly injector;
  private readonly ngModel;
  private readonly formControlName;
  private ngControl;
  private readonly contentElement;
  private onceFlag;
  private bindModel$?;
  protected empty: import("@angular/core").WritableSignal<boolean>;
  readonly optional: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly optionalHelp: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly optionalHelpColor: import("@angular/core").InputSignal<string | undefined>;
  error: import("@angular/core").InputSignal<SEErrorType | undefined>;
  readonly extra: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly label: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly col: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly required: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly controlClass: import("@angular/core").InputSignal<string | null | undefined>;
  readonly line: import("@angular/core").InputSignalWithTransform<boolean | null, unknown>;
  readonly labelWidth: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly noColon: import("@angular/core").InputSignalWithTransform<boolean | null, unknown>;
  readonly hideLabel: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly id: import("@angular/core").InputSignal<string | undefined>;
  protected invalid: import("@angular/core").WritableSignal<boolean>;
  protected showErr: import("@angular/core").Signal<boolean>;
  protected errorType: import("@angular/core").WritableSignal<SEErrorType | undefined>;
  protected errorData: import("@angular/core").Signal<import("@delon/abc/se").SEError | undefined>;
  protected errorText: import("@angular/core").WritableSignal<string | TemplateRef<void> | null>;
  protected _required: import("@angular/core").WritableSignal<boolean>;
  protected paddingValue: import("@angular/core").Signal<number>;
  protected compact: import("@angular/core").Signal<boolean>;
  protected _id: import("@angular/core").WritableSignal<string | undefined>;
  protected _noColon: import("@angular/core").Signal<boolean>;
  protected _labelWidth: import("@angular/core").Signal<number | null>;
  protected cls: import("@angular/core").Signal<string[]>;
  protected readonly nzValidateAnimationEnter: import("@angular/core").Signal<string>;
  protected readonly nzValidateAnimationLeave: import("@angular/core").Signal<string>;
  constructor();
  private updateStatus;
  checkContent(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<SEComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SEComponent, "se", ["se"], {
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
    "error": {
      "alias": "error";
      "required": false;
      "isSignal": true;
    };
    "extra": {
      "alias": "extra";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "col": {
      "alias": "col";
      "required": false;
      "isSignal": true;
    };
    "required": {
      "alias": "required";
      "required": false;
      "isSignal": true;
    };
    "controlClass": {
      "alias": "controlClass";
      "required": false;
      "isSignal": true;
    };
    "line": {
      "alias": "line";
      "required": false;
      "isSignal": true;
    };
    "labelWidth": {
      "alias": "labelWidth";
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
    "id": {
      "alias": "id";
      "required": false;
      "isSignal": true;
    };
  }, {}, ["ngModel", "formControlName"], ["*"], true, never>;
}
export declare class SEModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<SEModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<SEModule, never, [typeof i1.CommonModule, typeof i2.NzTooltipModule, typeof i3.NzIconModule, typeof i4.NzOutletModule, typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent], [typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<SEModule>;
}