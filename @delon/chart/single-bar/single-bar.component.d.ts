import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/theme';
export declare class G2SingleBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
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
    theme: string | LooseObject;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
