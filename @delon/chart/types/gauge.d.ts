import * as _angular_core from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

declare class G2GaugeComponent extends G2BaseComponent {
    readonly title: _angular_core.InputSignal<string | undefined>;
    readonly height: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    readonly color: _angular_core.InputSignal<string>;
    readonly bgColor: _angular_core.InputSignal<string | undefined>;
    readonly format: _angular_core.InputSignal<((text: string, item: NzSafeAny, index: number) => string) | undefined>;
    readonly percent: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    readonly padding: _angular_core.InputSignal<number | number[] | "auto">;
    install(): void;
    changeData(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2GaugeComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2GaugeComponent, "g2-gauge", ["g2Gauge"], { "title": { "alias": "title"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "bgColor": { "alias": "bgColor"; "required": false; "isSignal": true; }; "format": { "alias": "format"; "required": false; "isSignal": true; }; "percent": { "alias": "percent"; "required": false; "isSignal": true; }; "padding": { "alias": "padding"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class G2GaugeModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2GaugeModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2GaugeModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof G2GaugeComponent], [typeof G2GaugeComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2GaugeModule>;
}

export { G2GaugeComponent, G2GaugeModule };
