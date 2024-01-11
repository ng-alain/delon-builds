import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class G2MiniProgressComponent implements OnChanges {
    i18n: DelonLocaleService;
    private cdr;
    static ngAcceptInputType_target: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    static ngAcceptInputType_strokeWidth: NumberInput;
    color: string;
    target?: number | null;
    percent?: number | null;
    strokeWidth?: number | null;
    constructor(i18n: DelonLocaleService, cdr: ChangeDetectorRef);
    private fixNum;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniProgressComponent, "g2-mini-progress", ["g2MiniProgress"], { "color": { "alias": "color"; "required": false; }; "target": { "alias": "target"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; }, {}, never, never, true, never>;
}
