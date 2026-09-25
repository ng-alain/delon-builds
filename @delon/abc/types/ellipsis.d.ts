import { SafeHtml } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/observers";
import * as i3 from "ng-zorro-antd/tooltip";
declare namespace ellipsis_component_d_exports {
  export { EllipsisComponent };
}
export declare class EllipsisComponent {
  private readonly el;
  private readonly injector;
  private readonly dom;
  private readonly doc;
  private isSupportLineClamp;
  private readonly orgEl;
  private readonly shadowOrgEl;
  private readonly shadowTextEl;
  protected orgHtml: import("@angular/core").WritableSignal<SafeHtml | null>;
  protected type: import("@angular/core").WritableSignal<string>;
  protected cls: import("@angular/core").WritableSignal<Record<string, any>>;
  readonly text: import("@angular/core").WritableSignal<string>;
  targetCount: number;
  readonly tooltip: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly length: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly lines: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly fullWidthRecognition: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly tail: import("@angular/core").InputSignal<string>;
  protected get linsWord(): string;
  private get win();
  constructor();
  private getStrFullLength;
  private cutStrByFullLength;
  private bisection;
  private genType;
  private gen;
  private getEl;
  protected refresh(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<EllipsisComponent, "ellipsis", ["ellipsis"], {
    "tooltip": {
      "alias": "tooltip";
      "required": false;
      "isSignal": true;
    };
    "length": {
      "alias": "length";
      "required": false;
      "isSignal": true;
    };
    "lines": {
      "alias": "lines";
      "required": false;
      "isSignal": true;
    };
    "fullWidthRecognition": {
      "alias": "fullWidthRecognition";
      "required": false;
      "isSignal": true;
    };
    "tail": {
      "alias": "tail";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class EllipsisModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<EllipsisModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzTooltipModule, typeof EllipsisComponent], [typeof EllipsisComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<EllipsisModule>;
}