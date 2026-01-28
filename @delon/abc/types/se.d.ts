import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import * as _delon_abc_se from '@delon/abc/se';
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

declare class SETitleComponent {
    private readonly parentComp;
    constructor();
    protected paddingValue: _angular_core.Signal<number>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SETitleComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SETitleComponent, "se-title, [se-title]", ["seTitle"], {}, {}, never, ["*"], true, never>;
}
declare class SEContainerComponent {
    readonly colInCon: _angular_core.InputSignalWithTransform<REP_TYPE | null, unknown>;
    readonly labelWidth: _angular_core.InputSignalWithTransform<REP_TYPE | 150 | null, unknown>;
    readonly col: _angular_core.InputSignalWithTransform<REP_TYPE | null, unknown>;
    readonly noColon: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly gutter: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly nzLayout: _angular_core.InputSignal<SELayout>;
    readonly size: _angular_core.InputSignal<"default" | "compact">;
    readonly firstVisual: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly ingoreDirty: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly line: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly errors: _angular_core.InputSignal<SEErrorRefresh[]>;
    readonly _gutter: _angular_core.Signal<number>;
    readonly _size: _angular_core.Signal<"default" | "compact">;
    protected margin: _angular_core.Signal<number>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SEContainerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SEContainerComponent, "se-container, [se-container]", ["seContainer"], { "colInCon": { "alias": "se-container"; "required": false; "isSignal": true; }; "labelWidth": { "alias": "labelWidth"; "required": false; "isSignal": true; }; "col": { "alias": "col"; "required": false; "isSignal": true; }; "noColon": { "alias": "noColon"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "gutter": { "alias": "gutter"; "required": false; "isSignal": true; }; "nzLayout": { "alias": "nzLayout"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "firstVisual": { "alias": "firstVisual"; "required": false; "isSignal": true; }; "ingoreDirty": { "alias": "ingoreDirty"; "required": false; "isSignal": true; }; "line": { "alias": "line"; "required": false; "isSignal": true; }; "errors": { "alias": "errors"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class SEComponent {
    private readonly parentComp;
    private readonly rep;
    private readonly statusSrv;
    private readonly destroy$;
    private readonly injector;
    private readonly ngModel;
    private readonly formControlName;
    private ngControl;
    private readonly contentElement;
    private onceFlag;
    private bindModel$?;
    protected empty: _angular_core.WritableSignal<boolean>;
    readonly optional: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly optionalHelp: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly optionalHelpColor: _angular_core.InputSignal<string | undefined>;
    error: _angular_core.InputSignal<SEErrorType | undefined>;
    readonly extra: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly label: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly col: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly required: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly controlClass: _angular_core.InputSignal<string | null | undefined>;
    readonly line: _angular_core.InputSignalWithTransform<boolean | null, unknown>;
    readonly labelWidth: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly noColon: _angular_core.InputSignalWithTransform<boolean | null, unknown>;
    readonly hideLabel: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly id: _angular_core.InputSignal<string | undefined>;
    protected invalid: _angular_core.WritableSignal<boolean>;
    protected showErr: _angular_core.Signal<boolean>;
    protected errorType: _angular_core.WritableSignal<SEErrorType | undefined>;
    protected errorData: _angular_core.Signal<_delon_abc_se.SEError | undefined>;
    protected errorText: _angular_core.WritableSignal<string | TemplateRef<void> | null>;
    protected _required: _angular_core.WritableSignal<boolean>;
    protected paddingValue: _angular_core.Signal<number>;
    protected compact: _angular_core.Signal<boolean>;
    protected _id: _angular_core.WritableSignal<string | undefined>;
    protected _noColon: _angular_core.Signal<boolean>;
    protected _labelWidth: _angular_core.Signal<number | null>;
    protected cls: _angular_core.Signal<string[]>;
    protected readonly nzValidateAnimationEnter: _angular_core.Signal<string>;
    protected readonly nzValidateAnimationLeave: _angular_core.Signal<string>;
    constructor();
    private updateStatus;
    checkContent(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SEComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SEComponent, "se", ["se"], { "optional": { "alias": "optional"; "required": false; "isSignal": true; }; "optionalHelp": { "alias": "optionalHelp"; "required": false; "isSignal": true; }; "optionalHelpColor": { "alias": "optionalHelpColor"; "required": false; "isSignal": true; }; "error": { "alias": "error"; "required": false; "isSignal": true; }; "extra": { "alias": "extra"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "col": { "alias": "col"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "controlClass": { "alias": "controlClass"; "required": false; "isSignal": true; }; "line": { "alias": "line"; "required": false; "isSignal": true; }; "labelWidth": { "alias": "labelWidth"; "required": false; "isSignal": true; }; "noColon": { "alias": "noColon"; "required": false; "isSignal": true; }; "hideLabel": { "alias": "hideLabel"; "required": false; "isSignal": true; }; "id": { "alias": "id"; "required": false; "isSignal": true; }; }, {}, ["ngModel", "formControlName"], ["*"], true, never>;
}

declare class SEModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SEModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<SEModule, never, [typeof i1.CommonModule, typeof i2.NzTooltipModule, typeof i3.NzIconModule, typeof i4.NzOutletModule, typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent], [typeof SEContainerComponent, typeof SEComponent, typeof SETitleComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<SEModule>;
}

export { SEComponent, SEContainerComponent, SEModule, SETitleComponent };
export type { SEError, SEErrorRefresh, SEErrorType, SELayout, SESize };
