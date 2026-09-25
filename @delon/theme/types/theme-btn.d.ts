import * as i0 from "@angular/core";
import { InjectionToken, OnDestroy } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/dropdown";
import * as i3 from "ng-zorro-antd/tooltip";
declare namespace theme_btn_component_d_exports {
  export { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent, ThemeBtnType };
}
export interface ThemeBtnType {
  key: string;
  text: string;
}
export declare const ALAIN_THEME_BTN_KEYS: InjectionToken<string>;
export declare class ThemeBtnComponent implements OnDestroy {
  private readonly doc;
  private readonly platform;
  private readonly renderer;
  private readonly configSrv;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  private key;
  private theme;
  protected isDev: boolean;
  readonly types: import("@angular/core").InputSignal<ThemeBtnType[]>;
  readonly devTips: import("@angular/core").InputSignal<string>;
  readonly deployUrl: import("@angular/core").InputSignal<string>;
  readonly themeChange: import("@angular/core").OutputEmitterRef<string>;
  constructor();
  private initTheme;
  private updateChartTheme;
  onThemeChange(theme: string): void;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ThemeBtnComponent, "theme-btn", never, {
    "types": {
      "alias": "types";
      "required": false;
      "isSignal": true;
    };
    "devTips": {
      "alias": "devTips";
      "required": false;
      "isSignal": true;
    };
    "deployUrl": {
      "alias": "deployUrl";
      "required": false;
      "isSignal": true;
    };
  }, {
    "themeChange": "themeChange";
  }, never, never, true, never>;
}
export declare class ThemeBtnModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<ThemeBtnModule, never, [typeof i1.CommonModule, typeof i2.NzDropdownModule, typeof i3.NzTooltipModule, typeof ThemeBtnComponent], [typeof ThemeBtnComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<ThemeBtnModule>;
}