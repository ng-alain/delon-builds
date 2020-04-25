import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/util';
export interface G2MiniBarData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private ngZone;
    private chart;
    delay: number;
    color: string;
    height: number;
    borderWidth: number;
    padding: number | number[] | 'auto';
    data: G2MiniBarData[];
    yTooltipSuffix: string;
    tooltipType: 'mini' | 'default';
    theme: string | LooseObject;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
