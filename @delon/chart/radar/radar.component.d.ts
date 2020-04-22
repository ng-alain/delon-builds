import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/theme';
export interface G2RadarData {
    name: string;
    label: string;
    value: number;
    [key: string]: any;
}
export declare class G2RadarComponent implements OnInit, OnDestroy, OnChanges {
    private cdr;
    private ngZone;
    private node;
    private chart;
    legendData: any[];
    delay: number;
    title: string | TemplateRef<void>;
    height: number;
    padding: number | number[] | 'auto';
    hasLegend: boolean;
    tickCount: number;
    data: G2RadarData[];
    colors: string[];
    theme: string | LooseObject;
    constructor(cdr: ChangeDetectorRef, ngZone: NgZone, configSrv: AlainConfigService);
    private getHeight;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
