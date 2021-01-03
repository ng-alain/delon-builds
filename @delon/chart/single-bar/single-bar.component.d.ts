import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, NumberInput } from '@delon/util';
export declare class G2SingleBarComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_barSize: NumberInput;
    static ngAcceptInputType_min: NumberInput;
    static ngAcceptInputType_max: NumberInput;
    static ngAcceptInputType_value: NumberInput;
    static ngAcceptInputType_line: BooleanInput;
    plusColor: string;
    minusColor: string;
    height: number;
    barSize: number;
    min: number;
    max: number;
    value: number;
    line: boolean;
    format: (value: number, item: {}, index: number) => string;
    padding: number | number[] | 'auto';
    textStyle: any;
    install(): void;
    attachChart(): void;
}
