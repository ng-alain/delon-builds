import { OnInit, TemplateRef } from '@angular/core';
import { SFComponent } from '../../sf.component';
import * as i0 from "@angular/core";
export declare class SFTemplateDirective implements OnInit {
    private templateRef;
    private table;
    path: string;
    constructor(templateRef: TemplateRef<void>, table: SFComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SFTemplateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SFTemplateDirective, "[sf-template]", never, { "path": "sf-template"; }, {}, never>;
}
