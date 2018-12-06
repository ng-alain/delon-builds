import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export interface G2BarData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2BarComponent implements OnInit, OnChanges, OnDestroy {
    private resize$;
    private chart;
    private node;
    delay: number;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: Array<number | string> | string;
    data: G2BarData[];
    autoLabel: boolean;
    private install;
    private getHeight;
    private attachChart;
    private updatelabel;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
