import { TemplateRef, OnInit } from '@angular/core';
import { SFComponent } from '../../sf.component';
export declare class SFTemplateDirective implements OnInit {
    private templateRef;
    private table;
    path: string;
    constructor(templateRef: TemplateRef<any>, table: SFComponent);
    ngOnInit(): void;
}
