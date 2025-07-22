import * as i0 from '@angular/core';
import { TemplateRef, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { REP_TYPE } from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/tooltip';
import * as i3 from 'ng-zorro-antd/icon';
import * as i4 from 'ng-zorro-antd/core/outlet';

type SELayout = 'horizontal' | 'vertical' | 'inline';
type SESize = 'default' | 'compact';
type SEErrorType = string | TemplateRef<void> | SEError;
type SEError = Record<string, string | TemplateRef<void>>;
interface SEErrorRefresh {
    name: string;
    error: SEErrorType;
}

declare class SETitleComponent implements OnInit {
    private readonly parentComp;
    private readonly el;
    private readonly ren;
    constructor();
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SETitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"], true, never>;
}
declare class SEContainerComponent {
    private readonly cogSrv;
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
    constructor();
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

declare class SEComponent implements OnChanges, AfterContentInit, AfterViewInit {
    private readonly parentComp;
    private readonly el;
    private readonly rep;
    private readonly ren;
    private readonly cdr;
    private readonly statusSrv;
    private readonly destroy$;
    private readonly ngModel?;
    private readonly formControlName?;
    private readonly contentElement;
    private clsMap;
    private inited;
    private onceFlag;
    private errorData;
    private isBindModel;
    invalid: boolean;
    _labelWidth: number | null;
    _noColon: boolean | null;
    _error?: string | TemplateRef<void>;
    optional?: string | TemplateRef<void> | null;
    optionalHelp?: string | TemplateRef<void> | null;
    optionalHelpColor?: string;
    set error(val: SEErrorType);
    extra?: string | TemplateRef<void> | null;
    label?: string | TemplateRef<void> | null;
    col?: number | null;
    required: boolean;
    controlClass?: string | null;
    line?: boolean | null;
    labelWidth?: number | null;
    noColon?: boolean | null;
    hideLabel: boolean;
    set id(value: string);
    _id: string;
    _autoId: boolean;
    get paddingValue(): number;
    get showErr(): boolean;
    get compact(): boolean;
    private get ngControl();
    constructor();
    private setClass;
    private bindModel;
    private updateStatus;
    checkContent(): void;
    ngAfterContentInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SEComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SEComponent, "se", ["se"], { "optional": { "alias": "optional"; "required": false; }; "optionalHelp": { "alias": "optionalHelp"; "required": false; }; "optionalHelpColor": { "alias": "optionalHelpColor"; "required": false; }; "error": { "alias": "error"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; "label": { "alias": "label"; "required": false; }; "col": { "alias": "col"; "required": false; }; "required": { "alias": "required"; "required": false; }; "controlClass": { "alias": "controlClass"; "required": false; }; "line": { "alias": "line"; "required": false; }; "labelWidth": { "alias": "labelWidth"; "required": false; }; "noColon": { "alias": "noColon"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, {}, ["ngModel", "formControlName"], ["*"], true, never>;
    static ngAcceptInputType_col: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_line: unknown;
    static ngAcceptInputType_labelWidth: unknown;
    static ngAcceptInputType_noColon: unknown;
    static ngAcceptInputType_hideLabel: unknown;
}

declare class SEModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SEModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SEModule, never, [typeof i1.CommonModule, typeof i2.NzTooltipModule, typeof i3.NzIconModule, typeof i4.NzOutletModule, typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent], [typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SEModule>;
}

export { SEComponent, SEContainerComponent, SEModule, SETitleComponent };
export type { SEError, SEErrorRefresh, SEErrorType, SELayout, SESize };
