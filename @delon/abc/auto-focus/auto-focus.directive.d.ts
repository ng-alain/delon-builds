import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    private readonly el;
    private readonly platform;
    private readonly destroy$;
    enabled: import("@angular/core").InputSignalWithTransform<boolean, string | boolean | null | undefined>;
    delay: import("@angular/core").InputSignalWithTransform<number, string | number | null | undefined>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
