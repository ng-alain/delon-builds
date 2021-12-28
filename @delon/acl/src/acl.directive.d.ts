import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
import * as i0 from "@angular/core";
export declare class ACLDirective implements OnDestroy {
    private el;
    private renderer;
    protected srv: ACLService;
    private _value;
    private change$;
    set acl(value: ACLCanType);
    set ability(value: ACLCanType);
    private set;
    constructor(el: ElementRef, renderer: Renderer2, srv: ACLService);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ACLDirective, "[acl]", ["acl"], { "acl": "acl"; "ability": "acl-ability"; }, {}, never>;
}
