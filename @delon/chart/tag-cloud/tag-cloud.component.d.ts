import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
export interface G2TagCloudData {
    value?: number;
    name?: string;
    /**
     * @deprecated Use `name` instead
     */
    x?: string;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     */
    category?: any;
    [key: string]: any;
}
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private ngZone;
    private resize$;
    private chart;
    delay: number;
    width: number;
    height: number;
    padding: number | number[] | 'auto';
    data: G2TagCloudData[];
    constructor(el: ElementRef<HTMLDivElement>, ngZone: NgZone);
    private initTagCloud;
    private install;
    private attachChart;
    private _attachChart;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
