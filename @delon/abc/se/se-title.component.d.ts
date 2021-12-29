import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SEContainerComponent } from './se-container.component';
export declare class SETitleComponent implements OnInit {
    private parent;
    private ren;
    private el;
    constructor(parent: SEContainerComponent, el: ElementRef, ren: Renderer2);
    private setClass;
    ngOnInit(): void;
}
