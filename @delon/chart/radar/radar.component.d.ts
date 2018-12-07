import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export interface G2RadarData {
    name: string;
    label: string;
    value: number;
    [key: string]: any;
}
export declare class G2RadarComponent implements OnInit, OnDestroy, OnChanges {
    private cdr;
    private node;
    private chart;
    legendData: any[];
    delay: number;
    title: string | TemplateRef<void>;
    height: number;
    padding: number[];
    hasLegend: boolean;
    tickCount: number;
    data: G2RadarData[];
    colors: string[];
    constructor(cdr: ChangeDetectorRef);
    private getHeight;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
