import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class G2MiniProgressComponent implements OnChanges {
    readonly targetSuffix: any;
    private readonly cdr;
    color: string;
    target?: number | null;
    percent?: number | null;
    strokeWidth?: number | null;
    private fixNum;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2MiniProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2MiniProgressComponent, "g2-mini-progress", ["g2MiniProgress"], { "color": { "alias": "color"; "required": false; }; "target": { "alias": "target"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_target: unknown;
    static ngAcceptInputType_percent: unknown;
    static ngAcceptInputType_strokeWidth: unknown;
}
