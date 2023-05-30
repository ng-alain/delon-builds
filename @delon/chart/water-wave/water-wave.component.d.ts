import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
    private el;
    private renderer;
    private ngZone;
    private cdr;
    private platform;
    static ngAcceptInputType_animate: BooleanInput;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_percent: NumberInput;
    private resize$;
    private node;
    private timer;
    animate: boolean;
    delay: number;
    title?: string | TemplateRef<void> | null;
    color: string;
    height: number;
    percent?: number;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone, cdr: ChangeDetectorRef, platform: Platform);
    private renderChart;
    private updateRadio;
    render(): void;
    private installResizeEvent;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<G2WaterWaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<G2WaterWaveComponent, "g2-water-wave", ["g2WaterWave"], { "animate": { "alias": "animate"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "title": { "alias": "title"; "required": false; }; "color": { "alias": "color"; "required": false; }; "height": { "alias": "height"; "required": false; }; "percent": { "alias": "percent"; "required": false; }; }, {}, never, never, false, never>;
}
