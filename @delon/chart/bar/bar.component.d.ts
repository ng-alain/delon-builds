import { NgZone, OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Types } from '@antv/g2';
import { InteractionType } from '@delon/chart/core/types';
import { AlainConfigService } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface G2BarData {
    x: NzSafeAny;
    y: NzSafeAny;
    color?: string;
    [key: string]: NzSafeAny;
}
export declare class G2BarComponent implements OnInit, OnChanges, OnDestroy {
    private ngZone;
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
    interaction: InteractionType;
    theme: string | Types.LooseObject;
    constructor(ngZone: NgZone, configSrv: AlainConfigService);
    private getHeight;
    private install;
    private attachChart;
    private updatelabel;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
