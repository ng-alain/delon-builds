import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
import * as i0 from "@angular/core";
export declare class ACLIfDirective implements OnDestroy {
    private srv;
    private _viewContainer;
    private _value;
    private _change$;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    constructor(templateRef: TemplateRef<void>, srv: ACLService, _viewContainer: ViewContainerRef);
    set aclIf(value: ACLCanType);
    set aclIfThen(templateRef: TemplateRef<void> | null);
    set aclIfElse(templateRef: TemplateRef<void> | null);
    except: boolean;
    protected _updateView(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ACLIfDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ACLIfDirective, "[aclIf]", ["aclIf"], { "aclIf": "aclIf"; "aclIfThen": "aclIfThen"; "aclIfElse": "aclIfElse"; "except": "except"; }, {}, never>;
}
