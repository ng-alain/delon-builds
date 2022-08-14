import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SFFixedDirective implements AfterViewInit, OnChanges {
    private render;
    private el;
    private _inited;
    num?: number | null;
    private init;
    constructor(er: ElementRef, render: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFFixedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SFFixedDirective, "[fixed-label]", never, { "num": "fixed-label"; }, {}, never, never, false>;
}
