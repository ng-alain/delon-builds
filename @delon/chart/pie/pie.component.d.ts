import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
export declare class G2PieComponent implements OnDestroy, OnChanges, AfterViewInit {
    private el;
    private rend;
    private cdr;
    private zone;
    private scroll$;
    private node;
    private chart;
    private initFlag;
    legendData: any[];
    animate: boolean;
    color: string;
    subTitle: string;
    total: string;
    height: number;
    hasLegend: boolean;
    legendBlock: boolean;
    inner: number;
    padding: number[];
    percent: number;
    tooltip: boolean;
    lineWidth: number;
    select: boolean;
    data: Array<{
        x: number | string;
        y: number;
        [key: string]: any;
    }>;
    valueFormat: Function;
    colors: any[];
    constructor(el: ElementRef, rend: Renderer2, cdr: ChangeDetectorRef, zone: NgZone);
    private setCls;
    private runInstall;
    private install;
    private installResizeEvent;
    _click(i: number): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
