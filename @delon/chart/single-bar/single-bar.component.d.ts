import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class G2SingleBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private chart;
    delay: number;
    plusColor: string;
    minusColor: string;
    height: number;
    barSize: number;
    min: number;
    max: number;
    value: number;
    line: boolean;
    format: (value: number, item: {}, index: number) => string;
    padding: any;
    textStyle: any;
    constructor(el: ElementRef);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
