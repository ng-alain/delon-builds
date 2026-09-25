import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
declare namespace mini_bar_component_d_exports {
  export { G2MiniBarClickItem, G2MiniBarComponent, G2MiniBarData };
}
export interface G2MiniBarData {
  x: NzSafeAny;
  y: NzSafeAny;
  color?: string | null;
  [key: string]: NzSafeAny;
}
export interface G2MiniBarClickItem {
  item: G2MiniBarData;
  ev: G2Event;
}
export declare class G2MiniBarComponent extends G2BaseComponent {
  readonly color: import("@angular/core").InputSignal<string>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly borderWidth: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly data: import("@angular/core").InputSignal<G2MiniBarData[]>;
  readonly yTooltipSuffix: import("@angular/core").InputSignal<string>;
  readonly tooltipType: import("@angular/core").InputSignal<"mini" | "default">;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2MiniBarClickItem>;
  protected buildSpec(): G2Spec;
  protected afterCreate(chart: Chart): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniBarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniBarComponent, "g2-mini-bar", ["g2MiniBar"], {
    "color": {
      "alias": "color";
      "required": false;
      "isSignal": true;
    };
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "borderWidth": {
      "alias": "borderWidth";
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
export declare class G2MiniBarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniBarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniBarModule, never, [typeof i1.CommonModule, typeof G2MiniBarComponent], [typeof G2MiniBarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniBarModule>;
}