import * as i0 from "@angular/core";
export declare class AutoFocusDirective {
    private readonly el;
    enabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    delay: import("@angular/core").InputSignalWithTransform<number, unknown>;
    readonly focus: import("@angular/core").OutputEmitterRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; }, { "focus": "focus"; }, never, never, true, never>;
}
