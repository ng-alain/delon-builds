import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { PdfChangeEvent, PdfExternalLinkTarget, PdfTextLayerMode, PdfZoomScale } from './pdf.types';
import * as i0 from "@angular/core";
export declare class PdfComponent implements OnChanges, AfterViewInit, OnDestroy {
    private ngZone;
    private lazySrv;
    private platform;
    private el;
    private doc;
    static ngAcceptInputType_pi: NumberInput;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_showAllPages: BooleanInput;
    static ngAcceptInputType_stickToPage: BooleanInput;
    static ngAcceptInputType_originalSize: BooleanInput;
    static ngAcceptInputType_fitToPage: BooleanInput;
    static ngAcceptInputType_disableTextLayer: BooleanInput;
    static ngAcceptInputType_removePageBorders: BooleanInput;
    inited: boolean;
    private unsubscribe$;
    private lib;
    private _pdf;
    private loadingTask;
    private _src;
    private lastSrc;
    private _pi;
    private _total;
    private _showAll;
    private _rotation;
    private _zoom;
    private _renderText;
    private multiPageViewer;
    private multiPageLinkService;
    private multiPageFindController;
    private singlePageViewer;
    private singlePageLinkService;
    private singlePageFindController;
    set src(dataOrBuffer: NzSafeAny);
    set pi(val: number);
    set showAll(val: boolean);
    set renderText(val: boolean);
    textLayerMode: PdfTextLayerMode;
    showBorders: boolean;
    stickToPage: boolean;
    originalSize: boolean;
    fitToPage: boolean;
    set zoom(val: number);
    zoomScale: PdfZoomScale;
    set rotation(val: number);
    autoReSize: boolean;
    externalLinkTarget: PdfExternalLinkTarget;
    delay: number;
    readonly change: EventEmitter<PdfChangeEvent>;
    get pdf(): NzSafeAny;
    get findController(): NzSafeAny;
    get pageViewer(): NzSafeAny;
    get linkService(): NzSafeAny;
    private get _textLayerMode();
    private get win();
    constructor(ngZone: NgZone, configSrv: AlainConfigService, lazySrv: LazyService, platform: Platform, el: ElementRef<HTMLElement>, doc: Document);
    private getValidPi;
    private emit;
    private initDelay;
    private load;
    private resetDoc;
    private cleanDoc;
    private render;
    private updateSize;
    private getScale;
    private destroy;
    private setupPageViewer;
    private createEventBus;
    private setupMultiPageViewer;
    private setupSinglePageViewer;
    ngAfterViewInit(): void;
    private initResize;
    ngOnChanges(changes: {
        [p in keyof PdfComponent]?: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PdfComponent, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PdfComponent, "pdf", ["pdf"], { "src": "src"; "pi": "pi"; "showAll": "showAll"; "renderText": "renderText"; "textLayerMode": "textLayerMode"; "showBorders": "showBorders"; "stickToPage": "stickToPage"; "originalSize": "originalSize"; "fitToPage": "fitToPage"; "zoom": "zoom"; "zoomScale": "zoomScale"; "rotation": "rotation"; "autoReSize": "autoReSize"; "externalLinkTarget": "externalLinkTarget"; "delay": "delay"; }, { "change": "change"; }, never, never>;
}
