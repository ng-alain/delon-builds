import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
export declare class ACLDirective implements OnDestroy {
    private el;
    private renderer;
    protected srv: ACLService;
    protected _value: ACLCanType;
    protected change$: Subscription;
    acl: ACLCanType;
    ability: ACLCanType;
    protected set(value: ACLCanType): void;
    protected _updateView(): void;
    constructor(el: ElementRef, renderer: Renderer2, srv: ACLService);
    ngOnDestroy(): void;
}
