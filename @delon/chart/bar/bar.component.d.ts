import { NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { InteractionType } from '@delon/chart/core/types';
export interface G2BarData {
    x: any;
    y: any;
    color?: string;
    [key: string]: any;
}
export declare class G2BarComponent implements OnInit, OnChanges, OnDestroy {
    private ngZone;
    private resize$;
    private chart;
    private node;
    delay: number;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: number | number[] | 'auto';
    data: G2BarData[];
    autoLabel: boolean;
    interaction: InteractionType;
    constructor(ngZone: NgZone);
    private getHeight;
    private install;
    private attachChart;
    private updatelabel;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
