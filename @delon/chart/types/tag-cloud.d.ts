import { Chart, G2Spec } from "@antv/g2";
import { G2BaseComponent, G2Event } from "@delon/chart/core";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
declare namespace tag_cloud_component_d_exports {
  export { G2TagCloudClickItem, G2TagCloudComponent, G2TagCloudData };
}
export interface G2TagCloudData {
  value?: number;
  name?: string;
  [key: string]: NzSafeAny;
}
export interface G2TagCloudClickItem {
  item: G2TagCloudData;
  ev: G2Event;
}
export declare class G2TagCloudComponent extends G2BaseComponent {
  readonly width: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly height: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly padding: import("@angular/core").InputSignal<number | number[] | "auto">;
  readonly data: import("@angular/core").InputSignal<G2TagCloudData[]>;
  readonly clickItem: import("@angular/core").OutputEmitterRef<G2TagCloudClickItem>;
  protected chartOptions(): NzSafeAny;
  protected buildSpec(): G2Spec;
  protected afterCreate(chart: Chart): void;
  private installResizeEvent;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2TagCloudComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2TagCloudComponent, "g2-tag-cloud", ["g2TagCloud"], {
    "width": {
      "alias": "width";
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
  }, {
    "clickItem": "clickItem";
  }, never, never, true, never>;
}
export declare class G2TagCloudModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2TagCloudModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2TagCloudModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2TagCloudComponent], [typeof G2TagCloudComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2TagCloudModule>;
}