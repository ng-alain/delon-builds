import { REP_TYPE } from '@delon/theme';
import * as i0 from '@angular/core';
import { OnChanges, AfterViewInit } from '@angular/core';
import * as i1 from '@angular/common';

declare class SGContainerComponent {
    private readonly cogSrv;
    gutter: number;
    colInCon?: REP_TYPE;
    col: REP_TYPE;
    get marginValue(): number;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SGContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SGContainerComponent, "sg-container, [sg-container]", ["sgContainer"], { "gutter": { "alias": "gutter"; "required": false; }; "colInCon": { "alias": "sg-container"; "required": false; }; "col": { "alias": "col"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_gutter: unknown;
    static ngAcceptInputType_colInCon: unknown;
    static ngAcceptInputType_col: unknown;
}

declare class SGComponent implements OnChanges, AfterViewInit {
    private readonly el;
    private readonly ren;
    private readonly rep;
    private readonly parentComp;
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
    static ngAcceptInputType_col: unknown;
}

declare class SGModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SGModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SGModule, never, [typeof i1.CommonModule, typeof SGContainerComponent, typeof SGComponent], [typeof SGContainerComponent, typeof SGComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SGModule>;
}

export { SGComponent, SGContainerComponent, SGModule };
