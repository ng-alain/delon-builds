import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class QuickMenuComponent implements OnInit, OnChanges {
    private cdr;
    private el;
    private render;
    constructor(cdr: ChangeDetectorRef, el: ElementRef, render: Renderer2);
    ctrlStyle: {
        [key: string]: string;
    };
    icon: string | TemplateRef<void>;
    top: number;
    width: number;
    bgColor: string;
    borderColor: string;
    private show;
    private initFlag;
    _click(): void;
    private setStyle;
    ngOnInit(): void;
    ngOnChanges(): void;
}
