import { NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
    private zone;
    title: string;
    height: any;
    private _height;
    color: string;
    bgColor: string;
    format: Function;
    percent: any;
    private _percent;
    private node;
    private chart;
    private initFlag;
    constructor(zone: NgZone);
    private createData;
    private draw;
    private runInstall;
    private install;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
