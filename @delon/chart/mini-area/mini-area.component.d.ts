import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/util';
export interface G2MiniAreaData {
    x: any;
    y: any;
    [key: string]: any;
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
    theme: string | LooseObject;
    constructor(el: ElementRef, ngZone: NgZone, configSrv: AlainConfigService);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
