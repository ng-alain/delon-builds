import { OnInit, TemplateRef } from '@angular/core';
import { SFComponent } from '../../sf.component';
export declare class SFTemplateDirective implements OnInit {
    private templateRef;
    private table;
    path: string;
    constructor(templateRef: TemplateRef<void>, table: SFComponent);
    ngOnInit(): void;
}
