import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class STRowSource {
    private titles;
    private rows;
    add(type: string | undefined, path: string, ref: TemplateRef<void>): void;
    getTitle(path: string): TemplateRef<void>;
    getRow(path: string): TemplateRef<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<STRowSource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<STRowSource>;
}
export declare class STRowDirective implements OnInit {
    private ref;
    private source;
    id: string;
    type?: 'title';
    constructor(ref: TemplateRef<void>, source: STRowSource);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<STRowDirective, [null, { host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<STRowDirective, "[st-row]", never, { "id": "st-row"; "type": "type"; }, {}, never>;
}
