import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SGContainerComponent } from './grid-container.component';
export declare class SGComponent implements OnChanges, AfterViewInit {
    private parent;
    private rep;
    private ren;
    private el;
    private clsMap;
    private inited;
    col: number;
    readonly paddingLeft: number;
    readonly paddingRight: number;
    constructor(parent: SGContainerComponent, rep: ResponsiveService, el: ElementRef, ren: Renderer2);
    private setClass;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
