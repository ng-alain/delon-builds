import * as i0 from "@angular/core";
import { ElementRef } from "@angular/core";
import { G2BaseComponent } from "@delon/chart/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
declare namespace custom_component_d_exports {
  export { G2CustomComponent };
}
export declare class G2CustomComponent extends G2BaseComponent {
  readonly height: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly resizeTime: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly render: import("@angular/core").OutputEmitterRef<ElementRef<any>>;
  readonly resize: import("@angular/core").OutputEmitterRef<ElementRef<any>>;
  readonly destroy: import("@angular/core").OutputEmitterRef<ElementRef<any>>;
  protected install(): void;
  private resize$?;
  private installResizeEvent;
  static ɵfac: i0.ɵɵFactoryDeclaration<G2CustomComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<G2CustomComponent, "g2,g2-custom", ["g2Custom"], {
    "height": {
      "alias": "height";
      "required": false;
      "isSignal": true;
    };
    "resizeTime": {
      "alias": "resizeTime";
      "required": false;
      "isSignal": true;
    };
  }, {
    "render": "render";
    "resize": "resize";
    "destroy": "destroy";
  }, never, ["*"], true, never>;
}
export declare class G2CustomModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<G2CustomModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<G2CustomModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2CustomComponent], [typeof G2CustomComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<G2CustomModule>;
}