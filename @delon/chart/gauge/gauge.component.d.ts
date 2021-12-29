import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class G2GaugeComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    title: string;
    height: number;
    color: string;
    bgColor: string;
    format: (text: string, item: NzSafeAny, index: number) => string;
    percent: number;
    padding: number | number[] | 'auto';
    install(): void;
    changeData(): void;
}
