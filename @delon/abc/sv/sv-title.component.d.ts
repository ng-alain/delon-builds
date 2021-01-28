import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SVContainerComponent } from './sv-container.component';
import * as i0 from "@angular/core";
export declare class SVTitleComponent implements OnInit {
    private parent;
    private ren;
    private el;
    constructor(el: ElementRef, parent: SVContainerComponent, ren: Renderer2);
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SVTitleComponent, [null, { optional: true; host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SVTitleComponent, "sv-title, [sv-title]", ["svTitle"], {}, {}, never, ["*"]>;
}
