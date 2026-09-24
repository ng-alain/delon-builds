import * as i0 from '@angular/core';
import { OnDestroy, OnChanges, OnInit, TemplateRef } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/core/outlet';

declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private readonly el;
    private readonly renderer;
    private readonly ngZone;
    private readonly cdr;
    private readonly platform;
    private resize$;
    private node;
    private timer;
    animate: boolean;
    delay: number;
    title?: string | TemplateRef<void> | null;
    color: string;
    height: number;
    percent?: number;
    private renderChart;
    private updateRadio;
    render(): void;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2WaterWaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2WaterWaveComponent, "g2-water-wave", ["g2WaterWave"], { "animate": { "alias": "animate"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "title": { "alias": "title"; "required": false; }; "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_animate: unknown;
    static ngAcceptInputType_delay: unknown;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_percent: unknown;
}

declare class G2WaterWaveModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<G2WaterWaveModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<G2WaterWaveModule, never, [typeof i1.CommonModule, typeof i2.NzOutletModule, typeof G2WaterWaveComponent], [typeof G2WaterWaveComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<G2WaterWaveModule>;
}

export { G2WaterWaveComponent, G2WaterWaveModule };
