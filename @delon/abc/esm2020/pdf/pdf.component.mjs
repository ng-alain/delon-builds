import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/skeleton";
import * as i5 from "@angular/common";
const CSS_UNITS = 96.0 / 72.0;
const BORDER_WIDTH = 9;
export class PdfComponent {
    constructor(ngZone, configSrv, lazySrv, platform, _el, doc, cdr) {
        this.ngZone = ngZone;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this._el = _el;
        this.doc = doc;
        this.cdr = cdr;
        this.inited = false;
        this.unsubscribe$ = new Subject();
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
    set src(dataOrBuffer) {
        this._src = dataOrBuffer;
        this.load();
    }
    set pi(val) {
        this._pi = this.getValidPi(val);
        if (this._pdf) {
            this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
        }
    }
    set showAll(val) {
        this._showAll = val;
        this.resetDoc();
    }
    set renderText(val) {
        this._renderText = val;
        if (this._pdf) {
            this.pageViewer.textLayerMode = this._textLayerMode;
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
    get _textLayerMode() {
        return this._renderText ? this.textLayerMode : PdfTextLayerMode.DISABLE;
    }
    get win() {
        return this.doc.defaultView || window;
    }
    get el() {
        return this._el.nativeElement.querySelector('.pdf-container');
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
        this.inited = true;
        this.cdr.detectChanges();
        this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;
        setTimeout(() => this.load(), this.delay);
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
            .then((pdf) => {
            this._pdf = pdf;
            this.lastSrc = _src;
            this._total = pdf.numPages;
            this.emit('loaded');
            if (!this.pageViewer) {
                this.setupPageViewer();
            }
            this.resetDoc();
            this.render();
        }, (error) => this.emit('error', { error }))
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
            setTimeout(() => {
                currentViewer.pagesRotation = this._rotation;
            });
        }
        if (this.stickToPage) {
            setTimeout(() => {
                currentViewer.currentPageNumber = this._pi;
            });
        }
        this.updateSize();
    }
    updateSize() {
        const currentViewer = this.pageViewer;
        this._pdf.getPage(currentViewer.currentPageNumber).then((page) => {
            const { _rotation, _zoom } = this;
            const rotation = _rotation || page.rotate;
            const viewportWidth = page.getViewport({
                scale: _zoom,
                rotation
            }).width * CSS_UNITS;
            let scale = _zoom;
            let stickToPage = true;
            // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
            if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.clientWidth)) {
                const viewPort = page.getViewport({ scale: 1, rotation });
                scale = this.getScale(viewPort.width, viewPort.height);
                stickToPage = !this.stickToPage;
            }
            currentViewer._setScale(scale, stickToPage);
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
        const eventBus = this.createEventBus();
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
            .pipe(debounceTime(100), filter(() => this.autoReSize && this._pdf), takeUntil(this.unsubscribe$))
            .subscribe(() => this.updateSize());
    }
    ngOnChanges(changes) {
        if (this.inited && !changes.src) {
            this.render();
        }
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.destroy();
    }
}
PdfComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PdfComponent, deps: [{ token: i0.NgZone }, { token: i1.AlainConfigService }, { token: i2.LazyService }, { token: i3.Platform }, { token: i0.ElementRef }, { token: DOCUMENT, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: PdfComponent, selector: "pdf", inputs: { src: "src", pi: "pi", showAll: "showAll", renderText: "renderText", textLayerMode: "textLayerMode", showBorders: "showBorders", stickToPage: "stickToPage", originalSize: "originalSize", fitToPage: "fitToPage", zoom: "zoom", zoomScale: "zoomScale", rotation: "rotation", autoReSize: "autoReSize", externalLinkTarget: "externalLinkTarget", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "class.d-block": "true" } }, exportAs: ["pdf"], usesOnChanges: true, ngImport: i0, template: `
    <nz-skeleton *ngIf="!inited || loading"></nz-skeleton>
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `, isInline: true, components: [{ type: i4.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PdfComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'pdf',
                    exportAs: 'pdf',
                    template: `
    <nz-skeleton *ngIf="!inited || loading"></nz-skeleton>
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `,
                    host: {
                        '[class.d-block]': `true`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i1.AlainConfigService }, { type: i2.LazyService }, { type: i3.Platform }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { src: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkxRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFzQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7QUFFeEgsTUFBTSxTQUFTLEdBQVcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN0QyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFrQnZCLE1BQU0sT0FBTyxZQUFZO0lBNkd2QixZQUNVLE1BQWMsRUFDdEIsU0FBNkIsRUFDckIsT0FBb0IsRUFDcEIsUUFBa0IsRUFDbEIsR0FBNEIsRUFDRSxHQUFjLEVBQzVDLEdBQXNCO1FBTnRCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFZCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDRSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQzVDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUdoQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ1AsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ25DLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFLakIsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdDaEIsa0JBQWEsR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzFDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEMsY0FBUyxHQUFpQixZQUFZLENBQUM7UUFRdkIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQyx1QkFBa0IsR0FBMEIscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBRTlELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQTJDN0QsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUUsQ0FBQztRQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV6QixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pELENBQUM7SUEzRkQsSUFBYSxHQUFHLENBQUMsWUFBdUI7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdELElBQUksRUFBRSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBQ3dCLElBQUksT0FBTyxDQUFDLEdBQVk7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDd0IsSUFBSSxVQUFVLENBQUMsR0FBWTtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFNdUIsSUFBSSxJQUFJLENBQUMsR0FBVztRQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRXVCLElBQUksUUFBUSxDQUFDLEdBQVc7UUFDOUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDbkUsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQU1ELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN0RixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDdEUsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDaEYsQ0FBQztJQUVELElBQVksY0FBYztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUMxRSxDQUFDO0lBRUQsSUFBWSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQVksRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFnQixDQUFDO0lBQy9FLENBQUM7SUFrQk8sVUFBVSxDQUFDLEVBQVU7UUFDM0IsSUFBSSxFQUFFLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsT0FBTyxHQUFHLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sSUFBSSxDQUFDLElBQXdCLEVBQUUsR0FBb0I7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSTtZQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNkLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixHQUFHLEdBQUc7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyx5QkFBeUIsQ0FBQztRQUV2RixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR08sSUFBSTtRQUNWLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdFLFdBQVcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUEyQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEgsV0FBVyxDQUFDLE9BQTZCO2FBQ3ZDLElBQUksQ0FDSCxDQUFDLEdBQWMsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFDRCxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FDcEQ7YUFDQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHTyxRQUFRO1FBQ2QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxNQUFNO1FBQ1osTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxhQUFhLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHTyxVQUFVO1FBQ2hCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUU7WUFDMUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUMsTUFBTSxhQUFhLEdBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUTthQUNULENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFdkIsNEZBQTRGO1lBQzVGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDakYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakM7WUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxRQUFRLENBQUMsYUFBcUIsRUFBRSxjQUFzQjtRQUM1RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNuRCxNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUVyRCxJQUFJLGVBQWUsS0FBSyxDQUFDLElBQUksY0FBYyxLQUFLLENBQUMsSUFBSSxjQUFjLEtBQUssQ0FBQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDaEcsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0QixLQUFLLFVBQVU7Z0JBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsRUFBRSxjQUFjLEdBQUcsYUFBYSxDQUFDLENBQUM7Z0JBQ25GLE1BQU07WUFDUixLQUFLLGFBQWE7Z0JBQ2hCLEtBQUssR0FBRyxlQUFlLEdBQUcsY0FBYyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxZQUFZLENBQUM7WUFDbEI7Z0JBQ0UsS0FBSyxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUM7Z0JBQ3ZDLE1BQU07U0FDVDtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBR08sT0FBTztRQUNiLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUUvRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBYSxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFhLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQWEsRUFBRSxFQUFFO1lBQzVDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDNUIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQWEsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3pFLFFBQVE7U0FDVCxDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xGLFFBQVE7WUFDUixXQUFXO1NBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzFELFFBQVE7WUFDUixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDbEIsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNwQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEMsV0FBVztZQUNYLGNBQWM7U0FDZixDQUFDLENBQUMsQ0FBQztRQUNKLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzFFLFFBQVE7U0FDVCxDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQ25GLFFBQVE7WUFDUixXQUFXO1NBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RSxRQUFRO1lBQ1IsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2xCLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2xDLFdBQVc7WUFDWCxjQUFjO1NBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSixXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzNDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDUjtRQUNELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU87YUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLGtCQUFrQixDQUFDO2FBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsRUFBRSxHQUFHLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2FBQ3RGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxVQUFVO1FBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQzthQUMxQixJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzdCO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBcUQ7UUFDL0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzt5R0F4YVUsWUFBWSx1SkFtSEQsUUFBUTs2RkFuSG5CLFlBQVksbWhCQWJiOzs7OztHQUtUO0FBOENEO0lBREMsV0FBVyxFQUFFO3NDQU1iO0FBQ3dCO0lBQWYsWUFBWSxFQUFFOzJDQUd2QjtBQUN3QjtJQUFmLFlBQVksRUFBRTs4Q0FNdkI7QUFFd0I7SUFBZixZQUFZLEVBQUU7aURBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFO2lEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTtrREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7K0NBQW1CO0FBQ25CO0lBQWQsV0FBVyxFQUFFO3dDQUd0QjtBQUV1QjtJQUFkLFdBQVcsRUFBRTs0Q0FNdEI7QUFDd0I7SUFBZixZQUFZLEVBQUU7Z0RBQW1CO0FBRW5CO0lBQWQsV0FBVyxFQUFFOzJDQUFlO0FBcUZ0QztJQURDLFdBQVcsRUFBRTt3Q0F1Q2I7QUFHRDtJQURDLFdBQVcsRUFBRTs0Q0FXYjtBQW1DRDtJQURDLFdBQVcsRUFBRTs4Q0F1QmI7QUE4QkQ7SUFEQyxXQUFXLEVBQUU7MkNBV2I7MkZBblRVLFlBQVk7a0JBaEJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsTUFBTTtxQkFDMUI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBb0hJLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsUUFBUTs0RUFuRmpCLEdBQUc7c0JBQWYsS0FBSztnQkFNRixFQUFFO3NCQUZMLEtBQUs7Z0JBUXVCLE9BQU87c0JBQW5DLEtBQUs7Z0JBSXVCLFVBQVU7c0JBQXRDLEtBQUs7Z0JBT0csYUFBYTtzQkFBckIsS0FBSztnQkFDbUIsV0FBVztzQkFBbkMsS0FBSztnQkFDbUIsV0FBVztzQkFBbkMsS0FBSztnQkFDbUIsWUFBWTtzQkFBcEMsS0FBSztnQkFDbUIsU0FBUztzQkFBakMsS0FBSztnQkFDc0IsSUFBSTtzQkFBL0IsS0FBSztnQkFJRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNzQixRQUFRO3NCQUFuQyxLQUFLO2dCQU9tQixVQUFVO3NCQUFsQyxLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNO2dCQW9GQyxJQUFJLE1BeUNKLFFBQVEsTUE2Q1IsVUFBVSxNQW9EVixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBQREZfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3BkZi5jb25maWcnO1xuaW1wb3J0IHsgUGRmQ2hhbmdlRXZlbnQsIFBkZkNoYW5nZUV2ZW50VHlwZSwgUGRmRXh0ZXJuYWxMaW5rVGFyZ2V0LCBQZGZUZXh0TGF5ZXJNb2RlLCBQZGZab29tU2NhbGUgfSBmcm9tICcuL3BkZi50eXBlcyc7XG5cbmNvbnN0IENTU19VTklUUzogbnVtYmVyID0gOTYuMCAvIDcyLjA7XG5jb25zdCBCT1JERVJfV0lEVEggPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWluaXRlZCB8fCBsb2FkaW5nXCI+PC9uei1za2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwicGRmLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6IGB0cnVlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGRmQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0FsbFBhZ2VzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja1RvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3JpZ2luYWxTaXplOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXRUb1BhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVUZXh0TGF5ZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlbW92ZVBhZ2VCb3JkZXJzOiBCb29sZWFuSW5wdXQ7XG5cbiAgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsaWI6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wZGY6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBsb2FkaW5nVGFzazogTnpTYWZlQW55O1xuICBwcml2YXRlIF9zcmM6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBsYXN0U3JjOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BpID0gMTtcbiAgcHJpdmF0ZSBfdG90YWwgPSAwO1xuICBwcml2YXRlIF9zaG93QWxsID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcm90YXRpb24gPSAwO1xuICBwcml2YXRlIF96b29tID0gMTtcbiAgcHJpdmF0ZSBfcmVuZGVyVGV4dCA9IHRydWU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIG11bHRpUGFnZVZpZXdlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIG11bHRpUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyOiBOelNhZmVBbnk7XG5cbiAgQElucHV0KCkgc2V0IHNyYyhkYXRhT3JCdWZmZXI6IE56U2FmZUFueSkge1xuICAgIHRoaXMuX3NyYyA9IGRhdGFPckJ1ZmZlcjtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBzZXQgcGkodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9waSA9IHRoaXMuZ2V0VmFsaWRQaSh2YWwpO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci5zY3JvbGxQYWdlSW50b1ZpZXcoeyBwYWdlTnVtYmVyOiB0aGlzLl9waSB9KTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCBzaG93QWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBbGwgPSB2YWw7XG4gICAgdGhpcy5yZXNldERvYygpO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXQgcmVuZGVyVGV4dCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW5kZXJUZXh0ID0gdmFsO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci50ZXh0TGF5ZXJNb2RlID0gdGhpcy5fdGV4dExheWVyTW9kZTtcbiAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdGV4dExheWVyTW9kZTogUGRmVGV4dExheWVyTW9kZSA9IFBkZlRleHRMYXllck1vZGUuRU5BQkxFO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0JvcmRlcnMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN0aWNrVG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcmlnaW5hbFNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0VG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNldCB6b29tKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fem9vbSA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSB6b29tU2NhbGU6IFBkZlpvb21TY2FsZSA9ICdwYWdlLXdpZHRoJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHJvdGF0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAlIDkwICE9PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm90YXRpb24gYW5nbGUsIHNob3VsZSBiZSBkaXZpc2libGUgYnkgOTAuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JvdGF0aW9uID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvUmVTaXplID0gdHJ1ZTtcbiAgQElucHV0KCkgZXh0ZXJuYWxMaW5rVGFyZ2V0OiBQZGZFeHRlcm5hbExpbmtUYXJnZXQgPSBQZGZFeHRlcm5hbExpbmtUYXJnZXQuQkxBTks7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5OiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgZ2V0IHBkZigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wZGY7XG4gIH1cblxuICBnZXQgZmluZENvbnRyb2xsZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgOiB0aGlzLnNpbmdsZVBhZ2VGaW5kQ29udHJvbGxlcjtcbiAgfVxuXG4gIGdldCBwYWdlVmlld2VyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZVZpZXdlciA6IHRoaXMuc2luZ2xlUGFnZVZpZXdlcjtcbiAgfVxuXG4gIGdldCBsaW5rU2VydmljZSgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA6IHRoaXMuc2luZ2xlUGFnZUxpbmtTZXJ2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RleHRMYXllck1vZGUoKTogUGRmVGV4dExheWVyTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclRleHQgPyB0aGlzLnRleHRMYXllck1vZGUgOiBQZGZUZXh0TGF5ZXJNb2RlLkRJU0FCTEU7XG4gIH1cblxuICBwcml2YXRlIGdldCB3aW4oKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZGYtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLndpbi5wZGZqc0xpYi5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IGAke3RoaXMubGlifWJ1aWxkL3BkZi53b3JrZXIubWluLmpzYDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkKCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgc2V0TG9hZGluZyhzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHN0YXR1cztcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9zcmMgfSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmluaXRlZCB8fCAhX3NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RTcmMgPT09IF9zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBsb2FkaW5nVGFzayA9ICh0aGlzLmxvYWRpbmdUYXNrID0gdGhpcy53aW4ucGRmanNMaWIuZ2V0RG9jdW1lbnQoX3NyYykpO1xuICAgIGxvYWRpbmdUYXNrLm9uUHJvZ3Jlc3MgPSAocHJvZ3Jlc3M6IHsgbG9hZGVkOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfSkgPT4gdGhpcy5lbWl0KCdsb2FkLXByb2dyZXNzJywgeyBwcm9ncmVzcyB9KTtcbiAgICAobG9hZGluZ1Rhc2sucHJvbWlzZSBhcyBQcm9taXNlTGlrZTx2b2lkPilcbiAgICAgIC50aGVuKFxuICAgICAgICAocGRmOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9wZGYgPSBwZGY7XG4gICAgICAgICAgdGhpcy5sYXN0U3JjID0gX3NyYztcbiAgICAgICAgICB0aGlzLl90b3RhbCA9IHBkZi5udW1QYWdlcztcblxuICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMucGFnZVZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFBhZ2VWaWV3ZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlc2V0RG9jKCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBOelNhZmVBbnkpID0+IHRoaXMuZW1pdCgnZXJyb3InLCB7IGVycm9yIH0pXG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldExvYWRpbmcoZmFsc2UpKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgcmVzZXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIGlmICghcGRmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYW5Eb2MoKTtcblxuICAgIHRoaXMuZmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICB0aGlzLnBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICB0aGlzLmxpbmtTZXJ2aWNlLnNldERvY3VtZW50KHBkZiwgbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuRG9jKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZVZpZXdlci5zZXREb2N1bWVudChudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFZpZXdlciA9IHRoaXMucGFnZVZpZXdlcjtcbiAgICBpZiAoIWN1cnJlbnRWaWV3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm90YXRpb24gIT09IDAgfHwgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uICE9PSB0aGlzLl9yb3RhdGlvbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHRoaXMuX3JvdGF0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2tUb1BhZ2UpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50Vmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIHRoaXMuX3BkZi5nZXRQYWdlKGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpLnRoZW4oKHBhZ2U6IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3QgeyBfcm90YXRpb24sIF96b29tIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBfcm90YXRpb24gfHwgcGFnZS5yb3RhdGU7XG4gICAgICBjb25zdCB2aWV3cG9ydFdpZHRoID1cbiAgICAgICAgcGFnZS5nZXRWaWV3cG9ydCh7XG4gICAgICAgICAgc2NhbGU6IF96b29tLFxuICAgICAgICAgIHJvdGF0aW9uXG4gICAgICAgIH0pLndpZHRoICogQ1NTX1VOSVRTO1xuICAgICAgbGV0IHNjYWxlID0gX3pvb207XG4gICAgICBsZXQgc3RpY2tUb1BhZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBTY2FsZSB0aGUgZG9jdW1lbnQgd2hlbiBpdCBzaG91bGRuJ3QgYmUgaW4gb3JpZ2luYWwgc2l6ZSBvciBkb2Vzbid0IGZpdCBpbnRvIHRoZSB2aWV3cG9ydFxuICAgICAgaWYgKCF0aGlzLm9yaWdpbmFsU2l6ZSB8fCAodGhpcy5maXRUb1BhZ2UgJiYgdmlld3BvcnRXaWR0aCA+IHRoaXMuZWwuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0ID0gcGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiAxLCByb3RhdGlvbiB9KTtcbiAgICAgICAgc2NhbGUgPSB0aGlzLmdldFNjYWxlKHZpZXdQb3J0LndpZHRoLCB2aWV3UG9ydC5oZWlnaHQpO1xuICAgICAgICBzdGlja1RvUGFnZSA9ICF0aGlzLnN0aWNrVG9QYWdlO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50Vmlld2VyLl9zZXRTY2FsZShzY2FsZSwgc3RpY2tUb1BhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY2FsZSh2aWV3cG9ydFdpZHRoOiBudW1iZXIsIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnNob3dCb3JkZXJzID8gMiAqIEJPUkRFUl9XSURUSCA6IDA7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gZWwuY2xpZW50V2lkdGggLSBib3JkZXJTaXplO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGVsLmNsaWVudEhlaWdodCAtIGJvcmRlclNpemU7XG5cbiAgICBpZiAoY29udGFpbmVySGVpZ2h0ID09PSAwIHx8IHZpZXdwb3J0SGVpZ2h0ID09PSAwIHx8IGNvbnRhaW5lcldpZHRoID09PSAwIHx8IHZpZXdwb3J0V2lkdGggPT09IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGxldCByYXRpbyA9IDE7XG4gICAgc3dpdGNoICh0aGlzLnpvb21TY2FsZSkge1xuICAgICAgY2FzZSAncGFnZS1maXQnOlxuICAgICAgICByYXRpbyA9IE1hdGgubWluKGNvbnRhaW5lckhlaWdodCAvIHZpZXdwb3J0SGVpZ2h0LCBjb250YWluZXJXaWR0aCAvIHZpZXdwb3J0V2lkdGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhZ2UtaGVpZ2h0JzpcbiAgICAgICAgcmF0aW8gPSBjb250YWluZXJIZWlnaHQgLyB2aWV3cG9ydEhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlLXdpZHRoJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJhdGlvID0gY29udGFpbmVyV2lkdGggLyB2aWV3cG9ydFdpZHRoO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMuX3pvb20gKiByYXRpbykgLyBDU1NfVU5JVFM7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBsb2FkaW5nVGFzayB9ID0gdGhpcztcbiAgICBpZiAobG9hZGluZ1Rhc2sgJiYgIWxvYWRpbmdUYXNrLmRlc3Ryb3llZCkge1xuICAgICAgbG9hZGluZ1Rhc2suZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGRmKSB7XG4gICAgICB0aGlzLl9wZGYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fcGRmID0gbnVsbDtcbiAgICAgIHRoaXMuY2xlYW5Eb2MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICB0aGlzLndpbi5wZGZqc0xpYi5kaXNhYmxlVGV4dExheWVyID0gIXRoaXMuX3JlbmRlclRleHQ7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuZXh0ZXJuYWxMaW5rVGFyZ2V0ID0gdGhpcy5leHRlcm5hbExpbmtUYXJnZXQ7XG5cbiAgICB0aGlzLnNldHVwTXVsdGlQYWdlVmlld2VyKCk7XG4gICAgdGhpcy5zZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRCdXMoKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBldmVudEJ1cyA9IG5ldyB0aGlzLndpbi5wZGZqc1ZpZXdlci5FdmVudEJ1cygpO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlc2luaXRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlcy1pbml0JywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZXJlbmRlcmVkYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgncGFnZS1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VjaGFuZ2luZ2AsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICBjb25zdCBub3dQaSA9IGV2LnBhZ2VOdW1iZXI7XG4gICAgICBpZiAobm93UGkgIT09IHRoaXMuX3BpKSB7XG4gICAgICAgIHRoaXMuX3BpID0gbm93UGk7XG4gICAgICAgIHRoaXMuZW1pdCgncGknLCB7IGV2IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGB0ZXh0bGF5ZXJyZW5kZXJlZGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3RleHQtbGF5ZXItcmVuZGVyZWQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudEJ1cztcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBNdWx0aVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gdGhpcy53aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1c1xuICAgIH0pKTtcbiAgICBjb25zdCBmaW5kQ29udHJvbGxlciA9ICh0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlXG4gICAgfSkpO1xuXG4gICAgY29uc3Qgdmlld2VyID0gKHRoaXMubXVsdGlQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlclxuICAgIH0pKTtcbiAgICBsaW5rU2VydmljZS5zZXRWaWV3ZXIodmlld2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IFZJRVdFUiA9IHRoaXMud2luLnBkZmpzVmlld2VyO1xuXG4gICAgY29uc3QgZXZlbnRCdXMgPSB0aGlzLmNyZWF0ZUV2ZW50QnVzKCk7XG4gICAgY29uc3QgbGlua1NlcnZpY2UgPSAodGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2UgPSBuZXcgVklFV0VSLlBERkxpbmtTZXJ2aWNlKHtcbiAgICAgIGV2ZW50QnVzXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlXG4gICAgfSkpO1xuXG4gICAgY29uc3QgcGFnZVZpZXdlciA9ICh0aGlzLnNpbmdsZVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlNpbmdsZVBhZ2VWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlclxuICAgIH0pKTtcbiAgICBsaW5rU2VydmljZS5zZXRWaWV3ZXIocGFnZVZpZXdlcik7XG4gICAgcGFnZVZpZXdlci5fY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLndpbi5wZGZqc0xpYikge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBsaWIgfSA9IHRoaXM7XG4gICAgdGhpcy5sYXp5U3J2XG4gICAgICAubG9hZChgJHtsaWJ9YnVpbGQvcGRmLm1pbi5qc2ApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenlTcnYubG9hZChbYCR7bGlifXdlYi9wZGZfdmlld2VyLmpzYCwgYCR7bGlifXdlYi9wZGZfdmlld2VyLmNzc2BdKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0UmVzaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzaXplKCk6IHZvaWQge1xuICAgIGZyb21FdmVudCh0aGlzLndpbiwgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmF1dG9SZVNpemUgJiYgdGhpcy5fcGRmKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIFBkZkNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCAmJiAhY2hhbmdlcy5zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=