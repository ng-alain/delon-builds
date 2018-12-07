import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
export interface G2MiniAreaData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2MiniAreaComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private chart;
    private view;
    private viewLine;
    delay: number;
    color: string;
    borderColor: string;
    borderWidth: number;
    height: any;
    fit: boolean;
    line: boolean;
    animate: boolean;
    xAxis: any;
    yAxis: any;
    padding: number[];
    data: G2MiniAreaData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    constructor(el: ElementRef);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
