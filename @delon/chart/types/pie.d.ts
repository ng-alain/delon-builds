import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event, G2InteractionType } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/divider";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/skeleton";
declare namespace pie_component_d_exports {
  export { G2PieClickItem, G2PieComponent, G2PieData, G2PieRatio };
}
export interface G2PieData {
  x: NzSafeAny;
  y: number;
  [key: string]: NzSafeAny;
}
export interface G2PieClickItem {
  item: G2PieData;
  ev: G2Event;
}
export interface G2PieRatio {
  /** 占比文本，默认：`占比` */
  text: string;
  /** 反比文本，默认：`反比` */
  inverse: string;
  /** 正比颜色，默认使用 `color` 值 */
  color: string;
  /** 反比颜色，默认：`#F0F2F5` */
  inverseColor: string;
}
export declare class G2PieComponent extends G2BaseComponent {
  readonly legendData: import("@angular/core").WritableSignal<any[]>;
  readonly block: import("@angular/core").WritableSignal<boolean>;
  /** percent 模式下为迷你图 */
  readonly isPercent: import("@angular/core").Signal<boolean>;
  private readonly runTooltip;
  private readonly percentColor;
  private readonly runData;
  readonly animate: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly color: import("@angular/core").InputSignal<string>;
  readonly subTitle: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly total: import("@angular/core").InputSignal<string | number | TemplateRef<void> | null | undefined>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly fontSize: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly hasLegend: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly inner: import("@angular/core").InputSignal<number>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly percent: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly tooltip: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly lineWidth: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly blockMaxWidth: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly select: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly valueFormat: import("@angular/core").InputSignal<((y: number) => string) | undefined>;
  readonly data: import("@angular/core").InputSignal<G2PieData[]>;
  readonly colors: import("@angular/core").InputSignal<string[] | undefined>;
  readonly interaction: import("@angular/core").InputSignal<G2InteractionType>;
  readonly ratio: import("@angular/core").InputSignal<G2PieRatio>;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2PieClickItem>;
  private updateBlock;
  protected containerOf(): HTMLElement;
  protected buildSpec(): G2Spec;
  private colorOf;
  /** 图表实际使用的颜色序列：未显式给 `colors` 时取 G2 解析出的调色板，使图例色点与扇形一致 */
  private chartColorRange;
  /** 派生一份带 0–1 `percent` 的数据，不改写输入 */
  private normalizedData;
  protected dataOf(): unknown;
  /** onDataChange() 只在首次渲染之后的变更触发，首帧重建图例必须靠 onRendered() */
  protected onRendered(): void;
  protected onDataChange(): void;
  protected afterCreate(chart: Chart): void;
  /** 图例数据由组件输入数据派生，而非渲染后的图形数据 */
  private genLegend;
  _click(i: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2PieComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2PieComponent, "g2-pie", ["g2Pie"], {
    "animate": {
      "alias": "animate";
      "required": false;
      "isSignal": true;
    };
    "color": {
      "alias": "color";
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
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "fontSize": {
      "alias": "fontSize";
      "required": false;
      "isSignal": true;
    };
    "hasLegend": {
      "alias": "hasLegend";
      "required": false;
      "isSignal": true;
    };
    "inner": {
      "alias": "inner";
      "required": false;
      "isSignal": true;
    };
    "padding": {
      "alias": "padding";
      "required": false;
      "isSignal": true;
    };
    "percent": {
      "alias": "percent";
      "required": false;
      "isSignal": true;
    };
    "tooltip": {
      "alias": "tooltip";
      "required": false;
      "isSignal": true;
    };
    "lineWidth": {
      "alias": "lineWidth";
      "required": false;
      "isSignal": true;
    };
    "blockMaxWidth": {
      "alias": "blockMaxWidth";
      "required": false;
      "isSignal": true;
    };
    "select": {
      "alias": "select";
      "required": false;
      "isSignal": true;
    };
    "valueFormat": {
      "alias": "valueFormat";
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
    "interaction": {
      "alias": "interaction";
      "required": false;
      "isSignal": true;
    };
    "ratio": {
      "alias": "ratio";
      "required": false;
      "isSignal": true;
    };
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2PieModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2PieModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2PieModule, never, [typeof i1.CommonModule, typeof i2.NzDividerModule, typeof i3.NzOutletModule, typeof i4.NzSkeletonModule, typeof G2PieComponent], [typeof G2PieComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2PieModule>;
}