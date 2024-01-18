import { AfterViewInit } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator/convert';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    private readonly el;
    private readonly platform;
    private readonly d$;
    enabled: boolean;
    delay: number;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, {}, never, never, true, never>;
}
