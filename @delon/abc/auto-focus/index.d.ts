import * as i0 from '@angular/core';

declare class AutoFocusDirective {
    private readonly el;
    enabled: i0.InputSignalWithTransform<boolean, unknown>;
    delay: i0.InputSignalWithTransform<number, unknown>;
    readonly focus: i0.OutputEmitterRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; }, { "focus": "focus"; }, never, never, true, never>;
}

declare class AutoFocusModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AutoFocusModule, never, [typeof AutoFocusDirective], [typeof AutoFocusDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AutoFocusModule>;
}

export { AutoFocusDirective, AutoFocusModule };
