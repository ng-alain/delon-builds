import { ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
export declare class ACLIfDirective extends ACLDirective {
    private _viewContainer;
    private templateRef;
    constructor(_viewContainer: ViewContainerRef, templateRef: TemplateRef<ACLCanType>, el: ElementRef, renderer: Renderer2, srv: ACLService);
    acl: ACLCanType;
    protected _updateView(): void;
}
