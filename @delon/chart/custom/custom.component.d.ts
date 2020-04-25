import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/theme';
export declare class G2CustomComponent implements AfterViewInit, OnDestroy {
    private el;
    private resize$;
    delay: number;
    height: number;
    resizeTime: number;
    theme: string | LooseObject;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    constructor(el: ElementRef, configSrv: AlainConfigService);
    private renderChart;
    private installResizeEvent;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
