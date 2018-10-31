import { OnInit, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
export declare class G2CustomComponent implements OnInit, OnDestroy {
    private el;
    private resize$;
    height: number;
    resizeTime: number;
    render: EventEmitter<ElementRef>;
    resize: EventEmitter<ElementRef>;
    destroy: EventEmitter<ElementRef>;
    constructor(el: ElementRef);
    private renderChart;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
