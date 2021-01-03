import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { NumberInput } from '@delon/util';
export interface G2TagCloudData {
    value?: number;
    name?: string;
    [key: string]: any;
}
export interface G2TagCloudClickItem {
    item: G2TagCloudData;
    ev: Event;
}
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private srv;
    private el;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_width: NumberInput;
    private resize$;
    private destroy$;
    private _install;
    private _chart;
    get chart(): Chart;
    delay: number;
    width: number;
    height: number;
    padding: number | number[] | 'auto';
    data: G2TagCloudData[];
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2TagCloudClickItem>;
    constructor(srv: G2Service, el: ElementRef<HTMLDivElement>, ngZone: NgZone, platform: Platform);
    private load;
    private initTagCloud;
    private install;
    private attachChart;
    private _attachChart;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
