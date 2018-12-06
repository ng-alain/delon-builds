import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
export interface G2PieData {
    x: any;
    y: number;
    [key: string]: any;
}
export declare class G2PieComponent implements OnInit, OnDestroy, OnChanges {
    private el;
    private rend;
    private cdr;
    private resize$;
    private node;
    private chart;
    private isPercent;
    private percentColor;
    legendData: any[];
    delay: number;
    animate: boolean;
    color: string;
    subTitle: string | TemplateRef<void>;
    total: string | TemplateRef<void>;
    height: number;
    hasLegend: boolean;
    inner: number;
    padding: number[];
    percent: number;
    tooltip: boolean;
    lineWidth: number;
    select: boolean;
    valueFormat: (y: number) => string;
    data: G2PieData[];
    colors: any[];
    constructor(el: ElementRef, rend: Renderer2, cdr: ChangeDetectorRef);
    private setCls;
    private fixData;
    private install;
    private installResizeEvent;
    _click(i: number): void;
    private attachChart;
    private genLegend;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
