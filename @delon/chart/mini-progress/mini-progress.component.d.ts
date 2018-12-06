import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export declare class G2MiniProgressComponent implements OnChanges {
    i18n: DelonLocaleService;
    private cdr;
    color: string;
    target: number;
    percent: number;
    strokeWidth: number;
    constructor(i18n: DelonLocaleService, cdr: ChangeDetectorRef);
    private fixNum;
    ngOnChanges(): void;
}
