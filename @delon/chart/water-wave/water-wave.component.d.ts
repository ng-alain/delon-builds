import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private renderer;
    private cd;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    percent: number;
    private resize$;
    private node;
    private initFlag;
    private timer;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, zone: NgZone);
    private renderChart;
    private updateRadio;
    private installResizeEvent;
    private resize;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
