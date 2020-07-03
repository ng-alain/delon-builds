import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export interface G2MiniBarData {
    x: any;
    y: any;
    [key: string]: any;
}
export interface G2MiniBarClickItem {
    item: G2MiniBarData;
    ev: Event;
}
export declare class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
    private platform;
    private _chart;
    get chart(): Chart;
    delay: number;
    color: string;
    height: number;
    borderWidth: number;
    padding: number | number[] | 'auto';
    data: G2MiniBarData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2MiniBarClickItem>;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
