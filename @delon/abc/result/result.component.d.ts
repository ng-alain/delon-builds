import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
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
}
