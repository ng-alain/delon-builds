import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export interface G2TagCloudData {
    name: string;
    value: number;
    category?: any;
    [key: string]: any;
}
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private ngZone;
    private resize$;
    private chart;
    delay: number;
    height: number;
    padding: number;
    data: G2TagCloudData[];
    constructor(el: ElementRef, ngZone: NgZone);
    private initTagCloud;
    private install;
    private attachChart;
    private _attachChart;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
