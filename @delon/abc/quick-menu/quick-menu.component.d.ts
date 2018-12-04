import { OnInit, OnChanges, ChangeDetectorRef, Renderer2, ElementRef, TemplateRef } from '@angular/core';
export declare class QuickMenuComponent implements OnInit, OnChanges {
    private cd;
    private el;
    private render;
    _icon: string;
    _iconTpl: TemplateRef<any>;
    icon: string | TemplateRef<any>;
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
