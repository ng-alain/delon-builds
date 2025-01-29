import { SimpleChanges } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class G2SingleBarComponent extends G2BaseComponent {
    plusColor: string;
    minusColor: string;
    height: number;
    barSize: number;
    min: number;
    max: number;
    value: number;
    line: boolean;
    format?: (value: number, item: NzSafeAny, index: number) => string;
    padding: number | number[] | 'auto';
    textStyle: Record<string, NzSafeAny>;
    install(): void;
    onlyChangeData: (changes: SimpleChanges) => boolean;
    changeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2SingleBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2SingleBarComponent, "g2-single-bar", ["g2SingleBar"], { "plusColor": { "alias": "plusColor"; "required": false; }; "minusColor": { "alias": "minusColor"; "required": false; }; "height": { "alias": "height"; "required": false; }; "barSize": { "alias": "barSize"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "value": { "alias": "value"; "required": false; }; "line": { "alias": "line"; "required": false; }; "format": { "alias": "format"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "textStyle": { "alias": "textStyle"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_barSize: unknown;
    static ngAcceptInputType_min: unknown;
    static ngAcceptInputType_max: unknown;
    static ngAcceptInputType_value: unknown;
    static ngAcceptInputType_line: unknown;
}
