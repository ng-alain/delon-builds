import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class AutoFocusDirective implements AfterViewInit, OnDestroy {
    private el;
    private cdr;
    private platform;
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    private _focusoutTimeout;
    enabled: boolean;
    delay: number;
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, platform: Platform);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", ["autoFocus"], { "enabled": { "alias": "enabled"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, {}, never, never, true, never>;
}
