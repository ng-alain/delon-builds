import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    private readonly el;
    private readonly platform;
    private readonly destroy$;
    enabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    delay: import("@angular/core").InputSignalWithTransform<number, unknown>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
