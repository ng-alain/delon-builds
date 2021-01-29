import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/other';
export declare class QuickMenuComponent implements OnInit, OnChanges {
    private cdr;
    private el;
    private render;
    static ngAcceptInputType_top: NumberInput;
    static ngAcceptInputType_width: NumberInput;
    static ngAcceptInputType_expand: BooleanInput;
    constructor(cdr: ChangeDetectorRef, el: ElementRef, render: Renderer2);
    ctrlStyle: {
        [key: string]: string;
    };
    icon: string | TemplateRef<void>;
    top: number;
    width: number;
    bgColor: string;
    borderColor: string;
    expand: boolean;
    readonly expandChange: EventEmitter<boolean>;
    private show;
    private initFlag;
    _click(): void;
    private setStyle;
    ngOnInit(): void;
    ngOnChanges(): void;
}
