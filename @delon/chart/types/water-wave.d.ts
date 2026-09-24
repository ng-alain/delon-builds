import * as _angular_core from '@angular/core';
import { OnDestroy, TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/core/outlet';

declare class G2WaterWaveComponent implements OnDestroy {
    private readonly el;
    private readonly renderer;
    private readonly destroyRef;
    private readonly node;
    private timer;
    private started;
    private destroyed;
    readonly animate: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly delay: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null>;
    readonly color: _angular_core.InputSignal<string>;
    readonly height: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly percent: _angular_core.InputSignal<number | undefined>;
    constructor();
    private renderChart;
    private updateRadio;
    render(): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2WaterWaveComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<G2WaterWaveComponent, "g2-water-wave", ["g2WaterWave"], { "animate": { "alias": "animate"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; "percent": { "alias": "percent"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class G2WaterWaveModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<G2WaterWaveModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<G2WaterWaveModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof G2WaterWaveComponent], [typeof G2WaterWaveComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<G2WaterWaveModule>;
}

export { G2WaterWaveComponent, G2WaterWaveModule };
