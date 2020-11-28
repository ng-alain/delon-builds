import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, NgZone, ElementRef, Input, Output, NgModule } from '@angular/core';
import { AlainConfigService, LazyService, InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: pdf.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PDF_DEFULAT_CONFIG = {
    lib: `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/`,
};

/**
 * @fileoverview added by tsickle
 * Generated from: pdf.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PdfChangeEvent() { }
if (false) {
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.type;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.pi;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.total;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.pdf;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.ev;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.progress;
    /** @type {?|undefined} */
    PdfChangeEvent.prototype.error;
}
/** @enum {number} */
const PdfTextLayerMode = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_ENHANCE: 2,
};
PdfTextLayerMode[PdfTextLayerMode.DISABLE] = 'DISABLE';
PdfTextLayerMode[PdfTextLayerMode.ENABLE] = 'ENABLE';
PdfTextLayerMode[PdfTextLayerMode.ENABLE_ENHANCE] = 'ENABLE_ENHANCE';
/** @enum {number} */
const PdfExternalLinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4,
};
PdfExternalLinkTarget[PdfExternalLinkTarget.NONE] = 'NONE';
PdfExternalLinkTarget[PdfExternalLinkTarget.SELF] = 'SELF';
PdfExternalLinkTarget[PdfExternalLinkTarget.BLANK] = 'BLANK';
PdfExternalLinkTarget[PdfExternalLinkTarget.PARENT] = 'PARENT';
PdfExternalLinkTarget[PdfExternalLinkTarget.TOP] = 'TOP';

/**
 * @fileoverview added by tsickle
 * Generated from: pdf.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const win = window;
/** @type {?} */
const CSS_UNITS = 96.0 / 72.0;
/** @type {?} */
const BORDER_WIDTH = 9;
class PdfComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: pdf.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [PdfComponent];
class PdfModule {
}
PdfModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pdf.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PDF_DEFULAT_CONFIG, PdfComponent, PdfExternalLinkTarget, PdfModule, PdfTextLayerMode };
//# sourceMappingURL=pdf.js.map
