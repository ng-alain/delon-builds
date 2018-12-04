import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private cd;
    private zone;
    height: number;
    padding: number;
    data: Array<{
        name: string;
        value: number;
        category?: any;
        [key: string]: any;
    }>;
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
