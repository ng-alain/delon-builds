import * as i0 from '@angular/core';
import { OnChanges, AfterViewInit, OnDestroy, EventEmitter, SimpleChange } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainPdfConfig } from '@delon/util/config';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/skeleton';

type PDFDocumentProxy$1 = NzSafeAny;
type PdfChangeEventType = 'loaded' | 'load-progress' | 'pages-init' | 'page-rendered' | 'text-layer-rendered' | 'pi' | 'error';
type PdfZoomScale = 'page-height' | 'page-fit' | 'page-width';
interface PdfChangeEvent {
    type?: PdfChangeEventType;
    pi?: number;
    total?: number;
    pdf?: PDFDocumentProxy$1 | null;
    ev?: NzSafeAny;
    progress?: {
        loaded: number;
        total: number;
    };
    error?: NzSafeAny;
}
declare enum PdfTextLayerMode {
    DISABLE = 0,
    ENABLE = 1,
    ENABLE_ENHANCE = 2
}
declare enum PdfExternalLinkTarget {
    NONE = 0,// Default value.
    SELF = 1,
    BLANK = 2,
    PARENT = 3,
    TOP = 4
}

type PDFDocumentProxy = NzSafeAny;
type EventBus = NzSafeAny;
type PDFFindController = NzSafeAny;
type PDFLinkService = NzSafeAny;
type PDFViewer = NzSafeAny;
declare class PdfComponent implements OnChanges, AfterViewInit, OnDestroy {
    private readonly lazySrv;
    private readonly platform;
    private readonly _el;
    private readonly doc;
    private readonly cdr;
    private readonly ngZone;
    private readonly destroy$;
    private readonly cogSrv;
    inited: boolean;
    private lib;
    private _pdf?;
    private loadingTask?;
    private _src;
    private lastSrc?;
    private _pi;
    private _total;
    private _showAll;
    private _rotation;
    private _zoom;
    private _renderText;
    private _loading;
    private multiPageViewer?;
    private multiPageLinkService?;
    private multiPageFindController?;
    private singlePageViewer?;
    private singlePageLinkService?;
    private singlePageFindController?;
    private _eventBus?;
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
    delay?: number;
    readonly change: EventEmitter<PdfChangeEvent>;
    get loading(): boolean;
    get pdf(): PDFDocumentProxy | undefined | null;
    get findController(): PDFFindController | undefined;
    get pageViewer(): PDFViewer | undefined;
    get linkService(): PDFLinkService | undefined;
    get eventBus(): EventBus | undefined;
    private get _textLayerMode();
    private get win();
    private get el();
    constructor();
    private getValidPi;
    private emit;
    private initDelay;
    setLoading(status: boolean): void;
    private load;
    private resetDoc;
    private cleanDoc;
    private render;
    private timeExec;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfComponent, "pdf", ["pdf"], { "src": { "alias": "src"; "required": false; }; "pi": { "alias": "pi"; "required": false; }; "showAll": { "alias": "showAll"; "required": false; }; "renderText": { "alias": "renderText"; "required": false; }; "textLayerMode": { "alias": "textLayerMode"; "required": false; }; "showBorders": { "alias": "showBorders"; "required": false; }; "stickToPage": { "alias": "stickToPage"; "required": false; }; "originalSize": { "alias": "originalSize"; "required": false; }; "fitToPage": { "alias": "fitToPage"; "required": false; }; "zoom": { "alias": "zoom"; "required": false; }; "zoomScale": { "alias": "zoomScale"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "autoReSize": { "alias": "autoReSize"; "required": false; }; "externalLinkTarget": { "alias": "externalLinkTarget"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "change": "change"; }, never, never, true, never>;
    static ngAcceptInputType_pi: unknown;
    static ngAcceptInputType_showAll: unknown;
    static ngAcceptInputType_renderText: unknown;
    static ngAcceptInputType_showBorders: unknown;
    static ngAcceptInputType_stickToPage: unknown;
    static ngAcceptInputType_originalSize: unknown;
    static ngAcceptInputType_fitToPage: unknown;
    static ngAcceptInputType_zoom: unknown;
    static ngAcceptInputType_rotation: unknown;
    static ngAcceptInputType_autoReSize: unknown;
    static ngAcceptInputType_delay: unknown;
}

declare const PDF_DEFULAT_CONFIG: AlainPdfConfig;

declare class PdfModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PdfModule, never, [typeof i1.CommonModule, typeof i2.NzSkeletonModule, typeof PdfComponent], [typeof PdfComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PdfModule>;
}

export { PDF_DEFULAT_CONFIG, PdfComponent, PdfExternalLinkTarget, PdfModule, PdfTextLayerMode };
export type { PdfChangeEvent, PdfChangeEventType, PdfZoomScale };
