import { Platform } from '@angular/cdk/platform';
import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export declare class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
    private el;
    private ngZone;
    private platform;
    private chart;
    delay: number;
    title: string;
    height: number;
    color: string;
    bgColor: string;
    format: (text: string, item: {}, index: number) => string;
    percent: number;
    padding: number | number[] | 'auto';
    theme: string | Types.LooseObject;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
