import { OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { SEErrorRefresh, SELayout } from './se.types';
import * as i0 from "@angular/core";
export declare class SETitleComponent implements OnInit {
    private readonly parentComp;
    private readonly el;
    private readonly ren;
    constructor();
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SETitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"], true, never>;
}
export declare class SEContainerComponent {
    private errorNotify$;
    colInCon?: REP_TYPE;
    col: REP_TYPE;
    labelWidth: number;
    noColon: boolean;
    title?: string | TemplateRef<void> | null;
    get gutter(): number;
    set gutter(value: number);
    private _gutter;
    get nzLayout(): SELayout;
    set nzLayout(value: SELayout);
    private _nzLayout;
    size: 'default' | 'compact';
    firstVisual: boolean;
    ingoreDirty: boolean;
    line: boolean;
    set errors(val: SEErrorRefresh[]);
    get margin(): number;
    get errorNotify(): Observable<SEErrorRefresh>;
    constructor(configSrv: AlainConfigService);
    setErrors(errors: SEErrorRefresh[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SEContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SEContainerComponent, "se-container, [se-container]", ["seContainer"], { "colInCon": { "alias": "se-container"; "required": false; }; "col": { "alias": "col"; "required": false; }; "labelWidth": { "alias": "labelWidth"; "required": false; }; "noColon": { "alias": "noColon"; "required": false; }; "title": { "alias": "title"; "required": false; }; "gutter": { "alias": "gutter"; "required": false; }; "nzLayout": { "alias": "nzLayout"; "required": false; }; "size": { "alias": "size"; "required": false; }; "firstVisual": { "alias": "firstVisual"; "required": false; }; "ingoreDirty": { "alias": "ingoreDirty"; "required": false; }; "line": { "alias": "line"; "required": false; }; "errors": { "alias": "errors"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_colInCon: unknown;
    static ngAcceptInputType_col: unknown;
    static ngAcceptInputType_labelWidth: unknown;
    static ngAcceptInputType_noColon: unknown;
    static ngAcceptInputType_gutter: unknown;
    static ngAcceptInputType_firstVisual: unknown;
    static ngAcceptInputType_ingoreDirty: unknown;
    static ngAcceptInputType_line: unknown;
}
