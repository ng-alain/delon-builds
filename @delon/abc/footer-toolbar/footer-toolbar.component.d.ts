import { OnInit, OnDestroy, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
export declare class FooterToolbarComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    private doc;
    errorCollect: boolean;
    _extra: string;
    _extraTpl: TemplateRef<any>;
    extra: string | TemplateRef<any>;
    constructor(el: ElementRef, renderer: Renderer2, doc: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
