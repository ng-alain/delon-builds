import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { BooleanInput } from '@delon/util';
import { Direction, Directionality } from '@angular/cdk/bidi';
export declare class TagSelectComponent implements OnInit, OnDestroy {
    private i18n;
    private directionality;
    private cdr;
    static ngAcceptInputType_expandable: BooleanInput;
    private destroy$;
    locale: LocaleData;
    expand: boolean;
    dir: Direction;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    readonly change: EventEmitter<boolean>;
    constructor(i18n: DelonLocaleService, directionality: Directionality, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    trigger(): void;
    ngOnDestroy(): void;
}
