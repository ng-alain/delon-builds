import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { NumberInput } from '@delon/util/decorator';
import { SGContainerComponent } from './sg-container.component';
import * as i0 from "@angular/core";
export declare class SGComponent implements OnChanges, AfterViewInit {
    private ren;
    private parent;
    private rep;
    static ngAcceptInputType_col: NumberInput;
    private el;
    private clsMap;
    private inited;
    col: number | null;
    get paddingValue(): number;
    constructor(el: ElementRef, ren: Renderer2, parent: SGContainerComponent, rep: ResponsiveService);
    private setClass;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SGComponent, [null, null, { optional: true; host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SGComponent, "sg", ["sg"], { "col": { "alias": "col"; "required": false; }; }, {}, never, ["*"], true, never>;
}
