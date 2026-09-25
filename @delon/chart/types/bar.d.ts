import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event, G2InteractionType } from "@delon/chart/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/skeleton";
declare namespace bar_component_d_exports {
  export { G2BarClickItem, G2BarComponent, G2BarData };
}
export interface G2BarData {
  x: unknown;
  y: unknown;
  color?: string | null;
  [key: string]: unknown;
}
export interface G2BarClickItem {
  item: G2BarData;
  ev: G2Event;
}
export declare class G2BarComponent extends G2BaseComponent {
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | undefined>;
  readonly color: import("@angular/core").InputSignal<string>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly data: import("@angular/core").InputSignal<G2BarData[]>;
  readonly autoLabel: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly interaction: import("@angular/core").InputSignal<G2InteractionType>;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2BarClickItem>;
  /** 有标题时扣除标题高度，使标题 + 绘图区等于 height */
  private getHeight;
  protected containerOf(): HTMLElement;
  protected buildSpec(): G2Spec;
  protected afterCreate(chart: Chart): void;
  private resizeInstalled;
  private installResizeEvent;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2BarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2BarComponent, "g2-bar", ["g2Bar"], {
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
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
    "autoLabel": {
      "alias": "autoLabel";
      "required": false;
      "isSignal": true;
    };
    "interaction": {
      "alias": "interaction";
      "required": false;
      "isSignal": true;
    };
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2BarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2BarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2BarModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof i3.NzSkeletonModule, typeof G2BarComponent], [typeof G2BarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2BarModule>;
}