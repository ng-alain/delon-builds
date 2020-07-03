import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2InteractionType } from '@delon/chart/core';
import { AlainConfigService } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface G2PieData {
    x: any;
    y: number;
    [key: string]: any;
}
export interface G2PieClickItem {
    item: G2PieData;
    ev: Event;
}
export declare class G2PieComponent implements OnInit, OnDestroy, OnChanges {
    private el;
    private ngZone;
    private cdr;
    private platform;
    private node;
    private _chart;
    private percentColor;
    legendData: NzSafeAny[];
    isPercent: boolean;
    delay: number;
    animate: boolean;
    color: string;
    subTitle: string | TemplateRef<void>;
    total: string | TemplateRef<void>;
    height: number;
    hasLegend: boolean;
    inner: number;
    padding: number | number[] | 'auto';
    percent: number;
    tooltip: boolean;
    lineWidth: number;
    blockMaxWidth: number;
    select: boolean;
    valueFormat: (y: number) => string;
    data: G2PieData[];
    colors: any[];
    interaction: G2InteractionType;
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2PieClickItem>;
    get block(): boolean;
    get chart(): Chart;
    constructor(el: ElementRef<HTMLElement>, ngZone: NgZone, cdr: ChangeDetectorRef, configSrv: AlainConfigService, platform: Platform);
    private fixData;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
