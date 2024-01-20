import { Direction } from '@angular/cdk/bidi';
import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ResultComponent implements OnInit {
    private readonly cdr;
    private readonly directionality;
    private readonly destroy$;
    _type: string;
    _icon: string;
    set type(value: string);
    title?: string | TemplateRef<void>;
    description?: string | TemplateRef<void>;
    extra?: string | TemplateRef<void>;
    dir?: Direction;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResultComponent, "result", ["result"], { "type": { "alias": "type"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; }, {}, never, ["*"], true, never>;
}
