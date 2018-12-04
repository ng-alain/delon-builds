import { NgZone, OnChanges, OnDestroy } from '@angular/core';
export declare class G2MiniAreaComponent implements OnDestroy, OnChanges {
    private zone;
    color: string;
    borderColor: string;
    borderWidth: any;
    private _borderWidth;
    height: any;
    private _height;
    fit: any;
    private _fit;
    line: any;
    private _line;
    animate: any;
    private _animate;
    xAxis: any;
    yAxis: any;
    padding: number[];
    data: Array<{
        x: number;
        y: number;
        [key: string]: any;
    }>;
    yTooltipSuffix: string;
    private node;
    private chart;
    constructor(zone: NgZone);
    private install;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
