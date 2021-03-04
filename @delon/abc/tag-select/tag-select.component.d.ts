import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { BooleanInput } from '@delon/util/decorator';
export declare class TagSelectComponent implements OnInit {
    private i18n;
    private directionality;
    private cdr;
    static ngAcceptInputType_expandable: BooleanInput;
    locale: LocaleData;
    expand: boolean;
    dir: Direction;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    readonly change: EventEmitter<boolean>;
    constructor(i18n: DelonLocaleService, directionality: Directionality, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    trigger(): void;
}
