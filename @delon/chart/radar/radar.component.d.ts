import { OnDestroy, OnChanges, NgZone, TemplateRef, ChangeDetectorRef } from '@angular/core';
export declare class G2RadarComponent implements OnDestroy, OnChanges {
    private cd;
    private zone;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    height: any;
    private _height;
    padding: number[];
    hasLegend: any;
    private _hasLegend;
    tickCount: any;
    private _tickCount;
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
