import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    private readonly el;
    private readonly platform;
    private readonly d$;
    enabled: boolean;
    delay: number;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_enabled: unknown;
    static ngAcceptInputType_delay: unknown;
}
