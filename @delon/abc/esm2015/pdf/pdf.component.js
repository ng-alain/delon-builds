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
        // tslint:disable-next-line:no-output-native
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
        win.pdfjsLib.disableTextLayer = !this._renderText;
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
    { type: ElementRef }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcGRmLyIsInNvdXJjZXMiOlsicGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUVwSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFzQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxhQUFhLENBQUM7O01BRWxILEdBQUcsR0FBYyxNQUFNOztNQUN2QixTQUFTLEdBQVcsSUFBSSxHQUFHLElBQUk7O01BQy9CLFlBQVksR0FBVyxDQUFDO0FBZ0I5QixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFpR3ZCLFlBQ1UsTUFBYyxFQUN0QixTQUE2QixFQUNyQixPQUFvQixFQUNwQixRQUFrQixFQUNsQixFQUEyQjtRQUozQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWQsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBNUZyQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ1As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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBMYXp5U2VydmljZSwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUERGX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9wZGYuY29uZmlnJztcbmltcG9ydCB7IFBkZkNoYW5nZUV2ZW50LCBQZGZDaGFuZ2VFdmVudFR5cGUsIFBkZkV4dGVybmFsTGlua1RhcmdldCwgUGRmVGV4dExheWVyTW9kZSwgUGRmWm9vbVNjYWxlIH0gZnJvbSAnLi9wZGYudHlwZXMnO1xuXG5jb25zdCB3aW46IE56U2FmZUFueSA9IHdpbmRvdztcbmNvbnN0IENTU19VTklUUzogbnVtYmVyID0gOTYuMCAvIDcyLjA7XG5jb25zdCBCT1JERVJfV0lEVEg6IG51bWJlciA9IDk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZicsXG4gIGV4cG9ydEFzOiAncGRmJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc2tlbGV0b24gKm5nSWY9XCIhaW5pdGVkXCI+PC9uei1za2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwicGRmVmlld2VyXCI+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnBkZi1jb250YWluZXJdJzogYHRydWVgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBkZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BpOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Nob3dBbGxQYWdlczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2tUb1BhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX29yaWdpbmFsU2l6ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml0VG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlVGV4dExheWVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZW1vdmVQYWdlQm9yZGVyczogQm9vbGVhbklucHV0O1xuXG4gIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbGliOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfcGRmOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbG9hZGluZ1Rhc2s6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBfc3JjOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbGFzdFNyYzogc3RyaW5nO1xuICBwcml2YXRlIF9waSA9IDE7XG4gIHByaXZhdGUgX3RvdGFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd0FsbCA9IHRydWU7XG4gIHByaXZhdGUgX3JvdGF0aW9uID0gMDtcbiAgcHJpdmF0ZSBfem9vbSA9IDE7XG4gIHByaXZhdGUgX3JlbmRlclRleHQgPSB0cnVlO1xuXG4gIHByaXZhdGUgbXVsdGlQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBtdWx0aVBhZ2VGaW5kQ29udHJvbGxlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIHNpbmdsZVBhZ2VWaWV3ZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcblxuICBASW5wdXQoKSBzZXQgc3JjKGRhdGFPckJ1ZmZlcjogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5fc3JjID0gZGF0YU9yQnVmZmVyO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNldCBwaSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BpID0gdGhpcy5nZXRWYWxpZFBpKHZhbCk7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNjcm9sbFBhZ2VJbnRvVmlldyh7IHBhZ2VOdW1iZXI6IHRoaXMuX3BpIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IHNob3dBbGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0FsbCA9IHZhbDtcbiAgICB0aGlzLnJlc2V0RG9jKCk7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCByZW5kZXJUZXh0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbmRlclRleHQgPSB2YWw7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnRleHRMYXllck1vZGUgPSB0aGlzLl90ZXh0TGF5ZXJNb2RlO1xuICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0ZXh0TGF5ZXJNb2RlOiBQZGZUZXh0TGF5ZXJNb2RlID0gUGRmVGV4dExheWVyTW9kZS5FTkFCTEU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Qm9yZGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RpY2tUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9yaWdpbmFsU2l6ZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXRUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHpvb20odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl96b29tID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIHpvb21TY2FsZTogUGRmWm9vbVNjYWxlID0gJ3BhZ2Utd2lkdGgnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzZXQgcm90YXRpb24odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICUgOTAgIT09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3RhdGlvbiBhbmdsZSwgc2hvdWxlIGJlIGRpdmlzaWJsZSBieSA5MC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9SZVNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBleHRlcm5hbExpbmtUYXJnZXQ6IFBkZkV4dGVybmFsTGlua1RhcmdldCA9IFBkZkV4dGVybmFsTGlua1RhcmdldC5CTEFOSztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHBkZigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wZGY7XG4gIH1cblxuICBnZXQgZmluZENvbnRyb2xsZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgOiB0aGlzLnNpbmdsZVBhZ2VGaW5kQ29udHJvbGxlcjtcbiAgfVxuXG4gIGdldCBwYWdlVmlld2VyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZVZpZXdlciA6IHRoaXMuc2luZ2xlUGFnZVZpZXdlcjtcbiAgfVxuXG4gIGdldCBsaW5rU2VydmljZSgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA6IHRoaXMuc2luZ2xlUGFnZUxpbmtTZXJ2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RleHRMYXllck1vZGUoKTogUGRmVGV4dExheWVyTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclRleHQgPyB0aGlzLnRleHRMYXllck1vZGUgOiBQZGZUZXh0TGF5ZXJNb2RlLkRJU0FCTEU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgd2luLnBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gYCR7dGhpcy5saWJ9YnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfc3JjIH0gPSB0aGlzO1xuICAgIGlmICghdGhpcy5pbml0ZWQgfHwgIV9zcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0U3JjID09PSBfc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgY29uc3QgbG9hZGluZ1Rhc2sgPSAodGhpcy5sb2FkaW5nVGFzayA9IHdpbi5wZGZqc0xpYi5nZXREb2N1bWVudChfc3JjKSk7XG4gICAgICBsb2FkaW5nVGFzay5vblByb2dyZXNzID0gKHByb2dyZXNzOiB7IGxvYWRlZDogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0pID0+IHRoaXMuZW1pdCgnbG9hZC1wcm9ncmVzcycsIHsgcHJvZ3Jlc3MgfSk7XG4gICAgICBsb2FkaW5nVGFzay5wcm9taXNlLnRoZW4oXG4gICAgICAgIChwZGY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BkZiA9IHBkZjtcbiAgICAgICAgICB0aGlzLmxhc3RTcmMgPSBfc3JjO1xuICAgICAgICAgIHRoaXMuX3RvdGFsID0gcGRmLm51bVBhZ2VzO1xuXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnKTtcblxuICAgICAgICAgIGlmICghdGhpcy5wYWdlVmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwUGFnZVZpZXdlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IE56U2FmZUFueSkgPT4gdGhpcy5lbWl0KCdlcnJvcicsIHsgZXJyb3IgfSksXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERvYygpOiB2b2lkIHtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgaWYgKCFwZGYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhbkRvYygpO1xuXG4gICAgICB0aGlzLmZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KHBkZik7XG4gICAgICB0aGlzLnBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICAgIHRoaXMubGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQocGRmLCBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Eb2MoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuXG4gICAgdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcbiAgICB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIGlmICghY3VycmVudFZpZXdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yb3RhdGlvbiAhPT0gMCB8fCBjdXJyZW50Vmlld2VyLnBhZ2VzUm90YXRpb24gIT09IHRoaXMuX3JvdGF0aW9uKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uID0gdGhpcy5fcm90YXRpb247XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGlja1RvUGFnZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTaXplKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ZXIgPSB0aGlzLnBhZ2VWaWV3ZXI7XG4gICAgICB0aGlzLl9wZGYuZ2V0UGFnZShjdXJyZW50Vmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKS50aGVuKChwYWdlOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBfcm90YXRpb24sIF96b29tIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCByb3RhdGlvbiA9IF9yb3RhdGlvbiB8fCBwYWdlLnJvdGF0ZTtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9XG4gICAgICAgICAgcGFnZS5nZXRWaWV3cG9ydCh7XG4gICAgICAgICAgICBzY2FsZTogX3pvb20sXG4gICAgICAgICAgICByb3RhdGlvbixcbiAgICAgICAgICB9KS53aWR0aCAqIENTU19VTklUUztcbiAgICAgICAgbGV0IHNjYWxlID0gX3pvb207XG4gICAgICAgIGxldCBzdGlja1RvUGFnZSA9IHRydWU7XG5cbiAgICAgICAgLy8gU2NhbGUgdGhlIGRvY3VtZW50IHdoZW4gaXQgc2hvdWxkbid0IGJlIGluIG9yaWdpbmFsIHNpemUgb3IgZG9lc24ndCBmaXQgaW50byB0aGUgdmlld3BvcnRcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbmFsU2l6ZSB8fCAodGhpcy5maXRUb1BhZ2UgJiYgdmlld3BvcnRXaWR0aCA+IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgICBjb25zdCB2aWV3UG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogMSwgcm90YXRpb24gfSk7XG4gICAgICAgICAgc2NhbGUgPSB0aGlzLmdldFNjYWxlKHZpZXdQb3J0LndpZHRoLCB2aWV3UG9ydC5oZWlnaHQpO1xuICAgICAgICAgIHN0aWNrVG9QYWdlID0gIXRoaXMuc3RpY2tUb1BhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50Vmlld2VyLl9zZXRTY2FsZShzY2FsZSwgc3RpY2tUb1BhZ2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjYWxlKHZpZXdwb3J0V2lkdGg6IG51bWJlciwgdmlld3BvcnRIZWlnaHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9IHRoaXMuc2hvd0JvcmRlcnMgPyAyICogQk9SREVSX1dJRFRIIDogMDtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGVsLmNsaWVudFdpZHRoIC0gYm9yZGVyU2l6ZTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQgLSBib3JkZXJTaXplO1xuXG4gICAgaWYgKGNvbnRhaW5lckhlaWdodCA9PT0gMCB8fCB2aWV3cG9ydEhlaWdodCA9PT0gMCB8fCBjb250YWluZXJXaWR0aCA9PT0gMCB8fCB2aWV3cG9ydFdpZHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSAxO1xuICAgIHN3aXRjaCAodGhpcy56b29tU2NhbGUpIHtcbiAgICAgIGNhc2UgJ3BhZ2UtZml0JzpcbiAgICAgICAgcmF0aW8gPSBNYXRoLm1pbihjb250YWluZXJIZWlnaHQgLyB2aWV3cG9ydEhlaWdodCwgY29udGFpbmVyV2lkdGggLyB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlLWhlaWdodCc6XG4gICAgICAgIHJhdGlvID0gY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS13aWR0aCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLl96b29tICogcmF0aW8pIC8gQ1NTX1VOSVRTO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgbG9hZGluZ1Rhc2sgfSA9IHRoaXM7XG4gICAgICBpZiAobG9hZGluZ1Rhc2sgJiYgIWxvYWRpbmdUYXNrLmRlc3Ryb3llZCkge1xuICAgICAgICBsb2FkaW5nVGFzay5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcGRmKSB7XG4gICAgICAgIHRoaXMuX3BkZi5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3BkZiA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xlYW5Eb2MoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIHdpbi5wZGZqc0xpYi5kaXNhYmxlVGV4dExheWVyID0gIXRoaXMuX3JlbmRlclRleHQ7XG4gICAgd2luLnBkZmpzTGliLmV4dGVybmFsTGlua1RhcmdldCA9IHRoaXMuZXh0ZXJuYWxMaW5rVGFyZ2V0O1xuXG4gICAgdGhpcy5zZXR1cE11bHRpUGFnZVZpZXdlcigpO1xuICAgIHRoaXMuc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV2ZW50QnVzKCk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgZXZlbnRCdXMgPSBuZXcgd2luLnBkZmpzVmlld2VyLkV2ZW50QnVzKCk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VzaW5pdGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3BhZ2VzLWluaXQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlcmVuZGVyZWRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlLXJlbmRlcmVkJywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZWNoYW5naW5nYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGNvbnN0IG5vd1BpID0gZXYucGFnZU51bWJlcjtcbiAgICAgIGlmIChub3dQaSAhPT0gdGhpcy5fcGkpIHtcbiAgICAgICAgdGhpcy5fcGkgPSBub3dQaTtcbiAgICAgICAgdGhpcy5lbWl0KCdwaScsIHsgZXYgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHRleHRsYXllcnJlbmRlcmVkYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgndGV4dC1sYXllci1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50QnVzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cE11bHRpUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB3aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1cyxcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXIgPSAodGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSAodGhpcy5tdWx0aVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXIsXG4gICAgfSkpO1xuICAgIGxpbmtTZXJ2aWNlLnNldFZpZXdlcih2aWV3ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gd2luLnBkZmpzVmlld2VyO1xuXG4gICAgY29uc3QgZXZlbnRCdXMgPSB0aGlzLmNyZWF0ZUV2ZW50QnVzKCk7XG4gICAgY29uc3QgbGlua1NlcnZpY2UgPSAodGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2UgPSBuZXcgVklFV0VSLlBERkxpbmtTZXJ2aWNlKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgIH0pKTtcbiAgICBjb25zdCBmaW5kQ29udHJvbGxlciA9ICh0aGlzLnNpbmdsZVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBwYWdlVmlld2VyID0gKHRoaXMuc2luZ2xlUGFnZVZpZXdlciA9IG5ldyBWSUVXRVIuUERGU2luZ2xlUGFnZVZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXIsXG4gICAgfSkpO1xuICAgIGxpbmtTZXJ2aWNlLnNldFZpZXdlcihwYWdlVmlld2VyKTtcbiAgICBwYWdlVmlld2VyLl9jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuX3BpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbi5wZGZqc0xpYikge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBsaWIgfSA9IHRoaXM7XG4gICAgdGhpcy5sYXp5U3J2XG4gICAgICAubG9hZChgJHtsaWJ9YnVpbGQvcGRmLm1pbi5qc2ApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenlTcnYubG9hZChbYCR7bGlifXdlYi9wZGZfdmlld2VyLmpzYCwgYCR7bGlifXdlYi9wZGZfdmlld2VyLmNzc2BdKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0UmVzaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzaXplKCk6IHZvaWQge1xuICAgIGZyb21FdmVudCh3aW4sICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVTaXplICYmIHRoaXMuX3BkZiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgUGRmQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkICYmICFjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==