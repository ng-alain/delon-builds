import { Platform } from '@angular/cdk/platform';
import { EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2InteractionType, G2Service } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface G2BarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string;
    [key: string]: NzSafeAny;
}
export interface G2BarClickItem {
    item: G2BarData;
    ev: Event;
}
export declare class G2BarComponent implements OnInit, OnChanges, OnDestroy {
    private srv;
    private ngZone;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_autoLabel: BooleanInput;
    private resize$;
    private destroy$;
    private _chart;
    private _install;
    private node;
    get chart(): Chart;
    delay: number;
    title: string | TemplateRef<void>;
    color: string;
    height: number;
    padding: number | number[] | 'auto';
    data: G2BarData[];
    autoLabel: boolean;
    interaction: G2InteractionType;
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2BarClickItem>;
    constructor(srv: G2Service, ngZone: NgZone, platform: Platform);
    private getHeight;
    private install;
    private attachChart;
    private updatelabel;
    private installResizeEvent;
    private load;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
