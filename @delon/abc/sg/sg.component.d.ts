import { AfterViewInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/types";
export declare class SGComponent implements OnChanges, AfterViewInit {
    private readonly el;
    private readonly ren;
    private readonly rep;
    private readonly parent;
    private clsMap;
    private inited;
    col: number | null;
    get paddingValue(): number;
    constructor();
    private setClass;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SGComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SGComponent, "sg", ["sg"], { "col": { "alias": "col"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_col: i1.NzSafeAny;
}
