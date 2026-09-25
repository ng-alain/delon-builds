import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/skeleton";
declare namespace radar_component_d_exports {
  export { G2RadarClickItem, G2RadarComponent, G2RadarData };
}
export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: NzSafeAny;
}
export interface G2RadarClickItem {
  item: G2RadarData;
  ev: G2Event;
}
export declare class G2RadarComponent extends G2BaseComponent {
  readonly legendData: import("@angular/core").WritableSignal<any[]>;
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly hasLegend: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly tickCount: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly data: import("@angular/core").InputSignal<G2RadarData[]>;
  readonly colors: import("@angular/core").InputSignal<string[]>;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2RadarClickItem>;
  private getHeight;
  protected containerOf(): HTMLElement;
  /** 必须同时供首次渲染与 data-only 变更使用，否则 marks 会拿到未过滤的原始数据 */
  private filteredData;
  protected buildSpec(): G2Spec;
  protected dataOf(): unknown;
  /** 首帧渲染不触发 `onDataChange()`，故在此重建自绘图例 */
  protected onRendered(): void;
  protected onDataChange(): void;
  protected afterCreate(chart: Chart): void;
  private genLegend;
  _click(i: number): void;
  protected onInputChanges(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2RadarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2RadarComponent, "g2-radar", ["g2Radar"], {
    "title": {
      "alias": "title";
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
    "hasLegend": {
      "alias": "hasLegend";
      "required": false;
      "isSignal": true;
    };
    "tickCount": {
      "alias": "tickCount";
      "required": false;
      "isSignal": true;
    };
    "data": {
      "alias": "data";
      "required": false;
      "isSignal": true;
    };
    "colors": {
      "alias": "colors";
      "required": false;
      "isSignal": true;
    };
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2RadarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2RadarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2RadarModule, never, [typeof i1.CommonModule, typeof i2.NzGridModule, typeof i3.NzOutletModule, typeof i4.NzSkeletonModule, typeof G2RadarComponent], [typeof G2RadarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2RadarModule>;
}