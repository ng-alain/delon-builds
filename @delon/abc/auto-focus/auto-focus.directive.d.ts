import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
export declare class AutoFocusDirective implements AfterViewInit {
    private el;
    private cdr;
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    enabled: boolean;
    delay: number;
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
