import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { NumberInput } from '@delon/util/other';
export declare class G2MiniProgressComponent implements OnChanges {
    i18n: DelonLocaleService;
    private cdr;
    static ngAcceptInputType_target: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    static ngAcceptInputType_strokeWidth: NumberInput;
    color: string;
    target: number;
    percent: number;
    strokeWidth: number;
    constructor(i18n: DelonLocaleService, cdr: ChangeDetectorRef);
    private fixNum;
    ngOnChanges(): void;
}
