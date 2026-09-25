import { G2Spec } from "@antv/g2";
import { G2BaseComponent } from "@delon/chart/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
declare namespace gauge_component_d_exports {
  export { G2GaugeComponent };
}
export declare class G2GaugeComponent extends G2BaseComponent {
  readonly title: import("@angular/core").InputSignal<string | undefined>;
  readonly height: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly width: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly fontSize: import("@angular/core").InputSignalWithTransform<number, unknown>;
  /** 值弧颜色 */
  readonly color: import("@angular/core").InputSignal<string>;
  /** 背景弧颜色 */
  readonly bgColor: import("@angular/core").InputSignal<string>;
  readonly format: import("@angular/core").InputSignal<((text: string, item: unknown, index: number) => string) | undefined>;
  readonly percent: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  protected buildSpec(): G2Spec;
  /** 中心文字块的纵坐标（px），与弧的居中公式同源 */
  protected centerTop(): number;
  protected titleColor(): string;
  protected valueColor(): string;
  /** gauge 的"数据"全部由输入派生，重下 spec 比走 changeData 更可靠 */
  protected isDataOnly(): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2GaugeComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2GaugeComponent, "g2-gauge", ["g2Gauge"], {
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
    "width": {
      "alias": "width";
      "required": false;
      "isSignal": true;
    };
    "fontSize": {
      "alias": "fontSize";
      "required": false;
      "isSignal": true;
    };
    "color": {
      "alias": "color";
      "required": false;
      "isSignal": true;
    };
    "bgColor": {
      "alias": "bgColor";
      "required": false;
      "isSignal": true;
    };
    "format": {
      "alias": "format";
      "required": false;
      "isSignal": true;
    };
    "percent": {
      "alias": "percent";
      "required": false;
      "isSignal": true;
    };
    "padding": {
      "alias": "padding";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class G2GaugeModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2GaugeModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2GaugeModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2GaugeComponent], [typeof G2GaugeComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2GaugeModule>;
}