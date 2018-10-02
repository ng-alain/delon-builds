import { OnInit, OnChanges, ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
export declare class QuickMenuComponent implements OnInit, OnChanges {
    private cd;
    private el;
    private render;
    icon: string | string[] | {
        [key: string]: string;
    };
    top: number;
    width: number;
    bgColor: string;
    borderColor: string;
    constructor(cd: ChangeDetectorRef, el: ElementRef, render: Renderer2);
    private show;
    _click(): void;
    ctrlStyle: {
        [key: string]: string;
    };
    private setStyle;
    private initFlag;
    ngOnInit(): void;
    ngOnChanges(): void;
}
