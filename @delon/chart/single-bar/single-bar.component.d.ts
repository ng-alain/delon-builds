import { Platform } from '@angular/cdk/platform';
import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export declare class G2SingleBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
    private platform;
    private chart;
    delay: number;
    plusColor: string;
    minusColor: string;
    height: number;
    barSize: number;
    min: number;
    max: number;
    value: number;
    line: boolean;
    format: (value: number, item: {}, index: number) => string;
    padding: number | number[] | 'auto';
    textStyle: any;
    theme: string | Types.LooseObject;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService, platform: Platform);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
