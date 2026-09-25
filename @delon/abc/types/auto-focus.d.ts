import * as i0 from "@angular/core";
declare namespace auto_focus_directive_d_exports {
  export { AutoFocusDirective };
}
export declare class AutoFocusDirective {
  private readonly el;
  readonly enabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly delay: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly focus: import("@angular/core").OutputEmitterRef<void>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], {
    "enabled": {
      "alias": "enabled";
      "required": false;
      "isSignal": true;
    };
    "delay": {
      "alias": "delay";
      "required": false;
      "isSignal": true;
    };
  }, {
    "focus": "focus";
  }, never, never, true, never>;
}
export declare class AutoFocusModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<AutoFocusModule, never, [typeof AutoFocusDirective], [typeof AutoFocusDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<AutoFocusModule>;
}