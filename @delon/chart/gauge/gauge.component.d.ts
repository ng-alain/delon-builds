import { G2BaseComponent } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class G2GaugeComponent extends G2BaseComponent {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<G2GaugeComponent, "g2-gauge", ["g2Gauge"], { "title": { "alias": "title"; "required": false; }; "height": { "alias": "height"; "required": false; }; "color": { "alias": "color"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "format": { "alias": "format"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_percent: unknown;
}
