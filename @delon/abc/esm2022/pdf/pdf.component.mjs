import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, timer, debounceTime, filter } from 'rxjs';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
import * as i3 from "@angular/cdk/platform";
const CSS_UNITS = 96.0 / 72.0;
const BORDER_WIDTH = 9;
export class PdfComponent {
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
    set zoom(val) {
        if (val <= 0)
            return;
        this._zoom = val;
    }
    set rotation(val) {
        if (val % 90 !== 0) {
            console.warn(`Invalid rotation angle, shoule be divisible by 90.`);
            return;
        }
        this._rotation = val;
    }
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
        return this._el.nativeElement.querySelector('.pdf-container');
    }
    constructor(ngZone, configSrv, lazySrv, platform, _el, doc, cdr) {
        this.ngZone = ngZone;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this._el = _el;
        this.doc = doc;
        this.cdr = cdr;
        this.inited = false;
        this.destroy$ = inject(DestroyRef);
        this.lib = '';
        this._pi = 1;
        this._total = 0;
        this._showAll = true;
        this._rotation = 0;
        this._zoom = 1;
        this._renderText = true;
        this._loading = false;
        this.textLayerMode = PdfTextLayerMode.ENABLE;
        this.showBorders = false;
        this.stickToPage = false;
        this.originalSize = true;
        this.fitToPage = false;
        this.zoomScale = 'page-width';
        this.autoReSize = true;
        this.externalLinkTarget = PdfExternalLinkTarget.BLANK;
        this.change = new EventEmitter();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: PdfComponent, deps: [{ token: i0.NgZone }, { token: i1.AlainConfigService }, { token: i2.LazyService }, { token: i3.Platform }, { token: i0.ElementRef }, { token: DOCUMENT, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: PdfComponent, isStandalone: true, selector: "pdf", inputs: { src: "src", pi: "pi", showAll: "showAll", renderText: "renderText", textLayerMode: "textLayerMode", showBorders: "showBorders", stickToPage: "stickToPage", originalSize: "originalSize", fitToPage: "fitToPage", zoom: "zoom", zoomScale: "zoomScale", rotation: "rotation", autoReSize: "autoReSize", externalLinkTarget: "externalLinkTarget", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "class.d-block": "true" } }, exportAs: ["pdf"], usesOnChanges: true, ngImport: i0, template: `
    @if (!inited || loading) {
      <nz-skeleton />
    }
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], PdfComponent.prototype, "pi", null);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "showAll", null);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "renderText", null);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "showBorders", void 0);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "stickToPage", void 0);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "originalSize", void 0);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "fitToPage", void 0);
__decorate([
    InputNumber()
], PdfComponent.prototype, "zoom", null);
__decorate([
    InputNumber()
], PdfComponent.prototype, "rotation", null);
__decorate([
    InputBoolean()
], PdfComponent.prototype, "autoReSize", void 0);
__decorate([
    InputNumber()
], PdfComponent.prototype, "delay", void 0);
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: PdfComponent, decorators: [{
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
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [NzSkeletonComponent]
                }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i1.AlainConfigService }, { type: i2.LazyService }, { type: i3.Platform }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { src: [{
                type: Input
            }], pi: [{
                type: Input
            }], showAll: [{
                type: Input
            }], renderText: [{
                type: Input
            }], textLayerMode: [{
                type: Input
            }], showBorders: [{
                type: Input
            }], stickToPage: [{
                type: Input
            }], originalSize: [{
                type: Input
            }], fitToPage: [{
                type: Input
            }], zoom: [{
                type: Input
            }], zoomScale: [{
                type: Input
            }], rotation: [{
                type: Input
            }], autoReSize: [{
                type: Input
            }], externalLinkTarget: [{
                type: Input
            }], delay: [{
                type: Input
            }], change: [{
                type: Output
            }], load: [], resetDoc: [], updateSize: [], destroy: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVM5RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBc0MscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sYUFBYSxDQUFDOzs7OztBQVl4SCxNQUFNLFNBQVMsR0FBVyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQXNCdkIsTUFBTSxPQUFPLFlBQVk7SUFpQ3ZCLElBQWEsR0FBRyxDQUFDLFlBQXVCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFHRCxJQUFJLEVBQUUsQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcs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Z0JBaUdDLElBQUksTUF5Q0osUUFBUSxNQXFEUixVQUFVLE1Bb0RWLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVzdHJveVJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHRpbWVyLCBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG4vLyBpbXBvcnQgdHlwZSB7IFBERkRvY3VtZW50TG9hZGluZ1Rhc2ssIFBERkRvY3VtZW50UHJveHkgfSBmcm9tICdwZGZqcy1kaXN0Jztcbi8vIGltcG9ydCB0eXBlIHsgRXZlbnRCdXMgfSBmcm9tICdwZGZqcy1kaXN0L3R5cGVzL3dlYi9ldmVudF91dGlscyc7XG4vLyBpbXBvcnQgdHlwZSB7IFBERkZpbmRDb250cm9sbGVyIH0gZnJvbSAncGRmanMtZGlzdC90eXBlcy93ZWIvcGRmX2ZpbmRfY29udHJvbGxlcic7XG4vLyBpbXBvcnQgdHlwZSB7IFBERkxpbmtTZXJ2aWNlIH0gZnJvbSAncGRmanMtZGlzdC90eXBlcy93ZWIvcGRmX2xpbmtfc2VydmljZSc7XG4vLyBpbXBvcnQgdHlwZSB7IFBERlZpZXdlciB9IGZyb20gJ3BkZmpzLWRpc3QvdHlwZXMvd2ViL3BkZl92aWV3ZXInO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbmltcG9ydCB7IFBERl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcGRmLmNvbmZpZyc7XG5pbXBvcnQgeyBQZGZDaGFuZ2VFdmVudCwgUGRmQ2hhbmdlRXZlbnRUeXBlLCBQZGZFeHRlcm5hbExpbmtUYXJnZXQsIFBkZlRleHRMYXllck1vZGUsIFBkZlpvb21TY2FsZSB9IGZyb20gJy4vcGRmLnR5cGVzJztcblxuLy8gVE9ETzogQWx0aG91Z2ggcGRmanMtZGlzdCBpcyBhbiBvcHRpb25hbCBkZXBlbmRlbmN5IG9uIGNhbnZhc1xuLy8gd2lsbCBiZSBpbnN0YWxsZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBkZXBlbmRlbmN5IGlzIGluc3RhbGxlZCBieSBkZWZhdWx0O1xuLy8gVGhpcyByZXF1aXJlcyBhIGhpZ2hlciBlbnZpcm9ubWVudCBhbmQgb2Z0ZW4gZmFpbHMgdG8gaW5zdGFsbFxudHlwZSBQREZEb2N1bWVudExvYWRpbmdUYXNrID0gTnpTYWZlQW55O1xudHlwZSBQREZEb2N1bWVudFByb3h5ID0gTnpTYWZlQW55O1xudHlwZSBFdmVudEJ1cyA9IE56U2FmZUFueTtcbnR5cGUgUERGRmluZENvbnRyb2xsZXIgPSBOelNhZmVBbnk7XG50eXBlIFBERkxpbmtTZXJ2aWNlID0gTnpTYWZlQW55O1xudHlwZSBQREZWaWV3ZXIgPSBOelNhZmVBbnk7XG5cbmNvbnN0IENTU19VTklUUzogbnVtYmVyID0gOTYuMCAvIDcyLjA7XG5jb25zdCBCT1JERVJfV0lEVEggPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICghaW5pdGVkIHx8IGxvYWRpbmcpIHtcbiAgICAgIDxuei1za2VsZXRvbiAvPlxuICAgIH1cbiAgICA8ZGl2IGNsYXNzPVwicGRmLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelNrZWxldG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQZGZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93QWxsUGFnZXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNrVG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vcmlnaW5hbFNpemU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdFRvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZVRleHRMYXllcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZlUGFnZUJvcmRlcnM6IEJvb2xlYW5JbnB1dDtcblxuICBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgcHJpdmF0ZSBsaWI6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wZGY/OiBQREZEb2N1bWVudFByb3h5IHwgbnVsbDtcbiAgcHJpdmF0ZSBsb2FkaW5nVGFzaz86IFBERkRvY3VtZW50TG9hZGluZ1Rhc2s7XG4gIHByaXZhdGUgX3NyYzogTnpTYWZlQW55O1xuICBwcml2YXRlIGxhc3RTcmM/OiBOelNhZmVBbnk7XG4gIHByaXZhdGUgX3BpID0gMTtcbiAgcHJpdmF0ZSBfdG90YWwgPSAwO1xuICBwcml2YXRlIF9zaG93QWxsID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcm90YXRpb24gPSAwO1xuICBwcml2YXRlIF96b29tID0gMTtcbiAgcHJpdmF0ZSBfcmVuZGVyVGV4dCA9IHRydWU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIG11bHRpUGFnZVZpZXdlcj86IFBERlZpZXdlcjtcbiAgcHJpdmF0ZSBtdWx0aVBhZ2VMaW5rU2VydmljZT86IFBERkxpbmtTZXJ2aWNlO1xuICBwcml2YXRlIG11bHRpUGFnZUZpbmRDb250cm9sbGVyPzogUERGRmluZENvbnRyb2xsZXI7XG4gIHByaXZhdGUgc2luZ2xlUGFnZVZpZXdlcj86IFBERlZpZXdlcjtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlTGlua1NlcnZpY2U/OiBQREZMaW5rU2VydmljZTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlRmluZENvbnRyb2xsZXI/OiBQREZGaW5kQ29udHJvbGxlcjtcbiAgcHJpdmF0ZSBfZXZlbnRCdXM/OiBFdmVudEJ1cztcblxuICBASW5wdXQoKSBzZXQgc3JjKGRhdGFPckJ1ZmZlcjogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5fc3JjID0gZGF0YU9yQnVmZmVyO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNldCBwaSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BpID0gdGhpcy5nZXRWYWxpZFBpKHZhbCk7XG4gICAgaWYgKHRoaXMucGFnZVZpZXdlcikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNjcm9sbFBhZ2VJbnRvVmlldyh7IHBhZ2VOdW1iZXI6IHRoaXMuX3BpIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IHNob3dBbGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0FsbCA9IHZhbDtcbiAgICB0aGlzLnJlc2V0RG9jKCk7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCByZW5kZXJUZXh0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbmRlclRleHQgPSB2YWw7XG4gICAgaWYgKHRoaXMucGFnZVZpZXdlcikge1xuICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0ZXh0TGF5ZXJNb2RlID0gUGRmVGV4dExheWVyTW9kZS5FTkFCTEU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Qm9yZGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RpY2tUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9yaWdpbmFsU2l6ZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXRUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHpvb20odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl96b29tID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIHpvb21TY2FsZTogUGRmWm9vbVNjYWxlID0gJ3BhZ2Utd2lkdGgnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzZXQgcm90YXRpb24odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICUgOTAgIT09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3RhdGlvbiBhbmdsZSwgc2hvdWxlIGJlIGRpdmlzaWJsZSBieSA5MC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9SZVNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBleHRlcm5hbExpbmtUYXJnZXQgPSBQZGZFeHRlcm5hbExpbmtUYXJnZXQuQkxBTks7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5PzogbnVtYmVyO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZDaGFuZ2VFdmVudD4oKTtcblxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIGdldCBwZGYoKTogUERGRG9jdW1lbnRQcm94eSB8IHVuZGVmaW5lZCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wZGY7XG4gIH1cblxuICBnZXQgZmluZENvbnRyb2xsZXIoKTogUERGRmluZENvbnRyb2xsZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA6IHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyO1xuICB9XG5cbiAgZ2V0IHBhZ2VWaWV3ZXIoKTogUERGVmlld2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlVmlld2VyIDogdGhpcy5zaW5nbGVQYWdlVmlld2VyO1xuICB9XG5cbiAgZ2V0IGxpbmtTZXJ2aWNlKCk6IFBERkxpbmtTZXJ2aWNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2UgOiB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZTtcbiAgfVxuXG4gIGdldCBldmVudEJ1cygpOiBFdmVudEJ1cyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50QnVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RleHRMYXllck1vZGUoKTogUGRmVGV4dExheWVyTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclRleHQgPyB0aGlzLnRleHRMYXllck1vZGUgOiBQZGZUZXh0TGF5ZXJNb2RlLkRJU0FCTEU7XG4gIH1cblxuICBwcml2YXRlIGdldCB3aW4oKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZGYtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLndpbi5wZGZqc0xpYikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTm8gd2luZG93LnBkZmpzTGliIGZvdW5kLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXQgY2RuIG9yIGxvY2FsIHBhdGggZXhpc3RzLCB0aGUgY3VycmVudCByZWZlcmVuY2VkIHBhdGggaXM6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdGhpcy5saWJcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMud2luLnBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gYCR7dGhpcy5saWJ9YnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuXG4gICAgdGltZXIodGhpcy5kZWxheSA/PyAwKVxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG4gIH1cblxuICBzZXRMb2FkaW5nKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gc3RhdHVzO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX3NyYyB9ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaW5pdGVkIHx8ICFfc3JjKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFNyYyA9PT0gX3NyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGxvYWRpbmdUYXNrOiBQREZEb2N1bWVudExvYWRpbmdUYXNrID0gKHRoaXMubG9hZGluZ1Rhc2sgPSB0aGlzLndpbi5wZGZqc0xpYi5nZXREb2N1bWVudChfc3JjKSk7XG4gICAgbG9hZGluZ1Rhc2sub25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBsb2FkZWQ6IG51bWJlcjsgdG90YWw6IG51bWJlciB9KSA9PiB0aGlzLmVtaXQoJ2xvYWQtcHJvZ3Jlc3MnLCB7IHByb2dyZXNzIH0pO1xuICAgIChsb2FkaW5nVGFzay5wcm9taXNlIGFzIFByb21pc2VMaWtlPFBERkRvY3VtZW50UHJveHk+KVxuICAgICAgLnRoZW4oXG4gICAgICAgIHBkZiA9PiB7XG4gICAgICAgICAgdGhpcy5fcGRmID0gcGRmO1xuICAgICAgICAgIHRoaXMubGFzdFNyYyA9IF9zcmM7XG4gICAgICAgICAgdGhpcy5fdG90YWwgPSBwZGYubnVtUGFnZXM7XG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2xvYWRlZCcpO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2VWaWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBQYWdlVmlld2VyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZW1pdCgnZXJyb3InLCB7IGVycm9yIH0pXG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldExvYWRpbmcoZmFsc2UpKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgcmVzZXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIGlmICghcGRmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYW5Eb2MoKTtcblxuICAgIHRoaXMuZmluZENvbnRyb2xsZXIhLnNldERvY3VtZW50KHBkZik7XG4gICAgdGhpcy5wYWdlVmlld2VyIS5zZXREb2N1bWVudChwZGYpO1xuICAgIHRoaXMubGlua1NlcnZpY2UhLnNldERvY3VtZW50KHBkZiwgbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuRG9jKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlQYWdlVmlld2VyIS5zZXREb2N1bWVudChudWxsIGFzIE56U2FmZUFueSk7XG4gICAgdGhpcy5zaW5nbGVQYWdlVmlld2VyIS5zZXREb2N1bWVudChudWxsIGFzIE56U2FmZUFueSk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlIS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcbiAgICB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZSEuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyIS5zZXREb2N1bWVudChudWxsIGFzIE56U2FmZUFueSk7XG4gICAgdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXIhLnNldERvY3VtZW50KG51bGwgYXMgTnpTYWZlQW55KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRWaWV3ZXIgPSB0aGlzLnBhZ2VWaWV3ZXI7XG4gICAgaWYgKCFjdXJyZW50Vmlld2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JvdGF0aW9uICE9PSAwIHx8IGN1cnJlbnRWaWV3ZXIucGFnZXNSb3RhdGlvbiAhPT0gdGhpcy5fcm90YXRpb24pIHtcbiAgICAgIHRoaXMudGltZUV4ZWMoKCkgPT4ge1xuICAgICAgICBjdXJyZW50Vmlld2VyLnBhZ2VzUm90YXRpb24gPSB0aGlzLl9yb3RhdGlvbjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0aWNrVG9QYWdlKSB7XG4gICAgICB0aGlzLnRpbWVFeGVjKCgpID0+IHtcbiAgICAgICAgY3VycmVudFZpZXdlci5jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuX3BpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIHRpbWVFeGVjKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGltZXIoMClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IGZuKCkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIGlmICghY3VycmVudFZpZXdlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5fcGRmIS5nZXRQYWdlKGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpLnRoZW4oKHBhZ2U6IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3QgeyBfcm90YXRpb24sIF96b29tIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBfcm90YXRpb24gfHwgcGFnZS5yb3RhdGU7XG4gICAgICBjb25zdCB2aWV3cG9ydFdpZHRoID1cbiAgICAgICAgcGFnZS5nZXRWaWV3cG9ydCh7XG4gICAgICAgICAgc2NhbGU6IF96b29tLFxuICAgICAgICAgIHJvdGF0aW9uXG4gICAgICAgIH0pLndpZHRoICogQ1NTX1VOSVRTO1xuICAgICAgbGV0IHNjYWxlID0gX3pvb207XG5cbiAgICAgIC8vIFNjYWxlIHRoZSBkb2N1bWVudCB3aGVuIGl0IHNob3VsZG4ndCBiZSBpbiBvcmlnaW5hbCBzaXplIG9yIGRvZXNuJ3QgZml0IGludG8gdGhlIHZpZXdwb3J0XG4gICAgICBpZiAoIXRoaXMub3JpZ2luYWxTaXplIHx8ICh0aGlzLmZpdFRvUGFnZSAmJiB2aWV3cG9ydFdpZHRoID4gdGhpcy5lbC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEsIHJvdGF0aW9uIH0pO1xuICAgICAgICBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUodmlld1BvcnQud2lkdGgsIHZpZXdQb3J0LmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRWaWV3ZXIuY3VycmVudFNjYWxlID0gc2NhbGU7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjYWxlKHZpZXdwb3J0V2lkdGg6IG51bWJlciwgdmlld3BvcnRIZWlnaHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9IHRoaXMuc2hvd0JvcmRlcnMgPyAyICogQk9SREVSX1dJRFRIIDogMDtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBlbC5jbGllbnRXaWR0aCAtIGJvcmRlclNpemU7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0IC0gYm9yZGVyU2l6ZTtcblxuICAgIGlmIChjb250YWluZXJIZWlnaHQgPT09IDAgfHwgdmlld3BvcnRIZWlnaHQgPT09IDAgfHwgY29udGFpbmVyV2lkdGggPT09IDAgfHwgdmlld3BvcnRXaWR0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gMTtcbiAgICBzd2l0Y2ggKHRoaXMuem9vbVNjYWxlKSB7XG4gICAgICBjYXNlICdwYWdlLWZpdCc6XG4gICAgICAgIHJhdGlvID0gTWF0aC5taW4oY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQsIGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS1oZWlnaHQnOlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lckhlaWdodCAvIHZpZXdwb3J0SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhZ2Utd2lkdGgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmF0aW8gPSBjb250YWluZXJXaWR0aCAvIHZpZXdwb3J0V2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fem9vbSAqIHJhdGlvKSAvIENTU19VTklUUztcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxvYWRpbmdUYXNrIH0gPSB0aGlzO1xuICAgIGlmIChsb2FkaW5nVGFzayAmJiAhbG9hZGluZ1Rhc2suZGVzdHJveWVkKSB7XG4gICAgICBsb2FkaW5nVGFzay5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMuX3BkZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9wZGYgPSBudWxsO1xuICAgICAgdGhpcy5jbGVhbkRvYygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIHRoaXMud2luLnBkZmpzTGliLmRpc2FibGVUZXh0TGF5ZXIgPSAhdGhpcy5fcmVuZGVyVGV4dDtcbiAgICB0aGlzLndpbi5wZGZqc0xpYi5leHRlcm5hbExpbmtUYXJnZXQgPSB0aGlzLmV4dGVybmFsTGlua1RhcmdldDtcblxuICAgIHRoaXMuc2V0dXBNdWx0aVBhZ2VWaWV3ZXIoKTtcbiAgICB0aGlzLnNldHVwU2luZ2xlUGFnZVZpZXdlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFdmVudEJ1cygpOiBFdmVudEJ1cyB7XG4gICAgY29uc3QgZXZlbnRCdXM6IEV2ZW50QnVzID0gbmV3IHRoaXMud2luLnBkZmpzVmlld2VyLkV2ZW50QnVzKCk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VzaW5pdGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3BhZ2VzLWluaXQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlcmVuZGVyZWRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlLXJlbmRlcmVkJywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZWNoYW5naW5nYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGNvbnN0IG5vd1BpID0gZXYucGFnZU51bWJlcjtcbiAgICAgIGlmIChub3dQaSAhPT0gdGhpcy5fcGkpIHtcbiAgICAgICAgdGhpcy5fcGkgPSBub3dQaTtcbiAgICAgICAgdGhpcy5lbWl0KCdwaScsIHsgZXYgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHRleHRsYXllcnJlbmRlcmVkYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgndGV4dC1sYXllci1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50QnVzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE11bHRpUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB0aGlzLndpbi5wZGZqc1ZpZXdlcjtcblxuICAgIGNvbnN0IGV2ZW50QnVzID0gKHRoaXMuX2V2ZW50QnVzID0gdGhpcy5jcmVhdGVFdmVudEJ1cygpKTtcbiAgICBjb25zdCBsaW5rU2VydmljZTogUERGTGlua1NlcnZpY2UgPSAodGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXNcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXI6IFBERkZpbmRDb250cm9sbGVyID0gKHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgPSBuZXcgVklFV0VSLlBERkZpbmRDb250cm9sbGVyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgbGlua1NlcnZpY2VcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2aWV3ZXI6IFBERlZpZXdlciA9ICh0aGlzLm11bHRpUGFnZVZpZXdlciA9IG5ldyBWSUVXRVIuUERGVmlld2VyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmVsLFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXJcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHZpZXdlcik7XG4gIH1cblxuICBwcml2YXRlIHNldHVwU2luZ2xlUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB0aGlzLndpbi5wZGZqc1ZpZXdlcjtcblxuICAgIGNvbnN0IGV2ZW50QnVzID0gdGhpcy5jcmVhdGVFdmVudEJ1cygpO1xuICAgIGNvbnN0IGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSA9ICh0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXNcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXI6IFBERkZpbmRDb250cm9sbGVyID0gKHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlXG4gICAgfSkpO1xuXG4gICAgY29uc3QgcGFnZVZpZXdlciA9ICh0aGlzLnNpbmdsZVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlNpbmdsZVBhZ2VWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlclxuICAgIH0pKTtcbiAgICBsaW5rU2VydmljZS5zZXRWaWV3ZXIocGFnZVZpZXdlcik7XG4gICAgcGFnZVZpZXdlci5fY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLndpbi5wZGZqc0xpYikge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBsaWIgfSA9IHRoaXM7XG4gICAgdGhpcy5sYXp5U3J2XG4gICAgICAubG9hZChgJHtsaWJ9YnVpbGQvcGRmLm1pbi5qc2ApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenlTcnYubG9hZChbYCR7bGlifXdlYi9wZGZfdmlld2VyLmpzYCwgYCR7bGlifXdlYi9wZGZfdmlld2VyLmNzc2BdKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0UmVzaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzaXplKCk6IHZvaWQge1xuICAgIGZyb21FdmVudCh0aGlzLndpbiwgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZVNpemUgJiYgdGhpcy5fcGRmICE9IG51bGwpLFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVTaXplKCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcCBpbiBrZXlvZiBQZGZDb21wb25lbnRdPzogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQgJiYgIWNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=