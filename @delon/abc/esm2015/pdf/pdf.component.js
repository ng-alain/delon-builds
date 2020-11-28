/**
 * @fileoverview added by tsickle
 * Generated from: pdf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputBoolean, InputNumber, LazyService } from '@delon/util';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
/** @type {?} */
const win = window;
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
     */
    constructor(ngZone, configSrv, lazySrv, platform, el) {
        this.ngZone = ngZone;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.el = el;
        this.unsubscribe$ = new Subject();
        this.lib = '';
        this.inited = false;
        this._pi = 1;
        this._total = 0;
        this._showAllPages = true;
        this._rotation = 0;
        this._zoom = 1;
        this._disableTextLayer = false;
        this.removePageBorders = true;
        this.stickToPage = false;
        this.originalSize = true;
        this.zoomScale = 'page-width';
        this.fitToPage = false;
        this.textLayerMode = PdfTextLayerMode.ENABLE;
        this.externalLinkTarget = PdfExternalLinkTarget.BLANK;
        this.autoresize = true;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.cog = (/** @type {?} */ (configSrv.merge('pdf', PDF_DEFULAT_CONFIG)));
        Object.assign(this, this.cog);
        /** @type {?} */
        const lib = (/** @type {?} */ (this.cog.lib));
        this.lib = lib.endsWith('/') ? lib : `${lib}/`;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set src(data) {
        this._src = data;
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
    set showAllPages(val) {
        this._showAllPages = val;
        this.resetDoc();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disableTextLayer(val) {
        this._disableTextLayer = val;
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
        return this._showAllPages ? this.multiPageFindController : this.singlePageFindController;
    }
    /**
     * @return {?}
     */
    get pageViewer() {
        return this._showAllPages ? this.multiPageViewer : this.singlePageViewer;
    }
    /**
     * @return {?}
     */
    get linkService() {
        return this._showAllPages ? this.multiPageLinkService : this.singlePageLinkService;
    }
    /**
     * @private
     * @return {?}
     */
    get _textLayerMode() {
        return this._disableTextLayer ? PdfTextLayerMode.DISABLE : this.textLayerMode;
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
        win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;
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
            const loadingTask = (this.loadingTask = win.pdfjsLib.getDocument(_src));
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
    }
    /**
     * @private
     * @param {?} viewportWidth
     * @param {?} viewportHeight
     * @return {?}
     */
    getScale(viewportWidth, viewportHeight) {
        /** @type {?} */
        const borderSize = !this.removePageBorders ? 2 * BORDER_WIDTH : 0;
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
        win.pdfjsLib.disableTextLayer = this._disableTextLayer;
        win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;
        this.setupMultiPageViewer();
        this.setupSinglePageViewer();
    }
    /**
     * @private
     * @return {?}
     */
    createEventBus() {
        /** @type {?} */
        const eventBus = new win.pdfjsViewer.EventBus();
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
        const VIEWER = win.pdfjsViewer;
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
            removePageBorders: this.removePageBorders,
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
        const VIEWER = win.pdfjsViewer;
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
            removePageBorders: this.removePageBorders,
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
        if (win.pdfjsLib) {
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
        fromEvent(win, 'resize')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        () => this.autoresize)), takeUntil(this.unsubscribe$))
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
                template: `<div class="pdfViewer"></div>`,
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
    { type: ElementRef }
];
PdfComponent.propDecorators = {
    src: [{ type: Input }],
    pi: [{ type: Input }],
    showAllPages: [{ type: Input }],
    disableTextLayer: [{ type: Input }],
    removePageBorders: [{ type: Input }],
    stickToPage: [{ type: Input }],
    originalSize: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomScale: [{ type: Input }],
    fitToPage: [{ type: Input }],
    textLayerMode: [{ type: Input }],
    externalLinkTarget: [{ type: Input }],
    rotation: [{ type: Input }],
    autoresize: [{ type: Input }],
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
], PdfComponent.prototype, "showAllPages", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PdfComponent.prototype, "disableTextLayer", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "removePageBorders", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "stickToPage", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "originalSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PdfComponent.prototype, "zoom", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "fitToPage", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PdfComponent.prototype, "rotation", null);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PdfComponent.prototype, "autoresize", void 0);
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
    PdfComponent.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.loadingTask;
    /**
     * @type {?}
     * @private
     */
    PdfComponent.prototype.inited;
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
    PdfComponent.prototype._showAllPages;
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
    PdfComponent.prototype._disableTextLayer;
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
    PdfComponent.prototype.removePageBorders;
    /** @type {?} */
    PdfComponent.prototype.stickToPage;
    /** @type {?} */
    PdfComponent.prototype.originalSize;
    /** @type {?} */
    PdfComponent.prototype.zoomScale;
    /** @type {?} */
    PdfComponent.prototype.fitToPage;
    /** @type {?} */
    PdfComponent.prototype.textLayerMode;
    /** @type {?} */
    PdfComponent.prototype.externalLinkTarget;
    /** @type {?} */
    PdfComponent.prototype.autoresize;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcGRmLyIsInNvdXJjZXMiOlsicGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFnQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFzQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxhQUFhLENBQUM7O01BRWxILEdBQUcsR0FBUSxNQUFNOztNQUNqQixTQUFTLEdBQVcsSUFBSSxHQUFHLElBQUk7O01BQy9CLFlBQVksR0FBVyxDQUFDO0FBYTlCLE1BQU0sT0FBTyxZQUFZOzs7Ozs7OztJQWtHdkIsWUFDVSxNQUFjLEVBQ3RCLFNBQTZCLEVBQ3JCLE9BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLEVBQTJCO1FBSjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFZCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUE3RjdCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEs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bSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUGRmQ29uZmlnLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIExhenlTZXJ2aWNlLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBERl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcGRmLmNvbmZpZyc7XG5pbXBvcnQgeyBQZGZDaGFuZ2VFdmVudCwgUGRmQ2hhbmdlRXZlbnRUeXBlLCBQZGZFeHRlcm5hbExpbmtUYXJnZXQsIFBkZlRleHRMYXllck1vZGUsIFBkZlpvb21TY2FsZSB9IGZyb20gJy4vcGRmLnR5cGVzJztcblxuY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG5jb25zdCBDU1NfVU5JVFM6IG51bWJlciA9IDk2LjAgLyA3Mi4wO1xuY29uc3QgQk9SREVSX1dJRFRIOiBudW1iZXIgPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PmAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnBkZi1jb250YWluZXJdJzogYHRydWVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBkZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BpOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Nob3dBbGxQYWdlczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2tUb1BhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29yaWdpbmFsU2l6ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml0VG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlVGV4dExheWVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZW1vdmVQYWdlQm9yZGVyczogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsaWI6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9wZGY6IGFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluUGRmQ29uZmlnO1xuICBwcml2YXRlIGxvYWRpbmdUYXNrOiBhbnk7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nO1xuICBwcml2YXRlIGxhc3RTcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGkgPSAxO1xuICBwcml2YXRlIF90b3RhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dBbGxQYWdlcyA9IHRydWU7XG4gIHByaXZhdGUgX3JvdGF0aW9uID0gMDtcbiAgcHJpdmF0ZSBfem9vbSA9IDE7XG4gIHByaXZhdGUgX2Rpc2FibGVUZXh0TGF5ZXIgPSBmYWxzZTtcblxuICBwcml2YXRlIG11bHRpUGFnZVZpZXdlcjogYW55O1xuICBwcml2YXRlIG11bHRpUGFnZUxpbmtTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlRmluZENvbnRyb2xsZXI6IGFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlVmlld2VyOiBhbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUxpbmtTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyOiBhbnk7XG5cbiAgQElucHV0KCkgc2V0IHNyYyhkYXRhOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSBkYXRhO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNldCBwaSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BpID0gdGhpcy5nZXRWYWxpZFBpKHZhbCk7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNjcm9sbFBhZ2VJbnRvVmlldyh7IHBhZ2VOdW1iZXI6IHRoaXMuX3BpIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IHNob3dBbGxQYWdlcyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93QWxsUGFnZXMgPSB2YWw7XG4gICAgdGhpcy5yZXNldERvYygpO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXQgZGlzYWJsZVRleHRMYXllcih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlVGV4dExheWVyID0gdmFsO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci50ZXh0TGF5ZXJNb2RlID0gdGhpcy5fdGV4dExheWVyTW9kZTtcbiAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlbW92ZVBhZ2VCb3JkZXJzID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN0aWNrVG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcmlnaW5hbFNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzZXQgem9vbSh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgPD0gMCkgcmV0dXJuO1xuICAgIHRoaXMuX3pvb20gPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgem9vbVNjYWxlOiBQZGZab29tU2NhbGUgPSAncGFnZS13aWR0aCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXRUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgdGV4dExheWVyTW9kZTogUGRmVGV4dExheWVyTW9kZSA9IFBkZlRleHRMYXllck1vZGUuRU5BQkxFO1xuICBASW5wdXQoKSBleHRlcm5hbExpbmtUYXJnZXQ6IFBkZkV4dGVybmFsTGlua1RhcmdldCA9IFBkZkV4dGVybmFsTGlua1RhcmdldC5CTEFOSztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHJvdGF0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAlIDkwICE9PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm90YXRpb24gYW5nbGUsIHNob3VsZSBiZSBkaXZpc2libGUgYnkgOTAuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JvdGF0aW9uID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvcmVzaXplID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHBkZigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wZGY7XG4gIH1cblxuICBnZXQgZmluZENvbnRyb2xsZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbFBhZ2VzID8gdGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA6IHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyO1xuICB9XG5cbiAgZ2V0IHBhZ2VWaWV3ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbFBhZ2VzID8gdGhpcy5tdWx0aVBhZ2VWaWV3ZXIgOiB0aGlzLnNpbmdsZVBhZ2VWaWV3ZXI7XG4gIH1cblxuICBnZXQgbGlua1NlcnZpY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbFBhZ2VzID8gdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA6IHRoaXMuc2luZ2xlUGFnZUxpbmtTZXJ2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RleHRMYXllck1vZGUoKTogUGRmVGV4dExheWVyTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVUZXh0TGF5ZXIgPyBQZGZUZXh0TGF5ZXJNb2RlLkRJU0FCTEUgOiB0aGlzLnRleHRMYXllck1vZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCdwZGYnLCBQREZfREVGVUxBVF9DT05GSUcpITtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29nKTtcblxuICAgIGNvbnN0IGxpYiA9IHRoaXMuY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgd2luLnBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gYCR7dGhpcy5saWJ9YnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfc3JjIH0gPSB0aGlzO1xuICAgIGlmICghdGhpcy5pbml0ZWQgfHwgIV9zcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0U3JjID09PSBfc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgY29uc3QgbG9hZGluZ1Rhc2sgPSAodGhpcy5sb2FkaW5nVGFzayA9IHdpbi5wZGZqc0xpYi5nZXREb2N1bWVudChfc3JjKSk7XG4gICAgICBsb2FkaW5nVGFzay5vblByb2dyZXNzID0gKHByb2dyZXNzOiB7IGxvYWRlZDogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0pID0+IHRoaXMuZW1pdCgnbG9hZC1wcm9ncmVzcycsIHsgcHJvZ3Jlc3MgfSk7XG4gICAgICBsb2FkaW5nVGFzay5wcm9taXNlLnRoZW4oXG4gICAgICAgIChwZGY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BkZiA9IHBkZjtcbiAgICAgICAgICB0aGlzLmxhc3RTcmMgPSBfc3JjO1xuICAgICAgICAgIHRoaXMuX3RvdGFsID0gcGRmLm51bVBhZ2VzO1xuXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnKTtcblxuICAgICAgICAgIGlmICghdGhpcy5wYWdlVmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwUGFnZVZpZXdlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4gdGhpcy5lbWl0KCdlcnJvcicsIHsgZXJyb3IgfSksXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERvYygpOiB2b2lkIHtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgaWYgKCFwZGYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhbkRvYygpO1xuXG4gICAgICB0aGlzLmZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KHBkZik7XG4gICAgICB0aGlzLnBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICAgIHRoaXMubGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQocGRmLCBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Eb2MoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuXG4gICAgdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcbiAgICB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIGlmICghY3VycmVudFZpZXdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yb3RhdGlvbiAhPT0gMCB8fCBjdXJyZW50Vmlld2VyLnBhZ2VzUm90YXRpb24gIT09IHRoaXMuX3JvdGF0aW9uKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uID0gdGhpcy5fcm90YXRpb247XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGlja1RvUGFnZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRWaWV3ZXIgPSB0aGlzLnBhZ2VWaWV3ZXI7XG4gICAgdGhpcy5fcGRmLmdldFBhZ2UoY3VycmVudFZpZXdlci5jdXJyZW50UGFnZU51bWJlcikudGhlbigocGFnZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB7IF9yb3RhdGlvbiwgX3pvb20gfSA9IHRoaXM7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IF9yb3RhdGlvbiB8fCBwYWdlLnJvdGF0ZTtcbiAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPVxuICAgICAgICBwYWdlLmdldFZpZXdwb3J0KHtcbiAgICAgICAgICBzY2FsZTogX3pvb20sXG4gICAgICAgICAgcm90YXRpb24sXG4gICAgICAgIH0pLndpZHRoICogQ1NTX1VOSVRTO1xuICAgICAgbGV0IHNjYWxlID0gX3pvb207XG4gICAgICBsZXQgc3RpY2tUb1BhZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBTY2FsZSB0aGUgZG9jdW1lbnQgd2hlbiBpdCBzaG91bGRuJ3QgYmUgaW4gb3JpZ2luYWwgc2l6ZSBvciBkb2Vzbid0IGZpdCBpbnRvIHRoZSB2aWV3cG9ydFxuICAgICAgaWYgKCF0aGlzLm9yaWdpbmFsU2l6ZSB8fCAodGhpcy5maXRUb1BhZ2UgJiYgdmlld3BvcnRXaWR0aCA+IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEsIHJvdGF0aW9uIH0pO1xuICAgICAgICBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUodmlld1BvcnQud2lkdGgsIHZpZXdQb3J0LmhlaWdodCk7XG4gICAgICAgIHN0aWNrVG9QYWdlID0gIXRoaXMuc3RpY2tUb1BhZ2U7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRWaWV3ZXIuX3NldFNjYWxlKHNjYWxlLCBzdGlja1RvUGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjYWxlKHZpZXdwb3J0V2lkdGg6IG51bWJlciwgdmlld3BvcnRIZWlnaHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9ICF0aGlzLnJlbW92ZVBhZ2VCb3JkZXJzID8gMiAqIEJPUkRFUl9XSURUSCA6IDA7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBlbC5jbGllbnRXaWR0aCAtIGJvcmRlclNpemU7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0IC0gYm9yZGVyU2l6ZTtcblxuICAgIGlmIChjb250YWluZXJIZWlnaHQgPT09IDAgfHwgdmlld3BvcnRIZWlnaHQgPT09IDAgfHwgY29udGFpbmVyV2lkdGggPT09IDAgfHwgdmlld3BvcnRXaWR0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gMTtcbiAgICBzd2l0Y2ggKHRoaXMuem9vbVNjYWxlKSB7XG4gICAgICBjYXNlICdwYWdlLWZpdCc6XG4gICAgICAgIHJhdGlvID0gTWF0aC5taW4oY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQsIGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS1oZWlnaHQnOlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lckhlaWdodCAvIHZpZXdwb3J0SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhZ2Utd2lkdGgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmF0aW8gPSBjb250YWluZXJXaWR0aCAvIHZpZXdwb3J0V2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fem9vbSAqIHJhdGlvKSAvIENTU19VTklUUztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB7IGxvYWRpbmdUYXNrIH0gPSB0aGlzO1xuICAgICAgaWYgKGxvYWRpbmdUYXNrICYmICFsb2FkaW5nVGFzay5kZXN0cm95ZWQpIHtcbiAgICAgICAgbG9hZGluZ1Rhc2suZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgICB0aGlzLl9wZGYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9wZGYgPSBudWxsO1xuICAgICAgICB0aGlzLmNsZWFuRG9jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICB3aW4ucGRmanNMaWIuZGlzYWJsZVRleHRMYXllciA9IHRoaXMuX2Rpc2FibGVUZXh0TGF5ZXI7XG4gICAgd2luLnBkZmpzTGliLmV4dGVybmFsTGlua1RhcmdldCA9IHRoaXMuZXh0ZXJuYWxMaW5rVGFyZ2V0O1xuXG4gICAgdGhpcy5zZXR1cE11bHRpUGFnZVZpZXdlcigpO1xuICAgIHRoaXMuc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV2ZW50QnVzKCk6IGFueSB7XG4gICAgY29uc3QgZXZlbnRCdXMgPSBuZXcgd2luLnBkZmpzVmlld2VyLkV2ZW50QnVzKCk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VzaW5pdGAsIChldjogYW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3BhZ2VzLWluaXQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlcmVuZGVyZWRgLCAoZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlLXJlbmRlcmVkJywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZWNoYW5naW5nYCwgKGV2OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG5vd1BpID0gZXYucGFnZU51bWJlcjtcbiAgICAgIGlmIChub3dQaSAhPT0gdGhpcy5fcGkpIHtcbiAgICAgICAgdGhpcy5fcGkgPSBub3dQaTtcbiAgICAgICAgdGhpcy5lbWl0KCdwaScsIHsgZXYgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHRleHRsYXllcnJlbmRlcmVkYCwgKGV2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgndGV4dC1sYXllci1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50QnVzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE11bHRpUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB3aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1cyxcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXIgPSAodGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSAodGhpcy5tdWx0aVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6IHRoaXMucmVtb3ZlUGFnZUJvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlcixcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHZpZXdlcik7XG4gIH1cblxuICBwcml2YXRlIHNldHVwU2luZ2xlUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB3aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHBhZ2VWaWV3ZXIgPSAodGhpcy5zaW5nbGVQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZTaW5nbGVQYWdlVmlld2VyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogdGhpcy5yZW1vdmVQYWdlQm9yZGVycyxcbiAgICAgIHRleHRMYXllck1vZGU6IHRoaXMuX3RleHRMYXllck1vZGUsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICAgIGZpbmRDb250cm9sbGVyLFxuICAgIH0pKTtcbiAgICBsaW5rU2VydmljZS5zZXRWaWV3ZXIocGFnZVZpZXdlcik7XG4gICAgcGFnZVZpZXdlci5fY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3aW4ucGRmanNMaWIpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbGliIH0gPSB0aGlzO1xuICAgIHRoaXMubGF6eVNydlxuICAgICAgLmxvYWQoYCR7bGlifWJ1aWxkL3BkZi5taW4uanNgKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5U3J2LmxvYWQoW2Ake2xpYn13ZWIvcGRmX3ZpZXdlci5qc2AsIGAke2xpYn13ZWIvcGRmX3ZpZXdlci5jc3NgXSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuaW5pdFJlc2l6ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmcm9tRXZlbnQod2luLCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYXV0b3Jlc2l6ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgUGRmQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkICYmICFjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==