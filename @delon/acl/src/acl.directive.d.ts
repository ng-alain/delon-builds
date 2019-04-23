import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
export declare class ACLDirective implements OnDestroy {
    private el;
    private renderer;
    protected srv: ACLService;
    private _value;
    private change$;
    acl: ACLCanType;
    ability: ACLCanType;
    private set;
    constructor(el: ElementRef, renderer: Renderer2, srv: ACLService);
    ngOnDestroy(): void;
}
