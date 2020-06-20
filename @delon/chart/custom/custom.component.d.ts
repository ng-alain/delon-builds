import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Types } from '@antv/g2';
import { AlainConfigService } from '@delon/util';
export declare class G2CustomComponent implements AfterViewInit, OnDestroy {
    private el;
    private platform;
    private resize$;
    delay: number;
    height: number;
    resizeTime: number;
    theme: string | Types.LooseObject;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    constructor(el: ElementRef, configSrv: AlainConfigService, platform: Platform);
    private renderChart;
    private installResizeEvent;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
