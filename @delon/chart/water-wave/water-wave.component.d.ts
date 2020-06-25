import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private renderer;
    private ngZone;
    private cdr;
    private resize$;
    private node;
    private timer;
    animate: boolean;
    delay: number;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    percent: number;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone, cdr: ChangeDetectorRef);
    private renderChart;
    private updateRadio;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
