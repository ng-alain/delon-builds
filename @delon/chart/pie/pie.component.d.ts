import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { InteractionType } from '@delon/chart/core/types';
import { AlainConfigService } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface G2PieData {
    x: any;
    y: number;
    [key: string]: any;
}
export declare class G2PieComponent implements OnInit, OnDestroy, OnChanges {
    el: ElementRef<HTMLElement>;
    private ngZone;
    private cdr;
    private node;
    private chart;
    private isPercent;
    private percentColor;
    legendData: NzSafeAny[];
    delay: number;
    animate: boolean;
    color: string;
    subTitle: string | TemplateRef<void>;
    total: string | TemplateRef<void>;
    height: number;
    hasLegend: boolean;
    inner: number;
    padding: number | number[] | 'auto';
    percent: number;
    tooltip: boolean;
    lineWidth: number;
    blockMaxWidth: number;
    select: boolean;
    valueFormat: (y: number) => string;
    data: G2PieData[];
    colors: any[];
    interaction: InteractionType;
    theme: string | LooseObject;
    get block(): boolean;
    constructor(el: ElementRef<HTMLElement>, ngZone: NgZone, cdr: ChangeDetectorRef, configSrv: AlainConfigService);
    private fixData;
    private install;
    private attachChart;
    private genLegend;
    _click(i: number): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
