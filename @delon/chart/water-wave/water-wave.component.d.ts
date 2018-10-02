import { ElementRef, OnDestroy, OnChanges, NgZone, TemplateRef, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
export declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private renderer;
    private cd;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    color: string;
    height: any;
    private _height;
    percent: any;
    private _percent;
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
