import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@delon/theme";
import * as i3 from "ng-zorro-antd/tooltip";
declare namespace mini_progress_component_d_exports {
  export { G2MiniProgressComponent };
}
export declare class G2MiniProgressComponent {
  locale: import("@angular/core").Signal<import("@delon/theme").MiniProgressLocaleData>;
  readonly color: import("@angular/core").InputSignal<string>;
  readonly target: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly percent: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  readonly strokeWidth: import("@angular/core").InputSignalWithTransform<number | null, unknown>;
  /** 钳位只作用于显示值，输入本身保持原值 */
  protected readonly _target: import("@angular/core").Signal<number>;
  protected readonly _percent: import("@angular/core").Signal<number>;
  private fixNum;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniProgressComponent, "g2-mini-progress", ["g2MiniProgress"], {
    "color": {
      "alias": "color";
      "required": false;
      "isSignal": true;
    };
    "target": {
      "alias": "target";
      "required": false;
      "isSignal": true;
    };
    "percent": {
      "alias": "percent";
      "required": false;
      "isSignal": true;
    };
    "strokeWidth": {
      "alias": "strokeWidth";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class G2MiniProgressModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2MiniProgressModule, never, [typeof i1.CommonModule, typeof i2.DelonLocaleModule, typeof i3.NzTooltipModule, typeof G2MiniProgressComponent], [typeof G2MiniProgressComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2MiniProgressModule>;
}