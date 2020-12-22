/**
 * @fileoverview added by tsickle
 * Generated from: pdf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputBoolean, InputNumber, LazyService } from '@delon/util';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
/** @type {?} */
const CSS_UNITS = 96.0 / 72.0;
/** @type {?} */
const BORDER_WIDTH = 9;
export class PdfComponent {
    /**
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} lazySrv
     * @param {?} platform
     * @param {?} el
     * @param {?} doc
     */
    constructor(ngZone, configSrv, lazySrv, platform, el, doc) {
        this.ngZone = ngZone;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.el = el;
        this.doc = doc;
        this.inited = false;
        this.unsubscribe$ = new Subject();
        this.lib = '';
        this._pi = 1;
        this._total = 0;
        this._showAll = true;
        this._rotation = 0;
        this._zoom = 1;
        this._renderText = true;
        this.textLayerMode = PdfTextLayerMode.ENABLE;
        this.showBorders = false;
        this.stickToPage = false;
        this.originalSize = true;
        this.fitToPage = false;
        this.zoomScale = 'page-width';
        this.autoReSize = true;
        this.externalLinkTarget = PdfExternalLinkTarget.BLANK;
        this.change = new EventEmitter();
        /** @type {?} */
        const cog = (/** @type {?} */ (configSrv.merge('pdf', PDF_DEFULAT_CONFIG)));
        Object.assign(this, cog);
        /** @type {?} */
        const lib = (/** @type {?} */ (cog.lib));
        this.lib = lib.endsWith('/') ? lib : `${lib}/`;
    }
    /**
     * @param {?} dataOrBuffer
     * @return {?}
     */
    set src(dataOrBuffer) {
        this._src = dataOrBuffer;
        this.load();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set pi(val) {
        this._pi = this.getValidPi(val);
        if (this._pdf) {
            this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set showAll(val) {
        this._showAll = val;
        this.resetDoc();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set renderText(val) {
        this._renderText = val;
        if (this._pdf) {
            this.pageViewer.textLayerMode = this._textLayerMode;
            this.resetDoc();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set zoom(val) {
        if (val <= 0)
            return;
        this._zoom = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rotation(val) {
        if (val % 90 !== 0) {
            console.warn(`Invalid rotation angle, shoule be divisible by 90.`);
            return;
        }
        this._rotation = val;
    }
    /**
     * @return {?}
     */
    get pdf() {
        return this._pdf;
    }
    /**
     * @return {?}
     */
    get findController() {
        return this._showAll ? this.multiPageFindController : this.singlePageFindController;
    }
    /**
     * @return {?}
     */
    get pageViewer() {
        return this._showAll ? this.multiPageViewer : this.singlePageViewer;
    }
    /**
     * @return {?}
     */
    get linkService() {
        return this._showAll ? this.multiPageLinkService : this.singlePageLinkService;
    }
    /**
     * @private
     * @return {?}
     */
    get _textLayerMode() {
        return this._renderText ? this.textLayerMode : PdfTextLayerMode.DISABLE;
    }
    /**
     * @private
     * @return {?}
     */
    get win() {
        return this.doc.defaultView || window;
    }
    /**
     * @private
     * @param {?} pi
     * @return {?}
     */
    getValidPi(pi) {
        if (pi < 1)
            return 1;
        /** @type {?} */
        const pdf = this._pdf;
        return pdf && pi > pdf.numPages ? pdf.numPages : pi;
    }
    /**
     * @private
     * @param {?} type
     * @param {?=} opt
     * @return {?}
     */
    emit(type, opt) {
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.change.emit(Object.assign({ type, pdf: this._pdf, pi: this._pi, total: this._total }, opt))));
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        this.inited = true;
        this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;
        setTimeout((/**
         * @return {?}
         */
        () => this.load()), this.delay);
    }
    /**
     * @private
     * @return {?}
     */
    load() {
        const { _src } = this;
        if (!this.inited || !_src) {
            return;
        }
        if (this.lastSrc === _src) {
            this.render();
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.destroy();
            /** @type {?} */
            const loadingTask = (this.loadingTask = this.win.pdfjsLib.getDocument(_src));
            loadingTask.onProgress = (/**
             * @param {?} progress
             * @return {?}
             */
            (progress) => this.emit('load-progress', { progress }));
            loadingTask.promise.then((/**
             * @param {?} pdf
             * @return {?}
             */
            (pdf) => {
                this._pdf = pdf;
                this.lastSrc = _src;
                this._total = pdf.numPages;
                this.emit('loaded');
                if (!this.pageViewer) {
                    this.setupPageViewer();
                }
                this.resetDoc();
                this.render();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => this.emit('error', { error })));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    resetDoc() {
        /** @type {?} */
        const pdf = this._pdf;
        if (!pdf) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.cleanDoc();
            this.findController.setDocument(pdf);
            this.pageViewer.setDocument(pdf);
            this.linkService.setDocument(pdf, null);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    cleanDoc() {
        this.multiPageViewer.setDocument(null);
        this.singlePageViewer.setDocument(null);
        this.multiPageLinkService.setDocument(null, null);
        this.singlePageLinkService.setDocument(null, null);
        this.multiPageFindController.setDocument(null);
        this.singlePageFindController.setDocument(null);
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        /** @type {?} */
        const currentViewer = this.pageViewer;
        if (!currentViewer) {
            return;
        }
        if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                currentViewer.pagesRotation = this._rotation;
            }));
        }
        if (this.stickToPage) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                currentViewer.currentPageNumber = this._pi;
            }));
        }
        this.updateSize();
    }
    /**
     * @private
     * @return {?}
     */
    updateSize() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const currentViewer = this.pageViewer;
            this._pdf.getPage(currentViewer.currentPageNumber).then((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                const { _rotation, _zoom } = this;
                /** @type {?} */
                const rotation = _rotation || page.rotate;
                /** @type {?} */
                const viewportWidth = page.getViewport({
                    scale: _zoom,
                    rotation,
                }).width * CSS_UNITS;
                /** @type {?} */
                let scale = _zoom;
                /** @type {?} */
                let stickToPage = true;
                // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
                if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.nativeElement.clientWidth)) {
                    /** @type {?} */
                    const viewPort = page.getViewport({ scale: 1, rotation });
                    scale = this.getScale(viewPort.width, viewPort.height);
                    stickToPage = !this.stickToPage;
                }
                currentViewer._setScale(scale, stickToPage);
            }));
        }));
    }
    /**
     * @private
     * @param {?} viewportWidth
     * @param {?} viewportHeight
     * @return {?}
     */
    getScale(viewportWidth, viewportHeight) {
        /** @type {?} */
        const borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
        /** @type {?} */
        const el = this.el.nativeElement;
        /** @type {?} */
        const containerWidth = el.clientWidth - borderSize;
        /** @type {?} */
        const containerHeight = el.clientHeight - borderSize;
        if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
            return 1;
        }
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    destroy() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            const { loadingTask } = this;
            if (loadingTask && !loadingTask.destroyed) {
                loadingTask.destroy();
            }
            if (this._pdf) {
                this._pdf.destroy();
                this._pdf = null;
                this.cleanDoc();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setupPageViewer() {
        this.win.pdfjsLib.disableTextLayer = !this._renderText;
        this.win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;
        this.setupMultiPageViewer();
        this.setupSinglePageViewer();
    }
    /**
     * @private
     * @return {?}
     */
    createEventBus() {
        /** @type {?} */
        const eventBus = new this.win.pdfjsViewer.EventBus();
        eventBus.on(`pagesinit`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.emit('pages-init', { ev });
        }));
        eventBus.on(`pagerendered`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.emit('page-rendered', { ev });
        }));
        eventBus.on(`pagechanging`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const nowPi = ev.pageNumber;
            if (nowPi !== this._pi) {
                this._pi = nowPi;
                this.emit('pi', { ev });
            }
        }));
        eventBus.on(`textlayerrendered`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.emit('text-layer-rendered', { ev });
        }));
        return eventBus;
    }
    /**
     * @private
     * @return {?}
     */
    setupMultiPageViewer() {
        /** @type {?} */
        const VIEWER = this.win.pdfjsViewer;
        /** @type {?} */
        const eventBus = this.createEventBus();
        /** @type {?} */
        const linkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
            eventBus,
        }));
        /** @type {?} */
        const findController = (this.multiPageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService,
        }));
        /** @type {?} */
        const viewer = (this.multiPageViewer = new VIEWER.PDFViewer({
            eventBus,
            container: this.el.nativeElement,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController,
        }));
        linkService.setViewer(viewer);
    }
    /**
     * @private
     * @return {?}
     */
    setupSinglePageViewer() {
        /** @type {?} */
        const VIEWER = this.win.pdfjsViewer;
        /** @type {?} */
        const eventBus = this.createEventBus();
        /** @type {?} */
        const linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
            eventBus,
        }));
        /** @type {?} */
        const findController = (this.singlePageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService,
        }));
        /** @type {?} */
        const pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
            eventBus,
            container: this.el.nativeElement,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController,
        }));
        linkService.setViewer(pageViewer);
        pageViewer._currentPageNumber = this._pi;
    }
    /**
     * @return {?}
     */
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
            .then((/**
         * @return {?}
         */
        () => this.lazySrv.load([`${lib}web/pdf_viewer.js`, `${lib}web/pdf_viewer.css`])))
            .then((/**
         * @return {?}
         */
        () => this.initDelay()));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.initResize()));
    }
    /**
     * @private
     * @return {?}
     */
    initResize() {
        fromEvent(this.win, 'resize')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        () => this.autoReSize && this._pdf)), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateSize()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.inited && !changes.src) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.destroy();
    }
}
PdfComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf',
                exportAs: 'pdf',
                template: `
    <nz-skeleton *ngIf="!inited"></nz-skeleton>
    <div class="pdfViewer"></div>
  `,
                host: {
                    '[class.pdf-container]': `true`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
PdfComponent.ctorParameters = () => [
    { type: NgZone },
    { type: AlainConfigService },
    { type: LazyService },
    { type: Platform },
    { type: ElementRef },
    { type: Document, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
PdfComponent.propDecorators = {
    src: [{ type: Input }],
    pi: [{ type: Input }],
    showAll: [{ type: Input }],
    renderText: [{ type: Input }],
    textLayerMode: [{ type: Input }],
    showBorders: [{ type: Input }],
    stickToPage: [{ type: Input }],
    originalSize: [{ type: Input }],
    fitToPage: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomScale: [{ type: Input }],
    rotation: [{ type: Input }],
    autoReSize: [{ type: Input }],
    externalLinkTarget: [{ type: Input }],
    delay: [{ type: Input }],
    change: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PdfComponent.prototype, "pi", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PdfComponent.prototype, "showAll", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PdfComponent.prototype, "renderText", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "showBorders", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "stickToPage", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "originalSize", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "fitToPage", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PdfComponent.prototype, "zoom", null);
__decorate([
    InputNumber(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PdfComponent.prototype, "rotation", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "autoReSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], PdfComponent.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    PdfComponent.ngAcceptInputType_pi;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_delay;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_showAllPages;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_stickToPage;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_originalSize;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_fitToPage;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_disableTextLayer;
    /** @type {?} */
    PdfComponent.ngAcceptInputType_removePageBorders;
    /** @type {?} */
    PdfComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.lib;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._pdf;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.loadingTask;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._src;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.lastSrc;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._pi;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._total;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._showAll;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._rotation;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._zoom;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype._renderText;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.multiPageViewer;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.multiPageLinkService;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.multiPageFindController;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.singlePageViewer;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.singlePageLinkService;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.singlePageFindController;
    /** @type {?} */
    PdfComponent.prototype.textLayerMode;
    /** @type {?} */
    PdfComponent.prototype.showBorders;
    /** @type {?} */
    PdfComponent.prototype.stickToPage;
    /** @type {?} */
    PdfComponent.prototype.originalSize;
    /** @type {?} */
    PdfComponent.prototype.fitToPage;
    /** @type {?} */
    PdfComponent.prototype.zoomScale;
    /** @type {?} */
    PdfComponent.prototype.autoReSize;
    /** @type {?} */
    PdfComponent.prototype.externalLinkTarget;
    /** @type {?} */
    PdfComponent.prototype.delay;
    /** @type {?} */
    PdfComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.lazySrv;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcGRmLyIsInNvdXJjZXMiOlsicGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFFTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUVwSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFzQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxhQUFhLENBQUM7O01BRWxILFNBQVMsR0FBVyxJQUFJLEdBQUcsSUFBSTs7TUFDL0IsWUFBWSxHQUFXLENBQUM7QUFnQjlCLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7SUFvR3ZCLFlBQ1UsTUFBYyxFQUN0QixTQUE2QixFQUNyQixPQUFvQixFQUNwQixRQUFrQixFQUNsQixFQUEyQixFQUNHLEdBQWE7UUFMM0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVkLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixP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Qyw0Q0FBd0M7Ozs7O0lBQ3hDLCtDQUEyQzs7Ozs7SUFDM0Msd0NBQW9DOzs7OztJQUNwQyw2Q0FBeUM7Ozs7O0lBQ3pDLGdEQUE0Qzs7SUF5QjVDLHFDQUFtRTs7SUFDbkUsbUNBQTZDOztJQUM3QyxtQ0FBNkM7O0lBQzdDLG9DQUE2Qzs7SUFDN0MsaUNBQTJDOztJQUszQyxpQ0FBZ0Q7O0lBUWhELGtDQUEyQzs7SUFDM0MsMENBQWlGOztJQUNqRiw2QkFBc0M7O0lBQ3RDLDhCQUErRDs7Ozs7SUEyQjdELDhCQUFzQjs7Ozs7SUFFdEIsK0JBQTRCOzs7OztJQUM1QixnQ0FBMEI7Ozs7O0lBQzFCLDBCQUFtQzs7Ozs7SUFDbkMsMkJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBMYXp5U2VydmljZSwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUERGX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9wZGYuY29uZmlnJztcbmltcG9ydCB7IFBkZkNoYW5nZUV2ZW50LCBQZGZDaGFuZ2VFdmVudFR5cGUsIFBkZkV4dGVybmFsTGlua1RhcmdldCwgUGRmVGV4dExheWVyTW9kZSwgUGRmWm9vbVNjYWxlIH0gZnJvbSAnLi9wZGYudHlwZXMnO1xuXG5jb25zdCBDU1NfVU5JVFM6IG51bWJlciA9IDk2LjAgLyA3Mi4wO1xuY29uc3QgQk9SREVSX1dJRFRIOiBudW1iZXIgPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWluaXRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5wZGYtY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93QWxsUGFnZXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNrVG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vcmlnaW5hbFNpemU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdFRvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZVRleHRMYXllcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZlUGFnZUJvcmRlcnM6IEJvb2xlYW5JbnB1dDtcblxuICBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxpYjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BkZjogTnpTYWZlQW55O1xuICBwcml2YXRlIGxvYWRpbmdUYXNrOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgX3NyYzogTnpTYWZlQW55O1xuICBwcml2YXRlIGxhc3RTcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGkgPSAxO1xuICBwcml2YXRlIF90b3RhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dBbGwgPSB0cnVlO1xuICBwcml2YXRlIF9yb3RhdGlvbiA9IDA7XG4gIHByaXZhdGUgX3pvb20gPSAxO1xuICBwcml2YXRlIF9yZW5kZXJUZXh0ID0gdHJ1ZTtcblxuICBwcml2YXRlIG11bHRpUGFnZVZpZXdlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIG11bHRpUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyOiBOelNhZmVBbnk7XG5cbiAgQElucHV0KCkgc2V0IHNyYyhkYXRhT3JCdWZmZXI6IE56U2FmZUFueSkge1xuICAgIHRoaXMuX3NyYyA9IGRhdGFPckJ1ZmZlcjtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBzZXQgcGkodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9waSA9IHRoaXMuZ2V0VmFsaWRQaSh2YWwpO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci5zY3JvbGxQYWdlSW50b1ZpZXcoeyBwYWdlTnVtYmVyOiB0aGlzLl9waSB9KTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCBzaG93QWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBbGwgPSB2YWw7XG4gICAgdGhpcy5yZXNldERvYygpO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXQgcmVuZGVyVGV4dCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW5kZXJUZXh0ID0gdmFsO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci50ZXh0TGF5ZXJNb2RlID0gdGhpcy5fdGV4dExheWVyTW9kZTtcbiAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdGV4dExheWVyTW9kZTogUGRmVGV4dExheWVyTW9kZSA9IFBkZlRleHRMYXllck1vZGUuRU5BQkxFO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0JvcmRlcnMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN0aWNrVG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcmlnaW5hbFNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0VG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNldCB6b29tKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fem9vbSA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSB6b29tU2NhbGU6IFBkZlpvb21TY2FsZSA9ICdwYWdlLXdpZHRoJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHJvdGF0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAlIDkwICE9PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm90YXRpb24gYW5nbGUsIHNob3VsZSBiZSBkaXZpc2libGUgYnkgOTAuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JvdGF0aW9uID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvUmVTaXplID0gdHJ1ZTtcbiAgQElucHV0KCkgZXh0ZXJuYWxMaW5rVGFyZ2V0OiBQZGZFeHRlcm5hbExpbmtUYXJnZXQgPSBQZGZFeHRlcm5hbExpbmtUYXJnZXQuQkxBTks7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5OiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBwZGYoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGRmO1xuICB9XG5cbiAgZ2V0IGZpbmRDb250cm9sbGVyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyIDogdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXI7XG4gIH1cblxuICBnZXQgcGFnZVZpZXdlcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VWaWV3ZXIgOiB0aGlzLnNpbmdsZVBhZ2VWaWV3ZXI7XG4gIH1cblxuICBnZXQgbGlua1NlcnZpY2UoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2UgOiB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90ZXh0TGF5ZXJNb2RlKCk6IFBkZlRleHRMYXllck1vZGUge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0ID8gdGhpcy50ZXh0TGF5ZXJNb2RlIDogUGRmVGV4dExheWVyTW9kZS5ESVNBQkxFO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgd2luKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogRG9jdW1lbnQsXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMgPSBgJHt0aGlzLmxpYn1idWlsZC9wZGYud29ya2VyLm1pbi5qc2A7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9zcmMgfSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmluaXRlZCB8fCAhX3NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RTcmMgPT09IF9zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBjb25zdCBsb2FkaW5nVGFzayA9ICh0aGlzLmxvYWRpbmdUYXNrID0gdGhpcy53aW4ucGRmanNMaWIuZ2V0RG9jdW1lbnQoX3NyYykpO1xuICAgICAgbG9hZGluZ1Rhc2sub25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBsb2FkZWQ6IG51bWJlcjsgdG90YWw6IG51bWJlciB9KSA9PiB0aGlzLmVtaXQoJ2xvYWQtcHJvZ3Jlc3MnLCB7IHByb2dyZXNzIH0pO1xuICAgICAgbG9hZGluZ1Rhc2sucHJvbWlzZS50aGVuKFxuICAgICAgICAocGRmOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9wZGYgPSBwZGY7XG4gICAgICAgICAgdGhpcy5sYXN0U3JjID0gX3NyYztcbiAgICAgICAgICB0aGlzLl90b3RhbCA9IHBkZi5udW1QYWdlcztcblxuICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMucGFnZVZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFBhZ2VWaWV3ZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlc2V0RG9jKCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBOelNhZmVBbnkpID0+IHRoaXMuZW1pdCgnZXJyb3InLCB7IGVycm9yIH0pLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIGlmICghcGRmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYW5Eb2MoKTtcblxuICAgICAgdGhpcy5maW5kQ29udHJvbGxlci5zZXREb2N1bWVudChwZGYpO1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNldERvY3VtZW50KHBkZik7XG4gICAgICB0aGlzLmxpbmtTZXJ2aWNlLnNldERvY3VtZW50KHBkZiwgbnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuRG9jKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZVZpZXdlci5zZXREb2N1bWVudChudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFZpZXdlciA9IHRoaXMucGFnZVZpZXdlcjtcbiAgICBpZiAoIWN1cnJlbnRWaWV3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm90YXRpb24gIT09IDAgfHwgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uICE9PSB0aGlzLl9yb3RhdGlvbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHRoaXMuX3JvdGF0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2tUb1BhZ2UpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50Vmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgICAgdGhpcy5fcGRmLmdldFBhZ2UoY3VycmVudFZpZXdlci5jdXJyZW50UGFnZU51bWJlcikudGhlbigocGFnZTogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgX3JvdGF0aW9uLCBfem9vbSB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBfcm90YXRpb24gfHwgcGFnZS5yb3RhdGU7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPVxuICAgICAgICAgIHBhZ2UuZ2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgc2NhbGU6IF96b29tLFxuICAgICAgICAgICAgcm90YXRpb24sXG4gICAgICAgICAgfSkud2lkdGggKiBDU1NfVU5JVFM7XG4gICAgICAgIGxldCBzY2FsZSA9IF96b29tO1xuICAgICAgICBsZXQgc3RpY2tUb1BhZ2UgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNjYWxlIHRoZSBkb2N1bWVudCB3aGVuIGl0IHNob3VsZG4ndCBiZSBpbiBvcmlnaW5hbCBzaXplIG9yIGRvZXNuJ3QgZml0IGludG8gdGhlIHZpZXdwb3J0XG4gICAgICAgIGlmICghdGhpcy5vcmlnaW5hbFNpemUgfHwgKHRoaXMuZml0VG9QYWdlICYmIHZpZXdwb3J0V2lkdGggPiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEsIHJvdGF0aW9uIH0pO1xuICAgICAgICAgIHNjYWxlID0gdGhpcy5nZXRTY2FsZSh2aWV3UG9ydC53aWR0aCwgdmlld1BvcnQuaGVpZ2h0KTtcbiAgICAgICAgICBzdGlja1RvUGFnZSA9ICF0aGlzLnN0aWNrVG9QYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFZpZXdlci5fc2V0U2NhbGUoc2NhbGUsIHN0aWNrVG9QYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY2FsZSh2aWV3cG9ydFdpZHRoOiBudW1iZXIsIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnNob3dCb3JkZXJzID8gMiAqIEJPUkRFUl9XSURUSCA6IDA7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBlbC5jbGllbnRXaWR0aCAtIGJvcmRlclNpemU7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0IC0gYm9yZGVyU2l6ZTtcblxuICAgIGlmIChjb250YWluZXJIZWlnaHQgPT09IDAgfHwgdmlld3BvcnRIZWlnaHQgPT09IDAgfHwgY29udGFpbmVyV2lkdGggPT09IDAgfHwgdmlld3BvcnRXaWR0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gMTtcbiAgICBzd2l0Y2ggKHRoaXMuem9vbVNjYWxlKSB7XG4gICAgICBjYXNlICdwYWdlLWZpdCc6XG4gICAgICAgIHJhdGlvID0gTWF0aC5taW4oY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQsIGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS1oZWlnaHQnOlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lckhlaWdodCAvIHZpZXdwb3J0SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhZ2Utd2lkdGgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmF0aW8gPSBjb250YWluZXJXaWR0aCAvIHZpZXdwb3J0V2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fem9vbSAqIHJhdGlvKSAvIENTU19VTklUUztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB7IGxvYWRpbmdUYXNrIH0gPSB0aGlzO1xuICAgICAgaWYgKGxvYWRpbmdUYXNrICYmICFsb2FkaW5nVGFzay5kZXN0cm95ZWQpIHtcbiAgICAgICAgbG9hZGluZ1Rhc2suZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgICB0aGlzLl9wZGYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9wZGYgPSBudWxsO1xuICAgICAgICB0aGlzLmNsZWFuRG9jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICB0aGlzLndpbi5wZGZqc0xpYi5kaXNhYmxlVGV4dExheWVyID0gIXRoaXMuX3JlbmRlclRleHQ7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuZXh0ZXJuYWxMaW5rVGFyZ2V0ID0gdGhpcy5leHRlcm5hbExpbmtUYXJnZXQ7XG5cbiAgICB0aGlzLnNldHVwTXVsdGlQYWdlVmlld2VyKCk7XG4gICAgdGhpcy5zZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRCdXMoKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBldmVudEJ1cyA9IG5ldyB0aGlzLndpbi5wZGZqc1ZpZXdlci5FdmVudEJ1cygpO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlc2luaXRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlcy1pbml0JywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZXJlbmRlcmVkYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgncGFnZS1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VjaGFuZ2luZ2AsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICBjb25zdCBub3dQaSA9IGV2LnBhZ2VOdW1iZXI7XG4gICAgICBpZiAobm93UGkgIT09IHRoaXMuX3BpKSB7XG4gICAgICAgIHRoaXMuX3BpID0gbm93UGk7XG4gICAgICAgIHRoaXMuZW1pdCgncGknLCB7IGV2IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGB0ZXh0bGF5ZXJyZW5kZXJlZGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3RleHQtbGF5ZXItcmVuZGVyZWQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudEJ1cztcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBNdWx0aVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gdGhpcy53aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1cyxcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXIgPSAodGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSAodGhpcy5tdWx0aVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXIsXG4gICAgfSkpO1xuICAgIGxpbmtTZXJ2aWNlLnNldFZpZXdlcih2aWV3ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gdGhpcy53aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHBhZ2VWaWV3ZXIgPSAodGhpcy5zaW5nbGVQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZTaW5nbGVQYWdlVmlld2VyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlcixcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHBhZ2VWaWV3ZXIpO1xuICAgIHBhZ2VWaWV3ZXIuX2N1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aW4ucGRmanNMaWIpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbGliIH0gPSB0aGlzO1xuICAgIHRoaXMubGF6eVNydlxuICAgICAgLmxvYWQoYCR7bGlifWJ1aWxkL3BkZi5taW4uanNgKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5U3J2LmxvYWQoW2Ake2xpYn13ZWIvcGRmX3ZpZXdlci5qc2AsIGAke2xpYn13ZWIvcGRmX3ZpZXdlci5jc3NgXSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuaW5pdFJlc2l6ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmcm9tRXZlbnQodGhpcy53aW4sICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVTaXplICYmIHRoaXMuX3BkZiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgUGRmQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkICYmICFjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==