import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
export declare class SFFixedDirective implements AfterViewInit, OnChanges {
    private render;
    private el;
    private _inited;
    num: number;
    private init;
    constructor(er: ElementRef, render: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
}
