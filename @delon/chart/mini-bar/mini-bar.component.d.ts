import { NgZone, OnChanges, OnDestroy } from '@angular/core';
export declare class G2MiniBarComponent implements OnDestroy, OnChanges {
    private zone;
    color: string;
    height: number;
    borderWidth: number;
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
