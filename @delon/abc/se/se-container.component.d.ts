import { ElementRef, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { SEErrorRefresh, SELayout } from './se.types';
import * as i0 from "@angular/core";
export declare class SEContainerComponent {
    static ngAcceptInputType_col: NumberInput;
    static ngAcceptInputType_colInCon: NumberInput;
    static ngAcceptInputType_labelWidth: NumberInput;
    static ngAcceptInputType_firstVisual: BooleanInput;
    static ngAcceptInputType_ingoreDirty: BooleanInput;
    static ngAcceptInputType_line: BooleanInput;
    static ngAcceptInputType_noColon: BooleanInput;
    private errorNotify$;
    colInCon: REP_TYPE;
    col: REP_TYPE;
    labelWidth: number;
    noColon: boolean;
    title?: string | TemplateRef<void> | null;
    get gutter(): number | string;
    set gutter(value: number | string);
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SEContainerComponent, "se-container, [se-container]", ["seContainer"], { "colInCon": "se-container"; "col": "col"; "labelWidth": "labelWidth"; "noColon": "noColon"; "title": "title"; "gutter": "gutter"; "nzLayout": "nzLayout"; "size": "size"; "firstVisual": "firstVisual"; "ingoreDirty": "ingoreDirty"; "line": "line"; "errors": "errors"; }, {}, never, ["*"]>;
}
export declare class SETitleComponent implements OnInit {
    private parent;
    private ren;
    private el;
    constructor(parent: SEContainerComponent, el: ElementRef, ren: Renderer2);
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SETitleComponent, [{ optional: true; host: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"]>;
}
