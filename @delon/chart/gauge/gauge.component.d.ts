import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
    private el;
    private ngZone;
    private chart;
    delay: number;
    title: string;
    height: any;
    color: string;
    bgColor: string;
    format: (text: string, item: {}, index: number) => string;
    percent: number;
    padding: Array<number | string>;
    constructor(el: ElementRef, ngZone: NgZone);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
