import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { NumberInput } from '@delon/util';
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
    private srv;
    private el;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_borderWidth: NumberInput;
    private destroy$;
    private _chart;
    private _install;
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
    constructor(srv: G2Service, el: ElementRef, ngZone: NgZone, platform: Platform);
    private load;
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
