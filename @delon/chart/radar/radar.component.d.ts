import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, TemplateRef } from '@angular/core';
export declare class G2RadarComponent implements OnDestroy, OnChanges {
    private cd;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void>;
    height: number;
    padding: number[];
    hasLegend: boolean;
    tickCount: number;
    data: Array<{
        name: string;
        label: string;
        value: number;
        [key: string]: any;
    }>;
    colors: string[];
    private node;
    private chart;
    legendData: any[];
    constructor(cd: ChangeDetectorRef, zone: NgZone);
    _click(i: number): void;
    private runInstall;
    private install;
    private uninstall;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
