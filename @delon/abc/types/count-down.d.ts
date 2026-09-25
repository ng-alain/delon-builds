import * as i2 from "ngx-countdown";
import { CountdownComponent, CountdownConfig, CountdownEvent } from "ngx-countdown";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
declare namespace count_down_component_d_exports {
  export { CountDownComponent };
}
export declare class CountDownComponent {
  readonly instance: CountdownComponent;
  readonly config: import("@angular/core").InputSignal<CountdownConfig | undefined>;
  readonly target: import("@angular/core").InputSignal<number | Date | undefined>;
  readonly event: import("@angular/core").OutputEmitterRef<CountdownEvent>;
  protected cfg: import("@angular/core").Signal<CountdownConfig>;
  static ɵfac: i0.ɵɵFactoryDeclaration<CountDownComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<CountDownComponent, "count-down", ["countDown"], {
    "config": {
      "alias": "config";
      "required": false;
      "isSignal": true;
    };
    "target": {
      "alias": "target";
      "required": false;
      "isSignal": true;
    };
  }, {
    "event": "event";
  }, never, never, true, never>;
}
export declare class CountDownModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<CountDownModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<CountDownModule, never, [typeof i1.CommonModule, typeof i2.CountdownComponent, typeof CountDownComponent], [typeof CountDownComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<CountDownModule>;
}