import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SEContainerComponent } from './se-container.component';
import * as i0 from "@angular/core";
export declare class SETitleComponent implements OnInit {
    private parent;
    private ren;
    private el;
    constructor(parent: SEContainerComponent, el: ElementRef, ren: Renderer2);
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SETitleComponent, [{ optional: true; host: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"]>;
}
