import { OnDestroy } from '@angular/core';
import { ACLCanType } from './acl.type';
import * as i0 from "@angular/core";
export declare class ACLDirective implements OnDestroy {
    private readonly el;
    private readonly renderer;
    private readonly srv;
    private _value;
    private change$;
    set acl(value: ACLCanType);
    set ability(value: ACLCanType);
    private set;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ACLDirective, "[acl]", ["acl"], { "acl": { "alias": "acl"; "required": false; }; "ability": { "alias": "acl-ability"; "required": false; }; }, {}, never, never, true, never>;
}
