import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

declare class G2GaugeComponent extends G2BaseComponent {
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

declare class G2GaugeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2GaugeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2GaugeModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2GaugeComponent], [typeof G2GaugeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2GaugeModule>;
}

export { G2GaugeComponent, G2GaugeModule };
