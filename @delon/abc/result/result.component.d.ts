import { Direction, Directionality } from '@angular/cdk/bidi';
import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ResultComponent implements OnInit, OnDestroy {
    private directionality;
    private destroy$;
    _type: string;
    _icon: string;
    set type(value: string);
    title: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
    dir: Direction;
    constructor(directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ResultComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ResultComponent, "result", ["result"], { "type": "type"; "title": "title"; "description": "description"; "extra": "extra"; }, {}, never, ["*"]>;
}
