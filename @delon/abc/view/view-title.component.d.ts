import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SVContainerComponent } from './view-container.component';
export declare class SVTitleComponent implements OnInit {
    private parent;
    private ren;
    private el;
    constructor(parent: SVContainerComponent, el: ElementRef, ren: Renderer2);
    private setClass;
    ngOnInit(): void;
}
