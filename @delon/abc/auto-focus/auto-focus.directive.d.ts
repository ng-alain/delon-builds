import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit {
    private el;
    private cdr;
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    enabled: boolean;
    delay: number;
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": "enabled"; "delay": "delay"; }, {}, never>;
}
