import { EventEmitter, OnDestroy } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export declare class TagSelectComponent implements OnDestroy {
    private i18n;
    private i18n$;
    locale: any;
    /** 是否启用 `展开与收进` */
    expandable: boolean;
    expand: boolean;
    change: EventEmitter<boolean>;
    constructor(i18n: DelonLocaleService);
    trigger(): void;
    ngOnDestroy(): void;
}
