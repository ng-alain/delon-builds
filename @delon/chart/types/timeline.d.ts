import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event, G2Time } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/skeleton";
declare namespace timeline_component_d_exports {
  export { G2TimelineClickItem, G2TimelineComponent, G2TimelineData, G2TimelineMap };
}
/** 按 `maxAxis` 传递对应数量的 `y1`…`yN` */
export interface G2TimelineData {
  time?: G2Time;
  y1: number;
  y2?: number;
  y3?: number;
  y4?: number;
  y5?: number;
  [key: string]: NzSafeAny;
}
export interface G2TimelineMap {
  y1: string;
  y2?: string;
  y3?: string;
  y4?: string;
  y5?: string;
  [key: string]: string | undefined;
}
export interface G2TimelineClickItem {
  item: G2TimelineData;
  ev: G2Event;
}
export declare class G2TimelineComponent extends G2BaseComponent {
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly maxAxis: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly data: import("@angular/core").InputSignal<G2TimelineData[]>;
  readonly titleMap: import("@angular/core").InputSignal<G2TimelineMap | null | undefined>;
  readonly colorMap: import("@angular/core").InputSignal<G2TimelineMap>;
  readonly mask: import("@angular/core").InputSignal<string>;
  readonly maskSlider: import("@angular/core").InputSignal<string>;
  readonly position: import("@angular/core").InputSignal<"top" | "right" | "bottom" | "left">;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly padding: import("@angular/core").InputSignal<number[]>;
  readonly borderWidth: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly slider: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2TimelineClickItem>;
  protected containerOf(): HTMLElement;
  /** 必须同时供首次渲染与 data-only 变更使用，否则 marks 会拿到未折叠的原始数据 */
  private foldedData;
  protected buildSpec(): G2Spec;
  protected dataOf(): unknown;
  protected afterCreate(chart: Chart): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2TimelineComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2TimelineComponent, "g2-timeline", ["g2Timeline"], {
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "maxAxis": {
      "alias": "maxAxis";
      "required": false;
      "isSignal": true;
    };
    "data": {
      "alias": "data";
      "required": false;
      "isSignal": true;
    };
    "titleMap": {
      "alias": "titleMap";
      "required": false;
      "isSignal": true;
    };
    "colorMap": {
      "alias": "colorMap";
      "required": false;
      "isSignal": true;
    };
    "mask": {
      "alias": "mask";
      "required": false;
      "isSignal": true;
    };
    "maskSlider": {
      "alias": "maskSlider";
      "required": false;
      "isSignal": true;
    };
    "position": {
      "alias": "position";
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
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
      "isSignal": true;
    };
    "slider": {
      "alias": "slider";
      "required": false;
      "isSignal": true;
    };
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2TimelineModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2TimelineModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2TimelineModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof i3.NzSkeletonModule, typeof G2TimelineComponent], [typeof G2TimelineComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2TimelineModule>;
}