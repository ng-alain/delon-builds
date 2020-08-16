import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { NumberInput } from '@delon/util';
import { SGContainerComponent } from './sg-container.component';
export declare class SGComponent implements OnChanges, AfterViewInit {
    private ren;
    private parent;
    private rep;
    static ngAcceptInputType_col: NumberInput;
    private el;
    private clsMap;
    private inited;
    col: number;
    get paddingValue(): number;
    constructor(el: ElementRef, ren: Renderer2, parent: SGContainerComponent, rep: ResponsiveService);
    private setClass;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
