import { ElementRef, OnDestroy, OnChanges, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private cd;
    private zone;
    height: any;
    private _height;
    padding: number;
    data: {
        name: string;
        value: number;
        category?: any;
        [key: string]: any;
    }[];
    private node;
    private chart;
    private initFlag;
    constructor(el: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    private initTagCloud;
    private renderChart;
    private runInstall;
    private uninstall;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
