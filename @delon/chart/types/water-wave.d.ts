import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import { G2Spec } from "@antv/g2";
import { G2BaseComponent } from "@delon/chart/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
declare namespace water_wave_component_d_exports {
  export { G2WaterWaveComponent };
}
export declare class G2WaterWaveComponent extends G2BaseComponent {
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null>;
  readonly color: import("@angular/core").InputSignal<string>;
  /** 边长（px） */
  readonly size: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly percent: import("@angular/core").InputSignal<number | undefined>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  /** 只控制进场动画；水波流动由 G2 内置、始终运行 */
  readonly animate: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  protected containerOf(): HTMLElement;
  protected buildSpec(): G2Spec;
  protected isDataOnly(): boolean;
  /** 手动重绘（兼容 v4） */
  render(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2WaterWaveComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2WaterWaveComponent, "g2-water-wave", ["g2WaterWave"], {
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
    "size": {
      "alias": "size";
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
    "animate": {
      "alias": "animate";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class G2WaterWaveModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2WaterWaveModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2WaterWaveModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof G2WaterWaveComponent], [typeof G2WaterWaveComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2WaterWaveModule>;
}