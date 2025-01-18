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
    private readonly source;
    private readonly ref;
    id: string;
    type?: 'title';
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<STRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<STRowDirective, "[st-row]", never, { "id": { "alias": "st-row"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
}
