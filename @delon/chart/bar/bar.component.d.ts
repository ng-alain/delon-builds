import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export interface G2BarData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2BarComponent implements OnInit, OnChanges, OnDestroy {
    private resize$;
    private inited;
    private chart;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: number[];
    data: G2BarData[];
    autoLabel: boolean;
    private node;
    private install;
    private uninstall;
    private updatelabel;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
