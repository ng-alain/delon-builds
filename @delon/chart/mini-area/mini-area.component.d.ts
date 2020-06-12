import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Event, Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
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
    private chart;
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
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
