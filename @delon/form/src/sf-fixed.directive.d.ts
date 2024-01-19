import { AfterViewInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SFFixedDirective implements AfterViewInit, OnChanges {
    private readonly el;
    private readonly render;
    private _inited;
    num?: number | null;
    private init;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SFFixedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SFFixedDirective, "[fixed-label]", never, { "num": { "alias": "fixed-label"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_num: unknown;
}
