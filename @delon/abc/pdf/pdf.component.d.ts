import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { AlainConfigService, BooleanInput, LazyService, NumberInput } from '@delon/util';
import { PdfChangeEvent, PdfExternalLinkTarget, PdfTextLayerMode, PdfZoomScale } from './pdf.types';
export declare class PdfComponent implements OnChanges, AfterViewInit, OnDestroy {
    private ngZone;
    private lazySrv;
    private platform;
    private el;
    static ngAcceptInputType_pi: NumberInput;
    static ngAcceptInputType_delay: NumberInput;
    static ngAcceptInputType_showAllPages: BooleanInput;
    static ngAcceptInputType_stickToPage: BooleanInput;
    static ngAcceptInputType_originalSize: BooleanInput;
    static ngAcceptInputType_fitToPage: BooleanInput;
    static ngAcceptInputType_disableTextLayer: BooleanInput;
    static ngAcceptInputType_removePageBorders: BooleanInput;
    private unsubscribe$;
    private lib;
    private _pdf;
    private cog;
    private loadingTask;
    private inited;
    private _src;
    private lastSrc;
    private _pi;
    private _total;
    private _showAllPages;
    private _rotation;
    private _zoom;
    private _disableTextLayer;
    private multiPageViewer;
    private multiPageLinkService;
    private multiPageFindController;
    private singlePageViewer;
    private singlePageLinkService;
    private singlePageFindController;
    set src(data: string);
    set pi(val: number);
    set showAllPages(val: boolean);
    set disableTextLayer(val: boolean);
    removePageBorders: boolean;
    stickToPage: boolean;
    originalSize: boolean;
    set zoom(val: number);
    zoomScale: PdfZoomScale;
    fitToPage: boolean;
    textLayerMode: PdfTextLayerMode;
    externalLinkTarget: PdfExternalLinkTarget;
    set rotation(val: number);
    autoresize: boolean;
    delay: number;
    readonly change: EventEmitter<PdfChangeEvent>;
    get pdf(): any;
    get findController(): any;
    get pageViewer(): any;
    get linkService(): any;
    private get _textLayerMode();
    constructor(ngZone: NgZone, configSrv: AlainConfigService, lazySrv: LazyService, platform: Platform, el: ElementRef<HTMLElement>);
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
}
