import { Platform } from '@angular/cdk/platform';
import { EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Event, Types } from '@antv/g2';
import { G2InteractionType } from '@delon/chart/core';
import { AlainConfigService } from '@delon/util';
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
    private ngZone;
    private platform;
    private resize$;
    private chart;
    private node;
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
    constructor(ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private getHeight;
    private install;
    private attachChart;
    private updatelabel;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
