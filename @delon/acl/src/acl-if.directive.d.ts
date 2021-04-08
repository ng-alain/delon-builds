import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
export declare class ACLIfDirective implements OnDestroy {
    private srv;
    private _viewContainer;
    static ngAcceptInputType_except: boolean | string | undefined | null;
    private _value;
    private _change$;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    private _except;
    constructor(templateRef: TemplateRef<void>, srv: ACLService, _viewContainer: ViewContainerRef);
    set aclIf(value: ACLCanType);
    set aclIfThen(templateRef: TemplateRef<void> | null);
    set aclIfElse(templateRef: TemplateRef<void> | null);
    set except(value: any);
    get except(): any;
    protected _updateView(): void;
    ngOnDestroy(): void;
}
