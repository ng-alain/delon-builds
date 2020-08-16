import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { AlainConfigService, NumberInput, BooleanInput } from '@delon/util';
export interface G2MiniAreaData {
    x: any;
    y: any;
    [key: string]: any;
}
export interface G2MiniAreaClickItem {
    item: G2MiniAreaData;
    ev: Event;
}
export declare class G2MiniAreaComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_borderWidth: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_fit: BooleanInput;
    static ngAcceptInputType_line: BooleanInput;
    static ngAcceptInputType_animate: BooleanInput;
    private _chart;
    get chart(): Chart;
    delay: number;
    color: string;
    borderColor: string;
    borderWidth: number;
    height: number;
    fit: boolean;
    line: boolean;
    animate: boolean;
    xAxis: any;
    yAxis: any;
    padding: number | number[] | 'auto';
    data: G2MiniAreaData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2MiniAreaClickItem>;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
