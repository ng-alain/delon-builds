import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private renderer;
    private cdr;
    private resize$;
    private node;
    private timer;
    delay: number;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    percent: number;
    constructor(el: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    private renderChart;
    private updateRadio;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
