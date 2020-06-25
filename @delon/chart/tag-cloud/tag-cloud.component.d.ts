import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Event, Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export interface G2TagCloudData {
    value?: number;
    name?: string;
    /**
     * @deprecated Use `name` instead
     */
    x?: string;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     */
    category?: any;
    [key: string]: any;
}
export interface G2TagCloudClickItem {
    item: G2TagCloudData;
    ev: Event;
}
export declare class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private ngZone;
    private platform;
    private resize$;
    private chart;
    delay: number;
    width: number;
    height: number;
    padding: number | number[] | 'auto';
    data: G2TagCloudData[];
    theme: string | Types.LooseObject;
    clickItem: EventEmitter<G2TagCloudClickItem>;
    constructor(el: ElementRef<HTMLDivElement>, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private initTagCloud;
    private install;
    private attachChart;
    private _attachChart;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
