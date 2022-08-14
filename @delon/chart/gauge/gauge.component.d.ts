import { G2BaseComponent } from '@delon/chart/core';
import { NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class G2GaugeComponent extends G2BaseComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    title?: string;
    height?: number;
    color: string;
    bgColor?: string;
    format?: (text: string, item: NzSafeAny, index: number) => string;
    percent?: number;
    padding: number | number[] | 'auto';
    install(): void;
    changeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2GaugeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2GaugeComponent, "g2-gauge", ["g2Gauge"], { "title": "title"; "height": "height"; "color": "color"; "bgColor": "bgColor"; "format": "format"; "percent": "percent"; "padding": "padding"; }, {}, never, never, false>;
}
