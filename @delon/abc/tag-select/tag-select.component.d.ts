import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export declare class TagSelectComponent implements OnInit, OnDestroy {
    private i18n;
    private cdr;
    private i18n$;
    locale: any;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    expand: boolean;
    readonly change: EventEmitter<boolean>;
    constructor(i18n: DelonLocaleService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    trigger(): void;
    ngOnDestroy(): void;
}
