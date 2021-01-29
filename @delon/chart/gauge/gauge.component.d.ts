import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util/other';
export declare class G2GaugeComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    title: string;
    height: number;
    color: string;
    bgColor: string;
    format: (text: string, item: {}, index: number) => string;
    percent: number;
    padding: number | number[] | 'auto';
    install(): void;
    attachChart(): void;
}
