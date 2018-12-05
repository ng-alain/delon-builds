import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class G2CustomComponent implements AfterViewInit, OnDestroy {
    private el;
    private resize$;
    height: number;
    resizeTime: number;
    readonly render: EventEmitter<ElementRef<any>>;
    readonly resize: EventEmitter<ElementRef<any>>;
    readonly destroy: EventEmitter<ElementRef<any>>;
    constructor(el: ElementRef);
    private renderChart;
    private installResizeEvent;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
