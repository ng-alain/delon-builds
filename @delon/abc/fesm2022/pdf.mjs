import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, ElementRef, ChangeDetectorRef, NgZone, DestroyRef, EventEmitter, numberAttribute, booleanAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer, fromEvent, debounceTime, filter } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import * as i1 from '@delon/util/config';

const PDF_DEFULAT_CONFIG = {
    lib: `https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.x/`,
    showAll: true,
    renderText: true,
    showBorders: false,
    originalSize: true,
    fitToPage: false,
    autoReSize: true
};

// import type { PDFDocumentProxy } from 'pdfjs-dist';
var PdfTextLayerMode;
(function (PdfTextLayerMode) {
    PdfTextLayerMode[PdfTextLayerMode["DISABLE"] = 0] = "DISABLE";
    PdfTextLayerMode[PdfTextLayerMode["ENABLE"] = 1] = "ENABLE";
    PdfTextLayerMode[PdfTextLayerMode["ENABLE_ENHANCE"] = 2] = "ENABLE_ENHANCE";
})(PdfTextLayerMode || (PdfTextLayerMode = {}));
var PdfExternalLinkTarget;
(function (PdfExternalLinkTarget) {
    PdfExternalLinkTarget[PdfExternalLinkTarget["NONE"] = 0] = "NONE";
    PdfExternalLinkTarget[PdfExternalLinkTarget["SELF"] = 1] = "SELF";
    PdfExternalLinkTarget[PdfExternalLinkTarget["BLANK"] = 2] = "BLANK";
    PdfExternalLinkTarget[PdfExternalLinkTarget["PARENT"] = 3] = "PARENT";
    PdfExternalLinkTarget[PdfExternalLinkTarget["TOP"] = 4] = "TOP";
})(PdfExternalLinkTarget || (PdfExternalLinkTarget = {}));

const CSS_UNITS = 96.0 / 72.0;
const BORDER_WIDTH = 9;
class PdfComponent {
    lazySrv = inject(LazyService);
    platform = inject(Platform);
    _el = inject(ElementRef).nativeElement;
    doc = inject(DOCUMENT);
    cdr = inject(ChangeDetectorRef);
    ngZone = inject(NgZone);
    destroy$ = inject(DestroyRef);
    inited = false;
    lib = '';
    _pdf;
    loadingTask;
    _src;
    lastSrc;
    _pi = 1;
    _total = 0;
    _showAll = true;
    _rotation = 0;
    _zoom = 1;
    _renderText = true;
    _loading = false;
    multiPageViewer;
    multiPageLinkService;
    multiPageFindController;
    singlePageViewer;
    singlePageLinkService;
    singlePageFindController;
    _eventBus;
    set src(dataOrBuffer) {
        this._src = dataOrBuffer;
        this.load();
    }
    set pi(val) {
        this._pi = this.getValidPi(val);
        if (this.pageViewer) {
            this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
        }
    }
    set showAll(val) {
        this._showAll = val;
        this.resetDoc();
    }
    set renderText(val) {
        this._renderText = val;
        if (this.pageViewer) {
            this.resetDoc();
        }
    }
    textLayerMode = PdfTextLayerMode.ENABLE;
    showBorders = false;
    stickToPage = false;
    originalSize = true;
    fitToPage = false;
    set zoom(val) {
        if (val <= 0)
            return;
        this._zoom = val;
    }
    zoomScale = 'page-width';
    set rotation(val) {
        if (val % 90 !== 0) {
            console.warn(`Invalid rotation angle, shoule be divisible by 90.`);
            return;
        }
        this._rotation = val;
    }
    autoReSize = true;
    externalLinkTarget = PdfExternalLinkTarget.BLANK;
    delay;
    change = new EventEmitter();
    get loading() {
        return this._loading;
    }
    get pdf() {
        return this._pdf;
    }
    get findController() {
        return this._showAll ? this.multiPageFindController : this.singlePageFindController;
    }
    get pageViewer() {
        return this._showAll ? this.multiPageViewer : this.singlePageViewer;
    }
    get linkService() {
        return this._showAll ? this.multiPageLinkService : this.singlePageLinkService;
    }
    get eventBus() {
        return this._eventBus;
    }
    get _textLayerMode() {
        return this._renderText ? this.textLayerMode : PdfTextLayerMode.DISABLE;
    }
    get win() {
        return this.doc.defaultView || window;
    }
    get el() {
        return this._el.querySelector('.pdf-container');
    }
    constructor(configSrv) {
        const cog = configSrv.merge('pdf', PDF_DEFULAT_CONFIG);
        Object.assign(this, cog);
        const lib = cog.lib;
        this.lib = lib.endsWith('/') ? lib : `${lib}/`;
    }
    getValidPi(pi) {
        if (pi < 1)
            return 1;
        const pdf = this._pdf;
        return pdf && pi > pdf.numPages ? pdf.numPages : pi;
    }
    emit(type, opt) {
        this.ngZone.run(() => this.change.emit({
            type,
            pdf: this._pdf,
            pi: this._pi,
            total: this._total,
            ...opt
        }));
    }
    initDelay() {
        if (!this.win.pdfjsLib) {
            throw new Error(`No window.pdfjsLib found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.lib)}`);
        }
        this.inited = true;
        this.cdr.detectChanges();
        this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;
        timer(this.delay ?? 0)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => this.load());
    }
    setLoading(status) {
        this.ngZone.run(() => {
            this._loading = status;
            this.cdr.detectChanges();
        });
    }
    load() {
        const { _src } = this;
        if (!this.inited || !_src) {
            return;
        }
        if (this.lastSrc === _src) {
            this.render();
            return;
        }
        this.destroy();
        this.ngZone.run(() => {
            this._loading = true;
            this.cdr.detectChanges();
        });
        this.setLoading(true);
        const loadingTask = (this.loadingTask = this.win.pdfjsLib.getDocument(_src));
        loadingTask.onProgress = (progress) => this.emit('load-progress', { progress });
        loadingTask.promise
            .then(pdf => {
            this._pdf = pdf;
            this.lastSrc = _src;
            this._total = pdf.numPages;
            this.emit('loaded');
            if (!this.pageViewer) {
                this.setupPageViewer();
            }
            this.resetDoc();
            this.render();
        }, error => this.emit('error', { error }))
            .then(() => this.setLoading(false));
    }
    resetDoc() {
        const pdf = this._pdf;
        if (!pdf) {
            return;
        }
        this.cleanDoc();
        this.findController.setDocument(pdf);
        this.pageViewer.setDocument(pdf);
        this.linkService.setDocument(pdf, null);
    }
    cleanDoc() {
        this.multiPageViewer.setDocument(null);
        this.singlePageViewer.setDocument(null);
        this.multiPageLinkService.setDocument(null, null);
        this.singlePageLinkService.setDocument(null, null);
        this.multiPageFindController.setDocument(null);
        this.singlePageFindController.setDocument(null);
    }
    render() {
        const currentViewer = this.pageViewer;
        if (!currentViewer) {
            return;
        }
        if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
            this.timeExec(() => {
                currentViewer.pagesRotation = this._rotation;
            });
        }
        if (this.stickToPage) {
            this.timeExec(() => {
                currentViewer.currentPageNumber = this._pi;
            });
        }
        this.updateSize();
    }
    timeExec(fn) {
        this.ngZone.runOutsideAngular(() => {
            timer(0)
                .pipe(takeUntilDestroyed(this.destroy$))
                .subscribe(() => this.ngZone.runOutsideAngular(() => fn()));
        });
    }
    updateSize() {
        const currentViewer = this.pageViewer;
        if (!currentViewer)
            return;
        this._pdf.getPage(currentViewer.currentPageNumber).then((page) => {
            const { _rotation, _zoom } = this;
            const rotation = _rotation || page.rotate;
            const viewportWidth = page.getViewport({
                scale: _zoom,
                rotation
            }).width * CSS_UNITS;
            let scale = _zoom;
            // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
            if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.clientWidth)) {
                const viewPort = page.getViewport({ scale: 1, rotation });
                scale = this.getScale(viewPort.width, viewPort.height);
            }
            currentViewer.currentScale = scale;
        });
    }
    getScale(viewportWidth, viewportHeight) {
        const borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
        const el = this.el;
        const containerWidth = el.clientWidth - borderSize;
        const containerHeight = el.clientHeight - borderSize;
        if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
            return 1;
        }
        let ratio = 1;
        switch (this.zoomScale) {
            case 'page-fit':
                ratio = Math.min(containerHeight / viewportHeight, containerWidth / viewportWidth);
                break;
            case 'page-height':
                ratio = containerHeight / viewportHeight;
                break;
            case 'page-width':
            default:
                ratio = containerWidth / viewportWidth;
                break;
        }
        return (this._zoom * ratio) / CSS_UNITS;
    }
    destroy() {
        const { loadingTask } = this;
        if (loadingTask && !loadingTask.destroyed) {
            loadingTask.destroy();
        }
        if (this._pdf) {
            this._pdf.destroy();
            this._pdf = null;
            this.cleanDoc();
        }
    }
    setupPageViewer() {
        this.win.pdfjsLib.disableTextLayer = !this._renderText;
        this.win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;
        this.setupMultiPageViewer();
        this.setupSinglePageViewer();
    }
    createEventBus() {
        const eventBus = new this.win.pdfjsViewer.EventBus();
        eventBus.on(`pagesinit`, (ev) => {
            this.emit('pages-init', { ev });
        });
        eventBus.on(`pagerendered`, (ev) => {
            this.emit('page-rendered', { ev });
        });
        eventBus.on(`pagechanging`, (ev) => {
            const nowPi = ev.pageNumber;
            if (nowPi !== this._pi) {
                this._pi = nowPi;
                this.emit('pi', { ev });
            }
        });
        eventBus.on(`textlayerrendered`, (ev) => {
            this.emit('text-layer-rendered', { ev });
        });
        return eventBus;
    }
    setupMultiPageViewer() {
        const VIEWER = this.win.pdfjsViewer;
        const eventBus = (this._eventBus = this.createEventBus());
        const linkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
            eventBus
        }));
        const findController = (this.multiPageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService
        }));
        const viewer = (this.multiPageViewer = new VIEWER.PDFViewer({
            eventBus,
            container: this.el,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController
        }));
        linkService.setViewer(viewer);
    }
    setupSinglePageViewer() {
        const VIEWER = this.win.pdfjsViewer;
        const eventBus = this.createEventBus();
        const linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
            eventBus
        }));
        const findController = (this.singlePageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService
        }));
        const pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
            eventBus,
            container: this.el,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController
        }));
        linkService.setViewer(pageViewer);
        pageViewer._currentPageNumber = this._pi;
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (this.win.pdfjsLib) {
            this.initDelay();
            return;
        }
        const { lib } = this;
        this.lazySrv
            .load(`${lib}build/pdf.min.js`)
            .then(() => this.lazySrv.load([`${lib}web/pdf_viewer.js`, `${lib}web/pdf_viewer.css`]))
            .then(() => this.initDelay());
        this.ngZone.runOutsideAngular(() => this.initResize());
    }
    initResize() {
        fromEvent(this.win, 'resize')
            .pipe(debounceTime(100), filter(() => this.autoReSize && this._pdf != null), takeUntilDestroyed(this.destroy$))
            .subscribe(() => this.updateSize());
    }
    ngOnChanges(changes) {
        if (this.inited && !changes.src) {
            this.render();
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: PdfComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.4", type: PdfComponent, isStandalone: true, selector: "pdf", inputs: { src: "src", pi: ["pi", "pi", numberAttribute], showAll: ["showAll", "showAll", booleanAttribute], renderText: ["renderText", "renderText", booleanAttribute], textLayerMode: "textLayerMode", showBorders: ["showBorders", "showBorders", booleanAttribute], stickToPage: ["stickToPage", "stickToPage", booleanAttribute], originalSize: ["originalSize", "originalSize", booleanAttribute], fitToPage: ["fitToPage", "fitToPage", booleanAttribute], zoom: ["zoom", "zoom", numberAttribute], zoomScale: "zoomScale", rotation: ["rotation", "rotation", numberAttribute], autoReSize: ["autoReSize", "autoReSize", booleanAttribute], externalLinkTarget: "externalLinkTarget", delay: ["delay", "delay", numberAttribute] }, outputs: { change: "change" }, host: { properties: { "class.d-block": "true" } }, exportAs: ["pdf"], usesOnChanges: true, ngImport: i0, template: `
    @if (!inited || loading) {
      <nz-skeleton />
    }
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
__decorate([
    ZoneOutside()
], PdfComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], PdfComponent.prototype, "resetDoc", null);
__decorate([
    ZoneOutside()
], PdfComponent.prototype, "updateSize", null);
__decorate([
    ZoneOutside()
], PdfComponent.prototype, "destroy", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: PdfComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'pdf',
                    exportAs: 'pdf',
                    template: `
    @if (!inited || loading) {
      <nz-skeleton />
    }
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `,
                    host: {
                        '[class.d-block]': `true`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzSkeletonComponent]
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { src: [{
                type: Input
            }], pi: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], showAll: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], renderText: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], textLayerMode: [{
                type: Input
            }], showBorders: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], stickToPage: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], originalSize: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], fitToPage: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], zoom: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], zoomScale: [{
                type: Input
            }], rotation: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], autoReSize: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], externalLinkTarget: [{
                type: Input
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], change: [{
                type: Output
            }], load: [], resetDoc: [], updateSize: [], destroy: [] } });

const COMPONENTS = [PdfComponent];
class PdfModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: PdfModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.4", ngImport: i0, type: PdfModule, imports: [CommonModule, NzSkeletonModule, PdfComponent], exports: [PdfComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: PdfModule, imports: [CommonModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: PdfModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PDF_DEFULAT_CONFIG, PdfComponent, PdfExternalLinkTarget, PdfModule, PdfTextLayerMode };
//# sourceMappingURL=pdf.mjs.map
