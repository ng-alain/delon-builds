import { Direction, Directionality } from '@angular/cdk/bidi';
import { OnInit, TemplateRef } from '@angular/core';
export declare class ResultComponent implements OnInit {
    private directionality;
    _type: string;
    _icon: string;
    set type(value: string);
    title: string | TemplateRef<void>;
    description: string | TemplateRef<void>;
    extra: string | TemplateRef<void>;
    dir: Direction;
    constructor(directionality: Directionality);
    ngOnInit(): void;
}
