import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
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
    private srv;
    private cdr;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_hasLegend: BooleanInput;
    static ngAcceptInputType_tickCount: NumberInput;
    private node;
    private destroy$;
    private _install;
    private _chart;
    legendData: any[];
    get chart(): Chart;
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
    constructor(srv: G2Service, cdr: ChangeDetectorRef, ngZone: NgZone, platform: Platform);
    private load;
    private getHeight;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
