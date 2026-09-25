import * as i0 from "@angular/core";
import { Signal } from "@angular/core";
import { G2Spec } from "@antv/g2";
import { G2BaseComponent } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
declare namespace single_bar_component_d_exports {
  export { G2SingleBarComponent };
}
export declare class G2SingleBarComponent extends G2BaseComponent {
  readonly plusColor: import("@angular/core").InputSignal<string>;
  readonly minusColor: import("@angular/core").InputSignal<string>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly barSize: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly min: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly max: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly value: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly line: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly format: import("@angular/core").InputSignal<((value: number, item: NzSafeAny, index: number) => string) | undefined>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly textStyle: import("@angular/core").InputSignal<Record<string, any>>;
  protected buildSpec(): G2Spec;
  protected dataOf(): unknown;
  protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2SingleBarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2SingleBarComponent, "g2-single-bar", ["g2SingleBar"], {
    "plusColor": {
      "alias": "plusColor";
      "required": false;
      "isSignal": true;
    };
    "minusColor": {
      "alias": "minusColor";
      "required": false;
      "isSignal": true;
    };
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "barSize": {
      "alias": "barSize";
      "required": false;
      "isSignal": true;
    };
    "min": {
      "alias": "min";
      "required": false;
      "isSignal": true;
    };
    "max": {
      "alias": "max";
      "required": false;
      "isSignal": true;
    };
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
    "line": {
      "alias": "line";
      "required": false;
      "isSignal": true;
    };
    "format": {
      "alias": "format";
      "required": false;
      "isSignal": true;
    };
    "padding": {
      "alias": "padding";
      "required": false;
      "isSignal": true;
    };
    "textStyle": {
      "alias": "textStyle";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class G2SingleBarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2SingleBarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2SingleBarModule, never, [typeof i1.CommonModule, typeof G2SingleBarComponent], [typeof G2SingleBarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2SingleBarModule>;
}