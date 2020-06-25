import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Event, Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export interface G2RadarData {
    name: string;
    label: string;
    value: number;
    [key: string]: any;
}
export interface G2RadarClickItem {
    item: G2RadarData;
    ev: Event;
}
export declare class G2RadarComponent implements OnInit, OnDestroy, OnChanges {
    private cdr;
    private ngZone;
    private platform;
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
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2RadarClickItem>;
    constructor(cdr: ChangeDetectorRef, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private getHeight;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
