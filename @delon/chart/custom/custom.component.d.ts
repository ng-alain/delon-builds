import { OnInit, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
export declare class G2CustomComponent implements OnInit, OnDestroy {
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
    ngOnInit(): void;
    ngOnDestroy(): void;
}
