import { TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
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
    aclIf: ACLCanType;
    aclIfThen: TemplateRef<void> | null;
    aclIfElse: TemplateRef<void> | null;
    protected _updateView(): void;
    ngOnDestroy(): void;
}
