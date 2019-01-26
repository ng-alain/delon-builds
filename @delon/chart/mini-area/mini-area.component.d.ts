import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export interface G2MiniAreaData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2MiniAreaComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
    private chart;
    delay: number;
    color: string;
    borderColor: string;
    borderWidth: number;
    height: number;
    fit: boolean;
    line: boolean;
    animate: boolean;
    xAxis: any;
    yAxis: any;
    padding: number[];
    data: G2MiniAreaData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    constructor(el: ElementRef, ngZone: NgZone);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
