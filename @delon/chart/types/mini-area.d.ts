import * as i0 from "@angular/core";
import { Signal } from "@angular/core";
import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
declare namespace mini_area_component_d_exports {
  export { G2MiniAreaClickItem, G2MiniAreaComponent, G2MiniAreaData };
}
export interface G2MiniAreaData {
  x: NzSafeAny;
  y: NzSafeAny;
  [key: string]: NzSafeAny;
}
export interface G2MiniAreaClickItem {
  item: G2MiniAreaData;
  ev: G2Event;
}
export declare class G2MiniAreaComponent extends G2BaseComponent {
  readonly color: import("@angular/core").InputSignal<string>;
  readonly borderColor: import("@angular/core").InputSignal<string>;
  readonly borderWidth: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly fit: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly line: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly animate: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly xAxis: import("@angular/core").InputSignal<any>;
  readonly yAxis: import("@angular/core").InputSignal<any>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly data: import("@angular/core").InputSignal<G2MiniAreaData[]>;
  readonly yTooltipSuffix: import("@angular/core").InputSignal<string>;
  readonly tooltipType: import("@angular/core").InputSignal<"mini" | "default">;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2MiniAreaClickItem>;
  protected chartOptions(): NzSafeAny;
  protected buildSpec(): G2Spec;
  protected afterCreate(chart: Chart): void;
  protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniAreaComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniAreaComponent, "g2-mini-area", ["g2MiniArea"], {
    "color": {
      "alias": "color";
      "required": false;
      "isSignal": true;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
      "isSignal": true;
    };
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
      "isSignal": true;
    };
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "fit": {
      "alias": "fit";
      "required": false;
      "isSignal": true;
    };
    "line": {
      "alias": "line";
      "required": false;
      "isSignal": true;
    };
    "animate": {
      "alias": "animate";
      "required": false;
      "isSignal": true;
    };
    "xAxis": {
      "alias": "xAxis";
      "required": false;
      "isSignal": true;
    };
    "yAxis": {
      "alias": "yAxis";
      "required": false;
      "isSignal": true;
    };
    "padding": {
      "alias": "padding";
      "required": false;
      "isSignal": true;
    };
    "data": {
      "alias": "data";
      "required": false;
      "isSignal": true;
    };
    "yTooltipSuffix": {
      "alias": "yTooltipSuffix";
      "required": false;
      "isSignal": true;
    };
    "tooltipType": {
      "alias": "tooltipType";
      "required": false;
      "isSignal": true;
    };
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2MiniAreaModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniAreaModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniAreaModule, never, [typeof i1.CommonModule, typeof G2MiniAreaComponent], [typeof G2MiniAreaComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniAreaModule>;
}