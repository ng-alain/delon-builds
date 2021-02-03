import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BooleanInput } from '@delon/util/decorator';
export declare class AutoFocusDirective implements AfterViewInit {
    private el;
    private cdr;
    static ngAcceptInputType_enabled: BooleanInput;
    enabled: boolean;
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
