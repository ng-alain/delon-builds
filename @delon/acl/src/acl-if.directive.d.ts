import { OnDestroy, TemplateRef } from '@angular/core';
import { ACLCanType } from './acl.type';
import * as i0 from "@angular/core";
export declare class ACLIfDirective implements OnDestroy {
    private readonly srv;
    private readonly _viewContainer;
    static ngAcceptInputType_except: boolean | string | undefined | null;
    private _value;
    private _change$;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    private _except;
    constructor();
    set aclIf(value: ACLCanType);
    set aclIfThen(templateRef: TemplateRef<void> | null);
    set aclIfElse(templateRef: TemplateRef<void> | null);
    set except(value: boolean);
    get except(): boolean;
    protected _updateView(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLIfDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ACLIfDirective, "[aclIf]", ["aclIf"], { "aclIf": { "alias": "aclIf"; "required": false; }; "aclIfThen": { "alias": "aclIfThen"; "required": false; }; "aclIfElse": { "alias": "aclIfElse"; "required": false; }; "except": { "alias": "except"; "required": false; }; }, {}, never, never, true, never>;
}
