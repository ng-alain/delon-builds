import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { NumberInput } from '@delon/util';
export declare class G2CustomComponent implements AfterViewInit, OnDestroy {
    private el;
    private srv;
    private platform;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_resizeTime: NumberInput;
    private destroy$;
    private _install;
    delay: number;
    height: number;
    resizeTime: number;
    theme: string | Types.LooseObject;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    constructor(el: ElementRef, srv: G2Service, platform: Platform);
    private load;
    private renderChart;
    private installResizeEvent;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
