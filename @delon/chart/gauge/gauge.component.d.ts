import { OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
    title: string;
    height: any;
    color: string;
    bgColor: string;
    format: Function;
    percent: number;
    private node;
    private chart;
    private initFlag;
    private createData;
    private draw;
    private install;
    private uninstall;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
